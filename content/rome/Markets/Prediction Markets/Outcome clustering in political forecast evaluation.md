---
title: Outcome clustering in political forecast evaluation
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, politics, forecast-evaluation, statistics, calibration]
---

Political forecast records contain many rows but often only a few independent political experiments; credible evaluation therefore defines the outcome-generating cluster before scoring, preserves dependence within it, and reports how conclusions change under alternative defensible clusterings.

Up: [[Political prediction markets]]

Related: [[Prediction-market calibration]] · [[Proper scoring rules and market forecasts]] · [[Backtesting political forecasts without leakage]] · [[Dependence across political event contracts]] · [[Political prediction-market calibration ledger]]

## The repeated-outcome illusion

A political-market archive can look enormous. One presidential-winner contract may have a quote every minute for eighteen months. The same election may generate contracts for the winner, party, Electoral College margin, state winners, popular-vote winner, certification, inauguration, cabinet appointments, and congressional control. Competing venues may quote overlapping claims. A naive table turns every timestamp-contract-venue combination into a row and then treats the rows as independent evidence.

They are not. If 50,000 snapshots all inherit the same terminal label—say, whether candidate A wins—then there is still only one realized binary outcome. More snapshots describe the forecast path more finely; they do not replay the election 50,000 times. Likewise, contracts on candidate A, candidate B, the winning party, and a mutually exclusive outcome set may be algebraically or politically coupled. A national wave can move hundreds of races together. Counting each price or contract as an independent trial produces uncertainty intervals that are far too narrow and makes tiny score differences look decisive.

This is **outcome clustering**: organizing observations into groups whose score errors may remain dependent because they share an outcome, event process, information shock, or logical payoff structure. The cluster is the unit that can plausibly supply new evidence for the comparison being made. It is not necessarily the row, contract, venue, election, or calendar year. Choosing it is part of defining the estimand.

Outcome clustering solves a different problem from [[Logical coherence across prediction markets]]. Coherence asks whether contemporaneous probabilities can arise from a common probability distribution. Clustering asks how much independent evidence a resolved archive supplies about forecast performance. It also differs from merely forecasting a multivariate distribution. An analyst can score each marginal contract separately yet use cluster-aware uncertainty; conversely, an analyst can use a multivariate score to test a joint distribution but still need independent replications for inference.

## Four layers of dependence

### Repeated snapshots of one contract

Suppose a contract has probabilities $p_{ct}$ at cutoffs $t=1,\ldots,T$ and resolves to $y_c$. Its Brier losses are

$$
L_{ct}=(p_{ct}-y_c)^2.
$$

All $T$ losses contain the same $y_c$. They are also serially related because adjacent prices arise from nearly the same order book and information set. Averaging them answers a legitimate question—how well did a continuously available forecast service perform across selected times?—but $T$ rows do not support an independent-and-identically-distributed standard error. The contract or higher event unit must remain intact when uncertainty is estimated. For horizon-specific evaluation, a cleaner design often takes one preregistered snapshot per contract per horizon, such as 180, 30, 7, and 1 day before the information cutoff.

### Logically linked contracts

“Candidate A wins,” “Party A wins,” and “Candidate B wins” can encode the same terminal uncertainty. In a two-candidate race, the first two may be effectively identical and the third its complement. Scoring all three as if they were three independent outcomes triple-counts one contest. Multi-candidate markets create more rows but not one independent trial per candidate: the outcome indicators sum to one, and the prices should be evaluated as a multicategory vector when the contracts genuinely partition the same event.

Conditional and derivative claims add less exact dependence. “Candidate A wins Pennsylvania,” “Candidate A wins the Electoral College,” and “Party A wins the Senate” are not complements, but share campaign strength, turnout, polling error, and news. The appropriate group may therefore be an election-contest cluster or a broader election-cycle cluster, depending on the claim the study wants to generalize.

### Common political shocks

Distinct contests can co-move because one latent shock affects them. House races in the same cycle share presidential approval, national fundraising, economic conditions, and polling-house effects. State contests share local turnout and ballot conditions. Policy contracts may share a legislative agenda or court decision. A model-versus-market score advantage across 435 House races can be driven largely by one national polling miss. Treating those races as 435 independent political worlds mistakes geographic granularity for independent information.

