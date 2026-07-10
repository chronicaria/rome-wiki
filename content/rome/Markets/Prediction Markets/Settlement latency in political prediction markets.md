---
title: Settlement latency in political prediction markets
created: 2026-07-10
source: llm
status: seed
tags: [markets, prediction-markets, politics, settlement, measurement]
as_of: 2026-07-10
desk: Political prediction markets
review_after: 2026-07-17
---

Settlement is a sequence of economically and statistically distinct timestamps, not one date; treating them as interchangeable distorts prices, returns, calibration, backtests, and cross-venue comparisons.

Up: [[Political prediction markets]]

Related: [[Political event-contract resolution designs]] · [[Prediction-market resolution risk]] · [[Backtesting political forecasts without leakage]] · [[Prediction-market calibration]] · [[Voids cancellations and postponements in event contracts]]

## The apparent endpoint is really a clock stack

A political contract can look finished on election night while remaining unresolved for days, or it can stop trading before the decisive information arrives. A venue can determine an outcome but delay final payout during a challenge window. An onchain winner can become redeemable without the holder actually redeeming. A research dataset can then label the same forecast against a corrected outcome months later.

Calling all of these moments “settlement” hides the mechanism. A useful minimum schema separates seven operational timestamps and one analytical timestamp:

| Timestamp | Question it answers | Typical evidence |
|---|---|---|
| **Information cutoff** $t_i$ | What information was legally or analytically allowed to count? | contract wording, observation deadline, official-source snapshot |
| **Market close** $t_c$ | When did new trades stop? | venue status, close time, last executable quote |
| **Determination** $t_d$ | When did the venue or oracle first assign an outcome? | result field, proposal, determination event |
| **Dispute end** $t_q$ | When did the last challenge window or adjudication finish? | challenge expiry, vote result, amended determination |
| **Finalization** $t_f$ | When did the result become operationally terminal? | finalized/settled state, payout vector recorded |
| **Redemption or payment** $t_p$ | When did collateral reach the trader’s usable balance? | custodial credit, redemption transaction, withdrawal ledger |
| **Correction** $t_r$ | When was a later data or outcome revision recorded? | corrected official release, venue amendment, dataset version |
| **Evaluation** $t_e$ | At what timestamp did the researcher freeze prices and outcomes for scoring? | preregistered or documented analysis rule |

The ordering is often, but not universally,

$$t_i \leq t_c \leq t_d \leq t_q \leq t_f \leq t_p.$$

Politics produces exceptions. Trading may remain open after the decisive event while a source agency has not yet confirmed it. Kalshi explicitly says its displayed close time need not equal determination time and that trading can continue while official confirmation is pending. Its API documentation also notes that `expected_expiration_time` can precede `close_time`. An information cutoff may refer to events occurring by midnight, while the authoritative source is read later. A correction $t_r$ can arrive after payment, and an analyst’s $t_e$ can be placed anywhere on the public timeline.

The point of the schema is not to force every venue into the same lifecycle. It is to make the differences observable.

## 1. Information cutoff: what state of the world counts

The information cutoff is part of the proposition itself. “Will candidate X concede by 11:59 p.m. on election day?” asks about conduct before a deadline even if the source is checked the next morning. “Who will win the state?” may depend on certified results rather than the first media call. A contract can therefore have a cutoff for qualifying facts, a separate official-source publication time, and a later decision time.

This distinction prevents hindsight from changing the event. Information learned after $t_i$ may help adjudicators discover what was already true at $t_i$, but it should not silently expand the event window. For example, a timestamped statement published just after midnight should not satisfy a by-midnight contract merely because it was available before adjudication. Conversely, a later official canvass may be the best evidence of votes cast before the cutoff.

Researchers need the cutoff for forecast evaluation. A price at 8 p.m. cannot be described as a forecast of an event defined using information through midnight unless the target is stated carefully. The contract’s semantic horizon, not the download date, determines what probability the price expressed.

## 2. Market close: the end of executability

Market close is when trading stops, not necessarily when the answer becomes known. Kalshi’s lifecycle documentation defines `close_time` as the point after which trading stops; markets then enter a closed state awaiting determination. The documentation distinguishes this from expected and latest expiration fields. Kalshi also says close time may move, including reopening a closed market when the close time is moved into the future, and that a market can close early when permitted.

