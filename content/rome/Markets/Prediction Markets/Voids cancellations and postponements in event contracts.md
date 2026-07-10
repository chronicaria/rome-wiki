---
title: Voids, cancellations, and postponements in event contracts
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, event-contracts, resolution, market-design, politics]
as_of: 2026-07-10
desk: Political prediction markets
review_after: 2026-07-17
---

When an election, vote, debate, convention, or other underlying event changes course, an event contract does not automatically become “void”: its result depends on the venue’s rule hierarchy, the contract’s time boundary, its source, and its specified fallback payout.

Up: [[Political prediction markets]] · Related: [[Prediction-market resolution rules]] · [[Prediction-market resolution risk]] · [[Contract wording and basis risk]] · [[Cross-market arbitrage and contract basis risk]]

> [!warning] Scope
> This is a research note about contract mechanics, not legal or trading advice. Venue documents and individual market rules can change. The operative documents for a position are the version applicable to that market, not a generalized summary here.

## The word “void” hides several different operations

In ordinary speech, people call a wager or contract “void” when the expected event does not happen as planned. Event-contract systems are more exact and less uniform. One venue may settle a binary contract at $0.50 per side, another may determine “No,” another may wait for a rescheduled event, and another may invoke a review or modification power. Even within one venue, two contract families can treat the same postponement differently.

The first discipline is therefore terminological:

- A **cancellation of the underlying** means the organizer or competent authority calls off the real-world event. It does not itself state what happens to the financial contract.
- A **postponement** delays the underlying without necessarily changing its identity. A debate moved by one day may still be the same named debate; an election delayed into a new statutory process may or may not be the same event under the rules.
- A **reschedule** assigns a new time or date. Contract rules commonly place a window around rescheduling: an event played within the window remains eligible, while one outside it receives a fallback result.
- A **market cancellation** is a venue action affecting orders, trading, or positions. Canceling resting orders is not the same as canceling executed trades, and neither necessarily cancels the contract itself.
- A **void** is a payout or discharge convention, not a self-defining fact. It may mean stakes returned, paired claims redeemed equally, a last fair value, a venue-defined cancellation value, or something else.
- An **ambiguous market** has a question, source, time, or edge case that admits competing good-faith readings. Ambiguity may lead to clarification or dispute; it does not automatically create an invalid outcome.
- An **invalid market** is a venue- or protocol-defined terminal state in which the ordinary outcome set cannot validly resolve. Some systems expose such an outcome; others use a 50/50 fallback, review powers, or contract-specific values instead. An API error saying “invalid market” can merely mean that an identifier is malformed and should not be confused with a resolution state.
- A **trade cancellation** reverses or busts a transaction under exchange rules, usually because of an error or market-integrity event. That is separate from resolving the underlying contract after a canceled political event.

These distinctions matter because a researcher who labels every nonstandard result “void” destroys information. A historical dataset should preserve the venue’s actual status and payout value, then map it to a cross-venue taxonomy in a separate field.

## The rule hierarchy comes before the headline

An event contract normally sits inside a hierarchy. At the top are the venue rulebook, clearing rules, member agreement, protocol contracts, or oracle rules. Below them are a contract family’s terms and an individual market’s specifications. The market title is an index, not necessarily the controlling settlement language.

Kalshi’s current Member Agreement says each listed event contract has specific rules governing matters including the trading period, settlement, payout, and outcome determination, in addition to the Kalshi rulebook. It also says the rulebook governs if it conflicts with the agreement. Kalshi’s market-rules help page likewise describes the detailed rules as elaborating the conditions necessary for “Yes.” A CFTC-hosted Kalshi product filing shows the structure in practice: the product appendix identifies the underlying, source agency, payout criterion, last trading date, expiration date and value, settlement value, and contingencies.

Polymarket’s documentation is similarly explicit that the title describes the question while the rules define resolution. Its market rules specify a source, end date, and edge-case treatment. A resolution proposal can be challenged and, under the current documented process, ultimately escalated to UMA’s Data Verification Mechanism. The architecture differs from a centralized exchange review, but the research lesson is the same: do not infer settlement from the natural-language headline alone.

For political markets, the hierarchy should be archived at the time of each price observation. Election administration is unusually exposed to schedule changes, recounts, litigation, substitute candidates, changed legislative calendars, and competing official statements. A current webpage is not sufficient evidence for what traders faced earlier if rules or clarifications can be updated.

## Cancellation of the real-world event

Suppose a contract asks whether a scheduled leaders’ debate will occur. The debate organizer cancels it. Four settlement patterns are possible.

First, the cancellation may make “No” true. If “Yes” requires the debate to occur by a deadline and the rules contain no rescheduling extension, non-occurrence by that deadline is ordinarily evidence for “No.” Economically, this is not a refund: “No” holders win and “Yes” holders lose.

