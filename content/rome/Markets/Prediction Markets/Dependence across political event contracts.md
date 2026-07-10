---
title: Dependence across political event contracts
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, political-forecasting, dependence, joint-probability, scoring-rules]
as_of: 2026-07-10
desk: Political prediction markets
review_after: 2026-07-17
---
Dependence is the information contained in how political outcomes move and resolve together; marginal contract probabilities alone neither identify that structure nor support portfolio-level forecasts or scores.

Up: [[Political prediction markets]]

Related: [[Logical coherence across prediction markets]] · [[Conditional political probabilities]] · [[Prediction-market calibration]] · [[Proper scoring rules and market forecasts]]

Political event contracts rarely describe isolated coin flips. A presidential result moves expectations for chamber control, appointments, legislation, turnout, and state outcomes. A nomination is often—but not always—a prerequisite for winning office. Candidate contracts within one contest are mutually exclusive. Repeated snapshots of one race share both an eventual outcome and most of their information. Prices can therefore be individually plausible while saying very little about the joint distribution a researcher needs.

That distinction is easy to miss. A contract priced near $0.60$ identifies, at most, a marginal probability for its own rule-defined event. Another priced near $0.50$ identifies another marginal. The two numbers do not reveal whether the events are independent, positively associated, mutually exclusive, nested, or connected only through an adjudication rule. Dependence is not a correction pasted onto probabilities after extraction. It is part of the forecast object.

This note develops the layer beyond [[Logical coherence across prediction markets]]. Coherence asks whether some joint distribution could generate all quoted probabilities. Dependence asks which joint distributions remain possible, what additional contracts reveal, and how a political forecast family should be evaluated as a portfolio. The objective is auditable research, not trading advice.

## Marginals leave the joint event unidentified

Let $A$ be “Party D controls the House” and $B$ be “Party D controls the Senate.” Suppose a synchronized, semantically matched forecast assigns

$$
P(A)=0.60,\qquad P(B)=0.50.
$$

Write $x=P(A\cap B)$. The complete two-event distribution is then forced to have cells

$$
P(A\cap B)=x,
$$

$$
P(A\cap B^c)=0.60-x,
$$

$$
P(A^c\cap B)=0.50-x,
$$

$$
P(A^c\cap B^c)=x-0.10.
$$

Nonnegativity gives the Fréchet–Hoeffding bounds

$$
0.10\le x\le 0.50.
$$

Every value in that interval is compatible with the same marginals. At $x=0.30$, the events are independent because $0.60\times0.50=0.30$. At $x=0.50$, every Senate-control state is also a House-control state. At $x=0.10$, the events overlap as little as their marginals permit. Thus “60% House and 50% Senate” does not determine the chance of a sweep: it permits anything from 10% to 50%.

Covariance makes the missing quantity explicit:

$$
\operatorname{Cov}(1_A,1_B)=x-P(A)P(B)=x-0.30.
$$

The possible covariance range here is $[-0.20,0.20]$. The corresponding Bernoulli correlation divides by

$$
\sqrt{0.60(0.40)0.50(0.50)}=\sqrt{0.06}\approx0.24495,
$$

so its feasible range is approximately $[-0.816,0.816]$. Those endpoints are not universal; Bernoulli correlations are constrained by the marginals. Reporting an unconstrained correlation matrix without checking whether a binary joint distribution realizes it can create a second kind of incoherence.

Independence is therefore a substantive forecast, not a neutral default. National mood, turnout composition, candidate quality, scandals, court decisions, and macroeconomic news commonly create positive cross-race dependence. Mutually exclusive candidate outcomes create negative dependence. Geographic and institutional relationships may generate mixtures that a single pairwise correlation cannot summarize.

## Semantic nesting is stronger than correlation

If the payoff rules make $A$ a subset of $B$, then $A\cap B=A$ and

$$
P(A)\le P(B),\qquad P(B\mid A)=1.
$$

