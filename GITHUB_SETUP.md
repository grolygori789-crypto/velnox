# Velnox V1.5 — GitHub setup

## A. Upload the application

1. Extract the V1.5 ZIP.
2. In the existing `velnox` repository choose **Add file > Upload files**.
3. Upload the contents inside `velnox_v1_5` — do not upload the ZIP as one file and do not add another enclosing folder.
4. Confirm `index.html` is directly at repository root.
5. Commit message suggestion: `Velnox V1.5 accuracy and verified ranking`

## B. Confirm the benchmark workflow exists

The repository must contain:

`.github/workflows/update-benchmarks.yml`

If the `.github` folder is missing after browser upload, create a new file in GitHub using that exact path and paste the contents from the root backup file `GITHUB_WORKFLOW_UPDATE_BENCHMARKS.yml` (omit its first backup-comment line if desired).

## C. Create the Cloudflare Radar token

Create a Cloudflare Custom API Token with:

**Account > Radar > Read**

Do not put the token in HTML, JavaScript, README, issues, or commits.

## D. Add the GitHub secret

Repository **Settings > Secrets and variables > Actions > New repository secret**

Name exactly:

`CLOUDFLARE_RADAR_TOKEN`

Paste the token and save.

## E. Build verified rankings

Open **Actions > Refresh Velnox Standard Base > Run workflow**.

Use `ALL` for full country coverage. The workflow always validates `GLOBAL` and `TH` before it commits benchmark data.

When the run is green, the repository should contain at least:

- `benchmarks/global.json`
- `benchmarks/TH.json`
- `benchmarks/index.json` with `"ready": true`

GitHub Pages will then serve the ranking data without exposing the API token.

## F. Final phone check

Open the live GitHub Pages URL, run three tests under similar conditions, and compare the spread. Velnox will show a measurement-confidence level in Technical Details and will warn when a result varied too much to treat its ranking as highly reliable.
