---
title: Political event-contract resolution designs
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, politics, event-contracts, resolution, market-design]
as_of: 2026-07-10
review_after: 2026-07-17
---
Political event-contract resolution design converts a public question into a terminal cash flow by specifying the proposition, evidence hierarchy, decision authority, timing, exceptional states, and appeal path.

Up: [[Political prediction markets]]

Related: [[Prediction-market resolution risk]] · [[From event-contract prices to probabilities]] · [[Logical coherence across prediction markets]]

## The contract settles a rule, not a headline

“Will Candidate A win?” is not yet a complete financial instrument. Win what: a party primary, the most delegates, the nomination, a state's popular vote, a majority of electoral votes, the congressional count, or inauguration? At what time? According to which record? What happens after a recount, court order, candidate death, replacement, tie, delayed certification, or failure to publish the named record?

A resolution design answers those questions before trading. It maps a potentially messy political history into a payoff. For a binary contract, write the terminal value as

$$
V = R(E,S,D,X,A), \qquad V\in\{0,1,r\},
$$

where $E$ is the defined political event, $S$ the designated evidence source or hierarchy, $D$ the relevant deadline, $X$ the exceptional-state rules, $A$ the adjudication process, and $r$ a possible refund or alternative settlement value. The familiar Yes/No proposition is only one input to $R$.

This is why [[Prediction-market resolution risk]] is not an incidental operational concern. Two markets can use the same headline and still represent different assets. A contract paying on an Associated Press projection differs from one paying on state certification; a contract paying on electoral-vote ascertainment differs from one paying after Congress counts the votes. The political outcomes will usually align. The states in which they do not align are precisely where the resolution design matters most.

This note is a design taxonomy, not legal advice and not a claim that any venue currently uses every pattern described. Venue rules, contract terms, statutes, election procedures, and oracle implementations can change. The operative text is always the version attached to the particular contract, read together with the controlling authority, as of the trade and resolution dates.

## The six layers of a complete design

### 1. Proposition semantics

The proposition should identify the subject, predicate, jurisdiction, office or political act, and temporal boundary. Names need identity rules: a candidate may change party, withdraw, die, be replaced, or appear under different ballot labels. Verbs need definitions: “wins,” “is nominated,” “controls,” “resigns,” and “is confirmed” correspond to different institutional acts.

A good test is whether an unfamiliar adjudicator could evaluate the proposition without importing the market title's conversational meaning. “Party X controls the Senate” is incomplete unless control means seats won, seated members, caucus alignment, or the ability to elect the presiding officer. “Bill Y passes” must distinguish passage by one chamber, identical passage by both chambers, presidential signature, veto override, or becoming law without signature.

The design also needs an outcome partition. In a candidate family, are the listed candidates mutually exclusive and collectively exhaustive? Does “Other” include a replacement nominee? Can a deadlocked convention create no nominee by the deadline? A complete-set assumption is unsafe until the rules demonstrate that every possible world maps to exactly one outcome, or specify how unmatched worlds settle.

### 2. Political milestone

Political processes generate a chain of milestones, not one instantaneous fact. For an election this can include election-night reporting, canvass, audit, recount, local certification, state certification, a certificate of election, litigation, seating, and later institutional action. The U.S. Election Assistance Commission emphasizes that election-night results remain unofficial and that certification authority and timing vary across jurisdictions. The Federal Election Commission likewise says state election offices, not the FEC, certify results; the FEC later compiles results reported by states.

Presidential elections add another chain. State popular-vote certification informs appointment of electors; state executives issue Certificates of Ascertainment; electors meet and execute Certificates of Vote; Congress counts electoral votes; and the President of the Senate announces the result. The National Archives coordinates and preserves certificates but says it does not appoint electors. A contract designer must choose which step creates the payoff instead of using “wins the presidency” as if the chain had only one node.

The selected milestone should match the question's purpose. A news-call contract can settle quickly and measure a media projection. A certification contract settles later and measures an official state determination. A congressional-count contract answers a still different institutional question. None is universally correct; obscuring the choice is the error.

### 3. Evidence hierarchy

The rules should name a source capable of establishing the selected milestone. “Official sources” is weaker than an ordered list of named agencies, documents, and fallback conditions. A robust hierarchy might specify:

1. the jurisdiction's signed or published certification document;
2. a named official results page if the document is unavailable;
3. a successor office or legally authoritative replacement record;
4. one or more named secondary sources only after a defined waiting period;
5. adjudicator review if the sources conflict or remain silent.

