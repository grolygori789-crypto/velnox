#!/usr/bin/env python3
"""Build Velnox Standard Base from Cloudflare Radar Speed Test histograms.

The API token is used only in CI/local execution. The public app receives only
static JSON files generated into benchmarks/.
"""
from __future__ import annotations

import json
import os
import random
import sys
import time
from datetime import datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "benchmarks"
API = "https://api.cloudflare.com/client/v4/radar/quality/speed/histogram"
TOKEN = (os.environ.get("CLOUDFLARE_RADAR_TOKEN") or os.environ.get("CLOUDFLARE_API_TOKEN") or "").strip()
USER_AGENT = "VelnoxBenchmarkSync/1.5"
SCHEMA_VERSION = 3

if not TOKEN:
    raise SystemExit("CLOUDFLARE_RADAR_TOKEN (or CLOUDFLARE_API_TOKEN) is required")


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


def numeric_list(values):
    result = []
    for value in values or []:
        try:
            result.append(float(value))
        except (TypeError, ValueError):
            raise RuntimeError(f"Non-numeric histogram value: {value!r}")
    return result


def first_scalar(value):
    if isinstance(value, list):
        return value[0] if value else None
    return value


def api_request(metric_group: str, location: str | None, bucket_size: int, retries: int = 5):
    params = {
        "format": "JSON",
        "metricGroup": metric_group,
        "bucketSize": int(bucket_size),
    }
    if location:
        params["location"] = location
    url = API + "?" + urlencode(params)
    last_error = None
    for attempt in range(retries):
        req = Request(
            url,
            headers={
                "Authorization": f"Bearer {TOKEN}",
                "Accept": "application/json",
                "User-Agent": USER_AGENT,
            },
        )
        try:
            with urlopen(req, timeout=45) as response:
                payload = json.load(response)
            if not payload.get("success"):
                raise RuntimeError(payload.get("errors") or "Cloudflare Radar request failed")
            result = payload.get("result")
            if not isinstance(result, dict):
                raise RuntimeError("Cloudflare Radar returned no result object")
            return result
        except HTTPError as exc:
            last_error = exc
            if exc.code not in (429, 500, 502, 503, 504) or attempt == retries - 1:
                body = ""
                try:
                    body = exc.read().decode("utf-8", "replace")[:600]
                except Exception:
                    pass
                raise RuntimeError(f"Radar HTTP {exc.code}: {body or exc.reason}") from exc
        except (URLError, TimeoutError) as exc:
            last_error = exc
            if attempt == retries - 1:
                raise RuntimeError(f"Radar network error: {exc}") from exc
        sleep_for = min(12.0, (2 ** attempt) + random.random())
        print(f"Retrying {metric_group} {location or 'GLOBAL'} in {sleep_for:.1f}s ...", file=sys.stderr)
        time.sleep(sleep_for)
    raise RuntimeError(str(last_error or "Radar request failed"))


def histogram_container(result: dict) -> tuple[dict, dict]:
    hist = result.get("histogram_0") or {}
    meta = result.get("meta") or {}
    if not isinstance(hist, dict) or not isinstance(meta, dict):
        raise RuntimeError("Invalid Radar histogram payload")
    return hist, meta


def choose_key(hist: dict, exact: list[str], contains: list[str], exclude: list[str] | None = None) -> str:
    exclude = [x.lower() for x in (exclude or [])]
    keys = [k for k, v in hist.items() if k != "bucketMin" and isinstance(v, list)]
    lower_map = {k.lower(): k for k in keys}
    for wanted in exact:
        if wanted.lower() in lower_map:
            return lower_map[wanted.lower()]
    for key in keys:
        low = key.lower()
        if all(token.lower() in low for token in contains) and not any(x in low for x in exclude):
            return key
    raise RuntimeError(f"Expected histogram series not found. Available keys: {keys}")


def metric_payload(result: dict, key: str, direction: str) -> dict:
    hist, meta = histogram_container(result)
    mins = numeric_list(hist.get("bucketMin"))
    weights = numeric_list(hist.get(key))
    if not mins or len(mins) != len(weights):
        raise RuntimeError(f"Invalid histogram lengths for {key}: {len(mins)} / {len(weights)}")
    if sum(weights) <= 0:
        raise RuntimeError(f"Histogram has no usable weight for {key}")
    bucket_size = float(meta.get("bucketSize") or (mins[1] - mins[0] if len(mins) > 1 else 1))
    if bucket_size <= 0:
        raise RuntimeError(f"Invalid bucket size for {key}: {bucket_size}")
    return {
        "seriesKey": key,
        "direction": direction,
        "bucketSize": bucket_size,
        "bucketMin": mins,
        # Kept as `counts` for app compatibility. Radar may normalize histogram values;
        # percentile math only needs non-negative relative weights.
        "counts": weights,
        "normalization": meta.get("normalization"),
        "totalTests": first_scalar(meta.get("totalTests")),
        "confidenceLevel": (meta.get("confidenceInfo") or {}).get("level"),
        "lastUpdated": meta.get("lastUpdated"),
        "dateRange": meta.get("dateRange") or [],
        "units": meta.get("units") or [],
    }


