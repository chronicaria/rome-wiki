---
title: Weather forecast APIs
created: 2026-07-06
source: llm
status: seed
tags: [weather, forecasting, api, reference]
---

Where to get free forecast data — and the key split: only **ensemble** APIs give you the member spread needed for [[Temperature forecast confidence intervals|confidence bands]]; everything else is a single deterministic line.

## The one that gives you spread: Open-Meteo Ensemble API
`https://ensemble-api.open-meteo.com/v1/ensemble` — **free, no key, CORS-enabled** (callable straight from a browser), JSON, CC-BY-4.0 attribution. It returns **every [[Ensemble forecasting|ensemble]] member's** hourly time series, so you compute your own percentiles/PoP client-side.

- **Global models for NYC** (`models=`): `gfs_seamless` (GEFS, 30+control), `ecmwf_ifs025` (ECMWF ENS, 50+control), `icon_seamless` (ICON-EPS, 39+control), `gem_global` (21). Comma-separate them for a ~119-member multi-model super-ensemble.
- ⚠️ **Europe-only models return empty over NYC** — `icon_eu`, `icon_d2`, `meteofrance_arpege_europe` give HTTP 200 with zero members outside their domain. Global models only.
- **Member keys**: single-model → `temperature_2m_member01…`; multi-model → `temperature_2m_member01_ncep_gefs_seamless` etc. (control run is the un-suffixed `temperature_2m`). Parser must handle both.
- **Variables**: `temperature_2m`, `precipitation`, `wind_speed_10m`, `apparent_temperature`, `cloud_cover`, + many more, all per-member. (`apparent_temperature` = Steadman [[Feels-like temperature|apparent temperature]], year-round, per-member — so it too gets a spread band.)
- **Horizon**: `forecast_days` up to ~16 (35 via `gfs05`). **Limits**: ~10k calls/day, 5k/hr, 600/min, non-commercial.
- **Honest precipitation probability**: `api.open-meteo.com/v1/forecast?hourly=precipitation_probability` returns the member-fraction % directly — or compute your own from `precipitation_memberNN` (fraction of members > 0.1 mm). This is the *real* probability, not the public "wet-biased" one (see [[Temperature forecast confidence intervals]]).

## Deterministic / official (no spread)
- **US NWS** `api.weather.gov` — free, no key, CORS `*`, US-only. `/points/{lat},{lon}` → hourly forecast with temperature, wind, `probabilityOfPrecipitation`, plus **watches/warnings/alerts**. But it's a **single deterministic** forecast (National Blend of Models) — no confidence bands. Use for the "official NWS line" + alerts. (From a browser, omit User-Agent — it's a forbidden header.)
- **Commercial free tiers** (Tomorrow.io, Visual Crossing, WeatherAPI, OpenWeather) — all return one value + one PoP; **none expose plottable ensemble spread** on free tiers, and most need a browser-exposed key. Not worth it for this use case.

## Raw ensembles (heavy, server-side only)
- **ECMWF Open Data** and **NOAA NOMADS/GEFS** give the true ENS members, but as **GRIB2** binaries needing `wgrib2`/`cfgrib`/`eccodes` — no JSON, not browser-viable. Open-Meteo has already done this decoding for you.

## Historical (for backtesting your forecasts)
- **Open-Meteo Historical** (ERA5 reanalysis, 1940–present, JSON, free) for gridded "truth"; **NWS station observations** (KNYC/KLGA/KJFK/KEWR) for actual METAR obs. ERA5 has ~5-day latency and is a reanalysis, not point obs.
- **[[Open-Meteo Previous Runs API]]** — the key one for *forecast-accuracy* backtesting: `previous-runs-api.open-meteo.com/v1/forecast` serves each past hour's forecast at a **fixed lead time** (`temperature_2m_previous_day1..7`), so you compare it against the current best estimate to get K-day-lead error. Free, no key, CORS. Means you **don't** have to snapshot your own forecasts to build a "how accurate were we?" panel — Open-Meteo already archived them.

## Bottom line
For confidence bands from a browser with no backend, **Open-Meteo Ensemble is the only game in town**; pair it with `api.weather.gov` for the official number + alerts. Used in [[NYC weather dashboard]].

## Sources
- Open-Meteo Ensemble API docs — https://open-meteo.com/en/docs/ensemble-api ; Terms/Pricing (limits, CC-BY-4.0).
- NWS API — https://www.weather.gov/documentation/services-web-api (deterministic, CORS `*`).
- ECMWF Open Data (GRIB2, CC-BY-4.0); NOAA NOMADS GEFS; Open-Meteo Historical (ERA5).
- *(All endpoints/limits above live-verified against NYC 40.71,−74.01 on 2026-07-06.)*

## Open questions
- How stale is each model's run cycle — how often should the dashboard refetch to catch new runs?
- Is the pooled multi-model spread meaningfully better calibrated than single-model, or just wider?
