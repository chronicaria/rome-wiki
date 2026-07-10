---
title: Calendar spreads in commodity futures
created: 2026-07-10
source: llm
status: seed
tags: [markets, commodities, futures, term-structure, spreads, market-structure]
---

A commodity calendar spread is a long position in one delivery month paired with a short position in another month of the same futures market; it isolates the relative value of delivery time, but that relative price still embeds storage, logistics, contract rules, seasonality, risk premia, and execution risk.

Up: [[US Markets and Commodities]]

Related: [[Commodity curves carry and convenience yield]] · [[Futures continuous contracts and roll bias]] · [[Oil inventories storage and the futures curve]] · [[Grain balance sheets and stocks-to-use]]

## What the spread measures

Let $F(t,T_1)$ and $F(t,T_2)$ be futures prices observed at time $t$ for the same commodity and contract specification, with $T_1<T_2$. A simple nearby-minus-deferred calendar spread is

$$
S_{1,2}(t)=F(t,T_1)-F(t,T_2).
$$

Under this convention, a positive spread means the nearby contract is more expensive: backwardation between those two months. A negative spread means the deferred contract is more expensive: contango. Vendors and exchanges do not all quote spreads with the same leg order. A displayed “Sep/Dec” price can mean September minus December, or the price of a strategy whose buy/sell orientation must be read from the specification. The first analytical task is therefore to record the formula, not merely the ticker.

A long-nearby/short-deferred position gains when the nearby contract strengthens relative to the deferred contract. That can happen while both outright prices rise, while both fall, or while they move in opposite directions. For example, if August rises from $70 to $74 and December rises from $72 to $73, the spread moves from $-2 to $+1 and the paired position gains $3 per quoted unit before costs. If August falls to $68 while December falls to $65, the spread also moves to $+3. Calling either result simply “bullish” loses the point: the position expresses a view about timing.

The two legs normally share much outright-price exposure, so their covariance can make the spread less volatile than either leg. That is not the same as low risk. Near expiry, physical constraints can make one month detach violently. Differences in liquidity, daily settlement, price limits, delivery options, or weather exposure can also produce large spread moves even when outright commodity risk appears hedged.

## The storage mechanism

For a storable commodity, the relation between delivery dates begins with the economics of carrying inventory. A simplified continuous-cost representation is

$$
F(t,T)=S_t e^{(r+u-y)(T-t)},
$$

where $S_t$ is a relevant cash price, $r$ is financing, $u$ represents storage, insurance, handling, and losses, and $y$ is convenience yield—the non-cash service from possessing usable inventory. Comparing two futures maturities removes the need to observe spot perfectly, but it does not remove these economics. The deferred month must compensate an inventory holder for carrying material forward, while scarce immediately available inventory can command a service value that strengthens the nearby month.

This is an organizing benchmark, not a universal no-arbitrage equality available to every screen user. The physical trader must acquire eligible grade at the relevant location, finance it, reserve storage and transport, manage shrinkage and quality, post futures margin, and deliver under the rulebook. Capacity is lumpy and participant-specific. An average published warehouse rate may be far below the marginal cost of the last available tank, cavern, silo, or warrant. A cash assessment may not be executable in size. The residual called convenience yield can therefore absorb basis, taxes, credit, optionality, and measurement error.

When inventories are ample, one additional unit may provide little operational benefit and deferred prices can exceed nearby prices by carry costs. When accessible working stocks are scarce, the marginal unit can prevent a refinery shutdown, satisfy a feed mill, keep a pipeline balanced, or cover an unexpected order. The nearby contract can then trade above the deferred one. This is why [[Commodity curves carry and convenience yield]] treats the spread as a joint signal from storage supply and inventory services rather than a pure forecast of future spot prices.

Arbitrage bounds are asymmetric. If deferred value greatly exceeds nearby value plus all-in carry, a capable merchant may buy physical inventory and sell the deferred future. The reverse trade—selling inventory short today and buying it back later—may be impossible because material cannot be borrowed, the commodity is perishable, or commercial inventory has an essential operating use. Backwardation can consequently exceed a naive negative-carry bound.

## Seasonality is part of the contract pair

Commodity months are not interchangeable time labels. Natural gas demand often peaks in winter; gasoline specifications and driving demand change across seasons; grains transition between old-crop and new-crop supply; livestock contracts represent different biological production cohorts; and power contracts can span very different load and outage conditions. A December-minus-April natural-gas spread is partly a price for winter deliverability, not just four months of financing.

The right seasonal baseline is usually the same named spread across comparable years, adjusted for structural changes. Comparing a July–December corn spread with a March–May spread mixes crop-year information. Comparing current gas spreads with a decade-old average without accounting for LNG export capacity, power-sector demand, pipeline additions, and storage changes can be equally misleading.

