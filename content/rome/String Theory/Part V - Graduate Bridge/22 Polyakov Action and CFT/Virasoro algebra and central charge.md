---
title: Virasoro algebra and central charge
number: "22.9"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, polyakov-cft]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The modes $L_n$ of the worldsheet stress tensor obey the **Virasoro algebra** $[L_m,L_n]=(m-n)L_{m+n}+\tfrac{c}{12}m(m^2-1)\,\delta_{m+n,0}$: the classical symmetry algebra of conformal transformations, plus one purely quantum correction whose size $c$ — the **central charge** — counts the theory's degrees of freedom and must total zero for the string to be consistent.

## The anomaly in one number

The conformal transformations of the worldsheet form a symmetry, and every symmetry has generators with an algebra. Classically that algebra is rigid and well known (the **Witt algebra**). Quantizing adds exactly one new term — a c-number that no rearrangement of operators can remove. That term is an **anomaly**: a classical symmetry that the quantum theory cannot quite keep. Its strength is a single number $c$, and the whole drama of the bosonic string — *why 26 dimensions?* — is the demand that this anomaly cancel.

One way to picture $c$: it is the "zero-point noise" the vacuum makes when you try to run a conformal transformation on it. Empty space has more structure quantum-mechanically than classically, and $c$ measures how much. You cannot make it go away in any single sector; you can only arrange for the sectors to cancel.

## From constraints to operators

The classical [[Virasoro constraints]] say the [[Worldsheet stress tensor]] vanishes, $T(z)=0$. Since $T(z)$ is holomorphic it has a Laurent expansion, and its coefficients are the operators we care about:
$$T(z)=\sum_{n\in\mathbb Z}\frac{L_n}{z^{n+2}},\qquad L_n=\frac{1}{2\pi i}\oint dz\,z^{n+1}\,T(z).\tag{1}$$
The contour integral just extracts a Laurent coefficient. Physically, $L_n$ is the conserved charge generating the conformal transformation $\delta z=z^{n+1}$ — its Noether current is $z^{n+1}T(z)$, and the contour is a spatial slice. So $L_{-1}$ generates translations, $L_0$ generates scaling (it is the energy/dilatation operator), and $L_1$ generates special conformal maps.

For $D$ free bosons — the string's embedding coordinates — the same $L_n$ can be written directly in oscillators:
$$L_n=\frac12\sum_{p\in\mathbb Z}\alpha_{n-p}\cdot\alpha_p,\qquad [\alpha^\mu_m,\alpha^\nu_n]=m\,\eta^{\mu\nu}\delta_{m+n,0}.\tag{2}$$
The dot sums over **all** spacetime directions $\mu=0,\dots,D-1$, timelike included — these are the *covariant* Virasoro operators, unlike the transverse $L_n^\perp$ of light-cone gauge ([[Transverse Virasoro operators]]). Quantum-mechanically $L_0$ needs [[Normal ordering constant|normal ordering]] because $\alpha_{-p}$ and $\alpha_p$ do not commute; the other $L_n$ do not.

The classical statement "$T=0$" cannot survive as "$L_n=0$ for all $n$" in the quantum theory — the algebra below shows why — so it weakens to $L_{n>0}\lvert\psi\rangle=0$ on physical states (see [[Virasoro constraints]]).

## The algebra

$$\boxed{\,[L_m,L_n]=(m-n)\,L_{m+n}+\frac{c}{12}\,m(m^2-1)\,\delta_{m+n,0}\,}\tag{3}$$

Piece by piece:

- **$(m-n)L_{m+n}$ — the Witt algebra.** This is the classical algebra of conformal transformations, and it is purely structural (no $\hbar$, no $c$). You can check it directly from the vector fields $\ell_n=-z^{n+1}\partial_z$ that generate $\delta z=z^{n+1}$: the Leibniz rule gives $[\ell_m,\ell_n]=(m-n)\ell_{m+n}$. This term alone is the *entire classical content*.
- **$\frac{c}{12}m(m^2-1)\,\delta_{m+n,0}$ — the central extension.** A c-number (proportional to the identity), nonzero only when $m+n=0$, and **purely quantum**: it arises from normal-ordering the operator product inside $T$. The constant $c$ is the **central charge**. "Central" means it commutes with everything — it sits in the center of the algebra.

Two consistency checks are built into the structure of (3):

