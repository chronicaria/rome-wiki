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

Agent memory is a versioned control system for deciding what an agent writes, retrieves, consolidates, and invalidates; its value is the improvement in future action after every extra token, call, and error opportunity is charged.

Up: [[AI agents (MOC)]]

“Memory” can mean three different resources. Model weights contain patterns acquired during training. The current context contains temporary observations and intermediate state. An external memory persists records across context limits or sessions. This note concerns the third resource and the policies that connect it to the first two. A large context is not automatically a memory architecture, and a vector index is only one possible read path—not a complete memory system.

The engineering question is not whether an agent remembers more facts. It is whether persistent state improves later decisions under a fixed resource and risk budget. That makes memory part of the scaffold in [[Model versus scaffold in agent evaluations]]. It also explains why an explicit fact-recall score can rise while the deployed agent becomes worse: a retrieved but obsolete instruction can corrupt an action, a summary can erase an exception, or a false inference can become durable evidence.

## The memory control loop

A useful architecture exposes at least four operations:

1. **Write:** decide whether an observation, outcome, claim, or procedure should persist; choose its representation and scope.
2. **Read:** construct a query, select candidates, rerank them, and place only the chosen evidence into working context.
3. **Consolidate:** transform accumulated records by summarizing, linking, extracting rules, resolving duplication, or promoting stable information to a more compact tier.
4. **Forget or invalidate:** delete, expire, demote, quarantine, or supersede information that is no longer safe or useful.

These operations form a feedback loop rather than a pipeline. Retrieved memories influence actions; actions create new observations; the writer may store the resulting model-generated interpretation; consolidation may then treat that interpretation as support. Without provenance, a single hallucination can be retrieved repeatedly and appear increasingly authoritative. Every transition therefore needs an auditable distinction among external observation, user statement, tool result, model inference, and later summary.

A minimal record should include content, record type, subject or entity, event time, write time, source identifiers, scope, sensitivity, and current validity. Systems that consolidate should retain parent links. Systems that update should represent `supersedes` and `superseded_by`, not merely append a newer sentence. Procedures additionally need environment, tool version, prerequisites, authority, expected result, and a verification step.

## Where information lives

The familiar working–episodic–semantic–procedural taxonomy is useful as an interface map, not evidence that an LLM reproduces human cognition.

### Working memory

Working memory is the bounded state immediately visible for the next decision: current goal, plan, recent evidence, unresolved constraints, and retrieved records. Its scarce resource is attention. Filling the prompt with everything increases inference cost and can bury binding instructions among irrelevant history.

MemGPT framed context management as a memory hierarchy: limited in-context “main memory” sits beside larger external stores, and the agent calls tools to move information between them. The contribution is an explicit paging interface controlled by the model. It does not establish that model-directed paging is always better than deterministic truncation, retrieval, or a longer context. The current Letta repository is a useful implementation artifact, but product capability and paper evidence should remain separate.

Working-memory policy decides what remains verbatim, what becomes structured state, what is summarized, and what is evicted. Because this policy directly changes the prompt, an evaluation must report injected tokens and the placement of retrieved content—not just database latency.

### Episodic memory

Episodic memory preserves events with time, context, and outcome: a conversation turn, failed deployment, browser trajectory, or completed task. It answers “what happened under these conditions?” Raw episodes retain diagnostic detail and allow a later consolidator to revisit an earlier interpretation.

Generative Agents stored natural-language observations, ranked retrieval by recency, importance, and relevance, and generated higher-level reflections. Its component ablations supported the role of observation, planning, and reflection for believable behavior in the paper’s simulated-town evaluation. That is bounded evidence for that setting, not proof of general competence or human-like autobiographical memory.

The strengths of an episodic log are provenance and reversibility. Its weaknesses are volume, redundancy, privacy exposure, and superficial analogy. Outcome fields matter: storing only successful-looking trajectories creates survivorship bias, while storing every token makes retrieval noisy. A failed episode is often more useful than a polished summary if it preserves the exact precondition that triggered failure.

### Semantic memory

Semantic memory stores consolidated claims intended to apply beyond one episode: a stable user preference, project rule, entity relation, or learned environmental fact. It may use text records, key–value fields, relational tables, or a temporal knowledge graph.

This tier is compact but epistemically dangerous. Turning several episodes into “the user prefers morning meetings” discards circumstances and exceptions. A semantic record should therefore retain its supporting and contradicting episodes, applicability scope, last verification time, and validity state. A temporal property such as an address needs effective-from and effective-to fields; similarity plus recency is a poor substitute for explicit validity.

