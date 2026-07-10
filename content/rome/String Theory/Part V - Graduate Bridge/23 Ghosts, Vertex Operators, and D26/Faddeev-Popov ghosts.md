---
title: Faddeev-Popov ghosts
number: "23.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, ghosts-d26]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---
Gauge-fixing the sum over worldsheet metrics leaves a Jacobian — the Faddeev–Popov determinant — which we rewrite as a path integral over anticommuting ghost fields $b,c$ that then live in the action alongside $X^\mu$.

## Why summing over all metrics overcounts

The Polyakov path integral sums over string embeddings $X^\mu$ **and** worldsheet metrics $g_{\alpha\beta}$. But two metrics related by a diffeomorphism or a Weyl rescaling describe the *same physics* — they are relabelings, not different worlds. Summing over all metrics therefore counts every physical configuration infinitely many times, once for each way of relabeling it.

The fix is exactly what you do for any integral with a redundant coordinate: **pick one representative per orbit and account for the change of variables with a Jacobian.** Slice through the gauge orbits once, and multiply by the density of orbits along the slice. In an ordinary integral that density is $|f'|$; here it is a functional determinant, the Faddeev–Popov (FP) determinant.

The one twist specific to this setting is that the natural way to *write* that determinant as a local field theory forces the new fields to **anticommute despite being tensors**. Those are the ghosts $b,c$. They are not particles — they are the Jacobian, dressed up as fields so it can sit in the action. Everything downstream ($c_{\text{gh}}=-26$, and hence $D=26$) is a computation *about* these fields.

We work in Euclidean signature on the worldsheet throughout (this is the path-integral convention); spacetime signature is mostly-plus, and we only rotate back when reading off masses much later. [[Polyakov action]] · [[Weyl invariance]]

## The problem: dividing by the gauge volume

