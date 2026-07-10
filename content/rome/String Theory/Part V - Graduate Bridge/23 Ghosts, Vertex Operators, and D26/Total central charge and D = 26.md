---
title: Total central charge and D = 26
number: "23.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, ghosts-d26]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---
Weyl symmetry is a *gauge* symmetry, its anomaly is proportional to the total central charge $c_{\text{matter}}+c_{\text{gh}}=D-26$, and a gauge anomaly is fatal — so the anomaly must vanish, forcing $D=26$.

## The consistency meter

The Polyakov theory has a redundancy — Weyl rescaling of the worldsheet metric — that we divided out. Quantum mechanically that division leaves a residue, the Weyl anomaly, and its size is a single number: the **total central charge**. If that number is nonzero, the redundancy we thought we removed is still secretly present and the theory is broken. Making it vanish costs exactly one thing — the spacetime dimension must be $26$.

The total central charge is the theory's consistency meter. Every worldsheet field shifts the reading: matter fields push it positive, the gauge-fixing ghosts push it negative, and the theory is consistent only when the reading is zero. With $D$ free scalars contributing $+D$ and the ghosts contributing $-26$, zero means $D=26$.

## Why the total $c$ must be zero

The Polyakov string has two worldsheet gauge symmetries: diffeomorphisms and Weyl rescalings $g_{\alpha\beta}\to e^{2\omega}g_{\alpha\beta}$. A gauge symmetry is a **redundancy of description**, not a physical symmetry — configurations related by it are literally the same state, and we divided by the gauge volume to avoid overcounting (see [[Faddeev-Popov ghosts]]).

Global and gauge anomalies differ sharply. An anomaly in a *global* symmetry is merely interesting — the symmetry is broken by quantum effects, and that is a physical fact about the theory. An anomaly in a *gauge* symmetry is **fatal**: the states we tried to remove as redundant refuse to decouple, negative-norm ghosts leak into physical amplitudes, and the theory has no consistent Hilbert space. A gauge anomaly cannot be lived with the way a global one can; it must be cancelled.

The Weyl symmetry is anomalous. On a curved worldsheet the trace of the stress tensor — which classically vanishes, that vanishing *being* Weyl invariance — acquires a quantum piece:
$$\langle T^\alpha{}_\alpha\rangle=-\frac{c}{12}\,R.\tag{1}$$
Here $R$ is the worldsheet Ricci scalar and $c$ is the **total** central charge of every worldsheet field, in one chiral sector (the antiholomorphic copy contributes an identical $\bar c$). The coefficient $c$ is the *same* number that appears as the quartic-pole coefficient $c/2$ in the $TT$ operator product (see [[Virasoro algebra and central charge]]) — the anomaly and the operator algebra are two faces of one constant.

Weyl invariance is the statement $T^\alpha{}_\alpha=0$. Equation (1) says quantum mechanics forbids this on any curved worldsheet unless $c=0$. Since we cannot forbid curvature (the worldsheet genuinely bends, and we must sum over its geometries), the only escape is
$$\boxed{\,c_{\text{total}}=0\,}.\tag{2}$$

## Adding up the central charges

Central charges of independent sectors simply **add**, because $c$ lives in the quartic pole of the $TT$ OPE, and the stress tensor of decoupled sectors is a sum $T=\sum_i T_i$ whose cross-terms have no singular contractions. So the total is a sum over field types.

**Matter — the $X^\mu$ fields.** Each free scalar $X^\mu$ is a CFT with $c=1$ (computed from its own $TT$ OPE in [[Free boson OPEs]]). There are $D$ of them, one per spacetime dimension, so
$$c_{\text{matter}}=D\times 1=D.\tag{3}$$
The matter central charge literally **counts the spacetime dimensions**, because each coordinate is one free boson. (The timelike $X^0$ has a wrong-sign kinetic term, but still contributes $c=+1$: the sign shows up in the Fock-space inner product, not in the central charge.)

**Ghosts — the $bc$ system.** The Faddeev–Popov ghosts from gauge-fixing form a first-order anticommuting CFT of weights $(h_b,h_c)=(2,-1)$, and its $TT$ OPE has quartic pole $-13/(z-w)^4$ (derived in full in [[The bc ghost CFT]]):
$$c_{\text{gh}}=-26.\tag{4}$$
This is negative because the ghosts are non-unitary (integer-spin fields that anticommute), so the theorem "$c>0$ for unitary CFTs" does not apply. That negative $-26$ is precisely what will cancel the positive matter contribution.

Adding (3) and (4):
$$c_{\text{total}}=c_{\text{matter}}+c_{\text{gh}}=D-26.\tag{5}$$
This is the covariant version of "physical minus redundant": $D$ coordinates are present, and the ghost determinant subtracts the fixed negative amount demanded by diffeomorphism/Weyl gauge-fixing.

## Forcing D = 26

