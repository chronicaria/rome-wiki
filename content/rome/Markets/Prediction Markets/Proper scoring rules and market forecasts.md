---
title: Proper scoring rules and market forecasts
created: 2026-07-09
source: llm
status: seed
tags: [prediction-markets, forecasting, scoring-rules, quantitative-research]
as_of: 2026-07-09
desk: Political prediction markets
review_after: 2026-07-16
---
Proper scoring rules reward probabilistic honesty and compare forecast records, but applying them to market prices requires frozen timestamps, matched contracts, and explicit treatment of trading frictions.

Up: [[Political prediction markets]]

A political prediction market produces a sequence of prices for contingent claims. A proper scoring rule evaluates a probability forecast after the outcome is known. Those are related ideas, but they are not interchangeable. The market is a mechanism in which traders with different information, wealth, risk tolerance, and constraints interact. The score is an evaluation convention chosen by an analyst or forecaster. Confusing the two leads to claims such as “the market uses the Brier score,” “the closing price was the best forecast,” or “the venue with the lowest score discovered the true probability.” None follows without additional assumptions.

The useful connection is narrower and stronger. A strictly proper score makes a risk-neutral forecaster maximize expected reward by reporting the probability they actually believe. The same mathematics can also build an automated market maker, as in a logarithmic market scoring rule. After markets resolve, proper scores let researchers compare frozen market-implied probabilities with polls, statistical models, experts, or other venues. Yet the score remains meaningful only if [[From event-contract prices to probabilities]] has already identified what probability observation is being scored and [[Prediction-market resolution risk]] has identified what outcome the contract actually settles on.

## Forecasts, outcomes, and the direction of a score

For one binary event, let $Y\in\{0,1\}$ denote the realized outcome and let $p\in[0,1]$ be the reported probability that $Y=1$. A scoring rule assigns a number $S(p,Y)$. Authors use opposite sign conventions. In a **reward** convention, larger is better; in a **loss** convention, smaller is better. This note states losses as $L(p,Y)$ unless it explicitly says reward. Every empirical comparison must record the convention because reversing a sign can reverse a ranking.

A loss is **proper** when truthful reporting is optimal in expectation. If a forecaster's subjective probability is $q$, propriety requires

$$
\mathbb E_{Y\sim q}[L(q,Y)]\leq \mathbb E_{Y\sim q}[L(p,Y)]
$$

for every report $p$. It is **strictly proper** when equality holds only at $p=q$. Strict propriety is an incentive-compatibility statement: under the expected-loss model, a forecaster does not improve their expected score by shading a belief. It does not say the belief is correct, well informed, or calibrated. A person who honestly believes an unsupported rumor has probability $0.8$ is induced to report $0.8$; the score cannot repair their information set.

The qualification “under the expected-loss model” matters. Monetary score payments elicit a probability cleanly from a risk-neutral agent whose payoff depends only on the score. Risk aversion, wealth effects, hedging motives, limited liability, strategic interaction, and beliefs about whether the outcome can be influenced can break that direct interpretation. Scores used only for ex post research do not need to motivate the original traders, but analysts should not retroactively treat a market quote as though one representative risk-neutral forecaster reported it.

## Quadratic or Brier loss

For a binary event, the familiar Brier loss is

$$
L_{\mathrm{Brier}}(p,y)=(p-y)^2.
$$

If the forecaster believes the event probability is $q$, expected loss from reporting $p$ is

$$
q(p-1)^2+(1-q)p^2=(p-q)^2+q(1-q).
$$

The final term does not depend on the report, and $(p-q)^2$ is uniquely minimized by $p=q$. This one-line derivation shows strict propriety more clearly than an appeal to reputation. It also shows the penalty for misreporting: the expected excess loss is exactly the squared distance between report and belief.

Brier's 1950 paper presented a multi-category score. For mutually exclusive outcomes $j=1,\ldots,K$, with probabilities $p_j$ and one-hot outcome indicators $o_j$, the quadratic loss is often written

$$
L_{\mathrm{quad}}(\mathbf p,\mathbf o)=\sum_{j=1}^{K}(p_j-o_j)^2.
$$

For a two-category forecast this full-vector expression equals $2(p-y)^2$. Modern binary applications commonly report only $(p-y)^2$, bounded from zero to one. Both conventions are legitimate, but their numerical values differ by a factor of two. A political-market study must state which it uses before comparing published score tables.

