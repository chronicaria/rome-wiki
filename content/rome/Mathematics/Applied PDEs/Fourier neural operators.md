---
title: Fourier neural operators
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pde, operator-learning, fourier-analysis, scientific-machine-learning]
---

Fourier neural operators learn a parameterized map between fields by alternating global, band-limited Fourier multipliers with local channel mixing and nonlinearities; their reusable spectral parameters permit evaluation on different uniform grids, but do not by themselves guarantee accuracy under refinement, domain shift, or unresolved dynamics.

Up: [[Applied PDE research frontier 2026]]

Related: [[Spectral methods and aliasing]] · [[Consistency stability and convergence]] · [[Differentiable PDE solvers]] · [[Uncertainty quantification for PDE models]]

## The object being learned

A parametric PDE usually defines a solution operator

$$
\mathcal G^\dagger:a\in\mathcal A\longmapsto u\in\mathcal U,
$$

where $a$ may encode a coefficient field, forcing, initial condition, or geometry, while $u$ is the solution field. A conventional grid-to-grid network learns a finite-dimensional map $\mathbb R^{N_a}\to\mathbb R^{N_u}$ tied to particular arrays. A neural operator instead aims to parameterize a map between function spaces and then discretize that same parameterization wherever it is evaluated. This is the sense—not the stronger claim of grid-independent error—in which an FNO is *discretization invariant*.

The usual architecture first lifts each input value and its coordinates into $d_v$ latent channels,

$$
v_0(x)=P(a(x),x),
$$

applies several operator layers, and finally projects the latent field back to the desired output channels:

$$
v_{t+1}(x)=\sigma\!\left(W_t v_t(x)+(\mathcal K_t v_t)(x)+b_t(x)\right),
\qquad u(x)=Q(v_T(x)).
$$

Here $W_t\in\mathbb R^{d_v\times d_v}$ mixes channels pointwise, $\sigma$ is a pointwise nonlinearity, and $\mathcal K_t$ is a learned nonlocal integral operator. The local path is essential: if the spectral path retains only low modes, $W_tv_t$ still transports all grid-resolved pointwise information between layers. Coordinates or other positional features break translation symmetry when location matters.

This is an amortized surrogate. Training pays for a dataset of PDE solves and optimization; inference can then be cheap for new inputs drawn from a sufficiently similar distribution. It does not enforce the PDE merely by being called an operator, and its answer is not accompanied automatically by the stability, conservation, or error certificate of a verified numerical method.

## From an integral kernel to spectral convolution

Suppose first that the computational domain is the $d$-torus $D=\mathbb T^d$. A translation-invariant kernel has the form $\kappa_t(x,y)=\kappa_t(x-y)$, so

$$
(\mathcal K_t v)(x)=\int_D \kappa_t(x-y)v(y)\,dy=(\kappa_t*v)(x).
$$

For latent channels $p,q$, expand

$$
v_q(x)=\sum_{k\in\mathbb Z^d}\widehat v_q(k)e^{2\pi i k\cdot x},
\qquad
\kappa_{pq}(x)=\sum_{k\in\mathbb Z^d}\widehat\kappa_{pq}(k)e^{2\pi i k\cdot x}.
$$

The convolution theorem gives

$$
\widehat{(\mathcal K_t v)}_p(k)
=\sum_{q=1}^{d_v}R_{t,pq}(k)\widehat v_q(k),
\qquad R_t(k)=\widehat\kappa_t(k).
$$

Thus each spatial frequency receives its own learned complex channel-mixing matrix. If $\mathcal F$ denotes the Fourier transform, the layer is compactly

$$
\mathcal K_t v=\mathcal F^{-1}\!\left(R_t\,\mathcal Fv\right).
$$

On an $n_1\times\cdots\times n_d$ uniform grid, channelwise FFTs evaluate the transform in $O(d_vN\log N)$ operations, $N=\prod_j n_j$. The multiplier work costs roughly $O(d_v^2|K|)$ when a retained set $K$ contains $|K|$ modes. Reality of the physical field requires Hermitian symmetry: $\widehat v(-k)=\overline{\widehat v(k)}$. Real-to-complex implementations store only an independent half-spectrum along one axis and must handle positive and negative modes consistently on the others.

