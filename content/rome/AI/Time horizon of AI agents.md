---
title: Time horizon of AI agents
created: 2026-07-09
source: llm
status: seed
tags: [ai, agents, evaluation, benchmarks, autonomy]
as_of: 2026-07-09
---

An AI agent's task-completion time horizon is the human-expert duration of tasks at which a fitted evaluation curve predicts a chosen probability of success; it is a difficulty-calibrated benchmark statistic, not the time the agent runs unattended.

Up: [[AI agents (MOC)]]

Related: [[Long-horizon task reliability]] · [[Model versus scaffold in agent evaluations]] · [[Reasoning budget and fair model comparison]]

## What the metric is trying to make legible

Ordinary benchmark accuracy says what fraction of a fixed question set a system passed. That is useful, but it does not translate naturally into the scale of work a person recognizes. A score of 62% on an agent benchmark does not tell a reader whether the successful tasks resemble five-minute fixes or day-long investigations. The **task-completion time horizon** adds a human-calibrated difficulty axis: each task is labeled by how long a relevant human expert takes to complete it, and agent success is modeled as a function of that label.

METR introduced the 50% task-completion time horizon in 2025 using tasks drawn from RE-Bench, HCAST, and novel shorter software tasks. Its later Time Horizon 1.1 suite expanded the evaluation to roughly 230 tasks in about 80 partially related families. The tasks primarily cover software engineering, machine learning, cybersecurity, and research engineering. They are intentionally self-contained, scoreable, and supplied with environments and success criteria. This makes repeated controlled trials possible, but it also defines the metric's domain: it is evidence about performance on this task distribution, not a universal clock for all cognitive work.

For each evaluated **agent system**, the experiment produces pass/fail attempts across tasks of different human durations. “Agent system” matters. A result belongs to the exact model, prompt, tool interface, scaffold, sampling settings, token or wall-clock limits, and evaluator—not to model weights in isolation. Changing the harness may change the horizon even if the model does not change. This is why comparisons should be read alongside [[Model versus scaffold in agent evaluations]].

The resulting horizon answers a deliberately narrow question:

> On tasks like those in the evaluation suite, at what human-expert task duration does the fitted model predict this agent system will succeed with probability $q$?

The common choice is $q=0.5$, hence the 50% horizon. METR also reports an 80% horizon. Neither threshold is intrinsically privileged. Fifty percent is statistically convenient and useful for trend measurement; many real deployments need much higher reliability.

## From task outcomes to the 50% horizon

The calculation has two different fits that are easy to conflate.

First, within one agent evaluation, success probability is fit against task length. METR's current two-parameter form can be written as

$$
p_{\text{success}}(t)=\sigma\!\left(\beta[\log h-\log t]\right),
\qquad
\sigma(x)=\frac{1}{1+e^{-x}}.
$$

Here $t$ is the task's human-duration label, $h$ is the fitted 50% horizon, and $\beta$ controls how sharply predicted success falls as task duration increases. Setting $t=h$ makes the expression inside $\sigma$ zero, so $p_{\text{success}}=0.5$. Repeated attempts are binary observations, normally several per task; recent METR descriptions say typically eight, with variation. Related tasks are grouped into families and weighted so a family with many near-duplicate tasks does not automatically dominate the fit.

The log-duration term embodies a scale intuition: moving from ten minutes to an hour can be treated more like moving from one hour to six hours than like adding a fixed fifty minutes. A logistic curve enforces a smooth, monotonic decline from easier to harder tasks. It is a parsimonious summary, not a claim that task difficulty literally has one dimension or that every task of a given duration has the same success probability.

This distinction matters at the task level. METR notes that for tasks near a system's nominal horizon, some may be passed on every attempt, some failed on every attempt, and others solved stochastically. The fitted probability averages over task identities and trials conditional on the suite and weighting. A two-hour horizon therefore does **not** imply that every two-hour task has a 50% chance of success, nor that the agent can solve 50% of all possible two-hour tasks.

Second, after estimating a horizon for many systems released at different dates, researchers may fit a trend through those horizon estimates. The original paper found that an **exponential** trend described frontier horizons better than linear or hyperbolic alternatives over its studied period. In log space, the trend is approximately linear:

$$
\log h(d)=a+kd,
$$

where $d$ is release date. The implied doubling time is $\ln 2/k$. The original 2019–2025 analysis reported an approximate seven-month doubling time, with evidence that the pace had accelerated in 2024. A later METR analysis of the public frontier after January 2024 reported a much faster fit, about 105 days, over that selected interval.

Those figures describe different windows and should not be blended into one timeless constant. A doubling-time estimate depends on which models qualify as frontier, the date assigned to each system, task-suite revisions, elicitation quality, and the chosen breakpoint. Exponential fit here means “historically fit these measurements reasonably well,” not “must continue exponentially.” Forecasts that mechanically extend the line beyond the range of well-measured tasks add a second layer of uncertainty to the uncertainty in each horizon.

## How tasks and human-time labels are constructed

A time horizon is interpretable only if both sides of its calibration are credible: tasks must represent coherent work, and “human time” must mean something reproducible.

