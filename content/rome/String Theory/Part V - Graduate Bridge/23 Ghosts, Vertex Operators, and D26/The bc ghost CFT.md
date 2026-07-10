---
title: The bc ghost CFT
number: "23.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, ghosts-d26]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---
In conformal gauge the ghost action collapses to a free anticommuting theory — a holomorphic $b$ (weight $2$) and $c$ (weight $-1$) — whose $TT$ OPE carries central charge $c_{\text{gh}}=-26$, the number that will cancel $26$ dimensions of matter.

The ghosts came from [[Faddeev-Popov ghosts]] as bookkeeping: a Jacobian for slicing out the gauge redundancy of the worldsheet metric. Here we quantize them and read off one number, $c_{\text{gh}}=-26$. That number is the tax the gauge symmetry charges, expressed as negative central charge. It has to be paid by exactly $26$ free scalars, and that is where $D=26$ comes from ([[Total central charge and D = 26]]). Everything in this note is in service of extracting $-26$ honestly, sign by sign.

## From covariant to conformal gauge

The ghost action from the Faddeev–Popov procedure is
$$S_{\text{ghost}}=\frac{1}{2\pi}\int d^2\sigma\,\sqrt{g}\;b_{\alpha\beta}\nabla^\alpha c^\beta ,$$
with $b_{\alpha\beta}$ a symmetric **traceless** tensor and $c^\alpha$ a vector — they inherited these shapes from the gauge parameters they replaced (a traceless symmetric $\beta^{\alpha\beta}$ and the diffeo vector $v^\alpha$). Go to conformal gauge $\hat g_{\alpha\beta}=e^{2\omega}\delta_{\alpha\beta}$ in complex coordinates $z=\sigma^1+i\sigma^2$, where $\sqrt{g}=e^{2\omega}$ and $d^2\sigma=\tfrac12 d^2z$.

Two simplifications happen at once, and they are the whole reason the ghost CFT is easy:

1. **The covariant derivative becomes ordinary.** For $\nabla_{\bar z}c^z=\partial_{\bar z}c^z+\Gamma^z_{\bar z\alpha}c^\alpha$, the Christoffel symbol vanishes:
$$\Gamma^z_{\bar z\alpha}=\tfrac12 g^{z\bar z}\big(\partial_{\bar z}g_{\alpha\bar z}+\partial_\alpha g_{\bar z\bar z}-\partial_{\bar z}g_{\bar z\alpha}\big)=0 .$$
In conformal gauge the *only* nonzero metric component is the off-diagonal $g_{z\bar z}=\tfrac12 e^{2\omega}$. For $\alpha=\bar z$ every term carries a diagonal factor $g_{\bar z\bar z}=0$ and dies outright. For $\alpha=z$ the middle term dies the same way, but the outer two are $\partial_{\bar z}g_{z\bar z}$ and $-\partial_{\bar z}g_{z\bar z}$ — both built from the *nonzero* $g_{z\bar z}$, so they cancel rather than vanish individually. Either way $\Gamma^z_{\bar z\alpha}=0$, and covariant derivatives collapse to plain $\partial$.

2. **There is no $b_{z\bar z}$.** That component is the trace part, and $b_{\alpha\beta}$ is traceless. So the action splits into a holomorphic piece and an independent antiholomorphic copy:
$$S_{\text{ghost}}=\frac{1}{2\pi}\int d^2z\;\big(b\,\partial_{\bar z}c+\bar b\,\partial_z\bar c\big),\qquad b\equiv b_{zz},\ c\equiv c^z,\ \bar b\equiv b_{\bar z\bar z},\ \bar c\equiv c^{\bar z}.$$

Crucially, the action does not contain $\omega$ at all: $b_{zz}$ and $c^z$ are **Weyl-neutral** with these index placements. That neutrality is exactly what will fix their conformal weights. From here we keep only the holomorphic sector; the barred copy is identical.

## Equations of motion and OPEs

Varying $b$ and $c$ gives $\partial_{\bar z}b=\partial_{\bar z}c=0$: both fields are **holomorphic**, functions of $z$ alone. This is the defining feature of a chiral CFT — the dynamics is entirely in how singular the fields get as they collide.

