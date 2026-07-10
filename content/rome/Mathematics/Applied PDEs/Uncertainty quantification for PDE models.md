---
title: Uncertainty quantification for PDE models
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pdes, uncertainty-quantification, inverse-problems, numerical-analysis]
---

Uncertainty quantification (UQ) turns uncertain PDE inputs, imperfect observations, numerical error, and inadequate model structure into explicit statements about the reliability of predicted quantities of interest.

Up: [[Applied PDE research frontier 2026]] · [[Applied PDEs]]

## The object being quantified

A deterministic PDE calculation maps prescribed inputs to one computed field. UQ begins when some inputs or assumptions are not known exactly. Write a parameterized model abstractly as

$$
\mathcal F(u,a,m)=0 \quad \text{in }D, \qquad \mathcal B(u,a,m)=0 \quad \text{on }\partial D,
$$

where $u$ is the state, $a$ contains uncertain coefficients, forcing, initial data, boundary data, or geometry, and $m$ labels a model class or closure. A solver on mesh width $h$ and time step $\Delta t$ returns $u_{h,\Delta t}$. Usually the decision-relevant output is not the whole field but a quantity of interest (QoI)

$$
Q=\mathcal G(u,a),
$$

such as peak stress, drag, breakthrough time, deposited mass, or the probability that temperature exceeds a threshold. UQ asks for a distribution, interval, moment, exceedance probability, or decision risk for $Q$—not merely a visually plausible solution plot.

This distinction matters. A method can approximate the mean field accurately while badly estimating a rare-event probability; it can also resolve $u$ in a global norm while missing a localized QoI. The UQ target therefore has to be declared before choosing samples, meshes, surrogates, or error tolerances.

## Four uncertainties that should not be merged

An honest uncertainty budget separates at least four sources because they have different meanings and remedies.

### Parameter and input uncertainty

Parameter uncertainty concerns quantities *inside an accepted model*: permeability, reaction rates, elastic moduli, inflow profiles, initial states, geometry, or unresolved random fields. It may be represented probabilistically by a random variable or field $a(\omega)$, often reduced to coordinates $\xi=(\xi_1,\ldots,\xi_d)$ through a Karhunen–Loève expansion,

$$
a(x,\omega)\approx \bar a(x)+\sum_{j=1}^{d}\sqrt{\lambda_j}\,\phi_j(x)\xi_j(\omega).
$$

This truncation is already an approximation: small covariance eigenvalues do not automatically imply negligible influence on a nonlinear or threshold QoI. When defensible probabilities are unavailable, intervals, possibility sets, or distributionally robust ambiguity sets may be more honest than a sharply specified prior.

### Observation uncertainty

Measurements are noisy, biased, sparse, and filtered through instruments. A common observation model is

$$
y=\mathcal H(u,a)+\eta,
$$

with observation operator $\mathcal H$ and error $\eta$. The law of $\eta$ encodes more than random sensor noise: correlation, censoring, temporal aggregation, and representativeness error can dominate. Treating all residuals as independent Gaussian noise often makes posterior credible intervals too narrow. Observation uncertainty is reduced by better measurement and experimental design, not by refining the PDE mesh.

### Discretization and solver uncertainty

Even with exact inputs and a correct continuum equation, $Q_{h,\Delta t}$ differs from $Q$. Spatial truncation, time integration, iterative solver tolerances, quadrature, floating-point effects, and stochastic sampling all contribute numerical error. This is epistemic uncertainty about the computation. Mesh refinement, a posteriori estimators, replicated sampling, and solver residual controls can assess and reduce it. [[Consistency stability and convergence]] and [[Adaptive mesh refinement]] explain why a converged nonlinear iteration is not the same as convergence to the continuum solution.

### Model-form uncertainty

Model-form uncertainty is inadequacy of the equations themselves: a closure omits physics, a constitutive law fails outside its calibration regime, a boundary idealization is wrong, or the selected state variables cannot describe the phenomenon. It cannot generally be represented by widening a parameter prior within the same model. One can compare model classes, introduce discrepancy terms, test predictions on withheld regimes, or report an explicit inadequacy allowance. But discrepancy and calibration parameters may be statistically confounded: many combinations explain the same data while extrapolating differently.

