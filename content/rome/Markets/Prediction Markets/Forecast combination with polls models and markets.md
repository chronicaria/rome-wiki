---
title: Forecast combination with polls models and markets
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, politics, forecasting, elections, calibration, quantitative-research]
---

Combining a poll estimate, an election model, and a market price can improve a political forecast only after they are converted into forecasts of the same event at the same information cutoff and their overlapping information, calibration, and measurement errors are modeled rather than counted three times.

Up: [[Political prediction markets]]

Related: [[From event-contract prices to probabilities]] · [[Prediction-market calibration]] · [[Information aggregation in prediction markets]] · [[Backtesting political forecasts without leakage]] · [[Logical coherence across prediction markets]]

## The combination problem

A forecast ensemble is attractive because polls, statistical models, and prediction markets fail differently. Polls directly sample stated voting intention but face sampling, nonresponse, likely-voter, house-effect, and undecided-voter errors. Election models translate polls, fundamentals, and assumptions about correlated error into an outcome distribution. Markets can react continuously to dispersed information and force participants to express beliefs through costly orders, but their prices also reflect contract language, spreads, fees, access restrictions, wealth, risk preferences, and liquidity. If their errors are not perfectly correlated, combination can reduce the damage from any one method's miss.

That intuition does not license an average of three percentages copied from a dashboard. Often the inputs are not three independent forecasts. A polling average may feed the election model; model outputs and polls may guide traders; market prices may be displayed beside a model and affect analysts. The apparent ensemble can be one public-information stream echoed through three interfaces. Combination is therefore an exercise in *information accounting*: identify what each input estimates, what evidence it contains, what evidence it shares, and what historical performance supports its weight.

The result should be a reproducible probabilistic forecast, not a claim that consensus must be right. A combined forecast can inherit common-mode failure—for example, a polling miss correlated across states—or become less calibrated through a poorly chosen pooling rule. It should be archived and scored like every other forecast.

## Align the estimand before combining

The **estimand** is the exact quantity being forecast. Many tempting combinations fail because their displayed percentages refer to different objects.

A poll's candidate share usually estimates current vote intention among a defined population: adults, registered voters, or likely voters. A vote-share market may forecast the certified two-party popular-vote share. A winner-take-all contract pays according to who satisfies a contractual resolution criterion. An election model may report the probability of winning the Electoral College, a posterior mean vote share, or the fraction of simulations in which a party wins. Those quantities are related but not interchangeable.

Before pooling, define a common target such as:

> Candidate A wins the state's certified popular vote in the general election held on date D, under a stated rule for recounts, substitutions, ties, postponement, and cancellation.

Then transform each source to that target. Poll shares require a model connecting present preference to election-day vote and propagating undecided allocation, turnout, future campaign movement, and polling error. A national popular-vote forecast requires an electoral mapping before it becomes a presidency probability. A market observation must match the target's wording and designated resolution source; [[Prediction-market resolution risk]] cannot be averaged away. If a market contract resolves on a media call while the model predicts certified results, the difference is basis risk, not forecast disagreement.

Time must match too. Let $p_{i,t}$ be source $i$'s forecast using information available by cutoff $t$. A market midpoint at 3:00 p.m. cannot be fairly combined with a model update labeled the same day if the model ingested polls only through the prior evening, unless that lag is explicit. The ensemble record needs source publication time, the latest input-data time, retrieval time, and the chosen common cutoff. The safest rule freezes every input at the latest version genuinely available at or before $t$.

Market probabilities need an extraction step before entering the ensemble. Store the bid, ask, depth at a fixed size, last trade, fee convention, and timestamp. Use a midpoint only under a preregistered spread-and-depth rule; otherwise propagate an executable interval or omit the point input. [[From event-contract prices to probabilities]] explains why a displayed cent price is not automatically a frictionless belief.

Finally, align outcome spaces. For $K$ mutually exclusive candidates, every input should produce a vector $\mathbf p_i=(p_{i1},\ldots,p_{iK})$ on the same exhaustive set with $p_{ik}\ge0$ and $\sum_kp_{ik}=1$. Renormalizing a set of unrelated contracts can hide omitted candidates, incompatible rules, or fees. Check semantic and logical coherence first, using the methods in [[Logical coherence across prediction markets]].

## Dependence is the central difficulty

Combining works when component errors diversify. Suppose binary forecasts $p_i$ estimate an event outcome $Y\in\{0,1\}$ and a linear pool uses weights $w_i$ summing to one:

$$
p_* = \sum_{i=1}^{m} w_i p_i.
$$

If $e_i=p_i-Y$, the mean squared error of the pool contains both variances and covariances:

$$
E(e_*^2)=\sum_i w_i^2E(e_i^2)+2\sum_{i<j}w_iw_jE(e_ie_j).
$$

