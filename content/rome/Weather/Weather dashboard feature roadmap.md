---
title: Weather dashboard feature roadmap
created: 2026-07-06
source: llm
status: seed
tags: [project, weather, webdev, product]
---

An ambitious, API-grounded feature menu for the [[NYC weather dashboard]] — organized by effort and leaning into the one thing it does that no other weather app does: **show the honest ensemble uncertainty.** Every item below is free, no-key, and needs no backend unless flagged.

## The throughline
The moat is the **119-member ensemble**. The best features aren't "add AQI like everyone else" — they're the ones only *this* app can do: *"73% of members say it hits 90°F today," "rain most likely 2–6pm, members split on evening," "Saturday has cooled 6° since yesterday."* Prioritize features that make uncertainty the star. Second priority: reuse data already in memory (zero new calls). Third: one cheap free API per feature.

## Tier 1 — near-free wins (reuse ensemble data already fetched, S effort)
- **Rain-timing ribbon** ⭐ — "rain starts ~4:20pm, lasts ~40 min," with honest *likely/possible* confidence = fraction of members raining each hour. A dry-window finder ("gap to walk the dog: 5–7pm"). *The single highest-value daily feature; pure client-side from members.*
- **Threshold probability chips** — per day: "73% chance ≥90°F," "40% chance of freeze tonight," "gusts >30mph." Auto-pick thresholds by season. *Counting members, zero new calls.*
- **Spaghetti / plume toggle** ⭐ — swap the p10–p90 band for the raw 119 member lines fanning out with lead time. Optionally colored by model (GFS/ECMWF/ICON). *Viscerally beautiful, screenshot-bait, trivial.*
- **Best / likely / worst day cards** — each 7-day card shows p10 / p50 / p90 for the high & low, not one number. The spread tightens as the day nears.
- **Dew-point mugginess meter + warmest/coolest-hour pins** — "sticky/oppressive" comfort bands; "open the windows at 6am — coolest it'll get."
- **"What to wear" strip** — jacket / umbrella / sunglasses icons + one-line verdict from feels-like + PoP + UV + gusts.
- **"Nice day" score (0–100)** — one composite pleasantness number per day + the factor dragging it down ("83 — great, but breezy"). Naturally shareable.
- **Sparklines in the 7-day cards** — a tiny temp-band microchart + precip bar per card (reuses uPlot + data already loaded).
- **Sun & moon strip** — sunrise/sunset, golden/blue hour, daylight ±vs yesterday, moon phase + illumination. Pure **SunCalc** math, no API, never fails.

## Tier 2 — one new free API each (S–M)
- **Air quality (US AQI + PM2.5) + wildfire-smoke flag** ⭐ — Open-Meteo **Air Quality API** (`air-quality-api.open-meteo.com`, free/no-key/CORS): `us_aqi, pm2_5, pm10, ozone`. Smoke = PM2.5/AOD anomaly vs the place's own baseline (client-side). *Answers "run? open windows? mask?" — most valuable on NYC's worsening summer smoke days.*
- **UV burn window** — `uv_index` is a free field on the forecast API you already call. "Protect between 11am–3:40pm; UV peaks 8." Burn-time by skin type.
- **"Today vs normal" + records** — Open-Meteo **ERA5 archive** (`archive-api.open-meteo.com`, ~80yr, ~5-day latency): per-calendar-day normal + record, computed once and cached (pre-bake a small JSON per place). Shade a "normal band" behind the temp trace; flag "3° short of the record." *Deepens the honesty angle: future uncertainty + past context.*
- **Forecast-change tracker** ⭐ — Open-Meteo **Previous Runs API** (`previous-runs-api.open-meteo.com`): "Saturday has warmed 6° since yesterday," trend arrows per day, a sparkline of how each day's predicted high has drifted across runs. *Literally impossible without stored past runs — a real daily-return hook.*
- **Live radar / nowcast overlay** — **RainViewer** (`api.rainviewer.com/public/weather-maps.json`, free/no-key/CORS): 13 past frames + short nowcast, plus a satellite layer. Needs a small map lib (Leaflet/MapLibre). *Radar is the most-opened mobile weather feature.*
- **Marine (waves/SST) + tides** — Open-Meteo **Marine API** + **NOAA CO-OPS Tides** (US, free/no-key/CORS). Show a beach/surf panel *only* for coastal places (Battery Park, Rockaways, coastal cities).
- **River/flood outlook** — Open-Meteo **Flood API** (GloFAS): river discharge with p25/p75 bands — a perfect thematic match for the uncertainty angle. Only spikes in wet spells.
- **Aurora watch** — NOAA **SWPC** Kp + OVATION grid (free/no-key/CORS), fun for higher-latitude places.

