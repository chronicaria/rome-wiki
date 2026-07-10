---
title: Prediction-market calibration
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, forecasting, calibration, quantitative-research]
as_of: 2026-07-10
desk: Political prediction markets
review_after: 2026-07-17
---
Prediction-market calibration asks whether archived market-implied probabilities match realized frequencies across many comparable, preregistered events, not whether one memorable contract was right.

Up: [[Political prediction markets]]

A prediction market is useful only if its prices can be interpreted as forecasts under disciplined conditions. [[From event-contract prices to probabilities]] describes how to extract an economically meaningful price interval from an order book. [[Prediction-market resolution risk]] describes how to identify the event that will actually be scored. Calibration begins after those steps. It asks: when markets assigned roughly 70% probability to events like this, did those events happen roughly 70% of the time?

That question sounds simple, but it is easy to answer badly. A market that correctly anticipated one election upset is not calibrated. A market that spent months near 90% before a favorite won is not necessarily overconfident or brilliant. A set of final pre-resolution prices selected after the fact is not an honest sample. Calibration is a property of a forecasting process over a defined universe of questions, timestamps, and outcomes.

For Rome's political prediction-market desk, calibration is the antidote to price worship. Market prices deserve attention because they aggregate incentives and can update rapidly. They do not deserve automatic deference. A calibration ledger lets Andrew ask when the market was reliable, in which domains, at which horizons, under what liquidity thresholds, and relative to which baselines.

## Reliability, resolution, and sharpness

The first calibration picture is a reliability diagram. Bucket archived probabilities into ranges, such as 0-10%, 10-20%, and so on, then compute the realized frequency in each bucket. If contracts archived near 70% resolve yes about 70% of the time, that bucket is reliable. If they resolve yes 85% of the time, the market was underconfident in that region: favorites were too cheap. If they resolve yes 55% of the time, it was overconfident.

Reliability is not the whole story. A forecaster that always says 50% can be well calibrated in a balanced dataset and still useless. A good probabilistic forecast should be both calibrated and sharp: it should concentrate probability when the evidence warrants confidence while remaining statistically honest. Gneiting, Balabdaoui, and Raftery call this the maximization of sharpness subject to calibration. Proper scoring rules provide a complementary overall ranking because they reward honest probabilistic forecasts in expectation. For binary political markets, the practical lesson is that a market should not be praised merely for avoiding extreme probabilities, nor punished merely for making them. It should be judged by whether its confidence was earned.

Resolution has a more precise meaning in the Murphy decomposition of the mean Brier score. It measures how much the observed event frequencies conditional on forecast categories differ from the overall event frequency. A system has resolution when its forecasts separate occasions with meaningfully different outcome rates; simple monotone ordering is suggestive but not the definition. Reliability asks whether the forecast values match the corresponding conditional event frequencies. Sharpness describes the concentration or spread of the forecasts without reference to outcomes. These ideas overlap in intuition but should not be used interchangeably.

## Brier score and log score

The Brier score for a binary event is the squared error between forecast probability $p$ and outcome $y$, where $y=1$ if the event happens and $0$ otherwise:

$$
(p-y)^2.
$$

A 70% forecast that resolves yes receives $(0.7-1)^2=0.09$. A 70% forecast that resolves no receives $(0.7-0)^2=0.49$. Lower is better. Averaged over many forecasts, Brier score rewards both calibration and discrimination. It is easy to explain, bounded between 0 and 1 for binary events, and common in forecasting tournaments.

For forecast categories $k$ with counts $n_k$, quoted probabilities $p_k$, empirical outcome frequencies $\bar y_k$, overall outcome frequency $\bar y$, and total count $N$, Murphy's empirical decomposition is

$$
\mathrm{BS}
=\frac{1}{N}\sum_k n_k(p_k-\bar y_k)^2
-\frac{1}{N}\sum_k n_k(\bar y_k-\bar y)^2
+\bar y(1-\bar y).
$$

The three terms are reliability minus resolution plus uncertainty. Lower reliability error and higher resolution improve the score; uncertainty is a property of the sample's base rate. Because the empirical terms depend on bins and finite samples, the decomposition should be reported with the categorization rule and uncertainty rather than treated as an exact population identity recovered from a small ledger.

The log score penalizes confident errors more severely:

$$
-\log(p)
$$

if the event happens, and

$$
-\log(1-p)
$$

