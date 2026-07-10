---
title: Options dealer positioning without mythology
created: 2026-07-10
source: llm
status: seed
tags: [markets, options, derivatives, volatility, market-microstructure, quantitative-research]
---

“Dealer gamma” is not a public market statistic: it is a model-dependent estimate built from observable contracts, prices, trades, and open interest plus uncertain assumptions about who owns each position and how intermediaries hedge it.

Up: [[US Markets and Commodities]]

Related: [[Volatility risk premium]] · [[Equity breadth and index concentration]] · [[Transaction-cost models]] · [[Funding liquidity versus market liquidity]]

## Why it matters

Options commentary often turns a conditional hedging mechanism into a total explanation for an index move. A chart labels a strike a “gamma wall”; a price approaches it; subsequent trading is narrated as proof that dealers pinned, repelled, or accelerated the market. The vocabulary sounds precise even when the position data, owner identities, hedge ratios, and counterfactual are unavailable.

There is a real mechanism underneath the mythology. An option's delta changes as the underlying price changes. A market maker who offsets option risk dynamically may therefore buy or sell the underlying as the market moves. If enough intermediaries hedge in the same direction at the same time, that flow can affect short-horizon liquidity and realized volatility. But every link in that sentence is conditional: **if** the dealer has the inferred option position, **if** delta hedging is the relevant response, **if** other risks and offsets do not dominate, **if** the hedge is executed in the instrument and interval being studied, and **if** the flow is large relative to available liquidity.

The disciplined use of positioning estimates is therefore as a scenario map, not an oracle. This note explains what is observed, what must be inferred, how the hedge mechanics work, why aggregation and zero-days-to-expiration options complicate the story, and what evidence would falsify a dealer-gamma explanation. It is educational research, not investment advice or a recommendation to trade.

## Start with the option mechanics

For an option value $V(S,t,\sigma,r,\ldots)$, delta is the local sensitivity to the underlying price:

$$
\Delta=\frac{\partial V}{\partial S}.
$$

Gamma is the local rate at which delta changes with the underlying:

$$
\Gamma=\frac{\partial^2 V}{\partial S^2}=\frac{\partial \Delta}{\partial S}.
$$

A long conventional call or put has positive gamma; a short call or put has negative gamma. Put delta is usually negative, but put gamma is positive for the long holder. Confusing delta's sign with gamma's sign is a basic but consequential error.

Suppose an intermediary is long $N$ otherwise identical options, each with contract multiplier $m$, and initially offsets the position's delta with the underlying. For a small underlying move $dS$, the option position's delta changes approximately by

$$
d\Delta_{\text{position}}\approx N m \Gamma\,dS.
$$

To remain delta-neutral, a **long-gamma** intermediary sells some underlying after a rise and buys after a fall. Its incremental hedge is contrarian. A **short-gamma** intermediary does the reverse: it buys after a rise and sells after a fall. Its incremental hedge is directionally reinforcing. This is the kernel behind claims that positive dealer gamma can dampen moves while negative dealer gamma can amplify them.

The approximation is local. Gamma itself changes with price, time, and implied volatility. Delta can jump when volatility or dividends are repriced even if spot does not move. Index options generally settle in cash, while equity options ordinarily represent deliverable shares; exercise style and settlement time differ across products. Hedging can use stock, futures, exchange-traded funds, other options, variance exposure, or internal offsets. A dealer need not continuously rebalance at every tick, and a firm can optimize a portfolio across clients, desks, maturities, and correlated underlyings rather than neutralize every contract independently.

“Gamma causes buying” is also incomplete without specifying whose gamma and the direction of the move. The long option holder has positive gamma, while the short counterparty has negative gamma. Market commentary usually means the gamma of an assumed dealer inventory, not aggregate market gamma: across all parties, every long option has a short counterparty, so signed option positions sum to zero before considering economic ownership and hedges.

## What is actually observable

Several inputs are public or commercially observable, although even these require definitions and timestamps.

**Contract terms** are published by the exchange or clearing organization: underlying, strike, expiration, multiplier, exercise style, settlement method, trading hours, and corporate-action adjustments. These determine the legal instrument and prevent false comparisons between, for example, a cash-settled European-style index option and an American-style option on an exchange-traded fund.

**Quotes and transactions** reveal displayed prices, sizes, and prints at particular times. The Options Price Reporting Authority disseminates consolidated US listed-option quotation and last-sale information under its plan and data agreements. A trade print does not reveal the buyer's economic identity, complete inventory, or motive. Bid/ask location can support a probabilistic buyer- versus seller-initiated classification, but midpoint trades, crossed or rapidly updating markets, multi-leg orders, auctions, and reporting latency create ambiguity.