## Tier 3 — social / multi-place / sharing (M)
- **"Nicest right now / this weekend" ranking** ⭐ — score every place in the sidebar on pleasantness and rank them; toggle Now / Today / Weekend. A #1 flagged "could go either way" is the whole thesis in one glance. *Turns a place list into a daily scoreboard.*
- **Side-by-side compare (2–4 places)** — overlay their bands on one chart, aligned by local clock ("6pm here vs 6pm there").
- **"Me vs friend" pair link** — a two-up view for exactly two places in their own local times ("it's 8am there, 7pm here"), whole pairing encoded in the URL to send.
- **Shareable snapshot PNG** — render the current view (city, time, feels-like + band, sparkline) to a canvas → a self-contained "postcard" that carries the honest band into group chats.
- **All-my-places overview grid** — one compact tile per place (time, feels-like, hi/lo, rain odds, microchart, volatility dot) — the home screen you land on.
- **Add-your-own place** — Open-Meteo **Geocoding API** (free/no-key/CORS) → search a city, pin favorites in localStorage, encode the set in the URL. Makes it *your* page.
- **Embeddable widget** — a `?embed=<place>` chrome-less mode for blogs/Notion.

## Tier 4 — delight & platform (M–L)
- **"Story of the week" natural-language summary** ⭐ — deterministic rules over the ensemble write a short honest paragraph ("calm sunny start, then confidence drops after Thursday: members split between a dry ridge and a rainy trough — treat the weekend as a coin-flip"). *Makes the uncertainty legible to non-nerds in one sentence. No LLM needed.*
- **Conditions- & time-aware dynamic theming** — palette derived from weather code + sun position (clear-day azure, clear-night indigo, storm violet). The site looks like the sky outside.
- **Ambient animated background** — rain whose density tracks the honest p(rain), snow, stars at night; fully stops under `prefers-reduced-motion`.
- **Apple-style hour-by-hour strip** — the near-term "jacket for the 6pm walk?" view the multi-day chart doesn't serve.
- **Installable PWA + offline last-known-good** — home-screen icon, opens <1s, shows last forecast offline with an "updated Xh ago" banner.
- **Threshold push notifications** — "notify if p(rain) >60% in next 3h," new NWS alert. Foreground/periodic-sync is client-side; true background push needs a push server (the one non-lazy tier).
- **Pro mode** — spaghetti + dew point + pressure + wind barbs + model-run timestamp, behind a toggle; default stays clean.
- **Accessibility, unit toggles (°F/°C, mph/kph, 12/24h), and a "last updated / model run" transparency panel** — the invisible polish that signals a serious, honest product.

## Recommended next 3–4 to build
1. **Rain-timing ribbon + threshold chips** — the thesis, zero new API, highest daily value.
2. **Air quality + smoke flag** — one S-effort free API, huge real-world relevance (NYC summer).
3. **Spaghetti toggle** — a delightful, trivial, screenshot-worthy flex of the ensemble.
4. **"Nicest right now" ranking** — makes the multi-place list finally sing and is the most shareable.

Then pick from Tier 3/4 based on whether the goal is *reach* (sharing, PWA) or *depth* (records, forecast-change, radar).

## Open questions
- Does Andrew want this to stay a lean personal tool, or grow toward a shareable product (which tilts toward Tier 3 sharing + PWA)?
- Which places are coastal enough to justify the marine/tides panel?
- Is a small map library (Leaflet) an acceptable dependency for radar, or keep it strictly dependency-light?