Quadratic loss is intuitive and bounded. A forecast of $0.7$ receives loss $0.09$ if yes occurs and $0.49$ if no occurs. Moving from $0.6$ to $0.7$ matters, but a failed $0.99$ forecast cannot create an infinite penalty. This robustness makes Brier loss attractive when market observations may hit exchange-imposed ticks such as one cent or 99 cents. Its limitation is the same boundedness: if catastrophic overconfidence is central to the research question, it penalizes the tail less aggressively than logarithmic loss.

## Logarithmic loss

The binary logarithmic loss is

$$
L_{\log}(p,y)=-\big[y\log p+(1-y)\log(1-p)\big].
$$

For multiple mutually exclusive outcomes it is $-\log p_y$, the negative logarithm of the probability assigned to the outcome that occurred. I. J. Good's 1952 discussion connected this form to rational probability reporting and information. Its expected value under belief $q$ is cross-entropy:

$$
\mathbb E_q[L_{\log}(p,Y)] = -q\log p-(1-q)\log(1-p).
$$

Subtracting the expected loss of the truthful report gives the Kullback–Leibler divergence

$$
D_{\mathrm{KL}}(q\Vert p)
=q\log\frac{q}{p}+(1-q)\log\frac{1-q}{1-p}\geq 0,
$$

with equality only when $p=q$. Thus log loss is strictly proper. Its information-theoretic interpretation is useful: it rewards the probability assigned to the realized outcome and treats confident surprise as especially costly.

That sensitivity is both virtue and hazard for political markets. A forecast of zero for an event that occurs receives infinite loss. A displayed zero can arise not from literal certainty but from tick size, an empty order book, rounding, a stale interface value, or an analyst converting “no ask” into zero. Arbitrary clipping to $0.01$ and $0.99$ prevents infinities but changes the scoring procedure and can determine the ranking. If clipping is necessary, the threshold must be fixed prospectively and sensitivity results should be reported. If the market supports only an executable probability interval, preserve that interval and either apply a preregistered set-valued evaluation method or exclude the observation from point-score comparisons; an interval does not acquire an ordinary Brier or log score by itself.

The base of the logarithm changes the unit, not the ranking: natural logs yield nats and base-two logs yield bits. A study should still state the choice so its magnitudes are reproducible.

## Why strict propriety does not select one universal score

Strict propriety defines a family, not a unique metric. Gneiting and Raftery's general treatment relates proper scores to convex functions, entropies, and divergences. Different members emphasize different errors. Brier loss measures squared probability distance. Log loss measures relative information loss and reacts sharply near zero. Other scores are useful for ordered categories, full distributions, or continuous outcomes. Choosing among them is part of defining the forecasting task.

This creates a ranking risk. Two forecast systems can switch places under Brier and log loss because one is usually modestly accurate while the other is sharper but occasionally disastrously wrong. That is not evidence that proper scoring rules failed. It means “better” was underspecified. A responsible political-market comparison should name a primary score before observing outcomes and report at least one complementary strictly proper score when tail behavior matters.

Scoring must also be distinguished from decision value. A user choosing whether to insure against a rare policy outcome may care far more about that tail than an unweighted average Brier loss does. Proper scores evaluate distributions without adopting one user's action and utility function; they do not guarantee that the highest-scoring forecast creates the best decision for every user. When costs are asymmetric, researchers can supplement proper scores with an explicit decision analysis while keeping the forecast evaluation itself coherent.

Nor is a zero-one accuracy score proper for probability elicitation. If a forecaster earns one point whenever the more likely class is correct, every report above $0.5$ produces the same decision for a predicted yes. Someone who believes $0.51$ has no scoring reason to distinguish it from $0.99$. Classification accuracy discards the uncertainty that prediction markets are meant to express.

## Market scoring rules are mechanisms, not report cards

The phrase **market scoring rule** refers to a market design built from a scoring rule. In Hanson's construction, the market stores a current probability vector. A trader changes it from $\mathbf p$ to $\mathbf q$ and receives, after outcome $i$, the difference

$$
S(\mathbf q,i)-S(\mathbf p,i).
$$