This is logical dependence, not merely strong positive association. A clean example would be a contract on “Candidate X wins the general election as the Party Y nominee” nested inside a matched contract on “Candidate X is the Party Y nominee,” provided the general-election rule cannot pay Yes through a write-in, replacement, party switch, or differently timed criterion. Under genuine nesting, a separate joint contract on $A\cap B$ duplicates $A$.

Political language often suggests nesting where the specifications do not establish it. “Wins the election,” “is elected,” “is certified,” “takes office,” and “serves as president” can refer to different terminal acts. “Party controls the House” may depend on sworn members at a deadline, while “wins the most seats” may use called races. Death, withdrawal, replacement, ties, vacancies, independents, coalition organization, delayed contests, recounts, and void rules create states that break ordinary-language implication.

The correct test is a state table, not a title comparison. For each admissible terminal state, record the payout of every contract—including refunds or scalar payouts. Only if $1_A(\omega)\le1_B(\omega)$ for every state $\omega$ does semantic nesting justify the probability inequality. A semantic graph should therefore store a reason for each edge: identical proposition, complement, subset, disjointness, exhaustive partition, or merely hypothesized empirical association. Only the first five generate hard coherence constraints.

Resolution dependence deserves its own field. Two contracts can be economically or politically close yet depend on different source hierarchies. Conversely, several contracts may share one official source and become jointly exposed to its delay, revision, or classification. That common adjudication channel is dependence in the observed labels even when the underlying political facts are conceptually separate.

## Joint contracts identify otherwise invisible structure

A contract paying one dollar on $A\cap B$ reveals a joint expectation directly, subject to the same price-extraction cautions as any other market. Combined with the marginals, it fills all four cells above. One can then derive conditionals when denominators are positive:

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)},\qquad
P(B\mid A)=\frac{P(A\cap B)}{P(A)}.
$$

If the example's joint probability were $0.40$, then $P(A\mid B)=0.40/0.50=0.80$ and $P(B\mid A)=0.40/0.60=2/3$. Covariance would be $0.10$ and correlation approximately $0.408$. These calculations describe the implied joint distribution; they do not explain its causal source.

Conditional market design can supply similar information, but the payout must be read literally. A security that pays one dollar when $A\cap B$ occurs and zero otherwise is a joint claim. A security that refunds its purchase price or cancels when $B$ fails is a contingent claim whose observed price may elicit a conditional belief under a particular mechanism. A question that resolves a counterfactual—what would happen if $B$ occurred—defines still another object. Dividing a contract labeled “A if B” by a marginal for $B$ is valid only when the state-contingent cash flows implement the relevant probability identity.

The denominator also controls identification. Even perfectly matched point probabilities produce an unstable ratio when $P(B)$ is small. With intervals $J=[j_L,j_U]$ for $P(A\cap B)$ and $M=[m_L,m_U]$ for $P(B)$, positive endpoints give the conservative ratio range

$$
\left[\frac{j_L}{m_U},\frac{j_U}{m_L}\right],
$$

subject to $P(A\cap B)\le P(B)$ and joint feasibility. This interval can be wide even when both books look narrow in cents. [[Conditional political probabilities]] treats the extraction problem in detail; the dependence lesson is that conditionals cannot be reconstructed from unrelated labels or from a marginal pair alone.

## Pairwise coherence does not guarantee a coherent family

For three or more events, checking every pair is insufficient. A collection can satisfy all pairwise Fréchet bounds while failing to admit one distribution over all terminal states. The general test defines state probabilities $q_\omega\ge0$, requires $\sum_\omega q_\omega=1$, and matches each security price to its expected payoff. Feasibility means at least one common joint law exists.

This state-space view handles partitions, nesting, and arbitrary Boolean combinations in one model. Each terminal state produces a payoff vector. Coherent price vectors lie in the convex hull of those state vectors. Work on combinatorial prediction markets by Chen, Fortnow, Lambert, Pennock, and Wortman shows how the same logic becomes an integer-programming problem when feasible outcomes have compact combinatorial descriptions. Dudík, Lahaie, and Pennock show how constraint generation can enforce coherence without enumerating every outcome at the start.

