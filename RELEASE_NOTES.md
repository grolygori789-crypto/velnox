# Velnox V1.8.0 — Brand Identity

- Introduces the production Velnox emblem: cyan V + abstract gold turtle-shell geometry.
- Replaces the generic V treatment on Splash and top navigation with the new vector mark.
- Adds coordinated brand treatment to Settings/About and Trust screens.
- Rebuilds favicon, Apple touch icon and installed-PWA launcher icons from the same master geometry.
- Adds dedicated maskable launcher icons instead of reusing one icon for both `any` and `maskable` purposes.
- Bumps the app-shell cache to `velnox-app-v1.8.0` and precaches all identity assets.
- Preserves V1.7.1 benchmark hero polish and does not modify measurement/scoring/benchmark core.

# Velnox V1.7.1 — Benchmark Hero Polish

- Fixes the benchmark-ring typography regression where the inherited `.benchmark-top span` rule could force the `TOP x%` value down to helper-text size on mobile.
- Makes `TOP x%` the dominant KPI with a larger, higher-contrast gold value and clearer `ESTIMATED` / `TOP` hierarchy.
- Adds a restrained one-pass gold trace around the ring on reveal, plus a subtle inner tick ring; the animation does not loop.
- Adds a light vertical divider and spacing refinement between rank KPI and location/explanation copy.
- Keeps `x / 100` secondary and preserves Country/Global percentile values, benchmark data and all benchmark mathematics unchanged.
- Reduced Motion suppresses the reveal animation and leaves a static accent.
- Updates visible/About version and presentation-layer versions to V1.7.1.
- Bumps only the app-shell cache to `velnox-app-v1.7.1`; benchmark cache/policy remain unchanged.
- `app.js`, `styles.css`, measurement logic, score logic, benchmark data, benchmark workflow and history behavior are untouched.

# Velnox V1.7.0 — Premium Experience

- Adds an isolated `premium.css` / `premium.js` presentation layer over the deployed V1.6 product-trust release.
- Redesigns the benchmark hero so `Estimated`, `TOP x%`, composite score, detected location, provenance and freshness have a clearer premium hierarchy.
- Refines benchmark metric cards, typography, spacing, source/footer presentation and mobile responsiveness.
- Keeps the existing Velnox SVG turtle/medal identity; adds restrained polish around the race area rather than introducing heavy 3D/WebGL assets.
- Adds stage-based test progress with `Usually about 1 minute` / Thai equivalent. No exact seconds-remaining countdown is fabricated.
- Adds premium microinteractions, focus-visible treatment, empty/error/toast polish and a lightweight embedded-WebView presentation mode.
- Preserves V1.6 Motion / Reduced Motion behavior.
- Updates visible/About version to V1.7.0 and app-shell cache to `velnox-app-v1.7.0`.
- Benchmark cache remains `velnox-benchmarks-v1`; benchmark requests remain network-first with `cache: no-store`.
- `app.js`, `styles.css`, `manifest.webmanifest`, benchmark datasets, benchmark workflow/generator and all measurement/scoring/ranking logic are intentionally not replaced by this package.

# Velnox V1.6.0 — Trust & Product Maturity

- Rebuilds Settings into a structured product control center: Experience, Privacy & Data, Measurement & Transparency, Support Velnox, Help & Feedback, Legal & Privacy, and About Velnox.
- Adds Motion preference with System / Full / Reduced options and a Reduced Motion override for accessibility.
- Adds an in-app Measurement & Transparency center covering the accuracy-first measurement sequence, data usage, Velnox Score, Country/Worldwide benchmark methodology, network-exit country detection, VPN behaviour, uncertainty, and deliberate omission of unmeasured packet loss.
- Adds voluntary support routes: Worldwide through Benedict Interactive on Ko-fi and Thailand through the existing Benedict Interactive PromptPay QR. Support is isolated from measurements, rankings, features and access.
- Adds Help & Feedback with problem reports, product feedback, optional non-sensitive diagnostics, clipboard fallback and email handoff. Diagnostics intentionally exclude raw IP and saved test history.
- Adds an in-app Legal Center with Copyright & Intellectual Property, Terms of Use, Privacy Policy and Third-Party Notices. Legal notices use separate legal version 1.0.0 and do not add a consent wall before testing.
- Adds a proprietary `LICENSE.md` and matching repository notices under `docs/legal/`.
- Expands About Velnox with version, studio identity, measurement source, benchmark source, hosting, privacy model and source status.
- Hardens Exit visibility by recognising installed PWA `display-mode: fullscreen` in addition to standalone/fullscreen API state.
- PWA app cache moves to `velnox-app-v1.6.0` and precaches `trust.css` and `trust.js`. Benchmark cache/versioning and network-first/no-store benchmark policy are unchanged.
- V1.5.2 measurement configuration, Velnox Score implementation, Real-World classifier, benchmark mathematics, benchmark workflow and local-history model are unchanged.

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
