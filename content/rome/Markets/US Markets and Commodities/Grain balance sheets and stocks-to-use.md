---
title: Grain balance sheets and stocks-to-use
created: 2026-07-09
source: llm
status: seed
tags: [markets, commodities, agriculture, grains, usda, wasde]
as_of: 2026-07-09
desk: US markets and commodities
review_after: 2027-01-09
---
A grain balance sheet reconciles supply with disappearance over a commodity-specific marketing year; stocks-to-use compresses that accounting into a scarcity indicator, but its meaning depends on definitions, forecast vintage, geography, and the uncertainty inside every line.

Up: [[Markets]] · Related: [[Crop weather yield and futures prices]] · [[Agricultural futures seasonality and delivery]] · [[Commodity curves carry and convenience yield]]

## A balance sheet is an identity populated by estimates

The World Agricultural Supply and Demand Estimates, or WASDE, is USDA's monthly consensus forecast for major U.S. and world crop and livestock markets. For grains, its familiar tables resemble corporate financial statements: beginning stocks and new supply appear on one side; domestic uses, exports, and ending stocks appear on the other. The comparison is useful because both systems force internally consistent accounting. It is also dangerous if it encourages false precision. Most current-year grain entries are forecasts assembled from surveys, administrative records, trade data, models, weather analysis, and expert judgment. The arithmetic must balance even when the inputs remain uncertain.

For a national grain balance sheet over one marketing year, the core identity is

$$
\text{beginning stocks}+\text{production}+\text{imports}
=\text{domestic use}+\text{exports}+\text{ending stocks}.
$$

Total supply is the left side. Total use or disappearance is domestic use plus exports. Ending stocks are the residual supply carried beyond the marketing year. Reorganizing the identity shows why a revision anywhere can move the residual:

$$
\text{ending stocks}=\text{beginning stocks}+\text{production}+\text{imports}
-\text{domestic use}-\text{exports}.
$$

The identity itself says nothing about which line should absorb new information. If a quarterly stocks survey finds fewer corn bushels than expected, analysts must determine whether earlier production was overstated, feed and residual use was understated, or another component was mismeasured. A mechanically lower ending-stocks forecast may be the immediate accounting result, but the economic explanation requires additional evidence.

USDA's World Agricultural Outlook Board coordinates interagency commodity committees that produce WASDE. The process draws on the National Agricultural Statistics Service, Economic Research Service, Foreign Agricultural Service, Agricultural Marketing Service, Farm Service Agency, Commerce trade data, weather analysis, foreign attaché reporting, satellite information, economic models, and judgment. NASS supplies most official U.S. crop-production forecasts but, according to USDA's process description, does not sit on the interagency committees that set WASDE projections. This institutional separation matters: NASS survey-based estimates and WASDE committee forecasts have different roles even when they appear in the same balance sheet.

## The marketing year is the time axis

A crop balance sheet does not normally follow the calendar year. It follows a marketing year designed to align the harvest and subsequent commercial disposition of a crop. U.S. corn and soybeans, for example, use a September–August marketing year, while U.S. wheat uses June–May. Rice has its own convention. Foreign-country and global tables may use local marketing years whose starting months differ by country and commodity.

The label “2025/26” therefore does not mean the same twelve calendar months for every grain or country. It generally denotes the marketing year associated with the crop harvested primarily in 2025, but the exact interval must be read from USDA's commodity and country definitions. When aggregating world data, USDA places each country's local marketing-year data into a common labeled crop year. That makes global comparison possible, but it also means that production, trade, and use are not perfectly synchronized calendar flows. USDA's PSD table notes make the stronger warning explicit: world stocks aggregate differing local marketing years and should not be interpreted as inventory observed everywhere on one fixed date.

This timing has several consequences. First, beginning stocks for one year equal the prior year's ending stocks under the same series definition. A revision to last year's ending stocks automatically changes this year's beginning stocks. Second, imports and exports assigned to a marketing year may differ from calendar-year customs totals. Third, a Southern Hemisphere harvest can enter world supply at a different point than a Northern Hemisphere harvest carrying the same crop-year label. Fourth, a futures contract month is not a marketing year. A December corn contract prices delivery under exchange rules at a specific time and location; it should not be equated with the annual WASDE average.

Season-average farm price is another marketing-year object. It is a quantity-weighted average of prices farmers receive over the marketing year, not a futures settlement, cash quote, or prediction of one specific date. Comparing it directly with a nearby futures price ignores basis, delivery location, timing, grade, and the changing share of the crop marketed each month.