### Shared measurement and venue errors

Dependence can also enter before outcomes. A venue-wide API outage can make many quotes stale. A common fee or midpoint transformation can bias every observation. One rules template can create correlated resolution ambiguity. A poll model used as a comparator can reuse the same national prior across races. These common measurement errors matter even when terminal political outcomes are otherwise distinct. Clustering only by outcome identity may therefore be insufficient; design-based sensitivity checks should also group by venue-day, rules family, or extraction batch when those mechanisms are plausible.

## Start with the estimand, not the software

There is no universally correct cluster key. The right key follows from the population about which the analyst wants to speak.

An **event-weighted estimand** asks how the forecasting method performs on a typical event. Each terminal event receives equal total weight, regardless of how many contracts or snapshots it produced. If event $e$ has $n_e$ rows, a simple version assigns each row weight $1/n_e$ and then averages event means:

$$
\bar L_{\text{event}}=\frac{1}{E}\sum_{e=1}^{E}\left(\frac{1}{n_e}\sum_{i\in e}L_i\right).
$$

A **contract-weighted estimand** asks how a typical eligible listed contract performed. It gives more influence to political events that venues chose to represent with many contracts. That can describe the listed product but should not be relabeled as performance over political events generally.

A **time-service estimand** asks what loss a user would experience by consulting the service at scheduled moments. Repeated snapshots then deserve weight because availability over time is the service. Yet inference must still preserve the shared outcome and serial dependence. A venue that posts a quote every second should not acquire more independent evidence than one archived daily merely through sampling frequency.

A **capital- or volume-weighted estimand** asks about dollars or trading exposure rather than forecasting accuracy over questions. It can be useful for economic experience, but volume is endogenous to attention, uncertainty, and price movement. It should sit beside—not silently replace—event-weighted accuracy.

Weighting and clustering are separate choices. Weighting decides what average means. Clustering decides which observations may share disturbances when estimating uncertainty. Equal event weights do not by themselves make rows independent; cluster-robust standard errors do not prevent a heavily snapshotted election from dominating the point estimate.

## Building a defensible cluster hierarchy

The ledger should preserve several identifiers rather than collapse everything into one irrevocable label:

1. **payoff-state ID** for contracts that settle from the same terminal indicator or multicategory state;
2. **contest ID** for one race, nomination, legislative vote, court case, or administrative decision;
3. **event-family ID** for linked contests such as all candidate and party contracts in one presidential election;
4. **cycle or shock ID** for a common election day, legislative session, court term, or other shared macro process;
5. **contract ID**, venue, rules version, and forecast timestamp for measurement dependence.

This hierarchy makes alternative analyses possible. Exact duplicates and complements should generally be consolidated at the payoff-state level. Primary inference might resample contests when contests plausibly represent independent replications. A more conservative sensitivity analysis can resample election cycles when national shocks dominate. If only two presidential cycles exist, no statistical technique can manufacture a large cycle-level sample from dozens of candidate and state contracts.

Cluster definitions must be fixed without using score residuals or winners. Grouping contracts after seeing which ones moved or missed together is a form of researcher discretion that can understate uncertainty. Semantic records—contract rules, outcome authority, event date, office, jurisdiction, and logical relations—should generate clusters prospectively. [[Versioning political event-contract semantics]] is therefore statistical infrastructure, not only archival hygiene.

Ambiguous cases should receive explicit crosswalks. For example, a presidential popular-vote contract and Electoral College winner contract share an election family but not a payoff state. State winner contracts share cycle shocks and contribute to the national outcome, yet each also has state-specific variation. Report the primary grouping rule and at least one broader plausible grouping rather than pretending ontology is certain.

## Estimation methods that respect clusters

### Aggregate first

The most transparent method is often to compute one summary per independent unit. For a market-versus-model comparison, calculate each event's mean loss difference

$$
d_e=\frac{1}{n_e}\sum_{i\in e}\left(L^{M}_{i}-L^{B}_{i}\right),
$$

