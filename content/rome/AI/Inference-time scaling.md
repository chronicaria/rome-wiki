---
title: Inference-time scaling
created: 2026-07-10
source: llm
status: seed
tags: [ai, reasoning, inference-time-compute, search, verification, evaluation]
---

Inference-time scaling improves a fixed model system by spending and allocating more computation after a prompt arrives, but its gains depend on search diversity, reliable verification, adaptive stopping, and honest accounting of tokens, latency, and cost.

## The object being scaled

Training-time scaling spends computation to change model weights. **Inference-time scaling**—also called *test-time scaling* or *test-time compute*—spends additional resources after the input is known, usually without changing the base model's weights. A system may generate a longer trajectory, sample many trajectories, search a tree of partial solutions, call tools, critique drafts, or use a verifier to select a result. The relevant object is therefore not the model alone but the complete inference policy:

$$
y \sim \Pi(M, x, A, V, B),
$$

where $M$ is the fixed model, $x$ the prompt, $A$ the search or agent scaffold, $V$ the verification and selection procedure, and $B$ the resource budget. A reported gain can come from any part of that system. This is why inference-time scaling belongs beside [[Model versus scaffold in agent evaluations]] and [[Reasoning budget and fair model comparison]], not under an intrinsic model label.

“More thinking” is useful shorthand but a poor measurement category. It can mean more generated tokens in one response, more independent responses, more model calls in a tree, more retrieval and environment interactions, or a larger auxiliary judge. These mechanisms spend different resources and fail differently. A production decision needs to know which one produced the gain.

## Five mechanisms

### Longer serial trajectories

The simplest policy allows one trajectory to continue for more tokens. Intermediate text can function as a scratchpad: the model decomposes a problem, carries partial results forward, notices conflicts, and revises. Serial computation preserves state and is natural when later steps depend on earlier ones.

Length alone is not an algorithm. If the policy has learned useful deliberation, extra tokens may expose it. If not, the continuation can repeat an assumption, rationalize a wrong answer, or fill the context with low-value prose. Long outputs also increase attention cost and latency. The useful intervention is a policy trained or prompted to spend steps on operations that improve the answer—not an unqualified maximum-token increase.

### Parallel sampling and aggregation

Parallel scaling draws $n$ candidate trajectories. If a single independent attempt succeeds with probability $p$, the probability that at least one candidate is correct is

$$
1-(1-p)^n.
$$

That is *pass@$n$*: it describes candidate coverage, not the accuracy of the answer returned to a user. A deployable system must identify the correct candidate. Majority voting, or **self-consistency**, aggregates answers without access to ground truth. Wang and colleagues sampled diverse chains of thought and selected the most consistent final answer; on their studied arithmetic and commonsense benchmarks this substantially improved over greedy chain-of-thought decoding. The method works best where distinct valid derivations converge on a well-defined answer.

Independence is an optimistic assumption. Samples from one model and prompt may share memorized misconceptions, framing errors, or systematic arithmetic habits. Correlation reduces the effective number of candidates. Temperature and prompt variation can increase diversity, but unconstrained diversity also creates more low-quality candidates for the selector to reject.

### Search over partial solutions

Instead of completing each trajectory independently, a search policy branches at intermediate states, scores them, prunes weak branches, and expands promising ones. Beam search, best-first search, tree search, and repeated proposal–critique loops are variations on this pattern. Search can recover from a locally plausible but globally fatal step before paying for a full completion.

The state representation and branching granularity matter. A mathematical derivation may branch by reasoning step; a program agent may branch by patch; a web researcher may branch by query or source hypothesis. Search is valuable only if the evaluator can rank partial states better than chance and if early pruning does not discard unconventional correct paths. A dense process reward can guide many decisions, but every extra decision is also an opportunity for verifier error.

### Revision with feedback

