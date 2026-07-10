---
title: Prediction-market resolution risk
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, regulation, market-microstructure, politics]
as_of: 2026-07-10
desk: Political prediction markets
review_after: 2026-07-17
---
Resolution risk is the gap between the event a trader thinks a contract describes and the event the venue will actually settle under its rule text, source hierarchy, timing, and dispute process.

Up: [[Political prediction markets]]

Every event contract embeds a small legal machine. It names an event, defines a payout, specifies a deadline or settlement trigger, identifies evidence that will decide the result, and gives the venue or adjudicator a way to handle ambiguity. [[From event-contract prices to probabilities]] explains why price extraction begins with bid, ask, fees, and depth. Resolution risk explains why that extraction still fails if the analyst has not read the rules. A quote is not a belief about an English sentence. It is a price for whatever the contract will pay.

Resolution risk is not rare edge-case pedantry. It is central to political markets because politics generates disputed facts, delayed certifications, changing institutional statuses, ambiguous titles, and strategic behavior around words. A presidential candidate can suspend a campaign but remain on ballots. A chamber can have vacancies, independents, postponed elections, or a delayed Speaker vote. A bill can pass one chamber, pass both chambers, be vetoed, be signed after a deadline, or be enacted through a substitute vehicle. A court can issue a stay, a merits opinion, a remand, or a procedural order that changes practical consequences without matching a headline. Prediction markets price those possibilities through contract language.

The CFTC's consumer-facing guidance makes rule clarity a customer right. It says event-contract customers should receive timely, transparent information about trading rules and contract terms, including payout, prices, how settlement determinations will be made, who decides, and how. That list is also an analyst checklist. The settlement authority, not the market label, determines the terminal cash flow.

## What creates resolution risk

The first source is event-definition mismatch. A contract can ask whether a named candidate will be the nominee, whether the candidate will accept a nomination, whether the party will nominate the candidate at a convention, whether the candidate will appear on enough ballots, or whether an official election authority certifies a particular name. Those are different events. They often have the same media shorthand, and in ordinary cases they may move together. In edge cases they separate.

The second source is resolution-source mismatch. One contract might resolve according to an official government publication. Another might use a named media source. Another might rely on a decentralized oracle or a platform committee. Official sources can lag reality; media sources can correct stories; oracle systems can face disputes; venue staff can interpret silence or conflict. The same factual world can therefore produce different settlement paths.

The third source is timing. A contract that resolves by December 31 at 11:59 p.m. may differ from one that resolves after final certification, after inauguration, after a legislature organizes, or after the first official source appears. Political events often have announcement time, legal-effective time, certification time, and practical-control time. The contract must pick one or supply a fallback. Basis appears when two venues pick different clocks.

The fourth source is exceptional-case language. Contracts need rules for cancellation, postponement, death, withdrawal, replacement, ties, vacancies, recounts, force majeure, market disruption, source unavailability, and rule changes. If the language is absent or discretionary, a trader is pricing not only the political event but also the venue's future interpretation.

The fifth source is regulatory and platform status. A contract can be suspended, reviewed, wound down, voided, or closed under venue rules or regulatory pressure. The CFTC's June 2026 notice of proposed rulemaking describes a proposed framework for event contracts involving enumerated activities and a 90-day review process with public-interest factors. Even before any final rule, that proposal shows that listing and review mechanics can be part of event-contract risk. A political contract can have clear real-world semantics while still carrying listing, suspension, closeout, or jurisdiction risk.

The sixth source is adjudication architecture. A CFTC-regulated exchange, a crypto-native market using an optimistic oracle, and an informal forecasting platform do not resolve ambiguity the same way. Polymarket's public documentation says each market has predefined resolution rules covering the source, end date, and edge cases, and warns that the title describes the question while the rules define how it resolves. It also says Polymarket uses UMA's Optimistic Oracle: anyone can propose an outcome, anyone can dispute it, and disputed cases can escalate to UMA's Data Verification Mechanism. UMA's own documentation describes that mechanism as a human-judgment backstop in which tokenholders resolve disputes after an optimistic assertion is challenged. That design can be robust for many markets, but it is still a different settlement path from a designated contract market's rulebook and review committees. The analyst should not erase that difference by calling both values "the market probability."

## Basis is not always arbitrage

