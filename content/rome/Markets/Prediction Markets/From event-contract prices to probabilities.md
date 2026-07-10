---
title: From event-contract prices to probabilities
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, forecasting, market-microstructure, quantitative-research]
as_of: 2026-07-10
desk: Political prediction markets
review_after: 2026-07-17
---
An event-contract price is best read as a venue-specific, timestamped trading quote that can imply a probability only after contract terms, fees, liquidity, and resolution rules are normalized.

Up: [[Political prediction markets]]

The attractive shortcut in [[Political prediction markets]] is to look at a binary contract trading at 62 cents and say "the market thinks the event has a 62% chance." The shortcut is sometimes close enough for casual orientation, but it is not the object a serious analyst should store. A binary event contract is a cash-flow instrument. It has a legal or platform-specific definition, a payout convention, an order book, fees, deadlines, resolution procedures, access constraints, and liquidity at particular sizes. A price is generated inside that machinery. Treating it as a clean probability before inspecting the machinery collapses several different questions into one number.

The disciplined translation starts with the payout. If a "Yes" share costs $0.62 and pays $1.00 if the event resolves yes and $0 otherwise, the gross break-even probability before fees and funding cost is 62%. That is an arithmetic fact about the payoff. It is not yet a claim that the true event probability is 62%, that a trader can buy meaningful size at 62 cents, or that a superficially similar contract elsewhere has the same meaning. The price is the marginal exchange rate between a certain dollar today and a contingent dollar later under a specific rulebook.

The CFTC's public explanation of event contracts makes this distinction visible. It describes yes-no contracts with a fixed payout and an expiration, notes that taxes and fees affect returns, and says that prices reflect traders' perceived probability. It also says customers should receive clear contract terms, including payout, prices, how settlement determinations will be made, who decides, and how. Those are not decorative legal details. They are the fields that determine whether a displayed quote can be compared, scored, or entered into a forecast ledger.

## Start with the executable interval

The cleanest probability object is not the last trade or the website's headline price. It is the executable interval at a timestamp: the highest current bid and lowest current ask, plus enough depth to know what size the interval describes. If the best bid is 58 cents and the best ask is 64 cents, the market is not saying one exact thing. A trader can sell yes at roughly 58 before fees, buy yes at roughly 64 before fees, and infer that the no side is complementary only after checking the venue's matching conventions. The fair value might lie inside that interval, but the order book has not revealed it exactly.

Midpoints are useful summaries when the spread is tight and depth is real. A 58-64 market has a 61-cent midpoint, but that midpoint is not executable. It is an analyst construction. A 60-61 market with thousands of dollars resting on both sides carries more information than a 45-75 market with one contract at each level, even if both midpoints are 60 cents. A historical chart that stores only midpoints loses the distinction between consensus, stale quotes, and empty books.

Kalshi's public API documentation shows why order-book mechanics matter even for a binary market that looks simple. Its order-book response explains that the API returns bids, not asks, because a yes bid at price X is equivalent to a no ask at $1 minus X, and a no bid at price Y is equivalent to a yes ask at $1 minus Y. That reciprocal structure lets the analyst reconstruct best asks, but only if the analyst knows which side and convention the API uses. Without that convention, a stored "price" can be off by exactly the transformation the analyst forgot to apply.

Polymarket's public documentation uses a central limit order book. It says users can read prices and liquidity through a public order-book endpoint and that prices emerge from supply and demand rather than being set by Polymarket. It also says displayed price is the midpoint of the bid-ask spread, except that if the spread is wider than ten cents, the last traded price is shown instead. That rule is a warning label for data work. A displayed value on a wide market may switch from a midpoint to a stale last trade, so a scraper that treats every displayed number as the same statistical field can silently mix incompatible observations.

The first durable rule is therefore simple: save bid, ask, last, displayed price, depth, venue field definitions, and timestamp separately. A price-only archive is a lossy archive.

## Fees move the break-even probability

Fees change the probability threshold at which a contract is economically neutral. A 60-cent yes share with no fees has a gross break-even probability of 60%. If buying it costs additional fees, the buyer needs the event to be more likely than 60% to break even. If selling or exiting also has costs, the no-action band widens.

