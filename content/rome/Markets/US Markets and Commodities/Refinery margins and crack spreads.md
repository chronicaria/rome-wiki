---
title: Refinery margins and crack spreads
created: 2026-07-10
source: llm
status: seed
tags: [markets, commodities, oil, refining, crack-spreads]
as_of: 2026-07-10
desk: US markets and commodities
review_after: 2027-07-10
---

A crack spread is a deliberately simplified product-value-minus-crude-cost calculation: useful for reading refining conditions and hedging price risk, but not a refinery's actual profit margin.

Up: [[US Markets and Commodities]]

Related: [[WTI versus Brent crude oil]] · [[Oil inventories storage and the futures curve]] · [[Commodity curves carry and convenience yield]]

## The economic question

A refinery buys crude oil and other feedstocks, separates their components, converts heavier molecules into lighter ones, treats streams to meet product specifications, and sells a slate that can include gasoline, diesel, jet fuel, liquefied gases, petroleum coke, asphalt, sulfur, and petrochemical feedstocks. Its central commercial exposure is therefore not simply whether oil rises or falls. It is whether the value of what the plant can sell exceeds the delivered cost of what it must buy, plus the many costs of transforming one into the other.

A **crack spread** compresses that problem into a small number of observable commodity prices. In its simplest form, a gasoline crack is the price of one barrel-equivalent of gasoline minus the price of one barrel of crude. A multi-product crack combines gasoline and distillate in a fixed ratio. The name evokes the conversion, or “cracking,” of large hydrocarbon molecules into smaller, more valuable ones, but the market measure is an arithmetic spread rather than an engineering model.

This distinction matters. EIA describes crack spreads as indicators of short-term refining margins and explicitly notes that they omit other variable costs, fixed costs, and some product revenue. A screen spread can widen while a particular refinery's realized earnings deteriorate, or narrow while a well-positioned refinery outperforms. The calculation is best treated as a standardized signal of the commodity-price environment, not as an income statement.

## The standard 3:2:1 calculation

The common U.S. shorthand is the **3:2:1 crack spread**. It assumes that three barrels of crude yield two barrels of gasoline and one barrel of distillate. If prices are aligned by location, grade, specification, and time, the per-input-barrel spread is

$$
\text{3:2:1 crack}
=\frac{2P_{gasoline}+P_{distillate}-3P_{crude}}{3}.
$$

The units must be made consistent. U.S. gasoline and NY Harbor ultra-low-sulfur diesel futures are quoted in dollars per gallon, while crude is commonly quoted in dollars per barrel. One petroleum barrel is 42 gallons, so the product quotations must be multiplied by 42 before applying the formula. For example, if gasoline is $2.40 per gallon, ULSD is $2.70 per gallon, and crude is $75 per barrel, then

$$
\frac{2(42\times2.40)+(42\times2.70)-3(75)}{3}
=\$30.00\text{ per barrel of crude input}.
$$

That $30.00 is not expected accounting profit. It is gross modeled product value less modeled crude cost under a fixed yield assumption. It contains no direct deduction for natural gas, electricity, hydrogen, catalysts, chemicals, labor, maintenance, environmental compliance, freight, storage, financing, depreciation, or corporate overhead. Nor does it credit jet fuel, petroleum coke, asphalt, sulfur, liquefied gases, or processing gain.

Other ratios answer different questions. A 2:1:1 spread assumes two crude barrels become one gasoline and one distillate barrel. A 5:3:2 uses three gasoline and two distillate barrels for five crude barrels. A single-product gasoline or diesel crack isolates the relative strength of that product. No ratio is universally “correct.” The appropriate proxy depends on the refinery, the region, the season, and the analytical purpose.

## What a crack spread actually measures

The spread measures a **relative price**, not the outright oil price. Crude and products share many macro drivers, but their marginal supply-and-demand conditions differ. A hurricane may interrupt Gulf Coast refining while leaving crude production relatively intact. Gasoline supply can tighten because a pipeline fails during summer driving season. Distillate can strengthen because of freight activity, heating demand, agricultural use, low inventories, or disruptions to global diesel exports. Conversely, new refinery capacity or weak product consumption can depress products relative to crude.

This is why crack spreads can reveal information hidden by flat price. Crude can fall while the crack narrows if product prices fall faster. Crude can rise while the crack widens if product scarcity is more acute. A refinery's economic incentive to run depends on the relative value of incremental output versus incremental inputs and operating costs, not on crude's direction alone.

