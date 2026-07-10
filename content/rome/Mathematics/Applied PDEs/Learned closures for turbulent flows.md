---
title: Learned closures for turbulent flows
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pdes, turbulence, scientific-machine-learning, closure-modeling]
---
Learned turbulence closures approximate the influence of unresolved scales, but they become credible only when their variables, symmetries, stability mechanisms, and a posteriori tests match the filtered or averaged PDE in which they operate.

Up: [[Applied PDE research frontier 2026]]

## Closure begins with a changed equation

Turbulent flow couples a broad range of spatial and temporal scales. Direct numerical simulation (DNS) resolves down to the dissipative scale, but its cost rises rapidly with Reynolds number. Reynolds-averaged Navier–Stokes (RANS), large-eddy simulation (LES), and reduced-order models deliberately retain fewer degrees of freedom. The resulting equations are not merely Navier–Stokes on a coarser grid: eliminating variables creates new, unclosed terms.

For an incompressible fluid with velocity $u(x,t)$, pressure $p$, kinematic viscosity $\nu$, and body force $f$,

$$
\partial_t u_i+u_j\partial_j u_i=-\partial_i p+\nu\Delta u_i+f_i,
\qquad \partial_i u_i=0.
$$

Apply a spatial filter $\overline{(\cdot)}$ that commutes with differentiation. Filtering the nonlinear flux gives

$$
\partial_t \bar u_i+\partial_j(\bar u_i\bar u_j)
=-\partial_i\bar p+\nu\Delta\bar u_i-\partial_j\tau_{ij}+\bar f_i,
$$

where

$$
\tau_{ij}=\overline{u_i u_j}-\bar u_i\bar u_j
$$

is the subgrid-scale (SGS) stress. The filtered velocity does not determine $\tau$ exactly in general: multiple fine fields can have the same filtered field and different subfilter correlations. This loss of information is the closure problem.

RANS uses an ensemble or long-time decomposition $u_i=U_i+u_i'$ and obtains the Reynolds stress $R_{ij}=\langle u_i'u_j'\rangle$. Its momentum equation contains $-\partial_jR_{ij}$. LES asks how unresolved fluctuations act on a resolved, time-dependent field; RANS asks for their statistical mean effect. A network trained to predict one object is not automatically a model for the other.

On nonuniform filters, walls, curved meshes, or discrete operators, filtering and differentiation need not commute. Then commutator errors join the SGS term. Moreover, a practical LES closure often absorbs both physical subfilter stress and numerical truncation effects. The training target must therefore specify the filter, grid, discretization, and stress convention. “Learning turbulence” is too vague to define a mathematical problem.

## What can be learned

A local algebraic model writes the deviatoric stress as a function of resolved features,

$$
\tau_{ij}^{d}=\tau_{ij}-\frac13\tau_{kk}\delta_{ij}
=\mathcal M_{\theta,ij}(q(x,t)),
$$

where $q$ may contain the strain $S=(\nabla\bar u+\nabla\bar u^T)/2$, rotation $\Omega=(\nabla\bar u-\nabla\bar u^T)/2$, wall distance, pressure gradient, or nondimensional parameters. Eddy-viscosity models restrict this to

$$
\tau_{ij}^{d}=-2\nu_t S_{ij}, \qquad \nu_t\ge 0,
$$

and may learn only the scalar $\nu_t$. This is less expressive than learning all stress components, but its sign gives a direct energy-dissipation mechanism.

Nonlocal models use a neighborhood, convolution, graph, or [[Neural operators|operator]] to represent $\tau(x)$ from the resolved field over a region. Recurrent or memory models account for the fact that projected dynamics are generally non-Markovian. The Mori–Zwanzig formalism makes this precise: exact elimination of unresolved variables produces a Markov term, a history integral, and a term depending on unresolved initial data. A memoryless neural closure is therefore an approximation, not the generic exact reduction.

Another strategy learns a correction to a trusted baseline,

$$
\tau=\tau^{\mathrm{base}}+\Delta\tau_\theta,
$$

