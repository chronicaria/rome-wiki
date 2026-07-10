---
title: US macro surprise ledger
created: 2026-07-10
source: llm
status: seed
tags: [markets, macroeconomics, data, event-studies, methodology, ledger]
---

A macro-surprise ledger is a point-in-time evidence system: it records what an official release said, what a documented forecast expected before publication, what was revised, and how specified markets moved—without converting coincidence into causation.

Up: [[US Markets and Commodities]]

Related: [[From macro surprises to asset prices]] · [[Event studies for financial markets]] · [[Point-in-time data and look-ahead bias]] · [[Cross-asset confirmation and false narratives]]

## What this page is—and is not

This is the canonical methodology and schema for a living US macro-release ledger. It is not a live data feed, a claim that any particular consensus number is correct, or a substitute for licensed intraday market data. No current release rows appear below because a seemingly precise row assembled without an archived, pre-release expectation snapshot and timestamped market observations would be false precision. Future observations belong here only after the provenance checks described below pass.

The ledger answers four separate questions:

1. **What became public, and when?** The answer comes from the official release, tables, publication calendar, and any contemporaneous corrections.
2. **How did that first-reported value differ from an expectation frozen before release?** The answer requires an eligible forecast source, cutoff, panel definition, and statistic.
3. **What changed relative to the information set already available?** Revisions, components, benchmark changes, and definitional changes may carry more news than the headline.
4. **What did specified instruments do in a declared window?** This is an observation about prices, yields, spreads, or volatility—not by itself proof that the release caused the move.

Keeping these questions separate is the ledger's main value. A release level is not a surprise without a baseline. A surprise is not an economic shock if the expectation measure is noisy. A price move is not a causal response merely because it follows the scheduled time. For the transmission logic, see [[From macro surprises to asset prices]]; for research design, see [[Event studies for financial markets]].

## The unit of record

One row represents one **release event × headline or component concept × expectation vintage**. A payroll report can therefore create separate rows for nonfarm payrolls, unemployment, average hourly earnings, hours, and revisions. These should share an `event_id` but not be collapsed into one invented “jobs surprise.” Likewise, the CPI headline and core indexes, month-over-month and year-over-year changes, and relevant categories are different measurements with different units and information content.

The minimum event identity is:

| Field | Required meaning |
|---|---|
| `row_id` | Unique identifier for event × official series or table × transformation × expectation snapshot/version |
| `event_id` | Stable shared release identifier, such as `BLS-CPI-2026-06-20260714T123000Z`; multiple concept/vintage rows share it, and a rescheduled release receives a new event identifier |
| `agency` and `release` | Issuing agency and official release family |
| `reference_period` | Month, quarter, week, or other period measured—not publication date |
| `scheduled_at` | Last verified scheduled publication timestamp and timezone |
| `released_at` | Actual public availability timestamp when independently observable |
| `release_url` | Exact official release or table URL archived or retrieved |
| `series_concept` | Human-readable concept plus official table/series identifier where available |
| `unit` | Percent, percentage points, thousands, annualized rate, index level, dollars, or other exact unit |
| `adjustment` | Seasonally adjusted, not seasonally adjusted, annualized, inflation-adjusted, and transformation details |
| `reported_value` | First public value used by the market-facing row |
| `prior_as_known` | Previous-period value shown immediately before this release |
| `revised_prior` | Previous-period value printed in this release |
| `revision_news` | `revised_prior - prior_as_known`, in the same declared unit |

Publication date, reference period, and vintage date must never be conflated. June payroll employment may be published in July and revised in August and September. A current database download can contain the later estimate while erasing the value investors actually saw in July. That is why a release document or point-in-time retrieval is part of the row, not optional decoration.

## Defining surprise without pretending consensus is public truth

For a scalar series, the raw surprise is

$$
s_i = A_i^{(0)} - E_i^{(-)},
$$

where $A_i^{(0)}$ is the first-reported actual and $E_i^{(-)}$ is an expectation snapshot frozen before the release cutoff. Both must use the same concept, units, seasonal-adjustment status, reference period, and transformation. Subtracting a year-over-year forecast from a month-over-month actual, or a level forecast from a growth rate, produces a number with no meaning.

A standardized surprise can support comparisons across releases:

$$
z_i = \frac{A_i^{(0)}-E_i^{(-)}}{\sigma_{s,k}},
$$