then summarize the $d_e$ values across events. This prevents events with many observations from automatically dominating and exposes whether the headline result depends on one election. It also supports a paired comparison because both systems face the same outcomes and horizons.

Aggregation sacrifices some within-event structure, so publish both the event summaries and stratified results by horizon or contract family. Do not average a one-year and one-day forecast into an uninterpretable “typical” number unless the time-service estimand explicitly calls for it.

### Cluster-robust covariance

Regression can estimate adjusted score differences while allowing arbitrary correlation within designated clusters. In a model such as

$$
L_i=\alpha+\beta\,\text{Market}_i+X_i'\gamma+u_i,
$$

the coefficient $\beta$ may compare systems after prespecified horizon and family controls, while a cluster-robust covariance estimator avoids assuming independent $u_i$ within the event. Cameron and Miller emphasize that the reliability of this approach depends primarily on the number of clusters, not the number of rows. With few clusters, conventional asymptotic cluster-robust intervals can remain badly overconfident.

For one-way clusters $g=1,\ldots,G$, the basic sandwich estimator is

$$
\widehat{\mathrm{Var}}(\hat\beta)
=(X'X)^{-1}\left(\sum_{g=1}^{G}X_g'\hat u_g\hat u_g'X_g\right)(X'X)^{-1},
$$

usually multiplied by a stated finite-sample factor. The outer product of each cluster's score contribution permits arbitrary heteroskedasticity and correlation **within** a cluster; consistency still requires clusters to be independent or sufficiently weakly dependent **across** $g$ and the effective number of informative clusters to grow. A large nominal $G$ is not enough when one or two clusters carry most of the regressor variation or weight. Report the covariance variant—such as CR1, CR2, or CR3—the critical-value rule, and the software implementation, because “clustered SE” does not uniquely specify an interval.

The method does not rescue a poorly defined sample, post-outcome selection, or leakage. Nor does “cluster by contract” solve common election shocks across contracts. The coarsest credible level should usually govern the primary inference, with other levels reported as sensitivity analyses.

If dependence genuinely runs along two non-nested dimensions—for example election family and extraction day—multiway clustering may be appropriate, with covariance contributions combined by the relevant inclusion–exclusion formula. But it requires adequate replication along every clustered dimension and a defensible assumption about dependence outside their intersections. It is not a mechanical alternative to choosing a political outcome cluster, and few-cluster problems can become worse.

### Cluster bootstrap

A nonparametric **pairs cluster bootstrap** samples whole clusters with replacement and retains all observations inside each selected cluster. Recomputing the complete statistic—including weights, calibration bins, and system differences—preserves observed within-cluster dependence. When a selected cluster appears twice, it enters as two sampled copies rather than being deduplicated by its identifier. Resampling individual rows would break the connection among repeated snapshots and linked outcomes and is therefore inappropriate.

Bootstrap design should mirror the sampling story. Resample election contests if the target is new contests drawn from a stable population. Resample cycles if the intended generalization is to future election cycles and there are enough cycles. For nested data, a hierarchical bootstrap can sample cycles and then contests within cycles, but its validity still depends on meaningful replication at the top level and on the implied population matching the named estimand. Block bootstraps address serial dependence in forecast paths; they do not independently solve the shared terminal-outcome problem unless blocks encompass the relevant outcome cluster. With very few top-level clusters, an ordinary pairs bootstrap has few distinct resamples and can omit crucial clusters; percentile bands are not a cure for absent replication.

### Wild cluster bootstrap and small-sample corrections

When clusters are few or unbalanced, leverage-adjusted covariance estimators, degrees-of-freedom corrections, and wild cluster bootstrap procedures can improve finite-sample inference under specified conditions. A wild cluster bootstrap keeps the design matrix fixed and multiplies cluster-level residual or score contributions by random weights; it is not the pairs cluster bootstrap described above. For a hypothesis test, report whether the bootstrap data-generating process imposed the null, the weight distribution and covariance estimator, and how the $p$-value or inverted interval was formed.

