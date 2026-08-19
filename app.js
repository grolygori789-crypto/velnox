const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const translations = {
  en: {
    networkHealth:"NETWORK HEALTH", knowConnection:"Know your connection.", heroCopy:"Speed, responsiveness and stability — explained clearly.",
    startTest:"START TEST", tapToAnalyze:"Tap to analyze", ready:"READY", online:"ONLINE", offline:"OFFLINE", lastTest:"LAST TEST",
    privacyLine:"No account. History stays on this device.", liveDiagnostic:"LIVE DIAGNOSTIC", checkingResponse:"Checking response time…",
    checkingDownload:"Measuring download throughput…", checkingUpload:"Measuring upload throughput…", analyzing:"Analyzing connection quality…",
    latency:"PING", download:"DOWNLOAD", upload:"UPLOAD", jitter:"JITTER", analysis:"ANALYSIS",
    dataUsage:"The test transfers data to estimate real connection performance.", connectionQuality:"CONNECTION QUALITY", velnoxScore:"VELNOX SCORE",
    realWorld:"REAL-WORLD USE", whatCanDo:"What can this connection handle?", compare:"COMPARE", whereYouStand:"See where your connection stands",
    country:"COUNTRY", global:"GLOBAL", networkInsights:"NETWORK INSIGHTS", whatWeFound:"What Velnox found",
    improveConnection:"IMPROVE CONNECTION", recommendedActions:"Recommended actions", technicalDetails:"TECHNICAL DETAILS", testAgain:"TEST AGAIN",
    history:"HISTORY", yourTests:"Your tests", settings:"SETTINGS", language:"Language", languageHelp:"Choose interface language",
    fullscreen:"Auto Full Screen", fullscreenHelp:"Request full screen when a test starts", saveHistory:"Save History", saveHistoryHelp:"Keep results on this device",
    techDetails:"Technical Details", techDetailsHelp:"Show advanced diagnostics after a test", soundEffects:"Sound Effects", soundEffectsHelp:"Subtle Velnox sonic feedback for start, finish and medals", countryGlobal:"COUNTRY / GLOBAL", advancedData:"ADVANCED DATA", diagnosisAndFixes:"Diagnosis + recommended fixes", yourDownload:"YOUR DOWNLOAD", clearHistory:"Clear test history", diagnosticData:"Diagnostic data",
    excellent:"Excellent", good:"Good", fair:"Fair", poor:"Poor", limited:"Limited", needsAttention:"Needs Attention",
    goldTurtle:"GOLD TURTLE", silverTurtle:"SILVER TURTLE", bronzeTurtle:"BRONZE TURTLE", attentionTurtle:"NEEDS ATTENTION",
    excellentConnection:"Excellent Connection", goodConnection:"Good Connection", fairConnection:"Fair Connection", poorConnection:"Connection needs attention",
    streaming4k:"4K Streaming", onlineGaming:"Online Gaming", videoCalls:"Video Calls", cloudGaming:"Cloud Gaming", liveStreaming:"Live Streaming", largeDownloads:"Large Downloads",
    noBenchmark:"Verified benchmark not connected yet", noBenchmarkCopy:"The comparison UI is ready, but Velnox will not invent country or global rankings. Connect a current verified benchmark dataset before production.",
    previousCompare:"Previous test", fasterThanPrevious:"Download is {x}% faster than your previous test.", slowerThanPrevious:"Download is {x}% slower than your previous test.",
    stableFastTitle:"Fast and responsive", stableFastBody:"Your connection combines strong throughput with low delay.",
    highLatencyTitle:"High latency detected", highLatencyBody:"Response time is elevated. Gaming and live calls may feel delayed even if download speed is good.",
    highJitterTitle:"Connection timing is unstable", highJitterBody:"Jitter is high, which can cause uneven voice, video or game response.",
    lowDownTitle:"Download speed is limited", lowDownBody:"Large downloads and high-resolution streaming may take longer than expected.",
    lowUpTitle:"Upload speed is limited", lowUpBody:"Video calls, cloud backups and live streaming may be affected.",
    bufferTitle:"Latency rises under load", bufferBody:"Your connection becomes less responsive while transferring data, a pattern commonly associated with queueing under load.",
    balancedTitle:"Connection is well balanced", balancedBody:"No major weakness was detected across speed, latency and jitter.",
    solCloser:"Move closer to the Wi-Fi router or access point and test again.", solLoad:"Pause large downloads, cloud backups or streaming on other devices, then retest.",
    solRouter:"Restart the router if performance has been unusually poor for an extended period.", solBand:"If available, try a less congested Wi-Fi band or a wired connection.",
    solIsp:"Compare multiple tests at different times. If the problem is persistent, contact your ISP with the results.", solGood:"No urgent fix is needed. Retest later to build a useful history baseline.",
    noHistory:"No saved tests yet. Run a test to start building your connection history.", historyCleared:"History cleared", fullscreenBlocked:"Full screen is not available in this browser.",
    engineError:"The network test could not complete. Check your connection and try again.", loadedLatency:"Loaded latency", jitterIdle:"Idle jitter", testDuration:"Test duration",
    engine:"Measurement engine", cloudflareEngine:"Cloudflare edge", fallbackEngine:"Velnox fallback", measuredAt:"Measured at", browserMode:"Browser mode",
    benchmarkSource:"Benchmark source", notConfigured:"Not configured", scoreHeuristic:"Velnox score", scoreHeuristicValue:"Heuristic composite, 0–100",
    Mbps:"Mbps", MBs:"MB/s",
    measuredLive:"LIVE MEASUREMENT", qualityTier:"QUALITY TIER", measurementResults:"MEASUREMENT RESULTS", coreMetrics:"Core connection metrics",
    useExcellent:"Excellent for this activity", useGood:"Good for this activity", useLimited:"May have limitations",
    benchmarkLoading:"Loading Velnox Standard Base…", benchmarkUnavailable:"Standard Base has not been synced yet", benchmarkUnavailableBody:"Country and worldwide percentile ranking will appear here after the verified benchmark files are generated.",
    benchmarkSetup:"Source architecture ready • Cloudflare Radar • rolling 90-day distribution", overallRank:"OVERALL POSITION", betterThan:"Performs better than about {x}% of measured connections", topPercent:"TOP {x}%", median:"Median", benchmarkWindow:"Benchmark window", previous90Days:"Previous 90 days", source:"Source", updated:"Updated", detectedCountry:"Detected country", worldwide:"Worldwide",
    downloadRank:"Download", uploadRank:"Upload", latencyRank:"Latency", jitterRank:"Jitter", benchmarkNote:"Percentiles are estimated from bucketed distributions; lower latency and jitter are ranked as better.", countryFallback:"Country could not be detected automatically; using your browser locale when possible.", benchmarkNotAvailableCountry:"A verified benchmark file is not available for {country} yet.",
    benchmarkCloudflare:"Cloudflare Radar", benchmarkReady:"VERIFIED STANDARD BASE"
  },
  th: {
    networkHealth:"สุขภาพเครือข่าย", knowConnection:"รู้จักเน็ตของคุณให้ชัด", heroCopy:"ทั้งความเร็ว การตอบสนอง และความเสถียร — อธิบายให้เข้าใจง่าย",
    startTest:"เริ่มทดสอบ", tapToAnalyze:"แตะเพื่อวิเคราะห์", ready:"พร้อม", online:"ออนไลน์", offline:"ออฟไลน์", lastTest:"การทดสอบล่าสุด",
    privacyLine:"ไม่ต้องสมัครบัญชี ประวัติเก็บไว้ในอุปกรณ์นี้", liveDiagnostic:"กำลังตรวจสอบแบบเรียลไทม์", checkingResponse:"กำลังตรวจสอบเวลาตอบสนอง…",
    checkingDownload:"กำลังวัดความเร็วดาวน์โหลด…", checkingUpload:"กำลังวัดความเร็วอัปโหลด…", analyzing:"กำลังวิเคราะห์คุณภาพการเชื่อมต่อ…",
    latency:"PING", download:"ดาวน์โหลด", upload:"อัปโหลด", jitter:"JITTER", analysis:"วิเคราะห์",
    dataUsage:"การทดสอบจะรับส่งข้อมูลเพื่อประเมินประสิทธิภาพการเชื่อมต่อจริง", connectionQuality:"คุณภาพการเชื่อมต่อ", velnoxScore:"คะแนน VELNOX",
    realWorld:"การใช้งานจริง", whatCanDo:"เน็ตเส้นนี้เหมาะกับอะไรบ้าง?", compare:"เปรียบเทียบ", whereYouStand:"ดูว่าเน็ตของคุณอยู่ระดับไหน",
    country:"ประเทศ", global:"ทั่วโลก", networkInsights:"ข้อมูลเชิงลึก", whatWeFound:"สิ่งที่ Velnox พบ",
    improveConnection:"ปรับปรุงการเชื่อมต่อ", recommendedActions:"สิ่งที่แนะนำให้ลอง", technicalDetails:"รายละเอียดทางเทคนิค", testAgain:"ทดสอบอีกครั้ง",
    history:"ประวัติ", yourTests:"ผลทดสอบของคุณ", settings:"ตั้งค่า", language:"ภาษา", languageHelp:"เลือกภาษาของหน้าจอ",
    fullscreen:"เต็มหน้าจออัตโนมัติ", fullscreenHelp:"ขอเปิดเต็มหน้าจอเมื่อเริ่มทดสอบ", saveHistory:"บันทึกประวัติ", saveHistoryHelp:"เก็บผลทดสอบไว้ในอุปกรณ์นี้",
    techDetails:"รายละเอียดทางเทคนิค", techDetailsHelp:"แสดงข้อมูลวิเคราะห์ขั้นสูงหลังทดสอบ", soundEffects:"เอฟเฟกต์เสียง", soundEffectsHelp:"เสียง Velnox แบบบางๆ สำหรับเริ่มทดสอบ เข้าเส้นชัย และเหรียญ", countryGlobal:"ประเทศ / ทั่วโลก", advancedData:"ข้อมูลเชิงลึก", diagnosisAndFixes:"วิเคราะห์ปัญหา + วิธีแก้ที่แนะนำ", yourDownload:"ความเร็วดาวน์โหลดของคุณ", clearHistory:"ล้างประวัติการทดสอบ", diagnosticData:"ข้อมูลการวินิจฉัย",
    excellent:"ยอดเยี่ยม", good:"ดี", fair:"พอใช้", poor:"ควรปรับปรุง", limited:"มีข้อจำกัด", needsAttention:"ควรตรวจสอบ",
    goldTurtle:"เต่าเหรียญทอง", silverTurtle:"เต่าเหรียญเงิน", bronzeTurtle:"เต่าเหรียญทองแดง", attentionTurtle:"ควรตรวจสอบ",
    excellentConnection:"การเชื่อมต่อยอดเยี่ยม", goodConnection:"การเชื่อมต่อดี", fairConnection:"การเชื่อมต่อพอใช้", poorConnection:"การเชื่อมต่อควรได้รับการแก้ไข",
    streaming4k:"สตรีม 4K", onlineGaming:"เกมออนไลน์", videoCalls:"วิดีโอคอล", cloudGaming:"Cloud Gaming", liveStreaming:"ไลฟ์สตรีม", largeDownloads:"ดาวน์โหลดไฟล์ใหญ่",
    noBenchmark:"ยังไม่ได้เชื่อมข้อมูล Benchmark ที่ตรวจสอบแล้ว", noBenchmarkCopy:"ระบบเปรียบเทียบพร้อมใช้งาน แต่ Velnox จะไม่สร้างอันดับประเทศหรือทั่วโลกขึ้นมาเอง ต้องเชื่อมชุดข้อมูลปัจจุบันที่ตรวจสอบแหล่งที่มาแล้วก่อนใช้งานจริง",
    previousCompare:"เทียบกับครั้งก่อน", fasterThanPrevious:"ดาวน์โหลดเร็วขึ้น {x}% จากการทดสอบครั้งก่อน", slowerThanPrevious:"ดาวน์โหลดช้าลง {x}% จากการทดสอบครั้งก่อน",
    stableFastTitle:"เร็วและตอบสนองดี", stableFastBody:"การเชื่อมต่อมีทั้งความเร็วสูงและความหน่วงต่ำ",
    highLatencyTitle:"พบ Latency สูง", highLatencyBody:"การตอบสนองค่อนข้างช้า เกมและการโทรสดอาจรู้สึกหน่วง แม้ความเร็วดาวน์โหลดจะสูง",
    highJitterTitle:"จังหวะการเชื่อมต่อไม่นิ่ง", highJitterBody:"Jitter สูงอาจทำให้เสียง ภาพ หรือการตอบสนองในเกมไม่สม่ำเสมอ",
    lowDownTitle:"ความเร็วดาวน์โหลดมีข้อจำกัด", lowDownBody:"การดาวน์โหลดไฟล์ใหญ่หรือสตรีมความละเอียดสูงอาจใช้เวลานานกว่าที่ควร",
    lowUpTitle:"ความเร็วอัปโหลดมีข้อจำกัด", lowUpBody:"วิดีโอคอล การสำรองข้อมูลขึ้น Cloud และไลฟ์สตรีมอาจได้รับผลกระทบ",
    bufferTitle:"Latency สูงขึ้นเมื่อมีการรับส่งข้อมูล", bufferBody:"การตอบสนองแย่ลงระหว่างใช้แบนด์วิดท์หนัก ซึ่งมักสัมพันธ์กับคิวข้อมูลสะสมในเครือข่าย",
    balancedTitle:"การเชื่อมต่อสมดุลดี", balancedBody:"ไม่พบจุดอ่อนสำคัญจากความเร็ว Latency และ Jitter ที่วัดได้",
    solCloser:"ลองขยับเข้าใกล้เราเตอร์หรือ Access Point แล้วทดสอบอีกครั้ง", solLoad:"หยุดดาวน์โหลดไฟล์ใหญ่ การสำรองข้อมูล หรือสตรีมจากอุปกรณ์อื่นชั่วคราว แล้วทดสอบใหม่",
    solRouter:"รีสตาร์ตเราเตอร์เมื่อประสิทธิภาพแย่ผิดปกติต่อเนื่องเป็นเวลานาน", solBand:"ลองเปลี่ยนย่าน Wi-Fi ที่รบกวนน้อยกว่า หรือใช้สาย LAN เมื่อทำได้",
    solIsp:"ทดสอบหลายช่วงเวลา หากปัญหาเกิดซ้ำต่อเนื่องให้นำผลไปแจ้งผู้ให้บริการอินเทอร์เน็ต", solGood:"ยังไม่มีสิ่งที่ต้องแก้เร่งด่วน ลองทดสอบเป็นระยะเพื่อสร้างค่าอ้างอิงย้อนหลัง",
    noHistory:"ยังไม่มีผลทดสอบที่บันทึกไว้ ลองทดสอบสักครั้งเพื่อเริ่มสร้างประวัติ", historyCleared:"ล้างประวัติแล้ว", fullscreenBlocked:"เบราว์เซอร์นี้ไม่รองรับการเปิดเต็มหน้าจอ",
    engineError:"การทดสอบเครือข่ายไม่สำเร็จ โปรดตรวจสอบการเชื่อมต่อแล้วลองอีกครั้ง", loadedLatency:"Latency ขณะใช้งานหนัก", jitterIdle:"Idle Jitter", testDuration:"ระยะเวลาทดสอบ",
    engine:"ระบบวัดผล", cloudflareEngine:"Cloudflare edge", fallbackEngine:"Velnox fallback", measuredAt:"เวลาที่วัด", browserMode:"โหมดเบราว์เซอร์",
    benchmarkSource:"แหล่งข้อมูล Benchmark", notConfigured:"ยังไม่ได้ตั้งค่า", scoreHeuristic:"คะแนน Velnox", scoreHeuristicValue:"คะแนนรวมแบบ heuristic 0–100",
    Mbps:"Mbps", MBs:"MB/s",
    measuredLive:"วัดผลแบบเรียลไทม์", qualityTier:"ระดับคุณภาพ", measurementResults:"ผลการวัด", coreMetrics:"ค่าหลักของการเชื่อมต่อ",
    useExcellent:"เหมาะอย่างยิ่งสำหรับการใช้งานนี้", useGood:"ใช้งานได้ดี", useLimited:"อาจมีข้อจำกัด",
    benchmarkLoading:"กำลังโหลด Velnox Standard Base…", benchmarkUnavailable:"ยังไม่ได้ซิงก์ Standard Base", benchmarkUnavailableBody:"อันดับเปอร์เซ็นไทล์ระดับประเทศและทั่วโลกจะแสดงที่นี่เมื่อสร้างไฟล์ Benchmark ที่ตรวจสอบแหล่งข้อมูลแล้ว",
    benchmarkSetup:"โครงสร้างพร้อม • Cloudflare Radar • ข้อมูลแบบ Rolling 90 วัน", overallRank:"อันดับโดยรวม", betterThan:"ประสิทธิภาพดีกว่าประมาณ {x}% ของผลวัดในฐานข้อมูล", topPercent:"TOP {x}%", median:"ค่ากลาง", benchmarkWindow:"ช่วงข้อมูลอ้างอิง", previous90Days:"90 วันที่ผ่านมา", source:"แหล่งข้อมูล", updated:"อัปเดต", detectedCountry:"ประเทศที่ตรวจพบ", worldwide:"ทั่วโลก",
    downloadRank:"ดาวน์โหลด", uploadRank:"อัปโหลด", latencyRank:"Latency", jitterRank:"Jitter", benchmarkNote:"เปอร์เซ็นไทล์เป็นค่าประมาณจากข้อมูลแบบแบ่งช่วง โดย Latency และ Jitter ที่ต่ำกว่าจะถือว่าดีกว่า", countryFallback:"ไม่สามารถตรวจประเทศอัตโนมัติได้ จึงจะใช้ภูมิภาคจากภาษาของเบราว์เซอร์เมื่อทำได้", benchmarkNotAvailableCountry:"ยังไม่มีไฟล์ Benchmark ที่ตรวจสอบแล้วสำหรับ {country}",
    benchmarkCloudflare:"Cloudflare Radar", benchmarkReady:"STANDARD BASE ที่ตรวจสอบแล้ว"
  }
};