where $\sigma_{s,k}$ is a predeclared, trailing scale for historical surprises in release concept $k$. The scale must be estimated only from information available before event $i$. State the window, minimum observations, treatment of pandemic or other structural breaks, and whether $\sigma$ is a standard deviation or a robust scale such as $1.4826\times\operatorname{MAD}$ under a normal-reference convention. Cross-sectional forecast-panel dispersion measures disagreement among forecasters, not the historical surprise scale, and belongs in a separate field rather than this denominator. A full-sample scale leaks future volatility into earlier observations.

The expectation fields are therefore as important as the actual:

- `expectation_value`, `expectation_unit`, and exact concept;
- provider and product name;
- statistic—median, mean, mode, model forecast, or market-implied quantity;
- contributor count and inclusion rules when available;
- snapshot timestamp, timezone, and hard cutoff;
- whether late forecast changes are incorporated;
- license and redistribution constraint;
- archived source identifier, checksum, or permitted local evidence pointer;
- fallback state if the expectation cannot be reproduced.

“Consensus expected 0.3%” is unusable if its provider, panel, statistic, and cutoff are unknown. Different surveys can produce different medians; a median can change without any forecaster changing the economically central view; a stale contributor can remain in a panel; and a post-release web page can overwrite the pre-release snapshot. When a licensed consensus history is unavailable, the honest alternatives are to record `expectation_status: unavailable`, use a declared real-time forecasting model, or compare the release with the prior official estimate. None is interchangeable with market consensus.

A model baseline must be labeled as a **model forecast**, with training cutoff, inputs, vintages, code version, and evaluation history. A Treasury or derivatives price may offer a market-implied baseline for some policy or inflation questions, but translating price into an expected release generally requires risk-premium, liquidity, contract, and payoff assumptions. It should not silently replace a survey forecast.

## First prints, revisions, and benchmark changes

The actual used for event-time surprise is ordinarily the value first available at the release. Later revisions belong in separate fields and revision events. Replacing the first print with today's revised history commits look-ahead bias and changes the question from “what news arrived?” to “what do statisticians now estimate happened?” Both questions are useful; they require different datasets.

Official revision systems differ. The BLS establishment survey incorporates additional sample receipts and recalculated seasonal factors in its two succeeding monthly estimates, then periodically benchmarks employment to unemployment-insurance tax records. CPI seasonal factors are recalculated annually; BLS says the new factors can revise the previous five years of seasonally adjusted indexes, while unadjusted indexes are not revised through that procedure. BEA's national accounts move through successive estimates and periodic updates as more complete source data arrive. Census advance indicators commonly revise as additional responses and later survey products become available. The ledger must preserve the agency-specific sequence rather than apply a generic “final value” label.

Use these fields:

| Field | Interpretation |
|---|---|
| `vintage_0` | First value and its public timestamp |
| `vintage_1`, `vintage_2` | Later values with exact release dates, not overwritten columns |
| `revision_type` | Routine monthly, seasonal-factor, annual benchmark, comprehensive, correction, or other official classification |
| `revision_to_prior` | Change to the immediately prior reference period announced in the current release |
| `cumulative_revision` | Latest known minus first print, used only in revision analysis |
| `methodology_break` | Flag and note for definitions, samples, classifications, seasonal procedures, or source-data changes |

Do not combine the headline surprise and revision news by arbitrary addition when they have different horizons or market meanings. If a composite is analytically useful, declare the weights before evaluation and show both raw components. A payroll headline above consensus accompanied by large downward revisions is not faithfully represented by either adjective alone.

ALFRED provides real-time periods and series vintage dates for many FRED-hosted series. Its documentation distinguishes what is known during a real-time period from the observation period itself; the observations endpoint can request vintage dates. This is valuable reconstruction infrastructure, but it is not a universal substitute for the official document. Coverage and release timing should be checked series by series, and same-day vintage dating may not establish the precise second a value became tradable information.

## Release-time integrity

The ledger stores all timestamps in UTC plus the official local timezone and offset. “8:30” without `America/New_York`, EDT/EST, and date is incomplete. Calendar pages can change, releases can be delayed, and daylight-saving transitions can break naïve conversions. Preserve both the last pre-event schedule snapshot and the observed release time when possible.

For each event:

1. retrieve the official agency calendar before release and record the access time;
2. record the official document URL, table identifiers, and first retrieval time;
3. hash or archive the permitted artifact so later silent corrections are detectable;
4. if a correction occurs, preserve both versions and create a correction event;
5. never infer a sub-second release time from a web page's generic date stamp.

