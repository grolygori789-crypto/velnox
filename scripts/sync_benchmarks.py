#!/usr/bin/env python3
"""Generate static Velnox Standard Base files from Cloudflare Radar.

The client app never receives the API token. Run this script in GitHub Actions
(or locally) and publish only the generated JSON files.
"""
from __future__ import annotations
import json, os, sys, time
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen
from datetime import datetime, timezone

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'benchmarks'
API='https://api.cloudflare.com/client/v4/radar/quality/speed/histogram'
TOKEN=os.environ.get('CLOUDFLARE_RADAR_TOKEN','').strip()
if not TOKEN:
    raise SystemExit('CLOUDFLARE_RADAR_TOKEN is required')

def request_histogram(metric_group:str, location:str|None, bucket_size:float):
    params={'format':'JSON','metricGroup':metric_group,'bucketSize':bucket_size}
    if location: params['location']=location
    req=Request(API+'?'+urlencode(params),headers={
        'Authorization':f'Bearer {TOKEN}',
        'Accept':'application/json',
        'User-Agent':'VelnoxBenchmarkSync/1.2'
    })
    with urlopen(req,timeout=45) as r:
        data=json.load(r)
    if not data.get('success'):
        raise RuntimeError(data.get('errors') or 'Cloudflare Radar request failed')
    return data['result']

def numeric_list(values):
    out=[]
    for v in values or []:
        try: out.append(float(v))
        except Exception: out.append(0.0)
    return out

def choose_series(hist:dict, kind:str):
    keys=[k for k,v in hist.items() if k!='bucketMin' and isinstance(v,list)]
    low=kind.lower()
    candidates=[k for k in keys if low in k.lower()]
    if not candidates:
        candidates=keys
    # Prefer idle/unloaded for latency/jitter because Velnox compares idle metrics.
    if kind in ('latency','jitter'):
        preferred=[k for k in candidates if ('idle' in k.lower() or 'unload' in k.lower()) and 'load' not in k.lower().replace('unloaded','')]
        if preferred: return preferred[0]
        nonloaded=[k for k in candidates if 'loaded' not in k.lower()]
        if nonloaded: return nonloaded[0]
    return candidates[0] if candidates else None

def metric_from_result(result:dict, kind:str, direction:str):
    hist=result.get('histogram_0') or {}
    key=choose_series(hist,kind)
    if not key:
        raise RuntimeError(f'No {kind} histogram series. Keys={list(hist)}')
    mins=numeric_list(hist.get('bucketMin'))
    counts=numeric_list(hist.get(key))
    if not mins or not counts or len(mins)!=len(counts):
        raise RuntimeError(f'Invalid {kind} histogram lengths')
    meta=result.get('meta') or {}
    return {
        'seriesKey':key,
        'direction':direction,
        'bucketSize':float(meta.get('bucketSize') or (mins[1]-mins[0] if len(mins)>1 else 1)),
        'bucketMin':mins,
        'counts':counts,
        'totalTests':(meta.get('totalTests') or [None])[0],
        'confidenceLevel':((meta.get('confidenceInfo') or {}).get('level')),
        'lastUpdated':meta.get('lastUpdated')
    }

def newest_timestamp(values):
    vals=[v for v in values if v]
    if not vals:return None
    def parse(x):
        try:return datetime.fromisoformat(x.replace('Z','+00:00'))
        except Exception:return datetime.min.replace(tzinfo=timezone.utc)
    return max(vals,key=parse)

def build_location(location:str|None):
    label=location or 'GLOBAL'
    print(f'Fetching {label} ...',flush=True)
    bw=request_histogram('BANDWIDTH',location,10)
    time.sleep(.12)
    lat=request_histogram('LATENCY',location,5)
    time.sleep(.12)
    jit=request_histogram('JITTER',location,5)
    # Bandwidth contains both download and upload, so select explicitly.
    bh=bw.get('histogram_0') or {}
    meta=bw.get('meta') or {}
    mins=numeric_list(bh.get('bucketMin'))
    def bandwidth_metric(which):
        key=next((k for k in bh if k!='bucketMin' and which in k.lower()),None)
        if not key: raise RuntimeError(f'No bandwidth {which} series. Keys={list(bh)}')
        counts=numeric_list(bh[key])
        return {
          'seriesKey':key,'direction':'higher','bucketSize':float(meta.get('bucketSize') or 10),
          'bucketMin':mins,'counts':counts,'totalTests':(meta.get('totalTests') or [None])[0],
          'confidenceLevel':((meta.get('confidenceInfo') or {}).get('level')),'lastUpdated':meta.get('lastUpdated')
        }
    metrics={
      'download':bandwidth_metric('download'),
      'upload':bandwidth_metric('upload'),
      'latency':metric_from_result(lat,'latency','lower'),
      'jitter':metric_from_result(jit,'jitter','lower')
    }
    last=newest_timestamp([m.get('lastUpdated') for m in metrics.values()])
    return {
      'schemaVersion':1,
      'location':label,
      'source':'Cloudflare Radar',
      'sourceEndpoint':'radar/quality/speed/histogram',
      'windowDays':90,
      'lastUpdated':last,
      'generatedAt':datetime.now(timezone.utc).isoformat().replace('+00:00','Z'),
      'metrics':metrics
    }

def requested_countries():
    raw=os.environ.get('VELNOX_COUNTRIES','').strip()
    if not raw:
        # Small useful starter set. Set repository variable VELNOX_COUNTRIES=ALL
        # to generate every ISO alpha-2 location in scripts/countries.txt.
        raw='TH,SG,US,GB,AU,JP,KR,DE,FR,NL,CA'
    if raw.upper()=='ALL':
        return [x.strip().upper() for x in (ROOT/'scripts/countries.txt').read_text().splitlines() if x.strip()]
    return sorted({x.strip().upper() for x in raw.split(',') if len(x.strip())==2})

def main():
    OUT.mkdir(parents=True,exist_ok=True)
    completed=[];failed={}
    global_data=build_location(None)
    (OUT/'global.json').write_text(json.dumps(global_data,separators=(',',':')),encoding='utf-8')
    for code in requested_countries():
        try:
            data=build_location(code)
            (OUT/f'{code}.json').write_text(json.dumps(data,separators=(',',':')),encoding='utf-8')
            completed.append(code)
        except Exception as e:
            failed[code]=str(e)
            print(f'WARN {code}: {e}',file=sys.stderr)
        time.sleep(.12)
    idx={
      'schemaVersion':1,'ready':True,'source':'Cloudflare Radar','windowDays':90,
      'lastUpdated':global_data.get('lastUpdated'),'generatedAt':datetime.now(timezone.utc).isoformat().replace('+00:00','Z'),
      'countries':completed,'failed':failed
    }
    (OUT/'index.json').write_text(json.dumps(idx,indent=2),encoding='utf-8')
    print(f'Generated global + {len(completed)} country benchmark files; {len(failed)} failed.')

if __name__=='__main__':main()
