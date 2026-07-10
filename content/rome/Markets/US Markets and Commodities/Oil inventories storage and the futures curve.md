---
title: Oil inventories storage and the futures curve
created: 2026-07-09
source: llm
status: seed
tags: [markets, commodities, energy, crude-oil, futures, storage]
as_of: 2026-07-09
desk: US markets and commodities
review_after: 2027-01-09
---
Crude inventories connect the physical oil balance to the futures curve, but the connection runs through location, usable capacity, financing, quality, transport, and the option value of having barrels available now.

Up: [[Markets]] · Related: [[US market regime tracker]] · [[WTI versus Brent crude oil]] · [[Commodity curves carry and convenience yield]] · [[Futures continuous contracts and roll bias]]

## The bridge between barrels and prices

Oil is produced and consumed continuously, but neither side adjusts instantly. Wells cannot always be shut without cost. Refineries have planned maintenance, minimum operating rates, crude-quality requirements, and product-demand constraints. Pipelines and ships have schedules and finite capacity. When crude supply arriving at a location exceeds current refinery intake, exports, or onward transport, the difference must become inventory somewhere. When disposition exceeds arrivals, inventory supplies the gap.

That makes stocks the balancing item in a physical accounting identity. In a simplified U.S. crude balance,

$$
\text{production}+\text{imports}+\text{adjustment}
=\text{refinery inputs}+\text{exports}+\Delta\text{stocks}.
$$

The Energy Information Administration's published “adjustment” is important. Supply and disposition components are measured or estimated independently and at different frequencies, so they do not close perfectly. The adjustment is the residual that reconciles them; it is not a secret source of oil. A large persistent residual is a warning to investigate production estimates, cargo timing, survey coverage, reclassification, and other measurement differences before treating an apparent build or draw as a clean demand signal.

Inventories also connect today's physical market with future delivery. A firm with access to finance, tanks, transport, and deliverable-quality crude can buy a barrel now, store it, and sell it later. That possibility links nearby and deferred prices. But the textbook arbitrage is constrained: the firm must secure real storage, fund variation margin and inventory, manage losses and quality, arrange pipeline nominations, and be capable of delivering at the contract's specified place and time. “The curve pays for storage” is therefore a conditional commercial calculation, not a free trade visible from two settlement prices.

## Define the barrel before interpreting the stock number

An inventory observation is incomplete without its unit, geography, ownership boundary, facility coverage, and timestamp. EIA petroleum volumes are commonly reported in thousands of 42-U.S.-gallon barrels. A weekly change reported as 2,000 thousand barrels is a two-million-barrel change, not 2,000 physical containers. Petroleum is usually measured volumetrically under standardized conditions; a barrel is not a constant mass because crude density varies by grade.

EIA's monthly definition of primary ending stocks covers crude and products held at specified parts of the primary supply chain, including refineries, pipelines, tank farms, and qualifying bulk terminals. It includes some material in transit and treats the Strategic Petroleum Reserve separately in many commonly used commercial-stock tables. It excludes some secondary and tertiary holdings. Consequently, “U.S. inventories” does not mean every hydrocarbon molecule owned anywhere in the country.

Location changes meaning. The five Petroleum Administration for Defense Districts, or PADDs, are large regions inherited from wartime petroleum administration. A Gulf Coast build and a Midwest draw can have different implications even when they cancel nationally. The Gulf Coast is deeply connected to refining, imports, exports, and marine logistics. Cushing, Oklahoma, within PADD 2, matters because it is the delivery hub for the NYMEX Light Sweet Crude Oil futures contract. A barrel stranded away from the needed refinery or contract delivery point is not economically interchangeable with one already connected to it.

Quality matters too. “Crude oil” includes streams with different density, sulfur, acidity, metals, and distillation properties. Refinery configurations create different values for light versus heavy and sweet versus sour crude. CME's Chapter 200 does not make any generic U.S. barrel deliverable against WTI futures. It specifies eligible streams, quality limits, Cushing delivery connections and facilities, delivery procedures, and adjustments. An aggregate inventory build could consist of grades that do little to relieve scarcity in the crude a particular refinery or futures short needs.

