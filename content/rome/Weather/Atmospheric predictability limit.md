---
title: Atmospheric predictability limit
created: 2026-07-06
source: llm
status: seed
tags: [weather, forecasting, chaos, dynamics]
---

The atmosphere is chaotic, so forecast error grows until it saturates: deterministic day-to-day weather has a hard predictability ceiling of roughly **two weeks**, and today's models reach ~10 days of it.

## Chaos: sensitive dependence on initial conditions
Edward **Lorenz (1963)**, studying a toy convection model, found *deterministic nonperiodic flow*: trajectories that never repeat and diverge exponentially from nearly identical starts. Tiny errors in the initial state amplify without bound. He dramatized it in a 1972 talk — *"Does the Flap of a Butterfly's Wings in Brazil Set Off a Tornado in Texas?"* — giving us the **butterfly effect**.

The deeper result is **Lorenz (1969)**: a flow with *many scales of motion* is only finitely predictable. Two states differing initially by a small observational error evolve into states **as different as two randomly chosen states within a finite time** — and, crucially, *shrinking the initial error does not push that horizon out proportionally*. This is why you can't just measure harder to forecast a month out.

## How error grows
Forecast error $\epsilon(t)$ grows quasi-exponentially while small,
$$\epsilon(t) \approx \epsilon_0\, e^{t/\tau},$$
then the growth decelerates and **saturates** once error reaches the size of differences between random atmospheric states — i.e. the *climatological variance*. Modern estimates of the synoptic-scale doubling time $\tau$ are **~1.5–3 days** (Lorenz's coarse 1960s models gave ~5 days).

Because $\tau$ shrinks with scale, an **upscale error cascade** operates: the **smallest scales lose predictability first** and contaminate larger ones.

| Scale | Rough predictability horizon |
|---|---|
| Thunderstorms / convection | hours |
| Synoptic systems (fronts, lows) | days |
| Planetary waves | ~1–2 weeks |
| Coupled modes (ENSO, MJO) | weeks–months (probabilistic) |

## The number: ~2 weeks
**Zhang et al. (2019)** put a value on it. Their finding, near-verbatim: a skillful lead time for midlatitude instantaneous weather is *currently ~10 days* (the **practical** limit); reducing initial-condition uncertainty by an order of magnitude, with a near-perfect model, extends deterministic forecasts by *at most ~5 more days*. So the **intrinsic** limit is roughly **two weeks**, and current systems sit ~4–5 days short of it.

Beyond that ceiling, a deterministic daily forecast is no better than climatology — which is exactly where [[Temperature forecast confidence intervals]] widen to the climatological spread, and why longer-range prediction goes **probabilistic** ([[Ensemble forecasting]]) and sub-seasonal.

## Sources
- E. N. Lorenz (1963), "Deterministic Nonperiodic Flow," *J. Atmos. Sci.* 20:130–141.
- E. N. Lorenz (1969), "The predictability of a flow which possesses many scales of motion," *Tellus* 21(3):289–307.
- F. Zhang, Y. Q. Sun, L. Magnusson, R. Buizza, S.-J. Lin, J.-H. Chen, K. Emanuel (2019), "What Is the Predictability Limit of Midlatitude Weather?," *J. Atmos. Sci.* 76(4):1077–1091.

## Open questions
- Is the ~2-week limit truly fundamental, or an artifact of current model/observation gaps?
- Why does convective-scale predictability collapse in hours — pure chaos, or missing physics?
- How do ENSO/MJO leak *predictability* back into a system that's otherwise chaotic past ~2 weeks?
