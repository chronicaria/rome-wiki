---
title: Delisting and survivorship bias in political market datasets
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, politics, datasets, survivorship-bias, backtesting]
---

A political-market backtest is auditable only if its universe is frozen from point-in-time listing records and every later exit remains visible; rebuilding the sample from surviving markets changes both the population and the question being estimated.

Up: [[Political prediction markets]]

Related: [[Missing-data policy for political market backtests]] · [[Backtesting political forecasts without leakage]] · [[Political prediction-market calibration ledger]] · [[Versioning political event-contract semantics]] · [[Voids cancellations and postponements in event contracts]]

## The disappearing denominator

Imagine downloading every political market a venue currently exposes, retaining those marked resolved, and calculating Brier scores from their final pre-election prices. The arithmetic can be flawless while the result is badly selected. Markets that were delisted, archived out of search, replaced after a rules problem, suspended indefinitely, or never given a binary determination may be absent before scoring begins. The observed table contains the contracts that survived the venue's lifecycle and the researcher's filters, not necessarily the contracts a user could have encountered at the historical forecast date.

This is survivorship bias in a prediction-market setting. The familiar financial analogy is literal but incomplete. Shumway's study of CRSP showed that omitted delisting returns were large and that ignoring them biased tests of market performance. Political contracts differ from common stock because an exit need not generate a return that can simply be appended. A contract can settle normally after trading closes, refund at a special value, migrate to a replacement, become semantically unusable, remain disputed at the analysis freeze, or disappear from a catalog while positions still exist. The common principle is that a terminal inconvenience must not erase an ex ante observation. The remedy depends on what exited and on the estimand.

Three populations are easily confused:

1. **Listings:** every contract that satisfied a prospectively stated universe rule at a historical entry time.
2. **Forecast observations:** listings for which a valid, timely, and economically interpretable price was observable at the chosen horizon.
3. **Scorable outcomes:** forecast observations with a terminal label appropriate to a named scoring rule.

The second is generally a subset of the first and the third a subset of the second. Reporting only the third makes exclusions look like nature rather than a property of the venue, archive, and protocol. A clean score can coexist with poor coverage.

## Delisting is a lifecycle event, not a row deletion

“Delisted” should mean a recorded transition, not “the API did not return it today.” Current venue interfaces encode several states, but their taxonomies are not interchangeable. Kalshi's published OpenAPI specification currently lets the market-list endpoint filter `unopened`, `open`, `closed`, or `settled` markets; it separately directs researchers to historical endpoints for markets settled before a moving historical cutoff. Other fields and lifecycle documentation describe timestamps and processes such as close, determination, amendment, and settlement, but those concepts should not be misreported as one market-status enumeration. Polymarket's Gamma search schema exposes fields such as `active`, `closed`, and `archived`. These are useful operational facts, but neither schema guarantees that an unfiltered current query reconstructs every object historically visible under an earlier taxonomy or product interface.

The archive therefore needs its own append-only lifecycle table. At minimum, record immutable venue and contract identifiers; parent event or series identifiers; first-seen and last-seen timestamps; listing, opening, scheduled close, actual close, determination, dispute, amendment, finalization, settlement, delisting, and archival times; every status value with retrieval time; raw response hashes; and replacement or migration links. Distinguish a venue-supplied timestamp from the researcher's first observation. “First seen on June 2” does not prove “listed on June 2.” Likewise, failure to retrieve after July 1 does not prove delisting on July 1.

An exit taxonomy should preserve mechanism:

- ordinary close followed by ordinary binary settlement;
- early close under the existing rules;
- temporary halt or suspension;
- administrative delisting with positions still outstanding;
- archive or search suppression after settlement;
- contract amendment or semantic break;
- cancellation or nonbinary discharge;
- replacement, relisting, or identifier migration;
- dispute or unresolved status at the analysis freeze;
- catalog loss whose venue cause is unknown;
- collector failure, which is not a venue lifecycle event.

These categories can overlap. A market may be halted, amended, reopened under a replacement identifier, then finalized. Flattening the history to `active=false` discards the sequence needed to decide whether a historical price and final label refer to the same proposition. [[Versioning political event-contract semantics]] supplies the companion rule: a changed payout mapping creates a semantic break even when the venue preserves the ticker.