METR's tasks are designed to be self-contained, well specified, and automatically or otherwise clearly gradable. Public examples include implementing software behavior, reproducing research results, optimizing an unfamiliar program, or exploring a supplied environment. The Task Standard packages instructions, assets, environment configuration, and scoring. Human and agent attempts should receive substantially the same task information and affordances. Scoreability is crucial because noisy or subjective grading would be mistaken for agent unreliability.

For most tasks, METR hires people with relevant expertise to attempt them under timed conditions. Only successful completions enter the principal observed-time aggregation, and the task label is the **geometric mean** of successful baseline times when multiple baseliners succeed. The geometric rather than arithmetic mean reduces the influence of unusually long attempts in a right-skewed time distribution. Where reliable completed baselines are unavailable, METR may use expert estimates or timings from quality-assurance tests.

This procedure is practical but not neutral. Baseliners may be unfamiliar with the repository, domain, or evaluation interface, whereas a professional doing analogous work may carry years of local context. METR explicitly says its labels likely overestimate how long an expert embedded in normal work would take. Conversely, excluding failed human baselines discards information that a task took longer than the allowed attempt; METR has noted that incorporating those failures through survival analysis could increase some estimated task lengths. Expert estimates and QA times introduce different measurement regimes within one suite.

Human duration is also only a proxy for difficulty. Two tasks that each take an expert two hours can demand different skills, contain different numbers of fragile dependencies, and respond very differently to an agent's tools. Duration partly reflects typing, reading, environment setup, prior familiarity, and human work habits. A model may compress some of those components dramatically while remaining weak on one decisive conceptual step. The fitted relationship is useful because human time correlates with task complexity in the studied suite, not because time is a complete theory of difficulty.

Task construction creates selection effects. Self-contained, automatically graded tasks are easier to evaluate than work involving tacit organizational knowledge, ambiguous preferences, negotiation, physical action, or consequences that unfold over weeks. Software-heavy suites can underrepresent requirements discovery, stakeholder coordination, maintenance, and the cost of confidently wrong outputs. Contamination is another concern: publishing tasks aids scrutiny but can expose solutions to training or evaluation-specific optimization. METR's public task repository therefore exposes examples and metadata while protecting some task assets and asks developers not to train on designated evaluation tasks. See [[Benchmark contamination and saturation]].

## Confidence, saturation, and modeling limits

A horizon is an estimate with sampling and modeling uncertainty, not a directly observed boundary. The observations are task attempts; the crossing point is inferred. Confidence intervals can be obtained by resampling the evaluation data, including task families, then refitting. Because different model evaluations reuse much of the same task set, uncertainty across model estimates is correlated. A wide interval for one model does not necessarily mean the difference between two systems is equally uncertain, but comparisons still require the joint analysis rather than eyeballing point estimates.

Coverage around the crossing point is essential. If an agent succeeds on nearly every available task, its fitted 50% crossing lies beyond or near the edge of the suite. The estimate then becomes extrapolation driven by a small number of failures and by the curve's assumed shape. METR's May 2026 results page warns that measurements above 16 hours are unreliable with the current suite. Its 2026 frontier-risk report described Time Horizon 1.1 as 228 tasks ranging from about one second to 30 hours, yet recent-system saturation still made estimates sensitive to analysis choices. Having some 30-hour tasks is not the same as having enough varied, informative tasks to constrain a 20-hour crossing.

METR documented this sensitivity after fixing a regularization mistake in its fitting pipeline; the correction lowered some recent 50% estimates by as much as roughly 20% while affecting earlier systems less. Its modeling analysis also found that the two-parameter logistic form can be sensitive to performance on very easy tasks. A shallow fitted slope can raise the 50% horizon while depressing the 80% horizon. The current model cannot independently shape the high- and low-success regions, so reported 50% and 80% horizons are not fully independent measurements.

Alternative monotonic fits, more task coverage, and better treatment of task heterogeneity could improve the estimator. But complexity has a cost: METR emphasizes that its bootstrap pipeline refits curves hundreds of thousands of times, and sparse data do not support arbitrarily flexible models. The right response is not to discard the metric. It is to expose the curve, confidence interval, task coverage, weighting, and sensitivity analyses rather than treating one horizon number as a leaderboard score.

The evaluator is another source of construct validity. In a 2026 analysis of SWE-bench-style patches, METR found that horizons calculated from automated test passing could substantially exceed horizons based on whether maintainers judged a patch mergeable. That comparison used a narrower task-duration range and was itself less stable, but it illustrates the key point: changing “success” changes the measured capability. Tests may miss code quality, specification fit, security, or maintenance costs. A horizon inherits every blind spot of its grader.

## How not to interpret a time horizon

**Not agent runtime.** A two-hour horizon does not say the agent ran for two hours. The two hours label the time a human expert takes. METR reports that agents are often several times faster than humans on tasks they solve, partly because code generation and action speed differ, but agent wall-clock time varies by provider and scaffold.

