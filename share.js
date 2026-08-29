(() => {
  'use strict';

  const VERSION = '1.9.0';
  const APP_URL = 'https://grolygori789-crypto.github.io/velnox/';
  const STUDIO = 'Benedict Interactive';
  const STUDIO_LOCATION = 'Bangkok, Thailand';
  const SHARE_SIZE = { width: 1080, height: 1350 };

  const TEXT = {
    en: {
      shareResult: 'SHARE RESULT', share: 'SHARE RESULT', shareShort: 'SHARE', download: 'DOWNLOAD IMAGE',
      title: 'Share your Velnox result', subtitle: 'A private, on-device result card', preparing: 'Preparing your share card…', ready: 'Ready to share.',
      historical: 'Saved result · benchmark standing is not stored in History, so this card uses the saved measurement only.',
      unavailable: 'Direct image sharing is not available in this browser. You can download the card instead.',
      metrics: 'Exact metrics', metricsSub: 'Download, upload, ping and jitter', country: 'Country standing', countrySub: 'Estimated benchmark for the detected country', global: 'Worldwide standing', globalSub: 'Estimated worldwide benchmark',
      privacy: 'Generated on this device. No raw IP, saved history, or precise location is included in the card.',
      saved: 'Image saved or opened by your browser.', failed: 'Could not prepare the share card. Please try again.',
      score: 'VELNOX SCORE', measured: 'NETWORK RESULT', downloadLabel: 'DOWNLOAD', uploadLabel: 'UPLOAD', pingLabel: 'PING', jitterLabel: 'JITTER',
      countryLabel: 'COUNTRY', worldwideLabel: 'WORLDWIDE', benchmark: 'Estimated benchmark · Cloudflare Radar',
      historicalCard: 'SAVED MEASUREMENT', measuredWith: 'Measured with Velnox Network Intelligence',
      gold: 'GOLD TURTLE', silver: 'SILVER TURTLE', bronze: 'BRONZE TURTLE', attention: 'NEEDS ATTENTION',
      directShare: 'Share this image through your device', noRank: 'Benchmark standing not stored for historical results'
    },
    th: {
      shareResult: 'แชร์ผลลัพธ์', share: 'แชร์ผลลัพธ์', shareShort: 'แชร์', download: 'ดาวน์โหลดรูป',
      title: 'แชร์ผล Velnox ของคุณ', subtitle: 'การ์ดผลลัพธ์สร้างบนอุปกรณ์นี้', preparing: 'กำลังเตรียมการ์ดสำหรับแชร์…', ready: 'พร้อมแชร์แล้ว',
      historical: 'ผลที่บันทึกไว้ · History ไม่ได้เก็บอันดับ Benchmark ณ เวลานั้น การ์ดนี้จึงใช้เฉพาะผลวัดที่บันทึกไว้',
      unavailable: 'เบราว์เซอร์นี้ไม่รองรับการแชร์รูปโดยตรง สามารถดาวน์โหลดการ์ดแทนได้',
      metrics: 'ค่าการวัดแบบละเอียด', metricsSub: 'ดาวน์โหลด อัปโหลด Ping และ Jitter', country: 'อันดับในประเทศ', countrySub: 'Benchmark โดยประมาณของประเทศที่ตรวจพบ', global: 'อันดับทั่วโลก', globalSub: 'Benchmark โดยประมาณทั่วโลก',
      privacy: 'สร้างบนอุปกรณ์นี้ ไม่ใส่ raw IP ประวัติที่บันทึกไว้ หรือตำแหน่งแบบละเอียดลงในการ์ด',
      saved: 'บันทึกหรือเปิดรูปผ่านเบราว์เซอร์แล้ว', failed: 'ไม่สามารถเตรียมการ์ดสำหรับแชร์ได้ กรุณาลองอีกครั้ง',
      score: 'คะแนน VELNOX', measured: 'ผลการวัดเครือข่าย', downloadLabel: 'ดาวน์โหลด', uploadLabel: 'อัปโหลด', pingLabel: 'PING', jitterLabel: 'JITTER',
      countryLabel: 'ประเทศ', worldwideLabel: 'ทั่วโลก', benchmark: 'Benchmark โดยประมาณ · Cloudflare Radar',
      historicalCard: 'ผลวัดที่บันทึกไว้', measuredWith: 'วัดด้วย Velnox Network Intelligence',
      gold: 'เต่าเหรียญทอง', silver: 'เต่าเหรียญเงิน', bronze: 'เต่าเหรียญทองแดง', attention: 'ควรตรวจสอบ',
      directShare: 'แชร์รูปนี้ผ่านอุปกรณ์ของคุณ', noRank: 'History ไม่ได้เก็บอันดับ Benchmark ของผลเก่า'
    }
  };

  const S = { root:null, data:null, blob:null, objectUrl:null, rendering:0, historyObserver:null, langObserver:null };
  const L = () => document.documentElement.lang?.toLowerCase().startsWith('th') ? 'th' : 'en';
  const t = k => TEXT[L()][k] ?? TEXT.en[k] ?? k;
  const byId = id => document.getElementById(id);
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const safeNum = v => { const n = Number.parseFloat(String(v ?? '').replace(/,/g,'')); return Number.isFinite(n) ? n : null; };
  const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  function historyData(){ try { const x = JSON.parse(localStorage.getItem('velnox.history') || '[]'); return Array.isArray(x) ? x : []; } catch { return []; } }
  function tierMeta(score){
    score = Number(score) || 0;
    if(score >= 85) return { key:'gold', label:t('gold'), color:'#d8b762' };
    if(score >= 68) return { key:'silver', label:t('silver'), color:'#c7d0db' };
    if(score >= 50) return { key:'bronze', label:t('bronze'), color:'#c57a48' };
    return { key:'attention', label:t('attention'), color:'#e56c7b' };
  }
  function fmtSpeed(v){ if(!Number.isFinite(v)) return '—'; return v >= 100 ? String(Math.round(v)) : v >= 10 ? v.toFixed(1).replace(/\.0$/,'') : v.toFixed(2).replace(/0+$/,'').replace(/\.$/,''); }
  function fmtOne(v){ return Number.isFinite(v) ? v.toFixed(1).replace(/\.0$/,'') : '—'; }

  function readCurrentResult(){
    const score = safeNum(byId('scoreValue')?.textContent);
    const data = {
      source:'current', historical:false,
      score: score == null ? 0 : Math.round(score),
      download:safeNum(byId('resultDown')?.textContent), upload:safeNum(byId('resultUp')?.textContent),
      ping:safeNum(byId('resultPing')?.textContent), jitter:safeNum(byId('resultJitter')?.textContent),
      ts: Date.now(), country:null, global:null
    };
    return data;
  }

  function readHistoricalResult(index){
    const r = historyData()[index]; if(!r) return null;
    return { source:'history', historical:true, score:Number(r.score)||0, download:Number(r.download), upload:Number(r.upload), ping:Number(r.ping), jitter:Number(r.jitter), ts:Number(r.ts)||Date.now(), country:null, global:null };
  }

  function benchmarkValueFromHost(scope){
    const host = byId('compareContent'); if(!host) return null;
    const hero = host.querySelector('.benchmark-rank-hero'); if(!hero) return null;
    const rankText = hero.querySelector('.premium-rank-value')?.textContent || hero.querySelector('.benchmark-top strong')?.textContent || '';
    const m = rankText.match(/(<\s*1|\d+)\s*%/i); if(!m) return null;
    const name = hero.querySelector('.benchmark-location b')?.textContent?.trim() || (scope === 'global' ? 'Worldwide' : '—');
    const flag = hero.querySelector('.benchmark-flag')?.textContent?.trim() || (scope === 'global' ? '◎' : '');
    return { top:m[0].replace(/\s+/g,''), name, flag };
  }

  async function waitBenchmark(scope, timeout=4500){
    const started = performance.now();
    while(performance.now() - started < timeout){
      const v = benchmarkValueFromHost(scope); if(v) return v;
      await sleep(60);
    }
    return null;
  }

  async function captureBenchmarkModes(){
    const countryBtn = byId('compareCountryBtn'), globalBtn = byId('compareGlobalBtn');
    if(!countryBtn || !globalBtn || !byId('compareContent')) return {country:null,global:null};
    const original = globalBtn.classList.contains('active') ? 'global' : 'country';
    const read = async scope => {
      const btn = scope === 'global' ? globalBtn : countryBtn;
      if(!btn.classList.contains('active')){ btn.click(); await sleep(40); }
      return await waitBenchmark(scope);
    };
    let country=null, global=null;
    try { country = await read('country'); global = await read('global'); }
    finally {
      const restore = original === 'global' ? globalBtn : countryBtn;
      if(!restore.classList.contains('active')){ restore.click(); await sleep(40); await waitBenchmark(original,1800); }
    }
    return {country,global};
  }

  function ensureRoot(){
    if(S.root) return S.root;
    const root = document.createElement('div'); root.id='vshareRoot'; root.className='vshare-backdrop'; root.hidden=true;
    root.innerHTML = `<section class="vshare-sheet" role="dialog" aria-modal="true" aria-labelledby="vshareTitle">
      <header class="vshare-head"><div class="vshare-head-lockup"><img src="assets/velnox-mark.svg" alt="" aria-hidden="true"><div><b id="vshareTitle"></b><small id="vshareSubtitle"></small></div></div><button class="vshare-close" id="vshareClose" type="button" aria-label="Close">×</button></header>
      <p class="vshare-status" id="vshareStatus"></p>
      <div class="vshare-preview is-loading" id="vsharePreview"><img id="vsharePreviewImage" alt="Velnox result share card"></div>
      <div class="vshare-options">
        <label class="vshare-option"><div><b id="vshareMetricsLabel"></b><small id="vshareMetricsSub"></small></div><span class="vshare-switch"><input id="vshareMetrics" type="checkbox" checked><span></span></span></label>
        <label class="vshare-option" id="vshareCountryRow"><div><b id="vshareCountryLabel"></b><small id="vshareCountrySub"></small></div><span class="vshare-switch"><input id="vshareCountry" type="checkbox"><span></span></span></label>
        <label class="vshare-option" id="vshareGlobalRow"><div><b id="vshareGlobalLabel"></b><small id="vshareGlobalSub"></small></div><span class="vshare-switch"><input id="vshareGlobal" type="checkbox"><span></span></span></label>
      </div>
      <p class="vshare-privacy"><i>◇</i><span id="vsharePrivacy"></span></p>
      <div class="vshare-actions"><button class="vshare-download" id="vshareDownload" type="button"></button><button class="vshare-primary" id="vsharePrimary" type="button"></button></div>
    </section>`;
    document.body.appendChild(root); S.root=root;
    byId('vshareClose').addEventListener('click',close);
    root.addEventListener('click',e=>{ if(e.target===root) close(); });
    ['vshareMetrics','vshareCountry','vshareGlobal'].forEach(id=>byId(id).addEventListener('change',()=>regenerate()));
    byId('vshareDownload').addEventListener('click',downloadCard);
    byId('vsharePrimary').addEventListener('click',shareOrDownload);
    document.addEventListener('keydown',e=>{ if(!root.hidden && e.key==='Escape'){ e.preventDefault(); close(); } });
    refreshCopy(); return root;
  }

  function refreshCopy(){
    const btn=byId('shareResultBtn'); if(btn){const s=btn.querySelector('span');if(s)s.textContent=t('shareResult');btn.setAttribute('aria-label',t('shareResult'));}
    document.querySelectorAll('.vshare-history-btn').forEach(b=>{b.textContent=t('shareShort');b.setAttribute('aria-label',t('shareResult'));});
    if(!S.root)return;
    byId('vshareTitle').textContent=t('title'); byId('vshareSubtitle').textContent=t('subtitle');
    byId('vshareMetricsLabel').textContent=t('metrics'); byId('vshareMetricsSub').textContent=t('metricsSub');
    byId('vshareCountryLabel').textContent=t('country'); byId('vshareCountrySub').textContent=t('countrySub');
    byId('vshareGlobalLabel').textContent=t('global'); byId('vshareGlobalSub').textContent=t('globalSub');
    byId('vsharePrivacy').textContent=t('privacy'); byId('vshareDownload').textContent=t('download');
  }

  function setStatus(text,error=false){const n=byId('vshareStatus');if(!n)return;n.textContent=text||'';n.classList.toggle('is-error',!!error)}
  function setLoading(v){byId('vsharePreview')?.classList.toggle('is-loading',!!v);byId('vshareDownload').disabled=!!v;byId('vsharePrimary').disabled=!!v}
  function canFileShare(blob=S.blob){
    if(!blob || typeof File==='undefined' || typeof navigator.share!=='function' || typeof navigator.canShare!=='function') return false;
    try { const f=new File([blob],'velnox-result.png',{type:'image/png'}); return navigator.canShare({files:[f]}); } catch { return false; }
  }
  function updateActions(){
    const direct=canFileShare(); const primary=byId('vsharePrimary'), dl=byId('vshareDownload'); if(!primary||!dl)return;
    primary.textContent=direct?t('share'):t('download'); primary.dataset.fallback=direct?'share':'download'; dl.hidden=!direct;
    if(!direct && S.blob) setStatus(t('unavailable'));
    else if(S.blob) setStatus(S.data?.historical?t('historical'):t('ready'));
  }

  async function openCurrent(){
    const root=ensureRoot(); root.hidden=false; requestAnimationFrame(()=>root.classList.add('is-visible')); setLoading(true); setStatus(t('preparing'));
    // The score reveal animates independently from the result DOM. Give it a short,
    // deterministic settle window so the exported card never captures a partial score.
    await sleep(900);
    const data=readCurrentResult();
    const ranks=await captureBenchmarkModes(); data.country=ranks.country; data.global=ranks.global;
    await prepare(data);
  }
  async function openHistory(index){
    const data=readHistoricalResult(index); if(!data)return;
    const root=ensureRoot();root.hidden=false;requestAnimationFrame(()=>root.classList.add('is-visible'));setLoading(true);setStatus(t('preparing'));
    await prepare(data);
  }
  function close(){
    if(!S.root||S.root.hidden)return;S.root.classList.remove('is-visible');setTimeout(()=>{if(S.root)S.root.hidden=true},200);
  }

  async function prepare(data){
    S.data=data;
    const c=byId('vshareCountry'),g=byId('vshareGlobal'),m=byId('vshareMetrics');
    m.checked=true;c.checked=!!data.country;g.checked=!!data.global;c.disabled=!data.country;g.disabled=!data.global;
    byId('vshareCountryRow').classList.toggle('is-disabled',!data.country);byId('vshareGlobalRow').classList.toggle('is-disabled',!data.global);
    await regenerate();
  }

  async function regenerate(){
    if(!S.data)return;const token=++S.rendering;setLoading(true);
    try{
      const opts={metrics:byId('vshareMetrics')?.checked!==false,country:!!byId('vshareCountry')?.checked,global:!!byId('vshareGlobal')?.checked};
      const canvas=await drawShareCard(S.data,opts); if(token!==S.rendering)return;
      const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error('canvas blob failed')),'image/png',.96)); if(token!==S.rendering)return;
      if(S.objectUrl)URL.revokeObjectURL(S.objectUrl);S.blob=blob;S.objectUrl=URL.createObjectURL(blob);byId('vsharePreviewImage').src=S.objectUrl;setLoading(false);updateActions();
    }catch(e){console.error('[Velnox Share]',e);if(token!==S.rendering)return;setLoading(false);setStatus(t('failed'),true)}
  }

  function rounded(ctx,x,y,w,h,r){r=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
  function fillRound(ctx,x,y,w,h,r,fill,stroke=null){rounded(ctx,x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1.4;ctx.stroke()}}
  function trackText(ctx,text,x,y,spacing){let pos=x;for(const ch of String(text)){ctx.fillText(ch,pos,y);pos+=ctx.measureText(ch).width+spacing}return pos}
  function fitText(ctx,text,maxWidth,start,min=24){let size=start;while(size>min){ctx.font=`600 ${size}px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif`;if(ctx.measureText(text).width<=maxWidth)break;size-=1}return size}
  function wrap(ctx,text,maxWidth){const words=String(text).split(/\s+/);const lines=[];let line='';for(const w of words){const t=line?`${line} ${w}`:w;if(ctx.measureText(t).width>maxWidth&&line){lines.push(line);line=w}else line=t}if(line)lines.push(line);return lines}
  function drawWrapped(ctx,text,x,y,maxWidth,lineHeight,maxLines=3){const lines=wrap(ctx,text,maxWidth).slice(0,maxLines);lines.forEach((l,i)=>ctx.fillText(l,x,y+i*lineHeight));return y+lines.length*lineHeight}
  function loadMark(){return new Promise(resolve=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>resolve(null);img.src='assets/velnox-mark.svg'})}
  function drawFallbackMark(ctx,x,y,s){ctx.save();ctx.translate(x,y);ctx.strokeStyle='#d8b762';ctx.lineWidth=s*.035;ctx.beginPath();ctx.arc(s*.5,s*.5,s*.36,Math.PI*.15,Math.PI*.85,true);ctx.stroke();ctx.strokeStyle='#5fe1e7';ctx.lineWidth=s*.13;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(s*.22,s*.28);ctx.lineTo(s*.5,s*.77);ctx.lineTo(s*.78,s*.28);ctx.stroke();ctx.restore()}

  function fitRankName(ctx,text,maxWidth,start=22,min=14){
    const value=String(text||'—').trim()||'—';
    let size=start;
    while(size>min){
      ctx.font=`560 ${size}px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif`;
      if(ctx.measureText(value).width<=maxWidth)return {text:value,size};
      size-=1;
    }
    ctx.font=`560 ${min}px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif`;
    if(ctx.measureText(value).width<=maxWidth)return {text:value,size:min};
    let out=value;
    while(out.length>1&&ctx.measureText(`${out}…`).width>maxWidth)out=out.slice(0,-1);
    return {text:`${out}…`,size:min};
  }
  function drawRankIdentity(ctx,r,x,y,width){
    const right=x+width-24;
    const identityLeft=x+(width===456?236:470);
    const flag=String(r.flag||'').trim();
    const gap=flag?10:0;
    ctx.save();
    ctx.beginPath();ctx.rect(identityLeft,y+52,Math.max(0,right-identityLeft),54);ctx.clip();
    const flagWidth=flag?32:0;
    const nameMax=Math.max(42,right-identityLeft-flagWidth-gap);
    const fitted=fitRankName(ctx,r.name,nameMax,22,14);
    ctx.font=`560 ${fitted.size}px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif`;
    const nameWidth=Math.min(nameMax,ctx.measureText(fitted.text).width);
    const groupWidth=flagWidth+gap+nameWidth;
    const groupX=Math.max(identityLeft,right-groupWidth);
    if(flag){
      ctx.fillStyle='#f0f4f5';
      ctx.font='500 22px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",system-ui,sans-serif';
      ctx.textAlign='left';ctx.fillText(flag,groupX,y+89);
    }
    ctx.fillStyle='#cbd6da';
    ctx.font=`560 ${fitted.size}px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif`;
    ctx.textAlign='left';ctx.fillText(fitted.text,groupX+flagWidth+gap,y+89);
    ctx.restore();ctx.textAlign='left';
  }

  async function drawShareCard(data,opts){
    const W=SHARE_SIZE.width,H=SHARE_SIZE.height,c=document.createElement('canvas');c.width=W;c.height=H;const ctx=c.getContext('2d',{alpha:false});
    const bg=ctx.createLinearGradient(0,0,0,H);bg.addColorStop(0,'#071018');bg.addColorStop(.55,'#050a0f');bg.addColorStop(1,'#030609');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
    const glow=ctx.createRadialGradient(860,110,10,860,110,620);glow.addColorStop(0,'rgba(75,210,218,.12)');glow.addColorStop(.45,'rgba(75,210,218,.035)');glow.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,W,H);
    const goldGlow=ctx.createRadialGradient(180,560,10,180,560,420);goldGlow.addColorStop(0,'rgba(216,183,98,.08)');goldGlow.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=goldGlow;ctx.fillRect(0,0,W,H);
    ctx.strokeStyle='rgba(216,183,98,.20)';ctx.lineWidth=2;rounded(ctx,38,38,W-76,H-76,36);ctx.stroke();

    const mark=await loadMark(); if(mark)ctx.drawImage(mark,72,70,108,108);else drawFallbackMark(ctx,72,70,108);
    ctx.fillStyle='#f3f7f8';ctx.font='650 46px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';trackText(ctx,'VELNOX',205,112,9);
    ctx.fillStyle='#67dce2';ctx.font='700 19px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';trackText(ctx,'NETWORK INTELLIGENCE',207,151,4.2);
    ctx.fillStyle='#788a9b';ctx.font='520 21px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif';ctx.fillText(data.historical?t('historicalCard'):t('measured'),74,215);

    const tier=tierMeta(data.score);fillRound(ctx,72,250,936,244,30,'rgba(13,21,29,.86)','rgba(255,255,255,.07)');
    ctx.fillStyle=tier.color;ctx.font='760 20px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif';trackText(ctx,tier.label.toUpperCase(),105,298,2.2);
    ctx.fillStyle='#eef5f6';ctx.font='590 128px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';ctx.fillText(String(Math.round(data.score||0)),102,424);
    ctx.fillStyle='#8292a3';ctx.font='540 32px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';ctx.fillText('/ 100',270,424);
    ctx.fillStyle='#758799';ctx.font='700 19px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif';trackText(ctx,t('score'),105,463,2.4);
    ctx.strokeStyle='rgba(216,183,98,.16)';ctx.beginPath();ctx.moveTo(610,290);ctx.lineTo(610,454);ctx.stroke();
    ctx.fillStyle='#89a0ae';ctx.font='560 20px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif';
    drawWrapped(ctx,data.historical?t('historicalCard'):t('measuredWith'),654,330,300,27,2);
    if(data.ts){const date=new Date(data.ts);ctx.fillStyle='#657789';ctx.font='500 19px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif';ctx.fillText(date.toLocaleString(L()==='th'?'th-TH':'en-GB',{dateStyle:'medium',timeStyle:'short'}),654,395)}
    ctx.fillStyle='#6fe4e9';ctx.font='650 19px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';ctx.fillText('PRIVATE BY DESIGN',654,440);

    let y=526;
    if(opts.metrics){
      const cards=[
        [t('downloadLabel'),fmtSpeed(data.download),'Mbps','↓'],[t('uploadLabel'),fmtSpeed(data.upload),'Mbps','↑'],[t('pingLabel'),fmtOne(data.ping),'ms','◷'],[t('jitterLabel'),fmtOne(data.jitter),'ms','≈']
      ];
      cards.forEach((it,i)=>{const col=i%2,row=Math.floor(i/2),x=72+col*472,cy=y+row*176;fillRound(ctx,x,cy,448,154,24,'rgba(13,20,28,.72)','rgba(111,228,233,.075)');ctx.fillStyle='#6bdfe4';ctx.font='750 18px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif';trackText(ctx,it[0].toUpperCase(),x+28,cy+39,2.2);ctx.fillStyle='#f0f5f6';ctx.font='600 48px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';ctx.fillText(it[1],x+28,cy+102);const numw=ctx.measureText(it[1]).width;ctx.fillStyle='#788b9d';ctx.font='520 22px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';ctx.fillText(it[2],x+35+numw,cy+102);ctx.fillStyle='#5fdce2';ctx.font='500 31px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';ctx.fillText(it[3],x+385,cy+48)});
      y+=374;
    }else y+=18;

    const rankItems=[];
    if(opts.country&&data.country)rankItems.push({label:t('countryLabel'),...data.country});
    if(opts.global&&data.global)rankItems.push({label:t('worldwideLabel'),...data.global});
    if(rankItems.length){
      ctx.fillStyle='#7f91a2';ctx.font='740 18px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif';trackText(ctx,t('benchmark').toUpperCase(),74,y+24,1.4);
      y+=48;
      const width=rankItems.length===1?936:456;
      rankItems.forEach((r,i)=>{const x=72+i*(width+24);fillRound(ctx,x,y,width,132,22,'rgba(19,23,27,.78)','rgba(216,183,98,.13)');ctx.fillStyle='#8fa1b1';ctx.font='700 17px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif';ctx.fillText(r.label,x+24,y+34);ctx.fillStyle='#d8b762';ctx.font='620 45px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';ctx.fillText(`TOP ${r.top}`,x+24,y+90);drawRankIdentity(ctx,r,x,y,width)});
      y+=154;
    } else if(data.historical){
      fillRound(ctx,72,y,936,86,18,'rgba(255,255,255,.018)','rgba(255,255,255,.05)');ctx.fillStyle='#728496';ctx.font='520 20px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif';drawWrapped(ctx,t('noRank'),98,y+34,875,27,2);y+=106;
    }

    const fy=H-178;ctx.strokeStyle='rgba(255,255,255,.07)';ctx.beginPath();ctx.moveTo(72,fy-26);ctx.lineTo(W-72,fy-26);ctx.stroke();
    ctx.fillStyle='#8fa0ad';ctx.font='550 21px system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Thai",sans-serif';ctx.fillText(t('measuredWith'),72,fy+8);
    ctx.fillStyle='#d1b76d';ctx.font='570 20px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';ctx.fillText(`${STUDIO} · ${STUDIO_LOCATION}`,72,fy+45);
    ctx.fillStyle='#637688';ctx.font='500 18px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';ctx.fillText(APP_URL.replace(/^https?:\/\//,''),72,fy+82);
    ctx.textAlign='right';ctx.fillStyle='#5fcfd5';ctx.font='700 17px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';ctx.fillText('VELNOX · NETWORK INTELLIGENCE',W-72,fy+82);ctx.textAlign='left';
    return c;
  }

  function filename(){const d=new Date(S.data?.ts||Date.now());const z=n=>String(n).padStart(2,'0');return `velnox-result-${d.getFullYear()}${z(d.getMonth()+1)}${z(d.getDate())}-${z(d.getHours())}${z(d.getMinutes())}.png`}
  function downloadCard(){
    if(!S.blob)return;try{const u=URL.createObjectURL(S.blob),a=document.createElement('a');a.href=u;a.download=filename();a.rel='noopener';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),2500);setStatus(t('saved'))}catch(e){console.error(e);setStatus(t('failed'),true)}
  }
  async function shareOrDownload(){
    if(!S.blob)return;if(!canFileShare()){downloadCard();return}
    const file=new File([S.blob],filename(),{type:'image/png'});const score=Math.round(S.data?.score||0);const text=L()==='th'?`ผล Velnox ของฉัน — ${score}/100\n${APP_URL}`:`My Velnox network result — ${score}/100\n${APP_URL}`;
    try{await navigator.share({files:[file],title:'Velnox — Network Intelligence',text})}
    catch(e){if(e?.name==='AbortError')return;try{await navigator.share({files:[file]})}catch(e2){if(e2?.name!=='AbortError'){console.error(e2);setStatus(t('failed'),true)}}}
  }

  function decorateHistory(){
    const host=byId('historyList');if(!host)return;[...host.querySelectorAll('.history-item')].forEach((item,index)=>{if(item.querySelector('.vshare-history-btn'))return;const date=item.querySelector('.date');if(!date)return;const b=document.createElement('button');b.type='button';b.className='vshare-history-btn';b.dataset.vshareIndex=String(index);b.textContent=t('shareShort');b.setAttribute('aria-label',t('shareResult'));b.addEventListener('click',e=>{e.stopPropagation();openHistory(Number(b.dataset.vshareIndex))});date.appendChild(b)})
  }
  function bind(){
    byId('shareResultBtn')?.addEventListener('click',openCurrent);decorateHistory();
    const hist=byId('historyList');if(hist){S.historyObserver=new MutationObserver(decorateHistory);S.historyObserver.observe(hist,{childList:true,subtree:false})}
    S.langObserver=new MutationObserver(()=>{refreshCopy();if(S.data)regenerate()});S.langObserver.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  }
  function init(){document.documentElement.dataset.velnoxShare=VERSION;ensureRoot();refreshCopy();bind()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
  window.VelnoxShare=Object.freeze({version:VERSION,openCurrent,openHistory,drawShareCard});
})();
