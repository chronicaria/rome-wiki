---
title: Commodity data and contract registry
created: 2026-07-10
source: llm
status: seed
tags: [markets, commodities, quantitative-research, data, derivatives]
as_of: 2026-07-10
desk: US markets and commodities
review_after: 2027-01-10
---

A usable commodity registry records what an observation physically and legally represents—not merely its ticker—so that prices, balances, and positions cannot be joined across incompatible grades, locations, dates, units, or publication vintages.

Up: [[US Markets and Commodities]]

Related: [[Futures continuous contracts and roll bias]] · [[Calendar spreads in commodity futures]] · [[Commodity curves carry and convenience yield]] · [[Point-in-time data and look-ahead bias]]

## Why a registry is part of the model

Commodity research is unusually vulnerable to false equivalence. “Oil,” “gas,” “wheat,” or “copper” is not a single observable. A series can describe a physical transaction, an assessed spot price, a futures settlement, a survey estimate, an inventory level, a flow during a reference period, or a position transformed into futures equivalents. Two columns with similar names may differ by grade, delivery point, contract month, unit, frequency, seasonal adjustment, release lag, or revision policy.

A registry is therefore not clerical documentation added after analysis. It is a compact statement of the economic object used by the analysis. The schema determines which joins, differences, ratios, and backtests are admissible. When a researcher changes the registry entry—perhaps because an exchange altered a contract rule or an agency revised a survey—the change is a potential model change and should trigger review.

The minimum design has four layers:

1. **Identity:** provider, dataset, series or contract identifier, commodity, grade, location, and unit.
2. **Time:** reference period, observation timestamp, release timestamp, revision or vintage, trading session, and expiry.
3. **Transformation:** adjustment, aggregation, conversion, roll rule, currency conversion, and missing-value treatment.
4. **Rights and lineage:** retrieval URL, methodology URL, access date, redistribution constraint, checksum or snapshot identifier, and downstream consumers.

The point is not to force every dataset into one universal format. It is to preserve the differences required to interpret each dataset correctly.

## The canonical record

Each raw series or instrument should receive a stable internal key that does not depend on a vendor display label. A practical key can combine provider, dataset, native identifier, and version. The record should retain the native label because it is useful for audits, but code should join on the stable key.

### Economic identity

Record the commodity family and the exact deliverable or measured object. For a futures contract this includes exchange, rulebook chapter, product code, contract size, quotation unit, currency, delivery grade, location, delivery mechanism, listed months, last trade date, and settlement method. “WTI future” is inadequate without the contract and expiry; [[WTI versus Brent crude oil]] explains why benchmark substitution can change the economic exposure.

For physical and government series, record geography and boundary. EIA supply statistics can distinguish production, refinery input, imports, exports, stock change, product supplied, and adjustment. These terms are parts of an accounting system, not synonyms for demand. USDA balance sheets distinguish beginning stocks, production, imports, domestic use, exports, and ending stocks for a crop and marketing year. A registry should preserve the agency's own definition and link to it rather than translating everything into an informal label.

### Units and dimensions

Store both the quoted unit and a machine-readable physical dimension. Dollars per barrel, cents per bushel, dollars per short ton, and cents per pound cannot be compared before contract multipliers and conversions are applied. Flow and stock units also differ: barrels per day is a rate; thousand barrels is a level. Heating value introduces another layer for natural gas and power.

Every conversion needs a named factor, source, effective dates, and direction. A silently hard-coded multiplier can survive for years after a contract specification changes. Preserve raw values and calculate normalized values downstream so the audit can be repeated.

### Location, quality, and optionality

Physical value depends on where, when, and in what condition delivery occurs. Store delivery point, origin or destination, grade specifications, tolerances, quality differentials, incoterm or freight responsibility when known, and any seller or buyer options embedded in delivery rules. Those fields explain part of [[Physical commodity basis]]: a spread can compensate for transport, processing, timing, financing, quality, or delivery optionality rather than express a view on a generic commodity.

Location fields need controlled identifiers as well as human labels. A hub, terminal, port, pipeline zone, warehouse, state, Petroleum Administration for Defense District, or crop-reporting district are different geographies. Geospatial crosswalks should be versioned because boundaries and facility populations change.

## Time has several meanings

One `date` column is almost never enough.

### Reference time

The reference period says when the measured activity occurred: a day of pipeline flows, a week of inventories, a month of production, or a crop marketing year. Store start and end dates and the agency's period convention. Weekly series may represent a week ending on a particular day, an average over the week, or a point-in-time level.

### Release time and availability

The release timestamp says when the observation became public. Backtests must use this timestamp, not the reference-period end. If the provider gives only a release date, record the documented scheduled time and flag exceptions rather than inventing precision. Archive the release calendar because holidays, government closures, and unscheduled corrections can shift availability.

