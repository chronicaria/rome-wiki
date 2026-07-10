---
title: US credit and volatility tracker
created: 2026-07-10
source: llm
status: seed
tags: [investing, markets, united-states, credit, volatility, derivatives, tracker]
as_of: 2026-07-10
desk: US markets and commodities
review_after: 2026-08-10
---

Credit spreads and option-implied volatility are prices of different risks, so a useful joint tracker records their definitions, timestamps, and competing explanations rather than collapsing them into one “fear” gauge.

Up: [[US Markets and Commodities]]

Related: [[Credit spreads and default compensation]] · [[Volatility risk premium]] · [[Funding liquidity versus market liquidity]] · [[US market regime tracker]]

## What this tracker is for

This page is a point-in-time observation template, not a trading signal. Its job is to preserve enough metadata that a later reader can distinguish four things that are often blended together:

1. **The price of corporate credit risk.** An option-adjusted spread is a model-based yield spread over a government curve after accounting for embedded options. It combines expected loss, liquidity, risk bearing, and model residuals; it is not a default forecast.
2. **The price of equity-index variance risk.** VIX uses SPX option prices across two expiries to interpolate a model-free 30-day variance measure, then reports its annualized square root in volatility points. It is not variance itself, a direct forecast of the realized path, or an identification of why protection became expensive.
3. **The condition of the trading mechanism.** TRACE prints, bid-ask estimates, depth, price dispersion, issuance concessions, ETF discounts, and funding measures can reveal impaired intermediation that an index spread alone hides.
4. **The state of borrower fundamentals.** Leverage, interest coverage, defaults, downgrades, maturity walls, and refinancing terms evolve more slowly than market prices and may confirm or reject a market narrative.

The tracker therefore keeps observations separate from interpretation. A simultaneous widening in high-yield spreads and rise in implied volatility is consistent with a repricing of risky cash flows, but also with dealer balance-sheet constraints, forced selling, a volatility-control deleveraging episode, or one concentrated sector shock. Timing and cross-market confirmation decide how much confidence any explanation deserves.

## Instrument and data definitions

### Credit panel

The baseline index panel should record investment-grade and high-yield option-adjusted spreads, effective yields, and—when licensing permits—duration, rating mix, sector weights, and index-market-value weights. A spread observation must identify the provider, index, series code, unit, close time, and whether the government benchmark is a spot curve or a particular Treasury. Index composition changes matter: a stable aggregate can conceal migration between ratings, calls, fallen angels, issuance, and defaults.

FRED distributes several ICE BofA top-level index series. The notice for the high-yield series identifies ICE's copyright, limits authorized use and third-party furnishing, and says that beginning in April 2026 the FRED page will show only three years of observations. Those terms require license review before Rome reproduces a series or builds an automated product; this tracker records definitions rather than treating the notice as a complete legal rule. The canonical identifier is `BAMLH0A0HYM2`, daily close, percentage points, not seasonally adjusted.

TRACE is transaction reporting, not a quotation system. FINRA says its public trade activity includes execution time, price, yield, and quantity for disseminated fixed-income trades. A stale last trade is not a current executable price, and a small customer trade is not interchangeable with an institutional block. A liquidity observation should name the exact public or licensed TRACE product first, then preserve only fields that product supplies. Desired metadata include trade-size category, capacity or counterparty indicators when available, correction status, applicable dissemination cap or delay, and time since the prior print; availability is not uniform across products or securities.

### Volatility panel

The baseline option panel should distinguish:

- an index level such as VIX from the prices of the options used to calculate it;
- implied variance from implied volatility, because aggregation occurs in variance space;
- the roughly 30-day target horizon from event-specific and longer maturities;
- the cash index from listed VIX futures and options, whose settlement and term structure differ;
- risk-neutral expectation from subsequent realized variance;
- first-order level from skew, convexity, term structure, and liquidity.

An elevated VIX can reflect a higher expected distribution of index returns, a more negative return–volatility relation, an unusually expensive insurance premium, or stressed option liquidity. It cannot by itself establish expected direction. A steeply inverted volatility term structure may signal near-term event demand, but interpretation requires exact expiries, holidays, settlement conventions, and whether the move came from puts, calls, or the forward level.

## Observation record

Every dated entry should use the following fields.

| Field | Required content |
| --- | --- |
| As of | Timestamp and timezone for every market close or snapshot |
| Observable | Index/series identifier, value, unit, price type, provider, and delay |
| Baseline | Prior close, recent distribution, or traceable expectation—not an undocumented “normal” |
| Window | Intraday, close-to-close, five-day, or release-aligned window |
| Credit confirmation | IG/HY OAS and yield, sector/rating breadth, TRACE activity, issuance and fund/ETF evidence if licensed |
| Volatility confirmation | VIX level and curve, S&P 500 options term/skew context, realized-volatility comparator |
| Cross-asset context | Treasury levels, real yields, equities, dollar, funding, and relevant commodity shock |
| Leading hypothesis | Mechanism consistent with the timing and breadth |
| Alternative | At least one plausible competing mechanism |
| Confounders | Macro releases, earnings, option expiry, rebalancing, geopolitical events, or thin sessions |
| Falsifier | Later observation that would weaken the leading interpretation |
| Provenance | Exact URL, release/observation time, license constraint, and revision status |

## Current baseline

