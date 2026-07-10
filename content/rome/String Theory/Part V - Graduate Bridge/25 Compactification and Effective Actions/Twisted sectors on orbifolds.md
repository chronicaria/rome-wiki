---
title: Twisted sectors on orbifolds
number: "25.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, orbifolds]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

An orbifold is a space folded onto itself by a discrete symmetry, leaving sharp *fixed points*. Quantizing a closed string there forces two changes to the spectrum: you keep only the symmetric states (a **projection**), and you must add a brand-new **twisted sector** of strings that close only *up to* the symmetry — strings glued shut across the fold, and therefore pinned to the fixed points.

## Folding a space onto itself

Fold a sheet of paper in half. Points come in mirror pairs $x \leftrightarrow -x$, except the crease, which maps to itself — the **fixed point**. The folded paper is the orbifold. A point particle sitting on the crease has nowhere sensible to go; the geometry is singular there. But a *closed string* is a loop, and a loop has a new option a point does not: it can run from a point to its mirror image and close up *across the crease*. In the unfolded picture that string looks like an open arc; in the folded picture its two ends are identified, so it is a legitimate closed loop that is trapped at the fold. Those trapped loops are the **twisted sector**.

Orbifolding does two opposite things at once — it **removes** states (kills the mirror-antisymmetric ones) and **adds** states (the twisted loops). This is the exact same "double strike" that turning a line into a circle performs (see [[Toroidal compactification]]): a circle adds winding and removes the momentum continuum; an orbifold adds twisted states and removes the reflection-odd states. Same mechanism, different group.

## What an orbifold is

Take a manifold $M$ and a discrete group $\Gamma$ acting on it. The **orbifold** is the quotient $M/\Gamma$: glue together points related by $\Gamma$. The new feature versus a plain circle or torus is that $\Gamma$ can have **fixed points** — points sent to themselves.

The minimal example is the real line with a reflection,
$$ x \sim -x \qquad (\mathbb Z_2:\ x\mapsto -x). $$
- $x=0$ is the unique fixed point ($-0=0$).
- A fundamental domain is the half-line $x\ge 0$.
- $\mathbb R^1/\mathbb Z_2$ is smooth for $x>0$ but **singular at $x=0$**: a neighborhood of the fixed point looks like the end of a half-line, not a piece of $\mathbb R$. The group is $\mathbb Z_2$ because doing $x\to-x$ twice is the identity.

The stringy example is the **circle orbifold** $S^1/\mathbb Z_2$: start with the circle $x\sim x+2\pi R$ and additionally impose $x\sim -x$. Now there are **two** fixed points, $x=0$ and $x=\pi R$ — the latter because $-\pi R = \pi R - 2\pi R \sim \pi R$ on the circle. The quotient is a line segment (an interval) with a singular endpoint at each fixed point. In higher dimensions the $\mathbf T^d/\mathbb Z_N$ orbifolds are the workhorses of compactification: flat away from the fixed points (hence trivially Ricci-flat, so they solve the vacuum condition of [[Einstein equations from conformal invariance]]) yet with all their curvature concentrated at the fixed points.

**Why anyone bothers.** An orbifold is the simplest *curved* compactification you can actually solve. Locally it is flat, so the worldsheet theory stays a free CFT; but globally the identification breaks symmetries and reduces supersymmetry the way a genuine Calabi–Yau would. It is a tractable caricature of a Calabi–Yau — hard geometry replaced by easy geometry plus a few singular points.

## Quantizing a closed string: two sectors

On $M/\Gamma$, a closed string coordinate $X(\sigma)$ need only close *up to* a $\Gamma$ transformation — the same relaxation of periodicity that gave winding on a circle (see [[Toroidal compactification]]), now generalized from "shift by a lattice vector" to "act by a group element." For $\mathbb Z_2$ ($x\to -x$) this yields two families of boundary condition.

