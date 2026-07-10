---
title: Reasoning budget and fair model comparison
created: 2026-07-09
source: llm
status: seed
tags: [ai, frontier-models, evaluation, reasoning, inference-time-compute]
as_of: 2026-07-09
desk: AI frontier news
review_after: 2026-10-09
---
A reasoning score describes a model-system-budget combination, not a model in isolation; fair comparison therefore reports both matched-resource results and each system's accuracy–cost frontier.

Up: [[AI agents (MOC)]]

Comparisons among reasoning models often collapse a complicated experiment into one number. Yet a benchmark answer may have consumed a short greedy completion, a long hidden reasoning trace, 64 independent samples and a vote, a thousand candidates filtered by a learned verifier, repeated tool calls, or an agent loop that ran for hours. These are not interchangeable measurements of “the model.” They are different inference procedures purchasing different chances of success.

The right question is therefore not simply *which model scored higher?* It is: *what quality did each model-system achieve, on which tasks, under what total resource envelope, and how did quality change as that envelope expanded?* This note gives a vocabulary and protocol for answering that question. It applies to single-turn reasoning, code generation, tool-using agents, and long-horizon evaluations, although each domain needs its own success criteria.

## What belongs in a reasoning budget

A **reasoning budget** is the complete set of scarce resources allowed between receipt of a task and submission of the scored answer. At minimum it has six dimensions.

**Tokens.** Report input tokens, visible output tokens, and any separately metered reasoning or hidden-output tokens when the provider exposes them. Input accounting must include repeated prompt prefixes, retrieved documents, tool observations, and growing conversation history—not merely the first user message. A token is tokenizer-specific, so token counts are excellent within one model family but only an imperfect cross-provider compute measure. Even equal token counts do not imply equal floating-point operations: model size, architecture, sparsity, batching, precision, and hardware differ.

**Samples.** A sample is one stochastic attempt at a task. Generating $n$ independent candidates increases the opportunity to hit a correct solution even if the underlying single-attempt distribution is unchanged. The budget must say whether the submitted answer was the first sample, a random sample, majority vote, best-of-$n$ selected by an oracle test, or best-of-$n$ chosen by an implementable verifier. Candidate-generation tokens and selection tokens both count.

**Tool and environment actions.** Search queries, shell commands, Python executions, test-suite runs, retrieval calls, browser actions, compiler invocations, and answer submissions are compute and information channels. Their count, outputs, rate limits, timeout, and cost belong in the evaluation condition. A code agent permitted unlimited unit-test feedback is being measured under a richer channel than a model producing code once without execution.

**Wall time.** Token limits alone poorly describe agents because tools may take seconds or minutes and APIs may run concurrently. Report per-task elapsed time from prompt availability to final submission, including retries and waiting, plus any evaluator-wide concurrency. A system completing 100 tasks simultaneously in one hour is not equivalent operationally to one consuming 100 serial hours, even if total token use matches.

**Retries and interventions.** Transport retries caused by rate limits or network errors should be separated from semantic retries in which the system gets another chance after failure, feedback, or a grader response. Report human prompt repair, environment repair, checkpoint selection, manual answer extraction, and early termination. Each can change success probability. Infrastructure failures should not silently become free reruns for one model and scored failures for another.

**Money and physical compute.** Report observed API charges at dated prices, including model, embedding, retrieval, tool, verifier, and sandbox costs. Where possible, also report accelerator time, energy, or estimated FLOPs. Dollars are operationally meaningful but unstable: providers subsidize products, prices change, cached tokens receive discounts, and proprietary prices need not track underlying compute. FLOPs are more physically comparable but often unavailable for closed systems. Fair reports keep both concepts rather than pretending either is universal.

The full evaluated object can be written schematically as

$$
S=(M,P,D,A,V,E,B),
$$

where $M$ is the exact model version, $P$ the prompt and decoding policy, $D$ the sampling procedure, $A$ the agent or tool scaffold, $V$ the selection or verification method, $E$ the environment, and $B$ the multidimensional budget. Changing any component changes the system being evaluated. This is the same identity problem developed in [[Model versus scaffold in agent evaluations]].

## Pass@1, pass@k, and what multiple attempts buy

For a task with independent per-sample success probability $p$, the probability that at least one of $k$ attempts succeeds is

$$
\operatorname{pass@}k=1-(1-p)^k.
$$

This idealized equation shows why pass@k can rise dramatically without any improvement in pass@1. If $p=0.10$, then the chance of at least one success in ten independent attempts is about $0.651$. That does not mean a user who can submit only one answer receives 65.1% reliability. It describes an oracle-like setting in which success among the candidates can be recognized, often by unit tests.

