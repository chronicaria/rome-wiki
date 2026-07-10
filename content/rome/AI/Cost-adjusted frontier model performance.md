---
title: Cost-adjusted frontier model performance
created: 2026-07-10
source: llm
status: seed
tags: [ai, frontier-models, evaluation, economics, inference-time-compute]
as_of: 2026-07-10
desk: AI frontier news
review_after: 2026-10-10
---
Cost-adjusted model evaluation should publish a task-specific quality–resource frontier, not divide one benchmark score by one price and call the resulting ratio a universal ranking.

Up: [[AI agents (MOC)]]

A frontier model can be the most accurate option and still be the wrong deployment choice. A cheaper model may solve the easy majority of a workload; a slower reasoning configuration may be worthwhile only on expensive errors; an ensemble may improve reliability but lose on latency; and an apparently economical API may become costly once retries, tool calls, graders, and long outputs are counted. The phrase **cost-adjusted performance** is useful only when it preserves these choices instead of hiding them in a single league-table number.

The basic object is not a model name. It is an exact model-system configuration evaluated on a specified task distribution under a resource policy. That system includes the prompt, reasoning effort, sampling and stopping rules, tools, router, verifier, retry policy, context management, and provider endpoint. Its cost includes all work used to obtain the submitted answer, including failed or discarded attempts. This extends [[Reasoning budget and fair model comparison]]: that note asks how to match inference budgets fairly; this one asks how to turn the resulting measurements into economic decisions without pretending that dollars, time, reliability, and risk are interchangeable.

## The frontier is a set, not a winner

Suppose configuration $j$ produces expected task quality $q_j$ and consumes resource vector

$$
r_j=(d_j,\ell_j,t_j,e_j,h_j),
$$

where $d$ is monetary cost, $\ell$ latency, $t$ total tokens or compute, $e$ energy when measurable, and $h$ human effort. Configuration $a$ **dominates** $b$ if it provides at least as much quality while using no more of every relevant resource, with one strict improvement. The non-dominated configurations form a Pareto frontier.

That definition refuses to choose an exchange rate the user never supplied. A batch document-classification service may tolerate minutes but care intensely about dollars. An interactive coding assistant may value time-to-first-token and completion latency. A medical or financial workflow may assign a large loss to a confident false answer and demand review even when review costs more than inference. Two buyers can rationally select different points from the same measurements.

A flat metric such as benchmark points per dollar makes three mistakes. First, ratios can behave badly near zero and favor very cheap systems that deliver inadequate absolute quality. Second, a benchmark point need not have constant value: moving from 50% to 51% may be irrelevant while moving from 98% to 99% may halve residual errors. Third, the ratio silently gives dollars infinite priority over latency, reliability, and consequence. A plot of quality against several resource dimensions leaves those tradeoffs visible.

The frontier is also workload-specific. There is no context-free “most cost-efficient model.” A system can lie on the frontier for short factual queries and be dominated on repository-scale coding because output length, tool use, and success probabilities differ. Cost-of-Pass reports that different model classes occupied different cost-efficiency roles across basic quantitative, knowledge-intensive, and complex quantitative tasks. Its broad lesson is more durable than any dated winner: task structure changes which capability is economical.

## Count the cost of an answer, not the sticker price

Provider list prices are inputs to an accounting model, not task costs. A minimal per-attempt bill is

$$
C_{\text{attempt}}=p_iN_i+p_cN_c+p_oN_o+p_rN_r+C_{\text{tools}}+C_{\text{verifier}}+C_{\text{infra}},
$$

where prices and token counts distinguish uncached input, cached input, visible output, and separately charged reasoning tokens when exposed. A task-level total sums every attempt, including candidates that were rejected and calls that produced an unusable answer. Subscription prices, free tiers, batch discounts, minimum charges, and rate limits require separate scenarios rather than being folded into a nominal per-token rate.

Caching illustrates why assumptions matter. A long stable system prompt can make repeated workloads much cheaper, while a unique retrieved context cannot be assumed to hit a cache. Artificial Analysis publishes a blended-price view using a stated 7:2:1 cache-hit/input/output mix and also calculates cost per task from observed token consumption. That is more informative than comparing advertised output-token prices alone, but its blend is still a scenario. A user's workload should replace it with measured proportions.