Kalshi's July 2026 fee schedule is explicit that general trading fees are charged as a variable percentage of expected earnings, with the formula based on the maximum potential earnings, contract count, price, and $P(1-P)$. It also says settlement fees are zero and lists non-standard fee multipliers for particular series. The exact formula matters less for Rome's conceptual map than the consequence: a 50-cent contract, an 80-cent contract, and a 95-cent contract can have different fee drag relative to expected payout, and some series can have different multipliers. The economically implied probability is not always the visible price divided by one dollar.

Fees also affect cross-venue comparisons. Suppose venue A shows a 60-61 interval and venue B shows a 62-63 interval. It is tempting to say venue B is two points higher. That may be false after accounting for fee schedule, maker/taker status, withdrawal or rail fees, settlement timing, collateral constraints, and whether the quotes are executable at comparable size. A prediction-market comparison is not a poll average. It is closer to comparing two basis instruments: the event may be similar, but the carrying costs and execution conditions differ.

For most Rome articles, the right convention is to report both the raw interval and the fee-aware interpretation. If the exact fee-adjusted threshold is not calculated, say so. "Quoted yes interval 60-61 cents before fees" is honest. "Market probability 60.5%" is often too precise.

## Liquidity is part of the observation

Liquidity answers the question "for how much size?" A one-cent spread on one contract is different from a one-cent spread on $50,000 of depth. For political markets, this matters because many readers want to use the price as a social-information signal. Thin markets can move because one trader tests a level, because a market maker refreshes quotes, because a small order consumes the best level, or because a contract is stale. The information content of the price depends on who can trade, how much they can trade, and what it costs to move the book.

Volume and open interest are not substitutes for live depth. Volume counts past trading. It can be high because a market was active months ago, because the same risk changed hands repeatedly, or because a contract family is popular despite a currently empty book. Open interest or outstanding shares can show unresolved exposure, but it does not guarantee that a new observer can execute near the displayed price. Depth at the best bid and ask, plus depth through a few levels, is closer to the actual evidence.

Liquidity also interacts with event timing. A market can be liquid near a major debate, court decision, or election night and then become stale during quiet periods. A contract can look liquid at the event level while a specific outcome token is thin. A multi-outcome family can have active favorites and abandoned long shots. The analyst must preserve the timestamp because a quote's meaning decays when public information changes.

## Contract semantics can dominate price differences

Two markets that sound identical may not be the same instrument. "Which party will control the House?" can depend on whether control means a certified election result, a majority of seats after vacancies, the party of the elected Speaker, the composition on a particular date, or a fallback if the chamber has not organized. "Will a candidate be nominated?" can depend on party convention rules, ballot access, withdrawal, death, replacement, court intervention, or whether a named source has reported the outcome. "Will a bill pass?" can depend on one chamber, both chambers, presidential signature, veto override, enactment date, or official publication.

That is [[Prediction-market resolution risk]], and it creates contract basis. A price gap between two venues can be an arbitrage only after event definition, resolution source, settlement time, cancellation rules, fees, access, and collateral all match. Otherwise the gap may be compensation for different states of the world. One contract might pay yes if a party wins the most seats; another might pay yes only if it controls the chamber after independents caucus. One might resolve from an official source; another might rely on a platform's judgement after news reports. They are related forecasts, not the same asset.

Political contracts are especially exposed because institutions generate edge cases. Elections can be postponed, recounted, litigated, or certified at different times. Candidates can die, withdraw, suspend, remain on ballots, or be replaced. Offices can have acting holders. Courts and legislatures can alter rules after a market launches. A probability translation that ignores the rule text may be precise about the wrong event.

## Multi-outcome markets need coherence checks

Binary prices become harder when outcomes are linked. A family of mutually exclusive candidates should not imply probabilities summing far above or below 100% after fees and spreads, but real order books often show apparent overround or underround. Some of that is spread. Some is fees. Some is collateral and settlement timing. Some is because the outcomes are not truly exhaustive or mutually exclusive under the rules. Some is just thin-market incoherence.