The spread also contains expectations when calculated from futures. A forward 3:2:1 built from same-month crude, gasoline, and ULSD contracts is a market price for a standardized future relationship. It reflects expected seasonal demand, maintenance, inventory, trade flows, regulation, and disruption risk, as well as risk premia and contract-specific technical effects. It is not a pure forecast of the spot spread that will eventually prevail.

## Basis must match the physical refinery

A meaningful physical crack uses prices that correspond to the refinery's feasible inputs and outputs. Four matching problems dominate.

**Location.** WTI futures deliver at Cushing, while RBOB gasoline and ULSD futures are centered on New York Harbor specifications and delivery infrastructure. Combining them creates a liquid paper benchmark, but not the literal economics of a Gulf Coast plant. A Gulf Coast refiner may buy waterborne or pipeline crude priced against Light Louisiana Sweet, Mars, WTI Midland, or another grade and sell products at Gulf Coast spot differentials. Freight and pipelines connect regions imperfectly. EIA's illustrative Gulf Coast calculation therefore uses Gulf Coast product prices and Louisiana Light Sweet crude rather than mechanically inserting Cushing WTI.

**Quality.** “Crude oil” is not a uniform input. Density, sulfur, acidity, metals, contaminants, and distillation properties affect yield and processing cost. A complex refinery with cokers, hydrocrackers, and hydrotreaters may earn an advantage by buying discounted heavy sour crude and converting it into high-value clean fuels, but only after paying higher hydrogen, energy, catalyst, and maintenance costs. A simple refinery may prefer light sweet crude. The headline WTI crack misses the refinery-specific crude-quality differential.

**Specification.** RBOB is reformulated blendstock for oxygenate blending, not every gallon of finished gasoline sold in the United States. NY Harbor ULSD is a specific deliverable market, even though the contract retains the historical “heating oil” product code. Regional gasoline volatility, seasonal vapor-pressure rules, octane, sulfur, biofuel blending, and pipeline specifications create basis between a benchmark and a plant's realized barrel.

**Time.** All legs should represent economically comparable periods. Mixing prompt product prices with a later crude contract can manufacture a spread driven by calendar structure. Even nominally same-month contracts have different last-trading days, delivery conventions, and physical timing. Maintenance decisions and hedges often span the crude-purchase date, processing interval, and later product-sale date, so a precise margin model may need dated or sequential legs rather than one labeled month.

These basis risks explain why two analysts can publish different “the 3:2:1 crack” values without either committing arithmetic error. One may use WTI, RBOB, and ULSD futures; another may use Gulf Coast spot gasoline, Gulf Coast diesel, and LLS. The calculation should always name the crude, products, locations, timestamps, units, and ratio.

## From screen crack to realized refinery margin

The bridge from a crack spread to a plant's realized economics has several layers.

### Actual yields and product slate

The 3:2:1 ratio assumes two-thirds gasoline and one-third distillate, but a refinery produces more than those two products. EIA's 2023 national illustration showed about 19.57 gallons of finished motor gasoline, 12.47 gallons of distillate, 4.41 gallons of jet fuel, and smaller volumes of coke, still gas, hydrocarbon gas liquids, asphalt, and other outputs per 42-gallon crude barrel. Total liquid and other product volume can exceed crude input volume because lower-density products occupy more volume, a phenomenon called **processing gain**; EIA estimated an average 6.3% gain in 2023.

Those averages are not a plant recipe. Operators can alter cut points, blending, and unit severity to shift yields at the margin, but equipment configuration, crude chemistry, product specifications, unit constraints, and nonlinear operating costs limit flexibility. EIA notes that refiners can shift among gasoline, distillate, and jet fuel in response to demand, yet high-cost infrastructure and physical configuration constrain the adjustment. A gasoline-heavy proxy can therefore misrepresent a distillate-oriented or jet-exposed plant.

### Feedstock and product basis

The relevant crude cost is delivered feedstock cost, including quality differentials, transport, losses, and any blend components—not merely a benchmark settlement. Product revenue is the netback at the refinery gate after accounting for transport, terminal, blending, and contractual differentials. A refinery may appear advantaged against WTI but lack access to the cheap barrel. Another may access discounted inland or heavy crude but sell products into a weak local market. The true comparison is between feasible delivered inputs and feasible realized outputs.

