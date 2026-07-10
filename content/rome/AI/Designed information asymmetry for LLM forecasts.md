---
title: Designed information asymmetry for LLM forecasts
created: 2026-07-08
source: llm
status: seed
tags: [ai, agents, forecasting, information-asymmetry]
---
Designed information asymmetry deliberately gives forecasting agents different evidence so deliberation can transmit private signals instead of amplifying shared mistakes.

The core problem in [[LLM agent ensembles for forecasting]] is correlation. If 100 agents use the same model, prompt, search results, and market data, they may converge beautifully toward a wrong probability. The crowd looks large, but its effective number of independent forecasters is small.

## InfoDelphi pattern

[[Multi-agent forecasting frameworks|InfoDelphi]] solves this by splitting the evidence corpus into:

- **public evidence**: the strongest, most relevant common context all agents need to communicate coherently.
- **private evidence**: disjoint peripheral evidence slices routed to different agents.

Agents first forecast from their own packet. Then they exchange rationales and forecast again. The load-bearing trick is that agents share the reasoning trace, not just the number. A probability like "68%" is too compressed; a rationale can carry the private source, causal model, and uncertainty that led there.

## Why public plus private matters

Too much public evidence makes agents redundant. Too little public evidence makes them talk past each other. The useful middle is common ground plus private specialization:

- common ground lets agents understand each other's claims.
- private evidence reduces correlated error.
- rationale exchange lets private evidence propagate.
- confidence-weighted aggregation lets better-supported private views matter more.

## For a crypto portfolio swarm

For a live altcoin system, the public packet might include:

- recent price and volume bars.
- BTC and ETH regime.
- market-wide risk-on or risk-off indicators.
- current portfolio state.
- fees, spreads, and liquidity limits.

Private packets could be routed by desk:

- **momentum desk**: returns, volume breakouts, cross-sectional strength.
- **mean-reversion desk**: stretched moves, funding extremes, RSI-style exhaustion.
- **order-book desk**: spread, depth, slippage, imbalance, liquidity gaps.
- **news desk**: token-specific announcements, exchange listings, regulatory items.
- **social desk**: narrative velocity, influencer concentration, bot-like spikes.
- **on-chain desk**: flows, active addresses, bridge activity, whale movements.
- **tokenomics desk**: unlocks, emissions, treasury behavior.
- **regime desk**: BTC dominance, volatility, correlations, macro calendar.
- **skeptic desk**: data-quality failures, manipulation risk, unavailable execution.

The visual payoff is excellent: the site can show which private packets pulled the ensemble away from the market prior.

## Failure modes

- Private packets that are different but not useful create noise, not wisdom.
- If agents see each other's forecasts too early, they herd.
- If the aggregator rewards confidence without calibration, persuasive agents dominate.
- If all agents share the same aligned model family, private evidence helps but does not remove structural monoculture.
- More deliberation rounds can make the system look more thoughtful while reducing independence.

## Sources

- [Diverse Evidence, Better Forecasts](https://arxiv.org/html/2607.01661v1)
- [The Wisdom of Deliberating AI Crowds](https://arxiv.org/abs/2512.22625)
- [Diversity is the Strength of the AI Crowd](https://arxiv.org/html/2606.29661v1)
- [Preference Optimization Drives Monoculture in LLM Prediction Markets](https://arxiv.org/html/2606.26583v1)

## Open questions

- What is the optimal public/private split for liquid crypto markets, where almost everyone sees the same price data?
- Should private packets be assigned randomly, by agent skill, or by learned specialization?
- Can a dashboard estimate "effective number of independent agents" from forecast covariance before enough outcomes resolve?
