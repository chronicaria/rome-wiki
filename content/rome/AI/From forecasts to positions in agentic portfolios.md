---
title: From forecasts to positions in agentic portfolios
created: 2026-07-08
source: llm
status: seed
tags: [ai, agents, investing, portfolio-construction, forecasting]
---
An agentic portfolio should separate forecast formation from position sizing, because being right directionally is not the same as knowing how much to bet.

In a multi-agent investment system, forecasting agents should not directly trade. They should emit structured beliefs, and portfolio agents should convert those beliefs into constrained positions.

## Forecast objects

For each asset and horizon, agents should produce:

- probability of positive return.
- expected return or return quantiles.
- downside probability, such as probability of a drawdown beyond a threshold.
- confidence and evidence quality.
- rationale and falsifier.
- forecast horizon and expiration.

This makes forecasts scoreable. Binary events can use [[Brier score]] and log loss; return distributions can use pinball loss, CRPS, or calibration by quantile bucket.

## Sizing layers

**Market prior layer.** For traded assets, the current price is already a compressed forecast. The system should ask what evidence justifies moving away from a passive baseline such as cash, BTC, ETH, or equal-weight.

**Mean-variance layer.** Markowitz-style optimization can combine expected returns and covariance, but it is fragile when expected returns are noisy. In a toy system, it is best used with heavy shrinkage, max weights, turnover caps, and a benchmark comparison.

**Black-Litterman-style layer.** A better conceptual fit is market prior plus agent views. Agents provide views with confidence; the optimizer blends them with an equilibrium or benchmark prior rather than treating agent expected returns as truth.

**Kelly layer.** Kelly sizing links edge and odds to growth-optimal bet size, but full Kelly is brutal under estimation error. PolySwarm's quarter-Kelly idea is directionally right: use fractional Kelly, hard caps, and no leverage.

**Risk-manager layer.** A separate agent or deterministic module should enforce constraints: max position size, max daily turnover, max drawdown, liquidity, spread, fee drag, stale data, and venue availability.

## Why this matters for a $100 pet project

At $100, fees, spreads, and minimum order sizes dominate. That is actually good for a live visualization: the intellectually honest version should show how many apparent opportunities die in the execution layer.

The clean version is:

- run the whole system live in paper mode.
- optionally mirror only low-frequency, high-confidence changes with the real $100.
- display every blocked trade and the rule that blocked it.
- compare against BTC, ETH, equal-weight, and cash.

## Sources

- [Portfolio Selection](https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.1952.tb01525.x)
- [A New Interpretation of Information Rate](https://onlinelibrary.wiley.com/doi/abs/10.1002/j.1538-7305.1956.tb03809.x)
- [Global Portfolio Optimization](https://people.duke.edu/~charvey/Teaching/BA453_2006/Black_Litterman_Global_Portfolio_Optimization_1992.pdf)
- [PolySwarm](https://arxiv.org/html/2604.03888v1)
- [TradingAgents](https://arxiv.org/abs/2412.20138)
- [Agentic Trading](https://arxiv.org/abs/2605.19337)

## Open questions

- Which forecast target should drive sizing: next-period expected return, probability of outperforming BTC, or downside-adjusted utility?
- How much shrinkage should be imposed before agent forecasts are trusted as expected returns?
- Should the live site show real-money trades at all, or keep real capital separate from the experiment?
