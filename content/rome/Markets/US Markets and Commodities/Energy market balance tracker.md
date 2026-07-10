---
title: Energy market balance tracker
created: 2026-07-10
source: llm
status: seed
tags: [markets, commodities, energy, oil, natural-gas, lng, quantitative-research]
as_of: 2026-07-10
desk: US markets and commodities
review_after: 2026-10-10
---

An energy-balance tracker is a versioned reconciliation of physical flows, inventories, futures curves, and transport constraints—not a dashboard that converts every weekly surprise into a causal market story.

Up: [[US Markets and Commodities]] · Related: [[Commodity data and contract registry]] · [[Oil inventories storage and the futures curve]] · [[US natural gas balances]] · [[Refinery margins and crack spreads]] · [[Shipping freight and commodity price transmission]]

## What the tracker is for

The tracker answers a narrow question: **given what was publicly knowable at a stated time, where does the U.S. oil-and-gas system appear loose, balanced, or constrained, and how uncertain is that diagnosis?** It does not forecast a price, recommend a position, or claim that one inventory release caused a market move.

Energy data arrive on incompatible clocks. Petroleum stocks are observed weekly through surveys whose reference week ends before publication. More complete monthly statistics arrive later and can differ from the weekly estimates. Natural-gas storage is sampled weekly, while production, consumption, pipeline flows, LNG feedgas, cargo loadings, outages, weather, and futures prices have different timestamps, coverages, and revision practices. Infrastructure capacity is neither the same thing as actual throughput nor proof that capacity was commercially available. A reproducible tracker preserves these differences instead of compressing them into one allegedly current number.

The unit of analysis is a **dated vintage**, not “the market today.” Each saved state should contain:

- an `as_of` timestamp and timezone for the research snapshot;
- each source's publication timestamp, reference period, and retrieval time;
- the exact series, table, survey or contract identifier;
- unit, geography, product or grade, location, frequency, adjustment and revision status;
- whether the item is an observation, estimate, model output, derived identity, expectation, or interpretation;
- a stable link to the source and, when permitted, a checksum or archived raw file name;
- any later revision in a new vintage rather than an overwrite of the old value.

That record structure extends [[Point-in-time data and look-ahead bias]] into physical energy research. It also makes a later event study honest: the analyst can use only the release and curve observations that existed at the event cutoff.

## Start with identities, not narratives

A balance is an accounting frame. For crude oil, a simplified weekly identity is

$$
\text{production}+\text{imports}+\text{adjustment}
=\text{refinery inputs}+\text{exports}+\Delta\text{stocks}.
$$

For a refined product, a useful schematic is

$$
\text{product supplied}
=\text{production}+\text{imports}-\text{exports}-\Delta\text{stocks},
$$

subject to transfers, blending components, refinery gains or losses, and the exact EIA table definition. Product supplied measures disappearance from the primary supply system; it is not a direct retail-sales or end-use-consumption survey. EIA explicitly recommends emphasizing four-week averages for noisy weekly series and using the later *Petroleum Supply Monthly* as a benchmark.

Every term must first be converted to one dimension. WPSR flows commonly appear as thousand barrels per day while stock changes appear as thousand barrels. A weekly-volume identity multiplies daily-average flows by seven; an alternative daily-flow identity divides the weekly stock change by seven. Mixing the published units directly creates a sevenfold error.

For natural gas, an official monthly supply-disposition identity can be organized schematically as

$$
\text{dry production}+\text{supplemental gaseous fuels}+\text{net imports}
=\text{consumption}+\text{net storage additions}+\text{exports}+\text{balancing item}.
$$

High-frequency LNG feedgas is a proxy bridge, not an interchangeable substitute for official LNG exports. Feedgas can include process fuel and plant-inventory timing, and adding it to consumption can double count when lease, plant, or pipeline fuel is already inside the consumption boundary. A daily nowcast that uses feedgas must keep explicit reconciliation terms until monthly exports and consumption become available.

Signs must be declared. One system may record a storage injection as positive stock change; another may place it on the disposition side; a data vendor may report net withdrawals as positive. The tracker should retain both the source sign and a normalized sign, with the transformation written down.

