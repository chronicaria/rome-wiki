---
title: Feels-like temperature
created: 2026-07-06
source: llm
status: seed
tags: [weather, forecasting, reference, heat-index, wind-chill]
---

"Feels-like" is not one number: the US uses **two seasonal indices** (heat index in summer, wind chill in winter), while Australia/BoM and [[Weather forecast APIs|Open-Meteo]] use a single **year-round** Steadman apparent temperature that folds in temperature, humidity *and* wind at once. All are verified below against NWS/BoM/Open-Meteo sources. Up: [[Weather prediction (MOC)]].

## 1. Heat index — summer (NWS Rothfusz regression)
The US **heat index** combines **air temperature and relative humidity** only (no wind). It's a multiple-regression fit by Lans P. Rothfusz in a 1990 NWS technical attachment (SR 90-23) to Steadman's 1979 apparent-temperature table.

The regression (T in °F, RH in %):

$$HI = -42.379 + 2.04901523\,T + 10.14333127\,RH - 0.22475541\,T\cdot RH - 0.00683783\,T^2 - 0.05481717\,RH^2 + 0.00122874\,T^2 RH + 0.00085282\,T\,RH^2 - 0.00000199\,T^2 RH^2$$

**Structure:** roughly linear in T, linear-plus-quadratic in RH, with cross-terms that make humidity matter *more* at high temperature (sweat can't evaporate → body can't shed heat). Two adjustments patch the edges:
- **RH < 13% and 80 ≤ T ≤ 112 °F:** subtract $\frac{13-RH}{4}\sqrt{\frac{17-|T-95|}{17}}$.
- **RH > 85% and 80 ≤ T ≤ 87 °F:** add $\frac{RH-85}{10}\cdot\frac{87-T}{5}$.

**Valid range:** the regression is only meaningful for **T ≳ 80 °F and RH ≳ 40%**; below a computed HI of ~80 °F, NWS falls back to a simpler Steadman-based formula. It is explicitly *not* valid beyond the range of Steadman's data.

**Worked points (NWS heat-index chart, shade values):**
- 90 °F + 70% RH → **≈ 106 °F** feels-like (the canonical example).
- 80 °F + 40% RH → ~80 °F (barely any bump — low humidity).
- 100 °F + 50% RH → ~120 °F.
- Full sun can add **up to +15 °F** over these shade values.

## 2. Wind chill — winter (NWS / Environment Canada 2001)
The **wind chill temperature (WCT)** combines **air temperature and wind speed** only (no humidity), modeling convective heat loss from bare skin. Jointly adopted by NWS and Environment Canada in 2001, replacing the 1945 Siple–Passel index, and calibrated to human facial-cooling trials (T in °F, V in mph):

$$WCT = 35.74 + 0.6215\,T - 35.75\,V^{0.16} + 0.4275\,T\,V^{0.16}$$

**Valid range:** **T ≤ 50 °F and wind > 3 mph.** Assumes a 5-ft-tall person walking at 3 mph at night, no solar heating.

**Worked points (NWS):**
- 20 °F + 20 mph → **≈ 1 °F** (a common table value of ~4 °F traces to the older 1945 Siple–Passel index; the 2001 formula gives ~1 °F).
- 0 °F + 15 mph → **−19 °F** (NWS: exposed skin can freeze in ~30 min).

> [!note] Two different formulas
> Heat index and wind chill are **disjoint** — different variables (humidity vs wind), different seasons, no overlap in valid range (80 °F+ vs 50 °F−). This is exactly why a single year-round index is convenient. See §3.

## 3. Steadman apparent temperature — the year-round "feels like"
Robert Steadman's **apparent temperature (AT)**, formalized in his 1984 *A Universal Scale of Apparent Temperature*, is what **Australia's BoM** and **Open-Meteo** report as "feels like." Unlike the US pair, one formula covers **hot and cold** and includes **temperature, humidity AND wind together** (optionally solar radiation).

BoM's non-radiation form (Ta in °C, e = water-vapour pressure in hPa, ws = 10 m wind in m/s):

