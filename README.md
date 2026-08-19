# Velnox V1.5 — Complete Production Package

Velnox is a static HTML/PWA network-health assistant by Benedict Interactive.
V1.5 keeps the readable V1.2 result design, the cinematic test flow, and the V1.4 accuracy profile, then hardens ranking, measurement confidence, benchmark sync, and PWA update behavior.

## What V1.5 does

- Cloudflare edge speed measurement using `@cloudflare/speedtest` 1.13.0 with an accuracy-first plan based closely on Cloudflare's current default measurement sequence (packet-loss phase intentionally omitted).
- Conservative fallback measurement if the module cannot load.
- Download, upload, ping, jitter, loaded-latency interpretation, Velnox score, medal, real-world use cases, insights and fixes.
- TH / EN interface, local history, fullscreen request, procedural sound, PWA install support.
- Automatic network-country detection with flag + localized country name.
- Country / Worldwide comparison against a verified rolling 90-day Cloudflare Radar Standard Base.
- Per-metric percentile ranking for every histogram Radar makes available.
- Estimated overall Velnox Benchmark Index. It is explicitly labelled estimated because it is a weighted composite of metric percentiles, not a separately observed population distribution.
- Measurement-confidence check based on the spread of usable speed/latency samples. Low-confidence tests are flagged and users are encouraged to retest before relying on the ranking.
- Network-first benchmark caching so weekly benchmark updates are not trapped behind an old PWA cache.

## Important: ranking data is never fabricated

The repository ships with `benchmarks/index.json` in `ready: false` state. Country/Worldwide ranking becomes live only after the included GitHub Action successfully fetches Cloudflare Radar data.

Cloudflare Radar requires an API token. The token belongs in a GitHub repository secret and must never be embedded in `index.html` or `app.js`.

### Activate Country / Worldwide ranking

1. In Cloudflare, create a Custom API Token with **Account > Radar > Read**.
2. In GitHub: **velnox > Settings > Secrets and variables > Actions > New repository secret**.
3. Secret name: `CLOUDFLARE_RADAR_TOKEN`.
4. Paste the Cloudflare token and save it.
5. Open **Actions > Refresh Velnox Standard Base > Run workflow**.
6. Leave `countries` as `ALL` for worldwide coverage, or enter ISO alpha-2 codes such as `TH,SG,US,GB,JP`.
7. Wait for the workflow to finish green. It commits generated files under `benchmarks/` automatically.

The workflow is also scheduled weekly.

## GitHub Pages upload

Upload the **contents** of this folder to the root of the existing `velnox` repository. `index.html` must remain at repository root.

Critical workflow path:

`.github/workflows/update-benchmarks.yml`

GitHub only executes the workflow from that exact path. `GITHUB_WORKFLOW_UPDATE_BENCHMARKS.yml` at repository root is only a visible backup copy in case a browser upload drops the `.github` folder.

## Accuracy notes

No two speed-test providers are expected to return identical numbers because edge/server location, routing, test duration, payload sizes, device load, Wi-Fi conditions, and concurrent traffic differ. Velnox therefore focuses on repeatability and transparent diagnostics rather than trying to mimic another provider's number.

The primary engine uses percentile aggregation supplied by Cloudflare's speed-test library. The fallback deliberately avoids choosing a single peak result.

Fast connections may transfer substantial data during an accuracy-first test.

## Standard Base source

Cloudflare Radar endpoint:

`GET /radar/quality/speed/histogram`

Cloudflare describes it as histogram data from the previous 90 days of Cloudflare Speed Test measurements. The sync script requests BANDWIDTH and, when available from Radar, LATENCY and JITTER histograms. If an optional metric group is temporarily unavailable, Velnox keeps verified bandwidth ranking rather than inventing missing percentile data.

## Privacy

- No Velnox account is created.
- History is stored in browser LocalStorage only when enabled.
- The public app never contains the Cloudflare Radar API token.
- Network country is used only to select a country benchmark file. VPN/proxy exit location can change the detected country.
- Test traffic is sent to Cloudflare speed-test endpoints.
