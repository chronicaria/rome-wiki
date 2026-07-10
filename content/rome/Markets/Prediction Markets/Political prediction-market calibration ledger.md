---
title: Political prediction-market calibration ledger
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, politics, calibration, quantitative-research, protocol]
as_of: 2026-07-10
desk: Political prediction markets
review_after: 2026-07-17
---
A political prediction-market calibration ledger is a preregistered, append-only record that freezes eligible contracts, executable forecast intervals, outcomes, and exclusions before results can influence the analysis.

Up: [[Political prediction markets]]

[[Prediction-market calibration]] explains what empirical calibration means. This note specifies how to produce evidence capable of answering that question. The protocol is intentionally stricter than downloading a venue's historical price chart. It defines the forecast universe before outcomes, preserves the proposition that existed at each cutoff, treats the bid and ask as the primary observation, and makes every transformation reproducible from immutable source artifacts.

The ledger has two outputs. The **coverage ledger** contains every contract selected by the universe rule, including missing, stale, voided, disputed, and semantically unusable cases. The **score table** is a derived view containing only records eligible for a named statistical estimand. Keeping both prevents a clean score table from concealing the operational failures that removed inconvenient contracts.

## Freeze a protocol, not merely a spreadsheet

Before the first outcome is observed, publish a dated protocol and a machine-readable manifest schema. Give the protocol a version and content hash. State which choices are confirmatory and which analyses are exploratory. A protocol amendment receives a new timestamp, a reason that does not depend on unseen results, and an explicit rule for whether it applies prospectively or creates a separately reported sensitivity analysis. Never overwrite the original.

Preregistration cannot make retrospectively recovered data prospective. For historical research, construct the candidate universe while outcome fields are masked, freeze and hash the manifest, then reveal outcomes. Label the result **retrospective, outcome-blinded construction**, not preregistration. Genuine preregistration means that inclusion, snapshots, transformations, scores, and exceptions were committed before the relevant outcomes.

The protocol must name:

1. the venue or venues and political domains;
2. the rule that generates eligible contracts;
3. scheduled forecast cutoffs and time zone;
4. semantic, quote-age, spread, depth, and fee rules;
5. terminal outcome classes and adjudication procedure;
6. primary probability extraction and score;
7. comparison baselines and their information cutoffs;
8. event weights and dependence unit;
9. missingness categories and primary handling; and
10. frozen reporting tables, uncertainty method, and sensitivity analyses.

This list is a minimum, not permission to choose the details later.

## Universe and immutable identity

Define the target population with a rule that can be executed without knowing popularity, competitiveness, or result. One workable initial universe is: *every binary contract classified by the named venue as US politics, first tradable during the registration window, with scheduled determination no later than the study freeze*. A narrower study might cover every major-party US Senate general-election winner contract listed by a fixed date. “Important markets,” “competitive races,” and “markets with enough history” are invalid unless importance, competitiveness, and history were prospectively operationalized.

Generate a candidate row when the listing first satisfies the universe rule. Preserve `venue`, immutable venue contract ID, market/group ID, API retrieval time, listing time, trading-open time, scheduled close and determination times, title, full rules, named resolution source, payout unit, tick size, and every venue classification used by the selector. Also preserve the raw listing response and its cryptographic hash. A delisting must not delete the row.

Assign three researcher identities. `contract_version_id` identifies one economically stable set of payoff terms. `event_id` identifies the exact proposition eventually scored. `dependence_cluster_id` groups propositions exposed to the same contest or political shock. These are different. Candidate A wins and Candidate B wins can be separate event records but one mutually exclusive family; state results and the national presidential winner can belong to one election-cycle cluster.

Apply [[Versioning political event-contract semantics]]. Archive the exact rule artifact at entry and at every snapshot. If a clarification changes the set of world states that pay, the deadline, payout, controlling source, or void treatment, close the old version immediately and open a new one. Do not splice quotations across the break. A cosmetic restatement may retain the version only when a recorded semantic diff and reviewer rationale support that judgment.

## Snapshot schedule and cutoff discipline

Predefine forecast horizons, such as 90, 30, 7, and 1 day before the scheduled event time, plus a final snapshot at a fixed offset before trading close. Define the horizon against a stable political clock—normally the scheduled election or institutional deadline—not the eventual resolution timestamp. If the event time changes, preserve the original schedule and apply a prospectively chosen postponement rule. Do not move a missing 30-day snapshot to 27 days because a quote appeared then.

At each cutoff $t$, select the latest order-book state whose exchange timestamp is at or before $t$ and whose age is no more than the preregistered tolerance. Record the cutoff, venue timestamp, ingestion timestamp, and normalized UTC time. If the venue supplies no exchange timestamp, record that limitation and use the ingestion time only under a registered live-capture design. A later historical chart must never fill a missed observation.

