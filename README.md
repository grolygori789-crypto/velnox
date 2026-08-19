# Velnox V1.3 — Network Intelligence

Turnkey HTML/PWA by Benedict Interactive.

V1.3 is the production-hardening release built from the live V1.2 GitHub Pages version. It keeps the readable scroll-based result design and adds a stronger benchmark pipeline, country presentation, cache safety, error handling, accessibility polish, and deployment QA.

## What V1.3 improves

- Country comparison now presents the detected network country as **flag + localized country name**.
- Country detection uses Cloudflare connection metadata first, Cloudflare trace second, and browser locale only as a clearly marked fallback.
- Country UI explains that VPN/proxy exit location can change the detected country.
- Country and Worldwide ranking use the Velnox Standard Base with per-metric percentiles for Download, Upload, Latency and Jitter.
- Overall comparison is explicitly described as a weighted Velnox Benchmark Index rather than pretending to be a mathematically exact joint population percentile.
- Benchmark files are validated before display and include Source, rolling 90-day window, Last Updated and freshness status.
- Standard Base sync is hardened with retry/backoff, atomic JSON writes, schema validation, an all-country default, GitHub Actions concurrency control and a post-generation validation step.
- Service Worker cache version is corrected to V1.3 and benchmark data uses a separate network-first cache path so fresh Standard Base data is not silently trapped behind an old app cache.
- Network tests have offline pre-checking and a 75-second timeout instead of being allowed to hang indefinitely.
- PWA manifest adds a stable app ID and utility/productivity categories.
- ARIA live regions and pressed states were added to important controls.
- Compare typography was enlarged for phone readability.

## Core files

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `sw.js`
- `assets/`
- `benchmarks/`
- `scripts/`
- `.github/workflows/update-benchmarks.yml`

`GITHUB_WORKFLOW_UPDATE_BENCHMARKS.yml` is also included at the project root as a visible backup copy because some browser drag-and-drop flows omit the hidden `.github` directory.

## Measurement engine

Velnox uses the official `@cloudflare/speedtest` browser package, pinned to version `1.13.0`, and falls back to direct browser measurements against Cloudflare's speed-test edge endpoints if the module cannot load.

The primary result set is:

- Download Mbps
- Upload Mbps
- Idle latency / Ping ms
- Idle jitter ms
- Loaded latency when available

Packet loss is deliberately not fabricated. It remains excluded until Velnox has a correctly configured TURN-based packet-loss measurement path.

## Velnox Standard Base

V1.3 uses Cloudflare Radar's Speed Test histogram endpoint as the intended benchmark source. Cloudflare's current SDK describes that endpoint as returning histograms from the previous 90 days of Cloudflare Speed Test data, with fixed bandwidth (Mbps), latency (ms) or jitter (ms) buckets.

The generated static files let the browser estimate:

- Download percentile
- Upload percentile
- Latency percentile — lower is better
- Jitter percentile — lower is better
- Velnox Benchmark Index — weighted composite of the four percentile positions

The public browser never receives the Cloudflare API token.

## Activate Country / Worldwide ranking

See `GITHUB_SETUP.md`. The required repository secret name is:

`CLOUDFLARE_RADAR_TOKEN`

The included GitHub Action can generate every ISO alpha-2 location by default (`ALL`) and refreshes weekly.

## Accuracy and privacy

- Browser speed measurements are estimates and can vary with device load, Wi-Fi conditions, concurrent traffic and network path.
- Country detection represents the network exit location visible to the edge. VPNs and proxies can therefore change the detected country.
- Velnox does not need to display or store the user's public IP address for country benchmarking.
- History stays in local browser storage unless the user clears it.
- Benchmark percentile values are estimates derived from bucketed distributions.
- Velnox Score and Velnox Benchmark Index are Velnox-defined composite heuristics, not official Cloudflare scores.

## Deployment

Static hosting over HTTPS is required for the full PWA/service-worker experience. GitHub Pages works well. Upload the project files to the repository root so `index.html` remains at the root.

## Official technical references used for V1.3

- Cloudflare official TypeScript SDK: `radar.quality.speed.histogram()` — previous 90 days, bandwidth/latency/jitter histogram buckets.
- Cloudflare official `@cloudflare/speedtest` package — current package version confirmed as 1.13.0 at the time of this release.
