# Velnox V1.7.0 — Premium Experience

Velnox is a browser-based Network Intelligence product by Benedict Interactive.

V1.7.0 is a presentation and interaction hardening release built on the already-deployed V1.6.0 Trust & Product Maturity layer and the V1.5.2 accuracy/measurement core.

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

© 2026 Benedict Interactive. See `LICENSE.md` and `docs/legal/`.
