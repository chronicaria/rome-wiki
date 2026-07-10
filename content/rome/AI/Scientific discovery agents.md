---
title: Scientific discovery agents
created: 2026-07-10
source: llm
status: seed
tags: [ai, agents, ai-for-science, scientific-discovery, evaluation]
---

Scientific discovery agents are best understood as evidence-producing systems on a ladder from bounded assistance to independently replicated discovery—not as “AI scientists” merely because they can write a paper or operate a laboratory tool.

Up: [[AI agents (MOC)]]

Related: [[AI R&D automation evidence]] · [[Model versus scaffold in agent evaluations]] · [[Long-horizon task reliability]] · [[AI evaluation as measurement science]]

## The category is broader than the claim

“Scientific discovery agent” is used for systems that do radically different jobs. One model retrieves papers and proposes hypotheses. Another searches a formally specified space whose candidates can be scored automatically. A third controls laboratory instruments. A fourth runs code, draws plots, writes a manuscript, and asks another model to review it. These systems may all be useful, but their outputs support different claims.

The clean definition is functional: a scientific discovery agent is a model-based system that performs more than one linked stage of a research workflow—such as literature search, hypothesis formation, experimental design, execution, analysis, or reporting—while using observations from one stage to choose actions in another. “Agent” therefore describes a feedback loop, not scientific competence. The model, tools, evaluator, supplied problem representation, laboratory automation, and human interventions together form the system being evaluated. This is the same attribution problem explored in [[Model versus scaffold in agent evaluations]].

The stronger phrase *autonomous discovery* should be reserved for a much narrower achievement. The system must generate or select a non-trivial claim, obtain evidence that could have falsified it, survive expert scrutiny, and yield a result that independent investigators can reproduce or otherwise validate. Producing an apparently novel sentence, a high-scoring program, a successful known synthesis, or a polished PDF is not by itself that achievement.

## A six-level evidence ladder

### 1. Bounded assistance

At the lowest level, a model helps a scientist inside a human-defined task: summarizing literature, translating a question into code, predicting a molecular property, suggesting controls, or drafting prose. Humans still own the research question, judge novelty, select evidence, and accept or reject conclusions. This can materially accelerate research without demonstrating autonomous discovery.

The decisive test is counterfactual: if the model were removed, would the scientific reasoning loop still exist, merely more slowly? If yes, the system is assistance. The appropriate evaluation is component-level—retrieval recall, citation accuracy, calibration, code correctness, prediction error, or time saved—not whether the model sounds like a scientist.

### 2. Closed-loop optimization in a supplied world

Here the system proposes candidates, receives an objective score, and iterates. DeepMind's FunSearch, for example, combined a code-generating language model with an evolutionary program database and executable evaluators. It found improved constructions for the cap-set problem and heuristics for online bin packing. The Nature paper supplied problem specifications, evaluators, program skeletons, and extensive computation; it reports on the order of one million model samples and notes that the method works best when an efficient evaluator and rich scoring signal already exist.

This is genuine search and can produce new, interpretable artifacts. But it is bounded discovery: humans choose the problem, encode what counts as success, provide the scaffold, and verify candidates in a formal environment. The result is stronger than brainstorming because candidates face an objective test. It is weaker than end-to-end science because the system does not decide which worldly question matters, build the measurement regime, or determine whether the objective is a faithful proxy for the phenomenon.

This distinction matters beyond mathematics. A protein, material, or algorithm proposed against a simulator may exploit the simulator, dataset, or scoring function. Experimental confirmation is a separate evidential stage.

### 3. Automated execution of known procedures

A tool-using agent can search documentation, translate instructions, and operate robotic equipment. Coscientist, reported by Boiko and colleagues, joined GPT-4-based planners with web and documentation search, code execution, and laboratory automation. It demonstrated six classes of chemistry tasks, including planning syntheses of known compounds, controlling liquid-handling equipment, and optimizing palladium-catalysed cross-coupling reactions.

Those demonstrations establish meaningful integration: natural-language planning can be grounded in instrument APIs and experimental feedback. They do not establish an autonomous chemist in the unrestricted sense. The experiments were conducted within a prepared automation environment, humans designed and graded studies, and several tasks concerned known syntheses or optimization rather than discovering a new chemical principle. The paper itself describes some work as “(semi-)autonomous,” a qualification worth preserving.

An earlier mobile robotic chemist from Burger and colleagues autonomously navigated a laboratory, conducted experiments, and optimized photocatalyst mixtures over eight days. It found a mixture with improved hydrogen-production performance. Again, the strong result is autonomous physical experimentation within a human-specified objective and apparatus. The robot did not originate the scientific program or independently establish a general theory.

### 4. Hypothesis generation with prospective experimental validation

This level crosses an important boundary. The system proposes a hypothesis or intervention not simply retrieved from its inputs, and domain researchers test it prospectively in a real experiment. A positive result is much stronger than model self-evaluation because nature supplies evidence outside the language loop.