Low covariance is what lets a weaker component improve the ensemble. If two errors are nearly identical, treating them as two votes merely doubles their common bias. This is why method diversity can matter more than the raw number of forecasts.

In elections, dependence exists at several layers:

- **Data dependence:** polling averages and models ingest many of the same surveys; multiple models may license the same voter-file, demographic, economic, or historical data.
- **Attention dependence:** traders, experts, and modelers react to the same debate, poll release, or news story.
- **Mechanical dependence:** a market participant may anchor directly on a public model, while a hybrid model may use market prices.
- **Outcome dependence:** daily forecasts for one election share the same final result; state outcomes share national polling and turnout shocks.
- **Institutional dependence:** multiple market venues may share traders, price feeds, contract structures, or access constraints.

Pairwise correlation of displayed probabilities is not enough. Forecasts should move together when the underlying event probability changes. What matters for weighting is correlation of *errors* relative to the common target, ideally conditional on horizon, event family, and information set. Estimating this requires many genuinely independent resolved events. Hundreds of daily observations from one presidential election are not hundreds of independent tests.

Satopää, Pemantle, and Ungar's partial-information framework clarifies the problem. Each forecast reflects an information set; the ideal aggregate uses the union of those sets, but the aggregator observes only reported probabilities. If information overlap is high, averaging may be appropriate. If forecasters possess substantially distinct information, an average can be too moderate because it fails to count the independent evidence fully. In their illustrative structure, the optimal aggregate becomes more extreme as overlap falls. This logic makes “always extremize” as unsafe as “always average”: the needed correction depends on overlap and calibration.

A practical forecast registry should therefore record input lineage: polls used by each model, update schedule, whether market prices are inputs, and major public signals. Weight source families rather than dashboard labels. Five models built from the same polling average should not automatically receive five times the influence of one independently constructed structural forecast.

## Combination methods

### Equal-weight linear pool

The defensible starting benchmark is the arithmetic mean:

$$
p_*=\frac{1}{m}\sum_i p_i.
$$

Equal weighting is transparent, robust to noisy estimates of relative skill, and difficult to overfit. Graefe and colleagues' election study combined poll projections, expert judgments, quantitative models, and Iowa Electronic Markets forecasts across six U.S. presidential elections. Their cross-method average was more accurate on average than the individual component methods, and gains were larger with more forecasts, especially forecasts based on different methods and data. This is evidence for diversification in that historical design, not a universal performance guarantee.

The arithmetic mean also has a known weakness. Ranjan and Gneiting show that a nontrivial linear pool of distinct calibrated probability distributions is generally overdispersed and lacks sharpness under their idealized setup. For binary-event practice, averaging separated probabilities pulls the result toward the middle. That conservatism may help when components are overconfident, but it may understate strong independent evidence. Calibration has to be measured after pooling.

### Skill-weighted linear pool

A weighted pool assigns more mass to inputs with better out-of-sample performance:

$$
p_* = \sum_i w_i p_i,\qquad w_i\ge0,\quad \sum_iw_i=1.
$$

Weights can minimize a proper score on a training set, with regularization toward equal weights. Constraints prevent unstable short-sample estimates and negative weights that create incoherent probabilities. Useful features may include horizon, contract family, spread, depth, poll sample composition, and model vintage. A market could receive less weight when its spread is wide; a poll-based model could receive more weight near election day if validated history supports that pattern.

The danger is “weight optimization” on a tiny election archive. Source performance changes by cycle and horizon, and daily records are dependent. A fitted rule with many interactions can memorize which source happened to win in the few observed elections. Shrinkage, coarse source families, and leave-one-election-out validation are preferable to unconstrained optimization.

### Log-odds pooling

For a binary event, a log-odds pool combines evidence on the logit scale:

$$
\operatorname{logit}(p_*)=\alpha+\sum_i w_i\operatorname{logit}(p_i),
$$

where $\operatorname{logit}(p)=\log[p/(1-p)]$. This resembles adding likelihood evidence to a prior. The intercept $\alpha$ can correct a base-rate shift. When inputs are identical and $\alpha=0$, the sum of the coefficients governs extremization: a sum above one moves the aggregate farther from 0.5, while a sum below one compresses it; with disagreeing inputs or a nonzero intercept, that shorthand no longer determines the direction by itself.

Logit pooling is useful when inputs represent partly independent evidence, but it can become disastrously confident if correlated inputs are treated as independent. Probabilities of exactly zero or one also require a preregistered clipping rule, which affects log score. The coefficients must be estimated prospectively or on a clean training archive.

### Recalibrated pools

