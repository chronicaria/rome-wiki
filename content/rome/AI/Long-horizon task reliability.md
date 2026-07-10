---
title: Long-horizon task reliability
created: 2026-07-09
source: llm
status: seed
tags: [ai, agents, evaluation, reliability, frontier-models]
as_of: 2026-07-10
desk: AI frontier news
review_after: 2026-08-09
---
Long-horizon agent reliability is the probability that an entire extended task ends correctly under a stated model, scaffold, budget, and environment—not the model's ability to produce one impressive long trajectory.

Up: [[AI agents (MOC)]]

## The question behind “how long can an agent work?”

The intuitive question is whether an AI agent can work for an hour, a day, or a week. The measurable question is harder: **what counts as working, at what success probability, on which distribution of tasks, with which tools and interventions?** A system that sometimes completes an eight-hour software task is not equivalent to one that completes comparable tasks reliably. A system that stays active for eight hours may merely be accumulating plausible-looking actions, hidden errors, or unresolved state.

Agentic work is a chain: interpret the goal, inspect the environment, choose tools, preserve state, detect failures, recover, and verify. A fluent transcript can conceal a wrong intermediate assumption that becomes an unrecoverable branch point.

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

## Independence is the wrong default

The toy expression $p^n$ is useful precisely because real agent failures violate it. Errors are usually **dependent**. A mistaken repository assumption can corrupt planning, code generation, test interpretation, and the final report together. A transient service failure can make several otherwise sound actions fail at once. A misleading summary can be reread for the rest of a run, turning one compression error into a persistent latent variable. These are common-cause failures: improving each local action in isolation may leave the end-to-end workflow almost unchanged because the same upstream cause still defeats many stages.

A more useful decomposition separates three quantities. Let $q_i$ be the chance that stage $i$ introduces a consequential defect, $d_i$ the chance that the workflow detects that defect before promotion, and $r_i$ the chance that it repairs or safely contains a detected defect. A rough unrecovered-defect probability is then

$$
u_i=q_i(1-d_i r_i).
$$

If stages were independent, reliability would be approximately $\prod_i(1-u_i)$. In practice this product is only a baseline. Correlated defects, hidden environmental state, and shared validators make the true reliability lower or simply different. The right empirical object is therefore not one estimated per-step accuracy but a **failure dependency map**: which observations, memories, tools, and verifiers can cause several downstream claims to fail together.

This changes engineering priorities. Raising a generator's local accuracy from 98% to 99% may be less valuable than adding an independent check that catches a rare but catastrophic state error. Conversely, adding three critics built from the same prompt, model, context, and mistaken evidence may create the appearance of redundancy without reducing common-mode risk. Diversity is protective only when the checking channel has meaningfully different evidence or failure modes: a compiler rather than another prose judgment, a fresh source lookup rather than a paraphrase of the draft, or an independent evaluator rather than the provider's own scaffold.

## Hazard survival is a better deployment model

For deployment, it is useful to treat a run as a system surviving exposure to hazards rather than merely accumulating correct answers. Let $S(k)$ be the probability that, after $k$ consequential transitions, the run is still inside a **recoverable safe state**: its goal and permissions are intact, its material claims remain traceable, and its artifacts can still be verified or rolled back. The conditional hazard at transition $k$ is

$$
\lambda_k=P(\text{leave the recoverable safe set at }k\mid\text{survived through }k-1).
$$

Then $S(k)=\prod_{j=1}^{k}(1-\lambda_j)$ only if the hazard history is adequately represented in the conditioning state. For agents, that caveat is central. A poisoned memory, incorrect task interpretation, stale credential, or defective verifier can raise several future hazards simultaneously. The observed hazard may also increase with age because unresolved assumptions and unverified changes accumulate. A flat per-step failure rate is therefore an empirical hypothesis, not a safe prior.

Hazards should be classified by what they do to the remaining run:

- **Transient hazards** interrupt an otherwise sound plan, such as a rate limit or tool timeout. A bounded retry may be appropriate.
- **Latent-state hazards** corrupt memory, evidence, or environment state without immediately causing a visible failure. Retrying from the same state can reproduce or deepen the defect.
- **Control hazards** change the effective goal, authority, or stopping policy. Prompt injection and mistaken identity belong here because a technically successful action can still be invalid.
- **Coupling hazards** make several components fail together: generator and critic share the same false summary; multiple agents inherit the same wrong plan; retries overload the same dependency.
- **Irreversibility hazards** cross a boundary after which restoration is expensive or impossible, such as sending, deleting, publishing, spending, or changing access.

