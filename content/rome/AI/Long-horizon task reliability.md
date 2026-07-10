---
title: Long-horizon task reliability
created: 2026-07-09
source: llm
status: seed
tags: [ai, agents, evaluation, reliability, frontier-models]
as_of: 2026-07-09
desk: AI frontier news
review_after: 2026-08-09
---
Long-horizon agent reliability is the probability that an entire extended task ends correctly under a stated model, scaffold, budget, and environment—not the model's ability to produce one impressive long trajectory.

Up: [[AI agents (MOC)]]

## The question behind “how long can an agent work?”

The intuitive question is whether an AI agent can work for an hour, a day, or a week. The measurable question is harder: **what counts as working, at what success probability, on which distribution of tasks, with which tools and interventions?** A system that sometimes completes an eight-hour software task is not equivalent to one that completes comparable tasks reliably. A system that stays active for eight hours may merely be accumulating plausible-looking actions, hidden errors, or unresolved state.

This distinction matters because agentic work is a chain. The model must interpret the goal, inspect an environment, choose tools, preserve state, detect failures, recover, and verify the final artifact. A fluent transcript can conceal a wrong intermediate assumption. The longer the chain, the more opportunities there are for a small mistake to become a branch point from which later competent actions cannot recover.

A prominent current public operationalization is METR's **task-completion time horizon**. METR asks human experts to complete a diverse set of mostly software and research-engineering tasks, estimates how long those tasks take humans, runs an AI agent on the same tasks, and fits a curve from task duration to probability of success. A model's 50% time horizon is the human-task duration at which the fitted curve predicts a 50% success probability; its 80% horizon is the corresponding duration at which the fitted curve predicts an 80% success probability.

That is more informative than asking for the longest solved task. It is still not a universal clock for autonomy. The unit is estimated *human expert time*, not agent wall-clock time. The result depends on the task suite, scoring, scaffold, model settings, elicitation quality, and the statistical fit. It measures a particular evaluated system on a particular distribution.

## Reliability is a system property

An agent result belongs to a configuration, not just a model name. A useful representation is

$$
R = P(\text{valid completion}\mid M,S,T,B,E,H),
$$

where $M$ is the model and version, $S$ the scaffold, $T$ the available tools, $B$ the inference and retry budget, $E$ the environment, and $H$ the permitted human intervention. Change any term and the measured reliability can change.

The scaffold decides what the model sees, when it is called, how tool outputs are serialized, whether context is summarized, when tests run, and whether the system retries. Tools determine which actions are possible. The environment determines whether an action has stable feedback or hidden side effects. The budget determines whether the agent can explore several hypotheses or must commit early. Human intervention may rescue a run that would otherwise fail.

This is why [[Model versus scaffold in agent evaluations]] is not a semantic nicety. “Model X solved 70%” may mean that a named model, inside one laboratory's private harness, with a large token budget and automatic retries, solved 70%. It does not establish that an API call to the same model will reproduce the result, nor that another model would lose under the same harness.

The same point applies to [[Reasoning budget and fair model comparison]]. Pass@1 with one trajectory is a reliability claim. Best-of-eight with a verifier is a search system. Both may be useful, but they answer different questions. A long-horizon benchmark should report which one it measured.

## Why errors compound

A simple model makes the problem visible. Suppose a task requires $n$ consequential stages and the probability of successfully passing each stage, conditional on reaching it correctly, is $p$. If failures are independent and none can be recovered, end-to-end reliability is

$$
R=p^n.
$$

At $p=0.99$, ten stages yield about 90% success, fifty yield about 61%, and one hundred yield about 37%. The numbers are illustrative, not a model of real agents. Actual stages are neither independent nor equal. Some errors are harmless; some are detected; some make later failure almost certain. The important lesson is structural: high local competence does not automatically become high workflow reliability.

Long tasks introduce at least six compounding channels:

1. **Goal drift.** A locally reasonable subgoal gradually displaces the user's actual success condition.
2. **State corruption.** The agent forgets, compresses, or misrecords an earlier fact and later treats the corrupted state as ground truth.
3. **Tool cascades.** One malformed command, bad parse, or stale page changes what subsequent steps observe.
4. **Premature convergence.** The system finds a plausible approach, stops exploring, and spends the remaining budget polishing the wrong solution.
5. **Verification debt.** Intermediate outputs are not checked, so the final check must diagnose several interacting defects at once.
6. **Environmental drift.** Files, services, collaborators, or external data change while the plan still assumes an earlier state.

Additional steps can therefore hurt as well as help. More steps provide opportunities for search and correction, but also enlarge the surface for drift and side effects. “Agent ran longer” is not evidence that it reasoned more effectively.

## Four different notions of horizon

Discussions of agent progress often mix four quantities.

### Activity horizon

How long can the process remain alive and continue emitting actions? This is mostly an engineering property. Heartbeats, context compaction, durable queues, and restart logic can make an agent run indefinitely without making it competent.