The first tradable timestamp is a separate research choice. A release at 10:30 a.m. Eastern is not safely usable in a bar stamped 10:30 unless the data pipeline, market timestamp, and execution convention establish ordering. Conservative studies enter after a defined delay and test longer delays.

### Vintage and revisions

Government observations can be preliminary, revised, benchmarked, or replaced. Keep observation date, release timestamp, vintage retrieved, revision status, and the prior value when a release explicitly revises it. Overwriting the first release with the latest database value creates hindsight. [[Point-in-time data and look-ahead bias]] applies as strongly to inventories and production as to macroeconomic data.

For APIs that expose only current history, the registry should say `point_in_time: false` until a verified snapshot process exists. A download made today does not prove what the endpoint returned on a past date. Where lawful and practical, store small immutable raw snapshots or checksums plus retrieval metadata. Do not infer redistribution rights merely because an API is publicly accessible.

### Contract time

Derivatives require trade date, session, contract month, expiry, first notice day, last trade day, delivery period, and settlement timestamp. A “front month” is a transformation, not a native contract. It must be accompanied by a roll rule. [[Futures continuous contracts and roll bias]] shows how volume rolls, fixed-calendar rolls, back adjustments, ratio adjustments, and unadjusted concatenation answer different questions.

## Price-type and market-state fields

A registry must distinguish transaction, bid, ask, midpoint, official settlement, indicative value, assessed price, index, and model estimate. Settlement is exchange-defined and need not equal the last trade. A physical assessment can use a methodology window and contributor process rather than a single transaction. The field `price_type` belongs beside, not inside, a vendor mnemonic.

Record whether a value is preliminary, final, corrected, stale, delayed, or missing. Zero is a valid market value in some settings and cannot serve as a missing-value code. Negative prices are economically possible. Outlier filters must preserve the original observation and document why a derived series excluded it.

For futures curves, retain every listed contract rather than only a generic series. A curve snapshot requires one observation timestamp across maturities or an explicit tolerance. Joining settlements from different sessions produces a synthetic curve that never existed. Calendar-spread sign conventions should be declared, because $F_1-F_2$ and $F_2-F_1$ reverse the meaning of a positive number.

## Official balances and inventories

An official balance dataset needs a signed accounting convention. Define whether stock change is ending minus beginning stocks or a contribution to supply, and state which side of the identity carries the sign. Store gross imports and exports when available instead of relying only on net trade. Preserve residual or adjustment terms; deleting them makes the published identity fail and disguises measurement error.

Frequency conversion deserves an explicit method. Summing weekly inventory levels is meaningless; averaging a flow and summing a flow can also differ. Monthly and weekly EIA products can use different survey frames and revision processes, so their values should not be spliced without a bridge. [[US natural gas balances]], [[Oil inventories storage and the futures curve]], and [[Grain balance sheets and stocks-to-use]] each depend on these distinctions.

Seasonal adjustment should be a field, not an assumption. Most physical commodity series have strong seasonality arising from weather, harvests, maintenance, shipping, and contractual cycles. Store the agency's adjustment status, and version any in-house seasonal model with its estimation window. Re-estimating a seasonal factor on the full sample can leak future structure into historical signals.

## Positioning, volume, and open interest

CFTC Commitments of Traders data require report type, market code, report date, publication timestamp, futures-only versus futures-and-options-combined status, and trader classification. In the combined report, options are converted to futures equivalents using exchange-supplied delta factors. Those values are not raw option contract counts.

The CFTC reports Tuesday positions on a later publication schedule. Treating the report publication date as the position date—or using Tuesday positions before publication—creates timing error. Categories are regulatory classifications, not pure economic motives, and can change as the Commission receives information. Nonreportable positions are derived as a residual, so their trader identities and strategies are unknown.

Volume and open interest are also distinct. Volume counts trading activity over a period; open interest is outstanding contracts not yet offset or completed. Each long is paired with a short, so aggregate open interest is not directional sentiment. A registry should prevent names such as `net_open_interest` unless the precise transformation is defined.

## Transformations and derived series

Every derived column should have a small recipe:

- input stable keys and acceptable source versions;
- formula and unit algebra;
- timezone and calendar;
- lag and availability convention;
- missing and correction policy;
- parameter values and effective dates;
- code version or reproducible query;
- validation tests and downstream consumers.

For a crack spread, the recipe includes product and crude contracts, barrel conversion factors, contract months, quotation units, and the chosen weight. For a stocks-to-use ratio, it includes the release vintage, marketing year, and the exact use denominator. For carry, it includes financing, storage assumptions, days between maturities, and the spread sign convention. Economic labels should follow the recipe rather than substitute for it.

