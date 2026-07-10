---
title: Proper area of the worldsheet
number: "9.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, proper-area]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The proper area a string sweeps out is the square root of a Gram determinant with one Lorentzian sign flip: $dA=d\tau\,d\sigma\sqrt{(\dot X\cdot X')^2-\dot X^2X'^2}$.

## From worldline length to worldsheet area

A particle moving through spacetime traces a 1D **worldline**, and its natural action is how long that line is — the proper length $\int ds$. A string is a particle smeared into a line: it sweeps out a 2D **worldsheet**, and the natural action is how big that sheet is — its proper area. This note writes that area down.

Two facts do all the work:

1. **Area is a Gram determinant.** The area of the little parallelogram spanned by two tangent vectors is fixed by their lengths and the angle between them — dot products only, no coordinates. That is a $2\times2$ determinant.
2. **The sheet lives in Minkowski space.** One direction across the sheet is timelike (following the string forward in time), one is spacelike (running along the string at a fixed instant). Time and space enter the metric with opposite signs, so the Gram determinant comes out **negative**, and the area is $\sqrt{-\gamma}$ instead of $\sqrt{\gamma}$.

## Warm-up: ordinary area is a Gram determinant

Take a surface $\vec x(\xi^1,\xi^2)$ in flat Euclidean space. A tiny coordinate rectangle $d\xi^1\,d\xi^2$ maps to a parallelogram with edge vectors
$$ d\vec v_1=\frac{\partial\vec x}{\partial\xi^1}\,d\xi^1,\qquad d\vec v_2=\frac{\partial\vec x}{\partial\xi^2}\,d\xi^2. $$
Its area is base $\times$ height $=|d\vec v_1|\,|d\vec v_2|\sin\theta$. Squaring and using $\sin^2\theta=1-\cos^2\theta$ with $\cos\theta=\dfrac{d\vec v_1\cdot d\vec v_2}{|d\vec v_1|\,|d\vec v_2|}$ turns this into pure dot products:
$$ dA=\sqrt{(d\vec v_1\cdot d\vec v_1)(d\vec v_2\cdot d\vec v_2)-(d\vec v_1\cdot d\vec v_2)^2}. \tag{1}$$
The quantity under the root is the determinant of the $2\times2$ **Gram matrix** of the two edges. It knows only lengths and the angle between the edges, never the coordinate labels — the germ of why area will not depend on how the surface is parameterized ([[Nambu-Goto action]] proves that invariance in full).

Substituting the edges and writing $g_{ij}=\partial_i\vec x\cdot\partial_j\vec x$ for the induced metric,
$$ A=\int d\xi^1 d\xi^2\sqrt{\det(g_{ij})}=\int d\xi^1 d\xi^2\sqrt{g}. $$
This is the familiar $\int\sqrt{g}$ surface-area formula. Everything below is this formula with a relativistic dot product.

## The worldsheet: same determinant, flipped sign

