---
title: Futures continuous contracts and roll bias
created: 2026-07-10
source: llm
status: seed
tags: [markets, futures, market-data, backtesting, commodities, methodology]
---

A continuous futures series is a researcher-built history that joins expiring contracts; its roll rule, adjustment method, and return convention can materially change the signal and must be specified before any backtest is believable.

Up: [[US Markets and Commodities]]

## The object on the chart is not the instrument in the account

An exchange lists separate futures by delivery or settlement month: December corn, March corn, June E-mini S&P 500, and so on. Each is a distinct legal contract with its own symbol, last trading day, settlement procedure, deliverability, tick value, price limits, and population of open positions. A trader holds one or more of these dated instruments. No exchange position called “continuous crude oil” or “continuous ten-year Treasury future” exists.

A **continuous contract** is instead a data transformation. A researcher chooses, on every date, which dated contract represents the market and then joins those observations into one long history. That is useful because any one contract has a short life, while forecasting and risk estimation often need decades. But the resulting series inherits choices absent from the raw exchange tape. Two reputable vendors can begin with identical settlements and publish different continuous histories without either making a clerical error.

This distinction matters in three separate tasks:

1. **Descriptive charts.** A continuous price level can show long trends, but historical levels may be synthetic.
2. **Signal construction.** Momentum, moving averages, volatility, breakouts, and correlations can change with splice and adjustment choices.
3. **Return simulation.** A tradable strategy must represent gains and losses in actual dated contracts plus the transition between them. A pretty continuous chart is not automatically a valid return index.

The safe mental model is therefore: raw contract panels are evidence; a continuous series is a model built from that evidence.

## Why naive concatenation creates a false jump

Suppose the active August contract settles at $80 and the October contract at $83 on a chosen roll date. A simple series that prints August through Monday and October from Tuesday will jump by $3 even if neither contract moves overnight. The jump is the curve spread, not a $3 profit available to a holder of August. A trader who rolls sells August and buys October; the account exchanges one exposure for another at prevailing prices. The $3 difference changes the number of dollars tied to a unit of the new contract, but it is not an instantaneous gain.

Leaving that splice in a price history can generate a false breakout, inflate measured volatility, and book fictitious strategy returns. Removing it can create a different problem: the adjustment may rewrite past price levels or suppress economically meaningful curve information. There is no universally correct single column because level analysis and return analysis ask different questions.

The exact daily profit on a long futures position is based on changes in the settlement of the contract actually held, multiplied by its contract multiplier. If contract $k_t$ is held over day $t-1$ to $t$, a simplified one-contract gain is

$$
\mathrm{PnL}_t = M_{k_t}\left(F_{k_t,t}-F_{k_t,t-1}\right),
$$

where $M$ converts the quoted price move into dollars. On a roll, the simulation must state whether the old contract is closed and the new one opened at settlement, a volume-weighted price, the next open, or another executable benchmark. It must not infer P&L from a synthetic splice unless that synthetic series was explicitly designed as a return index.

## Three common price constructions

### Unadjusted or Panama splice

The simplest construction selects a contract and concatenates its observed prices. It preserves the true quoted level of the selected contract on every date. That makes it useful for answering “what price did the then-active contract display?” It also preserves calendar spreads at the splice as jumps.

Those jumps contaminate changes across roll dates. A long-run difference between endpoints can accumulate dozens of unrelated curve gaps. Trend systems may trade the roll schedule rather than market movement. An unadjusted series is therefore a defensible display series only when roll boundaries remain explicit and calculations never treat splice jumps as returns.

### Additive back adjustment

An additive back-adjusted series removes each roll gap by adding a constant to all earlier observations. If old and new contracts are $80 and $83 at the splice, one convention adds $3 to the entire old history so the two pieces meet. Repeating backward through time makes the latest contract retain its actual level while older values are synthetic.

Additive adjustment preserves absolute price changes within each contract segment. That can suit strategies whose signal and P&L are naturally expressed in price points. But repeated constants can drive distant history below zero even when every raw futures quote was positive, and percentage changes depend on the rewritten denominator. The problem is not merely cosmetic: logarithms fail at nonpositive levels, proportional volatility is distorted, and thresholds tied to price level lose their original meaning.

