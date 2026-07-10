---
title: Model versus scaffold in agent evaluations
created: 2026-07-09
source: llm
status: seed
tags: [ai, agents, evaluation, frontier-models, benchmarks]
as_of: 2026-07-10
desk: AI frontier news
review_after: 2026-08-09
---
An agent benchmark measures a configured system—not a model in isolation—so credible comparisons must separately report the model, scaffold, tools, operator, and resource budget.

Up: [[AI agents (MOC)]]

Calling an agent result a “model score” hides the machinery that turns a language model into an acting system. A model supplies conditional generations. A scaffold decides when to call it, what context it sees, which tools it may use, how errors are handled, and when the run ends. An operator chooses prompts and versions, tunes the scaffold, repairs infrastructure, and sometimes intervenes during a task. A budget determines how many tokens, attempts, branches, minutes, and dollars can be spent. The benchmark contributes its task distribution, environment, and grader. The observed score belongs to the whole configuration.

This distinction matters whenever an evaluation is used to rank frontier models, infer autonomous capability, or forecast [[AI R&D automation]]. A score can be perfectly valid as evidence that a *product or agent system* works well while being weak evidence that its underlying model is intrinsically better. Conversely, a weak result from a minimal harness can underestimate a model whose capabilities were poorly elicited. The right response is not to discard agent benchmarks. It is to name their unit of measurement and design comparisons that answer narrower causal questions.

## The system being measured

For an evaluation task $x$, it is useful to write the outcome schematically as

$$
Y_x = f(M,S,T,O,B,E,G,\epsilon),
$$

where $M$ is the model, $S$ the scaffold, $T$ the available tools, $O$ the operator and elicitation process, $B$ the resource budget, $E$ the task environment, $G$ the grader, and $\epsilon$ stochastic variation. This is not a claim that the factors add cleanly. They interact. A planning scaffold may help one model and distract another; a browser may be useful only if the model can ground clicks; a larger token budget may increase recovery opportunities or merely prolong a doomed trajectory.

The measured object is therefore a configured agent $A=(M,S,T,O,B)$ operating in an evaluation protocol $(E,G)$. A leaderboard row that changes any one component is not a controlled model comparison. It can still be a useful *system comparison*, especially for a buyer choosing a working product, but it cannot by itself identify which component caused the difference.

### Model

The model field should identify the exact public or evaluated version, not just a family name. It includes the checkpoint or dated API alias, modality, provider-side reasoning-effort setting, sampling parameters, and any disclosed fine-tuning. Provider-managed products complicate the boundary: server-side routing, hidden tool policies, long-context compression, or adaptive reasoning can make the “model” an inseparable service. In that case the evaluator should say that the tested object is a service configuration rather than pretend to have isolated weights.

### Scaffold

The scaffold is the control program around model calls. Common elements include the system prompt, observation formatting, ReAct loops, planning, reflection, memory summaries, context pruning, subagent delegation, verifier or critic calls, retry logic, stopping rules, and patch-selection procedures. Even a supposedly minimal loop makes consequential choices: whether a tool error is shown verbatim, whether old observations remain in context, and whether the model can revise after a failed test. [[Infrastructure noise in agentic coding evaluations]] shows that the execution substrate can also alter recorded outcomes even when those choices are held fixed.

Scaffolds can encode domain knowledge. A coding agent that automatically searches definitions, runs tests, summarizes a repository, and asks a second model to review a patch is not merely giving the same model a nicer interface. It has implemented a workflow. That workflow may reveal latent model capability, substitute engineered procedure for reasoning, or do both. “Elicitation” is therefore not a synonym for “model capability”; it is a relationship between a model and a method of drawing useful behavior from it.

### Tools

Tools are action and information channels: shell, editor, browser, search, code execution, retrieval index, calculator, vision parser, database, or task-specific API. Their schemas, permissions, latency, reliability, and state all matter. A direct filesystem API and a screenshot-only GUI expose different problems even when they lead to the same application. Retrieval may place the decisive file in context; unrestricted web search may expose benchmark answers; an execution tool can turn generation into iterative experimentation.

