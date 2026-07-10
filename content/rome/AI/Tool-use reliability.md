---
title: Tool-use reliability
created: 2026-07-10
source: llm
status: seed
tags: [ai, agents, tool-use, reliability, evaluation]
---

Tool-use reliability is the measured ability of a particular model-and-scaffold system to reach a verified terminal state under imperfect observations and tool failures, without exceeding its authority or hiding the cost of recovery.

A tool call changes the epistemic and operational problem. The agent is no longer judged only on whether its text is plausible. It must choose an action, construct grounded arguments, interpret an observation, update its plan, and establish what happened in an environment it can see only through interfaces. A timeout may conceal a successful write. A “success” response may describe only acceptance into a queue. A second attempt may repair a failed read or duplicate a payment. The final prose may say “done” even though the durable state is wrong.

This note focuses on the reliability questions that ordinary function-call accuracy misses: how to experiment on recovery policies, account for retries, verify terminal state, evaluate under partial observability, and attribute results between the model and its scaffold. The core object of evaluation is not an isolated model. It is a versioned system:

$$
S = (M, P, T, O, R, V, B, E),
$$

where $M$ is the model, $P$ the prompt and context policy, $T$ the tool interfaces and permissions, $O$ the orchestration loop, $R$ the recovery and retry policy, $V$ the verifier, $B$ the resource budget, and $E$ the environment. A reliability claim that omits these components is not reproducible and cannot cleanly support [[Model versus scaffold in agent evaluations]].

## Reliability is a terminal-state property

The appropriate top-level question is:

> Given an initial environment, a user goal, an authority boundary, and a resource budget, what is the probability that the system ends in an acceptable, independently verified state without forbidden side effects?

That definition separates four outcomes commonly collapsed into “success”:

1. **Action success:** a tool accepted or executed a call.
2. **Milestone success:** an intermediate condition became true.
3. **Task success:** all required end-state predicates became true.
4. **Safe task success:** the required predicates became true and no forbidden predicate did.

For a calendar task, an API returning `200` establishes action success. It does not establish that the event exists once, on the correct calendar, at the intended local time, with the right attendees, and without an invitation sent before approval. Those are terminal-state predicates. Anthropic’s agent-evaluation guidance explicitly distinguishes transcript-based grading from state checks and describes OSWorld-style graders that inspect files, application configuration, databases, and UI properties after execution. This supports a general rule: traces explain behavior, but authoritative state should decide crisp outcome claims.

A useful task specification is therefore a tuple $(x_0, G, F, A, H)$:

- $x_0$: the initial state or a procedure for constructing it;
- $G$: required terminal predicates;
- $F$: forbidden terminal predicates and side effects;
- $A$: the agent’s authority and confirmation requirements;
- $H$: the horizon—time, tokens, calls, retries, and monetary cost.

The grader should return more than a scalar. At minimum it should record which predicates in $G$ and $F$ were evaluated, which could not be observed, and whether the agent’s final claim matched the grader’s evidence. “Unknown” is a legitimate outcome. Treating unknown as failure is conservative; treating it as success is usually indefensible.

## Partial observability is the normal case

An agent generally does not observe environment state $x_t$ directly. It receives an observation $o_t$ produced by a tool, UI, or retrieval layer:

$$
o_t \sim \mathcal{O}(x_t, a_{t-1}).
$$

The observation can be incomplete, stale, truncated, delayed, ambiguous, or false. Pagination can hide the target record. A browser screenshot can omit content below the fold. An API can acknowledge a request before asynchronous processing finishes. Concurrent users can change state after the last read. Tool descriptions may themselves drift from implementation. ToolSandbox treats stateful tool use as a conversational, interactive problem with hidden dependencies and milestone-based grading, illustrating why a single call or final answer does not reveal the full trajectory.

The model must therefore maintain a *belief* about state rather than assuming its latest observation is the state. Reliability depends on knowing the provenance and freshness of consequential facts:

- **user assertions** express intent but may not identify an internal record;
- **tool observations** may be authoritative for one field and stale for another;
- **inferences** can guide exploration but should not silently become write arguments;
- **defaults** belong to the scaffold and must be disclosed when they affect outcomes;
- **verification observations** should be gathered after the mutation from an authoritative surface.

Partial observability creates a specific experimental obligation: perturb the observation channel, not just the user prompt. Hide a page of results, delay a status transition, return a stale version number, reorder records, truncate a response, inject an inconsistent replica, or let a concurrent actor mutate the target. Each perturbation should preserve at least one valid recovery path if the experiment is intended to measure recovery rather than impossibility.