BLS publishes scheduled dates and times and offers an updateable calendar. Census's indicator calendar similarly identifies reference period, date, and time. Those calendars establish planned timing, not necessarily actual dissemination latency. For high-frequency studies, the researcher needs a documented news feed or independently timestamped receipt and synchronized market data. Otherwise use a wider window and disclose the limitation.

## Market-response panel

Every accepted row may attach a response panel, but the raw macro record should remain valid even if no licensed market series is available. For each instrument store:

- exact instrument: cash security, index, ETF, future, option, swap, or exchange rate;
- ticker or identifier, venue or provider, currency, contract month and expiry where relevant;
- price field: trade, bid, ask, midpoint, yield, spread, implied volatility, or settlement;
- timezone, session, timestamp precision, delayed/live status, and data license;
- pre-event anchor and post-event endpoint;
- response transformation, including basis points, log return, percentage return, or volatility points;
- data-quality flags for stale quotes, crossed markets, missing trades, halts, or thin depth.

Predeclare windows appropriate to the question, for example `[-10m,-1m]` as a pre-event drift check, `[−1m,+5m]` for an immediate response, `[−1m,+30m]` for absorption, and previous close to same-day close for a broader but more confounded view. A close-to-close move cannot establish an 8:30 release reaction. A one-minute window cannot be studied with daily data.

A compact cross-asset panel might include two- and ten-year Treasury yields, an equity index future, a broad dollar measure or liquid dollar cross, a credit proxy, and implied volatility. The purpose is not to demand that every market agree. Different assets load on expected cash flows, policy rates, inflation compensation, term premium, risk appetite, liquidity, and global relative conditions. Disagreement can reveal ambiguity in the news or a competing shock.

For each response store a leading hypothesis, at least one alternative, known simultaneous events, and a falsifier. Preferred language is “the move followed the release and was consistent with…” unless identification is stronger. Release days can also contain central-bank remarks, Treasury supply news, geopolitical developments, earnings, index flows, options expiries, or data leaks. If the move began before the release, the event-time story is weakened.

## A reproducible workflow

### Before the release

Create the event shell from the official calendar. Freeze the expected concepts, instrument panel, windows, and confounder search. Capture the eligible expectation snapshot before the cutoff; never reconstruct it from a page that may have updated after publication. Verify units against the previous official release and document any anticipated benchmark or annual seasonal update.

### At publication

Retrieve the official release and tables. Enter first prints and revisions exactly as displayed, retaining signs, annualization, seasonal status, and uncertainty measures. Record retrieval time separately from the agency's stated release time. Do not copy a headline aggregator when the primary table is available.

### After publication

Compute raw surprises only after a type check confirms concept and unit equality. Pull market observations from the declared source and apply the frozen windows. Search for simultaneous information and pre-event drift. A second reader should verify the official values, prior vintage, expectation timestamp, formulas, market identifiers, and causal wording.

### On later vintages

Append rather than overwrite. Classify revisions using the agency's terminology, update cumulative revision diagnostics, and preserve the original event analysis. If methodology changes make old and new values incomparable, flag the break rather than force a continuous history.

## Quality-control rules

A row fails publication if any of these conditions holds:

- the “actual” is a later revised value presented as the first print;
- expectation provenance or cutoff is missing but the row claims a consensus surprise;
- actual and expected concepts, units, transformations, or reference periods differ;
- the official source cannot be identified exactly;
- market timestamps do not support the claimed response window;
- a futures contract, yield convention, exchange-rate direction, or price field is unspecified;
- a correction or benchmark break has been silently overwritten;
- causal language exceeds the timing and confounder evidence;
- redistribution violates the expectation or market-data provider's terms.

Automated checks should enforce unique `row_id` values or the declared composite uniqueness constraint while allowing many rows to share an `event_id`; they should also enforce timezone-aware timestamps, `snapshot_at < released_at`, compatible units, immutable first vintages, and reproducible arithmetic. Manual review must still inspect footnotes, table labels, methodological notices, and whether the selected headline captures the information markets plausibly processed.

## Interpretation limits

Forecast errors mix genuine news with expectation measurement error. The survey median is not necessarily the marginal market participant's forecast, and participants may attach different probabilities to tails or components. A release can match the median and still move markets because revisions, composition, policy implications, or the distribution of forecasts matter. Conversely, a large numerical miss may produce little movement if it was leaked, discounted, judged noisy, or offset by details.