Second, cancellation itself may make “Yes” true. A differently worded contract might ask whether the debate will be canceled. Kalshi’s documented 2026 Miami Grand Prix weather market illustrates the semantic principle outside politics. It resolved “Yes” only if the race was officially canceled or postponed beyond the scheduled date **because of weather**. Cancellation for another reason without a weather-related cancellation or postponement produced “No.” The fact of cancellation was therefore insufficient; cause and timing were part of the payout criterion.

Third, cancellation may activate a special value. A market can specify a 50/50 resolution, a last fair market value, or another scalar if a participant never appears or an event becomes unresolvable. Kalshi’s 2026 Market FAQ says some individual market rules provide a fair-market-value adjustment or a nonstandard 50/50 payout, and that a combo uses the product of the component values rather than simply returning the combo. This demonstrates why “refund” is an unsafe shorthand even where neither side receives the standard $1/0 result.

Fourth, the market may remain unresolved while the venue decides whether the event has truly been canceled, merely postponed, or replaced. Official language can be conditional. An organizer may “suspend preparations,” one institution may announce cancellation while another contests its authority, or litigation may revive the event. Settlement sources and finality clauses determine how much of that uncertainty matters.

Political reporting often treats cancellation as a narrative fact at the first credible news report. Contract settlement can require a narrower documentary fact from a named source at a named time. The gap between those clocks is [[Prediction-market resolution risk]], not necessarily venue error.

## Postponement and rescheduling

Postponement preserves the possibility that the underlying will occur, which makes the contract’s identity and time window decisive. A robust rule answers at least three questions:

1. What counts as the same event after the schedule changes?
2. How long can it be delayed before a fallback applies?
3. Which authority establishes the rescheduled date or final cancellation?

A contract asking whether a bill passes “at the July 10 sitting” differs from one asking whether it passes “by July 10” and from one asking whether it passes “during the current parliamentary session.” If the sitting moves to July 12, the first may fail because the named sitting never occurs as scheduled, the second may fail at the deadline, and the third may remain alive. All three can be reasonable products, but they are not substitutes.

The same reasoning applies to elections. A market defined by the legal office and certified winner can survive a delay in polling. A market defined by votes cast on a calendar date may not. A nomination market may refer to formal convention nomination, ballot certification, party rules, or public announcement; replacing or reconvening a convention affects each formulation differently. “The election was postponed” never completes the analysis.

Rescheduling windows are contractual switches. The CFTC’s product-filing index records Kalshi amendments that clarify sports postponements and add a 48-hour rescheduling qualifier to a game-completion rule. Although sports are not politics, the filing documents the design pattern: a venue can distinguish a short delay treated as continuation from a longer delay assigned another result. Political contract designers can use analogous boundaries, but a researcher must read the actual political contract rather than import a sports convention.

An indefinite postponement creates another problem. Waiting preserves semantic accuracy but locks collateral and leaves exposure open. A hard deadline releases the market but may settle “No” moments before the event is rescheduled. A fallback value limits duration but introduces discretion or estimation. There is no neutral choice. The rule allocates timing risk between holders.

## Ambiguity is not the same as invalidity

Ambiguity arises when the written rule can support more than one outcome. Common sources include undefined institutional terms, disagreement between the headline and detailed rules, an official source that stops publishing, two authorities claiming jurisdiction, or an edge case that the drafter did not anticipate. A market can also be clear but surprising: “No” may be compelled by a strict deadline even though most traders expected a later occurrence to count.

Polymarket documents a clarification mechanism for unforeseen circumstances. Its current resolution page says “Additional context” cannot change the fundamental intent of the question, is published onchain through a bulletin-board contract, and should be considered by UMA voters. Its help center says a clarification clears the order book and cancels resting orders at the time of clarification, including at the announcement time if advance notice is given. Clearing orders is a protection against stale quotes; it is not a reversal of already executed positions.

The constraint against changing fundamental intent is important but leaves judgment. A clarification can explain which official source controls when two sources conflict. It should not turn “by election day” into “by inauguration” merely because the expected event was delayed. The boundary between interpretation and amendment is itself contestable, which is why a dataset should save both the original text and every clarification with timestamps.

Polymarket’s current UMA process includes “Unknown/50-50” for the rare case in which other outcomes are not appropriate. Each binary token then redeems for $0.50. It also includes “Too Early,” which means the underlying has not concluded and does not finalize the market at 50/50. Those are distinct oracle findings. Calling both “invalid” would conflate a premature proposal with a terminal ambiguity payout.

Kalshi uses a different framework. A CFTC-hosted 2021 filing describes rulebook revisions clarifying settlement and the Market Outcome Review Process. A 2022 product filing states that, if circumstances materially affect the reliability or transparency of a source agency or underlying, Rule 7.2 gives the exchange authority to designate a new source agency and underlying and change associated specifications after trading begins, with announcement on its website. That is not equivalent to Polymarket’s Unknown/50-50 outcome. One architecture tries to preserve objective determination through review or substitution; another can finalize at an equal payout through its oracle process.

