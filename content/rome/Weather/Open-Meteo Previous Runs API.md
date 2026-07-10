---
title: Open-Meteo Previous Runs API
created: 2026-07-06
source: llm
status: seed
tags: [weather, forecasting, api, reference, backtesting]
---

The free, no-key, CORS-enabled endpoint that hands you *past forecasts at a fixed lead time* — the linchpin of [[NYC weather dashboard]] Phase 4 ("how good were recent forecasts?"), with no backend and no snapshotting of your own.

## The endpoint (NOT the plain Forecast API)
`https://previous-runs-api.open-meteo.com/v1/forecast` — a **separate host** from `api.open-meteo.com`. Same query grammar as the Forecast API, but this is the one that actually *serves* the `_previous_dayK` data.

> [!warning] The main Forecast API silently returns nulls
> `api.open-meteo.com/v1/forecast` **accepts** `temperature_2m_previous_day1` (HTTP 200, no error) but returns an all-`null` column. You must use the `previous-runs-api` host to get real values. Live-verified 2026-07-06 — same request, main host = all null, previous-runs host = real numbers.

Free, no API key, **CORS `access-control-allow-origin: *`** (verified via live headers + OPTIONS preflight → `GET, POST, OPTIONS`). Callable straight from a browser.

## What `_previous_dayK` means (the exact semantics)
For a given valid hour `h`, `temperature_2m_previous_dayK` is **the value that was forecast K days (24·K hours) before `h`** — i.e. a **K-day-lead forecast** for that hour. `day1` = predicted 24 h ahead, `day2` = 48 h ahead, … up to `day7` = 168 h ahead.

