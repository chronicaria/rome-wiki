---
title: US natural gas balances
created: 2026-07-10
source: llm
status: seed
tags: [markets, commodities, energy, natural-gas, balances, storage]
---

The US natural-gas balance reconciles dry production, imports, exports, consumption, and storage, but its market meaning depends on weather, pipeline geography, LNG operations, storage deliverability, measurement timing, and revisions—not on one headline stock change.

Up: [[US Markets and Commodities]]

Related: [[Commodity curves carry and convenience yield]] · [[Calendar spreads in commodity futures]] · [[Oil inventories storage and the futures curve]] · [[From macro surprises to asset prices]]

## The accounting identity

At national monthly frequency, a useful representation is

$$
\text{dry production}+\text{supplemental gas}+\text{imports}+\text{storage withdrawals}+\text{balancing item}
=\text{consumption}+\text{exports}+\text{storage injections}.
$$

EIA's published Supply and Disposition table often expresses storage as **net withdrawals** and trade as **net exports**. Under that presentation,

$$
\text{dry production}+\text{supplemental gas}+\text{net storage withdrawals}+\text{balancing item}
=\text{consumption}+\text{net exports}.
$$

A negative net-withdrawal number means net injections exceeded net withdrawals; gross flows can still coexist. Imports are already netted against exports in “net exports.” Sign conventions must be checked before analysis; otherwise an injection can be mistaken for supply and the balance double-counted.

The balancing item is not a mysterious source of physical gas. EIA defines it as quantities lost and imbalances resulting from differences among data sources. Production, pipeline trade, LNG, consumption, and storage series come from surveys and administrative systems with different coverage and reporting clocks. Monthly reconciliation therefore contains statistical discrepancy. A large or persistent balancing item is a reason to investigate measurement and revisions, not to invent an unobserved fundamental driver.

Gross withdrawals are upstream gas removed from wells before several deductions and transformations. Marketed production excludes gas used for repressuring, nonhydrocarbon gases removed, and gas vented and flared. Dry production further removes natural-gas-plant liquids. For pipeline and combustion balances, dry production is generally the relevant national supply measure. Mixing gross withdrawals with dry-gas consumption mechanically creates a false surplus.

Units matter. EIA monthly physical balances are commonly published in billion cubic feet, while daily commentary uses billion cubic feet per day. Heating value varies, so one cubic foot is not a perfectly uniform energy unit across streams. Prices are often dollars per million British thermal units. LNG cargoes may be discussed in tonnes, cubic metres of liquid, or gas-equivalent cubic feet. Every conversion requires an explicit heating-value and volume convention.

## Production: large, responsive, but not frictionless

US dry-gas production combines associated gas from oil-focused wells and non-associated production from gas-focused basins. The two respond differently. A higher Henry Hub price can improve gas-directed drilling economics, but rigs, crews, gathering, processing, pipeline takeaway, contracts, hedges, and producer balance sheets mediate the response. Associated gas can rise because oil drilling is attractive even when gas prices are weak.

Observed production is therefore not a single supply curve. Basin prices can diverge from Henry Hub when takeaway is constrained. A producer facing a deeply discounted local price may curtail while another basin grows. New pipeline capacity can release previously constrained gas without any national drilling surge. Freeze-offs, hurricanes, maintenance, processing outages, and pipeline force majeure can cause short-run changes unrelated to long-run resource economics.

High-frequency “lower-48 production” estimates used by the market are often commercial pipeline-scrape products, not the final EIA monthly series. They can be valuable but should be labelled as estimates and later checked against official data. EIA monthly production is slower and subject to revision; its greater coverage does not make it contemporaneous.

## Trade: Canada, Mexico, and LNG

Pipeline imports from Canada are an important supply source, while pipeline exports to Mexico are a major demand outlet. Flows respond to regional weather, storage, prices, maintenance, and pipeline capacity on both sides of the border. Netting them into one national trade number is valid accounting but can conceal opposing regional shocks.

LNG exports transformed the US balance by connecting domestic gas to global gas markets through liquefaction terminals. Feedgas delivered to a terminal is not identical to LNG loaded on a ship: liquefaction consumes fuel, inventories can change, and operational timing differs. Terminal maintenance, commissioning, outages, shipping constraints, destination demand, and global price spreads can all change feedgas demand sharply.

