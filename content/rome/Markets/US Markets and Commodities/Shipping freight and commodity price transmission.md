---
title: Shipping freight and commodity price transmission
created: 2026-07-10
source: llm
status: seed
tags: [markets, commodities, shipping, freight, basis, logistics]
---

Ocean freight transmits transport scarcity into commodity prices through delivered-cost parity, but the pass-through depends on the marginal route, vessel, contract, timing, and local basis rather than on any single freight index.

Up: [[US Markets and Commodities]]

Related: [[WTI versus Brent crude oil]] · [[Grain balance sheets and stocks-to-use]] · [[Commodity data and contract registry]]

Shipping is sometimes described as a surcharge added after a commodity price has already been determined. For internationally traded bulk goods, that is backwards. The cost and availability of moving the marginal cargo help determine which origin can serve which destination, what an exporter can net back, and how far regional prices may separate before arbitrage becomes economic. Freight is therefore part of price formation in [[WTI versus Brent crude oil]], grain, coal, ores, refined products, and other physical markets.

The mechanism is simple enough to express as an identity, yet difficult to measure well. Ships are not interchangeable; ports, canals, drafts, grades, parcel sizes, and dates constrain substitution. Freight contracts and public indexes represent particular routes and conventions, not a universal cost of shipping. A causal claim also requires more than observing that freight and commodity prices rose together. Both may be reacting to the same demand, fuel-price, weather, or geopolitical shock.

## The delivered-price identity

Start with a cargo offered **free on board**, or FOB, at origin. In a deliberately simplified notation, its landed cost at destination is

$$
P^{landed}_{d,t}=P^{FOB}_{o,t}+F_{o,d,t}+I_{o,d,t}+H_{o,d,t}+L_{o,d,t}+Q_{o,d,t}+C_{o,d,t},
$$

where $F$ is ocean freight, $I$ insurance and risk-related cost, $H$ terminal and handling charges, $L$ expected physical loss or shrink, $Q$ quality and specification adjustment, and $C$ the financing and time value of carrying the cargo through the voyage. Duties and taxes belong in the identity when the question is the importer's full landed cost. Unit conversion is essential: a lump-sum voyage cost must be divided by loaded or delivered tonnes or barrels, and a charter quoted per day must be translated using voyage duration, fuel, port time, and other expenses.

A commercial quote may instead be **cost and freight** (CFR), which includes the named destination's freight but not necessarily insurance, or **cost, insurance and freight** (CIF), which includes specified insurance as well. Incoterms allocate costs, delivery obligations, and risk between buyer and seller; they do not guarantee that a database field called “CIF value” uses every contractual detail identically. The International Chamber of Commerce publishes the governing Incoterms framework, while U.S. trade statistics document their own valuation bases. Researchers should preserve the actual quote convention rather than infer it from a casual use of “delivered.”

The same identity can be rearranged into an export **netback**:

$$
P^{netback}_{o,t}=P^{destination}_{d,t}-(F+I+H+L+Q+C)_{o,d,t}.
$$

If freight rises while the destination value is fixed, the maximum FOB price a trader can pay at origin falls dollar for dollar in this arithmetic. If the origin price is fixed, the delivered offer rises instead. Which side adjusts is an equilibrium question. It depends on supply and demand elasticities, inventories, contracts, alternative origins and destinations, exchange rates, and market power. The identity defines the wedge; it does not assign incidence.

Arbitrage therefore creates a **parity corridor**, not an exact equality. A destination price can exceed an origin benchmark by more than a screen freight estimate because the estimate omits terminal slots, demurrage, inspection, credit, minimum parcel size, quality, losses, or execution risk. Conversely, a shipper with sunk capacity or a favorable term contract may move a cargo below the visible spot rate. Only when the all-in expected spread exceeds the marginal trader's executable cost, with sufficient capacity and time, does redirection become attractive.

## Vessel classes are bundles of constraints

