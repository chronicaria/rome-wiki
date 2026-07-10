---
title: Neural scaling inference-time compute and algorithmic progress
created: 2026-07-10
source: llm
status: seed
tags: [ai, frontier-models, scaling, inference, algorithmic-efficiency, evaluation]
as_of: 2026-07-10
desk: AI frontier news
review_after: 2027-01-10
---
Training scale builds a model's reusable competence, inference-time compute spends resources to elicit and select better answers from that competence, and algorithmic progress changes the return on both; none is a general substitute for the other two.

Up: [[AI agents (MOC)]]

Related: [[Reasoning budget and fair model comparison]] · [[Cost-adjusted frontier model performance]] · [[Model versus scaffold in agent evaluations]] · [[Benchmark contamination and saturation]]

## The three-lever model

Claims that AI progress is “just scaling” or that test-time reasoning will replace pretraining compress three different production functions into one slogan. A deployed system consumes resources at at least two times. During **training**, optimization turns data and computation into parameters: a reusable policy or predictive model. During **inference**, the trained model and its scaffold consume computation on a particular request. Across both stages, **algorithmic progress** changes how effectively computation, data, memory, and feedback are converted into capability.

A useful schematic is

$$
Q_x = F_x(C_{\mathrm{train}}, D, A_{\mathrm{train}};
C_{\mathrm{infer},x}, A_{\mathrm{infer}}, V_x),
$$

where $Q_x$ is performance on task $x$, $C_{\mathrm{train}}$ is training compute, $D$ is the amount and quality of training data, $A_{\mathrm{train}}$ is the training recipe, $C_{\mathrm{infer},x}$ is compute allocated to this request, $A_{\mathrm{infer}}$ is the search or reasoning procedure, and $V_x$ is whatever feedback can distinguish good candidates from bad ones. The semicolon marks a practical boundary: training produces an artifact that can be reused, while inference adapts computation to one case.

This equation is deliberately not a simple product. The levers interact. Better pretraining can raise the probability that search ever generates a correct candidate. Better verification can make additional samples useful instead of merely expensive. A better architecture or optimizer can move the same training-compute budget to a stronger model, while an inference algorithm can allocate a fixed token budget more intelligently. But the interactions do not imply interchangeability.

## What training scale buys

Neural scaling laws are empirical regularities, not a theorem that arbitrary intelligence appears after enough floating-point operations. Kaplan and colleagues found that language-model cross-entropy loss followed approximate power laws in model size, dataset size, and training compute over the ranges they studied. The practical lesson was that predictable marginal improvement made large training runs economically legible: researchers could fit smaller runs and forecast a larger run's loss, subject to distribution and recipe stability.

The allocation of the training budget matters as much as its headline size. Hoffmann and colleagues trained more than 400 models and concluded that, under their setup, compute-optimal model size and token count should grow roughly together. Their 70-billion-parameter Chinchilla used the same estimated training compute as the 280-billion-parameter Gopher but four times as much data and outperformed it on their reported suite. This result did not refute scaling. It showed that parameters alone were a poor proxy for well-allocated scale. Training compute, model capacity, and useful data must be balanced.

Training scale has several properties that inference scale lacks:

1. **Amortization.** The cost is paid once and its learned representations can help every later request. If a system serves millions of queries, even a very expensive training run may be cheaper than repeatedly compensating for a weak model at inference.
2. **A broader proposal distribution.** Search can select only candidates the model can produce with meaningful probability. Training can teach concepts, skills, latent procedures, and representations that make previously inaccessible solutions reachable.
3. **Fast default behavior.** A stronger base model may answer an easy request in one pass. A smaller model that needs hundreds of attempts can lose on latency, energy, and total cost even when its best-of-$N$ score looks competitive.
4. **Transfer.** General pretraining can support tasks that were not anticipated when the model was trained. Inference procedures are often domain-specific: unit tests help code, proof checkers help formal mathematics, but neither directly verifies an ambiguous policy memo.