Finally, distinguish stocks from capacity. EIA defines shell capacity as a tank's design capacity. Working capacity is smaller: it is the volume between maximum safe fill and the level below which pump suction becomes ineffective, often called tank bottoms. Operational segregation, maintenance, leased-but-unavailable tanks, mixing restrictions, and pipeline fill can make commercially available space smaller still. Dividing reported stocks by shell capacity therefore overstates slack, while dividing incompatible stock and capacity definitions can produce a meaningless utilization rate. EIA discontinued its annual *Working and Net Available Shell Storage Capacity* report after the March 2024 observation, so any later utilization estimate that carries that denominator forward must disclose its vintage rather than imply contemporaneous capacity measurement.

## What the WTI contract actually promises

The standard NYMEX Light Sweet Crude Oil future, ticker commonly shown as CL, is a physically delivered contract quoted in U.S. dollars and cents per barrel. One contract represents 1,000 barrels. Delivery occurs through the Cushing pipeline and storage system under the current CME rulebook. Contract month, last trading day, delivery window, eligible facilities, quality, and nomination procedures all matter; a generic “oil future” label discards the terms that create convergence.

Physical delivery is the enforcement mechanism connecting futures to the underlying market. A position that remains open into delivery can become an obligation to make or take qualifying crude. Most financial users close or roll before then, but commercial participants capable of delivery keep nearby futures anchored to the value of physical oil at Cushing. If futures and deliverable cash barrels diverged beyond executable costs, qualified firms could buy the cheaper side and sell the richer side. The threat of that trade, not the fact that every trader handles oil, drives convergence.

This is also why an oil “spot price” needs a definition. A published spot assessment, a pipeline cash-market quote, the front-month future, and the price of a particular lease barrel are related but distinct. They can differ because of quality, location, timing, assessment method, and delivery optionality. Using the front future as spot may be convenient for a chart, yet it becomes dangerous around expiration or during a location-specific constraint.

The April 2020 WTI episode is the extreme reminder. On April 20, 2020—the May contract's penultimate trading day—the May 2020 contract settled at negative $37.63 per barrel amid collapsing demand, rapidly rising Cushing inventories, scarce immediately usable storage, and severe constraints on participants still holding positions near expiry. Cushing was constrained but not literally at its engineering maximum. Negative settlement did not mean all global crude was worth less than zero. It revealed the marginal economics and delivery risk of a specific contract at a specific place and time. A distant contract or seaborne barrel had different optionality. The durable lesson is to retain the contract month and delivery conditions whenever interpreting an oil price.

## Carry, convenience yield, and curve shape

For a storable commodity, a schematic no-arbitrage relation is

$$
F_{t,T}=S_t e^{(r+u-y)(T-t)},
$$

where $F_{t,T}$ is the forward price for delivery at $T$, $S_t$ is the current physical price, $r$ is the financing rate, $u$ represents storage, insurance, handling, and related carrying costs, and $y$ is convenience yield. This equation is a conceptual decomposition. Real costs are nonlinear, access-specific, and difficult to observe; convenience yield is usually inferred rather than directly quoted.

Contango means later delivery is priced above nearby delivery. It can compensate an inventory holder for finance and storage. If the calendar spread is wide enough to cover all-in costs and operational risks, a cash-and-carry trade can encourage storage: buy physical oil, sell a deferred future, and hold deliverable inventory. That behavior increases demand for tanks and nearby barrels while adding deferred selling pressure, tending to limit the spread. As storage fills, the marginal cost of space can rise sharply, so contango can widen rather than remain at an average storage cost.

Backwardation means nearby delivery is priced above later delivery. A simple reading is that prompt barrels are scarce or especially useful. A refinery may value inventory because it prevents an outage, preserves feedstock flexibility, or lets it respond to an unexpected disruption. That non-cash service is convenience yield. When immediate availability is valuable enough, an owner may require a premium to surrender a barrel today even though replacing it later appears cheaper.