if it does not. A 99% forecast that fails is punished far more than a 70% forecast that fails. Log score is useful when tail confidence matters, but it requires careful handling of probabilities near zero or one. Market prices often sit at one cent or 99 cents because of tick size, fees, or lottery demand, not because a clean model assigned exactly 1% or 99%.

Neither score solves sample construction. A beautiful scoring table built from cherry-picked resolved events is still misleading. The ledger must decide before outcomes which contracts, timestamps, and horizons enter the sample.

## The selection problem

Prediction-market calibration is vulnerable to selection bias. High-profile politics markets are not a random sample of political events. Venues list contracts that attract users, satisfy platform and regulatory constraints, and can be resolved under clear enough rules. Traders concentrate attention where disagreement, entertainment, hedging demand, or news salience is high. A study of those contracts does not automatically generalize to every political question.

There is also survivorship bias. Failed, voided, illiquid, edited, or delisted contracts are often exactly the ones that reveal resolution and market-design problems. Excluding them can make a platform look more reliable than the experience a real-time analyst faced. The calibration ledger should preserve voided and disputed markets as separate outcome categories rather than silently dropping them.

Time selection is another trap. Final prices just before resolution are easier forecasts than prices months before resolution. A market that is well calibrated one hour before an election call may not be well calibrated six months out. Conversely, early prices may be noisy but still useful relative to available polls and base rates. Calibration should be stratified by horizon: final snapshot, one day, one week, one month, three months, and so on when the data support it.

Domain selection matters too. A venue can be well calibrated on high-liquidity election-winner markets and poorly calibrated on policy, courts, personnel, or geopolitical contracts. Even within elections, presidential general elections, primaries, congressional control, state races, and international multiparty contests have different liquidity and information structures. The desk should avoid one global "prediction markets are calibrated" verdict.

## Favorite-longshot bias and probability compression

The favorite-longshot bias is the recurring pattern in wagering and some prediction settings where long shots are overpriced and favorites are underpriced. Snowberg and Wolfers describe the classic horse-racing form: betting odds give biased probability estimates, with long shots overbet and favorites underbet. In event-contract language, a 5-cent contract might resolve yes less than 5% of the time, while a 90-cent contract might resolve yes more than 90% of the time.

Prediction markets can show the same pattern for several reasons. Some traders like lottery-like payoffs. Tick size and minimum fees can make tiny probabilities hard to express. Shorting overpriced long shots may require capital, access, and patience. A long-shot contract can remain visibly quoted because believers buy it, while skeptics do not find the expected return worth the hassle. In political markets, long-shot candidates and dramatic scenarios also attract attention.

The opposite failure is overconfidence: favorites priced too high and long shots too low. That can happen when a market is dominated by correlated participants, when one narrative becomes consensus, or when liquidity evaporates on the contrarian side. Calibration cannot be assumed from theory. It has to be measured by domain and horizon.

Probability compression is especially important for comparing markets with polls or models. A statistical election model may produce 85% because it aggregates state-level uncertainty. A market may show 75% because of fees, risk preferences, or mistrust of the model. Or the market may show 95% because traders overweight a narrative. Without realized-frequency evidence, the difference is an interpretation problem, not proof that one source is correct.

## How to build an honest ledger

An honest political prediction-market calibration ledger starts before outcomes. For each scheduled snapshot, store the contract identifier, full wording, resolution source, timestamp, bid, ask, midpoint convention, depth, fees, venue, and access caveat. Store the analyst's extraction rule before knowing the outcome: for example, use the midpoint only when spread is at most five cents and both sides have minimum depth; otherwise store an interval and exclude from point-score tables until a rule is specified.

The ledger should define the event universe. It might include all political contracts on a venue that meet liquidity and rule-clarity thresholds at a fixed daily time. Or it might include a named family, such as 2026 congressional-control markets. The narrower universe is often better at first because it makes assumptions inspectable. A broad universe requires more metadata and more caution around clustering.

The ledger should preserve unresolved, voided, edited, and disputed states. A contract that is voided because the rule was flawed is not a normal forecast miss, but it is evidence about market reliability as a research instrument. If those cases disappear from the sample, the published calibration overstates the cleanliness of the market.

The ledger should stratify by liquidity and spread. A 51-52 market with deep books and a 40-70 market with one contract on each side should not receive equal interpretive weight. Scores can be reported separately by spread bucket, depth bucket, and volume/open-interest bucket. If sample sizes become too small, that itself is a finding: the market universe is not yet large enough to support the claimed precision.

