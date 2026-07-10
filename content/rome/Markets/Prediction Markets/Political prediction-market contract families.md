---
title: Political prediction-market contract families
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, politics, event-contracts, contract-design, resolution]
---

Political prediction markets are best classified by the legal or institutional fact that triggers payment, not by the political story suggested by the market title.

Up: [[Political prediction markets]]

Related: [[Political event-contract resolution designs]] · [[Prediction-market resolution risk]] · [[Conditional political probabilities]] · [[Logical coherence across prediction markets]] · [[From event-contract prices to probabilities]]

## Why a contract-family taxonomy matters

“Who will be president?” looks like one forecasting question. It can nevertheless generate contracts on at least five different events: winning a party nomination, winning the most votes in enough states, receiving a majority of electoral votes, being declared the winner by a named news organization, or being inaugurated in a non-acting capacity. In ordinary circumstances these events move together. In a recount, death, withdrawal, disputed slate, contingent election, or delayed certification, they can separate.

The durable unit of analysis is therefore a payoff function over possible states of the world. For a binary contract, let $X(\omega)$ equal 1 when the written payout criterion is satisfied in state $\omega$ and 0 otherwise. Two contracts belong to the same economic family only when their payoff functions are sufficiently comparable for the intended analysis. A shared title, candidate, or election date is not enough.

This taxonomy organizes political contracts by the institution whose act supplies the decisive fact. It is not a venue catalog and does not imply that every venue currently lists every form. Contract specifications change; the cited filings are examples of how binding terms turn a political topic into a settled instrument. Always retain the exact version of the rules that governed the observation.

## 1. Nomination contracts

A nomination contract asks whether a person becomes a party's nominee for an office. Its apparent simplicity hides several distinct terminal events.

### Convention nomination

The cleanest form resolves from the party convention's formal nomination. The decisive act may be the convention secretary's certification, the chair's declaration after a roll call, or another act identified in party rules. A market analyst must distinguish winning delegates or a presumptive-nominee label from actually receiving the nomination. Delegates may be replaced, released, bound only on specified ballots, or governed by party-specific procedures.

### Ballot or filing proxy

Some specifications can use ballot access, a certificate of nomination, or an official candidate filing as the observable proxy. That creates a different event. A nominee might appear on some state ballots under a substitute's name, miss a filing deadline, or be replaced after nomination. Conversely, a person can appear on a ballot without being the national party's nominee. The relevant public authorities are state election offices, not the Federal Election Commission: the FEC administers federal campaign-finance law and explicitly says it does not tally or certify election results.

### Presumptive or threshold nomination

A contract may instead settle on accumulating a stated delegate count, being described as presumptive by a named source, or remaining the only active candidate by a deadline. These are threshold, source-judgment, and status contracts respectively. They should not be pooled with formal-nomination contracts. “Drops out,” “suspends,” “concedes,” and “ceases campaigning” are also non-equivalent unless the rules choose a specific public act.

**Semantic traps:** “nominee” versus “presumptive nominee”; party endorsement versus legal nomination; winning a primary versus winning a plurality of delegates; suspension versus termination of a campaign; replacement after the convention; and vice-presidential selection versus convention nomination. The correct resolution record usually comes from the party or convention for internal nomination, and from a state authority for ballot status.

## 2. Election-outcome contracts

Election contracts settle on a candidate, party, vote measure, seat, or electoral mechanism. The family must be subdivided before probabilities are compared.

### Office-winner contracts

An office-winner contract can mean winning the popular vote, being certified elected, receiving the necessary electoral votes, or assuming office. Those are not synonyms. For U.S. presidential elections, the National Archives describes a sequence in which states appoint electors and issue certificates, electors vote, states transmit certificates of vote, and Congress counts electoral votes in joint session. A contract can attach to any point in that chain.

Kalshi's October 2024 state-winner specification illustrates deliberate layering. Its underlying referred both to the candidate winning the most votes in the state and to the partisan affiliation of the person inaugurated president, with the state's certificate of ascertainment and named media organizations entering its rules. Whatever one thinks the headline asks, the filed terms determine the payoff. A certified state popular-vote result is not automatically identical to the party of the eventual president.

### Vote-share and margin contracts