Tools should be separated from scaffolding because the same controller can be tested with different affordances, and the same tools can be orchestrated by different controllers. Tool versions and environment images belong in the record. OSWorld’s design makes this visible: tasks run in configured real applications and are graded from resulting state, while submitted agents implement an interface to perceive and act. The benchmark is explicitly evaluating model-agent systems in an environment, not text answers detached from an action channel.

### Operator

The operator is the human or organization that prepares and conducts the evaluation. Operator effects include selecting the best prompt, choosing among scaffold variants, debugging adapters, deciding which failures warrant reruns, supplying credentials or initial state, and interpreting ambiguous grading. METR’s capability-elicitation protocol explicitly recommends trying or justifying high-performing model and scaffold versions and diagnosing failures that may be amenable to elicitation. That is appropriate for an upper-bound safety evaluation, but it answers “what capability can a competent evaluator elicit?” rather than “what will an untuned default user obtain?”

Operator involvement during tasks requires special care. Predeclared environment repair is different from giving strategic hints. Manual grading correction is different from silently selecting the best-looking trajectory. Human intervention should be logged by type, timing, and task, with results reported both including and excluding disallowed assistance when possible.

### Budget

Budget includes more than the advertised reasoning level. It covers input and output tokens, wall-clock limit, number of model calls, tool calls, parallel branches, retries, pass@$k$, ensemble size, judge calls, and financial cost. Best-of-$k$ changes the probability of at least one success from $p$ to $1-(1-p)^k$ under an idealized independent-attempt assumption. Reporting only the winning attempt makes a many-rollout system look like a more reliable single-run agent.

Budget also defines the comparison’s purpose. Equal tokens asks what systems do with similar inference compute. Equal dollars approximates a procurement choice. Equal wall time tests operational throughput. Equal attempts isolates single-run reliability. These constraints are not equivalent, and a system can lead under one while losing under another. [[Reasoning budget and fair model comparison]] should therefore be treated as part of the experimental question, not a nuisance footnote.

## What controlled evidence already shows

Several public evaluations demonstrate that scaffold choice is large enough to change conclusions.

OpenAI’s 2024 analysis of SWE-bench Verified highlighted a striking historical example: on SWE-bench Lite, reported GPT-4 performance ranged from 2.7% with an early retrieval-augmented scaffold to 28.3% with CodeR. That comparison was not a randomized factorial experiment, so other implementation details may differ, but the roughly tenfold span makes the attribution problem impossible to ignore. The SWE-bench repository accordingly stores evaluation machinery and trajectories around model submissions; the natural unit is a model-plus-agent method resolving repository issues.

The Holistic Agent Leaderboard was built around the same problem. Its 2026 paper analyzes models, scaffolds, and benchmarks separately using a standardized harness and cost tracking. HAL later reported that an Opus 4.5 system using Claude Code outperformed its earlier CORE-Agent results, while noting manual grading corrections; because model version, scaffold, and grading changed, this is a system comparison rather than a controlled scaffold effect. HAL also finds that more reasoning effort does not monotonically improve accuracy across all settings. These results caution against two shortcuts: treating a scaffold as an inconsequential wrapper and treating a higher provider reasoning setting as a clean dose of capability.

A preregistered single-author June 2026 preprint offers a more controlled comparison on GAIA validation Levels 1–2 and robustness slices. It tested three scaffolds across five models while holding the tasks and stated conditions fixed, with three attempts per question. Scaffold choice moved measured accuracy by as much as 28 percentage points for one model and hard-task slice. Effects also interacted with model family: a structured multi-agent design did not confer the same advantage across providers. As preprint evidence rather than an independent peer-reviewed confirmation, it supports further matrix-style evaluation rather than a claim that one scaffold is universally “neutral.”

