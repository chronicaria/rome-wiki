---
title: Agent memory architectures
created: 2026-07-10
source: llm
status: seed
tags: [ai, agents, memory, evaluation, long-horizon]
as_of: 2026-07-10
desk: AI frontier news
review_after: 2027-01-10
---

Agent memory is a controlled process for preserving, transforming, retrieving, and invalidating past information—not merely a vector database attached to a language model.

Up: [[AI agents (MOC)]]

A language-model agent has at least three different things that are casually called “memory.” Its model weights encode general patterns learned during training. Its current context contains temporary observations and intermediate reasoning. External stores preserve records across context limits or sessions. Only the third is usually meant by an agent-memory system, but the distinction matters: adding retrieval does not change the model's weights, and a long context does not by itself decide what deserves durable storage.

The useful engineering question is therefore not whether an agent “has memory.” It is whether a memory policy improves future decisions under a fixed budget without importing stale facts, irrelevant episodes, privacy risk, or false confidence. That makes memory part of the evaluated scaffold described in [[Model versus scaffold in agent evaluations]], not an intrinsic capability of the base model.

## Memory as a lifecycle

A complete memory system performs a loop:

1. **Observe:** receive messages, tool results, environment states, and outcomes.
2. **Select:** decide whether an observation is worth preserving.
3. **Encode:** store raw evidence, a structured record, a summary, or an extracted rule.
4. **Consolidate:** merge related records and resolve repetition or contradiction.
5. **Retrieve:** choose potentially useful memories for the present task.
6. **Use:** incorporate retrieved evidence into planning or action.
7. **Update or forget:** revise superseded beliefs, lower salience, or delete records under policy.
8. **Verify:** determine whether memory actually improved the final outcome.

Most systems emphasize storage and retrieval because these are easy to demonstrate. The hard failures occur elsewhere. A store can faithfully retain an obsolete address; an embedding search can retrieve a semantically similar but wrong project; a summary can erase a date or negation; and an agent can quote a relevant memory without applying it to its action. A benchmark of isolated fact recall observes only a narrow slice of this lifecycle.

## Four functional layers

Human-memory terminology is useful only as an engineering analogy. These categories describe functions, not evidence that an agent reproduces human cognition.

### Working memory

Working memory is the small set of information kept immediately available for the current decision: the goal, active plan, recent observations, unresolved questions, and state needed by the next action. In most LLM agents it is implemented inside the prompt or context window, sometimes with a scratchpad or structured state object.

Its main constraint is attention, not disk capacity. Appending everything makes important details harder to locate, raises inference cost, and can amplify prompt injection or stale instructions. A good working-memory manager decides what remains verbatim, what is summarized, and what is evicted to an external tier. MemGPT framed this as virtual context management: information moves between limited in-context “main memory” and larger external stores, analogous to a memory hierarchy in an operating system. The analogy clarifies control flow, but it does not prove that the paging policy is optimal.

### Episodic memory

Episodic memory preserves time-bounded experiences: what happened, when, in what context, and with what outcome. Examples include a conversation turn, a failed deployment, a user's past request, or a tool trajectory. Timestamps and provenance are essential because two similar episodes may imply opposite lessons under different conditions.

Generative Agents stored natural-language observations, retrieved them using a combination of recency, importance, and relevance, and generated higher-level reflections. Its ablations supported the claim that observation, planning, and reflection contributed to believable behavior in the paper's simulated-town setting. That is evidence for the architecture on that evaluation, not proof of general task competence or human-like autobiographical memory.

An episodic store is especially valuable for diagnosis. It can answer “what happened last time?” and preserve failures that a semantic summary might smooth away. Its weakness is volume. Raw episodes accumulate quickly, contain redundancy and sensitive data, and may retrieve superficial analogies. Systems therefore need retention limits, compression, and outcome-aware indexing.

### Semantic memory

Semantic memory contains consolidated claims that should generalize beyond one event: a user's stable preference, a project convention, an entity relationship, or a learned environmental rule. It may be stored as text summaries, key-value records, database rows, or nodes and edges in a knowledge graph.

Consolidation is a lossy inference step. Turning five episodes into “the user prefers morning meetings” creates a compact rule, but it may discard exceptions or mistake a temporary constraint for a lasting preference. Every semantic memory should retain provenance to supporting episodes, an update time, a scope, and ideally a confidence or conflict state. When evidence changes, the system should revise the rule rather than accumulating mutually inconsistent sentences.

