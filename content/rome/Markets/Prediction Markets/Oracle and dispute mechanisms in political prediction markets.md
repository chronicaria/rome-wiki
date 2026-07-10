---
title: Oracle and dispute mechanisms in political prediction markets
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, politics, oracles, disputes, resolution, market-design]
as_of: 2026-07-10
desk: Political prediction markets
review_after: 2026-07-17
---

Political prediction markets do not merely “look up” an answer: they run an adjudication pipeline whose evidence channels, challenge rights, financial incentives, escalation path, and finality rule determine what claim a contract actually pays on.

Up: [[Political prediction markets]]

Related: [[Political event-contract resolution designs]] · [[Prediction-market resolution risk]] · [[Voids cancellations and postponements in event contracts]] · [[Versioning political event-contract semantics]]

## The oracle is a procedure, not a source

A market rule may name the Associated Press, a state election authority, Congress.gov, or another source. That does not make the source the whole oracle. A source publishes evidence; an adjudication mechanism decides whether the evidence is timely, authentic, applicable to the exact proposition, and sufficient under the contract. It also decides what happens when the source is silent, changes its report, conflicts with another authority, or becomes unavailable.

That distinction is especially important in politics. “Candidate X wins” might refer to a media call, certified popular-vote totals, an electoral-vote milestone, congressional counting, or inauguration. Recounts, court orders, faithless electors, replacement nominees, vacancies, ties, and delayed certifications can separate those milestones. A contract’s [[Political event-contract resolution designs|resolution design]] defines the substantive event; its oracle and dispute mechanism defines the process for turning evidence about that event into a payout.

Two broad architectures illustrate the choice. A centralized regulated venue such as Kalshi determines and reviews outcomes through exchange rules and an internal Outcome Review Committee. A Polymarket market using UMA’s optimistic-oracle machinery permits bonded proposals and challenges, with escalation toward a token-holder vote. Neither architecture eliminates discretion. They locate it in different people, stages, and records.

This comparison is architectural, not a claim that every contract on either venue has identical terms. Contract-specific rules, adapter versions, bonds, liveness periods, rulebook versions, and source hierarchies can change. The Polymarket mechanics below follow its documentation retrieved July 10, 2026; the Kalshi comparison relies principally on CFTC-hosted rulebook versions and current lifecycle documentation. A live dispute must be analyzed against the instruments and rules actually governing it.

## Eight stages of an adjudication pipeline

### 1. Evidence submission

Evidence submission asks who can place material before the decision-maker, in what form, and by what deadline. In a centralized venue, the exchange may monitor named source agencies and review “all relevant evidence.” Kalshi Rule 7.1, in the CFTC-hosted version 1.14 filed in November 2024, says its Outcome Review Committee reviews all relevant evidence after the exchange initiates review. The public rule establishes breadth, but it does not describe an open, permissionless evidence docket through which any holder can compel inclusion of a particular artifact.

Polymarket’s documented escalated process is more visibly participatory. During a 24–48 hour debate period associated with a second dispute, evidence may be submitted through named UMA Discord channels. That lowers the procedural barrier to supplying links and rationales, but “open submission” should not be mistaken for a judicial evidentiary code. A chat channel does not by itself guarantee authentication, preservation, equal attention, or a reasoned response to every submission. Researchers should archive the relevant thread, timestamps, attachments, and any linked primary records, because mutable chat history is a weaker audit artifact than a durable filing docket.

For political markets, good evidence practice separates the original official artifact from commentary about it. A state certificate, roll-call record, court order, or party rule should be preserved with publication time and later-revision history. A screenshot is useful corroboration but a poor substitute for the original record. The adjudicator must also distinguish event time from evidence-publication time: a late report can describe an earlier event, while a later correction can alter the report without necessarily altering the contract’s deadline-defined fact.

### 2. Outcome proposal

