---
title: Forecast horizons in political prediction markets
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, political-forecasting, forecast-evaluation, time-series, research-design]
---

Forecast accuracy changes as political events approach, so a credible comparison must define when every forecast was knowable, align forecasts on an explicit clock, and treat repeated snapshots of one event as dependent observations rather than independent victories.

Up: [[Political prediction markets]]

Related: [[Proper scoring rules and market forecasts]] · [[Backtesting political forecasts without leakage]] · [[Settlement latency in political prediction markets]] · [[Prediction-market calibration]]

## The horizon is part of the forecasting task

A claim that one political prediction market is “more accurate” than another is incomplete without a horizon. A probability quoted six months before an election answers a harder and different question from a probability quoted after polls close. Both may refer to the same eventual winner, but they condition on different information sets. Late forecasts normally benefit from debates, withdrawals, economic releases, polling, endorsements, litigation, turnout reports, and sometimes partial returns that early forecasts could not contain.

Let event $i$ have a prospectively defined reference time $T_i$, and let forecast $p_{iht}$ be captured at time $t$. Its event-relative horizon is

$$h_{it}=T_i-t.$$

Positive $h$ means the snapshot precedes the reference event; negative $h$ means it follows it. A “30-day forecast” should be the forecast selected by a rule fixed before outcomes are inspected, such as the last executable quote at or before $T_i-30$ days within a stated tolerance. It should not become whichever nearby price makes the archive most complete or the forecast look best.

The reference time is usually a scheduled political clock: poll closing, an election-day cutoff, a filing deadline, a legislative vote, a convention ballot, or a specified announcement window. It is not automatically the venue’s trading close, determination, settlement, or payment time. Those later operational timestamps answer different questions. [[Settlement latency in political prediction markets]] shows why confusing them can turn a post-event observation into an apparently prescient forecast.

Horizon design therefore precedes scoring. Brier’s original probability-verification framework and the later theory of strictly proper scoring rules explain how to reward probabilistic forecasts, but a proper score does not repair a mismatched information set. The analyst must first define the estimand: accuracy at a shared calendar instant, accuracy a fixed distance before each event, update speed around news, or the entire path of forecast quality as resolution approaches.

## Two legitimate clocks

### Common-clock panels

A common-clock panel freezes all forecasts at the same timestamp $C_k$, such as 16:00 UTC every Friday. It is the natural design for questions about what competing venues, models, or forecasters knew at the same moment. For each event still genuinely unresolved at $C_k$, the panel stores the probability and the contemporaneous market state.

This design is especially useful around common shocks. To study a debate, court ruling, or macroeconomic release, capture synchronized snapshots immediately before and at predefined offsets after the news. The comparison then concerns response speed and magnitude, not merely which platform happened to publish a later observation. Common-clock sampling also prevents one venue’s active hours from silently receiving a timing advantage.

But a common clock mixes horizons. At noon on a given day, a special election may be hours away while a presidential election is months away. Averaging their scores estimates performance over the particular mixture of horizons and event types in the panel, not “accuracy” in the abstract. The analysis should report the horizon distribution and either stratify by horizon or model it explicitly.

The design also needs an eligibility rule. Include an event at $C_k$ only if the proposition was listed, the outcome was not logically or publicly determined, the relevant information cutoff had not passed, and a usable probability could be constructed without looking forward. A stale last trade is not equivalent to a current executable quote. Record bid, ask, depth, timestamp, fees, and the rule used to convert the book into a forecast; [[From event-contract prices to probabilities]] covers that conversion.

### Event-relative panels

An event-relative panel aligns heterogeneous events by time remaining. Typical preregistered horizons might be 180, 90, 30, 14, 7, 3, and 1 day, plus six hours and one hour before $T_i$ where market microstructure supports those windows. This design asks how forecast quality evolves as comparable political deadlines approach.