An identity does not make all terms equally measured. EIA's crude-oil adjustment reconciles independently estimated components and embodies their combined uncertainty. It is not a secret source of supply. Likewise, implied petroleum demand is a residual, and a gas balance derived from heterogeneous daily feeds is a nowcast rather than an official census. A large residual is first a data-quality question: timing, survey coverage, imports or exports, pipeline line fill, product reclassification, rounding, or revision may explain it before an economic narrative does.

## The minimum observation panel

### Crude oil

Record U.S. and Petroleum Administration for Defense District stocks, with commercial crude separated from the Strategic Petroleum Reserve and Cushing identified separately. Pair stocks with domestic production, imports by relevant geography, exports, refinery crude inputs, refinery utilization, and the published adjustment. Preserve levels and changes; never sum inventory levels across weeks.

National stocks are not a sufficient scarcity measure. The tracker needs grade, location, and accessibility context. A barrel in the Gulf Coast, a barrel at Cushing, and a barrel in pipeline transit can have different economic uses. Shell storage capacity, working capacity, leased capacity, and immediately usable capacity are different concepts. [[WTI versus Brent crude oil]] and [[Oil inventories storage and the futures curve]] explain why deliverability at the named contract location matters more than a generic stock headline.

For each crude series, show the week-ending date, publication date, whether the value is reported or modeled, the previous published value, and any subsequent monthly benchmark difference. That benchmark comparison must aggregate compatible weekly estimates over the monthly reference period and reconcile only components with matching definitions; a monthly observation is not a revision of one individual WPSR week. Use seasonally comparable ranges cautiously: a five-year band changes its component years over time and can embed exceptional regimes.

### Refined products and refining

Track motor gasoline, distillate, jet fuel, propane/propylene, and other products only at the granularity justified by the source. For gasoline, retain finished gasoline and blending-component distinctions when they affect the question. For distillate, sulfur category and regional heating-oil exposure may matter. Pair stocks with refinery production, net imports or exports, refinery inputs, utilization, and four-week product supplied.

Refinery utilization is not a complete output measure. Capacity can change, units have different configurations, maintenance affects yields, and a refinery can run crude while producing a different slate. Product cracks are derived observations whose recipe must name crude and product contracts, weights, conversion factors, contract months, timestamps, and sign. They are not a measured refinery profit. [[Refinery margins and crack spreads]] supplies the interpretation guardrails.

Seasonality must be economic, not merely statistical. Gasoline blending changes, summer specifications, refinery turnarounds, winter distillate demand, harvest propane demand, and hurricane exposure can make the same stock level mean different things in different months and regions.

### Natural gas

The core gas panel includes dry production, Canadian and Mexican pipeline trade, LNG feedgas or exports, power burn, residential/commercial and industrial consumption, working gas in underground storage, weekly injections or withdrawals, weather measures, and regional cash or futures basis where reproducible data are available.

EIA's Weekly Natural Gas Storage Report is an estimate from a stratified sample linked to the monthly census of storage operators. EIA publishes sampling-variability measures and divides the Lower 48 into regions, including separate salt and nonsalt strata in South Central. Any comparison of a weekly change with sampling uncertainty must name the measure—such as a standard error or a stated confidence interval—and apply the same convention consistently; a small change should not be described with false precision. The five-year comparison also requires its vintage and construction.

Working gas is distinct from base gas. Demonstrated peak working-gas capacity is based on non-coincident facility peaks over a 60-month period; EIA warns that it is a conservative indicator and may understate capacity, especially for new or expanded facilities. Dividing current storage by that denominator is a useful standardized observation, not proof of the next molecule's injection or withdrawal capability. Deliverability, cycling, pressure, facility type, pipeline connectivity, and contract rights can bind first.

Weather belongs in the measurement layer. Record the weather dataset, station or population weighting, forecast issuance time, normal period, degree-day convention, and geographic aggregation. Actual degree days can explain part of realized consumption; a forecast is information available at its issuance time, not an observation that had already occurred. See [[US natural gas balances]] for the full physical framework.

### LNG

