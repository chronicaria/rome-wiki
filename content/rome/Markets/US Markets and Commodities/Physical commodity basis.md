---
title: Physical commodity basis
created: 2026-07-10
source: llm
status: seed
tags: [markets, commodities, derivatives, physical-markets, quantitative-research]
---

Physical commodity basis is the price difference between a precisely defined cash commodity and a specified futures benchmark; it compresses location, grade, timing, logistics, financing, and contract optionality into one number whose meaning depends on both legs.

Up: [[US Markets and Commodities]]

Related: [[Commodity curves carry and convenience yield]] · [[Calendar spreads in commodity futures]] · [[Shipping freight and commodity price transmission]] · [[Commodity data and contract registry]]

## The subtraction is simple; the identity is not

The usual commodity convention is

$$
B_{i,t}^{(m)} = S_{i,t}-F_{m,t},
$$

where $S_{i,t}$ is a cash price for physical lot $i$ observed at time $t$, and $F_{m,t}$ is the price of futures delivery month $m$ at the same timestamp or at a declared reference close. A positive basis means cash is above futures; a negative basis means cash is below futures. Some industries, reports, and trading systems reverse the sign or quote a differential as “under” or “over,” so a dataset must store the sign convention rather than assume it.

The CFTC definition already warns against treating basis as a generic commodity spread. Its glossary describes basis as cash minus futures and notes that the two legs can differ in time, product form, grade, or location. EIA likewise defines a spot price as a near-term transaction for a specific quantity at a specific location. The subscripts in the equation therefore matter more than the arithmetic. “Corn basis,” “crude basis,” or “gas basis” is incomplete until the researcher names the cash instrument, unit, location, quality, delivery window, futures contract, month, currency, timestamp, and price type.

A useful basis record might say: elevator bid for a named grade of corn at a named Iowa location, cents per bushel, compared with the December CBOT corn settlement on the same reporting date. A weak record says only “corn basis, -20.” USDA cash-grain reports illustrate the stronger practice: they identify reporting areas and exchanges, display cash bids and futures settlements, and may calculate basis from the current or prior futures close. That last timing detail can create an apparent change even when the local bid has not moved.

## A decomposition for thinking, not an accounting identity

For a physical commodity that differs from the futures benchmark, basis can be organized schematically as

$$
B \approx L + Q + T + C + O + M + \varepsilon,
$$

where $L$ is the signed location contribution, $Q$ the signed quality or product-form contribution, $T$ the signed timing contribution, $C$ the signed contribution from transport and transformation costs, $O$ delivery or operational optionality, $M$ local market power and contracting effects, and $\varepsilon$ collects measurement mismatch. The signs depend on direction: cost to move excess supply from cash location $i$ toward benchmark location $H$ commonly makes the local cash-minus-futures basis more negative, while replacement cost to move supply from $H$ toward a deficit at $i$ can make it more positive. These terms are not separately quoted in most markets and can interact. A refinery's value for a light crude depends on its configuration; a grain grade discount can widen when drying capacity is scarce; a pipeline constraint can make location and timing inseparable.

The equation is therefore a research map, not a claim that each component can be cleanly estimated. It forces the analyst to ask which physical dimension could explain a differential before labeling every residual “scarcity,” “convenience yield,” or “risk premium.” [[Commodity curves carry and convenience yield]] explains the through-time relationship between spot and deferred delivery. Physical basis is centered instead on why one cash lot does not equal the benchmark at a given reference time, though carry and basis interact whenever the cash and futures delivery windows differ.

## Location basis is a network price

A commodity has no single economically meaningful location. It exists at wells, mines, farms, elevators, pipelines, terminals, warehouses, refineries, processors, ports, and consuming plants. Moving it between nodes requires capacity, fuel, labor, time, credit, and sometimes regulatory permission. After grade, timing, and contract differences are aligned, location basis can approximate the shadow price of those network conditions relative to the benchmark location. Before that alignment, observed basis remains a mixture.