The four-source taxonomy is operational rather than metaphysical. Errors can interact—for example, coarse discretization can look like model discrepancy during calibration. The practical rule is to label each contribution and test whether its scale changes under new data, mesh refinement, or model replacement.

## Forward UQ: inputs to predictions

Forward UQ assumes a law or admissible set for uncertain inputs and propagates it through the PDE to $Q$. For random inputs, basic targets include

$$
\mathbb E[Q],\qquad \operatorname{Var}(Q),\qquad
P(Q>q_*),\qquad \text{and quantiles of }Q.
$$

Plain Monte Carlo draws independent inputs $a^{(i)}$, solves the PDE, and averages $Q^{(i)}$. Its root-mean-square sampling error is $O(N^{-1/2})$ under finite variance, essentially independent of input dimension, but every sample may require an expensive solve. Confidence intervals must account for autocorrelation if samples are not independent and for bias if the PDE is discretized.

Several accelerations exploit additional structure:

- **Quasi-Monte Carlo** replaces random points by low-discrepancy sequences. It is effective when the parameter-to-QoI map has favorable weighted smoothness and modest effective dimension; nominal parameter dimension alone is not decisive.
- **Multilevel Monte Carlo (MLMC)** combines many cheap coarse solves with fewer expensive fine solves. With $Q_\ell$ on nested levels,

$$
\mathbb E[Q_L]=\mathbb E[Q_0]+\sum_{\ell=1}^{L}\mathbb E[Q_\ell-Q_{\ell-1}].
$$

Coupled samples make the level differences low variance. MLMC controls sampling variance efficiently, but the finest-level discretization bias still needs a convergence argument or estimator.
- **Polynomial chaos and stochastic Galerkin methods** expand $u(x,\xi)$ in polynomials orthogonal under the input law. Spectral convergence is possible when dependence on $\xi$ is sufficiently regular, but discontinuities, shocks, bifurcations, and high effective dimension erode that advantage. Intrusive Galerkin formulations couple coefficients; nonintrusive collocation reuses deterministic solvers.
- **Surrogates**—Gaussian processes, reduced bases, sparse grids, and neural operators—replace repeated full solves. Their prediction error belongs in the uncertainty budget. Cross-validation on in-distribution points is not evidence that a surrogate preserves tails or extrapolates safely. [[Reduced-order modeling for PDEs]] and [[Neural operators for PDE surrogate modeling]] describe two important families.

Sensitivity analysis answers a related but different question: which uncertain inputs drive output variation? Variance-based Sobol indices partition variance under a specified joint input distribution. Derivative or adjoint sensitivities can be much cheaper in high dimension; see [[Adjoint methods for PDE-constrained optimization]]. Sensitivity is not uncertainty: a highly sensitive parameter may be known precisely, and a weakly sensitive one may remain poorly identified.

## Inverse UQ: observations to uncertain inputs

Inverse UQ infers $a$ or latent states from $y$. The Bayesian formulation combines a prior measure $\mu_0$ with a likelihood. For Gaussian observation error with covariance $\Gamma$, define

$$
\Phi(a;y)=\frac12\left\|y-\mathcal H(u(a))\right\|_{\Gamma^{-1}}^2.
$$

Under suitable conditions, the posterior satisfies

$$
\frac{d\mu^y}{d\mu_0}(a)=\frac{1}{Z(y)}\exp[-\Phi(a;y)],
$$

where $Z(y)$ normalizes the measure. The prior regularizes an ill-posed inverse map and states which fields are plausible before observing $y$; the posterior represents conditional uncertainty, not an objectively true frequency distribution for a fixed parameter.

Function-space formulations are important for field inversion. A sequence of naive finite-dimensional priors can change meaning as the mesh is refined, so apparent posterior concentration may be a discretization artifact. Well-posed Bayesian inverse-problem theory establishes existence and stability of the posterior with respect to data under assumptions on the forward map and likelihood. It does not establish that the physical model, prior, or likelihood is appropriate.