METR’s time-horizon work makes the measurement boundary explicit: it combines a model with a scaffold that provides tools and manages the interaction loop. Its published methodology largely uses common scaffolds across a suite to improve comparability, while its elicitation guidance recognizes that under-elicitation can produce a misleading safety conclusion. RE-Bench goes further by varying agent designs and best-of-$k$ under time budgets, and reports that AI and human relative performance changes with the allotted horizon. At two total hours the best evaluated AI configurations exceeded the human aggregate under the paper’s scoring setup; at longer budgets, human returns were better. “Who wins?” therefore depends on the agent design and the budget axis as well as the underlying model.

These examples do not prove that models are unimportant. A scaffold cannot reliably manufacture knowledge, perception, or reasoning that none of its components possesses. They show instead that agent performance is jointly produced and that rankings may change when the pairing changes.

## Three legitimate evaluation questions

Confusion clears when an evaluator states which question is being answered.

**Model comparison under a fixed scaffold.** Hold the controller, tools, environment, prompts, stopping rules, and budget as constant as compatibility permits; vary the model. This estimates performance of models *through that scaffold*. It is strongest when the scaffold is not secretly tuned to one provider and when several scaffold families reproduce the ordering.

**Scaffold comparison under a fixed model.** Hold model version, sampling, tools, tasks, and budget constant; vary the control program. This estimates engineering value and model-scaffold interaction. It is the right design for claims that planning, memory, multi-agent delegation, or verification improves an agent.

**Best available system comparison.** Allow each team to optimize its whole stack under a common cost, time, permission, and information envelope. This answers which deployed configuration is most effective. It is valuable for users and frontier tracking, but the winner should be named as a system. If one entry uses four agents, private retrieval, and 20 attempts while another is a single rollout, the result must not be retold as a ranking of base models.

A mature evaluation program uses all three. Fixed-scaffold results improve causal attribution; optimized-system results measure achievable utility; scaffold ablations explain the gap between them.

## Matched comparisons and the factorial core

The smallest design that can separate model and scaffold effects is a crossed matrix. Choose at least two exact model versions and two frozen scaffolds, then run every model with every scaffold on the same task instances under the same tool, grading, and budget policies. For models $m \in \{1,2\}$ and scaffolds $s \in \{1,2\}$, the four required cells are $(M_1,S_1)$, $(M_1,S_2)$, $(M_2,S_1)$, and $(M_2,S_2)$. A leaderboard containing only $(M_1,S_1)$ and $(M_2,S_2)$ is confounded: the model and scaffold changed together, so even a large gap cannot identify either cause.

“Matched” must mean more than using the same benchmark name. Each cell should receive the same task IDs and initial states; the same tool schemas and permissions; the same token, call, attempt, wall-time, and dollar constraint selected for the estimand; the same environment image and grader; and the same rerun policy. Run order should be randomized or blocked by task and time so that API changes, environment drift, or transient outages do not line up with one condition. If a provider requires a syntax adapter, keep the adapter as thin as possible and disclose it. A provider-native optimized scaffold belongs in a separate optimized-system analysis, not silently inside the common-scaffold table.

The basic task-level model is

$$
g(\mathbb{E}[Y_{i m s r}]) = \alpha + \mu_m + \sigma_s + (\mu\sigma)_{ms} + u_i + v_r,
$$

where $i$ indexes tasks, $r$ repeated rollouts, $g$ is an appropriate link function, $u_i$ captures task difficulty, and $v_r$ captures run-level variation. For binary success, logistic or hierarchical binomial models are natural; continuous scores may use a linear or robust alternative. The model term $\mu_m$ estimates an average model difference across the tested scaffold panel. The scaffold term $\sigma_s$ estimates an average scaffold difference across the tested models. The interaction $(\mu\sigma)_{ms}$ asks whether a scaffold’s effect depends on the model.

That interaction is not statistical clutter. It is often the central finding. Define a difference-in-differences contrast:

$$
I = (Y_{M_2,S_2}-Y_{M_2,S_1})-(Y_{M_1,S_2}-Y_{M_1,S_1}).
$$

