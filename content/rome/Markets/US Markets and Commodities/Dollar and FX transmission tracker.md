---
title: Dollar and FX transmission tracker
created: 2026-07-10
source: llm
status: seed
tags: [investing, markets, united-states, quantitative-research, fx, dollar, transmission, macro]
---

A useful dollar tracker is a causal map, not a single index: it separates the shock that moved exchange rates from the trade, inflation, earnings, commodity, balance-sheet, and funding channels through which the move may propagate.

Up: [[US Markets and Commodities]]

Related: [[Interest-rate differentials and dollar exchange rates]] · [[Cross-currency basis]] · [[Real rates inflation compensation and term premium]] · [[Commodity curves carry and convenience yield]] · [[Event studies for financial markets]]

## What this tracker is for

“The dollar rose” is an observation whose economic meaning depends on four missing choices: against which currency basket, over what interval, because of which shock, and for whom. A broad trade-weighted appreciation can coexist with dollar weakness against one important currency. A nominal appreciation can be partly offset by relative inflation over a longer horizon. A rise caused by stronger expected US growth need not have the same consequences as a rise caused by global deleveraging, even if the exchange-rate change is identical.

The tracker therefore does not attempt to forecast the dollar or convert a dashboard into trading advice. Its job is to impose measurement discipline on research about transmission. It should answer three questions in sequence:

1. **What moved?** Define the bilateral rate or basket, quote convention, frequency, observation time, and vintage.
2. **What shock is consistent with the joint evidence?** Compare relative rate expectations, growth news, risk appetite, funding conditions, hedging demand, commodity shocks, and policy actions.
3. **Where could the move matter next?** Trace exposure through prices and volumes, corporate cash flows, commodity invoicing, foreign-currency liabilities, collateral, and portfolio hedges, while preserving lags and alternatives.

This page integrates those steps. The narrower mechanics of rates and synthetic funding belong in [[Interest-rate differentials and dollar exchange rates]] and [[Cross-currency basis]].

## First choose the dollar that matches the question

### Bilateral rates

A bilateral pair is the cleanest measure for a country-, policy-, or firm-specific question. EUR/USD, for example, is normally dollars per euro, so a fall denotes dollar appreciation. USD/JPY is yen per dollar, so a rise denotes dollar appreciation. A data table must store the raw quote convention and a normalized return in which a positive number always means dollar appreciation: use $+100\Delta\ln(q)$ when $q$ is foreign currency per dollar and $-100\Delta\ln(q)$ when $q$ is dollars per foreign currency. This normalizes returns, not price levels or an improvised basket. Otherwise, joining pairs creates silent sign errors.

Bilateral rates are also necessary when exposures are concentrated. A US company earning mostly euros does not have the same translation exposure as the Federal Reserve’s broad trade basket. A Mexican importer with dollar invoices cares about USD/MXN and contract currency, not an abstract global index. For event work, timestamped bilateral prices can show whether FX moved before or after an announcement; a daily official index cannot establish intraday ordering.

### Nominal effective indexes

The Federal Reserve’s nominal broad dollar index is designed to summarize the dollar against important US trading partners. Its current methodology uses geometrically weighted bilateral changes and trade weights that account for bilateral trade and competition with US producers in third markets. The Board also publishes advanced-foreign-economy and emerging-market-economy subindexes. An increase means dollar appreciation.

This is usually a better starting point than a narrow, fixed basket when the question concerns aggregate US trade or imported inflation. But “broad” does not mean universal. The weight scheme represents trade exposure, not foreign-currency debt, securities holdings, commodity invoicing, or a particular company’s revenue mix. The Board updates and may revise weights; its H.10 page warns that weight changes can revise historical index values. A reproducible study should retain the download date, series identifier, methodology vintage, and any locally computed returns rather than assuming today’s history was available in real time.

The BIS publishes nominal and real effective exchange rates with broad and narrow coverage. BIS weights incorporate bilateral trade and third-market competition, making them useful for cross-country comparisons. The choice between Fed and BIS measures should follow the research question, not whichever series produces a clearer chart.

