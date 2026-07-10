---
title: Complex coordinates on the worldsheet
number: "22.6"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, polyakov-cft]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Rotate the worldsheet to Euclidean signature and bundle its two coordinates into one complex number $z=\sigma^1+i\sigma^2$. Then every 2D conformal transformation is just a holomorphic map $z\to f(z)$, every field splits into an independent left-moving (holomorphic) and right-moving (antiholomorphic) half, and the whole CFT toolkit — Laurent series, contour integrals, residues — becomes available. This is the working language of the worldsheet.

## Why complex coordinates

The string sweeps out a 2D surface. In light-cone gauge you already saw that everything on it organizes into two independent flows: left-movers $f(\tau+\sigma)$ and right-movers $g(\tau-\sigma)$, riding the two null directions $\sigma^\pm=\tau\pm\sigma$. Complex coordinates are the Euclidean reincarnation of exactly those two directions. Rotating time to be imaginary turns the two *real* null directions into one *complex* coordinate and its conjugate — $z$ and $\bar z$ — and the two flows become "depends only on $z$" (holomorphic) and "depends only on $\bar z$" (antiholomorphic).

Why bother? Because on the complex plane, "conformal transformation" — a map that rescales the metric without shearing it — is *the same thing* as "holomorphic function." Angle-preserving maps of the plane are precisely $z\to f(z)$. So the enormous, infinite-dimensional symmetry of a 2D CFT is nothing more exotic than complex analysis, and every calculation reduces to reading off a residue. The rest of this note makes that precise.

## Wick rotation and the complex coordinate

Rotate the worldsheet time to imaginary values, $\sigma^0\to-i\sigma^2$, so the Lorentzian metric $\mathrm{diag}(-1,+1)$ becomes the positive-definite $\mathrm{diag}(+1,+1)$ in coordinates $(\sigma^1,\sigma^2)$. Then bundle them:
$$\boxed{\,z=\sigma^1+i\sigma^2,\qquad \bar z=\sigma^1-i\sigma^2\,}$$
These are the Euclidean analogues of the light-cone coordinates $\sigma^\pm=\tau\pm\sigma$ that organized [[Mode expansions in light-cone gauge]]. That analogy is the whole reason holomorphic functions get called "left-moving" and antiholomorphic ones "right-moving."

The mental dictionary from the earlier Lorentzian language to CFT:

| Earlier language | CFT language | Meaning |
|---|---|---|
| $\tau+\sigma,\ \tau-\sigma$ | $z,\ \bar z$ | two independent characteristic directions |
| left / right movers | holomorphic / antiholomorphic | depends on one coordinate only |
| Fourier modes on the string | Laurent modes on the plane | coefficients read off by contour integrals |
| time ordering | radial ordering | larger $|z|$ acts later (outermost) |

The holomorphic derivatives are
$$\partial\equiv\partial_z=\tfrac12(\partial_1-i\partial_2),\qquad \bar\partial\equiv\partial_{\bar z}=\tfrac12(\partial_1+i\partial_2),$$
which satisfy $\partial z=\bar\partial\bar z=1$ and $\partial\bar z=\bar\partial z=0$ — each derivative sees its own coordinate and is blind to the other. The flat metric is
$$ds^2=(d\sigma^1)^2+(d\sigma^2)^2=dz\,d\bar z,$$
so in components $g_{zz}=g_{\bar z\bar z}=0$ and $g_{z\bar z}=\tfrac12$. The metric is purely *off-diagonal*: it pairs $z$ with $\bar z$ and nothing with itself. That is what makes raising or lowering an index swap $z\leftrightarrow\bar z$ — e.g. $v^z=g^{z\bar z}v_{\bar z}=2\,v_{\bar z}$, since the inverse metric has $g^{z\bar z}=2$. Keep $g_{z\bar z}=\tfrac12$ in view; it is the source of nearly every stray factor of $2$ in this subject.

### Normalization ledger (the factor-of-2 bookkeeping)

$$d^2z\equiv dz\,d\bar z=2\,d\sigma^1 d\sigma^2,\qquad \delta^{(2)}(z,\bar z)=\tfrac12\,\delta^{(2)}(\sigma),\qquad \partial_\alpha\partial^\alpha=4\,\partial\bar\partial.$$
The $2$ in the measure is exactly undone by the $\tfrac12$ in the complex delta function (so $\int d^2z\,\delta^{(2)}(z,\bar z)=1$ still holds), and the flat Laplacian becomes $4\partial\bar\partial$ — you can check the last one directly: $4\cdot\tfrac12(\partial_1-i\partial_2)\cdot\tfrac12(\partial_1+i\partial_2)=\partial_1^2+\partial_2^2$, the cross terms cancelling.

