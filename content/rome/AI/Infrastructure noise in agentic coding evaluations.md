---
title: Infrastructure noise in agentic coding evaluations
created: 2026-07-09
source: llm
status: seed
tags: [ai, agents, evaluation, coding-agents, benchmarks]
as_of: 2026-07-09
desk: AI frontier news
review_after: 2026-08-09
---
Infrastructure is part of an agentic coding experiment: memory ceilings, CPU allocation, sandbox enforcement, concurrency, caching, and service latency can change both whether a run finishes and which problem-solving strategies succeed.

Up: [[AI agents (MOC)]]

## The hidden system behind a leaderboard score

A static language-model evaluation can sometimes approximate a simple mapping from prompt to answer. An agentic coding evaluation cannot. It embeds a model in a loop that reads files, invokes a shell, installs dependencies, edits code, runs tests, and reacts to observations. Every step passes through a scaffold and an execution environment. The reported score therefore belongs to an evaluated system, not to model weights in isolation.

That system includes at least four layers:

1. the exact model endpoint, sampling settings, and inference service;
2. the agent scaffold, prompts, tools, context policy, and retry logic;
3. the task image, package repositories, network policy, grader, and tests; and
4. the compute substrate that supplies CPU, memory, disk, process limits, and wall-clock time.

The fourth layer is easy to treat as plumbing. It is not neutral. If a container is killed during a transient memory spike, the run fails even if the proposed approach was sound. If the same container receives abundant memory and CPU, an agent can install a large scientific stack or brute-force a solution that would be infeasible under a tighter deployment budget. Infrastructure can therefore introduce noise, remove noise, or change the construct being measured.

This distinction is central to [[Model versus scaffold in agent evaluations]] and [[Reasoning budget and fair model comparison]]. A leaderboard may be a valid end-to-end product comparison when each entry is intentionally allowed to use its own stack. It is not automatically a controlled comparison of underlying models. The interpretation depends on which components were matched and which were part of the contestant.

## What Anthropic measured in February 2026

On February 5, 2026, Anthropic published an engineering study of resource configuration in Terminal-Bench 2.0 and SWE-bench. The paper is unusually useful because it varies infrastructure while holding the model, harness, and task set fixed. It is also **first-party evidence from a frontier-model developer** evaluating its own Claude-based systems. Its measurements deserve attention, but the cross-model generalization is limited and should not be treated as an independent universal law.

The Terminal-Bench experiment arose from a reproduction problem. Anthropic ran the benchmark on Google Kubernetes Engine and initially observed infrastructure error rates as high as 6 percent. Its containers treated each task's specified resources as both a guaranteed allocation and a hard ceiling. A transient excursion above the ceiling could therefore trigger an out-of-memory kill. The benchmark leaderboard used a different sandbox provider whose enforcement allowed temporary overallocation, making nominally similar resource specifications behave differently.

Anthropic then ran the same Claude configuration across six resource regimes, from strict enforcement at the benchmark specification to uncapped resources. Two effects appeared.

First, additional headroom reduced infrastructure failures. Reported infrastructure errors fell from 5.8 percent under strict enforcement to 2.1 percent at three times the specified headroom, and the reduction was statistically significant at $p<0.001$. Over this moderate range, success-score movement remained within noise in the reported analysis ($p=0.40$). The extra capacity mostly prevented spurious container deaths rather than making the substantive tasks easier.

Second, beyond roughly three-times headroom, added resources began to enable strategies that changed task success. From three-times to uncapped resources, infrastructure errors fell another 1.6 percentage points while success rose by almost four points. Across the strict-to-uncapped comparison, the success-rate spread reached six percentage points ($p<0.01$). Some agents could now install heavy dependencies, spawn expensive subprocesses, or run memory-intensive test suites that failed under tighter limits.

The difference is conceptual. Resource headroom below a calibrated threshold may improve measurement reliability by preventing accidental kills. Resource headroom above that threshold may increase measured capability by expanding the action space. Both effects change the validity or interpretation of recorded outcomes, but only the first is plainly noise removal; in Anthropic's one-times-to-three-times range it did not produce a statistically distinguishable score increase.

Anthropic also performed a crossover experiment on 227 SWE-bench problems with ten samples per problem, varying available RAM up to five times a baseline. Scores increased monotonically, with a smaller reported difference of 1.54 percentage points between the one-times and five-times settings. The result suggests that resource effects are not unique to Terminal-Bench, while the smaller magnitude also shows that the effect depends on task distribution and environment.

These figures should retain their scope. They do not show that every model gains six points from more memory, that every leaderboard gap below six points is false, or that Anthropic's resource policy is uniquely correct. Anthropic says it replicated the direction across several Claude models but had not rigorously tested the same pattern across non-Claude models. The experiment isolates one family of infrastructure variables on two coding benchmarks. It does not cover all providers, inference stacks, clouds, or task suites.