An outcome proposal is the first explicit claim about settlement. Polymarket documents a permissionless mechanism: anyone may select the winning outcome, post a bond—described as typically 750 pUSD in the page accessed July 10, 2026—and submit the proposal to UMA. If correct and undisputed, the proposer receives the bond back plus a reward. A proposal that is wrong or too early can lose its bond. “Anyone” is a protocol permission, not an assurance that every person can practically participate; the proposer still needs the relevant wallet, network access, token, transaction capacity, and enough capital.

Kalshi’s public lifecycle instead describes determination as an exchange state. After trading closes, the exchange determines the result using the market’s rules and source. Its Rule 7.1 allows Kalshi, before settlement and at its sole discretion, to initiate the Market Outcome Review Process. There is therefore no directly analogous public bounty in which an arbitrary market participant posts collateral to become the initial outcome proposer. Operational responsibility rests with the venue.

The difference changes monitoring incentives. An optimistic oracle economizes on routine cases by accepting an assertion unless someone pays attention and challenges it. A centralized venue internalizes the initial determination function and the cost of maintaining staff, controls, and source feeds. One system exposes the proposer as an economically accountable actor; the other makes the institution accountable under its rulebook and regulatory framework.

### 3. Challenge

A challenge must be possible before an incorrect proposal becomes final, but challenge rights differ sharply. Polymarket documents a two-hour challenge period after a proposal. Anyone can dispute by posting a counter-bond equal to the proposer’s, described as typically 750 pUSD. An undisputed first proposal resolves after the challenge period. A first dispute opens a second proposal round; if the second proposal is also disputed, the matter escalates to debate and UMA’s Data Verification Mechanism.

That sequence makes challenge legible onchain and gives outsiders a defined action. It also creates a race. Two hours may be adequate for a globally watched election but fragile for a low-attention local race, an obscure legislative procedure, or a result announced during a liquidity or network disruption. The right to challenge is only effective when monitors discover the proposal, understand the rules, acquire the bond asset, and transact before liveness expires.

Kalshi’s CFTC-hosted Rule 7.1 does not create a symmetric member-triggered counter-bond procedure. Kalshi may initiate review at its sole discretion, considering circumstances that may materially affect the reliability or transparency of the underlying. This can let the venue intervene without waiting for a sufficiently wealthy challenger, but it also means a participant’s objection is not the same thing as a protocol-defined veto. The appropriate audit question is not “Was anyone angry online?” It is “What formal route, if any, allowed a holder to place the issue before the venue, and did the governing rules require or merely permit review?”

### 4. Bonds and incentives

Bonds make attention economically consequential. In the documented Polymarket flow, proposers risk losing their bond for a wrong or premature assertion, and disputers risk theirs for an unsuccessful challenge. The published distribution table says a prevailing proposer receives its bond plus half the disputer’s bond; a prevailing disputer receives its bond plus half the proposer’s. The same disputer-favoring distribution is documented for “Too Early” and “Unknown/50-50” findings.

The design tries to deter spam while rewarding correction. Its central calibration problem is asymmetric accessibility. UMA’s documentation on custom bonds says the bond must be high enough to incentivize disputes of invalid claims but warns that a very high bond can make bad proposals difficult to challenge. The economically relevant threshold is not merely the amount printed in documentation. It includes token acquisition, gas, bridge or network friction, capital lockup, monitoring cost, legal or geographic access, and uncertainty about the eventual vote.

Suppose a bad outcome would transfer $500,000 across all positions but only a few attentive users can capture a small fraction of the correction reward. A $750 bond may be small relative to aggregate harm yet large relative to any one monitor’s private benefit. Conversely, an extremely small bond invites nuisance disputes that delay many correct markets. Oracle security therefore depends on the relationship among bond size, market value, proposer reward, expected challenger participation, liveness, and escalation quality—not on collateral alone.