Those collisions are the OPE. The propagator comes from the path-integral identity that inserting $\delta/\delta b$ integrates to zero, which gives $\partial_{\bar z}c(\sigma)\,b(\sigma')=2\pi\delta^2(\sigma-\sigma')$; using $\partial_{\bar z}(1/z)=2\pi\delta^2(z,\bar z)$ to invert it yields the singular short-distance behavior
$$b(z)\,c(w)\sim\frac{1}{z-w},\qquad c(z)\,b(w)\sim\frac{1}{z-w} .$$
These say $b$ and $c$ are conjugate — bringing one near the other produces a simple pole, exactly like $x$ and $p$ in ordinary quantum mechanics produce a commutator. There is **no** singularity in $b\,b$ or $c\,c$: like fields do not contract.

One warning that runs through every computation below: $b$ and $c$ **anticommute** (they are Grassmann). Sliding one past the other flips a sign, so the *order* in which fields are written is load-bearing. Two things generate signs: differentiating the pole $1/(z-w)$, and hopping Grassmann fields past each other to bring a contracted pair adjacent. We will see the first does all the work in the central charge and the second, for this system, quietly lands on $+$ — but keeping both explicit is the only way to trust the result.

## The stress tensor

The ghost stress tensor, after normal ordering, is
$$T(z)=2:\!\partial c\,b\!:+\,:\!c\,\partial b\!: .$$
The coefficient $2$ is not adjustable: it is the unique choice that makes $b$ and $c$ transform as the Weyl-neutral tensors $b_{zz}$ (weight $2$) and $c^z$ (weight $-1$) demanded by their indices — the general "$\lambda=2$ first-order system." We now verify those weights fall out of this $T$.

### $c$ has weight $h=-1$

Take $T(z)c(w)$ and keep single contractions. Contracting the $b$ in $T$ against $c(w)$ (using $b(z)c(w)\sim 1/(z-w)$):
$$T(z)\,c(w)\sim 2\frac{\partial c(z)}{z-w}-\frac{c(z)}{(z-w)^2}\sim -\frac{c(w)}{(z-w)^2}+\frac{\partial c(w)}{z-w}.$$
The last step Taylor-expands $c(z)$ and $\partial c(z)$ about $w$. Matching the primary form $T(z)\mathcal O(w)\sim \tfrac{h\,\mathcal O(w)}{(z-w)^2}+\tfrac{\partial\mathcal O(w)}{z-w}$, the double-pole coefficient is $h_c=-1$. The field $c=c^z$ carries an upper index, transforming like $\partial/\partial z$ (a vector), so it "shrinks" under zooming in — negative weight.

### $b$ has weight $h=2$

Same computation for $T(z)b(w)$, minding the Grassmann signs:
$$T(z)\,b(w)\sim \frac{2\,b(w)}{(z-w)^2}+\frac{\partial b(w)}{z-w}\quad\Longrightarrow\quad h_b=2.$$
Here $b=b_{zz}$ has two lower indices, transforming like $(dz)^2$ — a weight-$2$ tensor.

The pair $(h_b,h_c)=(2,-1)$ is pure index bookkeeping (diffeomorphism weights), which is the physical meaning of "Weyl-neutral": all the weight is diffeo weight. Note $h_b+h_c=1$, the hallmark of a first-order $bc$ system.

## The central charge: $c_{\text{gh}}=-26$

The number we came for lives in the $T(z)T(w)$ OPE. With $T=2A+B$ where $A=:\!\partial c\,b\!:$ and $B=:\!c\,\partial b\!:$,
$$T(z)T(w)=4\,A(z)A(w)+2\,A(z)B(w)+2\,B(z)A(w)+B(z)B(w).$$
The central charge sits in the strongest singularity, $1/(z-w)^4$, which needs **both** fields of $T(z)$ contracted with both fields of $T(w)$ — a double contraction.

**The single-pair contractions**, obtained by differentiating $\langle b\,c\rangle=\langle c\,b\rangle=1/(z-w)$:
$$
\partial c(z)\,b(w)\sim-\frac{1}{(z-w)^2},\quad
b(z)\,\partial c(w)\sim+\frac{1}{(z-w)^2},\quad
c(z)\,\partial b(w)\sim+\frac{1}{(z-w)^2},
$$
$$
\partial b(z)\,c(w)\sim-\frac{1}{(z-w)^2},\qquad
\partial c(z)\,\partial b(w)\sim-\frac{2}{(z-w)^3}.
$$
(Differentiating with respect to $z$ flips the sign; the two-derivative one strengthens to a cubic pole.)

