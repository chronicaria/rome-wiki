---
title: Order-book microstructure of event contracts
created: 2026-07-09
source: llm
status: seed
tags: [prediction-markets, market-microstructure, event-contracts, liquidity, forecasting]
---

An event-contract price is the temporary result of rules for submitting, ranking, matching, canceling, and settling orders—not a free-standing probability estimate.

Up: [[Political prediction markets]] · Related: [[From event-contract prices to probabilities]] · [[Bid-ask spreads as probability uncertainty]] · [[Logical coherence across prediction markets]]

## The explanatory center

A binary event contract pays a fixed amount, commonly one dollar, if a defined condition resolves Yes and zero otherwise. That payoff makes a 63-cent quote look like a 63% forecast. But the quote visible at any instant is produced by a trading mechanism. Participants choose prices and quantities; the venue validates and ranks their instructions; incoming orders trade against compatible resting orders; cancellations remove intentions that never became trades; and settlement converts matched positions into eventual cash flows. Market microstructure is the study of that machinery and of how it shapes observed prices.

This distinction matters because two books can show the same best bid and ask while carrying very different evidence. One may contain substantial quantity across many nearby price levels, persistent makers, and frequent two-sided trading. The other may contain one tiny order at each best quote, a large gap behind them, and no recent transactions. Their midpoints are identical, but the cost of acquiring a meaningful position, the fragility of the displayed probability, and the likely response to new information are not.

The right unit of analysis is therefore not “the price.” It is a time-stamped state transition: a particular contract definition, book state, incoming message, matching rule, resulting fills, remaining depth, fees, and settlement status. [[From event-contract prices to probabilities]] explains how to interpret the economic output. This note explains how that output is made.

## A central limit order book in one example

Suppose the Yes book has resting sell orders for 100 contracts at $0.61, 300 at $0.63, and 600 at $0.67. The best ask is $0.61. A participant who submits a marketable buy for 250 contracts does not necessarily buy all 250 at 61 cents. The order consumes the 100 available at $0.61 and then 150 at $0.63. Its volume-weighted average execution price is

$$
\frac{100(0.61)+150(0.63)}{250}=0.622.
$$

Afterward, 150 contracts remain at $0.63, so the best ask is now $0.63 even if nobody revised a forecast. The apparent probability moved because an order consumed depth. If the buyer instead posted a non-marketable limit at $0.60, it would normally rest without a fill, add displayed demand, and potentially become the best bid. The order would express willingness to trade, not a completed information event.

That example separates four objects often collapsed in a screenshot:

- **quote:** a resting willingness to trade at a specified price and quantity;
- **trade:** an actual match between compatible orders;
- **last price:** the price of the most recent match, however old or small;
- **book state:** all currently resting interest, usually summarized by price level.

The last trade can remain at $0.61 after the best executable prices have moved to $0.58 and $0.66. A midpoint can change when orders are posted or canceled even though no trade occurs. Volume can rise without improving current depth because the traded orders are gone. Open interest can grow or shrink according to position creation and offset rules without telling the analyst where the next contract can execute. These fields answer different questions.

## Binary complementarity changes the display, not the economics

Binary contracts introduce a useful equivalence. If one Yes claim and one No claim jointly pay exactly one dollar in every valid resolution state, a bid of $0.42 for No is economically related to an offer to sell Yes at $0.58. Kalshi's official order-book documentation uses this complementarity to return Yes bids and No bids rather than redundant ask arrays. The best Yes ask is reconstructed from the best No bid:

$$
a_{Yes}=1-b_{No}.
$$

This convention is compact, but it is a recurring data trap. An analyst who assumes every API array is a conventional bid-and-ask pair can invert the market or omit one side. The safe procedure is to store the venue's native side, price units, ordering, and transformation rule before deriving a canonical Yes bid and ask.

Complementarity also does not eliminate friction. Buying Yes at its ask and buying No at its ask can cost more than one dollar because each ask includes its side of the spread. Nor does a one-dollar payoff identity guarantee that every venue implements minting, conversion, collateral, cancellation, or invalid-resolution states in the same way. The contract rules and venue architecture must support the purported equivalence.

