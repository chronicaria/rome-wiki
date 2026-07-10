---
title: Political prediction-market hourly snapshot registry
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, political-markets, data-provenance, reproducibility, market-microstructure]
---

An hourly registry should preserve an immutable, independently auditable claim about what a political event contract meant and what could actually have been traded at a specified instant—not merely a displayed percentage.

Up: [[Political prediction markets]]

## Why this matters

A historical price is easy to quote and hard to prove. A venue can revise rules, migrate an API, clear an order book, change a fee schedule, rename a market, or return a last-trade field whose trade occurred long before collection. An hourly row that stores only `market, time, price` cannot distinguish those cases. It is unsuitable for [[Backtesting political forecasts without leakage]], cross-venue comparison, or claims about executable opportunities.

This registry is therefore a **capture protocol**, not a price table. Its atomic object is a sealed snapshot bundle containing raw evidence, a normalized contract manifest, full or declared-depth quotes, applicable costs, clocks, transformations, and validation results. Derived probabilities remain reproducible views over that bundle. Corrections append new versions; they never overwrite the evidence that supported an earlier result.

The design complements [[Versioning political event-contract semantics]], [[Order-book microstructure of event contracts]], and [[Fees and executable probability intervals]]. It does not replace them. The registry identifies exactly which semantic, book, and fee objects a published observation used.

## The unit of record

One row represents one venue contract outcome at one scheduled capture boundary. For a binary market this is normally the Yes claim. For a multi-outcome market, each token or outcome receives a child record beneath one event-family capture, because outcome books can arrive at slightly different times. The composite key is:

`registry_id = venue + canonical_contract_id + semantics_hash + scheduled_at_utc + outcome_id + capture_revision`

`scheduled_at_utc` is the intended top-of-hour boundary, not the time the network response arrived. `capture_revision` begins at zero and changes only when a replacement bundle is appended under the correction policy. A collector must not silently move an unavailable 14:00 observation to 14:07. It records the scheduled boundary, actual request clocks, and an explicit lateness or missingness state.

The registry should separate four layers:

1. **Raw evidence:** byte-preserved HTTP responses, headers, request parameters, rule documents, fee documents, and discovery objects.
2. **Normalized facts:** typed identifiers, clocks, lifecycle states, rules, outcomes, book levels, and fee parameters extracted under a named schema.
3. **Derived views:** best bid and ask, fixed-size volume-weighted execution prices, spread, quote age, and fee-aware intervals.
4. **Review state:** machine validations, semantic review, exceptions, supersession links, and admissibility.

Only the raw and normalized layers are immutable evidence. A derived view may be recomputed when code improves, but its code version, inputs, and output hash must be retained.

## Immutable capture schema

The canonical serialization should use UTF-8 JSON with a declared profile such as RFC 8785 JSON Canonicalization Scheme. Decimal quantities stay decimal strings; converting them through binary floating point can change hashes or rounding. Every nullable field is present, timestamps use UTC with explicit precision, arrays whose order is meaningful retain it, and set-like arrays are sorted by a specified key.

### Envelope and provenance

Each bundle includes:

- `schema_name`, `schema_version`, `canonicalization_profile`, and `hash_algorithm`;
- `registry_id`, `capture_revision`, `created_at_utc`, and collector organization or pseudonymous process identity;
- collector repository commit, dependency lock hash, executable or container digest, command/config hash, and host clock-synchronization status;
- exact request method, canonical URL, query parameters, safe request headers, response status, relevant response headers, start and end clocks, retry number, and rate-limit response;
- raw artifact location, MIME type, byte length, cryptographic content hash, and preservation timestamp;
- parent hashes for discovery, contract, rules, fees, access policy, and book artifacts;
- transformation name and commit, normalized-record hash, validation-report hash, and optional signature.

Credentials, cookies, account identifiers, and authorization headers never enter public artifacts. Their absence must not prevent reproduction of public endpoints. If an endpoint truly requires authentication, the record says so and preserves only non-secret request structure.

### Identity and contract meaning

Identity fields include venue, legal or product surface, series/event/market identifiers, outcome or token identifier, public slug, title, subtitle, ticker, category, and parent-child relationships. IDs are stored as strings exactly as returned; large blockchain token identifiers must never pass through a JavaScript number.

The semantic manifest stores the proposition, outcome labels, payout vector and unit, controlling resolution source and fallback hierarchy, observation deadline, scheduled close, early-close conditions, resolution and settlement rules, cancellation/void treatment, clarification text, dispute procedure, and all official rule URLs. It also records the raw rule-artifact hashes and a reviewer-written change classification.