## Units, conversions, and the temptation to mix them

U.S. grain tables often report millions of bushels, acres, bushels per harvested acre, and dollars per bushel. World tables commonly use million metric tons. A bushel began as a volume measure, but commodity statistics use standardized bushel weights: a bushel of corn is conventionally 56 pounds, a bushel of soybeans or wheat 60 pounds. Those commodity-specific weights mean “one bushel” is not a common mass across crops.

Production is linked to area and yield:

$$
\text{production (bushels)}
=\text{harvested acres}\times\text{yield (bushels per acre)}.
$$

Acreage, harvested share, and yield are separate forecast risks. Drought can lower yield, flooding can prevent planting, and abandonment can reduce harvested acres relative to planted acres. A production revision should therefore be traced to its component rather than described generically as a “crop cut.” Rounding can prevent displayed area times displayed yield from matching displayed production exactly.

Conversion to metric tons must use the correct commodity weight. For corn, one bushel is about 25.4 kilograms; for wheat and soybeans, about 27.2 kilograms. A million bushels of corn and a million bushels of wheat are therefore different masses. Processed products introduce further complications: soybean crush yields meal and oil, and grain converted into ethanol produces coproducts. A balance-sheet use category is not always equivalent to physical destruction of every unit of feedstock.

The safest practice is to retain USDA's published unit and series definition through the analysis, perform conversions explicitly, and record the factor used. Do not merge a million-bushel U.S. table with a million-metric-ton world table by copying displayed numbers. Do not infer precision beyond the table's rounding. And do not compare stocks-to-use percentages calculated from different unit conventions unless numerator and denominator have first been made internally consistent.

## Reading the major lines

Beginning stocks are inventories carried into the marketing year. They embody the previous year's measurement and forecast history. A seemingly large new crop can still produce a tight total supply if carry-in is small; a disappointing crop can be buffered by abundant carry-in.

Production combines harvested area and yield. Before harvest, it is a forecast. NASS changes its information set through the season as acreage surveys, objective-yield work where used, farmer reports, weather, and harvest evidence arrive. After harvest, production estimates can still be revised on a published schedule, including after later administrative or census information.

Imports and exports are small for some U.S. grains and central for others, but world trade always requires bilateral consistency and timing judgment. Customs records arrive with lags and may follow calendar definitions that must be mapped into marketing years. FAS's Production, Supply and Distribution database, or PSD, is the official downloadable system for international commodity balances. Its current database is valuable for cross-country analysis, but a download made today generally represents USDA's latest historical view, not necessarily what USDA believed on an earlier WASDE release date.

Domestic use is a bundle rather than a single behavior. Corn tables distinguish feed and residual from food, seed, and industrial use, with ethanol-related use reported within the industrial complex. Wheat tables include food, seed, and feed and residual. Soybean disappearance includes crush, exports, seed, and residual categories. Category definitions vary across commodities, so “demand” should not be treated as one comparable number.

Residual is especially easy to misread. It can incorporate uses not directly measured at the same frequency and accumulated errors across independently estimated supply and disposition components. In U.S. corn and wheat, feed and residual is often inferred partly from stocks and other known uses. An unexpected quarterly disappearance does not prove that animals consumed exactly that many additional bushels. It may later be redistributed through production or stock revisions.

Ending stocks are what remain under the accounting. They are a forecast during the current marketing year and become progressively informed by quarterly NASS Grain Stocks surveys. They should be distinguished from storage capacity, commercially available inventory, deliverable exchange stocks, and ownership. National ending stocks can be geographically inconvenient, of varying quality, or already committed.

## Stocks-to-use: compact and conditional

The standard ratio is

$$
\text{stocks-to-use}
=\frac{\text{ending stocks}}{\text{total use}}\times 100.
$$

If ending stocks are 1.5 billion bushels and total use is 15 billion, stocks-to-use is 10 percent. The ratio asks how large the carryout is relative to annual disappearance. Lower values generally indicate a smaller buffer against production or demand shocks; higher values indicate more slack. Because numerator and denominator use the same physical unit, the ratio is dimensionless.

Stocks-to-use is often compared with price because scarcity can make the marginal bushel more valuable. The relationship is nonlinear. When stocks are abundant, losing a unit of carryout may have little effect. Near an operational minimum, the same loss can have a much larger price consequence because users compete to avoid running short before the next harvest. This is related to the convenience yield in [[Commodity curves carry and convenience yield]]: accessible inventories provide an option to keep processing or feeding operations running.