Seasonality can create expected contango or backwardation without an arbitrage. Storage has injection and withdrawal-rate limits. A molecule in October cannot always be transformed into deliverable January gas without contracted capacity. Grain harvested in autumn may incur drying, quality, and location costs. Cattle are not durable inventory that can be carried like copper. Each market requires its own transformation technology.

## Delivery rules create convergence—and discontinuities

Deliverable futures converge toward eligible cash value because the expiring contract defines a delivery process. The exact process is contract-specific. For example, the NYMEX light sweet crude oil rulebook defines eligible grades, delivery at Cushing, transfer through designated pipelines or storage facilities, scheduling, and alternative delivery procedures. Grain, metal, and other energy contracts use different combinations of locations, certificates or warrants, inspection, load-out, and delivery options. A calendar spread therefore compares two claims governed by one contract's rules but exposed to different delivery calendars and physical states.

Near expiry, the nearby leg can become a logistics instrument. A shortage of eligible receipts, congestion at a delivery hub, an expiring shipping certificate, or inability to obtain transport may strengthen or weaken it relative to later months. [[Oil inventories storage and the futures curve]] shows the extreme version in May 2020 WTI: the prompt Cushing obligation became radically different from later delivery. The lesson is not that calendar spreads are defective. It is that their information comes partly from the actual delivery system.

Contract specifications can also change across time. Grade differentials, storage charges, delivery points, expiration dates, and position-limit treatment may be amended. A long history assembled from symbols can silently compare economically different instruments. Analysts should retain the rulebook version and contract month rather than treating the series as an abstract curve.

## Spread execution and clearing

An exchange-listed spread order allows the two legs to execute as a defined combination. That reduces legging risk relative to separately buying one month and selling another, though fill quality, queue position, bid–ask width, and partial execution rules still matter. The spread has its own order book and minimum tick. Its implied liquidity may draw from outright books, native spread orders, or both, depending on exchange matching rules.

Clearing may recognize that opposite positions in related expiries offset part of a portfolio's risk. CME's published FX calendar-spread example says the margin for that particular combined position can be a fraction of the sum charged to two standalone positions; commodity offsets must be checked against the applicable product and current clearing schedule rather than inferred from the FX example. Any reduction is conditional, not permanent. Clearing models can raise requirements when correlation weakens, volatility rises, concentration grows, or expiry approaches. Variation margin is still settled from daily moves in both legs, so a trader can face liquidity pressure even if the final relative-value thesis remains plausible.

“Lower margin” should never be translated as “lower economic loss.” Contract size turns quoted spread movement into dollars. If a futures contract represents $Q$ physical units, a one-unit spread move changes a one-spread position by approximately $Q$, subject to tick value and currency conventions. A $1-per-barrel move in a 1,000-barrel crude spread is $1,000. Multiple spreads, options, and offsets require portfolio-level calculation.

Regulation distinguishes a spread from an automatic permission to hold unlimited size. The CFTC's current position-limit framework recognizes categories including calendar, intra-market, inter-market, quality, processing, and futures-options spreads. For federally referenced contracts, qualifying spread exemptions have defined conditions, and a market participant must separately address applicable exchange-set limits. Federal spot-month limits, exchange accountability, aggregation, reporting, and delivery rules still apply. An economic offset does not by itself establish a regulatory exemption.

## How commercial participants use spreads

A storage operator can hedge the value of moving inventory through time by buying physical material and selling a later future, or by locking the difference between expected injection and withdrawal values. The calendar spread is central because outright price risk may be less relevant than whether the seasonal price premium covers capacity, fuel, losses, and finance.

A processor may use spreads to separate input timing from output timing. A grain merchant deciding whether to hold inventory compares the old-crop cash basis and nearby future with a later delivery opportunity. An energy producer can hedge different production months, but the resulting position may be a strip rather than a pure calendar spread because production volumes, location basis, and operational risks differ.

Market makers and relative-value funds may trade curve shape without owning physical assets. Their capital and liquidity can improve price discovery, but their feasible set differs from that of merchants. They cannot necessarily enforce physical carry bounds. A paper spread that appears wide after published storage cost may remain wide because deliverable inventory, warehouse access, credit, or transportation is scarce.

## A disciplined interpretation workflow

First define the legs exactly: exchange, commodity, contract size, delivery or settlement mechanism, first and last relevant dates, and whether the quoted spread is near-minus-far or the reverse. Preserve named months. “Front spread” changes identity as the front month rolls and can manufacture jumps, as explained in [[Futures continuous contracts and roll bias]].

Second convert the quote into economic units. Record tick value and dollar exposure. Annualizing a short spread can exaggerate tiny differences and is particularly unhelpful across seasonal delivery months; absolute dollars per unit and percent of nearby price are usually clearer.

