---
title: Single-agent versus multi-agent inference
created: 2026-07-10
source: llm
status: seed
tags: [ai, agents, multi-agent-systems, inference-time-compute, evaluation]
---
A multi-agent system earns its extra complexity only when independent search, information diversity, specialization, or verification improves the accuracy–cost frontier against a compute-matched single-agent baseline.

Related: [[Reasoning budget and fair model comparison]], [[Model versus scaffold in agent evaluations]], [[Multi-agent debate]], [[Large-scale LLM agent systems]], [[Long-horizon task reliability]].

The phrase *multi-agent intelligence* invites the wrong mental model. It suggests that several model instances form a team whose conversation creates a qualitatively new reasoning faculty. Sometimes a team-like architecture is operationally useful. But at inference time, the system is still allocating model calls, tokens, context windows, tool access, and elapsed time. A single agent can also spend those resources by sampling several answers, branching a search tree, reflecting, using tools, or asking a verifier to rank candidates. The scientific comparison is therefore not “one mind versus a society.” It is one inference policy versus another under explicit resource constraints.

This distinction changes what counts as evidence. If five agents beat one greedy answer while using five or fifteen times as many tokens, the result shows that extra inference helped. It does not yet show that social interaction helped, that role prompts created genuine expertise, or that the architecture used the extra compute efficiently. To establish a multi-agent advantage, an evaluation needs strong single-agent and ensemble baselines at matched budgets, component ablations, and task-level error analysis. Without them, an agent count is mostly a billing and orchestration parameter.

## Three different things called multi-agent inference

Many comparisons collapse three mechanisms that should be separated.

**Parallel sampling and aggregation.** Several model instances independently answer the same question, after which the system votes or selects. “More Agents Is All You Need” calls this Agent Forest and reports improvements as the number of sampled agents rises across several benchmarks. Mechanistically, however, this is an ensemble: each “agent” can be an independent draw from the same model and prompt. It belongs in the same family as [[Self-consistency]]—sample diverse reasoning paths, then aggregate their final answers. Its advantage comes from repeated opportunities to produce a correct answer and from a selector that can exploit disagreement, not necessarily from agents interacting.

**Interactive deliberation.** Agents read one another’s answers, criticize them, revise, and converge through debate, voting, or consensus. Interaction can expose a missing step or contradiction, but it also creates social dependence. Once one agent’s answer enters the others’ contexts, later outputs are no longer independent samples. Persuasive wording, ordering, shared model biases, and a mistaken majority can pull correct minority agents toward the same wrong answer.

**Decomposed agentic work.** A coordinator gives different subtasks to workers, often with separate tools or context windows, then combines their artifacts. This architecture is most plausible when the task has genuinely parallel branches: searching many sources, examining independent files, testing alternative hypotheses, or operating across distinct tool domains. Here the benefit need not appear as better abstract reasoning per token. It may be coverage, wall-clock latency, context capacity, or fault containment.

These mechanisms can be combined, but their gains should not be attributed to “collaboration” as a bundle. A system may improve because it drew more samples, because different workers saw different evidence, because a verifier caught errors, or because parallel execution beat a deadline. Each is a different causal claim.

## The minimum fair baseline

Suppose a multi-agent treatment uses four workers, two debate rounds, and a final judge. Comparing it with one ordinary model completion is structurally unfair. The treatment has more calls, more generated tokens, more context, and an additional selection mechanism. At minimum, the comparison should include:

1. a single greedy or standard agent, which measures the ordinary product experience;
2. a single-agent long-context or long-reasoning run with a similar total token allowance;
3. independent same-model samples followed by majority vote;
4. independent samples selected by the same judge or verifier used by the multi-agent system;
5. self-reflection or iterative revision with a similar number of calls;
6. the full multi-agent architecture, with ablations for debate, roles, tools, memory, and verifier.

There is no single perfect definition of “matched compute.” Equal output tokens may hide different input-context costs. Equal model calls may compare short calls with long ones. Equal dollars depend on provider prices and caching. Equal wall time favors parallel hardware. Equal estimated FLOPs are often impossible for closed models. A responsible paper should therefore report several resource views: all input and output tokens, model and tool calls, monetary cost at a dated price, critical-path latency, total work, and permitted concurrency. The most informative result is an accuracy–cost curve, not one headline score.