## Failure noise versus resource-enabled capability

A useful evaluation should distinguish at least three outcomes that aggregate scoring can collapse together.

**Substantive failure** means the agent had a functioning environment but chose an incorrect strategy, produced a bad patch, or failed to satisfy the grader. This is the intended signal.

**Infrastructure failure** means the run became invalid because the evaluation substrate failed: a pod crashed, an image could not start, storage was exhausted, a dependency mirror disappeared, or a service timed out independently of the agent's strategy. Counting such a run as an ordinary model failure biases the score toward whichever systems happen to interact more gently with the infrastructure.

**Resource-conditioned failure** sits between them. The environment behaved exactly as configured, but the agent chose a strategy that exceeded a legitimate memory, CPU, disk, or time budget. If the benchmark intends to measure efficient work under constraints, this is a substantive failure. If the ceiling was an undocumented artifact of one runner, it is a comparability defect. The same killed process can thus be signal or noise depending on the target construct.

Suppose the desired deployment is a constrained laptop agent. Rewarding a system for pulling multi-gigabyte dependencies under uncapped cloud resources may overstate its fitness. Suppose instead the desired deployment is an enterprise agent with elastic compute. A strict low-memory sandbox may punish a perfectly reasonable production strategy. There is no context-free “correct” resource budget. There is only a budget matched—or not matched—to the question being asked.

This is why resource controls must be specified as experimental variables. CPU count alone is insufficient. Evaluators should state guaranteed allocation, burst allowance, hard kill threshold, memory and swap policy, disk quota, file-descriptor and process limits, network bandwidth and egress rules, and task timeout. A nominal “8 GB” environment can behave differently if one platform kills at exactly 8 GB while another reserves 8 GB but permits short bursts.

## Official harnesses improve reproducibility but do not eliminate the problem

Terminal-Bench 2.0 is a set of 89 hard terminal tasks distributed through the Harbor framework. Its task specifications can declare resource requirements, and its official artifacts define task images, graders, and execution conventions. That is an important reproducibility layer: the benchmark is not merely a list of natural-language questions.

Yet a specification must still be enforced by a runner. Container runtimes distinguish requested or guaranteed resources from hard limits. Cloud providers schedule and throttle workloads differently. Concurrent jobs can contend for host memory, disk bandwidth, and network capacity. If the benchmark's public description names a resource quantity without pinning enforcement semantics, two compliant-looking runners can expose agents to different tests.

SWE-bench similarly uses Docker images to reproduce repository states, apply generated patches, and run test suites. Its official harness documents operational requirements of at least 120 GB free storage, 16 GB RAM, and eight CPU cores, and recommends limiting parallel workers according to available CPUs. It exposes controls such as evaluation timeouts, open-file limits, caching levels, worker count, and image rebuilding. These are not mere conveniences. Changing concurrency can create resource contention; changing cache state alters build latency and storage demand; changing timeout changes which trajectories can finish.

Containers solve one class of reproducibility problem by packaging software state. They do not make the host, scheduler, network, or inference endpoint identical. Nor do they guarantee that all failures are correctly classified. A robust run should preserve build logs, agent trajectories, container exit reasons, grader output, and host-level resource telemetry so that a failed score can be audited.

## A practical replication protocol

A comparison intended to support a model claim should pre-register a matched protocol rather than reconstruct settings after scores are known.

### 1. Define the estimand

State whether the target is model capability under a common scaffold, end-to-end agent-product quality, or performance per dollar under a deployment budget. These are different experiments. A common-scaffold study should match tools, prompts, context policy, retries, and resource controls. A product comparison may preserve native scaffolds, but should describe the result as a system comparison.

### 2. Pin artifacts and identity

Record benchmark version and commit, task-set hash, container image digests, grader version, scaffold commit, model identifier, API revision or date, sampling settings, and all prompt templates. Preserve task exclusions and the rule that produced them. Mutable model aliases and `latest` container tags are inadequate.

### 3. Specify resource semantics

For each task, publish CPU guarantees and ceilings, memory guarantees and kill thresholds, swap, disk and inode quotas, process and file-descriptor limits, GPU access, network rules, and wall-clock timeout. Record the host architecture, container runtime, orchestration platform, region, and sandbox provider. If bursting is allowed, state its duration and ceiling.

### 4. Calibrate before the main comparison

Run gold solutions and environment smoke tests. Then perform a small resource sweep on a stratified task sample. The goal is to find a range where infrastructure failures are low and substantive scores are stable. Anthropic's reported three-times ceiling is an empirical result for its setup, not a universal default. Each benchmark and runner needs its own calibration.

### 5. Randomize and repeat

Interleave model and resource conditions across time rather than running one system entirely during a quiet service period and another during peak load. Randomize task order. Use repeated trials because agent sampling and external APIs are stochastic. Monitor endpoint latency, rate-limit responses, container startup time, CPU throttling, peak memory, disk I/O, and network failures.