const state = {
  lang: localStorage.getItem("velnox.lang") || (navigator.language?.toLowerCase().startsWith("th") ? "th" : "en"),
  settings: {
    fullscreen: localStorage.getItem("velnox.fullscreen") !== "0",
    history: localStorage.getItem("velnox.saveHistory") !== "0",
    tech: localStorage.getItem("velnox.tech") !== "0",
    sound: localStorage.getItem("velnox.sound") === "1"
  },
  results: null,
  engineName: "",
  testStartedAt: null,
  testDuration: null,
  compareMode:"country",
  countryCode:null,
  countryName:null,
  benchmarkIndex:null,
  benchmarkCache:{},
  running:false
};

function t(key, vars={}) {
  let value = translations[state.lang][key] ?? translations.en[key] ?? key;
  for (const [k,v] of Object.entries(vars)) value = value.replace(`{${k}}`, v);
  return value;
}
function setLang(lang){
  state.lang = lang;
  localStorage.setItem("velnox.lang", lang);
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  $$("#langTh,#sheetTh").forEach(el=>el.classList.toggle("active",lang==="th"));
  $$("#langEn,#sheetEn").forEach(el=>el.classList.toggle("active",lang==="en"));
  updateConnectionStatus();
  if(state.results) renderResult(state.results);
  renderHistory();
}
function showView(id){
  $$(".view").forEach(v=>v.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
function toast(msg){
  const el=$("#toast"); el.textContent=msg; el.classList.add("show");
  clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.remove("show"),2200);
}
function openSheet(sheet,backdrop){ $(backdrop).classList.add("show"); $(sheet).classList.add("show"); }
function closeSheet(sheet,backdrop){ $(backdrop).classList.remove("show"); $(sheet).classList.remove("show"); }

function updateConnectionStatus(){
  $("#connectionLabel").textContent = navigator.onLine ? t("online") : t("offline");
  $("#connectionLabel").style.color = navigator.onLine ? "" : "#e46f7b";
}
window.addEventListener("online",updateConnectionStatus); window.addEventListener("offline",updateConnectionStatus);

function historyData(){ try{return JSON.parse(localStorage.getItem("velnox.history")||"[]")}catch{return []} }
function saveHistory(result){
  if(!state.settings.history) return;
  const h=historyData();
  h.unshift({...result,ts:Date.now()});
  localStorage.setItem("velnox.history",JSON.stringify(h.slice(0,25)));
  renderLastResult();
}
function qualityLabel(score){
  if(score>=85) return {tier:"gold",title:t("goldTurtle"),subtitle:t("excellentConnection"),rating:t("excellent"),medal:"1",color:"#e6bd54",rgb:"230,189,84"};
  if(score>=68) return {tier:"silver",title:t("silverTurtle"),subtitle:t("goodConnection"),rating:t("good"),medal:"2",color:"#c7d0db",rgb:"199,208,219"};
  if(score>=50) return {tier:"bronze",title:t("bronzeTurtle"),subtitle:t("fairConnection"),rating:t("fair"),medal:"3",color:"#c57a48",rgb:"197,122,72"};
  return {tier:"poor",title:t("attentionTurtle"),subtitle:t("poorConnection"),rating:t("needsAttention"),medal:"!",color:"#e75d70",rgb:"231,93,112"};
}
const clamp=(n,a=0,b=100)=>Math.max(a,Math.min(b,n));
function interp(value, points){
  if(value<=points[0][0])return points[0][1];
  for(let i=1;i<points.length;i++){
    if(value<=points[i][0]){
      const [x0,y0]=points[i-1],[x1,y1]=points[i]; return y0+(value-x0)*(y1-y0)/(x1-x0);
    }
  }
  return points.at(-1)[1];
}
function calculateScore(r){
  const ds=interp(r.download,[[0,0],[5,20],[25,50],[100,80],[300,95],[500,100]]);
  const us=interp(r.upload,[[0,0],[2,20],[10,50],[50,80],[100,95],[200,100]]);
  const ps=interp(r.ping,[[0,100],[15,100],[30,90],[50,75],[80,55],[120,35],[250,10]]);
  const js=interp(r.jitter,[[0,100],[3,100],[7,90],[15,75],[30,50],[60,20]]);
  let score=ds*.35+us*.20+ps*.25+js*.20;
  if(Number.isFinite(r.loadedLatency) && r.loadedLatency>r.ping){
    const delta=r.loadedLatency-r.ping;
    score-=clamp((delta-30)/4,0,12);
  }
  return Math.round(clamp(score));
}
function metricRating(type,v){
  if(type==="download") return v>=100?t("excellent"):v>=25?t("good"):v>=10?t("fair"):t("limited");
  if(type==="upload") return v>=50?t("excellent"):v>=10?t("good"):v>=5?t("fair"):t("limited");
  if(type==="ping") return v<=25?t("excellent"):v<=50?t("good"):v<=80?t("fair"):t("limited");
  if(type==="jitter") return v<=5?t("excellent"):v<=12?t("good"):v<=25?t("fair"):t("limited");
  return "—";
}
function useCase(name,icon,rating){ return `<div class="use-case"><div class="use-icon">${icon}</div><div class="use-copy"><b>${name}</b><small class="rating-${rating.cls}">${rating.label}</small></div></div>`; }
function rate(okExcellent,okGood){
  if(okExcellent)return {label:t("excellent"),cls:"excellent"};
  if(okGood)return {label:t("good"),cls:"good"};
  return {label:t("limited"),cls:"limited"};
}
function buildUseCases(r){
  const items=[
    [t("streaming4k"),"▻", rate(r.download>=50&&r.jitter<=15,r.download>=25)],
    [t("onlineGaming"),"⌁", rate(r.ping<=30&&r.jitter<=7,r.ping<=60&&r.jitter<=15)],
    [t("videoCalls"),"◫", rate(r.upload>=10&&r.ping<=40&&r.jitter<=10,r.upload>=5&&r.ping<=80)],
    [t("cloudGaming"),"◇", rate(r.download>=50&&r.ping<=30&&r.jitter<=8,r.download>=25&&r.ping<=55)],
    [t("liveStreaming"),"●", rate(r.upload>=20&&r.jitter<=10,r.upload>=8&&r.jitter<=20)],
    [t("largeDownloads"),"⇣", rate(r.download>=200,r.download>=50)]
  ];
  return items.map(([name,icon,rating])=>{
    const help=rating.cls==="excellent"?t("useExcellent"):rating.cls==="good"?t("useGood"):t("useLimited");
    return `<div class="use-case-row-v12"><div class="use-case-icon-v12">${icon}</div><div class="use-case-label-v12"><b>${name}</b><small>${help}</small></div><span class="use-case-rating-v12 rating-${rating.cls}">${rating.label}</span></div>`;
  }).join("");
}
function buildInsights(r){
  const items=[];
  const good = r.download>=50 && r.upload>=10 && r.ping<=50 && r.jitter<=12;
  if(good) items.push({title:t("stableFastTitle"),body:t("stableFastBody"),warn:false});
  if(r.ping>60) items.push({title:t("highLatencyTitle"),body:t("highLatencyBody"),warn:true});
  if(r.jitter>15) items.push({title:t("highJitterTitle"),body:t("highJitterBody"),warn:true});
  if(r.download<25) items.push({title:t("lowDownTitle"),body:t("lowDownBody"),warn:true});
  if(r.upload<10) items.push({title:t("lowUpTitle"),body:t("lowUpBody"),warn:true});
  if(Number.isFinite(r.loadedLatency) && r.loadedLatency-r.ping>50) items.push({title:t("bufferTitle"),body:t("bufferBody"),warn:true});
  if(items.length===0) items.push({title:t("balancedTitle"),body:t("balancedBody"),warn:false});
  return items.map(x=>`<div class="insight ${x.warn?"warn":""}"><span class="insight-dot"></span><div><b>${x.title}</b><p>${x.body}</p></div></div>`).join("");
}
function buildSolutions(r){
  const sols=[];
  if(r.ping>60||r.jitter>15) sols.push(t("solCloser"));
  if(r.download<50||r.upload<10||r.jitter>15) sols.push(t("solLoad"));
  if(r.jitter>15||r.ping>80) sols.push(t("solBand"));
  if(r.download<25||r.upload<5) sols.push(t("solRouter"));
  if(r.download<25||r.ping>80||r.jitter>20) sols.push(t("solIsp"));
  if(!sols.length) sols.push(t("solGood"));
  return [...new Set(sols)].slice(0,5).map(s=>`<li>${s}</li>`).join("");
}
function formatSpeed(v){ return Number(v).toFixed(v>=100?0:v>=10?1:2).replace(/\.0$/,""); }
function animateScore(target){
  const el=$("#scoreValue"), arc=$("#scoreArc");
  const circumference=2*Math.PI*54;
  arc.style.strokeDasharray=`${circumference}`;
  arc.style.strokeDashoffset=`${circumference}`;
  const started=performance.now(), duration=850;
  const tick=now=>{
    const p=Math.min(1,(now-started)/duration), eased=1-Math.pow(1-p,3);
    el.textContent=Math.round(target*eased);
    arc.style.strokeDashoffset=`${circumference*(1-target*eased/100)}`;
    if(p<1)requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
function replayResultReveal(){
  const stage=$("#resultStage");
  stage.classList.remove("reveal");
  void stage.offsetWidth;
  stage.classList.add("reveal");
}
function countryDisplayName(code){
  if(!code)return null;
  try{return new Intl.DisplayNames([state.lang==="th"?"th":"en"],{type:"region"}).of(code.toUpperCase())}catch{return code.toUpperCase()}
}
function localeCountryFallback(){
  try{
    const locale=new Intl.Locale(navigator.language||"");
    if(locale.region)return locale.region.toUpperCase();
  }catch{}
  const part=(navigator.language||"").split("-")[1];
  return part?part.toUpperCase():null;
}
async function detectCountry(){
  if(state.countryCode)return state.countryCode;
  try{
    const r=await fetch("https://speed.cloudflare.com/meta",{cache:"no-store"});
    if(r.ok){
      const meta=await r.json();
      if(meta?.country && /^[A-Za-z]{2}$/.test(meta.country)){state.countryCode=meta.country.toUpperCase();state.countryName=countryDisplayName(state.countryCode);return state.countryCode}
    }
  }catch{}
  try{
    const r=await fetch("https://cloudflare-dns.com/cdn-cgi/trace",{cache:"no-store"});
    if(r.ok){
      const text=await r.text(),m=text.match(/^loc=([A-Za-z]{2})$/m);
      if(m){state.countryCode=m[1].toUpperCase();state.countryName=countryDisplayName(state.countryCode);return state.countryCode}
    }
  }catch{}
  state.countryCode=localeCountryFallback();
  state.countryName=countryDisplayName(state.countryCode);
  return state.countryCode;
}
async function loadBenchmarkIndex(){
  if(state.benchmarkIndex!==null)return state.benchmarkIndex;
  try{
    const r=await fetch(`./benchmarks/index.json?ts=${Date.now()}`,{cache:"no-store"});
    if(!r.ok)throw new Error("benchmark index unavailable");
    state.benchmarkIndex=await r.json();
  }catch{state.benchmarkIndex={ready:false,countries:[]}}
  return state.benchmarkIndex;
}
async function loadBenchmark(scope){
  const code=scope==="global"?"GLOBAL":(state.countryCode||await detectCountry());
  if(!code)return null;
  if(code in state.benchmarkCache)return state.benchmarkCache[code];
  const index=await loadBenchmarkIndex();
  if(!index?.ready){state.benchmarkCache[code]=null;return null}
  if(code!=="GLOBAL" && Array.isArray(index.countries) && !index.countries.includes(code)){state.benchmarkCache[code]=null;return null}
  try{
    const file=code==="GLOBAL"?"global.json":`${code}.json`;
    const r=await fetch(`./benchmarks/${file}?v=${encodeURIComponent(index.lastUpdated||"")}`,{cache:"no-store"});
    if(!r.ok)throw new Error("benchmark unavailable");
    const data=await r.json(); state.benchmarkCache[code]=data; return data;
  }catch{state.benchmarkCache[code]=null;return null}
}
function histogramCDF(value,metric){
  if(!metric || !Array.isArray(metric.bucketMin) || !Array.isArray(metric.counts))return null;
  const mins=metric.bucketMin.map(Number),counts=metric.counts.map(Number),total=counts.reduce((a,b)=>a+(Number.isFinite(b)?b:0),0);
  if(!total||!Number.isFinite(value))return null;
  const bucketSize=Number(metric.bucketSize)||((mins.length>1)?Math.max(.0001,mins[1]-mins[0]):1);
  if(value<mins[0])return 0;
  let cum=0;
  for(let i=0;i<mins.length;i++){
    const start=mins[i],end=(i+1<mins.length?mins[i+1]:start+bucketSize),c=counts[i]||0;
    if(value>=end){cum+=c;continue}
    const fraction=clamp((value-start)/Math.max(end-start,.0001),0,1);
    return clamp((cum+c*fraction)/total*100,0,100);
  }
  return 100;
}
function histogramGoodness(value,metric){
  const cdf=histogramCDF(value,metric); if(cdf===null)return null;
  return metric.direction==="lower"?100-cdf:cdf;
}
function histogramMedian(metric){
  if(!metric || !Array.isArray(metric.bucketMin) || !Array.isArray(metric.counts))return null;
  const mins=metric.bucketMin.map(Number),counts=metric.counts.map(Number),total=counts.reduce((a,b)=>a+(Number.isFinite(b)?b:0),0);
  if(!total)return null; const half=total/2,bucketSize=Number(metric.bucketSize)||((mins.length>1)?Math.max(.0001,mins[1]-mins[0]):1);let cum=0;
  for(let i=0;i<counts.length;i++){const c=counts[i]||0;if(cum+c>=half){const f=c?clamp((half-cum)/c,0,1):0;return mins[i]+bucketSize*f}cum+=c}
  return mins.at(-1)??null;
}
function topText(goodness){
  if(!Number.isFinite(goodness))return "—";
  const top=100-goodness;
  return t("topPercent",{x:top<1?"<1":String(Math.max(1,Math.round(top)))})
}
function benchmarkRank(current,data){
  const metrics=data?.metrics||{};
  const values={download:current.download,upload:current.upload,latency:current.ping,jitter:current.jitter};
  const goodness={};
  for(const k of Object.keys(values))goodness[k]=histogramGoodness(values[k],metrics[k]);
  const weights={download:.35,upload:.20,latency:.25,jitter:.20};let sum=0,w=0;
  for(const k of Object.keys(weights))if(Number.isFinite(goodness[k])){sum+=goodness[k]*weights[k];w+=weights[k]}
  return {goodness,overall:w?sum/w:null,medians:Object.fromEntries(Object.keys(values).map(k=>[k,histogramMedian(metrics[k])]))};
}
function benchmarkMetricCard(label,key,rank,unit){
  const g=rank.goodness[key],med=rank.medians[key];
  const medText=Number.isFinite(med)?`${key==="latency"||key==="jitter"?med.toFixed(1):formatSpeed(med)} ${unit}`:"—";
  return `<div class="benchmark-metric"><span>${label}</span><b>${topText(g)}</b><small>${t("median")}: ${medText}</small></div>`;
}
function benchmarkUpdated(data){
  if(!data?.lastUpdated)return "—";
  try{return new Date(data.lastUpdated).toLocaleDateString(state.lang==="th"?"th-TH":"en-GB",{day:"numeric",month:"short",year:"numeric"})}catch{return data.lastUpdated}
}
function renderResult(r){
  r.score=calculateScore(r);
  const q=qualityLabel(r.score),stage=$("#resultStage");
  stage.classList.remove("tier-gold","tier-silver","tier-bronze","tier-poor"); stage.classList.add(`tier-${q.tier}`);
  document.documentElement.style.setProperty("--tier",q.color);document.documentElement.style.setProperty("--tier-rgb",q.rgb);
  $("#tierTitle").textContent=q.title; $("#tierSubtitle").textContent=q.subtitle; $("#turtleMedalText").textContent=q.medal;
  $("#resultDown").textContent=formatSpeed(r.download); $("#resultUp").textContent=formatSpeed(r.upload);$("#resultPing").textContent=Math.round(r.ping); $("#resultJitter").textContent=Number(r.jitter).toFixed(1);
  $("#downRating").textContent=metricRating("download",r.download); $("#upRating").textContent=metricRating("upload",r.upload);$("#pingRating").textContent=metricRating("ping",r.ping); $("#jitterRating").textContent=metricRating("jitter",r.jitter);
  $("#resultMouth").setAttribute("d",r.score<50?"M299 120c4-3 8-3 11 0":r.score<68?"M299 118c4 0 8 0 11 0":"M299 117c4 3 8 3 11 0");
  $("#useCases").innerHTML=buildUseCases(r); $("#insightsList").innerHTML=buildInsights(r); $("#solutionsList").innerHTML=buildSolutions(r);
  renderCompare(); $("#technicalBtn").style.display=state.settings.tech?"flex":"none"; renderTech(r); replayResultReveal(); animateScore(r.score);
}
async function renderCompare(){
  const current=state.results,host=$("#compareContent"); if(!host)return; if(!current){host.innerHTML="";return}
  host.innerHTML=`<div class="benchmark-empty-v12"><b>${t("benchmarkLoading")}</b><p>${t("benchmarkSetup")}</p></div>`;
  await detectCountry();
  const scope=state.compareMode==="global"?"global":"country",data=await loadBenchmark(scope);
  if(!data){
    const country=state.countryName||state.countryCode||"—";
    const detail=scope==="country"&&state.countryCode?t("benchmarkNotAvailableCountry",{country}):t("benchmarkUnavailableBody");
    host.innerHTML=`<div class="benchmark-empty-v12"><b>${t("benchmarkUnavailable")}</b><p>${detail}</p><small>${t("benchmarkSetup")}</small></div>`;
    return;
  }
  const rank=benchmarkRank(current,data),overall=rank.overall,location=scope==="global"?t("worldwide"):(state.countryName||countryDisplayName(data.location)||data.location||"—");
  const better=Number.isFinite(overall)?Math.round(overall):0;
  host.innerHTML=`
    <div class="benchmark-rank-hero">
      <div class="benchmark-top"><span>${t("overallRank")}</span><strong>${topText(overall)}</strong><small>${better}%</small></div>
      <div class="benchmark-copy"><div class="benchmark-location"><i></i>${location}</div><b>${Number.isFinite(overall)?t("betterThan",{x:better}):"—"}</b><p>${t("benchmarkNote")}</p></div>
    </div>
    <div class="benchmark-metrics">
      ${benchmarkMetricCard(t("downloadRank"),"download",rank,"Mbps")}
      ${benchmarkMetricCard(t("uploadRank"),"upload",rank,"Mbps")}
      ${benchmarkMetricCard(t("latencyRank"),"latency",rank,"ms")}
      ${benchmarkMetricCard(t("jitterRank"),"jitter",rank,"ms")}
    </div>
    <div class="benchmark-foot"><span><b>${t("source")}:</b> ${data.source||t("benchmarkCloudflare")}</span><span><b>${t("benchmarkWindow")}:</b> ${t("previous90Days")}</span><span><b>${t("updated")}:</b> ${benchmarkUpdated(data)}</span></div>`;
}
function renderTech(r){
  const benchmarkReady=!!state.benchmarkIndex?.ready;
  const rows=[
    [t("engine"),state.engineName||"—"],
    [t("loadedLatency"),Number.isFinite(r.loadedLatency)?`${r.loadedLatency.toFixed(1)} ms`:"—"],
    [t("jitterIdle"),`${r.jitter.toFixed(1)} ms`],
    [t("testDuration"),state.testDuration?`${(state.testDuration/1000).toFixed(1)} s`:"—"],
    [t("measuredAt"),new Date().toLocaleString(state.lang==="th"?"th-TH":"en-GB")],
    [t("browserMode"),window.matchMedia("(display-mode: standalone)").matches?"PWA / standalone":"Browser"],
    [t("scoreHeuristic"),t("scoreHeuristicValue")],
    [t("benchmarkSource"),benchmarkReady?`${t("benchmarkCloudflare")} • 90d`:t("notConfigured")]
  ];
  $("#techContent").innerHTML=rows.map(([a,b])=>`<div class="tech-row"><span>${a}</span><b>${b}</b></div>`).join("");
}
function renderLastResult(){
  const h=historyData(); const c=$("#lastResultCard");
  if(!h.length){c.classList.add("hidden");return}
  const r=h[0],q=qualityLabel(r.score??calculateScore(r));
  c.classList.remove("hidden"); $("#lastQuality").textContent=q.rating;
  $("#lastDown").textContent=formatSpeed(r.download); $("#lastUp").textContent=formatSpeed(r.upload); $("#lastPing").textContent=Math.round(r.ping);
}
function renderHistory(){
  const h=historyData();
  if(!h.length){$("#historySummary").innerHTML="";$("#historyList").innerHTML=`<div class="empty-history">${t("noHistory")}</div>`;return}
  const last=h.slice(0,7).reverse(), max=Math.max(...last.map(x=>x.download),1);
  $("#historySummary").innerHTML=`<div class="history-graph">${last.map(x=>`<div class="history-bar" data-v="${formatSpeed(x.download)}" style="height:${Math.max(8,x.download/max*88)}px"></div>`).join("")}</div>`;
  $("#historyList").innerHTML=h.map(r=>{
    const d=new Date(r.ts),q=qualityLabel(r.score??calculateScore(r));
    return `<div class="history-item"><div class="date"><b>${q.rating}</b><span>${d.toLocaleString(state.lang==="th"?"th-TH":"en-GB",{dateStyle:"medium",timeStyle:"short"})}</span></div><div class="hm"><span><b>${formatSpeed(r.download)}</b><small>↓ Mbps</small></span><span><b>${formatSpeed(r.upload)}</b><small>↑ Mbps</small></span><span><b>${Math.round(r.ping)}</b><small>ms</small></span></div></div>`;
  }).join("");
}
function setStage(stage){
  const map={
    latency:["8%","Latency",t("checkingResponse"),"ms"],
    download:["31%","Download",t("checkingDownload"),"Mbps"],
    upload:["52%","Upload",t("checkingUpload"),"Mbps"],
    analysis:["calc(100% - 205px)","Analysis",t("analyzing"),""]
  };
  const [x,title,copy,unit]=map[stage];
  $("#runner").style.setProperty("--runner-left",x);
  $("#stageTitle").textContent=title; $("#stageCopy").textContent=copy; $("#liveUnit").textContent=unit;
  if(stage==="download"||stage==="upload") $("#speedTrail").classList.add("fast"); else $("#speedTrail").classList.remove("fast");
  const order=["latency","download","upload","analysis"],idx=order.indexOf(stage);
  $$(".stage-item").forEach((el,i)=>{el.classList.toggle("active",i===idx);el.classList.toggle("done",i<idx)});
  $("#line1").style.width=idx>=1?"100%":"0"; $("#line2").style.width=idx>=2?"100%":"0"; $("#line3").style.width=idx>=3?"100%":"0";
}
function safeCall(obj,name){try{return obj?.[name]?.()}catch{return null}}
function updateLiveFromResults(res,type){
  const ping=safeCall(res,"getUnloadedLatency"), jitter=safeCall(res,"getUnloadedJitter");
  const down=safeCall(res,"getDownloadBandwidth"), up=safeCall(res,"getUploadBandwidth");
  if(Number.isFinite(ping)){$("#miniPing").textContent=`${ping.toFixed(0)} ms`; if(type==="latency")$("#liveValue").textContent=ping.toFixed(0)}
  if(Number.isFinite(jitter))$("#miniJitter").textContent=`${jitter.toFixed(1)} ms`;
  if(Number.isFinite(down)){$("#miniDown").textContent=`${(down/1e6).toFixed(1)} Mbps`;if(type==="download")$("#liveValue").textContent=(down/1e6).toFixed(1)}
  if(Number.isFinite(up)){$("#miniUp").textContent=`${(up/1e6).toFixed(1)} Mbps`;if(type==="upload")$("#liveValue").textContent=(up/1e6).toFixed(1)}
}
async function requestFullscreen(){
  if(!state.settings.fullscreen)return;
  try{
    if(document.fullscreenElement)return;
    if(document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen({navigationUI:"hide"});
  }catch{ /* browser may require different gesture handling */ }
}
function resetRace(){
  $("#runner").style.setProperty("--runner-left","-10px");
  $("#medalDrop").classList.remove("drop"); $("#finishFlash").classList.remove("burst");
  $("#liveValue").textContent="—"; $("#miniPing").textContent=$("#miniDown").textContent=$("#miniUp").textContent=$("#miniJitter").textContent="—";
  ["#line1","#line2","#line3"].forEach(x=>$(x).style.width="0");
}
async function ensureCloudflareEngine(){
  try{
    const mod=await import("https://cdn.jsdelivr.net/npm/@cloudflare/speedtest@1.13.0/+esm");
    return mod.default;
  }catch{return null}
}
async function runFallback(){
  state.engineName=t("fallbackEngine");
  const base="https://speed.cloudflare.com";
  const pings=[];
  setStage("latency");
  for(let i=0;i<7;i++){
    const s=performance.now();
    await fetch(`${base}/__down?bytes=0&_=${Date.now()}-${i}`,{cache:"no-store"});
    const p=performance.now()-s;pings.push(p);$("#liveValue").textContent=p.toFixed(0);$("#miniPing").textContent=`${p.toFixed(0)} ms`;
  }
  const ping=[...pings].sort((a,b)=>a-b)[Math.floor(pings.length/2)];
  const jitter=pings.slice(1).reduce((a,v,i)=>a+Math.abs(v-pings[i]),0)/Math.max(1,pings.length-1);
  $("#miniJitter").textContent=`${jitter.toFixed(1)} ms`;
  setStage("download");
  const dvals=[];
  for(const bytes of [2e6,8e6,20e6]){
    const s=performance.now(); const r=await fetch(`${base}/__down?bytes=${bytes}&_=${Date.now()}`,{cache:"no-store"}); const blob=await r.blob();
    const sec=(performance.now()-s)/1000; const mbps=(blob.size*8/sec)/1e6; dvals.push(mbps);$("#liveValue").textContent=mbps.toFixed(1);$("#miniDown").textContent=`${mbps.toFixed(1)} Mbps`;
  }
  setStage("upload");
  const uvals=[];
  for(const bytes of [5e5,2e6,5e6]){
    const body=new Uint8Array(bytes); const s=performance.now();
    await fetch(`${base}/__up?_=${Date.now()}`,{method:"POST",body,cache:"no-store"});
    const sec=(performance.now()-s)/1000; const mbps=(bytes*8/sec)/1e6; uvals.push(mbps);$("#liveValue").textContent=mbps.toFixed(1);$("#miniUp").textContent=`${mbps.toFixed(1)} Mbps`;
  }
  return {download:Math.max(...dvals),upload:Math.max(...uvals),ping,jitter,loadedLatency:null};
}
let audioCtx=null;
function getAudio(){
  if(!state.settings.sound)return null;
  try{ audioCtx ||= new (window.AudioContext||window.webkitAudioContext)(); if(audioCtx.state==="suspended")audioCtx.resume(); return audioCtx; }catch{return null}
}
function tone(freq=440,dur=.12,vol=.025,type="sine",delay=0){
  const a=getAudio(); if(!a)return;
  const o=a.createOscillator(),g=a.createGain(),now=a.currentTime+delay;
  o.type=type;o.frequency.setValueAtTime(freq,now);g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(vol,now+.015);g.gain.exponentialRampToValueAtTime(.0001,now+dur);
  o.connect(g).connect(a.destination);o.start(now);o.stop(now+dur+.03);
}
function soundStart(){tone(170,.14,.022,"sine");tone(340,.11,.010,"triangle",.045)}
function soundFinish(){
  const a=getAudio(); if(!a)return;
  const o=a.createOscillator(),g=a.createGain(),now=a.currentTime;o.type="sine";o.frequency.setValueAtTime(260,now);o.frequency.exponentialRampToValueAtTime(820,now+.16);g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(.018,now+.025);g.gain.exponentialRampToValueAtTime(.0001,now+.19);o.connect(g).connect(a.destination);o.start(now);o.stop(now+.22);
}
function soundMedal(tier){
  const seq=tier==="gold"?[[523,.025],[659,.021],[784,.018]]:tier==="silver"?[[440,.022],[554,.017]]:tier==="bronze"?[[392,.020],[466,.015]]:[[180,.018]];
  seq.forEach(([f,v],i)=>tone(f,.28,v,i?"sine":"triangle",i*.075));
}
async function runTest(){
  if(state.running)return;
  state.running=true; state.testStartedAt=performance.now(); state.results=null; soundStart();
  resetRace(); showView("#testView"); setStage("latency"); requestFullscreen();
  try{
    const SpeedTest=await ensureCloudflareEngine();
    let result;
    if(SpeedTest){
      state.engineName=t("cloudflareEngine");
      result=await new Promise((resolve,reject)=>{
        const st=new SpeedTest({
          autoStart:false,
          measurements:[
            {type:"latency",numPackets:10},
            {type:"download",bytes:1e5,count:3,bypassMinDuration:true},
            {type:"download",bytes:1e6,count:3},
            {type:"download",bytes:1e7,count:2},
            {type:"download",bytes:2.5e7,count:1},
            {type:"upload",bytes:1e5,count:3,bypassMinDuration:true},
            {type:"upload",bytes:1e6,count:3},
            {type:"upload",bytes:1e7,count:2}
          ],
          measureDownloadLoadedLatency:true,
          measureUploadLoadedLatency:true,
          bandwidthFinishRequestDuration:850
        });
        st.onResultsChange=info=>{
          const type=info?.type||"";
          if(type.includes("latency"))setStage("latency");
          else if(type.includes("download"))setStage("download");
          else if(type.includes("upload"))setStage("upload");
          updateLiveFromResults(st.results,type);
        };
        st.onError=e=>reject(new Error(String(e)));
        st.onFinish=res=>{
          const download=(safeCall(res,"getDownloadBandwidth")||0)/1e6;
          const upload=(safeCall(res,"getUploadBandwidth")||0)/1e6;
          const ping=safeCall(res,"getUnloadedLatency");
          const jitter=safeCall(res,"getUnloadedJitter");
          const dl=safeCall(res,"getDownLoadedLatency"), ul=safeCall(res,"getUpLoadedLatency");
          const loaded=[dl,ul].filter(Number.isFinite);
          resolve({download,upload,ping:Number(ping)||0,jitter:Number(jitter)||0,loadedLatency:loaded.length?Math.max(...loaded):null});
        };
        st.play();
      });
    }else result=await runFallback();

    if(!result.download || !Number.isFinite(result.ping)) throw new Error("Invalid measurement");
    setStage("analysis"); $("#liveValue").textContent=""; $("#liveUnit").textContent="";
    await new Promise(r=>setTimeout(r,500));
    result.score=calculateScore(result); const q=qualityLabel(result.score);
    document.documentElement.style.setProperty("--tier",q.color);document.documentElement.style.setProperty("--tier-rgb",q.rgb);
    $("#medalDropText").textContent=q.medal;
    $("#runner").style.setProperty("--runner-left","calc(100% - 176px)");
    $("#finishFlash").classList.add("burst"); soundFinish();
    setTimeout(()=>{$("#medalDrop").classList.add("drop");soundMedal(q.tier)},220);
    await new Promise(r=>setTimeout(r,1050));

    state.testDuration=performance.now()-state.testStartedAt;
    result.ts=Date.now(); state.results=result;
    renderResult(result); saveHistory(result);
    showView("#resultView");
  }catch(err){
    console.error(err); toast(t("engineError")); showView("#homeView");
  }finally{state.running=false}
}
function renderSettings(){
  $("#fullscreenToggle").checked=state.settings.fullscreen; $("#historyToggle").checked=state.settings.history; $("#techToggle").checked=state.settings.tech; $("#soundToggle").checked=state.settings.sound;
  setLang(state.lang);
}
$("#startBtn").addEventListener("click",runTest); $("#retestBtn").addEventListener("click",runTest);
$("#homeBtn").addEventListener("click",()=>showView("#homeView"));
$("#historyBtn").addEventListener("click",()=>{renderHistory();showView("#historyView")}); $("#backFromHistory").addEventListener("click",()=>showView("#homeView"));
$("#settingsBtn").addEventListener("click",()=>{renderSettings();openSheet("#settingsSheet","#sheetBackdrop")}); $("#closeSettings").addEventListener("click",()=>closeSheet("#settingsSheet","#sheetBackdrop")); $("#sheetBackdrop").addEventListener("click",()=>closeSheet("#settingsSheet","#sheetBackdrop"));
$("#technicalBtn").addEventListener("click",()=>openSheet("#techSheet","#techBackdrop")); $("#closeTech").addEventListener("click",()=>closeSheet("#techSheet","#techBackdrop")); $("#techBackdrop").addEventListener("click",()=>closeSheet("#techSheet","#techBackdrop"));
["#langTh","#sheetTh"].forEach(s=>$(s).addEventListener("click",()=>setLang("th")));["#langEn","#sheetEn"].forEach(s=>$(s).addEventListener("click",()=>setLang("en")));
$("#fullscreenToggle").addEventListener("change",e=>{state.settings.fullscreen=e.target.checked;localStorage.setItem("velnox.fullscreen",e.target.checked?"1":"0")});
$("#historyToggle").addEventListener("change",e=>{state.settings.history=e.target.checked;localStorage.setItem("velnox.saveHistory",e.target.checked?"1":"0")});
$("#techToggle").addEventListener("change",e=>{state.settings.tech=e.target.checked;localStorage.setItem("velnox.tech",e.target.checked?"1":"0");if(state.results)renderResult(state.results)});
$("#soundToggle").addEventListener("change",e=>{state.settings.sound=e.target.checked;localStorage.setItem("velnox.sound",e.target.checked?"1":"0");if(e.target.checked){getAudio();tone(523,.14,.018,"sine")}});
$("#clearHistoryBtn").addEventListener("click",()=>{localStorage.removeItem("velnox.history");renderLastResult();renderHistory();toast(t("historyCleared"))});
$("#compareCountryBtn").addEventListener("click",()=>{state.compareMode="country";$("#compareCountryBtn").classList.add("active");$("#compareGlobalBtn").classList.remove("active");renderCompare()});
$("#compareGlobalBtn").addEventListener("click",()=>{state.compareMode="global";$("#compareGlobalBtn").classList.add("active");$("#compareCountryBtn").classList.remove("active");renderCompare()});

function boot(){
  setLang(state.lang);renderSettings();renderLastResult();renderHistory();updateConnectionStatus();
  detectCountry().then(()=>loadBenchmarkIndex()).catch(()=>{});
  setTimeout(()=>{$("#splash").classList.add("exit");$("#mainShell").classList.remove("hidden")},1550);
  setTimeout(()=>$("#splash").remove(),2250);
  if("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("./sw.js").catch(()=>{});
}
boot();
