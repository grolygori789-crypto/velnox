# Velnox V1.5.1 — Exit Control Patch

- Adds a restrained power/exit control to the existing top bar without changing the locked Velnox visual direction.
- Exit control is shown only when Velnox is running as an installed/standalone PWA or while browser fullscreen is active.
- Pressing Exit leaves Full Screen first when applicable, then attempts `window.close()` only where the browser permits it.
- If the platform blocks script-initiated closing, Velnox reports that limitation honestly and instructs the user to use the device Home/Back control instead of pretending the app closed.
- Exit fallback messaging is available in Thai and English.
- About/version text updated to V1.5.1.
- PWA app cache bumped to `velnox-app-v1.5.1`; benchmark cache policy remains unchanged.

# Velnox V1.5 — Accuracy + Verified Ranking Completion

- Retains the V1.4 accuracy-first Cloudflare measurement plan based closely on Cloudflare's current default sequence, excluding packet loss.
- Extends test timeout for slower/variable networks.
- Adds sample-spread based measurement confidence (High / Medium / Low / insufficient samples).
- Low-confidence runs generate a retest warning and ranking-confidence note.
- Country detection remains automatic and displays flag + localized country name.
- Country and Worldwide comparison support verified Radar histogram data.
- Individual metric cards show percentile standing and median derived from the histogram.
- Overall composite is now explicitly labelled an estimated Velnox Benchmark Index rather than pretending it is a directly observed population percentile.
- Benchmark loader accepts verified partial Radar datasets if optional latency/jitter histogram groups are unavailable; missing metrics display no fabricated rank.
- Standard Base generator upgraded to schema 3, finer histogram buckets, retry/backoff, partial-metric resilience, TH validation, and token alias support.
- GitHub workflow moved/confirmed at the executable path `.github/workflows/update-benchmarks.yml` and updated to current Actions majors.
- PWA app cache bumped to `velnox-app-v1.5.0` with benchmark network-first caching preserved.
- About/version text updated to V1.5 and privacy/data-use wording corrected.
