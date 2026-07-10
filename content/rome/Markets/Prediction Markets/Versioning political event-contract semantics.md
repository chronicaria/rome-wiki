---
title: Versioning political event-contract semantics
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, politics, quantitative-research, data-provenance, reproducibility]
as_of: 2026-07-10
desk: Political prediction markets
review_after: 2026-07-17
---

A political event-contract price series is reproducible only when every observation is bound to the exact proposition, rules, source hierarchy, and data representation that governed it at that time.

Up: [[Political prediction markets]]

Related: [[Political event-contract resolution designs]] · [[Political prediction-market contract families]] · [[Backtesting political forecasts without leakage]] · [[Prediction-market resolution risk]] · [[Order-book microstructure of event contracts]]

## A price is inseparable from its payoff meaning

A contract ticker and a timestamp do not fully identify a forecast. A binary price refers to a contingent payoff, and the payoff depends on text: the question, definitions, measurement window, terminal act, named resolution source, fallback hierarchy, deadlines, cancellation rules, and venue-wide rules incorporated by reference. If any of those change, the same numerical series may no longer describe the same random variable.

This is especially important in politics. “Wins the presidency” might mean a news call, certified state results, a majority of appointed electors, the congressional electoral-vote count, or inauguration. “Controls the House” might turn on election winners, sworn members, caucus affiliation, or the party of the elected Speaker. A venue clarification about a withdrawal, postponed election, acting officeholder, recount, or source deadline can alter which states of the world pay Yes without changing the short market title.

The archival unit should therefore be a **semantic observation**, not merely a price row. It binds an observed book or trade to a versioned contract specification. The economic time series can remain continuous only while that specification is materially equivalent. This complements [[From event-contract prices to probabilities]]: executable-price corrections are necessary, but they cannot rescue a series whose payoff changed underneath them.

## The minimum archival capture

Capture should be append-only. A later retrieval must never overwrite what the collector saw earlier. At each scheduled observation, preserve four linked layers.

**Identity.** Record venue, API environment, event identifier, market identifier, ticker or slug, outcome-token or instrument identifiers, parent series or collection, and any venue-native condition or question identifier. Polymarket, for example, distinguishes an event from its markets and documents a condition ID plus a question ID derived for resolution. These identifiers help join records, but they do not prove semantic equivalence: a regenerated question ID, migrated contract, or new market can express a closely related proposition, while stable display metadata can still be edited.

**Specification.** Preserve the exact question and subtitle; full market rules; all definitions; resolution source and fallback sources; open, close, expected-expiration, latest-expiration, determination, challenge, and settlement times; early-close authority; void or cancellation conditions; payout convention; incorporated venue rules and their effective version; and all visible clarifications. Save both a normalized machine record and the original representation. The original may be an HTTP response body, rendered HTML, PDF, or signed/onchain object. The normalized record supports comparison; the original permits later audit of the normalization.

**Market state.** Preserve retrieval time in UTC, venue timestamps, sequence numbers where present, status, bids, asks, depth, trades, volume, open interest where defined, fee parameters, price representation, and API field definitions. Kalshi's official lifecycle documentation distinguishes open, close, expected-expiration, and latest-expiration fields and documents transitions including deactivation, reactivation, determination, amendment, and finalization. Its changelog also records field deprecations and a split between live and historical endpoints. Those are not software trivia: they determine what a historical collector actually observed and how a value must be interpreted.

**Provenance.** Record request URL and parameters, HTTP retrieval headers where lawful and useful, collector version, parser version, normalization-schema version, capture time, content digest, storage object identifier, and the derivation chain from raw object to analytic row. Include errors, retries, gaps, access limitations, and whether the artifact came directly from a venue, an official resolution authority, an institutional archive, or a secondary reconstruction.

A screenshot is helpful visual evidence but is not a sufficient primary record. It often omits incorporated rules, structured identifiers, time zones, hidden status fields, fee configuration, and response headers. Conversely, JSON alone may omit rendered clarification banners or linked rule PDFs. For consequential observations, capture both structured and human-visible surfaces when permitted.

## Semantic manifests and hashes

A **semantic manifest** is a canonical, explicit representation of the proposition that determines payout. It should contain semantic fields only, not volatile prices, page layout, popularity counters, or retrieval metadata. A practical manifest includes:

1. canonical event proposition and outcome labels;
2. jurisdiction and relevant office, actor, measure, or decision;
3. measurement interval and all operative deadlines;
4. terminal act that makes the proposition true or false;
5. named resolution authority, source order, and fallback procedure;
6. treatment of recounts, appeals, postponement, cancellation, replacement, death, withdrawal, ties, acting service, and source silence where applicable;
7. payout, void, and exceptional-settlement states;
8. incorporated rulebook identifiers and effective versions; and
9. clarification identifiers in force at the observation time.

