---
title: Tool-use reliability
created: 2026-07-10
source: llm
status: seed
tags: [ai, agents, tool-use, reliability, evaluation]
---

Tool-use reliability is the probability that an agent selects, executes, and verifies the right external actions while preserving user intent, policy, and environment state across the whole task.

Tool use turns a language model from a generator of proposals into a participant in a stateful system. A calculator call can settle an arithmetic question; a database query can retrieve facts unavailable in model weights; a browser or shell can change the world. That added capability also changes what “correct” means. A fluent final answer is insufficient if the agent called the wrong function, supplied a subtly wrong identifier, performed an irreversible action twice, or claimed success without checking the resulting state.

The central reliability question is therefore not “Can the model emit valid JSON?” It is:

> Given a user goal, available tools, policies, and an evolving environment, how often does the complete interaction end in the intended state without unacceptable side effects?

This is closely related to [[Long-horizon task reliability]], but it deserves its own treatment because tools create distinct interfaces, permissions, failure modes, and evidence. Tool reliability is a property of the **system**—model, prompt, schemas, tool descriptions, orchestration loop, execution environment, and verifier—not a fixed property of a model alone.

## The reliability stack

A tool-using agent must succeed at several layers. They can be tested separately, but production reliability depends on their composition.

### 1. Relevance and abstention

The agent must first decide whether a tool is needed. Calling a tool for a question that can be answered directly adds latency and new failure surface. Failing to call one when fresh or private state is necessary produces stale or invented answers. If none of the offered tools is relevant, the agent should abstain rather than force a plausible match.

This “negative capability” is easy to neglect. Function-calling benchmarks such as the Berkeley Function-Calling Leaderboard include relevance detection and hallucination measurement because a model that always produces a well-formed call can still be unreliable. In a large catalog, abstention also depends on whether the correct tool was retrieved into context at all.

### 2. Tool selection

When action is required, the agent must choose the tool whose semantics match the goal. Names alone are weak evidence. `find_customer`, `search_accounts`, and `lookup_user` may overlap while differing in identifier type, permissions, freshness, or side effects. Tool descriptions are part of the control interface, not decorative documentation.

Selection becomes harder as catalogs grow. Similar tools create interference; a broad “do everything” tool creates an argument-selection problem; many narrow tools create a retrieval problem. A reliable design makes boundaries explicit: what the tool does, what it does not do, required preconditions, return shape, failure modes, and whether it mutates state.

### 3. Argument construction

The agent must translate natural-language intent into the function’s typed arguments. Syntax is the shallow layer. Semantic correctness is harder:

- choosing the right customer among near-duplicate names;
- preserving units, time zones, currencies, and date boundaries;
- distinguishing an internal record ID from an email address;
- representing “next Friday” relative to the correct locale and current date;
- omitting optional fields rather than inventing defaults;
- requesting clarification when a required value is missing.

Schema validation catches malformed types and missing required keys, but it cannot establish that `account_id: 1842` is the account the user meant. That requires grounding in prior observations and often explicit confirmation.

### 4. Sequencing and state tracking

Real tasks usually require a trajectory: inspect current state, gather missing information, call one tool, interpret its result, then decide what comes next. Later calls may depend on identifiers or facts returned earlier. ToolSandbox was designed around this gap: it evaluates stateful execution, implicit dependencies, conversational interaction, and milestones along arbitrary trajectories rather than only isolated calls.

Sequence correctness includes respecting preconditions. An agent should not issue a refund before finding the order, edit a file before reading the relevant version, or send a message before the user has approved its recipients and content. It must also update its beliefs after each observation. Persisting with an obsolete plan after a tool reports a conflict is a state-tracking failure.

### 5. Execution semantics

Even a correct call can fail outside the model. APIs time out, permissions expire, results are truncated, services rate-limit requests, interfaces change, and tools return ambiguous partial success. Production reliability therefore requires the orchestrator to distinguish at least:

- success with a complete result;
- successful no-op, such as “already archived”;
- rejected input;
- transient infrastructure failure;
- permanent permission or policy failure;
- partial mutation;
- unknown outcome after a timeout.

