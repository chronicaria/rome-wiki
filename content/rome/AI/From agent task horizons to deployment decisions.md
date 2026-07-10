---
title: From agent task horizons to deployment decisions
created: 2026-07-10
source: llm
status: seed
tags: [ai, agents, evaluation, deployment, reliability, risk-management]
---

A task-horizon result is an external capability signal, not a permission slip: deploy only after translating its full success curve into use-case-specific evidence about failure cost, detectability, safeguards, and local performance.

Up: [[AI agents (MOC)]]

Related: [[Time horizon of AI agents]] · [[Long-horizon task reliability]] · [[Tool-use reliability]] · [[Verification loops for coding agents]]

## The translation problem

METR defines a task-completion time horizon as the human-expert task duration at which an evaluated agent is predicted to succeed with a chosen probability. Its widely cited 50% horizon is a useful trend coordinate. It is not the time an agent runs, the longest task it can ever solve, or a threshold below which delegation is safe. A system at its 50% horizon is, by definition, predicted to fail half the time on the fitted evaluation distribution. Even an 80% horizon describes average task completion under one model, scaffold, tool set, budget, grader, and task mixture—not a guarantee for a particular deployment.

Deployment asks a different question: **may this system perform this class of work, with these permissions and controls, given the consequences of a bad run?** The answer depends on more than capability. A flaky agent can still be useful when its output is cheap to check and cannot change the world. A stronger agent can be unacceptable when one undetected error can expose data, transfer money, delete production state, or create an irreversible safety hazard.

The right bridge from a horizon chart to operations is therefore a sequence of gates. The chart supplies a prior about where task difficulty may overwhelm the evaluated system. Local trials update that prior. A deployment decision then combines the resulting reliability estimate with impact, detection, recovery, and governance. Passing one gate never compensates for missing evidence at another.

## Start with the claim actually measured

Before using a horizon result, reconstruct its measurement envelope:

| Element | Question to record |
|---|---|
| System identity | Which exact model, scaffold, prompt, memory policy, verifier, and version were evaluated? |
| Task distribution | Which domains, task families, durations, and graders contributed to the fit? |
| Affordances | Which tools, network access, permissions, files, and environmental feedback were available? |
| Budget | What token, attempt, wall-clock, tool-call, and monetary limits applied? |
| Intervention | Could humans clarify, rescue, select among attempts, or approve actions? |
| Success | Was success a test pass, expert judgment, partial score, or another criterion? |
| Uncertainty | How many trials supported the estimate, and how wide or method-sensitive was the interval? |

This envelope matters because a horizon belongs to the **agent system**, not to the base model alone. Adding a repository search tool, a stronger scaffold, multiple attempts, or a verifier can move measured performance without changing model weights. Removing those affordances in production breaks the comparison in the other direction. See [[Model versus scaffold in agent evaluations]].

The task distribution is equally important. METR's current horizon work is centered on scoreable software, machine-learning, cybersecurity, and research-engineering tasks. Those tasks are valuable because they allow repeated controlled trials and human-time estimates. They do not represent work dominated by tacit organizational knowledge, negotiation, shifting preferences, physical action, or consequences that appear months later. A measured software horizon should not be converted directly into a hiring, medical, legal, or general-management conclusion.

Finally, preserve the whole success curve when possible. A single 50% crossing hides the region a deployment normally cares about. Low-impact draft generation may tolerate frequent rejection. Production changes may require 99% correct execution plus a reliable rollback. If evaluation data support only the 50% and 80% regions, an extreme-reliability claim is extrapolation, not evidence.

## Gate 1: define the deployment unit

“Deploy the agent” is too vague to evaluate. Define a bounded deployment unit containing:

- the task family and its inclusion and exclusion rules;
- the input and output contract;
- data and tool permissions;
- maximum duration, spend, attempts, and concurrency;
- required checkpoints and approval points;
- the success test and the unacceptable outcomes; and
- the owner who can stop, roll back, or escalate the run.