The analyst should avoid normalizing a multi-outcome family mechanically. If the visible asks for five candidates sum to 125%, that does not mean each probability should be divided by 1.25. The asks are buy prices, not fair values; a trader cannot buy every outcome and expect the same economics as the normalized table. The right procedure is to reconstruct executable bid and ask intervals for each outcome, check whether the set is exhaustive, check whether any outcomes can co-resolve, and then report a coherent range or explicitly say the book is too wide for a single probability table.

Conditional markets add another layer. "Candidate wins nomination" and "candidate wins presidency" are linked, but the ratio is not a clean conditional probability unless the contracts share timing, resolution, fees, and access. If the nomination contract is illiquid and the presidency contract is liquid, the implied conditional may be more about microstructure than voter beliefs. The same caution applies to chamber-control contracts, policy passage conditional on party control, or court outcomes conditional on a nomination.

## A practical extraction template

For a Rome prediction-market note, the minimum useful observation should include:

| Field | Why it matters |
| --- | --- |
| Venue and contract identifier | Prevents title drift and lets future readers retrieve the exact instrument. |
| Full event wording | Defines the state of the world being priced. |
| Resolution source and deadline | Determines who decides, when, and under what evidence. |
| Payout convention | Converts cents into gross break-even thresholds. |
| Bid, ask, last, midpoint, and displayed price | Separates executable quotes from platform summaries. |
| Depth at or near best levels | Distinguishes tradable information from a decorative quote. |
| Volume and open interest, if defined | Adds context without substituting for live liquidity. |
| Fee schedule and access caveat | Converts raw price into economic interpretation. |
| Timestamp and timezone | Makes comparison and later scoring possible. |
| Linked comparators | Polls, models, or other markets must share an information cutoff. |

This template is intentionally heavier than a screenshot. Screenshots are brittle: they may omit full rules, depth, API field definitions, and timezone. A source note that saves the fields above can later support calibration, event studies, cross-venue basis analysis, and corrections.

## What the number can and cannot say

After normalization, a price can be a useful forecast input. It aggregates willingness to risk capital, can update faster than polls, and may reveal beliefs that are costly to fake in liquid markets. The CFTC's public material acknowledges that prediction markets can sometimes forecast outcomes better than polling or other forms of forecasting. That "sometimes" is doing important work. Markets are instruments with frictions, not truth machines.

A normalized market-implied probability can say: under these rules, at this timestamp, at this venue, after these assumptions about fees and liquidity, marginal traders priced this contingent payoff around this interval. It cannot by itself say: the event will happen, informed people know the result, the price is calibrated, other venues agree, the poll average is wrong, or the move had a specific cause. Those require separate evidence.

The habit to build is not skepticism for its own sake. It is field discipline. If Rome stores event-contract prices as normalized, sourced, timestamped observations, then later articles can compare them with outcomes, polls, models, and news without leakage. If Rome stores them as unsourced percentages, every later calibration or event-study page inherits hidden errors.

## Place in the map

This note is the foundation for [[Prediction-market calibration]], [[Prediction-market resolution risk]], [[Bid-ask spreads as probability uncertainty]], [[Cross-market arbitrage and contract basis risk]], and the living trackers for political markets. It supplies the data contract: a price observation becomes research-grade only when the executable interval, fee setting, liquidity, contract semantics, and timestamp are preserved.

## Sources

- [CFTC, "Understanding Prediction Markets and Event Contracts"](https://www.cftc.gov/LearnandProtect/PredictionMarkets) — accessed July 10, 2026.
- [Kalshi, "Orderbook Responses"](https://docs.kalshi.com/getting_started/orderbook_responses) — accessed July 10, 2026.
- [Kalshi fee schedule, effective July 7, 2026](https://kalshi.com/docs/kalshi-fee-schedule.pdf) — accessed July 10, 2026.
- [Polymarket, "Prices & Orderbook"](https://docs.polymarket.com/concepts/prices-orderbook) — accessed July 10, 2026.
- [Polymarket, "Orderbook"](https://docs.polymarket.com/trading/orderbook) — accessed July 10, 2026.

## Open questions

- What minimum depth threshold should Rome require before a political market enters a public tracker?
- Should fee-aware probability intervals be calculated directly in the vault, or stored in a separate reproducible dataset?
- How should the snapshot registry represent displayed prices that switch between midpoint and last trade?