If $I$ is near zero with useful precision, the scaffold change had a similar measured effect on both models. If $I$ is large, “Scaffold 2 adds ten points” is not a portable claim: it may add twenty points for one model and nothing for another. A sign reversal is stronger still—one scaffold helps $M_1$ but hurts $M_2$. Then a single fixed-scaffold model ranking is scaffold-conditional, and an average over cells may conceal the decision-relevant result.

The crossed design should be analyzed as paired task data, not as four unrelated leaderboard percentages. Publish the per-task outcomes and compute within-task contrasts; this removes much of the noise caused by different task mixes. Repeat stochastic rollouts rather than treating one trajectory as a stable property. Confidence or credible intervals should reflect both the finite task sample and rollout variation. When tasks are clustered by repository, application, or domain, resampling or random effects should respect those clusters. Multiple seeds on the same task do not substitute for broad task coverage.

A practical first pass is a $3\times3$ matrix: three model families crossed with a minimal tool loop, a structured planner-memory loop, and a verifier-enabled loop. That panel is not universal, but it can reveal whether rankings survive qualitatively different control policies. If cost prevents a complete matrix, prioritize a connected design in which every model shares at least two scaffolds and every scaffold is tested on at least two models. Explicitly mark missing cells; do not impute them into a clean ranking.

## Ablations that explain a scaffold gain

A factorial matrix locates interaction; ablations identify which scaffold component may produce it. Start from a frozen full scaffold and remove or replace one component at a time: planning, retrieval, memory, context compression, reflection, verifier, retry policy, parallel branches, or test execution. Each ablation must preserve the rest of the configuration and re-match the budget. Removing a verifier while leaving its tokens and latency unused answers a system-removal question; reallocating that budget to the generator answers a budget-neutral architecture question. Both are useful, but they are different experiments.

Component ablations should be run across more than one model whenever the article’s claim is model-general. A planner that improves one model may merely translate the task into a format favored by that model’s post-training. A verifier may help only when generator errors are diverse and the verifier is calibrated. Memory may help long tasks but degrade short ones by inserting stale summaries. Report task- or horizon-stratified effects so that a positive aggregate does not hide predictable harm.

Removal is not always a fair test. Replacing retrieval with an equal-token random or lexical baseline distinguishes access to more context from retrieval quality. Replacing a learned selector with random selection distinguishes candidate generation from selection. Comparing one rollout, best-of-$k$, and verifier-selected $k$ separates extra sampling from intelligent adjudication. A “multi-agent” ablation should include a budget-matched single-agent ensemble; otherwise any gain may be caused by spending more calls rather than by interaction, as discussed in [[Single-agent versus multi-agent inference]].

Treat ablation findings as local causal evidence. They support statements such as “under these models, tasks, and budgets, removing the verifier reduced success by $x$.” They do not prove that the component is necessary in all agent systems, because removal can move the remaining system off its tuned operating point. Where feasible, retune only on a declared development set and report both frozen and retuned ablations. The frozen result measures dependence of the shipped configuration; the retuned result asks whether simpler engineering can recover the performance.

## A concrete reporting template

Every consequential agent result should publish a machine-readable configuration and a human summary. The following template is deliberately redundant: omissions are signals that a comparison may not be auditable.

| Layer | Minimum disclosure | Normalization or diagnostic |
| --- | --- | --- |
| Task set | benchmark version, exact split, task count, exclusions, contamination date | same items or a declared matched subset; task-level results |
| Model | exact version/date, endpoint or weights, modality, temperature, reasoning setting | fixed version for scaffold tests; repeated scaffolds for model tests |
| Scaffold | code/version, system prompt hash or text, planning, memory, context policy, retries, stopping | common baseline plus optimized scaffold; ablate major modules |
| Tools | tool list and schemas, permissions, retrieval corpus, environment/image versions | equal affordances where possible; report provider-specific adapters |
| Operator | tuning set, number of development iterations, manual repairs, live hints, grader overrides | predeclare allowed actions; separate assisted and autonomous runs |
| Budget | tokens, calls, tool calls, wall time, parallelism, attempts, pass@$k$, total and per-task cost | report single-attempt and budget-matched Pareto curves |
| Execution | seeds, concurrency, timeouts, API dates, failure and rerun policy | multiple independent trials; count infrastructure failures separately |
| Grading | grader code/version, judge model and prompt, manual adjudication, partial-credit rule | blind audit sample; confidence intervals and disagreement rates |
| Output | mean, uncertainty, per-task outcomes, failure taxonomy, full or protected traces | avoid one scalar; show cost, reliability, and intervention jointly |