A string history is a map $X^\mu(\tau,\sigma)$ into Minkowski spacetime (mostly-plus signature, $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,\dots,+1)$). Here $\tau,\sigma$ are **labels** on the sheet, not coordinates in spacetime; $X^\mu$ says where each labeled point lands. Whatever units the labels carry cancel in the area element $d\tau\,d\sigma\sqrt{-\gamma}$ — each derivative $\partial_\alpha X$ brings a factor $1/[\xi^\alpha]$ that the differential $d\xi^\alpha$ undoes — so the results below do not depend on that choice. The two tangent vectors are
$$ \dot X^\mu=\frac{\partial X^\mu}{\partial\tau}\ \ (\text{timelike}),\qquad X'^\mu=\frac{\partial X^\mu}{\partial\sigma}\ \ (\text{spacelike}). $$
Their Gram matrix is the [[Worldsheet and induced metric|induced metric]]
$$ \gamma_{\alpha\beta}=\partial_\alpha X\cdot\partial_\beta X=\begin{pmatrix}\dot X^2 & \dot X\cdot X'\\ \dot X\cdot X' & X'^2\end{pmatrix},\qquad \gamma\equiv\det(\gamma_{\alpha\beta})=\dot X^2 X'^2-(\dot X\cdot X')^2. $$
The Gram formula (1) applied to these edges gives $dA=d\tau\,d\sigma\sqrt{\gamma}$ — but now the quantity under the root is *negative*, so the naive formula fails. In mostly-plus signature a timelike vector has $\dot X^2<0$ and a spacelike vector has $X'^2>0$, so the product $\dot X^2 X'^2<0$, and the term $-(\dot X\cdot X')^2$ only pushes it further down. Hence $\gamma<0$, and the honest area element is
$$ dA=d\tau\,d\sigma\sqrt{-\gamma}=d\tau\,d\sigma\sqrt{(\dot X\cdot X')^2-\dot X^2 X'^2}. $$
The sign flip is forced, not chosen: it is the same Gram determinant, evaluated with a Lorentzian dot product.

## Why $-\gamma>0$ at every physical point

The claim $\gamma<0$ rests on the tangent plane containing *both* a timelike and a spacelike direction — precisely what "a real string moves through time and has spatial extent" means. To turn that into an inequality, scan every direction in the plane at once by tilting from $\dot X$ toward $X'$:
$$ v^\mu(\lambda)=\dot X^\mu+\lambda X'^\mu,\qquad \lambda\in(-\infty,\infty). $$
Up to rescaling, every direction in the plane except $X'$ itself is some $v(\lambda)$, and $X'$ is already spacelike. The squared norm is a quadratic in $\lambda$:
$$ v^2(\lambda)=X'^2\,\lambda^2+2(\dot X\cdot X')\,\lambda+\dot X^2. $$
Since $X'^2>0$ the parabola opens upward, and the timelike direction in the plane forces $v^2(\lambda)<0$ at some $\lambda$ — the parabola dips below zero, so it crosses zero at two distinct roots. Two distinct real roots means positive discriminant:
$$ 4(\dot X\cdot X')^2-4X'^2\dot X^2>0\ \ \Longrightarrow\ \ (\dot X\cdot X')^2-\dot X^2 X'^2>0. $$
The left side is exactly $-\gamma$. The criterion "the worldsheet is a genuine, moving string surface" *is* the statement $-\gamma>0$: the quantity under our square root is positive precisely where the physics is sensible.

$$ \boxed{\;A=\int d\tau\,d\sigma\,\sqrt{(\dot X\cdot X')^2-\dot X^2 X'^2}=\int d\tau\,d\sigma\,\sqrt{-\gamma}\;} $$

This is a **proper** area: it is built from Lorentz-invariant dot products, so every observer computes the same number for the same sheet.

## From area to the action's coefficient

The string action should be a constant times this proper area, mirroring the particle's $-mc\int ds$. Dimensions fix the constant. The target coordinates carry length ($[X^\mu]=L$, e.g. $X^0=ct$), and since the label units cancel in the measure, the area element has units $[X]^2=L^2$, so $[A]=L^2$; an action has $[S]=ML^2/T$. The coefficient must therefore supply
$$ \frac{[S]}{[A]}=\frac{ML^2/T}{L^2}=\frac{M}{T}. $$
String **tension** $T_0$ is a force, $[T_0]=ML/T^2$, so $T_0/c$ has units $\dfrac{ML/T^2}{L/T}=\dfrac{M}{T}$ — exactly right. This pins down the Nambu–Goto form:
$$ S=-\frac{T_0}{c}\int d\tau\,d\sigma\,\sqrt{(\dot X\cdot X')^2-\dot X^2 X'^2}. $$
The minus sign mirrors the particle's $-mc\int ds$, and the physics confirms it: [[Nambu-Goto action]] evaluates $S$ on a static stretched string of length $a$ and reads off a positive energy $T_0\,a$ — which also certifies that $T_0$ really is tension.

## Open questions

- The null case $\gamma=0$ — a tangent plane tangent to the light cone, holding a single null direction — makes the root vanish; there the area functional stops describing an ordinary tensile string (the tensionless limit).
- In a curved target spacetime the pullback uses $G_{\mu\nu}(X)$ in place of $\eta_{\mu\nu}$; the Gram-determinant machinery is unchanged, but that belongs to the later [[Polyakov action]] / sigma-model bridge.

## Exercise

Take a **static** open string lying along the $x^1$-axis, parameterized in static gauge with $\sigma$ measuring length along the string:
$$ X^0=c\tau,\qquad X^1=\sigma,\qquad X^{2,\dots,d}=0,\qquad \sigma\in[0,a]. $$
(a) Compute $\dot X^2$, $X'^2$, and $\dot X\cdot X'$ in mostly-plus signature. (b) Show $-\gamma>0$ and evaluate the proper area swept between $\tau_i$ and $\tau_f$. (c) A tempting mistake is to use $\sqrt{+\gamma}$. What goes wrong, and what does it say about the signature of the tangent plane?

> [!success]- Solution
> **(a)** With $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,\dots,+1)$: $\dot X^\mu=(c,0,\dots)$ so $\dot X^2=\eta_{00}c^2=-c^2$, and $X'^\mu=(0,1,0,\dots)$ so $X'^2=+1$. They are orthogonal in spacetime: $\dot X\cdot X'=\eta_{00}(c)(0)+\eta_{11}(0)(1)=0$.
>
> **(b)** The Gram determinant is $\gamma=\dot X^2 X'^2-(\dot X\cdot X')^2=(-c^2)(1)-0=-c^2$, so $-\gamma=c^2>0$ and $\sqrt{-\gamma}=c$. The proper area is
> $$ A=\int_{\tau_i}^{\tau_f}\!d\tau\int_0^a\!d\sigma\,\sqrt{-\gamma}=c\,a\,(\tau_f-\tau_i). $$
> Since $X^0=c\tau$ makes $\tau$ ordinary time $t$ here, $A=a\cdot c(t_f-t_i)=a\,\Delta X^0$: a rectangle of spatial length $a$ and temporal height $\Delta X^0$ — the "length $\times$ elapsed time" sheet. (Multiplying by $-T_0/c$ gives $S=-T_0\,a\,(t_f-t_i)$; for a static configuration $S=-\int V\,dt$, so $V=T_0\,a$ — the tension check.)
>
> **(c)** $\sqrt{+\gamma}=\sqrt{-c^2}$ is imaginary: the action would not be real. The failure flags that the tangent plane is *Lorentzian*, not Euclidean — $\dot X$ is timelike ($\dot X^2=-c^2<0$) and $X'$ is spacelike ($X'^2=+1>0$), so their Gram determinant is negative. Only the sign-flipped root $\sqrt{-\gamma}$ gives a real proper area.