$$AT = T_a + 0.33\,e - 0.70\,ws - 4.00$$

With radiation Q (W/m²): $AT = T_a + 0.348\,e - 0.70\,ws + 0.70\,\frac{Q}{ws+10} - 4.25$.

**How it differs from heat index:** heat index ignores wind and only works when it's hot; AT subtracts a **wind-cooling term** so it also captures wind chill, making it valid **year-round**. BoM's own examples: −1 °C can *feel like* −15 °C in alpine wind; 29 °C can *feel like* 38 °C in the humid tropics. BoM's standard AT does **not** include direct sun (which can add ~+8 °C midday) and assumes appropriate clothing.

## 4. Why feels-like differs across a city even at the same air temp
[[Temperature forecast confidence intervals|Temperature]] is the *most* spatially variable input — urban studies measure up to ~13 °C differences across a city *at the same minute* (asphalt vs shade vs water). **Relative humidity is more spatially uniform** — it tracks broadly with proximity to water and vegetation rather than fine-grained surface cover. So:
- **Waterfront / park / vegetated** microclimates run **more humid** → in summer, a *higher* heat index even where the thermometer reads the same.
- Because AT and heat index are **nonlinear** in humidity, two neighborhoods at identical air temp can still post different "feels like" numbers — humidity and local wind do the splitting.

Practical upshot for the [[NYC weather dashboard]]: a single grid-point `apparent_temperature` is a neighborhood approximation; waterfront blocks (Battery, the piers) skew more humid/muggier than an inland grid cell suggests.

## 5. Open-Meteo specifics (for the dashboard)
Open-Meteo's `apparent_temperature` **is the Steadman AT** (radiation form), computed as:

```
e   = rh/100 * 6.105 * exp(17.27*T / (237.7 + T))   // Tetens vapour pressure
ws2 = wind_speed_10m * 0.75                          // 10 m → ~2 m
Q   = max(0, 0.1 * (shortwave_radiation - 550))      // capped body-absorbed radiation
AT  = T + 0.348*e - 0.70*ws2 + 0.70*(Q/(ws2+10)) - 4.25
```

- It reports **one unified `apparent_temperature`**, *not* separate heat-index / wind-chill fields — the Steadman form already spans both seasons.
- The 550 W/m² radiation floor is a deliberate cap (raw noon sun ~1100 W/m² otherwise produces absurd values).
- **Per-member availability:** yes — `apparent_temperature` is a listed **Ensemble API** hourly variable, returned for **every ensemble member** (`apparent_temperature_memberNN`). So the [[NYC weather dashboard]] can draw a widening feels-like band exactly like the temperature band, not just a single line.

## Sources
- NWS/WPC Heat Index Equation (Rothfusz regression + adjustments + validity) — https://www.wpc.ncep.noaa.gov/html/heatindex_equationbody.html ; SR 90-23 — https://www.weather.gov/media/ffc/ta_htindx.PDF
- NWS Wind Chill chart & 2001 formula (valid range, examples) — https://www.weather.gov/safety/cold-wind-chill-chart ; https://www.wpc.ncep.noaa.gov/html/windchill.shtml
- Steadman 1984, *A Universal Scale of Apparent Temperature*, J. Appl. Meteor. — https://journals.ametsoc.org/view/journals/apme/23/12/1520-0450_1984_023_1674_ausoat_2_0_co_2.xml
- BoM, *Apparent ("feels like") temperature* — https://media.bom.gov.au/social/blog/1153/apparent-feels-like-temperature/
- Open-Meteo apparent-temperature formula discussion — https://github.com/open-meteo/open-meteo/discussions/651 ; Ensemble API docs — https://open-meteo.com/en/docs/ensemble-api

## Open questions
- Does Open-Meteo's `apparent_temperature` use its `shortwave_radiation` per member, or a shared value? Affects whether the feels-like band's *spread* is honest.
- Heat index vs Steadman AT disagree by a few °F in identical hot-humid conditions (different fits) — which does the dashboard want to *label* as "feels like"?