Adjustment direction matters. Back adjustment rewrites history whenever a new roll is appended, so a live database queried today may not reproduce the values a historical researcher saw then. Forward adjustment leaves old history fixed and alters later segments, improving archival stability but making the recent level synthetic. Neither direction is neutral.

### Ratio or multiplicative adjustment

Ratio adjustment multiplies prior history by the ratio between new and old contracts at the splice. It preserves within-segment percentage changes and generally keeps a positive series positive. It is often more coherent for percentage-return signals spanning contracts with very different nominal price regimes.

But ratio adjustment rewrites absolute point moves and can be ill-defined when either price is zero or negative. That limitation became concrete when the expiring May 2020 WTI contract traded below zero. An algorithm that assumes strictly positive commodity prices is not a general futures algorithm. Ratios can also misrepresent products whose quoted number is already a transformed economic object, including some interest-rate contracts.

Other constructions include fixed-maturity or **constant-maturity** interpolation, which blends adjacent contracts to target a stable time to expiry, and weighted “perpetual” series that transition gradually over several days. These reduce a one-day switch but introduce synthetic combinations. Their weights and rebalancing returns must be recorded. Interpolation is not the same as trading a single listed contract, though a portfolio can often approximate it by holding the stated legs.

## Roll rules are part of the hypothesis

A roll rule determines when the selected contract changes. Common rules include:

- a fixed number of business or trading days before last trade, first notice, or delivery;
- a calendar rule, such as rolling during a published monthly window;
- the day the next contract’s volume exceeds the current contract’s volume;
- an open-interest crossover;
- choosing each day’s most liquid eligible contract; or
- holding a fixed ordinal contract, such as second nearby, subject to expiry safeguards.

Each answers a different question. A fixed schedule is known in advance and easy to reproduce. A volume crossover adapts to migration in trading activity but uses an observed variable that can cross more than once. An open-interest rule is often based on lagged data: CME notes that its standard settlement page displays previous-day open interest, while volume corresponds to the trade date. Treating same-date final open interest as known before a same-day close decision can introduce look-ahead.

Eligibility must be contract-specific. “Five days before expiry” can be too late for a physically delivered product whose first notice day arrives earlier, and unnecessarily early for a cash-settled financial future. Some nearby contracts become thin or behave unusually as delivery approaches. A reusable engine should ingest exchange calendars and specifications rather than hard-code a generic month-end rule.

Liquidity crossover rules need tie-breaking and hysteresis. If volume alternates between two months, a rule that always selects the daily maximum can roll forward, backward, and forward again—activity unlike a normal portfolio. A production rule might permit only forward rolls, require the deferred month to lead for two sessions, or use the first crossover after a specified date. Whatever choice is made should be frozen before the sample is evaluated.

## Roll return is not the visible gap alone

Commodity commentary often describes contango as a negative “roll yield” and backwardation as positive. The intuition is useful but frequently abused. If the curve is unchanged and a long position moves from an expensive deferred contract toward a cheaper near price as maturity approaches, its futures price can fall; the converse can occur in backwardation. Yet the realized return depends on how the whole curve evolves while the contract is held, not merely on the spread observed on roll day.

A spread of $3 does not itself become a $3 loss when a trader sells the old contract and buys the new one. Futures require margin rather than full purchase price, and economic exposure is maintained by selecting position size. The subsequent change in the new contract generates P&L. “Roll yield” is best treated as an attribution convention for the return generated by moving exposure along a term structure, not as a cash fee equal to the price gap.

This is why [[Commodity curves carry and convenience yield]] and the continuous-series problem should be linked but not conflated. Curve shape contains information about inventories, financing, storage, convenience yield, expectations, and risk premia. A back adjustment may hide the visual gap while a properly simulated futures return still reflects the economics of holding and rolling. Conversely, an unadjusted splice may display the gap yet falsely book it as a daily return.

## Price return, excess return, collateral return, and total return

“Futures return” is incomplete unless the financing convention is named. At least three objects commonly appear:

- **Contract price change** is the change in a particular quoted futures price. It does not by itself define portfolio return because futures require no full upfront purchase price.
- **Excess return index** tracks the gains and losses from collateralized notional futures exposure and rolls according to a stated methodology, before adding collateral interest. S&P’s GSCI documentation calculates contract daily returns through the roll and labels the resulting futures component excess return.
- **Total return index** adds interest earned on hypothetical collateral to the excess return. The collateral asset, rate proxy, lag, fees, and rebalance convention still matter.