Agents widen the boundary. Search, browser sessions, sandboxes, database calls, compiler runs, and a second model acting as critic all consume money or scarce capacity. Human setup, exception handling, and review often dominate the cheapest inference bill. An evaluation that counts only the primary generator can make a complicated scaffold appear cheaper than a direct system. [[Model versus scaffold in agent evaluations]] is therefore an economic rule as well as an attribution rule: charge the whole system that produced the result.

Observed API dollars and physical efficiency answer different questions. Dollars describe what a buyer pays on a dated tariff. They can change overnight, reflect subsidies, or vary among hosts. Tokens are reproducible within a tokenizer but do not equal compute across dense, sparse, or differently sized architectures. FLOPs and joules are closer to physical resources but often unavailable for closed models. A careful report keeps the measures separate and dates every price.

Latency also needs more than one column. Record time to first token, generation rate, end-to-end task time, and the allowed parallelism. Ten parallel calls may finish quickly while consuming ten times the aggregate work. Queuing and provider load create distributions, so median and tail latency matter. A model that is cheap on average but frequently times out can be expensive after retries and operational failures.

## Success-conditioned cost is useful—and easy to misuse

For repeated independent attempts with cost $c$ and per-attempt success probability $p$, the expected spend per success is approximately

$$
\operatorname{cost\text{-}of\text{-}pass}=\frac{c}{p}.
$$

This quantity answers an intuitive question: how much inference spending is associated with obtaining one correct result under the measured procedure? Cost-of-Pass develops this idea into an economic frontier across models and inference strategies. It is preferable to price-per-token when models use radically different token volumes.

Yet $c/p$ is not automatically the cost of a deployable correct answer. It assumes that the success rate is estimated on a representative distribution and that failures are counted. More importantly, deployment may not know which individual attempt succeeded. A benchmark with hidden answers can retrospectively label correctness; a user without a trusted verifier cannot keep sampling until success. Best-of-$k$ selected by an oracle and best-of-$k$ selected by an implementable critic are different products.

Repeated attempts are also correlated. If a model repeatedly makes the same conceptual error, the independent-trial formula overstates the benefit of retries. A router or ensemble can exploit diversity across models, but its routing or selection errors must be measured on held-out tasks and its calls charged. The 2026 Capability Frontier workshop paper studies cross-model and repeated-run combinations at matched cost and explicitly corrects for optimistic selection across noisy candidates. Its reported gains are evidence about its studied benchmarks and construction, not permission to assume that every workload can cheaply route to the right answer.

When wrong answers have unequal consequences, accuracy is insufficient. Let outcomes $y$ and actions $a$ have application loss $L(a,y)$. A deployment policy should minimize expected total loss

$$
\mathbb{E}[L(a,y)]+C_{\text{system}}+C_{\text{review}}+C_{\text{delay}},
$$

subject to safety and service constraints. Abstention can then be valuable. Calibration matters because confidence may decide whether to accept, retry, escalate to a stronger model, or send to a human. A cheaper but poorly calibrated system can create more review work than its inference savings.

## Measure curves across budgets

One point per model confounds capability with elicitation. A 2026 study, *How Inference Compute Shapes Frontier LLM Evaluation*, evaluated interventions including larger token budgets, context compaction, and repeated submissions across several difficult domains. Its central methodological result is that scores depend on the inference protocol and that model comparisons should span a shared compute range. The implication for economics is direct: price each measured operating point and compare curves, not provider defaults.

For every system, predeclare several budgets that reflect plausible use: a single economical attempt, a normal interactive setting, and one or more higher-reliability settings. At each point measure task success, monetary cost, latency, token/compute use, tool activity, and failure types. Plot accuracy against dollars and against time separately. Add confidence intervals to quality and distributions to cost. The efficient set can change when uncertainty is considered; two nearly equal means should not be ordered confidently when task sampling or API variability is large.

Marginal return is more actionable than an average ratio. Between budget levels $b_1$ and $b_2$, estimate

$$
\frac{q(b_2)-q(b_1)}{C(b_2)-C(b_1)}.
$$