Training scale also has limits. Scaling-law exponents are fitted to particular model families, data mixtures, loss functions, and compute ranges. Downstream capabilities need not improve as smoothly as held-out token loss. Data can become duplicated, contaminated, low-quality, or scarce; optimization and distributed systems can cease to behave like the fitted regime. A large run is irreversible after completion: compute spent on an unhelpful mixture cannot be reassigned to a newly discovered hard query. And fixed training scale cannot respond to the difficulty of each request.

## What inference-time compute buys

Inference-time or test-time compute means doing more than a single fixed forward generation for a request. The system might sample multiple candidates, generate a longer reasoning trace, search a tree, revise after criticism, execute tools, retrieve evidence, run tests, or score intermediate steps with a verifier. These methods should be reported separately because “more reasoning” can mean very different computational and evidential processes.

Repeated sampling illustrates both the promise and the trap. Brown and colleagues measured **coverage**—whether any sample solves a problem—over as many as four orders of magnitude in sample count. On SWE-bench Lite, their reported coverage for DeepSeek-Coder-V2-Instruct rose from 15.9% with one sample to 56% with 250 samples. In code and formal proofs, an external checker can sometimes convert that oracle coverage into realized performance. Without a trustworthy selector, however, generating a correct answer somewhere in a pile is not equivalent to returning it. The same paper found that majority voting and reward-model selection plateaued on domains without automatic verification.

Snell and colleagues compared repeated sampling and verifier-guided search with an adaptive strategy that allocated compute according to prompt difficulty. They reported more than a fourfold efficiency improvement over a best-of-$N$ baseline and found FLOP-matched regions where test-time compute on a smaller model beat a model 14 times larger. The qualification is central: the advantage depended on task difficulty and on the smaller model already having non-trivial success. It was not a universal result that inference FLOPs dominate parameter scale.

Inference compute has a different economic shape from training compute:

- It can be **adaptive**. Easy requests stop quickly; difficult, valuable, or safety-critical requests receive a larger budget.
- It can exploit **request-specific evidence** such as tests, retrieved documents, simulations, or environmental feedback that was unavailable during pretraining.
- It can buy **reliability**, not merely average capability, by comparing independent attempts or checking intermediate steps.
- It is **recurring marginal cost**. Every additional sample or reasoning token is paid again for every similar query, and sequential reasoning directly adds latency.

The simplest model makes the constraint visible. If independent samples solve a problem with probability $p_x$, oracle success after $N$ samples is

$$
1-(1-p_x)^N.
$$

When $p_x>0$, more samples improve oracle coverage. When $p_x$ is tiny, the required $N$ may be commercially or physically absurd. When $p_x=0$ under the model's support, sampling never succeeds. Correlated errors make the independent formula optimistic. And if the selector cannot recognize success, oracle coverage overstates deployed accuracy. Thus inference scale is strongest where proposals are diverse enough and verification is cheap and aligned with the true objective.

Longer internal reasoning is not automatically useful computation. A model can repeat itself, rationalize a mistake, or optimize a flawed reward model. Process supervision can improve selection: Lightman and colleagues found that a process-supervised reward model outperformed outcome supervision in their MATH experiments and released PRM800K. But this is evidence for a particular mathematical setting, not proof that process reward models reliably judge open-ended science, factual synthesis, or value-laden decisions. Verifiers themselves are learned artifacts with training costs, distribution shifts, and exploitable errors.

## What algorithmic progress buys

Algorithmic progress is the residual label for improvements in how resources are used: architectures, optimizers, data curricula, tokenization, objectives, regularization, sparsity, quantization, distillation, retrieval, tool interfaces, search policies, verifiers, and systems techniques. It operates at both training and inference. Treating it as a third pile of FLOPs is useful for accounting only if the capability threshold and resource boundary are held fixed.