Kalshi’s review process uses no public outcome-dispute bond in the cited rulebook. Its incentives are institutional: accurate settlement protects venue integrity, reduces complaints and legal exposure, and satisfies obligations associated with operating a designated contract market. This avoids wealth-gating a formal review through counter-collateral, but it does not expose a market price for confidence or pay an external watcher merely for finding an error. Comparing “bonded” with “unbonded” adjudication thus requires comparing a protocol’s explicit stakes with an exchange’s governance, compliance, reputational, and regulatory constraints.

### 5. Escalation

Escalation answers who decides when ordinary resolution fails. Polymarket documents three paths: an undisputed first proposal; one dispute followed by an undisputed second proposal; or two disputed proposals followed by a DVM vote. UMA describes the Optimistic Oracle as an escalation game backed by the DVM. In the escalated case, UMA token holders vote using the protocol’s governance machinery; UMA’s DVM 2.0 documentation describes commit-reveal voting, staking rewards, and penalties for wrong or absent voting.

The first dispute does not, under Polymarket’s current description, immediately send the question to a token-holder referendum. It creates another proposal round. That substitution is consequential: the system gives optimism a second chance before invoking costly collective adjudication. A dataset that labels every challenge “DVM-decided” will therefore misclassify cases.

Kalshi escalation remains inside the exchange. Rule 7.1 assigns the final decision to an Outcome Review Committee and requires, in the cited version, a determination within 24 hours after review begins. This is organizational escalation rather than public economic escalation. The committee can synthesize conflicting evidence quickly and consistently, but outsiders need disclosures about initiation, evidence, reasoning, conflicts, and outcome to evaluate its work. The rulebook’s statement that the committee reviews all relevant evidence and has full discretion does not itself reveal how members were selected or how a particular evidentiary conflict was resolved.

### 6. Review, substitution, and clarification

Sometimes the issue is not which side won but whether the promised measurement remains usable. Kalshi Rule 7.2, in the CFTC-hosted rulebooks, authorizes the exchange when circumstances materially affect the reliability or transparency of a source agency or underlying—including source unavailability or significant modification—to designate a new source agency and underlying and change associated contract specifications after trading begins, with an announcement on its website. This is a powerful substitution mechanism. It seeks to preserve objective settlement, but it can change the basis traders originally priced.

Substitution therefore needs a counterfactual audit: what would the old source have said, why was it no longer reliable or transparent, why was the replacement selected, and could the replacement systematically favor one position? “More accurate” is not enough if the governing contract promised another source. The venue’s authority to modify is part of the purchased payoff, but using that authority still creates [[Prediction-market resolution risk|resolution basis risk]].

Polymarket documents an “Additional context” clarification mechanism for unforeseen circumstances. Its resolution page says such context cannot change the question’s fundamental intent, is published onchain through a bulletin-board contract, and should be considered by UMA voters. This creates a visible interpretive artifact, but the boundary between permissible clarification and substantive amendment is itself contestable. A clarification that names a fallback source, narrows a definition, or explains a deadline may redistribute value even if its author views it as preserving intent.

The architectures therefore offer different repair tools. Centralized review can substitute a source or specification under a rulebook power. Oracle governance can interpret ancillary data, clarifications, and evidence through proposals and voting. Neither should silently overwrite the original rules. A rigorous archive preserves both the ex ante contract and every later clarification, review notice, or modification.

### 7. Appeal and finality

Finality converts adjudication into money. The cited Kalshi Rule 7.1 says the Outcome Review Committee’s determinations are final and settlement occurs on the date it reaches its determination. Kalshi’s lifecycle documentation distinguishes close, determination, a dispute timer, finalization, and settlement-related states. Those operational distinctions should be recorded even when the governing rule describes committee review as final; an API state transition is not necessarily a separate legal appeal right.