Yet “validated” must be unpacked. Were hypotheses selected from many generated candidates? Did humans substantially reformulate them? Were negative trials reported? Was the evaluation preregistered or blinded? Was the predicted effect specific rather than compatible with many outcomes? A human-guided system can deserve credit for useful hypothesis generation even when it is not autonomous. The correct unit of analysis is the full selection pipeline, including invisible expert filtering.

Prospective validation establishes that an AI-assisted pipeline contributed to a result. It does not necessarily show that the agent found a novel causal explanation, nor that another group can reproduce the effect. This is where reporting should shift from “the AI discovered” to a contribution statement: what the system proposed, what humans selected or changed, who ran the experiment, and which evidence confirmed the claim.

### 5. End-to-end research production

Sakana AI's 2024 AI Scientist connected idea generation, literature search, code modification, experiment execution, plotting, manuscript writing, and automated review in several machine-learning domains. Its paper reported complete manuscripts at less than $15 each and assessed some as above a conference acceptance threshold using an automated reviewer. This is an important systems-engineering demonstration: a long chain of research-like actions can run with limited intervention inside code templates and fixed experimental domains.

But a completed chain is not equivalent to a discovery. The original authors evaluated the generated work using a reviewer they also developed, creating correlated-error risk. A model can generate a weak idea, run a technically valid but uninformative experiment, and then produce persuasive prose and a favorable review. All stages may be “successful” operationally while the scientific claim is trivial, already known, statistically fragile, or unsupported.

An independent evaluation by Beel, Kan, and Baumgart is therefore especially informative. Re-running and inspecting the system, they reported poor novelty judgments, including presenting established ideas such as micro-batching stochastic-gradient descent as novel; problems with experimental design and implementation; and weaknesses in manuscript and review quality. That evidence does not show the system has no value. It narrows the supported claim from autonomous scientific discovery to automated research-artifact production with unreliable scientific judgment.

Later claims that an AI-generated paper passed workshop peer review should also be scoped carefully. Acceptance is evidence that a particular artifact crossed a particular review threshold. Workshops vary, review is noisy, and acceptance does not independently reproduce the paper's result. Peer review can screen plausibility and presentation; it cannot substitute for replication.

### 6. Independently replicated discovery

The highest level requires a result that survives outside the originating pipeline. Independent researchers must be able to reconstruct the claim and reproduce the central effect, proof, or performance improvement under disclosed conditions. For empirical science, this normally means independent data or experiments; for mathematics, proof checking by qualified humans and ideally formal verification; for algorithms, reproducible code and comparisons against strong baselines across relevant instances.

Replication must target the scientific contribution, not merely the software. Installing an agent and observing that it emits papers replicates artifact production. It does not replicate discovery quality. Likewise, reproducing one benchmark score does not prove that an agent chooses worthwhile questions or generalizes to new domains.

As of the sources reviewed here, there are persuasive demonstrations at levels 2–4 and operational demonstrations at level 5, but broad claims of reliable, end-to-end, independently replicated discovery remain unsupported. Particular AI-assisted results may be valid; the missing evidence is that a general agent repeatedly originates important, non-obvious findings that survive independent scrutiny with limited hidden human selection.

## What a fair evaluation must record

### The research boundary

Evaluators should publish the exact starting materials: prompt, literature corpus or search access, codebase, templates, instruments, objective functions, candidate budget, compute, time, and prior human knowledge embedded in the scaffold. “Autonomous” is otherwise impossible to interpret. A system that begins with a nearly complete experimental template has solved a different problem from one that begins with a question.

Every human intervention should be logged: choosing the topic, repairing code, excluding runs, selecting among hypotheses, rewriting a claim, interpreting ambiguous measurements, or deciding when to stop. A useful metric is not simply interventions per run, but *decision-critical interventions*: human actions without which the claimed discovery would probably not have occurred.

### Novelty

Novelty cannot be safely graded by the same model family that generated the idea. Evaluation needs a dated literature search, domain-expert judgment, explicit nearest prior work, and a statement of the incremental difference. Search failure must not be renamed invention. For high-volume agents, novelty assessment also needs multiplicity accounting: generating hundreds of proposals and highlighting the most plausible one creates selection effects.

### Evidential contact with the world

The agent's claim must encounter a test capable of proving it wrong. Executable unit tests are strong for code but may weakly represent scientific value. Simulators offer rapid feedback but can be misspecified. Automated laboratories provide physical evidence but still depend on calibration, controls, contamination checks, and measurement quality. Manuscript review is downstream judgment, not experimental evidence.

A robust report separates three validations:

1. **Operational validation:** did the agent complete the intended workflow?
2. **Result validation:** is the reported observation or artifact correct under the original setup?
3. **Scientific validation:** is the interpretation novel, robust, generalizable, and independently supported?

Many “AI scientist” announcements establish the first, sometimes the second, and imply the third.

### Baselines and ablations

The relevant baseline is not merely an unaided language model. It includes conventional optimization, domain software, retrieval tools, human scientists with equal time or cost, and simpler automated workflows. Ablations should remove literature tools, memory, critics, experimental feedback, and templates to identify which component produced the gain. Without this, a result attributed to agentic reasoning may come from brute-force sampling or a strong evaluator.