For measurement, $t_c$ should normally be represented by both the venue field and the last *executable* market observation. A last-trade price can be hours old. A displayed midpoint can combine stale or tiny orders. If a research question asks for the “closing forecast,” the defensible object is often the last bid and ask available immediately before close, with timestamp and size, rather than a single unqualified last price.

Close is also a policy choice. Early closure reduces the chance that traders transact on nearly certain information, but it removes late information aggregation. Later closure can improve price discovery while exposing participants to operational pauses or a race between unofficial knowledge and official confirmation. Neither design makes the closing price automatically superior; it changes what that price measures.

## 3. Determination: the first assigned result

Determination is the first formal assignment of a payout-relevant outcome. In a centralized lifecycle, venue staff apply the contract rules and named source. Kalshi describes a `determined` status in which the result is known and a settlement timer is running. Kalshi’s current help material says most markets settle within a few hours after the outcome is known, often about three hours, but may take longer while official source-agency data is pending. It advises users of standard single-outcome markets to check the rules and contact support if the event ended more than roughly twelve hours earlier with no update; neither statement is a guarantee for a political market.

In an optimistic-oracle design, the analogous moment may be a bonded proposal rather than a terminal judgment. Polymarket documents a process in which a proposer selects an outcome and posts a bond. The proposal then enters a challenge period. Calling proposal time “resolution time” would erase the possibility that the proposal is disputed or found too early.

Political determination often waits for a legally or contractually authoritative event. Reported votes, recount windows, certifications, litigation, concessions, and the market’s specified settlement source can fall on different dates. That explains why a television call and a venue determination can be far apart without either timestamp being erroneous: they answer different questions under different standards.

## 4. Dispute: provisional truth under review

A dispute interval is economically real. Kalshi exposes a `settlement_timer_seconds` field; while a market is determined, the result may be disputed, after which the market can be amended and the timer restarted. Its documented terminal REST state is `finalized`, even though the corresponding WebSocket event is named `settled`.

Polymarket documents a two-hour challenge period after a proposal. An undisputed proposal is the fast path. A dispute triggers another proposal round; a second dispute escalates to UMA’s Data Verification Mechanism. Polymarket estimates disputed resolution at four to six days, including debate and voting. UMA’s own documentation explains the general mechanism: data is accepted after a configurable liveness period if undisputed, while disputed claims go to token-holder voting and can take days.

The analyst should record each proposal and amendment rather than overwrite history. A market can be economically near-certain yet legally provisional. Treating the first determination as the final label creates label leakage when the researcher later knows whether it survived challenge.

## 5. Finalization: the outcome becomes terminal for the venue

Finalization is the state transition after adjudication is complete and the venue has operationalized the payout. On Kalshi, the lifecycle ends at `finalized`; `settlement_ts` is populated and positions have been paid. On Polymarket, the oracle report leads the Conditional Token Framework to record a payout vector, after which winning tokens can be redeemed.

Finalization is distinct from epistemic certainty. An official correction can still arrive. A court may later describe events differently. But the contract needs a terminal rule so collateral is not locked forever. Finalization therefore means “terminal under this mechanism and rule set,” not “incapable of revision anywhere in the world.” This is one reason [[Political event-contract resolution designs]] must be compared by their named sources, fallbacks, and amendment rules rather than just by market titles.

## 6. Redemption or payment: when value becomes usable

Custodial and onchain venues expose different last-mile clocks. Kalshi says winning contracts are paid into the cash balance once the market settles, so finalization and internal payment can be nearly the same system event even if bank withdrawal occurs later. Polymarket requires a redemption operation after resolution: the holder redeems through the CTF collateral adapter, which burns the ERC-1155 outcome tokens through the CTF contract, receives released USDC.e collateral, wraps it into pUSD, and returns pUSD to the wallet. Its documentation says redemption is available after resolution and has no deadline.

Therefore $t_p$ should be defined for the research purpose. It might mean internal cash credit, onchain collateral receipt, or arrival in an external bank account. These are not interchangeable. A study of venue operations might use earliest technical redeemability. A study of user cash flow might use the trader-specific redemption transaction. A study of household liquidity might care about withdrawal completion.

For a trader who delays an optional redemption, the venue’s adjudication latency is not responsible for the whole delay. Decompose it:

$$L_{capital}= (t_f-t_c) + (t_p-t_f).$$

