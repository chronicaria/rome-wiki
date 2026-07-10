---
title: Forecast skill
created: 2026-07-06
source: llm
status: seed
tags: [weather, forecasting, verification, statistics]
---

Forecast quality is measured mainly by the **anomaly correlation coefficient (ACC) of 500 hPa geopotential height**, and by that yardstick skill has improved by roughly **one day of lead time per decade**.

## The headline metric: ACC of 500 hPa height
The 500 hPa geopotential height field is the standard "mid-tropospheric flow" diagnostic. The **anomaly correlation coefficient** measures how well the forecast's departures-from-climatology correlate with the observed departures. It runs from +1 (perfect) through ~0 (no value) to −1 (anti-phase).

- **ACC ≈ 0.6** — the "useful forecast" threshold: below it, synoptic features are no longer positioned well enough to trust.
- **ACC ≈ 0.8** — ECMWF's official *headline* score for a very good forecast.

**ECMWF HRES skill horizon** (Northern Hemisphere, recent ~2023–24):
| Threshold | Reached at |
|---|---|
| 0.8 (headline) | ~day 7 |
| 0.6 (useful) | ~day 9–10 |

The ensemble mean typically reaches 0.6 about a day later than HRES. These crossings are where deterministic skill fades into the [[Atmospheric predictability limit|~2-week ceiling]].

## The "one day per decade" rule
**Bauer, Thorpe & Brunet (2015)** quantified the long, quiet improvement of NWP. Their exact framing: *"the skill of deterministic weather forecasts in the range from 3 to 10 days ahead has been improving by about one day per decade — that is, today's 6-day forecast is as accurate as the 5-day forecast ten years ago."*

The gains came from better models, higher resolution, better [[Ensemble forecasting|data assimilation]], the satellite observing system, and raw compute — not one breakthrough. (The underlying result traces to Simmons & Hollingsworth 2002.)

As of 2026 the "best deterministic global model" framing is contested: ML models (GraphCast, FuXi, ECMWF's AIFS) now match or slightly beat HRES on Z500 ACC at these lead times.

## Sources
- P. Bauer, A. Thorpe, G. Brunet (2015), "The quiet revolution of numerical weather prediction," *Nature* 525:47–55.
- A. J. Simmons & A. Hollingsworth (2002), "Some aspects of the improvement in skill of numerical weather prediction," *Q.J.R. Meteorol. Soc.* 128.
- ECMWF Forecast User Guide, §6.2 (ACC thresholds, headline scores).

## Open questions
- Why 500 hPa specifically as the headline field, rather than surface variables people feel?
- Will the ~1 day/decade rate continue, flatten near the predictability limit, or jump with ML models?
- How is ACC skill related to the practical [[Temperature forecast confidence intervals|temperature error]] a user experiences?