In a frictionless corridor with available capacity, two locations should differ by roughly the marginal cost of transport, handling, losses, and financing. If location A can supply benchmark location H for $c_{A\to H}$, an A discount much larger than $c_{A\to H}$ invites purchase at A and movement toward H. If H can supply A, a large A premium invites the reverse flow. This is spatial arbitrage, but it creates a band rather than exact equality because freight quotes have bid-ask spreads, capacity is booked ahead, losses vary, and a screen price may not be executable in the required quantity.

When a pipeline, rail line, river, port, or vessel route reaches capacity, the marginal cost can jump. A producing region may trade at a deep discount because additional output cannot leave; a consuming region may trade at a premium because replacement supply cannot arrive soon enough. The basis then rations scarce logistics. [[Shipping freight and commodity price transmission]] shows why the delivered-cost comparison must include route, vessel, waiting time, insurance, fuel, port fees, and cargo size rather than attach a broad freight index to every flow.

Energy markets make the network logic visible. Henry Hub futures do not erase the value of gas at another hub. Regional weather, pipeline nominations, maintenance, storage deliverability, and local power demand can move a location differential even when the national benchmark changes little. In crude oil, basis can reflect pipeline connectivity, export access, refinery demand, and tank availability. EIA's petroleum analysis notes that regional product-price differences can reflect specifications, refinery outages, transportation constraints, seasons, and inventories—the same channels that a basis researcher must distinguish.

## Grade and transformation basis

Quality is multidimensional. Crude oils differ in density, sulfur, acidity, contaminants, and yields. Grains differ by class, protein, moisture, damage, test weight, and other official grading attributes. Metals differ in purity, shape, brand, warrant status, and warehouse eligibility. Petroleum products differ by sulfur, vapor pressure, oxygenate requirements, and regional environmental specifications.

A quality differential is not simply “better minus worse.” Its sign depends on the marginal user and the cost of turning one material into a usable substitute. A complex refinery may value some heavier crude because its equipment can convert cheaper feedstock into high-value products, while another refinery cannot. High-moisture grain may be discounted by drying cost plus capacity risk. An off-spec metal lot can be physically present yet irrelevant to an exchange delivery obligation or a manufacturer's immediate requirement.

Transformation links product basis to input basis. A refiner compares crude grades through expected product yields, energy use, operating constraints, and product prices. A crusher values soybeans through meal and oil outputs. A mill values wheat through flour yield and customer specifications. [[Refinery margins and crack spreads]] is therefore adjacent to physical basis: a crack spread is a stylized transformation margin, but using mismatched grades or locations can make it a noisy proxy for an actual plant.

## Timing basis and prompt optionality

“Spot” does not always mean immediate delivery. A cash assessment may cover a month, a pipeline cycle, a shipment window, or an average of transactions. A futures contract has its own delivery month, notice dates, settlement procedure, and last trading day. Comparing the two without aligning their windows mixes physical basis with calendar basis.

Prompt availability can carry an option value. Inventory on site may prevent a shutdown, fulfill a customer order, balance a pipeline, or meet an exchange delivery. Inventory promised next month cannot always provide that service. Conversely, material arriving too early consumes storage, working capital, insurance, and handling capacity. The time differential thus contains both carry cost and operational flexibility.

Seasonality sharpens this point. Harvest pressure can weaken grain basis where storage and transportation are saturated even if annual supply expectations change little. Winter gas basis can widen where deliverability, not total national inventory, is the binding constraint. Summer gasoline grades can differ from winter grades, so rolling a “spot” series across specification changes may create a false price jump. A time-consistent dataset stores delivery period and specification effective dates rather than treating the ticker as an unchanging object.

## Futures delivery and convergence

Physical-delivery futures establish a standardized obligation: quantity, grade, acceptable alternatives and premiums or discounts, delivery locations, delivery period, and settlement procedures. The CFTC emphasizes that exchanges set these terms. A futures benchmark therefore represents deliverable supply under a rulebook, not an abstract molecule or bushel.

As expiration approaches, a deliverable cash position and the futures obligation should converge within the costs and options of making or taking delivery. If futures are too expensive relative to eligible supply, a capable participant can buy physical, carry it, sell futures, and tender delivery. If futures are too cheap, a receiver can take delivery when the resulting material is worth more in the cash channel. These mechanisms discipline price only for participants with credit, storage, logistics, operational knowledge, and exchange access.