The `semantics_hash` is the SHA-256 digest of a **semantic projection**, not of the complete evidentiary manifest. The complete manifest retains exact text, URLs, source hashes, retrieval facts, and reviewer annotations; the projection contains only normalized payoff-relevant fields plus `semantic_schema_version` and the normalization-code digest. It deliberately excludes mutable market data, page chrome, and retrieval clocks. Cosmetic wording may be excluded only by a versioned deterministic rule or an explicit reviewed equivalence assertion stored outside the hashed projection. Otherwise the changed source text receives a provisional new hash. This distinction prevents a reviewer editing a “cosmetic” label from changing the hash function after seeing prices.

The projection includes every field capable of changing which world states pay, when evidence counts, how much is paid, or what happens in a void. Its canonical bytes and digest must be stored alongside the full manifest and source-artifact hashes. Identical semantics hashes mean only that this registry version produced identical projections. They do not prove two contracts are legally fungible, and a changed normalization algorithm cannot reuse the old hash namespace without its version.

### Lifecycle and venue state

A snapshot stores both normalized lifecycle and raw venue states: scheduled, active, halted, closed, resolved, disputed, canceled, delisted, or unavailable. It also preserves order acceptance status, book-enabled state, tick size, minimum order size, position limits when public, collateral and settlement asset, negative-risk or conversion mode, and access-policy version.

These fields matter because a nonempty API object does not prove tradability. A closed market can retain a last price; a halted market can expose resting levels; a rule clarification can clear orders; an API migration can wipe books. Lifecycle transitions are event records with effective time, observation time, source hash, and predecessor state—not edits to old rows.

## Multiple clocks, not one timestamp

At minimum, the registry distinguishes:

- `scheduled_at_utc`: the preregistered hourly boundary;
- `request_started_at_utc` and `response_received_at_utc`: collector monotonic-wall-clock paired observations;
- `venue_timestamp_utc`: a server- or book-supplied time, with the raw unit retained;
- `last_trade_at_utc`: only when the venue supplies a trade timestamp;
- `rule_observed_at_utc` and `rule_effective_at_utc` when known;
- `ingested_at_utc` and `sealed_at_utc` for the archive pipeline.

The midpoint of request start and response receipt can be reported as an estimated observation instant. Half the round-trip time is an interval half-width under the assumption that the relevant server state was sampled sometime between those collector observations; it is **not** a network-error lower bound because request and response latency can be asymmetric and server processing is unknown. It must not be relabeled the venue timestamp. If a response lacks a server or book clock, the field is null and the collector interval is the only defensible observation interval. Record clock source, raw epoch unit, UTC offset, resolution, leap-second handling, Network Time Protocol offset if measured, monotonic duration, and whether wall time moved during capture.

Multi-request snapshots need a capture window. Contract metadata obtained at 14:00:00 and an order book obtained at 14:00:04 are not simultaneous. Store every component interval, the earliest start, latest receipt, and `bundle_skew_ms`. A study can then impose a prospective skew limit. Batch endpoints reduce but do not eliminate this problem: one response time does not establish that every embedded book was generated atomically.

## Quotes, depth, and executable views

Preserve the venue-native book before normalizing it. Polymarket's public CLOB book response documents bids, asks, sizes, tick size, minimum order size, negative-risk status, a timestamp, a `hash` described as the hash of the order-book summary, and last-trade price. The registry must preserve that venue hash as an opaque field; without a published canonicalization and verification procedure it is not equivalent to the archive's independently computed content hash. Kalshi's fixed-point order-book response exposes `yes_dollars` and `no_dollars` bid arrays; its official guide explains that a Yes bid at price $x$ corresponds to a No ask at $1-x$. A common schema must record that reconstruction rather than pretending both venues returned the same object.

Kalshi's current documentation is internally inconsistent about access: the “Orderbook Responses” guide says the endpoint needs no authentication, while the endpoint reference's generated examples include access headers and a 401 response. A reproducible registry should therefore record the tested base URL, authentication class, response status, and documentation snapshot rather than assert public accessibility from either page alone. Secret header values are never archived.

Each level stores native side, normalized side, outcome, exact price string, normalized payoff-unit price, exact quantity, order count if supplied, original array position, and transformation rationale. Preserve all returned levels when feasible. If collection requests a depth limit, store the limit and mark the book `truncated`; an absent deeper level is then unknown, not zero liquidity. Validate venue-documented sorting, but never sort the raw artifact.