Computational approaches include Markov chain Monte Carlo, sequential Monte Carlo, ensemble Kalman methods, and variational inference. MCMC can target the posterior asymptotically but may mix slowly across correlated or multimodal directions. Ensemble Kalman methods are attractive for large state systems but use approximations that can bias non-Gaussian posteriors. Variational methods trade sampling for optimization and may underestimate uncertainty when the approximating family is restrictive. [[Data assimilation as an inverse problem]] treats the sequential state-estimation viewpoint.

Identifiability must be checked before interpreting narrow uncertainty intervals. If two parameters affect observations through nearly the same direction, the likelihood contains a ridge. More data of the same type may not resolve it; new sensor locations, forcing conditions, or QoIs may. Posterior predictive checks can reveal mismatch, but successful interpolation does not guarantee extrapolation.

## Verification, calibration, and validation

These terms answer different questions and should appear as separate gates in a credible study.

**Verification** asks whether the equations are being solved correctly. Code verification uses manufactured or exact solutions, conservation identities, and order-of-accuracy tests. Solution verification estimates numerical error for the actual calculation using mesh/time-step studies, residual estimators, or goal-oriented methods. Verification addresses discretization and implementation, not physical truth.

**Calibration** uses observations to estimate uncertain parameters or distributions within a chosen model. It can improve agreement while hiding compensating errors: an effective parameter may absorb missing physics, boundary error, and numerical bias. Calibration should therefore propagate observation and numerical uncertainty and document which data informed which parameters.

**Validation** asks whether the model is adequate for its intended use by comparing predictions against relevant observations not used for calibration. Validation is conditional on a domain of application and a QoI; no finite test validates a model universally. Withholding random points from one experimental regime is weaker than predicting a genuinely different regime. Validation evidence should include uncertainty on both prediction and measurement sides.

A useful workflow is:

1. define the decision, QoI, tolerable error, and application domain;
2. construct a source-separated uncertainty inventory;
3. verify code and quantify numerical error before calibration;
4. calibrate only identifiable quantities with a documented observation model;
5. validate on independent, application-relevant data;
6. propagate the joint uncertainty to the QoI and perform sensitivity analysis;
7. challenge prior, likelihood, discrepancy, mesh, and surrogate choices;
8. report limitations and update the model when validation fails.

This sequence is not strictly linear—validation failures trigger model revision—but it prevents parameter fitting from being mistaken for evidence of physical adequacy.

## What theory guarantees—and what computation only suggests

Theoretical results are conditional statements. PDE well-posedness can make $a\mapsto u(a)$ continuous; regularity can justify polynomial approximations; Bayesian theory can make $y\mapsto\mu^y$ stable; numerical analysis can bound $|Q-Q_h|$; and Monte Carlo limit theorems can quantify sampling error. Every conclusion inherits the hypotheses. Shocks, discontinuous coefficients, moving interfaces, chaotic dynamics, or a misspecified likelihood may violate them.

Three error limits are especially easy to confuse. A *deterministic discretization bound* controls the difference between continuum and discrete solutions at fixed input. A *stochastic approximation bound* controls integration or sampling over uncertain inputs, usually for a fixed discretization. A *statistical contraction result* describes how a posterior concentrates as observations improve or multiply, conditional on the data-generating and prior assumptions. Sending $h\to0$, $N\to\infty$, and the noise level $\sigma\to0$ are different limits; their rates can interact. For example, an inverse computation on a fixed coarse mesh can become increasingly confident about the wrong discretized parameter as $\sigma$ decreases. A balanced algorithm makes numerical bias smaller than the inferential resolution rather than spending arbitrarily on either component alone.

Numerical evidence has a different role. Mesh-refinement slopes, effective sample sizes, multiple MCMC chains, surrogate test errors, posterior predictive plots, and sensitivity estimates diagnose a particular computational experiment. They do not prove asymptotic convergence or model validity. Conversely, an asymptotic theorem does not show that the computation has entered its asymptotic regime.

