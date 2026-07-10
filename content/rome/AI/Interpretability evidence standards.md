---
title: Interpretability evidence standards
created: 2026-07-10
source: llm
status: seed
tags: [ai, interpretability, mechanistic-interpretability, causal-inference, evaluation]
---

An interpretability claim should be graded by what it demonstrates—prediction, causal control, or a faithful mechanism—rather than by how intuitive its visualization looks.

Interpretability research often compresses several different achievements into the word *explanation*. A probe predicts a label from an activation; patching an activation changes an output; a circuit diagram proposes how components jointly implement an algorithm. These are related but not interchangeable. The central evidence standard is therefore **claim–test alignment**: the experiment must test the kind of claim the interpretation makes.

This note develops a three-level ladder—predictive, causal, and mechanistic validation—and a practical acceptance protocol for claims about [[Neural network representations]], [[Activation patching]], [[Sparse autoencoders]], and circuits. The levels are not a prestige ranking. A predictive tool may be exactly what monitoring needs, while a mechanistic account may be unnecessary. Trouble begins when evidence from one level is narrated as if it established another.

## The object being validated

An interpretation can target at least four different objects:

1. a **representation claim**: some model state encodes information about a variable;
2. an **attribution claim**: a component contributes to a particular output on a particular input;
3. a **causal-role claim**: changing an internal variable changes behavior in a specified counterfactual way;
4. a **mechanism claim**: a set of variables and interactions implements a reusable computation.

The target must also name its scope: model checkpoint, prompt distribution, behavior, metric, intervention family, and level of granularity. “Head 8.6 performs name moving” is incomplete unless it says for which model, task distribution, token positions, corruption scheme, and behavioral endpoint. A component can be important under one intervention and redundant under another. A feature can be legible on a curated dataset yet fail on natural inputs. A circuit can recover a metric on one template while omitting backup pathways used elsewhere.

The strongest concise claim is operational: *under distribution $D$, replacing variable $Z$ with the value it takes under source input $s$ produces the counterfactual output predicted by high-level model $H$, within error $\epsilon$.* That sentence tells a verifier what to reproduce and what could falsify it.

## Level one: predictive validation

Predictive validation asks whether an interpretation contains information useful for forecasting an observable target. Typical tests include linear probes, concept classifiers, feature–label correlations, next-token attribution agreement, and prediction of model success or failure from internal states.

Let $h(x)$ be an activation and $y$ a target property. A probe estimates $g(h(x)) \approx y$. Good evidence requires held-out evaluation, appropriate regularization, uncertainty estimates, and baselines matched for capacity and data. If the intended use is out-of-distribution monitoring, random train/test splits are inadequate: evaluation must shift templates, domains, lexical cues, or tasks in the way deployment will shift them.

Predictive evidence can establish **availability**: information about $y$ is recoverable from $h$. It does not by itself establish that the model uses that information. Deep networks preserve and mix abundant information; a flexible decoder can recover a variable that is epiphenomenal to the decision. Even a linear probe is not automatically innocent. High-dimensional representations allow separation of many labels, and probe performance depends on sample size, regularization, layer choice, and control-task difficulty.

Minimum standards for a predictive claim are:

- a preregistered or clearly separated held-out set;
- comparison with input-only, label-frequency, random-feature, and same-capacity baselines where applicable;
- selectivity controls showing the method does not decode arbitrary matched labels equally well;
- robustness across seeds, prompt paraphrases, and reasonable hyperparameters;
- calibration or confidence intervals, not only a best-run accuracy;
- a test of the actual generalization claim, especially across templates or domains.

Prediction can nevertheless be operationally powerful. Huang and colleagues found that internal variables selected for distinctive causal roles supported stronger out-of-distribution correctness prediction than several alternatives across symbol manipulation, retrieval, and instruction-following tasks. This does not collapse causal and predictive validation. Rather, it shows that causally grounded variables can be *evaluated again* for predictive utility under distribution shift.

### Failure modes at the predictive level

**Surface leakage.** A feature appears to represent a concept because prompts contain correlated tokens. Prompt-only baselines and counterbalanced examples are essential.

**Probe excess capacity.** The decoder learns the task rather than revealing a readily accessible representation. Learning curves, low-capacity probes, minimum-description-length measures, and control tasks help bound this risk.

**Dataset-conditioned semantics.** Human labels define a convenient concept, but the model partitions examples differently. Error analysis should test whether the purported concept predicts failures and counterexamples, not merely average accuracy.