Authority must be matched to the fact. The FEC is authoritative about federal campaign-finance administration but explicitly disclaims jurisdiction over election results and the Electoral College. A state election office is normally closer to a state's certified vote. The National Archives is authoritative about the federal Electoral College records it receives and posts, but its role differs from the state executive's and Congress's. A court order can alter the relevant official act, but a news report about litigation is not the order itself.

For nominations, the party's charter, call, convention proceedings, or designated party officer may be the relevant authority. For chamber organization, the chamber's journal, clerk, secretary, roll-call record, or officially announced vote may be superior to a party press release. The lesson is functional: designate the body that performs or records the act, not merely the most familiar institution associated with the subject.

Source versioning also matters. Dynamic web pages can be corrected without preserving a visible history. A design should identify whether the first publication, latest publication at a cutoff, final certified document, or later corrected record controls. Researchers should archive the exact rule text and source artifact where rights permit, with retrieval time and document identifier.

### 4. Decision authority

Evidence does not apply itself. A centralized venue normally retains an exchange or market-operations authority to apply contract terms. Kalshi's help material, as of this note's research date, says settlement occurs after an official result is confirmed by the source agency and its markets team finalizes the result; the market's own rules and “Important Information” remain controlling. The CFTC's customer guidance says users should receive transparent terms explaining how settlement determinations are made, who decides, and how. Those statements separate the external fact source from the entity making the contractual determination.

An optimistic-oracle design distributes the process differently. UMA's documentation describes a proposal that becomes verified after a configurable challenge period if undisputed. A dispute escalates to its Data Verification Mechanism, where tokenholders use a commit-reveal vote. The external political evidence still matters, but bonds, liveness periods, dispute incentives, voting rules, and integration-specific ancillary data become part of the resolution path.

Neither “centralized” nor “decentralized” is a complete design description. The questions are concrete: who may propose; who may challenge; what does a challenge cost; how long is the window; what exact instructions bind the reviewer; who decides a disputed case; can an administrator intervene; and when is the answer final? UMA's documentation also describes configurable escalation managers for its v3 architecture, underscoring that one oracle family can support materially different policies. Analysts must inspect the actual integration rather than infer it from a brand name.

### 5. Time and finality

At least four clocks may coexist:

- trading close, after which no new positions are accepted;
- observation cutoff, which bounds qualifying acts or publications;
- determination time, when the adjudicator checks the source;
- payout time, when funds become available.

Collapsing them creates errors. A politician might resign after trading closes but before the proposition's calendar deadline. An election can be publicly called while the official source remains pending. A source can publish before the cutoff and correct after it. A disputed oracle answer can remain economically unsettled after the real-world event looks obvious.

Trigger-based and at-expiration contracts illustrate the difference. A trigger-based contract can resolve Yes as soon as a qualifying act occurs, while No remains impossible to establish until the window ends. An at-expiration contract examines the state at a specified time. “Serves at any time before December 31” and “is serving at 11:59 p.m. on December 31” are not substitutes. The first is path-dependent; the second is a terminal snapshot.

Finality should say whether later corrections, recounts, litigation, or institutional reversals reopen settlement. Irrevocable settlement offers operational certainty but can diverge from a later authoritative record. Delayed settlement can reduce that divergence while increasing capital lockup and uncertainty. The design should make the tradeoff explicit rather than promising both immediate and ultimate truth.

### 6. Exceptional states and remedies

Every political contract needs a small contingency code. Common branches include postponement, cancellation, no result by deadline, source disappearance, contradictory sources, recount, court-ordered revision, tie, vacancy, candidate replacement, party change, jurisdictional change, and platform or regulatory suspension.

The remedy can be binary settlement, deadline extension, void and refund, settlement at a specified intermediate value, or discretionary review. These remedies have different economics. A refund is not the same as a No payout: it returns collateral while erasing the gain or loss that traders expected from the political event. A 50-cent settlement reallocates value between positions bought at other prices. “Last fair market price” introduces the separate problem of selecting a reliable price under stress. Discretion can handle unforeseen cases but makes the adjudicator's judgment part of the asset.

The exception should be defined narrowly enough that traders can price it. “The exchange may take any action it considers appropriate” is operational flexibility, not payoff certainty. If discretion is unavoidable, the rules should identify the decision body, considerations, notice, evidence, review period, and whether the decision is final.

## A practical taxonomy of resolution designs

### Official-record settlement

The contract points to an official act or document: certified vote totals, a signed certificate, chamber journal, roll call, enacted statute, executive proclamation, or party record. This pattern aligns the payoff with institutional finality and usually provides a strong audit trail. Its weaknesses are latency, fragmented authority, corrections, and the possibility that the record answers a narrower question than the market title suggests.

For U.S. elections, “official” cannot be treated as one federal database. The EAC says certification procedures and certifying actors vary by state and sometimes locality. The FEC compiles rather than certifies results. Presidential selection involves distinct state, elector, archival, and congressional acts. The design must name the right link in the chain.