## Order instructions determine whether intent becomes liquidity

A limit order specifies a worst acceptable price. If it cannot trade immediately at that price or better, it may rest and supply liquidity. A marketable order crosses the spread and removes available liquidity. Some venue interfaces call an instruction a “market order,” but bounded event-contract books still implement it through price limits or an amount-to-spend instruction; an unbounded order would be dangerous in a shallow book.

Time-in-force changes the lifecycle. A good-til-canceled order may remain until filled or canceled. A good-til-date order expires at a specified time. Fill-or-kill demands complete immediate execution or none, while immediate-or-cancel permits an immediate partial fill and cancels the remainder. A post-only order is rejected or adjusted if it would immediately take liquidity, ensuring that it rests as a maker order. Polymarket's official order documentation describes GTC, GTD, FOK, and FAK instructions, while its lifecycle documentation distinguishes live, matched, delayed, and unmatched order states. The names and exact semantics are venue-specific; a research archive should preserve them rather than translate everything into “buy” and “sell.”

Maker and taker are roles in a match, not permanent identities. The earlier resting order usually makes liquidity; the incoming compatible order takes it. On Polymarket, official documentation says price improvement benefits the taker: a buy capped at $0.55 that encounters a resting sell at $0.52 executes at $0.52. This means the incoming order's limit is not necessarily the transaction price. Reconstructing execution therefore requires the resting book or fill messages, not merely the submitted limit.

Collateral constraints shape the visible book too. Polymarket documents available order size as balance minus quantities reserved by open orders. An order can disappear because its owner canceled it, because it filled, because it expired, or because the venue rejected or invalidated it. Those causes carry different informational content. A raw sequence of snapshots cannot reliably distinguish them; event-level messages or authenticated order histories are needed where available.

## Priority, queues, and the value of being early

At one price level, multiple participants may want to trade. A matching engine therefore needs a priority rule. Price-time priority, common in continuous books, gives better prices precedence and ranks equally priced orders by arrival time. Under that rule an order at the back of a large queue may display as liquidity but have little chance of filling before news changes. Canceling and reposting can lose queue position. A trader may rationally quote one tick more aggressively to jump ahead of a large level.

Queue position is generally absent from public probability charts, yet it affects incentives. Makers face the risk that their stale quotes are selected precisely when a faster or better-informed trader knows those quotes are wrong. The maker earns a spread or fee advantage during ordinary flow but can lose when news arrives. This is the adverse-selection logic formalized by Glosten and Milgrom: a positive spread can arise even for a risk-neutral, competitive intermediary because incoming order direction contains information. In a political contract, a debate moment, court decision, withdrawal rumor, endorsement, recount update, or rule clarification can make that risk sharply discontinuous.

The public book is also a censored picture of trading interest. It shows submitted orders, not all latent willingness to trade. Hidden size, if a venue permits it, is not visible. Even without hidden orders, participants may wait rather than reveal their valuation, split a large order, or cancel when the book moves. Displayed depth is therefore executable capacity at a moment, not a census of conviction.

## Depth, slippage, and price impact

Top-of-book liquidity is the quantity available at the best bid and ask. Cumulative depth extends the calculation across price levels. For a buy size $Q$, define the volume-weighted execution price over the asks as

$$
VWAP(Q)=\frac{\sum_i p_iq_i}{Q}, \qquad \sum_i q_i=Q,
$$

where the sum follows price priority until the requested quantity is filled. Slippage is the difference between that execution price and a chosen benchmark, often the pre-trade best ask or midpoint. The benchmark must be stated: measuring against the best ask captures book-walking cost, while measuring against the midpoint includes half the spread as well.