For each event and horizon, use a deterministic selection rule. A defensible rule might select the last observation no later than the target horizon, provided it lies within a tolerance such as 24 hours for the 90-day point and 15 minutes for the one-hour point. Never backfill with a quote after the target: doing so gives thin markets more information. If no eligible quote exists, mark the cell missing and explain the missingness model.

The event clock can change. Elections are postponed, votes are rescheduled, and announcements slip. Preserve the originally expected $T_i$, record every revision and its public timestamp, and apply a prospective policy. One study might realign forecasts only after a rescheduling announcement; another might keep the original clock to measure operational forecasting. Recomputing all horizons against the final schedule with hindsight leaks later knowledge into earlier records.

Event-relative alignment improves comparability but does not make events exchangeable. A presidential election, a low-turnout primary, a cabinet confirmation, and a parliamentary confidence vote have different base rates, market depth, information processes, and contract semantics. Report results within meaningful contract families and use partial pooling rather than forcing every cell into one homogeneous average.

## Four times that must remain separate

Every forecast record should distinguish at least four clocks:

1. **Information cutoff:** the deadline by which qualifying facts or conduct may occur under the proposition.
2. **Determination:** when the designated source or adjudicator establishes the outcome under the rules.
3. **Settlement:** when the venue marks the contract resolved and credits the winning position under its process.
4. **Payment availability:** when funds are actually withdrawable or reusable.

A fifth time—the market snapshot or forecast issue time—is the timestamp used for evaluation. For an immutable market or API record, preserve both the venue's exchange/publication timestamp (`available_at`) and the researcher's ingestion or capture timestamp (`captured_at`); collector latency must never be mistaken for market time. These times may coincide, but politics routinely separates them. A winner contract may stop admitting election-day facts at poll close, be determined after a certified result, settle after an appeals window, and pay later. A concession contract may have a midnight conduct cutoff even though the source is checked the next morning.

The horizon denominator should be the political information cutoff or scheduled event time that defines the forecast task, not the easiest operational timestamp to scrape. A price captured after qualifying information has arrived is not a pre-event forecast merely because the venue has not settled. Conversely, a slow official determination does not make an earlier, still-open market irrational if uncertainty remains about what the rules will recognize.

Store all timestamps in UTC together with the original timezone and daylight-saving interpretation. Archive the rule text and its version. For comparator models, store the model release timestamp, data vintage, and earliest public availability—not the timestamp when an analyst later downloaded the file.

## Build point-in-time records, not reconstructed charts

The unit entering evaluation should be an immutable vintage record. At minimum it contains event and contract identifiers, proposition and rule version, source, issue timestamp, target $T_i$, target and realized horizon, probability or bid–ask interval, market-quality fields, information cutoff, determination and settlement timestamps, outcome version, and provenance to an archived artifact.

This matters beyond market prices. Poll aggregates may be recomputed after corrected polls; election models may change code or inputs; candidate lists and ratings can be overwritten; economic data are revised. The St. Louis Fed’s ALFRED service is a useful model of the necessary discipline: it lets researchers retrieve data as reported on historical dates, while the FRED vintage-date API identifies dates when observations were released or changed. A current macroeconomic series is not proof of what an election forecaster could know then.

Apply the same “available as of” test to news and political data. A poll’s field dates are not its publication time. A filing’s coverage period is not its public release. A news article’s later update must not replace the text visible at the cutoff. [[Backtesting political forecasts without leakage]] develops these failure modes; the horizon panel should retain hashes, captures, or stable provenance sufficient to reproduce each information set.

## Repeated snapshots are not repeated events

If one presidential contest contributes 180 daily forecasts and ten special elections contribute one forecast each, a naive row average makes the presidential contest dominate the result. Worse, conventional standard errors computed as if 190 rows were independent will be much too confident. Forecast errors from one event share the same outcome, political shocks, rule interpretation, and often adjacent prices. More frequent sampling creates density, not new independent political experiments.

Define the event—or, where appropriate, the mutually exclusive contract family—as the primary sampling unit. At a fixed horizon, calculate one loss per event and compare sources on matched events. For a binary outcome $y_i$ and forecast $p_{ih}$, the Brier loss is