### 6. Separate failure classes before aggregation

Define infrastructure-invalid, policy-invalid, timeout, resource-exhaustion, grader-error, reward-hack, and substantive-failure categories in advance. Automatically rerun only categories whose rerun rule was pre-specified. Otherwise selective reruns can quietly become extra attempts for one system. Report both the raw all-attempt score and a valid-run score, with counts for every exclusion.

### 7. Publish uncertainty and sensitivity

Release task-level outcomes, sample counts, confidence intervals, and paired differences where tasks are shared. Show sensitivity to reasonable resource regimes rather than one decimal-place score. If model order changes under modest infrastructure variation, the correct conclusion is that the ranking is unresolved under the tested conditions.

### 8. Preserve an auditable packet

Archive commands, configuration files, image digests, logs, trajectories where licensing permits, resource telemetry, grader outputs, and analysis code. A reader should be able to determine whether an out-of-memory event was a model strategy failure, a host failure, or a runner-policy choice.

## Counterarguments and limits

One counterargument is that production systems also face flaky services and finite resources, so infrastructure sensitivity is itself a capability. There is truth here. An agent that writes lean code, chooses small dependencies, retries safely, and diagnoses an out-of-memory kill may be more robust in deployment. But this interpretation requires the resource regime to be intentional and representative. Random pod instability is not a principled efficiency test, and an undocumented difference between sandbox providers is not a fair model comparison.

Another argument is that matching every variable is impossible. Hosted inference stacks are opaque; API latency changes; models may require different tool schemas; optimal scaffolds are model-specific. Perfect control is indeed unavailable. The response is not to abandon comparison, but to narrow the claim. A native-product benchmark answers which submitted system performed best under the benchmark's accepted rules. A matched-harness experiment estimates a more specific model contrast. Neither establishes context-free intelligence.

A third concern is that strict standardization could reward benchmark-specific optimization and suppress useful system design. That is why the field benefits from both controlled and ecological evaluations. Controlled runs isolate causal differences. Native-stack runs measure practical packages. Reporting both reveals whether a gain comes from the model, the scaffold, the infrastructure, or an interaction among them.

Finally, the Anthropic experiment itself should not become a talisman. It is a disclosed first-party study, not a broad independent replication. Its strongest contribution is demonstrating a mechanism with quantitative examples and publishing enough methodological detail to motivate replication. Confidence should rise if benchmark maintainers or independent groups reproduce the pattern across models, clouds, and task types.

## Why it matters

Frontier coding leaderboards often separate systems by only a few percentage points. Anthropic's experiment found that infrastructure configuration could produce a spread larger than such gaps in one Terminal-Bench setup. A precise-looking rank can therefore exceed the precision of the experiment that generated it.


It also matters for builders. The environment is part of reliability engineering. A local agent that fails because Docker Desktop has too little memory is not necessarily a weak reasoner; a cloud agent that succeeds only with uncapped resources is not necessarily economical or deployable. Useful evaluation connects a result to the resource envelope a real workflow can afford.

The durable lesson is not that benchmarks are meaningless. It is that an agentic coding score is an end-to-end measurement whose apparatus must be visible. Resource controls belong beside model version and prompt in the experimental record. When the apparatus changes the ranking, the change is evidence about the measurement system—and sometimes about the agent's strategy—not permission to pretend the model alone moved.

## Sources

- [Anthropic, Quantifying infrastructure noise in agentic coding evals](https://www.anthropic.com/engineering/infrastructure-noise) — first-party engineering experiment, February 5, 2026; accessed July 9, 2026.
- [Terminal-Bench, Introducing Terminal-Bench 2.0 and Harbor](https://www.tbench.ai/news/announcement-2-0) — official benchmark announcement and task/harness overview.
- [Terminal-Bench 2.0 repository](https://github.com/harbor-framework/terminal-bench-2) — official task artifacts and Harbor invocation; accessed July 9, 2026.
- [Merrill et al., Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces](https://arxiv.org/abs/2601.11868) — benchmark paper and Terminal-Bench 2.0 task construction.
- [SWE-bench evaluation harness reference](https://www.swebench.com/SWE-bench/reference/harness/) — official Docker architecture, controls, and resource requirements; accessed July 9, 2026.
- [SWE-bench repository](https://github.com/SWE-bench/SWE-bench) — official benchmark, images, grading, and evaluation commands; accessed July 9, 2026.

## Open questions

- Does the six-point Terminal-Bench resource spread replicate across non-Claude models and independent clouds?
- Which benchmark-specific headroom minimizes spurious kills without enabling qualitatively different strategies?
- Should resource exhaustion count as capability failure, efficiency failure, or invalid infrastructure when deployment targets differ?
- How much leaderboard variance comes from inference-service latency and rate limits rather than task containers?
- Can benchmark maintainers publish paired controlled-stack and native-product leaderboards without encouraging misleading cross-column comparisons?