Depth and price impact are related but not identical. Mechanical impact is the immediate quote movement caused by consuming resting levels. Informational impact is the persistent repricing that follows because other traders infer something from the order or respond to the same news. A large marketable buy may lift the Yes ask temporarily, after which makers refill the book and the midpoint returns. Alternatively, the order may signal new information, cancellations may cascade, and the new level may persist.

Kyle's foundational model captures this second connection through a depth or price-impact parameter: market makers infer information from aggregate order flow, while noise trading helps informed trading blend in. The model is not a literal specification of any event-contract venue, but it supplies a durable lesson. The information in a trade depends on what the market thinks generated the order. Ten thousand dollars traded by routine retail flow need not move price like the same amount arriving seconds before an official announcement.

For historical research, a claim such as “liquidity was $500,000” is unusably vague. It might mean venue-reported event liquidity, total resting notional, cumulative depth within a band, daily volume, or a proprietary score. A reproducible statement instead reports something like: “At timestamp T, $X of Yes could be bought before fees with VWAP no worse than $0.64, from a pre-trade best ask of $0.61.” That describes an executable counterfactual.

## Cancellations, latency, and false stability

Orders are messages in time. Between an analyst requesting a snapshot and receiving it, new orders may arrive, old ones may cancel, and trades may consume levels. Network delay, venue processing, data-feed sequencing, clock error, and onchain settlement can refer to different moments. A millisecond timestamp does not create millisecond accuracy if the observation path is slower or the clocks are unsynchronized.

Event contracts amplify this problem around discrete news. A book may look deep one second before an announcement, then vanish as makers cancel. The earlier depth was real in the narrow sense that orders were posted, but it was not guaranteed to survive an attempt to trade after the information became public. Conversely, a snapshot taken during a transient cancellation wave can make a normally liquid contract look empty.

Polymarket's documented lifecycle makes another distinction important: matching and final settlement are separate. After orders match, a trade can progress through submission, mining, confirmation, retry, or failure states. A researcher should not treat an acknowledged order, a match, an onchain transaction, and a final confirmed trade as interchangeable. Kalshi is organized differently as a regulated exchange and clearing system, which is exactly why cross-venue pipelines should use a common conceptual schema while retaining venue-native states.

Order-book spoofing and fleeting quotes are additional concerns, but intent is hard to infer from public data alone. A large order canceled before execution may have been manipulative, risk management after news, a duplicate, or an ordinary strategy change. Claims of manipulation require message-level patterns, timing, execution evidence, and the applicable venue rules—not a screenshot of an order that later disappeared.

## From raw messages to a defensible market record

A snapshot is sufficient to answer “what was displayed at this instant?” It is insufficient to reconstruct how the market got there. A serious microstructure archive should prefer incremental order-book or market-data messages plus periodic full snapshots for recovery. Sequence numbers, when supplied, help detect gaps. After a disconnect, the collector should reload a canonical snapshot and resume from a known point rather than silently append messages to stale state.

At minimum, each observation should preserve:

1. venue, contract identifier, token or side identifier, and exact resolution-rule version;
2. venue timestamp, collector receipt timestamp, and clock convention;
3. native bids and asks or the documented complement transformation;
4. price precision, tick size, quantity units, and collateral/payout denomination;
5. enough levels to compute depth and VWAP at preregistered sizes;
6. trades separately from book updates, with maker/taker or aggressor side if reliably supplied;
7. order status, cancellation, expiration, and settlement states where available;
8. fees and rebates applicable to that contract and time;
9. feed gaps, reconnects, rejected messages, and other data-quality flags.

Derived fields—best bid, best ask, spread, midpoint, imbalance, VWAP, and return—should be reproducible from the preserved native record. Order-book imbalance, for example,

$$
I=\frac{D_b-D_a}{D_b+D_a},
$$

depends entirely on how bid depth $D_b$ and ask depth $D_a$ are defined: top level, fixed number of levels, fixed price band, or fixed notional. Without that definition, an imbalance value is not comparable across contracts.

The archive should also keep zero distinct from missing. An empty ask is not an ask at $1.00; it means no displayed seller within the captured book. A missing update is not a cancellation. A wide spread is not a confidence interval. And an API's event-level “liquidity” field is not automatically depth available in the specific outcome token being analyzed.