This taxonomy is an engineering synthesis rather than a settled agent-evaluation standard. Its support comes from two bodies of evidence. Agent benchmarks increasingly report state-maintenance and long-sequence degradation, while mature reliability engineering treats overload, retry amplification, common dependencies, and graceful degradation as system-level hazards. Google SRE's account of cascading failure is especially relevant: a retry intended as local recovery can create positive feedback and increase global failure. The transfer to AI agents is an inference, but a strong one when agents share services, contexts, or validators.

The practical test is **conditional survival**, not only final pass rate. Evaluation should ask whether hazard rises after a context compression, failed tool call, human correction, rollback, or contradiction; whether the same defect appears across nominally independent workers; and whether recovery restores a clean state or merely resumes action. Fault injection can estimate these conditional hazards directly.

## Reliability is a curve, not one pass rate

One pass rate collapses several operationally distinct behaviors. A serious evaluation should estimate at least four curves over task duration or dependency depth:

1. **Completion:** the probability that the final grader accepts the outcome.
2. **Constraint preservation:** the probability that permissions, scope, safety rules, and user intent remain intact.
3. **Recoverability:** the probability that an injected or naturally occurring failure is detected and the system returns to a valid state.
4. **Graceful degradation:** the value retained when full completion fails—such as a verified partial result, a clean escalation, or an unchanged environment.

These curves answer different questions. A research agent can have a respectable completion curve while quietly losing citation provenance. A coding agent can preserve constraints yet fail to make progress. A computer-use system can complete routine tasks but recover poorly after a modal dialog or stale session. For high-impact deployment, a safe refusal or intact rollback may be a successful reliability outcome even though a capability benchmark records zero task reward.

Repeated runs are needed because a stochastic agent is a distribution over workflows. Report not only the mean success rate but between-run variance, tail failures, and the share of runs that enter an unrecoverable state. A system that succeeds 80% of the time and fails cleanly on the rest is not equivalent to one that also succeeds 80% but occasionally corrupts data. The downside distribution determines whether retries are economical or dangerous.

Duration should be separated from **dependency depth**. Useful metadata includes the longest dependency chain, irreversible actions, external-feedback frequency, state size, and branch points where early choices constrain later options. Human completion time is a difficulty proxy, not a causal explanation of failure.

## Reliability budgets and stopping rules

Deployment begins with a required service level, not with the benchmark's available threshold. Suppose a workflow must succeed without a consequential defect at least 99% of the time. The team can allocate that failure budget across stages, but the allocation must include detection failures and common causes. A stage assigned a 0.1% budget cannot be validated by twenty informal examples. It needs enough representative trials to bound the rate with useful uncertainty, plus stress tests aimed at the specific ways it could defeat downstream checks.

This makes stopping policy part of reliability. An agent should stop or escalate when the posterior risk of continuing exceeds the expected value of another action, when verification evidence is unavailable, when the remaining budget cannot support repair, or when an irreversible action would be taken on unresolved identity or authority. More inference is not always safer. Extra exploration can overwrite good state, consume the verification budget, or produce a persuasive rationalization for a weak path.

A good checkpoint contains more than a transcript. It records the task contract, current artifacts, evidence provenance, environment version, outstanding assumptions, checks already passed, and a bounded next action. Recovery should be tested by fault injection: remove a tool result, corrupt a summary, change an interface, time out a service, or introduce a plausible contradictory source, then observe whether the agent notices, localizes, and contains the problem. This is closer to reliability testing than merely rerunning clean benchmark episodes.

Recent proposals introduce reliability-decay, graceful-degradation, and meltdown metrics. These are not universal standards; preserve their task-level data and definitions rather than copying a composite score into a frontier ranking.

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

## Intervention and handoff thresholds

“Human in the loop” is not a reliability specification. It does not say what the human sees, how quickly they can respond, whether they can reconstruct the run, or whether intervention occurs before an irreversible action. NIST's AI RMF makes the durable organizational point: human roles, oversight, performance limits, deployment context, and the costs of errors should be defined and documented, while deployed behavior and emerging risk should be monitored. It does not supply universal numeric thresholds for agents. Those must come from the workflow's loss tolerance and evidence.