The inventory–curve relationship is therefore often inverse in the broad sense: abundant accessible stocks tend to reduce convenience yield and support contango, while scarce stocks tend to raise convenience yield and support backwardation. “Often” is doing essential work. Stocks can be high nationally but scarce at Cushing; abundant in the wrong grade; committed under contracts; or inaccessible because a pipeline is full. Expectations also matter. Backwardation can coexist with a forecast of future supply recovery, while contango can reflect expected demand recovery rather than only present oversupply.

Calendar spreads are usually cleaner measures of prompt tightness than the outright oil price because both contract months share much global price exposure. If the front-month minus second-month spread rises, nearby oil has strengthened relative to the next month. But even spreads contain expiry effects, seasonal refinery patterns, contract-specific liquidity, and positioning. A six-month spread is not interchangeable with a one-month spread, and a spread quoted as first minus second changes sign convention if a vendor uses second minus first.

## Reading EIA inventories without telling a false story

The Weekly Petroleum Status Report is timely. EIA normally releases its main data at 10:30 a.m. Eastern on Wednesday and additional material at 1:00 p.m., with holiday exceptions; the observations describe the week ending the preceding Friday. The report combines weekly surveys, customs information, and modeled estimates. EIA says the weekly sample is drawn from the larger monthly reporting universe and is selected to cover about 90% of the latest monthly volume for each published supply item and geography. The Petroleum Supply Monthly arrives with a longer lag but surveys the full primary supply chain and is the more definitive monthly benchmark. The Petroleum Supply Annual later incorporates corrections and missing data into the prior calendar year's record.

This hierarchy creates a trade-off between speed and completeness. Weekly data are appropriate for monitoring recent balances, not for pretending that a preliminary estimate is an exact census. EIA generally does not revise each historical WPSR observation to equal the later monthly value because the weekly series is intended as a snapshot of information then available. A reproducible event study should preserve the originally released weekly vintage rather than silently replacing it with later monthly data.

One weekly build or draw is noisy. Cargo arrival and customs timing can move imports between weeks. Exports are lumpy. Refineries change runs during maintenance. Survey nonresponse and estimation add uncertainty. EIA recommends four-week averages for volatile flow series, especially imports and exports. Analysts should compare the weekly observation with seasonal history, the corresponding monthly benchmark when available, and changes in the other balance-sheet components.

The expected baseline also matters. A draw can be bearish relative to an even larger expected draw, while a build can be bullish relative to a larger expectation. Yet “consensus” is not a public fact unless its provider, sample, cutoff, and statistic are documented. Without that provenance, compare against recent distributions, seasonal norms, or a declared model rather than inventing a market expectation.

Avoid equating stock change with demand. For petroleum products, EIA's product supplied is an accounting proxy for movement out of the primary system, not final retail consumption. For crude, a draw may reflect higher refinery inputs or exports as well as lower supply. A build may reflect import timing rather than weak end demand. The balance sheet must be read as a system.

## A practical interpretation protocol

Start by fixing the observation: release timestamp, reference week, original vintage, unit, commercial versus strategic stocks, region, and whether the value is level or change. Record the specific series rather than copying a chart label.

Next, decompose the balance. Examine production, imports, exports, refinery inputs, and the adjustment alongside stocks. Use four-week averages where timing noise is material. Compare weekly estimates with the latest Petroleum Supply Monthly without retroactively treating the newer benchmark as information available on the release day.

Then map physical constraints. Ask where stocks changed, which grades are involved if data permit, how refinery maintenance and utilization changed, whether pipelines or export terminals constrained flows, and how much usable storage remained. National totals should not override a hub-specific signal.

Only then inspect prices. Define the cash assessment or futures contract, timestamp it, and retain the contract month. Record nearby calendar spreads and, where possible, location and quality differentials. Align the price window to the actual EIA release. A daily close cannot show whether prices moved before or after a 10:30 a.m. report.

Finally, maintain competing hypotheses. A Cushing draw plus stronger front spreads is consistent with prompt tightening. An alternative is contract-expiry positioning or a pipeline timing shift. A national build plus wider contango is consistent with rising storage demand; alternatives include planned refinery maintenance and an isolated grade mismatch. State what would falsify the leading view—for example, later monthly data failing to confirm the draw, spreads reversing after expiry, or another region absorbing the apparent shortage.