Threshold contracts ask whether a vote share, margin, turnout, or number of votes is above, below, at least, or between stated bounds. The interval convention matters. “Above 5%” excludes exactly 5%; “at least 5%” includes it. A displayed percentage may be rounded while the official underlying count implies a more precise ratio. The specification must identify numerator, denominator, treatment of invalid or blank ballots, geographic unit, election round, and revision cutoff.

The October 2024 Kalshi filings for state presidential popular-vote margins show why a rulebook code and full parameterization should be preserved. The political topic alone does not reveal whether the underlying is party vote share, candidate margin, percentage points, raw votes, or a bounded interval.

### State, district, and national aggregation

A candidate can win the national popular vote without winning the presidency; a party can win more districts without winning a chamber under a particular control definition. State-level contracts may use plurality, majority, runoff, ranked-choice tabulation, or another jurisdiction-specific rule. “Wins state” also needs a round: an initial election, runoff, recount-complete result, or final certification.

### Calls, concessions, certification, and officeholding

A named media call is a source-defined observation. A concession is a candidate action that can be withdrawn and has no uniform legal effect. Certification is a government act under jurisdiction-specific law. Officeholding begins under constitutional and statutory rules and can be affected by death, disqualification, vacancy, succession, or an acting appointment. These form four different contract families even when the same person usually satisfies all four.

**Semantic traps:** plurality versus majority; electoral vote versus popular vote; candidate versus party; initial count versus recount; projected versus certified winner; election date versus counting deadline; “wins” versus “takes office”; ties; write-ins; faithless electors; contingent election; postponed or rerun elections; and replacement of a deceased or disqualified candidate.

## 3. Chamber-control and governing-control contracts

Control contracts are portfolio-like political outcomes. They aggregate many elections plus membership, caucusing, vacancies, and institutional rules.

### Seat-majority control

One definition counts elected or seated members bearing a party label. Another asks which party has a majority of all authorized seats; another uses occupied seats only. Vacancies can make these tests diverge. “Most seats” is not necessarily “majority,” and a plurality may not confer operational control.

### Organizational control

The operational question is who elects the presiding officer, organizes committees, or commands the governing coalition. Independents may caucus with a party without formally joining it. Coalition agreements can allocate leadership independently of raw party labels. For the U.S. Senate, the vice president's tie-breaking role may matter to colloquial control while a particular contract counts senators or organizational arrangements differently.

Kalshi's congressional-control filing identified the product as “Will chamber of Congress be controlled by party for term?” The historical CFTC dispute itself demonstrates why the underlying cannot be reduced to one named race: control depends on cumulative election outcomes and other membership facts. A later political-party-control specification filed with the CFTC defined an underlying in terms of a named party controlling a named legislative body after issuance and before a date. That formulation is a status-by-window contract, not necessarily an election-night seat forecast.

### Composite control

“Trifecta,” “unified government,” “Congress control,” and “parliament control” are logical composites. The contract must define every component and the observation time. Control of both chambers may be an intersection, while “either chamber” is a union. A bicameral legislature can have different turnover dates in each chamber. A government may be caretaker, minority, coalition, or confidence-and-supply based.

**Semantic traps:** seats won versus members seated; party registration versus caucus alignment; majority of seats versus plurality; election result versus organization vote; chamber control versus legislative agenda control; temporary vacancies; party switching; vice-presidential tie breaks; coalition membership; and control “at,” “after,” or “during” a date range.

## 4. Policy and governmental-action contracts

Policy contracts ask whether a public body performs an act, whether a legal instrument takes effect, or whether a measurable policy outcome occurs. These are often confused because political speech compresses a long legal process into verbs such as “pass,” “ban,” or “approve.”

### Legislative stages

A bill can be introduced, reported from committee, passed by one chamber, passed in identical form by both chambers, presented to the executive, signed, enacted over a veto, or become law without signature. Each is a separate observable event. “Congress passes” should say whether identical text must pass both chambers. “Becomes law” should define how vetoes, pocket vetoes, severability, and enactment after the deadline are handled.

Congress.gov provides official bill actions and text for federal legislation, while House and Senate roll-call pages supply chamber votes. A contract using enactment should ordinarily identify the enrolled bill or public law, not merely a bill number whose text can change.

### Executive and administrative action

An announcement, signed executive order, agency proposal, final rule, publication in the Federal Register, and effective date are different. A rule can be published yet stayed or vacated before taking effect. An executive may “direct” an agency without the agency completing the requested policy. Contracts should name the instrument, issuing authority, subject, deadline, and terminal act.

