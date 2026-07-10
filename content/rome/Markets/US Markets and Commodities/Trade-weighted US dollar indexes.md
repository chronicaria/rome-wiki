---
title: Trade-weighted US dollar indexes
created: 2026-07-10
source: llm
status: seed
tags: [investing, markets, united-states, quantitative-research, fx, dollar, macro]
---

A trade-weighted dollar index compresses many bilateral exchange rates into one basket, but its economic meaning depends on the partners, trade concept, price adjustment, weight vintage, and revision policy used to build it.

Up: [[US Markets and Commodities]]

Related: [[Interest-rate differentials and dollar exchange rates]] · [[Dollar cycles and commodity prices]] · [[Monetary policy transmission through financial conditions]] · [[Revisions and real-time macro data]]

## The question an index answers

There is no single, theory-free value of “the dollar.” A bilateral rate such as EUR/USD describes the dollar against one currency. A trade-weighted index instead asks how the dollar moved against a basket chosen to represent an economic exposure. That aggregation is valuable because U.S. exporters, importers, consumers, and policymakers face many currencies at once. It is also dangerous because two respectable indexes can differ even when both are calculated correctly.

The central research discipline is therefore to name the measure before interpreting it. At minimum, record the publisher, broad or narrow coverage, nominal or real construction, frequency, base period, observation or release date, series identifier, and vintage. “The dollar rose 5%” is incomplete unless the basket and window are specified.

The Federal Reserve Board's current family is designed around U.S. international trade. It contains a broad nominal dollar index and advanced-foreign-economy (AFE) and emerging-market-economy (EME) sub-indexes, with corresponding monthly real indexes. The Bank for International Settlements publishes nominal effective exchange rates (NEERs) and consumer-price-adjusted real effective exchange rates (REERs) for many economies, including broad and narrow U.S. measures. These families overlap, but they do not define foreign importance in the same way.

This distinction is practical. The Fed broad index is often the cleanest official answer to “how has the dollar moved against important U.S. trading partners?” The AFE and EME splits help locate which partner group drove the move. The BIS series are especially useful for cross-country comparison and international competitiveness research because the methodology is common across economies and its weights include competition in third markets. Neither family is automatically right for a portfolio, invoicing exposure, corporate revenue mix, or event study.

## Construction as a weighted geometric return

Both institutions use a geometric aggregation of bilateral exchange rates. In simplified form, the Fed's nominal index evolves as

$$
I_t=I_{t-1}\prod_{j=1}^{N(t)}\left(\frac{e_{j,t}}{e_{j,t-1}}\right)^{w_{j,t}},
$$

where $e_{j,t}$ is foreign-currency units per U.S. dollar for partner $j$, $w_{j,t}$ is its weight, and the weights sum to one. With this quotation convention, an increase means dollar appreciation. Taking logs makes the intuition transparent:

$$
\Delta\log I_t=\sum_j w_{j,t}\Delta\log e_{j,t}.
$$

The index log return is approximately a weighted average of bilateral log returns. A currency with a 15% weight contributes about 0.15 percentage point to the index for a 1% dollar appreciation against it, holding the other currencies fixed. Geometric chaining avoids several distortions of arithmetic averaging and makes proportional moves the natural unit.

The index level is normalized, not a price one can trade. The current Fed series uses January 2006 equal to 100; BIS series use 2020 equal to 100. Rebasing changes every level but no percentage change. A Fed level of 120 does not mean the dollar is “worth $1.20,” and a BIS REER above 100 does not by itself prove overvaluation. It says only that the basket has appreciated relative to the base-period normalization, subject to the published construction.

An effective index is also not a replicable futures contract unless a researcher separately specifies investable exchange rates, trading times, financing, rebalancing, transaction costs, and treatment of restricted currencies. Official fixings or representative rates may not match executable prices. The index is a statistical measure of exchange-value movement, not a self-financing portfolio return.

## The Federal Reserve dollar indexes

The Fed's post-2019 broad index includes currencies of important U.S. trading partners. At the methodology change, 26 economies covered roughly 90% of total bilateral U.S. trade. An economy's eligibility is judged against its share of U.S. goods-and-services trade, with a 0.5% reference threshold applied persistently rather than mechanically at every crossing. Periodic composition review limits churn while allowing the basket to follow structural trade change.

For included partner $j$, the current conceptual weight is its share of total bilateral U.S. trade:

$$
w_{j,t}=\frac{M^{goods}_{US,j,t}+M^{services}_{US,j,t}+X^{goods}_{US,j,t}+X^{services}_{US,j,t}}
{\sum_k T_{US,k,t}}.
$$