The last two are dangerous. Blindly retrying a non-idempotent `send_payment` or `create_ticket` call can duplicate an action. Reliable tools expose idempotency keys, transaction identifiers, or read-after-write checks. The agent loop should retry only when the error class and operation semantics justify it.

### 6. Policy and authority

A task can be completed operationally and still be wrong because the action exceeded the user’s authority or violated domain policy. The τ-bench family evaluates agents in domains such as retail and airlines where success depends on both tool interaction and compliance with policy instructions. This matters because “helpfulness” can push a model toward satisfying a request by taking a prohibited shortcut.

Authority should be enforced in more than prose. The safest architecture limits the tools and credentials available to the current task, separates read from write operations, and inserts confirmation gates before consequential actions. Least privilege reduces the damage radius when reasoning fails. Deterministic checks should enforce crisp constraints—allowed recipients, spending limits, data scopes—rather than asking a second model to rediscover them from policy text.

### 7. Outcome verification

The final layer is proving that the intended state was achieved. A successful HTTP response is not necessarily task success. A calendar API may accept an event with the wrong time zone; a file tool may write a syntactically valid but broken configuration; a search call may return evidence that does not support the summary.

Verification should target the outcome, not merely the action trace. Depending on the task, this can mean reading the record back, running tests, comparing a database snapshot, opening the generated artifact, or checking several explicit milestones. Anthropic’s guidance on agent evaluations emphasizes executing agents in real or sandboxed environments and grading the resulting environment, while retaining full transcripts for diagnosis. This is a critical separation: the trace explains *how* the system behaved; the state determines whether it succeeded.

## Why small error rates compound

Suppose a task needs $n$ consequential steps and each step succeeds independently with probability $p$. A crude end-to-end estimate is

$$
P(\text{task success}) = p^n.
$$

At $p=0.98$, five steps yield about $90.4\%$ success, twenty steps about $66.8\%$, and fifty steps about $36.4\%$. The independence assumption is usually false, but the lesson survives: long trajectories amplify weaknesses. In practice, errors are often correlated. One mistaken entity resolution can poison every downstream call; one confusing tool description can repeatedly cause the same selection error.

This is why single-turn function-call accuracy should not be interpreted as deployment reliability. It isolates a useful capability, but it omits conversation, state, recovery, side effects, and final-state verification. BFCL’s evolution from abstract-syntax-tree comparison toward executable, multi-turn, and broader agentic evaluation reflects this progression. ToolSandbox similarly tests intermediate milestones because a final response alone can conceal where a trajectory failed.

Repeated trials expose another distinction. If an agent succeeds on any one of several attempts, `pass@k` may look strong even when a user receives only one attempt. For production, `pass@1`, worst-case behavior, and consistency across paraphrases often matter more. In high-impact workflows, success must also be conjoined with no policy violation; a completion metric that ignores side effects rewards unsafe behavior.

## A failure taxonomy

Reliable improvement starts with labeling failures at the layer where they originate.

**Perception failures** occur when the agent lacks or misreads necessary state: truncated output, stale cache, hidden pagination, incorrect screenshot interpretation, or a missed error message.

**Planning failures** include choosing an impossible sequence, skipping a prerequisite, or continuing after the environment invalidates the plan.

**Selection failures** choose the wrong tool or call a tool unnecessarily. **Argument failures** choose the right tool but encode the wrong entity, unit, date, or option.

**Interaction failures** arise when the agent should ask the user for missing information or confirmation but guesses instead. Conversely, repeated questions for already supplied facts indicate poor memory or state management.

**Execution failures** include timeouts, rate limits, schema drift, authentication errors, partial writes, and nondeterministic external behavior. These belong partly to platform engineering rather than model capability.

**Recovery failures** turn a manageable exception into task failure: repeating a write after an unknown outcome, abandoning a recoverable task, or improvising after a denied permission.

**Policy failures** complete an impermissible action, disclose data outside scope, or bypass a required approval. **Verification failures** report completion without evidence, accept a misleading return value, or grade an intermediate action as the outcome.