“Invalid market” should therefore be used only when the relevant rules use it or when the researcher has defined a normalization category. Operational errors involving a malformed or unknown market identifier say nothing about whether a real event market has an invalid settlement outcome.

## Payout conventions are economically different

For a standard collateralized binary contract with settlement value $1, a normal resolution pays $1 to the winning side and $0 to the losing side. A 50/50 fallback pays $0.50 to each side. Those cash flows are independent of purchase price.

If a trader paid $0.80 for “Yes,” a 50/50 resolution creates a $0.30 loss per share before fees, not a refund. If another paid $0.20 for “No,” the same resolution creates a $0.30 gain. Equal redemption of the two outcomes restores the pair’s $1 collateral total, but it does not restore each holder’s cost basis. “Void means everyone gets their money back” is therefore false for this convention.

A true trade-price refund would reverse consideration at each execution price. That is operationally and economically different from fixed-value settlement, particularly after positions have been resold, netted, or combined. A last-fair-market-value convention is different again: it makes the chosen reference price and timestamp consequential. If a disruption was anticipated, the last traded price may already encode the likelihood of cancellation; if news arrived during a halt, it may be stale.

Multi-leg products amplify these differences. Kalshi’s FAQ says a combo with underlying component values of $1, $1, and $0.70 pays their product, $0.70, rather than simply being returned. More generally, a nonstandard leg can propagate through a formula. Researchers should preserve the exact leg settlement values instead of marking the entire combo “void.”

Fees add another layer. A venue may return principal or pay an equal terminal value without reversing transaction, withdrawal, or other fees. The word “refund” should not imply restoration of a participant’s full economic position unless the governing documents say so.

## Market cancellation, order cancellation, and trade cancellation

Three mechanical events are often confused.

**Order cancellation** removes an unfilled instruction from the book. Kalshi’s API lifecycle documentation says resting orders are canceled shortly after market close. Polymarket says clarification clears the book and cancels resting orders. Neither action determines the value of already held contracts.

**Trade cancellation** reverses an execution. Exchange rulebooks typically reserve powers to cancel erroneous or improper trades under defined circumstances. It addresses how a trade occurred, not whether the political event later occurred. A user interface that shows “canceled” beside an order may therefore reveal nothing about market resolution.

**Market or contract cancellation** can mean the venue will no longer list or trade the product, but open positions still require a discharge rule. Kalshi’s lifecycle distinguishes closing, determination, a dispute timer, and finalization. Closing ends ordinary order activity; determination sets a result; settlement pays positions. Collapsing these states into a single “closed” flag creates serious backtest errors.

Researchers should record at least `trading_status`, `order_status`, `determination_status`, `resolution_outcome`, `settlement_value`, and `settlement_timestamp` separately. If the venue provides only a combined status, retain the raw value and document the limitation.

## Documented political patterns

Political-event cases frequently involve delay without voiding. PredictIt’s official FAQ explains that election-market closure can depend on votes and precincts reported, margins, canvass and recount windows, certifications, litigation and appeals, concessions, the specified settlement source, and unusual circumstances such as congressional action. That list documents a wait-for-finality model. A candidate’s concession or a news-network call may be informative without satisfying the market rule.

Kalshi’s filed vote-of-no-confidence contract offers another pattern. The 2022 terms named the UK Parliament website as source agency, set an outside expiration date, and defined the expiration value as the source’s documented value at expiration. The filing also said revisions to the underlying after expiration would not be counted. Thus a vote delayed beyond the relevant boundary would not automatically drag the contract forward forever. The temporal cutoff allocates later-revision risk.

These examples should not be generalized into venue-wide promises. PredictIt’s FAQ describes factors it considers, while each market supplies its settlement rule. Kalshi’s parliamentary filing governs that product, not every election or legislative market. The valid comparison is architectural: both show that political “finality” is constructed from sources and time conditions rather than supplied by the first public narrative.

## A normalization protocol for research

A cross-venue record should preserve raw facts before imposing common labels. For each disrupted market, capture:

- immutable market identifier, title, detailed rules, rule version, and clarification history;
- venue, legal or protocol entity, rulebook version, and oracle adapter where relevant;
- named source agency and the archived source output;
- original event time, revised time, announcement times, and contract deadline;
- whether the real-world event was delayed, rescheduled, suspended, abandoned, replaced, or formally canceled;
- whether resting orders, trades, trading, or the entire market were canceled;
- proposal, challenge, review, appeal, determination, and settlement timestamps;
- raw outcome label and numerical payout for every outcome token;
- fees or reversals actually documented, without assuming them;
- a researcher normalization such as `normal_yes`, `normal_no`, `equal_fallback`, `scalar_fallback`, `awaiting_event`, `venue_modified`, or `trade_busted`;
- evidence confidence and unresolved semantic disagreements.