## What inventory and the curve can—and cannot—tell us

Together, stocks and curve shape form a disciplined diagnostic. Low accessible inventories, expensive prompt barrels, and backwardation create a coherent tightness signal. High utilization of working storage, weak nearby prices, and widening contango create a coherent surplus signal. Disagreement is not an inconvenience to explain away. It can identify location, quality, timing, financing, or measurement effects that are the real market story.

Neither series reveals causality alone. Futures curves embed expectations and risk premia as well as carrying economics. Inventory statistics are estimates bounded by survey definitions. Commercial storage decisions depend on private costs and constraints. The defensible language is therefore “consistent with” until timing, contract definitions, physical evidence, and alternatives align.

For [[US market regime tracker|cross-asset analysis]], oil inventories matter beyond energy. They affect inflation-sensitive product prices, producer cash flow, refinery margins, transport demand, and sometimes the path of measured headline inflation. But a barrel-level mechanism should come before a macro slogan. The physical system explains why the same outright oil price can coexist with very different curve shapes—and why those shapes can imply different risks for producers, refiners, consumers, and futures holders.

## Sources

- U.S. Energy Information Administration, [Petroleum Supply Monthly](https://www.eia.gov/petroleum/supply/monthly/) and [explanatory notes](https://www.eia.gov/petroleum/supply/monthly/pdf/psmnotes.pdf) — monthly supply, disposition, stocks, definitions, coverage, and revision context; accessed July 9, 2026.
- U.S. Energy Information Administration, [Weekly Petroleum Status Report](https://www.eia.gov/petroleum/supply/weekly/) and [release schedule](https://www.eia.gov/petroleum/supply/weekly/schedule.php) — weekly tables, methodology, release timing, and original vintages; accessed July 9, 2026.
- U.S. Energy Information Administration, [WPSR as a snapshot of petroleum balances](https://www.eia.gov/todayinenergy/detail.php?id=53399) — sample-versus-monthly distinction, balance construction, and four-week-average guidance.
- U.S. Energy Information Administration, [Weekly U.S. and regional crude oil stocks and working storage capacity](https://www.eia.gov/petroleum/supply/weekly/wcrudeoilstorage_notice.php) and [capacity-report archive](https://www.eia.gov/petroleum/storagecapacity/) — working versus shell capacity, bottoms, stocks-in-transit treatment, and the notice that the capacity survey was discontinued after its March 2024 observation.
- U.S. Energy Information Administration, [Crude oil adjustment balances independently developed components](https://www.eia.gov/todayinenergy/detail.php?id=21472) — explanation of the balancing residual and component uncertainty.
- CME Group, [NYMEX Rulebook Chapter 200: Light Sweet Crude Oil Futures](https://www.cmegroup.com/rulebook/NYMEX/2/200.pdf) — controlling contract grade, delivery location, quality, and procedures; version accessed July 9, 2026.
- CME Group, [Delivery of WTI futures](https://www.cmegroup.com/education/courses/introduction-to-crude-oil/crude-oil-fundamentals/delivery-of-wti-futures) — physical-delivery and convergence overview.
- CME Group, [Contango and backwardation](https://www.cmegroup.com/education/courses/introduction-to-ferrous-metals/what-is-contango-and-backwardation) — exchange explanation of curve shape, carry, and convenience yield.

## Open questions

- Which public series best measures commercially available Cushing capacity after accounting for leased space, maintenance, and operational segregation?
- How large are original-vintage weekly-to-monthly inventory errors by PADD, and do price responses distinguish genuine balance news from sampling noise?
- Can public pipeline nomination, refinery maintenance, and export-terminal data reliably separate location constraints from national scarcity?
- How should implied convenience yield be estimated when storage costs are nonlinear and spot assessments are not executable for every participant?
- Which April 2020 conclusions survive a reconstruction using participant position constraints, exact contract calendars, and contemporaneous Cushing capacity rather than hindsight?