The terminology can differ across providers, so formulas outrank labels. A backtest claiming “unlevered futures returns” should define notional exposure relative to capital—often one dollar of futures notional per dollar of collateral—then add collateral income and subtract commissions, exchange and clearing fees, bid-ask spread, market impact, and any financing cost. Variation margin cash flows and collateral valuation should be handled consistently.

Comparing a synthetic price percentage change with an index total return mixes objects. It can omit roll mechanics, interest, or both. In periods of high short rates, collateral return can materially separate total return from excess return even when the futures path is identical.

## Look-ahead enters through mundane data choices

The dramatic error is selecting the historical best roll date. More common errors are quieter:

- using final revised volume or open interest to trade at a time when those data were not available;
- deciding at today’s settlement that volume crossed and also executing at that same settlement;
- applying the current contract calendar, symbol mapping, or index methodology backward across eras in which it differed;
- using a back-adjusted history that changes retrospectively after each new roll;
- selecting “most liquid” with full-day information while claiming an intraday entry;
- filtering contracts based on later survival, data quality, or popularity; and
- tuning roll buffers on the test period.

A causal rule separates **decision time** from **execution time**. If the signal uses end-of-day volume, the earliest uncomplicated execution is usually the next tradable observation, not the close already used to form the signal. If a benchmark index publishes a predetermined roll calendar, same-window replication may be possible, but the researcher must model the actual multi-day weights and execution assumptions.

Historical methodology versions are also data. S&P explicitly warns that index results before launch are hypothetical backtests based on the methodology in effect at launch. A researcher should not silently call such a history live performance.

## Limit moves, stale settlements, and negative prices

Exchange price limits can prevent a contract from trading beyond a permitted range during a session. CME explains that the consequences differ by product: some markets pause and later expand limits, while grain futures can have daily hard limits. A settlement at limit with little or no executable volume is not proof that a large order could transact there. The latent clearing price may lie beyond the published limit.

Continuous construction can obscure this state. A liquidity rule may jump to a deferred month that is still trading, making the series appear smooth while the nearby contract is locked. Alternatively, a splice may convert the cross-month difference into an apparent return. Backtests should retain flags for limit state, zero volume, bid/ask-derived or model-derived settlement, exchange halt, and missing observation. Conservative execution logic should delay or penalize trades that could not plausibly fill.

CME’s settlement documentation also says some web settlements for contracts with neither open interest nor volume are reference values not published on its market-data platform and are not based on market activity. Treating every populated settlement field as an executable close overstates data quality. Raw provenance matters.

Negative prices require signed arithmetic, sensible margin and risk controls, and explicit handling of ratio transformations. Zero prices break percentage returns; near-zero denominators explode them. A robust pipeline should compute dollar P&L from raw contract changes first and only then scale by lagged capital or risk, rather than assuming a positive price return is universally meaningful.

## Contract specifications are data, not footnotes

A one-point move is not a common unit across futures. The dollar P&L depends on multiplier and quote convention. Treasury futures use price fractions and have delivery options; crude oil is quoted per barrel with a contract quantity; grain quotes and contract sizes differ; equity-index futures are cash settled with index-point multipliers. Contract sizes, tick increments, listed months, trading hours, termination rules, settlement methods, price limits, and delivery terms can change.

A reproducible panel therefore keys every observation to exchange, product, and exact expiration, with effective-dated specifications. Root symbols are insufficient: vendors rename products, exchanges merge, and month codes can collide. Store the source contract identifier, maturity, trade date, session timezone, raw quote, settlement status, multiplier, currency, volume, open interest and its as-of date, last trade date, first notice date where relevant, and adjustment lineage.

Corporate-style “continuous ticker” convenience should never erase the mapping back to raw contracts. Without that mapping, a reviewer cannot distinguish a market move from a splice, repair a bad vendor observation, or recompute P&L after a specification change.

## A reproducible research protocol

A credible continuous-futures study should make the following artifacts recoverable:

1. **Immutable raw panel.** Preserve every dated contract separately, including source, download timestamp, revision status, and exchange calendar.
2. **Eligibility table.** For each product and date, state which contracts were eligible and why, incorporating first notice, last trade, delivery, and minimum-liquidity rules.
3. **Predeclared roll algorithm.** Specify the decision variable, information lag, crossover rule, no-roll-back constraint, roll window, and execution price.
4. **Roll ledger.** Record old and new identifiers, decision timestamp, execution timestamp, prices, quantities or weights, spread, costs, and reason for every transition.
5. **Separate outputs.** Publish at least a raw active-contract level, an adjusted signal series, and a portfolio return series. Never force one column to serve all three purposes.
6. **Adjustment factors.** Save every additive offset, ratio, or interpolation weight so the continuous series can be rebuilt exactly.
7. **Return accounting.** Define contract multiplier, notional scaling, collateral rate and asset, margin cash treatment, transaction costs, and rebalancing.
8. **Data-quality flags.** Preserve missing days, zero volume, stale or indicative settlements, limit events, halts, negative prices, and manual corrections.
9. **Point-in-time test.** Re-run using only information available at each decision time and compare it with the convenient full-sample version.
10. **Robustness grid.** Report results under plausible fixed-date and liquidity-based rolls, adjusted and raw-contract return construction, delayed execution, and higher costs.

The most revealing validation is an identity check: reconstruct the strategy directly from its contract-level holdings and settlements, then compare that P&L with any return derived from the continuous series. Differences should be explained by declared collateral, costs, timing, or scaling—not by unexplained roll-day residuals.

## Why it matters

Continuous futures are infrastructure, not decoration. A hidden vendor default can manufacture momentum at rolls, erase carry, alter volatility targets, introduce future information, or make a strategy appear executable in a locked market. These errors can survive sophisticated modeling because the model begins downstream of the splice.

The remedy is not to ban continuous series. It is to match construction to purpose. Use raw contracts and an explicit roll ledger for returns; use an adjusted series for signals only after understanding what it preserves; retain an unadjusted view for quoted levels and curve gaps; and keep contract specifications and point-in-time availability beside the prices. Once those layers are separate, the researcher can ask whether a result comes from market economics, portfolio design, or data engineering.

## Sources

- [CME Group — About settlements](https://www.cmegroup.com/trading/about-settlements.html) — official definitions, timing, volume and open-interest lags, and warning about non-traded reference settlements.
- [CME Group — Daily settlements](https://www.cmegroup.com/market-data/daily-settlements.html) — official role of daily settlements in marking futures positions to market.
- [CME Group — Understanding price limits and circuit breakers](https://www.cmegroup.com/education/articles-and-reports/understanding-price-limits-and-circuit-breakers) — product-specific limits, halts, and expansions.
- [CME Group — Grain and Oilseed Price Limit FAQ](https://www.cmegroup.com/articles/faqs/grain-oilseed-and-lumber-price-limit-faq.html) — official example of hard daily limits and their calculation.
- [S&P Dow Jones Indices — S&P GSCI Quick Guide](https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-gsci-quick-guide.pdf) — primary index documentation distinguishing excess return from total return and describing rolls.
- [S&P Dow Jones Indices — S&P GSCI Enhanced Capped Commodity](https://www.spglobal.com/spdji/en/indices/commodities/sp-gsci-enhanced-capped-commodity/) — official distinction among spot, excess-return, and collateral-inclusive total-return variants, plus backtest disclaimer.
- [CFTC — Commitments of Traders explanatory notes](https://www.cftc.gov/MarketReports/CommitmentsofTraders/ExplanatoryNotes/index.htm) — official definitions of open interest and index traders’ fixed-methodology rolling.
- [Vojtko and Padyšák — Continuous Futures Contracts Methodology for Backtesting](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3517736) — research comparison of roll and price-adjustment choices.
- [Masteika, Rutkauskas, and Janes — Continuous futures data series for back testing and technical analysis](https://doi.org/10.3846/mla.2012.27) — research survey of additive, proportional, perpetual, and nearby-series construction.

## Open questions

- Which point-in-time contract-specification archive best captures historical changes across CME, CBOT, NYMEX, and COMEX products?
- How large are strategy-result differences between exchange settlement execution and conservative next-session execution during limit or low-liquidity episodes?
- Which collateral convention best matches the actual cash management of the portfolio being modeled rather than a generic commodity index?
- How should constant-maturity interpolation be stress-tested when adjacent contracts become temporarily nontradable or their liquidity migration is discontinuous?