Vessel labels describe approximate operating and cargo niches, not perfectly fixed specifications. **Capesize** bulk carriers are generally too large for the Panama Canal's traditional Panamax dimensions and are associated with long-haul iron ore and coal trades. **Panamax** and newer, larger canal-compatible designs serve grains, coal, and other dry bulk on routes where canal and port dimensions matter. **Supramax** and **Handysize** ships can access more ports and handle smaller parcels, often using onboard cranes where shore equipment is limited. The Baltic Exchange's dry-bulk route definitions make the crucial point: each published assessment specifies a vessel description, route, loading and discharge conditions, laycan, commission, and other terms.

Tankers form a different market. **Very large crude carriers** (VLCCs) move large crude parcels efficiently on deepwater long-haul routes. **Suezmax** and **Aframax** vessels trade scale for access to different ports, canals, and regional routes. Smaller product tankers move refined fuels and chemicals under different cleanliness, segregation, and terminal requirements. The U.S. Energy Information Administration describes the capacity ranges and route roles of oil tanker classes, but actual eligibility remains vessel- and terminal-specific.

Container ships matter for manufactured goods and some packaged or refrigerated commodities, but a container freight quote is not a proxy for dry-bulk or tanker freight. Containers are network services with scheduled sailings, equipment positioning, port pairs, and backhaul imbalances. Dry bulk is commonly organized around cargo-specific voyages or time charters. Tankers face cargo compatibility, vetting, coatings, prior-cargo restrictions, and oil-market-specific routing. Roll-on/roll-off, liquefied-gas carriers, and refrigerated ships add still other constraints.

Economies of scale complicate pass-through. A larger ship may use less fuel and crew cost per tonne, but only if the parcel is available and both ends can accept its length, beam, draft, and unloading rate. A shallow destination may require a smaller vessel, partial loading, or lightering offshore. That can make the relevant marginal freight much higher than a headline large-vessel route. The cheapest theoretical vessel is irrelevant if it cannot berth.

## Route economics and voyage cost

A voyage-charter rate assigns a ship to carry a cargo between specified ports, commonly quoted as dollars per tonne or through a tanker scale convention. The shipowner generally bears vessel operating and voyage costs under the contract's allocation; the charterer supplies the cargo and pays freight. A time charter instead hires vessel capacity for a period at a daily rate, with the charterer commonly directing employment and paying voyage expenses such as bunker fuel and port costs. Bareboat structures transfer still more operating responsibility. These distinctions determine whether a quoted rate already includes fuel, canal tolls, or port charges.

The economic cost of a round voyage can be sketched as

$$
VC = B_s p_s + B_p p_p + Tolls + Port + Other,
$$

where $B_s$ and $B_p$ are bunker consumption at sea and in port, $p_s$ and $p_p$ are the relevant fuel prices, and the remaining terms cover canal, port, agency, and other voyage expenses. The owner's required freight also reflects time:

$$
F^{required}\approx\frac{VC+r_D D+Risk}{Q},
$$

where $r_D$ is the opportunity value per vessel-day, $D$ is voyage and expected waiting time, and $Q$ is paying cargo quantity. A detour can raise both bunker use and days. Congestion can raise days even when nautical miles do not change. Ballast positioning matters because the ship may have to sail empty to the load port; a rate on one leg can reflect the economics of the entire trading cycle.

Fuel does not pass through mechanically. A time-charterer directly exposed to bunkers experiences a different immediate shock from a shipowner locked into a voyage charter. Bunker-adjustment clauses, freight derivatives, hedges, and contract renegotiation change timing. Slow steaming can reduce daily fuel consumption while adding days and reducing effective fleet supply. When vessel utilization is low, owners may absorb some higher voyage cost; near a capacity constraint, rates can rise much more than fuel alone.

## Canals, ports, congestion, and effective capacity

A canal disruption changes much more than the toll. A ship may wait, book a scarce transit slot, accept draft or cargo limits, or reroute around a longer path. Each response changes voyage days and sometimes permissible vessel or parcel size. Because a vessel tied up for additional days cannot serve another cargo, a route shock reduces **effective fleet capacity** even if no ship is physically destroyed. The resulting rate effect can propagate to routes that never use the canal because vessels reposition across a global network.