U.S. LNG links domestic gas to a global chain: pipeline receipt, liquefaction, storage, berth and loading, voyage, regasification, and destination-market demand. Track separately:

- authorized or nameplate capacity;
- mechanically available capacity;
- observed or estimated feedgas;
- liquefaction output and cargo loadings when directly reported;
- maintenance, outage, commissioning and regulatory status;
- vessel departure, destination estimate, arrival and possible diversion;
- U.S. gas basis, global benchmark and freight observations with aligned delivery windows.

FERC's project pages establish jurisdictional status and approved, operating, or proposed infrastructure; they do not prove current utilization. EIA's monthly trade statistics are slower but more complete than many high-frequency estimates. Commercial pipeline-flow or vessel estimates may be useful nowcasts only if licensing permits citation and the methodology, coverage, corrections, and timestamps are known.

“Feedgas equals exports” is unsafe. Gas can enter plant operations before a cargo is loaded; commissioning and inventory changes break the equivalence; boil-off and process fuel matter; and a vessel's inferred destination can change. Converting LNG mass or liquid volume into gas-equivalent volume requires a declared heat content and conversion convention. Global price comparisons likewise require unit conversion, currency, timing, quality and freight assumptions. [[LNG pricing and global gas arbitrage]] remains a useful red-link gap rather than a license to improvise a netback.

### Curves and basis

For WTI, RBOB, ULSD, Henry Hub, and any location or product basis, store the exchange, product code, exact contract month, price field, currency, unit, session, timestamp, delayed/live status, and settlement method. CME's NYMEX rulebook currently places Light Sweet Crude Oil in Chapter 200 and Henry Hub Natural Gas in Chapter 220; the latter ties physical delivery to Henry Hub and gas meeting the applicable FERC-approved tariff specifications. Contract rules can change, so the rulebook retrieval date belongs in the record.

Use explicit calendar spreads:

$$
C_{1,2}(t)=F(t,T_1)-F(t,T_2).
$$

A positive value under this convention means the nearby contract exceeds the next contract. Do not alternate between nearby-minus-deferred and deferred-minus-nearby while continuing to call both “backwardation.” The label describes the specified pair and does not by itself characterize every segment of the curve. Track several fixed month pairs or fixed seasonal spreads rather than relying only on a vendor's rolling front-month ticker. [[Calendar spreads in commodity futures]], [[Commodity curves carry and convenience yield]], and [[Futures continuous contracts and roll bias]] explain why a continuous price series can manufacture jumps at roll.

Settlement is an exchange-calculated reference, not necessarily the last trade. CME's published daily procedure can use volume-weighted trades, spread-implied prices, or bid/ask midpoints depending on contract and liquidity thresholds. Preserve the methodology vintage. An intraday price aligned to an EIA release must also respect ordering: a bar labeled 10:30 a.m. Eastern may contain trades before and after a 10:30 release. Use a conservative post-release delay and test multiple windows.

Basis requires matched commodities. Name location, grade or quality, delivery period, incoterm or freight treatment, and contract. Henry Hub minus an Appalachian cash point is a pipeline-location basis; Brent minus WTI is also affected by benchmark mechanics, freight, quality, and expiration calendars. A basis move is evidence of relative value at named nodes, not by itself proof of the constraint that caused it.

### Transport, storage, and outages

Transport data are the bridge between balances and prices. For pipelines, track route, receipt and delivery nodes, direction, design or certificated capacity, scheduled quantities if available, operational capacity, maintenance, force majeure, tariff, and nomination cycle. FERC Form 549B identifies firm transportation and storage customers as of the first business day of each quarter; it is contractual context, not a live flow feed. Interstate-pipeline electronic bulletin boards and tariff filings can provide operational notices, but their terminology and revision history must be retained.

PHMSA annual reports describe regulated infrastructure—including mileage, facilities, commodities, material and installation vintage—and the downloadable files can change when operators submit supplemental reports. PHMSA incident data document reported safety events. Neither dataset is a real-time throughput measure, and a reported incident should not be converted into a volume loss without an operator, regulator, or other authoritative operational estimate.