ToolBench-X formalizes this style of testing with recoverable hazards such as specification drift, invocation error, execution failure, output drift, and cross-source conflict. Its reported finding—that targeted recovery hints can recover failures more effectively than generic test-time scaling—is evidence about that benchmark and its systems, not a universal law. The broader inference is stronger than any one result: reliability testing should vary *failure mechanism* because additional tokens cannot help if the agent misdiagnoses what kind of failure occurred.

## Recovery is a policy, not a reflex

A recovery policy maps the current history and diagnosed failure class to a next action. “Retry three times” is not a sufficient policy. The safe response depends on operation semantics and on what is known about the previous attempt.

The minimum failure classes are:

- **invalid request:** schema, argument, or precondition failure; repair before retry;
- **transient read failure:** bounded retry with backoff may be appropriate;
- **rate limit or overload:** respect server guidance and budget before retrying;
- **permission or policy denial:** stop or escalate; repetition does not create authority;
- **deterministic business rejection:** revise the plan or report the blocker;
- **partial result:** preserve completed work and identify the missing subset;
- **unknown write outcome:** reconcile before any repeated mutation;
- **confirmed failed write:** retry only if the operation is safe to repeat or protected by an idempotency mechanism;
- **state conflict:** refresh, compare versions, and re-plan rather than overwrite blindly.

The distinction between **confirmed failure** and **unknown outcome** is essential. If a connection drops after a server commits a write but before the response arrives, the client cannot infer that nothing happened. Amazon’s Builders’ Library article on retry-safe APIs explains the practical role of caller-provided request identifiers: the service can recognize repeated requests and return the result of the original operation rather than creating another resource. Idempotency does not mean every repeated payload should always collapse; the identifier must represent the caller’s intent, and the system must define retention and conflict semantics.

Recovery should also be bounded. An agent needs explicit limits for calls, identical-call repetitions, wall-clock time, tokens, and cost. When the bound is reached, reliable behavior is a truthful partial-result report with evidence—not an optimistic completion claim or an endless loop. A loop detector should consider semantic equivalence, because changing whitespace or restating the same query is not meaningful progress.

### A recovery-policy experiment

Recovery policies should be compared in controlled factorial experiments. Start with a clean task suite and deterministic fault injection. Cross at least these factors:

- failure class and injection point;
- operation type: read, reversible write, idempotent write, non-idempotent write;
- observability: explicit error, ambiguous timeout, stale success, partial result;
- policy: no recovery, generic retry, typed recovery, typed recovery plus reconciliation;
- budget: fixed call, token, time, and cost ceilings;
- model and scaffold version.

Use paired trials when possible: the same task instance, seed family, initial state, and injected fault under each policy. Report clean-condition performance alongside faulted performance. Otherwise an aggressive policy can appear robust merely because it spends more resources or harms the clean path less visibly.

The primary measures should include:

$$
\text{Recovery yield} = \frac{N_{\text{safe terminal successes after injected fault}}}{N_{\text{faulted trials}}},
$$

$$
\text{Recovery precision} = \frac{N_{\text{recovery actions that improve verified state}}}{N_{\text{recovery actions}}},
$$

and

$$
\text{Duplicate mutation rate} = \frac{N_{\text{trials with unintended duplicate effects}}}{N_{\text{write trials}}}.
$$

Also report time-to-recovery, extra calls, extra tokens, extra cost, policy violations, regression on clean tasks, and the fraction of unknown outcomes left unresolved. ToolMisuseBench is a recent preprint that explicitly evaluates misuse and recovery under step, call, and retry budgets with replayable fault injection. Its existence is evidence of growing attention to budgeted recovery; its baseline results should remain provisional until independently reproduced.

## Retry accounting must expose the denominator

Retries can change both reliability and the meaning of a score. Three different quantities are often confused:

- **single-trial success**: probability that one deployed run succeeds;
- **best-of-$k$ success**: probability that at least one of $k$ independent runs succeeds;
- **within-trial recovery success**: probability that one agent loop succeeds after making additional actions inside its allowed policy.

If independent attempts each succeed with probability $p$, best-of-$k$ success is

$$
1-(1-p)^k.
$$

But agent attempts are rarely independent, and selection among outputs requires an oracle or verifier. Reporting only the best result hides failed attempts, resource consumption, and the mechanism used to choose the survivor. A user receiving one autonomous run cares about single-trial safe success. A service that actually executes several candidates and deterministically selects a verified one may legitimately report that deployed policy—but must include all attempts in cost and side-effect accounting.