A-MEM illustrates a more dynamic organization policy: new notes receive generated attributes and links, and their arrival can update representations of earlier memories. The design makes organization adaptive, but it also moves more judgment into model calls during writing. Its gains must be interpreted together with write-time compute, backbone choice, retrieval budget, and the benchmark tasks used. Graph structure is not free evidence; generated edges can amplify an identity error or an unsupported association.

### Procedural memory

Procedural memory stores how to perform a recurring task: a workflow, tool sequence, recovery strategy, checklist, or reusable skill. It connects memory to [[Tool-use reliability]]. A remembered command is not a procedure unless its prerequisites, permitted scope, expected state change, and verification are also represented.

Procedures are best encoded as deterministic code or tests when the rule is crisp. Prose lessons are appropriate when conditions remain fuzzy, but they should be treated as hypotheses until validated on held-out tasks. An agent that converts one failed trajectory into a universal rule can overfit as easily as an agent that learns nothing. Recovery-Bench, for example, evaluates whether an agent can recover from replayed failed terminal trajectories; it is relevant to use of prior experience, but it is not by itself an evaluation of a persistent write-and-retrieve architecture.

## Write mechanisms: the neglected half

Retrieval papers often begin after a corpus already exists. Persistent agents must create that corpus, so write errors compound.

A **write-all log** preserves maximum evidence and is easy to audit, but storage, retrieval noise, and exposure grow with every interaction. A **rule-based writer** stores only declared event types—for example, explicit preferences, tool outcomes, or accepted plans. It is cheap and predictable but misses novel information. A **model-gated writer** asks an LLM to judge salience and produce a record. It is flexible but can convert inference into “fact,” assign inconsistent importance, and consume hidden tokens. A **structured extractor** writes schema-conforming fields with citations to source spans; it reduces ambiguity but depends on entity resolution and schema coverage.

Write evaluation needs precision as well as recall. False negatives cause future misses; false positives create durable pollution. A benchmark should label not only what should be remembered but what must not be stored: speculative model text, secrets, transient instructions, another tenant’s data, or a preference explicitly limited to one task. It should separately score content fidelity, attribution, time, entity identity, and scope.

Write amplification is a major cost. If every turn triggers classification, summarization, embedding, entity extraction, and graph linking, the memory layer may spend several model calls before retrieval ever helps. The fair baseline may use those same calls for a larger context, a stronger reranker, or direct task reasoning.

## Retrieval mechanisms and action conditioning

A common candidate score combines semantic similarity, recency, and importance:

$$
S(m,q)=\alpha\,\operatorname{sim}(m,q)+\beta\,\operatorname{recency}(m)+\gamma\,\operatorname{importance}(m).
$$

This is a design pattern, not a universal metric. Similarity misses indirectly relevant constraints. Recency can suppress an old but still binding rule. Importance is often model-generated and unstable. Metadata filtering, keyword search, entity resolution, temporal queries, graph traversal, reranking, and maximal-marginal-relevance selection each solve different failure modes.

Retrieval should be decomposed into query formation, candidate recall, ranking, context assembly, and use. Testing only whether the gold record appears in the top $k$ misses two critical failures: the prompt may bury the record, or the agent may ignore it when acting. Mem2ActBench targets this distinction by asking whether long-term memories affect task-oriented actions rather than only answers to explicit memory questions.

The endpoint is **memory-conditioned behavior**: did the system apply a relevant valid memory, ignore an irrelevant one, and request confirmation when records conflict? For consequential actions, retrieved memory is untrusted evidence. Current authoritative state—such as a live account setting or repository policy—should override a stored recollection.

## Consolidation without losing the evidence

Consolidation can reduce interference and inference cost by merging duplicate episodes, extracting stable claims, building entity timelines, or distilling procedures. It can happen synchronously after each write, asynchronously during idle compute, or only when a store crosses a threshold. LightMem is a recent example that separates online writing and retrieval from offline consolidation and explicitly treats evidence accumulation and forgetting as parts of the architecture.

The central tradeoff is compression versus reversibility. A summary without links to its source episodes cannot be corrected when a lost negation or exception is discovered. A safer pattern is two-layer storage: immutable or retention-controlled evidence records plus mutable derived records. The derived claim points to parents and can be regenerated; deletion policy still has to propagate to summaries and indexes when source retention ends.

Consolidation quality cannot be measured only by shorter prompts. Tests should inject near-duplicates, contradictions, exception cases, entity collisions, and changes over time. The evaluator then checks whether the compact record preserves attribution, temporal order, minority exceptions, and confidence. The system should be rewarded for marking unresolved conflict rather than forced to synthesize one fluent answer.

## Forgetting, invalidation, and deletion are different

“Forgetting” conflates at least four controls:

- **Eviction:** remove a record from working context while retaining it externally.
- **Demotion or decay:** reduce retrieval priority because expected usefulness fell.
- **Invalidation:** mark a claim obsolete for current decisions while preserving history.
- **Deletion:** remove data because policy, consent, or retention requires it.