Nameplate liquefaction capacity is not guaranteed daily demand. Trains must operate, upstream pipelines must deliver, marine berths must be available, and economics must support nominations subject to contractual obligations. Conversely, long-term tolling and take-or-pay structures can sustain feedgas even when a simple spot-price comparison looks unattractive. Researchers should use actual feedgas or export data when available, not assume capacity equals utilization.

LNG exports also transmit global shocks imperfectly. A European or Asian price spike can raise the opportunity value of US gas only up to operational and contractual limits. Once liquefaction capacity is fully utilized, an additional overseas price increase may have little immediate effect on US physical demand. The marginal channel then runs through future capacity, maintenance decisions, cargo cancellations, or expectations rather than instant unlimited arbitrage.

## Consumption is several markets

EIA divides consumption among electric power, industrial, residential, commercial, pipeline and distribution use, and lease and plant fuel. The categories have distinct drivers.

Residential and commercial demand is dominated by heating in cold regions. Heating degree days summarize how far daily temperatures fall below a reference, but population weights, regional gas penetration, building efficiency, wind, and nonlinear cold response matter. An equal national degree-day total can produce different gas demand if cold is concentrated in gas-heated population centers or pipeline-constrained regions.

Power-sector gas burn depends on electricity load and competition among generators. Hot weather raises cooling load; cold weather can raise electric heating load. The gas share then depends on relative fuel prices, renewable output, nuclear and coal outages, hydro conditions, unit efficiency, emissions constraints, and transmission. “Weather added demand” is incomplete unless the generation stack is considered.

Industrial consumption includes chemicals, fertilizers, refining, metals, food processing, and other users of gas as fuel or feedstock. It is less immediately weather-sensitive but responds to plant outages, economic activity, input economics, and seasonal operations. Lease and plant fuel is consumed in producing and processing gas itself, while pipeline fuel supports compression. These uses can rise with throughput and should not be treated as final end-user demand.

Daily and weekly balance models usually start with weather-normalized sector baselines, then add observed or forecast weather. The uncertainty is not only meteorological. Gas-to-power switching, renewable generation, outages, holiday effects, and price-responsive industrial activity change the conversion from weather to demand. Forecast revisions should therefore be decomposed into weather and model revisions.

## Storage closes the short-run balance

Production and pipeline infrastructure change slowly relative to weather-driven demand. Underground storage absorbs the difference. During lower-demand periods operators inject working gas; during high-demand periods they withdraw it. EIA identifies three principal facility types: depleted oil and gas reservoirs, aquifers, and salt caverns.

**Working gas** is inventory available for withdrawal. **Base gas** or cushion gas maintains reservoir pressure and deliverability and is generally not available for routine withdrawal. Total gas is their sum. A weekly headline refers to working gas, not total molecules underground.

Capacity and deliverability answer different questions. Capacity is how much gas can be held; deliverability is the rate at which it can be withdrawn. EIA notes that salt caverns generally have high injection and withdrawal rates relative to capacity and can cycle more frequently, while depleted fields and aquifers often provide larger seasonal capacity with different operating characteristics. A system can have enough inventory for the winter in aggregate yet face a short-lived deliverability or pipeline bottleneck during extreme cold.

Deliverability is state-dependent. Reservoir pressure generally changes with inventory, facility design differs, and withdrawal capability can decline as working gas is depleted. “Days of supply” computed by dividing national stocks by one day's demand ignores these nonlinearities and geography. Gas in the South Central region is not automatically available to New England during a constrained cold snap.

EIA publishes both demonstrated peak working-gas capacity and design capacity. Demonstrated peak aggregates each facility's highest reported working-gas level during a 60-month window; those peaks are non-coincident and may understate new or expanded facilities. Design capacity reflects reported physical design, equipment, and operating procedures, but practical constraints may prevent simultaneous attainment. Neither measure is the same as commercially available empty space today.

## Weekly and monthly data are not interchangeable

The Weekly Natural Gas Storage Report estimates end-of-week working gas in the Lower 48 and five regions from Form EIA-912, which surveys a sample of underground storage operators. EIA releases the report at 10:30 a.m. Eastern on most Thursdays, with holiday exceptions. The reference date is the preceding report week, not release morning.

