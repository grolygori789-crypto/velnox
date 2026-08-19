# Velnox V1.3 — GitHub update and Standard Base setup

## A. Update the existing `velnox` repository

Upload the contents of this project to the **root** of the existing `velnox` repository and replace the old files with the V1.3 versions. Do not create another nested `velnox_v1_3/` folder in the repository.

The important updated files are `index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, `sw.js`, `README.md`, `benchmarks/index.json`, and `scripts/sync_benchmarks.py`.

## B. Make sure the GitHub Action exists

The required workflow path is:

`.github/workflows/update-benchmarks.yml`

Some browser upload flows skip `.github`. If it is missing after upload:

1. In GitHub choose **Add file → Create new file**.
2. Enter `.github/workflows/update-benchmarks.yml` as the complete filename/path.
3. Copy the contents of the visible backup file `GITHUB_WORKFLOW_UPDATE_BENCHMARKS.yml` into it.
4. Commit the file.

## C. Add the Cloudflare Radar token

In the repository open **Settings → Secrets and variables → Actions → New repository secret**.

Name:

`CLOUDFLARE_RADAR_TOKEN`

Value: a Cloudflare API token that is authorized to read Radar data.

Never place that token in `app.js`, HTML, a public JSON file, or a normal repository variable.

## D. Generate the Standard Base once

Open **Actions → Refresh Velnox Standard Base → Run workflow**.

For `countries`, leave `ALL` to build all supported ISO alpha-2 locations, or enter a smaller comma-separated set such as `TH,SG,US,GB,JP` while testing.

A successful run should create/update:

- `benchmarks/global.json`
- `benchmarks/TH.json` and other country files
- `benchmarks/index.json` with `ready: true`

The workflow also runs every Monday on its weekly schedule.

## E. Verify the live app

After GitHub Pages redeploys, open the live Velnox URL, run a test, and check Compare.

Country mode should show the network country as flag + localized name, Source, Updated date, rolling 90-day window, four metric rankings and the overall Velnox Benchmark Index. Worldwide should show the global Standard Base.

If a VPN is active, the detected country may correctly reflect the VPN exit location rather than the user's physical location.