The **semantics hash** is a cryptographic digest of a deterministic serialization of that manifest. It is a fingerprint, not an oracle. Two collectors will obtain the same hash only if they use the same canonicalization rules: fixed field order, Unicode normalization, explicit nulls, normalized timestamps and time zones, stable numeric encoding, and a declared schema version. The record should name the hash algorithm and canonicalization profile, for example `sha256` plus `event-contract-semantics-v1`.

Raw-artifact hashes and semantics hashes serve different purposes. A raw hash changes if a venue fixes punctuation, reorders JSON fields, or alters page chrome. A semantics hash should remain stable across changes that do not affect payoff meaning. That stability requires human or rule-based normalization, which introduces judgment. Preserve the raw objects and transformation code so another researcher can dispute the judgment. Never claim that identical hashes prove legal identity or that different hashes necessarily imply an economic break.

The safest pattern is three linked digests: a digest of each raw artifact, a digest of the normalized semantic manifest, and a digest or version identifier for the transformation code. The first proves byte identity, the second supports series grouping, and the third explains how the first became the second.

## Clarification events are first-class data

A clarification is an event with its own publication time, effective time if different, source artifact, text, and relationship to earlier semantics. Do not silently fold it into the current rules. Append a clarification record and classify its effect.

**Non-semantic clarification.** It restates an already compelled reading, corrects a harmless typo, adds an example that excludes no plausible state, or improves source navigation. The raw artifact hash changes, but the semantic manifest and series may remain unchanged. The archive should still record the event because traders may have learned from the clarification even if the analyst concludes that payoff meaning did not change.

**Interpretive clarification.** It resolves genuine ambiguity among plausible readings without presenting itself as a new proposition. The venue may view this as continuity, yet market participants' payoff beliefs can jump. Preserve the pre- and post-clarification manifests, give the event an uncertainty flag, and treat the timestamp as a candidate structural break in event studies. A research series can retain a common family identifier while using separate semantic-version identifiers.

**Semantic amendment.** It adds or removes outcome states, changes a deadline or source hierarchy, alters treatment of an edge case, changes payout or cancellation logic, or substitutes a materially different terminal act. This requires a new semantics hash and normally a hard series break. Prices before and after the amendment forecast different propositions even if the venue keeps the same ticker.

**Administrative or data clarification.** It changes API fields, display rounding, timestamp definitions, lifecycle status, or historical-access routing without changing payoff. This may require a data-schema break rather than a semantic break. Kalshi's changelog demonstrates why collectors need this separate axis: changes in fixed-point fields, deprecated liquidity fields, and historical endpoints alter measurement while leaving the listed event proposition conceptually intact.

Classification should include a written rationale and reviewer status. When evidence cannot distinguish restatement from amendment, the conservative choice is to avoid splicing and label the relationship unresolved. A semantics hash must not launder uncertainty into false precision.

## When to break a series

Maintain three identifiers: a stable **contract-family ID** for the broad forecasting question, a **semantic-version ID** for an exact payoff definition, and a **data-regime ID** for the collection and field schema. This permits related analysis without pretending every observation is interchangeable.

A hard semantic break is required when the set of world states producing a payout changes; the payout attached to a state changes; the controlling observation window changes; the terminal authority or binding source changes materially; a fallback becomes operative in a way not already encoded; or the venue voids, relists, migrates, or replaces the contract with non-equivalent terms. The new segment starts at the clarification's effective time—or, if that time is uncertain, at the earliest time the changed rule could have governed, with the uncertainty retained.

A data-regime break is required when price units, precision, side conventions, depth definitions, fee fields, status meanings, endpoint populations, or timestamp semantics change. Analysts may bridge such a break only with a documented, tested conversion. A visual chart can connect the segments, but statistical code should not concatenate them by default.

Some changes produce both breaks. A relisted contract can combine new rules with a new identifier and a changed order book. A venue amendment can cancel resting orders, causing a microstructure discontinuity even if reviewers judge the proposition equivalent. The archive should represent these as separate facts rather than forcing one label to do all the work.

## Reproducible backtests

Versioning turns [[Backtesting political forecasts without leakage]] into an executable audit. Freeze an event-universe manifest before scoring. For every scheduled cutoff, select only artifacts whose `available_at` time is no later than that cutoff. Join the price observation to the semantic version and data regime in force then. Preserve missing observations as missing; do not fill them from a later chart, current contract page, or revised API response.

Outcomes must also be versioned. Record the venue settlement, settlement revision or dispute state, official evidence artifact, evidence publication time, and the analyst's mapping from evidence to the archived proposition. Score the contract that existed at the cutoff, not a modern paraphrase. Voids, partial payouts, amendments, unresolved disputes, and missing authoritative evidence should be separate outcome classes before any binary reduction.

A reproducibility bundle should contain:

- the frozen event-universe and exclusion manifest;
- immutable raw-artifact inventory with digests and retrieval times;
- semantic manifests, hashes, version links, and clarification ledger;
- normalized quote table tied to data-regime versions;
- outcome and resolution-evidence table;
- transformation and scoring code with dependency versions;
- test results for time ordering, joins, duplicate identifiers, hash recomputation, and break handling; and
- a machine-readable run manifest naming every input object and output digest.