Polymarket documents finality through the proposal-and-challenge state machine. An undisputed proposal becomes accepted after its challenge period. A twice-disputed process resolves through the DVM vote, after which winning positions can be redeemed according to the oracle outcome. The documented outcome set includes “Too Early,” which sends the matter back rather than finally paying 50/50, and “Unknown/50-50,” which is a terminal equal redemption in the described binary case. Those are not synonyms. Too Early rejects the timing of the proposal; Unknown concludes that neither ordinary answer is appropriate.

Neither mechanism should be described casually as “appealable” without identifying a formal stage. Social pressure, litigation, regulator contact, governance emergency powers, or a later software intervention may exist outside the ordinary pipeline, but they are not equivalent to a contractual appeal. For research, finality means the point after which the governing mechanism treats the outcome as no longer challengeable through its normal procedure. Economic finality may arrive later if redemption, chain reorganization, custody, injunction, or operational failure prevents payment.

### 8. Audit trail

An audit trail should let an outsider reconstruct what the market promised, what was asserted, what evidence was available, who challenged, what incentives were at stake, how escalation occurred, and what was finally paid. Onchain proposal, dispute, bond, clarification, and adapter events can provide durable timestamps and transaction identifiers. They do not preserve every offchain web page or Discord attachment, and they do not explain voter reasoning. A transparent state transition can still depend on ephemeral evidence.

A centralized venue’s audit trail may include rulebook filings, product terms, market-rule pages, lifecycle fields, review notices, outcome posts, and CFTC records. These can supply authoritative institutional provenance, but a public record may omit the internal evidence packet and deliberation. Regulatory filing is not the same as case-level reason-giving.

For either architecture, a serious resolution ledger should preserve:

1. venue, market, condition or ticker identifiers, adapter and rulebook versions;
2. exact question, rules, named sources, fallback order, deadlines, and semantic hash;
3. raw official evidence with retrieval time and content hash;
4. every proposal, outcome value, proposer, bond asset and amount, and timestamp;
5. challenge windows, challenger, counter-bond, and transaction or venue reference;
6. evidence submissions and discussion artifacts, with authorship and capture caveats;
7. review initiation, clarification, substitution, escalation, and voting records;
8. vote method, participation, outcome classes, and any conflicts disclosed;
9. finality time, redemption value, settlement time, and later correction attempts; and
10. missing artifacts, access restrictions, mutable claims, and the collector’s transformations.

This record supports [[Versioning political event-contract semantics]]. It also prevents a common analytical error: scoring a market against the researcher’s preferred political fact rather than the result produced by the contract’s governing adjudication procedure.

## Comparative design tradeoffs

Centralized review concentrates competence and responsibility. A venue can maintain continuous source monitoring, recognize recurring political edge cases, protect users without demanding a counter-bond, and decide quickly. Its weaknesses are agenda control and opacity: the same organization lists the contract, operates the market, initiates review, and houses the final committee. Public accountability depends on rules, notices, reason-giving, regulatory supervision, and preserved records rather than permissionless intervention.

Optimistic-oracle governance distributes initiation and challenge. It makes proposals and economic stakes inspectable, lets outsiders force a defined procedural transition when they can post the bond, and reserves expensive collective voting for contested cases. Its weaknesses are attention scarcity, capital barriers, short liveness, evidence-channel fragility, token-holder concentration, and the possibility that voting rewards coordinate participants around the expected consensus rather than independent truth discovery. Commit-reveal reduces some copying and bribery dynamics but does not prove epistemic accuracy.

Political questions strain both models because the correct answer is often an interpretation of institutional acts rather than a sensor reading. A court decision may be stayed; a certification may be superseded; a candidate may be “elected” before taking office; a source may correct a result after the contract cutoff. The strongest design therefore combines precise ex ante rules, a source hierarchy, a visible initial determination, enough challenge time, calibrated incentives, a competent escalation body, narrow substitution powers, terminal outcome conventions, and an auditable explanation.

No single label—centralized, decentralized, regulated, onchain, optimistic—establishes that combination. The relevant unit of comparison is the entire pipeline.

## Why it matters