### Fiscal and quantitative policy

Contracts on appropriations, tax rates, shutdowns, debt limits, tariffs, or spending need precise measures. “Government shutdown” might mean a lapse in appropriations, an Office of Management and Budget instruction, closure of specified agencies, or a duration threshold. Dollar quantities require nominal-versus-real treatment, fiscal period, official dataset, release vintage, and revision rule.

### International and subnational policy

Treaties may be signed, ratified, enter into force, or be implemented domestically. State measures may require executive signature, referendum approval, or administrative rules. A declaration by a political leader is not equivalent to a completed legal act.

**Semantic traps:** introduced versus passed; passed versus enacted; enacted versus effective; proposed versus final rule; announcement versus legally operative act; partial versus full implementation; deadline timezone; materially similar substitute legislation; court stay or repeal; and whether an omnibus provision counts.

## 5. Court and legal-proceeding contracts

Court contracts can settle on procedural events, merits outcomes, votes, remedies, or legal status. A headline such as “Will the Supreme Court overturn X?” is incomplete without a case, disposition, and meaning of “overturn.”

### Docket and procedure

Possible triggers include filing, docketing, grant of certiorari, oral argument, emergency relief, judgment, mandate, or denial. A certiorari denial is not a merits affirmance. A stay is not necessarily a final ruling. Mootness, dismissal, remand, and grant-vacate-remand orders require explicit treatment.

### Merits and remedy

A court may agree with a legal argument yet provide a narrower remedy than the title implies. It may affirm on alternative grounds, sever a provision, vacate an agency action, enjoin enforcement, or remand without vacatur. “Unconstitutional” can refer to a holding in an opinion, the judgment's practical effect, or a later controlling precedent. These are distinct payoff tests.

For U.S. Supreme Court contracts, the Court's docket and opinions are the natural primary records. Lower-court contracts should identify the court and docket number, not just the parties, because similarly captioned proceedings and appeals can coexist. A robust rule states whether concurrence votes count, which opinion controls, and how fragmented decisions are classified.

**Semantic traps:** cert granted versus case heard; temporary stay versus final relief; judgment versus mandate; ruling for a party versus endorsing a proposition; vacatur versus reversal; nationwide versus party-specific relief; consolidated cases; amended opinions; and decisions after the contract deadline.

## 6. Personnel, appointment, and tenure contracts

Personnel contracts attach to human status: selection, nomination, confirmation, appointment, service, departure, or succession.

### Selection and nomination

Being reported as the president's choice differs from a formal nomination transmitted to the Senate. An announced “acting” official can serve without nomination. A campaign's vice-presidential pick differs from the party's formal nomination if the contract recognizes convention action.

### Confirmation, appointment, and assumption of office

Senate confirmation is a chamber vote. Appointment may require a signed commission or other legal act. Taking the oath, entering on duty, and possessing statutory authority can occur later. The Senate's official nominations database and roll-call records are primary evidence for federal confirmations, while the appointing authority supplies appointment records.

### Departure and continuity

“Leaves office” can mean resignation announced, resignation effective, termination, death, replacement, or loss of authority. “Still in the cabinet” may include an acting role or exclude it. A contract should define title, capacity, authority, observation instant, and treatment of recess appointments, holds, withdrawals, returned nominations, and renamed offices.

**Semantic traps:** chosen versus nominated; nominated versus confirmed; confirmed versus commissioned; commissioned versus sworn; permanent versus acting; announced resignation versus effective departure; replacement named versus replacement serving; and service at any time during a window versus at its endpoint.

## 7. Conditional contracts and logical groups

Conditional and grouped markets are not merely a display convenience. Their collateral and invalidation rules determine what price means.

### Joint events

A binary contract paying on “$A$ and $B$” represents $P(A\cap B)$ under the probability interpretation. It is not $P(A\mid B)$. “$A$ or $B$” needs an inclusive-or rule unless exclusivity is guaranteed. Nested political events—nomination, election, inauguration—often have logical implications, but only after edge cases and definitions are aligned.

### Conditional-on markets

A true conditional design pays according to $A$ when $B$ occurs and voids, refunds, or otherwise neutralizes the branch when $B$ does not occur. The treatment of the unrealized branch is part of the asset. A contract that pays Yes only when both $A$ and $B$ happen is a joint contract, not a conditional one. A counterfactual question judged by an oracle is a third object again.