The distinction from retrieval-augmented generation is one of policy and time. A document index usually treats a relatively stable corpus as given. Agent memory continually decides what to write from its own interactions, which means its errors can become future evidence. Without provenance and invalidation, one hallucinated summary can be retrieved repeatedly and appear increasingly authoritative.

### Procedural memory

Procedural memory represents how to perform a recurring task: a workflow, tool sequence, recovery strategy, checklist, or policy-conditioned skill. It can live in code, prompts, reusable plans, demonstrations, or learned controller parameters. Unlike semantic memory's “what is true,” procedural memory asks “what should I do in this class of situation?”

This layer connects memory to [[Tool-use reliability]]. Remembering a successful command is not enough; the stored procedure must specify prerequisites, authority, verification, and failure handling. A procedure copied from one environment may be unsafe in another. Durable procedural records therefore need versioning and scope, and deterministic code is preferable to a remembered prose recipe when the rule is crisp.

Reflection systems sometimes derive procedures from episodes: several failures lead to a general lesson. That can improve adaptation, but it also risks overfitting to one trajectory. A claimed learned procedure should be evaluated on held-out tasks and compared with a fixed instruction baseline.

## Retrieval is a decision policy

External storage is cheap relative to inference; selecting the right evidence is the bottleneck. A common retrieval score combines semantic similarity, recency, and importance:

$$
S(m,q)=\alpha\,\mathrm{sim}(m,q)+\beta\,\mathrm{recency}(m)+\gamma\,\mathrm{importance}(m),
$$

where $m$ is a memory and $q$ the current query. The formula is a design template, not a universal metric. Similarity can miss an indirectly relevant constraint. Recency can suppress an old but still binding rule. Importance is often assigned by another language model and inherits its inconsistency.

Retrieval can be improved through metadata filters, entity resolution, temporal reasoning, graph traversal, reranking, and diversity constraints. Yet every extra stage adds latency and its own error modes. The correct comparison holds the backbone model, prompt, context budget, number of calls, and evaluation tasks constant. Otherwise a memory system may appear better merely because it spends more tokens or exposes the model to more attempts.

Crucially, retrieval accuracy is not task success. A system can fetch the correct preference and then ignore it when calling a tool. Mem2ActBench was motivated by this gap between passively answering memory questions and proactively grounding tool actions in past information. The stronger endpoint is whether memory changes behavior correctly while avoiding unrelated or obsolete constraints.

## Consolidation, conflict, and forgetting

Unbounded accumulation is not durable memory. It is an ever-growing log. Consolidation turns repeated episodes into compact structures, but must preserve enough provenance to reopen a conclusion. A practical record can include:

- claim or procedure;
- source episode identifiers;
- event time and write time;
- entity and scope;
- confidence or support count;
- supersedes/superseded-by links;
- sensitivity and retention policy;
- last retrieval and last successful use.

Contradiction handling is more important than anthropomorphic “forgetting curves.” If a user changes cities, the old address should not simply decay at the same rate as a stable birthday. It should be explicitly invalidated for current-use queries while remaining available in a historical view. MemoryBank explored time- and importance-based forgetting for long-term companionship, but its simulated-dialog and qualitative evaluation should not be generalized into a validated human-memory law for agents.

Forgetting can serve four distinct goals: remove obsolete information, control context and compute cost, reduce interference, and comply with privacy or retention requirements. These goals demand different mechanisms. Low retrieval frequency is not permission to retain personal data indefinitely, and deletion from an index may be incomplete if summaries or backups still contain the information.

## What ablations must establish

A credible memory claim should compare at least these systems under matched resources:

1. no external memory;
2. full recent history up to the same token budget;
3. simple retrieval from raw episodes;
4. retrieval plus consolidation;
5. the proposed memory policy;
6. an oracle or upper-bound retrieval condition where feasible.

The ablation should remove or replace one component at a time: write selection, episodic storage, semantic consolidation, retrieval scoring, reflection, forgetting, or action conditioning. Report not only average answer accuracy but task completion, stale-memory errors, contradiction resolution, unnecessary retrieval, token and latency cost, privacy-policy violations, and performance as the interaction history grows.