### Named-media settlement

The contract settles when a specified news organization or defined set of organizations calls, reports, or characterizes an event. This can be fast and publicly observable. It measures a publication event, however, not necessarily the ultimate legal outcome. Corrections, retractions, inconsistent desks, paywalls, changes in wording, and simultaneous-source rules need treatment.

If the contract requires “three major outlets,” the outlets must be enumerated and the agreement rule specified. Otherwise the adjudicator can choose the panel after seeing the result. A media-call design should say whether a call must remain standing for a minimum period and whether a correction before settlement defeats the trigger.

### Venue-adjudicated evidence settlement

The contract provides criteria and sources but gives a venue committee or market team authority to interpret them. This can integrate context that no mechanical feed captures. It also creates governance risk: internal procedures, conflicts, evidence disclosure, consistency across markets, and review rights affect confidence.

Good design publishes a reasoned resolution notice, cites the decisive artifact, exposes the relevant rule version, and preserves a challenge window where feasible. A bare outcome label prevents independent reconstruction.

### Optimistic proposal-and-dispute settlement

Anyone or an eligible actor proposes the answer, posts an economic bond, and waits through a challenge period. An undisputed proposal finalizes; a disputed one escalates under a predefined arbitration process. The pattern is efficient when answers are obvious and disputes are rare. It can fail if the dispute bond is too high for monitors, too low to deter false proposals, the liveness period is too short, instructions are ambiguous, or voters lack incentives and context.

The oracle does not eliminate human interpretation. It changes who interprets, when, with what incentives, and through what audit trail. Integration parameters and ancillary resolution text are therefore contract terms, not backend trivia.

### Mechanical data-feed settlement

A deterministic feed maps a published data field to a payoff. This works best when a stable agency publishes a well-defined value in a consistent format. It is brittle when the endpoint changes, preliminary and final fields coexist, records are revised, names collide, or a political event requires institutional interpretation. A feed should have authentication, timestamp, revision, outage, and fallback rules.

### Composite or consensus settlement

Multiple sources are combined through unanimity, majority, priority, or a fallback sequence. Redundancy can reduce dependence on one endpoint. It can also multiply ambiguity. A “consensus of reputable sources” selected after the fact is not a replicable rule. The panel, weighting, observation time, missing-data treatment, tie rule, correction rule, and authority for classifying disagreement must be fixed in advance.

### Discretionary or emergency settlement

An emergency authority decides when ordinary rules fail. This is a backstop, not a substitute for ordinary semantics. It is most defensible when activation conditions are narrow and reasons must be published. Broad discretion can sometimes prevent absurd outcomes, yet it weakens cross-venue equivalence and makes governance quality part of the price.

## Failure modes

**Milestone substitution.** Traders price certified victory while the contract pays on a media call, or vice versa. The visible price then answers a different question from the analyst's label.

**Authority mismatch.** The rules cite a familiar agency that does not legally certify the relevant result. The FEC/state distinction is a canonical U.S. example.

**Source silence.** The named source never publishes the exact field, changes format, removes an archive, or delays beyond the contract deadline. Without a fallback, “objective” settlement becomes discretionary.

**Revision ambiguity.** Preliminary data satisfy the trigger, then a correction reverses it. The contract never says which version controls or whether settlement can reopen.

**Temporal gaps.** Trading close, event cutoff, source publication, and adjudication occur at different times, but the rules use one vague “expiration” label.

**Non-exhaustive states.** Death, replacement, no nominee, tie, contingent election, delayed seating, or institutional reorganization fits neither Yes nor No cleanly.

**Circular evidence.** Several secondary sources cite one another or the market price itself. Apparent consensus is not independent confirmation.

**Oracle-instruction mismatch.** The human-readable title, ancillary oracle question, and payout code encode different conditions. Even a correct oracle answer can produce an unexpected payoff.

**Under-incentivized challenge.** A false optimistic proposal is cheaper to leave unchallenged than to dispute, especially if monitoring is thin or transaction costs spike.

**Adjudicator option value.** Broad discretion lets the decision maker choose among plausible interpretations after prices reveal who benefits. Actual bias need not occur; the unbounded option itself creates basis risk.

**Premature finality.** Rapid settlement precedes certification, recount, or correction. Conversely, excessive delay locks collateral after the relevant uncertainty has substantially vanished.

**Rule mutation.** A venue changes terms after trading begins without a clear version history, effective-time rule, or remedy. Historical analysis then mistakenly applies today's text to yesterday's positions.

## Design and audit checklist

Before treating a contract as research evidence, preserve:

1. exact market title, identifier, venue, and rule version;
2. complete proposition and payout mapping;
3. subject identity and jurisdiction;
4. political milestone that creates Yes and the condition that creates No;
5. ordered source hierarchy with exact URLs or document classes;
6. source-version and correction policy;
7. trading close, observation cutoff, determination, and payout times with timezone;
8. postponement, cancellation, tie, replacement, death, recount, litigation, and no-publication branches;
9. proposer, challenger, adjudicator, appeal route, bonds, and waiting periods where applicable;
10. void, refund, intermediate-value, and emergency powers;
11. the decisive resolution artifact and reasoned notice;
12. changes between the archived trading rules and the rules visible at settlement.

For comparison across venues, place these fields beside bid, ask, depth, fees, collateral, and access restrictions. Only contracts with materially identical payoff trees should be treated as the same event. Everything else is a related exposure with [[Prediction-market resolution risk|resolution basis]].

## Why it matters

Resolution design determines what a price forecasts. If the design pays on an AP call, the price estimates the contractual chance of that call under the rules, not directly the chance of certified officeholding. If it pays on a congressional act, it embeds every pathway between election day and that act. Analysts who erase those distinctions can invent cross-venue disagreement, false arbitrage, and calibration error.

Design also allocates power. Naming a source gives that publisher informational importance; choosing a deadline determines which later evidence counts; setting a challenge bond determines who can contest an answer; granting discretion moves value toward governance. These choices shape trading incentives before the political event occurs.

Finally, resolution architecture is part of historical reproducibility. A time series of prices without the contemporaneous rule text is incomplete data. Future researchers need to reconstruct not only what traders paid, but what terminal cash flow they were buying. The most useful archive therefore pairs market microstructure with a versioned payoff tree and the final evidence artifact.

## Sources

- [U.S. Commodity Futures Trading Commission, “Understanding Prediction Markets and Event Contracts”](https://www.cftc.gov/LearnandProtect/PredictionMarkets) — customer guidance on transparent terms, settlement determination, decision authority, and costs; accessed July 10, 2026.
- [U.S. Election Assistance Commission, “Election Results, Canvass, and Certification”](https://www.eac.gov/election-officials/election-results-canvass-and-certification) — official explanation of unofficial reporting, canvass, certification, and jurisdictional variation; page dated December 23, 2025; accessed July 10, 2026.
- [Federal Election Commission, “Election results and voting information”](https://www.fec.gov/introduction-campaign-finance/election-results-and-voting-information/) — explains that state offices certify results and the FEC compiles them; accessed July 10, 2026.
- [National Archives, “The Electoral College”](https://www.archives.gov/electoral-college) — official overview of Certificates of Ascertainment and Vote and the congressional count; accessed July 10, 2026.
- [National Archives, “Roles and Responsibilities in the Electoral College Process”](https://www.archives.gov/electoral-college/roles) — institutional roles and certificate lifecycle; accessed July 10, 2026.
- [National Archives, “Legal Provisions Relevant to the Electoral College Process”](https://www.archives.gov/electoral-college/provisions) — reproduced federal provisions governing ascertainment and counting; accessed July 10, 2026.
- [Kalshi Help Center, “Market FAQs”](https://help.kalshi.com/en/articles/13823821-market-faqs) — venue explanation of source agencies, rule-specific timing, and markets-team finalization; page dated April 12, 2026; accessed July 10, 2026. Exact contract rules supersede general help text.
- [UMA Documentation, “How does UMA's Oracle work?”](https://docs.uma.xyz/protocol-overview/how-does-umas-oracle-work) — official description of optimistic proposals, disputes, and DVM escalation; accessed July 10, 2026.
- [UMA Documentation, “DVM 2.0”](https://docs.uma.xyz/protocol-overview/dvm-2.0) — official description of commit-reveal tokenholder arbitration and staking architecture; accessed July 10, 2026.
- [UMA Documentation, “Escalation Managers”](https://docs.uma.xyz/developers/optimistic-oracle-v3/escalation-managers) — official documentation of configurable dispute policies in OOv3; accessed July 10, 2026.

## Open questions

- What minimum rule-version archive should a venue expose so a third party can reproduce settlement years later?
- When should a political contract prefer rapid media-call settlement over slower institutional finality, and how should the label disclose that tradeoff?
- How can challenge bonds and liveness periods be stress-tested against politically motivated false proposals and sudden transaction-cost spikes?
- Should exceptional-state mappings use refunds, fixed intermediate values, or explicit multi-outcome contracts when no binary answer is institutionally natural?
- What standardized schema could encode proposition semantics, source hierarchy, clocks, exception branches, and adjudication without flattening jurisdiction-specific law?
