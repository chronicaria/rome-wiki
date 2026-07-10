---
title: Commodity curves carry and convenience yield
created: 2026-07-09
source: llm
status: seed
tags: [markets, commodities, futures, term-structure, inventories]
---

A commodity futures curve prices delivery at different dates; its shape reflects financing and storage, but also the changing value of having usable inventory in the right place and grade before it is needed.

Up: [[US Markets and Commodities]] · Related: [[Oil inventories storage and the futures curve]] · [[Grain balance sheets and stocks-to-use]] · [[Futures continuous contracts and roll bias]]

## What a commodity curve is

A futures curve is a set of prices for contracts on the same underlying commodity with different delivery months, observed at one time. It is not a forecast path drawn through future spot prices. Each point is the price today of a distinct contract, with its own delivery window, location, grade, settlement procedure, liquidity, and optionality. The distinction matters because a July corn future and a December corn future straddle harvest; a prompt natural-gas future and a winter future serve different physical needs; and a crude-oil contract deliverable at Cushing is not a claim on any barrel anywhere.

For two maturities $T_1<T_2$, define the calendar spread as

$$
C_{T_1,T_2}=F(t,T_1)-F(t,T_2),
$$

where $F(t,T)$ is the futures price at observation time $t$ for delivery at $T$. Traders sometimes reverse the subtraction, so every analysis should state the sign convention. Here a positive spread means the nearby contract is above the deferred contract.

**Contango** describes an upward-sloping segment: deferred delivery costs more than nearby delivery, or $F(t,T_2)>F(t,T_1)$. **Backwardation** describes a downward-sloping segment: nearby delivery costs more than deferred delivery. A curve can contain both. Seasonality, delivery constraints, or a localized shortage can make the front backwardated while later months remain in contango.

The curve has at least three separable jobs. It coordinates inventory through time, reveals the relative price of delivery dates, and lets commercial firms transfer price risk. Its shape is therefore an equilibrium outcome involving physical operators, financiers, processors, producers, and speculators—not a single-variable sentiment gauge.

## The cost-of-carry benchmark

For a perfectly storable asset with no frictions, spot and forward prices are tied by cash-and-carry arbitrage. A common continuous-compounding representation is

$$
F(t,T)=S_t e^{(r+u-y)(T-t)},
$$

where:

- $S_t$ is the price of physical commodity available now;
- $r$ is the relevant financing rate;
- $u$ is the proportional flow-equivalent cost of storage, insurance, handling, shrinkage, and other carry;
- $y$ is the **convenience yield**, the non-cash benefit of owning usable inventory rather than merely holding a claim to later delivery;
- $T-t$ is time to delivery.

With simple compounding and explicit dollar storage cost $U$, a related one-period expression is $F\approx (S+U)(1+r\tau)-Y$, where $Y$ summarizes the inventory service. These are organizing identities, not universally executable pricing formulas. Storage costs may be fixed or nonlinear, rates differ by borrower, and the spot price may be an assessment rather than the price at which a futures deliverable can actually be acquired.

The arbitrage intuition is clearest when convenience yield is temporarily ignored. Suppose a six-month future is $115$, spot is $100$, financing for six months is $2$, and all-in storage and handling are $5$. A firm with storage access could buy physical at $100$, borrow the money, store the commodity, and sell the future. Delivery produces $115$ against approximately $107$ of cost. Competition for this trade tends to raise spot demand, sell deferred futures, and bid for storage until the excess return shrinks.

The reverse trade is harder. If the future is very cheap relative to spot, an inventory owner can sell physical now and buy the future to restore stock later. But a firm without inventory cannot short a physical barrel or bushel as easily as it can short a security. It may be impossible to borrow the correct grade at the delivery point, and running inventory to zero can endanger operations. Consequently, commodity arbitrage bounds are asymmetric. Contango is often bounded by the marginal cost of carrying inventory when space and finance are available; backwardation can become steep because the short-sale mechanism is weak and prompt material has operational value.