## Freeze the opportunity set before outcomes are known

The strongest defense is prospective universe construction. Define an entry rule in terms of information available at the time: venue, political category, jurisdiction, contract family, listing interval, minimum time before scheduled close, and any liquidity threshold. Run an append-only discovery collector on a fixed cadence. When a listing first satisfies the rule, create a permanent candidate row and retain the raw listing artifact. Later status changes may alter eligibility for a particular analysis but never erase candidacy.

Historical reconstruction is weaker but can still be disciplined. Query endpoints explicitly capable of returning closed or archived objects; paginate until exhaustion; enumerate parent events and series as well as markets; reconcile identifiers found in trades, price histories, settlement records, sitemaps, rule filings, or archived public pages; and log every query parameter and retrieval date. Treat the union as a discovered frame, not a proven census. A researcher cannot infer completeness merely because an API returns many rows.

Snapshots matter because venue schemas and defaults evolve. Polymarket separates discovery through Gamma from order-book and price history through the CLOB API. Kalshi partitions older settled markets and their candlesticks from live endpoints at a documented historical cutoff. A collector that queries only the live market endpoint can therefore omit records for an operational reason even when the historical API retains them. An auditable collector preserves the cutoff response, exact schema or documentation version used, request and response bodies, pagination cursors, HTTP status, and clock. Re-running new code against today's interface is a replication of today's reconstruction, not necessarily of the original opportunity set.

The manifest should be immutable in membership but extensible in facts. Corrections append a new assertion with provenance rather than overwriting the old one. If two venue identifiers represent a replacement, retain two contract records and a typed edge such as `replaces`, `semantic_equivalent_to`, or `successor_with_changed_terms`. Do not splice their prices until a documented semantic review establishes equivalence; even then, preserve the original segments.

## Name the estimand before treating exits

An estimand is the quantity the analysis claims to learn. Exit handling cannot be chosen sensibly without it.

The **resolved-contract accuracy estimand** asks: among eligible contracts that produced a valid binary outcome by a fixed freeze date, how accurate were eligible forecasts? A Brier mean may be well defined here. But it is conditional on resolution and price availability. It must be labeled as such and paired with counts and exit rates from the full candidate frame. It does not establish how the venue performs for all listed political questions.

The **listed-opportunity estimand** asks: what forecasting service did every qualifying listing offer at the stated horizon? This includes whether an executable quote existed, whether rules remained stable, whether the contract reached timely finality, and whether a binary score became possible. No single proper score naturally combines probability error with absence, void, and delayed settlement. A defensible report presents a vector: coverage, quote availability, semantic-validity rate, binary-resolution rate, settlement latency, and conditional accuracy. A separately declared decision model may attach costs to each failure.

The **political-event estimand** asks how well markets forecast an external event rather than venue payout. It requires a prospective event ontology and authoritative real-world label. If a venue delists a contract but the political event remains observable, the event may still have a label; however, a missing forecast does not become present. Nor may a researcher silently substitute the external result for a venue payout when the historical price priced a narrower deadline or resolution source.

The **trading-strategy estimand** asks what a historical agent could have earned under executable rules. Here delisting treatment must follow actual position discharge, fees, capital lockup, halted trading, and timing. A refund is not a binary forecast outcome, but it is an economic cash flow. A replacement contract is not automatically a continuation of the position. Mark-to-midpoint assumptions after the book disappears can invent an exit that no trader possessed.

Finally, the **venue reliability estimand** treats lifecycle failures themselves as outcomes. Delisting, amendment, dispute, nonbinary settlement, or excessive latency can be measured per listing and modeled by contract family, horizon, venue, and cycle. This is often the most honest way to use cases that cannot enter an accuracy score.

## How selection changes the answer

Let $U_i=1$ indicate that contract $i$ entered the frozen universe, $Q_i=1$ that an eligible quote exists, and $R_i=1$ that it yields a valid binary label by the freeze. Let $L_i$ be its forecast loss. The quantity usually reported is