These operations cannot share one recency curve. A previous address should be invalidated immediately after a verified move, not slowly become less similar. A birthday can remain valid despite infrequent use. A secret may require deletion even if it is useful. MemoryBank explored time- and importance-based forgetting in long-term dialogue, but its mechanism should not be treated as a validated human forgetting law for agents.

Memora is valuable because it evaluates evolving personalized memory over simulated weeks to months and includes remembering, reasoning, and recommendation tasks. Its Forgetting-Aware Memory Accuracy penalizes reuse of invalid memory. The reported experiments found frequent failures to reconcile updates and only marginal improvement from tested memory agents; the important lesson is methodological rather than universal: obsolete-memory use must count as an error, not merely a retrieval miss.

## A matched-budget ablation ladder

A credible claim compares architectures with the same backbone, task set, prompt authority, tool access, time limit, and stochastic sampling. It should cap or report total input tokens, output tokens, embedding calls, model calls, storage reads and writes, retrieved tokens, wall time, and monetary cost. “Same top-$k$” is not enough if one system creates expensive summaries and another reads raw episodes.

The minimum ladder is:

1. **No persistence:** current-session context only.
2. **Recent-history baseline:** fill the same injected-token budget with the latest raw turns.
3. **Long-context baseline:** provide as much raw history as the evaluated model and matched total inference budget allow.
4. **Raw episodic retrieval:** write all eligible episodes and retrieve without consolidation.
5. **Write-gated retrieval:** add the proposed selection policy while keeping the read policy fixed.
6. **Consolidated retrieval:** add summaries, structured claims, or graph links while fixing retrieval count and context tokens.
7. **Full policy:** add temporal update, forgetting, or learned control.
8. **Oracle read:** inject the smallest gold evidence set, establishing how much failure remains in reasoning or action after retrieval is solved.

For every adjacent pair, change one component. A write-policy ablation must reuse the same retrieval machinery. A retriever ablation must use the same stored records. A consolidation ablation must charge consolidation calls and compare against a baseline allowed to spend those calls elsewhere. A forgetting ablation needs histories containing genuinely obsolete records; otherwise deletion can only look like lost recall.

Matched budget has several defensible regimes, and papers should name which one they use. **Equal injected context** isolates selection quality. **Equal total tokens and calls** approximates inference expense. **Equal wall-clock or dollar cost** better reflects deployment. **Equal storage footprint** tests compression. Results need not rank systems identically across regimes.

## Evaluation protocol

MemoryAgentBench identifies four useful competencies—accurate retrieval, test-time learning, long-range understanding, and selective forgetting—through incremental multi-turn interaction. LongMemEval tests long-term conversational memory over multiple question types. LongMemEval-V2 shifts toward experience in customized web environments, asking about static state, dynamic state, workflows, environment “gotchas,” and premise awareness. Together they show why no single recall benchmark covers agent memory.

A deployment-oriented protocol should contain five phases:

1. **Controlled accumulation:** deliver timestamped events with explicit entity and scope labels, plus distractors and items that must not be stored.
2. **Intervention:** change facts, revoke permissions, introduce contradictory testimony, rename entities, and update tool behavior.
3. **Delayed tasks:** require both explicit recall and implicit use in planning or tool calls after long gaps.
4. **Adversarial memory:** add prompt injection inside stored content, cross-tenant near-duplicates, plausible false summaries, and poisoned procedures.
5. **Audit and deletion:** request provenance, correction, export, and deletion; then verify indexes, derived summaries, caches, and behavior no longer expose deleted content.

Report component metrics rather than one opaque average: write precision/recall; temporal and entity accuracy; retrieval recall and precision at a fixed injected-token budget; stale-use and unnecessary-use rates; contradiction calibration; action success; privacy-boundary violations; deletion completeness; and cost. Performance should be plotted against interaction length because a policy that wins at 100 turns may collapse when its store contains 10,000 near-duplicates.

Judge-based scoring requires disclosed prompts, judge models, and human agreement checks. Code, data, memory snapshots, per-example outputs, and budget logs are necessary for independent verification. Benchmark maintainers should rotate or hold out task templates because a memory system can overfit query style just as a base model can overfit answers.

## Failure modes and controls

**False write:** model inference is stored as user fact. Preserve source type and require confirmation for durable personal claims. **Lossy consolidation:** a summary drops a negation, date, attribution, or exception. Retain parent links and test reconstruction. **Retrieval miss:** the record exists but query or ranking fails. Log candidates and separate recall from use. **Retrieval pollution:** irrelevant memories crowd out current evidence. Enforce a token budget and abstention threshold. **Stale use:** superseded information guides action. Model temporal validity explicitly. **Identity collision:** two people, repositories, or environments are merged. Use tenant boundaries and entity identifiers before similarity search.