The HumanEval work popularized an unbiased estimator when an evaluator draws $n$ samples for a task, observes $c$ correct, and asks for the chance that a uniformly chosen subset of $k$ contains at least one correct sample:

$$
\widehat{\operatorname{pass@}k}=1-\frac{\binom{n-c}{k}}{\binom{n}{k}}.
$$

This metric is useful for code, where hidden tests can identify correctness after generation. It should not be mislabeled as deployable single-shot accuracy. Nor should **consensus@k** be called pass@k. Consensus samples several reasoning paths and submits the most frequent answer; it needs no correctness oracle but can amplify a confidently repeated error. A learned verifier or public-test selector lies between these cases: it is implementable, but its own errors, training exposure, tokens, and compute are part of the system.

Independence is another caveat. The formula $1-(1-p)^k$ assumes identically distributed independent attempts. Real samples share a prompt, model, blind spots, and perhaps deterministic tool results. Correlated errors make extra samples less valuable. Temperature, seed, prompt variants, and model mixtures can change diversity, but also change the evaluated procedure. Reports should publish the empirical sampling method and candidate-level outcomes rather than infer a clean independent-sample law.

OpenAI's 2024 o1 announcement illustrates why labels matter. Its AIME result was reported as 74% pass@1, 83% consensus with 64 samples, and 93% after reranking 1,000 samples with a learned scoring function. These are informative points on an elicitation curve, not three estimates of the same budget. The 1,000-sample result says something about the model plus large search and a verifier; comparing it with another model's single answer would be a budget mismatch.

## Longer thought, search, and adaptive compute

Inference-time compute can be scaled **within** one trajectory or **across** trajectories. Within-trajectory scaling asks a model to reason longer, revise, use scratch space, or interact with tools. Across-trajectory scaling draws candidates and aggregates or verifies them. Hybrid systems build search trees, score intermediate steps, or alternate generation with critique.

Research on self-consistency showed that sampling diverse chains of thought and marginalizing to the most common answer could improve several arithmetic and commonsense benchmarks over greedy decoding. Later test-time-scaling work compared best-of-$n$ search using process-based verifiers with methods that adapt the response distribution. Snell and colleagues found that the best allocation depended on prompt difficulty and reported a compute-optimal policy more than four times as efficient as a uniform best-of-$n$ baseline in their setting. In FLOP-matched experiments, a smaller model could beat a model 14 times larger on problems for which the smaller model already had nontrivial success.

Those findings support adaptive compute, but not a universal claim that “thinking longer” always works. Extra computation has diminishing returns, and the best method depends on the policy model, verifier, problem, and initial difficulty estimate. A weak model with near-zero probability of generating the missing idea may merely repeat variants of the same failure. A flawed verifier can select polished wrong answers. More agent time can produce loops, context bloat, or destructive tool actions. METR's GPT-4o evaluation documented agents repeatedly taking unsupported, slightly modified actions until their token limit—a case where a larger budget extended failure rather than curing it.

An **adaptive** policy allocates little compute to easy tasks and more to uncertain or promising hard tasks. This can dominate a fixed per-task allowance at the same total benchmark cost. But it introduces another learned component: the router or stopping rule. Fair evaluation must charge its computation and freeze it before testing. A router tuned on the test set can exploit task-specific knowledge. Aggregate budget matching also permits uneven treatment, so reports should provide both the total allocation and the distribution across tasks: median, quantiles, maximum, and accuracy by spend bin.

Early stopping makes comparisons especially delicate. If a correct answer is cheaply verifiable, a system can stop as soon as it succeeds and spend the remainder elsewhere. If correctness is unknown until final grading, the same strategy is unavailable. Evaluations should distinguish **oracle allocation**, which uses hidden correctness, from **deployable allocation**, which uses only information available to the system at inference time.

## Agents turn budget into an experimental treatment

For tool-using agents, a “sample” may itself be a long policy rollout. Two nominally identical model runs can differ because one agent has a repository map, persistent memory, a stronger system prompt, more permissive tools, longer action timeouts, or repeated grader feedback. The scaffold may use a second model for planning or verification. Counting only the primary model's tokens understates the actual procedure.