**Volume** counts contracts traded during a period. It is flow, not inventory. The same contract can trade repeatedly during a day, so volume cannot be added to yesterday's holdings as if every print opened a new position.

**Open interest** is the number of contracts outstanding after clearing records positions. It is an unsigned total for a series, not a directional survey. One open contract necessarily has a long and a short. Open interest does not say whether the long is a retail customer, fund, corporate, or dealer; whether the short is covered; whether either side holds an offset elsewhere; or whether today's volume opened or closed the contract. Because open interest is normally an end-of-day rather than real-time inventory measure, intraday maps can be stale exactly when same-day activity is greatest.

**Regulatory and clearing aggregates** add context without solving attribution. The Options Clearing Corporation publishes volume and open-interest statistics, including customer and firm categories in some reports. The SEC's market-structure materials and disclosure rules describe listed-options trading and order handling. These aggregates generally do not disclose a named firm's live strike-by-strike net Greeks. Confidential supervisory or large-trader information available to regulators is not equivalent to a public real-time dealer book.

**Prices and implied volatility** permit a model to calculate delta and gamma. The calculation still depends on model inputs and conventions: spot or forward, discount curve, dividend assumptions, time to settlement, volatility surface, exercise features, and treatment of discrete dividends or early exercise. A vendor's gamma number is therefore a calculated sensitivity, not a field directly reported by the dealer who owns the risk.

## What a dealer-gamma chart infers

A common public estimate starts with open interest by strike and expiry, calculates each option's gamma, scales by the multiplier and sometimes by a chosen underlying-price move, then assigns a sign according to an ownership rule. A schematic exposure measure is

$$
GEX(S)=\sum_i q_i^{D}\,m_i\,\Gamma_i(S)\,S^2c,
$$

where $q_i^{D}$ is the dealer's **assumed signed** quantity in series $i$, $m_i$ is its multiplier, and $c$ is a reporting scale such as 1% of spot. Some publishers report shares to hedge per one-point move; others report dollars per 1% move or a gamma-weighted notional. Numbers from different conventions are not comparable until the formula and sign are known.

The hardest term is $q_i^{D}$. Public open interest provides a magnitude but not dealer ownership. Rules such as “dealers are short all customer calls and long all customer puts” are assumptions, not observations. Customers can buy or write calls, buy or write puts, and trade spreads. Dealers can transfer risk to other dealers, cross customer orders, hedge with another option, or retain inventory. An index overwrite program and a speculative call buyer can create opposite dealer positions in the same option type.

Intraday flow models attempt to improve on the blanket rule by classifying each trade as buyer- or seller-initiated, identifying opening versus closing activity, recognizing spreads, and accumulating an estimated inventory. Each stage can fail. A print near the ask does not prove a customer bought from a dealer. A complex order may contain legs whose economic meaning appears only as a package. Opening and closing flags available inside clearing or broker systems may not be present in the public feed. A dealer-to-dealer trade can move gross inventory without changing the intermediary sector's net exposure.

Even a correct signed option inventory does not reveal the hedge. A dealer can be delta-neutral through futures, shares, ETFs, or correlated instruments; can offset gamma across strikes and expiries; and can carry residual risk within limits. The quantity relevant to price impact is the **change in executed hedge demand**, not the static gamma total. Hedge demand then meets a time-varying supply curve: the same notional may be absorbed quietly in a deep market and move price sharply when depth is thin.

Terms such as **gamma flip**, **zero-gamma level**, **call wall**, and **put wall** are therefore vendor-defined summaries. A zero-gamma level is usually the hypothetical spot where the model's aggregated signed gamma crosses zero while specified inputs are held fixed. It is not a contractual barrier. Change the ownership rule, volatility surface, included expiries, spot timestamp, or index-versus-ETF universe and the crossing can move or disappear.

## Aggregation can erase the economically relevant structure

There is no uniquely correct market-wide aggregation. The proper unit depends on the hypothesis.

Aggregating all strikes and maturities into one net number can cancel a large positive near-dated exposure with a large negative long-dated exposure even though their hedging clocks differ. Near-expiry gamma can change rapidly around spot; a long-dated position may have lower spot gamma but larger vega, correlation, or balance-sheet significance. Netting them is arithmetically valid under one convention and behaviorally misleading under another.

Aggregating calls and puts by option label can also mislead. Gamma for a long call and long put is positive, but inferred dealer signs depend on the actual side held. Strike-level concentrations matter because gamma is most sensitive near the relevant forward price close to expiration, yet a prominent open-interest strike may represent a spread with offsetting exposure at another strike.

