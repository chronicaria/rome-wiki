---
title: Political prediction markets
created: 2026-07-09
source: llm
status: seed
tags: [markets, prediction-markets, politics, forecasting]
as_of: 2026-07-10
desk: Political prediction markets
review_after: 2026-07-10
---
Political prediction-market prices are contract-specific, spread- and liquidity-affected observations—not official probabilities or election facts.

Up: [[Markets]] · Related: [[2026 United States midterm elections]]

## Foundations

- [[From event-contract prices to probabilities]]
- [[Bid-ask spreads as probability uncertainty]]
- [[Prediction-market resolution risk]]
- [[Prediction-market calibration]]
- [[Proper scoring rules and market forecasts]]
- [[Logical coherence across prediction markets]]
- [[Order-book microstructure of event contracts]]
- [[Conditional political probabilities]]
- [[Information aggregation in prediction markets]]
- [[CFTC 2026 prediction-market proposal]]
- [[Backtesting political forecasts without leakage]]
- [[Favorite-longshot bias in event contracts]]
- [[Forecast combination with polls models and markets]]
- [[Liquidity manipulation and insider incentives in prediction markets]]
- [[Political event-contract resolution designs]]
- [[Prediction-market regulatory docket]]
- [[Fees and executable probability intervals]]
- [[Participant access and selection in political prediction markets]]
- [[Political prediction-market contract families]]
- [[Voids cancellations and postponements in event contracts]]
- [[Dependence across political event contracts]]
- [[Versioning political event-contract semantics]]
- [[Political prediction-market calibration ledger]]
- [[Oracle and dispute mechanisms in political prediction markets]]
- [[Settlement latency in political prediction markets]]
- [[Contract-set coherence diagnostics]]
- [[Missing-data policy for political market backtests]]
- [[Forecast horizons in political prediction markets]]

## Current observations

On July 9, Polymarket displayed roughly 54¢ Republican and 47¢ Democratic asks for Senate control, with about $3.13 million in volume; its House contract displayed roughly 84¢ Democratic and 17¢ Republican asks, with about $8.30 million in volume. Complementary asks summing to 101¢ illustrate why displayed prices should not be normalized casually.

At 00:07 UTC on July 10, Polymarket's official Gamma API reported executable one-cent-wide intervals of 46–47¢ for Democratic Senate control and 54–55¢ for Republican control. For the House, the intervals were 83–84¢ Democratic and 16–17¢ Republican. Event-level displayed liquidity was about $384,566 for the Senate family and $689,948 for the House family. These are venue-reported fields; the snapshot did not independently verify depth at a specified size or fees.

The contract rules matter: the Senate contract addresses the vice president and ties, while the House contract uses a Speaker-related fallback under ambiguity. Kalshi pages were not reliably accessible during this run, so no cross-venue confirmation is claimed.

The CFTC's June 2026 proposed rule would establish a review framework for event contracts involving enumerated activities and identifies settlement criteria, dispute resolution, surveillance, and controls on nonpublic information as relevant public-interest factors. It is a proposal, not a final prohibition or approval. See [[CFTC 2026 prediction-market proposal]].

## Why it matters

Comparisons require matched wording, resolution source, expiry, fees, spread, depth, and jurisdiction. Calibration needs archived forecasts and outcomes, not a snapshot alone.

## Sources

- [Polymarket 2026 Senate control contract](https://polymarket.com/event/which-party-will-win-the-senate-in-2026) — accessed July 9, 2026.
- [Polymarket 2026 House control contract](https://polymarket.com/event/which-party-will-win-the-house-in-2026) — accessed July 9, 2026.
- [CFTC prediction-markets guidance](https://www.cftc.gov/LearnandProtect/PredictionMarkets) — accessed July 9, 2026.
- [Polymarket Gamma API: Senate event](https://gamma-api.polymarket.com/events?slug=which-party-will-win-the-senate-in-2026) and [House event](https://gamma-api.polymarket.com/events?slug=which-party-will-win-the-house-in-2026) — retrieved July 10, 2026 at 00:07 UTC.
- [CFTC proposed prediction-markets rule](https://www.cftc.gov/media/14151/NPRM_PredictionMarkets060926/download) — Commission-approved pre-publication version, June 2026; accessed July 9, 2026.

## Open questions

- Can official Kalshi specifications and order-book data be retrieved reproducibly?
- How should fees, spread, and depth enter a cross-venue probability comparison?