### Mutually exclusive outcome groups

Multi-outcome election groups can represent a partition if exactly one listed outcome must win. Polymarket's negative-risk documentation distinguishes standard groups, where the complete outcome set is known when the market is created, from augmented groups that may add outcomes. That distinction matters: prices across an incomplete or expandable group do not inherit the same fixed-partition interpretation as a closed slate.

“Other” is also substantive. It can absorb unlisted candidates, replacements, canceled events, or any result outside named outcomes—or it can be defined narrowly. A group may resolve multiple markets No if no listed candidate satisfies the rules, unless a residual outcome guarantees exhaustiveness.

### Logical coherence is downstream of semantic identity

For a genuine partition $E_1,\ldots,E_n$, coherent probabilities sum to one. For nested events, $P(A\cap B)\leq P(A)$. But these checks apply only after matching resolution sources, deadlines, void rules, and payout units. Executable bids and asks can imply intervals rather than a single coherent vector; last trades can create illusory violations. [[Logical coherence across prediction markets]] supplies the quantitative tests, while this taxonomy supplies the event map those tests require.

## A normalization checklist

Before comparing, averaging, backtesting, or calling two political contracts duplicates, preserve the following fields:

1. **Canonical identity:** venue, market and event identifiers, rulebook code, series, rule version, and archived specification.
2. **Exact proposition:** quote the binding payout criterion; do not substitute the title or interface shorthand.
3. **Outcome family:** nomination, election, control, policy, court, personnel, joint, conditional, or exhaustive group.
4. **Political entity:** exact person, party, office, chamber, jurisdiction, bill, legal instrument, case, or docket.
5. **Terminal act:** nomination, vote threshold, certification, call, inauguration, passage, enactment, publication, effective date, judgment, confirmation, appointment, or service.
6. **Actor and authority:** institution legally or contractually empowered to perform or record that act.
7. **Resolution source hierarchy:** named primary source, fallback source, source-conflict rule, and whether a venue or oracle exercises judgment.
8. **Time semantics:** event window, observation instant, timezone, trading close, resolution deadline, settlement time, and late-event treatment.
9. **Threshold semantics:** above/below/at least, endpoint inclusion, rounding, units, denominator, geographic aggregation, and data revision vintage.
10. **Exceptional states:** tie, recount, runoff, cancellation, postponement, death, withdrawal, substitution, disqualification, vacancy, acting service, court stay, missing data, and source silence.
11. **Invalidation mechanics:** void, refund, split payout, indeterminate state, challenge process, and treatment of the unrealized branch in conditionals.
12. **Group algebra:** exhaustive or incomplete; mutually exclusive or overlapping; static or expandable; definition of Other; joint, union, or conditional payoff.
13. **Economic terms:** payout currency and unit, collateral, fees, access restrictions, position limits, settlement delay, and counterparty or smart-contract structure.
14. **Price observation:** timestamp, bid, ask, depth, last trade, volume/open-interest definitions, and extraction method. These do not change the political event, but they determine whether the quoted “probability” is reproducible.
15. **Equivalence judgment:** identical, nested, overlapping, conditionally related, proxy, or incomparable—with a written reason.

Only contracts classified as identical should be merged without an explicit transformation. Nested and grouped contracts can be checked for bounds. Proxy contracts can inform a model but carry basis risk. Incomparable contracts should remain separate even if journalists describe them with the same sentence.

## Resolution-source discipline

Polymarket's help documentation states the governing hierarchy plainly: the market title describes the market, while the rules define resolution; those rules identify the source, end date, and edge cases. Its documented UMA process permits a proposed answer to be challenged and escalated through a dispute mechanism. That means the named public source and the oracle process are both relevant: the first supplies evidence, while the second determines the platform's final token payout.

On a regulated exchange, the filed contract terms and exchange rulebook supply the binding instrument. CFTC filings are valuable versioned records, but the analyst still needs the source agency named by the contract. A government page is not automatically authoritative for every political fact: the FEC is primary for campaign-finance records but not election certification; Congress.gov is authoritative for federal legislative actions but not a party convention; the Supreme Court docket is authoritative for its case events but not for every characterization of a holding.

The practical rule is to follow the contract's evidence chain rather than selecting the source that seems most official in the abstract. Then document disagreements instead of silently choosing the result that matches political intuition.

