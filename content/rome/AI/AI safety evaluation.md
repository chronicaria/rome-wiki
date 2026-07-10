---
title: AI safety evaluation
created: 2026-07-10
source: llm
status: seed
tags: [ai, safety, evaluation, frontier-models, risk-management]
---

AI safety evaluation is the evidence-producing process that tests whether an AI system can cause a specified harm, whether safeguards reduce that risk in realistic conditions, and whether the remaining uncertainty permits a particular development or deployment decision.

Related: [[AI evaluation as measurement science]] · [[What makes an AI model frontier]] · [[Model versus scaffold in agent evaluations]] · [[Computer-use evaluation]]

## The object is a decision, not a score

“Is this model safe?” is not an evaluable question. Safety is relational: a system may be tolerable for offline classification and unacceptable when given code execution, credentials, money, or access to laboratory equipment. A useful evaluation therefore begins with a decision such as whether to continue training, release model weights, expose an API, enable a tool, raise a rate limit, or deploy into a high-consequence workflow. It then asks what evidence would change that decision.

This distinguishes safety evaluation from a leaderboard. A benchmark compresses behavior into a metric under a fixed protocol. A safety case connects claims, evidence, mitigations, and uncertainty to a concrete operating context. Benchmarks can supply evidence, but no benchmark alone establishes safety. The inference from observed performance to risk depends on the threat actor, access level, scaffold, incentives, monitoring, exposure, and consequences of failure.

The leading frontier-lab frameworks reflect this decision orientation. OpenAI’s Preparedness Framework connects “High” and “Critical” capability thresholds to requirements for safeguards during deployment or development. Google DeepMind’s Frontier Safety Framework uses early-warning evaluations around Critical Capability Levels and links them to security and deployment mitigations. Anthropic’s Responsible Scaling Policy connects Capability Thresholds to progressively stronger AI Safety Level standards. These are company policies rather than independent validation, but their shared structure is important: measure dangerous capability early, identify a threshold, and require a predefined response.

## Start from a threat model

A safety evaluation should specify at least six elements before tasks are written:

1. **Hazard:** the adverse outcome, such as enabling a biological attack, exploiting production systems, manipulating a population, evading oversight, or autonomously acquiring resources.
2. **Actor:** the person or system attempting it, including their baseline expertise, resources, motivation, and access.
3. **System:** model version, weights, prompting, tools, memory, retrieval, fine-tuning, inference budget, and any agent scaffold.
4. **Pathway:** the causal chain by which model assistance changes the probability or severity of harm.
5. **Controls:** access restrictions, classifiers, monitoring, human review, sandboxing, rate limits, incident response, and model-level refusals.
6. **Decision rule:** the result or uncertainty level that triggers additional evaluation, mitigation, restricted deployment, or a pause.

The pathway is often the weakest link in an evaluation. A model answering difficult questions does not by itself demonstrate that it materially increases real-world risk. Conversely, a harmless-looking subtask can matter if it removes a critical bottleneck in a longer harmful workflow. Evaluation designers should identify the counterfactual: compared with search engines, textbooks, hired experts, open-source tools, or no assistance, how much does the system change an actor’s success rate, time, cost, detectability, or scale?

This is why domain experts are indispensable. Cybersecurity evaluators must distinguish toy capture-the-flag puzzles from operational intrusion chains. Biological-risk evaluators must understand where tacit knowledge, physical materials, instrumentation, and failed experiments constrain action. Manipulation evaluations need a theory of whose beliefs or behavior can change, over what duration, in which high-stakes context. Generic benchmark construction cannot substitute for this causal knowledge.

## Evaluate capabilities under strong elicitation

A negative result can mean either that the model lacks a capability or that the evaluator failed to elicit it. Frontier safety evaluation usually seeks a plausible upper bound, so it should use competent prompting, appropriate tools, repeated attempts, and a competitive scaffold. The evaluator should document model settings, token and time budgets, tool permissions, number of trials, prompt-development effort, and any selection among outputs.

This creates a productive tension. Too little elicitation generates false reassurance. Unlimited optimization can create an artificial system unlike any realistic deployment. The solution is not one universal protocol, but multiple conditions:

- a **model-only** condition to isolate the base interface;
- a **realistic deployment** condition reproducing intended tools and controls;
- a **strong elicitation** condition estimating what a capable actor could extract;
- where relevant, a **plausible future scaffold** condition testing inexpensive improvements likely to diffuse.

Results should be attributed to the whole evaluated system. If a coding agent succeeds because a search tool, verifier, long context, and repeated sampling rescue failures, the result belongs to that configuration—not to the bare model. [[Model versus scaffold in agent evaluations]] develops this attribution problem in detail.