## Convenience yield is a service, not a coupon

Convenience yield is the economic benefit supplied by physical inventory. It is not a cash payment and is generally not directly observed. An oil refiner holding crude can keep processing through a pipeline disruption. A grain mill can meet an unexpected order. A copper fabricator can avoid shutting a line because a shipment is late. A natural-gas storage operator can withdraw into a cold snap. Inventory also creates options: sell into a temporary price spike, blend grades, redirect logistics, or respond before new supply can arrive.

These services explain why two nominally similar positions are not equivalent. A long futures contract provides price exposure and eventual delivery rights under exchange rules. It does not necessarily put material in a plant today, eliminate basis risk, reserve transportation, or guarantee that the desired grade is available before the delivery month. Physical ownership can therefore be worth more than the financing-and-storage cost alone implies.

Convenience yield is usually **implied** as the residual that reconciles observed spot and futures prices with estimates of rates and carry:

$$
y=r+u-\frac{\ln(F/S)}{T-t}.
$$

This calculation is only as good as its inputs. A stale or non-executable spot assessment, an average rather than marginal storage cost, or a mismatch between physical location and futures delivery terms will all be mislabelled as convenience yield. The residual can also absorb taxes, credit constraints, quality options, measurement error, and market power. It is better interpreted as an implied net inventory benefit than as a clean primitive.

The classic theory of storage predicts that convenience yield rises as accessible inventories become scarce. When stocks are abundant, one more unit adds little protection, so the marginal inventory service is low. When working stocks approach an operational minimum, one more unit may prevent a shutdown or default, so its marginal service value can rise sharply. This nonlinear scarcity value is why inventories and calendar spreads often move together in an intuitive way: low stocks accompany strong nearby prices and backwardation; high stocks accompany weaker nearby prices and contango.

“Accessible” is essential. National inventory can be high while deliverable inventory is scarce at one hub. Stocks may be in the wrong grade, committed to another owner, trapped behind constrained transport, or below tank operating requirements. Published inventory is therefore not identical to economically available supply.

## Carry is an economic mechanism and a return component

The word **carry** is used in two related senses. Physical carry is the cost and benefit of moving inventory through time: finance plus storage and losses, less convenience yield. Investment carry is the expected return associated with holding and rolling a position while prices and the curve evolve. Confusing the two produces loose claims such as “backwardation guarantees positive carry.”

Consider a long futures position initiated in a deferred contract. If the curve and spot price were otherwise unchanged, a backwardated contract may rise toward the nearby or spot price as it approaches maturity. This convergence component is often called positive roll return. In contango, an otherwise unchanged contract may fall as it ages, producing negative roll return. But realized futures return also includes changes in the whole curve, collateral income, fees, trading slippage, and the timing of the roll.

For a fully collateralized futures strategy, a useful decomposition is approximately

$$
R_{total}\approx R_{spot}+R_{roll}+R_{collateral},
$$

before fees and implementation shortfall. This is an attribution framework rather than an identity independent of index construction. “Spot return” in commodity-index research is often itself derived from futures rather than an investable cash commodity. Roll return depends on which contracts are held, when they are replaced, and how weights are calculated.

Suppose a fund sells a near contract at $100$ and buys the next contract at $97$. The transaction does not create a $3 cash profit: the notional exposure is reset through futures margining. If the new contract later converges to $100$ with the broader price level unchanged, that $3 movement contributes to return. Conversely, rolling from $100$ into a next contract at $104$ is not an immediate $4 loss, but convergence from $104$ toward $100$ would hurt. The curve is a return headwind or tailwind conditional on subsequent evolution, not free money locked in by the roll.

This is also why a back-adjusted continuous futures chart can mislead. Vendors splice contracts to remove jumps at roll dates, which helps visualize trends but can erase or redistribute the very price differences that generate roll return. A credible backtest must use actual contract prices, explicit roll rules, collateral assumptions, and transaction costs. See [[Futures continuous contracts and roll bias]].

