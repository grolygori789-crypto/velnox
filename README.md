# Velnox V1.2 — Network Intelligence

Turnkey HTML/PWA by Benedict Interactive.

V1.2 intentionally returns to a **readable, naturally scrollable result page** while keeping the cinematic testing flow from V1.1. It does not force dense information into one phone viewport.

## Upload
Upload the entire `velnox_v1_2` folder to any HTTPS static host. GitHub Pages is a good fit.

Core files:
- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `sw.js`
- `assets/`
- `benchmarks/`

Benchmark automation:
- `scripts/sync_benchmarks.py`
- `scripts/countries.txt`
- `.github/workflows/update-benchmarks.yml`

## V1.2 result design
- Large turtle hero with the medal only on the turtle (no duplicate floating medal).
- Score orbit is physically separated from the turtle, so the turtle's face cannot collide with the ring.
- Large 2 × 2 metric cards for Download, Upload, Ping and Jitter.
- Full-size Real-world Use rows for 4K streaming, gaming, video calls, cloud gaming, live streaming and large downloads.
- Country / Worldwide comparison lives directly in the result flow.
- Network Insights and Improve Connection are readable inline sections.
- Technical Details remains a bottom sheet.
- Test Again remains a clear full-width action at the end.

## Measurement engine
Velnox first tries the official `@cloudflare/speedtest` browser engine (pinned to 1.13.0 via jsDelivr) using Cloudflare's speed-test edge endpoints. If the module cannot load, Velnox attempts a simpler browser fallback against Cloudflare's `__down` and `__up` endpoints.

Packet loss is intentionally not fabricated. The current Cloudflare module requires a TURN server configuration for packet-loss testing, so V1.2 leaves packet loss out rather than displaying an unreliable value.

## Velnox Standard Base — real Country / Worldwide ranking
V1.2 includes the complete static architecture for verified percentile ranking.

The app loads generated files from `benchmarks/` and estimates:
- Download percentile
- Upload percentile
- Latency percentile (lower is better)
- Jitter percentile (lower is better)
- Weighted overall benchmark position

The intended source is Cloudflare Radar's `GET /radar/quality/speed/histogram` endpoint, which represents Cloudflare Speed Test data from the previous 90 days.

### Why the API token is not placed in the app
Cloudflare Radar requires an API token. A token must never be embedded in public HTML/JavaScript.

Instead, the included GitHub Action runs server-side, generates static benchmark JSON, commits it to the repository, and the public Velnox app reads only those JSON files.

### Activate the benchmark sync
1. In Cloudflare, create an API token with Radar read access.
2. In the GitHub repository, add a repository secret named:
   `CLOUDFLARE_RADAR_TOKEN`
3. Optional repository variable:
   `VELNOX_COUNTRIES`
   - Example: `TH,SG,US,GB,JP`
   - Use `ALL` to attempt all ISO alpha-2 countries in `scripts/countries.txt`.
4. Run **Refresh Velnox Standard Base** in GitHub Actions once.
5. The workflow is also scheduled weekly.

Until the first verified sync completes, Velnox clearly states that Standard Base is not synced. It never invents percentile or country/global ranking values.

## Country detection
The client attempts connection metadata first, then a Cloudflare trace endpoint, then falls back to the browser locale. It uses the country code only to choose the local static benchmark file; Velnox does not create a user account.

## Sound
Sound is generated procedurally with the Web Audio API. No MP3/WAV assets are required.
- Start pulse
- Finish sweep
- Tier-specific medal sound
- Off by default

## Privacy / accuracy notes
- PWA installation and service workers require HTTPS (or localhost).
- Fullscreen is requested only after user interaction because browsers normally block unsolicited fullscreen.
- Browser speed measurements are estimates and can vary with device load, Wi-Fi conditions, server path and concurrent traffic.
- History is stored locally with LocalStorage.
- Cloudflare's speed-test engine may submit measurement results to Cloudflare for aggregated Internet-quality insights.
- Benchmark percentiles are estimates from bucketed distributions, not exact population ranks.

## Official references used for the benchmark architecture
- Cloudflare Radar API: https://developers.cloudflare.com/api/resources/radar/subresources/quality/subresources/speed/methods/histogram/
- Cloudflare Radar API authentication: https://developers.cloudflare.com/radar/get-started/first-request/
- Cloudflare Speedtest module: https://github.com/cloudflare/speedtest