Evaluations also need temporal structure. Randomly shuffled facts do not test whether the agent understands that a newer preference supersedes an older one. Explicit questions such as “What is my favorite food?” do not test whether the agent applies a preference when booking a restaurant. Current benchmarks increasingly target long conversations, changing facts, and memory-grounded action, but scores remain tied to their task construction, judge, and backbone model.

Independent verification matters because memory papers often introduce both the system and its preferred benchmark settings. Releasing code, prompts, data, retrieval budgets, and per-example outputs makes it possible to distinguish a robust policy from favorable model judging or hidden inference spend.

## Failure modes

**False write:** the agent stores an inference as if the user stated it. **Lossy summary:** compression deletes a negation, date, exception, or attribution. **Retrieval miss:** a necessary record exists but is not selected. **Retrieval pollution:** irrelevant memories crowd out current evidence. **Stale use:** a superseded fact guides an action. **Identity collision:** records from two people or projects are merged. **Self-reinforcement:** an earlier model error is stored, retrieved, and treated as corroboration. **Procedure drift:** an old workflow is reused after tools or policies change. **Privacy leakage:** one session retrieves another user's record. **Over-personalization:** the system applies a preference where the user wanted a fresh choice.

These failures show why “more memory” is not monotonically better. Memory creates a persistent attack and error surface. Write operations should be permissioned, sensitive fields minimized, tenant boundaries enforced, retrieved content treated as untrusted evidence, and consequential actions verified against current authoritative state.

## Architecture choice by task

There is no best universal design. A coding agent may value procedural records about repository tests and episodic traces of failed patches. A personal assistant needs strict entity separation, temporal semantic updates, and deletion controls. A scientific agent needs provenance-rich evidence and must never collapse a hypothesis into a fact. A simulated character may optimize narrative continuity, which is not the same objective as factual reliability.

Start from the smallest memory that closes a measured failure. If recent context solves the task, an external store may add needless complexity. If facts recur across sessions, add structured semantic records with provenance. If outcomes matter, preserve episodic traces. If workflows repeat, encode procedures in versioned, testable artifacts. Only then consider learned write and retrieval policies, and evaluate them against simpler matched-budget baselines.

## Why it matters

Memory is often presented as the missing ingredient for indefinitely capable agents. The evidence supports a narrower conclusion: controlled external memory can extend usable history and improve some long-running interactions, but it also moves the system's reliability problem from context length to information governance. The agent must decide what to remember, when to trust it, how to update it, and whether it actually improved action.

This reframing connects memory to [[Long-horizon task reliability]], [[Single-agent versus multi-agent inference]], and [[Verification loops for coding agents]]. Persistent state can help an agent accumulate useful evidence across time, but only verification prevents accumulated mistakes from becoming durable policy.

## Sources

- Packer et al., [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560), 2023; accessed 2026-07-10.
- Park et al., [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442), 2023; accessed 2026-07-10.
- Zhong et al., [MemoryBank: Enhancing Large Language Models with Long-Term Memory](https://arxiv.org/abs/2305.10250), 2023; accessed 2026-07-10.
- Wang et al., [Augmenting Language Models with Long-Term Memory](https://arxiv.org/abs/2306.07174), 2023; accessed 2026-07-10.
- Yu et al., [Agentic Memory: Learning Unified Long-Term and Short-Term Memory Management for Large Language Model Agents](https://aclanthology.org/2026.acl-long.981/), ACL 2026; accessed 2026-07-10.
- Shen et al., [Mem2ActBench: A Benchmark for Evaluating Long-Term Memory Utilization in Task-Oriented Autonomous Agents](https://aclanthology.org/2026.acl-long.370/), ACL 2026; accessed 2026-07-10.
- Uddin et al., [From Recall to Forgetting: Benchmarking Long-Term Memory for Personalized Agents](https://aclanthology.org/2026.findings-acl.1337/), Findings of ACL 2026; accessed 2026-07-10.
- Jia et al., [Evaluating the Long-Term Memory of Large Language Models](https://aclanthology.org/2025.findings-acl.1014/), Findings of ACL 2025; accessed 2026-07-10.

## Open questions

- Which memory benchmarks best predict correct behavior in real, multi-month tool-using workflows?
- How should retrieval quality, action quality, inference cost, and privacy risk be combined without hiding tradeoffs in one score?
- Can a learned memory policy reliably distinguish an enduring user preference from a temporary instruction?
- What independent replication threshold should be required before treating memory-system gains as backbone-agnostic?