Third map the physical channel. Identify relevant inventory, location, grade, storage utilization, injection or withdrawal capability, transport, production season, and demand season. National stocks can conflict with a delivery-hub shortage. Total capacity can conflict with accessible working capacity.

Fourth compare evidence. A strengthening nearby spread plus falling relevant stocks, stronger cash basis, and constrained logistics is consistent with tightening. A weakening nearby spread plus builds, soft basis, and rising storage demand is consistent with surplus. Keep alternatives: expiry positioning, index rolls, temporary outages, quality mismatches, and contract-rule changes can mimic balance shifts.

Fifth timestamp releases and prices. Inventory data may describe a week ending before publication. A settlement observed after the release contains information unavailable at the inventory date. Intraday claims require intraday timestamps; daily closes cannot identify whether the market moved before or after a report.

Finally, define falsification. A storage explanation weakens if later official data revise away the stock change, cash basis fails to confirm it, the spread normalizes immediately after expiry, or another region absorbs the imbalance. A seasonal explanation weakens if comparable year spreads do not show the pattern after controlling for stocks and structural capacity.

## Alternatives to the storage story

Expected future supply and demand can move a calendar spread even without current inventory change. A forecast bumper crop may weaken new-crop months; a hurricane threat may strengthen prompt energy; a policy deadline can alter one delivery window. Futures prices also contain risk premia. Commercial hedging pressure and the covariance of commodity returns with investors' marginal value of wealth can make a deferred contract differ from an average expected future spot price.

Liquidity is another alternative. The nearby month often attracts more volume until the roll, while distant months can have wider bid–ask spreads. Index rolls can create predictable order flow without permanently changing fair value. Price limits or a halted leg can prevent simultaneous adjustment. Options hedging can concentrate flows around strikes. None of these explanations should be assumed, but each should be tested before reading every curve move as physical scarcity.

## Why it matters

Calendar spreads are one of the cleanest market prices for the value of time-specific commodity access. They connect futures screens to inventories, storage, transport, production cycles, and delivery rules. They also discipline macro interpretation: an oil rally led by deferred months tells a different story from one led by the prompt contract, and a winter gas premium is not a generic forecast of permanently higher gas prices.

For research, spreads reduce some common outright-price noise while creating new measurement responsibilities. A valid study must use stable contract identities, executable conventions, correct multipliers, and release-aligned timestamps. For commercial analysis, the spread is a candidate margin, not realized profit; private costs and operational options decide whether it can be captured. For portfolio analysis, margin offsets and correlated legs do not eliminate tail, liquidity, or delivery risk.

## Sources

- U.S. Commodity Futures Trading Commission, [Position Limits for Derivatives](https://www.cftc.gov/IndustryOversight/MarketSurveillance/SpeculativeLimits/index.htm) — federal limit framework, spread categories, and exemption process.
- U.S. Commodity Futures Trading Commission, [Speculative Limits](https://www.cftc.gov/IndustryOversight/MarketSurveillance/SpeculativeLimits/speculativelimits.html) — statutory purpose, exchange limits, aggregation, and hedge/spread context.
- CME Group, [Frequently Asked Questions: CME FX Futures Calendar Spreads](https://www.cmegroup.com/articles/faqs/frequently-asked-questions-cme-fx-futures-calendar-spreads.html) — exchange definition of simultaneous different-expiry execution and margin-offset explanation.
- CME Group, [Contango and backwardation](https://www.cmegroup.com/education/courses/introduction-to-ferrous-metals/what-is-contango-and-backwardation) — exchange terminology and storage interpretation.
- CME Group, [NYMEX Rulebook, Chapter 200: Light Sweet Crude Oil Futures](https://www.cmegroup.com/content/dam/cmegroup/rulebook/NYMEX/2/200.pdf) — illustrative commodity-specific grades, Cushing delivery facilities, scheduling, and alternative-delivery rules.
- U.S. Energy Information Administration, [The Basics of Underground Natural Gas Storage](https://www.eia.gov/naturalgas/storage/basics/) — capacity, deliverability, facility types, ownership, and official storage measures.
- U.S. Energy Information Administration, [Weekly U.S. crude oil stocks and storage capacity](https://www.eia.gov/petroleum/supply/weekly/wcrudeoilstorage_notice.php) — example of working-capacity constraints and stock interpretation.

## Open questions

- Which exchange matching rules determine how much displayed spread liquidity is implied from outright books in each major commodity?
- How should a researcher estimate marginal, participant-specific storage costs when only average tariffs are public?
- When do index rolls create temporary spread pressure large enough to contaminate balance inference?
- Which inventory geography best explains each benchmark's first three calendar spreads?