Convergence is accordingly a range. Delivery rules may grant the short choices among grades, locations, or timing; those options have value. Certificates or warehouse receipts can trade differently from loose physical inventory. Load-out queues, storage rates, inspection, taxes, financing, and applicable position or accountability constraints can limit participation in convergence trades. A cash quote outside the delivery system need not converge exactly with the contract. CFTC guidance for physical-delivery contracts asks exchanges to describe the underlying cash market and contract terms precisely because reliable convergence depends on their fit.

Failure to converge is a diagnostic, not proof of manipulation. It can indicate that deliverable supply estimates are wrong, delivery economics changed, storage pricing is distorted, the cash quote is stale, or the contract no longer represents the commercial market well. Manipulation is a consequential legal and factual claim requiring evidence beyond an unusual spread.

## Basis and hedging

A producer who will sell physical output can sell futures to reduce exposure to the broad price level. At the later cash sale, the futures hedge is lifted. The effective price is approximately the initially sold futures price plus the basis prevailing when the hedge ends, before fees and execution costs. A consumer performs the mirror image with a long futures hedge.

Under the $B=S-F$ convention, both the producer's effective sale price and the consumer's effective purchase price are approximately $F_0+B_1$ when the hedge begins at futures price $F_0$ and closes against terminal basis $B_1$, before fees, sizing error, and execution effects. Their directions differ—a producer with long physical exposure is short futures, while a consumer planning a purchase is long futures—but the algebra does not require reversing the basis sign.

The hedge replaces much of outright-price risk with **basis risk**: the risk that the local cash-futures relationship changes unexpectedly. The CFTC's hedging report highlights local supply and demand, futures delivery locations, and relative quality as sources of this risk. A wheat farmer far from an eligible delivery point, a gas utility away from Henry Hub, or a refiner buying a non-benchmark crude is therefore cross-hedging even when the commodity names appear similar.

The minimum-variance hedge ratio is often written

$$
h^*=\frac{\operatorname{Cov}(\Delta S,\Delta F)}{\operatorname{Var}(\Delta F)}.
$$

Here $h^*$ is a nonnegative hedge magnitude under the usual return convention; the position direction is short futures for a long-physical producer exposure and long futures for a planned consumer purchase. This is an estimated statistical relationship, not a permanent physical law. It changes with season, contract month, sample window, structural logistics, price regime, and the firm's exposure. Estimating $h^*$ on revised, mismatched, or non-synchronous series can manufacture precision. Commercial hedge design must also consider quantity uncertainty, operational constraints, margin liquidity, contract size, accounting, and governance; a lower historical variance does not guarantee a lower future economic risk.

## A reproducible basis record

Every observation should preserve enough metadata to reconstruct both legs:

1. cash commodity name, product form, grade, specification, and incoterm or freight responsibility;
2. origin or destination, delivery point, geographic aggregation, and eligible facility when relevant;
3. quantity, unit, currency, taxes, conversion factor, and whether the quote is bid, offer, trade, assessment, average, or index;
4. delivery window, observation timestamp, publication timestamp, timezone, and revision status;
5. exchange, futures symbol, contract month, settlement or intraday field, session, and roll rule;
6. basis formula and sign convention;
7. source URL, report identifier, access date, license, and historical-availability status; and
8. flags for stale quotes, holidays, thin markets, specification changes, outages, and missing observations.

The record should retain raw legs as well as calculated basis. Storing only the spread makes later correction impossible when a futures settlement is revised, the wrong month was selected, or units were converted incorrectly. [[Commodity data and contract registry]] supplies the companion effective-dated contract metadata.

For point-in-time research, use the value actually available at decision time. A USDA report published after a futures close may quote basis against that close; a researcher must not timestamp the derived value earlier. Historical downloads can contain revised classifications or regenerated history. Archived release files, observation dates, release timestamps, and retrieval dates must remain distinct.

## How to investigate a basis move