The learned multiplier is not a Fourier transform of the data and is not a fixed spectral PDE solver symbol. It is a trainable tensor $R_t(k)$, shared across spatial samples but different across modes and layers. Several layers plus nonlinearities make the total map nonlinear even though each spectral convolution is linear in $v_t$.

## What mode truncation does

In practice FNO keeps only a rectangular or otherwise prescribed low-frequency set,

$$
K_m=\{k\in\mathbb Z^d:|k_j|\le m_j\},
$$

and sets the multiplier to zero outside it:

$$
\mathcal K_t^{(m)}v
=\mathcal F^{-1}\!\left(\mathbf 1_{K_m}(k)R_t(k)\widehat v(k)\right).
$$

This reduces parameters and computation and encodes the prior that the solution operator is dominated by coherent large scales. For smooth elliptic solutions, diffusion-dominated dynamics, or observables insensitive to fine scales, that prior can be excellent. It is less credible for shocks, thin layers, rough coefficients, high-frequency waves, turbulence near the dissipation cutoff, or outputs whose error is controlled by localized extremes.

Mode truncation is a projection, not aliasing. It discards the spectral-path contribution outside $K_m$. Nor does a cutoff of $m$ imply that every intermediate latent field is band-limited to $m$: the pointwise $W_tv_t$ path passes grid-resolved content, and the nonlinearity manufactures new frequencies.

The cutoff also controls the smallest scale to which the learned nonlocal kernel can respond directly. Increasing the evaluation grid from $n$ to $2n$ while holding $m$ fixed samples the same learned low-frequency multiplier more finely; it does not create learned weights for the newly available Fourier modes. A model can return a smoother-looking array at higher resolution while conveying essentially the same low-band information.

## Aliasing is created between spectral layers

Consider a one-dimensional latent field band-limited to $|k|\le m$ before a quadratic nonlinearity. If $z(x)=v(x)^2$, then

$$
\widehat z(k)=\sum_{p+q=k}\widehat v(p)\widehat v(q),
$$

so $z$ can contain modes through $2m$. A general activation is not polynomial and can generate an unbounded harmonic series. On an $n$-point grid, the discrete Fourier transform identifies frequencies separated by $n$:

$$
\widehat z_n(k)=\sum_{\ell\in\mathbb Z}\widehat z(k+\ell n).
$$

Unresolved nonlinear frequencies therefore fold into resolved bins. This is the same sampling mechanism derived in [[Spectral methods and aliasing]], but its role in an FNO is easy to miss: the spectral multiplication itself is linear and creates no new modes; the physical-space activation creates them, and the next FFT aliases whatever the grid cannot resolve.

Lanthaler, Stuart, and Trautner analyze this discretization error for FNOs and obtain algebraic convergence rates governed by input regularity. Their result explains both sides of resolution transfer: under suitable smoothness, discrete evaluations approach a continuum FNO as the grid is refined; at any finite grid, nonlinear aliasing means that evaluations are not literally the same continuous operator sampled exactly.

Aliasing is worse than truncation because it places unresolved content in the wrong retained mode. A training procedure can partly adapt to the aliases present at its training resolution, making a subsequent change of grid alter the effective layer map. Consequently, “same parameters run at another resolution” is an architectural property; “same physical prediction at another resolution” is an empirical and analytical question.

## Padding, zero-padding, and dealiasing are different operations

Three practices are often conflated.

**Domain padding** extends a nonperiodic input beyond its physical interval before applying an FFT and crops the result afterward. It moves the artificial periodic seam away from the region of interest and can reduce wraparound contamination. Zero padding, reflection padding, learned extension, and Fourier continuation impose different extensions. None automatically makes the extension smooth, and a jump where the extension meets itself still produces slow Fourier decay and Gibbs oscillations.