A defensible result therefore reports both layers. For example: a theorem establishes an estimator's convergence under regularity assumptions; an empirical refinement study checks whether the observed problem behaves consistently with those assumptions; independent validation tests the physical model. Agreement among these layers increases confidence without collapsing them into one claim.

## Reporting a prediction with an uncertainty budget

For a reported estimate $\widehat Q$, a schematic decomposition is

$$
Q_{\text{reality}}-\widehat Q
=e_{\mathrm{input}}+e_{\mathrm{obs}}+e_{\mathrm{disc}}+e_{\mathrm{model}}+e_{\mathrm{sampling}}+e_{\mathrm{surrogate}},
$$

but the terms are rarely independent or uniquely additive. It is safer to propagate them jointly where possible and to report sensitivity to plausible modeling choices. A publication-quality statement names the QoI; calibration and validation data; prior and likelihood; mesh and solver tolerances; sampling diagnostics; surrogate error; discrepancy treatment; and the interval's interpretation. “$95\%$ confidence,” “$95\%$ posterior credible,” and “contains $95\%$ of predictive outcomes” are different claims.

The central discipline of UQ is not producing a probability distribution. It is making every important source of uncertainty visible, tracing how it reaches the decision, and refusing to let numerical precision masquerade as knowledge about reality.

Reproducibility also requires retaining the computational lineage: input distributions and correlations, random seeds or low-discrepancy rules, mesh families, software versions, solver stopping criteria, posterior diagnostics, and the exact transformation from state fields to the QoI. Reporting only a final interval prevents another analyst from determining whether its width comes from physical variability, measurement noise, numerical error, or an arbitrary modeling choice. When the tail probability drives a safety decision, the report should additionally show the number and location of tail samples, variance estimates, and sensitivity to threshold placement.

## Sources

- Andrew M. Stuart, “Inverse problems: A Bayesian perspective,” *Acta Numerica* 19 (2010), pp. 451–559. [DOI](https://doi.org/10.1017/S0962492910000061)
- Alireza Tarantola, *Inverse Problem Theory and Methods for Model Parameter Estimation*, SIAM (2005). [Publisher page and DOI](https://doi.org/10.1137/1.9780898717921)
- Roger G. Ghanem, David Higdon, and Houman Owhadi, eds., *Handbook of Uncertainty Quantification*, Springer (2017). [Publisher page and DOI](https://doi.org/10.1007/978-3-319-12385-1)
- Dongbin Xiu and George Em Karniadakis, “The Wiener–Askey polynomial chaos for stochastic differential equations,” *SIAM Journal on Scientific Computing* 24.2 (2002), pp. 619–644. [DOI](https://doi.org/10.1137/S1064827501387826)
- Michael B. Giles, “Multilevel Monte Carlo path simulation,” *Operations Research* 56.3 (2008), pp. 607–617. [DOI](https://doi.org/10.1287/opre.1070.0496)
- Marc C. Kennedy and Anthony O’Hagan, “Bayesian calibration of computer models,” *Journal of the Royal Statistical Society: Series B* 63.3 (2001), pp. 425–464. [DOI](https://doi.org/10.1111/1467-9868.00294)
- William L. Oberkampf and Christopher J. Roy, *Verification and Validation in Scientific Computing*, Cambridge University Press (2010). [Publisher page and DOI](https://doi.org/10.1017/CBO9780511760396)
- ASME, *V&V 20-2009 (R2021): Standard for Verification and Validation in Computational Fluid Dynamics and Heat Transfer*. [Official standard page](https://www.asme.org/codes-standards/find-codes-standards/standard-for-verification-and-validation-in-computational-fluid-dynamics-and-heat-transfer/2009/print-book)

## Open questions

- How can model discrepancy be separated from flexible calibration parameters when only one physical system and a small validation set are available?
- Which dimension-robust posterior approximations retain calibrated tail probabilities for field-valued, nonlinear inverse problems?
- How should rare-event estimators combine adaptive discretization, importance sampling, and surrogate error without double-counting uncertainty?
- What validation designs most efficiently detect failure under distribution shift rather than merely confirm interpolation accuracy?
- How can structural uncertainty across competing PDE models be propagated without assigning unjustifiably precise prior model probabilities?