This asks what additional quality the next dollar buys. It often falls as sampling or reasoning expands. Cost-of-Pass found that majority voting and self-refinement did not generally justify their marginal cost in its studied tasks, while later work can find advantages for other strategies and domains. Those results are not contradictory: diminishing returns, task mix, model family, feedback, and selection quality determine the local curve.

Adaptive allocation may improve a portfolio frontier by spending more on uncertain or high-value tasks. But the allocator becomes part of the evaluated system. It cannot use hidden correctness, test-set labels, or post-hoc knowledge unavailable in deployment. Report spend quantiles and accuracy by spend bin; an attractive mean may hide a few tasks consuming most of the budget. Evaluate the router separately for calibration, distribution shift, and overhead.

## Workload mixture can reverse the economic winner

A benchmark average implicitly fixes a workload mixture. Let task class $g$ occur with probability $w_g$, let system $j$ have class-conditional loss $L_{jg}$ and cost $C_{jg}$, and let $lambda_g$ translate a class-specific error into the decision-maker's units. Expected operating burden is

$$
R_j(w)=\sum_g w_g\left(\lambda_g L_{jg}+C_{jg}\right).
$$

The selected system can change when any of $w_g$, $\lambda_g$, or $C_{jg}$ changes. A model that dominates on common, low-stakes questions may lose when a small share of difficult questions carries most of the error cost. A routing system may look attractive on a heterogeneous benchmark precisely because its model pool contains complementary strengths; on a narrow production stream, the routing overhead may buy little. The Capability Frontier study reports large oracle gains from exploiting cross-model and repeated-run diversity, while its simulations connect larger gains to greater query-topic entropy. That is evidence that workload heterogeneity creates routing opportunity—not evidence that a deployable router can identify the oracle choice.

Economic Evaluation of LLMs makes the utility assumption explicit by pricing mistakes, latency, abstention, and inference in the same units. Its studied MATH settings found that the preferred reasoning configuration changed at low assumed error costs and that a single strong model could beat cascades once errors were costly enough. The exact thresholds are task- and price-specific. The reusable lesson is to publish a **break-even surface**: for what ranges of error loss, latency loss, review cost, and query mixture does each policy minimize expected burden?

A procurement result should therefore include at least three workload scenarios:

- the observed historical mixture, with confidence intervals for class frequencies;
- a stress mixture that upweights rare, consequential, long-context, or tool-heavy cases; and
- a drift mixture representing plausible growth or product change.

Report class-conditional quality and spend before aggregating. Otherwise a stable overall frontier can conceal a system becoming worse on the class whose volume or consequence is rising.

## Routing is a prediction problem, not free arbitrage

A two-stage cascade sends a query first to a cheaper system and escalates when a routing score $u(x)$ crosses a threshold. Its economics include the first call even when escalation occurs:

$$
C_{\text{cascade}}(x)=C_s(x)+\mathbf{1}[u(x)>\tau]\left(C_r(x)+C_l(x)\right),
$$

where $C_s$ is the small-model cost, $C_r$ the router or scoring overhead, and $C_l$ the larger-model cost. If the cascade also supplies the first answer to the large model, that changes both cost and quality and must be recorded as a distinct scaffold.

The router needs held-out evaluation because its central claim is conditional: it predicts where another system will fail or where extra spending has positive value. Token-level uncertainty can improve cascades in studied settings, as the ICLR 2024 language-model-cascade paper demonstrates, but raw confidence is not automatically calibrated across tasks, languages, or model revisions. A threshold chosen after inspecting test-set outcomes is an oracle policy. A deployable threshold must be learned on earlier data, frozen, and then evaluated under the same information available online.

Three baselines keep router claims honest:

1. always use the cheap system;
2. always use the strong system; and
3. randomly escalate the same fraction of queries.

Also compare against simple observable rules such as input length or task category. A learned router that beats only “always cheap” may add cost without improving on “always strong”; one that beats both means at a single trade-off may still fail elsewhere on the curve. RouterBench-style work and later critiques emphasize that the candidate-model pool and query distribution materially determine measured routing gains. Freeze both, then repeat with plausible alternative pools rather than presenting one favorable portfolio as universal.

Calibration should be measured in the quantity the routing decision uses: probability of unacceptable loss, expected incremental utility of escalation, or probability that the larger system will correct the smaller one. Ordinary confidence calibration is insufficient if both models fail on the same cases. Publish reliability diagrams, escalation rate, false-nonescalation rate, cost and quality by score bin, and performance under distribution shift. Charge the router's training, inference, and monitoring separately when they matter at deployment scale.