The first term is venue or oracle finalization latency after close. The second is payment-rail or user-action latency. Fees, gas, withdrawal holds, weekends, and manual inaction belong in the second term only when relevant.

## 7. Corrections: version the label instead of rewriting history

Official political data can be corrected after initial publication. Venues may also clarify a rule, amend a determination during a dispute, or leave a finalized result unchanged because the contract’s finality rule has already operated. These are different events.

A correction ledger should preserve at least: original outcome, original source value, original timestamp, corrected value, correction timestamp, venue response, and the dataset version that incorporated it. Never silently replace the historical label. Silent replacement makes an old forecast appear to have targeted a label that did not exist when the forecast or payout occurred.

Three labels may coexist legitimately:

- the **world-state label**, based on the best later account of what happened;
- the **contract label**, based on the venue’s rules and final outcome;
- the **as-known label**, based on information available at a specified evaluation time.

Calibration of tradable contracts normally uses the contract label. Political-science analysis may prefer the world-state label. A real-time forecasting audit may require the as-known label. Reporting which label is used is more important than pretending there is one universally correct timestamp.

## 8. Evaluation: the researcher’s clock

Evaluation time is chosen, not discovered. A claim such as “markets were 82% accurate” is incomplete without a price-sampling time, outcome-label rule, inclusion policy, and data-freeze date. A clean record can be represented as

$$R=(q,\ t_e^{price},\ y^{contract},\ t_f,\ v),$$

where $q$ is the sampled probability, $t_e^{price}$ is its observation time, $y^{contract}$ is the final contract label, $t_f$ is finalization time, and $v$ is the data version. If a later world-state correction is relevant, store it in another field rather than replacing $y^{contract}$.

For a Brier score, $(q-y)^2$, changing the label version can dominate small differences among forecasts. Changing the price timestamp can be just as consequential: an election-eve price, a pre-close price after partial returns, and the last trade before determination are not comparable forecasts. [[Prediction-market calibration]] therefore needs horizons defined relative to the event’s information cutoff, not merely relative to the venue’s settlement timestamp.

## Why it matters: latency changes the economics

### Capital lockup and realized return

A winning contract’s nominal payoff omits the time collateral remains unavailable. If a position costs $C$ at purchase, pays $P$, and locks the invested funds for $D$ days from purchase to usable payment, an annualized simple comparison depends sharply on $D$. One illustrative effective-rate transform is

$$r_{ann}=\left(\frac{P}{C}\right)^{365/D}-1,$$

before fees, taxes, and reinvestment constraints. This annualization can become absurd for tiny $D$, so it is not a universal performance measure; its purpose is to show why two identical cent profits with different lockup periods are not economically identical. For portfolios with many overlapping elections, unresolved collateral can also prevent new positions even when every outstanding contract is likely to win.

Expected latency matters before close. A price below apparent fair value may compensate for disputed-source risk, slow certification, or awkward redemption. Thus the observed price can mix event probability with a settlement-liquidity discount. [[From event-contract prices to probabilities]] should not treat that discount as political belief.

### Cross-venue comparison

Comparing venues by “closing price” requires aligned propositions and clocks. Venue A may close before polls close; Venue B may trade through election-night returns. Venue A may determine from certification; Venue B may finalize after an oracle proposal. A comparison that samples each venue at its native close gives each forecast a different information set.

Use at least two panels:

1. **Common-clock forecasts:** sample all venues at the same UTC timestamp before the shared information cutoff, using executable quotes.
2. **Native-lifecycle outcomes:** report each venue’s own close, determination, finalization, and payment latencies.

The first panel compares forecasting information. The second compares market design and operational performance. Combining them rewards venues that remain open longer for having seen more information, or penalizes them for slow finalization, depending on the metric.

### Backtests and leakage

Backtests fail when current API fields are mistaken for historical state. A present-day record marked `closed` or `finalized` does not prove when that status changed. Polymarket’s event API exposes fields such as `endDate`, `closedTime`, `umaEndDate`, `umaResolutionStatus`, and `finishedTimestamp`; those names should be interpreted from documentation and validated against event or onchain history, not collapsed into one endpoint. Kalshi’s API separately exposes close-time filters and settled-time filters, plus lifecycle events.