**Communication failures** leave the user with a false model of what happened. A system that says “done” after partial success is less reliable than one that reports the exact completed and blocked portions, even if their underlying tool traces are identical.

This taxonomy prevents a common mistake: changing the model prompt to solve infrastructure defects, or changing infrastructure to solve ambiguous task definitions. Reliability work needs attribution.

## How to evaluate it

A credible evaluation program uses nested tests rather than one leaderboard number.

### Unit-level call tests

Start with deterministic cases for relevance, tool choice, and argument construction. Include ordinary requests, paraphrases, missing information, irrelevant tools, confusing near-neighbors, unusual but valid values, and malformed tool outputs. Compare structured calls through execution or semantic matching where possible; string equality is brittle when argument order or equivalent representations differ.

These tests are cheap and localize regressions. They are especially useful when tool descriptions or schemas change. They do not establish multi-turn reliability.

### Stateful scenario tests

Run the actual agent loop against a controlled environment. Each scenario should specify initial state, user goal, policy, available tools, allowable side effects, and expected terminal state. Grade both required milestones and forbidden states. ToolSandbox’s dynamic milestone approach is instructive because many valid trajectories can reach the same result; prescribing one gold trace can penalize legitimate alternatives.

Scenarios should include tool errors and changing state: a record disappears between read and write, a permission is denied, a result is paginated, or a timeout leaves mutation status uncertain. Recovery behavior is part of capability, not evaluation noise.

### Distribution and consistency tests

One run is anecdotal for stochastic agents. Repeat scenarios across seeds, harmless prompt paraphrases, tool ordering, schema formatting, and realistic context lengths. Report confidence intervals and per-category results rather than only a mean. A 90% average can hide catastrophic performance on irreversible actions or a minority language.

Test the deployed scaffold exactly: model version, reasoning budget, system prompt, tool catalog, retrieval method, retry policy, credentials, and environment. As [[Model versus scaffold in agent evaluations]] emphasizes, changing the scaffold changes the measured system.

### Production monitoring

Offline tasks cannot cover the open world. Production monitoring should log tool selection, sanitized arguments, results, latency, retry class, confirmation events, and verification outcomes while minimizing sensitive-data retention. Track task success separately from proxy metrics such as call validity. Sample traces for human review, especially after model, prompt, schema, or API changes.

Useful operational measures include:

- end-state success and policy-compliant success;
- unnecessary-call and missed-call rates;
- argument correction and clarification rates;
- tool-error, retry, duplicate-action, and rollback rates;
- verified versus merely claimed completions;
- latency, token use, and tool-call count;
- performance by tool, task class, language, and consequence level.

## Engineering for reliability

The most dependable systems make correct behavior easier at every boundary.

**Design narrow, legible interfaces.** Use distinct verbs, typed fields, constrained enums, explicit units, and returns that expose identifiers and state. Anthropic’s tool-writing guidance recommends descriptions that teach the agent when and how to use a tool, then evaluating those tools on realistic tasks. Names and parameter descriptions should disambiguate similar operations.

**Separate reads from writes.** Inspection can often proceed autonomously; mutation deserves tighter permissions and confirmation. Offer preview or dry-run operations for costly actions. A two-phase pattern—prepare, show the proposed change, then commit—converts an opaque action into a reviewable one.

**Make writes idempotent or detectable.** Require stable request IDs, return transaction IDs, and support status lookup. Never assume that a timeout means nothing happened.

**Validate at multiple layers.** JSON schema catches shape. Business rules catch impossible values. Authorization catches forbidden scope. Read-after-write checks catch divergent outcomes. Each validator answers a different question.

**Preserve provenance.** Record which observation supplied each consequential argument. The agent should be able to distinguish user-provided data, tool-returned data, inferred values, and defaults. This makes both verification and debugging more tractable.

**Bound the loop.** Limits on tool calls, elapsed time, repeated identical calls, and cost prevent runaway behavior. A bounded agent should exit with a precise partial-result report rather than silently oscillating.