- **The global subgroup is anomaly-free.** The central term carries $m(m^2-1)$, which vanishes at $m=0,\pm1$. So $\{L_{-1},L_0,L_1\}$ close *without* any anomaly. These generate the global conformal group of the sphere, $SL(2,\mathbb C)$ (translation, dilation/rotation, special conformal) — the maps that are globally well-defined, one-to-one, and invertible. The anomaly is an obstruction only for the *local* transformations that are singular somewhere.
- **Antisymmetry.** Under $m\leftrightarrow n$ with $m+n=0$, $m(m^2-1)\to -m(m^2-1)$, matching $[L_m,L_n]=-[L_n,L_m]$.

## Where the central charge comes from

Two routes give the same $c$. Both make the same point: **the central term is the quartic short-distance singularity of $T$ with itself.**

### Route 1 — the oscillator commutator

Compute $[L_m,L_n]$ from (2) using $[\alpha_m,\alpha_n]=m\,\eta\,\delta_{m+n,0}$. The double sum produces the Witt term $(m-n)L_{m+n}$ plus a leftover c-number from reordering oscillators past each other. That leftover is
$$\frac{c}{12}m(m^2-1),\qquad c=\eta_{\mu\nu}\eta^{\mu\nu}=D.$$
The coefficient is the *trace of the spacetime metric*, $\eta_{\mu\nu}\eta^{\mu\nu}=D$ — one unit per dimension. The timelike direction contributes $+1$ just like the spacelike ones: it enters the central term through a pair of contractions, and a pair of $\eta^{00}=-1$ factors multiply to $+1$. So **$c=D$ for $D$ free bosons.**

### Route 2 — the $TT$ OPE (the CFT-native computation)

The central charge is *defined* as the coefficient of the quartic pole in the stress-tensor self-OPE:
$$T(z)\,T(w)=\frac{c/2}{(z-w)^4}+\frac{2T(w)}{(z-w)^2}+\frac{\partial T(w)}{z-w}+\ldots\tag{4}$$
The $(z-w)^{-2}$ and $(z-w)^{-1}$ terms just say $T$ has weight $2$ (it is a dimension-2, spin-2 object). The $(z-w)^{-4}$ term is new: it is the reason $T$ is *not* primary. For one free boson the Wick contractions give $c/2=1/2$, i.e. $c=1$ per boson (worked in [[Free boson OPEs]]), so again $c=D$.

**Turning (4) into (3).** The two are the same fact. Write $L_m=\oint\frac{dz}{2\pi i}z^{m+1}T(z)$ and $L_n=\oint\frac{dw}{2\pi i}w^{n+1}T(w)$. In radial quantization $L_mL_n$ has the $z$-contour outside the $w$-contour and $L_nL_m$ has them swapped; subtracting collapses the $z$-integral to a small circle around $w$, leaving a residue:
$$[L_m,L_n]=\oint\frac{dw}{2\pi i}\,w^{n+1}\operatorname*{Res}_{z=w}\!\Big[z^{m+1}\,T(z)T(w)\Big].$$
The commutator is a *local collision*: only the singular OPE terms contribute to the residue. Taylor-expand the smooth factor $z^{m+1}$ about $w$,
$$z^{m+1}=w^{m+1}+(m+1)w^m(z-w)+\tfrac{m(m+1)}{2}w^{m-1}(z-w)^2+\tfrac{m(m^2-1)}{6}w^{m-2}(z-w)^3+\ldots,$$
and pair each power of $(z-w)$ against the matching pole in (4). The simple pole meets $w^{m+1}$, the double pole meets the $(m+1)w^m$ term, and — crucially — the *quartic* pole needs the cubic Taylor coefficient $\tfrac{m(m^2-1)}{6}$:
$$\operatorname*{Res}_{z=w}\!\Big[z^{m+1}T(z)T(w)\Big]=w^{m+1}\partial T(w)+2(m+1)w^m\,T(w)+\frac{c}{12}\,m(m^2-1)\,w^{m-2}.$$
Now do the $w$-integral. Integrate the first term by parts, $\oint\frac{dw}{2\pi i}w^{m+n+2}\partial T=-(m+n+2)\oint\frac{dw}{2\pi i}w^{m+n+1}T$, and combine with the second:
$$\big[-(m+n+2)+2(m+1)\big]\oint\frac{dw}{2\pi i}\,w^{m+n+1}T(w)=(m-n)\,L_{m+n}.$$
The central term has no operator left, just a coefficient-extracting contour:
$$\frac{c}{12}m(m^2-1)\oint\frac{dw}{2\pi i}\,w^{m+n-1}=\frac{c}{12}m(m^2-1)\,\delta_{m+n,0}.$$
Adding these reproduces (3) exactly. The factor $m(m^2-1)$ traces straight back to the *third* Taylor coefficient — which is why the anomaly needs a *quartic* pole and vanishes for the low modes $m=0,\pm1$, whose cubic term is absent.