### Variable operating costs

Refining consumes substantial fuel, electricity, steam, hydrogen, water, catalysts, and chemicals. Complexity creates conversion capacity but also cost. Natural-gas prices can matter both as furnace fuel and, through steam-methane reforming, as an input to hydrogen used for desulfurization and hydrocracking. Higher throughput can raise wear, catalyst use, emissions, and the probability or consequence of an outage. A rational run decision depends on the **incremental net margin** after costs that change with throughput, not the crack alone.

### Environmental and blending obligations

Under EPA's Renewable Fuel Standard, refiners and importers of gasoline or diesel can be obligated parties. They demonstrate compliance by obtaining and retiring Renewable Identification Numbers, or RINs, against Renewable Volume Obligations. RINs may arrive with renewable fuel and later be separated, or they may be purchased in the market. The economic incidence varies with an entity's refining, blending, wholesale, and contractual position, so a headline RIN price should not be subtracted mechanically from every refiner's crack in the same way. Still, volatile compliance-credit costs can create a material divergence between a petroleum crack and company economics.

Product specifications and emissions programs add other costs and constraints. Producing lower-sulfur fuels may require more hydrogen and treatment; seasonal gasoline formulations change blending economics; carbon programs can affect crude and product values differently. These rules are embedded unevenly in regional spot prices and company obligations.

### Fixed costs, downtime, and capital

Labor, routine maintenance, insurance, property taxes, and some utility expenses persist even at lower throughput. Turnarounds require planned downtime and large expenditure. Unplanned outages destroy volume and can impose repair and restart costs. Depreciation, interest, taxes, and the capital needed to maintain or upgrade a refinery sit further below a gross commodity margin.

This creates a crucial asymmetry: a positive crack does not prove that a refinery earns its cost of capital, while a temporarily negative modeled crack does not necessarily cause an immediate shutdown. Some costs are sunk or fixed; stopping and restarting is expensive; contractual commitments matter; and operators may continue running if the contribution toward fixed costs remains positive. Over longer periods, however, persistently inadequate full-cycle margins drive closures, conversions, or reduced investment.

## Utilization, outages, and the margin feedback loop

EIA defines refinery utilization using gross inputs to atmospheric crude distillation units divided by operable capacity. That statistic is useful but narrower than “the whole refinery is running at this percentage.” A plant's crude unit can run while a downstream catalytic cracker, hydrocracker, coker, or hydrotreater constrains the valuable product slate. Capacity can also be operable on paper but unavailable temporarily because of maintenance.

Margins and runs influence each other. When product cracks rise above incremental costs, refiners have an incentive to increase throughput where equipment, crude supply, logistics, and inventories permit. More runs consume crude and add products, tending over time to support crude relative to products and compress the spread. When cracks fall, maintenance may be advanced, run rates reduced, and marginal capacity idled; lower product supply can eventually support the crack. The adjustment is neither instant nor smooth because refineries have minimum rates, startup costs, unit bottlenecks, seasonal turnarounds, and safety constraints.

Outages produce a two-sided effect. A major refinery outage can weaken nearby crude because one buyer disappears while strengthening products because one supplier disappears. The observed crack may widen sharply even though the disabled refinery cannot capture it. Competing refineries with spare capacity and access to the same product market may benefit. EIA notes that product shortages associated with hurricanes, refinery outages, or pipeline disruptions can create brief crack-spread spikes.

Inventory and imports moderate this feedback. Product stocks can meet demand during maintenance; imports can arbitrage a regional shortage if freight, specification, timing, and port capacity permit. Exports connect U.S. margins to Latin American, European, and other markets. Consequently, a U.S. crack is partly a global signal even when its price legs are regional.

## Seasonality and the gasoline-distillate balance

Gasoline and distillate do not share one seasonal pattern. Gasoline demand and specifications often make spring and summer prominent. Refineries conduct maintenance ahead of major demand periods, and the transition to summer-grade gasoline can tighten particular blend components. Hurricane season raises Gulf Coast outage and logistics risk. Distillate is exposed to trucking, industrial activity, farming, heating, and global trade; winter weather matters, but low inventories or overseas disruptions can dominate normal seasonality. Jet demand adds a third transportation cycle that the 3:2:1 proxy ignores.

