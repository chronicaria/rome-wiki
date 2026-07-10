---
title: WTI versus Brent crude oil
created: 2026-07-10
source: llm
status: seed
tags: [markets, commodities, energy, crude-oil, benchmarks]
---
WTI and Brent are not two interchangeable labels for “the oil price”: they are benchmark systems anchored to different grades, delivery mechanisms, locations, and logistics, so their spread is meaningful only after contract month and physical basis are aligned.

Up: [[US Markets and Commodities]]

Related: [[Oil inventories storage and the futures curve]] · [[Commodity curves carry and convenience yield]] · [[Futures continuous contracts and roll bias]]

## The shortest useful distinction

West Texas Intermediate and Brent both represent light, relatively low-sulfur crude oil, and both are quoted in U.S. dollars per barrel. That surface similarity makes subtraction tempting. But the benchmark behind each price is different.

The principal NYMEX WTI futures contract is a physically delivered promise for 1,000 U.S. barrels of contract-eligible light sweet crude at specified facilities and pipeline connections in Cushing, Oklahoma. Cushing is an inland storage and pipeline hub. The contract is therefore directly exposed to the ability to move, store, nominate, receive, and redeliver qualifying barrels at that hub.

ICE Brent futures are tied to the North Sea Brent benchmark complex. ICE describes its Brent future as a deliverable contract based on exchange-for-physical delivery, with an option to cash settle against the ICE Brent Index on the last trading day. Its physical foundation is seaborne North Sea crude rather than an obligation to put oil into a single inland tank hub. “Brent” in market speech can also refer to dated physical assessments, forward Brent, the ICE future, or a Brent-linked price; those are connected, but they are not the same instrument.

The headline Brent-minus-WTI spread therefore compares two benchmark networks. It can reveal the relative value of seaborne crude and inland U.S. crude, but it also embeds transport costs, export capacity, storage conditions, grade differences, calendar timing, and the particular price series selected.

## Grade: light and sweet does not mean identical

Crude oil is not chemically uniform. Refiners care about density, sulfur, acidity, metals, distillation yield, vapor pressure, and other properties because those characteristics affect the equipment, hydrogen, energy, and processing steps required to turn a barrel into products. “Light” generally means a higher API gravity and “sweet” a lower sulfur content. Neither word specifies a unique molecule or a universally deliverable barrel.

CME Rulebook Chapter 200 defines the eligible WTI-type domestic common streams and sets explicit quality limits. Among them, deliverable domestic crude must have sulfur of no more than 0.42% by weight and API gravity from 37 through 42 degrees. The rules also specify viscosity, vapor pressure, sediment and water, pour point, carbon residue, total acid number, nickel, vanadium, and simulated-distillation limits. Condensates are excluded from the contract definition of crude petroleum. The modern WTI contract is thus a controlled common-stream specification, not a promise to accept any light-looking crude produced in Texas.

The WTI name is also geographically misleading if taken literally. The futures benchmark is formed around qualifying pipeline common streams at Cushing, including streams designated in the exchange rulebook. A producer's field barrel can price “off WTI” without itself being the precise commodity delivered into the contract. Its cash price may be WTI plus or minus a differential for its quality and location.

Brent has a different evolution. The original Brent field declined, so the physical benchmark broadened beyond one field. EIA's historical explanation describes the North Sea basket as Brent, Forties, Oseberg, and Ekofisk—BFOE. The contemporary physical complex is commonly called BFOET after Troll was added. The important concept is not the acronym at one frozen date but the benchmark-maintenance process: eligible streams and assessment rules can change to preserve a sufficiently deep, representative market as mature fields decline. Anyone doing contract-sensitive work should check the current ICE terms and the current physical price-reporting methodology rather than assume an old four-grade definition remains complete forever.

Quality differences can affect the spread, but they rarely support a simple rule such as “WTI must always be more expensive because it is lighter.” A refinery values a grade relative to its own configuration, product slate, freight, and alternative feedstocks. Forties, for example, has not historically been identical in quality to other North Sea streams. Assessment mechanisms, quality de-escalators, and the marginal eligible cargo matter. Benchmark value is the outcome of a trading and delivery system, not a laboratory ranking alone.

## Location and delivery are the core economic difference

Cushing sits at the intersection of major U.S. pipelines and storage. That makes it a powerful price-discovery location, but it also makes WTI locally sensitive. Crude can arrive from producing regions or Canada, leave toward refineries and the U.S. Gulf Coast, or remain in storage. Each route has finite capacity, tariffs, scheduling rules, quality-bank procedures, and operational constraints.