$$
E[L_i\mid U_i=1,Q_i=1,R_i=1].
$$

That is not generally $E[L_i\mid U_i=1]$. Indeed, $L_i$ is undefined for some absent or nonbinary cases unless a broader decision loss has been specified. The honest response is not to force every row into Brier loss, but to separate identification of conditional accuracy from measurement of coverage and operational outcomes.

Selection becomes bias when the conditional result is represented as a broader one and the selection mechanism is related to difficulty or forecast error. Politically unusual events may generate ambiguous rules, sparse books, amendments, or delayed official sources. Those same features can correlate with extreme uncertainty and poor forecasts. Deleting them makes surviving contracts appear easier. Conversely, if venues disproportionately retire low-interest, easy-to-predict contracts, survivor-only scores could look worse. The direction is empirical, not guaranteed; the loss of identification is the central fact.

Missing-data language sharpens the diagnosis. Selection is **missing completely at random** only under a strong claim that exit and missingness are unrelated to observed and unobserved score determinants. It may be **missing at random** conditional on recorded variables if, after controlling for contract family, horizon, liquidity, spread, event type, and rules complexity, selection no longer depends on unobserved loss. It is **missing not at random** when exit depends on unobserved difficulty, latent outcome ambiguity, or contemporaneous market conditions even after those controls. Delisting and semantic failure are plausible MNAR processes, so complete-case analysis is not automatically repaired by adding a few covariates.

Inverse-probability weighting estimates each row's probability of remaining observable and weights survivors by its inverse. This can transport conditional results toward a target frame only under positivity, correct selection modeling, and conditional exchangeability assumptions. If a class of ambiguous contracts never resolves, its score cannot be recovered by placing enormous weight on unlike survivors. Weight diagnostics, truncation choices, and effective sample size must be reported.

Heckman-style selection models make stronger functional-form and exclusion assumptions. They are not magic corrections. A credible exclusion variable must affect lifecycle observation without directly affecting forecast loss after covariate adjustment—difficult in market operations, where outages, complexity, and liquidity can affect both. Pattern-mixture and selection models can instead support sensitivity analysis: posit how unobserved losses among exited contracts differ from comparable survivors and show how conclusions change.

Partial identification is often clearer. Bound the result under explicit limits on missing-case performance, or report tipping points: how unfavorable would the unscored group need to be to reverse a venue ranking? Lee's trimming work is an important methodological model for deriving bounds from selection assumptions, though its treatment-effect setup does not transfer automatically to forecast scores. The lesson is to state which monotonicity or ordering assumption creates the bound.

## An auditable backtest protocol

An audit should be able to replay membership and every exclusion without trusting a final CSV.

**1. Register the target.** State the venue and contract families, political ontology, calendar interval, forecast horizons, price convention, outcome convention, analysis freeze, estimands, and lifecycle policy before examining comparative scores.

**2. Materialize a candidate ledger.** Give every first-eligible listing a stable research ID. Preserve raw discovery artifacts and their hashes. Never generate the denominator from final outcomes or today's active catalog.

**3. Reconstruct lifecycle histories.** Store status transitions as events, not overwritten columns. Keep venue states, interface visibility, trading availability, rule validity, and payout status separate.

**4. Build a disposition table.** Every candidate receives a mutually exclusive primary analysis disposition—scored, no eligible quote, pre-horizon delisting, semantic break, nonbinary discharge, unresolved at freeze, duplicate proposition under the registered rule, or data failure—plus nonexclusive lifecycle flags. Publish counts by venue, cycle, family, and horizon.

**5. Derive score tables from the ledger.** A score row must point back to the candidate, exact rule version, point-in-time quote artifact, price transformation, official outcome artifact, and review decision. Derived datasets should be reproducible code outputs, not hand-curated survivors.

**6. Run attrition diagnostics.** Compare included and excluded candidates on variables known before exit: age, time to event, spread, depth, trade count, volume definition, rules length, source type, event category, and price extremity. Model selection only as a diagnostic unless identifying assumptions are defended.

