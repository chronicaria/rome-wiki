---
title: Urban heat island
created: 2026-07-06
source: llm
status: seed
tags: [weather, climate, cities, nyc, heat]
---

NYC neighborhoods really do differ — by a few degrees of **air** temperature (~2–8 °F), a mostly **nighttime** effect — but the eye-popping "10–25° hotter" figures are **surface** temperature, a different and much larger quantity. Not tenths of a degree; also not the huge numbers people quote.

## The load-bearing distinction: air vs surface
Almost every confusing UHI claim comes from mixing two things up:

| | **Air (2 m) temperature** | **Surface (skin) temperature** |
|---|---|---|
| What it is | What a thermometer / your body feels | Roof, pavement, satellite infrared "skin" |
| NYC city-vs-rural | ~3–4 °C (**5–7 °F**) | 10–15 °C (**18–27 °F**) by day |
| Peaks | **At night** | **Midday** |
| Neighborhood spread | ~**2–8 °F** | tens of °F (a sunny roof can be **50–90 °F hotter than the air**) |

The dashboard, your body, and forecasts all care about **air** temperature. When a headline says "20° hotter," it's almost always a satellite **surface** reading. (Sources: US EPA *Learn About Heat Islands*; NASA/GISS NYC reconnaissance.)

## NYC's air-temperature UHI (the honest magnitude)
The definitive study is **Gedzelman et al. (2003)** (~75-station network):
- City core averages **+3 °C (5 °F)** warmer than rural on winter/spring nights, **+4 °C (7 °F)** on summer/fall nights.
- It's a **nocturnal** phenomenon — near **zero (or slightly negative) at midday**, opening up after sunset because urban materials impede radiative cooling.
- On the calmest, clearest, driest nights it reaches **+8 °C+ (14–18 °F)**; wind kills it (JFK: +4.9 °C under <5 kt, +2.1 °C over 20 kt).
- Coastal quirk: a **sea breeze or backdoor cold front can erase or reverse it** — NYC sometimes runs *colder* than its western suburbs. NYC's water-on-all-sides siting makes its UHI unusually weather-dependent.

## Neighborhood-to-neighborhood (what you actually asked)
Realistic **air**-temperature spread between NYC neighborhoods: **~2–5 °F typically, up to ~8 °F** on a hot evening. Measured examples (NYC DOHMH air monitors, 30 Jun 2018, vs LaGuardia 89 °F): **East Harlem +4.9 °F, Bed-Stuy +3.5 °F**; a vegetated Bronx block ~2 °F cooler than a barren Brooklyn one. Rosenzweig calls it a "heat **archipelago**" varying on a **~100 m** scale, not a single dome.

**The station quirk worth knowing:** the "official" NYC temperature is **Central Park (KNYC)** — but the park is a partial **cool-island** that caps daytime highs *and* props up nighttime lows relative to the surrounding pavement, so it *under-*represents the built city. **Newark** is the hottest official site (~29 days/yr ≥90 °F), **JFK** the coolest (coastal). On a clear night the official stations can differ by **several °F**.

## What drives it
- **Cools:** tree canopy / vegetation (evapotranspiration + shade), waterfront / sea breeze (coastal blocks ~5–9 °F cooler on hot afternoons), high-albedo (reflective) roofs.
- **Warms:** impervious concrete/asphalt, building density (urban-canyon geometry traps heat, low sky-view factor), anthropogenic heat (AC exhaust, traffic).
- **Tree shade** is huge on **surface** temp (20–45 °F cooler pavement) but modest on **air** temp: roughly **+10% canopy → ~0.5 °F cooler air**, up to a few °F peak. Concrete "hottest vs coolest neighborhood" maps (e.g. Washington Heights 90% concrete vs waterfront Ferry Point Park 77% vegetation, ~8 °F apart) are **surface** temperature.

## Heat, equity, and redlining
NYC heat isn't randomly distributed. Formerly **redlined** ('D'-grade) NYC neighborhoods run **~5.8 °F hotter** in land-surface temperature than 'A'-grade ones; the hottest, most heat-vulnerable areas (Heat Vulnerability Index) are the **South Bronx, Northern Manhattan/Harlem, and Central Brooklyn** — lower-income communities of color with less canopy. The [[Harlem Heat Project]] found *indoor* apartments up to 7 °F hotter than outdoors with heat index >100 °F that never broke overnight. This is why the city's **Cool Neighborhoods NYC** program targets those areas.

## Feels-like adds a twist
Air temperature is the *most* spatially variable input; **humidity is smoother** (tracks water/vegetation). So waterfront and park blocks can post a **higher [[Feels-like temperature|heat index]]** than an inland block at the *same* air temperature — the muggier air does the splitting. See [[Feels-like temperature]].

## For the dashboard
None of this neighborhood structure is in the forecast **models** — their grid cells are bigger than Manhattan is wide, so Central Park and the South Bronx get essentially the same forecast. Handling that honestly is covered in [[NYC weather dashboard]].

## Sources
- S. D. Gedzelman et al. (2003), "Mesoscale aspects of the Urban Heat Island around New York City," *Theor. Appl. Climatol.* 75:29–42.
- S. Gaffin et al. (2008), "Variations in NYC's urban heat island strength…," *Theor. Appl. Climatol.*
- US EPA, *Learn About Heat Islands*; NASA/GISS-Columbia NYC UHI Reconnaissance (air vs surface).
- NYC DOHMH, *The Urban Heat Island Effect in NYC* (Environment & Health Data Portal); NYCCAS intra-urban temperature (Urban Climate, 2019).
- Hsu et al. (2021), *Nature Communications*; Hoffman et al. (2020) (redlining/heat); NY State Climate Impacts Assessment.
- NYC Mayor's Office, *Cool Neighborhoods NYC*.

## Open questions
- What are defensible per-neighborhood **air**-temperature UHI offsets (for the dashboard), and how much do they vary day vs night?
- How much of the neighborhood air-temp difference is canopy vs building density vs waterfront, separable?
- Does the [[Feels-like temperature|apparent-temperature]] neighborhood spread exceed the plain-temperature spread, because humidity and heat compound?