## Sensitivity analysis turns a leaderboard into a decision tool

A single cost table is brittle because several inputs are uncertain or mutable. A useful analysis varies them one at a time and jointly:

| Input | Base case | Stress cases | Decision question |
| --- | --- | --- | --- |
| API tariff and cache hit rate | dated observed bill | no cache; provider price change; alternate host | Does the chosen system remain non-dominated? |
| Error or review loss | measured workflow estimate | 0.1×, 1×, 10×; asymmetric severe-error penalty | When does a stronger model or mandatory review pay? |
| Workload mixture | held-out production sample | rare hard cases upweighted; length/tool-use shift | Is the recommendation composition-dependent? |
| Router calibration | held-out calibration curve | degraded ECE; shifted class prior | How much misrouting erases the savings? |
| Retry correlation | observed paired trajectories | independent optimistic bound; fully correlated bound | Are sampling gains robust to shared failure modes? |
| Latency and availability | measured distributions | tail-latency spike; outage; rate-limit regime | Does the fallback policy meet service constraints? |
| Human review | timed sample | reviewer learning; fatigue; automation bias | Is inference cost actually material? |

For each scenario, recompute the non-dominated set and the utility-selected policy. The most useful output is a **decision stability map**: the region of assumptions in which a recommendation survives. If a tiny change in error cost or cache rate flips the winner, report a contingent choice rather than a ranking. If one configuration remains acceptable across broad ranges, robustness may be more valuable than a slightly better base-case mean.

Uncertainty in performance and uncertainty in prices should not be collapsed prematurely. Bootstrap tasks to obtain paired quality and cost distributions, then propagate scenario parameters through the decision calculation. Report the probability that a configuration is dominated and the probability that it satisfies hard constraints. This is not the probability that a model is intrinsically “best”; it is uncertainty about a dated decision under a declared statistical procedure.

## A practical evaluation protocol

**Define the decision first.** State the workload, arrival rate, error costs, latency targets, data-governance constraints, and the actions available after an answer. “Choose a chatbot” and “route one million support tickets” are not the same decision.

**Freeze the evaluated identity.** Record exact model/API version, date, endpoint, reasoning setting, prompt, tools, scaffold revision, context policy, decoding, retries, verifier, and stopping rule. Preserve benchmark version, scorer, exclusions, and contamination policy. A provider name is not a reproducible treatment.

**Choose quality measures that reflect use.** Report task success or application utility, not merely a composite benchmark index. Include calibration, abstention, severe-error rate, and subgroup or difficulty slices when relevant. Averages can conceal the errors that drive economic loss.

**Instrument every call.** Log tokens by billing class, list and realized price, tools, verifier work, failures, retries, wall time, and human interventions per task. Count discarded work. Preserve task-level records so alternative cost assumptions can be recomputed.

**Evaluate multiple operating points.** Use matched dollar, time, and tool ceilings, plus each product's recommended configuration. This separates resource fairness from the best purchasable product experience. Never compare a many-sample verified system with another system's pass@1 without labeling the difference.

**Estimate uncertainty with the task as the main sampling unit.** Paired tasks allow direct cost and quality differences. Repeated attempts on one task are not independent replacement tasks. Use paired or hierarchical bootstrap intervals when stochastic trials nest within tasks. Report denominators and infrastructure failures.

**Build frontiers, then apply explicit utility.** Remove dominated configurations. If a single recommendation is needed, state the utility or constraints that selected it—for example, minimum 95% success, 30-second tail latency, and lowest expected task cost. Test how the choice changes when error cost, workload length, caching, or prices change.

**Recheck on drift.** Provider pricing, serving latency, model aliases, benchmark distributions, and prompts change. Date the result and define triggers for rerun. A cached leaderboard is not a procurement guarantee.

**Publish a deployment policy, not only a model choice.** State when to accept, abstain, retry, escalate, invoke a verifier, or require human review. Give the thresholds, signals, and maximum cumulative spend. Evaluate that full policy end to end on held-out tasks and keep the per-stage accounting needed to diagnose regressions.

## Common traps