The Panama Canal Authority publishes transit, draft, booking, and water-related operating notices; the Suez Canal Authority publishes navigation rules and toll information. These are better evidence for a claimed operating constraint than an unsourced map of the nominal route. But a rule's existence still does not establish its market effect. Analysis must show which vessels and cargoes were exposed, the feasible alternatives, and the timing of bookings and voyages.

Ports create parallel bottlenecks. The physical berth may be available while the channel draft, pilotage, tug, labor, storage tank, grain elevator, conveyor, rail arrival, customs clearance, or inspection slot is not. Loading and discharge rates determine days in port. Weather can close a channel or prevent safe berthing. A queue report counts ships but may not measure expected waiting time, cargo size, or whether those ships compete for the same facilities.

Charter contracts allocate some delay through **laytime** and **demurrage**. Laytime is the contractually allowed loading or discharge time; demurrage is compensation when allowed time is exceeded under the contract's terms. Demurrage is not a comprehensive social cost of congestion, nor is it always borne ultimately by the party writing the check. The ship's opportunity cost, inventory carrying cost, missed sales, production interruptions, and downstream penalties can be larger or smaller. Despatch payments for finishing early and exceptions for weather or strikes further weaken any attempt to infer total delay cost from one invoice field.

Inventories and optionality govern downstream transmission. A refinery with adequate feedstock stocks can bridge a delayed tanker; a just-in-time buyer cannot. A grain importer may switch origin, grade, or shipment month, but phytosanitary rules, diets, milling properties, and existing tenders limit substitution. A producer can store at origin only if space and financing exist. When storage fills, the origin basis may weaken sharply even though the destination benchmark changes little.

## Benchmarks, contracts, and basis

A freight benchmark is a standardized observation, not the invoice for every cargo. The Baltic Exchange publishes route assessments and composite indexes for dry bulk and tankers using defined vessel and voyage assumptions. Composite measures such as the Baltic Dry Index aggregate selected time-charter route assessments. A move in a composite can be informative about the assessed market, but it cannot be inserted blindly into the landed-cost identity for corn from the U.S. Gulf, crude from the Middle East, or iron ore to China.

The correct freight leg should match:

- vessel and cargo type;
- load and discharge ports or regions;
- parcel size and unit;
- loading window and pricing timestamp;
- voyage versus time-charter allocation;
- fuel, toll, port, commission, and insurance treatment;
- spot, term-contract, or internal fleet economics.

Freight derivatives add another layer. Forward freight agreements settle financially against specified Baltic assessments; they can hedge an index exposure without securing a physical ship. A shipper may therefore be economically hedged yet operationally unable to find tonnage, or may secure a vessel but retain basis between its route and the settlement index. Futures curves also encode expected conditions for contract months, not today's physical invoice.

Commodity contracts create their own basis. A futures price is tied to a delivery instrument, grade, location, and month. A physical cargo may price as a benchmark plus a quality and location differential, with freight quoted separately or embedded through CFR/CIF terms. Define a local basis consistently, for example

$$
Basis_{o,t}=P^{cash,FOB}_{o,t}-P^{futures}_{m,t}.
$$

If shipping out of the origin becomes more expensive, the FOB cash price can fall relative to futures because exporters bid less. At the destination, the corresponding landed basis may strengthen. But neither response is guaranteed: the relevant futures contract may itself react to the disruption, an alternative destination may absorb supply, or inventories may buffer demand.

Contract duration governs observed pass-through. Spot cargoes can reprice quickly. A contract with fixed freight, a contract-of-affreightment, or owned fleet capacity may delay the buyer's cash-cost change even while the opportunity cost of using that capacity changes immediately. Price-escalation formulas may incorporate bunker indexes or freight benchmarks with lags. Researchers should distinguish transaction prices, accounting cost, and replacement cost.

## How freight shocks propagate

Three margins organize the transmission.

**Spatial arbitrage:** When the delivered cost from origin A rises relative to origin B, buyers substitute toward B where specifications and capacity permit. Prices may rise at the importing destination, fall at the disadvantaged origin, strengthen at the substitute origin, or divide the adjustment across all three.