Costs should include failed trials, model inference, laboratory consumables, equipment depreciation, human supervision, and verification. A low per-paper generation cost says little if expert filtering and replication are expensive.

### Reliability rather than a best run

Science needs distributions. Reports should include all attempted tasks, success definitions fixed in advance, run-to-run variance, failure categories, and the denominator behind highlighted discoveries. One striking outcome among thousands of generated candidates may still be useful, but it supports a search-efficiency claim rather than reliable autonomy. Long workflows multiply component errors, as described in [[Long-horizon task reliability]].

## Why it matters

The sober interpretation is still consequential. Bounded agents can search enormous candidate spaces, connect literature to instruments, and turn cheap computation into testable proposals. Scientific work contains many structured loops—simulation, design, synthesis, measurement, and revision—that are unusually amenable to tools and automated feedback. Even if humans retain question selection and interpretation, reducing the cost of each loop can change which experiments become feasible.

The risks arise from confusing throughput with knowledge. Agents can manufacture plausible hypotheses and papers faster than institutions can review them. If novelty checking, statistical reasoning, citation fidelity, and negative-result reporting remain weak, automation increases the volume of false or redundant claims. Automated reviewers built from similar models can amplify shared blind spots rather than correct them.

There is also a governance difference between a writing agent and a laboratory agent. Physical execution can create chemical, biological, equipment, and environmental hazards. Systems need constrained tool permissions, vetted protocols, inventory controls, monitoring, and human authorization for consequential actions. Scientific productivity is not a reason to remove safety interlocks.

The most valuable near-term architecture may therefore be deliberately non-autonomous: machines generate and test many bounded candidates; humans choose goals, inspect anomalies, adjudicate novelty, and own consequential decisions; independent teams validate the surviving claims. That is less cinematic than an artificial scientist, but it fits the strongest evidence.

## A practical claim vocabulary

Use language that exposes the evidence state:

- **“Suggested”** when a model generated a hypothesis with no prospective test.
- **“Found under a supplied evaluator”** when search produced a high-scoring formal or simulated artifact.
- **“Executed autonomously”** when a system carried out a known or human-specified protocol without intervention.
- **“Prospectively validated”** when a new prediction or proposal survived a real experiment.
- **“Produced end to end”** when the system completed the research workflow and manuscript, regardless of scientific quality.
- **“Independently replicated discovery”** only when outsiders reproduce the central novel result and attribution is clear.

This vocabulary lets progress accumulate without turning every demonstration into a claim of general scientific autonomy. It also makes future updates falsifiable: a new system can move up the ladder only by supplying the missing evidence.

## Sources

- Chris Lu et al., [“The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery”](https://arxiv.org/abs/2408.06292), arXiv:2408.06292 (2024). Primary system paper; accessed 2026-07-10.
- Joeran Beel, Min-Yen Kan, and Moritz Baumgart, [“Evaluating Sakana's AI Scientist for Autonomous Research”](https://arxiv.org/abs/2502.14297), arXiv:2502.14297 (2025). Independent evaluation; accessed 2026-07-10.
- Bernardino Romera-Paredes et al., [“Mathematical discoveries from program search with large language models”](https://doi.org/10.1038/s41586-023-06924-6), *Nature* 625, 468–475 (2024). Primary FunSearch paper and methods; accessed 2026-07-10.
- Daniil A. Boiko et al., [“Autonomous chemical research with large language models”](https://doi.org/10.1038/s41586-023-06792-0), *Nature* 624, 570–578 (2023). Primary Coscientist paper; accessed 2026-07-10.
- Benjamin Burger et al., [“A mobile robotic chemist”](https://doi.org/10.1038/s41586-020-2442-2), *Nature* 583, 237–241 (2020). Primary autonomous-laboratory paper; accessed 2026-07-10.
- Robert D. Rogers and Hein S. Rzepa, [“Artificial intelligence and robots make chemical research faster”](https://doi.org/10.1038/d41586-023-03790-0), *Nature* 624, 258–260 (2023). Independent expert commentary on Coscientist; accessed 2026-07-10.
- Chris Lu et al., [“The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search”](https://arxiv.org/abs/2504.08066), arXiv:2504.08066 (2025). Primary follow-on system report; accessed 2026-07-10.
- National Academies of Sciences, Engineering, and Medicine, [*Reproducibility and Replicability in Science*](https://doi.org/10.17226/25303) (2019). Authoritative framework for distinguishing computational reproducibility and independent replication; accessed 2026-07-10.

## Open questions

- What blinded benchmark could measure whether agents originate scientifically valuable questions rather than imitate the surface form of prior work?
- How should credit be divided when an agent generates thousands of candidates but expert scientists select and reformulate the winner?
- Which domains offer evaluators that are cheap and objective enough for agent search without becoming misleading proxies?
- What minimum disclosure of prompts, failed runs, human interventions, and compute should journals require for AI-generated research?
- Can independent teams reproduce a sequence of agent-originated discoveries, not merely run the same agent software?