### Real effective indexes

A real effective exchange rate adjusts nominal exchange rates for relative price levels. It is more relevant to medium-run competitiveness than a nominal index, but it is not an observable real-time market price. Consumer-price data arrive with lags, are revised or reweighted, and may poorly match traded-goods costs. Monthly real indexes should not be used to explain an intraday asset move.

The real index also bundles two forces: currency changes and relative inflation. Researchers should retain both components. Saying that “competitiveness deteriorated because the dollar rose” is too strong if most of the real appreciation came from domestic prices, and even a measured real appreciation does not reveal how firms adjusted markups, sourcing, or invoicing.

## The shock comes before the channel

An exchange rate is an asset price that incorporates expected future policy, income, risk, and constraints. It is not an independently assigned treatment. A disciplined tracker begins with competing shock families.

### Relative monetary-policy and growth news

An upward revision to the expected US short-rate path relative to foreign paths can support the dollar by changing returns and forward pricing. Stronger relative US activity may raise both expected rates and expected cash flows. But observed government-yield differentials mix expected short rates, inflation compensation, term premia, liquidity, and market segmentation. The correct panel uses matched maturities and currencies, preferably changes in expected policy paths or instruments close to the event, rather than treating the ten-year yield gap as a sufficient cause.

The joint signature matters. Dollar appreciation with higher relative expected US rates, stable credit spreads, and stable equity volatility is more consistent with policy divergence than appreciation accompanied by falling global equities, wider credit spreads, and strained funding. Even then, “consistent with” is preferable to “caused by” unless the surprise is isolated.

### Global risk, liquidity, and dollar funding

The dollar is simultaneously a US currency, an invoicing unit, a reserve asset, and a global funding currency. During deleveraging, borrowers may seek dollars to repay liabilities or meet margin while investors seek liquid dollar assets. Dealers may conserve balance sheet. The dollar can therefore appreciate even while markets price Federal Reserve easing.

Cross-currency basis, FX-swap pricing, short-term funding spreads, dealer balance-sheet dates, central-bank dollar operations, credit spreads, volatility, and Treasury liquidity help distinguish this state. None is a standalone “dollar shortage gauge.” Basis conventions vary; facility use depends on price, eligibility, stigma, and access; and safe-haven demand may coexist with forced dollar buying. The 2026 BIS report on foreign-currency funding emphasizes maturity mismatches, derivatives, collateral, and liquidity-management practices, reinforcing the need to map obligations rather than infer stress from one price.

### Terms-of-trade and commodity shocks

Commodity moves can drive currencies rather than merely respond to them. A rise in an exporter’s key commodity may improve expected external income and support its currency, mechanically making the dollar appear weaker against it. Conversely, a generalized dollar appreciation can raise local-currency commodity costs where commodities are priced in dollars. Energy importers and exporters may therefore react differently to the same oil and dollar move.

The tracker should record commodity price in dollars, the same price converted into the relevant local currency, curve structure, and whether the underlying shock appears to be supply, demand, inventory, transport, or financing. A negative dollar–commodity correlation is not a structural law: both can rise after a supply disruption or flight to liquidity.

### Fiscal, trade, and portfolio shocks

Fiscal news can change relative growth, inflation, Treasury supply, term premia, and perceived sustainability at once. Tariffs can alter expected trade volumes, prices, retaliation, and policy paths. Reserve managers, pension funds, insurers, and global bond funds can create large currency flows without a contemporaneous macro release. Hedge rebalancing can be triggered mechanically by changes in asset values.

These cases require a flow-aware explanation. Securities transactions, issuance in different currencies, hedge ratios, Treasury auction information, and positioning releases can offer context, but most arrive late or incompletely. Absence of a public flow series is not evidence that flows were absent.

## Six transmission channels

### 1. US import prices and consumer inflation

