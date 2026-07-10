---
title: Contract-set coherence diagnostics
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, politics, forecasting, quantitative-research, market-microstructure]
as_of: 2026-07-10
desk: Political prediction markets
review_after: 2026-07-17
---

Contract-set coherence diagnostics test whether synchronized, rule-aligned political contracts admit one common probability model; they identify semantic or statistical contradictions without mistaking stale, shallow, or non-executable quotes for arbitrage.

Up: [[Political prediction markets]]

Related: [[Logical coherence across prediction markets]] · [[Political prediction-market contract families]] · [[Conditional political probabilities]] · [[Dependence across political event contracts]] · [[Fees and executable probability intervals]]

## What a diagnostic should establish

A coherence diagnostic is a reproducible claim about a **set** of contracts at a specified time. It asks whether one probability distribution over the contracts' rule-defined terminal states could produce all the quoted values or intervals. It does not ask whether an individual price is accurate, whether a trader can profit, or whether the contracts will resolve correctly. Those are separate questions about calibration, execution, and adjudication.

The distinction is essential in political markets. A dashboard can display mutually exclusive candidates, a candidate's nomination and election contracts, party-control markets, and state-contingent policy markets as if they were comparable percentages. Yet each may use a different deadline, resolution authority, void rule, outcome universe, or price convention. Even aligned contracts can be observed at different times or at negligible size. Arithmetic performed before those differences are recorded creates a polished but unauditable result.

The unit of analysis should therefore be a versioned snapshot:

$$
D=(C,R,T,Q,S,F,X),
$$

where $C$ is the contract set, $R$ the frozen rules and identifiers, $T$ the observation window, $Q$ the bids and asks, $S$ the available sizes, $F$ the applicable fees and financing assumptions, and $X$ the state-to-payout matrix. The result is valid only for that object. A later rule clarification, added candidate, shifted book, or changed fee schedule creates a new diagnostic.

This page is the operational companion to [[Logical coherence across prediction markets]], which owns the general probability logic and interpretation. Its independent contribution is a reproducible diagnostic protocol: relation manifests, state-to-payout matrices, interval witnesses or infeasibility certificates, minimal conflicting subsets, controlled classifications, and execution evidence. It does not re-establish the canonical note's conceptual case; it specifies what an analyst must freeze, solve, save, and report so another researcher can rerun a contract-set finding.

The reproducible output should answer four questions in order:

1. **Semantic validity:** do the rules prove the claimed relationship—partition, implication, conjunction, or overlap?
2. **Probability feasibility:** does at least one joint distribution satisfy that relationship and fit the quoted point values or intervals?
3. **Execution relevance:** if the probability model is infeasible, is any direction-specific portfolio simultaneously executable at stated size after costs and constraints?
4. **Classification:** is the finding coherent, point-incoherent only, interval-infeasible, semantically unresolved, or execution-tested?

Only the third question can support even a carefully qualified arbitrage discussion. A failed midpoint test alone cannot.

## Build the state and evidence tables first

Begin with a contract ledger, one row per immutable contract version. Store venue, permanent identifier, title, rules URL or archived text, creation and close times, resolution source, payout unit, Yes/No/void treatment, replacement and postponement rules, group identifier, outcome label, and whether the venue provides complete-set conversion. Preserve the retrieval timestamp and a content hash or archived copy of the rules. [[Versioning political event-contract semantics]] explains why a title is not an identity.

Then build an event-relation table. Every asserted relation needs a type and a reason:

| Relation | Formal claim | Required evidence |
| --- | --- | --- |
| Partition | exactly one of $E_1,\ldots,E_k$ pays in every state | common group rules, exhaustive residual treatment, identical void behavior |
| Disjoint | $E_i\cap E_j=\varnothing$ | rules exclude co-resolution, not merely ordinary political expectations |
| Nested | $A\subseteq B$ | no admissible state makes $A$ pay while $B$ does not |
| Joint | claim pays $1$ exactly on $A\cap B$ | complete payout tree, including void and refund states |
| Conditional | payoff elicits $A$ within branch $B$ | branch-selection and cancellation mechanism, not the word “if” |
| Overlap | $A$ and $B$ may co-occur | explicit joint states or a logical state construction |

Finally enumerate terminal states $\omega_1,\ldots,\omega_m$ and form a payout matrix $X$, where $x_{ij}$ is contract $i$'s terminal cash payoff in state $j$. Do not force every payoff to zero or one if the venue can refund, split, settle at an intermediate value, or treat invalidity differently across legs. The state set need not reproduce every detail of political reality; it must distinguish every reality that changes at least one payout.