Begin by verifying the move. Recompute cash minus futures from raw legs, check sign and units, confirm contract month, inspect roll dates, and align timestamps. A large “basis shock” often disappears when a stale cash bid or automatic futures roll is corrected.

Then locate the physical constraint. Check inventories at the relevant grade and location, production, consumption, outages, nominations, transport bookings, storage utilization, load-out queues, weather, inspection data, imports, exports, and substitute flows. National inventory is not confirmation of local availability. Compare neighboring locations and alternative grades: a localized move supports a bottleneck hypothesis, while a broad move suggests a wider balance or benchmark change.

Next examine timing. Compare nearby and deferred cash windows and [[Calendar spreads in commodity futures]]. If cash basis, nearby spreads, relevant inventories, and logistics all point toward prompt scarcity, the interpretation is stronger. If basis normalizes immediately after a futures roll or expiry, contract mechanics are a better candidate.

Finally state alternatives and falsifiers. A transport story weakens if capacity data show slack and nearby locations do not respond. A quality story weakens if premiums are uniform across grades. A scarcity story weakens if accessible stocks rise and prompt spreads do not confirm. A hedge-flow story is difficult to establish without position and execution evidence. “Consistent with” is usually more defensible than “caused by.”

## Why it matters

Basis is where a generic market price meets an actual commercial exposure. It tells a producer, processor, merchant, or researcher whether a benchmark is tracking the commodity they can deliver, receive, transform, or consume. It can reveal a bottleneck that disappears in national totals, show when a futures hedge leaves important residual risk, and prevent a quantitative model from confusing a contract roll or grade change with economic information.

The deepest lesson is that physical commodities are defined by attributes and networks. Two prices can move together for years and separate when a constraint binds. A good basis analysis does not treat that separation as an anomaly to be smoothed away; it identifies which location, grade, time, logistics, or contract feature stopped the two legs from being equivalent.

## Sources

- Commodity Futures Trading Commission, [Futures glossary](https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CFTCGlossary/index.htm) — official definitions of basis, basis risk, basis grade, basis quote, basis swap, hedging, and delivery terminology; accessed 2026-07-10.
- Commodity Futures Trading Commission, [Economic purpose of futures markets and how they work](https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/economicpurpose.html) — standardized futures terms and physical hedging example; accessed 2026-07-10.
- Commodity Futures Trading Commission, [Economic Requirements Interpretative Statement](https://www.cftc.gov/IndustryOversight/ContractsProducts/EconomicRequirements/interpretative.html) — cash-market and contract-design information for physical-delivery futures; accessed 2026-07-10.
- Commodity Futures Trading Commission, [Report on bona fide hedging](https://www.cftc.gov/sites/default/files/files/dea/deabonafidehedgingreport.pdf) — discussion of local supply and demand, delivery points, quality, and basis risk.
- U.S. Energy Information Administration, [Glossary: spot price](https://www.eia.gov/tools/glossary/index.php?id=Spot+price) — spot-price identity includes quantity, location, and near-term delivery; accessed 2026-07-10.
- U.S. Energy Information Administration, [What drives petroleum product prices: prices and crack spreads](https://www.eia.gov/finance/markets/products/prices.php) — regional specifications, outages, transport, seasons, inventories, and product-contract context; accessed 2026-07-10.
- U.S. Department of Agriculture Agricultural Marketing Service, [North Carolina cash grain bids](https://mymarketnews.ams.usda.gov/viewReport/3156) — official report description, grades, locations, cash bids, and basis calculation conventions; accessed 2026-07-10.
- Commodity Futures Trading Commission, [Speculative limits](https://www.cftc.gov/IndustryOversight/MarketSurveillance/SpeculativeLimits/speculativelimits.html) — deliverable supply, physical-delivery spot months, and bona fide hedge framework; accessed 2026-07-10.

## Open questions

- Which public archives preserve timestamped local cash bids without silently regenerating historical reports?
- How should marginal transport capacity be estimated when tariffs are public but congestion premia and bookings are private?
- When does a changing basis indicate contract-design deterioration rather than a temporary physical constraint?
- Which hierarchical model best separates location, grade, and time effects without imposing false additivity?