**Escalate ambiguity.** Asking a focused clarification is a successful outcome when guessing would risk the wrong state change. The policy should define when uncertainty requires user confirmation, a human reviewer, or safe abstention.

**Use independent verification for consequential outcomes.** Independence need not mean another language model. Deterministic tests, database constraints, reconciliations, and human approval are often stronger. An LLM judge can help assess open-ended outputs, but it introduces its own variance and bias and should not be the only guardrail for crisp invariants.

## What current benchmarks do and do not show

BFCL supplies broad, reproducible coverage of function selection and call construction and has expanded into executable and multi-turn settings. ToolSandbox adds stateful conversations, implicit dependencies, insufficient-information cases, and trajectory milestones. τ-bench emphasizes interaction among user, agent, tools, and domain policies. Together they demonstrate why tool use cannot be reduced to syntax.

They still cannot certify a deployment. Benchmark tools are smaller and cleaner than many production catalogs; simulated users may not reproduce human ambiguity; benchmark policies may omit organizational exceptions; and public tasks can become familiar through training or tuning. Scores are also snapshots of a particular model and harness. A system owner must connect benchmark evidence to domain-specific evaluations and live monitoring.

The right conclusion from a high score is narrow: under this benchmark’s tasks, tools, grader, and scaffold, the system performed at the reported rate. The wrong conclusion is that the model can safely use arbitrary tools. Reliability is empirical, scoped, and continuously re-earned when any component changes.

## A practical release gate

Before deploying a tool-using agent, require a written answer to these questions:

1. What exact end states count as success, partial success, and unacceptable side effect?
2. Which operations are reversible, idempotent, or irreversible?
3. Which arguments must come from the user or an authoritative tool rather than inference?
4. What permissions and confirmations apply to each write?
5. How does the system respond to timeout, partial mutation, stale state, and denied access?
6. What independent evidence supports a completion claim?
7. What is the measured `pass@1` on representative scenarios, and where are the weakest slices?
8. What telemetry will reveal regressions without retaining unnecessary sensitive data?
9. Who owns escalation and rollback when the system is uncertain?

This gate does not make an agent infallible. It converts “the model seems good at tools” into explicit claims that can be tested, monitored, and revised. That is the core of tool-use reliability: not eliminating uncertainty, but containing it and refusing to confuse a plausible action trace with a verified result.

## Sources

- UC Berkeley, [Berkeley Function-Calling Leaderboard (BFCL V4)](https://gorilla.cs.berkeley.edu/leaderboard) — official leaderboard and evaluation categories, including single-turn, multi-turn, execution, relevance, and hallucination measures.
- Patil et al., [A Function Calling Perspective on Scalable Large Language Model Agent Evaluation](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2025/31680.html), UC Berkeley technical report, 2025 — primary account of BFCL’s function-calling evaluation methodology.
- Lu et al., [ToolSandbox: A Stateful, Conversational, Interactive Evaluation Benchmark for LLM Tool Use Capabilities](https://aclanthology.org/2025.findings-naacl.65/), Findings of NAACL 2025 — primary paper on stateful execution, conversational evaluation, and milestone-based grading.
- Yao et al., [$\tau$-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains](https://arxiv.org/abs/2406.12045), 2024 — primary paper on tool use under user interaction and domain policies.
- Anthropic, [Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents), 2026 — official engineering guidance on environment-based evaluation, transcripts, graders, and agent-evaluation design.
- Anthropic, [Writing effective tools for AI agents—using AI agents](https://www.anthropic.com/engineering/writing-tools-for-agents), 2025 — official guidance on tool descriptions, boundaries, evaluation, and iterative tool design.

## Open questions

- Which reliability metrics best predict real user harm rather than benchmark task failure?
- How should evaluations represent concurrent state changes caused by people or other agents?
- What is the right confirmation policy when the cost of interruption competes with the cost of a wrong action?
- How can organizations share tool-use failure data without exposing private prompts, arguments, or business logic?
- When does an LLM-based verifier add genuine independent evidence, and when does it merely repeat the acting model’s blind spots?