For point estimates $p_i$, coherence is the linear-feasibility problem

$$
q_j\ge0,\qquad \sum_j q_j=1,\qquad p_i=\sum_j x_{ij}q_j\quad\text{for every }i.
$$

For research intervals $[L_i,U_i]$, replace the last equality with

$$
L_i\le \sum_j x_{ij}q_j\le U_i.
$$

These intervals may be executable bid-ask bounds, fee-adjusted probability-equivalent bounds, or uncertainty bands from a documented estimation method. They must not be mixed without labeling. A solver's feasible/infeasible response, its version, inputs, tolerances, and the smallest identified conflicting subset should be retained. This makes the result rerunnable instead of dependent on a screenshot or analyst intuition.

## Diagnostic 1: mutually exclusive and exhaustive sets

Candidate-winner families are the familiar case, but the arithmetic is valid only after proving both exclusivity and exhaustiveness. For precise probabilities on a genuine partition $E_1,\ldots,E_k$,

$$
P(E_i)\ge0,\qquad \sum_{i=1}^kP(E_i)=1.
$$

The first reproducible test is structural. Construct a state coverage table whose rows are plausible terminal cases—each named candidate wins, an unlisted candidate wins, a replacement wins, no result is certified by the deadline, the event is canceled, and the resolution source becomes unavailable. Each row should map to exactly one unit payout if the family is a partition. Zero winners indicate a missing outcome or common refund state; multiple winners indicate overlap or inconsistent rules. A common refund can preserve a known portfolio value, but only if every leg refunds identically.

The second test uses price intervals. If each probability may lie in $[L_i,U_i]$, a necessary and sufficient condition for fitting a simple partition is

$$
\sum_iL_i\le1\le\sum_iU_i.
$$

This is more informative than summing midpoints. Suppose three synchronized bid-ask-derived intervals are $[0.38,0.42]$, $[0.32,0.37]$, and $[0.18,0.24]$. Their midpoint sum is $0.955$, but the interval sums range from $0.88$ to $1.03$, so coherent probabilities exist. The diagnostic is “partition feasible, weakly identified,” not “4.5-point underround.”

If the interval condition fails, report the direction and magnitude. But execution requires another calculation. To test buying a complete set at size $z$, walk the **asks** for every leg through $z$ units, add trading and conversion costs, and verify that the portfolio's terminal payout is the same in every state. The maximum common size is constrained by the shallowest leg. To test selling, use **bids** and verify that selling, minting, or negative-risk conversion is actually permitted. Polymarket's official negative-risk documentation makes this venue-specific: a No share can be converted into Yes shares in every other outcome, while augmented negative risk uses placeholders and an Other whose definition narrows when placeholders are named. The outcome universe and mechanism version must therefore be stored with the snapshot.

Never turn a sum of stale last trades into an arbitrage label. Last trades may have occurred hours apart, at different sizes, before a candidate entered, or under a prior meaning of Other. At most they support a historical point-coherence test with explicit timestamps.

## Diagnostic 2: nested political events

If $A$ implies $B$ under every rule-consistent state, then

$$
P(A)\le P(B).
$$

Examples often proposed as nested include “Candidate X wins the presidency” inside “Candidate X is the party nominee,” or “Party Y wins both chambers” inside “Party Y wins the Senate.” Ordinary political language is insufficient. A write-in victory, replacement nomination, different party-label rule, tie, post-election switch, or mismatched deadline can produce $A$ without $B$.

The reproducible proof is a counterexample search. Merge the two rulebooks into a state table and ask whether any admissible row has $x_A=1$ and $x_B=0$. If one exists, the hard nesting edge must be rejected or narrowed. Record the counterexample even if it seems unlikely; logical coherence concerns possibility under the contract, not empirical plausibility.

For point probabilities, flag $p_A>p_B$. For intervals, a hard contradiction exists only if

$$
L_A>U_B.
$$

If midpoint $m_A$ exceeds $m_B$ while the intervals overlap, classify the point summary as monotonicity-violating but the interval system as feasible. The amount $\max(0,L_A-U_B)$ is a useful interval violation margin. It is a diagnostic distance, not a guaranteed return.

A direction-specific execution check uses the payoff dominance $1_B-1_A\ge0$: acquire the broad claim $B$ and take the economically opposite position in the narrow claim $A$. Whether that opposite position can be created depends on the venue's complement structure and collateral rules. Kalshi's official order-book documentation, for example, returns Yes and No bids and explains that a Yes bid at $x$ corresponds to a No ask at $1-x$; an analyst must reconstruct the actual side needed rather than treat displayed bids as symmetric point prices. Apply depth, fees, different settlement dates, and void cash flows before describing the portfolio. If contracts sit on different venues, legal access, transfer latency, separate collateral, and adjudication basis remain residual risks.

