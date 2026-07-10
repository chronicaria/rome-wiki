---
title: Numerical weather prediction
created: 2026-07-06
source: llm
status: seed
tags: [weather, forecasting, physics, modeling]
---

Weather forecasts are produced by integrating the governing fluid equations of the atmosphere forward in time on a 3D grid, starting from an observed initial state.

## What the model actually solves
A general-circulation forecast model steps forward a coupled set of PDEs derived from conservation laws:

- **Momentum** — Navier–Stokes for a compressible fluid on a rotating sphere (gives winds).
- **Mass** — continuity, $\frac{d\rho}{dt} + \rho\,\nabla\cdot\mathbf{V} = 0$.
- **Energy** — first law of thermodynamics (gives temperature).
- **Moisture** — a water-vapour continuity equation (gives clouds, precip).

Classically this set is called the **primitive equations**, which assume hydrostatic balance in the vertical. That label is now slightly dated: the leading operational cores (ECMWF IFS, ICON, GFS-FV3, Met Office UM) are **non-hydrostatic**, so they go beyond the classical primitive set. The continuous equations are discretized onto a grid (or spectral basis) and marched forward in timesteps.

## Where the initial state comes from: data assimilation
A forecast is only as good as its starting point. **Data assimilation** blends a short model forecast (the "background") with fresh observations to produce the best estimate of the current atmosphere. ECMWF uses **4D-Var**: it receives ~800 million observations/day and assimilates ~60 million quality-controlled ones, the vast majority from **satellites** (~90 instruments). This is the step whose residual error seeds all later [[Atmospheric predictability limit|chaotic error growth]].

## Major global models (2024–2026)
| Model | Centre | Grid spacing | Notes |
|---|---|---|---|
| **IFS / HRES** | ECMWF (Europe) | ~9 km | Generally the most accurate global model |
| **GFS** | NOAA/NCEP (US) | ~13 km | FV3 finite-volume cubed-sphere core |
| **ICON** | DWD (Germany) | ~13 km | Icosahedral non-hydrostatic |
| **UM** | Met Office (UK) | ~10 km | Unified Model |
| **GEM/GDPS** | ECCC (Canada) | ~15 km | |
| **ARPEGE** | Météo-France | ~5 km → 24 km | Stretched grid, finest over France |

ECMWF's IFS also drives the [[Ensemble forecasting|ensemble (ENS)]], now at the same ~9 km resolution. Machine-learning emulators (GraphCast, Pangu-Weather, ECMWF's AIFS) now match or beat these physics models on some [[Forecast skill|skill scores]] at a fraction of the compute — an active shift as of 2026.

## Sources
- P. Bauer, A. Thorpe, G. Brunet (2015), "The quiet revolution of numerical weather prediction," *Nature* 525:47–55.
- ECMWF, "Key facts and figures" and IFS documentation (resolutions, 4D-Var obs counts).
- NOAA/GFDL, FV3 dynamical core; DWD ICON; Met Office UM; ECCC GDPS; Météo-France ARPEGE model docs.

## Open questions
- How exactly does 4D-Var propagate observation information backward in the assimilation window?
- Do the ML emulators (GraphCast/AIFS) learn the same dynamics, or shortcuts that break in novel regimes?
- Where does the hydrostatic approximation actually fail enough to matter at ~10 km?