## Conformal transformations = holomorphic maps

In complex coordinates a conformal transformation of flat space is **any holomorphic change of coordinate**,
$$z\to z'=f(z),\qquad \bar z\to\bar z'=\bar f(\bar z).$$
Under it $ds^2=dz\,d\bar z\to|f'(z)|^2\,dz\,d\bar z$ — precisely the form $g\to\Omega^2 g$ with $\Omega=|f'(z)|$, a local rescaling of the metric, which *is* a conformal transformation (cf. [[Weyl invariance]]). A whole *function's worth* of symmetry, $f(z)$, is special to two dimensions; in $d>2$ the conformal group is finite-dimensional ($SO(p+1,q+1)$). This infinitude is the reason 2D CFT is so powerful — and the reason the string worldsheet is a tractable quantum theory at all.

Two examples anchor it: $z\to z+a$ is a translation, and $z\to\zeta z$ is a rotation (for $|\zeta|=1$) or a scaling/dilatation (for real $\zeta\ne1$). These are generated by the [[Virasoro algebra and central charge|Virasoro generators]] $L_{-1}$ and $L_0$ respectively — the two that, together with $L_1$, form the anomaly-free global subalgebra.

A practical convention: treat $z$ and $\bar z$ as **independent** variables, extending the worldsheet from $\mathbb R^2$ to $\mathbb C^2$, so Cauchy's theorem and residue calculus apply. At the end you restore the physical "real slice" $\bar z=z^*$.

## Holomorphic factorization

The free-boson equation of motion in conformal gauge is the 2D wave equation; in complex coordinates it is simply
$$\partial\bar\partial\,X=0.$$
A function killed by $\partial\bar\partial$ is a holomorphic piece plus an antiholomorphic piece, so the general solution **splits**:
$$X(z,\bar z)=X(z)+\bar X(\bar z).$$
This is the Euclidean form of the left/right split $X^\mu=X_L(\tau+\sigma)+X_R(\tau-\sigma)$ from [[Mode expansions in light-cone gauge]]. The two chiral halves of the string decouple, and from here on almost everything in worldsheet CFT factorizes into an independent holomorphic sector (functions of $z$) and antiholomorphic sector (functions of $\bar z$) — you solve one and copy the other by conjugation.

## The stress tensor goes (anti)holomorphic

Factorization is sharpest for the [[Worldsheet stress tensor]]. Two facts about it, both derived elsewhere in this module, collapse dramatically in complex coordinates:

- **Tracelessness** (from [[Weyl invariance]]), $T^\alpha{}_\alpha=0$, becomes $T_{z\bar z}=0$: the mixed component vanishes, killing the only piece that couples $z$ and $\bar z$.
- **Conservation** $\partial^\alpha T_{\alpha\beta}=0$ then reduces to $\bar\partial\,T_{zz}=0$ and $\partial\,T_{\bar z\bar z}=0$.

So the two surviving components are each chiral:
$$\bar\partial\,T_{zz}=0\;\Rightarrow\; T_{zz}\equiv T(z)\ \text{holomorphic},\qquad \partial\,T_{\bar z\bar z}=0\;\Rightarrow\; T_{\bar z\bar z}\equiv\bar T(\bar z)\ \text{antiholomorphic}.$$
Conservation plus tracelessness *force* the stress tensor to be a holomorphic function — and holomorphic functions are exactly what Cauchy's residue theorem handles. That is precisely why the [[Virasoro algebra and central charge|Virasoro algebra]] can be extracted by a contour integral instead of a hard operator computation.

## Modes by contour integral

Because $T(z)$ is holomorphic it has a Laurent expansion on the plane, and the [[Virasoro algebra and central charge|Virasoro generators]] are its modes:
$$T(z)=\sum_{m\in\mathbb Z}\frac{L_m}{z^{m+2}},\qquad L_n=\frac{1}{2\pi i}\oint dz\;z^{n+1}\,T(z),$$
and likewise $\bar L_n$ from $\bar T(\bar z)$. The power $z^{m+2}$ (rather than $z^m$) is fixed by demanding $T$ carry conformal weight $2$: under $z\to\lambda z$, $T\to\lambda^{-2}T$, and the offset of $2$ in the exponent is exactly what keeps each mode $L_m$ scale-covariant. The second formula is just Cauchy's residue extraction of a Laurent coefficient. Inside correlators these operator products are **radially ordered** — larger $|z|$ placed to the left, the complex-plane version of time ordering — and that ordering is what makes the contour deformation producing the Virasoro algebra legitimate.