A trajectory can receive feedback from its own critique, a second model, a compiler, unit tests, a theorem checker, a simulator, retrieval results, or a human. This converts inference from pure generation into a closed loop. ReAct demonstrated the broader pattern of interleaving reasoning and actions with environment observations on question answering and interactive tasks. In coding, execution feedback can be far more informative than another paragraph of introspection.

Feedback quality is the hinge. Objective checks can eliminate broad classes of candidates cheaply. An LLM rereading its own answer may share the original blind spot and merely rewrite it more confidently. Tool feedback can also be gamed: a patch can overfit public tests, a proof search can exploit a formalization gap, and an agent can chase a noisy score rather than the intended task.

### Verification and selection

Generation asks whether a correct candidate is present; verification asks whether the system can recognize it. **Outcome verification** scores a completed answer. **Process verification** scores intermediate steps. Lightman and colleagues compared these approaches on a representative subset of the MATH dataset and reported stronger performance from process supervision, releasing PRM800K with roughly 800,000 step-level labels. That result established process reward models as an important search component, but it does not imply that process supervision dominates across domains, models, or open-ended tasks.

Verifiers range from exact to subjective:

- formal proof checkers, compilers, unit tests, and deterministic calculations can provide high-precision signals within their specifications;
- retrieval and citation checks test contact with external evidence but may not establish whether the evidence supports the claim;
- learned reward models and LLM judges can rank unstructured answers, but may reward style, verbosity, or familiar reasoning patterns;
- hidden benchmark labels create an oracle selector and cannot be counted as a deployable method.

A verifier can improve accuracy while reducing diversity if candidates optimize toward its known preferences. Good evaluation therefore reports verifier accuracy, calibration, false-positive behavior, and whether generator and verifier errors are correlated.

## Search is not verification

Inference-time scaling is easiest to understand as a pipeline:

$$
\text{allocate} \rightarrow \text{generate/search} \rightarrow \text{verify} \rightarrow \text{select or stop}.
$$

Each stage answers a different question. Allocation decides where compute should go. Search tries to place a correct solution in the candidate set. Verification estimates candidate quality. Selection returns one answer or abstains. Collapsing these stages hides important failure modes.

For example, best-of-$n$ accuracy measured with ground-truth labels isolates search coverage. Majority-vote accuracy measures search plus a particular aggregation rule. Reward-model reranking measures search plus a learned verifier. A system allowed to run tests until one candidate passes measures a closed-loop policy with an external information channel. These are all legitimate experiments, but they support different claims.

The distinction becomes sharper in open-ended work. There may be no unique answer, and candidate quality may be multidimensional: factual accuracy, completeness, originality, safety, and compliance can conflict. Increasing the number of drafts does not guarantee that an LLM judge can find the best one. Independent source verification, executable artifacts, or decomposed rubrics may make the selector more reliable, but they add their own cost and assumptions.

## Adaptive compute is the central allocation problem

Uniformly giving every prompt the maximum budget wastes compute on easy tasks and may still underfund hard but tractable ones. An **adaptive** policy estimates difficulty or uncertainty, allocates additional steps where their expected value is high, and stops when further computation is unlikely to help.

Snell and colleagues studied two mechanisms: search guided by a process-based verifier and adaptive modification of the response distribution. Their experiments found that the preferred method depended strongly on prompt difficulty. A compute-optimal policy was more than four times as efficient as a uniform best-of-$n$ baseline in their setting. In FLOP-matched comparisons, test-time compute applied to a smaller model could outperform a model fourteen times larger on problems where the smaller model already had nontrivial success.

The qualification is crucial. If a model's probability of reaching the needed idea is nearly zero, sampling more versions may not help. If the problem is already easy, extra search has little marginal value. Between those extremes lies the region where allocation matters most: the base policy sometimes succeeds, a verifier can recognize progress, and additional computation raises success enough to justify its price.

