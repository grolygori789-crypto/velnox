# Velnox — Network Intelligence

Velnox is a static HTML/PWA network-health assistant by **Benedict Interactive**, built around:

**Measure → Interpret → Compare → Diagnose → Recommend → Retest**

Velnox prioritises repeatability, transparent methodology, privacy by design and graceful failure over unsupported claims.

## V1.6.0 — Trust & Product Maturity

V1.6 adds a product-trust layer around the existing V1.5.2 measurement engine: structured premium Settings, Motion/Reduced Motion, Measurement & Transparency, voluntary project support, Help & Feedback, non-sensitive diagnostics, an in-app Legal Center, proprietary source notices, and expanded About/source/privacy disclosure.

The V1.5.2 speed measurement sequence, scoring implementation, Real-World classifier, benchmark mathematics and benchmark workflow remain unchanged.

## Measurement

Primary measurement uses `@cloudflare/speedtest` 1.13.0 with an accuracy-first sequence. Packet loss is intentionally omitted until Velnox has a reliable measurement path for it. Missing measurements are not inferred.

A full run commonly takes around a minute, but duration and data usage vary with device, route and connection speed. Fast connections can transfer substantial test data.

## Velnox Score

Velnox Score is a **0–100 heuristic**, not a population percentile. Core weights are Download 35%, Upload 20%, Ping 25% and Jitter 20%, with a bounded loaded-latency penalty when loaded-latency data is available.

## Country / Worldwide benchmark

Velnox compares the current measurement with the **Velnox Standard Base**, generated from Cloudflare Radar speed histograms over a rolling 90-day window. Country and Worldwide are separate distributions. Percentile standing is estimated from bucketed histogram data; the overall Velnox Benchmark Index is a weighted composite of available metric percentiles.

The benchmark workflow remains at `.github/workflows/update-benchmarks.yml`. The Radar API token belongs only in a GitHub repository secret and is never shipped in the public app.

## Privacy

- No Velnox account is required.
- Test history is stored in browser LocalStorage only when Save History is enabled.
- Velnox does not place a raw IP address into local test history.
- Network-exit country is used to select a country benchmark; VPN/proxy use can change the detected country.
- Test traffic is sent to Cloudflare speed-test endpoints.
- V1.6 contains no advertising or cross-site behavioural advertising tracker.

## Help, support and legal

V1.6 includes Help & Feedback, voluntary Benedict Interactive support routes, and a Legal Center covering Copyright & IP, Terms of Use, Privacy and Third-Party Notices. Repository notices are under `docs/legal/`.

Velnox is free to use but its original source and product materials are **proprietary unless separately licensed**. See `LICENSE.md`.