$$Z=\frac{1}{\text{Vol}}\int \mathcal{D}g\,\mathcal{D}X\;e^{-S_{\text{Poly}}[X,g]},\qquad S_{\text{Poly}}=\frac{1}{4\pi\alpha'}\int d^2\sigma\,\sqrt{g}\,g^{\alpha\beta}\partial_\alpha X^\mu\partial_\beta X^\nu\,\delta_{\mu\nu}.$$

Here $\delta_{\mu\nu}$ is the Euclidean target metric; it becomes mostly-plus Minkowski on continuation. The $1/\text{Vol}$ is a placeholder for "don't overcount gauge copies" — our job is to make it concrete.

Two dimensions is special: the gauge freedom is large enough that *locally* we can bring any metric to a fixed **fiducial** form $\hat g$. The standard choice is **conformal gauge** $\hat g_{\alpha\beta}=e^{2\omega}\delta_{\alpha\beta}$. The FP procedure changes variables from "all metrics" to "(fiducial metric) $\times$ (gauge orbit)" and tracks the Jacobian.

## The Faddeev–Popov trick

Call a gauge transformation (diffeo + Weyl) $\zeta$, with $\hat g^{\,\zeta}$ its action on $\hat g$. **Define** the FP determinant by insisting that integrating over the gauge orbit, weighted by $\Delta_{\text{FP}}$, gives exactly $1$:
$$1=\Delta_{\text{FP}}[g]\int \mathcal{D}\zeta\;\delta\!\left(g-\hat g^{\,\zeta}\right).\tag{1}$$
This is the functional version of the one-dimensional identity
$$\int dx\,\delta\big(f(x)\big)=\frac{1}{|f'(x_\ast)|},\qquad f(x_\ast)=0.$$
Read (1) right to left: the orbit integral $\int\mathcal D\zeta\,\delta(\cdots)$ produces an *inverse* Jacobian (the $1/|f'|$), so $\Delta_{\text{FP}}$ is defined to be the Jacobian itself — the factor that cancels it and restores unit weight.

Now insert this "$1$" into $Z$. The delta-function collapses the $\mathcal{D}g$ integral onto $g=\hat g^{\,\zeta}$; if the remaining integrand is genuinely gauge invariant, nothing depends on $\zeta$, so the orbit integral $\int\mathcal{D}\zeta$ factors out and **cancels the $1/\text{Vol}$**:
$$Z[\hat g]=\int \mathcal{D}X\;\Delta_{\text{FP}}[\hat g]\,e^{-S_{\text{Poly}}[X,\hat g]}.\tag{2}$$
We now integrate only over *physically distinct* configurations, with $\Delta_{\text{FP}}$ as the cost of the change of variables.

> [!warning] The "if genuinely gauge invariant" is the whole anomaly story
> Weyl invariance is anomalous: **both** the matter measure $\mathcal{D}X$ and the ghost determinant $\Delta_{\text{FP}}$ secretly fail to be Weyl invariant. The miracle of $D=26$ is that the two failures cancel. That cancellation is [[Total central charge and D = 26]]; here we only build $\Delta_{\text{FP}}$.

## Computing the determinant

Expand near the identity. An infinitesimal Weyl $\omega(\sigma)$ plus an infinitesimal diffeo $\delta\sigma^\alpha=v^\alpha(\sigma)$ change the metric by
$$\delta\hat g_{\alpha\beta}=\underbrace{2\omega\,\hat g_{\alpha\beta}}_{\text{Weyl (pure rescaling)}}+\underbrace{\nabla_\alpha v_\beta+\nabla_\beta v_\alpha}_{\text{diffeo (Lie derivative)}}.\tag{3}$$
This linear map from gauge parameters $(\omega,v)$ into metric variations is the "matrix" whose determinant we want. Its inverse determinant is the Gaussian integral over the parameters:
$$\Delta_{\text{FP}}^{-1}[\hat g]=\int \mathcal{D}\omega\,\mathcal{D}v\;\delta\!\left(2\omega\,\hat g_{\alpha\beta}+\nabla_\alpha v_\beta+\nabla_\beta v_\alpha\right).$$
Represent the functional delta by a Fourier "momentum" $\beta^{\alpha\beta}$, a symmetric tensor:
$$\Delta_{\text{FP}}^{-1}[\hat g]=\int \mathcal{D}\omega\,\mathcal{D}v\,\mathcal{D}\beta\;\exp\!\Big(2\pi i\int d^2\sigma\,\sqrt{\hat g}\;\beta^{\alpha\beta}\big[2\omega\hat g_{\alpha\beta}+\nabla_\alpha v_\beta+\nabla_\beta v_\alpha\big]\Big).$$
The $\omega$-integral carries no derivatives, so $\omega$ is a **Lagrange multiplier**: doing it enforces $\beta^{\alpha\beta}\hat g_{\alpha\beta}=0$, i.e. **$\beta$ is symmetric and traceless**. This is the load-bearing projection — the Weyl parameter exists precisely to kill the trace direction of the metric variation. (Downstream, this is *why* there is no $b_{z\bar z}$ ghost.) What survives is the pure diffeo determinant:
$$\Delta_{\text{FP}}^{-1}[\hat g]=\int \mathcal{D}v\,\mathcal{D}\beta\;\exp\!\Big(4\pi i\int d^2\sigma\,\sqrt{\hat g}\;\beta^{\alpha\beta}\nabla_\alpha v_\beta\Big).\tag{4}$$

## Inverting: commuting → anticommuting

Equation (4) is a *bosonic* Gaussian, so it computes an **inverse** determinant — we want the determinant itself. A finite-dimensional analogy shows how to flip it. For an ordinary matrix $M$, integrating over commuting versus anticommuting variables gives opposite answers:
$$\int d^n x\,d^n y\;e^{-x_i M_{ij} y_j}\propto\frac{1}{\det M},\qquad
\int d^n\bar\eta\,d^n\eta\;e^{-\bar\eta_i M_{ij}\eta_j}=\det M.$$
The bosonic Gaussian gives $\prod 1/\lambda_i$ (one $1/\lambda$ per eigenvalue); the Grassmann exponential truncates so only the top term survives, giving $\prod\lambda_i$. Anticommuting the fields moves the determinant from the denominator to the numerator — exactly the flip we need. So **replace the bosonic parameters by Grassmann fields**:
$$\beta_{\alpha\beta}\longrightarrow b_{\alpha\beta},\qquad v^\alpha\longrightarrow c^\alpha.$$

The whole reason $b,c$ anticommute is so their path integral computes $\det$ instead of $1/\det$. They inherit the index structure of what they replace:
- $c^\alpha$ is a **vector** (from the diffeo parameter $v^\alpha$),
- $b_{\alpha\beta}$ is a **symmetric traceless tensor** (from $\beta^{\alpha\beta}$ — no trace part).

Their integer-spin-but-anticommuting character violates spin–statistics, which is fine: they are not particles, they are the determinant. The replacement turns the oscillatory Fourier exponent of (4) into a Grassmann Gaussian, $\Delta_{\text{FP}}[g]=\int\mathcal{D}b\,\mathcal{D}c\;\exp\!\big(i\int d^2\sigma\,\sqrt{g}\,b_{\alpha\beta}\nabla^\alpha c^\beta\big)$; the residual factor of $i$ inherited from the delta-function representation (the $2\pi i$/$4\pi i$ of lines above) is a constant phase that the field rescaling absorbs. Rescaling to put a tidy $\tfrac1{2\pi}$ out front (a harmless change of overall normalization) then gives the **ghost action**:
$$\boxed{\;S_{\text{ghost}}=\frac{1}{2\pi}\int d^2\sigma\,\sqrt{g}\;b_{\alpha\beta}\nabla^\alpha c^\beta\;}\qquad\Longrightarrow\qquad \Delta_{\text{FP}}[g]=\int\mathcal{D}b\,\mathcal{D}c\;e^{-S_{\text{ghost}}}.\tag{5}$$

The full gauge-fixed partition function is then
$$Z[\hat g]=\int \mathcal{D}X\,\mathcal{D}b\,\mathcal{D}c\;\exp\!\big(-S_{\text{Poly}}[X,\hat g]-S_{\text{ghost}}[b,c,\hat g]\big).\tag{6}$$

## Ghosts on the same footing as $X$

Equation (6) is the destination. The ghosts entered as a bookkeeping Jacobian, but they now sit in the action **on exactly the same footing as the physical $X^\mu$.** This is what covariant quantization buys: instead of solving constraints to throw away two coordinate directions by hand (light-cone gauge, which sacrifices manifest Lorentz invariance), we keep all $D$ coordinates and add extra local fields whose job is to *silently subtract* the gauge modes. The subtraction is Lorentz-covariant because $b,c$ are honest worldsheet tensors — no preferred spacetime direction is ever chosen.

The chain of logic is short: gauge symmetry means overcounting; the Jacobian that corrects the overcounting can be written as anticommuting fields; those fields are the ghosts, and they carry a fixed amount of central charge ($-26$) that balances the matter contribution only at $D=26$. Their weights turn out to be $(h_b,h_c)=(2,-1)$ — dictated by the index structure "traceless tensor and vector" — and those weights are what force $c_{\text{gh}}=-26$ in [[The bc ghost CFT]].

## Open questions

- Factoring out $\int\mathcal{D}\zeta$ assumed **good gauge-fixing**: the slice hits each orbit exactly once. This fails at higher genus (Gribov-like ambiguities and moduli). Deferred to Module 24.
- The determinant has **zero modes** whenever there are residual conformal Killing vectors or moduli. This note handles only the local operator determinant; the finite-dimensional ghost insertions and moduli measure belong in Module 24.

## Exercise

Grassmann integration is the entire reason $b,c$ anticommute. Test that you believe the sign/orientation claim on a $1\times1$ example, then say why the physics demands the anticommuting version.

Take a single Grassmann pair $\eta,\bar\eta$ and a number $M\neq0$. Using $\int d\eta\,\eta=1$, $\int d\eta\,1=0$, and the truncation $e^{-\bar\eta M\eta}=1-\bar\eta M\eta$, evaluate $\int d\bar\eta\,d\eta\;e^{-\bar\eta M\eta}$. Compare to the bosonic $\int dx\,dy\;e^{-xMy}$ (with $M>0$). Which one equals $\det M$ (here just $M$), and which equals $1/\det M$? Then state, in one sentence, why the Faddeev–Popov procedure needs the Grassmann version specifically.

> [!success]- Solution
> **Grassmann.** Expand: $e^{-\bar\eta M\eta}=1-\bar\eta M\eta$ (higher terms vanish since $\eta^2=\bar\eta^2=0$). Integrate:
> $$\int d\bar\eta\,d\eta\,(1-\bar\eta M\eta)=\int d\bar\eta\,d\eta\,(1) -M\int d\bar\eta\,d\eta\,\bar\eta\eta.$$
> The first term integrates $1$ against $d\eta$ and gives $0$. For the second, reorder $\bar\eta\eta=-\eta\bar\eta$ and integrate innermost-first: $\int d\bar\eta\,d\eta\,\bar\eta\eta = -\int d\bar\eta\,\bar\eta\int d\eta\,\eta = -(1)(1)=-1$. So the whole integral is $-M\cdot(-1)=M=\det M$.
> **Bosonic.** $\int dx\,dy\;e^{-xMy}$ is the two-variable integral in the pair $(x,y)$ with off-diagonal coupling; it evaluates to $\propto 1/M = 1/\det M$. In the $n$-variable version $\int d^n x\,d^n y\;e^{-x^\top M y}$ the two families $x,y$ decouple eigenvalue-by-eigenvalue, each pair $(x_i,y_i)$ contributing a full $1/\lambda_i$, so the product is $\prod_i 1/\lambda_i = 1/\det M$ — the same $\prod 1/\lambda_i$ that appears in (4), and the commuting integral always lands the determinant in the *denominator*.
> **So:** the Grassmann integral gives $\det M$, the bosonic one gives $1/\det M$.
> **Why FP needs Grassmann:** the raw gauge-orbit integral (4) is bosonic and hands us $\Delta_{\text{FP}}^{-1}=1/\det(\nabla)$, but the change of variables needs $\Delta_{\text{FP}}=\det(\nabla)$ itself. Anticommuting fields are the only way to write a determinant (not its inverse) as a Gaussian path integral — that necessity, not any spacetime physics, is what makes the ghosts fermionic.
