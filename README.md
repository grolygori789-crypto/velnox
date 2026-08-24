# Velnox V1.9.0 — Share & Studio Identity

Velnox is a browser-based Network Intelligence product by **Benedict Interactive**, an independent studio based in **Bangkok, Thailand**.

V1.9.0 adds privacy-conscious result sharing without changing the V1.5.2 measurement/scoring core, V1.7.1 benchmark mathematics, or V1.8.0 brand identity.

## V1.9.0 share system

- Adds `Share Result` to the current result screen.
- Generates a branded 1080×1350 PNG card locally in the browser; no result-card rendering server is introduced.
- Includes the Velnox emblem, quality tier, Velnox Score and—when the user chooses—exact Download / Upload / Ping / Jitter metrics.
- Captures Country and Worldwide benchmark standing through the existing Velnox comparison UI so share cards do not duplicate or reimplement benchmark mathematics.
- Lets the user include or exclude Country standing, Worldwide standing and exact metrics before sharing.
- Uses the device/browser file-share interface when supported. If direct image sharing is unavailable, Velnox falls back to `Download Image`.
- Adds `Share` to saved History items. Historical cards intentionally omit Country/Worldwide standing because Velnox history does not store the benchmark standing that was shown at the original measurement time; Velnox does not reconstruct a potentially misleading historical rank from a newer benchmark.
- Share cards exclude raw IP addresses, saved history, detailed diagnostics and precise user location.

## Studio identity

- About Velnox now presents `Benedict Interactive` and `Bangkok, Thailand` as separate Studio / Studio location fields.
- Static About and generated share cards carry the same studio location treatment.
- The location describes the independent studio identity; it is not presented as a registered-office or corporate-registration claim.

## Regression boundary

V1.9.0 does **not** ship or modify `app.js`, `styles.css`, benchmark JSON files, benchmark generator/workflow, measurement sequencing, fallback measurement, Velnox Score, Real-World Use classification, confidence logic, country detection, history storage contract, or Country/Worldwide percentile/index mathematics.

The Share feature is isolated in `share.js` and `share.css`; `index.html` only exposes the action and loads those assets. Service Worker changes are limited to the V1.9 app-shell cache and precaching the Share assets.

Legal notices move to version **1.1.0** to describe local result-card generation and user-initiated sharing.

---

## V1.8.0 — Brand Identity

Velnox is a browser-based Network Intelligence product by **Benedict Interactive**.

V1.8.0 introduces the production Velnox emblem: a geometric cyan **V** integrated with restrained gold turtle-shell geometry. The V remains the primary technical mark while the shell language connects the identity to the Velnox turtle mascot without turning the product logo into a cartoon.

## V1.8.0 brand system

- New vector master mark at `assets/velnox-mark.svg`.
- New favicon and Apple touch icon.
- New PWA install icons at 192 and 512 px.
- Dedicated maskable 192/512 icons for launchers that apply their own icon shape.
- New logo treatment on Splash, top navigation, Settings/About and Trust screens.
- No perpetual logo animation; the mark remains restrained and technical.
- The V1.7.1 benchmark hero polish remains intact.

## Regression boundary

V1.8.0 does **not** modify `app.js`, `styles.css`, measurement sequencing, Velnox Score, Real-World Use logic, benchmark mathematics, history behaviour or benchmark data/workflow. Brand work is isolated to presentation, identity assets, manifest metadata and app-shell caching.

## V1.7.1 benchmark hero polish

- Makes `TOP x%` the dominant KPI inside the benchmark ring so the standing is readable at a glance on mobile.
- Adds a restrained one-pass gold trace around the benchmark ring when a Country/Global result is revealed; it does not loop continuously.
- Adds a subtle inner tick ring, stronger spacing and a divider between the rank KPI and explanatory copy.
- Keeps the composite `x / 100` visually secondary and preserves all underlying benchmark values unchanged.
- Reduced Motion disables the reveal animation and shows the ring in a static state.

## What V1.7 improves

- Rebuilds the Country / Global benchmark hero for clearer hierarchy and more breathing room.
- Separates `Estimated`, `TOP x%`, and the composite `x / 100` presentation instead of crowding them into one label.
- Refines benchmark metric cards and source/provenance presentation.
- Keeps the Velnox SVG turtle as the signature testing character and improves the surrounding motion/finish presentation without introducing heavy 3D/WebGL assets.
- Adds honest test-progress guidance: stage-based progress plus `Usually about 1 minute`; no fake second-by-second countdown.
- Adds a premium spacing, typography, microinteraction and focus-visible layer across results, Settings and trust screens.
- Adds responsive refinements for narrow phones, larger phones, tablets and desktop widths.
- Adds a lightweight in-app-browser presentation mode for embedded WebViews.
- Preserves Reduced Motion behavior from V1.6.
- Keeps empty/error/toast states visually consistent with the premium product language.

## Regression boundary

V1.7 deliberately does **not** ship replacements for:

- `app.js`
- `styles.css`
- `manifest.webmanifest`
- benchmark JSON files
- benchmark generator/workflow

Therefore the primary Cloudflare measurement plan, fallback measurement, Velnox Score, Real-World Use classifier, confidence logic, country detection, benchmark percentile/index mathematics, history storage contract and benchmark pipeline remain the deployed implementations from the prior release.

The V1.7 presentation layer is isolated in:

- `premium.css`
- `premium.js`

`index.html` only links those assets and updates the visible version. `sw.js` only bumps the app-shell cache and precaches the new premium assets while preserving the benchmark cache and network-first/no-store benchmark policy.

## Test-duration wording

Velnox does not promise an exact completion time. Network path, device load and connection behavior can change the duration of the accuracy-first test. V1.7 therefore uses stage progress and an honest approximate message rather than a countdown that could become false.

## Product trust

The V1.6 Trust & Product Maturity features remain in place: structured Settings, Motion controls, Measurement & Transparency, Help & Feedback, voluntary Thailand/Worldwide support, Legal & Privacy, proprietary source notice and non-sensitive diagnostics.

© 2026 Benedict Interactive · Bangkok, Thailand. See `LICENSE.md` and `docs/legal/`.