**Selection on the test set.** Searching thousands of units and reporting the best correlation inflates evidence. Discovery and confirmation sets must be separate, with multiplicity acknowledged.

Predictive validation earns wording such as “decodable,” “associated with,” or “predictive of.” It does not earn “used by,” “responsible for,” or “implements.”

## Level two: causal validation

Causal validation asks whether intervening on an internal state changes the model’s behavior. Common methods include ablation, activation patching, steering, interchange interventions, path patching, and causal mediation analysis. These methods are stronger than observation because they manipulate putative causes, but their conclusions remain conditional on intervention design.

In activation patching, one often compares a clean input $x_c$ and a corrupted input $x_k$. At component $i$, the corrupted run’s activation is replaced with the clean value, and recovery in a behavioral metric is measured:

$$
R_i = \frac{m(f(x_k;\operatorname{do}(h_i=h_i(x_c))))-m(f(x_k))}
{m(f(x_c))-m(f(x_k))}.
$$

This estimates an intervention-specific effect, not an intrinsic quantity residing inside the component. Results can change with the corruption, source activation, metric, patch location, and simultaneous versus sequential interventions. Heimersheim and Nanda emphasize precisely these subtleties: patching can answer different questions depending on whether one restores a clean value, injects a corrupted value, or patches distributions rather than individual examples.

A causal claim therefore needs an explicit estimand. Is the question necessity, sufficiency, mediation, or counterfactual alignment?

- **Necessity:** degrading or removing the component reduces the behavior.
- **Sufficiency:** retaining or installing it recovers the behavior in an otherwise deprived system.
- **Mediation:** the component carries some effect of an upstream change to the output.
- **Counterfactual alignment:** interventions on a proposed high-level variable and its neural realization produce corresponding outputs.

No single test substitutes for all four. Ablation can underestimate importance when redundant backups compensate, or overestimate it when the intervention pushes activations off distribution. Sufficiency can be achieved by a shortcut that is not normally used. Patching can mix the hypothesized variable with unrelated information contained in the activation vector.

### Intervention quality

The hardest causal question is whether an intervention is meaningful. Zero ablation, mean ablation, resampling, noise injection, and source-to-base interchange create different counterfactual worlds. A good intervention should be:

- **targeted**, changing the hypothesized variable while minimizing collateral changes;
- **in-distribution enough** that downstream behavior is interpretable;
- **symmetric where possible**, testing clean-to-corrupt and corrupt-to-clean directions;
- **specific**, affecting the predicted behavior more than matched control behaviors;
- **dose-responsive**, when the hypothesis predicts graded effects;
- **replicated** across examples, seeds, and independently trained models.

Interchange intervention provides an especially clear standard. Geiger and colleagues align a high-level causal variable with a neural representation, set both to values drawn from a source example, and compare the resulting counterfactual outputs. Agreement across a combinatorial set of interventions supports the claim that the high-level model is a causal abstraction of the network. It is much stronger than observing that the representation correlates with the variable.

However, causal localization is still not mechanism. Showing that a head matters does not show what computation it performs, what upstream signals determine it, or how downstream components consume it. A causal effect may also be distributed: patching one site can restore a bundled state containing multiple causal variables.

## Level three: mechanistic validation

Mechanistic validation asks whether an interpretation specifies a compositional computation that predicts both ordinary behavior and the consequences of interventions. A mechanism names variables, transformations, and connections—not just important locations. Its parts should compose into the claimed whole.

For a transformer circuit, an account might specify that one head detects a syntactic relation, another transports a token identity, an MLP transforms the residual representation, and downstream readout raises a target logit. The account becomes evidence-bearing only when each role yields discriminating predictions: which attention pattern should occur, which value vector should carry what information, which edge should mediate the effect, and which counterfactual should break or preserve performance.

Palumbo and colleagues formalize this ambition using ideas from abstract interpretation. Their axiomatic view treats a mechanistic interpretation as an approximate semantics of a neural network that should be sound enough, complete enough, and compositional. The key advance is conceptual: an interpretation should support reasoning about the system, not merely redescribe selected activations after the fact.

Mechanistic Interpretability Benchmark (MIB) operationalizes part of this standard with circuit-localization and causal-variable tracks. It rewards methods that recover relevant causal pathways or variables precisely and concisely across models and tasks. Synthetic or compiled ground-truth tasks are valuable here because evaluators know the causal structure, avoiding circular validation against another attribution method. Their limitation is external validity: success on small networks with known algorithms does not guarantee faithful decomposition of frontier models.

A strong mechanistic validation package combines:

1. **Behavioral fidelity:** the proposed circuit reproduces the relevant model behavior across a broad, held-out distribution.
2. **Causal fidelity:** interventions predicted by the mechanism produce the predicted counterfactual behavior.
3. **Compositionality:** component-level explanations combine correctly; edge and path claims survive tests, not only node ablations.
4. **Specificity:** the mechanism explains the target behavior better than matched alternatives and does not claim unrelated behavior.
5. **Completeness:** removing everything outside the circuit preserves most target performance, or the unexplained residual is quantified.
6. **Minimality or concision:** removing purportedly essential elements degrades the account, while superfluous elements are penalized.
7. **Generalization:** the same description works across new prompts, task variants, and preferably checkpoints or model instances.
8. **Novel prediction:** the account forecasts a previously untested failure, intervention, or distribution shift.

The last criterion is especially valuable because post-hoc stories are cheap. A mechanism that predicts where the model will fail, how a targeted edit will alter outputs, or which inputs recruit a backup pathway has survived an adversarial opportunity to be wrong.

## A claim–evidence matrix

| Claimed conclusion | Minimum direct evidence | Evidence that is insufficient alone |
|---|---|---|
| Information about $C$ exists at layer $L$ | held-out decoding with capacity and leakage controls | top-correlated neuron visualization |
| Feature $F$ predicts behavior $B$ | calibrated held-out prediction under the relevant shift | in-sample correlation |
| Component $K$ contributes to $B$ | controlled intervention with uncertainty and matched controls | attention weight or gradient attribution |
| Variable $Z$ is causally represented | successful, specific interchange interventions | probe accuracy plus ablation |
| Circuit $G$ implements computation $A$ | compositional intervention tests, fidelity, completeness, and generalization | a few patched nodes on one prompt template |
| Interpretation supports safety monitoring | prospective detection on realistic positives, negatives, and adaptive evasion | concept examples selected by the analyst |

The matrix is deliberately asymmetric. Higher-level evidence generally contains lower-level tests, but causal success does not guarantee a human-semantic interpretation, and mechanistic fidelity does not automatically imply deployment usefulness.

## Confounds that survive intervention

Interventions are often called the “gold standard,” but neural interventions introduce their own confounds.

**Off-manifold states.** Zeroing a vector may create a state never produced naturally. The behavioral collapse then shows sensitivity to damage, not the component’s normal semantic role. Resampling from matched examples and checking activation likelihood can improve plausibility.

**Bundled variables.** Patching a residual stream or feature can transfer many properties at once. A result attributed to “truth” may actually transfer topic, syntax, or token identity. Factorial source examples that vary one hypothesized variable at a time provide a stronger test.

**Redundancy and backup.** Necessity tests miss duplicated pathways; sufficiency tests can over-credit one of several alternatives. Measure both, search for compensatory activation, and report performance curves as components are added or removed.

**Metric dependence.** Logit difference, probability, loss, exact-match accuracy, and generation behavior can disagree. The metric should match the claim, with sensitivity analyses reported.

**Researcher degrees of freedom.** Choosing layers, tokens, corruptions, normalization, and examples after seeing results invites confirmation bias. Separate exploration from confirmation and publish negative or unstable configurations.

**Non-identifiability.** Multiple internal decompositions may make the same predictions and interventions. Distributed representations admit rotations and alternative bases. A feature dictionary is therefore one useful coordinate system unless evidence shows its units have stable, interventionally distinct roles.

## Standards for sparse features and automated explanations

Sparse autoencoders and related dictionaries decompose activations into features that may appear more legible than neurons. Three evaluations should remain separate.

First, **reconstruction** asks how much model activation or downstream behavior the dictionary preserves. Low reconstruction error is necessary for a faithful replacement but says nothing about semantic monosemanticity. Second, **interpretability** asks whether humans or automated graders can predict feature activation from an explanation. This is predictive validation of a label. Third, **causal use** asks whether intervening on the feature changes behavior in the way its explanation predicts.

Feature evaluation should include dead-feature rates, activation density, reconstruction-induced loss, stability across training seeds, specificity of top-activating examples, and intervention curves. Automated natural-language labels need blinded validation on held-out examples, including hard negatives and polysemantic counterexamples. An explanation that describes the top ten examples but fails to predict the next hundred has not generalized.

Circuit tracing built on learned features adds another dependency: errors in the feature basis propagate into the graph. Attribution graphs can be useful hypotheses, but edge weights are not automatically causal edges. The underlying feature quality, graph construction, pruning threshold, and intervention validation all require separate reporting.

## A practical verification protocol