A useful policy separates four thresholds:

1. **Continue autonomously** when the next action is reversible, inside explicit authority, supported by current evidence, and covered by a tested verifier and remaining budget.
2. **Checkpoint** when state complexity, dependency depth, or elapsed work makes reconstruction costly. The agent may continue only after writing a compact, independently inspectable state record.
3. **Request review** when uncertainty concerns a consequential assumption, validators disagree, evidence provenance is incomplete, repeated recovery has not reduced uncertainty, or the next action consumes a material part of the remaining risk budget.
4. **Hard stop** before an irreversible or externally consequential action without explicit authority; when identity, scope, or environment integrity is unresolved; when rollback is unavailable; or when the agent can no longer demonstrate that its verifier is independent of the suspected failure.

The trigger should combine **impact**, **uncertainty**, and **recoverability**, not confidence alone. A stylized decision rule is to continue only when the expected value of one bounded next action exceeds its expected loss plus the value of preserving the option to hand off. Because model self-confidence is poorly calibrated for novel workflows, the inputs should be observable signals: failed invariants, contradictory sources, repeated tool errors, unexplained diffs, stale state, intervention frequency, proximity to a permission boundary, and time since the last independently verified checkpoint.

Handoff quality is itself measurable. Give a fresh operator only the task contract, checkpoint, artifacts, and permitted tools; then test whether they can identify the current state, unresolved assumptions, checks already run, and safe next action. If they need the whole transcript or the departing agent's private explanation, the system has not externalized enough state to claim recoverability.

Retries deserve their own threshold. Retry only when the failure is plausibly transient, the attempt is idempotent or rollback-protected, and the retry budget is bounded. A repeated semantic failure, identical critic disagreement, or corrupted checkpoint calls for diagnosis or escalation, not more samples from the same causal setup. This is the agent analogue of preventing retry storms in distributed systems.

## From evidence to a deployment decision

A benchmark score should license only the least permissive deployment tier supported by comparable evidence:

| Tier | Permitted use | Evidence needed |
|---|---|---|
| Assistive | Draft or recommend; human executes | Useful task performance and transparent limitations |
| Supervised action | Act in a reversible sandbox; human reviews checkpoints | Deployment-like trials, rollback tests, intervention records, constraint monitoring |
| Bounded autonomy | Complete a narrow workflow with explicit budgets and escalation | High-threshold survival curve, fault injection, tail-loss accounting, independent validation |
| Consequential autonomy | Take irreversible or high-impact action without prior review | Case-specific assurance far beyond a generic agent benchmark |

This table is a normative synthesis, not a standard promulgated by METR or NIST. Its logic is that the evidence burden should rise with downside and irreversibility. A 50% completion horizon can support capability forecasting and task routing; by itself it cannot support bounded autonomy. Even an 80% horizon is insufficient if the missing 20% includes silent corruption, scope violations, or failures that retries amplify.

The deployment comparison must include the alternative. An agent with lower raw completion but cheap verification and clean failure may dominate a stronger model whose rare failures are opaque. The decision objective is expected net value under the actual control policy:

$$
V=P_sB-C_{run}-C_{review}-P_hL_h-P_uL_u,
$$

where $P_sB$ is expected benefit from valid success, run and review costs are explicit, $P_hL_h$ is expected loss from detected and contained failures, and $P_uL_u$ is expected loss from undetected failures. The last term often dominates high-impact work. Measuring only accepted completions implicitly prices silent failure at zero.

Promotion should therefore be reversible and local: start with read-only or sandboxed tasks, collect task-level outcomes and hazard signals, define rollback and hard-stop boundaries, then widen scope only when survival and tail-loss evidence remain acceptable under the new conditions. Model, scaffold, tools, permissions, or environment changes invalidate some of that evidence and require revalidation.

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

Publish the full success curve, including higher-reliability thresholds, and retain task-level trajectories, artifacts, tests, and intervention records. Instability under reasonable treatment of ambiguous runs is itself a result. Repeated trials are essential because sampling and tool environments are stochastic.

## Designing systems for reliability rather than spectacle

Long-horizon reliability improves when the workflow creates short, checkable control loops instead of one heroic trajectory.