The ledger should account for dependence. Many political contracts are complements, nested events, or repeated snapshots of the same underlying race; others share macro-political shocks. Treating hundreds of such observations as independent produces standard errors and effective sample sizes that are too optimistic. The remedy must match the dependence structure: predefine one snapshot per event and horizon for a simple cross-sectional scorecard; cluster uncertainty by the highest defensible independent unit, such as election or contract family; or use a hierarchical or block-resampling design when there are enough clusters. “Cluster-robust” is not magic when the number of clusters is small, and complementary Yes/No contracts should not be counted as two independent forecasts.

## Comparing markets with polls and models

Markets should be compared with baselines that have the same information cutoff. A market price after a debate should not be scored against a poll average that excludes post-debate data and then praised for speed unless the article explicitly studies response time. A model forecast should be frozen at the same timestamp as the market snapshot. If a model is revised after seeing market prices, it is no longer an independent comparator.

Polls, models, experts, and markets answer different objects. A poll estimates current stated preference or vote intention under a sampling design. A model transforms polls, fundamentals, priors, and uncertainty into event probabilities. A market prices a contingent payoff under venue frictions. Expert forecasts may incorporate qualitative information. Calibration comparison requires mapping each object to the same outcome and horizon.

The strongest design is prospective. Before the election cycle, define the contract universe, snapshot schedule, extraction rule, comparator sources, and scoring method. Then freeze the observations. After resolution, score the frozen table. Retrospective studies can still be useful, but they should label every researcher choice that happened after outcomes were known.

## What calibration can prove

Calibration can show that a market's 70% prices historically resolved near 70% in a defined sample. It can show that low-liquidity long shots were overpriced. It can show that final-week prices outperformed a stale poll average. It can show that a market was directionally informative but numerically compressed. It can show that a venue's displayed prices were not research-grade unless spread and depth filters were applied.

It cannot prove that the current price is true. It cannot prove that a market is immune to manipulation, insider trading, correlated errors, or resolution disputes. It cannot prove that future contract families will behave like past ones. It cannot turn thin or ambiguous markets into reliable forecasts. Calibration is a history of a measurement process, not a license to believe every current tick.

For Rome, the right output is not a one-time verdict but a repeatable scorecard. Each political market snapshot should either enter the calibration ledger under clear rules or be excluded with a reason. Over time, the desk can learn which venues, domains, horizons, and liquidity conditions deserve weight.

## Place in the map

This note connects [[Forecast skill]], [[Ensemble forecasting]], [[LLM agent ensembles for forecasting]], [[Multi-agent forecasting frameworks]], [[Agentic trading evaluation pitfalls]], and [[From forecasts to positions in agentic portfolios]] to event-contract data. It supplies the scoring discipline needed before political market prices become inputs to election pages or agent forecasts.

## Sources

- Tilmann Gneiting and Adrian E. Raftery, ["Strictly Proper Scoring Rules, Prediction, and Estimation"](https://sites.stat.washington.edu/raftery/Research/PDF/Gneiting2007jasa.pdf), *Journal of the American Statistical Association* 102(477), 2007 — accessed July 10, 2026.
- Tilmann Gneiting, Fadoua Balabdaoui, and Adrian E. Raftery, ["Probabilistic Forecasts, Calibration and Sharpness"](https://doi.org/10.1111/j.1467-9868.2007.00587.x), *Journal of the Royal Statistical Society: Series B* 69(2), 2007.
- Allan H. Murphy, ["A New Vector Partition of the Probability Score"](https://doi.org/10.1175/1520-0450(1973)012%3C0595:ANVPOT%3E2.0.CO;2), *Journal of Applied Meteorology* 12(4), 1973 — source for the reliability–resolution–uncertainty decomposition.
- Erik Snowberg and Justin Wolfers, ["Explaining the Favorite-Longshot Bias: Is it Risk-Love or Misperceptions?"](https://www.nber.org/system/files/working_papers/w15923/w15923.pdf), NBER Working Paper 15923, 2010 — accessed July 10, 2026.
- [Polymarket, "Prices & Orderbook"](https://docs.polymarket.com/concepts/prices-orderbook) — accessed July 10, 2026.

## Open questions

- Which snapshot cadence should Rome use for political market calibration: hourly, daily, or event-triggered plus scheduled baselines?
- What spread and depth filters are strict enough to avoid stale quotes without discarding the political markets that matter most?
- How should voided or disputed contracts enter venue-reliability scores?