NYMEX delivery is not accomplished by pointing to barrels anywhere in Oklahoma. The Chapter 200 rules specify delivery at Cushing through approved facilities and connections, with transfer during the delivery month under pipeline and terminal procedures. A trader who holds a futures position into delivery needs clearing, financing, scheduling, and physical capability. Most investors close or roll before delivery, but commercial firms' ability to make or take delivery is the enforcement mechanism that links the future to the Cushing cash market.

Brent's seaborne basis supplies different optionality. A North Sea cargo can be loaded onto a tanker and, subject to freight, timing, sanctions, port, and refinery constraints, compete across destinations. A seaborne benchmark is not frictionless or perfectly global: loading programs are scheduled, cargoes are large and lumpy, weather interrupts operations, shipping rates vary, and regional refinery demand changes. Still, waterborne crude can generally be redirected across markets more readily than an inland barrel trapped behind a full pipeline.

This distinction explains why “global versus U.S.” is useful shorthand but insufficient. Brent reflects a broad waterborne trading system and is widely used in pricing crude outside North America. WTI at Cushing reflects an inland U.S. hub with strong links to the Gulf Coast and international trade. U.S. exports have made WTI more internationally connected, while Brent remains anchored in a specific North Sea physical and derivatives structure. Neither benchmark is a volume-weighted average price of all oil consumed in its region.

## How benchmark prices form

A benchmark works because other transactions can be priced at a differential to it. A producer and refiner need not agree on the outright value of every obscure stream from scratch; they can agree on “benchmark plus or minus basis.” That differential compensates for grade, location, timing, freight, and local supply-demand conditions. EIA identifies ample and stable supply, transparent trading, storage, and connectivity to other hubs as qualities that support a benchmark.

WTI futures price discovery occurs in the exchange market, but convergence ultimately depends on deliverable physical crude at Cushing. If the expiring future were too rich relative to an executable deliverable cash barrel after costs, a capable participant could buy physical and deliver against the future. If it were too cheap, an eligible participant could take delivery when that barrel had greater value. Storage, credit, pipeline access, quality, position limits, and timing make the arbitrage a band rather than a perfect equality.

ICE Brent links futures to physical North Sea trade through exchange-for-physical procedures and the ICE Brent Index settlement option. The broader Brent complex also includes dated physical cargo assessments and forward trading. These layers influence one another through arbitrage and commercial hedging. The result is a network of related prices, not a single observable barrel with “Brent” stamped on it.

This is why analysts must name the series they use. “Brent spot” may be an EIA daily series, a price-reporting agency's Dated Brent assessment, or another constructed measure. “WTI” may mean Cushing spot, the front NYMEX future, a calendar-average future, Midland WTI at the Gulf Coast, or a producer's local netback. A calculated spread is reproducible only if the source, timestamp, contract month, rollover convention, and unit are stated.

## What drives the Brent–WTI spread

Define a same-time, same-month futures comparison as

$$S_{B-W}(t,T)=F_{Brent}(t,T)-F_{WTI}(t,T).$$

A positive value means the selected Brent contract is priced above the selected WTI contract. This is a definition, not a law that Brent must trade at a premium.

### Inland production and pipeline takeaway

When production feeding the U.S. interior rises faster than pipeline capacity out of producing regions or Cushing, local barrels can accumulate. The marginal barrel may have to accept a lower price to induce storage, displace another crude at a refinery, or justify more expensive transport. WTI can weaken relative to waterborne Brent. EIA documented this mechanism when increased U.S. output and transport constraints widened historical discounts.

When new takeaway pipelines enter service, reverse direction, or expand, the constraint can ease. Inland crude reaches Gulf Coast refineries or export terminals more cheaply, improving its netback and often narrowing the discount. Maintenance, outages, apportionment, nomination rules, and the location of new production can matter as much as headline nameplate capacity.

### Cushing storage and prompt scarcity

Cushing inventory is a location-specific balance. A build can signal that arrivals exceed refinery runs and outbound pipeline disposition at prevailing prices; a draw can signal the reverse. But stocks alone do not determine WTI. Available working capacity, ownership, connectivity, tank quality, minimum operating volumes, and the ability to secure space matter. A trader without a lease or pipeline rights cannot necessarily use reported spare shell capacity.

