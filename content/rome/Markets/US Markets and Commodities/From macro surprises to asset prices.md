---
title: From macro surprises to asset prices
created: 2026-07-10
source: llm
status: seed
tags: [investing, markets, united-states, macro, quantitative-research, event-study]
---

A macro release moves markets through the information it adds relative to a timestamped expectation, not through whether the reported number merely looks high or low.

Up: [[US Markets and Commodities]]

Related: [[Point-in-time data and look-ahead bias]] · [[Reading the Treasury curve as scenarios]] · [[Event studies for financial markets]] · [[Real rates inflation compensation and term premium]]

## The object is news, not the published number

Suppose payroll employment rises by 180,000. That observation has no unique market meaning. If the information set immediately before release implied 100,000, the number is positive news about employment. If the expected value was 250,000, it is negative news. If the headline matches the median forecast but prior months are revised sharply, the economically relevant surprise may sit in the revisions. A release is therefore a packet of information rather than one scalar headline.

The simplest surprise measure is

$$
s_t = a_t - E_{t^-}(a_t),
$$

where $a_t$ is the first published value and $E_{t^-}(a_t)$ is the expectation formed using information genuinely available just before release. Researchers often standardize surprises by their historical standard deviation so coefficients can be compared across releases:

$$
z_t = \frac{a_t-E_{t^-}(a_t)}{\sigma_s}.
$$

That convenient formula hides most of the hard work. The expectation must identify its contributor population, collection window, cutoff time, aggregation rule, and later revisions. A survey median is not automatically the market's price-implied expectation. It may be stale, rounded, strategically reported, or unrepresentative of the marginal trader. Conversely, a futures-implied expectation embeds risk premia, contract details, and sometimes nonlinear mappings from the statistic to policy. Neither should silently be treated as truth.

The first-release value is usually the appropriate object for an event study because it is what market participants could observe. Revised history is useful for studying the economy, but substituting a later vintage creates [[Point-in-time data and look-ahead bias]]. The correct dataset preserves the release timestamp, first print, previously published comparison value, revisions announced in the same packet, seasonal-adjustment status, units, and the expectation vintage.

## A release contains several shocks

Headline, composition, revision, and methodology news can arrive together. An employment report can include payroll growth, unemployment, participation, hours, earnings, diffusion, and revisions. An inflation report contains headline and core indexes, monthly and annual rates, category contributions, seasonal factors, and occasionally corrections or methodological notices. GDP releases combine an aggregate growth rate with inventories, trade, consumption, investment, government demand, prices, and subsequent benchmark revisions.

A one-number surprise discards that structure. A better design predeclares a small vector of economically motivated components. For an inflation release, those might be monthly core inflation, a persistent-services measure, and revisions. For employment, payroll growth, average hourly earnings, unemployment, and prior-payroll revisions may matter. The specification should be determined before inspecting returns; otherwise a researcher can search the packet for whichever component happens to fit the price move.

Components also require sign conventions. A positive growth surprise is not analogous to a positive unemployment-rate surprise. Standardized surprises should be oriented so a positive value has a stated economic interpretation, such as “stronger activity” or “more inflationary than expected.” Without this dictionary, pooled regressions become difficult to audit.

Official release schedules are part of the data. BLS and BEA normally post exact release dates and times, but schedules can change. Shutdowns and other disruptions have produced revised dates, missing reference months, and combined publications. A reproducible study stores the date actually used, not merely a recurring calendar rule such as “first Friday.”

## The price response is a repricing of scenarios

An asset price is the discounted value of uncertain cash flows. Macro news can change at least four objects:

1. expected cash flows or default losses;
2. expected short-term policy rates and the path of discount rates;
3. inflation compensation and other nominal-versus-real components;
4. risk premia, liquidity premia, or the value of insurance.

The same growth surprise can therefore produce different equity responses in different regimes. Strong activity may raise expected earnings, supporting stocks. It may also raise the expected policy path, discount rates, or the probability of a later contraction, weighing on valuations. Federal Reserve research using high-frequency data finds that responses vary with the state of the economy and that bonds, equities, and foreign exchange participate differently in real-time price discovery. The direction is an empirical result, not a permanent sign table.

For Treasuries, a surprise can move expected short rates and term premium. Short maturities often load more directly on the near policy path; longer maturities also reflect distant policy expectations, inflation compensation, and term premium. For inflation-linked securities, real yields and breakevens provide additional—but still imperfect—decomposition. Breakeven inflation is not pure expected inflation because liquidity and inflation-risk premia matter.

For the dollar, news changes relative rather than absolute prospects. Stronger US data can raise expected US rates relative to foreign rates, but the response depends on what was already priced, global risk demand, and the news's implications for other economies. Credit spreads combine expected default loss, uncertainty, liquidity, and risk compensation. Commodities add physical balances, storage, transport, currency translation, and the curve: a macro surprise may alter expected demand while an inventory or logistics shock dominates the nearby contract.