## The cylinder–plane map

The string worldsheet is naturally a **cylinder**: space $\sigma$ is periodic, time $\tau$ runs along the tube. Give it a complex coordinate $w=\sigma+i\tau$ with $\sigma\in[0,2\pi)$. The exponential map
$$z=e^{-iw}$$
unrolls the cylinder onto the complex **plane**: each constant-time slice $\tau=\text{const}$ becomes a circle $|z|=e^{\tau}$, and the far past $\tau\to-\infty$ shrinks to the single point $z=0$. This is why CFT *on the plane* (radial quantization) computes the string spectrum — a state prepared in the infinite past is an operator inserted at the origin. The map is not free: the stress tensor, being non-primary, picks up a constant Schwarzian shift,
$$T_{\text{cyl}}(w)=-z^2\,T_{\text{plane}}(z)+\frac{c}{24},$$
and that $+c/24$ is one of the physical faces of the central charge — the shift that *generates* the Casimir energy of the ground state on the cylinder. It is the density-level source, not the energy itself: integrating $T_{\text{cyl}}$ over the spatial circle turns this shift into the ground-state energy $E=-\tfrac{2\pi}{24}(c+\bar c)$, negative and involving both chiral halves (see [[Virasoro algebra and central charge]]).

## Open questions

- **Reality slice.** Treating $z,\bar z$ as independent is a calculational device. Physical Euclidean worldsheets sit on the real slice $\bar z=z^*$, restored after the contour/OPE manipulations.
- **Wick rotation.** This note fixes the local Euclidean convention. A full Lorentzian-to-Euclidean path-integral derivation, including boundary phases, is useful but unnecessary for the local OPE algebra of this module.

## Exercise

Verify the constant $+\,c/24$ in the cylinder–plane transformation of $T$. Because $T$ is non-primary, under a map $z(w)$ its lower components transform as
$$T_{ww}(w)=\Big(\frac{dz}{dw}\Big)^{2}T_{zz}(z)+\frac{c}{12}\,S(z,w),\qquad S(z,w)=\frac{z'''}{z'}-\frac32\Big(\frac{z''}{z'}\Big)^2,\quad {}'=\frac{d}{dw}.$$
For the cylinder map $z=e^{-iw}$, compute the Schwarzian $S(z,w)$ and confirm the law reproduces $T_{\text{cyl}}(w)=-z^2\,T_{\text{plane}}(z)+\tfrac{c}{24}$.

> [!success]- Solution
> With $z=e^{-iw}$ every derivative is proportional to $z$ itself:
> $$z'=-i\,e^{-iw}=-iz,\qquad z''=(-i)^2 e^{-iw}=-z,\qquad z'''=(-i)^3 e^{-iw}=i z.$$
> Form the two ratios the Schwarzian needs:
> $$\frac{z'''}{z'}=\frac{iz}{-iz}=-1,\qquad \frac{z''}{z'}=\frac{-z}{-iz}=\frac{1}{i}=-i\ \Rightarrow\ \Big(\frac{z''}{z'}\Big)^2=(-i)^2=-1.$$
> So
> $$S(z,w)=(-1)-\tfrac32(-1)=-1+\tfrac32=\tfrac12,$$
> a pure constant. For the Jacobian, $\dfrac{dz}{dw}=z'=-iz$, hence $\big(\tfrac{dz}{dw}\big)^2=(-iz)^2=-z^2$. Insert both into the transformation law:
> $$T_{\text{cyl}}(w)=\Big(\tfrac{dz}{dw}\Big)^2 T_{\text{plane}}(z)+\frac{c}{12}S=-z^2\,T_{\text{plane}}(z)+\frac{c}{12}\cdot\frac12=-z^2\,T_{\text{plane}}(z)+\frac{c}{24}.$$
> The constant is exactly $+c/24$. Because $S$ is a pure number, this shift is identical on every state: it moves only the zero-mode (ground-state) energy, which is why it manifests as a Casimir energy rather than as an operator.