The calculation excludes oil, gold, and military equipment from goods trade because the Fed judges exchange-rate movements to have relatively little effect on trade in these categories. This is an economic design choice, not mere data cleaning. It makes the index more representative of trade thought to respond to exchange rates, while making it less representative of gross customs flows or commodity-import bills.

Services matter. Before the 2019 redesign, Fed weights were based on goods and included a third-market export-competitiveness component. The new approach added services and simplified weights to each economy's share of total bilateral trade. That raised the aggregate AFE weight because U.S. services trade is relatively intensive with advanced economies. The 2019 analysis showed why a methodology change can alter economic exposure even when the underlying exchange rates are identical: adding services increased weights for Canada, the United Kingdom, and the euro area, while China's weight declined relative to the old goods-centered design.

The broad family is partitioned into AFE and EME indexes. These are not risk-on and risk-off indexes, nor are they pure measures of developed- and emerging-market asset returns. They are sub-baskets of the Fed trade index. A broad-dollar move can be decomposed conceptually into movements against the two groups, but the sub-index levels cannot simply be added because each is independently normalized and geometrically chained.

The Fed publishes daily nominal observations through H.10 and monthly nominal and real series. H.10 is released weekly, normally on Monday at 4:15 p.m. Eastern time for the preceding business week. Thus “daily” describes observation frequency, not real-time availability. This matters for [[Event studies for financial markets]]: a daily Fed index cannot establish the minute-by-minute response to an FOMC announcement, and its public release lag must not be confused with the exchange-rate observation date.

The real Fed indexes adjust the nominal baskets using relative consumer prices. Conceptually, a real appreciation can arise from nominal dollar appreciation, faster U.S. inflation than partner inflation, or both. The exact interpretation should remain price-competitiveness-oriented, not welfare-oriented. Consumer prices are imperfect proxies for export prices, unit labor costs, or the prices of tradable goods.

## The BIS effective exchange rates

The BIS constructs EERs for a wide cross-section of economies using a common framework. Its broad indexes cover 64 economies; narrow indexes use a smaller group with longer histories. Monthly broad series begin later than narrow series, and daily data are nominal only. The breadth-versus-history choice is therefore real: a researcher studying the 1970s may need the narrow measure, while a recent global-trade study may prefer broad coverage.

The BIS distinguishes direct trade from third-market competition. Its weights are derived from manufacturing trade and are “double-weighted.” For imports, a partner's importance reflects its share in the home economy's manufacturing imports. For exports, importance reflects both direct exports to that partner and competition between the home country's producers and the partner's producers in other markets. The logic is that a Japanese currency move can affect U.S. competitiveness not only through U.S.–Japan trade but also when U.S. and Japanese firms compete in a third country.

That makes the BIS construction attractive for international price-competitiveness questions. It also creates limitations. Manufacturing trade is not total economic exposure: services, commodities, financial claims, global invoicing, and multinational production networks can matter greatly. The third-market calculation rests on a stylized differentiated-goods framework and available trade data, not a complete structural model of pass-through and substitution.

BIS weights vary over time in three-year blocks and the indexes are chain-linked. The data portal documents weight sets for 1993–95, 1996–98, and successive three-year periods through 2017–19, with the latest available set used for subsequent observations until newer complete trade data are incorporated. Earlier narrow history uses 1990–92 weights before 1990. These conventions avoid pretending that today's trade structure existed decades ago, but the most recent observations inevitably use lagged trade information.

The BIS NEER is the geometric weighted average of bilateral nominal rates. Its REER adjusts the NEER for relative consumer prices. An increase denotes appreciation in both series. A rising REER is commonly interpreted as a deterioration in price competitiveness, all else equal, because domestic prices expressed relative to trading partners have risen. “All else equal” carries much of the burden: productivity gains, product quality, markups, invoicing currency, supply-chain location, and exporter hedging can break a simple mapping from REER to export performance.

## Nominal versus real: two different questions

A NEER is appropriate when the object is the foreign-exchange value of the dollar itself. It helps summarize a currency shock, translate foreign-currency revenues mechanically, or compare broad moves with yields and commodity prices. A REER asks how the nominal move interacts with relative prices. It is usually better suited to medium-run competitiveness and macroeconomic adjustment.

Suppose the nominal dollar is unchanged against the basket but U.S. consumer prices rise 4% while partner prices rise 2%. The dollar's REER appreciates by roughly 2%, implying a loss of relative price competitiveness under the index's CPI proxy. Conversely, a nominal appreciation can be partly offset in the REER if partner inflation exceeds U.S. inflation.