The useful question is not “Did good news make prices rise?” It is: which state variable was revised, which instrument should be most exposed to it, and did related markets confirm the proposed channel?

## Event windows and identification

Scheduled releases create unusually useful research settings because the public timestamp is known. A narrow event window can reduce contamination from unrelated news. Let $p_{t^-}$ be the last defensible price before release and $p_{t^+}$ a price after markets have had time to digest the packet. The response is

$$
r_t = \log(p_{t^+})-\log(p_{t^-}).
$$

A basic regression is

$$
r_t = \alpha + \beta z_t + \varepsilon_t.
$$

The coefficient describes an average conditional association for the sampled releases and window. It is not automatically a timeless structural effect. The study must specify instrument, venue, quote field, timezone, session, sampling frequency, contract month or cash benchmark, adjustment, and treatment of missing or stale observations.

Window choice is a tradeoff. Seconds or minutes improve isolation but demand high-quality synchronized data and must accommodate embargo release mechanics, quote latency, and market microstructure. A longer intraday window may capture interpretation and cross-market propagation but admits more confounders. Close-to-close returns are easy to obtain and often poor for causal identification because many events intervene. Results should be shown across predeclared alternative windows rather than selecting the best-looking one.

The pre-window matters too. A move beginning before the official timestamp can indicate another catalyst, time synchronization error, anticipatory trading, or information leakage; it cannot simply be assigned to the release. Inspect returns and volume before and after the event. Use exchange timestamps consistently, account for daylight-saving changes, and document whether data are trades, bid-ask midpoints, indicative quotes, or settlement prices.

Simultaneous releases are a central confounder. Several US indicators are routinely released at 8:30 a.m. Eastern, and an agency packet can contain multiple series. If CPI and another consequential release share a timestamp, a one-surprise regression cannot identify which one moved prices without additional structure. Options include excluding collisions, estimating a vector of surprises, using instruments with different economic sensitivities, or admitting that attribution is underidentified.

## Expectations are measured with error

Consensus data require provenance. The researcher should record vendor, panel membership, number of respondents, survey window, last update, statistic used, and whether estimates were rounded. A final median assembled after the cutoff is not point in time. If a historical vendor file overwrites forecasts with later updates, the backtest is contaminated even when the realized data are properly vintaged.

Survey disagreement is information rather than nuisance. A wide distribution can indicate uncertainty, heterogeneous models, or an event whose measurement is unusually difficult. A given numerical miss may be less informative when expectations are dispersed. Researchers can predeclare interactions between surprise magnitude and forecast dispersion, but should not improvise them after observing returns.

Market-based expectations present a different measurement problem. A federal-funds futures price is connected to an average effective rate over a contract month, not directly to a single policy decision, and includes contract and calendar mechanics. Inflation compensation from bonds or swaps includes risk and liquidity premia. Options encode a risk-neutral distribution, not a physical forecast. Translating any of these into an “expected release” requires an explicit model.

Because surprise is a noisy regressor, estimated response coefficients can be attenuated or unstable. Comparing several defensible expectation sources, reporting sensitivity to revisions in the forecast panel, and preserving the raw contributor-level vintage where licensing permits are stronger practices than asserting that one consensus number perfectly captures what was priced.

## Cross-asset confirmation is a test, not decoration

A proposed mechanism should imply a pattern. If an upside inflation surprise is said to raise the expected policy path, front-end rates should normally be examined before invoking that channel for stocks. If a growth surprise is said to improve cash-flow expectations, cyclicals, credit, real yields, and the dollar offer imperfect but informative checks. A response isolated to one illiquid instrument is weaker evidence than a coherent sequence across markets.

Cross-asset agreement does not prove causality because all instruments can respond to the same omitted event. Nor is disagreement automatically irrational. Different prices load on different cash-flow horizons, discount rates, insurance demand, and constraints. The discipline is to write down the predicted signs and ordering before seeing the panel, then report confirmations and failures.

The asset that moves first may provide price-discovery evidence. Deep futures markets often respond rapidly around scheduled announcements, while cash instruments, ETFs, options, or foreign venues can update at different speeds. But “first” requires synchronized, comparable timestamps and attention to bid-ask bounce. It should not be inferred from charts sampled at inconsistent intervals.

## Regimes, nonlinearities, and multiple testing

Average coefficients can conceal state dependence. Responses may differ when inflation is far from target, labor markets are tight, policy is near an effective lower bound, recession risk is elevated, or market liquidity is impaired. The sign of the equity response to growth news can change because cash-flow and discount-rate channels receive different weights.

Regime work is especially vulnerable to overfitting. Every split reduces sample size; searching thresholds, eras, windows, assets, transformations, and release components creates a large hidden test family. A credible design states the economic mechanism, threshold, and sample division in advance; reports the full search universe; adjusts inference for repeated testing; and validates on a later period or different market.

