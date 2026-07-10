---
title: RAPM evaluation and uncertainty
created: 2026-07-09
source: llm
status: seed
tags: [basketball, nba, analytics, rapm, validation, uncertainty]
---

The RAPM system needs separate tests for measurement scale, causal as-of behavior, player forecasting, team forecasting, and interval calibration because passing one does not validate the others.

## A ladder of claims

The project's outputs support increasingly demanding claims:

1. **Arithmetic:** the six factors close exactly to net.
2. **As-of integrity:** a rating dated $D$ does not depend on games after $D$.
3. **Reference scale:** pure NBA ratings reproduce the intended DataBallR-style range and ordering.
4. **Descriptive game fit:** team ratings relate to observed game margins under a declared minutes convention.
5. **Player projection:** past player features improve future RAPM predictions versus simple carry-forward or aging fallbacks.
6. **Season projection:** preseason player and roster inputs produce calibrated wins and playoff probabilities.
7. **Public accountability:** frozen forecasts remain unchanged and are scored after outcomes arrive.

Evidence at a lower rung cannot substitute for a higher one. A 0.99 reference correlation says the implementation matches a scale; it does not say the model predicts next season. Exact `net = sum6` says the explanation reconciles; it does not prove the components are causally identified.

## Scale and causality gates

The production build calibrates the pure NBA series against a public six-factor reference and runs factor-scale gates after regime changes. A planted-future-game test verifies that an extreme future record cannot change an earlier as-of estimate or causal prior feature.

These are important software and temporal guarantees. They do not address selection bias in lineups or movers, which remain model limitations in [[RAPM regularization and identification]] and [[Cross-league RAPM translation]].

## Game-margin evaluation

The July 9 public accuracy artifact reports:

| Metric | Walk-forward | Frozen coefficients |
|---|---:|---:|
| Margin RMSE | 14.396 points | 14.374 points |
| Margin MAE | 11.276 points | 11.256 points |
| Brier score | 0.2025 | 0.2022 |
| Win accuracy | 69.4% | 69.6% |

The similarity between walk-forward and frozen coefficients argues against a large fitting advantage from repeatedly retuning the game layer. The interval coverage on 1,079 scored games is also close to nominal: 50.9% inside the 50% band, 80.5% inside the 80% band, and 90.3% inside the 90% band.

The critical qualification is that team ratings in this test use **realized minutes**. The exercise evaluates rating quality conditional on who actually played and for how long. It is not a strict pregame forecast, and the public artifact marks `strict_pregame` as unavailable.

## Preseason season benchmark

A stricter team-level comparison freezes one preseason snapshot, simulates the season, and scores final wins and playoff probabilities. Pooled over 2024–2026, the current public artifact gives:

| Rating source | Win MAE | Playoff Brier |
|---|---:|---:|
| Internal RAPM decomposition | 6.885 | 0.1790 |
| External EPM benchmark | 6.183 | 0.1641 |

The external benchmark wins on both metrics. That is more informative than a claim that the internal ratings “look right,” and it sets a concrete bar for [[NBA team season projection model]].

## Player forward validation

The headline next-season correlation of roughly $0.89$ compares adjacent five-year-trailing RAPM snapshots. Those windows overlap heavily, so much of the correlation measures smooth shared history. Against a non-overlapping single-season target, the project's honest net correlation is roughly $0.50$.

The XGBoost projection uses expanding temporal splits, horizon purging, gap-safe lags, and survivorship treatment. The post-repair July 9 gate selects XGBoost over the stronger simple fallback in all 30 factor-horizon cells, while the separate aggregate-net model is approved at all five horizons. Current net cross-validation MAE grows from about 0.616 at one year to 1.187 at five years, which makes the widening forecast horizon visible rather than rhetorical.

Those gates are internal temporal validation. They should be followed by a fully frozen season that was unavailable during development. The model has already required leak repairs—for historical availability features and horizon boundaries—so future audits should assume leakage is possible until ruled out.

## Four different uncertainty products

The system uses “uncertainty” in four distinct senses:

### Measurement error

Daily factor bands use an exposure-based standard error, approximately $100\hat\sigma/\sqrt{Weff}$. They correctly widen for small samples, but they ignore the full ridge covariance and can be too narrow for highly collinear teammates.

### Translation uncertainty

NCAA and G League estimates add the non-shrinkable residual variance of the mover mapping. More source-league games narrow source measurement error but cannot eliminate uncertainty about the league jump.

### Player forecast uncertainty

One-to-five-year projections use out-of-fold residual calibration, process variance, and source/fallback flags. They answer “where might this player be?” rather than “how well is he measured today?” The current one-step net 80% coverage is about 84.5%.

### Season outcome uncertainty

The Monte Carlo in [[NBA team season projection model]] combines rating draws, availability/minutes assumptions, schedule realization, and game-margin noise. A team win band is therefore not a transformed player confidence interval; it is a downstream conditional distribution.

## Public accountability

The project has a hash-chained frozen-forecast ledger intended to prevent rewriting predictions after outcomes. At the inspected public build, its scoreboard refused to render because one recomputed forward-skill value drifted from 0.482 to 0.498 beyond the ±0.01 tolerance. Refusal is the correct behavior: integrity is more valuable than silently displaying a stale number.

## Highest-priority uncertainty debts

- replace exposure-only player errors with the full ridge covariance diagonal;
- model factor and teammate covariance in net and team bands;
- build a strict-pregame historical roster/minutes convention;
- evaluate the forward model on a genuinely frozen future season;
- repair cross-league selection and errors-in-variables limitations;
- distinguish injury, rest, assignment, and coaching DNP in availability data;
- surface data-quality flags for early college and legacy NBA play-by-play.

## Open questions

- Which metric should be the promotion gate for future model changes: player error, win MAE, Brier score, calibration, or a multi-objective scorecard?
- What tolerance should a frozen ledger allow for deterministic numerical drift without weakening tamper evidence?
- Can conformal calibration give reliable coverage across exposure, age, and role strata?
- How should public leaderboards communicate uncertainty without encouraging false rank precision?