A dollar appreciation reduces the dollar cost of a fixed foreign-currency price, but the pass-through to US import prices depends on invoice currency, price stickiness, foreign exporters’ markups, contracts, hedging, shipping, tariffs, and commodity inputs. Pass-through to final consumer prices is further diluted by domestic distribution, labor, rents, and margins. The sequence is therefore exchange rate → border price → producer or wholesale cost → retail price, with different lags and elasticities.

Dominant-currency pricing complicates the textbook picture. Much global trade is invoiced in dollars even when the United States is not a party. For US imports already priced in sticky dollars, the immediate mechanical effect of a bilateral move may be small; foreign suppliers may adjust dollar prices or margins later. A tracker should compare the broad dollar with BLS import-price indexes excluding petroleum and with appropriate industry detail, then compare import prices with producer and consumer categories. Contemporaneous correlation is not pass-through identification.

### 2. US exports, imports, and external adjustment

A stronger dollar can make US goods more expensive abroad and foreign goods cheaper in the United States, eventually discouraging exports and encouraging imports. Yet quantities respond with delays because orders, distribution networks, capacity, hedges, and contracts are sticky. Income effects may dominate price effects: a dollar appreciation caused by strong US demand could coincide initially with rising imports, while weak foreign demand can depress US exports independently.

BEA notes that exchange-rate effects enter national accounts through export and import prices, volumes, the terms of trade, and command-basis measures. Composition and margins also matter. The tracker should therefore avoid reading the nominal trade balance alone. Use real export and import quantities, price deflators, partner or product detail, and domestic-versus-foreign demand controls. Monthly trade data are too slow to validate an event-day narrative.

### 3. Corporate revenue, costs, and accounting translation

For a US multinational, dollar appreciation can reduce the reported dollar value of foreign-currency revenue and profit even if local-currency operations are unchanged. That is translation. Transaction exposure concerns contracted foreign-currency receivables, payables, debt, or inputs. Economic exposure concerns longer-run pricing, demand, sourcing, and competition. These are different.

Company analysis should map revenue, costs, assets, debt, invoice currencies, functional currencies, hedge instruments, hedge horizons, and management’s constant-currency reconciliations. A gross foreign-revenue share is not net dollar sensitivity. A firm may earn euros and incur euro costs, creating a natural hedge; it may hedge forecast revenue; or foreign competitors may change prices. Company disclosures document management’s definitions and hedge policy, not a stable causal beta.

At the index level, aggregating foreign sales without sector, margin, and cost information can mislead. Dollar moves also correlate with discount rates and global growth, which may dominate translation. An event study should not label the residual return of “international-revenue stocks” an FX effect without controlling for industry, size, duration, commodity exposure, and the initiating shock.

### 4. Commodities and physical balances

Many globally traded commodities are quoted in dollars, creating a unit-of-account connection but not a fixed causal coefficient. A dollar appreciation can reduce non-US buyers’ purchasing power if local prices rise, potentially weighing on demand. Producers with local-currency costs and dollar revenue may see margins change. Dollar funding and inventory finance can affect storage and trade credit. But physical scarcity, OPEC+ decisions, weather, mine disruptions, and Chinese demand can overwhelm the currency channel.

Track spot and relevant futures contracts, local-currency conversions, calendar spreads, inventories, freight, and producer currencies. Separate a change in the dollar price from a change in the buyer’s delivered local-currency price. [[Commodity curves carry and convenience yield]] and [[Shipping freight and commodity price transmission]] provide the needed curve and logistics checks.

### 5. Foreign dollar balance sheets and global risk assets

An unhedged borrower that earns local currency but owes dollars experiences a rising debt burden when the dollar appreciates. Cash flow, collateral values, and refinancing capacity may weaken together. Hedged borrowers exchange spot risk for rollover, margin, counterparty, and basis risk. Banks can face maturity mismatches between dollar assets and dollar funding.

Transmission depends on gross positions, not just a country’s net external balance. Sector, maturity, instrument, hedge coverage, collateral, and lender matter. BIS international banking, debt-security, and global-liquidity statistics can map broad exposures, but they are aggregated and lagged. They cannot identify the marginal buyer in a daily move. The tracker should label balance-sheet vulnerability as an exposure hypothesis until financing quantities, maturities, and hedges support it.