**Intertemporal substitution:** Inventories can be drawn down while delayed or expensive cargoes are deferred. Futures spreads and storage values may change before outright benchmarks do. If the shock is expected to reverse, nearby prices may respond more than deferred prices; if it damages persistent capacity, later months may also reprice.

**Production and consumption:** A high delivered input cost can reduce refinery runs, smelting, feed use, or power generation, while encouraging alternative inputs. Downstream prices reflect processing capacity, product inventories, demand elasticity, and regulation. Freight's share of final retail value can be small even when its share of the marginal raw-material trade is decisive.

Pass-through is therefore state-dependent. It is likely to be larger when the affected route sets the marginal delivered offer, inventories are low, alternatives are capacity-constrained, the commodity is homogeneous, and spot pricing dominates. It is likely to be smaller or slower when contracts fix costs, inventories are ample, substitution is easy, freight is a small share of value, or the observed index is remote from the actual route.

## Causal identification without storytelling

Freight and commodity prices are jointly determined. Strong commodity demand can raise cargo volumes, freight rates, and commodity prices simultaneously. Higher oil prices can raise bunker cost and the value of oil cargoes. War, weather, labor action, or canal restrictions can affect both production and transport. A positive correlation therefore does not identify freight-to-commodity transmission.

A credible design begins with an exposure map constructed before examining outcomes: which origin-destination pairs, vessel classes, ports, contract dates, and commodities were mechanically exposed? It then uses a plausibly external shock with precise timing, such as an unanticipated channel closure or a rule that differentially affects vessel drafts. Exposed routes can be compared with routes sharing commodity-demand conditions but not the transport constraint. Event studies need narrow, justified windows; difference-in-differences designs need evidence of parallel pre-trends and no simultaneous differential shock.

Several diagnostics strengthen the case:

1. Show the shock first in operational variables—transits, waiting time, sailing distance, draft, or available tonnage—rather than only in prices.
2. Match the freight measure to the exposed route and vessel instead of using a broad composite.
3. Trace the expected sign across FOB origin prices, destination landed prices, local bases, inventories, shipment volumes, and substitute routes.
4. Control or stratify for bunker prices, commodity demand, exchange rates, production outages, seasonality, and contract timing.
5. Test unaffected routes and pre-event dates as placebos.
6. Report heterogeneous effects by inventory, substitution options, and contract exposure rather than only an average coefficient.

Instrumental variables based on weather, canal conditions, or route geometry can help only if the exclusion restriction is defensible. Weather near an export region may directly affect harvests or production. A canal shock may alter delivery expectations and precautionary inventory demand, which is part of the treatment mechanism but complicates a narrow “freight price only” interpretation. Shift-share exposure can inherit endogenous pre-shock trade patterns. These are design problems to disclose, not nuisances solved by a sophisticated estimator.

The estimand must also be named. A regression of destination price on a freight index estimates something different from the effect of a one-dollar exogenous increase in the executable freight cost for the marginal cargo. Log specifications estimate elasticities; level specifications estimate currency-per-unit changes. Distributed lags may capture contract repricing and voyage time, but selecting lags after viewing the response invites overfitting. Standard errors should account for common shocks and serial correlation at the level implied by the design.

## A reproducible transmission worksheet

For a historical episode, freeze data as of a declared time and build one row per feasible origin–destination–cargo–date combination. Record the commodity grade, FOB price, benchmark and contract month, parcel size, vessel class, route, nautical distance, expected sea and port days, freight convention, bunker assumption, tolls, handling, insurance, finance, exchange rate, and delivered price. Keep observed inputs separate from estimated ones.

Then calculate a parity range, not a false point estimate. Use executable bid-ask prices when available, plausible low and high waiting days, and alternative-vessel scenarios. Identify which origin is marginal under each scenario. Compare those predictions with actual cash basis, flows, inventories, and substitution. A freight move that does not alter the delivered-origin ranking may have little commodity-price effect; a smaller move that flips the marginal supplier can matter greatly.