The monthly Form EIA-191 covers underground storage operators at field level and collects capacity, base gas, working gas, injections, and withdrawals. Monthly data are published later and can differ from weekly estimates because frequency, sample versus census design, respondent information, timing, and estimation procedures differ. A weekly series should not be spliced into monthly data without documenting those differences.

EIA targets a coefficient of variation no greater than 5 percent for each weekly region in its sample design and publishes estimated sampling variability. That does not mean every reported weekly change is known without error. A small deviation from analyst expectations may be less economically meaningful than the headline reaction suggests, particularly when model uncertainty about production and consumption is also large.

Storage changes are stocks, while injections and withdrawals are flows. The week-over-week change in estimated stocks is the net physical result of injections, withdrawals, and estimation. Gross injection and withdrawal activity can be much larger than the net change, especially at flexible facilities. Market commentary that calls a net build “demand destruction” skips the possibility of simultaneous high flows on both sides.

The common five-year-average comparison is descriptive, not structural fair value. The sample window moves; weather differs; production, LNG exports, pipeline capacity, generation mix, and storage capacity evolve. A deficit to the five-year average can coexist with adequate deliverability, while an apparent surplus can be poorly located.

## From balances to prices and calendar spreads

Henry Hub futures are physically delivered under NYMEX rules at a Louisiana pipeline nexus. The national balance influences Henry Hub, but regional basis and transport constraints determine how shocks reach it. A Northeast cold event can send local cash prices sharply higher without an equivalent national futures move if pipeline capacity binds and national storage elsewhere cannot reach the region.

A balance surprise matters relative to expectations. If the weekly storage build is smaller than the market expected, that is consistent with a tighter realized week, but the cause could be lower production, higher LNG feedgas, stronger power burn, colder weather, or measurement error. Price response depends on which cause is persistent and what the curve had priced.

Calendar spreads can reveal timing. Stronger winter contracts relative to shoulder months may price heating risk and storage deliverability. A strengthening prompt contract alongside low regional stocks and strong cash basis is more persuasive evidence of current tightness. [[Calendar spreads in commodity futures]] explains why the same spread also contains storage cost, convenience yield, risk premium, and contract effects.

Storage economics link summer and winter. A trader considering injection compares the acquisition price, transport, fuel, injection charge, capacity reservation, finance, losses, and expected withdrawal value. The visible winter-minus-summer spread is only gross margin. Optionality matters: flexible storage can respond to multiple price spikes, while a slow reservoir may support one seasonal cycle.

## Building a defensible balance model

Start with a consistent frequency and unit. At daily frequency, estimate dry production, Canadian imports, Mexican exports, LNG feedgas, and sector consumption in Bcf/d. Sum over the exact EIA storage week, recognizing that some inputs are preliminary. The implied storage change is the residual.

Then preserve geography. At minimum separate major production basins, the EIA storage regions, border flows, LNG terminals, and constrained demand regions. Pipeline nominations indicate scheduled movements, not necessarily final physical flow, and can be revised. Avoid false precision from adding many noisy feeds.

Next normalize weather explicitly. Compare actual demand with a weather-normal baseline, retain forecast vintages, and record degree-day methodology. A model revised after observing the storage report cannot be presented as an ex ante forecast. For event studies, timestamp the forecast cutoff and EIA release.

Reconcile weekly estimates with monthly official data when released. Track revisions rather than overwriting history. A model that appears accurate only because old inputs were backfilled with final values has look-ahead bias. Evaluate errors by season and regime, not only full-sample root mean squared error.

Finally, diagnose residuals. Persistent positive implied supply may indicate undercounted consumption, overestimated production, pipeline data duplication, or unit conversion errors. One-off misses may reflect weather, facility reclassification, survey estimation, or timing. The residual is a research target, not automatically “unknown demand.”

## Competing explanations for a storage surprise

Suppose EIA reports a 70 Bcf injection when consensus expected 80 Bcf. The ten-Bcf tighter result could reflect hotter weather and greater power burn, an LNG terminal returning from maintenance, a production outage, lower Canadian imports, higher Mexican exports, or survey noise. It could also reflect expectations built from stale weather forecasts.