**Self-reinforcement:** an earlier model error becomes apparent corroboration. Deduplicate by provenance, not wording, and never count derived summaries as independent sources. **Procedure drift:** a workflow survives after tools or policies change. Version procedures and revalidate preconditions. **Prompt injection persistence:** hostile content is stored and repeatedly reintroduced. Treat memory as data, isolate instructions, and require current authority. **Over-personalization:** an old preference is applied where the user wants a fresh choice. Store scope and allow abstention. **Deletion shadow:** a record is removed from the primary store but remains in embeddings, summaries, logs, or backups. Maintain a derivation graph and test erasure end to end.

## Architecture choice by task

There is no universally best design. A coding agent benefits from versioned procedures and episodic traces of failed patches. A personal assistant needs strict identity separation, temporal semantic updates, consent, and deletion. A scientific agent needs provenance-rich evidence and must not consolidate a hypothesis into fact. An embodied agent additionally needs spatial and temporal indexes. A simulated character may optimize narrative continuity, which is not the same objective as factual reliability.

Begin with the smallest mechanism that closes a measured failure. If recent context works, external memory adds complexity. If stable facts recur across sessions, add structured semantic records with provenance. If outcomes matter, retain episodic traces. If workflows repeat, encode procedures as testable artifacts. Add learned write and consolidation policies only after matched-budget ablations show that their gains survive their extra compute and error surface.

## Why it matters

Persistent memory does not remove the context problem; it turns it into information governance. The agent must decide what deserves durability, distinguish evidence from inference, retrieve only what is valid, and prove that memory changed behavior correctly. This is why memory architecture belongs beside [[Long-horizon task reliability]], [[Verification loops for coding agents]], and security evaluation—not as a cosmetic database feature.

The strongest current conclusion is narrow: controlled external memory can extend usable experience and improve selected long-running tasks, but the benefit is architecture-, budget-, benchmark-, and backbone-dependent. A system earns the label “better memory” only when it improves action under transparent resource accounting while reducing neither privacy nor correction rights.

## Sources

- Packer et al., [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560), 2023; implementation: [Letta repository](https://github.com/letta-ai/letta); accessed 2026-07-10.
- Park et al., [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442), 2023; accessed 2026-07-10.
- Zhong et al., [MemoryBank: Enhancing Large Language Models with Long-Term Memory](https://arxiv.org/abs/2305.10250), 2023; accessed 2026-07-10.
- Wu et al., [A-MEM: Agentic Memory for LLM Agents](https://arxiv.org/abs/2502.12110), 2025; [evaluation code](https://github.com/WujiangXu/AgenticMemory) and [system code](https://github.com/agiresearch/A-mem); accessed 2026-07-10.
- Hu, Wang, and McAuley, [Evaluating Memory in LLM Agents via Incremental Multi-Turn Interactions (MemoryAgentBench)](https://arxiv.org/abs/2507.05257), 2025; accessed 2026-07-10.
- Wu et al., [LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://arxiv.org/abs/2410.10813), 2024; [benchmark repository](https://github.com/xiaowu0162/LongMemEval); accessed 2026-07-10.
- Wu et al., [LongMemEval-V2: Evaluating Long-Term Agent Memory Toward Experienced Colleagues](https://arxiv.org/abs/2605.12493), 2026; accessed 2026-07-10.
- Shen et al., [Mem2ActBench: A Benchmark for Evaluating Long-Term Memory Utilization in Task-Oriented Autonomous Agents](https://aclanthology.org/2026.acl-long.370/), ACL 2026; accessed 2026-07-10.
- Uddin et al., [From Recall to Forgetting: Benchmarking Long-Term Memory for Personalized Agents](https://aclanthology.org/2026.findings-acl.1337/), Findings of ACL 2026; accessed 2026-07-10.
- Zhang et al., [Lightweight LLM Agent Memory with Small Language Models](https://aclanthology.org/2026.acl-long.588/), ACL 2026; accessed 2026-07-10.
- Letta, [Recovery-Bench repository](https://github.com/letta-ai/recovery-bench), 2025–2026; accessed 2026-07-10.

## Open questions

- Which benchmark mixture best predicts correct memory-conditioned action in real, multi-month workflows?
- Can write precision, stale-use risk, action success, inference cost, and privacy risk be reported without hiding tradeoffs in one score?
- How should deletion completeness be verified when derived summaries, embeddings, caches, and backups share provenance?
- Do learned memory policies retain their gains when consolidation compute is reassigned to stronger direct reasoning or a longer-context baseline?
- What independent replication threshold should precede a claim that a memory architecture generalizes across backbones and agent scaffolds?
