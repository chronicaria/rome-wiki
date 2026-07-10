---
title: Ensemble forecasting
created: 2026-07-06
source: llm
status: seed
tags: [weather, forecasting, uncertainty, statistics]
---

Run many slightly-perturbed forecasts instead of one; the **spread** of the ensemble is the forecast's own, flow-dependent estimate of its uncertainty.

## Why
A single deterministic run gives you a number with no error bar. But the initial state and the model are both imperfect, and the atmosphere is chaotic ([[Atmospheric predictability limit]]), so nearby starts diverge. An **ensemble** samples that divergence: perturb the inputs, run $N$ forecasts, and read the resulting distribution as a probability forecast.

## The operational systems
| System | Centre | Members |
|---|---|---|
| **ENS** | ECMWF | 51 (50 perturbed + 1 control); 101 at sub-seasonal range |
| **GEFS** | NOAA | 31 (30 perturbed + 1 control) |

Two sources of error get perturbed:
- **Initial conditions** — ECMWF: singular vectors (fastest-growing perturbations) + an Ensemble of Data Assimilations (EDA); NCEP: an ensemble Kalman filter.
- **Model error** — *stochastic physics*. ECMWF now uses **SPP** (Stochastically Perturbed Parametrizations), which **replaced SPPT in Nov 2024**; GEFS uses SPPT + SKEB. (SPPT is still the canonical textbook example.)

## Reading the spread: calibration
A **well-calibrated** ensemble is *statistically consistent*: the RMS ensemble spread should match the **RMSE of the ensemble mean**. (Finite-sample exact form scales spread by $\sqrt{(N+1)/N}$; Fortin et al. 2014.) In practice ensembles tend to be **under-dispersive** — too confident — which is why raw spread is often statistically post-processed before it becomes a probability.

Standard scoring tools:
- **CRPS** — Continuous Ranked Probability Score; generalizes [[Temperature forecast confidence intervals|MAE]] to a full predictive distribution.
- **Brier score** — MSE of probability forecasts for a binary event.
- **Rank (Talagrand) histogram** — flat = calibrated, U-shaped = under-dispersive.
- **Reliability diagram** — observed frequency vs forecast probability; on the diagonal = reliable.

The guiding principle (Gneiting, Balabdaoui & Raftery 2007): **maximize sharpness subject to calibration** — be as confident as you can while still being honest.

## Why this matters downstream
The ensemble is what turns "80°F" into a *flow-dependent* band: tight in a stable regime, wide before a front. A fixed rule-of-thumb interval ([[Temperature forecast confidence intervals]]) is really just the ensemble spread *averaged over all regimes*.

## Sources
- C. E. Leith (1974), "Theoretical Skill of Monte Carlo Forecasts," *Mon. Wea. Rev.* 102(6):409–418 — founding idea.
- M. Leutbecher & T. N. Palmer (2008), "Ensemble forecasting," *J. Comput. Phys.* 227:3515–3539 — review.
- V. Fortin et al. (2014), "Why Should Ensemble Spread Match the RMSE of the Ensemble Mean?," *J. Hydrometeorol.* 15(4):1708–1713.
- T. Gneiting, F. Balabdaoui, A. E. Raftery (2007), "Probabilistic forecasts, calibration and sharpness," *J. R. Stat. Soc. B* 69(2):243–268.

## Open questions
- Why are ensembles systematically under-dispersive — missing model error, or too few members?
- How much of real-world skill comes from statistical post-processing vs the raw dynamical spread?
- Singular vectors vs EDA vs EnKF: when does each best capture the true initial uncertainty?