The principal tests are temporal and semantic. Assert that artifacts were publicly available by the cutoff; that each observation maps to exactly one semantic version and data regime; that a semantic amendment cannot be crossed by an ordinary forward fill; and that the scoring target matches the archived payout proposition. Rerun the analysis from raw objects in a clean environment. A result is not reproducible merely because the final CSV and notebook execute together.

Sensitivity analysis should report at least two policies when clarification classification is debatable: strict segmentation, which excludes cross-break comparisons, and continuity, which retains observations under an explicitly defended equivalence judgment. If conclusions change, the research finding depends on semantics policy and should say so.

## Provenance as a graph

W3C PROV offers a durable conceptual model: entities, activities, and agents connected by generation, use, derivation, and attribution. Applied here, a raw venue response is an entity; capture and normalization are activities; the venue, resolution authority, collector, and reviewer are agents; the normalized manifest was derived from raw artifacts; and the analytic row was generated by a named transformation. This graph is more informative than a single `source_url` column.

Web archival formats solve a different part of the problem. ISO 28500 specifies WARC, a container for aggregated web resources and associated metadata. Memento's HTTP framework provides a vocabulary for time-based access to prior resource states. Either can improve durability, but neither guarantees that a JavaScript application, authenticated endpoint, linked rulebook, or onchain clarification was captured completely. Archival success must be checked artifact by artifact.

Provenance should also preserve negative facts: robots or access limits, unavailable endpoints, incomplete books, parser warnings, clock uncertainty, and fields inferred rather than observed. Durable analysis distinguishes `observed`, `venue-derived`, `collector-derived`, `manually-classified`, and `unknown`. It never upgrades a reconstruction into a contemporaneous observation merely because the reconstruction is plausible.

## Why it matters

Without semantic versioning, a clean-looking historical series can contain several incompatible forecasts. That contaminates calibration, creates false event reactions, disguises resolution risk, and turns apparent cross-venue arbitrage into a comparison of different payoffs. It also makes corrections dangerous: replacing an old rules page with the current page can rewrite the object supposedly forecast in the past.

The discipline is modest but powerful: preserve the bytes, extract an explicit proposition, hash the canonical manifest, log every clarification, break series when meaning or measurement changes, and retain the full derivation graph. The result is not certainty about every ambiguous rule. It is an auditable record of what was known, what was judged, and which conclusions survive alternative judgments. This is research infrastructure, not trading or legal advice.

## Sources

- [Kalshi API Documentation, “Market Lifecycle”](https://docs.kalshi.com/getting_started/market_lifecycle) — official status transitions and distinctions among open, close, expected-expiration, latest-expiration, determination, amendment, and settlement fields; accessed July 10, 2026.
- [Kalshi API Documentation, “API Changelog”](https://docs.kalshi.com/changelog) — official record of endpoint partitioning, field deprecations, fixed-point migrations, and other data-regime changes; accessed July 10, 2026.
- [Kalshi API OpenAPI specification](https://docs.kalshi.com/openapi.yaml) — official machine-readable API schema for preserving field definitions with a collection version; accessed July 10, 2026.
- [Polymarket Documentation, “Markets & Events”](https://docs.polymarket.com/concepts/markets-events) — official distinction between events and markets and definitions of condition and question identifiers; accessed July 10, 2026.
- [Polymarket Documentation, “Fetching Markets”](https://docs.polymarket.com/market-data/overview) — official discovery and market-metadata interface; accessed July 10, 2026.
- [W3C, “PROV-O: The PROV Ontology”](https://www.w3.org/TR/prov-o/) — W3C Recommendation defining entities, activities, agents, derivation, attribution, and generation relationships; April 30, 2013.
- [W3C, “PROV-DM: The PROV Data Model”](https://www.w3.org/TR/prov-dm/) — W3C Recommendation for provenance concepts and relations; April 30, 2013.
- [ISO, “ISO 28500:2017 — WARC file format”](https://www.iso.org/standard/68004.html) — official standard record for aggregating archived web resources and metadata.
- [IETF RFC 7089, “HTTP Framework for Time-Based Access to Resource States — Memento”](https://www.rfc-editor.org/rfc/rfc7089) — open standard for identifying and negotiating archived resource states; December 2013.
- [Library of Congress, “Sustainability of Digital Formats: WARC”](https://www.loc.gov/preservation/digital/formats/fdd/fdd000236.shtml) — durable institutional description of WARC's preservation purpose and characteristics.

## Open questions

- Which canonicalization profile should Rome adopt so independent collectors can recompute identical semantics hashes?
- Should an interpretive clarification always create a new semantic version even when reviewers judge the payoff set unchanged?
- What evidentiary threshold should permit continuity across a missing or inaccessible rules artifact?
- How should onchain and offchain clarification timestamps be reconciled when publication, indexing, and trader visibility differ?
- Which raw venue artifacts can be preserved and redistributed consistently with access, copyright, and privacy constraints?
