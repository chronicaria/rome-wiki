---
title: Temperature forecast confidence intervals
created: 2026-07-06
source: llm
status: seed
tags: [weather, forecasting, uncertainty, statistics]
---

Rule of thumb: a **day-3 temperature forecast carries a 95% interval of about ±8 °F**, widening by roughly a degree per additional day — but this is an all-regime *average* that hides a factor-of-3 spread between calm and active weather.

## The concrete answer
> [!example] "I see 80 °F, 3 days out. What's the 95% interval?"
> **≈ [72, 88] °F** typically (conservative edge [71, 89] °F). Half-width ~±8 °F. On a calm summer high it's more like ±4 °F; ahead of a front or a heat-wave onset it can blow out to ±15 °F+.

## How the band is built
**1. Error grows with lead time.** Verification of high-temperature forecasts (NWS / commercial), in mean absolute error (MAE):

| Lead | MAE (°F) | ≈95% half-width |
|---|---|---|
| Day 1 | ~3.0 | ±7 °F |
| Day 3 | ~3.5 | ±8–9 °F |
| Day 5 | ~4.5 | ±11 °F |
| Day 7 | ~5.5 | ±13 °F |
| Day 10 | ~6.5 (≈ climatology) | ±16 °F (no skill) |

(NWS day-3 error fell from 5.8 °F in 1972 to ~3.0 °F by 2017 — the [[Forecast skill|one-day-per-decade]] gain, felt.) By ~day 10 the forecast is no better than just quoting the date's climatological normal — the [[Atmospheric predictability limit|predictability ceiling]].

**2. Convert MAE → interval.** Assuming roughly Gaussian errors, for a zero-mean normal $E|X| = \sigma\sqrt{2/\pi}$, so
$$\sigma = \text{MAE}\cdot\sqrt{\tfrac{\pi}{2}} \approx 1.25\,\text{MAE}, \qquad \text{95\%} = \pm 1.96\,\sigma \approx \pm 2.46\,\text{MAE}.$$
Day-3 MAE 3.5 °F → σ ≈ 4.4 °F → **±8.6 °F**. (Using RMSE ≈ 4 °F directly gives ±8 °F; the two routes bracket ±8–9 °F.)

## Why a single ± band is a lie the average tells
The ±8 °F is an annual, all-region mean. The real error distribution is **not** a fixed Gaussian:

- **Regime-dependent.** Stable/quiescent (summer high, well-mixed afternoon): ±3–5 °F. Active (fronts, convection, heat-wave onset, winter inversions): ±12–18 °F+.
- **Non-Gaussian — peaked core, fat tails.** More forecasts land dead-on than a Gaussian predicts, *and* the misses are worse (occasional busts). During heat waves 2 m errors jump to 5–10 °C (Ennis et al. 2025).
- **Seasonal / geographic.** Winter > summer; coasts and mountains worse than flatland.

This is precisely why real forecasts come from an **[[Ensemble forecasting|ensemble]]**, which gives a *flow-dependent* spread instead of a fixed rule of thumb: the band should be narrow on a boring day and wide on a volatile one.

## Calibration footnote
NWS **temperature** forecasts are found to be well-calibrated. Commercial **precipitation** probabilities show a deliberate "wet bias" — predict 20%, it rains ~5% (Bickel & Kim 2008; Silver 2012) — so trust temperature bands more than a low PoP.

## Sources
- Penn State METEO 3, "Assessing Forecast Accuracy" (NWS/WPC verification: day-3 ~3–4 °F, day-7 ~5–6 °F).
- Washington Post (2024), "How accurate is the weather forecast where you live?" (NWS day-3 temp error 5.8 °F → 3.0 °F).
- E. Floehr / ForecastWatch (2018), global 1–5-day temperature forecast analysis.
- N. Silver (2012), *The Signal and the Noise*, ch. 4 (climatology error ~7 °F; wet bias).
- J. E. Bickel & S. D. Kim (2008), "Verification of The Weather Channel PoP Forecasts," *Mon. Wea. Rev.* 136(12):4867–4881.
- Ennis et al. (2025), "Turning Up the Heat: 2-m Temperature Forecast Errors During Heat Waves," arXiv:2504.21195.

## Exercise
> [!question]- If a day-5 forecast says 60 °F, what's a reasonable 95% band, and when would you distrust it?
> Day-5 MAE ≈ 4.5 °F → ±2.46×4.5 ≈ **±11 °F → [49, 71] °F** as an all-regime average. Distrust (widen it) if a front, convection, or a temperature swing is in play near that day, or in winter/coastal/mountain settings — check the actual [[Ensemble forecasting|ensemble spread]] rather than the rule of thumb.

## Open questions
- What's the cleanest published RMSE-vs-lead-day curve in °C for a *raw* global model (vs post-processed NWS)?
- How much tighter are these bands after statistical post-processing (MOS / ML) vs raw model output?
- Is there a simple regime indicator (ensemble spread percentile?) a layperson could use to know "today's ±8 is really ±15"?