**Research as of 2026-07-10; market evidence cited below is not a live 2026-07-10 quote.** The newest official systemic assessment reviewed for this tracker is the Federal Reserve's May 2026 *Financial Stability Report*, whose overview says its market cutoff was April 23, 2026. The report characterized corporate bond spreads as roughly unchanged and low by longer-run standards while describing valuation pressures as elevated. That combination is a baseline, not a forecast: narrow spreads can coexist with expensive risky assets and can widen through either weaker expected cash flows or a larger compensation for bearing risk.

No numerical close is entered here for July 10. That is deliberate because this version is a methodology template, not a dated market snapshot. The FRED page showed a recent lagged observation when reviewed, but a full panel would still need synchronized observation times, exact index metadata, and appropriately licensed option and bond data. A future dated entry may cite a properly timestamped one-off observation after license review; it must not relabel that value as a synchronized July 10 close.

The next valid dated observation should begin with an event or scheduled review, then freeze all series at their documented observation times. It should not retrofit a catalyst after seeing the price response.

## How to interpret joint states

### Narrow credit spreads, low implied volatility

This state is consistent with abundant risk-bearing capacity and benign expected losses, but it is not proof of resilience. Check issuance concessions, covenant quality, leverage, option skew, and concentration. Quiet index levels can coexist with fragility if liquidity is one-sided or protection sellers are crowded.

### Wider credit spreads, high implied volatility

This is the clearest broad risk-off combination but still does not identify cause. If spreads widen across ratings and sectors, TRACE volumes rise, equity volatility term structure inverts, Treasury liquidity worsens, and funding measures move together, a system-wide risk-premium or intermediation shock becomes more plausible. If widening is concentrated in one industry while index option liquidity remains orderly, a fundamental sector shock may fit better.

### Wider credit spreads, moderate implied volatility

Credit-specific deterioration is one candidate: defaults, refinancing risk, downgrades, or a heavy issuance calendar can pressure bonds without producing a large equity-index volatility response. Another candidate is measurement: duration changes, composition effects, and illiquid last trades can move a spread series differently from executable markets. Compare cash bonds, credit ETFs, CDX when licensed, and issuer equity.

### Narrow credit spreads, high implied volatility

An equity-specific event, a short-dated macro hedge, or expensive convexity may lift implied volatility before corporate credit reprices. Alternatively, bond indices may update more slowly or be insulated by strong demand for yield. The key test is persistence and breadth after clocks align. A one-session lead–lag is not automatically predictive.

## Verification and causal discipline

The tracker should never describe a joint move as “the market pricing recession” without a defined mapping from prices to probabilities. Spreads and options are risk-neutral prices: both embed compensation for bearing states that investors dislike. To infer expected physical outcomes requires a model and assumptions about risk premiums.

Likewise, the excess bond premium, OAS, VIX, realized variance, TRACE volume, and default probability are not substitute measures. Each answers a different question. The Federal Reserve's financial-stability framework is useful because it separates asset valuations, household and business borrowing, financial-sector leverage, and funding risks. Rome should preserve that separation and then document channels linking them.

Any quantitative rule derived from this page must be evaluated with point-in-time constituents, publication lags, transaction costs, and an out-of-sample design. See [[Point-in-time data and look-ahead bias]], [[Event studies for financial markets]], and [[Transaction-cost models]]. A chart built from today's revised history cannot demonstrate what a researcher could have known at the time.

## Why it matters

Credit and volatility sit at the junction of expected fundamentals, discount rates, insurance demand, and intermediary capacity. Tracking them together can expose disagreements that a single “risk appetite” label hides. The benefit is diagnostic: it forces a researcher to ask which market moved first, which instruments confirmed it, what was observable at the time, and what later evidence would overturn the story.

## Sources

- Federal Reserve Board, [Financial Stability Report, May 2026 overview](https://www.federalreserve.gov/publications/2026-may-financial-stability-report-overview.htm) (market-data cutoff and vulnerability framework; accessed 2026-07-10).
- Federal Reserve Board, [Financial Stability Report, May 2026 accessible figures](https://www.federalreserve.gov/publications/2026-may-financial-stability-report-accessibility-tables.htm) (corporate yield and spread definitions; accessed 2026-07-10).
- Federal Reserve Bank of St. Louis, [ICE BofA US High Yield Index Option-Adjusted Spread, BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2) (series definition, frequency, unit, and license notice; accessed 2026-07-10).
- FINRA, [Trade Activity and Trade History Data](https://www.finra.org/finra-data/fixed-income/about-trade-activity) (TRACE scope and trade-versus-quote distinction; accessed 2026-07-10).
- FINRA, [TRACE Fact Book](https://www.finra.org/filing-reporting/trace/trace-fact-book) (aggregate historical market structure; accessed 2026-07-10).
- Cboe Global Markets, [VIX White Paper](https://cdn.cboe.com/api/global/us_indices/governance/VIX_Methodology.pdf) (index construction and target horizon; accessed 2026-07-10).

## Open questions

- Which licensed source can support synchronized, legally redistributable OAS, option-surface, and realized-volatility observations?
- How stable are joint credit/volatility states after controlling for duration, index composition, option expiry, and macro-announcement timing?
- Which TRACE liquidity measures are reproducible with public data without confusing reporting activity with executable depth?