## Physical examples across commodities

### Crude oil: tanks, hubs, and deliverable barrels

In crude oil, wide contango can reward storage when the spread covers tank rental, finance, insurance, losses, quality management, and operational risk. Yet storage capacity is not a smooth commodity. As tanks fill, the marginal available space can become much more expensive, pipelines may impose scheduling constraints, and nominal capacity overstates working capacity. The cash-and-carry ceiling can therefore widen in a glut. The detailed inventory interpretation belongs in [[Oil inventories storage and the futures curve]].

Backwardation often indicates a premium for prompt barrels, but the signal is local. A Cushing-deliverable WTI spread can tighten because of pipeline flows or hub stocks even when global crude inventory is comfortable. Brent and WTI curves may diverge because they represent different logistics and deliverability. Analysts should match the inventory series and physical basis to the contract being interpreted.

### Grain: harvest creates a seasonal clock

Grain curves embed biological production and crop-year timing. Before harvest, old-crop stocks must bridge demand until new supply arrives. A weather shock can make the remaining old-crop bushels unusually valuable, steepening nearby backwardation. After harvest, abundant new supply creates demand for elevators, drying, handling, and finance, often supporting carry.

Commercial grain storage also involves quality deterioration, shrink, location basis, and exchange delivery rules. A national stocks estimate does not show whether grain is at an approved delivery location or economical to transport there. The USDA balance-sheet framework in [[Grain balance sheets and stocks-to-use]] helps locate scarcity, while the curve prices its timing and location imperfectly.

### Natural gas: injection, withdrawal, and weather optionality

Natural gas storage is strongly seasonal. Gas is commonly injected during lower-demand months and withdrawn during winter heating demand, so winter futures can exceed shoulder-month prices without implying a generic long-run price forecast. Storage facilities have injection and withdrawal limits; deliverability itself becomes valuable during extreme weather. A molecule underground at a high-deliverability salt cavern is economically different from one in a slow reservoir or constrained production basin.

The convenience service can spike in a cold event because immediate withdrawal prevents unmet demand. At the same time, a future for later winter delivery may fall if forecasts imply the disruption will be brief. Thus severe prompt backwardation may describe a short-lived constraint, not a belief that the commodity has permanently become more valuable.

### Metals: durable inventory but fragmented availability

Many metals are physically durable, which makes storage theory appear especially clean. In practice, warehouse location, warrant status, brand eligibility, financing deals, load-out queues, and trade restrictions can separate reported stocks from freely available metal. A large exchange inventory headline can coexist with a premium for the specific units consumers can use immediately.

Precious metals also have relatively high value-to-storage-cost ratios and developed lending markets, so financing and lease rates can matter more than warehouse expense. Industrial metals carry larger fabrication and logistics mismatches. The same equation applies as a benchmark, but the economic content of $u$ and $y$ changes by market.

## What curve shape can and cannot tell you

A curve is evidence about relative delivery value. Persistent backwardation, falling relevant stocks, strong nearby basis, and high utilization form a coherent tightness diagnosis. Persistent contango, inventory builds, weak nearby basis, and rising storage demand form a coherent surplus diagnosis. Confidence should rise when independent physical indicators agree.

Curve shape alone does not identify cause. Backwardation can reflect a prompt outage combined with expected recovery, not permanently strong demand. Contango can reflect seasonal carry, an expected future shortage, or high financing costs—not simply oversupply. Producer hedging, index rolls, dealer balance-sheet constraints, contract expiry, or delivery-option value can move particular spreads without a matching change in aggregate stocks.

Nor does a futures price equal the market's statistical expectation of the future spot price. Under a risk-neutral representation,

$$
F(t,T)=E_t^Q[S_T],
$$