A robust backtest stores raw snapshots or event streams. It should reconstruct what was visible at each simulated decision time, exclude later outcome fields from feature generation, and document stale-quote rules. It should also avoid selecting only markets that eventually finalized cleanly, because unresolved, voided, or disputed markets are part of the ex ante opportunity set. See [[Backtesting political forecasts without leakage]].

### Calibration and operational measurement

Calibration bins answer whether events priced near $q$ occur about $q$ of the time. Settlement latency can bias that test through selection and horizon mismatch. Long-disputed markets may be dropped from a dataset frozen too early. Markets with fast, obvious outcomes may be overrepresented. Late closing prices incorporate more realized information than early ones. A fair study reports unresolved censoring and either waits for a fixed maturity window or uses a prespecified treatment of pending labels.

Operational measurement should publish distributions, not just averages:

- close-to-determination $L_{cd}=t_d-t_c$;
- determination-to-finalization $L_{df}=t_f-t_d$;
- close-to-finalization $L_{cf}=t_f-t_c$;
- finalization-to-payment $L_{fp}=t_p-t_f$;
- correction lag $L_r=t_r-t_f$ when applicable.

Report medians, upper quantiles, disputed and undisputed strata, and missing-timestamp rates. Heavy tails are the story: routine markets may settle quickly while a few legally ambiguous elections immobilize capital for much longer.

## A practical data contract

For each market, preserve the venue ID, canonical question, full rules version, named resolution source, timezone, cutoff definition, all lifecycle timestamps, all determination proposals, dispute status, final payout vector, payment mechanism, correction history, and raw provenance URL. Store timestamps in UTC while retaining the contract’s local-time wording. Record whether a time is scheduled, observed, inferred, or missing.

For each price observation, preserve bid, ask, last trade, size, timestamp, trading status, and collection time. For each analytical result, preserve the evaluation rule and dataset version. This makes it possible to reproduce both a political forecast study and a settlement-operations study without pretending they share one clock.

The governing rule is simple: **name the interval you measured**. “Settled in three hours” could mean close to first determination, proposal to unchallenged acceptance, finalization to wallet redemption, or event occurrence to cash credit. Without endpoints, the number is not comparable.

## Sources

- [Kalshi, “Market Lifecycle”](https://docs.kalshi.com/getting_started/market_lifecycle) — statuses, transitions, time fields, determination, dispute timer, finalization, and WebSocket semantics; accessed July 10, 2026.
- [Kalshi, “Get Markets” API reference](https://docs.kalshi.com/api-reference/market/get-markets) — close and settled timestamp filters and market response fields; accessed July 10, 2026.
- [Kalshi, “Market FAQs”](https://help.kalshi.com/en/articles/13823821-market-faqs) — distinction among close, determination, official confirmation, settlement, and cash-balance payout; accessed July 10, 2026.
- [Kalshi, “Market Outcomes”](https://help.kalshi.com/en/articles/13823826-market-outcomes) — contract terms, source-agency dependence, and stated determination timing; accessed July 10, 2026.
- [Polymarket, “Resolution”](https://docs.polymarket.com/concepts/resolution) — proposal, challenge, dispute, DVM, final outcome, clarification, and stated timeline; accessed July 10, 2026.
- [Polymarket, “Redeem Tokens”](https://docs.polymarket.com/trading/ctf/redeem) — post-resolution payout vector and user-initiated redemption mechanics; accessed July 10, 2026.
- [Polymarket, “List events (keyset pagination)”](https://docs.polymarket.com/api-reference/events/list-events-keyset-pagination) — event and market timestamp/status fields; accessed July 10, 2026.
- [UMA, “FAQs”](https://docs.uma.xyz/faqs) — optimistic-oracle liveness and disputed DVM timing; accessed July 10, 2026.
- [UMA, “How does UMA’s Oracle work?”](https://docs.uma.xyz/oracle/econ-architecture) — assertion timestamps, liveness, disputes, and DVM escalation; accessed July 10, 2026.

## Open questions

- Which venue timestamp fields are historically immutable, and which can be rewritten when a market is reopened or amended?
- How often do political markets enter a formal dispute state, and what is the empirical tail of close-to-payment latency by venue?
- What common-clock sampling rule best balances executability, stale quotes, and coverage across venues with different trading hours?
- When a finalized contract label diverges from a later corrected world-state label, which research questions require reporting both calibration results?