**Benchmark points per dollar.** This assumes linear, comparable points and ignores minimum acceptable quality. Publish the frontier and absolute quality instead.

**Advertised price comparisons.** A cheap input rate says little about reasoning-token volume, output length, cacheability, retries, or tools. Use measured task costs.

**Free retries.** Excluding failed calls or charging only the accepted candidate understates cost and inflates reliability. Precommit failure and retry rules.

**Oracle selection.** Hidden tests may identify the best candidate during evaluation. Unless deployment has the same signal, call the result oracle pass@$k$, not operational reliability.

**Composite-index economics.** Weighting unrelated benchmarks and then reporting “cost per index point” embeds editorial preferences. It may summarize a specific suite, but it does not transfer automatically to a user's task distribution.

**Dollar-as-compute.** Prices are economically real but scientifically unstable. Report tokens or compute proxies alongside dollars and keep the pricing date.

**Ignoring review.** Low inference cost can be overwhelmed by human verification, especially when errors are subtle. Measure review time and escalation frequency.

## Why it matters

Cost-adjusted evaluation can identify dominated configurations, quantify marginal returns, and support a deployment policy for a defined workload. It can reveal that the nominally strongest model is unnecessarily expensive for easy tasks, or that a higher inference bill reduces costly failures enough to be economical. It can make routing and fallback policies testable.

It cannot yield a timeless universal model ranking. Prices move, endpoints change, workloads differ, and an evaluation's scorer may not capture real value. Nor does a cheap API prove physical efficiency or low environmental cost. If the benchmark is contaminated or saturated, as discussed in [[Benchmark contamination and saturation]], economic precision only prices a weak measurement more neatly.

The defensible headline is therefore conditional: *under this dated system identity, task distribution, resource accounting, and utility constraint, these configurations form the observed frontier.* That sentence is less marketable than “best value,” but it tells a decision-maker what was actually learned and what must be retested.

## Sources

- Mehmet Hamza Erol et al., “Cost-of-Pass: An Economic Framework for Evaluating Language Models” (2025): https://arxiv.org/abs/2504.13359
- Jessica McFadyen et al., “How Inference Compute Shapes Frontier LLM Evaluation” (2026): https://arxiv.org/abs/2606.17930
- Bradley Fowler et al., “The Capability Frontier: Benchmarks Miss 82% of Model Performance” (ICLR 2026 workshop submission): https://openreview.net/forum?id=EKnN8K3S2P
- Michael J. Zellinger and Matt Thomson, “Economic Evaluation of LLMs” (2025): https://arxiv.org/abs/2507.03834
- Neha Gupta et al., “Language Model Cascades: Token-Level Uncertainty and Beyond” (ICLR 2024): https://openreview.net/forum?id=KgaBScZ4VI
- Jiayi Yuan et al., “Who Routes the Router: Rethinking the Evaluation of LLM Routing Systems” (NeurIPS 2025 LLM Evaluation Workshop): https://openreview.net/forum?id=EEPostHMtF
- Sang Truong et al., “Reliable and Efficient Amortized Model-Based Evaluation” and HELM integration (2025): https://crfm.stanford.edu/2025/06/04/reliable-and-efficient-evaluation.html
- Artificial Analysis, “Language Model Benchmarking Methodology” (accessed 2026-07-10): https://artificialanalysis.ai/methodology
- Vahid Partovi Nia et al., “Rethinking Pareto Frontier for Performance Evaluation of Deep Neural Networks” (2022): https://arxiv.org/abs/2202.09275
- Charlie Snell et al., “Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters” (2024): https://arxiv.org/abs/2408.03314
- Mark Chen et al., “Evaluating Large Language Models Trained on Code” (pass@$k$ methodology, 2021): https://arxiv.org/abs/2107.03374

## Open questions

- Which public resource-log schema could make token classes, tools, verifiers, retries, latency, and dated prices portable across evaluation harnesses?
- How should frontier uncertainty be displayed when task quality and API latency are both noisy and correlated with difficulty?
- What deployable routing signals approximate oracle selection without learning benchmark-specific shortcuts?
- How should human review cost be measured when reviewers become faster or more complacent with AI assistance?
- When should environmental cost be a hard constraint rather than another dimension on a purchasing frontier?