The normalization must not replace the raw label. Two markets categorized as `equal_fallback` can still differ because one used an oracle’s Unknown finding and another used an express death, withdrawal, or nonparticipation clause. Likewise, two “No” resolutions can differ: one may reflect the proposition’s substantive failure, another a deadline or cancellation convention.

For price analysis, a disrupted contract should not automatically be discarded. Its pre-disruption prices may be valid forecasts of the contract as written, including cancellation risk. But it should not be scored against a different retrospective question. If a market asked whether a debate occurs by July 10 and it occurs July 12, scoring it as “Yes because the debate eventually happened” changes the target after seeing the outcome.

## Why it matters

Cancellation language is part of the payoff function, not administrative fine print. Two screens can show the same political question and price while embedding different rescheduling windows, finality standards, clarification powers, and fallback values. Their prices are therefore not directly interchangeable.

For forecasters, mishandling voids creates label leakage and false calibration results. For historians, it erases why a market remained open after a concession or closed before a later legal reversal. For market-design analysis, it hides who bears ambiguity and timing risk. The disciplined approach is to quote the applicable rule, preserve its version, separate the real-world event state from the market state, and report the exact numerical settlement convention.

## Sources

- [KalshiEX rulebook and contract-rules portal](https://kalshi.com/regulatory/rulebook) — current venue portal for controlling exchange and product documents; accessed July 10, 2026.
- [Kalshi Member Agreement, version 1.6](https://kalshi.com/docs/kalshi-member-agreement.pdf) — rule hierarchy and contract-specific settlement disclosure; accessed July 10, 2026.
- [Kalshi market lifecycle documentation](https://docs.kalshi.com/getting_started/market_lifecycle) — close, determination, dispute timer, finalization, and resting-order behavior; accessed July 10, 2026.
- [Kalshi Market FAQs](https://help.kalshi.com/en/articles/13823821-market-faqs) — source delays, close versus determination, nonstandard component values, and combo payout example; accessed July 10, 2026.
- [Kalshi market rules help page](https://help.kalshi.com/en/articles/13823822-market-rules) — role of detailed market rules; accessed July 10, 2026.
- [CFTC filing for Kalshi rulebook version 1.8](https://www.cftc.gov/IndustryOversight/IndustryFilings/TradingOrganizationRules/46149) — official filing record describing settlement and Market Outcome Review revisions, June 2021.
- [Kalshi UK vote-of-no-confidence product filing](https://www.cftc.gov/filings/ptc/ptc031022kexdcm001.pdf) — official filed source, deadline, payout, contingency, and later-revision terms, March 2022.
- [CFTC DCM product-terms filings index, page 1](https://www.cftc.gov/IndustryOversight/IndustryFilings/PTCDCMRules?page=1) — official index page documenting June 2026 Kalshi product-rule amendments, including the 48-hour rescheduling qualifier and postponement language; accessed July 10, 2026.
- [Kalshi 2026 Miami Grand Prix weather market](https://kalshi.com/markets/kxf1delay/f1-delay/kxf1delay-26mia) — documented contract-specific treatment of delay, postponement, cancellation, cause, and same-day continuation; accessed July 10, 2026.
- [Polymarket resolution documentation](https://docs.polymarket.com/concepts/resolution) — current proposal, dispute, Too Early, Unknown/50-50, redemption, and clarification mechanics; accessed July 10, 2026.
- [Polymarket clarification help page](https://help.polymarket.com/en/articles/13364548-how-are-markets-clarified) — rule hierarchy and resting-order cancellation on clarification; accessed July 10, 2026.
- [Polymarket dispute help page](https://help.polymarket.com/en/articles/13364551-how-are-markets-disputed) — challenge process and documented dispute outcomes; accessed July 10, 2026.
- [PredictIt market-closing FAQ](https://www.predictit.org/support/faq?query=When+to+close) — official list of election-finality considerations; accessed July 10, 2026.

## Open questions

- What exact language in the latest KalshiEX rulebook governs every available cancellation or nonstandard settlement value, and how has it changed since the CFTC-hosted version 1.8 filing?
- How often have political markets on each venue used a nonbinary or equal fallback rather than waiting, resolving “No,” or substituting a source?
- Which clarification histories are retrievable in a stable machine-readable form after a market resolves?
- How should calibration studies score a venue modification that arguably changes, rather than clarifies, a market’s original intent?
- Can a cross-venue dataset distinguish organizer cancellation, legal invalidation, source failure, candidate incapacity, and schedule slippage without relying on subjective retrospective coding?