The ratio between gasoline and distillate cracks is therefore informative. A wide gasoline crack with a weak diesel crack says something different from strength across both products. An unchanged composite can conceal offsetting moves: gasoline may improve exactly as distillate deteriorates. Analysts should inspect each leg before assigning a single story to the combined number.

Seasonal comparisons require matched definitions. A summer RBOB contract cannot be compared casually with a winter gasoline series, and five-year averages can span regulatory changes, refinery closures, pandemics, wars, sanctions, and capacity additions. Seasonality is a baseline, not an invariant law.

## Hedging a refining margin

A refiner exposed to falling product prices relative to crude can approximate a margin hedge by buying crude futures and selling product futures in the chosen ratio. In a stylized 3:2:1 hedge, the economic exposure corresponds to three crude barrels against two gasoline and one distillate barrel. Because standard NYMEX WTI contracts represent 1,000 barrels while RBOB and ULSD contracts represent 42,000 gallons—also 1,000 barrels—the contract sizes facilitate ratio construction.

The hedge locks a **paper spread**, not refinery profit. Actual crude grades, product locations, yields, purchase and sale dates, and volumes differ from the contracts. Operational failure can leave futures positions without the anticipated physical offset. Margin requirements create cash-flow risk even when the eventual economic hedge works. Futures curves may also move differently across months, and rolling positions introduces calendar basis. Options can protect against adverse spread moves while retaining upside, but add premium, volatility, correlation, and strike-selection risks.

Non-refiners can trade cracks as relative-value positions, but that does not confer physical optionality. A functioning refinery can change crude slates, adjust units, blend inventories, delay sales, and exploit logistics within limits. A financial position is governed by contract settlement and liquidity. The same quoted spread can therefore have different value to an operator, a merchant with storage, and a purely financial trader.

## A disciplined reading checklist

First, define the object. State whether the spread is spot or futures; the exact crude, gasoline, and distillate assessments; their locations; the contract months or timestamps; the ratio; and whether the result is per barrel of crude input.

Second, decompose the move. Calculate the change in each leg rather than saying only that “margins widened.” Identify whether gasoline rose, diesel rose, crude fell, or some combination occurred. Then test physical explanations against inventories, refinery runs, outages, maintenance, imports, exports, freight, weather, and product demand.

Third, map the proxy to the asset. For a company or plant, ask about crude slate, complexity, regional product exposure, planned and unplanned downtime, throughput, capture rate, secondary-unit constraints, hedges, RIN position, energy cost, and turnaround spending. Management's reported refinery margin or capture metric may be more relevant than the generic screen crack, though company-defined non-GAAP measures require their own reconciliation.

Fourth, preserve alternatives. A widening crack may indicate product scarcity, but it can also result from temporary crude weakness at the selected benchmark, contract expiry effects, or mismatched geography. High utilization can signal profitable conditions, but it can also precede oversupply or reflect a plant running to meet commitments. One weekly inventory observation is rarely decisive.

Finally, distinguish horizon. The crack is strongest as a near-term commodity signal. Quarterly corporate earnings depend on realized prices, run rates, outages, hedges, accounting, and lagged purchases and sales. Long-run refinery value depends on maintenance, regulation, capital intensity, competitive capacity, crude access, product demand, and the energy transition.

## Alternatives and limitations

Several measures complement or replace a simple crack. A refinery-specific **gross product worth** values the full modeled yield slate at relevant product prices, then subtracts the delivered feedstock basket. A **netback margin** further adjusts for freight and location. A **variable cash margin** subtracts energy, hydrogen, catalysts, chemicals, and other throughput-dependent expenses. Company-reported realized margins incorporate actual commercial results, although differing definitions reduce comparability. Linear-programming models can represent unit constraints, crude assays, intermediate streams, specifications, and optimization choices much more faithfully.

These alternatives require more data and judgment. Yield assumptions can be proprietary; spot assessments may be licensed; transfer pricing can obscure integrated-company economics; inventories create timing effects; and corporate disclosures aggregate plants. The simplicity and liquidity of a crack spread are precisely why it remains useful. Its limitation is not that it is crude, but that users sometimes ask it to answer a question it was not designed to answer.

## Why it matters

