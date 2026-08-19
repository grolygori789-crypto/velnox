# Velnox V1.5.2 — Defect Hardening

- Fixes Exit during an active test: Velnox now cancels its active measurement lifecycle before leaving Full Screen or attempting to close. The Cloudflare engine is paused, fallback fetches are aborted, and stale cancelled results cannot overwrite the UI later.
- Fixes Exit visibility so the power control is genuinely hidden in an ordinary browser tab and remains available for installed/standalone PWA or browser Full Screen use.
- Reworks Real-World Use ratings into a four-level Velnox classifier (Excellent / Good / Fair / Limited) based only on metrics Velnox actually measures: download, upload, unloaded latency, jitter and loaded latency when available. Cloudflare AIM no longer overrides these ratings while packet loss is intentionally omitted.
- Keeps the accuracy-first interleaved measurement sequence unchanged while making the visible diagnostic stage progress only forward: Ping → Download → Upload → Analysis. Background/interleaved latency probes continue updating live metrics without making the UI jump backward.
- Hardens procedural Web Audio on mobile/PWA: audio resume is awaited with a bounded timeout, test/Full Screen permission paths are non-blocking, and start/finish/medal cues use slightly stronger but still restrained levels.
- Improves mobile readability by lifting secondary-text contrast and weight across results, use cases, benchmark details, insights, recommendations, settings, technical details and privacy/disclaimer copy without changing the locked Velnox visual direction.
- About/version text updated to V1.5.2.
- PWA app cache bumped to `velnox-app-v1.5.2`; benchmark cache/versioning and network-first/no-store benchmark policy are unchanged.
- Accuracy-first measurement configuration, Velnox Score formula, verified Country/Worldwide benchmark mathematics, privacy model and benchmark files are unchanged.

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
