---
title: NBA player forward projection model
created: 2026-07-09
source: llm
status: seed
tags: [basketball, nba, analytics, projection, xgboost, rapm]
---

The player projection layer converts causal season-end RAPM measurements into one-to-five-year forecasts using temporally validated gradient-boosted models, explicit fallbacks, and residual-calibrated uncertainty.

## Measurement is the starting point

The model begins with season-end NBA snapshots from [[RAPM lineup model]], not the full future-aware career record. Because each daily rating only uses games available by that date, a season-end row is an as-of feature rather than a retrospective smoothing of later seasons.

For every player-season, the training panel builds:

- current, one-year-lagged, and two-year-lagged values;
- recent deltas and a three-point trajectory slope;
- all six current factors and current net;
- the box prior as a second opinion;
- age, years in the league, and draft signal;
- historical minutes and games-played rates;
- interactions between availability, minutes, and nonnegative impact;
- a “young improver” indicator;
- optional leakage-safe predictive box-rate features sourced through the EPM data contract.

Raw EPM impact ratings are forbidden as features. The EPM-derived columns are underlying predictive rates such as steals, blocks, rebounding, usage, shot location, and shooting percentages. The current ablation record is deliberately mixed: 14 factor-horizon cells approve those features and 16 leave them dormant, so the feature family should not be advertised as a universal improvement.

## One model for each target and horizon

The forward system trains a deterministic XGBoost model for each of the six factors at horizons one through five. It also trains a separate aggregate-net target at each horizon. Each target uses an expanding-window temporal evaluation: training seasons precede test seasons, and horizon purging prevents a label that lands in the test period from entering the training set.

Three structural choices matter:

1. **Monotonicity:** the model is constrained so a larger current value for the target cannot, by itself, force a lower forecast.
2. **Survivorship treatment:** players who leave the league are not simply deleted; missing future targets after a career ends decay toward a replacement-tail floor.
3. **Recency weighting:** recent training seasons receive more weight, with a six-season half-life.

Every factor-horizon cell is compared against its stronger simple fallback—carry-forward or an aging adjustment. The July 9 gate selects XGBoost for all 30 factor-horizon cells. That is an internal temporal gate, not proof that every downstream season forecast beats an external model.

## The B-prime aggregate correction

Projecting six small components independently can make aggregate aging wash out: positive and negative component errors cancel, and an older player's net may fail to decline even when the aggregate historical pattern says it should. The current B-prime path therefore also models net directly.

The production artifact approves the aggregate-net model for all five horizons. For each player-horizon it first obtains the six factor forecasts, then computes the gap

$$
\Delta=\widehat{net}_{single}-\sum_f\widehat f.
$$

It distributes $\Delta$ back across the six factors in proportion to their absolute projected magnitudes, using equal shares only if every magnitude is zero. The displayed factors therefore retain an interpretable decomposition while satisfying

$$
\sum_f\widehat f^{\,*}=\widehat{net}_{single}.
$$

This is an important distinction: measured net in [[Six-factor RAPM decomposition]] is not separately solved, but forecast net can be separately modeled and then re-decomposed so the published output still obeys `net = sum6`.

The inspected production metadata reports 906 players receiving the XGBoost overlay. Players or cells without an approved artifact fall back explicitly rather than receiving silent nulls.

## Forecast intervals

The model retains a baseline path built from carry-forward, per-factor aging decisions, measurement error, and estimated process variance. XGBoost cells use out-of-fold residual distributions. A calibration table supplies residual quantiles by target, horizon, source, and—when sample size permits—player stratum such as role or age group.

The output records point forecasts plus p10, p50, and p90 bands, source flags, calibration source, and fallback indicators. The current projection metadata reports one-step net 80% coverage of about 84.5%, within the project's broad acceptance band but not exact nominal calibration.

Forecast uncertainty is different from today's measurement uncertainty. A player can be well measured now and still have a wide five-year forecast because aging, role change, injury, survival, and development add process variance. [[RAPM evaluation and uncertainty]] keeps those two bands separate.

## From player forecasts to team outcomes

Per-100 player trajectories do not predict wins alone. [[NBA team season projection model]] adds expected games played, minute allocations, roster identity, rookie cold starts, a game model, schedule uncertainty, and playoff simulation. A strong player forecast can still yield modest team value if availability or minutes are low; minutes are not allowed to inflate the player's per-100 rating itself.

## Open questions

- Does the proportional re-decomposition of aggregate net preserve believable factor trajectories for unusual player profiles?
- Should aggregate net and six factors be modeled jointly under a coherence constraint rather than reconciled afterward?
- How stable are the 30 XGBoost gate decisions under a truly frozen future season?
- Can injury history and role transitions improve forecast distributions without leaking realized availability?