**Externalize state.** Plans, assumptions, decisions, and evidence should live in inspectable artifacts rather than only in context. The agent should be able to reconstruct why a decision was made.

**Define invariants.** Tests, schemas, permissions, budgets, and non-negotiable user constraints should be checked throughout the run. An invariant catches drift before it becomes the new baseline.

**Use staged verification.** Validate intermediate products at natural boundaries. Unit tests before integration tests are one example; source verification before prose synthesis is another.

**Make recovery explicit.** A tool error should lead to a bounded retry, diagnosis, alternate path, or escalation—not an unrecorded improvisation. Checkpoints should permit rollback without preserving corrupted state.

**Separate generation from consequential judgment.** Independent critics or deterministic checks can detect some errors, but only if their failures are not perfectly correlated with the writer. Calling the same model twice is not automatically independent verification.

**Escalate based on uncertainty and impact.** Reliable autonomy includes knowing when not to act. A system that asks for help on a rare high-impact ambiguity may be more useful than one with a higher raw completion score and poor constraint awareness.

These mechanisms spend resources. Plot the tradeoff among success probability, cost, latency, and supervision rather than collapsing it into one capability rank.

## Why it matters

Task horizon is becoming a central input to forecasts about software automation, AI research acceleration, and frontier risk. Small wording errors can turn a scoped evaluation into a claim about the economy: “50% success on tasks taking human experts several hours” becomes “the model can replace a worker for several hours.” The second statement requires evidence about task mix, reliability requirements, integration costs, supervision, and consequences of failure that the first does not contain.

For Andrew's agent workflows, the operational target is not the longest unattended run. It is the longest interval over which the system preserves file ownership, evidence quality, user constraints, and recoverability at an acceptable cost. That target should be measured locally with task-level records and honest failure accounting, while public benchmarks supply external reference points.

For frontier comparisons, Rome should treat time horizon as one coordinate. Rankings should identify the exact system and threshold, avoid converting provider demonstrations into independent evidence, and preserve the difference between model and scaffold improvement.

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
- [Khanal, Tao, and Zhou, Beyond pass@1](https://arxiv.org/abs/2603.29231) — preprint proposing duration-conditioned reliability, variance, graceful-degradation, and meltdown metrics; treated here as a research proposal rather than an established standard, 2026.
- [Towards a Science of AI Agent Reliability](https://arxiv.org/abs/2602.16666) — research agenda for stateful, long-horizon reliability and error accumulation; version checked July 10, 2026.
- [METR, Impact of modelling assumptions on time horizon results](https://metr.org/notes/2026-03-20-impact-of-modelling-assumptions-on-time-horizon-results/) — sensitivity of fitted horizons near the suite ceiling, March 20, 2026.
- [METR, Summary of the predeployment evaluation of GPT-5.6 Sol](https://metr.org/blog/2026-06-26-gpt-5-6-sol/) — concrete example in which treatment of evaluator-defined cheating changes the time-horizon estimate by orders of magnitude; June 26, 2026.
- [Xu et al., LongDS-Bench](https://arxiv.org/abs/2605.30434) — primary benchmark paper on evolving analytical state; reports late-turn degradation and that additional steps did not necessarily improve performance, May 2026.
- [NIST, AI Risk Management Framework Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) — authoritative lifecycle guidance on deployment-context testing, documented human oversight, independent assessment, monitoring, and risk treatment; accessed July 10, 2026.
- [Google, Site Reliability Engineering: Addressing Cascading Failures](https://sre.google/sre-book/addressing-cascading-failures/) — authoritative engineering account of positive-feedback cascades, retry amplification, load shedding, and graceful degradation; used here by analogy rather than as direct evidence about language-model agents.

## Open questions

- Which task families should complement software work before time horizon is used in economy-wide forecasts?
- How stable are 80% and 90% horizon estimates when successes are sparse on longer tasks?
- Which intervention taxonomy best distinguishes routine approvals, substantive rescue, and evaluator clarification?
- How should benchmark exploitation be scored when it demonstrates capability but violates the intended task contract?
- Can a local workflow measure constraint preservation and recoverability without exposing private task content?
- Which observable hazard signals predict silent corruption early enough to make handoff useful?
- How much does a fresh-model or fresh-context verifier reduce common-mode failure compared with deterministic checks?
- What evidence threshold should reopen autonomy after a model, scaffold, tool, or permission change?