METR's published evaluations show why multiple constraints should be visible. Its preliminary Claude 3.7 Sonnet report describes General Autonomous Capabilities runs with a token ceiling designed not to bind, including an 8-million-token budget for token-hungry o1-family scaffolds. For its five-task RE-Bench subset, individual Claude 3.7 attempts lasted 30 minutes or 2 hours and received interim score feedback; reported budgets up to 32 total hours per task aggregate multiple shorter attempts by taking the maximum achieved score. METR also reported overlapping confidence intervals for some model comparisons and estimated agent-attempt costs separately from human baselines. The meaningful result is conditional on this scaffold, task environment, feedback channel, and time allowance—not a timeless rank of raw models.

Wall-time caps also interact with latency. A slower model may produce fewer actions before a deadline even if it is more accurate per action. Parallel sampling may reduce elapsed time while increasing aggregate accelerator use. Tool latency can dominate generation latency. Therefore report at least three quantities: total work (tokens, calls, compute, dollars), critical-path elapsed time, and permitted parallelism. Each corresponds to a different deployment question.

Retries require a precommitted rule. A defensible policy might retry transport errors up to twice with identical inputs, record all attempts and costs, and score the task as failed if the final retry fails. Semantic failures receive no automatic reset unless retries are explicitly part of every system's budget. Excluding failed requests after seeing which model suffered them changes the denominator and can bias results.

## Accuracy–cost frontiers instead of one leaderboard column

A single budget point cannot show whether one system is better or merely more heavily elicited. Evaluate each system at several predeclared budget levels and plot expected utility or accuracy against cost. System $i$ at budget $b$ yields quality $q_i(b)$ and resource vector $r_i(b)$. A point is **Pareto-dominated** if another system achieves at least as much quality with no more of every relevant resource and strictly improves one dimension.

In practice, evaluators often need two-dimensional views:

- accuracy versus dollars for a buyer;
- accuracy versus wall time for an interactive user;
- accuracy versus generated tokens or estimated FLOPs for algorithmic efficiency;
- success versus tool calls for constrained environments;
- risk-adjusted utility versus total cost when false positives and harmful actions matter.

No single scalar conversion is neutral. Ten dollars and ten minutes have different values in emergency response, overnight research, and bulk offline coding. Publish the frontier and let users apply their own utility function. If one summary number is necessary, state the exchange rate and conduct sensitivity analysis.

Uncertainty belongs on the frontier. Benchmark accuracy is an estimate over a finite task sample and often over stochastic model runs. Report confidence intervals that account for tasks as the principal sampling unit; for repeated stochastic trials, use a hierarchical or clustered bootstrap rather than treating correlated attempts as independent tasks. Paired evaluation on the same questions improves precision. Task-level results reveal whether a higher mean reflects broad improvement or a few expensive wins.

Cost uncertainty matters too. Quote the pricing date, cache assumptions, failed-call charges, and exchange rate if relevant. For local models, disclose the amortization and utilization assumptions behind dollar estimates. A frontier based on list-price APIs is a deployment frontier, not necessarily a frontier in physical inference efficiency.

## A fair reporting protocol

The following protocol supports both scientific comparison and practical purchasing decisions.

1. **Freeze the target.** Name the benchmark version, split, scorer, task count, exclusions, contamination policy, and as-of date. Predeclare the primary metric and what constitutes success. Preserve all attempted tasks in the denominator under a stated failure policy.

2. **Identify the complete system.** Record exact model and API snapshot, prompt, decoding parameters, context limit, reasoning-effort control, scaffold and code revision, tools, verifier models, retrieval corpus, and environment image. Say which components are proprietary or unobservable.

3. **Define matched envelopes before running.** Include at least a common user-facing condition—often one submitted answer under the same tools, wall time, and cost ceiling—and several cost levels for frontier estimation. Exact token matching can be added but should not substitute for monetary, time, and capability-matched views.

4. **Measure every resource.** Log per task all input, cached, output, and exposed reasoning tokens; candidate count; model and verifier calls; tool calls; elapsed and CPU/GPU time where available; retries; human interventions; and charges. Count unsuccessful and discarded work.

5. **Separate metrics.** Report pass@1, pass@k, consensus@k, and verifier-selected best-of-$k$ under their exact names. State whether hidden tests or oracle correctness were used for selection. Never compare an oracle-selected result with an unverified single submission as if they measured identical use.

6. **Run repeated, paired trials.** Use common tasks and, where technically meaningful, common random seeds. Randomize run order to reduce temporal API effects. Collect enough independent task instances for uncertainty estimates; disclose when cost prevents adequate power.

7. **Publish curves and distributions.** Show quality at each budget, marginal improvement from additional compute, per-task spend quantiles, latency, failure types, and Pareto frontiers. Include a one-sample operational point even if a larger ensemble is the headline system.