Matched budgets also need matched information channels. A decomposed system whose agents independently browse the web has access to more tool observations than a single model confined to the prompt. A coding team that can run tests after every patch receives repeated partial correctness signals. Those may be excellent product designs, but the experiment should compare them with a single-agent scaffold allowed the same tools, test feedback, and total action budget. Otherwise tool access is mistaken for multi-agent reasoning.

## What the debate literature actually establishes

Early demonstrations made a plausible case that cross-critique could correct errors. The stronger subsequent evidence is more conditional.

The ICML 2024 paper “Should we be going MAD?” benchmarked multiple debate and prompting strategies while examining accuracy, cost, and time. It found that then-current multi-agent debate protocols did not reliably outperform self-consistency or ensembles of multiple reasoning paths. Tuned protocols, including a multi-persona design, could do better, but the authors’ broader lesson was sensitivity: debate performance depended heavily on hyperparameters such as agreement behavior. That is evidence for protocol engineering, not a universal debate effect.

The NeurIPS 2025 paper “Debate or Vote” isolates majority voting from inter-agent debate over seven NLP benchmarks. Its central empirical conclusion is that majority vote accounts for most of the improvement commonly assigned to multi-agent debate. The authors model ordinary debate as a stochastic belief-update process and show, under their assumptions, a martingale property: communication does not create an expected drift toward correctness. Targeted interventions that bias updates toward corrective signals can help, but mere exchange of beliefs is not enough. The practical implication is severe: debate needs a mechanism for recognizing better evidence, not only more turns of conversation.

“Voting or Consensus?” in Findings of ACL 2025 reinforces the importance of protocol choice. Holding other settings fixed while comparing seven decision protocols, the authors report that voting protocols were stronger on their reasoning tasks, while consensus protocols were stronger on their knowledge tasks. Increasing agent count helped in their setup, but adding discussion rounds before voting reduced performance. Their proposed All-Agents Drafting procedure preserves independent initial answers before interaction, and Collective Improvement limits excessive communication. Both results point toward a common design principle: preserve diversity long enough to exploit it.

These papers do not prove that debate never helps. They show that “agents debated” is not an explanation. Debate can help when it reveals private evidence, makes assumptions inspectable, directs attention toward a checkable crux, or routes a candidate to a competent verifier. It can hurt when it converts independent evidence into correlated prose, rewards confidence, or lets a weak judge overwrite a correct minority.

## Correlated errors are the central limit

The intuitive case for majority voting often borrows from the Condorcet jury theorem: if voters are independently more likely than not to be correct, a larger majority becomes increasingly reliable. LLM ensembles violate the independence assumption in several ways. Instances may share weights, training data, system prompts, retrieval results, and reasoning habits. Even different frontier models share much of the public web and similar preference-tuning conventions. Independent random seeds create surface diversity, but they do not guarantee independent failure modes.

If all agents assign high probability to the same misconception, voting makes confidence more legible without making it more accurate. Debate can worsen the problem by broadcasting the misconception to agents that initially avoided it. A unanimous answer after several rounds is therefore not strong evidence unless the system has measured how often such unanimity is calibrated on comparable tasks.

Real diversity can be introduced through heterogeneous models, prompt families, tools, retrieval corpora, or deliberately disjoint evidence. But persona labels alone are weak evidence of diversity. Calling identical model instances “mathematician,” “skeptic,” and “editor” may change style while preserving the same latent blind spot. The right measurement is behavioral: pairwise error correlation, answer diversity before and after discussion, unique evidence retrieved, calibration by agreement level, and the rate at which correct minorities are converted to wrong majorities versus the reverse.

Heterogeneity also has costs. A weaker or poorly calibrated model can add noise. Different agents may interpret task requirements inconsistently. Disjoint evidence can withhold a decisive fact from the agent best able to use it. The aggregator then needs a principled way to weight claims. Diversity is valuable when it creates complementary signal, not as an aesthetic property of the transcript.

## Coordination overhead is part of inference cost

Multi-agent systems spend resources that benchmark tables often omit. The coordinator must formulate subtasks, serialize context, monitor progress, recover failed workers, reconcile formats, detect duplicate work, and synthesize outputs. Workers restate the task and repeat shared context. Debate repeatedly copies earlier answers into later prompts. Long conversations increase input-token cost and can bury the original requirements.