Cross-venue comparison is the place resolution risk does the most damage. Suppose one venue shows a 54-cent midpoint for "Republicans win the Senate" and another shows 58 cents for what appears to be the same claim. The naive article says there is a four-point difference in market beliefs. A better article asks what each contract actually settles on.

Does "win the Senate" mean the party with more elected seats? Does it include the vice president's tie-breaking role? Are independents assigned to the party they caucus with, the party they ran against, or no party? What happens if a special election is pending? Is the date election night, certification, January 3, the first successful organization vote, or another deadline? What if a senator dies before seating? What if a court orders a rerun? What if the chamber is tied and the vice presidency belongs to a third party or is vacant? Most cycles will not need every branch. The price still reflects the possibility that a branch matters.

This is contract basis. In ordinary finance, two instruments can reference the same broad economic exposure while differing in delivery location, quality, timing, financing, legal form, or counterparty risk. Political event contracts have an analogous basis in wording, settlement authority, deadline, access, fees, collateral, and cancellation rules. An apparent arbitrage survives only when the payoff states match after those fields are normalized.

The correct publication habit is to name the basis before naming the spread. "Kalshi contract A and Polymarket market B appear to reference the same election-control question, but one resolves by official chamber composition on date X while the other uses source Y and fallback Z" is useful. "Polymarket is four points higher" may be a category error.

## Resolution authorities are part of the evidence chain

For a political contract, the resolution source should be treated like a primary source. If a market resolves from a state election board, the analyst needs the state election board's certification process. If it resolves from Congress, the analyst needs the chamber action or official roll. If it resolves from a named media source, the analyst needs the source's publication and correction behavior. If it resolves from an oracle, the analyst needs the oracle's dispute and finalization rules.

Venue pages are authoritative about their own contract terms and market data. They are not automatically authoritative about the underlying political fact. A venue can say "this market resolves according to source S"; source S establishes the factual input; the venue applies its rule. The analyst should preserve both links. This separation prevents a common error: citing the market page as proof of the outcome rather than proof of the contract's settlement design.

The same separation matters before resolution. A market price can move because traders expect the official source to resolve one way, because they expect the real-world event to unfold one way, or because they expect an ambiguous source hierarchy to be interpreted one way. Those are not identical beliefs. During disputed outcomes, the difference becomes the story.

Kalshi's public regulatory page routes readers to its exchange and clearinghouse materials, and CFTC-filed rulebooks show why those governance documents matter. The rulebook table of contents includes market governance, emergency rules, an Outcome Review Committee, and prohibitions on material nonpublic information. Those headings are not enough to settle any individual contract, but they identify where a researcher should look when a market becomes ambiguous or operationally stressed. A venue's ordinary contract terms answer the base case; its emergency, review, and dispute procedures answer the tail case.

For Rome, this means a source packet should include both the contract page and the governance layer that would decide abnormal cases. A House-control contract might have perfectly clear ordinary language and still need a fallback if the chamber does not organize by the deadline. A personnel contract might name an official source and still need a rule for acting service. A platform might publish an additional clarification after trading begins. Polymarket says such clarifications should not change the fundamental intent of the question and are published onchain via a bulletin-board contract; that is exactly the kind of field that belongs in a durable note because it tells future readers whether the instrument changed or merely received interpretive context.

## Edge cases that political markets need to pre-register

Chamber-control contracts should specify how they treat vacancies, independents, caucusing arrangements, the vice president, delayed organization, contested seats, and changes after the deadline. If the contract is about "control" rather than "number of seats won," the resolution text should say whether control is formal, functional, or source-reported.

Nomination contracts should specify convention action, official party filings, ballot appearance, candidate death or withdrawal, replacement nominees, and whether suspension counts. Modern campaigns often "suspend" rather than formally end. A rule that ignores that distinction can leave traders pricing a semantic trap.

Office-holder contracts should specify acting officials, recess appointments, Senate confirmation, swearing-in, effective dates, and successors. "Will X be secretary by date Y?" can differ from "will X be confirmed," "will X be serving," or "will X be nominated."

Policy contracts should specify bill identifiers, substitute amendments, partial enactment, executive action versus statute, court stays, effective dates, appropriations riders, and official publication. A headline can say a policy "passed" before the legal condition in the contract is satisfied.