Contamination is another threat. Public questions may have appeared in training data, and model developers may implicitly tune against familiar suites. Useful defenses include newly authored tasks, held-out variants, procedural generation, canary strings, private test sets, and tests of transfer to structurally different problems. Secrecy has costs: it limits reproducibility and outside scrutiny. A mature program uses both public evaluations for comparability and protected evaluations for integrity, disclosing methods and aggregate findings without releasing dangerous operational details.

## Measure uplift, not merely knowledge

Many severe-risk questions concern the model’s contribution to an actor. Human-uplift studies compare participants with and without AI assistance on realistic workflows. Strong designs stratify participants by expertise, randomize conditions, pre-register outcomes, and measure success, quality, time, cost, and unsafe errors. They also compare the AI condition with credible alternatives such as ordinary internet access.

Uplift studies are expensive and statistically difficult. Rare catastrophic endpoints cannot be reproduced directly, samples of qualified experts are small, and ethical constraints limit task realism. Proxy tasks are therefore unavoidable. The evaluator must state the bridge from proxy to harm: which bottleneck the task represents, what remains unmeasured, and why a performance change should update the risk estimate.

For autonomous systems, task completion is also insufficient. Evaluations should examine planning over long horizons, recovery from errors, situational awareness, tool misuse, persistence after interruption, unauthorized action, and attempts to bypass controls. Metrics may include the distribution of task horizons, probability of success at a given horizon, harmful intermediate actions, and human intervention burden. Because agent behavior varies substantially across runs, reports need confidence intervals and failure analysis rather than a single best score.

## Evaluate propensities and control failures

Capability asks what a system can do. Propensity asks when it chooses to do it. A capable model may normally refuse harmful requests yet comply under jailbreaks, role-play, fine-tuning, prompt injection, multilingual reformulation, or tool-mediated attacks. Safety evaluation must therefore include adversarial testing of behavioral controls.

Red teaming is a search process for failure modes, not a pass/fail ceremony. Internal teams bring system knowledge; external testers bring different assumptions and incentives; domain specialists recognize realistic harms; automated attack generation increases breadth. Their findings should feed a living taxonomy, regression suite, and mitigation backlog. The absence of a discovered exploit is evidence only relative to the search effort and attacker model.

Evaluators must also consider whether the model behaves differently because it recognizes the test. Sandbagging, strategic compliance, or evaluation awareness could make observed behavior nonrepresentative. Current methods—behavioral consistency checks, hidden evaluations, paraphrased tasks, monitoring internal activations, and fine-tuned elicitation—remain imperfect. Reports should not present them as definitive detectors. Instead, they should state what forms of deceptive or strategically altered behavior the protocol could miss.

## Safeguards need their own evaluations

It is a category error to infer deployment safety directly from model capability. A highly capable system may be deployed with controls that reduce risk; a less capable one may become dangerous when open-weight, fine-tuned, replicated, or connected to powerful tools. Capability assessment and safeguard assessment are distinct evidence streams.

Safeguard evaluation should test each layer and the stack. Relevant questions include:

- Does a classifier detect prohibited content across languages, obfuscations, and novel attacks?
- Do rate limits constrain harmful scale without being bypassed through multiple accounts?
- Can an agent escape its sandbox, obtain unauthorized credentials, or act outside approved scopes?
- Does human review receive enough context, and how often do reviewers miss subtle hazards?
- Can monitoring detect multi-step misuse spread across sessions?
- How quickly can operators investigate, revoke access, patch a control, and notify affected parties?
- Can model weights or sensitive evaluation data be exfiltrated by realistic insider and external adversaries?

Defense in depth is useful only when failures are not perfectly correlated. Two classifiers trained on similar data may fail on the same distribution shift. A refusal layer and a monitor can share the same blind spot. Evaluators should model joint failure, test adaptive adversaries against the full stack, and avoid multiplying optimistic component-level effectiveness estimates as if the components were independent.

Residual risk combines the probability that a harmful pathway survives controls with the resulting consequence and exposure. Even rough quantitative models can clarify assumptions, but precision should not be fabricated. Scenario ranges, sensitivity analysis, and explicit confidence levels are often more honest than a single probability.

## Reliability, validity, and uncertainty

Safety evaluations inherit the problems of [[AI evaluation as measurement science]]. Reliability asks whether results are stable across tasks, runs, graders, prompts, and operators. Validity asks whether the score supports the intended inference about risk. A perfectly reproducible toy test can be invalid for real harm; a realistic exercise can be too noisy to distinguish systems.

Good reporting therefore includes distributions and uncertainty. At minimum, disclose the number of tasks and trials, sampling method, scoring rubric, inter-rater checks where judgment is involved, missing data, model and scaffold versions, and confidence intervals where defensible. Analyze false negatives explicitly, because missing a dangerous capability is often costlier than launching a deeper investigation. When tests are sequentially modified after seeing results, disclose the adaptation; otherwise apparent certainty can reflect evaluator overfitting.