$$L_{ih}=(p_{ih}-y_i)^2.$$

For sources $A$ and $B$, form the paired event-level difference $d_{ih}=L^A_{ih}-L^B_{ih}$ only when both forecasts satisfy the same cutoff and proposition. Average $d_{ih}$ across events at horizon $h$, not across an unequal collection of intraday ticks. The paired design removes some event difficulty from the comparison.

When studying the entire path, retain the panel structure. Useful approaches include:

- first average within event and horizon bins, then average across events;
- fit a multilevel model with event-level random effects and horizon effects;
- use cluster-robust uncertainty at the event or contract-family level;
- bootstrap whole events or election cycles, never individual timestamp rows;
- use two-way clustering when common dates or news shocks create dependence across events as well as within them.

The number of independent clusters, not the number of quotes, limits precision. With few elections, asymptotic cluster formulas can be fragile; report the cluster count, use small-sample corrections or event-level randomization procedures where justified, and show the underlying event losses. Multiple contracts that are algebraically linked—candidate A wins, candidate B wins, party wins state—may require family-level clustering because their outcomes and prices are mechanically dependent.

## Aggregation and weighting define the estimand

There is no neutral grand mean. An event-weighted score gives every event equal influence. A contract-weighted score gives crowded races more influence because they generate more listings. A time-weighted score rewards or punishes sources for the duration of their errors. A dollar- or volume-weighted score describes the experience of activity in observed markets, but lets endogenous trading interest determine the target population. Population weighting can estimate performance over all offices or voters, yet answers another question again.

Choose weights before seeing scores and state what population they represent. For a broad comparison, a transparent hierarchy is often best: calculate one score per source, event, and horizon; average within a predefined contract family; then aggregate families using equal or externally justified weights. Publish alternative event-weighted and activity-weighted results as sensitivity analyses rather than silently selecting the favorable version.

Do not use realized liquidity as an unexamined quality weight. Deep markets may be more informative, but liquidity also follows salience, certainty, and the same news that drives accuracy. Weighting by it can turn a performance claim into a claim about which questions attracted traders. A better design reports an all-eligible estimand, a prospectively defined tradability subset, and performance conditional on spread or depth.

Missingness deserves equal care. Markets may list late precisely when an outcome becomes salient; illiquid contracts may lack executable quotes; discontinued models may vanish after poor performance. Report coverage at every horizon and use a common-event sample for direct source comparisons. An expanded sample can be secondary, with inverse-probability weighting only when its missingness assumptions are plausible and diagnosed.

## Uncertainty is more than a confidence interval

Sampling uncertainty asks how results might vary across comparable political events. Measurement uncertainty asks whether the probability itself is known: a bid–ask spread, stale trade, fee schedule, or model rounding may imply an interval rather than a point. Outcome uncertainty concerns rule interpretation or later correction. Design uncertainty concerns reasonable choices of horizon tolerance, event family, weighting, and score.

Keep these layers visible. Report clustered or event-bootstrap intervals for mean score differences. Recompute results at bid, midpoint, and ask, or under an executable-price rule, to expose microstructure sensitivity. Maintain outcome versions when adjudication changes. Run a declared multiverse of plausible specifications rather than treating the specification producing the smallest $p$-value as canonical.

Calibration plots also need event-level uncertainty. Pooling thousands of adjacent prices into probability bins can draw a smooth reliability curve whose apparent sample size is fictional. Bin event-level horizon forecasts, disclose bin counts and event counts, and bootstrap events. Because political samples are small and heterogeneous, reliability diagrams should be read with intervals and alongside discrimination and proper scores, not as proof from a line visually near the diagonal.

Avoid declaring one market superior at each of many horizons without addressing multiplicity. A horizon curve with simultaneous bands, a preregistered primary horizon, or a hierarchical model is more honest than a sequence of isolated tests. Emphasize effect sizes: the paired score difference, its uncertainty, coverage, and practical consequence.

## A reproducible horizon protocol