**Untwisted sector — the string closes normally,**
$$ X(\sigma+2\pi) = X(\sigma) + (\text{winding shift}). $$
These are the ordinary circle states, but not all of them survive. Because the parent theory has a $\mathbb Z_2$ symmetry $g:X\mapsto -X$, only $g$-invariant states are well defined on the quotient. Keep them with the **projector**
$$ P = \tfrac12(1+g). $$
Concretely, for a momentum/winding state $|n,m\rangle$, $g$ sends $|n,m\rangle \mapsto |-n,-m\rangle$, so the even combination $|n,m\rangle+|-n,-m\rangle$ survives and the odd one is projected out. Oscillators carry a sign too: each excitation of the reflected coordinate flips sign under $g$, so a state's survival depends on the parity of its oscillator content as well. The untwisted sector is the old spectrum, symmetrized.

**Twisted sector — the string closes only after a reflection,**
$$ X(\sigma+2\pi) = -X(\sigma) + (\text{shift}). $$
This is a genuinely new closed string: open in the covering space, closed in the quotient — precisely the fold-crossing loop from the opening picture. Two consequences follow immediately, and the rest of the note makes them quantitative:
1. **It is stuck at a fixed point.** Only there is $-X = X$ consistent with the string's center of mass, so twisted strings are *localized* on the fixed points, one Hilbert space per fixed point.
2. **Its oscillators are half-integer moded.** The antiperiodic condition $X\to -X$ shifts every mode number by $\tfrac12$, which changes the zero-point energy and hence the twisted ground-state mass.

**Why the twisted sector is not optional.** You might hope to define the orbifold theory as "just the projected untwisted states." That theory is inconsistent: its one-loop torus amplitude is not modular invariant, and modular invariance is the worldsheet-consistency backbone of this whole module. The twisted sector is exactly what repairs it, and the cycle-exchange argument shows why.

A torus worldsheet has two independent cycles. Label a sector by which group element the string is twisted by around the spatial cycle ($h_1$) and which element is inserted in the trace around the time cycle ($h_2$), a pair $(h_1,h_2)$. Projecting the untwisted Hilbert space onto invariant states is the insertion of $P=\tfrac12(1+g)$ in the trace — i.e. summing $(1,1)$ and $(1,g)$. But a modular transformation of the torus relabels its cycles,
$$ S:\ (h_1,h_2)\longmapsto (h_2,h_1), $$
so it carries the projected untwisted trace $(1,g)$ into $(g,1)$ — a trace over the $g$-**twisted** Hilbert space. Once you allow the path integral to swap which cycle is "space" and which is "time," projection and twisting are two views of the same object: you cannot keep one without the other.

## Twisted-sector quantization for $S^1/\mathbb Z_2$

Work near a fixed point $x_f\in\{0,\pi R\}$ and split off the fluctuation,
$$ X(\tau,\sigma)=x_f+Y(\tau,\sigma). $$
The twist condition becomes antiperiodicity of the fluctuation,
$$ Y(\tau,\sigma+2\pi)=-Y(\tau,\sigma). $$
The constant part is frozen at $x_f$: under $x\to -x$ both momentum $n/R$ and winding $mR/\alpha'$ flip sign, so a twisted string has **no continuous momentum and no winding zero mode** — its midpoint cannot slide around the circle. Only the oscillators are alive.