### 6. Hedged portfolio returns and US asset demand

Foreign investors compare US assets in both unhedged and currency-hedged terms. The hedged return depends on asset yield, FX forward points, cross-currency basis, transaction costs, and hedge horizon. Higher Treasury yields can coincide with worse hedged returns if forward hedging costs rise. Conversely, an unhedged investor can benefit from dollar appreciation but bears reversal risk.

This channel links exchange rates to Treasury, corporate-bond, and equity demand without implying a one-to-one flow. Mandates, benchmark weights, capital rules, hedge ratios, and liability currency constrain behavior. Research should calculate instrument-matched hedged yields and avoid substituting the spot exchange-rate return for the cost of a forward hedge.

## A measurement schema that can survive review

Each tracker observation should be a versioned record rather than a prose impression.

| Field | Minimum specification |
| --- | --- |
| Research time | as-of timestamp and timezone; download time; revision or vintage status |
| FX measure | provider, series or ticker, pair/basket, nominal or real, weights, frequency, quote convention |
| Window | pre-event baseline, event timestamp, end timestamp, holidays and session boundaries |
| Candidate shock | release or event; expected baseline; surprise measure; leading and rival hypotheses |
| Rates | matched US and foreign expected-rate or yield changes, maturities, nominal/real distinction |
| Risk and funding | equity volatility, credit, basis convention, money-market and liquidity indicators |
| Trade and prices | import/export price and volume series, reference period, release lag, revisions |
| Corporate exposure | revenue, cost, debt, functional/invoice currencies, hedges, filing period |
| Commodities | contract, month, unit, location/grade, curve, local-currency conversion, inventory context |
| Causal status | observation, descriptive association, event-study inference, or identified estimate |
| Falsifier | evidence that would weaken the preferred interpretation |

Store levels and log changes, but do not mix them casually. For a dollar index $D_t$ defined so that an increase is appreciation, a log change is $100[\ln(D_t)-\ln(D_{t-1})]$. For bilateral pairs, normalize the sign before aggregation. Returns need a consistent closing time; global FX trades across calendar boundaries that do not line up neatly with US asset closes.

Use daily nominal indexes for daily or longer work, intraday bilateral data for event timing, and monthly real indexes for medium-run competitiveness. Preserve release timestamps for macro and trade series. A data observation dated June may not have been known until July and may later be revised. [[Point-in-time data and look-ahead bias]] is therefore part of the causal design, not clerical hygiene.

## Causal limits and verification tests

The central problem is endogeneity: the dollar and the supposed outcome often respond to the same news. Strong US growth can appreciate the dollar and raise equities; global stress can appreciate the dollar and lower them. Regressing equity returns on dollar returns mixes those regimes.

A credible event study specifies the information set and expected baseline, uses a window narrow enough to limit confounders, verifies that the exchange-rate move followed the event, and checks related markets. High-frequency monetary surprises can help isolate policy news, but central-bank announcements can simultaneously reveal information about the economy. Sign restrictions or instruments embed assumptions that must be stated.

For slower trade and inflation channels, distributed lags and controls for commodity prices, foreign costs, demand, tariffs, and margins are essential. Coefficients can change across invoice currencies, industries, regimes, and horizons. Aggregation can hide offsetting responses. Multiple windows and outcomes create false-discovery risk; specifications should be declared before inspecting every result where feasible.

Three practical falsification checks improve routine work:

- **Cross-section:** outcomes should be stronger where measured currency exposure is larger, not merely where a narrative says it is.
- **Mechanism:** intermediate variables—border prices, hedging costs, local-currency commodity prices, or debt-service burdens—should move in the predicted order.
- **Alternative shock:** results should weaken or change sign across policy-divergence, growth, commodity, and funding-stress episodes if the proposed mechanism is genuinely state-dependent.