## What changes near resolution

As settlement approaches, a contract's remaining value becomes highly asymmetric. A Yes share at $0.99 can earn at most one cent if correct but lose 99 cents if an apparent certainty reverses or the contract resolves differently than expected. Tick size becomes economically coarse near the boundaries. Fees, capital lockup, withdrawal or settlement delay, and tail resolution risk can prevent prices from reaching exactly zero or one even when the public outcome looks settled.

Book shape can also become one-sided. Participants confident in Yes may already hold positions and have little reason to post new bids; potential sellers may disappear; or arbitrage capital may be constrained by access and collateral. A sparse book near $0.99 is not necessarily weak public consensus, and a last trade at $0.99 is not proof that a large position could be liquidated there. The only defensible statement names the side, size, time, and rules.

Political markets add correlated jumps. One report can simultaneously move contracts for a nomination, general election, chamber control, turnout, and policy passage. Separate books may react at different speeds because their liquidity and participant bases differ. Apparent cross-market inconsistency can be genuine information opportunity, but it can also be asynchronous data, different contract semantics, or insufficient executable depth. [[Logical coherence across prediction markets]] treats the portfolio logic; microstructure determines whether the portfolio can actually be traded.

## Why it matters

Microstructure is the difference between a forecast observation and a decorative number. Calibration studies can be biased by stale last trades. Event studies can mistake bid-ask bounce for reaction to news. Cross-venue comparisons can invert one side or compare a midpoint with an executable ask. Manipulation claims can confuse cancellation with intent. Historical narratives can treat a tiny fill as the consensus of a deep market.

The practical discipline is simple: preserve the mechanism before interpreting the number. Report an executable interval, depth at stated sizes, timestamp, fees, and contract rules. Separate order submission, matching, trade confirmation, and resolution. Treat changes in quotes, trades, and depth as related but distinct evidence. Only then ask what probability the market may imply.

## Sources

- [Kalshi API documentation, “Orderbook Responses”](https://docs.kalshi.com/getting_started/orderbook_responses) — official description of native Yes/No bid arrays and complementary ask reconstruction; accessed July 9, 2026.
- [Kalshi API documentation, “Get Market Orderbook”](https://docs.kalshi.com/api-reference/market/get-market-orderbook) — official endpoint and order-book field definitions; accessed July 9, 2026.
- [Polymarket documentation, “Order Lifecycle”](https://docs.polymarket.com/concepts/order-lifecycle) — official order states, maker/taker roles, price improvement, cancellation, balance reservation, and trade-status documentation; accessed July 9, 2026.
- [Polymarket documentation, “Orders Overview”](https://docs.polymarket.com/trading/orders/overview) — official order model and time-in-force documentation; accessed July 9, 2026.
- [Polymarket documentation, “Orderbook”](https://docs.polymarket.com/trading/orderbook) — official CLOB market-data concepts and endpoints; accessed July 9, 2026.
- [Lawrence R. Glosten and Paul R. Milgrom, “Bid, ask and transaction prices in a specialist market with heterogeneously informed traders,” *Journal of Financial Economics* 14 (1985), 71–100](https://doi.org/10.1016/0304-405X%2885%2990044-3) — foundational model of information-based spreads.
- [Albert S. Kyle, “Continuous Auctions and Insider Trading,” *Econometrica* 53 (1985), 1315–1335](https://doi.org/10.2307/1913210) — foundational model connecting order flow, information, depth, and price impact.

## Open questions

- Which event-contract venues publish sufficiently complete message data to distinguish fills, cancellations, expirations, and book resets historically?
- How stable is depth at fixed notional sizes around scheduled political news compared with unscheduled shocks?
- Which venue-specific priority rules, hidden-order features, or self-trade protections materially change public-book interpretation?
- How should researchers align offchain matching timestamps with onchain confirmation timestamps without implying false precision?