## Why it matters

A contract-family label is not merely filing metadata. It determines which event a quoted price forecasts, which official act can settle it, which contracts may be compared, and which logical or calibration tests are valid. Treating a nomination threshold as a formal nomination, a media call as certification, chamber organization as a seat count, or a joint event as a conditional probability silently changes the forecast target.

The taxonomy also prevents false precision. Two venues can display the same candidate and percentage while offering economically different claims because their terminal acts, deadlines, source hierarchies, or exceptional-state rules differ. Combining those prices without a semantic map creates an artificial consensus; scoring them against one outcome can manufacture apparent forecast error or skill. Conversely, contracts in different interface categories may be validly linked when their written payoff functions establish a genuine partition, nesting relation, or conditional structure.

For research, the safe sequence is therefore semantics first, executable prices second, and statistical comparison third. Preserve the exact specification, assign the contract family and terminal act, test equivalence, then decide whether aggregation, coherence checks, or backtesting are justified. This turns political prediction markets from a collection of suggestive headlines into auditable instruments.

## Sources

### Contract specifications and venue resolution rules

- Kalshi, “Exchange Rulebook & Contract Rules,” https://kalshi.com/regulatory/rulebook (accessed 2026-07-10).
- Commodity Futures Trading Commission, Kalshi `PRESPARTYSTATE` filing, October 4, 2024, https://www.cftc.gov/filings/ptc/ptc1004246674.pdf.
- Commodity Futures Trading Commission, Kalshi `STATEWIN` contract terms, October 31, 2024, https://www.cftc.gov/sites/default/files/filings/ptc/24/10/ptc1031247886.pdf.
- Commodity Futures Trading Commission, Kalshi state presidential popular-vote margin filing, October 4, 2024, https://www.cftc.gov/filings/ptc/ptc1004246728.pdf.
- Commodity Futures Trading Commission, congressional-control product record and associated documents, https://www.cftc.gov/IndustryOversight/IndustryFilings/TradingOrganizationProducts/50934 (accessed 2026-07-10).
- Commodity Futures Trading Commission, political-party-control event-contract specification, November 5, 2025, https://www.cftc.gov/filings/ptc/ptc11052532010.pdf.
- Polymarket, “How Are Markets Clarified?”, https://help.polymarket.com/en/articles/13364548-how-are-markets-clarified (accessed 2026-07-10).
- Polymarket, “How Are Prediction Markets Resolved?”, https://help.polymarket.com/en/articles/13364518-how-are-prediction-markets-resolved (accessed 2026-07-10).
- Polymarket, “How Are Markets Disputed?”, https://help.polymarket.com/en/articles/13364551-how-are-markets-disputed (accessed 2026-07-10).
- Polymarket Documentation, “Negative Risk Markets,” https://docs.polymarket.com/advanced/neg-risk (accessed 2026-07-10).

### Official political and legal outcome sources

- National Archives, “What is the Electoral College?”, https://www.archives.gov/electoral-college/about (accessed 2026-07-10).
- Federal Election Commission, “Election results,” including its jurisdictional caveat, https://www.fec.gov/introduction-campaign-finance/election-results-and-voting-information/ (accessed 2026-07-10).
- Congress.gov, legislation and actions, https://www.congress.gov/ (accessed 2026-07-10).
- U.S. House of Representatives, roll-call votes, https://clerk.house.gov/Votes (accessed 2026-07-10).
- U.S. Senate, roll-call votes, https://www.senate.gov/legislative/votes_new.htm (accessed 2026-07-10).
- U.S. Senate, nominations, https://www.senate.gov/legislative/nominations.htm (accessed 2026-07-10).
- Supreme Court of the United States, docket search, https://www.supremecourt.gov/docket/docket.aspx (accessed 2026-07-10).
- Supreme Court of the United States, opinions, https://www.supremecourt.gov/opinions/slipopinion/ (accessed 2026-07-10).

## Open questions

- Which party organizations publish sufficiently stable, machine-readable convention records to support nomination resolution without a media-source fallback?
- How should a historical dataset encode rule clarifications that cancel orders but do not alter already executed trades?
- Can a cross-venue ontology represent acting appointments, coalition control, and fragmented court judgments without collapsing them into venue-specific prose?
- Which exceptional states deserve standardized test cases for validating a contract parser before a new political market enters a calibration dataset?