But the ratio is not a universal valuation multiple. Ten percent can imply different conditions for corn, wheat, and soybeans because demand flexibility, import access, crop cycles, quality segmentation, policy, and geographic concentration differ. A world ratio can hide scarcity among exporters if large stocks are held in a country or quality segment that is unlikely to reach the world market. Conversely, a low U.S. ratio may be less alarming when foreign exportable supplies are abundant and logistics are open.

The denominator matters as much as the numerator. Stocks-to-use can fall because stocks decline, because projected use rises, or both. It can rise during a demand collapse even if production is poor. Always decompose the change. A ratio based on “domestic use” is different from one based on “total use including exports.” USDA tables and private analysts do not always use the same denominator, so label it.

Days of use is sometimes calculated as stocks-to-use multiplied by 365. That translation suggests how long stocks could cover average annual use, but it is not an operational countdown. Use is seasonal, inventory is dispersed, minimum pipeline stocks cannot all be consumed, and the next harvest arrives before a full year has passed. The calculation is best treated as a scale transformation, not a claim that the country would literally exhaust grain on a particular date.

## How stocks are measured

NASS estimates U.S. grain stocks quarterly for reference dates around March 1, June 1, September 1, and December 1. On-farm stocks come from the Agricultural Survey framework; off-farm stocks come from commercial facilities such as elevators, warehouses, terminals, merchant mills, ethanol plants, and oilseed crushers that store whole commodities. NASS states that grain in transit is not counted in the Grain Stocks survey.

The off-farm program canvasses known commercial storage facilities, while on-farm estimation uses probability-survey methods and frames intended to cover agricultural operations. Reported values are subject to sampling and nonsampling error, nonresponse treatment, editing, and estimation. NASS combines on-farm and off-farm estimates and uses a balance-sheet approach as a reasonableness check against production and disappearance information. That check does not make the stock estimate independent of the broader accounting story, nor does it eliminate uncertainty.

NASS methodology reports publish sample sizes, response rates, and selected quality measures. Estimates are open to revision on a preannounced schedule when new information arrives. The February 2024 methodology states that on-farm and off-farm stocks may be revised in the quarter after initial publication and again in the following December 1 Grain Stocks report, which is published in January. Estimates are also reviewed after the five-year Census of Agriculture, described there as the last revision opportunity. A historical study should still use the methodology edition applicable to its vintage because schedules and procedures can change.

A quarterly stocks surprise can force a reassessment of unobserved disappearance between reference dates. The implied calculation is

$$
\text{disappearance during interval}
=\text{starting stocks}+\text{interval supply}-\text{ending stocks}.
$$

Because starting stocks, production, imports, and ending stocks all carry error, implied disappearance inherits their combined uncertainty. Treating it as directly surveyed feed consumption overstates what the data know.

## Vintages and revisions are part of the evidence

WASDE is released monthly, generally between the eighth and twelfth day at noon Eastern, with an archive of reports dating to the 1970s. Each release is a vintage: the committee's internally consistent estimate using information available by that forecast round. Later reports revise current and historical lines. The latest PSD download or consolidated dataset can overwrite earlier beliefs, which is useful for current analysis but creates look-ahead bias in historical tests.

A proper event study must save the actual report released at time $t$, the release timestamp, the prior month's vintage, and any simultaneously released NASS report. The surprise is the new-versus-expected change available then, not the difference between the old report and today's revised history. Consensus expectations require a documented provider, contributors, cutoff, and statistic; otherwise they are not reproducible.

Revisions have different meanings. A yield change after field evidence is new information about the current crop. A beginning-stocks change may transmit a prior-year revision. A trade revision may reflect customs data or marketing-year reallocation. A residual-use revision may be the committee's reconciliation of stocks with other components. Comparing only ending stocks can conceal which evidence changed.

USDA's consolidated historical WASDE files simplify research, but researchers should confirm whether the file preserves monthly vintages or presents a consolidated latest history. Archives of PDF, text, XML, or spreadsheet releases are the safer source for reconstructing information sets. Database access dates, release IDs, commodity codes, units, and marketing-year definitions belong in the research record.

## A disciplined reading workflow

Begin with the table header. Record commodity, country or region, marketing year, unit, release date and time, and report vintage. Determine whether the line is a NASS estimate, a WASDE committee forecast, or a derived calculation.