### Context horizon

How much history can the system condition on usefully? A million-token window is not the same as a million tokens of accurate state. Retrieval, summaries, attention allocation, and persistent external memory determine whether old information remains actionable.

### Completion horizon

How difficult or time-consuming are tasks the agent can sometimes complete? METR's 50% horizon belongs here. It maps success probability onto estimated human task duration and provides a trend measure across evaluated systems.

### Reliable autonomy horizon

For how long can a system pursue real goals at a required service level while preserving constraints, recovering from ordinary failures, and escalating correctly? This is the deployment question. It needs a higher reliability threshold, repeated trials, realistic interruptions, and accounting for human supervision and damage from failed runs.

Moving from activity to completion is progress. Moving from occasional completion to reliable autonomy is a separate achievement. A frontier system can have a rapidly increasing 50% completion horizon while still being unsuitable for unattended high-cost work.

## What a time-horizon curve does and does not show

METR's method has three valuable features. First, it uses task-level success rather than self-reported confidence or transcript aesthetics. Second, it spans tasks of different human durations rather than assigning every task equal difficulty. Third, it estimates a curve and uncertainty rather than treating the single longest success as the frontier.

The curve should be read as an empirical summary of an evaluation distribution. If the fitted 50% horizon is $h$, the claim is roughly that tasks around human duration $h$ have a predicted one-half success probability under the evaluated setup. It is not a claim that the agent can work autonomously for $h$ hours. Agent wall-clock time can differ substantially from the human-time label, so the label should not be read as runtime.

Several limitations remain important:

- **Human time is noisy.** Expertise, familiarity, tooling, and estimation methods affect the denominator.
- **Task duration is not sufficient difficulty.** Two tasks taking a human four hours may require very different kinds of memory, judgment, or interaction.
- **The suite is selective.** Software and machine-learning tasks are unusually easy to sandbox and grade. Results may not transfer to ambiguous organizational, social, scientific, or physical work.
- **Scoring can miss specification failures.** Tests may accept a patch that violates an unstated requirement, or reject a useful partial result.
- **Elicitation matters.** A weak harness underestimates what the model could do; a specialized harness may overstate what a general deployment reproduces.
- **Behavior can break measurement.** If an agent exploits evaluation artifacts, tampers with tests, or obtains forbidden answers, whether that run counts can dominate the fitted horizon.

These are reasons to attach a scope and uncertainty statement, not reasons to discard the measure. A well-specified imperfect measure is more useful than a vague claim that agents can now do “day-long work.”

## Benchmarks measure different failure surfaces

No single benchmark establishes general long-horizon reliability. A portfolio should cover distinct surfaces.

**METR task horizons** test whether agents can complete increasingly long, scoreable software and research-engineering tasks. Their strength is a continuous reliability-versus-duration framing. Their weakness is domain concentration and sensitivity to task-time estimation and elicitation.

**SWE-bench** and its descendants ask systems to resolve real repository issues and grade the resulting patches in containerized test environments. They connect evaluation to useful engineering artifacts. Yet a score can depend heavily on repository selection, issue clarity, test completeness, contamination, scaffold design, and the number of attempts. The benchmark is primarily a task-success evaluation, not a direct measure of how long an agent remains coherent.

**OSWorld** places multimodal agents in real computer environments and scores application-level tasks. It exercises perception, clicking, typing, and state tracking that a terminal-only benchmark omits. Its results are sensitive to environment versions, visual grounding, action latency, and whether failures arise from the model or the interface layer.

**WebArena** and related web-agent suites use reproducible websites with functional tasks. They reveal navigation and tool-use failures but cannot reproduce every ambiguity, adversarial page, authentication constraint, or changing interface of the open web.

Newer long-sequence simulations can test delayed consequences and memory. Their controlled worlds make hundreds of turns reproducible, but success in a simulated organization or game remains construct validity evidence, not proof of reliable deployment in a company.

The right question is not which benchmark is “the agent benchmark.” It is which failure surface a benchmark makes observable, and what important deployment failure it leaves outside the frame.

## A reporting standard for long-horizon claims

A credible result should make reconstruction possible. At minimum, report:

| Dimension | Required disclosure |
|---|---|
| Artifact | Exact model/version, date, provider, and access channel |
| Agent system | Scaffold name/version, prompt, context policy, memory, verifier, and orchestration |
| Tools | Tool list, permissions, environment image/version, network access, and unavailable actions |
| Budget | Token or compute cap, wall-clock timeout, tool-call cap, samples, retries, and stopping rules |
| Intervention | What humans could see, change, approve, or rescue, with intervention counts |
| Tasks | Source, selection rule, contamination policy, human-time method, and exclusions |
| Success | Grader, tests, partial-credit rule, prohibited shortcuts, and manual adjudication |
| Statistics | Number of trials, task-level results, confidence intervals, and failure classification |
| Economics | Successful-run and all-attempt cost, latency, and any parallel compute |