Subtlety (from Open-Meteo's own writeup): `previous_day1` is *not* a single model run from 24 h ago. It's a **stitched series** — for each hour, take the value from whichever run was initialised ~24 h earlier (they discard the first 24 h of each run, then the next 24 h, etc.). So each `_previous_dayK` column is a continuous time series where lead time is held constant. That's exactly what you want for skill-vs-lead analysis.

## Range and coverage (live-verified)
- **K = 1 … 7.** `previous_day7` returns real data; `previous_day8`/`day9` are accepted syntactically (HTTP 200) but return **all nulls** — so **7 is the true max lead**.
- **Base variables confirmed to support `_previous_dayK`**: `temperature_2m`, `precipitation`, `wind_speed_10m`, `relative_humidity_2m`, `apparent_temperature` — all returned real non-null data. (Docs also list dewpoint, pressure, cloud cover, wind direction, etc.; the suffix is general across the model's surface variables.)
- **`past_days` max = 93** (server error: *"Allowed range 0 to 93"* — note it's **93, not 92**). Combine `&past_days=N` with the `_previous_dayK` columns to pull up to ~3 months of already-verifiable past hours in one call.
- Archive depth: most models from ~Jan 2024; GFS 2 m temp back to Mar 2021.

## The Phase-4 pattern (no backend, no snapshots)
For each past hour `h` in the response:
- **actual / truth proxy** = `temperature_2m[h]` (the current best estimate — see truth note below)
- **K-day-lead forecast** = `temperature_2m_previous_dayK[h]`
- **error** = `temperature_2m[h] − temperature_2m_previous_dayK[h]`

Aggregate over the last N days (up to 93) → MAE / bias per lead time K. This is the whole "how accurate were recent forecasts?" panel, computed client-side. You do **not** need to snapshot your own forecasts (the concern flagged in [[NYC weather dashboard]]'s "when you'd need a backend") — Open-Meteo already archived them.

## Is `temperature_2m` a good "truth" for past hours?
For a past hour, the plain `temperature_2m` on both the Forecast API and this endpoint is a **best-estimate analysis blend** (the most-recent/best run's assimilated state), **not** raw observations. Live NYC check for 2026-07-01:

| hour (UTC) | `temperature_2m` (best est.) | ERA5 archive |
|---|---|---|
| 12:00 | 25.7 °C | 25.3 °C |
| 18:00 | 34.6 °C | 35.8 °C |

The Forecast API and Historical Forecast API agreed exactly (both 25.7 / 34.6); **ERA5 differed by 0.4–1.2 °C**. So:
- `temperature_2m` for past hours is a **fine, zero-extra-call truth proxy** — good enough for a "recent forecasts" panel.
- For a *rigorous* scorecard, prefer **ERA5** (`archive-api.open-meteo.com/v1/archive`, ~5-day latency, reanalysis) or **NWS station obs** (KNYC/KLGA/KJFK/KEWR METARs) as the actual. The existing [[Weather forecast APIs]] note lists these.

## Concrete NYC example (returns current + previous_day1..3 with past_days, live-tested)
```
https://previous-runs-api.open-meteo.com/v1/forecast
  ?latitude=40.71&longitude=-74.01
  &hourly=temperature_2m,temperature_2m_previous_day1,temperature_2m_previous_day2,temperature_2m_previous_day3
  &past_days=3&forecast_days=1
  &timezone=America%2FNew_York&temperature_unit=fahrenheit
```
Aligned values it returned (°F) — `err = current − prevK` is the K-day-lead error:

| time | current | prev_day1 | prev_day2 | prev_day3 | err1 | err2 | err3 |
|---|---|---|---|---|---|---|---|
| 07-03 18:00 | 94.4 | 103.6 | 79.6 | 99.5 | −9.2 | +14.8 | −5.1 |
| 07-04 00:00 | 75.8 | 84.7 | 79.9 | 83.3 | −8.9 | −4.1 | −7.5 |
| 07-04 18:00 | 94.9 | 85.9 | 90.4 | 87.7 | +9.0 | +4.5 | +7.2 |
| 07-05 06:00 | 73.3 | 73.1 | 75.2 | 74.7 | +0.2 | −1.9 | −1.4 |
| 07-06 06:00 | 69.2 | 69.9 | 72.2 | 71.1 | −0.7 | −3.0 | −1.9 |

Note how errors are small near "now" (the run barely changed) and swing to ±5–15 °F for hours that were 1–3 days out — exactly the lead-time skill decay you want to visualize. This ties directly to [[Forecast skill]] and [[Temperature forecast confidence intervals]].

## Aggregated MAE-by-lead (the panel's actual output, live-verified)
Averaging `|error|` over the whole window is the number the Phase-4 panel prints. One call, `past_days=14&forecast_days=0`, NYC, 336 hourly samples per column (2026-07-06):

| Lead | MAE (°F) | bias (truth−fc) |
|---|---|---|
| Day 1 | **2.75** | −0.2 |
| Day 2 | 3.21 | +1.1 |
| Day 3 | **3.58** | +1.0 |
| Day 4 | 4.22 | +1.4 |
| Day 5 | **4.37** | +0.6 |

Monotonic and lands squarely on the [[Temperature forecast confidence intervals]] table (day1 ~3.0, day3 ~3.5, day5 ~4.5) and the task's sanity band (day1 2–3, day3 3–4, day5 4–5 °F). **Use this as a built-in bug check**: if your computed curve is flat, non-monotonic, or off by 10×, it's a wiring bug — almost always the wrong host (all-null columns), a column-misalignment, or a °C/°F mixup. Minimal client compute:
```js
const KS=[1,2,3,4,5];
const url=`https://previous-runs-api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01`
 +`&hourly=temperature_2m,${KS.map(k=>`temperature_2m_previous_day${k}`).join(',')}`
 +`&past_days=14&forecast_days=0&temperature_unit=fahrenheit&timezone=America%2FNew_York`;
const {hourly:h}=await(await fetch(url)).json(), truth=h.temperature_2m;
const mae=KS.map(k=>{const f=h[`temperature_2m_previous_day${k}`];
  const e=truth.map((t,i)=>t!=null&&f[i]!=null?Math.abs(t-f[i]):null).filter(x=>x!=null);
  return {lead:k, mae:e.reduce((a,b)=>a+b,0)/e.length};});
```

## Sources
- Previous Runs API docs — https://open-meteo.com/en/docs/previous-runs-api
- "Weather Forecasts From Previous Model Runs" — https://openmeteo.substack.com/p/weather-forecasts-from-previous-model-runs (the stitched-series semantics)
- *(Endpoint, host split, K=1..7 max, past_days=93, per-variable support, CORS headers, and all NYC values above live-verified against 40.71,−74.01 on 2026-07-06.)*

## Open questions
- Does `past_days=93` reach back far enough that `_previous_day7` has full coverage across the whole window, or do the oldest hours lose their day-7 column (archive depth vs window edge)?
- Should the panel score against `temperature_2m` (zero extra calls, but analysis-blend) or make a second ERA5/METAR call for a defensible "actual"? Trade one API call for rigor.
- Is the stitched `_previous_dayK` series drawn from the same model mix as the dashboard's ensemble (`gfs`/`ecmwf`/`icon`), or a single best-match model — i.e. am I scoring *the forecast I showed*?