The registry derives top-of-book only after verifying complement mechanics. For a normalized Yes claim, record best executable buy ask and best executable sell bid with available quantities. Also retain direct No quotes, because fee incidence, conversion rights, or contract mechanics can make a mechanically inferred complement misleading.

For each preregistered contract quantity $Q$, walk asks from lowest to highest to compute the gross cost of buying Yes and bids from highest to lowest to compute gross proceeds from selling Yes. If a venue reports notional rather than contracts, convert under a preserved unit rule before walking. Store levels consumed, fillable quantity, volume-weighted price, worst fill price, and residual unfilled amount. A book that cannot fill $Q$ produces `fillable=false`, not an extrapolated quote. A partial-fill view may be published separately, but it cannot masquerade as the registered all-or-none $Q$ view. Label all such calculations **instantaneous quoted execution**: cancellations, latency, queue changes, self-trade restrictions, minimum sizes, partial fills, and market reaction mean realized execution could differ.

Store last trade, midpoint, venue-displayed probability, volume, open interest, and event-level liquidity only as separate venue fields with their definitions. None substitutes for depth. A last trade needs its own time; cumulative volume is not current liquidity; open interest is not order-book size; and a midpoint is not directly executable.

## Fees and economic terms

Fees belong to a versioned object joined by `fee_schedule_hash`, not a mutable lookup applied later. Store the official schedule artifact, effective interval, market-specific fee object, maker/taker role, side, price-dependent formula, fixed parameters, quantity basis, currency, precision, rounding order, minimum or maximum, rebate rules, and any documented settlement charge. Preserve both the source expression and executable implementation tests.

Polymarket's changelog states that its REST fee calculation source moved to the market's `feeSchedule` object in March 2026; that is a warning against applying a category headline or today's documentation to old books. Kalshi schedules can specify formulas and special series multipliers. Therefore each fixed-size view reports gross and fee-adjusted cash flows under an explicit role. When role is unknowable, calculate separate maker and taker cases. Contingent rebates stay separate unless eligibility and amount are deterministic for the hypothetical fill.

For a hypothetical taker buy, apply fees to the walked gross debit under the schedule's actual base and rounding order; for a hypothetical taker sell, subtract fees from gross proceeds. Do not merely add one headline percentage to the volume-weighted price. Some formulas depend on price, quantity, side, role, market, or matched value, so fees may need to be calculated fill by fill before aggregation. Maker scenarios require a separately specified execution assumption because a resting quote is not guaranteed to fill.

Derived fields may include a before-fee executable interval and the fee-aware no-trade interval described in [[Fees and executable probability intervals]], but only after mapping all cash flows to the same $1-contingent-payoff convention. If payout units, collateral conversion, or side mechanics differ, publish cash-flow functions rather than a falsely comparable “probability.” Missing historical fee evidence yields `fee_adjustment_status=unavailable`; it never licenses a zero-fee assumption. Funding rails, taxes, collateral opportunity cost, withdrawal cost, and settlement latency are separate economic terms with inclusion flags, not silently folded into trading fees.

## Versioning and lifecycle rules

Three versions move independently:

1. `schema_version` changes when the registry representation or validation contract changes.
2. `semantics_hash` changes when payoff meaning changes.
3. `capture_revision` changes when the archive corrects a record about one scheduled observation.

Additive optional schema fields can be a minor version; a changed meaning, canonicalization rule, or required field needs a major version and migration specification. Original normalized records remain accessible. Migrations emit new hashes and links to their source records.

A semantic amendment closes the prior semantic series at the earliest supported effective time and opens a successor. Prices are not spliced across that boundary. A venue identifier migration or book reset can create a market-microstructure break without a semantic break; record both dimensions. A cosmetic wording change retains the semantics hash only after a preserved diff and review rationale. See [[Versioning political event-contract semantics]].

Corrections are append-only. A new revision contains `supersedes_registry_id`, reason code, discoverer, discovery time, changed fields, and evidence. The old revision becomes non-current but remains queryable. A deletion is represented by a tombstone with authority and reason, not physical erasure, unless law or safety requires restricted preservation.

## Validation and admissibility

Validation should fail closed. Structural checks confirm required fields, types, decimal syntax, canonical hashes, parent existence, URL normalization, clock ordering, and unique keys. Market checks reject or quarantine prices outside the normalized payout range, negative sizes, duplicate levels, invalid ticks, crossed books unless the venue state explains them, impossible complements, and derived totals that do not reproduce from levels.