Thresholds create additional measurement risk. A model just below a policy threshold may not be meaningfully safer than one just above it, especially when measurement error is large. Early-warning thresholds, safety margins, repeated measurement, and conservative treatment of ambiguous results reduce cliff effects. Google DeepMind’s use of early-warning evaluations and later Tracked Capability Levels illustrates this anticipatory approach; the effectiveness of any specific threshold still depends on task validity and implementation.

Evaluation coverage should be represented as a matrix rather than a blanket claim. Rows can denote hazards and pathways; columns can denote actors, access modes, languages, scaffolds, deployment environments, and safeguards. Empty cells are visible ignorance. This makes it harder to transform “no critical result in the tested suite” into “the system is safe.”

## Governance turns evidence into action

An evaluation program fails if unfavorable evidence can be ignored. Before testing, an organization should define who owns the decision, what thresholds trigger which actions, how disagreements are resolved, and who can halt deployment or training. The team that built the model has valuable knowledge but also conflicts of interest. Independent reviewers, external experts, audit access, protected reporting channels, and documented dissent can improve assurance.

Publication is a balancing problem. Transparent system cards, capability reports, and safeguard reports allow outsiders to inspect claims and compare practices. Yet releasing detailed biological protocols, exploit chains, evaluation keys, or security architecture may increase risk. Responsible disclosure separates public claims and methods from controlled technical evidence, while giving qualified independent assessors enough access to challenge the conclusion.

Post-deployment evaluation is mandatory because the system changes in use. Users discover new prompts, scaffolds improve, fine-tunes alter behavior, distributions shift, and incidents reveal pathways missed in pre-release tests. Monitoring should produce evaluation updates, and material model, tool, policy, or access changes should trigger re-evaluation. NIST’s Generative AI Profile situates evaluation within a broader lifecycle of governing, mapping, measuring, and managing risk; this is more realistic than treating release review as a terminal gate.

## A practical evidence package

A decision-ready safety package should contain:

1. the deployment decision and system boundary;
2. threat models and prioritized harm pathways;
3. capability results under realistic and strong-elicitation conditions;
4. propensity and adversarial-control testing;
5. safeguard effectiveness, including full-stack attacks;
6. human-uplift or other counterfactual evidence where feasible;
7. reliability, uncertainty, contamination, and coverage analyses;
8. residual-risk scenarios and sensitivity analysis;
9. predefined actions, accountable decision-makers, and recorded dissent;
10. a post-deployment monitoring, incident, and re-evaluation plan.

The central discipline is claim control. “The model scored below our threshold” is an observation. “It lacks the dangerous capability” is an inference. “Deployment risk is sufficiently reduced” is a decision that also depends on safeguards, exposure, consequence, and risk tolerance. Keeping those three statements separate prevents evaluation from becoming a ritual that launders uncertainty into approval.

## Sources

- OpenAI, [Preparedness Framework, version 2](https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf), capability thresholds, safeguard assessment, governance, and severe-harm risk process (accessed 2026-07-10).
- Google DeepMind, [Frontier Safety Framework](https://deepmind.google/discover/blog/introducing-the-frontier-safety-framework/), Critical Capability Levels, early-warning evaluations, and mitigation structure (accessed 2026-07-10).
- Google DeepMind, [Strengthening our Frontier Safety Framework](https://deepmind.google/blog/strengthening-our-frontier-safety-framework/), holistic risk assessment, harmful manipulation, misalignment, and Tracked Capability Levels (accessed 2026-07-10).
- Anthropic, [Responsible Scaling Policy](https://www.anthropic.com/responsible-scaling-policy), current and prior policy versions, Capability Thresholds, AI Safety Levels, and assurance commitments (accessed 2026-07-10).
- Anthropic, [A new initiative for developing third-party model evaluations](https://www.anthropic.com/news/a-new-initiative-for-developing-third-party-model-evaluations), primary guidance on difficulty, contamination, domain expertise, and evaluation design (accessed 2026-07-10).
- NIST, [Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)](https://doi.org/10.6028/NIST.AI.600-1), lifecycle risk-management and evaluation guidance (2024; accessed 2026-07-10).

## Open questions

- How can evaluators validate catastrophic-risk proxies when direct endpoint experiments are impossible or unethical?
- What minimum access should independent evaluators receive without increasing proliferation or security risk?
- How should policy thresholds incorporate measurement error, scaffold progress, and evidence that a model may recognize evaluations?
- Which post-deployment signals provide early warning without creating invasive or easily gamed monitoring?
- How can safeguard-stack evaluations estimate correlated failures under adaptive attack?