Oracle design affects price before any dispute occurs. Traders discount positions when they expect a source conflict, an inaccessible challenge, a discretionary substitution, or an uncertain terminal outcome. Two contracts with identical headlines can therefore trade at different prices because their adjudication payoffs differ. That gap is not necessarily irrationality or arbitrage; it may be compensation for [[Prediction-market resolution risk]].

The pipeline also determines whose knowledge counts. A low bond and open challenge can empower a specialist who spots an error, while a short window can neutralize that openness. A centralized committee can consider evidence without making a user finance the objection, while discretionary initiation can leave outsiders unsure whether their evidence will matter. Resolution legitimacy is produced by access, incentives, competence, and explanation together.

For analysts, the practical rule is simple: never store only `outcome = Yes`. Store the path that created Yes. Without the proposal, challenge, review, escalation, and finality history, a backtest cannot distinguish a clean political forecast from a disputed semantic judgment.

## Sources

- [CFTC, Kalshi designated-contract-market rule filing 46149](https://www.cftc.gov/IndustryOversight/IndustryFilings/TradingOrganizationRules/46149) — official filing record for settlement and Market Outcome Review revisions, with linked rulebook version 1.8; filed June 15, 2021; accessed July 10, 2026.
- [CFTC-hosted KalshiEX Rulebook version 1.14](https://www.cftc.gov/sites/default/files/filings/orgrules/24/11/rules1114248723.pdf) — Rules 7.1–7.2 on Outcome Review Committee discretion, 24-hour determination, finality, and source/underlying modification; filed November 2024; accessed July 10, 2026. This is a filed historical version, not a representation that no later rulebook governs today.
- [Kalshi API documentation, “Market Lifecycle”](https://docs.kalshi.com/getting_started/market_lifecycle) — current documentation for close, determination, dispute timer, finalization, and settlement states; accessed July 10, 2026. Operational documentation is mutable and should be archived for case research.
- [Kalshi regulatory rulebook portal](https://kalshi.com/regulatory/rulebook) — venue portal for current rule and contract documents; accessed July 10, 2026. The applicable version should be captured at the market’s trading and determination dates.
- [Polymarket documentation, “Resolution”](https://docs.polymarket.com/concepts/resolution) — current proposal, typical bond, two-hour challenge, second proposal, debate, DVM vote, bond distribution, Too Early, Unknown/50-50, clarification, and redemption mechanics; accessed July 10, 2026. Parameters and adapters are mutable and contract-specific.
- [UMA documentation, “How does UMA’s Oracle work?”](https://docs.uma.xyz/oracle/econ-architecture) — Optimistic Oracle and DVM escalation architecture; accessed July 10, 2026.
- [UMA documentation, “Disputing Oracle Data”](https://docs.uma.xyz/using-uma/disputing-oracle-data) — live-network dispute action and escalation to the DVM; accessed July 10, 2026.
- [UMA documentation, “Setting Custom Bond and Liveness Parameters”](https://docs.uma.xyz/developers/setting-custom-bond-and-liveness-parameters) — bond and challenge-window calibration, including the access tradeoff of high bonds; accessed July 10, 2026.
- [UMA documentation, “DVM 2.0”](https://docs.uma.xyz/protocol-overview/dvm-2.0) — commit-reveal voting, staking, rewards, slashing, and emergency-recovery design; accessed July 10, 2026.

## Open questions

- What case-level notices and reasoned decisions does Kalshi publish when Rule 7.1 review is actually initiated, and how complete are their evidence records?
- How often do Polymarket proposals receive first and second disputes, and what share of aggregate market value is protected by active independent monitors?
- How concentrated is effective participation in political DVM votes after accounting for delegated voting and common ownership?
- Which bond and liveness settings minimize expected error when political evidence arrives slowly or outside US waking hours?
- Can a durable, content-addressed evidence docket replace mutable Discord submissions without making participation prohibitively technical?