## What the central charge means

Four faces of the same number; any two of them make a working intuition.

**1. It counts degrees of freedom.** One free boson has $c=1$; $D$ non-interacting bosons give $c=D$ (the quartic poles just add). So $c$ is a measure of "how much stuff" the CFT contains — though it need not be an integer. This is made sharp by **Zamolodchikov's $c$-theorem**: a quantity that equals $c$ at conformal points decreases monotonically along renormalization-group flow, $c_{\text{UV}}\ge c_{\text{IR}}$. Integrating out high-energy modes can only lose degrees of freedom.

**2. It is the anomaly in how $T$ transforms.** Because of the quartic pole, $T$ is not a tensor. Under a finite conformal map $z\to\tilde z(z)$ it picks up an inhomogeneous **Schwarzian** term:
$$\tilde T(\tilde z)=\Big(\frac{\partial\tilde z}{\partial z}\Big)^{-2}\Big[T(z)-\frac{c}{12}\,S(\tilde z,z)\Big],\qquad S=\frac{\tilde z'''}{\tilde z'}-\frac32\Big(\frac{\tilde z''}{\tilde z'}\Big)^2.\tag{5}$$
The Schwarzian vanishes for global $SL(2,\mathbb C)$ maps — matching the anomaly-free subalgebra above — but not for general conformal maps. So $c$ is literally the obstruction to $T$ being a good tensor: no anomaly means $c=0$ means $T$ transforms cleanly.

**3. It is a physical energy — the cylinder Casimir.** The Schwarzian term does not depend on $T$, so it shifts every state's energy by the same constant: a vacuum energy. Mapping the cylinder to the plane ($z=e^{-iw}$) has Schwarzian $S=1/2$, and the ground-state energy on the cylinder comes out
$$E=-\frac{2\pi(c+\bar c)}{24}.\tag{6}$$
For one boson ($c=\bar c=1$) this is $E=-\pi/6$, i.e. energy density $E/(2\pi)=-1/12$ — the familiar $-1/12$ of the zero-point sum, but here it appears *with no divergent sum to regulate*. The central charge **is** the finite Casimir energy of conformal symmetry.

**4. It is the Weyl (trace) anomaly.** On a curved worldsheet the stress tensor is no longer traceless; instead
$$\langle T^\alpha{}_\alpha\rangle=-\frac{c}{12}\,R,\tag{7}$$
with $R$ the worldsheet Ricci scalar (cf. [[Weyl invariance]]). Classically $T^\alpha{}_\alpha=0$ is exactly the conformal symmetry; a nonzero $c$ is the statement that regulating short-distance divergences leaves a curvature-dependent footprint the symmetry cannot erase.

(A fifth face, **Cardy's formula** $S(E)\sim 2\pi\sqrt{cE/6}$, makes $c$ control the high-energy density of states — the entropy of the CFT.)

## Why $c=0$ forces $D=26$

Faces 3 and 4 are why the string cares. On the string worldsheet, conformal (Weyl) invariance is not a bonus symmetry — it is a *gauge* symmetry, the leftover freedom after fixing the auxiliary metric to conformal gauge. A gauge symmetry with an anomaly is fatal: the theory would depend on the unphysical Weyl factor. So consistency demands the **total** central charge vanish.

Add up the sectors of the gauge-fixed Polyakov string:
$$c_{\text{total}}=\underbrace{c_{\text{matter}}}_{=\,D,\ \text{embedding }X^\mu}+\underbrace{c_{\text{gh}}}_{=\,-26,\ bc\text{ ghosts}}=D-26=0\;\Longrightarrow\;D=26.$$
The critical dimension is nothing more mystical than the no-Weyl-anomaly condition. The ghost value $c=-26$ comes from Faddeev–Popov quantization of the diffeomorphism gauge-fixing and is **not derived here** — see [[The bc ghost CFT]] and [[Total central charge and D = 26]].

## States: primaries, descendants, the spectrum

Hermiticity of the Hamiltonian forces $L_n^\dagger=L_{-n}$. A **primary state** is annihilated by every positive mode, $L_n\lvert\psi\rangle=\bar L_n\lvert\psi\rangle=0$ for $n>0$, and is an $L_0,\bar L_0$ eigenstate with **weights** $(h,\bar h)$ — the lowest-energy state of its tower. Acting with negative modes $L_{-n}$ builds **descendants**; the primary and all its descendants form a **Verma module**. If null states (zero-norm descendants) appear, the physical representation is the quotient by them. Knowing the primaries, their weights, and which nulls are quotiented determines the spectrum — this is the representation-theoretic version of "build the string spectrum."

Two positivity facts, both from (3), constrain a *unitary* CFT. Take $\lvert\psi\rangle$ a primary of weight $h$, so $L_1\lvert\psi\rangle=0$ and $\lVert L_{-1}\lvert\psi\rangle\rVert^2=\langle\psi\rvert L_1L_{-1}\lvert\psi\rangle=\langle\psi\rvert[L_1,L_{-1}]\lvert\psi\rangle$:
$$\lVert L_{-1}\lvert\psi\rangle\rVert^2=\langle\psi\rvert[L_1,L_{-1}]\lvert\psi\rangle=2h\,\langle\psi|\psi\rangle\ge0\;\Rightarrow\;h\ge0,$$
$$\lVert L_{-n}\lvert 0\rangle\rVert^2=\langle 0\rvert[L_n,L_{-n}]\lvert 0\rangle=\frac{c}{12}\,n(n^2-1)\ge0\;\Rightarrow\;c\ge0.$$
The second uses the central term directly (the Witt part annihilates the vacuum). So *any* unitary CFT has $c\ge0$ — which is exactly why the ghost sector, with its $c=-26$, cannot be unitary on its own, and why the full string needs the BRST machinery to remove negative-norm states.

## Open questions

- **Ghost central charge.** $c_{\text{gh}}=-26$ is quoted, not derived. That derivation needs Faddeev–Popov quantization and the $bc$-ghost CFT — see [[The bc ghost CFT]] and [[Total central charge and D = 26]].
- **Representation frontier.** The full Kac-determinant story of which $(h,c)$ allow null states, and the minimal-model classification for $c<1$, is beyond this bridge; only the basic Virasoro-module logic is needed here.

## Exercise

The central term in (3) is fixed by three numbers. Suppose someone hands you a would-be anomaly of the form $[L_m,L_n]\supset A(m)\,\delta_{m+n,0}$ with an unknown odd polynomial $A(m)=\alpha m^3+\beta m$. Two physical inputs pin it down completely up to overall normalization. Find $A(m)$ (up to a constant) using:

(a) **Antisymmetry / Jacobi.** Why must $A(m)$ be an *odd* function of $m$?

(b) **The anomaly-free global subalgebra.** Which values of $m$ must give $A(m)=0$, and why? Use this to fix the ratio $\alpha/\beta$.

> [!success]- Solution
> **(a)** The bracket is antisymmetric: $[L_m,L_n]=-[L_n,L_m]$. On the central term, swapping $m\leftrightarrow n$ under the constraint $m+n=0$ sends $n=-m\mapsto m$, i.e. $m\mapsto -m$. Antisymmetry then demands $A(-m)=-A(m)$, so $A$ is odd. (An even piece like a constant or $m^2$ term is forbidden — this is why $m^2$ never appears alone, only inside $m(m^2-1)=m^3-m$.) Hence $A(m)=\alpha m^3+\beta m$ is the most general odd cubic; higher odd powers are excluded because the $TT$ OPE can be no more singular than a quartic pole (a $(z-w)^{-4}$ term), which supplies at most the *cubic* Taylor coefficient $\propto m(m^2-1)$.
>
> **(b)** The generators $L_{-1},L_0,L_1$ generate the global conformal group $SL(2,\mathbb C)$, which is genuinely a symmetry — those maps are globally well-defined, so they *cannot* be anomalous. Therefore $A(m)=0$ for $m=0,\pm1$. The value $m=0$ is automatic for any odd $A$. Requiring $A(1)=0$ gives
> $$\alpha+\beta=0\;\Longrightarrow\;\beta=-\alpha,$$
> so $A(m)=\alpha(m^3-m)=\alpha\,m(m^2-1)$. Writing the normalization as $\alpha=c/12$ recovers exactly the central term of (3). The two inputs — oddness and an anomaly-free $SL(2,\mathbb C)$ — determine the entire structure $m(m^2-1)$; only the single number $c$ is left for the dynamics to fix.