Task decomposition is legitimate only when the pieces are operationally real. Dividing an eight-hour migration into sixteen nominal thirty-minute steps does not make it safe if early architectural choices constrain every later action. Human task time is a proxy for difficulty, not a causal quantity that can be reduced by relabeling. Record dependency depth, irreversible actions, state size, and feedback latency alongside human-duration estimates.

A useful first classification separates **advice**, **reversible execution**, and **irreversible execution**. Advice produces an artifact a human or deterministic checker reviews before use. Reversible execution changes state but has a tested rollback. Irreversible execution changes state that cannot be completely recovered, or creates exposure before review. The same apparent task horizon can justify different modes in these classes.

## Gate 2: map the use case to the benchmark

External validity should be argued, not assumed. Compare the proposed work with the evaluated tasks across domain, ambiguity, tool environment, grader quality, context availability, and failure consequences. Then assign one of three transfer states:

1. **Near transfer:** production tasks closely resemble evaluated tasks and use materially equivalent affordances and success checks.
2. **Partial transfer:** important mechanisms overlap, but the production setting adds unfamiliar repositories, hidden requirements, asynchronous services, weaker graders, or different tools.
3. **Far transfer:** the benchmark and deployment share only a broad label such as “research,” “coding,” or “agentic work.”

Near transfer permits the external curve to serve as an informative prior. Partial transfer requires more local trials and conservative limits. Far transfer makes the horizon a weak scouting signal only. It can motivate evaluation design, but cannot carry a go decision.

Avoid a common mismatch: comparing the benchmark's human-time label with the proposed agent wall-clock timeout. If a task is labeled “two hours,” that means a relevant human took or was estimated to take about two hours under the benchmark's protocol. The agent may act much faster or consume repeated attempts. Operations must separately budget human-equivalent difficulty, agent latency, compute cost, and reviewer time.

## Gate 3: set a reliability target from consequences

Do not inherit the benchmark's convenient threshold. Choose the required reliability from the deployment's loss structure. A compact framing is:

$$
\text{residual risk} \approx P(F)\left[(1-P(D))L_u + P(D)(1-P(R))L_d\right],
$$

where $P(F)$ is the probability of a consequential failure, $P(D)$ the probability it is detected before harm, $P(R)$ the probability a detected failure is successfully recovered, $L_u$ the loss from an undetected failure, and $L_d$ the loss when a detected failure cannot be contained. This is a decision aid, not a universal actuarial model: failures are dependent, losses have tails, and the quantities may be poorly known. Its value is to expose what a raw completion score omits.

Use at least three impact dimensions:

- **Blast radius:** how many people, systems, records, or resources can one run affect?
- **Reversibility:** can the prior state be restored completely and promptly?
- **Detectability:** will an independent mechanism reveal the defect before it matters?

High uncertainty should tighten the gate. An unknown failure rate is not a low failure rate. If the plausible downside is severe and the trial set is too small to bound tail risk, the proper result is “evidence insufficient,” not an optimistic point estimate.

## Gate 4: reproduce the capability locally

Run shadow or sandbox trials on representative tasks before granting consequential permissions. The local evaluation should preserve real distributions rather than a handpicked set of clean examples. Include routine work, ambiguous requests, stale context, tool outages, adversarial or malformed inputs, and cases where the correct action is to stop.

Measure more than final completion:

- consequential defect rate and severity;
- false-positive and false-negative rates of validators;
- intervention frequency and type;
- time and cost for successful and failed attempts;
- constraint violations, including out-of-scope actions;
- recovery success after injected or natural faults; and
- the distribution of failure modes, not only the average score.

Keep a held-out acceptance set after iterative prompt and scaffold work. Otherwise evaluation becomes development feedback and the apparent gain can be overfitting. Re-run after changes to the model, prompt, memory, tools, environment, permission set, or verifier. A provider's silent model update or a repository migration can invalidate previous evidence even when the product name stays constant.

