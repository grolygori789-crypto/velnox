const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const translations = {
  en: {
    networkHealth:"NETWORK HEALTH", knowConnection:"Know your connection.", heroCopy:"Speed, responsiveness and stability — explained clearly.",
    startTest:"START TEST", tapToAnalyze:"Tap to analyze", ready:"READY", online:"ONLINE", offline:"OFFLINE", lastTest:"LAST TEST",
    privacyLine:"No account. History stays on this device.", liveDiagnostic:"LIVE DIAGNOSTIC", checkingResponse:"Checking response time…",
    checkingDownload:"Measuring download throughput…", checkingUpload:"Measuring upload throughput…", analyzing:"Analyzing connection quality…",
    latency:"PING", download:"DOWNLOAD", upload:"UPLOAD", jitter:"JITTER", analysis:"ANALYSIS",
    dataUsage:"The test transfers data to estimate real connection performance. Fast connections may use larger test samples.", connectionQuality:"CONNECTION QUALITY", velnoxScore:"VELNOX SCORE",
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
    useExcellent:"Excellent for this activity", useGood:"Good for this activity", useFair:"Usable, but not ideal", useLimited:"May have limitations",
    benchmarkLoading:"Loading Velnox Standard Base…", benchmarkUnavailable:"Standard Base has not been synced yet", benchmarkUnavailableBody:"Country and worldwide percentile ranking will appear here after the verified benchmark files are generated.",
    benchmarkSetup:"Source architecture ready • Cloudflare Radar • rolling 90-day distribution", overallRank:"OVERALL POSITION", betterThan:"Performs better than about {x}% of measured connections", topPercent:"TOP {x}%", median:"Median", benchmarkWindow:"Benchmark window", previous90Days:"Previous 90 days", source:"Source", updated:"Updated", detectedCountry:"Detected country", worldwide:"Worldwide",
    downloadRank:"Download", uploadRank:"Upload", latencyRank:"Latency", jitterRank:"Jitter", benchmarkNote:"Percentiles are estimated from bucketed distributions; lower latency and jitter are ranked as better.", countryFallback:"Country could not be detected automatically; using your browser locale when possible.", benchmarkNotAvailableCountry:"A verified benchmark file is not available for {country} yet.",
    benchmarkCloudflare:"Cloudflare Radar", benchmarkReady:"VERIFIED STANDARD BASE",
    networkLocation:"NETWORK LOCATION", detectedAutomatically:"Detected automatically", localeEstimate:"Estimated from browser locale",
    vpnNote:"Based on the network exit location. A VPN or proxy can change the detected country.", worldwideBenchmark:"Worldwide benchmark",
    benchmarkComposite:"Weighted composite of download, upload, latency and jitter percentiles.", benchmarkFresh:"Current benchmark", benchmarkStale:"Benchmark may be stale",
    benchmarkIndexName:"VELNOX BENCHMARK INDEX", benchmarkDataAge:"Data age", days:"days", yourValue:"You",
    offlineTest:"You are offline. Reconnect and try again.", testTimedOut:"The test took too long to complete. Please try again.", benchmarkInvalid:"Benchmark data failed validation.",
    measurementConfidence:"Measurement confidence", confidenceHigh:"High", confidenceMedium:"Medium", confidenceLow:"Low", confidenceUnknown:"Not enough samples",
    unstableMeasurementTitle:"Measurement varied during this test", unstableMeasurementBody:"Throughput samples changed noticeably while testing. For a more reliable comparison, pause other network activity and run the test again.",
    rankConfidenceNote:"This ranking is based on the current measurement. Retest if the connection was changing during the test.", partialBenchmarkNote:"Radar did not expose every histogram metric in this sync; unavailable ranks are shown as —.", estimatedTopPercent:"EST. TOP {x}%", estimatedOverall:"Estimated overall standing",
    soundUnavailable:"Sound is unavailable in this browser or device audio session."
  },
  th: {
    networkHealth:"สุขภาพเครือข่าย", knowConnection:"รู้จักเน็ตของคุณให้ชัด", heroCopy:"ทั้งความเร็ว การตอบสนอง และความเสถียร — อธิบายให้เข้าใจง่าย",
    startTest:"เริ่มทดสอบ", tapToAnalyze:"แตะเพื่อวิเคราะห์", ready:"พร้อม", online:"ออนไลน์", offline:"ออฟไลน์", lastTest:"การทดสอบล่าสุด",
    privacyLine:"ไม่ต้องสมัครบัญชี ประวัติเก็บไว้ในอุปกรณ์นี้", liveDiagnostic:"กำลังตรวจสอบแบบเรียลไทม์", checkingResponse:"กำลังตรวจสอบเวลาตอบสนอง…",
    checkingDownload:"กำลังวัดความเร็วดาวน์โหลด…", checkingUpload:"กำลังวัดความเร็วอัปโหลด…", analyzing:"กำลังวิเคราะห์คุณภาพการเชื่อมต่อ…",
    latency:"PING", download:"ดาวน์โหลด", upload:"อัปโหลด", jitter:"JITTER", analysis:"วิเคราะห์",
    dataUsage:"การทดสอบจะรับส่งข้อมูลเพื่อประเมินประสิทธิภาพการเชื่อมต่อจริง เน็ตความเร็วสูงอาจใช้ข้อมูลทดสอบในปริมาณมากขึ้น", connectionQuality:"คุณภาพการเชื่อมต่อ", velnoxScore:"คะแนน VELNOX",
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
    noBenchmark:"ยังไม่ได้เชื่อมข้อมูล Benchmark ที่ตรวจสอบแล้ว", noBenchmarkCopy:"ระบบเปรียบเทียบพร้อมใช้งาน แต่ Velnox จะไม่สร้างอันดับประเทศหรือทั่วโลกขึ้นมาเอง ต้องเชื่อมชุดข้อมูลปัจจุบันที่ตรวจสอบแหล่งข้อมูลแล้วก่อนใช้งานจริง",
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
    useExcellent:"เหมาะอย่างยิ่งสำหรับการใช้งานนี้", useGood:"ใช้งานได้ดี", useFair:"ใช้งานได้ แต่อาจไม่เหมาะที่สุด", useLimited:"อาจมีข้อจำกัด",
    benchmarkLoading:"กำลังโหลด Velnox Standard Base…", benchmarkUnavailable:"ยังไม่ได้ซิงก์ Standard Base", benchmarkUnavailableBody:"อันดับเปอร์เซ็นไทล์ระดับประเทศและทั่วโลกจะแสดงที่นี่เมื่อสร้างไฟล์ Benchmark ที่ตรวจสอบแหล่งข้อมูลแล้ว",
    benchmarkSetup:"โครงสร้างพร้อม • Cloudflare Radar • ข้อมูลแบบ Rolling 90 วัน", overallRank:"อันดับโดยรวม", betterThan:"ประสิทธิภาพดีกว่าประมาณ {x}% ของผลวัดในฐานข้อมูล", topPercent:"TOP {x}%", median:"ค่ากลาง", benchmarkWindow:"ช่วงข้อมูลอ้างอิง", previous90Days:"90 วันที่ผ่านมา", source:"แหล่งข้อมูล", updated:"อัปเดต", detectedCountry:"ประเทศที่ตรวจพบ", worldwide:"ทั่วโลก",
    downloadRank:"ดาวน์โหลด", uploadRank:"อัปโหลด", latencyRank:"Latency", jitterRank:"Jitter", benchmarkNote:"เปอร์เซ็นไทล์เป็นค่าประมาณจากข้อมูลแบบแบ่งช่วง โดย Latency และ Jitter ที่ต่ำกว่าจะถือว่าดีกว่า", countryFallback:"ไม่สามารถตรวจประเทศอัตโนมัติได้ จึงจะใช้ภูมิภาคจากภาษาของเบราว์เซอร์เมื่อทำได้", benchmarkNotAvailableCountry:"ยังไม่มีไฟล์ Benchmark ที่ตรวจสอบแล้วสำหรับ {country}",
    benchmarkCloudflare:"Cloudflare Radar", benchmarkReady:"STANDARD BASE ที่ตรวจสอบแล้ว",
    networkLocation:"ตำแหน่งเครือข่าย", detectedAutomatically:"ตรวจพบอัตโนมัติ", localeEstimate:"ประมาณจากภูมิภาคของเบราว์เซอร์",
    vpnNote:"อ้างอิงจากตำแหน่งปลายทางของเครือข่าย VPN หรือ Proxy อาจทำให้ประเทศที่ตรวจพบเปลี่ยนไป", worldwideBenchmark:"เกณฑ์เปรียบเทียบทั่วโลก",
    benchmarkComposite:"ดัชนีรวมแบบถ่วงน้ำหนักจากเปอร์เซ็นไทล์ Download, Upload, Latency และ Jitter", benchmarkFresh:"Benchmark ปัจจุบัน", benchmarkStale:"Benchmark อาจเก่าเกินไป",
    benchmarkIndexName:"ดัชนี VELNOX BENCHMARK", benchmarkDataAge:"อายุข้อมูล", days:"วัน", yourValue:"คุณ",
    offlineTest:"ขณะนี้ออฟไลน์ กรุณาเชื่อมต่ออินเทอร์เน็ตแล้วลองใหม่", testTimedOut:"การทดสอบใช้เวลานานเกินกำหนด กรุณาลองใหม่", benchmarkInvalid:"ข้อมูล Benchmark ไม่ผ่านการตรวจสอบ",
    measurementConfidence:"ความมั่นใจของผลวัด", confidenceHigh:"สูง", confidenceMedium:"ปานกลาง", confidenceLow:"ต่ำ", confidenceUnknown:"ตัวอย่างยังไม่เพียงพอ",
    unstableMeasurementTitle:"ค่าที่วัดแกว่งระหว่างการทดสอบ", unstableMeasurementBody:"ตัวอย่างความเร็วเปลี่ยนแปลงค่อนข้างมากระหว่างทดสอบ เพื่อให้การเปรียบเทียบน่าเชื่อถือขึ้น ควรหยุดกิจกรรมเครือข่ายอื่นชั่วคราวแล้วทดสอบอีกครั้ง",
    rankConfidenceNote:"อันดับนี้อ้างอิงจากผลวัดครั้งปัจจุบัน หากเครือข่ายมีการเปลี่ยนแปลงระหว่างทดสอบ ควรทดสอบซ้ำ", partialBenchmarkNote:"รอบซิงก์นี้ Radar ไม่ได้ส่ง Histogram ครบทุกค่า อันดับที่ไม่มีข้อมูลจะแสดงเป็น — โดย Velnox จะไม่สร้างค่าขึ้นเอง", estimatedTopPercent:"ประมาณ TOP {x}%", estimatedOverall:"อันดับโดยรวมโดยประมาณ",
    soundUnavailable:"ไม่สามารถเปิดเสียงได้ในเบราว์เซอร์หรือสถานะเสียงของอุปกรณ์นี้"
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
  countryDetectionSource:null,
  countryApproximate:false,
  benchmarkIndex:null,
  benchmarkCache:{},
  running:false,
  runSerial:0,
  activeEngine:null,
  abortController:null,
  cancelCurrent:null,
  visualStage:"latency",
  visualStageIndex:0
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
  if(state.countryCode)state.countryName=countryDisplayName(state.countryCode);
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
function useRating(level){
  const labels={excellent:t("excellent"),good:t("good"),fair:t("fair"),limited:t("limited")};
  return {label:labels[level]||labels.limited,cls:level in labels?level:"limited"};
}
function rateFour(okExcellent,okGood,okFair){
  if(okExcellent)return useRating("excellent");
  if(okGood)return useRating("good");
  if(okFair)return useRating("fair");
  return useRating("limited");
}
function loadedDelta(r){
  if(!Number.isFinite(r.loadedLatency)||!Number.isFinite(r.ping))return null;
  return Math.max(0,r.loadedLatency-r.ping);
}
function buildUseCases(r){
  // V1.5.2: classify only from metrics Velnox actually measures. Cloudflare AIM is
  // retained in raw results for diagnostics, but it is not an authoritative override
  // because Velnox intentionally omits packet-loss measurement in this release.
  const load=loadedDelta(r), loadWithin=max=>load===null||load<=max;
  const fourK=rateFour(
    r.download>=50&&r.jitter<=15&&loadWithin(120),
    r.download>=25&&r.jitter<=25&&loadWithin(180),
    r.download>=15&&r.jitter<=35&&loadWithin(260)
  );
  const online=rateFour(
    r.download>=10&&r.upload>=2&&r.ping<=30&&r.jitter<=7&&loadWithin(50),
    r.download>=5&&r.upload>=1&&r.ping<=50&&r.jitter<=12&&loadWithin(90),
    r.download>=3&&r.upload>=.5&&r.ping<=80&&r.jitter<=25&&loadWithin(160)
  );
  const calls=rateFour(
    r.download>=10&&r.upload>=10&&r.ping<=40&&r.jitter<=10&&loadWithin(80),
    r.download>=5&&r.upload>=5&&r.ping<=80&&r.jitter<=20&&loadWithin(140),
    r.download>=2&&r.upload>=2&&r.ping<=150&&r.jitter<=35&&loadWithin(240)
  );
  const cloud=rateFour(
    r.download>=50&&r.ping<=30&&r.jitter<=8&&loadWithin(60),
    r.download>=25&&r.ping<=50&&r.jitter<=15&&loadWithin(110),
    r.download>=15&&r.ping<=80&&r.jitter<=25&&loadWithin(180)
  );
  const live=rateFour(
    r.upload>=20&&r.ping<=50&&r.jitter<=10&&loadWithin(100),
    r.upload>=10&&r.ping<=80&&r.jitter<=20&&loadWithin(160),
    r.upload>=5&&r.ping<=120&&r.jitter<=30&&loadWithin(260)
  );
  const downloads=rateFour(r.download>=200,r.download>=50,r.download>=15);
  const items=[
    [t("streaming4k"),"▻",fourK],
    [t("onlineGaming"),"⌁",online],
    [t("videoCalls"),"◫",calls],
    [t("cloudGaming"),"◇",cloud],
    [t("liveStreaming"),"●",live],
    [t("largeDownloads"),"⇣",downloads]
  ];
  return items.map(([name,icon,rating])=>{
    const help=rating.cls==="excellent"?t("useExcellent"):rating.cls==="good"?t("useGood"):rating.cls==="fair"?t("useFair"):t("useLimited");
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
  if(r.confidence?.level==="low") items.push({title:t("unstableMeasurementTitle"),body:t("unstableMeasurementBody"),warn:true});
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
function countryFlag(code){
  if(!code || !/^[A-Z]{2}$/i.test(code))return "◎";
  return code.toUpperCase().replace(/./g,c=>String.fromCodePoint(127397+c.charCodeAt(0)));
}
function localeCountryFallback(){
  try{
    const locale=new Intl.Locale(navigator.language||"");
    if(locale.region)return locale.region.toUpperCase();
  }catch{}
  const part=(navigator.language||"").split("-")[1];
  return part?part.toUpperCase():null;
}
function setDetectedCountry(code,source,approximate=false){
  if(!code || !/^[A-Z]{2}$/i.test(code))return null;
  state.countryCode=code.toUpperCase();
  state.countryName=countryDisplayName(state.countryCode);
  state.countryDetectionSource=source;
  state.countryApproximate=!!approximate;
  return state.countryCode;
}
async function detectCountry(){
  if(state.countryCode)return state.countryCode;
  try{
    const r=await fetch("https://speed.cloudflare.com/meta",{cache:"no-store"});
    if(r.ok){
      const meta=await r.json();
      if(meta?.country && /^[A-Za-z]{2}$/.test(meta.country))return setDetectedCountry(meta.country,"cloudflare-meta",false);
    }
  }catch{}
  try{
    const r=await fetch("https://cloudflare-dns.com/cdn-cgi/trace",{cache:"no-store"});
    if(r.ok){
      const text=await r.text(),m=text.match(/^loc=([A-Za-z]{2})$/m);
      if(m)return setDetectedCountry(m[1],"cloudflare-trace",false);
    }
  }catch{}
  const fallback=localeCountryFallback();
  if(fallback)return setDetectedCountry(fallback,"locale",true);
  state.countryDetectionSource="unknown";
  state.countryApproximate=true;
  return null;
}
function benchmarkIndexValid(index){
  return !!(index && Number(index.schemaVersion)>=1 && typeof index.ready==="boolean" && Array.isArray(index.countries));
}
function benchmarkDataValid(data){
  if(!data || Number(data.schemaVersion)<1 || !data.metrics)return false;
  const validMetric=m=>m && Array.isArray(m.bucketMin) && Array.isArray(m.counts) && m.bucketMin.length>0 && m.bucketMin.length===m.counts.length;
  if(!validMetric(data.metrics.download) || !validMetric(data.metrics.upload))return false;
  for(const k of ["latency","jitter"]){
    if(data.metrics[k] && !validMetric(data.metrics[k]))return false;
  }
  return true;
}
async function loadBenchmarkIndex(force=false){
  if(!force && state.benchmarkIndex!==null)return state.benchmarkIndex;
  try{
    const r=await fetch(`./benchmarks/index.json?ts=${Date.now()}`,{cache:"no-store"});
    if(!r.ok)throw new Error("benchmark index unavailable");
    const index=await r.json();
    if(!benchmarkIndexValid(index))throw new Error("benchmark index invalid");
    state.benchmarkIndex=index;
  }catch{state.benchmarkIndex={schemaVersion:1,ready:false,countries:[]}}
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
    const version=index.generatedAt||index.lastUpdated||Date.now();
    const r=await fetch(`./benchmarks/${file}?v=${encodeURIComponent(version)}`,{cache:"no-store"});
    if(!r.ok)throw new Error("benchmark unavailable");
    const data=await r.json();
    if(!benchmarkDataValid(data))throw new Error("benchmark invalid");
    state.benchmarkCache[code]=data; return data;
  }catch{state.benchmarkCache[code]=null;return null}
}
function benchmarkAgeDays(data){
  const raw=data?.lastUpdated||data?.generatedAt;
  if(!raw)return null;
  const ms=Date.now()-new Date(raw).getTime();
  return Number.isFinite(ms)?Math.max(0,ms/86400000):null;
}
function benchmarkFreshness(data){
  const age=benchmarkAgeDays(data);
  if(!Number.isFinite(age))return {fresh:false,age:null};
  return {fresh:age<=14,age};
}
function detectionLabel(){
  return state.countryApproximate?t("localeEstimate"):t("detectedAutomatically");
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
function estimatedTopText(goodness){
  if(!Number.isFinite(goodness))return "—";
  const top=100-goodness;
  return t("estimatedTopPercent",{x:top<1?"<1":String(Math.max(1,Math.round(top)))})
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
function benchmarkMetricCard(label,key,rank,unit,current){
  const g=rank.goodness[key],med=rank.medians[key];
  const fmt=v=>key==="latency"||key==="jitter"?Number(v).toFixed(1):formatSpeed(Number(v));
  const medText=Number.isFinite(med)?`${fmt(med)} ${unit}`:"—";
  const yourText=Number.isFinite(current)?`${fmt(current)} ${unit}`:"—";
  return `<div class="benchmark-metric"><span>${label}</span><b>${topText(g)}</b><small><strong>${t("yourValue")}:</strong> ${yourText}</small><small>${t("median")}: ${medText}</small></div>`;
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
  const locationCode=scope==="global"?"GLOBAL":state.countryCode;
  const locationName=scope==="global"?t("worldwide"):(state.countryName||countryDisplayName(locationCode)||"—");
  const locationSymbol=scope==="global"?"◎":countryFlag(locationCode);
  const locationMeta=scope==="global"?t("worldwideBenchmark"):detectionLabel();
  if(!data){
    const detail=scope==="country"&&state.countryCode?t("benchmarkNotAvailableCountry",{country:locationName}):t("benchmarkUnavailableBody");
    host.innerHTML=`<div class="benchmark-location-preview"><span class="benchmark-flag">${locationSymbol}</span><div><b>${locationName}</b><small>${locationMeta}</small></div></div><div class="benchmark-empty-v12"><b>${t("benchmarkUnavailable")}</b><p>${detail}</p><small>${t("benchmarkSetup")}</small></div>${scope==="country"?`<p class="benchmark-privacy-note">${t("vpnNote")}</p>`:""}`;
    return;
  }
  const rank=benchmarkRank(current,data),overall=rank.overall;
  const better=Number.isFinite(overall)?Math.round(overall):0;
  const freshness=benchmarkFreshness(data),ageText=Number.isFinite(freshness.age)?`${Math.round(freshness.age)} ${t("days")}`:"—";
  host.innerHTML=`
    <div class="benchmark-rank-hero">
      <div class="benchmark-top"><span>${t("benchmarkIndexName")}</span><strong>${estimatedTopText(overall)}</strong><small>${better}/100</small></div>
      <div class="benchmark-copy">
        <div class="benchmark-location"><span class="benchmark-flag">${locationSymbol}</span><div><b>${locationName}</b><small>${locationMeta}</small></div></div>
        <b>${Number.isFinite(overall)?`${t("estimatedOverall")} • ${t("betterThan",{x:better})}`:"—"}</b>
        <p>${t("benchmarkComposite")}</p>
        <span class="benchmark-freshness ${freshness.fresh?"fresh":"stale"}">${freshness.fresh?t("benchmarkFresh"):t("benchmarkStale")} • ${ageText}</span>
      </div>
    </div>
    <div class="benchmark-metrics">
      ${benchmarkMetricCard(t("downloadRank"),"download",rank,"Mbps",current.download)}
      ${benchmarkMetricCard(t("uploadRank"),"upload",rank,"Mbps",current.upload)}
      ${benchmarkMetricCard(t("latencyRank"),"latency",rank,"ms",current.ping)}
      ${benchmarkMetricCard(t("jitterRank"),"jitter",rank,"ms",current.jitter)}
    </div>
    <div class="benchmark-foot"><span><b>${t("source")}:</b> ${data.source||t("benchmarkCloudflare")}</span><span><b>${t("benchmarkWindow")}:</b> ${t("previous90Days")}</span><span><b>${t("updated")}:</b> ${benchmarkUpdated(data)}</span></div>
    ${data.partial?`<p class="benchmark-partial-note">${t("partialBenchmarkNote")}</p>`:""}
    ${current.confidence?.level==="low"?`<p class="benchmark-confidence-note">${t("rankConfidenceNote")}</p>`:""}
    ${scope==="country"?`<p class="benchmark-privacy-note">${t("vpnNote")}</p>`:""}`;
}
function renderTech(r){
  const benchmarkReady=!!state.benchmarkIndex?.ready;
  const rows=[
    [t("engine"),state.engineName||"—"],
    [t("measurementConfidence"),confidenceLabel(r.confidence)],
    [t("loadedLatency"),Number.isFinite(r.loadedLatency)?`${r.loadedLatency.toFixed(1)} ms`:"—"],
    [t("jitterIdle"),`${r.jitter.toFixed(1)} ms`],
    [t("testDuration"),state.testDuration?`${(state.testDuration/1000).toFixed(1)} s`:"—"],
    [t("measuredAt"),new Date().toLocaleString(state.lang==="th"?"th-TH":"en-GB")],
    [t("browserMode"),window.matchMedia("(display-mode: standalone)").matches?"PWA / standalone":"Browser"],
    [t("networkLocation"),state.countryCode?`${countryFlag(state.countryCode)} ${state.countryName||state.countryCode} • ${detectionLabel()}`:"—"],
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
function setStage(stage,force=false){
  const map={
    latency:["8%","Latency",t("checkingResponse"),"ms"],
    download:["31%","Download",t("checkingDownload"),"Mbps"],
    upload:["52%","Upload",t("checkingUpload"),"Mbps"],
    analysis:["calc(100% - 205px)","Analysis",t("analyzing"),""]
  };
  const order=["latency","download","upload","analysis"],idx=order.indexOf(stage);
  if(idx<0)return;
  if(!force&&idx<state.visualStageIndex)return;
  state.visualStage=stage; state.visualStageIndex=idx;
  const [x,title,copy,unit]=map[stage];
  $("#runner").style.setProperty("--runner-left",x);
  $("#stageTitle").textContent=title; $("#stageCopy").textContent=copy; $("#liveUnit").textContent=unit;
  if(stage==="download"||stage==="upload") $("#speedTrail").classList.add("fast"); else $("#speedTrail").classList.remove("fast");
  $$(".stage-item").forEach((el,i)=>{el.classList.toggle("active",i===idx);el.classList.toggle("done",i<idx)});
  $("#line1").style.width=idx>=1?"100%":"0"; $("#line2").style.width=idx>=2?"100%":"0"; $("#line3").style.width=idx>=3?"100%":"0";
}
function safeCall(obj,name){try{return obj?.[name]?.()}catch{return null}}
function updateLiveFromResults(res,type){
  const ping=safeCall(res,"getUnloadedLatency"), jitter=safeCall(res,"getUnloadedJitter");
  const down=safeCall(res,"getDownloadBandwidth"), up=safeCall(res,"getUploadBandwidth");
  if(Number.isFinite(ping))$("#miniPing").textContent=`${ping.toFixed(0)} ms`;
  if(Number.isFinite(jitter))$("#miniJitter").textContent=`${jitter.toFixed(1)} ms`;
  if(Number.isFinite(down))$("#miniDown").textContent=`${(down/1e6).toFixed(1)} Mbps`;
  if(Number.isFinite(up))$("#miniUp").textContent=`${(up/1e6).toFixed(1)} Mbps`;
  if(state.visualStage==="latency"&&Number.isFinite(ping))$("#liveValue").textContent=ping.toFixed(0);
  else if(state.visualStage==="download"&&Number.isFinite(down))$("#liveValue").textContent=(down/1e6).toFixed(1);
  else if(state.visualStage==="upload"&&Number.isFinite(up))$("#liveValue").textContent=(up/1e6).toFixed(1);
}
async function requestFullscreen(){
  if(!state.settings.fullscreen)return;
  try{
    if(document.fullscreenElement)return;
    if(document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen({navigationUI:"hide"});
  }catch{ /* browser may require different gesture handling */ }
}
function resetRace(){
  state.visualStage="latency"; state.visualStageIndex=0;
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
function numericPercentile(values,p=.5){
  const a=(values||[]).filter(Number.isFinite).sort((x,y)=>x-y);
  if(!a.length)return NaN;
  const pos=(a.length-1)*clamp(p,0,1),lo=Math.floor(pos),hi=Math.ceil(pos);
  return a[lo]+(a[hi]-a[lo])*(pos-lo);
}
function coefficientOfVariation(values){
  const xs=(values||[]).map(Number).filter(Number.isFinite).filter(v=>v>0);
  if(xs.length<3)return null;
  const mean=xs.reduce((a,b)=>a+b,0)/xs.length;
  if(!mean)return null;
  const variance=xs.reduce((a,v)=>a+(v-mean)*(v-mean),0)/xs.length;
  return Math.sqrt(variance)/mean;
}
function confidenceFromSamples(downloadPoints=[],uploadPoints=[],latencyPoints=[]){
  const bandwidthValues=points=>{
    const valid=(points||[]).filter(p=>Number.isFinite(p?.bps));
    let stable=valid.filter(p=>Number(p.duration)>=250);
    if(stable.length<3)stable=valid.filter(p=>Number(p.duration)>=80);
    return stable.map(p=>Number(p.bps)/1e6);
  };
  const down=bandwidthValues(downloadPoints),up=bandwidthValues(uploadPoints);
  const lat=(latencyPoints||[]).map(Number).filter(Number.isFinite).filter(v=>v>0);
  const downCv=coefficientOfVariation(down),upCv=coefficientOfVariation(up),latCv=coefficientOfVariation(lat);
  const cvs=[downCv,upCv,latCv].filter(Number.isFinite);
  if(cvs.length<2)return {level:"unknown",downCv,upCv,latCv,samples:{download:down.length,upload:up.length,latency:lat.length}};
  const worst=Math.max(...cvs),avg=cvs.reduce((a,b)=>a+b,0)/cvs.length;
  let level="high";
  if(worst>.55||avg>.38)level="low";
  else if(worst>.35||avg>.24)level="medium";
  return {level,downCv,upCv,latCv,samples:{download:down.length,upload:up.length,latency:lat.length}};
}
function confidenceLabel(conf){
  const level=conf?.level||"unknown";
  return level==="high"?t("confidenceHigh"):level==="medium"?t("confidenceMedium"):level==="low"?t("confidenceLow"):t("confidenceUnknown");
}
async function runFallback(signal){
  // Fallback is intentionally slower and more conservative than V1.3.
  // Warm-up samples are ignored and bandwidth is aggregated with a percentile, not Math.max().
  state.engineName=t("fallbackEngine");
  const base="https://speed.cloudflare.com";
  const pings=[];
  setStage("latency");
  for(let i=0;i<14;i++){
    const s=performance.now();
    await fetch(`${base}/__down?bytes=0&_=${Date.now()}-${i}`,{cache:"no-store",signal});
    const p=performance.now()-s;
    if(i>=2)pings.push(p);
    $("#liveValue").textContent=p.toFixed(0);$("#miniPing").textContent=`${p.toFixed(0)} ms`;
  }
  const ping=numericPercentile(pings,.5);
  const deltas=pings.slice(1).map((v,i)=>Math.abs(v-pings[i]));
  const jitter=numericPercentile(deltas,.5);
  $("#miniJitter").textContent=`${jitter.toFixed(1)} ms`;

  const measureDown=async(bytes)=>{
    const s=performance.now();
    const r=await fetch(`${base}/__down?bytes=${bytes}&_=${Date.now()}-${Math.random()}`,{cache:"no-store",signal});
    const blob=await r.blob();
    const sec=(performance.now()-s)/1000;
    return {mbps:(blob.size*8/sec)/1e6,ms:sec*1000};
  };
  const measureUp=async(bytes)=>{
    const body=new Uint8Array(bytes),s=performance.now();
    await fetch(`${base}/__up?_=${Date.now()}-${Math.random()}`,{method:"POST",body,cache:"no-store",signal});
    const sec=(performance.now()-s)/1000;
    return {mbps:(bytes*8/sec)/1e6,ms:sec*1000};
  };

  setStage("download");
  const dvals=[];
  for(const bytes of [1e6,5e6,2e7,5e7,1e8]){
    for(let i=0;i<2;i++){
      const m=await measureDown(bytes);
      if(m.ms>=80)dvals.push(m.mbps);
      $("#liveValue").textContent=m.mbps.toFixed(1);$("#miniDown").textContent=`${m.mbps.toFixed(1)} Mbps`;
    }
    if(dvals.length>=4 && dvals.slice(-2).every(v=>Number.isFinite(v))){
      const lastMedian=numericPercentile(dvals.slice(-2),.5);
      if(bytes>=2e7 && lastMedian<120)break;
    }
  }

  setStage("upload");
  const uvals=[];
  for(const bytes of [5e5,2e6,8e6,2e7,5e7]){
    for(let i=0;i<2;i++){
      const m=await measureUp(bytes);
      if(m.ms>=80)uvals.push(m.mbps);
      $("#liveValue").textContent=m.mbps.toFixed(1);$("#miniUp").textContent=`${m.mbps.toFixed(1)} Mbps`;
    }
    if(uvals.length>=4 && bytes>=8e6){
      const lastMedian=numericPercentile(uvals.slice(-2),.5);
      if(lastMedian<80)break;
    }
  }
  const confidence=confidenceFromSamples(
    dvals.map(v=>({bps:v*1e6,duration:300})),
    uvals.map(v=>({bps:v*1e6,duration:300})),
    pings
  );
  return {download:numericPercentile(dvals,.8),upload:numericPercentile(uvals,.8),ping,jitter,loadedLatency:null,confidence};
}
let audioCtx=null;
async function ensureAudioReady(){
  if(!state.settings.sound)return null;
  try{
    const AudioCtor=window.AudioContext||window.webkitAudioContext;
    if(!AudioCtor)return null;
    audioCtx ||= new AudioCtor({latencyHint:"interactive"});
    if(audioCtx.state==="suspended"){
      const resumeTask=audioCtx.resume();
      await Promise.race([resumeTask,new Promise(resolve=>setTimeout(resolve,800))]);
    }
    return audioCtx.state==="running"?audioCtx:null;
  }catch{return null}
}
function scheduleTone(a,freq=440,dur=.12,vol=.035,type="sine",delay=0){
  if(!a||a.state!=="running")return false;
  const o=a.createOscillator(),g=a.createGain(),now=a.currentTime+delay;
  o.type=type;o.frequency.setValueAtTime(freq,now);g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(vol,now+.015);g.gain.exponentialRampToValueAtTime(.0001,now+dur);
  o.connect(g).connect(a.destination);o.start(now);o.stop(now+dur+.03);return true;
}
async function soundStart(){
  const a=await ensureAudioReady(); if(!a)return false;
  scheduleTone(a,170,.16,.038,"sine"); scheduleTone(a,340,.13,.022,"triangle",.045); return true;
}
async function soundFinish(){
  const a=await ensureAudioReady(); if(!a)return false;
  const o=a.createOscillator(),g=a.createGain(),now=a.currentTime;o.type="sine";o.frequency.setValueAtTime(260,now);o.frequency.exponentialRampToValueAtTime(820,now+.18);g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(.038,now+.025);g.gain.exponentialRampToValueAtTime(.0001,now+.21);o.connect(g).connect(a.destination);o.start(now);o.stop(now+.24);return true;
}
async function soundMedal(tier){
  const a=await ensureAudioReady(); if(!a)return false;
  const seq=tier==="gold"?[[523,.046],[659,.040],[784,.034]]:tier==="silver"?[[440,.040],[554,.033]]:tier==="bronze"?[[392,.036],[466,.030]]:[[180,.032]];
  seq.forEach(([f,v],i)=>scheduleTone(a,f,.30,v,i?"sine":"triangle",i*.075)); return true;
}
function cancelError(){return new Error("VELNOX_CANCELLED")}
function withTimeoutAndCancel(promise,ms=75000,runId=state.runSerial){
  let timer=null,cancelReject=null;
  const cancelPromise=new Promise((_,reject)=>{cancelReject=()=>reject(cancelError())});
  if(runId===state.runSerial)state.cancelCurrent=cancelReject;
  const timeoutPromise=new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error("VELNOX_TIMEOUT")),ms)});
  return Promise.race([promise,cancelPromise,timeoutPromise]).finally(()=>{
    if(timer)clearTimeout(timer);
    if(state.cancelCurrent===cancelReject)state.cancelCurrent=null;
  });
}
async function cancelActiveTest({returnHome=true}={}){
  if(!state.running)return false;
  state.runSerial+=1;
  try{state.activeEngine?.pause?.()}catch{}
  state.activeEngine=null;
  try{state.abortController?.abort()}catch{}
  state.abortController=null;
  const cancel=state.cancelCurrent; state.cancelCurrent=null;
  if(cancel)cancel();
  state.running=false; state.results=null;
  if(returnHome){resetRace();showView("#homeView")}
  return true;
}
async function runTest(){
  if(state.running)return;
  if(!navigator.onLine){toast(t("offlineTest"));return}
  const runId=++state.runSerial;
  const controller=new AbortController();
  state.abortController=controller; state.running=true; state.testStartedAt=performance.now(); state.results=null;
  let engine=null;
  try{
    resetRace(); showView("#testView"); setStage("latency",true);
    // Trigger fullscreen and audio unlock synchronously from the same user gesture.
    // Both are best-effort side effects and never gate the measurement engine.
    requestFullscreen();
    soundStart();
    if(runId!==state.runSerial)throw cancelError();
    const SpeedTest=await ensureCloudflareEngine();
    if(runId!==state.runSerial)throw cancelError();
    let result;
    if(SpeedTest){
      state.engineName=t("cloudflareEngine");
      const measurementPromise=new Promise((resolve,reject)=>{
        const st=new SpeedTest({
          autoStart:false,
          // Accuracy-first profile based closely on Cloudflare Speedtest's current default plan,
          // with packet-loss omitted so Velnox does not depend on TURN/WebRTC availability.
          measurements:[
            {type:"latency",numPackets:2},
            {type:"download",bytes:1e5,count:1,bypassMinDuration:true},
            {type:"latency",numPackets:20},
            {type:"download",bytes:1e5,count:9},
            {type:"latency",numPackets:2},
            {type:"download",bytes:1e6,count:8},
            {type:"latency",numPackets:2},
            {type:"upload",bytes:1e5,count:8},
            {type:"latency",numPackets:2},
            {type:"upload",bytes:1e6,count:6},
            {type:"latency",numPackets:2},
            {type:"download",bytes:1e7,count:6},
            {type:"latency",numPackets:2},
            {type:"upload",bytes:1e7,count:4},
            {type:"latency",numPackets:2},
            {type:"download",bytes:2.5e7,count:4},
            {type:"latency",numPackets:2},
            {type:"upload",bytes:2.5e7,count:4},
            {type:"latency",numPackets:2},
            {type:"download",bytes:1e8,count:3},
            {type:"latency",numPackets:2},
            {type:"upload",bytes:5e7,count:3},
            {type:"latency",numPackets:2},
            {type:"download",bytes:2.5e8,count:2}
          ],
          measureDownloadLoadedLatency:true,
          measureUploadLoadedLatency:true,
          bandwidthFinishRequestDuration:1000,
          bandwidthPercentile:.9,
          latencyPercentile:.5,
          bandwidthMinRequestDuration:10,
          loadedRequestMinDuration:250,
          logAimApiUrl:null
        });
        engine=st; state.activeEngine=st;
        st.onResultsChange=info=>{
          if(runId!==state.runSerial)return;
          const type=info?.type||"";
          if(type.includes("latency"))setStage("latency");
          else if(type.includes("download"))setStage("download");
          else if(type.includes("upload"))setStage("upload");
          updateLiveFromResults(st.results,type);
        };
        st.onError=e=>reject(new Error(String(e)));
        st.onFinish=res=>{
          if(runId!==state.runSerial){reject(cancelError());return}
          const download=(safeCall(res,"getDownloadBandwidth")||0)/1e6;
          const upload=(safeCall(res,"getUploadBandwidth")||0)/1e6;
          const ping=safeCall(res,"getUnloadedLatency");
          const jitter=safeCall(res,"getUnloadedJitter");
          const dl=safeCall(res,"getDownLoadedLatency"), ul=safeCall(res,"getUpLoadedLatency");
          const loaded=[dl,ul].filter(Number.isFinite);
          const aimScores=safeCall(res,"getScores")||null;
          const downloadPoints=safeCall(res,"getDownloadBandwidthPoints")||[];
          const uploadPoints=safeCall(res,"getUploadBandwidthPoints")||[];
          const latencyPoints=safeCall(res,"getUnloadedLatencyPoints")||[];
          const confidence=confidenceFromSamples(downloadPoints,uploadPoints,latencyPoints);
          resolve({download,upload,ping:Number(ping)||0,jitter:Number(jitter)||0,loadedLatency:loaded.length?Math.max(...loaded):null,aimScores,confidence});
        };
        st.play();
      });
      result=await withTimeoutAndCancel(measurementPromise,120000,runId);
    }else{
      state.engineName=t("fallbackEngine");
      result=await withTimeoutAndCancel(runFallback(controller.signal),120000,runId);
    }

    if(runId!==state.runSerial)throw cancelError();
    if(!result.download || !Number.isFinite(result.ping)) throw new Error("Invalid measurement");
    setStage("analysis"); $("#liveValue").textContent=""; $("#liveUnit").textContent="";
    await new Promise(r=>setTimeout(r,500));
    if(runId!==state.runSerial)throw cancelError();
    result.score=calculateScore(result); const q=qualityLabel(result.score);
    document.documentElement.style.setProperty("--tier",q.color);document.documentElement.style.setProperty("--tier-rgb",q.rgb);
    $("#medalDropText").textContent=q.medal;
    $("#runner").style.setProperty("--runner-left","calc(100% - 176px)");
    $("#finishFlash").classList.add("burst"); await soundFinish();
    setTimeout(()=>{if(runId===state.runSerial){$("#medalDrop").classList.add("drop");soundMedal(q.tier)}},220);
    await new Promise(r=>setTimeout(r,1050));
    if(runId!==state.runSerial)throw cancelError();

    state.testDuration=performance.now()-state.testStartedAt;
    result.ts=Date.now(); state.results=result;
    renderResult(result); saveHistory(result);
    showView("#resultView");
  }catch(err){
    if(err?.message==="VELNOX_CANCELLED"||err?.name==="AbortError"){
      if(runId===state.runSerial)showView("#homeView");
    }else{
      console.error(err); toast(err?.message==="VELNOX_TIMEOUT"?t("testTimedOut"):t("engineError"));
      if(runId===state.runSerial)showView("#homeView");
    }
  }finally{
    if(state.activeEngine===engine)state.activeEngine=null;
    if(state.abortController===controller)state.abortController=null;
    if(runId===state.runSerial)state.running=false;
  }
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
$("#soundToggle").addEventListener("change",async e=>{state.settings.sound=e.target.checked;localStorage.setItem("velnox.sound",e.target.checked?"1":"0");if(e.target.checked){const a=await ensureAudioReady();if(a)scheduleTone(a,523,.16,.034,"sine");else toast(t("soundUnavailable"))}else if(audioCtx?.state==="running"){audioCtx.suspend().catch(()=>{})}});
$("#clearHistoryBtn").addEventListener("click",()=>{localStorage.removeItem("velnox.history");renderLastResult();renderHistory();toast(t("historyCleared"))});
$("#compareCountryBtn").addEventListener("click",()=>{state.compareMode="country";$("#compareCountryBtn").classList.add("active");$("#compareGlobalBtn").classList.remove("active");$("#compareCountryBtn").setAttribute("aria-pressed","true");$("#compareGlobalBtn").setAttribute("aria-pressed","false");renderCompare()});
$("#compareGlobalBtn").addEventListener("click",()=>{state.compareMode="global";$("#compareGlobalBtn").classList.add("active");$("#compareCountryBtn").classList.remove("active");$("#compareGlobalBtn").setAttribute("aria-pressed","true");$("#compareCountryBtn").setAttribute("aria-pressed","false");renderCompare()});

window.VelnoxApp=Object.freeze({
  cancelActiveTest,
  isTestRunning:()=>state.running
});

function boot(){
  setLang(state.lang);renderSettings();renderLastResult();renderHistory();updateConnectionStatus();
  detectCountry().then(()=>loadBenchmarkIndex()).catch(()=>{});
  setTimeout(()=>{$("#splash").classList.add("exit");$("#mainShell").classList.remove("hidden")},2050);
  setTimeout(()=>$("#splash").remove(),2700);
  if("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("./sw.js",{updateViaCache:"none"}).then(reg=>reg.update()).catch(()=>{});
}
boot();