One event-horizon record is the primary unit for fixed-horizon calibration. Intraday or daily path evaluation is a distinct estimand because repeated snapshots reuse the same outcome and overweight long-lived contracts. Store the full path if useful, but do not let API cadence silently determine scientific weight.

Every snapshot stores the complete visible book or at least levels sufficient to reproduce the registered executable size: bid prices and quantities, ask prices and quantities, last trade with time, tick size, status, and any crossed, locked, halted, or one-sided condition. Preserve the raw response, request parameters, response headers relevant to time or version, retrieval software version, and a content hash.

## Bid–ask interval first, point forecast second

The primary market observation is an executable probability interval, not the interface's displayed percentage. Polymarket's official documentation says its normal displayed price is the bid–ask midpoint, but that when the spread exceeds $0.10 the interface displays the last trade. That venue behavior alone shows why screenshots and headline probabilities are insufficient: the displayed number can change its economic definition with the spread.

For a unit-payout Yes claim with best executable bid $b_t$ and ask $a_t$, begin with $[b_t,a_t]$. For a registered quantity $q$, replace best quotes with the volume-weighted prices needed to sell or buy $q$ from the archived depth. State whether orders are assumed to execute immediately and completely. Do not extrapolate beyond visible depth, treat a one-sided book as $[0,a]$ or $[b,1]$, or substitute a stale last trade.

The registered point extractor may be the midpoint

$$
p_t=(b_t+a_t)/2,
$$

but only when both sides pass the quote-age, spread, and depth filters. Set those thresholds before outcomes. The midpoint is an estimator inside the feasible trading interval, not itself an executable transaction. Preserve the interval even when a point is extracted.

An interval-aware sensitivity analysis should compute the best and worst score attainable anywhere in $[b_t,a_t]$. For Brier loss and outcome $y$, report

$$
\min_{p\in[b_t,a_t]}(p-y)^2
\quad\text{and}\quad
\max_{p\in[b_t,a_t]}(p-y)^2.
$$

This is not a replacement for a preregistered point score. It shows whether a system ranking depends on inventing precision inside a wide spread.

## Fees, payout normalization, and liquidity

Normalize every price to the same payoff unit. Record gross Yes and No settlement payoffs, collateral convention, maker/taker classification, fee schedule version, fixed or percentage fees, rounding, withdrawal or settlement charges if unavoidable for the studied transaction, and rebate eligibility. The CFTC's public customer guidance explicitly tells users to examine commissions, fees, penalties, and other costs and to obtain transparent contract terms, payout, prices, and settlement procedures. A calibration study need not model a trader's full return, but it must not call two economically different observations identical probabilities.

Maintain two derived intervals. The **quote interval** is the normalized bid and ask. The **cost-adjusted interval** applies the registered fee model to the hypothetical purchase and sale of quantity $q$. If fee incidence depends on role or execution path, report separate maker and taker cases rather than averaging them. If fees cannot be reconstructed at the historical cutoff, mark the cost-adjusted field missing; do not import today's schedule.

Liquidity admissibility should depend on data available at the cutoff: two-sided depth of at least $q$, maximum spread $s$, maximum quote age $a$, and active trading status. Volume and open interest may be useful strata but are not substitutes for contemporaneous executable depth. Report scores by registered liquidity strata, and report how many universe rows fail each threshold. Changing $q$, $s$, or $a$ after seeing which rule produces the best score is specification search.

## Outcomes, voids, disputes, and semantic review

Outcomes begin as nonbinary states. Use at least `yes_final`, `no_final`, `void`, `cancelled`, `postponed_open`, `disputed_pending`, `revised_after_initial`, `rules_changed`, `source_unavailable`, and `unresolved_at_freeze`. Store the venue's settlement value separately from the underlying official fact and separately from the researcher's mapping. The three may diverge.

For each outcome, archive the venue resolution notice, the evidence from the contract's named source, proposal and challenge timestamps where relevant, finalization time, payouts, and later corrections. Record who performed the mapping and an independent review status. The CFTC describes event contracts as fixed-payout instruments whose contract terms should specify how settlement is determined and who decides. That makes settlement governance part of the measured forecasting instrument, not clerical metadata.

Never force a void into $y=0$ or $y=0.5$ merely to retain it in an ordinary binary Brier table. The primary binary score excludes nonfinal binary outcomes by registered rule, while the coverage ledger reports their number, rate, domain, venue, and forecast-horizon distribution. A separately registered economic-return analysis may model refunds or split payouts, but it answers a different question. A dispute that eventually becomes final enters the binary score only under a fixed analysis-freeze policy; retain dispute duration and any outcome revision as operational reliability measures.

