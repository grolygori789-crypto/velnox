# Velnox V1.3 — Production Hardening

## Release goal

Bring the live V1.2 app to the 10/10 target for its intended scope: a premium HTML/PWA network utility with trustworthy measurement, clear interpretation, country/worldwide comparison architecture, local privacy, resilient caching and polished mobile UX.

## Major changes

- Premium Country Compare header now shows a localized country name with a country flag.
- Country is detected automatically from network-edge metadata when available; locale fallback is clearly marked approximate.
- VPN/proxy caveat is shown where country ranking is presented.
- Worldwide mode uses a distinct global marker rather than a country flag.
- Compare typography is larger and easier to read on phones.
- Metric ranking cards now show both **Your value** and the benchmark median.
- Overall rank is described as the **Velnox Benchmark Index**, a weighted composite of the four metric percentiles.
- Source, 90-day window, update date and freshness status remain visible.
- Cloudflare's official AIM experience scores are used when available to improve streaming/gaming/RTC-related real-world ratings; Velnox-specific thresholds remain as a fallback and for use cases not directly represented by AIM.
- Standard Base sync now supports retry/backoff, atomic writes, data validation, ALL-country generation, workflow concurrency and post-generation verification.
- Service Worker moved to V1.3 cache IDs and isolates benchmark cache behavior so changing benchmark JSON is not trapped behind the old app-shell cache.
- Offline pre-check and a 75-second test timeout prevent stuck tests.
- PWA manifest includes a stable ID and categories.
- Accessibility hardening includes ARIA live status and pressed states.

## External activation still required

Country/Worldwide benchmark numbers cannot be honestly embedded without fetching current Cloudflare Radar data. After upload, configure the `CLOUDFLARE_RADAR_TOKEN` repository secret and run **Refresh Velnox Standard Base** once. Until that succeeds, Velnox deliberately shows the unsynced state instead of inventing rankings.
