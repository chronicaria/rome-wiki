---
title: NYC weather dashboard
created: 2026-07-06
source: llm
status: seed
tags: [project, weather, forecasting, webdev]
---
# NYC weather dashboard

**Outcome:** a personal (shareable-with-friends) web dashboard showing NYC hourly **temperature with a confidence band that widens with lead time**, plus **honest precipitation probability** and wind — built from real [[Ensemble forecasting|ensemble]] data.

**Feasibility: high, and lazy.** No backend, no key, no database. One static HTML page fetches an ensemble API directly from the browser and draws the bands. See [[Weather forecast APIs]] for why this specific stack is the only free path to plottable spread.

> [!note] Build in progress (2026-07-06)
> Code + plan at **`~/Desktop/Code/nyc-weather-dashboard/`** (`PLAN.md`, `README.md`). Locked decisions: **hourly, 7-day** default; core bands from Open-Meteo ensemble; neighborhood resolution via **option D (live sensors)** — PurpleAir behind **one Cloudflare Worker** (no browser CORS, key can't be client-side, temp reads +8 °F so the Worker corrects it), with **NWS station obs** as a zero-infra partial-D and **option C** (static [[Urban heat island|UHI]] offset table) to localize the *forecast* + pure-static fallback. Charts: uPlot (vendored).
>
> **✅ Multi-city "Weather Dashboard" — verified live (2026-07-06):** static site, code at `~/Desktop/Code/nyc-weather-dashboard/`. 7-day hourly **temp + [[Feels-like temperature|feels-like]] in one full-width chart anchored to the current hour** (two widening p10–p90 bands over ~119 ensemble members; on-graph readout shows both values+ranges to the tenth °; synced crosshair across all charts); **smooth precip curve**; wind+gusts; humidity; **7-day glance cards**; NWS alerts. **Newspaper serif, dark, left grouped place sidebar**: *New York, NY* (Murray Hill default + Columbia Univ./Battery Park/Elmhurst/Flushing, each with a day/night [[Urban heat island|UHI]] offset applied to the forecast), *Other U.S. cities* (Cambridge, Rochester, Stony Brook, Durham, Nashville, Austin, Houston, Minneapolis), *International* (Toronto, Seoul). **Each place renders in its own local timezone** (Open-Meteo `timezone=auto` + per-place IANA tz for display). Verified in-browser: all cities 200 with 119 members, Seoul/Toronto show correct local time, chart starts at current hour, tenth-degree temps, tooltip shows both series (no "feels" label), no console errors. **Dropped along the way:** PurpleAir sensors (needed a Worker+key), NWS observed-now panel, forecast-accuracy scorecard. Now URL-routed (each place a shareable `#slug`).
>
> **Where next:** [[Weather dashboard feature roadmap]] — 50+ API-grounded feature ideas across daily-driver, ensemble-superpower, data-layer, social, activity, and delight lenses, tiered by effort.
>
> **✅ Feature wave built & verified live (2026-07-06):** shipped a big batch via parallel subagents building drop-in modules + my integration. **Ensemble:** spaghetti toggle (119 member threads), day-card threshold chips + cool/hot-case range, "Today's vibe" score. **Glance panels:** rain-timing, what-to-wear, comfort (dew mugginess + warmest/coolest hr), UV burn window, day-card sparklines. **New free-API layers (no key, CORS):** air quality + smoke (Open-Meteo AQI), today-vs-normal + records (ERA5 archive), sun & moon (SunCalc), live radar (RainViewer), marine waves/SST + tides (Open-Meteo Marine + NOAA CO-OPS, coastal only). **Share:** one-click PNG snapshot. Each place is a deep-linkable `#slug` URL. Foundational: `getForecast` now keeps raw ensemble members. Verified in-browser: all panels render (marine coastal-only), spaghetti draws, radar composites live tiles, Seoul/coastal work, no console errors.

## The data (see [[Weather forecast APIs]])
- **Bands + honest PoP** → Open-Meteo **Ensemble API** (`ensemble-api.open-meteo.com/v1/ensemble`), which returns every member's hourly series. Free, no key, CORS-enabled, ~16-day horizon.
- **Official line + alerts** (optional) → `api.weather.gov` (deterministic, US-only).
- NYC = `latitude=40.71&longitude=-74.01`. Use **global** models only: `gfs_seamless,ecmwf_ifs025,icon_seamless` (~119 members combined).

Example request:
```
https://ensemble-api.open-meteo.com/v1/ensemble
  ?latitude=40.71&longitude=-74.01
  &hourly=temperature_2m,precipitation,wind_speed_10m
  &models=gfs_seamless,ecmwf_ifs025,icon_seamless
  &forecast_days=16&temperature_unit=fahrenheit
  &wind_speed_unit=mph&precipitation_unit=inch
  &timezone=America%2FNew_York
```

## The idea in one line
Each ensemble member is one equally-likely future. For each hour, take **percentiles across members** → median line + shaded band; the band **widens on its own** with lead time because members diverge (do *not* hand-widen it — that double-counts uncertainty). Honest PoP = **fraction of members that show rain**. This directly connects to [[Temperature forecast confidence intervals]] — except here the band is *flow-dependent* (tight on calm days, wide before a front) instead of a fixed ±8 °F.

> [!warning] Small-sample percentiles
> With only ~31–51 members, `p2.5/p97.5` (a nominal 95% band) jitter hour-to-hour because they ride a single order statistic. Draw **p10/p90** (label it "80% of members") for a steady envelope; optionally overlay faint min/max as "full spread."

## Core compute (vanilla JS, runs in a browser)
```js
const LAT = 40.71, LON = -74.01, PRECIP = 0.01; // inch threshold
const url = `https://ensemble-api.open-meteo.com/v1/ensemble`
  + `?latitude=${LAT}&longitude=${LON}`
  + `&hourly=temperature_2m,apparent_temperature,precipitation,wind_speed_10m`
  + `&models=gfs_seamless,ecmwf_ifs025,icon_seamless`
  + `&forecast_days=16&temperature_unit=fahrenheit`
  + `&precipitation_unit=inch&wind_speed_unit=mph&timezone=America%2FNew_York`;

// gather every member array for a variable → [ [members@h0], [members@h1], ... ]
const membersOf = (hourly, v) => {
  const keys = Object.keys(hourly).filter(k => k.startsWith(v + '_member'));
  const H = hourly.time.length;
  return Array.from({length: H}, (_, h) =>
    keys.map(k => hourly[k][h]).filter(x => x != null));
};
const pct = (vals, p) => {                 // linear-interpolated percentile
  if (!vals.length) return null;
  const s = [...vals].sort((a,b) => a-b);
  const i = (p/100) * (s.length-1), lo = Math.floor(i), hi = Math.ceil(i);
  return lo === hi ? s[lo] : s[lo] + (s[hi]-s[lo])*(i-lo);
};

const { hourly } = await (await fetch(url)).json();
const T = membersOf(hourly,'temperature_2m');
const A = membersOf(hourly,'apparent_temperature'); // Steadman feels-like, per member
const P = membersOf(hourly,'precipitation');
const W = membersOf(hourly,'wind_speed_10m');

const series = hourly.time.map((t,h) => ({
  time: t,
  tMed: pct(T[h],50), tLo: pct(T[h],10), tHi: pct(T[h],90), // widening band
  feelsMed: pct(A[h],50), feelsLo: pct(A[h],10), feelsHi: pct(A[h],90),
  pop: P[h].length ? P[h].filter(v => v > PRECIP).length / P[h].length : null,
  wind: pct(W[h],50),
}));
```
Feed `series.map(s=>s.tLo)` / `tHi` as the two band edges and `tMed` as the center line. `apparent_temperature` ([[Feels-like temperature|Steadman feels-like]]) is per-member too, so it gets its own widening band for free.

## Build steps
- [ ] `index.html` + vendored **uPlot** (~40 KB, native two-series `band:true` fill; Chart.js `fill:'-1'` is the ergonomic runner-up)
- [ ] Temperature chart: p10–p90 band + median line
- [ ] Second chart/axis: PoP (%) as bars + wind median
- [ ] (Optional) overlay `api.weather.gov` official temp line + an alerts banner
- [ ] Attribute Open-Meteo (CC-BY-4.0) in the footer
- [ ] Cache the JSON in `localStorage`; refetch a few times/day (runs update only a few times daily — don't poll)
- [ ] Deploy static to GitHub Pages / Netlify / Vercel (drag-and-drop)

## Neighborhood resolution — the honest limit
The forecast is for **"NYC generally," not your block.** The [[Urban heat island]] is real (~2–8 °F between neighborhoods), but the models **can't see it**: a global-model grid cell (~9–25 km) is *bigger than Manhattan is wide* (~3.7 km), so Central Park and the South Bronx get essentially the same forecast. Verified live — two NYC points differed by only 0.1–0.8 °F, and even that tracks Open-Meteo's 90 m elevation correction, **not** any UHI physics (it models none).

Options, laziest first:
- **(A) Just be honest.** Label it "NYC (regional)." One line of copy, done. ← recommended v1.
- **(B) Upgrade the base model to HRRR** — `models=ncep_hrrr_conus` (free, no key, **3 km**, US-only). Distinguishes broad zones (park vs South Bronx) but still blankets dozens of blocks; documented to under-capture UHI.
- **(C) Static per-neighborhood UHI offset** — add a fixed delta on top of the single forecast (~**+1 to +4 °F** for dense low-albedo areas like the South Bronx/Harlem, near 0 or cooler by water/parks, **largest at night**). Zero extra API calls; derive offsets once from ECOSTRESS/Landsat surface-temp maps or the NYC Heat Vulnerability data.
- **(D) Live neighborhood truth** — pull a few local sensors: PurpleAir (metered-free API), your own Weather Underground PWS key, or the NYS Mesonet **NYC Micronet** (free, but by data request, not a live REST feed). Satellites (ECOSTRESS 70 m, Landsat) map *where* the heat is but measure **surface**, not air temp, and only on overpass days.

Leanest defensible upgrade: **HRRR base + a static UHI offset table + a one-line disclaimer** that block-level accuracy needs sensors.

## Phase 4 — "how accurate were recent forecasts?" (no backend needed)
Use **[[Open-Meteo Previous Runs API]]** (`previous-runs-api.open-meteo.com/v1/forecast`, free/no-key/CORS). It serves each past hour's forecast at a **fixed lead time** (`temperature_2m_previous_day1..7`, also `precipitation`, `wind_speed_10m`, `relative_humidity_2m`, `apparent_temperature`). For each past hour `h`: error = `temperature_2m[h] − temperature_2m_previous_dayK[h]` → aggregate to MAE/bias per lead K over the last N days (**`past_days` max 93**). `temperature_2m` for past hours is a best-estimate analysis blend — a fine zero-extra-call truth proxy; swap in ERA5/METAR for a rigorous scorecard. This **removes the only reason Phase 4 wanted a datastore** (below): no self-snapshotting required.

## When you'd need a backend (you still don't)
Only for: hiding a *commercial* key, or cache/rate-limit smoothing under real traffic. ~~Scheduled snapshots to score your forecasts~~ — **not needed**: the [[Open-Meteo Previous Runs API]] already archives past forecasts by lead time, so Phase 4 stays fully client-side.

## Open questions
- Which is the better default view — hourly for 3 days, or 6-hourly for 16 days?
- Add a "forecast vs what happened" backtest tab? → **yes, feasible client-side** via [[Open-Meteo Previous Runs API]] (see Phase 4 above); open sub-question is whether to score against `temperature_2m` or a stricter ERA5/METAR actual.
- Is a single pooled multi-model band honest enough, or should each model get its own band?