There is also a reliability tax. More components create more failure surfaces: malformed handoffs, missing artifacts, contradictory state, circular delegation, premature stopping, duplicated tool actions, and an orchestrator that cannot tell whether a worker is done. Cemri and colleagues’ 2025 study of five multi-agent frameworks across more than 150 tasks organizes observed failures into specification and system-design failures, inter-agent misalignment, and task verification or termination failures. Their human-annotated taxonomy is more useful than a simple average score because it identifies why added agents fail to translate into added capability.

Anthropic’s production account of its multi-agent research system provides unusually candid operational context. The company reports that token usage alone explained most of the variance in its BrowseComp analysis, and that multi-agent systems used roughly fifteen times the tokens of ordinary chat in its data. Anthropic argues that the architecture is economically sensible for high-value, open-ended research with substantial parallelism and information exceeding one context window. It also says tasks requiring shared context or many dependencies—including many coding tasks—are poorer fits, and notes that agents remain weak at real-time coordination and delegation. This is vendor evidence about its own system, not an independent benchmark, but it clearly limits the claim: multi-agent research works in part because it is an engineered way to spend much more inference.

Parallelism can still justify the overhead. Four workers searching independent source families may finish sooner than one serial researcher even if total compute rises. Separate context windows can prevent one massive trajectory from losing important details. File-level ownership can reduce interference. But these are systems advantages that should be reported as latency, coverage, and artifact quality—not smuggled into a claim of superior reasoning efficiency.

## Verifiers often matter more than the number of agents

Generating a correct candidate and identifying it are different capabilities. Multiple agents increase the candidate pool; a verifier determines whether the system can exploit that pool. On tasks with objective feedback—compilation, unit tests, formal proof checking, database constraints, or exact numerical answers—a cheap verifier can make parallel search extremely effective. The gain then belongs to model-plus-search-plus-verifier.

On open-ended tasks, the verifier is usually another LLM or a coordinator prompt. It may share the candidates’ blind spots, prefer polished prose, overweight majority agreement, or be unable to check sources. A centralized judge also creates a bottleneck: strong worker outputs can be lost when compressed into its context, and the judge’s single error can dominate the ensemble. If hidden benchmark labels or oracle tests select the best candidate, the reported result is best-of-$k$, not a deployable agent system unless comparable verification exists in production.

A useful evaluation therefore includes the same verifier over single-agent candidate batches. It should report verifier accuracy conditional on candidate quality: how often it selects a correct answer when one exists, how often it overturns a correct majority, and how performance changes when candidate identities and ordering are randomized. Verifier tokens, tool calls, and training exposure count toward the budget. An oracle upper bound is informative, but it must be labeled as an upper bound.

Verification can also be distributed. One agent may check citations, another execute tests, and another audit requirements. This is compelling when each checker has a distinct, reliable information channel. It is less compelling when every checker is the same model rereading the same prose. Specialized roles should be justified by measurable competence or tool access, not by job titles in a system prompt.

## When a single agent is the better default

A single agent is usually preferable when the task is tightly coupled, all reasoning depends on the same evolving state, or every step must understand the full context. It avoids handoff loss and makes the trajectory easier to reproduce, audit, and stop. With the same budget, it can spend more tokens maintaining a coherent model of the problem instead of exchanging summaries.

Single-agent designs are also easier to secure. One identity has one permission boundary, one action log, and one place to enforce confirmation. Multi-agent architectures can multiply credentials and create confused-deputy problems when a coordinator delegates more authority than a subtask requires. For consequential actions, decomposition should narrow permissions and isolate failure domains; it should never silently broaden them.

The default should not mean one greedy answer. A robust single-agent scaffold can plan, use tools, preserve structured memory, branch locally, run tests, and revise. The relevant alternative to a complicated team is often a well-engineered single agent with adaptive test-time compute—not a chatbot responding once.

## When multi-agent inference is worth testing

Multi-agent inference has a strong prior when work can be partitioned into independent, inspectable artifacts; when search breadth matters; when different workers can access genuinely different tools or evidence; when latency matters enough to pay for parallel compute; or when objective verifiers can select among candidates. Examples include broad literature searches, repository-wide mapping, adversarial security review with isolated test scopes, and generating many candidate proofs or programs for formal checking.

Even then, the architecture should be earned experimentally. Begin with a single-agent baseline and measure its bottleneck. If coverage is the problem, add parallel retrieval. If context overflow is the problem, add disjoint workers with artifact-based handoffs. If candidate quality varies, add a verifier. If common-mode errors dominate, diversify models or evidence rather than adding more copies. If synthesis loses details, let workers write durable artifacts that the coordinator references rather than paraphrases. Each addition should target an observed failure and survive an ablation.