One defensible measure is **compute needed to reach fixed performance**. Hernandez and Brown estimated that training compute needed to reach AlexNet-level ImageNet performance fell 44-fold from 2012 to 2019, corresponding in their dataset to a halving roughly every 16 months. They explicitly warned that the sample covered few tasks, that final-run cost omitted total research expenditure, and that the trend should not be blindly extrapolated.

Ho and colleagues applied a related method to more than 200 language-model evaluations on WikiText and Penn Treebank from 2012–2023. Their augmented scaling-law analysis estimated that compute required to reach a fixed performance threshold halved about every eight months, with a wide 95% confidence interval of roughly five to fourteen months. Yet they also estimated that increased compute contributed more to overall performance improvement than algorithmic innovation over the studied period. “Algorithms improved quickly” and “scale contributed more” can both be true.

Efficiency numbers are threshold-, dataset-, and accounting-dependent. An architecture can reduce training FLOPs but increase memory traffic or inference latency. Distillation may make deployment cheap only after paying to train a teacher and generate data. Better data filtering can look like an algorithmic gain even though it depends on additional models and human labor. Sparse models may have many parameters but activate few per token; parameter count, FLOPs, wall-clock time, energy, and dollars then tell different stories. Total research compute includes failed runs and ablations, while papers often report only the successful final run.

Algorithmic progress is nevertheless more than a discount applied after scaling. It can change what kind of scaling is possible. Transformers enabled highly parallel sequence training; mixture-of-experts methods decouple total capacity from active compute; improved parallelism lets a training run span more devices; process verifiers can turn inference search from blind repetition into directed computation. An innovation may move a scaling curve downward, change its slope, extend the range before saturation, or create a new axis entirely.

## Why the levers are complements rather than substitutes

The substitution question must name a task, quality target, latency constraint, and number of future queries. There is no context-free exchange rate between a pretraining FLOP and an inference FLOP.

Suppose a larger trained model costs $T_L$ and $c_L$ per query, while a smaller model costs $T_S$ and $N c_S$ per query after search. Ignoring other costs, the larger model becomes cheaper after approximately

$$
M^* = \frac{T_L-T_S}{Nc_S-c_L}
$$

queries, when the denominator is positive. This break-even calculation is incomplete—quality must be equal, training capacity may be scarce, and latency matters—but it explains why inference scaling can be attractive for rare expert queries while stronger pretraining wins for high-volume service.

There are four important non-substitutability boundaries.

**Competence boundary.** Search needs a model capable of proposing a solution. Extra attempts amplify a nonzero success probability; they do not guarantee creation of missing knowledge or an absent reasoning primitive. Training, data, or an external tool must first move the proposal distribution.

**Verification boundary.** Inference scaling needs a signal that correlates with truth or task success. Compilers, proof assistants, and unit tests provide unusually strong feedback. Open-ended explanations, forecasts, and scientific hypotheses often lack cheap decisive checks. In those domains, scaling candidates can increase persuasive error as readily as truth.

**Amortization boundary.** Training creates shared state across requests. Inference compute is consumed per request. Heavy usage favors investing upstream; sparse, heterogeneous, or rapidly changing tasks favor adaptive downstream spending.

**Innovation boundary.** An algorithm is not useful independently of the resources and artifacts it organizes. A better optimizer needs compute and data to train a model. A better search procedure needs a model and verifier to search. Conversely, brute-force scale is mediated by algorithms: FLOPs are inert unless a recipe converts them into learning or reliable inference.

This is why a strong frontier strategy is usually a portfolio. Use training scaling to build broad competence; use algorithmic improvements to obtain more competence per scarce resource and unlock new regimes; use adaptive inference to concentrate effort on hard, valuable cases. Improvements in one lever raise the value of the others. A stronger model raises candidate quality, making search more productive. A better verifier raises the return on samples. A more efficient training recipe makes stronger proposal models affordable. Cheap inference hardware can make longer search deployable, which creates demand for better inference algorithms.

## Evaluation and forecasting discipline