Derived series should never overwrite raw provider data. Maintain lineage as a directed graph: raw observation → cleaned observation → unit-normalized series → research feature → model or chart. When a contract rule, survey method, or source endpoint changes, the registry can then identify which outputs require revalidation.

## Quality-control gates

Run validation at ingestion and again before research use.

**Schema checks** confirm identifiers, units, timezones, timestamps, and required definitions. **Domain checks** confirm plausible dimensions, nonnegative quantities only where economically required, expiry ordering, and valid contract months. **Accounting checks** rebuild balances within published tolerances. **Continuity checks** locate breaks, duplicates, missing releases, and abrupt changes in frequency or precision. **Cross-source checks** compare only economically equivalent objects and retain disagreements instead of averaging them away.

A good registry includes executable assertions: contract multiplier is present before converting price changes to dollars; a realized historical measurement is not available before its reference-period end, while forecasts follow a separately declared forecast-origin rule; roll weights sum to one; vintage is no later than model decision time; units cancel in each formula; and a curve never mixes observation sessions beyond the declared tolerance.

Manual review remains necessary at semantic breaks. Exchanges can amend rulebooks, agencies can redesign surveys, codes can be reused, and vendors can change field construction without changing a display label. Set a `review_after` date and add event-driven triggers for methodology notices, rule filings, endpoint deprecations, unusual missingness, and failed accounting identities.

## A practical registry template

The following groups are a minimum, not a demand that every field be populated:

- **Identity:** internal key, provider, dataset, native code, title, commodity, instrument type.
- **Physical definition:** grade, quality, location, geography type, delivery or reference terms.
- **Contract:** exchange, product code, rulebook, multiplier, tick, currency, listed months, expiry and delivery rules.
- **Measurement:** value type, unit, dimension, frequency, aggregation, adjustment, status.
- **Time:** timezone, reference start/end, observation time, release time, vintage, retrieval time.
- **Transformation:** source keys, conversion, roll, seasonal method, lag, missing values, formula version.
- **Lineage and rights:** data URL, methodology URL, access date, license or terms note, snapshot/checksum, code version, owners and consumers.
- **Validation:** last checked, tests passed, known breaks, unresolved ambiguity, next review.

Unknown values should be explicit. `unknown`, `not_applicable`, and `not_public` convey different states. A nullable blank cannot distinguish them. Do not fill gaps with guesses; an unresolved definition is a blocker for the affected comparison.

## Why it matters

Most commodity-research failures that look statistical begin as definition failures. A model may appear to forecast returns because it used a revised balance, joined a Tuesday position to Tuesday prices before Friday publication, mixed a physical assessment with a futures settlement, or changed the meaning of “front month” near expiry. More computation cannot repair an incoherent economic object.

The registry turns those hidden assumptions into reviewable data. It makes [[Transaction-cost models]], event studies, curve signals, inventory analysis, and cross-commodity comparisons falsifiable. It also creates an honest boundary: when provenance, timing, or licensing is insufficient, the correct output is “not reproducible with this source,” not a polished chart with concealed uncertainty.

## Sources

- [US Energy Information Administration, Open Data](https://www.eia.gov/opendata/) (accessed 2026-07-10).
- [US Energy Information Administration, Petroleum Supply Monthly](https://www.eia.gov/petroleum/supply/monthly/) (definitions, explanatory notes, and downloadable report; accessed 2026-07-10).
- [USDA National Agricultural Statistics Service, Quick Stats](https://quickstats.nass.usda.gov/) (accessed 2026-07-10).
- [USDA World Agricultural Outlook Board, WASDE](https://www.usda.gov/oce/commodity-markets/wasde) (accessed 2026-07-10).
- [CME Group, Rulebooks](https://www.cmegroup.com/market-regulation/rulebook.html) (accessed 2026-07-10).
- [CFTC, Commitments of Traders](https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm) (accessed 2026-07-10).
- [CFTC, Commitments of Traders explanatory notes](https://www.cftc.gov/MarketReports/CommitmentsofTraders/ExplanatoryNotes/index.htm) (accessed 2026-07-10).
- [CFTC, Large Trader Reporting Program](https://www.cftc.gov/IndustryOversight/MarketSurveillance/LargeTraderReportingProgram/index.htm) (accessed 2026-07-10).

## Open questions

- Which source licenses permit storing and redistributing raw snapshots rather than only derived commentary?
- Which agency and exchange methodology changes can be monitored automatically without producing false alarms?
- What controlled vocabulary should Rome use for physical locations, grades, and delivery terms across energy, metals, and agriculture?
- Which registry assertions should block a backtest entirely, and which should only attach a warning?