**7. Publish a sensitivity ladder.** Show the primary conditional score; full-frame coverage and lifecycle rates; results under alternate but prospective freeze dates; worst/best or bounded missing-case scenarios where meaningful; inverse-probability estimates with diagnostics if justified; and leave-one-exit-pattern-out results. Never describe imputed forecasts as venue observations.

**8. Test catalog completeness.** Reconcile independent venue surfaces and report unmatched identifiers. A current search endpoint, price-history endpoint, and settlement feed may disagree. Preserve the disagreement rather than choosing the cleanest source silently.

**9. Make exclusions inspectable.** Release, subject to rights and safety, a row-level disposition ledger with identifiers, timestamps, reason codes, evidence URLs, and reviewer status. When raw data cannot be redistributed, publish hashes, retrieval recipes, schema, aggregate checksums, and enough provenance for an authorized replicator.

Useful audit invariants include: no candidate row is physically deleted; every scored row has exactly one candidate parent; every exclusion has a reason known by the freeze or is explicitly retrospective; replacement edges do not merge identities; the sum of disposition counts equals the frozen denominator; and rerunning the derivation from archived inputs reproduces every reported table.

## Why it matters

Survivor-only datasets reward administrative cleanliness without showing that they do so. A venue may look calibrated because the hardest-to-resolve propositions disappeared. A strategy may look profitable because a delisted position receives an imaginary last price. A cross-venue comparison may favor the platform whose API makes old failures hardest to discover. A model trained on resolved cases may learn the politics of easy settlement rather than the universe it will face live.

The practical answer is not to ban conditional scores. It is to put them in their proper place. Preserve the ex ante denominator, make lifecycle exit a measured outcome, and name the population behind every statistic. Then calibration can describe forecast accuracy among scorable contracts while coverage and reliability describe how often the institution produced something scorable. Together they answer the question users actually care about: not merely “how accurate were the survivors?” but “what forecasting instrument was available before anyone knew which contracts would survive?”

## Sources

- [Shumway, “The Delisting Bias in CRSP Data,” *Journal of Finance* 52(1), 1997](https://doi.org/10.1111/j.1540-6261.1997.tb03818.x) — original empirical demonstration that omitted delisting returns bias performance tests.
- [Heckman, “Sample Selection Bias as a Specification Error,” *Econometrica* 47(1), 1979](https://www.jstor.org/stable/1912352) — foundational selection-model treatment and its identifying structure.
- [Little and Rubin, *Statistical Analysis with Missing Data*, third edition](https://onlinelibrary.wiley.com/doi/book/10.1002/9781119482260) — standard framework for missing-data mechanisms and sensitivity analysis.
- [Lee, “Trimming for Bounds on Treatment Effects with Missing Outcomes,” NBER Technical Working Paper 277](https://www.nber.org/papers/t0277) — partial-identification approach under explicit selection assumptions.
- [Kalshi OpenAPI specification](https://docs.kalshi.com/openapi.yaml) — official machine-readable API schema, including the current market-status filter and directions to historical endpoints; accessed July 10, 2026.
- [Kalshi API changelog](https://docs.kalshi.com/changelog) — official record of the live/historical data partition and the endpoints introduced for older settled markets; accessed July 10, 2026.
- [Polymarket API introduction](https://docs.polymarket.com/api-reference/introduction) — official separation of Gamma discovery, CLOB market data, and Data API domains; accessed July 10, 2026.
- [Polymarket public search endpoint](https://docs.polymarket.com/api-reference/search/search-markets-events-and-profiles) — official search schema exposing active, closed, archived, and closed-market handling; accessed July 10, 2026.

## Open questions

- Do Kalshi and Polymarket provide a contractually complete, append-only public census of all historical listings, or must completeness remain an empirically audited claim?
- Which pre-exit covariates best predict political-contract delisting, amendment, and nonbinary settlement without themselves using post-outcome information?
- What bounds on comparative Brier performance remain informative when an entire contract family has no binary outcomes?
- How should an archive distinguish deliberate search suppression from ordinary post-settlement archival when the venue exposes only current state?
- Can independent researchers maintain cryptographically verifiable listing manifests without redistributing venue data beyond applicable rights?