Statistical humility matters. Zero failures in a small pilot does not establish extreme reliability. A simple rule of three says that after $n$ independent failure-free trials, the approximate upper 95% bound on the failure probability is $3/n$. Three hundred clean trials therefore support only a rough bound below 1%, not 0.01%. Real agent runs are often correlated, so this shortcut can be optimistic; cluster results by task family and investigate common causes.

## Gate 5: validate safeguards as part of the system

Safeguards are not annotations placed around a capability score. They change residual risk and must be tested under the proposed deployment. NIST's AI Risk Management Framework organizes work around Govern, Map, Measure, and Manage; its generative-AI profile emphasizes adapting controls to context and risk tolerance. Frontier-lab preparedness frameworks similarly connect capability thresholds to deployment safeguards, threat models, efficacy evidence, residual-risk assessment, and governance review. These frameworks address different scopes, but they share one operational lesson: capability evidence and safeguard evidence are separate inputs.

For ordinary agent deployments, safeguard layers can include:

- least-privilege tools and scoped credentials;
- read-only or dry-run modes before write access;
- schemas, tests, policy checks, and invariant monitors;
- transaction limits and rate limits;
- isolated environments and data-loss prevention;
- explicit approval for external communication or irreversible actions;
- immutable logs, checkpoints, backups, and tested rollback; and
- circuit breakers triggered by uncertainty, repeated failure, anomalous actions, or missing evidence.

Test each layer's efficacy and failure independence. A language-model critic reading the same mistaken context may reproduce the generator's error. A compiler, permission boundary, reconciled ledger, or independently fetched source can offer a genuinely different checking channel. Defense in depth is useful only if layers do not share every relevant failure mode.

## Gate 6: choose a deployment mode, not a binary answer

A four-level ladder makes decisions more precise:

| Mode | Agent authority | Appropriate evidence |
|---|---|---|
| Assist | Drafts, proposes, or retrieves; human decides and executes | Some demonstrated usefulness; outputs cheaply and reliably reviewable |
| Supervised execute | Acts in a sandbox or reversible environment with approval checkpoints | Representative local trials, strong observability, tested checks and rollback |
| Bounded autonomy | Executes a narrow task class without per-action approval inside strict limits | High local reliability at the required threshold, validated safeguards, stable environment, monitored canary evidence |
| Prohibit or defer | No execution for this task class | Severe or poorly understood downside, weak transfer, inadequate detection, or insufficient evidence |

These modes are task-specific. One system can autonomously format a test fixture, operate under supervision when opening a pull request, and be prohibited from merging to production. Authority should follow the narrowest validated unit, not the most impressive demonstration.

Use canary exposure when moving upward: a small share of low-impact work, capped concurrency, short leases, and immediate human visibility. Predefine expansion, rollback, and stop criteria. “We will monitor closely” is not a criterion. Examples include an upper bound on defect rate, no critical constraint violations, a maximum reviewer burden, and required recovery performance.

## Gate 7: monitor for drift and revoke on evidence

Deployment is an ongoing experiment. Log inputs, system versions, tool outcomes, approvals, corrections, incidents, and final disposition in a form that supports failure analysis without collecting unnecessary sensitive data. Compare production outcomes with pilot assumptions. Watch for distribution shift, validator degradation, growing intervention load, cost escalation, and new common-mode failures.

Define revocation triggers before launch. A severe incident, a model or scaffold change, a broken rollback, missing audit data, repeated out-of-scope behavior, or evidence that the success test no longer tracks user intent should reduce authority automatically. Re-approval should require diagnosis and fresh evidence, not just a prompt patch.

This reversibility of authority is especially important because task horizons can improve faster than organizational controls. A longer measured horizon expands the set of tasks worth evaluating. It does not erase the need for monitoring, containment, or accountability.

## A worked decision pattern

Suppose an agent system has a strong measured horizon on software tasks and a team wants it to resolve repository issues. The benchmark result supports evaluation because the proposed work is plausibly near or partial transfer. It does not support direct production access.

The team defines the unit as small, labeled bug fixes in one repository; excludes authentication, billing, infrastructure, dependencies, and migrations; grants a disposable branch and no production secrets; and requires tests, static analysis, and human merge approval. Shadow trials sample the real issue queue and include underspecified tickets. The team records not only test passing but maintainer acceptance, reviewer correction time, scope violations, and rollback success.