def latest_timestamp(values) -> str | None:
    parsed = []
    for value in values:
        if not value:
            continue
        try:
            parsed.append((datetime.fromisoformat(str(value).replace("Z", "+00:00")), value))
        except ValueError:
            continue
    return max(parsed, key=lambda x: x[0])[1] if parsed else None


def build_location(location: str | None) -> dict:
    """Build one benchmark location.

    BANDWIDTH is mandatory. LATENCY and JITTER are requested independently and
    included only when Radar returns a usable histogram series. This prevents a
    temporary API/schema mismatch in one metric group from blanking the entire
    Country/Worldwide comparison.
    """
    label = location or "GLOBAL"
    print(f"Fetching {label} ...", flush=True)

    bandwidth = api_request("BANDWIDTH", location, 5)
    bw_hist, _ = histogram_container(bandwidth)
    download_key = choose_key(bw_hist, ["bandwidthDownload", "downloadBandwidth"], ["download"])
    upload_key = choose_key(bw_hist, ["bandwidthUpload", "uploadBandwidth"], ["upload"])

    metrics = {
        "download": metric_payload(bandwidth, download_key, "higher"),
        "upload": metric_payload(bandwidth, upload_key, "higher"),
    }
    warnings: dict[str, str] = {}

    optional_groups = [
        ("LATENCY", 2, "latency", ["latencyIdle", "latencyUnloaded", "unloadedLatency"], ["latency"], ["loaded"], "lower"),
        ("JITTER", 1, "jitter", ["jitterIdle", "jitterUnloaded", "unloadedJitter"], ["jitter"], ["loaded"], "lower"),
    ]
    for group, bucket_size, out_key, exact, contains, exclude, direction in optional_groups:
        try:
            time.sleep(0.18)
            result = api_request(group, location, bucket_size)
            hist, _ = histogram_container(result)
            series_key = choose_key(hist, exact, contains, exclude=exclude)
            metrics[out_key] = metric_payload(result, series_key, direction)
        except Exception as exc:
            warnings[out_key] = str(exc)[:400]
            print(f"WARN {label} {out_key}: {exc}", file=sys.stderr)

    last_updated = latest_timestamp([m.get("lastUpdated") for m in metrics.values()])
    date_ranges = [m.get("dateRange") for m in metrics.values() if m.get("dateRange")]
    return {
        "schemaVersion": SCHEMA_VERSION,
        "location": label,
        "source": "Cloudflare Radar",
        "sourceEndpoint": "/radar/quality/speed/histogram",
        "sourceUrl": "https://developers.cloudflare.com/api/resources/radar/subresources/quality/subresources/speed/methods/histogram/",
        "windowDays": 90,
        "lastUpdated": last_updated,
        "generatedAt": utc_now(),
        "metricsAvailable": sorted(metrics.keys()),
        "partial": len(metrics) < 4,
        "warnings": warnings,
        "dateRanges": date_ranges,
        "metrics": metrics,
    }

def requested_countries() -> list[str]:
    raw = os.environ.get("VELNOX_COUNTRIES", "ALL").strip() or "ALL"
    if raw.upper() == "ALL":
        return [
            line.strip().upper()
            for line in (ROOT / "scripts" / "countries.txt").read_text(encoding="utf-8").splitlines()
            if len(line.strip()) == 2
        ]
    requested = {code.strip().upper() for code in raw.split(",") if len(code.strip()) == 2}
    requested.add("TH")  # Velnox launch/home market; harmless for worldwide deployments.
    return sorted(requested)


def write_json_atomic(path: Path, payload: dict, pretty: bool = False):
    tmp = path.with_suffix(path.suffix + ".tmp")
    kwargs = {"ensure_ascii": False}
    if pretty:
        kwargs["indent"] = 2
    else:
        kwargs["separators"] = (",", ":")
    tmp.write_text(json.dumps(payload, **kwargs), encoding="utf-8")
    tmp.replace(path)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    generated_at = utc_now()

    # Global benchmark is mandatory. If it fails, abort without publishing a new index.
    global_data = build_location(None)
    write_json_atomic(OUT / "global.json", global_data)

    completed: list[str] = []
    failed: dict[str, str] = {}
    for code in requested_countries():
        try:
            data = build_location(code)
            write_json_atomic(OUT / f"{code}.json", data)
            completed.append(code)
        except Exception as exc:
            failed[code] = str(exc)[:500]
            print(f"WARN {code}: {exc}", file=sys.stderr)
        time.sleep(0.16)

    index = {
        "schemaVersion": SCHEMA_VERSION,
        "ready": True,
        "source": "Cloudflare Radar",
        "windowDays": 90,
        "lastUpdated": global_data.get("lastUpdated"),
        "generatedAt": generated_at,
        "countries": completed,
        "failed": failed,
        "countryCount": len(completed),
        "globalPartial": bool(global_data.get("partial")),
        "globalMetricsAvailable": global_data.get("metricsAvailable", []),
    }
    write_json_atomic(OUT / "index.json", index, pretty=True)
    print(f"Generated global + {len(completed)} country benchmark files; {len(failed)} failed.")


if __name__ == "__main__":
    main()