The recommended headline is not “Model X scores 65.” It is: “Model X with scaffold S and tools T completed 65% of tasks in benchmark version V, across $n$ trials, under budget B and operator policy O.” A model-only shorthand may follow only after the full unit is established.

For cross-model work, report at least two views:

1. a **common-scaffold table**, which reduces but does not eliminate scaffold interaction; and
2. an **optimized-system Pareto frontier**, plotting performance against cost or another explicit budget.

Add a scaffold-sensitivity statistic such as the range or variance of each model’s score across a declared scaffold set. If rankings reverse across scaffolds, report the reversal rather than averaging it away. A mixed-effects or hierarchical model can estimate model, scaffold, task, and interaction contributions when the experiment has enough repeated cells, but transparent cell-level results remain essential.

The following compact record can accompany the narrative and machine-readable configuration:

```text
Claim / estimand:
  [model effect through common scaffolds | scaffold effect for fixed models | best system]
As-of date and evaluation window:
Tasks:
  benchmark/version; exact split and IDs; exclusions; cluster/domain labels
Models:
  exact versions/endpoints; reasoning and sampling settings; provider-side caveats
Scaffolds:
  code commit; prompt text/hash; adapters; planner/memory/verifier/retry/stopping policy
Held constant:
  tools and permissions; environment image; grader; operator policy; information access
Budget rule:
  tokens; calls; tool calls; attempts; parallelism; wall time; dollars; reallocation policy
Design:
  full model × scaffold cell matrix; rollouts per task; randomization/blocking; missing cells
Primary analysis:
  task-level outcome; model, scaffold, and interaction contrasts with uncertainty
Ablations:
  component removed/replaced; frozen or retuned; budget removed or reallocated
Reliability:
  infrastructure failures; reruns; human interventions; grader audit/disagreement
Results:
  every cell; per-task data or protected traces; cost-performance frontier; reversals
Interpretation:
  facts directly measured; inferences; scope limits; unresolved confounds
```

A suitable headline then reads: “Across 120 matched tasks and three rollouts per cell, $M_2$ exceeded $M_1$ under both common scaffolds; the estimated model-by-scaffold interaction was small but imprecise.” If the evidence instead shows a reversal, say so in the headline. The optimized-system winner can be reported beside this matrix, but it should not replace it.

## Counterarguments and limits

One counterargument is that users care about products, not causal decomposition. That is often true. A buyer may reasonably choose the agent that completes the most tasks within a dollar and latency budget, regardless of whether the advantage comes from weights or workflow code. The answer is to label the system comparison correctly, not to strip away useful engineering. Product evaluation becomes more informative when it reports cost, permissions, intervention, and failure modes alongside success.

Another objection is that there is no model-independent neutral scaffold. Tool-call syntax differs, some models were post-trained for particular interfaces, and vendor services may include undisclosed routing. A rigid common harness can handicap models unevenly. This is why a single fixed-scaffold ranking is insufficient. The defensible design combines a portable baseline, model-specific optimized elicitation, and cross-scaffold sensitivity checks. Agreement across those views is much stronger evidence of a model difference than any one row.

A third objection says scaffold improvements merely unlock capability already “inside” the model. Sometimes that framing is useful, especially in safety evaluations seeking an upper bound. But it does not solve attribution. A verifier ensemble that spends ten times the calls and selects among branches changes both procedure and budget. Whether that is latent capability or external computation depends on the decision being made. The empirical obligation remains the same: disclose the configuration and avoid transferring a system-level result to a cheaper or simpler setting.