Successive trades telescope: the sponsor's total liability depends on the difference between the final and initial score rather than on how many traders participated. A trader pays implicitly for moving the public state and earns if the new state assigns the realized outcome a better score. This gives even a thin market a standing counterparty.

The logarithmic market scoring rule, or LMSR, is commonly represented through outstanding share quantities $q_i$ and a convex cost function

$$
C(\mathbf q)=b\log\left(\sum_i e^{q_i/b}\right),
$$

where $b>0$ is a liquidity parameter. The instantaneous price of outcome $i$ is the derivative

$$
p_i=\frac{\partial C}{\partial q_i}
=\frac{e^{q_i/b}}{\sum_j e^{q_j/b}}.
$$

These prices are nonnegative and sum to one. A trader moving the share vector from $\mathbf q$ to $\mathbf q'$ pays $C(\mathbf q')-C(\mathbf q)$. Larger $b$ makes prices less sensitive to a given order and increases the market maker's worst-case subsidy. For $K$ mutually exclusive outcomes, standard LMSR worst-case loss is bounded by $b\log K$ relative to the initial symmetric state.

This mechanism should not be projected onto every political venue. A central limit order book with bids and asks is not automatically an LMSR. Its displayed midpoint is not the output of the cost function above. Even when a platform uses an automated market maker, the exact invariant and fee design may differ. The scoring-rule literature explains one way to sponsor continuous information aggregation; it does not license analysts to ignore the actual venue's order book, rules, or collateral architecture.

Even under LMSR, current prices are not guaranteed to equal omniscient probabilities. The mechanism provides incentives and liquidity under a model. Traders can be budget constrained, risk averse, correlated, strategically delayed, uninformed, or unable to participate. The outcome can also depend on traders' actions. The formal price is coherent across listed mutually exclusive outcomes, but empirical forecast quality remains a question for archived data.

## Applying scores to political market forecasts

The unit of analysis should be a frozen forecast record, not a remembered chart. Before resolution, store the contract identifier, exact wording, resolution authority, outcome set, venue, timestamp, bid and ask, depth, fees, and the rule used to select a point probability. A last trade, midpoint, executable buy price, and executable sell price are different observations. [[Bid-ask spreads as probability uncertainty]] explains why a wide market may justify a range rather than a point.

Choose forecast horizons prospectively. Closing prices usually incorporate more information than prices six months before an election. Scoring one venue at closing and another thirty days out tests different tasks. For repeated snapshots of the same contract, do not pretend each hour is an independent political event. Scores can be averaged across a fixed horizon such as 180, 90, 30, 7, and 1 day before resolution, with uncertainty clustered by underlying event or contract family.

Match the outcome to the contract, not to the researcher's paraphrase. A market on which party's candidate is inaugurated is not necessarily identical to one on which candidate wins the most electoral votes. A cabinet-confirmation contract may settle by a deadline even if confirmation occurs later. If two instruments resolve on different propositions, scoring them against one generic label creates measurement error rather than a fair forecast comparison.

Define the sample before inspecting winners and losers. Political venues select salient, tradable, and resolvable questions; they do not list a random sample of politics. Excluding voided, disputed, delisted, or illiquid contracts after the fact can manufacture impressive results. Preserve those states in the ledger. They may not receive an ordinary Brier or log score, because there is no binary resolved outcome, but their frequency is part of evaluating the venue as a forecasting instrument.

Use the same information cutoff for comparators. A market observed after a debate cannot be fairly compared with a model frozen before it. Conversely, if the research question is update speed, the time mismatch is the object of study and should be explicit. Poll margins must first be converted by a documented model into probabilities of the same event; raw vote share and event probability are not interchangeable.

Report uncertainty around average scores. Election outcomes share national shocks, and related nomination, chamber, and policy contracts are correlated. Thousands of minute-level quotes do not create thousands of independent tests. Event-level bootstrap intervals or cluster-robust procedures are more defensible than standard errors that treat every snapshot as independent. Small samples may be too weak to rank two systems even if one sample mean is lower.

Finally, compare against useful baselines. For binary events, climatological or base-rate forecasts show whether a sophisticated system adds resolution. A constant $0.5$ forecast is a simple benchmark but can be inappropriate when the listed-event sample is heavily selected. Skill scores must name their reference forecast; a statement that a market has “positive skill” is incomplete without it.

## Scores, calibration, and decomposition