Court contracts should distinguish cert grants, merits decisions, emergency orders, stays, injunctions, remands, dismissals, and practical effect. Legal outcomes often have procedural forms that do not map neatly onto yes-no public descriptions.

International political contracts add translation, source, and institutional-calendar risk. The official act may occur in another language, through a multi-step process, with local legal concepts that English-language market titles compress.

## How resolution risk should enter a probability

Resolution risk can be modeled as part of the event probability or as a separate basis adjustment. For a single contract, the payoff event is simply "the contract resolves yes." If the contract says it resolves yes when source S reports X by date D, then the market-implied probability is about that settlement event. The analyst can separately discuss whether that settlement event is a good proxy for the political question readers care about.

For cross-market comparison, separation is cleaner. Let contract A and contract B both aim at broad event E but differ in settlement states. The observed price gap can come from different beliefs about E, different beliefs about edge cases, different fees/liquidity, or different platform/regulatory risks. Unless those components are bounded, the gap should be called basis, not disagreement.

For calibration, resolution risk changes the outcome label. A forecast should be scored against the event it actually forecast. If a market was archived as "party controls House" but the contract paid based on "Speaker elected by date," the calibration ledger must score the contract outcome, not the analyst's paraphrase. Otherwise, the ledger punishes or rewards the market for a different question.

## Developmental discipline for Rome

Every political prediction-market article should store the full resolution text or a stable link to it. If the article quotes only the market title, it is not research-grade. If contract terms cannot be retrieved without login, restricted API access, or accepting new terms, the article should say the evidence is blocked and avoid publishing a probability comparison. The desk's safety rule is strict: do not log in, trade, or use account credentials to resolve a research gap.

When contract wording changes, the series should be split or annotated. A before-and-after market may display a continuous chart, but the analyst should not assume a continuous instrument. Rule edits can change the payoff event, and therefore the meaning of every later price.

When a source hierarchy is ambiguous, the article should preserve that ambiguity rather than predicting how the venue will decide. "The contract does not specify how postponed certification is handled" is better than a confident guess. If the ambiguity is central, the candidate should be carried forward as an evidence gap, not forced into a probability table.

## Place in the map

Resolution risk is the bridge between market microstructure and legal/institutional analysis. It links [[CFTC 2026 prediction-market proposal]], [[From event-contract prices to probabilities]], [[Cross-market arbitrage and contract basis risk]], [[Logical coherence across prediction markets]], and election-specific trackers. It also supplies the reason that live political prices should not be compared until wording, source, deadline, fees, spread, depth, and timestamp match.

## Sources

- [CFTC, "Understanding Prediction Markets and Event Contracts"](https://www.cftc.gov/LearnandProtect/PredictionMarkets) — accessed July 10, 2026.
- [CFTC, "CFTC Seeks Public Comment on Notice of Proposed Rulemaking Concerning Event Contracts Involving Enumerated Activities"](https://www.cftc.gov/PressRoom/PressReleases/9249-26), June 10, 2026 — accessed July 10, 2026.
- [CFTC, contracts and products: event contracts and Regulation 40.11](https://www.cftc.gov/IndustryOversight/ContractsProducts/index.htm) — accessed July 10, 2026.
- [Kalshi, "Exchange Rulebook & Contract Rules"](https://kalshi.com/regulatory/rulebook) — accessed July 10, 2026.
- [KalshiEX LLC rulebook filed with the CFTC](https://www.cftc.gov/filings/orgrules/rules07012525155.pdf) — accessed July 10, 2026.
- [Kalshi, "Orderbook Responses"](https://docs.kalshi.com/getting_started/orderbook_responses) — accessed July 10, 2026.
- [Polymarket, "Prices & Orderbook"](https://docs.polymarket.com/concepts/prices-orderbook) — accessed July 10, 2026.
- [Polymarket, "Resolution"](https://docs.polymarket.com/concepts/resolution) — accessed July 10, 2026.
- [UMA, "How does UMA's Oracle work?"](https://docs.uma.xyz/protocol-overview/how-does-umas-oracle-work) — accessed July 10, 2026.

## Open questions

- Which recurring political contract families need a standard edge-case checklist before they enter the tracker?
- How should Rome version a market series after contract wording or source hierarchy changes?
- Can contract-basis categories be made machine-readable enough to support future cross-venue scans?