A strong protocol can be summarized as follows:

1. Define the political target, proposition, contract family, and primary estimand.
2. Predeclare common-clock snapshots, event-relative horizons, or both, with timezones and tolerances.
3. Define $T_i$ and a prospective rule for postponements and changing schedules.
4. Separate snapshot, information cutoff, determination, settlement, and payment timestamps.
5. Archive point-in-time market books, comparator forecasts, source data, rule versions, and outcomes.
6. Convert observations into probabilities using a consistent executable or midpoint rule and retain spreads.
7. Match sources on proposition and information set; never give one comparator later data.
8. Treat the event or dependent contract family as the sampling unit; cluster or bootstrap accordingly.
9. Predeclare aggregation weights, coverage rules, missing-data treatment, primary score, and multiplicity policy.
10. Publish horizon-specific event counts, coverage, score differences, uncertainty, and sensitivity analyses.

This protocol supports two complementary outputs. The common-clock panel shows what forecasters knew together and how they reacted to shared news. The event-relative panel shows how accuracy changes with time remaining. Neither should be collapsed into a universal leaderboard without retaining the population, horizon, and dependence structure that give the number meaning.

## Why it matters

Political markets produce abundant timestamps but relatively few independent outcomes. That mismatch makes horizon analysis look statistically richer than it is. A poorly designed study can award an information advantage to the later snapshot, count one election hundreds of times, obscure thin-market uncertainty with a midpoint, and report narrow confidence intervals around a weighting choice that was never defended.

Good horizon design changes the substantive conclusion. It can reveal that two sources are indistinguishable months out but differ near the deadline; that a venue updates faster after news but is not better calibrated beforehand; that apparent superiority comes from covering easier races; or that a grand average is driven by one election cycle. It also creates a fair basis for combining polls, models, and markets in [[Forecast combination with polls models and markets]].

The central discipline is simple: time is not metadata. It determines what information a forecast could contain, which forecasts are comparable, how many independent observations exist, and what claim an average score actually supports.

## Sources

- Glenn W. Brier, [“Verification of Forecasts Expressed in Terms of Probability”](https://doi.org/10.1175/1520-0493(1950)078%3C0001:VOFEIT%3E2.0.CO;2), *Monthly Weather Review* 78(1), 1950, pp. 1–3 — original probability-score paper; accessed July 10, 2026.
- Tilmann Gneiting and Adrian E. Raftery, [“Strictly Proper Scoring Rules, Prediction, and Estimation”](https://sites.stat.washington.edu/people/raftery/Research/PDF/Gneiting2007jasa.pdf), *Journal of the American Statistical Association* 102(477), 2007, pp. 359–378 — primary theoretical review of proper scoring rules; accessed July 10, 2026.
- Federal Reserve Bank of St. Louis, [ALFRED help](https://alfred.stlouisfed.org/help) — authoritative description of retrieving data as reported on past dates; accessed July 10, 2026.
- Federal Reserve Bank of St. Louis, [FRED series vintage-date API documentation](https://fred.stlouisfed.org/docs/api/fred/series_vintagedates.html) — authoritative definition and interface for series release and revision dates; accessed July 10, 2026.
- Alan H. Murphy, [“A New Vector Partition of the Probability Score”](https://doi.org/10.1175/1520-0450(1973)012%3C0595:ANVPOT%3E2.0.CO;2), *Journal of Applied Meteorology* 12(4), 1973, pp. 595–600 — original reliability–resolution–uncertainty decomposition; accessed July 10, 2026.

## Open questions

- Which rescheduling rule best preserves a prospective horizon when election or vote dates change repeatedly?
- How many independent political-event clusters are needed before particular small-sample cluster corrections behave reliably?
- Should mutually exclusive candidate contracts be reduced to one multinomial forecast before evaluation or retained with family-level dependence?
- Which weighting scheme best represents a public user’s experience without allowing salience or liquidity to select the estimand?
- How should simultaneous uncertainty bands be constructed for sparse, irregular horizon curves with changing event coverage?