These constraints are sharpest near delivery. The April 2020 negative WTI episode demonstrated that a prompt Cushing obligation can detach dramatically from later months and seaborne crude when demand collapses and immediately usable logistics become scarce. It did not establish that all global crude had negative value. It exposed the marginal value of taking a particular delivery obligation at a particular hub and time. [[Oil inventories storage and the futures curve]] treats this mechanism in depth.

### Gulf Coast exports and shipping economics

Once U.S. crude reaches the Gulf Coast, it competes with waterborne alternatives. The relevant parity includes pipeline transport from inland locations, terminal and loading charges, ship size and draft constraints, freight, insurance, voyage time, quality adjustments, and the value at the destination. Removing broad U.S. crude-export restrictions in 2015 increased the outlet through which domestic light crude could compete internationally, but it did not eliminate these costs.

If export terminals, connecting pipelines, or suitable ships become constrained, the Gulf Coast and Cushing price may need to fall enough to cover the marginal logistics. If export and takeaway capacity is comfortable, arbitrage can keep comparable U.S. and Brent-linked barrels closer after freight and quality. This is a parity corridor, not a fixed spread. Old estimates of a “normal” transport cost are historical evidence, not timeless constants.

### North Sea and global disruptions

The spread can also move from the Brent side. North Sea maintenance, loading delays, changes in eligible-stream supply, European refinery demand, Atlantic Basin flows, OPEC supply decisions, sanctions, wars, and tanker-market disruptions can change the value of Brent-linked waterborne crude. A wider spread need not mean that something went wrong at Cushing; Brent may have strengthened because the marginal seaborne barrel became scarcer.

Likewise, shocks common to both benchmarks—such as a global demand revision or broad producer action—may move both outright prices while leaving the spread comparatively stable. The spread is a relative price, so interpretation requires separating common global shocks from location- or grade-specific shocks.

### Refinery fit and quality differentials

Refineries do not demand “oil” in the abstract. A refinery configured for heavier, sour crude may not value an extra light sweet barrel as highly as a simple product-price comparison suggests. Seasonal maintenance, unplanned outages, gasoline and distillate margins, blending needs, and competing grades change the marginal bid. Shifts in the composition of eligible or available streams can therefore influence benchmark differentials even without a headline pipeline failure.

## Currency, barrel, and unit discipline

Both headline contracts are quoted in U.S. dollars and cents per barrel, and both standard contracts use 1,000 barrels. For NYMEX WTI, CME states that the trading unit is 1,000 U.S. barrels, or 42,000 U.S. gallons. A $1-per-barrel futures move therefore corresponds to $1,000 per standard contract before fees and other positions.

A barrel here is a volume measure of 42 U.S. gallons, not a constant mass. Heavier crude places more mass in the same volume than lighter crude. Converting to metric tonnes requires a density or grade-specific conversion factor. Comparing an oil quotation in dollars per barrel with a trade-flow statistic in tonnes without conversion introduces hidden error.

The dollar denomination also does not make currency irrelevant. A non-U.S. refiner pays costs and earns product revenue partly in local currency; exchange rates can change its effective crude cost and demand. Freight, taxes, and products may have different currency exposures. But the observed Brent–WTI subtraction does not itself need an FX conversion when both inputs are valid dollar-per-barrel prices from the same timestamp.

## Curve and basis caveats

The most common analytical error is subtracting two front-month tickers without checking what month each represents. ICE Brent and NYMEX WTI expire on different schedules. EIA showed that after a Brent expiration-calendar change, the two prompt tickers represented different delivery months during much of each month. If the curve is in backwardation or contango, a “prompt spread” then includes an accidental calendar spread as well as a benchmark spread.

For research, compare contracts representing the same delivery month or construct a clearly documented constant-maturity series. Preserve the observation timestamp because one market may be open while the other's official settlement is stale. Do not mix a settlement price with a live intraday quote and call the result a contemporaneous spread.

Continuous futures series add another problem. A data vendor must decide when to roll from one contract to the next and whether to adjust history to suppress rollover jumps. Back-adjustment can produce a smooth return series but destroys the historical outright price level. A spread between two independently back-adjusted series may be economically meaningless. [[Futures continuous contracts and roll bias]] explains why contract-level data are safer for basis work.