Rather than choose averaging or extremizing by intuition, fit a low-dimensional recalibration map on held-out forecasts. Ranjan and Gneiting's beta-transformed linear pool applies a beta cumulative-distribution transform to a linear pool to address dispersion and calibration. For binary events, logistic calibration offers a simpler analogue: regress outcomes on the logit of the raw ensemble, then use the fitted intercept and slope to correct bias and confidence.

Recalibration is not a free accuracy upgrade. It needs enough representative outcomes across the probability range and must be trained without leakage. If the political regime, venue, or polling methodology changes, a historical map may be stale. Publish both the raw and recalibrated ensemble so the correction remains auditable.

### Bayesian and latent-information models

A fully specified Bayesian synthesis models the data-generating process: latent election support, poll sampling and house effects, fundamentals, correlated state errors, and a measurement model for market prices. The market can enter as a noisy observation of the latent event probability, with noise related to liquidity and venue frictions. This approach propagates uncertainty coherently and can reveal which source moves the posterior.

Its strength is also its cost. Every dependence structure and market observation equation is an assumption. If a market mostly repackages the same polls already in the model, treating it as conditionally independent will yield false precision. Bayesian model averaging similarly needs meaningful prior model probabilities and predictive likelihoods; it should not be confused with assigning weights because a model has a famous brand.

For Rome's initial ledger, a regularized linear or logit pool should be the challenger to an equal-weight benchmark. A complex latent model is justified only after the source lineage and archive are rich enough to estimate it.

## What the election evidence says

The empirical literature does not establish a permanent hierarchy among polls, models, and markets. It demonstrates why matched designs matter.

Berg, Nelson, and Rietz compared Iowa Electronic Markets vote-share forecasts with 964 contemporaneous national polls across five U.S. presidential elections from 1988 through 2004. After normalizing both to the two-party vote and matching the market observation to the last poll field date, the market was closer to the eventual split 74% of the time and showed its clearest relative advantage more than 100 days before election day. The study's target was vote share, not the probability of winning.

Erikson and Wlezien challenged broad claims of market superiority using modeled readings of trial-heat polls. They concluded that, in their IEM sample, polls could dominate the markets and that market prices added little beyond polls. Differences between these results are not a nuisance to average away. They expose design choices: raw poll snapshots versus a time-to-election interpretation, vote-share versus winner-take-all contracts, forecast horizon, and how repeated daily observations are weighted.

Sethi and colleagues compared daily 2020 battleground-state victory probabilities from *The Economist* model and PredictIt. Markets performed better several months out, while the model performed better as election day approached. A simple average outperformed either overall because the two sources made large errors in different states and ways: the model was confidently wrong in some cases, while the market was comparatively underconfident. One election and a set of correlated states cannot establish stable weights, but the result illustrates the diversification mechanism directly.

These studies support three measured conclusions. First, a hybrid can outperform its components when errors differ. Second, performance is conditional on horizon, target, and sample. Third, the component with the better average score need not contain all useful information; marginal value depends on what the other component already knows.

## Calibration after combination

Every ensemble should be assessed for both calibration and sharpness. A reliability diagram asks whether forecasts near $p$ resolve near frequency $p$. Brier score evaluates squared probability error, while log score penalizes confident misses much more sharply. Report both when the sample permits, along with calibration slope/intercept and uncertainty intervals. [[Prediction-market calibration]] gives the full ledger design.

Do not “calibrate” by choosing the transformation that looks best on the same cases used to report performance. Fit on a training period and evaluate once on a frozen test period. Because political-event samples are small and heterogeneous, calibration estimates should be stratified only where counts support them. Pooling a presidential election, cabinet appointment, court ruling, and primary nomination may create a cosmetically smooth reliability curve with little substantive meaning.

Market bid-ask uncertainty should survive the combination. One simple sensitivity analysis computes the ensemble at both ends of the admissible market interval while holding other inputs fixed. A more explicit model treats the latent market belief as interval-censored. If the combined conclusion changes materially across the executable spread, report a range rather than a false point estimate.

For multicandidate elections, preserve simplex coherence and use multiclass Brier or log score. A set of separately fitted binary ensembles can sum to more or less than one; repair should be declared and validated, not silently normalized.

## A leakage-resistant backtest

A credible comparison needs a protocol written before inspecting test outcomes.

