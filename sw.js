const APP_CACHE = "velnox-app-v1.6.0";
const BENCH_CACHE = "velnox-benchmarks-v1";
const CORE = [
  "./",
  "./index.html",
  "./styles.css",
  "./trust.css",
  "./app.js",
  "./trust.js",
  "./manifest.webmanifest",
  "./assets/icon-192.png",
  "./assets/icon-512.png"
];
self.addEventListener("install", event => { event.waitUntil(caches.open(APP_CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("velnox-") && ![APP_CACHE, BENCH_CACHE].includes(k)).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
function canonicalBenchmarkRequest(url) { return new Request(`${url.origin}${url.pathname}`, { method: "GET" }); }
async function benchmarkNetworkFirst(request) { const url = new URL(request.url); const canonical = canonicalBenchmarkRequest(url); try { const response = await fetch(request, { cache: "no-store" }); if (response.ok) { const cache = await caches.open(BENCH_CACHE); await cache.put(canonical, response.clone()); } return response; } catch (error) { const cached = await caches.match(canonical); if (cached) return cached; throw error; } }
async function appNetworkFirst(request) { try { const response = await fetch(request, { cache: "no-cache" }); if (response.ok && new URL(request.url).origin === self.location.origin) { const cache = await caches.open(APP_CACHE); await cache.put(request, response.clone()); } return response; } catch (error) { const cached = await caches.match(request, { ignoreSearch: true }); if (cached) return cached; if (request.mode === "navigate") { const fallback = await caches.match("./index.html"); if (fallback) return fallback; } throw error; } }
self.addEventListener("fetch", event => { if (event.request.method !== "GET") return; const url = new URL(event.request.url); if (url.origin !== self.location.origin) return; if (url.pathname.includes("/benchmarks/")) { event.respondWith(benchmarkNetworkFirst(event.request)); return; } event.respondWith(appNetworkFirst(event.request)); });