or learns coefficients inside a structured model. This can preserve known limiting behavior and reduce the hypothesis space. Learning the divergence $-\nabla\cdot\tau$ directly aligns with the momentum equation but loses stress-level interpretability and can make boundary treatment harder. Learning a discrete flux aligns with a particular solver yet may not transfer to another mesh or numerical flux.

These choices define different products. A closure can target instantaneous stress, mean velocity, energy spectrum, wall shear, or a force coefficient. Low stress-regression error does not imply low error in the quantity that matters after time integration.

## Invariance is a modeling constraint

The Navier–Stokes equations impose transformations that a constitutive relation should respect. Under a change of inertial frame with constant translation velocity, velocity gradients are unchanged, so a gradient-based closure is Galilean invariant. Under a rotation or reflection $Q\in O(d)$,

$$
S\mapsto QSQ^T,\qquad \Omega\mapsto Q\Omega Q^T,\qquad
\tau\mapsto Q\tau Q^T.
$$

A componentwise multilayer perceptron fed raw tensor entries does not satisfy this equivariance automatically. Data augmentation can encourage it but does not enforce it outside sampled transformations.

One structured route expresses an anisotropic stress in an integrity basis,

$$
b=\sum_{n=1}^{N}g_n(\lambda_1,\ldots,\lambda_m)T^{(n)}(S,\Omega),
$$

where the $\lambda_k$ are scalar invariants such as $\operatorname{tr}(S^2)$ and $\operatorname{tr}(\Omega^2)$, the $T^{(n)}$ are equivariant tensor polynomials, and the network learns scalar coefficient functions $g_n$. Ling, Kurzawski, and Templeton used this tensor-basis idea for Reynolds-stress anisotropy. Modern equivariant networks provide another route. In either case, the architectural statement is exact only if the implemented inputs, normalization, boundary features, and output reconstruction transform consistently.

Dimensional consistency is separate. A closure trained on dimensional gradients can silently encode the units and scale distribution of one dataset. Nondimensional inputs based on local or global velocity, length, viscosity, and filter width make the intended scaling visible. But a local normalization can become singular in quiescent regions, while a global normalization can obscure large regime changes. The chosen scale is part of the model.