Every evaluation should publish a retry ledger per trial:

- total model invocations;
- tool calls by operation and error class;
- exact and semantic retries;
- model-level restarts versus within-loop retries;
- verifier calls and selection rule;
- elapsed time, tokens, and external cost;
- mutations attempted, committed, deduplicated, rolled back, or unresolved;
- termination reason.

The denominator for reliability is the number of user tasks initiated, not the number of final answers emitted or successful tool responses. If a task required three complete restarts, it is one recovered user task consuming three attempts. If two restarts sent duplicate emails, it is not a success with extra latency; it is an unsafe failure.

Retry accounting also prevents an attribution error. A harness that silently retries malformed calls can make a model appear better at argument construction. A platform that retries transient reads can improve system reliability without improving the model at all. OpenAI’s playbook for third-party evaluations states that harness choices such as state preservation and retrying failed actions can materially change observed capability. This is direct evidence for disclosing the harness; the further recommendation to publish counterfactual ablations is an inference from experimental design.

## Terminal-state verification needs its own design

Verification is not “ask the acting model whether it finished.” The verifier should inspect the most authoritative state available and should be as independent as the task permits.

A robust terminal protocol has five stages:

1. **Stop mutation.** Once the agent believes the goal is reached, prevent opportunistic extra writes during grading.
2. **Quiesce or define timing.** Wait for asynchronous work according to a declared rule, or explicitly grade a pending state.
3. **Observe independently.** Read back through a state API, database, filesystem, test runner, reconciliation endpoint, or human review—not only the write response.
4. **Evaluate required and forbidden predicates.** Check both completion and side effects.
5. **Compare the agent’s claim with the evidence.** Score calibrated reporting separately from state success.

The verifier itself can be partially blind. Eventual consistency may make an immediate read look like failure; cached reads may make an old state look current. The task specification must therefore define a verification window, authoritative sources, and what happens when sources conflict. Repeated verification reads are not free retries: they belong in the ledger and can themselves alter state in poorly designed systems.

For open-ended artifacts, use layered grading. Deterministic checks establish crisp invariants: files exist, tests pass, identifiers match, no forbidden recipients were contacted. Rubrics or human review can assess quality that cannot be reduced to predicates. PaperBench uses hierarchical rubrics for research-replication tasks and separately evaluates its LLM judge; this is evidence that complex outcomes can be decomposed and that judge quality must itself be measured. It does not imply that an LLM judge is sufficiently independent for irreversible or security-critical checks.

Verification should produce an evidence bundle: terminal observations, timestamps or version IDs, grader outputs, unresolved ambiguities, and the agent’s final statement. This makes false-completion errors visible. A system that reaches only partial success but reports the exact boundary is more trustworthy than one with the same state that says “done.”

## Attributing model and scaffold effects

Tool-use performance belongs to the configured system, yet useful research still needs component attribution. The scaffold includes tool descriptions, retrieval of tools into context, prompt instructions, memory, planning loops, error parsers, retries, context compaction, permissions, confirmation gates, verifiers, and stop rules. Each can add capability or conceal model weakness.

Attribution requires controlled ablations rather than labels such as “model score.” A practical matrix holds the task set and environment fixed while varying one component at a time:

| Comparison | What it estimates | Main confound to control |
|---|---|---|
| model A vs. B under identical scaffold | model contribution in that scaffold | model-specific prompt tuning |
| generic retry vs. typed recovery | recovery-policy contribution | additional call budget |
| no verifier vs. verifier | detection and correction contribution | verifier-triggered extra actions |
| full catalog vs. retrieved tools | tool-retrieval contribution | missing correct tool |
| direct execution vs. confirmation gate | authority-control contribution | user simulator behavior |
| fixed context vs. compaction | memory-policy contribution | token and latency budget |

Interactions matter. A model may benefit disproportionately from richer tool descriptions; a verifier may help only when the acting model can interpret its feedback. Therefore report factorial interactions where feasible, not only one-factor deltas. Preserve complete version identifiers and configuration hashes so later work can reproduce the system.

Two reporting views are especially useful:

- **deployed-system view:** the performance, cost, and safety of the exact product policy users receive;
- **diagnostic view:** component ablations that estimate where failures and gains originate.

Neither replaces the other. A bare-model test may isolate capabilities but understate product performance. A highly engineered scaffold may be the correct deployment object while obscuring whether gains came from the model, retries, privileged tools, or a stronger verifier. MLE-bench’s official report names both the model and the AIDE scaffold in its headline result, and PaperBench likewise reports model-plus-scaffold configurations. That naming convention should be the minimum standard.