The distinction also changes timing. Nominal rates are observed daily; CPI arrives monthly, with publication lags and revisions or seasonal-adjustment considerations. A monthly REER for month $t$ combines exchange-rate and price information that was not necessarily all public during that month. A point-in-time backtest must respect release dates or use nominal rates plus only then-available price vintages. Using the final historical REER series as if known contemporaneously creates look-ahead risk.

REER levels are not equilibrium-value estimates. A level of 120 with 2020 equal to 100 states a 20% appreciation since the base, not a 20% overvaluation. Estimating misalignment requires a model of equilibrium fundamentals, a historical benchmark, or another explicit counterfactual. Structural change can make the base year unusual, and a different base year changes the displayed level without changing the economics.

## Weight updates, chaining, and revisions

Trade weights should change because trade relationships change. Fixed weights would gradually turn an effective index into a history of yesterday's economy. Yet updating weights complicates interpretation. An index move over a long horizon reflects bilateral currency changes under a sequence of exposure maps, not one permanent basket.

Chain-linking addresses the mechanical break when weights change. Returns are calculated under the applicable weights and joined into a continuous index. This preserves a usable growth-rate history, but researchers should not treat a long-run index return as though the terminal weights applied throughout. Attribution over multiple weight regimes requires the historical weight schedule.

Revisions can arise through several channels: revised source exchange rates or consumer prices; revised trade data; new weight sets; composition changes; methodology changes; and rebasing. The Fed's 2019 redesign was especially consequential because it added services, removed third-market competition from its own formula, renamed sub-indexes, changed composition, and backcast the new methodology. Pre-2006 services weights in the extended historical reconstruction were estimated, so those observations do not have the same input foundation as the later period.

This yields three rules for empirical work. First, archive the retrieved series and metadata with an access date. Second, distinguish an observation's reference date from its publication date and the date of a later revision. Third, if the hypothesis depends on what an investor knew at time $t$, use a vintage captured at the time or reconstruct availability from primary releases. A current download is ideal for descriptive history but may not be valid point-in-time evidence.

## How to choose and interpret a measure

Start from the exposure being modeled:

- For aggregate U.S. trade exposure, use the Fed broad index unless the research question specifically requires third-market competition or cross-country methodological comparability.
- For whether advanced- or emerging-economy currencies drove a broad move, compare the Fed AFE and EME sub-indexes, while checking the actual currency weights.
- For international competitiveness across many home economies, the BIS broad REER offers a standardized starting point.
- For a long historical sample, consider the BIS narrow index, then document the narrower partner set and any weight-history limitations.
- For an FOMC or macro-announcement event window, construct an intraday basket from appropriately timestamped bilateral prices if licensing and methodology permit; do not relabel a weekly-released official series as intraday evidence.
- For a company, build a firm-specific basket from disclosed revenue, cost, and hedging exposures. Trade weights are rarely a faithful proxy for corporate cash flows.

Interpret returns, not raw levels, unless the base period is itself substantively relevant. Inspect contributions rather than assuming every bilateral rate moved together. Because log changes aggregate approximately as $w_j\Delta\log e_j$, a researcher can identify whether a broad move was concentrated in a few high-weight currencies or diffuse across the basket. That distinction can separate a euro-specific shock from a generalized dollar shock.

When comparing indexes, align sign conventions, frequency, time zones, holidays, and endpoints. Some market quotations express dollars per foreign currency while official formulas may convert to foreign currency per dollar. A careless inversion reverses returns. Monthly averages should not be compared with month-end closes as if identical. Nor should a Friday market move be paired with a Monday publication timestamp when the official observation refers to Friday.

## Limitations and common errors

**Trade is not finance.** Trade weights do not measure international debt denomination, cross-border banking, reserve holdings, derivatives, or safe-haven demand. The dollar's global funding role can make financially relevant exposures very different from bilateral trade shares.

**Trade is not invoicing.** Much global commerce is invoiced in dollars even when the United States is not one side of the transaction. A trade-partner basket can miss this vehicle-currency channel and the resulting pass-through asymmetry.

**Country weights are not sector weights.** The same broad appreciation can affect importers, commodity producers, software exporters, and domestic services firms differently. Contract currency, margins, hedges, sourcing, and competitive response determine incidence.

**CPI is not a perfect competitiveness deflator.** CPI covers nontradables and taxes and may move differently from producer prices, export prices, or unit labor costs. BIS REER is a disciplined common measure, not the only defensible real exchange rate.