**FFT zero-padding for interpolation** inserts zeros into a spectrum and transforms to a denser grid. For a genuinely band-limited field this evaluates the same trigonometric polynomial at more points. It adds no physical information and, by itself, does not remove aliases already created by a nonlinear operation.

**Dealiasing or oversampling a nonlinear layer** temporarily represents the retained field on a sufficiently fine grid, applies the nonlinearity there, transforms back, and projects to the desired band. For a quadratic product with target band $|k|\le m$, the classical $3/2$ padding rule can compute the retained Galerkin convolution exactly, provided the inputs are band-limited appropriately. The common sequence is: transform retained coefficients to a grid enlarged by $3/2$, multiply pointwise, transform back, then discard the upper modes. Merely padding a spatial array on its boundary is not this operation.

For general activations, no finite padding factor makes every generated harmonic exact. Oversampling reduces aliasing. Smooth activations, spectral filtering, or projection after activation can limit bandwidth and reduce aliasing in later operations, but they cannot remove contamination that has already folded into retained modes on an under-resolved grid. Removing those aliases requires evaluating the nonlinearity with sufficient oversampling or another dealiasing construction before restricting the representation. Each intervention changes approximation and cost. Dealiasing every learned layer is also not standard in the original FNO. A credible implementation should state which padding is used, where it occurs, whether normalization conventions are preserved, and which modes are cropped.

## Resolution transfer: capability and test

Because $R_t(k)$ is indexed by modes rather than grid points, the same weights can be embedded in any FFT grid whose Nyquist limits exceed the retained $m_j$. This permits zero-shot super-resolution in the narrow operational sense: train on one uniform grid and evaluate on a finer one without changing parameters.

Several conditions must hold before interpreting that evaluation as a trustworthy approximation to $\mathcal G^\dagger$:

1. **The input must be supplied consistently.** Sampling a rough coefficient on a fine grid contains information absent from its coarse training samples. The network cannot have learned how unseen subgrid structure affects the solution. Conversely, interpolating a coarse input to a fine grid adds samples, not information.
2. **The retained modes must resolve the operator’s relevant response.** A fine output grid cannot compensate for an aggressively fixed cutoff. Report error by frequency band and against fine-grid truth, not only a global norm.
3. **Normalization must represent functions rather than arrays.** FFT scaling, quadrature weights, loss norms, coordinate scaling, and statistics must be resolution consistent. An unweighted Euclidean loss changes meaning with sample count unless normalized appropriately.
4. **Aliasing must converge acceptably.** Evaluate the same continuous test inputs on a grid ladder, compare interpolated outputs in a common norm, and verify that discrepancies decrease. Smooth test data are not enough if deployment includes discontinuities.
5. **The physical distribution must remain in scope.** Grid refinement is not generalization to new Reynolds numbers, coefficients, forcings, boundary types, geometries, or time horizons.

A strong audit separates four errors: error in generating reference solutions, sampling/discretization error in input and output fields, statistical/operator-approximation error from finite data and optimization, and FNO evaluation error from truncation and aliasing. Reporting only test error at the training grid entangles all four.

## Boundary and domain assumptions

The ordinary FFT implements convolution on a rectangular periodic domain. Periodic PDEs are therefore the cleanest match. On a bounded nonperiodic interval, the FFT silently periodizes the latent field; values near opposite boundaries interact through the kernel. Adding coordinates tells the network where a boundary is but does not remove wraparound. Padding and cropping may mitigate it, yet boundary behavior becomes an architectural and data-dependent approximation rather than an exact boundary treatment.

Dirichlet, Neumann, Robin, and mixed conditions can be encoded in inputs, lifting functions, masks, or output transformations. Exact enforcement requires a construction designed for it—for example, predicting a correction multiplied by a function that vanishes on a Dirichlet boundary. Training examples that satisfy a boundary condition only encourage its reproduction; they do not certify it outside the sample distribution.

The standard multidimensional FFT also assumes a uniform tensor grid. Curved domains, holes, changing geometries, and unstructured meshes require an embedding/mask, a coordinate deformation to a regular latent domain, a nonuniform transform, or a different neural operator. Geo-FNO learns a deformation into a computational domain, illustrating that geometry handling is an additional learned component with its own approximation error. Spherical domains call for basis functions and transforms compatible with the sphere rather than treating latitude–longitude seams and poles as an ordinary periodic rectangle.