For marine transport, record port, terminal, cargo size, loading and discharge timestamps, vessel status, draft restrictions, freight basis, and data provenance. An automatic-identification-system track indicates vessel movement, not necessarily title, cargo quantity, commercial destination, or successful discharge. [[Shipping freight and commodity price transmission]] separates observed logistics from inferred arbitrage.

Capacity should always have a state label: proposed, authorized, under construction, mechanically complete, in commissioning, in service, temporarily unavailable, or retired. Nameplate additions belong in a forward infrastructure ledger until operational evidence supports moving them into available capacity.

## A point-in-time update protocol

Each scheduled update should follow the same sequence.

1. **Freeze the cutoff.** Declare the research timestamp and do not incorporate later releases into that vintage.
2. **Ingest release metadata first.** Confirm publication time, reference period, holiday schedule, errata, methodology notice, and whether the file was revised.
3. **Validate identity and units.** Check table, series, region, grade, contract month, sign, frequency and conversion before calculating changes.
4. **Reconcile balances.** Compute the accounting residual without forcing it to zero. Flag missing or stale terms.
5. **Compare at honest horizons.** Show prior week, four-week average, seasonal analogues, and later monthly benchmark only when their definitions match.
6. **Add market observations.** Capture curves and basis at predeclared timestamps, not whichever interval best fits the story.
7. **Add transport evidence.** Distinguish notices, scheduled flows, estimated flows, physical capacity and contractual rights.
8. **Write observations before interpretations.** Preserve alternative explanations and a falsifier for each consequential diagnosis.
9. **Version the state.** Never replace the original release vintage with revised history.

A compact record can use four blocks: `Observed`, `Derived`, `Interpreted`, and `Unknown`. “Cushing commercial crude stocks fell in the published week” is observed. “The four-week change was X under this formula” is derived. “Prompt deliverable crude may have tightened” is interpretation. “Whether unreported maintenance or nomination changes drove the move” is unknown.

## Observation versus inference

The tracker should use calibrated verbs.

| Evidence | Safe statement | Unsafe shortcut |
| --- | --- | --- |
| EIA stock estimate | Reported or estimated stocks rose/fell for the reference week | Demand collapsed or surged |
| Product supplied residual | Primary-system disappearance changed | Consumers bought that exact volume |
| Pipeline nomination or flow estimate | Scheduled/estimated movement changed at named nodes | Physical capacity permanently changed |
| FERC authorization | A project has a stated regulatory status | The project is operating at nameplate |
| PHMSA incident report | An event was reported under the dataset's criteria | A stated market volume was lost |
| Calendar spread | Named contracts repriced relative to each other | Inventories caused the move |
| LNG vessel signal | A vessel appeared to load, sail, or change course | Final destination and delivered quantity are known |

A diagnosis becomes stronger when independent layers agree. Falling Cushing stocks, stronger prompt WTI spreads, narrower inland discounts, and documented takeaway constraints jointly support a prompt-tightness interpretation more than any one series. Even then, the causal language remains conditional because refinery demand, export timing, grade composition, maintenance, and expectations can create similar observations.

Price reaction belongs in a separate event window. Record whether the move preceded the release, whether a macro or geopolitical event occurred simultaneously, and whether the chosen contract was liquid. Absence of a price reaction does not invalidate a physical observation; the information may have been expected, offset, noisy, or irrelevant to the marginal delivery point.

## Quality controls and failure states

Reject or quarantine an update when the timestamp is ambiguous, the contract rolled silently, units cannot be reconciled, a commercial source's license is unclear, a file has no stable methodology, or two authoritative sources conflict materially. Do not fill gaps with an unlabeled estimate.

Automated checks should catch impossible stock summation, unit discontinuities, duplicate observations, sign reversals, stale files, revisions to past rows, and contract-month mismatches. Statistical outliers trigger review, not deletion. Preserve a correction log that states what changed, when it became known, and whether prior interpretation survives.

The tracker also needs review triggers: EIA survey or dissemination changes; new WPSR or WNGSR methods; CME contract, expiration, delivery, or settlement changes; FERC jurisdiction or project-status changes; PHMSA form-definition changes; pipeline reversals or expansions; refinery closures or conversions; LNG commissioning; and material changes in licensed data coverage. Even a format-only dissemination change warrants parser tests and schema versioning; do not infer that collection or statistical methodology changed unless the agency says so.