**Coverage creates hidden choices.** A broad basket can better reflect current trade but may have shorter or less homogeneous history. A narrow basket can offer longer data while omitting economies that became important later. Restricted or managed exchange rates can also contain different information from freely traded rates.

**Latest weights are lagged.** Complete trade data arrive after the period they describe. The current basket is therefore an estimate based on past structure, especially around sudden tariff changes, sanctions, supply-chain relocation, or crises.

**An index is not causal evidence.** Co-movement between a broad dollar index and commodities, equities, or inflation can reflect common shocks such as global growth news, risk aversion, or interest-rate expectations. The index describes the currency leg; causal claims require identification and control for simultaneous news.

**Index families are not interchangeable.** The Fed removed third-market export competition when it added services; the BIS retains third-market competition but bases weights on manufacturing trade. Choosing one as a robustness check for the other is useful precisely because their exposure concepts differ, not because they are duplicate measurements.

## Why it matters

The index choice can change both a narrative and a quantitative result. A move concentrated against the euro may dominate a narrow financial-market index but be less dramatic in a broad trade basket that gives meaningful weight to the renminbi, Canadian dollar, and Mexican peso. An apparent nominal appreciation may look smaller or larger in real terms depending on relative inflation. A competitiveness result based on BIS double weights may differ from a U.S. bilateral-trade result without either being erroneous.

For macro analysis, a trade-weighted dollar is one channel through which [[Monetary policy transmission through financial conditions]] reaches net exports, import prices, corporate earnings, and global financial conditions. For commodities, dollar pricing can interact with foreign purchasing power, but the relevant causal structure is richer than a negative correlation. For quant research, the methodological lesson is broader: an aggregate factor is a measurement model. Its universe, weights, chaining, deflator, lag, and vintage are part of the hypothesis, not metadata to fill in after the regression.

The best practice is to predeclare the economic exposure, select the index that matches it, and test sensitivity to a meaningfully different official construction. If conclusions vanish when switching from Fed bilateral trade weights to BIS manufacturing double weights, the result may be exposure-specific rather than a universal “dollar effect.” That is information, not a failed robustness check.

## Sources

- Board of Governors of the Federal Reserve System, [Revisions to the Federal Reserve Dollar Indexes](https://www.federalreserve.gov/econres/notes/feds-notes/revisions-to-the-federal-reserve-dollar-indexes-20190115.html), FEDS Notes, January 15, 2019 — primary methodology, formulas, exclusions, 2019 redesign, historical implementation, and revision implications.
- Board of Governors of the Federal Reserve System, [H.10 Currency Weights](https://www.federalreserve.gov/releases/h10/weights/default.htm) — official current and historical weight tables and basket composition.
- Board of Governors of the Federal Reserve System, [Foreign Exchange Rates — H.10](https://www.federalreserve.gov/releases/h10/current/default.htm) — official release definitions, quotation conventions, index levels, and weekly publication schedule; accessed July 10, 2026.
- Board of Governors of the Federal Reserve System, [H.10 Nominal and Real Indexes](https://www.federalreserve.gov/releases/h10/summary/indexbc_m.htm) — official monthly nominal and real dollar-index histories.
- Bank for International Settlements, [Effective exchange rates — overview](https://data.bis.org/topics/EER) — official current coverage, frequencies, base period, interpretation, weight vintages, and FAQ; accessed July 10, 2026.
- Marc Klau and San Sau Fung, [The new BIS effective exchange rate indices](https://www.bis.org/publ/qtrpdf/r_qt0603e.pdf), BIS Quarterly Review, March 2006 — primary BIS methodology for geometric aggregation and double-weighted manufacturing-trade exposure.
- Bank for International Settlements, [Effective exchange rates — data](https://data.bis.org/topics/EER/data) — official series access and metadata.

## Open questions

- How much do Fed broad-dollar and BIS broad U.S. NEER returns diverge during episodes dominated by services trade, commodity shocks, or third-market competition?
- Can a fully reproducible point-in-time archive of Fed weights, exchange-rate inputs, CPI releases, and revision vintages be assembled from public sources?
- Which alternative deflator—producer prices, export prices, GDP deflators, or unit labor costs—best matches each specific U.S. competitiveness question?
- How should a firm-specific effective exchange rate incorporate revenue, input costs, debt currency, and hedging without creating false precision?
- When supply chains relocate rapidly, how large is the measurement lag created by annual Fed trade weights and three-year BIS weight blocks?