Nonlinear responses may also be real. Large surprises can force disproportionate repricing, while tiny misses inside rounding error may contain little information. Bad growth news can behave differently from good news if recession risk is asymmetric. Again, the functional form should be motivated and tested out of sample rather than chosen to maximize significance.

Standard errors must respect the design. Event observations can exhibit heteroskedasticity, overlapping windows, serial dependence, and common volatility regimes. Economic magnitude belongs beside statistical significance: translate a one-standard-deviation surprise into basis points, percent return, or volatility units, with uncertainty intervals. A precise but tiny average response may be unimportant after spreads and execution costs.

## A reproducible research record

Each event row should retain:

- official event name, agency, reference period, actual release timestamp, and timezone;
- first published values, contemporaneously announced revisions, units, adjustment status, and source URL;
- expectation source, collection window, cutoff, panel size, aggregation, dispersion, and licensing restrictions;
- instrument identity, venue, ticker, contract month, expiry, currency, price field, and timestamp convention;
- pre- and post-event observations for every reported window;
- collisions, holidays, halts, thin trading, methodology changes, and exclusion reasons;
- code version, data vintage, transformation, standardization sample, and preregistered hypotheses.

Keep raw observations separate from derived surprises and returns. Never overwrite an initial release with a revision. Version the event dictionary when official methodology changes. Archive official notices or stable URLs where rights permit, and record access dates for volatile pages.

A strong result survives alternative reasonable windows, surprise scaling, outlier treatment, and expectation sources. It does not depend on one anomalous release. It should weaken when placebo timestamps are substituted and should not appear before the announcement. For a trading interpretation, the test must additionally use data available at execution time, realistic latency, bid-ask spreads, fees, market impact, contract rolls, and a clean out-of-sample period. Statistical response is not equivalent to an executable strategy.

## Why it matters

Macro-surprise analysis teaches a general market habit: compare reality with the distribution that prices were already discounting. It replaces retrospective storytelling with a timestamped forecast error, a measurable response window, competing mechanisms, and falsifiers. That framework is useful even without running a regression.

When reading a release, first separate the first print from revisions and composition. Then ask which expectations were credible at the cutoff. Observe the most directly exposed market before interpreting distant assets. Check simultaneous news and whether the move preceded the event. Finally, describe the response as consistent with a channel unless the design genuinely separates alternatives.

This discipline also prevents two common errors. A strong economy can coincide with falling stocks without refuting economics because discount rates and risk premia may dominate cash flows. And a release can match consensus yet move markets because the distribution, details, revisions, or inferred policy reaction changed. Prices respond to scenario updates, not adjectives.

## Sources

- [Bureau of Labor Statistics — release calendar](https://www.bls.gov/schedule/) (official schedules and release times; accessed 2026-07-10).
- [Bureau of Labor Statistics — revised release dates following lapses in appropriations](https://www.bls.gov/bls/2025-lapse-revised-release-dates.htm) (official examples of schedule changes, missing observations, and combined releases; accessed 2026-07-10).
- [Bureau of Economic Analysis — release schedule](https://www.bea.gov/news/schedule) (official release timing; accessed 2026-07-10).
- [Federal Reserve — Real-Time Price Discovery in Global Stock, Bond and Foreign Exchange Markets](https://www.federalreserve.gov/pubs/ifdp/2006/871/default.htm) (high-frequency macro-news responses and state dependence; accessed 2026-07-10).
- [Federal Reserve — Do Actions Speak Louder Than Words?](https://www.federalreserve.gov/econres/feds/do-actions-speak-louder-than-words-the-response-of-asset-prices-to-monetary-policy-actions-and-statements.htm) (target and path factors in monetary-policy surprises; accessed 2026-07-10).
- [Federal Reserve — The Effect of the Federal Reserve on the Stock Market: Magnitudes, Channels and Shocks](https://www.federalreserve.gov/econres/feds/the-effect-of-the-federal-reserve-on-the-stock-market-magnitudes-channels-and-shocks.htm) (2026 review of announcement effects, shock interpretation, and asset-pricing channels; accessed 2026-07-10).
- [Federal Reserve Bank of New York — Interest Rate Surprises When the Fed Doesn't Speak](https://www.newyorkfed.org/research/staff_reports/sr1178.html) (macro-release rate surprises and interpretation of predictable components; accessed 2026-07-10).

## Open questions

- Which expectation datasets preserve contributor-level point-in-time histories under terms compatible with reproducible Rome research?
- How stable are response coefficients after the pandemic, inflation surge, and changes in market microstructure?
- Which small cross-asset panel best distinguishes cash-flow, policy-path, inflation, and risk-premium channels without encouraging post hoc narratives?