Translation-invariant spectral kernels are globally supported: changing an input locally can affect every output location in one layer. That is useful for elliptic and long-range interactions, but it is not automatically compatible with finite propagation speed, locality, causality, or heterogeneous interfaces. Coordinate channels and nonlinear composition increase expressivity without turning the architecture into a theorem about those physical structures.

## Evidence, use, and limitations

The original FNO study reported competitive errors and large inference speedups on benchmark maps including Burgers, Darcy flow, and two-dimensional Navier–Stokes, along with evaluation across resolutions. The broader neural-operator framework proves universal approximation for suitable continuous operators and explains parameter sharing across discretizations. These results establish expressivity and demonstrate amortized performance on particular distributions; they do not say that a finite trained model approximates every PDE solution operator, that optimization finds the approximant, or that a speed comparison includes data-generation and training cost.

For repeated-query settings—ensembles, inverse problems, design loops, or data assimilation—amortization can dominate. For a single solve, a classical solver may be cheaper and more reliable. Distribution shift is the decisive hazard: small coefficient changes can move a PDE across regimes, long autoregressive rollouts can accumulate phase and amplitude errors, and chaotic trajectories make pointwise forecast error inevitable even when statistics remain useful. Relative $L^2$ error can conceal boundary violations, mass drift, wrong shock speed, unstable spectra, or rare extremes.

A defensible validation suite should include:

- comparison with independently verified reference solutions on both training and deployment grids;
- grid-transfer tests in both directions, with common physical norms and spectra;
- boundary residuals, PDE residuals, conservation or energy budgets where relevant;
- adversarial or structured out-of-distribution sweeps over parameters and roughness;
- ablations over retained modes, padding, depth, and training resolution;
- timing that separates dataset construction, training, inference, memory, and break-even query count;
- calibrated uncertainty or an abstention/fallback rule for deployment.

FNO is therefore best understood as a learned, globally coupled, low-mode operator model. Its Fourier structure is a useful inductive bias and an efficient implementation device—not evidence that spectral accuracy, PDE consistency, stability, or boundary correctness has been inherited from classical spectral solvers.

## Sources

- Zongyi Li et al., “Fourier Neural Operator for Parametric Partial Differential Equations,” ICLR 2021. [OpenReview paper](https://openreview.net/forum?id=c8P9NQVtmnO) · [author implementation](https://github.com/neuraloperator/neuraloperator).
- Nikola Kovachki et al., “Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs,” *Journal of Machine Learning Research* 24(89), 2023. [JMLR article and PDF](https://www.jmlr.org/papers/v24/21-1524.html).
- Samuel Lanthaler, Andrew M. Stuart, and Margaret Trautner, “Discretization Error of Fourier Neural Operators,” 2024. [arXiv record](https://arxiv.org/abs/2405.02221).
- Zongyi Li, Daniel Zhengyu Huang, Burigede Liu, and Anima Anandkumar, “Fourier Neural Operator with Learned Deformations for PDEs on General Geometries,” *Journal of Machine Learning Research* 24(388), 2023. [JMLR article and PDF](https://www.jmlr.org/papers/v24/23-0064.html).
- Steven A. Orszag, “On the Elimination of Aliasing in Finite-Difference Schemes by Filtering High-Wavenumber Components,” *Journal of the Atmospheric Sciences* 28 (1971). [DOI](https://doi.org/10.1175/1520-0469(1971)028%3C1074:OTEOAI%3E2.0.CO;2).

## Open questions

- Which activations and oversampling strategies give the best error–cost tradeoff for controlling layerwise aliasing without sacrificing sharp features?
- How should resolution-transfer guarantees be extended to rough coefficients, shocks, and stochastic inputs whose regularity is below current convergence assumptions?
- Can boundary-compatible bases and exact physical constraints retain the computational advantages of standard FFT-based FNOs on complex domains?