$Y$ still solves the free wave equation, $Y=Y_L(\tau+\sigma)+Y_R(\tau-\sigma)$, but antiperiodicity forces **half-integer** modes:
$$
Y_L(u)=i\sqrt{\tfrac{\alpha'}{2}}\sum_{r\in\mathbb Z+\frac12}\frac{\bar\alpha_r}{r}\,e^{-iru},\qquad
Y_R(v)=i\sqrt{\tfrac{\alpha'}{2}}\sum_{r\in\mathbb Z+\frac12}\frac{\alpha_r}{r}\,e^{-irv}.
$$
Note the absent $x_0+\alpha'p\,\tau+\alpha'w\,\sigma$ zero-mode piece — killed by point 1 above. Canonical quantization gives the usual algebra with half-integer labels,
$$ [\alpha_r,\alpha_s]=r\,\delta_{r+s,0},\qquad [\bar\alpha_r,\bar\alpha_s]=r\,\delta_{r+s,0},\qquad r,s\in\mathbb Z+\tfrac12, $$
with number operators
$$ N_{\rm tw}=\sum_{r>0}\alpha_{-r}\alpha_r,\qquad \bar N_{\rm tw}=\sum_{r>0}\bar\alpha_{-r}\bar\alpha_r, \qquad r=\tfrac12,\tfrac32,\dots. $$
The cheapest excitation now costs $\tfrac12$ a unit of level instead of $1$: the twist has changed the local spectrum at the fixed point.

Level matching still holds. For this symmetric $\mathbb Z_2$ twist the left and right twist-vacua have equal weight, so
$$ L_0-\bar L_0 = N_{\rm tw}-\bar N_{\rm tw}=0. $$
A lone left-moving half-oscillator is not a physical closed-string state; left and right levels must balance.

### The zero-point shift and the twist weight $h=\tfrac1{16}$

The one number that makes twisted sectors quantitatively different is the vacuum energy. For a chiral real boson the zero-point energy is $\tfrac12\sum_r r$ over its positive modes. This sum is divergent; "regularize" means insert a smooth cutoff $e^{-\epsilon r}$, expand in $\epsilon$, and discard the $1/\epsilon$ piece, which is a local counterterm — the finite remainder is what $\zeta(-1)=-\tfrac1{12}$ *stands for*. It is never the literal value of the divergent series.

**Integer modes** (ordinary boson):
$$ E_0^{\rm int}=\tfrac12\sum_{n=1}^\infty n \;\xrightarrow{\ \text{reg}\ }\; \tfrac12\,\zeta(-1)=-\tfrac1{24}. $$
**Half-integer modes** (twisted boson):
$$ E_0^{\rm tw}=\tfrac12\sum_{n=0}^\infty\!\big(n+\tfrac12\big)\;\xrightarrow{\ \text{reg}\ }\;\tfrac12\,\zeta\!\big(-1,\tfrac12\big)=\tfrac12\cdot\tfrac1{24}=\tfrac1{48}, $$
using the Hurwitz zeta $\zeta(-1,a)=-\tfrac12\big(a^2-a+\tfrac16\big)$, which gives $\zeta(-1,\tfrac12)=\tfrac1{24}$. The chiral vacuum weight is therefore *raised* by
$$ h \;=\; E_0^{\rm tw}-E_0^{\rm int} \;=\; \tfrac1{48}-\big(\!-\tfrac1{24}\big) \;=\; \tfrac1{16}. $$
So the $\mathbb Z_2$ twist field for one real boson has $h=\bar h=\tfrac1{16}$, and a full twisted coordinate (left + right) shifts the closed-string weight by $h+\bar h=\tfrac18$.

*Cross-check.* A **complex** boson twisted by phase $\eta$ is known to carry $h=\tfrac12\eta(1-\eta)$; at the reflection value $\eta=\tfrac12$ this is $\tfrac18$. A complex boson is two real ones, so per real boson $h=\tfrac1{16}$ — matching the mode sum exactly. The two independent routes agree, which is the honesty check on the regularization.

**Effect on the mass.** In the untwisted (or non-compact) closed string the mass-shell condition reads, per chiral half, $N-1=0$ — the "$-1$" being the additive normal-ordering constant $a=-1$ from $D=26$ (equivalently the intercept $-a=1$). Twisting one coordinate raises that coordinate's contribution to each chiral zero-point energy by $\tfrac1{16}$, so the twisted mass-shell condition becomes
$$ N_{\rm tw}+\tfrac1{16}-1=0 \qquad(\text{each chiral half}), $$
i.e. the twisted ground state sits $\tfrac1{16}+\tfrac1{16}=\tfrac18$ in level ($L_0$) units above where the naive vacuum would be. The bosonic tachyon is not cured by a single twist, but each fixed point now carries a definite, localized tower of states built on this shifted vacuum.

For $S^1/\mathbb Z_2$ there are two such twisted Hilbert spaces — one at $x_f=0$, one at $x_f=\pi R$. On a general $\mathbf T^d/\Gamma$ orbifold you repeat this for each nontrivial group element and each fixed component, then apply the group-invariance projection.

## Why a string handles the singularity gracefully

A point particle on $\mathbb R^1/\mathbb Z_2$ crashes into a true singularity at the fixed point: the physics there is ill-defined. A *string*, being extended, propagates on the orbifold consistently, and the twisted-sector states are exactly the new degrees of freedom that "resolve" the fixed point — the fold-crossing loops that a point could never form. This is the same lesson as winding and T-duality: the string detects and tolerates structure that defeats a point particle.

## Open questions
- The cycle-exchange argument gives the *reason* twisted sectors are required. The full theta-function partition function for $S^1/\mathbb Z_2$, and the discrete-torsion phase constraints for general asymmetric orbifolds, are deferred.
- Only the single reflected-coordinate $S^1/\mathbb Z_2$ prototype is derived here. General $\mathbf T^d/\Gamma$ counting brings in fixed-point permutations and centralizer projections.

## Exercise

The half-integer moding is the linchpin — everything downstream (the $\tfrac1{16}$, the localized tower) rests on it. Show it follows *forced*, not assumed, and check its immediate consequence.

**(a)** Starting from the twisted boundary condition $Y(\tau,\sigma+2\pi)=-Y(\tau,\sigma)$, show that a single chiral mode $e^{-ir(\tau\pm\sigma)}$ is admissible only for $r\in\mathbb Z+\tfrac12$.
**(b)** Suppose you had *mistakenly* used integer modes for the twisted boson (the value for an ordinary boson). What chiral weight shift $h$ would you get, and why does it violate the boundary condition you found in (a)?

> [!success]- Solution
> **(a)** A chiral piece of $Y$ is a sum of terms $e^{-iru}$ with $u=\tau+\sigma$ (and similarly $v=\tau-\sigma$ for the other chirality). Shifting $\sigma\to\sigma+2\pi$ sends $u\to u+2\pi$, so the term picks up a phase:
> $$ e^{-ir(u+2\pi)} = e^{-2\pi i r}\,e^{-iru}. $$
> The boundary condition demands the *whole* field flip sign, $Y\to -Y$, i.e. every mode must satisfy $e^{-2\pi i r}=-1$. That requires $2\pi r = \pi(2k+1)$ for integer $k$, so
> $$ r = k+\tfrac12 \in \mathbb Z+\tfrac12. $$
> Integer $r$ would give $e^{-2\pi i r}=+1$ (periodic, the untwisted case); only half-integer $r$ produces the required minus sign. The moding is *forced* by antiperiodicity, not put in by hand.
>
> **(b)** The weight shift is always measured relative to the untwisted vacuum energy $E_0^{\rm int}$. Integer modes are the ordinary-boson case, whose chiral zero-point energy is $E_0^{\rm int}=\tfrac12\zeta(-1)=-\tfrac1{24}$ — identical to the untwisted vacuum, so the shift $h=E_0^{\rm int}-E_0^{\rm int}$ vanishes: no twist field at all. This is exactly the untwisted answer, which is the tell: integer modes describe a string that closes *periodically*, $Y(\sigma+2\pi)=+Y(\sigma)$, the opposite of the twisted condition. They cannot represent a string that closes across the fold. The correct half-integer modes instead give $E_0^{\rm tw}=\tfrac1{48}$ and $h=E_0^{\rm tw}-E_0^{\rm int}=\tfrac1{48}+\tfrac1{24}=\tfrac1{16}$. The moral: the $\tfrac1{16}$ is not an independent input — it is the direct arithmetic consequence of the half-integer moding, which is itself the direct consequence of antiperiodicity.