## A release protocol for reliable tool use

Before deployment or benchmark publication:

1. Define initial state, required state, forbidden state, authority, and budgets.
2. Classify every operation by reversibility, idempotency, and unknown-outcome risk.
3. Specify recovery behavior for each error class; do not use one generic retry rule.
4. Run clean and fault-injected trials across seeds and harmless paraphrases.
5. Include stale, truncated, conflicting, delayed, and concurrently changed observations.
6. Record every retry, restart, verifier call, mutation, deduplication, and termination reason.
7. Verify terminal state from authoritative surfaces and preserve an evidence bundle.
8. Score task state, forbidden side effects, and truthfulness of the final report separately.
9. Publish deployed-system results plus model/scaffold ablations with matched budgets.
10. Re-run after any model, prompt, tool, permission, recovery, verifier, or environment change.

This protocol does not eliminate uncertainty. It prevents the most consequential category error: interpreting a plausible trace, a successful call, or a retry-inflated best case as evidence that the user’s task was safely completed.

## Evidence and inference boundary

Primary papers and official engineering documents support several narrow claims: stateful benchmarks expose dependencies missed by isolated function calls; recovery can be tested through injected hazards; retries and state preservation in a harness alter measured performance; end-state checks and transcripts answer different evaluation questions; and idempotency identifiers can make ambiguous repeats safer. The sources below directly document those claims.

The proposed factorial recovery experiment, retry ledger, evidence bundle, and release protocol are **syntheses and recommendations** derived from those sources and general reliability engineering. They have not, as a package, been validated as a universal standard. Likewise, the equations are accounting definitions or simplifying models, not empirical laws about agent behavior.

## Sources

- Lu et al., [ToolSandbox: A Stateful, Conversational, Interactive Evaluation Benchmark for LLM Tool Use Capabilities](https://aclanthology.org/2025.findings-naacl.65/), Findings of NAACL 2025 — primary paper on stateful execution, hidden dependencies, insufficient information, and milestone-based trajectory grading.
- Yao et al., [$\tau$-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains](https://arxiv.org/abs/2406.12045), 2024 — primary paper on tool use under domain policies and user interaction.
- Tian, Shi, and Zhao, [Beyond Function Calling: Benchmarking Tool-Using Agents under Tool-Environment Unreliability](https://arxiv.org/abs/2606.25819), 2026 — primary preprint introducing recoverable tool-environment hazards and comparing recovery behavior.
- Sigdel and Baral, [ToolMisuseBench: An Offline Deterministic Benchmark for Tool Misuse and Recovery in Agentic Systems](https://arxiv.org/abs/2604.01508), 2026 — primary preprint on replayable fault injection and explicit call, step, and retry budgets.
- Anthropic, [Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents), 2026 — official guidance on trials, transcripts, state checks, grader layers, and repeated evaluation.
- OpenAI, [A shared playbook for trustworthy third-party evaluations](https://openai.com/index/trustworthy-third-party-evaluations-foundations/), 2026 — official discussion of how harness choices, state preservation, retries, scoring, and budgets change observed capability.
- Amazon Web Services, [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/), Amazon Builders’ Library — authoritative engineering account of ambiguous outcomes, caller request identifiers, and retry-safe API design.
- OpenAI, [PaperBench: Evaluating AI’s Ability to Replicate AI Research](https://openai.com/index/paperbench/), 2025 — official benchmark report on hierarchical end-product rubrics and evaluation of an LLM judge.
- OpenAI, [MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering](https://openai.com/index/mle-bench/), 2024 — official report that identifies evaluated model-and-scaffold combinations and studies resource scaling.

## Open questions

- How should a benchmark score terminal states that remain unknowable after every authorized reconciliation step?
- Which fault distributions predict production incidents well enough to justify weighting recovery benchmarks by prevalence rather than reporting an unweighted mean?
- How can retry budgets be normalized across APIs whose calls differ by latency, cost, and side-effect risk?
- What evidence is sufficiently independent when the acting agent, verifier, and tool-output interpreter share the same model family?
- How should evaluators estimate model–scaffold interaction effects without an infeasibly large factorial experiment?
- When does read-after-write verification reduce risk, and when does eventual consistency create misleading or costly loops?
- Can organizations share anonymized recovery traces without exposing private arguments, user intent, or exploitable tool semantics?