Evidence should discriminate among them. Power data and temperatures support the burn channel; pipeline and terminal notices support outages; regional stock changes help locate the imbalance; cash basis and spreads show whether it was anticipated. If the price response fades quickly and later monthly data do not confirm the inferred deficit, a transient or measurement explanation gains weight.

Structural claims require more than several weekly misses. A conclusion that shale supply has become less elastic should examine well productivity, completions, basin basis, takeaway, associated gas, producer guidance, and revisions. A conclusion that LNG has permanently tightened the market should distinguish capacity additions from utilization, contract structure, and domestic supply response.

## Why it matters

Natural gas sits at the intersection of household heating, power reliability, industrial production, upstream energy, pipeline infrastructure, and global LNG. Its balance can change quickly because weather moves demand faster than production and transport can adjust. Storage makes the system work, while its physical limits create the possibility of extreme regional and seasonal prices.

For market research, the balance provides a causal checklist rather than a trading signal. It forces every claim about scarcity or surplus to reconcile supply, consumption, trade, and inventories. For macro analysis, gas prices can affect utility bills, electricity costs, industrial margins, and measured inflation with different lags. For equity and credit analysis, exposure depends on basin basis, hedges, transport commitments, fuel efficiency, and contract structure—not merely Henry Hub direction.

The durable discipline is to keep identities, estimates, and explanations separate. The accounting must balance after a statistical discrepancy. High-frequency inputs remain estimates until official data arrive. Weather-normal forecasts are conditional. Price moves are evidence about expectations and constraints, not proof of one causal story.

## Sources

- U.S. Energy Information Administration, [Natural Gas Data](https://www.eia.gov/naturalgas/data.php) — official gateway to production, trade, storage, consumption, and price series; accessed 2026-07-10.
- U.S. Energy Information Administration, [U.S. Natural Gas Monthly Supply and Disposition Balance](https://www.eia.gov/dnav/ng/ng_sum_sndm_s1_m.htm) — national accounting rows, units, balancing item, and current release schedule; accessed 2026-07-10.
- U.S. Energy Information Administration, [The Basics of Underground Natural Gas Storage](https://www.eia.gov/naturalgas/storage/basics/) — working/base gas, facility types, deliverability, ownership, and EIA survey architecture; accessed 2026-07-10.
- U.S. Energy Information Administration, [Weekly Natural Gas Storage Report](https://www.eia.gov/naturalgas/storage/) — official weekly estimates, regions, release, and comparison material; accessed 2026-07-10.
- U.S. Energy Information Administration, [Methodology for Weekly Underground Natural Gas Storage Estimates](https://ir.eia.gov/ngs/methodology.html) — sample estimation, regional design, history, and release timing; accessed 2026-07-10.
- U.S. Energy Information Administration, [Weekly storage definitions, sources, and explanatory notes](https://www.eia.gov/dnav/ng/TblDefs/ng_stor_wkly_tbldef2.asp) — working gas, base gas, region definitions, and sampling target; accessed 2026-07-10.
- U.S. Energy Information Administration, [Underground Natural Gas Working Storage Capacity methodology](https://www.eia.gov/naturalgas/storagecapacity/methodology.php) — demonstrated peak and design-capacity construction and limitations; accessed 2026-07-10.
- U.S. Energy Information Administration, [Delivery and storage of natural gas](https://www.eia.gov/energyexplained/natural-gas/delivery-and-storage.php) — pipeline types, processing, storage functions, and facility overview; accessed 2026-07-10.
- U.S. Energy Information Administration, [Short-Term Energy Outlook natural gas module](https://www.eia.gov/analysis/handbook/pdf/STEO_natural_gas_module.pdf) — official modeling treatment of production, consumption, trade, and regional inventories; accessed 2026-07-10.

## Open questions

- How large are real-time revisions in commercial production and LNG-feedgas estimates relative to final EIA monthly data?
- Which regional storage and pipeline measures best predict deliverability stress during extreme cold?
- How should weather-normal demand models adapt as heat pumps, renewables, coal retirements, and data-center load change the power stack?
- When liquefaction is fully utilized, how much do global gas prices influence Henry Hub through expectations rather than current physical flows?