subject to the contract and numeraire assumptions. The expectation is under the pricing measure $Q$, not necessarily the real-world measure $P$. Hedging pressure, covariance with investors' marginal utility, and other risk premia can create a wedge between the futures price and the average subsequent spot price. The storage relation and the risk-premium relation are complementary views: one links contemporaneous spot and futures through inventory economics; the other explains compensation for bearing price risk.

A disciplined reading therefore asks four questions. First, exactly which contract, grade, location, and observation time are involved? Second, what changed—nearby price, deferred price, or both? Third, do stocks, basis, freight, utilization, production, and demand confirm the proposed physical mechanism? Fourth, what competing explanation would generate the same curve move, and what observation would distinguish it?

## Why it matters

Commodity curves connect financial prices to physical constraints. For a commercial firm, they help determine whether to store, process, sell, hedge, or defer procurement. For a macro analyst, front spreads can reveal prompt scarcity earlier than slow inventory statistics, while deferred prices can show whether the market expects the constraint to persist. For a quantitative researcher, curve slope and momentum are potentially useful signals only after contract construction, seasonality, liquidity, and roll implementation are handled correctly.

The larger lesson is methodological. “Contango equals glut” and “backwardation equals shortage” are hypotheses, not definitions. A curve should be read alongside the deliverable supply chain that makes arbitrage possible or prevents it. Convenience yield is not mystical sentiment; it is a residual label for real operational services, though one contaminated by measurement and frictions. Carry is not guaranteed profit; it is a mechanism whose realized return depends on convergence, curve changes, financing, and execution.

## Sources

- Holbrook Working, [The theory of price of storage](https://www.jstor.org/stable/1828278), *American Economic Review* 39(6), 1949 — foundational academic account of intertemporal price spreads and storage.
- Michael J. Brennan, [The supply of storage](https://www.jstor.org/stable/1926331), *American Economic Review* 48(1), 1958 — formal treatment of storage supply and the marginal convenience of stocks.
- Eugene F. Fama and Kenneth R. French, [Commodity futures prices: Some evidence on forecast power, premiums, and the theory of storage](https://www.jstor.org/stable/2328192), *Journal of Business* 60(1), 1987 — evidence connecting storage, basis, forecasting, and risk premiums.
- Chicago Mercantile Exchange, [Light Sweet Crude Oil (WTI) Futures and Options Rulebook Chapter 200](https://www.cmegroup.com/content/dam/cmegroup/rulebook/NYMEX/2/200.pdf) — primary contract terms, grades, delivery location, and procedures that bound physical interpretation.
- U.S. Energy Information Administration, [Weekly Natural Gas Storage Report methodology](https://www.eia.gov/naturalgas/storage/basics/) — official definitions and methods for working-gas storage data.
- U.S. Department of Agriculture, National Agricultural Statistics Service, [Grain Stocks](https://www.nass.usda.gov/Surveys/Guide_to_NASS_Surveys/Grain_Stocks/) — official survey scope and methodology for US on-farm and off-farm grain stocks.
- Commodity Futures Trading Commission, [The economic purpose of futures markets and how they work](https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/economicpurpose.html) — regulator explanation of price discovery, risk transfer, convergence, and contract delivery.
- CME Group, [Contango and backwardation](https://www.cmegroup.com/education/courses/introduction-to-ferrous-metals/what-is-contango-and-backwardation) — exchange explanation of term-structure language and storage economics.

## Open questions

- How can implied convenience yield be estimated when the spot quote is non-executable and marginal storage costs are private?
- Which inventory measure—national stocks, exchange-warranted stocks, days of consumption, or hub-specific working stocks—best explains each market's calendar spreads?
- How much of observed commodity carry survives realistic roll timing, bid-ask spreads, collateral rules, position limits, and market impact?
- When do delivery options and financing constraints dominate the textbook storage relation?
- How stable are curve signals across structural changes in transport, storage technology, and exchange contract design?