A deployable controller cannot use hidden correctness to decide which prompt is hard. It must rely on available signals such as predictive entropy, disagreement among samples, verifier margins, failed tests, retrieval conflicts, trajectory length, or a separately trained difficulty estimator. These signals can be miscalibrated under distribution shift. Evaluations should distinguish **oracle allocation**, which knows eventual correctness, from **online allocation**, which uses only information available during inference.

Early stopping is part of scaling, not an implementation footnote. When a proof checker accepts, all required tests pass, or several independent methods agree with high confidence, the policy may stop and reallocate budget. When verification is weak, early stopping can lock in the first polished error. Abstention is another legitimate terminal action: compute should sometimes buy evidence that the system does not know.

## Normalize the resource vector

There is no universally fair scalar called “inference compute.” At minimum, report a resource vector

$$
B=(T_{in},T_{out},F,N,L,C,Q,E),
$$

where $T_{in}$ and $T_{out}$ are input and output tokens across all calls, $F$ estimated FLOPs, $N$ model invocations or sampled trajectories, $L$ wall-clock latency, $C$ monetary cost, $Q$ tool or retrieval calls, and $E$ energy or hardware use when material.

**Tokens.** Total generated tokens are easy to count but not architecture-neutral. A token from a larger dense model can require far more FLOPs than one from a smaller model; mixture-of-experts routing changes active compute; long contexts make attention cost depend on sequence length. Count tokens by model and distinguish cached from uncached input.

**FLOPs.** FLOP matching is closer to physical computation, but proprietary systems rarely disclose enough for precise estimates. It also omits memory bandwidth, batching efficiency, speculative decoding, and tool-side compute. Estimated FLOPs should be labeled as estimates with assumptions.

**Latency.** Serial reasoning increases user wait roughly with trajectory length, while parallel sampling can reduce wall time by consuming more accelerators at once. Equal latency therefore does not mean equal compute. Report median and tail latency, concurrency, and hardware conditions. A research batch job and an interactive assistant have different latency utilities.

**Cost.** Dollar matching answers a procurement question under current API prices, not a timeless scientific one. Prices reflect subsidies, margins, caching rules, and product strategy. Include verifier models, retries, retrieval, tool execution, and failed trajectories rather than pricing only the visible final call.

**Information channels.** Tool calls are not just compute. Search, execution, and environment feedback reveal new information unavailable to a closed-book model. Equal token budgets with unequal tool access do not isolate reasoning. Report query limits, accessible corpora, test visibility, timeouts, and whether repeated submissions reveal grader feedback.

No single normalization answers every question. FLOP matching may serve algorithmic efficiency; dollar matching serves present deployment; latency matching serves an interactive product; fixed hardware and deadline serve operational capacity planning. The strongest report publishes a quality–resource frontier rather than one leaderboard point.

## Diminishing returns and negative scaling

Additional inference usually has diminishing marginal returns because early samples capture common solutions and later samples increasingly duplicate them. But returns need not merely flatten; they can become negative. Longer contexts can bury key evidence. Repeated self-critique can replace a correct answer with a plausible wrong one. Tree search can prune the right branch. A reward model can be exploited more aggressively as the search budget rises. Tool-using agents can take additional irreversible actions after the task was effectively complete.

This means a scaling curve should include multiple budgets and uncertainty intervals. A single high-budget result cannot reveal whether gains were smooth, whether an intermediate budget was optimal, or whether rare catastrophic behavior increased. Evaluation should preserve trial-level outcomes and show accuracy, calibration, abstention, unsafe actions, and resource consumption jointly.

The base model also matters. Better-trained reasoning policies may convert long trajectories into useful computation; weaker policies may convert them into repetition. Better verifiers can make broad search valuable. Thus a test-time scaling law is conditional on the generator, verifier, task distribution, and scaffold. It should not be extrapolated as if it were a hardware law.

## A practical evaluation design