For two normal-ordered bilinears $:\!XY\!:(z)$ and $:\!UV\!:(w)$, the fully double-contracted piece is *not* one product of contractions — it is the antisymmetric combination
$$-\,\langle X(z)U(w)\rangle\langle Y(z)V(w)\rangle+\langle X(z)V(w)\rangle\langle Y(z)U(w)\rangle .$$
The relative minus comes from anticommuting the Grassmann fields to bring each contracted pair adjacent: the crossed pairing ($X$–$U$, $Y$–$V$) needs one extra hop relative to the nested pairing ($X$–$V$, $Y$–$U$).

Here is the twist that governs the whole computation. In each of the four terms, both fields of $A$ or $B$ are the *same* species ($\partial c$ and $c$ are both $c$-type; $b$ and $\partial b$ are both $b$-type), and like fields do not contract. So the crossed pairing $\langle XU\rangle\langle YV\rangle$ always pairs $c$ with $c$ or $b$ with $b$ and vanishes; only the nested pairing $+\langle XV\rangle\langle YU\rangle$ ever survives. The antisymmetric hop sign never actually fires as a difference between two live pairings. Every minus that builds up to $-13$ therefore comes from the *other* source of signs: differentiating a propagator, $\partial_z\frac{1}{z-w}=-\frac{1}{(z-w)^2}$.

Apply the surviving pairing to each term:

$$
\begin{aligned}
4\,A(z)A(w)&:\ 4\big[+\langle\partial c\,b\rangle\langle b\,\partial c\rangle\big]
=4\Big(-\tfrac{1}{(z-w)^2}\Big)\Big(+\tfrac{1}{(z-w)^2}\Big)=-\frac{4}{(z-w)^4},\\
2\,A(z)B(w)&:\ 2\big[+\langle\partial c\,\partial b\rangle\langle b\,c\rangle\big]
=2\Big(-\tfrac{2}{(z-w)^3}\Big)\Big(\tfrac{1}{z-w}\Big)=-\frac{4}{(z-w)^4},\\
2\,B(z)A(w)&:\ 2\big[+\langle c\,b\rangle\langle\partial b\,\partial c\rangle\big]
=2\Big(\tfrac{1}{z-w}\Big)\Big(-\tfrac{2}{(z-w)^3}\Big)=-\frac{4}{(z-w)^4},\\
B(z)B(w)&:\ \big[+\langle c\,\partial b\rangle\langle\partial b\,c\rangle\big]
=\Big(+\tfrac{1}{(z-w)^2}\Big)\Big(-\tfrac{1}{(z-w)^2}\Big)=-\frac{1}{(z-w)^4}.
\end{aligned}
$$
Every term is negative, and they sum to
$$-\frac{4+4+4+1}{(z-w)^4}=-\frac{13}{(z-w)^4}.$$
Single contractions supply the subleading poles; Taylor-expanding then assembles them into the stress-tensor terms, giving the full OPE
$$T(z)\,T(w)\sim\frac{-13}{(z-w)^4}+\frac{2T(w)}{(z-w)^2}+\frac{\partial T(w)}{z-w}.$$
Comparing to the canonical form $T(z)T(w)\sim \tfrac{c/2}{(z-w)^4}+\tfrac{2T(w)}{(z-w)^2}+\tfrac{\partial T(w)}{z-w}$ that *defines* the central charge (see [[Virasoro algebra and central charge]]), the quartic coefficient $c/2=-13$ gives
$$\boxed{\,c_{\text{gh}}=-26\,}.$$

**Cross-check.** A general first-order $bc$ system where $b$ has weight $\lambda$ (so $c$ has weight $1-\lambda$) has $c=1-3(2\lambda-1)^2$. At $\lambda=2$: $c=1-3\cdot 9=-26\ \checkmark$, matching the direct computation above.

A negative central charge is not a problem here. The central charge is the **Weyl anomaly coefficient** of the CFT — the quantum failure of the trace $T^\alpha{}_\alpha$ to vanish on a curved worldsheet. A unitary CFT has $c>0$; the ghosts are non-unitary by construction (anticommuting integer-spin fields are precisely the spin-statistics-violating objects), so $c<0$ is allowed and there is no contradiction. This negative $-26$ is the whole point: it is what cancels the positive $c=D$ of the matter sector.

## Where $-26$ really comes from