If the venue settles contrary to the researcher's view of the real-world event, score the archived **contract proposition** against the venue payout for the market-instrument estimand. A separate substantive-forecast analysis may score a prospectively defined real-world target against its authoritative source. Never switch targets case by case. [[Prediction-market resolution risk]] explains why the distinction is substantive.

## Proper scores and extraction rules

The primary score should be binary Brier loss,

$$
L_B(p,y)=(p-y)^2,
$$

averaged with registered event weights. Brier's original 1950 paper defines the probability-score family; [[Proper scoring rules and market forecasts]] gives the modern interpretation. Record lower-is-better convention explicitly because some literature uses rewards or differently scaled multicategory scores.

Use logarithmic loss as a complementary score,

$$
L_{\log}(p,y)=-y\log p-(1-y)\log(1-p).
$$

Fix a clipping constant $\epsilon$ before outcomes and compute it only as a named sensitivity if raw extracted values can reach zero or one. Report unclipped infinite losses rather than quietly clipping after a surprise. Never estimate clipping, recalibration, bin boundaries, or favorite–longshot corrections on the test outcomes.

Reliability diagrams require registered bins or test-set-independent smoothing. Show the number of distinct events and dependence clusters in every bin, not merely row counts. Report sharpness and a reliability–resolution decomposition only with its finite-sample and binning caveats. A low mean proper score is not proof of calibration, while a diagonal-looking reliability plot from a few correlated clusters is not strong evidence.

## Baselines and matched comparison

Register at least two baselines. The first is a **constant historical base rate** estimated only from eligible events preceding the evaluation cycle. When no defensible prior sample exists, a constant $0.5$ may be reported as a transparent reference, not represented as a competitive political model. The second should be a domain-relevant contemporaneous comparator, such as a poll-based probability model, election model, or simple fundamentals model frozen at the identical cutoff.

Comparator semantics must match actor, event, deadline, and resolution rule. Inputs must have been publicly available by the cutoff. A poll's field end date is not its release time; a model page captured later may contain revisions; a current macroeconomic series may contain revised historical values. Store each baseline's raw artifact, version, publication time, retrieval time, transformation code, training window, and probability.

Compare systems on matched event-horizon pairs. For systems A and B, retain

$$
d_i=L(p_{A,i},y_i)-L(p_{B,i},y_i).
$$

Report the average paired difference with cluster-aware uncertainty and a separate coverage table. An unpaired score can favor the system that happens to cover easier events. Do not impute a baseline merely to enlarge the matched table unless the imputation was preregistered and is also disclosed as a coverage failure.

## Dependence unit and uncertainty

Choose the highest unit at which observations plausibly share an outcome-generating shock. The default hierarchy is snapshot within contract, contract within contest or proposition family, contest within jurisdiction, and jurisdiction within election cycle. The primary fixed-horizon score gives each `event_id` one observation. Mutually exclusive candidate contracts, party and candidate versions of the same payoff, and Yes/No complements must not create independent replications.

For inference about future political cycles, resample election cycles, not ticks. A hierarchical bootstrap may sample cycles, then contests within sampled cycles, retaining all matched systems and linked contracts. With few cycles, report cycle-level score differences and leave-one-cycle-out sensitivity instead of a deceptively precise asymptotic interval. The ledger must publish both raw row count and counts of unique contracts, events, contests, and dependence clusters.

This dependence policy also controls weighting. State whether the estimand weights events equally, contests equally, or cycles equally. Publish alternatives as sensitivity analyses when substantively useful, but do not choose the weight that makes a preferred venue win.

## Missingness is a result

Assign exactly one primary missingness code at each stage and retain secondary flags. Useful codes include `not_listed`, `not_open_by_cutoff`, `raw_capture_failed`, `no_exchange_timestamp`, `stale_quote`, `one_sided_book`, `insufficient_depth`, `spread_too_wide`, `fee_schedule_unavailable`, `semantic_version_uncertain`, `comparator_unavailable`, `outcome_nonbinary`, and `outcome_unresolved`. Record the decision time and rule that produced the code.

The primary analysis uses complete registered event-horizon pairs that satisfy all admissibility rules, but its headline must include coverage: eligible universe size, captured count, point-extractable count, resolved-binary count, matched-baseline count, and losses by missingness code. Do not use the next available quote, closing price, eventual settlement, or a midpoint from a one-sided book to repair missing data.

Registered sensitivity analyses can treat intervals, vary only prospectively listed liquidity thresholds, or bound the effect of missing outcomes under explicit extreme assumptions. Multiple imputation is usually inappropriate for operational failures whose probability depends on liquidity, ambiguity, or impending surprise. The absence is informative about whether the venue was usable as a forecast source.