The decision can be summarized as an accuracy–cost test. Let $Q(P,b)$ be task quality for inference policy $P$ at budget $b$, where the budget includes total compute, money, wall time, and tool access. Multi-agent policy $P_m$ is preferable only in the region where its quality or utility exceeds the best single-agent policy $P_s$ under the resource constraint that matters:

$$
Q(P_m,b) - Q(P_s,b) > \text{coordination and risk penalty}.
$$

The penalty is not merely tokens. It includes variance, operational failure, observability, security, and the human cost of debugging the system. A multi-agent design that wins one benchmark point while multiplying latency, cost, and unrecoverable failure may be dominated in deployment.

## A claim checklist

Before accepting a claim that multiple agents outperform one, ask:

- Were the total model, verifier, and tool budgets disclosed?
- Did the single-agent baseline receive comparable tokens, tools, and wall time?
- Was multi-agent debate compared with independent sampling plus voting?
- Was the same verifier applied to both systems’ candidate sets?
- Were initial answers collected before agents saw one another’s outputs?
- Were pairwise error correlations and correct-to-wrong opinion flips measured?
- Did role specialization correspond to different models, evidence, tools, or demonstrated skills?
- Were coordination failures and discarded worker outputs included in cost and accuracy?
- Were task-level results and uncertainty reported, rather than only an average?
- Does the conclusion apply only to the tested tasks, models, prompts, and budget range?

This checklist narrows the claim without dismissing the architecture. Multi-agent inference is a useful design space, but “more agents” is not an independent source of truth. Its durable advantages come from resource allocation: parallel exploration, preserved diversity, complementary information, and verification. When those ingredients are absent, a conversation among copies can be an expensive route back to the same error.

## Sources

- Junyou Li et al., [“More Agents Is All You Need”](https://arxiv.org/abs/2402.05120) (2024) — primary paper on sampling multiple agents and voting; code is linked from the paper.
- Xuezhi Wang et al., [“Self-Consistency Improves Chain of Thought Reasoning in Language Models”](https://arxiv.org/abs/2203.11171) (2022) — primary comparison point for multi-sample reasoning and answer aggregation.
- Yilun Du et al., [“Improving Factuality and Reasoning in Language Models through Multiagent Debate”](https://arxiv.org/abs/2305.14325) (2023) — early primary demonstration of multi-agent debate.
- Andries Smit et al., [“Should we be going MAD? A Look at Multi-Agent Debate Strategies for LLMs”](https://proceedings.mlr.press/v235/smit24a.html), ICML 2024 — primary benchmark of debate against other prompting and ensemble strategies.
- Hyeong Kyu Choi, Xiaojin Zhu, and Sharon Li, [“Debate or Vote: Which Yields Better Decisions in Multi-Agent Large Language Models?”](https://papers.nips.cc/paper_files/paper/2025/hash/934252acd87f254d5d4672fbde283bd2-Abstract-Conference.html), NeurIPS 2025 — primary ablation of voting and debate.
- Lars Benedikt Kaesberg et al., [“Voting or Consensus? Decision-Making in Multi-Agent Debate”](https://aclanthology.org/2025.findings-acl.606/), Findings of ACL 2025 — primary controlled comparison of decision protocols.
- Mert Cemri et al., [“Why Do Multi-Agent LLM Systems Fail?”](https://arxiv.org/abs/2503.13657) (2025) — primary human-annotated taxonomy of multi-agent system failures.
- Jeremy Hadfield et al., [“How we built our multi-agent research system”](https://www.anthropic.com/engineering/multi-agent-research-system), Anthropic Engineering (2025) — official production account with token-use, task-fit, and coordination caveats; vendor-authored rather than independent evaluation.

## Open questions

- Which benchmark suites can compare single-agent adaptive search with multi-agent orchestration under credible FLOP-, dollar-, and latency-matched envelopes?
- How much behavioral error independence can heterogeneous frontier models provide after accounting for shared training data and shared retrieval sources?
- Can deployable verifiers reliably rescue correct minority answers without increasing harmful majority overturns?
- What artifact and permission designs preserve the latency benefit of parallel workers while reducing handoff loss and security risk?
- At what task dependency density does coordination overhead erase the benefit of separate context windows?