If local trials show useful patches but frequent specification errors, the appropriate mode is supervised execute, even if benchmark completion looks excellent. If a later pilot demonstrates a low defect rate, reliable abstention, independent checks, and bounded reviewer burden, the team might allow autonomous branch creation while retaining human merge authority. If the agent begins altering tests to conceal defects or repeatedly crosses file boundaries, the authority contracts. The deployment gate follows measured residual risk, not the public horizon headline.

## What horizon growth should change

A credible increase in task horizon should change three things. First, it should expand the queue of workflows selected for controlled evaluation. Second, it should increase attention to longer dependency chains and more capable misuse or accident pathways. Third, it should prompt re-testing of safeguards that assumed the system could not execute a long sequence coherently.

It should not automatically change production permissions, workforce forecasts, or a claim of reliable autonomy. Those require task-representative evidence, threshold-appropriate statistics, and observed organizational outcomes. Horizon growth is upstream evidence about capability. Deployment is a downstream judgment about a sociotechnical system.

## Why it matters

Task horizons are attractive because they turn a complicated evaluation into an intuitive unit: human work time. That intuition can become misleading at exactly the moment the metric becomes decision-relevant. “Several-hour horizon” sounds like an employment shift or an unattended shift of work, while the measurement may describe 50% success on a software-heavy suite with a particular scaffold and grader.

For Andrew's agent workflows, the practical target is not the longest run. It is the largest bounded unit that preserves source integrity, file ownership, user intent, and recoverability at acceptable review cost. External horizons identify candidates; local evidence determines mode; safeguards limit blast radius; monitoring decides whether authority persists.

For frontier governance, the same separation blocks two symmetrical errors. One is premature deployment based on capability spectacle. The other is ignoring meaningful capability growth because present systems remain unreliable. A disciplined gate treats longer horizons as reasons to test more seriously and prepare stronger controls—without pretending that a benchmark crossing has already answered the deployment question.

## Sources

- METR, “Task-Completion Time Horizons of Frontier AI Models,” updated May 8, 2026, accessed July 10, 2026: https://metr.org/time-horizons/
- METR, “Measuring AI Ability to Complete Long Tasks,” March 19, 2025, accessed July 10, 2026: https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/
- Kwa et al., “Measuring AI Ability to Complete Long Tasks,” arXiv:2503.14499, 2025: https://arxiv.org/abs/2503.14499
- METR, “Time Horizon 1.1,” January 29, 2026, accessed July 10, 2026: https://metr.org/blog/2026-1-29-time-horizon-1-1/
- METR, “Impact of modelling assumptions on time horizon results,” March 20, 2026, accessed July 10, 2026: https://metr.org/notes/2026-03-20-impact-of-modelling-assumptions-on-time-horizon-results/
- National Institute of Standards and Technology, “Artificial Intelligence Risk Management Framework (AI RMF 1.0),” NIST AI 100-1, January 2023: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- National Institute of Standards and Technology, “Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile,” NIST AI 600-1, July 2024: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- National Institute of Standards and Technology, “NIST AI RMF Playbook,” accessed July 10, 2026: https://www.nist.gov/itl/ai-risk-management-framework/nist-ai-rmf-playbook
- OpenAI, “Preparedness Framework,” version 2, accessed July 10, 2026: https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf
- Anthropic, “Responsible Scaling Policy,” current and archived versions, accessed July 10, 2026: https://www.anthropic.com/responsible-scaling-policy

## Open questions

- Which local task taxonomy best predicts transfer from METR's software-heavy suite to Andrew's research and publishing workflows?
- How should correlated trials change the sample-size requirement for a bounded-autonomy gate?
- Which forms of human approval reduce risk rather than merely shifting the same error to a rushed reviewer?
- How should teams value graceful partial completion and clean escalation alongside binary task success?
- What public reporting standard would make reversals and contractions of agent authority as visible as expansions?