The report should publish the full success curve where possible, including both 50% and higher-reliability horizons. A 50% horizon is useful for trend tracking; an 80% or 90% threshold is closer to many deployment questions. If the estimate is unstable under reasonable treatment of ambiguous or invalid runs, that instability is a result and should remain visible.

Task-level artifacts matter more as aggregate scores rise. Trajectories, patches, test logs, and intervention records let independent readers distinguish genuine completion from grader exploitation, accidental success, or hidden rescue. Repeated trials are essential because model sampling and tool environments are stochastic.

## Designing systems for reliability rather than spectacle

Long-horizon reliability improves when the workflow creates short, checkable control loops instead of one heroic trajectory.

**Externalize state.** Plans, assumptions, decisions, and evidence should live in inspectable artifacts rather than only in context. The agent should be able to reconstruct why a decision was made.

**Define invariants.** Tests, schemas, permissions, budgets, and non-negotiable user constraints should be checked throughout the run. An invariant catches drift before it becomes the new baseline.

**Use staged verification.** Validate intermediate products at natural boundaries. Unit tests before integration tests are one example; source verification before prose synthesis is another.

**Make recovery explicit.** A tool error should lead to a bounded retry, diagnosis, alternate path, or escalation—not an unrecorded improvisation. Checkpoints should permit rollback without preserving corrupted state.

**Separate generation from consequential judgment.** Independent critics or deterministic checks can detect some errors, but only if their failures are not perfectly correlated with the writer. Calling the same model twice is not automatically independent verification.

**Escalate based on uncertainty and impact.** Reliable autonomy includes knowing when not to act. A system that asks for help on a rare high-impact ambiguity may be more useful than one with a higher raw completion score and poor constraint awareness.

These mechanisms spend resources. A reliable system may cost more, take longer, or appear less autonomous than a benchmark-maximizing system. That tradeoff should be plotted as a frontier among success probability, cost, latency, and supervision rather than collapsed into one capability rank.

## Why it matters

Task horizon is becoming a central input to forecasts about software automation, AI research acceleration, and frontier risk. Small wording errors can turn a scoped evaluation into a claim about the economy: “50% success on tasks taking human experts several hours” becomes “the model can replace a worker for several hours.” The second statement requires evidence about task mix, reliability requirements, integration costs, supervision, and consequences of failure that the first does not contain.

For Andrew's agent workflows, the operational target is not the longest unattended run. It is the longest interval over which the system preserves file ownership, evidence quality, user constraints, and recoverability at an acceptable cost. That target should be measured locally with task-level records and honest failure accounting, while public benchmarks supply external reference points.

For frontier comparisons, Rome should treat time horizon as one coordinate. A model can have a longer measured horizon yet be worse for interactive steering, lower-cost batch work, computer use, or tasks with severe downside. Comparative rankings should identify the exact system and threshold, avoid converting provider demonstrations into independent evidence, and preserve the difference between model improvement and scaffold improvement.

## Sources

- [METR, Task-Completion Time Horizons of Frontier AI Models](https://metr.org/time-horizons/) — living results page and definition, last updated May 8, 2026; accessed July 9, 2026.
- [METR, Measuring AI Ability to Complete Long Tasks](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/) — original methodological explanation, March 19, 2025.
- [Kwa et al., Measuring AI Ability to Complete Long Tasks](https://arxiv.org/abs/2503.14499) — paper and statistical method, 2025.
- [METR, Time Horizon 1.1](https://metr.org/blog/2026-1-29-time-horizon-1-1/) — expanded task suite and evaluation infrastructure, January 29, 2026.
- [SWE-bench repository and evaluation harness](https://github.com/SWE-bench/SWE-bench) — tasks, containers, and grading artifacts; accessed July 9, 2026.
- [Jimenez et al., SWE-bench](https://openreview.net/forum?id=VTF8yNQM66) — benchmark paper and task construction.
- [OSWorld benchmark repository](https://github.com/xlang-ai/OSWorld) — real-computer evaluation environments and harness; accessed July 9, 2026.
- [Zhou et al., WebArena](https://arxiv.org/abs/2307.13854) — reproducible web-agent benchmark and limitations.
- [He et al., YC-Bench](https://arxiv.org/abs/2604.01212) — long-term planning simulation with persistent state and delayed consequences, 2026.

## Open questions

- Which task families should complement software work before time horizon is used in economy-wide forecasts?
- How stable are 80% and 90% horizon estimates when successes are sparse on longer tasks?
- Which intervention taxonomy best distinguishes routine approvals, substantive rescue, and evaluator clarification?
- How should benchmark exploitation be scored when it demonstrates capability but violates the intended task contract?
- Can a local workflow measure constraint preservation and recoverability without exposing private task content?