[[Prediction-market calibration]] asks whether events quoted around $p$ occur about a fraction $p$ of the time. Proper scores ask how much probability was assigned to what occurred. The questions overlap but are not identical. A constant forecast can be calibrated in aggregate yet have little discriminatory value. A system can rank risks well but be systematically overconfident. Average proper loss combines aspects of reliability and informativeness into one number, while calibration plots and decompositions help diagnose why that number changed.

This is why score tables should travel with reliability diagrams, horizon strata, and liquidity strata. If log loss worsens because two one-cent long shots won, inspect whether those observations were executable beliefs or artifacts of empty books. If Brier loss improves only at one-day horizons, do not generalize to long-range election forecasting. If a market beats a model only on contracts that the venue chose after news had largely resolved uncertainty, selection—not aggregation—may explain the result.

No proper score can identify causal information aggregation by itself. A low loss may reflect public polls, shared models, insider information, favorable question selection, late observation times, or true synthesis of dispersed signals. Establishing aggregation requires a design that examines information arrival, participant incentives, or comparative response, not merely an ex post leaderboard.

## Why it matters: a defensible Rome scoring protocol

For political prediction-market research, a minimal protocol is:

1. preregister the contract universe, horizons, extraction rule, exclusions, and primary score;
2. archive the full semantic and microstructure record before outcomes;
3. use binary Brier loss as an interpretable primary metric and log loss as a tail-sensitive complement, unless the research question justifies another choice;
4. state scaling, sign, logarithm base, and any probability clipping;
5. score only the contract's actual resolution label, while reporting voids and disputes separately;
6. match comparator information cutoffs and event definitions;
7. cluster uncertainty by event family and show results by horizon, domain, spread, and depth;
8. publish calibration diagnostics and baselines beside aggregate score differences.

This protocol will not turn market prices into truth. It makes the evaluation claim inspectable. The strongest conclusion usually has a bounded form: within a prespecified political contract family, at stated horizons and liquidity thresholds, one archived forecast process achieved lower average proper loss than a named comparator. That is more useful than declaring that “markets are accurate,” because it tells a future researcher exactly what evidence can be replicated, extended, or overturned.

## Sources

- Glenn W. Brier, [“Verification of Forecasts Expressed in Terms of Probability”](https://journals.ametsoc.org/doi/10.1175/1520-0493%281950%29078%3C0001%3AVOFEIT%3E2.0.CO%3B2), *Monthly Weather Review* 78(1), 1950, pp. 1–3 — original multi-category quadratic score; accessed July 9, 2026.
- I. J. Good, [“Rational Decisions”](https://academic.oup.com/jrsssb/article/14/1/107/7026642), *Journal of the Royal Statistical Society, Series B* 14(1), 1952, pp. 107–114, DOI 10.1111/j.2517-6161.1952.tb00104.x — probability elicitation and logarithmic reward; accessed July 9, 2026.
- Tilmann Gneiting and Adrian E. Raftery, [“Strictly Proper Scoring Rules, Prediction, and Estimation”](https://doi.org/10.1198/016214506000001437), *Journal of the American Statistical Association* 102(477), 2007, pp. 359–378 — general definitions, representations, entropy, divergence, and examples; accessed July 9, 2026.
- Robin Hanson, [“Combinatorial Information Market Design”](https://doi.org/10.1023/A:1022058209073), *Information Systems Frontiers* 5(1), 2003, pp. 107–119 — market scoring rules, automated market making, and combinatorial design; accessed July 9, 2026.
- Robin Hanson, [“Logarithmic Market Scoring Rules for Modular Combinatorial Information Aggregation”](https://hanson.gmu.edu/mktscore.pdf), manuscript dated January 2002 — direct derivation and modularity properties of logarithmic market scoring rules; accessed July 9, 2026.

## Open questions

- Should Rome's empirical ledger use Brier loss as the preregistered primary score and log loss only as a sensitivity analysis, or should high-stakes tail errors make log loss primary?
- How should an interval forecast derived from a bid-ask spread be scored without selecting a midpoint after the outcome is known?
- What event-family clustering scheme best handles linked candidate, party-control, and policy contracts without discarding informative horizons?
- How should voided and disputed contracts enter an overall assessment of a venue when ordinary proper scores require a realized outcome?