Data availability remains a hard boundary. Free official series are excellent for daily and monthly measurement but often cannot reconstruct timestamped intraday prices, historical index constituents, consensus expectations, company hedge books, or point-in-time portfolio positions. A missing field should remain missing; it must not be filled by hindsight or an unsourced chart.

## Why it matters

Dollar transmission sits at the intersection of nearly every US market lane. It can alter import prices, external demand, reported earnings, commodity affordability, foreign debt service, hedged asset returns, and global liquidity. Yet the dollar is also an outcome of those same forces. The tracker’s value is not a colored arrow declaring that a stronger dollar is uniformly “tightening.” It is the discipline of naming the measure, shock, exposure, lag, and falsifier.

That discipline prevents three common mistakes: treating one bilateral pair as the whole dollar; treating correlation with a dollar move as a causal FX effect; and assuming the same appreciation has the same consequences in a growth boom and a funding shock. A compact, versioned panel can make research comparable across episodes while leaving room for the mechanism to change.

## Sources

- Federal Reserve Board, [Foreign Exchange Rates—H.10: Nominal/Real Indexes](https://www.federalreserve.gov/releases/h10/summary/) — official broad, AFE, EME, nominal, and real index definitions and revision notice; accessed July 10, 2026.
- Bastian von Beschwitz, Christopher G. Collins, and Deepa D. Datta, [Revisions to the Federal Reserve Dollar Indexes](https://www.federalreserve.gov/econres/notes/feds-notes/revisions-to-the-federal-reserve-dollar-indexes-20190115.html), Federal Reserve Board, January 15, 2019 — index construction, trade weights, coverage, and third-market competition.
- Bank for International Settlements, [Effective exchange rates](https://data.bis.org/topics/EER) — official nominal and real effective exchange-rate data and methodology; accessed July 10, 2026.
- Committee on the Global Financial System, [Foreign currency funding risk and cross-border liquidity](https://www.bis.org/publ/cgfs71.htm), BIS, March 2026 — foreign-currency funding structures, liquidity risk, derivatives, collateral, and risk management.
- Committee on the Global Financial System, [US dollar funding: an international perspective](https://www.bis.org/publ/cgfs65.htm), BIS, June 2020 — dollar funding users, instruments, vulnerabilities, and policy backstops.
- Bank for International Settlements, [International finance through the lens of BIS statistics: the global reach of currencies](https://www.bis.org/publ/qtrpdf/r_qt2406b.htm), BIS Quarterly Review, June 2024 — currency use in international banking, securities, and derivatives.
- Gustavo Adler et al., [Dominant Currencies and External Adjustment](https://www.imf.org/en/Publications/Staff-Discussion-Notes/Issues/2020/07/16/Dominant-Currencies-and-External-Adjustment-48618), IMF Staff Discussion Note 2020/005, July 2020 — dominant-currency pricing and financing mechanisms.
- US Bureau of Economic Analysis, [How do the effects of dollar depreciation show up in the GDP accounts?](https://www.bea.gov/help/faq/498) — export/import prices and volumes, terms of trade, and command-basis measures; accessed July 10, 2026.
- US Bureau of Labor Statistics, [Import/Export Price Indexes](https://www.bls.gov/mxp/) — official border-price data, methods, and releases; accessed July 10, 2026.
- Bank for International Settlements, [Global liquidity indicators](https://www.bis.org/statistics/gli.htm) — official cross-border and foreign-currency credit measures and documentation; accessed July 10, 2026.

## Open questions

- Which freely available intraday FX source has stable timestamps, historical symbology, and licensing suitable for reproducible event studies?
- How should the tracker construct exposure-weighted dollar baskets for individual companies without overstating incomplete geographic revenue disclosures?
- Which BLS import-price categories provide the cleanest test of exchange-rate pass-through after separating petroleum, tariffs, freight, and invoice currency?
- Can public BIS and company data distinguish unhedged dollar debt from hedged debt with enough sector and maturity detail to test balance-sheet transmission?
- How stable are dollar sensitivities across policy-divergence, US-growth, commodity-supply, and global-funding regimes?