Spot-versus-futures mixing is equally hazardous. Cushing spot WTI minus front-month Brent futures combines different instruments and possibly different timestamps. Dated Brent minus WTI futures may be a legitimate commercial comparison for a particular purpose, but it must be labeled and aligned. Physical differentials can also refer to free-on-board, cost-and-freight, or delivered prices. Freight embedded on one side and excluded from the other can dominate the apparent grade signal.

Finally, the Brent–WTI spread is not a pure arbitrage profit. Executing the physical link requires credit, margin, pipeline and terminal rights, minimum parcel sizes, scheduling, inspection, losses, freight, and time. A visible gap can persist because the marginal connector is expensive, capacity constrained, or unavailable to the observer.

## Why it matters

For macro analysis, the spread helps distinguish a global oil shock from a North American bottleneck. A broad rise in both benchmarks points toward a common shock more strongly than a WTI-only discount accompanied by rising Cushing stocks and constrained takeaway. The inference is never automatic, but it disciplines the questions.

For producers, the relevant revenue is usually a local differential to a benchmark, not the benchmark screen price. A Permian producer can face gathering and pipeline basis even when Brent is strong. For refiners, the spread can change feedstock advantage only after quality, location, product yield, and hedging basis are considered. For exporters, it helps determine whether a Gulf Coast cargo clears the delivered price in Europe or Asia after freight.

For investors, it is a warning against treating commodity ETFs or futures positions as exposure to a generic global spot price. Contract month, roll yield, collateral, and delivery basis shape returns. A correct directional view on global oil can still lose money if the chosen WTI contract is dominated by a local storage event or if the curve moves adversely.

The durable reading rule is simple: identify the barrel, place, month, settlement method, and route to the competing market before explaining the spread. Only then ask whether quality, logistics, storage, refinery demand, or a shared global shock moved the relative price.

## Sources

- CME Group, [NYMEX Rulebook Chapter 200 — Light Sweet Crude Oil Futures](https://www.cmegroup.com/content/dam/cmegroup/rulebook/NYMEX/2/200.pdf) — primary contract rules for eligible grades and quality, 1,000-barrel unit, Cushing delivery, and termination of trading.
- Intercontinental Exchange, [ICE Brent Crude Futures contract specifications](https://www.ice.com/products/219/Brent-Crude-Future) — primary description of the EFP delivery mechanism, ICE Brent Index cash-settlement option, contract size, quotation, and listed series.
- CME Group, [NYMEX physically delivered Light Sweet Crude Oil futures FAQ](https://www.cmegroup.com/trading/energy/nymexs-physically-delivered-light-sweet-crude-oil-futures-faq.html) — primary explanation of the WTI quality tests and their relationship to Cushing common-stream standards.
- U.S. Energy Information Administration, [Benchmarks play an important role in pricing crude oil](https://www.eia.gov/todayinenergy/detail.php?id=18571) — benchmark properties, physical grade and location differentials, and historical Brent and WTI definitions.
- U.S. Energy Information Administration, [Transportation constraints and export costs widen the Brent-WTI crude oil price spread](https://www.eia.gov/todayinenergy/detail.php?id=33752) — historical evidence on production, pipeline takeaway, Cushing inventories, exports, and shipping economics; numerical estimates are date-specific.
- U.S. Energy Information Administration, [Changing contract expiration dates will affect crude oil futures comparisons](https://www.eia.gov/todayinenergy/detail.php?id=24692) — why prompt Brent and WTI tickers can represent different delivery months and distort the spread.
- U.S. Energy Information Administration, [Effects of removing restrictions on U.S. crude oil exports](https://www.eia.gov/analysis/requests/crude-exports/) — scenario analysis of export restrictions, domestic processing constraints, and transport-cost parity; projections are historical scenarios rather than current estimates.
- U.S. Commodity Futures Trading Commission, [The economic purpose of futures markets and how they work](https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/economicpurpose.html) — regulator overview of price discovery, hedging, contract liquidation, and delivery.

## Open questions

- How has the addition of WTI Midland to the Dated Brent assessment affected the empirical relationship between Gulf Coast WTI, Cushing WTI, and ICE Brent across different freight regimes?
- Which observable combination of Cushing stocks, pipeline utilization, Gulf Coast export capacity, tanker rates, and refinery runs best explains the spread without overfitting a particular infrastructure era?
- How large is the quality component of the spread after matching delivery month and estimating executable transport parity?
- Which constant-maturity construction best preserves an economically interpretable Brent–WTI spread for long historical studies?