Finally, exhaustive factorial experiments are expensive. Testing every model with every scaffold, tool set, and budget quickly becomes impossible. Evaluators can still do better than one opaque run: choose a preregistered baseline, test a small diverse scaffold panel, allocate equal development effort, publish trajectories or auditable summaries, and run targeted ablations on the components most likely to drive the result. Partial identification with honest uncertainty is preferable to false precision.

## Why it matters


The model-versus-scaffold distinction also changes how failures should be fixed. If the model cannot recognize the relevant evidence, better context management may help. If it cannot ground a GUI action, a direct API changes the task rather than repairing reasoning. If it finds the right patch but stops before testing, a verification loop may be the appropriate engineering intervention. If success appears only after dozens of branches, the system may have high best-case capability but low single-run reliability. Decomposed reporting turns a leaderboard into a diagnosis.

The durable rule is simple: infer only at the level randomized or controlled by the evaluation. If only the complete agent systems differ, the evidence ranks systems. If models differ under the same scaffold and budget, it supports a scaffold-conditional model comparison. If the ordering persists across scaffolds, tools, and budgets, confidence in a broader model advantage rises.

## Sources

- METR, [Task-Completion Time Horizons of Frontier AI Models](https://metr.org/time-horizons/) (methodology page last updated May 8, 2026; accessed July 9, 2026).
- METR, [Guidelines for capability elicitation](https://evaluations.metr.org/elicitation-protocol/) (accessed July 9, 2026).
- METR, [Measuring Time Horizon using Claude Code and Codex](https://metr.org/notes/2026-02-13-measuring-time-horizon-using-claude-code-and-codex/) (February 13, 2026; direct comparison of provider-optimized and general scaffolds, with stated caveats).
- Joel Becker et al., [Measuring AI Ability to Complete Long Software Tasks](https://openreview.net/forum?id=CGNJL6CeV0) (ICLR 2026; methodology and scaffold disclosures).
- Hjalmar Wijk et al., [RE-Bench: Evaluating frontier AI R&D capabilities of language model agents against human experts](https://arxiv.org/abs/2411.15114) (paper and open artifacts).
- SWE-bench maintainers, [SWE-bench repository and evaluation harness](https://github.com/SWE-bench/SWE-bench) (accessed July 9, 2026).
- OpenAI, [Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/) (August 13, 2024; includes historical scaffold-range comparison).
- Sayash Kapoor et al., [Holistic Agent Leaderboard: The Missing Infrastructure for AI Agent Evaluation](https://openreview.net/forum?id=vUaY1t64ZZ) (ICLR 2026).
- Princeton SAgE, [Holistic Agent Leaderboard](https://hal.cs.princeton.edu/) (live methods, traces, cost reporting, and scaffold update; accessed July 9, 2026).
- Jason Starace, [Scaffold Effects on GAIA: A Controlled Comparison](https://arxiv.org/abs/2606.08529) (preprint, June 7, 2026; preregistered controlled scaffold comparison).
- Tianbao Xie et al., [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://arxiv.org/abs/2404.07972) and [official repository](https://github.com/xlang-ai/OSWorld) (benchmark, environment, and agent interface).

## Open questions

- Which small panel of scaffolds best estimates scaffold sensitivity without making every frontier evaluation prohibitively expensive?
- How should evaluator development labor be budgeted when one model requires more adapter and prompt work than another?
- Can provider-side hidden routing or tool orchestration be audited well enough to compare services with open-weight agents?
- Which intervention taxonomy cleanly separates environment repair, accessibility assistance, grader correction, and strategic human help?
- Should frontier trackers rank both the best system and a common-scaffold model baseline, or avoid ordinal rankings when the two disagree?
- How large must a model-by-scaffold interaction be before a model-only ranking should be withheld rather than qualified?
