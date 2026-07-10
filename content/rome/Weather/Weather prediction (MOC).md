---
title: Weather prediction (MOC)
created: 2026-07-06
source: llm
status: seed
tags: [moc, weather, forecasting]
---
# 🌦 Weather prediction

Map of content for how weather forecasts are made, how good they are, and how their uncertainty grows with lead time. Up: [[Home]].

## The machinery
- [[Numerical weather prediction]] — solving the atmosphere's fluid equations on a grid; the major global models (ECMWF, GFS, …) and data assimilation.
- [[Ensemble forecasting]] — running many perturbed forecasts so the *spread* becomes a flow-dependent uncertainty estimate.

## Limits and skill
- [[Atmospheric predictability limit]] — chaos, Lorenz, error growth, and the ~2-week ceiling on daily weather.
- [[Forecast skill]] — how quality is scored (ACC of 500 hPa height) and the "one day per decade" improvement.

## The practical question
- [[Temperature forecast confidence intervals]] — *"I see 80 °F 3 days out — what's the 95% band?"* (≈ ±8 °F, widening with lead time, regime-dependent).
- [[Feels-like temperature]] — heat index (summer), wind chill (winter), and the year-round Steadman apparent temperature that Open-Meteo reports; how the three combine temperature, humidity and wind.
- [[Urban heat island]] — how much NYC temperature varies block-to-block (~2–8 °F air, mostly at night) and why forecasts can't see it.

## Build it
- [[Weather forecast APIs]] — where to get free forecast/ensemble data; only ensemble APIs give plottable spread.
- [[Open-Meteo Previous Runs API]] — free endpoint that serves *past forecasts at a fixed lead time*, so you can score "how good were recent forecasts?" client-side with no backend.
- [[NYC weather dashboard]] — project: a static page showing NYC hourly temperature with widening confidence bands + honest precip probability.
- [[Weather dashboard feature roadmap]] — 50+ API-grounded ideas to grow the dashboard, tiered by effort (rain-timing, spaghetti view, AQI/smoke, "nicest right now" ranking, story-of-the-week, PWA…).