The $-26$ is not an arithmetic coincidence. It is forced by the weights $(2,-1)$, which are forced by the index structure $b_{zz},c^z$, which is forced by what the ghosts *replaced* — a traceless-symmetric tensor $\beta^{\alpha\beta}$ and a vector $v^\alpha$, i.e. the parameters of diffeomorphisms and Weyl rescalings. The chain is:
$$\text{diffeo+Weyl gauge fixing}\ \to\ (\beta^{\alpha\beta},v^\alpha)\ \to\ (b_{zz},c^z)\ \to\ (h=2,\,h=-1)\ \to\ c_{\text{gh}}=-26 .$$
Traced back to [[Faddeev-Popov ghosts]], the $-26$ is a **fingerprint of two-dimensional diffeomorphism invariance itself**. The ghosts are the gauge symmetry made into fields, and $-26$ is the price tag it stamps on the theory.

## Open questions

- This derives only the $\lambda=2$ diffeomorphism ghost. The fermionic formula $c=1-3(2\lambda-1)^2$ covers any anticommuting $bc$ system; the superstring adds a *bosonic* superconformal $\beta\gamma$ system at $\lambda=\tfrac32$, which — because commuting statistics flip the overall sign (the point of the exercise below) — uses $c=-1+3(2\lambda-1)^2$ and lands at $c=+11$. None of this is needed for the bosonic $D=26$ route.
- Normal ordering $:\!\cdots\!:$ here is holomorphic/radial ordering. Its precise relation to oscillator normal ordering is standard CFT technology, best revisited in a BRST-focused note.

## Exercise

A tempting but wrong story says the minus in $c_{\text{gh}}=-26$ comes from the Grassmann hop sign. Test it. First redo $B(z)B(w)$ pretending $b,c$ are ordinary commuting fields but keeping the *same* propagators — so the double contraction is the symmetric sum with no hop sign. Does the answer change? Then say where the true sign difference between the fermionic $bc$ system ($c=-26$) and a genuinely bosonic $(2,-1)$ system ($c=+26$) actually lives, and tie it back to the Faddeev–Popov determinant.

> [!success]- Solution
> $B(z)B(w)=:\!c(z)\partial b(z)\!::\!c(w)\partial b(w)\!:$. Like fields don't contract, so the only surviving pairing is $c(z)$ with $\partial b(w)$ and $\partial b(z)$ with $c(w)$:
> $$\langle c(z)\,\partial b(w)\rangle\,\langle\partial b(z)\,c(w)\rangle=\Big(+\tfrac{1}{(z-w)^2}\Big)\Big(-\tfrac{1}{(z-w)^2}\Big)=-\frac{1}{(z-w)^4}.$$
> Dropping the Grassmann statistics changes *nothing*: the crossed pairing that the hop sign would have weighted still pairs $cc$ and $\partial b\,\partial b$ and vanishes, and the surviving nested pairing carries a $+$ under both statistics. The whole minus is already there in the derivative on the propagator. The same is true term by term, so this commuting toy — same propagators, no hop — still totals $-13$ and gives $c=-26$, not $+26$. The Grassmann hop is a genuine part of the machinery but is not the origin of the sign.
> **Where the real flip lives.** A true bosonic ghost system is the $\beta\gamma$ system, and its propagator is *antisymmetric*: $\langle\beta(z)\gamma(w)\rangle=+\tfrac{1}{z-w}$ but $\langle\gamma(z)\beta(w)\rangle=-\tfrac{1}{z-w}$, whereas the fermionic $bc$ propagator is symmetric ($\langle b(z)c(w)\rangle=\langle c(z)b(w)\rangle=+\tfrac{1}{z-w}$). Feeding that antisymmetry through the identical $TT$ computation flips the overall sign of every double contraction, turning $-26$ into $+26$ for a $(2,-1)$ bosonic system. So the sign is carried by the propagator's symmetry — the $(-1)$ of a closed fermion loop — not by the Wick hop.
> **Why fermionic is correct.** The ghosts exist to reproduce the Faddeev–Popov *determinant* $\Delta_{\text{FP}}$, not its inverse, and only anticommuting fields put a determinant in the numerator of a Gaussian integral (commuting fields give $1/\Delta_{\text{FP}}$). That statistical choice is the same choice that fixes the propagator symmetry above. Had the ghosts been bosonic, $c_{\text{gh}}=+26$ would force $c_{\text{matter}}=-26$, i.e. $D=-26$ scalars — nonsense. The minus in $c_{\text{gh}}=-26$ and the anticommuting statistics are one fact.