## Why it matters

Energy markets are joined accounting and logistics systems. The tracker makes that system legible without pretending it is fully observed. It prevents three common errors: treating a residual as direct demand, treating aggregate inventory as deliverable availability, and treating a futures price as a generic spot barrel or molecule.

For market research, the payoff is not a mechanical signal. It is a better sequence of questions: What changed in the measured balance? Which terms were estimated? Where was the stock? Could transport connect it to the delivery point? Did the named curve confirm prompt scarcity? What else changed at the same time? What information existed at the decision cutoff? Those questions make later causal work and [[Event studies for financial markets]] more defensible.

## Sources

- U.S. Energy Information Administration, [Weekly Petroleum Status Report](https://www.eia.gov/petroleum/supply/weekly/) — official weekly tables, explanatory notes, sources, release schedule and archived issues; accessed 2026-07-10.
- U.S. Energy Information Administration, [EIA's Weekly Petroleum Status Report provides a snapshot of petroleum balances](https://www.eia.gov/todayinenergy/detail.php?id=53399) — product-supplied identity, weekly uncertainty, four-week-average guidance and monthly benchmarking.
- U.S. Energy Information Administration, [Crude oil adjustment balances independently developed supply and disposition components](https://www.eia.gov/todayinenergy/detail.php?id=21472) — official explanation of the crude balancing item.
- U.S. Energy Information Administration, [Methodology for EIA Weekly Underground Natural Gas Storage Estimates](https://ir.eia.gov/ngs/methodology.html) — sampling, estimation, variability, regional strata and historical comparisons.
- U.S. Energy Information Administration, [Underground Natural Gas Working Storage Capacity methodology](https://www.eia.gov/naturalgas/storagecapacity/methodology.php) — demonstrated-peak construction and limitations.
- U.S. Energy Information Administration, [Natural Gas Monthly](https://www.eia.gov/naturalgas/monthly/) — monthly production, consumption, pipeline trade and LNG trade benchmark data.
- Federal Energy Regulatory Commission, [LNG](https://www.ferc.gov/natural-gas/lng) — jurisdiction and project-status maps for LNG facilities.
- Federal Energy Regulatory Commission, [Form 549B — Index of Customers](https://www.ferc.gov/industries-data/natural-gas/industry-forms/form-549b-index-customers) — quarterly firm transportation and storage contract context.
- CME Group, [NYMEX rulebook](https://www.cmegroup.com/rulebook/NYMEX/) — current chapters and primary contract rules, including Chapters 200 and 220; accessed 2026-07-10.
- CME Group, [NYMEX energy futures daily settlement procedure](https://www.cmegroup.com/trading/energy/files/NYMEX_Energy_Futures_Daily_Settlement_Procedure.pdf) — settlement windows, volume thresholds and spread-implied or midpoint fallbacks.
- Pipeline and Hazardous Materials Safety Administration, [Annual report data for pipeline, LNG, and underground storage operators](https://www.phmsa.dot.gov/data-and-statistics/pipeline/gas-distribution-gas-gathering-gas-transmission-hazardous-liquids) — infrastructure fields, reporting basis and supplemental-report revisions.
- Pipeline and Hazardous Materials Safety Administration, [Pipeline source data](https://www.phmsa.dot.gov/data-and-statistics/pipeline/source-data) — official annual and incident-data entry point.

## Open questions

- Which freely redistributable pipeline-flow and vessel datasets have stable enough coverage, timestamping, corrections and licenses for a public point-in-time tracker?
- How large are weekly-to-monthly petroleum benchmark revisions by component and regime, and which apparent signals disappear after revision?
- What uncertainty interval should accompany a high-frequency U.S. gas-balance nowcast once storage sampling error and flow-source errors are combined?
- Which location-specific inventory and working-capacity measures best approximate commercially accessible supply without relying on private contracts?
- How should LNG feedgas, cargo loadings and customs export data be reconciled across commissioning, plant inventory changes and voyage timing?