Fair comparisons should trace the entire resource envelope. Reporting only parameter count hides training tokens and sparse activation. Reporting only generated tokens hides verifier passes, tool calls, retrieval, rejected branches, and parallel samples. Reporting only final-run FLOPs hides algorithm-development compute. Dollar cost is volatile and provider-specific; FLOPs are more portable but omit memory, communication, and utilization.

A minimum comparison record should include:

- exact model and checkpoint, training-data cutoff when known, and whether weights or only an API were evaluated;
- training-compute estimate with uncertainty, token count, parameter count, active parameters, and major training-recipe differences;
- inference method, maximum and average generated tokens, samples, verifier calls, tool calls, stopping policy, and wall-clock latency;
- score as a function of inference budget, not merely the best point;
- pass@1, oracle or pass@$N$, and actually selected accuracy as distinct quantities;
- task-level failures, confidence intervals, contamination controls, and selector ablations;
- cost per successful task at the target quality and expected workload.

Forecasts should preserve uncertainty rather than multiplying historical trend lines. The Kaplan and Chinchilla results describe fitted regimes, not permanent laws. Algorithmic-efficiency estimates use noisy historical comparisons and fixed benchmarks that can saturate. Test-time scaling results are strongest in verifiable domains and may shift as tasks become harder. Future capability depends on data quality, hardware supply, energy, networking, research effort, and whether new methods continue to expose useful returns to compute.

The defensible conclusion is narrower but more useful: capability progress has repeatedly come from jointly increasing resources and improving the algorithms that allocate them. Inference-time compute adds a powerful adaptive axis, especially when verification is reliable. It changes the optimal balance between building a stronger model and thinking longer on a request; it does not abolish that balance.

## Why it matters


For deployment, the practical choice is not “large model or reasoning.” It is where to put the next marginal dollar under a workload: improve the reusable model, improve the recipe or verifier, or spend more on selected requests. The answer will differ for bulk summarization, theorem proving, coding agents, scientific discovery, and safety evaluations. Keeping the levers separate is what makes those decisions measurable.

## Sources

1. Jared Kaplan et al., “Scaling Laws for Neural Language Models,” arXiv:2001.08361 (2020): https://arxiv.org/abs/2001.08361
2. Jordan Hoffmann et al., “Training Compute-Optimal Large Language Models,” arXiv:2203.15556 (2022): https://arxiv.org/abs/2203.15556
3. Charlie Snell et al., “Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters,” arXiv:2408.03314 (2024): https://arxiv.org/abs/2408.03314
4. Bradley Brown et al., “Large Language Monkeys: Scaling Inference Compute with Repeated Sampling,” arXiv:2407.21787 (2024): https://arxiv.org/abs/2407.21787
5. Hunter Lightman et al., “Let’s Verify Step by Step,” arXiv:2305.20050 (2023): https://arxiv.org/abs/2305.20050
6. Danny Hernandez and Tom B. Brown, “Measuring the Algorithmic Efficiency of Neural Networks” (2020): https://arxiv.org/abs/2005.04305
7. Anson Ho et al., “Algorithmic Progress in Language Models,” arXiv:2403.05812 (2024): https://arxiv.org/abs/2403.05812
8. Jaime Sevilla et al., “Compute Trends Across Three Eras of Machine Learning,” arXiv:2202.05924 (2022): https://arxiv.org/abs/2202.05924

## Open questions

- How stable are inference-scaling curves when benchmarks are contamination-resistant and task difficulty rises with model capability?
- Which verifier properties predict when oracle pass@$N$ gains become real selected-answer gains?
- What accounting standard can compare training FLOPs, development experiments, inference search, tool use, latency, energy, and dollars without collapsing them into a misleading scalar?
- Does adaptive inference reduce total compute by stopping early, or does product demand expand until all available savings are consumed?
- How quickly is algorithmic efficiency improving on modern frontier tasks rather than older language-modeling and vision thresholds?
- When do inference-generated traces become valuable training data, creating a feedback loop between the two compute stages, and when do they instead amplify model errors?