1. **Declare the universe.** Specify elections, offices, jurisdictions, event families, horizons, and exclusions. Preserve voided, edited, and disputed contracts as separate states.
2. **Freeze estimands.** Map poll/model/market inputs to the same resolution event and outcome space. Version contract semantics and transformation code.
3. **Archive point-in-time inputs.** Use only forecasts and underlying data available by the scheduled cutoff. Save model vintage, poll field dates, market book, fees, and retrieval timestamp.
4. **Predefine extraction.** Set market spread/depth rules, poll aggregation, stale-input rules, and clipping before outcomes.
5. **Choose benchmarks.** Include base rate, equal-weight pool, each component, and a regularized learned pool. A complicated method should earn its complexity out of sample.
6. **Split by event, not row.** Hold out whole elections or event clusters. Randomly splitting daily state forecasts leaks the same outcome and campaign trajectory into training and test sets.
7. **Score at fixed horizons.** Compare forecasts at, for example, 180, 90, 30, 7, and 1 day before resolution. Do not let sources with more frequent updates dominate the sample.
8. **Estimate uncertainty at the event-cluster level.** Bootstrap elections or independent event families, not daily observations, and show score differences with intervals.
9. **Test marginal contribution.** Compare poll-plus-model against poll-plus-model-plus-market, not merely market against model. Report whether the market improves score after its shared information is already present.
10. **Lock the test set.** Revisions prompted by test results create a new model version and require a later untouched evaluation window.

Also test robustness to plausible choices: executable market bid versus ask versus midpoint, alternative poll cutoffs, exclusion of thin books, recalibration on/off, and source-family weights. A forecast that wins only under one post-hoc convention is a research lead, not a validated ensemble.

## A practical publication template

Each combined political forecast should preserve:

- canonical event and outcome vector;
- resolution authority and exceptional rules;
- forecast cutoff and every input's data/publication timestamp;
- poll population, field dates, aggregator, and transformation to event probability;
- model version, inputs, target, and whether markets enter the model;
- market venue, contract ID, rules version, bid/ask/depth/fees, and extraction rule;
- source-lineage matrix showing shared polls, models, and public signals;
- combination formula, weights, training window, recalibration, and clipping;
- raw components, raw ensemble, calibrated ensemble, and sensitivity interval;
- preregistered score and eventual outcome.

This record prevents a clean-looking combined number from concealing mismatched questions or circular inputs. It also makes disagreement useful. If the model says 70% and the market says 50%, the research question is not automatically “which should get 60%?” It is which assumptions, information, or frictions produce the gap and whether historical out-of-sample evidence says that gap is predictive.

## Sources

- Andreas Graefe, J. Scott Armstrong, Randall J. Jones Jr., and Alfred G. Cuzán, [“Combining forecasts: An application to elections”](https://doi.org/10.1016/j.ijforecast.2013.02.005), *International Journal of Forecasting* 30(1), 2014 — cross-method election combinations across polls, experts, models, and Iowa Electronic Markets.
- Roopesh Ranjan and Tilmann Gneiting, [“Combining probability forecasts”](https://doi.org/10.1111/j.1467-9868.2009.00726.x), *Journal of the Royal Statistical Society: Series B* 72(1), 2010 — linear-pool dispersion result and beta-transformed linear pool.
- Ville A. Satopää, Robin Pemantle, and Lyle H. Ungar, [“Modeling Probability Forecasts via Information Diversity”](https://www2.math.upenn.edu/~pemantle/papers/aggregation.pdf), *Journal of the American Statistical Association* 111(516), 2016 — partial-information framework, dependence, and extremization.
- Rajiv Sethi, Julie Seager, Emily Cai, Daniel M. Benjamin, and Fred Morstatter, [“Models, Markets, and the Forecasting of Elections”](https://arxiv.org/abs/2102.04936), 2021 — daily 2020 battleground comparison and simple model-market hybrid.
- Joyce E. Berg, Forrest D. Nelson, and Thomas A. Rietz, [“Prediction Market Accuracy in the Long Run”](https://doi.org/10.1016/j.ijforecast.2008.03.007), *International Journal of Forecasting* 24(2), 2008 — matched IEM vote-share forecasts and 964 polls.
- Robert S. Erikson and Christopher Wlezien, [“Are Political Markets Really Superior to Polls as Election Predictors?”](https://statmodeling.stat.columbia.edu/wp-content/uploads/2024/08/Erikson-and-Wlezien-POQ-2008.pdf), *Public Opinion Quarterly* 72(2), 2008 — contrary evidence using poll-based election projections and IEM prices.
- Tilmann Gneiting, Fadoua Balabdaoui, and Adrian E. Raftery, [“Probabilistic Forecasts, Calibration and Sharpness”](https://doi.org/10.1111/j.1467-9868.2007.00587.x), *Journal of the Royal Statistical Society: Series B* 69(2), 2007 — calibration, sharpness, and proper-score evaluation.

## Open questions

- How much incremental information do current political markets add after conditioning on the exact poll average and public model forecasts visible to traders?
- Can source lineage be encoded well enough to estimate effective information overlap rather than merely error correlation?
- Which liquidity and spread variables should govern a market input's dynamic weight without overfitting?
- Does a horizon-dependent weighting rule survive leave-one-election-out testing across countries and contract types?
- How should a combination propagate ambiguity when the market resolves on a different authority or timetable than the election model's target?