These are tools, not permission to call three cycles a large sample. MacKinnon and Webb show that wild-bootstrap performance can deteriorate when cluster sizes are highly unequal or only a small number of clusters carry the treatment or identifying variation. Results should disclose nominal and effective cluster counts, size and leverage distributions, the number of treated or identifying clusters where relevant, method, null, repetitions, random seed, and whether conclusions survive leave-one-cluster-out analysis. A confidence interval that changes drastically when one cycle is removed is evidence of fragility, not a formatting inconvenience.

### Randomization and permutation tests

If the system comparison has a defensible exchangeability structure, signs or system labels can sometimes be permuted at the event level. Permuting rows within an event again creates pseudo-replication. The validity of a randomization test comes from the design or null hypothesis; it is not automatic because the calculation is exact. In observational market archives, system forecasts are usually not experimentally assigned, so permutation assumptions deserve explicit defense.

## Calibration needs cluster-aware uncertainty too

A reliability diagram bins forecasts and compares mean predicted probability with the realized fraction. Repeated forecasts from one resolved event can fill a bin while contributing only one outcome. A naive binomial interval then acts as if every row received a fresh Bernoulli draw. This can make a smooth calibration curve look precisely estimated when it is mostly a portrait of a few elections at many times.

Cluster-aware calibration should either take one observation per event at each prespecified horizon or resample whole events when constructing bands. The point curve and its uncertainty must target the same weighting scheme: an event-equal curve normalizes each event's total weight before fitting, whereas a time-service curve may intentionally weight scheduled consultations. Cluster resampling preserves dependence but does not undo snapshot- or contract-weighting in the calibration estimand. If one event contributes multiple mutually exclusive categories, treat the vector as a single multicategory forecast or preserve it within the resampling unit. Report the number of unique payoff states and higher-level clusters in every bin, not just the row count. Sparse tails are especially vulnerable: 300 one-percent quotes tied to three longshot candidates do not establish one-percent calibration.

Calibration estimators also have their own overfitting risk. Flexible smoothers trained and assessed on the same clustered events can learn election-specific patterns. Recalibration maps should be trained on earlier, disjoint event clusters and tested on held-out cycles or families as described in [[Backtesting political forecasts without leakage]]. Cross-validation must split at the cluster level; random row splits leak the same outcome and price path into training and test sets.

## Common failure modes

**Calling snapshots observations without naming outcomes.** A table with a million rows should lead with counts of unique contracts, payoff states, contests, families, and cycles. Each count answers a different question.

**Clustering too narrowly.** Contract-level clustering handles repeated timestamps but not complements, candidate/party duplicates, or a national wave shared across races.

**Clustering too broadly without saying what changed.** Treating every contract in a decade as one cluster discards genuine replication and makes inference impossible. Broader clustering should reflect a causal dependence mechanism, not a reflexive demand for maximum conservatism.

**Using fixed effects as a substitute for clustered inference.** Event or cycle fixed effects absorb mean differences associated with those groups; they do not generally make residuals within groups independent.

**Letting active markets set the weights.** More news, trading, or API sampling generates more rows. Without event normalization, the point estimate becomes an attention-weighted score even if the paper describes it as event accuracy.

**Reporting a clustered standard error but hiding few clusters.** “Robust” is not a binary certificate. Publish the cluster count, minimum, median, and maximum size, and the share of weight in the largest clusters.

**Treating correlated outcomes as duplicate outcomes.** Shared national shocks do not make every House race identical. The goal is to retain useful cross-sectional information while acknowledging its dependence, not to delete all but one race.

## A reporting protocol for Rome

A political forecast evaluation should publish a cluster map alongside its score table:

1. freeze the eligible event universe, snapshot horizons, and missing-data policy before resolution;
2. record payoff-state, contest, family, cycle, venue, rules-version, and extraction identifiers;
3. state whether the headline mean is event-, contract-, time-, or exposure-weighted;
4. consolidate exact duplicates and evaluate exhaustive outcome sets as vectors where appropriate;
5. name the primary cluster level and the substantive mechanism that motivates it;
6. report row, contract, payoff-state, contest, family, and cycle counts;
7. use paired event-level score differences when comparing systems on common targets;
8. estimate uncertainty by resampling or robust inference at the declared cluster level;
9. repeat the analysis under at least one narrower and one broader defensible grouping;
10. show leave-one-major-cluster-out results and identify clusters that dominate total weight.