**Not an autonomy timer.** It does not imply the system can operate unattended for that duration while preserving goals and constraints. An agent might run for a day on a short-human-time task, or rapidly finish a task labeled many hours. Continuous safe operation involves state, permissions, recovery, and oversight beyond task completion.

**Not universal task coverage.** It is not a claim about 50% of all tasks taking humans that long. It is a fitted average over a particular, software-heavy evaluation distribution. Performance on legal work, scientific wet labs, management, or personal assistance cannot be inferred without representative evidence.

**Not a delegation threshold.** Even inside the benchmark's domain, tasks below $h$ are not guaranteed successes. At the 50% point, failure is expected half the time under the model. High-consequence or poorly verifiable work may demand 98% or greater reliability. The relevant threshold depends on failure cost, detectability, retry value, and human review.

**Not job replacement or economic automation.** A job bundles tasks, context, coordination, accountability, and recovery from unusual cases. Translating task horizons into labor effects requires workflow-level data about prompting, checking, waiting, correction, and integration. Doubling a horizon does not automatically double the fraction of a job automated or halve human labor.

**Not a model-only property.** Results belong to a system configuration. Better tools, prompts, inference budgets, or verifiers can extend measured horizon; restrictive environments can shorten it. Reporting only the model name hides causal attribution.

**Not proof of endless exponential growth.** A historical exponential trend is a regression over past releases. Suite saturation, capability bottlenecks, data contamination, product choices, and evaluation changes can bend it. Extrapolated month- or week-scale autonomy claims should state the fitted window and uncertainty explicitly.

## Why it matters

Time horizons supply something benchmark discourse badly needs: a scale that distinguishes success on atomic actions from success on coherent projects. When task construction and grading are transparent, the curve shows where reliability begins to decay and makes progress across task scales visible. It is more informative than one pooled accuracy because it asks whether gains are concentrated on short tasks or extend to longer ones.

The metric also disciplines frontier-news claims. “Model X has a twelve-hour horizon” can sound like a product promise; the precise statement is that a specified agent system had a fitted success crossing on human-timed tasks from a named suite, under a named grader and budget. Preserving that sentence prevents benchmark evidence from silently becoming a forecast about unattended research or whole-job automation.

For system builders, the full curve can guide where verification and decomposition are most valuable. Tasks well below a high-reliability horizon may be candidates for bounded delegation; tasks near the 50% crossing demand retries, checks, or human ownership. Local outcome logs can test whether the external curve transfers to a specific codebase. This connects the estimator to [[Long-horizon task reliability]], which addresses the broader operational question: whether extended work remains correct, constrained, recoverable, and worthwhile.

For forecasters and safety analysts, growth in task horizon is a meaningful warning signal because longer coherent tasks can unlock more consequential forms of automation. But its value comes from measurement discipline, not from the metaphor of an AI “working for N hours.” The durable object is the conditional success curve plus its task distribution and uncertainty. The headline crossing is only a compact coordinate on that richer object.

## Sources

- Kwa et al., [“Measuring AI Ability to Complete Long Tasks”](https://arxiv.org/abs/2503.14499) — original metric, task suites, statistical method, trend fits, and limitations; accessed 2026-07-09.
- METR, [“Task-Completion Time Horizons of Frontier AI Models”](https://metr.org/time-horizons/) — current definition, methodology, human-time calibration, interactive curves, suite coverage, and interpretation FAQ; page last updated 2026-05-08; accessed 2026-07-09.
- METR, [“Clarifying limitations of time horizon”](https://metr.org/notes/2026-01-22-time-horizon-limitations/) — delegation, reliability-threshold, human-baseline, and two-parameter-fit limitations; published 2026-01-22; accessed 2026-07-09.
- Alexander Barry, METR, [“Impact of modelling assumptions on time horizon results”](https://metr.org/notes/2026-03-20-impact-of-modelling-assumptions-on-time-horizon-results/) — explicit logistic model, task-family structure, saturation, regularization correction, and sensitivity analysis; published 2026-03-20; accessed 2026-07-09.
- METR, [“Frontier Risk Report (February to March 2026)”](https://metr.org/blog/2026-05-19-frontier-risk-report/) — Time Horizon 1.1 suite size and range, saturation warning, and post-2024 public-frontier trend method; published 2026-05-19; accessed 2026-07-09.
- METR, [public-tasks repository](https://github.com/METR/public-tasks) — public examples, task families, Task Standard linkage, protected assets, and anti-training requests; accessed 2026-07-09.
- METR, [“Many SWE-bench-Passing PRs Would Not Be Merged into Main”](https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/) — evaluator-dependent horizons and extrapolation limits in a narrower duration range; published 2026-03-10; accessed 2026-07-09.

## Open questions

- How much would horizons change if human task lengths used survival analysis for timed-out or failed baselines?
- Which monotonic model best captures heterogeneous task families without overfitting sparse long-duration outcomes?
- What task suite could validly extend the metric beyond software and research engineering while retaining objective grading?
- How should uncertainty from grader validity be combined with bootstrap uncertainty from tasks and trials?
- Which local workflow measurements best predict whether an external 80% horizon transfers to a real repository with accumulated context?