Reconcile the identity and account for rounding. Compare every changed component with the prior vintage. Attribute the ending-stocks revision arithmetically before telling an economic story. Then identify the underlying source: acreage, yield, quarterly stocks, crush, milling, ethanol, export inspections or customs, foreign production, or policy.

Separate observation from inference. “NASS estimated lower June 1 stocks” is an observation. “Feed demand was stronger” is an interpretation unless directly supported by other evidence. Preserve alternatives such as prior production error, transit timing, or residual estimation.

Put the ratio in context. Compare stocks-to-use with the same commodity, country coverage, and denominator over a historically consistent sample. Check exporter stocks and location when world totals appear reassuring. Inspect nearby and deferred futures, basis, spreads, and delivery conditions without claiming that the annual balance sheet mechanically determines a contract price.

Finally, specify falsifiers. A tightness interpretation weakens if later stocks revise upward, exports slow, yield recovers, imports become available, or cash basis and nearby spreads fail to confirm. A surplus interpretation weakens if stocks are inaccessible or quality-specific premiums rise. The goal is not to make WASDE tell one story; it is to expose which story the next observation can test.

## Limits of the framework

Balance sheets are indispensable because they impose conservation across heterogeneous evidence. They are insufficient because national annual totals suppress time, location, quality, and ownership. Stocks-to-use is valuable because it normalizes carryout by market scale. It is incomplete because the marginal value of stocks is nonlinear and institution-specific.

USDA's process is a public benchmark, not an oracle. Survey error, model error, judgment, reporting lags, policy changes, extreme weather, conflict, and opaque foreign data all widen uncertainty. Published point estimates rarely communicate the full probability distribution a trader, farmer, processor, or policymaker needs. The careful reader retains vintages, definitions, and competing mechanisms—and regards revision as learning rather than proof that the earlier report was useless.

## Sources

- USDA Economic Research Service, [USDA Outlook Process](https://www.ers.usda.gov/topics/farm-economy/commodity-outlook/usda-outlook-process) — agencies, committee roles, inputs, consensus process, and monthly forecast scope; updated January 5, 2025.
- USDA Office of the Chief Economist, [WASDE Report](https://www.usda.gov/about-usda/general-information/staff-offices/office-chief-economist/commodity-markets/wasde-report) — official releases, formats, schedule, consolidated data, and archive.
- USDA Economic Research Service, [Emergence and Impact of USDA's WASDE Report](https://www.ers.usda.gov/amber-waves/2012/june/wasde) — institutional history, commodity committees, marketing-year process, and balance-sheet architecture.
- USDA National Agricultural Statistics Service, [Grain Stocks survey guide](https://www.nass.usda.gov/Surveys/Guide_to_NASS_Surveys/Off-Farm_Grain_Stocks/) — reference dates, facility coverage, capacity definition, transit treatment, and methodology links.
- USDA NASS, [Grain Stocks Methodology and Quality Measures](https://www.nass.usda.gov/Publications/Methodology_and_Data_Quality/Grain_Stocks/) — survey design, estimation, quality measures, balance-sheet checks, and revision policy; use the edition matching the studied vintage.
- USDA Foreign Agricultural Service, [Production, Supply and Distribution Online](https://apps.fas.usda.gov/psdonline/app/index.html) — official international commodity balance database, downloadable datasets, and release schedules.
- USDA Foreign Agricultural Service, [Oilseeds: World Markets and Trade, September 2024](https://www.fas.usda.gov/sites/default/files/2024-09/oilseeds.pdf) — official PSD table-definition note that world stocks aggregate differing local marketing years and are not fixed-date global inventories.
- USDA Economic Research Service, [Wheat Data documentation](https://www.ers.usda.gov/data-products/wheat-data/documentation) — marketing-year supply and disappearance data, quarterly stocks sources, and by-class estimation limits.

## Open questions

- How should a public point-in-time database preserve every WASDE vintage without confusing later historical revisions with contemporaneous information?
- Which exporter-stocks or free-stocks measures outperform world stocks-to-use for wheat, corn, and soybeans without relying on unverifiable private inventories?
- How large are revisions to implied feed and residual use after later production, stocks, and Census of Agriculture benchmarks?
- Can futures-curve and cash-basis responses distinguish a genuine quarterly stocks surprise from a reallocation among balance-sheet residuals?
- What uncertainty intervals could be constructed from NASS sampling measures and historical WASDE forecast errors without implying that judgment errors are normally distributed?