Seasonal adjustment and sampling uncertainty matter most near turning points. Official releases often report sampling-error information, but the market surprise is usually much smaller than the statistical uncertainty surrounding an estimated level or change. That does not make the release irrelevant: prices respond to incremental information. It does mean the ledger should not mistake decimals for economic certainty.

Event-study aggregation also creates choices. Pool only comparable concepts, use point-in-time standardization, report the full response distribution, and test sensitivity to windows, influential episodes, and expectation sources. Repeatedly searching indicators, assets, and horizons until one looks significant is multiple testing. The ledger preserves evidence; it does not confer identification automatically.

## Blank canonical row

```yaml
row_id:
event_id:
agency:
release:
reference_period:
scheduled_at_utc:
scheduled_timezone:
released_at_utc:
release_url:
release_artifact_hash:
series_concept:
official_series_or_table:
unit:
adjustment:
reported_value_first:
prior_as_known:
revised_prior:
revision_news:
expectation_status: available | unavailable | model
expectation_value:
expectation_provider:
expectation_statistic:
expectation_contributors:
expectation_snapshot_at_utc:
expectation_cutoff_rule:
expectation_license:
raw_surprise:
standardization_method:
standardized_surprise:
market_source:
instruments: []
response_windows: []
simultaneous_events: []
leading_hypothesis:
alternative_hypothesis:
falsifier:
verification_state: pending | independently_verified | rejected
verified_by:
notes:
```

## Sources

- U.S. Bureau of Labor Statistics, [Schedule of Releases for the Employment Situation](https://www.bls.gov/schedule/news_release/empsit.htm) — official reference-month, date, and release-time calendar.
- U.S. Bureau of Labor Statistics, [The Employment Situation—Technical Note](https://www.bls.gov/news.release/empsit.tn.htm) — household and establishment survey concepts, seasonal adjustment, reliability, and estimation context.
- U.S. Bureau of Labor Statistics, [CES revisions between preliminary and final data](https://www.bls.gov/web/empsit/cestn.htm#Revisions-Between-Preliminary-and-Final-Data) — monthly establishment-survey revision process.
- U.S. Bureau of Labor Statistics, [CES national benchmark article](https://www.bls.gov/web/empsit/cesbmart.htm) — benchmark concepts and unemployment-insurance record basis.
- U.S. Bureau of Labor Statistics, [Seasonal Adjustment in the CPI](https://www.bls.gov/cpi/seasonal-adjustment/home.htm) — annual factor updates, X-13ARIMA-SEATS, and the five-year revision window for seasonally adjusted indexes.
- U.S. Bureau of Economic Analysis, [GDP revision information](https://www.bea.gov/resources/learning-center/what-to-know-gdp-revisions) — why GDP estimates are revised as source data become more complete.
- U.S. Bureau of Economic Analysis, [News release schedule](https://www.bea.gov/news/schedule) — official scheduled dates and times for BEA releases.
- U.S. Census Bureau, [Economic Indicator Release Schedule](https://www.census.gov/economic-indicators/calendar-listview.html) — release name, reference period, date, and time.
- U.S. Census Bureau, [Advance Monthly Retail Trade Survey methodology](https://www.census.gov/retail/marts/about_the_surveys.html) — survey scope and published-estimate framework.
- Federal Reserve Bank of St. Louis, [FRED API real-time periods](https://fred.stlouisfed.org/docs/api/fred/realtime_period.html) — distinction between observation history and when information was known.
- Federal Reserve Bank of St. Louis, [FRED series vintage dates endpoint](https://fred.stlouisfed.org/docs/api/fred/series_vintagedates.html) — dates when series observations were released or revised.
- Federal Reserve Bank of St. Louis, [FRED series observations endpoint](https://fred.stlouisfed.org/docs/api/fred/series_observations.html) — retrieval using real-time periods and vintage dates.

## Open questions

- Which expectation provider permits contributor-level, timestamped historical snapshots to be stored or cited under terms compatible with Rome?
- For each major release family, does ALFRED's vintage date reproduce the first official print exactly, and where is a document archive still required?
- Which licensed market feed provides stable, synchronized bid/ask or trade data across Treasury futures, equity-index futures, dollar pairs, credit proxies, and volatility with sufficient historical timestamp precision?
- How should a preregistered composite treat headline data, revisions, and components without choosing weights after observing price responses?
- What objective rule should distinguish a routine revision from a methodology break that requires a new comparable-history segment?
- How should delayed or corrected releases be represented when different distribution channels receive the information at measurably different times?