## Diagnostic 3: joint and conditional sets

For ordinary events $A$ and $B$, a joint probability $j=P(A\cap B)$ must obey the Fréchet bounds

$$
\max(0,P(A)+P(B)-1)\le j\le\min(P(A),P(B)).
$$

These bounds require no independence assumption. They are the correct first check for a market on “both” alongside two marginals. With point values $P(A)=0.62$, $P(B)=0.55$, the joint must lie in $[0.17,0.55]$. A joint quote of $0.40$ is coherent; it reveals neither independence nor a uniquely identified correlation.

Intervals should be tested by the full state-feasibility program, not by independently plugging favorable endpoints into each inequality. The same latent probabilities must satisfy every restriction simultaneously. For the two-event case, use four states: $A\cap B$, $A\cap\neg B$, $\neg A\cap B$, and $\neg A\cap\neg B$. Add a fifth or more if void treatment changes a payout. Fit nonnegative state masses to every observed interval and save a feasible witness when one exists.

Conditional labels require a payout audit before arithmetic. An ordinary joint claim is valued as $P(A\cap B)$. A branch-conditional claim might pay one on $A\cap B$, zero on $\neg A\cap B$, and refund when $B$ fails. A counterfactual contract can use an adjudicator's judgment about what would have happened. These are different securities. Only for aligned ordinary probabilities with $P(B)>0$ does

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}
$$

follow directly. Even then, the ratio is a derived belief quantity, not an executable price. Wide books in numerator and denominator produce a wide conditional range, and a small $P(B)$ amplifies error. Across an exhaustive branch partition $B_1,\ldots,B_k$, also test the law of total probability:

$$
P(A)=\sum_iP(A\mid B_i)P(B_i).
$$

Failure may locate a mismatched branch definition or an incoherent fitted table. It does not by itself specify a trade because conditional contracts often cancel in unselected branches and lock collateral differently.

## Diagnostic 4: overlapping and Boolean contract families

Many political events overlap without nesting: a party can win the presidency, win the Senate, and win both; several officials can resign in the same year; multiple policy milestones can occur. Adding their marginal probabilities is meaningless unless the events are disjoint. Pairwise checks are also insufficient for a large family: every pair may satisfy Fréchet bounds while no single joint distribution satisfies all contracts.

The robust method is to encode admissible Boolean assignments. For $n$ binary propositions, begin conceptually with $2^n$ truth assignments, remove assignments forbidden by the rules, and calculate each contract's payoff in every remaining state. A contract on a union pays on states where at least one component is true; a conjunction pays only where all are true; an “exactly one” claim pays where the truth-count equals one. Then solve the same convex-hull feasibility problem.

Full enumeration becomes expensive, so the implementation should preserve a machine-readable constraint layer: implications, exclusions, cardinality rules, and payout formulas. Dudík, Lahaie, and Pennock show how constraint generation can add violated conditions without listing the complete outcome space in advance. Kroer, Dudík, Lahaie, and Balakrishnan formulate arbitrage-free combinatorial market making with integer programming. For an analyst, the practical lesson is not to build an exchange; it is to separate the human semantic map from the solver and to save both. Text similarity or shared candidate names cannot substitute for admissible-state constraints.

When infeasibility appears, identify a minimal or at least small conflicting subset. “The 63-contract election graph is infeasible” is hard to verify. “These four synchronized intervals conflict with these two implication edges and this exhaustive partition” is inspectable. Re-run the subset after widening intervals by tick size and timestamp tolerance. If the finding disappears, report sensitivity rather than a categorical contradiction.

## A reproducible diagnostic pipeline

A practical research pipeline can be implemented in the following order:

1. **Freeze inputs.** Retrieve immutable identifiers, versioned rules, bids, asks, sizes, trades, fee schedules, conversion flags, and exchange timestamps. Define a maximum synchronization window before looking at results.
2. **Normalize payoffs.** Convert cash payouts, refunds, and scalar settlements to a common numeraire and record settlement timing. Do not normalize titles.
3. **Assert relations.** For every partition, exclusion, implication, joint, union, or conditional relation, cite the exact rule clauses and list edge cases.
4. **Generate states.** Enumerate or constrain all payout-distinct terminal states, including Other, replacement, tie, postponement, cancellation, and source failure.
5. **Run point diagnostics.** Test last trades or midpoints only as labeled descriptive series. Preserve their individual timestamps.
6. **Run interval feasibility.** Fit one joint distribution to synchronized executable or explicitly modeled intervals. Save a witness distribution or solver certificate and tolerances.
7. **Localize failure.** Find a small conflicting contract set, test sensitivity to ticks and time windows, and ask whether semantic uncertainty invalidates an asserted edge.
8. **Test execution separately.** Use direction-specific order-book depth, common size, fees, collateral, permitted conversions, settlement delay, access, and partial-fill risk. Never infer this stage from point infeasibility.
9. **Publish a classification.** Use controlled labels: `semantics-unresolved`, `coherent-point`, `coherent-interval`, `point-incoherent-interval-feasible`, `interval-infeasible-not-execution-tested`, or `execution-tested-at-size`.

Each report should include a manifest of contract IDs and rule versions; UTC retrieval times; raw and normalized books; relation and state tables; code or solver version; numerical tolerances; result; sensitivity runs; and a plain-language explanation. Preserve rejected relations. A rejected nesting hypothesis is valuable evidence about contract basis.

Coherent projection may be useful for a visualization, but it must be downstream and labeled. Report the raw vector, the objective function, weights, and projection distance. Normalizing a candidate table to 100% or clipping a nested probability to its parent hides the diagnostic evidence and turns an analyst choice into an apparent market forecast.

## Why it matters

Political prediction markets increasingly appear as families: candidate menus, control scenarios, joint outcomes, and “if” questions. Their informational value depends on whether the family describes one consistent set of possible worlds. Contract-set diagnostics expose when a dashboard combines incompatible semantics, when wide spreads admit many coherent beliefs, and when separately traded claims fail basic probability restrictions.

The discipline also prevents overclaiming. A stale last trade above a related contract is not a free-money opportunity. A midpoint sum below one is not a complete-set trade. An interval contradiction is not executable until sides, depth, fees, conversion rights, settlement, and access are demonstrated. Conversely, treating every inconsistency as noise discards evidence about fragmented liquidity and market design.

The durable standard is: prove the event algebra, freeze the executable evidence, solve feasibility, and only then evaluate a portfolio. That sequence makes coherence research repeatable while keeping logical contradiction, market microstructure, and arbitrage as distinct findings.

## Sources

- Kalshi, [“Get Market Orderbook”](https://docs.kalshi.com/api-reference/market/get-market-orderbook), official API documentation — documents Yes/No bid representation, complementary implied asks, quantities, and requested depth; accessed July 10, 2026.
- Polymarket, [“Negative Risk Markets”](https://docs.polymarket.com/advanced/neg-risk), official documentation — documents multi-outcome conversion, standard and augmented negative risk, placeholders, and changing Other semantics; accessed July 10, 2026.
- Miroslav Dudík, Sébastien Lahaie, and David M. Pennock, [“A Tractable Combinatorial Market Maker Using Constraint Generation”](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/DudikLaPe12.pdf), *Proceedings of the 13th ACM Conference on Electronic Commerce*, 2012, DOI [10.1145/2229012.2229047](https://doi.org/10.1145/2229012.2229047) — original constraint-generation method for logically linked securities.
- Christian Kroer, Miroslav Dudík, Sébastien Lahaie, and Sivaraman Balakrishnan, [“Arbitrage-Free Combinatorial Market Making via Integer Programming”](https://arxiv.org/abs/1606.02825), 2016 — original integer-programming formulation for complex feasible outcome spaces.
- Martina Fedel, Hykel Hosni, and Franco Montagna, [“A logical characterization of coherence for imprecise probabilities”](https://doi.org/10.1016/j.ijar.2011.06.004), *International Journal of Approximate Reasoning* 52(8), 2011, pp. 1147–1170 — finite-event coherence characterization for imprecise probability assessments.
- David M. Rothschild and David M. Pennock, [“The Extent of Price Misalignment in Prediction Markets”](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2441816), 2014 — original field analysis of persistent logical price contradictions and market-design remedies.

## Open questions

- What synchronization window best balances sample retention against false violations during fast political news?
- Which minimal political state ontology captures replacement, certification, tie, vacancy, postponement, and asymmetric void states without becoming unusable?
- How should semantic uncertainty be represented when lawyers or researchers disagree about whether one rule-defined event implies another?
- Which solver certificates and archived market-data fields are sufficient for an independent researcher to reproduce an interval-infeasibility finding years later?