Finally, state the claim in layers. **Fact:** a defined route assessment, transit count, or waiting-time measure changed. **Mechanism:** the change raised or lowered the modeled delivered cost for a specified cargo. **Inference:** observed basis and flow adjustments are consistent with that mechanism after alternatives are tested. **Uncertainty:** contract coverage, private discounts, congestion estimates, or simultaneous shocks limit attribution. This structure prevents a shipping headline from becoming an unsupported macro narrative.

## What freight data cannot tell you alone

A high freight index does not prove goods inflation, commodity scarcity, or profitable shipping companies. Index composition may differ from the relevant trade; rates can rise because commodity demand is strong rather than because transport supply fell. Owner revenue is not profit after fuel, operating cost, debt service, off-hire, positioning, and charter coverage. Nor does cheap freight ensure low delivered prices when production, quality, sanctions, insurance, finance, or port access is binding.

The durable lesson is narrower and more useful: commodity price is a location-, grade-, and time-specific object. Freight changes the cost of connecting those objects. Correct analysis identifies the marginal physical link and its contract, calculates the all-in parity, and then tests whether prices, bases, inventories, and flows moved as the mechanism predicts.

## Sources

- [International Chamber of Commerce — Incoterms rules](https://iccwbo.org/business-solutions/incoterms-rules/) — authoritative framework for allocating delivery costs, obligations, and risk in international sales.
- [U.S. Energy Information Administration — Oil tanker sizes range from general purpose to ultra-large crude carriers](https://www.eia.gov/todayinenergy/detail.php?id=17991) — tanker capacity classes and typical trading roles.
- [Baltic Exchange — Benchmark statements](https://www.balticexchange.com/en/data-services/Methodology/benchmark-administration-activities.html) — official benchmark-family statements and links to governing methodology.
- [Baltic Exchange — Dry bulk information](https://www.balticexchange.com/en/data-services/market-information0/dry-services.html) — vessel classes, routes, and dry-bulk assessment structure.
- [Baltic Exchange — Tanker information](https://www.balticexchange.com/en/data-services/market-information0/tankers-services.html) — tanker route and assessment structure.
- [Federal Maritime Commission — Detention and demurrage](https://www.fmc.gov/detention-and-demurrage/) — U.S. regulator's materials on container demurrage and detention rules; useful for distinguishing those charges from economy-wide congestion cost.
- [Panama Canal Authority — Maritime services](https://pancanal.com/en/maritime-services/) — primary operating source for transit services, advisories, tariffs, and vessel requirements.
- [Suez Canal Authority — Navigation](https://www.suezcanal.gov.eg/English/Navigation/Pages/default.aspx) — primary source for navigation circulars, rules, and toll-related material.
- [UNCTAD — Review of Maritime Transport](https://unctad.org/topic/transport-and-trade-logistics/review-of-maritime-transport) — authoritative synthesis of shipping networks, freight, ports, and trade transmission.
- [U.S. Department of Agriculture Agricultural Marketing Service — Grain Transportation Report](https://www.ams.usda.gov/services/transportation-analysis/gtr) — primary U.S. reporting on grain transport rates, flows, and logistics.
- [U.S. Census Bureau — Foreign Trade: definitions](https://www.census.gov/foreign-trade/reference/definitions/index.html) — official definitions for U.S. import and export valuation and trade-statistics terms.
- [Federal Reserve Board — Bottlenecks, Shortages, and Soaring Prices in the U.S. Economy](https://www.federalreserve.gov/econres/notes/feds-notes/bottlenecks-shortages-and-soaring-prices-in-the-us-economy-20220624.html) — evidence on the joint demand, capacity, congestion, freight-cost, and goods-price episode, illustrating the need to distinguish common drivers from causal pass-through.

## Open questions

- Which route-level freight series have sufficiently stable historical definitions for long-horizon pass-through estimates?
- How much contract coverage is needed to translate a spot freight shock into the average replacement cost faced by U.S. commodity users?
- When do inventory and origin substitution absorb a logistics shock, and when do they merely delay its appearance in basis?
- Can vessel-tracking and port-call data identify effective capacity without confusing slow steaming, queues, and strategic repositioning?