Before accepting a consequential interpretation, a verifier should run the following sequence.

**1. Freeze the claim.** Write the exact behavior, distribution, model version, variables, metric, and predicted counterfactuals. Mark whether the claim is predictive, causal, or mechanistic.

**2. Reproduce the descriptive result.** Confirm the reported activation, attribution, or circuit score from code and fixed seeds. Check units, token positions, hooks, and normalization.

**3. Challenge predictive validity.** Use a locked test set, input-only and random baselines, paraphrases, hard negatives, and a genuine distribution shift.

**4. Challenge causal validity.** Test multiple plausible interventions; include matched control components and behaviors; estimate uncertainty over examples; test intervention directionality and specificity.

**5. Challenge mechanistic completeness.** Retain only the proposed circuit and ablate it from the full model. Quantify sufficiency and necessity, search for backup routes, and test edges or paths rather than only nodes.

**6. Seek discriminating counterexamples.** Construct cases on which the proposed mechanism and a plausible rival make different predictions. Prefer prospective tests not used during hypothesis formation.

**7. Replicate scope.** Repeat across prompt families and model seeds. If transfer fails, narrow the claim rather than averaging away the boundary.

**8. Report the whole uncertainty surface.** Publish distributions, negative results, sensitivity to design choices, and unexplained residual behavior. A bounded claim is more useful than an impressive universal one.

Independent verification matters most at steps four through six. Re-running the author’s notebook checks reproducibility; designing rival interventions checks validity. These are distinct achievements.

## What each level is good for

Predictive interpretations are suitable for diagnostics, anomaly detection, and monitoring when evaluated prospectively. Causal interpretations support editing, control, and tests of whether a representation is used. Mechanistic interpretations are needed when the goal is to reason about novel counterfactuals, audit algorithmic structure, or justify confidence that a discovered pattern will persist outside the discovery set.

Safety claims require an additional deployment layer. Even a faithful mechanism on a benchmark may not detect deceptive or adversarial behavior, because the relevant cognition may differ, be distributed, or adapt to the monitor. Evaluation must include realistic base rates, false-positive costs, adaptive evasion, and shifts between laboratory and deployment. Interpretability evidence can update confidence; it should not be treated as a certificate.

The governing discipline is simple: **use the weakest language warranted by the strongest passed test**. Correlation licenses “associated.” Held-out decoding licenses “predictive.” Intervention licenses a scoped causal effect. A reusable, compositional account that survives counterfactual and generalization tests licenses “mechanism.”

## Sources

- Aaron Mueller et al., “[MIB: A Mechanistic Interpretability Benchmark](https://proceedings.mlr.press/v267/mueller25a.html),” *ICML*, 2025. Primary benchmark paper.
- Nils Palumbo et al., “[Validating Mechanistic Interpretations: An Axiomatic Approach](https://proceedings.mlr.press/v267/palumbo25a.html),” *ICML*, 2025. Primary formalization and case studies.
- Atticus Geiger et al., “[Inducing Causal Structure for Interpretable Neural Networks](https://proceedings.mlr.press/v162/geiger22a.html),” *ICML*, 2022. Primary paper on interchange intervention training and causal abstraction.
- Atticus Geiger et al., “[Finding Alignments Between Interpretable Causal Variables and Distributed Neural Representations](https://proceedings.mlr.press/v236/geiger24a.html),” *CLeaR*, 2024. Primary method paper on distributed causal alignments.
- Jing Huang et al., “[Internal Causal Mechanisms Robustly Predict Language Model Out-of-Distribution Behaviors](https://proceedings.mlr.press/v267/huang25af.html),” *ICML*, 2025. Primary empirical paper linking causal variables and OOD prediction.
- Stefan Heimersheim and Neel Nanda, “[How to Use and Interpret Activation Patching](https://arxiv.org/abs/2404.15255),” arXiv:2404.15255, 2024. Primary methodological guidance.
- Anthropic, “[Circuit Tracing: Revealing Computational Graphs in Language Models](https://transformer-circuits.pub/2025/attribution-graphs/methods.html),” 2025. Primary methods report on attribution graphs and their validation.

## Open questions

- What intervention distributions best balance semantic targeting against the risk of off-manifold activations?
- Can benchmark ground truth capture the distributed, redundant mechanisms that arise in frontier models rather than toy algorithms?
- How should completeness be measured when a model dynamically recruits different circuits across prompts?
- Which mechanistic claims remain invariant under rotations or alternative sparse feature dictionaries?
- What prospective evidence would justify using an interpretability monitor in a high-stakes deployment?