Temporal checks flag excessive request latency, bundle skew, capture lateness, future venue timestamps, stale last trades, rule artifacts observed after the snapshot, and fee schedules outside their effective interval. Semantic checks require a second reviewer for new manifests, rule changes, ambiguous resolution sources, void logic, or cross-venue equivalence. Lifecycle checks ensure resolved or halted states are not labeled executable.

Every row receives `validation_state`: `passed`, `passed_with_warnings`, `quarantined`, or `missing`. It also lists individual check IDs, code version, severity, observed and expected values, and reviewer disposition. A warning never disappears from history when waived. The admissible research view should be generated from explicit policy—maximum lateness, maximum skew, minimum depth, fee availability, semantic review status—not from manual deletion of inconvenient rows.

Reproducibility requires a periodic restoration test: retrieve raw objects by content hash, rebuild the normalized record in a clean environment, recompute semantics and normalized hashes, recalculate fixed-size views, and compare byte-for-byte outputs. Hashes without tested retrieval are decorative.

## Publication and query contract

A public hourly table should expose only compact, interpretable fields: registry ID, venue and contract, semantic version, scheduled and observed clocks, lifecycle state, best bid/ask with sizes, registered fixed-size executable intervals, fee status, validation state, and artifact citations. It should link to the immutable manifest rather than embed all raw payloads.

Analysts must declare the registry release, schema major version, admissibility-policy hash, query code commit, and extraction time. A dataset release is a manifest of registry IDs and hashes, itself content-addressed. This prevents a later correction from silently changing an old paper's sample while allowing new work to select current revisions.

## Limitations

An hourly cadence misses intrahour information and cannot establish the exact book that a trader with different latency observed. Public APIs may be cached, delayed, incomplete, or semantically different from the user interface. Displayed orders can vanish before execution, and hidden liquidity is not observed. A cryptographic hash proves byte identity under an algorithm, not truth, completeness, contemporaneity, or legal equivalence.

The registry also does not turn price into belief. Quotes reflect access restrictions, risk tolerance, inventory, capital, incentives, manipulation, and resolution risk. It cannot recover unsubmitted beliefs or identify informed traders. Cross-venue comparison still requires matched propositions, payout units, resolution sources, clocks, access, fees, and executable depth. Long-term preservation depends on redundant storage, documented migrations, and continuing legal permission to archive source artifacts.

## Sources

- [Kalshi API, “Orderbook Responses”](https://docs.kalshi.com/getting_started/orderbook_responses) — official fixed-point response and Yes/No bid representation; its no-authentication statement conflicts with generated examples in the endpoint reference; accessed July 10, 2026.
- [Kalshi API, “Get Market Orderbook”](https://docs.kalshi.com/api-reference/market/get-market-orderbook) — official endpoint, depth parameter, fixed-point response schema, and complement explanation; accessed July 10, 2026.
- [Kalshi API changelog](https://docs.kalshi.com/changelog) — official record of API field removals, fixed-point field transitions, and endpoint changes; accessed July 10, 2026.
- [Polymarket Documentation, “Get order book”](https://docs.polymarket.com/api-reference/market-data/get-order-book) — official CLOB book response fields; accessed July 10, 2026.
- [Polymarket Documentation, “Orderbook”](https://docs.polymarket.com/trading/orderbook) — official sorting, depth, state-hash, batch, and estimated-fill documentation; accessed July 10, 2026.
- [Polymarket API introduction](https://docs.polymarket.com/api-reference/introduction) — official separation of Gamma discovery, Data analytics, and CLOB book APIs; accessed July 10, 2026.
- [Polymarket changelog](https://docs.polymarket.com/changelog) — official API migrations, CLOB V2 book reset, pagination changes, and market-specific fee-source change; accessed July 10, 2026.
- [RFC 8785, JSON Canonicalization Scheme](https://www.rfc-editor.org/rfc/rfc8785) — deterministic JSON serialization suitable for reproducible hashing.

## Open questions

- Should the canonical public archive preserve every full book hourly, or full books for benchmark markets plus declared-depth books elsewhere?
- What maximum bundle skew is tolerable for multi-outcome coherence tests, and should it vary with observed volatility?
- Which independent timestamping or transparency-log service best proves that a snapshot existed before a political outcome?
- How should restricted raw artifacts be preserved when terms permit analysis but not public redistribution?
- Can venue order-book hashes be reconciled with archive hashes well enough to diagnose caching without implying venue attestation?
