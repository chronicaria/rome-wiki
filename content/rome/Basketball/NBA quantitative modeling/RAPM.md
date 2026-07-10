---
title: RAPM
created: 2026-07-09
source: llm
status: seed
tags: [basketball, nba, analytics, rapm, moc]
---
# RAPM

Andrew's Daily RAPM project estimates how players change possession value after adjusting for all ten players on the floor, decomposes that value into six interpretable skills, places the NBA, G League, and NCAA on one scale, and carries the measured ratings into explicitly labeled forward projections.

The central object is not a box-score ranking. It is a daily, regularized lineup model built from possession-level play-by-play. A player's coefficient asks: after accounting for teammates, opponents, recency, and the rest of the design, how much did possessions involving this player move a particular scoring-value component? The public product then separates four layers that should never be confused:

1. **Measurement:** [[RAPM lineup model]] estimates what the possession evidence says as of a date.
2. **Interpretation:** [[Six-factor RAPM decomposition]] splits net value into offensive and defensive shooting, turnover, and second-chance components.
3. **Comparison:** [[Cross-league RAPM translation]] maps feeder-league estimates onto an NBA-equivalent scale while preserving a large uncertainty penalty.
4. **Forecasting:** [[NBA player forward projection model]] and [[NBA team season projection model]] extrapolate measured ratings, minutes, availability, schedules, and game noise into future distributions.

## Research goal

The project is trying to build a coherent answer to several different questions:

- Who has added possession value, after adjusting for the other players on the court?
- Which parts of that value look like shooting, ball security, second chances, shot defense, forced turnovers, or defensive rebounding value?
- How has a player's estimate moved through a career rather than merely from season to season?
- What does college or G League performance imply on an NBA scale?
- What should a roster be expected to do next season, and how uncertain is that forecast?
- Can every public claim be tied to a reproducible artifact, an honest baseline, and an explicit limitation?

Those questions require different statistical objects. The daily RAPM curve is **descriptive**. A translated college rating is a noisy NBA-equivalent comparison, not a confident rookie forecast. The orange future trajectory and the 2026-27 standings are **projections**. Minutes and availability affect team wins without changing a player's per-100 rating. [[RAPM evaluation and uncertainty]] keeps these contracts separate.

## Three measured views

The player explorer can show three descriptions of the same game day:

- **Pure RAPM:** ridge coefficients shrink toward zero. This is the clean lineup-only reference.
- **Prior-informed RAPM:** the same possession model can shrink selected component coefficients toward a causal box/EPM-feature prior. Thin samples move more; established players are governed mainly by lineup evidence.
- **Box prior:** the prior estimate itself, displayed as its own daily curve rather than passed off as lineup evidence.

The distinctions matter. A prior can make a rookie estimate more stable without proving that the box features add much net predictive power. The project's own testing finds the daily prior's net edge over pure RAPM small and regime-dependent; its clearer benefit is structural—daily, causal, multi-league, and inspectable.

## Reading map

- [[RAPM lineup model]] — the weighted ridge regression and daily as-of construction.
- [[Six-factor RAPM decomposition]] — what the six components mean and why `net = sum6` is exact.
- [[RAPM regularization and identification]] — what ridge makes estimable, what remains confounded, and what the error bars do not know.
- [[Cross-league RAPM translation]] — mover-based affine mappings and the irreducible league-jump variance.
- [[NBA player forward projection model]] — one-to-five-year player trajectories, model gates, and re-decomposition.
- [[NBA team season projection model]] — rosters, minutes, availability, game model, and Monte Carlo season outcomes.
- [[RAPM evaluation and uncertainty]] — scale gates, temporal validation, benchmark results, calibration, and known failure modes.
- [[Daily RAPM implementation map]] — where each conceptual stage lives in `unified-rapm`.
- [[Daily RAPM public site]] — how the generated GitHub Pages product relates to the source system.
- [[Current RAPM decomp CSV export]] — a point-in-time data export and its schema caveats.

## Project boundary

`unified-rapm` is the source-of-truth research and build repository. `andrewjparkus.github.io` is a generated checkout containing the public pages and JSON artifacts. [[Daily RAPM implementation map]] records the boundary: the build may clear and reconstruct the public checkout, and publication occurs only after Andrew reviews, commits, and pushes it.

These notes summarize the working system inspected on July 9, 2026. Where older prose and executable code disagree, the live code path and generated artifact metadata are treated as the current behavior, and the mismatch is called out rather than silently harmonized.

## Open questions

- Which single headline best communicates the project without collapsing measurement, translation, and forecasting into one claim?
- Should the public product foreground the six-factor explanation, the daily career curves, or the forecast-accountability layer?
- What stable versioning rule should connect a Rome explanation to a specific model artifact and public-site build?
- Which parts of the system are publishable methods, and which depend on private data or owner-gated infrastructure?