Real order books replace point equalities with direction-specific intervals. Kalshi's official API documentation says its binary order book returns Yes bids and No bids, with a Yes bid at $x$ equivalent to a No ask at $1-x$. Consequently, a research dataset must reconstruct the appropriate bid or ask rather than mistake two displayed bids for complementary probabilities. Depth, fees, asynchronous timestamps, and settlement terms can make a midpoint vector infeasible without creating an executable portfolio.

When a coherent joint distribution is not unique, report the identified set. For any target event $T$, minimize and maximize $P(T)$ over all state distributions consistent with the semantic constraints and quote intervals. The result is a defensible bound. Selecting the independence solution because it is convenient discards real political uncertainty.

## Common shocks and repeated forecasts

Dependence also changes empirical evidence. Suppose a study records 100 state-level presidential markets. Treating them as 100 independent elections ignores common national shocks and the electoral structure. Recording each market hourly makes the problem worse: thousands of rows may still resolve through one election and one outcome per state.

The observational unit must match the claim. If the question is forecast accuracy at 30 days, freeze one observation per contract at that horizon. If comparing systems across many races, preserve matched pairs and cluster uncertainty at a level that contains their shared shock—often contest, election, or cycle. A cluster label is not magic: with few independent cycles, precise asymptotic standard errors remain unconvincing. Results should state the number of clusters, not only the number of quotes.

Candidate contracts in one exhaustive contest should be scored as one multicategory forecast, not as many unrelated binary predictions. Chamber and presidency contracts may require a multivariate outcome vector. Repeated horizons can be useful for studying learning, but their losses form a time series and should not be averaged as independent replications. Dependence affects uncertainty about comparative performance even when the mean score formula is unchanged.

There is a second, informational dependence. Traders, polls, models, news accounts, and venues may reuse the same upstream evidence. Agreement among five market prices does not equal five independent confirmations. A research ledger should distinguish outcome dependence, temporal dependence, shared-data dependence, common-participant dependence, and resolution-source dependence. None can usually be inferred from prices alone.

## Portfolio-level scoring tests the joint forecast

Marginal Brier scores cannot tell whether a forecaster learned dependence. Consider two systems that both forecast $P(A)=0.60$ and $P(B)=0.50$. One assigns $P(A\cap B)=0.40$; the other assigns $0.20$. They receive identical sums of binary Brier losses for $A$ and $B$ on every realization because their marginals match. Yet their sweep forecasts differ by twenty percentage points.

To evaluate the full claim, score the joint distribution over the four cells. The multicategory logarithmic loss is

$$
L_{\log}(q,\omega)=-\log q_\omega,
$$

and the multicategory Brier loss is

$$
L_{\mathrm{Brier}}(q,\omega)=\sum_{s\in\Omega}(q_s-1\{s=\omega\})^2.
$$

Both are proper for a reported categorical joint distribution. They reward the probabilities assigned to complete outcomes, so two systems with equal marginals but different dependence can receive different scores. Log loss is especially sensitive to assigning tiny probability to the realized joint state and therefore requires a prospective policy for zeros, ticks, and missing books.

For high-dimensional binary portfolios, the full table has $2^n$ cells and may be impossible to elicit reliably. Pairwise composite scores can evaluate selected joints, but they no longer test every higher-order interaction. Multivariate scoring-rule research also warns that some popular scores have weak power to distinguish dependence structures. Scheuerer and Hamill introduced the variogram score specifically to emphasize pairwise differences in multivariate outcomes; its weights must be chosen before seeing results. The broader rule is to align the score with the forecast actually reported: marginal prices get marginal scores, a joint scenario distribution gets a joint proper score, and a collection of conditional claims needs a scoring design consistent with its conditioning protocol.