Realizability also matters. A Reynolds-stress tensor is symmetric and positive semidefinite because $a_iR_{ij}a_j=\langle(a\cdot u')^2\rangle\ge0$. Parameterizing a Cholesky factor can enforce positive semidefiniteness; clipping eigenvalues after prediction changes the learned map and should be included during training or validation. For LES, the SGS stress need not behave like a pointwise positive viscosity because backscatter—energy transfer from unresolved to resolved scales—can occur. Confusing RANS realizability with LES dissipation rules imposes the wrong physics.

## Energy transfer exposes the stability problem

Assume periodic boundaries or boundary conditions eliminating kinetic-energy fluxes. Pair the filtered momentum equation with $\bar u$. The SGS contribution to resolved kinetic energy is

$$
-\int_\Omega \bar u_i\partial_j\tau_{ij}\,dx
=\int_\Omega \tau_{ij}\partial_j\bar u_i\,dx
=\int_\Omega \tau:S\,dx,
$$

because a symmetric stress has zero contraction with $\Omega$. It is common to define SGS transfer $\Pi=-\tau:S$; then $\Pi>0$ denotes forward transfer out of resolved scales. For the eddy-viscosity form,

$$
\Pi=2\nu_t|S|^2\ge0.
$$

Thus nonnegative eddy viscosity provides a resolved-energy inequality, subject to the remaining discretization and forcing terms. This is a derivation, not a theorem that the full numerical scheme is stable: time integration, aliasing, pressure treatment, boundary terms, and other modeled variables still matter.

An unrestricted learned tensor can yield strong negative $\Pi$ and inject energy faster than molecular or numerical dissipation removes it. Small, unbiased pointwise errors can align coherently with $S$ and destabilize a rollout. Conversely, forbidding all backscatter can overdamp physically meaningful fluctuations. Practical controls include a dissipative baseline plus a bounded correction, projection onto an admissible set, clipping of energy injection, spectral damping, constrained optimization, or online blending that reverts toward a baseline when diagnostics cross a threshold.

The key distinction is between **a priori** and **a posteriori** evaluation. A priori testing freezes DNS data, constructs filtered inputs and targets, and measures stress or transfer error. A posteriori testing inserts the closure into the PDE solver and evaluates its coupled trajectory or statistics. Distribution shift appears immediately: once the learned model changes the resolved flow, it encounters states not present in the filtered-DNS inputs used to train it. Closed-loop training can reduce this mismatch, but it also makes gradients, solver tolerances, and rollout horizon part of the optimization problem; see [[Differentiable PDE solvers]].

## What is theorem, what is evidence

Several statements follow from definitions or standard analysis under explicit assumptions:

- Filtering a quadratic nonlinearity creates the covariance-like SGS stress shown above when the filter commutes with derivatives.
- An exactly equivariant tensor-basis construction transforms correctly under the represented orthogonal transformations.
- With compatible boundaries, a symmetric eddy-viscosity stress and $\nu_t\ge0$ cannot inject resolved kinetic energy through the SGS term.
- A positive-semidefinite Reynolds stress is realizable at the level of its second moment.

None of these proves that a learned closure is accurate, that its coupled discretization converges to the intended coarse-grained dynamics, or that it generalizes across Reynolds number, geometry, forcing, filter, or mesh. Universal approximation results say that sufficiently rich networks can approximate maps in a chosen class; they do not identify the correct closure from finite, correlated turbulence data or guarantee stable extrapolation.

Published demonstrations supply **empirical evidence**. Tensor-basis networks improved selected RANS anisotropy predictions while encoding invariance. Data-driven LES studies have shown that neural closures can reproduce spectra or flow statistics on particular configurations, and differentiable or solver-in-the-loop training can improve a posteriori behavior. Such results are conditional on datasets, numerics, budgets, and evaluation regimes. They are not general theorems about turbulent flow.

A defensible paper dossier should therefore label each claim: algebraic identity, proved stability result for a stated semidiscrete system, numerical convergence study, held-out interpolation result, cross-regime extrapolation, or qualitative flow comparison. The label matters more than whether the method is called “physics-informed.”

## A credible evaluation ladder

1. **Define the coarse-graining.** State DNS equation, filter kernel and width, averaging operation, commutation assumptions, grid, time sampling, and target construction. Separate physical closure from discretization error when possible.
2. **Choose independent splits.** Neighboring snapshots from one trajectory are strongly correlated. Hold out entire trajectories, initial conditions, forcing realizations, geometries, Reynolds numbers, or time intervals according to the deployment claim.
3. **Test symmetries and limits directly.** Rotate and reflect fields, add inertial-frame translations, rescale units, approach laminar flow, and inspect wall and homogeneous limits. Architectural constraints should pass to floating-point tolerance; learned tendencies should be reported statistically.
4. **Measure physics beyond regression norms.** Report stress correlation and error, SGS-transfer distribution, mean dissipation, energy spectra, structure functions, two-point correlations, wall stress, conservation defects, and the application quantity of interest. No single metric is sufficient.
5. **Run a posteriori ensembles.** Report stable-run fraction, transient behavior, long-time statistics, sensitivity to random seed, and failure thresholds. Chaotic trajectory divergence is expected, so require statistical agreement rather than indefinite pointwise matching.
6. **Vary resolution and numerics.** Change grid, filter width, timestep, advection scheme, dealiasing, and solver tolerances. Compare at equal resolved degrees of freedom and wall-clock or compute budget. A closure that compensates one scheme's dispersion may fail with another.
7. **Use strong baselines.** Compare against no-model and established closures such as Smagorinsky, dynamic Smagorinsky, mixed models, or appropriate RANS models. Tune baselines fairly. Include training, data-generation, and hyperparameter-search costs when amortization is claimed, as in [[Operator learning versus numerical solvers]].
8. **Probe shift and uncertainty.** Sweep Reynolds number, geometry, inflow, forcing, and boundary conditions. Report calibration or a rejection signal, and define a fallback. [[Uncertainty quantification for PDE models]] explains why model-form and surrogate uncertainty cannot be erased by a narrow parameter posterior.

An especially revealing test is refinement at fixed physical filter width versus refinement with filter width tied to grid spacing. These answer different questions. In the first, the continuum filtered model should remain the same while discretization error changes. In the second, the modeled unresolved band changes, so the closure itself is asked a new question. Many apparent “grid generalization” claims mix the two.

## Why it matters

Closure modeling is where scientific machine learning confronts the difference between fitting labels and changing a dynamical system. The unresolved variables do not merely add noise; they exchange energy, momentum, and information with resolved scales. A learned map that looks accurate offline can alter the attractor, violate a symmetry, or exploit a discretization artifact when coupled to the PDE.

The constructive lesson is not that learning should be excluded. Learned corrections can use high-fidelity data, represent anisotropy beyond simple eddy viscosity, and amortize expensive constitutive calculations. But structure should be allocated deliberately: exact symmetries in architecture, dissipation or realizability in parameterization when appropriate, numerical conservation in the solver, and uncertainty or fallback logic around the learned component. This hybrid design makes the scientific claim auditable.

For applied PDE work, learned closure is also a template for other reduced models: multiphase constitutive laws, combustion chemistry, porous-media upscaling, climate parameterizations, and projection-based ROM closures face the same identifiability, memory, stability, and distribution-shift problems. The central question is always which discarded variables influence the retained state, and under what tested conditions a finite representation of that influence remains valid.

## Sources

- [Germano, Piomelli, Moin, and Cabot, “A dynamic subgrid-scale eddy viscosity model,” *Physics of Fluids A* 3 (1991)](https://doi.org/10.1063/1.857955) — primary source for the dynamic LES procedure and test-filter-based coefficient estimation.
- [Ling, Kurzawski, and Templeton, “Reynolds averaged turbulence modelling using deep neural networks with embedded invariance,” *Journal of Fluid Mechanics* 807 (2016)](https://doi.org/10.1017/jfm.2016.615) — primary tensor-basis neural-network formulation and experiments.
- [Beck, Flad, and Munz, “Deep neural networks for data-driven LES closure models,” *Journal of Computational Physics* 398 (2019)](https://doi.org/10.1016/j.jcp.2019.108910) — primary a priori and a posteriori study of learned LES closures.
- [Maulik, San, Rasheed, and Vedula, “Subgrid modelling for two-dimensional turbulence using neural networks,” *Journal of Fluid Mechanics* 858 (2019)](https://doi.org/10.1017/jfm.2018.770) — primary study combining classification and regression to control closure behavior.
- [Duraisamy, Iaccarino, and Xiao, “Turbulence modeling in the age of data,” *Annual Review of Fluid Mechanics* 51 (2019)](https://doi.org/10.1146/annurev-fluid-010518-040547) — authoritative review of inference, discrepancy, and data-driven turbulence modeling.
- [Meneveau and Katz, “Scale-invariance and turbulence models for large-eddy simulation,” *Annual Review of Fluid Mechanics* 32 (2000)](https://doi.org/10.1146/annurev.fluid.32.1.1) — authoritative review of LES filtering, scale similarity, and dynamic modeling.

## Open questions

- Can a useful closure represent backscatter while guaranteeing a coupled, discretization-aware energy bound over long rollouts?
- Which memory variables are sufficient to make a closure approximately Markovian across more than one flow family?
- How should uncertainty trigger abstention or fallback without making the hybrid solver prohibitively expensive?
- What benchmark can separate filter transfer, grid transfer, numerical-scheme transfer, and Reynolds-number extrapolation?
- Which closure properties can be proved for fully discrete learned LES rather than only observed in finite ensembles?