Crack spreads sit at the junction of crude supply, consumer fuel demand, industrial capacity, logistics, and corporate earnings. They help explain why crude producers and refiners can experience opposite shocks, why a refinery outage can raise retail-sensitive wholesale products while depressing local crude, and why changes in product inventories can matter even when the oil headline focuses on crude stocks.

For market analysis, the spread is a bridge between [[Oil inventories storage and the futures curve|physical balances]] and asset prices. For inflation analysis, gasoline and diesel cracks help separate changes in crude input cost from downstream scarcity. For equity analysis, they provide a starting point for refinery exposure but must be translated through capture rates, throughput, costs, and balance sheets. For policy, they show that interventions affecting crude supply, product specifications, biofuel credits, shipping, or refining capacity can move different parts of the barrel in different directions.

The durable rule is: use a crack spread to describe the relative commodity-price environment; use refinery-specific physical and financial data to describe profit.

## Sources

- U.S. Energy Information Administration, “3:2:1 Crack Spread,” updated February 4, 2013, accessed July 10, 2026. https://www.eia.gov/todayinenergy/includes/crackspread_explain.php
- U.S. Energy Information Administration, “An introduction to crack spreads,” June 2, 2011, accessed July 10, 2026. https://www.eia.gov/todayinenergy/detail.php?id=1630
- U.S. Energy Information Administration, “Refining crude oil—inputs and outputs,” accessed July 10, 2026. https://www.eia.gov/energyexplained/oil-and-petroleum-products/refining-crude-oil-inputs-and-outputs.php
- U.S. Energy Information Administration, “Refining crude oil—the refining process,” accessed July 10, 2026. https://www.eia.gov/energyexplained/oil-and-petroleum-products/refining-crude-oil-the-refining-process.php
- U.S. Energy Information Administration, “U.S. Refinery Yield,” release dated May 29, 2026, accessed July 10, 2026. https://www.eia.gov/dnav/pet/pet_pnp_pct_dc_nus_pct_m.htm
- U.S. Energy Information Administration, “Jet fuel made up a record share of U.S. refinery output in 2024,” March 24, 2025, accessed July 10, 2026. https://www.eia.gov/todayinenergy/detail.php?id=64786
- U.S. Energy Information Administration, “Global refinery margins fall to multiyear seasonal lows in September,” October 15, 2024, accessed July 10, 2026. https://www.eia.gov/todayinenergy/detail.php?id=63447
- U.S. Energy Information Administration, glossary entries for refinery yield and refinery utilization, accessed July 10, 2026. https://www.eia.gov/tools/glossary/
- CME Group, “RBOB Gasoline Futures Contract Specs,” accessed July 10, 2026. https://www.cmegroup.com/markets/energy/refined-products/rbob-gasoline.contractSpecs.html
- CME Group, “NY Harbor ULSD Futures Contract Specs,” accessed July 10, 2026. https://www.cmegroup.com/markets/energy/refined-products/heating-oil.contractSpecs.html
- CME Group, “Crude Oil Futures Contract Specs,” accessed July 10, 2026. https://www.cmegroup.com/markets/energy/crude-oil/light-sweet-crude.contractSpecs.html
- U.S. Environmental Protection Agency, “Overview of the Renewable Fuel Standard Program,” updated April 16, 2026, accessed July 10, 2026. https://www.epa.gov/renewable-fuel-standard/overview-renewable-fuel-standard-program
- U.S. Environmental Protection Agency, “Renewable Identification Numbers (RINs) under the Renewable Fuel Standard Program,” updated December 31, 2025, accessed July 10, 2026. https://www.epa.gov/renewable-fuel-standard/renewable-identification-numbers-rins-under-renewable-fuel-standard-program

## Open questions

- Which public combination of regional spot assessments best approximates the realized margin of each major U.S. refining center without relying on proprietary price data?
- How stable are company-reported crack-spread capture rates after controlling for turnarounds, inventory timing, crude slate, hedging, and RIN positions?
- When refinery outages widen a benchmark crack, how much of the benefit is captured by nearby plants versus imports, inventories, pipelines, and distant refiners?
- How should a standard margin proxy evolve as jet fuel, renewable diesel, biofuel blending, carbon programs, and petrochemical integration alter the marginal product slate?
- Can a transparent full-barrel gross-product-worth index outperform the 3:2:1 crack as a leading indicator of U.S. refinery runs without sacrificing replicability?