Coherence projection should be scored separately from raw forecasts. If an analyst transforms inconsistent marginals into a joint law, the method, objective, weights, and timing become part of a derived forecasting system. Silently projecting after outcomes are known leaks information and erases evidence about the original market family.

## Why it matters

A dependence-aware political-market record should preserve more than one probability column. For every contract family it should:

1. version the exact propositions, resolution sources, deadlines, and exceptional states;
2. encode proven logical relations separately from estimated empirical associations;
3. freeze synchronized executable quote intervals and depth;
4. represent each contract as a payoff over admissible terminal states;
5. test global feasibility rather than only pairwise inequalities;
6. report bounds when the joint law is underidentified;
7. score joint forecasts at the portfolio level when a joint distribution is actually available; and
8. cluster empirical uncertainty by defensible event families and election cycles.

This discipline prevents three common overclaims. Marginal agreement is not evidence of independence. Semantic similarity is not logical nesting. A large row count is not a large number of independent forecast trials. Dependence-aware analysis produces fewer effortless summary numbers, but the remaining statements mean what they claim to mean.

## Sources

- Bruno de Finetti, [“Foresight: Its Logical Laws, Its Subjective Sources”](https://doi.org/10.1007/978-1-4612-0919-5_10), English translation reprinted in Henry E. Kyburg Jr. and Howard E. Smokler (eds.), *Studies in Subjective Probability* (Springer edition, 1992), pp. 134–174 — foundational coherence and subjective-probability argument; accessed July 10, 2026.
- Roger B. Nelsen, [*An Introduction to Copulas*, second edition](https://doi.org/10.1007/0-387-28678-0), Springer, 2006 — authoritative treatment of Fréchet–Hoeffding bounds and dependence with fixed marginals; accessed July 10, 2026.
- Yiling Chen, Lance Fortnow, Nicolas Lambert, David M. Pennock, and Jennifer Wortman, [“Complexity of Combinatorial Market Makers”](https://doi.org/10.1145/1386790.1386822), *Proceedings of the 9th ACM Conference on Electronic Commerce (EC '08)*, 2008, pp. 190–199 — original computational treatment of combinatorial market-maker pricing; accessed July 10, 2026.
- Miroslav Dudík, Sébastien Lahaie, and David M. Pennock, [“A Tractable Combinatorial Market Maker Using Constraint Generation”](https://doi.org/10.1145/2229012.2229047), *Proceedings of the 13th ACM Conference on Electronic Commerce (EC '12)*, 2012, pp. 459–476 — original constraint-generation mechanism for logically related outcomes; accessed July 10, 2026.
- Tilmann Gneiting and Adrian E. Raftery, [“Strictly Proper Scoring Rules, Prediction, and Estimation”](https://doi.org/10.1198/016214506000001437), *Journal of the American Statistical Association* 102(477), 2007, pp. 359–378 — general theory of proper scores for distributions; accessed July 10, 2026.
- Michael Scheuerer and Thomas M. Hamill, [“Variogram-Based Proper Scoring Rules for Probabilistic Forecasts of Multivariate Quantities”](https://doi.org/10.1175/MWR-D-14-00269.1), *Monthly Weather Review* 143(4), 2015, pp. 1321–1334 — original multivariate score designed to discriminate dependence structure; accessed July 10, 2026.
- Kalshi, [“Get Market Orderbook”](https://docs.kalshi.com/api-reference/market/get-market-orderbook), official API documentation — binary Yes/No bid representation and complement conversion; accessed July 10, 2026.

## Open questions

- Which political contract families are rich enough to identify useful dependence rather than merely bound it?
- What is the smallest state ontology that preserves replacement, tie, certification, vacancy, and void states without becoming computationally unusable?
- Should Rome's portfolio score use a full categorical log score, a multicategory Brier score, or a prospectively weighted composite when the joint state space is sparse?
- How many election cycles are needed before dependence-aware comparisons between venues support more than descriptive conclusions?