Product boundaries matter. S&P 500 index options, options on an S&P 500 ETF, and equity-index futures options are distinct contracts with different settlement, tax, hours, multipliers, and participant mixes, but their hedges can meet in related futures and stock baskets. An analysis confined to one product may miss an offset; an analysis that mechanically combines all products must map units, bases, correlations, and settlement clocks.

The intermediary category is also heterogeneous. “Dealer” can mean an exchange market maker, a broker-dealer legal entity, an options desk, or the consolidated dealer sector. One firm may be long gamma while another is short. Their hedge triggers, funding costs, inventory limits, execution algorithms, and internalization opportunities differ. A sector net near zero does not imply no hedging flow: offsetting firms may trade at different times and through different venues. Conversely, a large gross gamma sum does not prove large market flow if risks are crossed internally.

## Zero-DTE options sharpen both the mechanics and the measurement problem

A zero-days-to-expiration option expires on the trading day under discussion. More frequent expirations have made same-day index options a large and closely watched segment of listed volume. High volume alone does not establish destabilizing dealer positioning.

Near expiration, an at-the-money option's delta can become extremely sensitive to small spot moves. Time remaining is short, so gamma can be concentrated in a narrow price region. This creates the possibility of rapid hedge adjustments. But the sensitivity is local and state-dependent: once an option moves sufficiently in or out of the money, its gamma may fall. Same-day positions also disappear at settlement, so a large exposure can be transient rather than persistent overnight inventory.

Zero-DTE activity makes end-of-day open interest especially incomplete. Positions can be opened and closed within the same session and never appear as a durable next-day stock. A model based on the prior night's open interest can omit much of the day's relevant flow; a model that equates same-day volume with opening inventory can greatly overstate it. Accurate reconstruction would require timely trade direction, opening/closing status, complex-order linkage, participant capacity, exercises, and offsets—fields that are not all available in the public consolidated feed.

The settlement clock matters. Some index series settle from a closing value; others use an opening-derived settlement value. Options stop trading or settle under product-specific rules, and hedges can be unwound before, during, or after the relevant calculation window. “Pinned at the close” is not a coherent claim until the contract and settlement procedure are named.

Zero-DTE can plausibly dampen or amplify intraday movement depending on net intermediary exposure, customer flow, and market state. Research that finds small average effects does not rule out conditional effects in particular intervals; an anecdote on a volatile day does not establish a general mechanism. The credible question is comparative: after controlling for news, volatility, liquidity, and predictable intraday patterns, are price changes, reversals, depth, or hedge-correlated flows different when independently estimated exposures are large?

## Data and licensing constraints are part of the method

US listed-options data are not a frictionless public commons. OPRA administers consolidated options information under exchange-participant plans, subscriber agreements, fees, usage categories, and redistribution rules. Exchanges also sell proprietary depth, auction, complex-order, and analytic feeds. A researcher may have the right to view data without the right to republish raw records or derived products at arbitrary granularity.

Commercial positioning dashboards can incorporate licensed feeds, proprietary trade classification, estimated customer direction, implied-volatility surfaces, and normalization choices. Their labels may look standardized when their methodologies are not. Reproducibility requires documenting the exact feed, fields, timestamp, corrections, universe, corporate-action handling, option model, volatility surface, ownership assumptions, multiplier, and exposure units. If licensing prevents release of raw inputs, the limitation should be stated rather than disguised by a chart.

Historical research also faces survivorship and reconstruction problems. Option symbology, contract adjustments, late corrections, quote condition codes, crossed markets, and complex trades must be handled. Using today's cleaned open interest to simulate what was known intraday creates look-ahead bias. Joining a closing open-interest file to earlier trades can silently use future information. See [[Point-in-time data and look-ahead bias]].

The most honest public chart may therefore be a range across plausible assumptions rather than a single line. Sensitivity tests can vary dealer-ownership rules, include and exclude same-day expiries, perturb implied volatility and dividends, separate products, and show gross as well as net exposure. If the conclusion reverses under mild alternatives, it is not a robust positioning fact.

## What would falsify a dealer-gamma story

A mechanism becomes useful when it can fail. Before examining the subsequent price path, state the predicted sign, horizon, instrument, and observable implication.

For an asserted short-gamma feedback, one prediction is that dealer-associated hedge demand should be positively related to contemporaneous underlying returns: buying into rises and selling into falls. For asserted long-gamma stabilization, the sign should reverse. The relationship should strengthen when the estimated exposure is larger and available liquidity is thinner. It should weaken after the position expires, is closed, or is offset.

Evidence against the story includes:

- signed regulatory, broker, or participant data showing that intermediaries held the opposite exposure from the public assumption;
- an inventory reconstruction showing the highlighted open interest was primarily customer-to-customer or offset across products;
- observed underlying or futures flow with the wrong sign, timing, or magnitude for the proposed hedge;
- no change in return continuation, reversal, realized volatility, or liquidity across otherwise comparable high- and low-exposure states;
- the claimed “level” moving substantially when reasonable ownership, surface, or inclusion assumptions change;
- the effect appearing before the hypothesized position existed, persisting unchanged after expiration, or appearing equally in placebo strikes and dates;
- public news, index rebalancing, auction imbalance, systematic fund flow, or macro hedging explaining the timing more directly.

Price touching or reversing near a high-open-interest strike is not itself verification. Strikes are densely spaced, salient levels are selected after the fact, and prices frequently reverse somewhere. A proper event study must freeze the estimate using point-in-time information, predefine the level and window, compare against a benchmark, account for overlapping events and intraday seasonality, and report null as well as positive results. See [[Event studies for financial markets]].

Market impact also needs scale. Translate the predicted hedge into shares or futures contracts per unit move, state the rebalance rule, and compare it with contemporaneous volume, depth, and ordinary flow variability. A huge-looking dollar gamma statistic can imply modest executable flow after converting units. Conversely, a moderate flow can matter in a thin interval. Without that bridge, “large gamma” is only an adjective.

## A disciplined reading protocol

When presented with a positioning chart, ask seven questions:

1. What is the precise product universe and as-of timestamp?
2. Which fields are observations, and which are vendor estimates?
3. How were trades assigned to customers, dealers, buyers, sellers, openings, and closings?
4. What option model, volatility surface, multiplier, and reporting unit produced the Greeks?
5. What offsets across strikes, expiries, products, and firms are included or excluded?
6. What hedge behavior and market-impact channel is being assumed?
7. What prospective observation would show the explanation was wrong?

Answers need not make the estimate useless. They determine what it is useful for. A transparent map can identify states worth monitoring, organize scenario analysis, or supply a predeclared variable for research. It cannot reveal a live consolidated dealer book that the underlying data do not contain.

The best conclusion is often conditional: *under this ownership model, and assuming delta hedging through these instruments, a move through this region would increase estimated procyclical hedge demand*. That sentence is less dramatic than “dealers will force the market lower,” but it preserves the difference between measurement, model, and mechanism.

## Sources

- [Options Clearing Corporation, Volume and Open Interest](https://www.theocc.com/market-data/market-data-reports/volume-and-open-interest) — official clearing-industry statistics and report definitions (accessed 2026-07-10).
- [Options Clearing Corporation, Characteristics and Risks of Standardized Options](https://www.theocc.com/company-information/documents-and-archives/options-disclosure-document) — official options disclosure document covering contract, exercise, settlement, and risk mechanics (accessed 2026-07-10).
- [Options Price Reporting Authority, Document Library](https://www.opraplan.com/document-library) — current authoritative library for the governing OPRA Plan and official data-use, reporting, and redistribution policy materials (accessed 2026-07-10).
- [Cboe Global Markets, SPX Options Product Specifications](https://www.cboe.com/tradable_products/sp_500/spx_options/specifications/) — primary contract specifications, exercise, and settlement information (accessed 2026-07-10).
- [Cboe Global Markets, The State of the Options Industry: 0DTE Edition](https://www.cboe.com/insights/posts/the-state-of-the-options-industry-0-dte-edition/) — exchange analysis of same-day option growth and participant behavior; informative but not independent of the venue (accessed 2026-07-10).
- [SEC, Investor Bulletin: An Introduction to Options](https://www.sec.gov/oiea/investor-alerts-and-bulletins/ib_introductionoptions) — regulatory overview of option rights, obligations, and risks (accessed 2026-07-10).
- [SEC, Equity Market Structure Literature Review Part II: High Frequency Trading](https://www.sec.gov/marketstructure/research/hft_lit_review_march_2014.pdf) — regulatory literature review useful for separating trading-flow inference from causal market-impact claims (accessed 2026-07-10).
- [CFTC, Commitments of Traders explanatory notes](https://www.cftc.gov/MarketReports/CommitmentsofTraders/ExplanatoryNotes/index.htm) — official explanation of trader classifications and aggregation limits in futures and futures-options reports; not a live strike-level dealer book (accessed 2026-07-10).

## Open questions

- Which public or licensed datasets most reliably identify opening versus closing option trades without using future open-interest information?
- How stable are estimated dealer-gamma signs across defensible ownership classifiers and cross-product netting rules?
- Do zero-DTE hedge effects differ systematically between scheduled macro announcements, ordinary sessions, and expiration settlement windows?
- Can participant-level research distinguish gross offsetting hedge flow from sector net exposure while protecting confidential positions?