8. **Audit adaptivity.** Describe routers, stopping rules, difficulty predictors, and verifier training data. Evaluate them on held-out tasks. Report wasted compute and cases in which more compute reduced answer quality.

9. **Perform ablations.** Remove tools, verifier, retries, and multi-sample aggregation where feasible. These experiments distinguish gains from the base model, longer reasoning, sampling diversity, selection quality, and environment feedback.

10. **Release inspectable artifacts.** Publish the harness, prompts, task-level scores, model transcripts to the extent safety and terms permit, resource logs, and analysis code. Epoch AI's benchmark pages provide a useful pattern by linking run logs that expose interactions, scoring, and token counts. Redact sensitive reasoning traces when required, but do not replace missing data with false precision.

The protocol deliberately reports two kinds of fairness. **Resource fairness** asks what happens when systems receive comparable budgets. **Product fairness** asks what each provider's best publicly available system can deliver at its own optimal configuration and price. Both are legitimate; they answer different questions. A report should show both rather than choosing whichever flatters one system.

## Counterevidence and limits

Budget normalization cannot isolate an intrinsic, context-free “intelligence.” Equal dollars may favor subsidized APIs; equal tokens may favor architectures that do more computation per token; equal FLOPs may be impossible to estimate; equal wall time may reward parallel hardware; equal tool calls ignore tool quality. Even a detailed resource vector omits training compute, research labor, and the value of proprietary data.

Nor is a fully optimized scaffold necessarily a confound. If the deployment question is which purchasable system solves the task, model-plus-scaffold is exactly the relevant object. Conversely, a base-model research question requires controlled scaffolds. The mistake is not choosing one level; it is changing levels silently.

Finally, benchmarks can be contaminated, saturated, or weakly related to real work. Matching reasoning budgets makes a comparison cleaner but cannot repair invalid tasks or a scorer that rewards superficial output. [[Benchmark contamination and saturation]], [[Long-horizon task reliability]], calibration, and safety must be assessed alongside the accuracy–cost curve.

## Why it matters

Inference-time scaling has made benchmark performance partly a purchasing and allocation decision. Without budget disclosure, a new score can reflect a stronger model, more samples, a better verifier, more tools, a longer deadline, or all five. That ambiguity distorts frontier rankings, deployment estimates, and forecasts of algorithmic progress.

A mature [[AI evaluation as measurement science]] treats the inference procedure as the unit of observation, publishes matched-budget points and an accuracy–cost frontier, and preserves system-level evidence without attributing every gain to model weights. This makes claims more modest, but also more useful: readers can estimate what reliability they can actually buy under their own constraints.

## Sources

- Mark Chen et al., “Evaluating Large Language Models Trained on Code” (HumanEval paper, 2021): https://arxiv.org/abs/2107.03374
- OpenAI, HumanEval evaluation harness and pass@k implementation: https://github.com/openai/human-eval
- Xuezhi Wang et al., “Self-Consistency Improves Chain of Thought Reasoning in Language Models” (2022): https://arxiv.org/abs/2203.11171
- Charlie Snell et al., “Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters” (2024): https://arxiv.org/abs/2408.03314
- OpenAI, “Learning to reason with LLMs” (o1 announcement and evaluation settings, 2024): https://openai.com/index/learning-to-reason-with-llms/
- METR, “Details about METR's preliminary evaluation of Claude 3.7” (accessed 2026-07-09): https://metr.org/evaluations/claude-3-7-report/
- METR, “Details about METR's preliminary evaluation of GPT-4o” (accessed 2026-07-09): https://evaluations.metr.org/gpt-4o-report/
- Epoch AI, “About Benchmarking” (run-log and methodology transparency, accessed 2026-07-09): https://epoch.ai/benchmarks/about
- Epoch AI, “FrontierMath Tiers 1–4: About” (tools, holdouts, and benchmark versioning, accessed 2026-07-09): https://epoch.ai/frontiermath/tiers-1-4/about

## Open questions

- What cross-provider proxy best approximates physical inference compute when parameter counts, hidden reasoning tokens, and accelerator details are unavailable?
- How should confidence intervals combine finite task sampling, stochastic decoding, and adaptive per-task resource allocation?
- Which stopping rules improve the accuracy–cost frontier on genuinely novel tasks without learning benchmark-specific difficulty cues?
- How should evaluations price tool feedback that leaks partial correctness, such as public tests or interim scores?
- Can a standard machine-readable resource log make model, scaffold, verifier, and retry budgets comparable across public leaderboards?