A credible comparison first fixes the question. To compare inference algorithms, hold the base model, prompt set, tools, and verifier training data constant, then trace each method across matched resource envelopes. To compare purchasable systems, allow their native scaffolds but measure the complete delivered system. Mixing these designs—calling one entry a model and another a model-plus-search pipeline—produces a misleading ranking.

For each condition, report:

1. the exact generator and verifier versions, prompts, decoding settings, and stopping rule;
2. pass@1, candidate-set pass@$n$, and returned-answer accuracy separately;
3. total tokens and calls across generator, critic, selector, and retries;
4. latency, concurrency, estimated compute, and actual cost;
5. tool access and all external feedback channels;
6. performance by difficulty stratum, including failures and abstentions;
7. verifier ablations and an oracle-selector upper bound clearly labeled as such;
8. the full quality–cost and quality–latency curves with uncertainty.

Difficulty bins should be defined without peeking at each system's final correctness. Human-rated complexity, a held-out difficulty model, or baseline success rates estimated on separate trials are defensible options. Because methods may reorder tasks by difficulty, publish task-level or sufficiently granular results rather than only bin averages.

Finally, test transfer. A controller tuned on competition mathematics may learn when a math verifier is confident, not a universal compute-allocation rule. Coding, factual research, planning, and subjective writing have different feedback structures. The most consequential frontier question is not whether compute can elicit a higher benchmark score, but whether a system can decide—under distribution shift—when to search, what to verify, when to stop, and when to defer.

## What inference-time scaling does and does not show

Inference-time scaling changes the economics of capability. Some quality improvements can be purchased after training, letting a smaller or older model spend more on difficult requests. It also creates flexible serving policies: cheap answers for routine prompts, deeper search for high-value ones, and parallel compute where latency matters. These are genuine system capabilities.

They do not show that arbitrary thought length produces intelligence, that pass@$n$ is deployable accuracy, or that a benchmark score belongs to the base model independent of its scaffold. They do not make verification free. In many domains the main bottleneck is no longer generating candidates but recognizing truth reliably enough to select among them.

The durable lesson is allocation. More computation helps when it expands useful search, receives informative feedback, and can be stopped by a trustworthy signal. The frontier is therefore a joint one: generator quality, search policy, verifier reliability, and resource control. [[Single-agent versus multi-agent inference]] is one architectural choice within that space, not a separate principle.

## Sources

- Charlie Snell, Jaehoon Lee, Kelvin Xu, and Aviral Kumar, [“Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters”](https://arxiv.org/abs/2408.03314), 2024. Primary research on verifier-guided search, adaptive response policies, and compute-optimal allocation.
- Xuezhi Wang et al., [“Self-Consistency Improves Chain of Thought Reasoning in Language Models”](https://arxiv.org/abs/2203.11171), 2022. Primary research on diverse sampling and answer aggregation.
- Hunter Lightman et al., [“Let's Verify Step by Step”](https://arxiv.org/abs/2305.20050), 2023. Primary research comparing outcome and process supervision on MATH and introducing PRM800K.
- Shunyu Yao et al., [“Tree of Thoughts: Deliberate Problem Solving with Large Language Models”](https://arxiv.org/abs/2305.10601), 2023. Primary research on search over intermediate language-model states.
- Shunyu Yao et al., [“ReAct: Synergizing Reasoning and Acting in Language Models”](https://arxiv.org/abs/2210.03629), 2022/2023. Primary research on interleaving reasoning, actions, and environment observations.

## Open questions

- Which online difficulty and uncertainty signals remain calibrated when prompts differ sharply from the controller's training distribution?
- How should verifier false positives and correlated generator–verifier errors enter compute-allocation decisions?
- Can a common reporting standard make tokens, FLOPs, dollars, latency, parallelism, and external information channels comparable without collapsing them into a misleading scalar?
- Where does additional inference become net harmful for tool-using agents with irreversible actions?
- How much of current reasoning progress comes from better base policies versus more search and stronger private verifiers?