The result may be less dramatic than a naive leaderboard. That is the point. If a claimed market advantage disappears when presidential-election rows are reduced to their actual number of cycles, the archive never contained the advertised evidence. If the advantage persists across event families, cycles, scoring rules, executable-price conventions, and cluster definitions, the case becomes much stronger.

## Why it matters

Political prediction markets generate unusually seductive pseudo-samples. Dense price paths, many derivative contracts, and hundreds of geographically distinct races make dashboards appear statistically powerful. Yet politics is organized around shared decisions and shocks. Forecast evaluation that ignores that structure rewards data collection frequency with fake certainty.

Outcome clustering does not change the realized Brier loss of any forecast. It changes what the collection of losses can justify. It forces analysts to distinguish description from generalization, rows from events, attention from accuracy, and repeated measurement from repeated political worlds. For Rome, that distinction determines whether a calibration claim is durable research or merely an overconfident summary of a few election cycles.

## Sources

- A. Colin Cameron and Douglas L. Miller, [“A Practitioner’s Guide to Cluster-Robust Inference”](https://cameron.econ.ucdavis.edu/research/Cameron_Miller_JHR_2015_February.pdf), *Journal of Human Resources* 50(2), 2015, pp. 317–372 — author-hosted full text and methodological synthesis on cluster definition, covariance estimation, multiway clustering, few-cluster problems, and practical reporting.
- Marianne Bertrand, Esther Duflo, and Sendhil Mullainathan, [“How Much Should We Trust Differences-in-Differences Estimates?”](https://doi.org/10.1162/003355304772839588), *Quarterly Journal of Economics* 119(1), 2004, pp. 249–275 — original simulation evidence showing severe overrejection when serial correlation is ignored and motivating grouped/block-aware inference.
- James G. MacKinnon and Matthew D. Webb, [“Wild Bootstrap Inference for Wildly Different Cluster Sizes”](https://qed.econ.queensu.ca/pub/faculty/mackinnon/working-papers/qed_wp_1314.pdf), *Journal of Applied Econometrics* 32(2), 2017, pp. 233–254 — author-hosted corrected working-paper version of the analysis of effective cluster count and wild-bootstrap failures under unequal cluster sizes or few treated clusters.
- Tilmann Gneiting and Adrian E. Raftery, [“Strictly Proper Scoring Rules, Prediction, and Estimation”](https://doi.org/10.1198/016214506000001437), *Journal of the American Statistical Association* 102(477), 2007, pp. 359–378 — foundational treatment of proper scoring rules and probabilistic forecast evaluation.
- Glenn W. Brier, [“Verification of Forecasts Expressed in Terms of Probability”](https://doi.org/10.1175/1520-0493(1950)078%3C0001:VOFEIT%3E2.0.CO;2), *Monthly Weather Review* 78(1), 1950, pp. 1–3 — original multicategory quadratic-score paper.
- S. N. Lahiri, [*Resampling Methods for Dependent Data*](https://doi.org/10.1007/978-1-4757-3803-2), Springer, 2003 — primary monograph on block and other resampling methods for dependent observations.
- Lionel Page and Robert T. Clemen, [“Do Prediction Markets Produce Well-Calibrated Probability Forecasts?”](https://people.duke.edu/~clemen/bio/Published%20Papers/45.PredictionMarkets-Page%26Clemen-EJ-2013.pdf), *Economic Journal* 123(568), 2013, pp. 491–513 — author-hosted full text; it explicitly bootstraps groups of dependent markets to obtain confidence bands for an estimated calibration curve.

## Open questions

- Which hierarchy best captures dependence among candidate, party, state, chamber-control, and certification contracts without collapsing genuinely distinct political risks?
- How many election cycles are needed before cycle-level bootstrap intervals become informative for venue comparisons?
- Should a public calibration dashboard default to event-equal weights while offering time-service and volume-weighted views as explicitly separate estimands?
- Can semantic contract graphs generate preregistered payoff-state and event-family clusters automatically, with human review only for ambiguous links?
- What multivariate score best complements marginal Brier and log loss when a venue quotes an exhaustive, dependent political outcome set?