Impose the consistency condition (2) on the total (5):
$$D-26=0\quad\Longrightarrow\quad \boxed{D=26}.\tag{6}$$
This is the **critical dimension** of the bosonic string. The argument compresses to one line: the ghosts carry central charge $-26$, each spacetime coordinate carries $+1$, and a gauge anomaly must cancel, so exactly $26$ coordinates are needed. It is the same $26$ found by the [[Light-cone gauge]] Lorentz-anomaly argument, but here derived without ever breaking manifest Lorentz invariance — one disease, two symptoms, compared in [[Two roads to D = 26]].

## It is a critical *central charge*, not a critical *dimension*

Nothing forced the matter CFT to be $D$ free scalars. Look again at (2) and (4): the real requirement is
$$c_{\text{matter}}=26\qquad(\text{equivalently }c_{\text{total}}=0).\tag{7}$$
*Any* CFT with $c=26$ is a consistent background for the bosonic string. So:

- $26$ free scalars → flat 26-dimensional Minkowski space.
- $d$ free scalars (flat spacetime) $\times$ an "internal" CFT with $c=26-d$ → strings on $\mathbb{R}^{1,d-1}\times(\text{internal})$. For $d=4$ flat directions you need an internal $c=22$ CFT. **This is what "extra hidden dimensions" really means** — the internal $c$ need not come from geometric dimensions at all.

So "critical dimension" is a **misnomer for a critical central charge**. Only when the $c=26$ CFT happens to be free scalars does $26$ look like a spacetime dimension. This is the deep lesson of the covariant route, invisible from the light cone.

## What $D\neq 26$ actually breaks

The combination $D-26$ is not an arithmetic accident — it is the genuine obstruction to gauging away the conformal factor $\omega$. For $D\neq 26$ the anomaly (1) is nonzero, the partition function depends on $\omega$, and that mode $\omega$ can no longer be discarded as gauge: it becomes a **dynamical field** (the Liouville field). Such a theory is not Weyl invariant, but it is not nonsense either — it is a *non-critical* string, a legitimate but different theory. Criticality ($D=26$) is exactly the condition that lets you throw $\omega$ away.

## Open questions

- The exact normalization in (1) — that the $TT$ quartic-pole coefficient equals the curved-worldsheet trace-anomaly coefficient — is a heat-kernel / short-distance computation beyond this module. The consistency argument only needs the *shared* constant to vanish, which is robust. Motivated in [[Virasoro algebra and central charge]].
- The timelike $X^0$ gives $c=+1$ but a negative-norm Fock space. What actually removes those negative-norm states is BRST cohomology on the ghost-enlarged Hilbert space, deferred to Module 24.
- **Superstring version.** With worldsheet supersymmetry the ghosts are a $\beta\gamma$ system with $c=+11$, so consistency needs $c_{\text{matter}}=26-11=15$. A matched free boson+fermion pair has $c=1+\tfrac12=\tfrac32$, so $\tfrac32 D=15\Rightarrow D=10$. Worth its own sibling note when reaching superstrings.

## Exercise

You are handed a would-be bosonic-string background: $d$ flat free scalars (each $c=1$) together with one extra free anticommuting $bc$ system of weight $\lambda$, whose central charge is $c_\lambda=1-3(2\lambda-1)^2$. This extra $bc$ system is *matter* — it is not the Faddeev–Popov ghost system, which is always present separately. **(a)** For which $(d,\lambda)$ does the matter sector meet the string's consistency condition? **(b)** Check the specific case $d=25,\ \lambda=1$: is it consistent, and if not, what is missing?

> [!success]- Solution
> **(a)** After gauge-fixing, the FP ghosts always contribute $c_{\text{gh}}=-26$ (equation (4)). By (2) the grand total must vanish, so the matter must independently satisfy $c_{\text{matter}}=26$ (equation (7)). Here the matter is $d$ scalars plus the extra $bc$:
> $$d\cdot 1 + \big(1-3(2\lambda-1)^2\big)=26 \;\Longrightarrow\; d = 25+3(2\lambda-1)^2.$$
> This is one equation in two unknowns, so a whole family works. Examples: $\lambda=\tfrac12$ gives $c_\lambda=1$, needing $d=25$; $\lambda=0$ or $\lambda=1$ gives $c_\lambda=-2$, needing $d=28$; $\lambda=2$ (a second diffeomorphism-type ghost) gives $c_\lambda=1-3\cdot 9=-26$, needing $d=52$. The lesson: $26$ is a *central-charge* target, and you can hit it with mixtures of scalars and exotic $bc$ systems, not only with free scalars.
>
> **(b)** For $d=25,\ \lambda=1$: the extra $bc$ gives $c_1=1-3(1)^2=-2$, so
> $$c_{\text{matter}}=25+(-2)=23\neq 26.$$
> The grand total is $c_{\text{total}}=23-26=-3\neq 0$, so this background is **not** consistent. You are missing $c=3$ of matter — supply it with, e.g., three more free scalars ($d=28$, matching part (a)), or one $\lambda=\tfrac12$ system ($c=1$) plus two scalars. The moral made concrete: the FP ghost $-26$ is fixed by the gauge symmetry, so the matter must sum to exactly $+26$ no matter how exotic its ingredients.