## Append-only audit trail and reproducible release

Implement the ledger as append-only event records plus deterministic derived tables. Every raw artifact receives a SHA-256 hash, retrieval timestamp, source URL or API request, content type, and storage pointer. Every normalized row records parser version, code commit, schema version, parent artifact hashes, and transformation parameters. Corrections append a superseding record linked to the original; they never mutate history silently.

Separate roles where feasible: one process captures data, one reviewer validates semantic versions and outcomes, and one reproducible script generates scores. Review a stratified sample of extreme probabilities, missing cases, disputes, rule changes, and each venue. Automated checks should reject snapshots after cutoffs, bids above asks, probabilities outside payout-normalized bounds, duplicate event-horizon keys, missing parent hashes, outcome fields present before resolution, and point forecasts produced from inadmissible intervals.

A public research release should contain the protocol and amendments; candidate-universe and coverage ledgers; data dictionary; admissible score table; outcome and exclusion log; raw-artifact manifest with hashes; transformation and scoring code; environment lockfile; and a report of registered and exploratory analyses. If venue terms prevent redistribution of raw data, publish hashes, request metadata, transformation code, and the narrowest lawful derived record, while documenting the reproducibility limitation.

The headline should remain narrow: for example, “At 30 days, venue X had lower mean Brier loss than the frozen baseline on 84 matched contracts spanning 37 contests and three cycles; 22% of the registered universe lacked admissible two-sided depth.” That sentence communicates skill, dependence, and coverage. “Prediction markets are calibrated” does not.

## Why it matters

Political prediction markets are easy to evaluate with hindsight because the event, the interesting timestamp, and the clean contracts become obvious after resolution. An operational ledger removes that privilege. It forces the researcher to say what would have been observed in real time, what could actually have been traded, which proposition the price referred to, and how much independent evidence supports the score.

The protocol also makes failure informative. Wide spreads, missing fee histories, semantic changes, disputes, and voids are not annoyances to delete; they measure the reliability of the venue as a forecasting instrument. A market can score well when clean and still be unusable across much of the political universe. Only a coverage ledger beside the score table reveals both truths.

## Sources

- Glenn W. Brier, [“Verification of Forecasts Expressed in Terms of Probability”](https://journals.ametsoc.org/doi/10.1175/1520-0493%281950%29078%3C0001%3AVOFEIT%3E2.0.CO%3B2), *Monthly Weather Review* 78(1), 1950, pp. 1–3 — original probability-score formulation; accessed July 10, 2026.
- Tilmann Gneiting and Adrian E. Raftery, [“Strictly Proper Scoring Rules, Prediction, and Estimation”](https://doi.org/10.1198/016214506000001437), *Journal of the American Statistical Association* 102(477), 2007, pp. 359–378 — theory of proper scoring rules and probabilistic forecast evaluation; accessed July 10, 2026.
- Polymarket, [“Prices & Orderbook”](https://docs.polymarket.com/concepts/prices-orderbook) and [“Orderbook”](https://docs.polymarket.com/trading/orderbook) — official documentation of bids, asks, midpoint display, the wide-spread last-trade exception, and book data; accessed July 10, 2026.
- Commodity Futures Trading Commission, [“Understanding Prediction Markets and Event Contracts”](https://www.cftc.gov/LearnandProtect/PredictionMarkets) — official explanation of fixed-payout contracts, fees, trading terms, and settlement transparency; accessed July 10, 2026.
- Federal Reserve Bank of St. Louis, [ALFRED](https://alfred.stlouisfed.org/) and [FRED series vintage-date API documentation](https://fred.stlouisfed.org/docs/api/fred/series_vintagedates.html) — authoritative infrastructure illustrating point-in-time economic-data vintages; accessed July 10, 2026.
- Joyce E. Berg, Forrest D. Nelson, and Thomas A. Rietz, [“Prediction Market Accuracy in the Long Run”](https://www.sciencedirect.com/science/article/pii/S0169207008000294), *International Journal of Forecasting* 24(2), 2008, pp. 285–300 — long-run Iowa Electronic Markets comparison and evaluation context; accessed July 10, 2026.

## Open questions

- What registered trade size, quote-age limit, and spread threshold best balance executability against coverage for Rome's first prospective ledger?
- Should the primary political estimand weight each contest or each election cycle equally when the number of cycles is small?
- Which venue APIs preserve exchange timestamps and fee-schedule history well enough for a genuinely prospective multi-venue comparison?
- Can an interval-valued proper score provide a useful primary estimand without rewarding venues for quoting uninformatively wide spreads?
- What lawful archival arrangement best preserves raw venue artifacts when redistribution terms are restrictive?
