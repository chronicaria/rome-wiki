---
title: Virasoro constraints
number: "22.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, polyakov-cft]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The Virasoro constraints are one equation, $T_{\alpha\beta}=0$, written three ways: as "the worldsheet stress tensor vanishes," as $(\dot X\pm X')^2=0$ in conformal gauge, and as infinitely many conditions $L_n=0$ on the oscillator modes. Same content, three costumes.

## Why a metric variation gives a constraint

The auxiliary worldsheet metric $h_{\alpha\beta}$ is a fake degree of freedom — we put it into the [[Polyakov action]] by hand and it carries no dynamics of its own. Whenever a non-dynamical field sits in an action, its equation of motion is not a law of motion; it is a **constraint** on the *other* fields. Varying $h_{\alpha\beta}$ produces that constraint, and it happens to be exactly $T_{\alpha\beta}=0$. So:

> **Virasoro constraints = "the worldsheet stress tensor is zero."** The name "Virasoro" only shows up later, when we Fourier-expand that zero and discover the modes obey the Virasoro algebra.

Physically, what does $T_{\alpha\beta}=0$ *say* about the string? In conformal gauge it forces $(\partial_+X)^2=(\partial_-X)^2=0$: the two null tangent directions on the worldsheet map to **null directions in spacetime**. The string cannot store energy in "stretching along itself" — only transverse wiggles are physical. This is the same no-longitudinal-motion fact you solved by hand in light-cone gauge, now falling out of a metric variation instead of being imposed.

## From the metric equation of motion

The [[Worldsheet stress tensor]] of the Polyakov string is
$$
T_{\alpha\beta}
=\partial_\alpha X\cdot\partial_\beta X
-\tfrac12\,h_{\alpha\beta}\,h^{\gamma\delta}\,\partial_\gamma X\cdot\partial_\delta X,
$$
where $A\cdot B\equiv \eta_{\mu\nu}A^\mu B^\nu$ contracts spacetime indices with the **mostly-plus** metric $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,\dots,+1)$. Because $h_{\alpha\beta}$ enters the action with no derivatives, its Euler–Lagrange equation is purely algebraic:
$$
\boxed{\,T_{\alpha\beta}=0.\,}\tag{1}
$$
This is the covariant version of a familiar move in constrained mechanics: drop a non-propagating variable into the Lagrangian and its equation of motion deletes unphysical motion rather than evolving anything. (The point-particle einbein does the same job, turning $S=-m\int\sqrt{-\dot x^2}$ into the mass-shell constraint $p^2+m^2=0$; see [[Independent worldsheet metric]].)

## Conformal-gauge form

Gauge-fix to **conformal gauge** $h_{\alpha\beta}=e^{2\omega}\eta_{\alpha\beta}$ with $\eta_{\alpha\beta}=\mathrm{diag}(-1,+1)$ and coordinates $(\tau,\sigma)$; write $\dot X=\partial_\tau X$, $X'=\partial_\sigma X$. The Weyl factor $e^{2\omega}$ cancels between $h_{\alpha\beta}$ and $h^{\gamma\delta}$ in $T_{\alpha\beta}$, so it drops out entirely — the constraint is Weyl-blind. The components are
$$
T_{\tau\tau}=T_{\sigma\sigma}=\tfrac12\big(\dot X^2+X'^2\big),
\qquad
T_{\tau\sigma}=\dot X\cdot X'.
$$
(The equality $T_{\tau\tau}=T_{\sigma\sigma}$ is tracelessness $T^\alpha{}_\alpha=0$, an identity in 2D — one of the three metric-EOM components is redundant, matching the count in [[Independent worldsheet metric]].) Setting $T_{\alpha\beta}=0$ gives the two independent **Virasoro constraints**
$$
\dot X^2+X'^2=0,
\qquad
\dot X\cdot X'=0.\tag{2}
$$
Adding and subtracting them packages both into
$$
(\dot X+X')^2=0,
\qquad
(\dot X-X')^2=0,\tag{3}
$$
i.e. $T_{++}\propto(\partial_+X)^2=0$ and $T_{--}\propto(\partial_-X)^2=0$ with $\sigma^\pm=\tau\pm\sigma$. *This is the null-tangent statement: the left- and right-moving tangent vectors are lightlike in spacetime.* The relation $\dot X^2+X'^2=0$ can hold with a mostly-plus metric precisely because $\dot X^2$ can be negative — the timelike coordinate $X^0$ is doing the cancelling.

## Mode language: why $L_n$ appears

The left- and right-movers decouple, so expand each constraint in Fourier modes along the string. Using the open-string oscillator expansion $\dot X^\mu\pm X'^\mu=\sqrt{2\alpha'}\sum_{n\in\mathbb Z}\alpha^\mu_n\,e^{-in(\tau\pm\sigma)}$ (with $\alpha^\mu_0=\sqrt{2\alpha'}\,p^\mu$), squaring gives
$$
(\dot X\pm X')^2 = 4\alpha'\sum_{n\in\mathbb Z} L_n\,e^{-in(\tau\pm\sigma)},
\qquad
\boxed{\,L_n=\tfrac12\sum_{p\in\mathbb Z}\alpha_{n-p}\cdot\alpha_p\,.}\tag{4}
$$
So constraint (3) — "this function of $\sigma$ vanishes everywhere" — is equivalent to "every Fourier coefficient vanishes." Classically, therefore,
$$
(\partial_\pm X)^2=0
\quad\Longleftrightarrow\quad
L_n=0\ \ \text{for all }n,\tag{5}
$$
For the closed string an independent barred tower $\bar L_n$ arises the same way from the right-movers, giving $\bar L_n=0$ as well; for the open string the Neumann boundary conditions tie the two chiralities together, so both $(\dot X\pm X')^2$ are built from the same oscillators $\alpha_n^\mu$ and there is only the single tower $L_n$. A single local equation has become infinitely many number-valued conditions — one per mode.

Two facts about these $L_n$ that decide the whole quantum story:

- **They sum over *all* spacetime directions, $X^0$ included.** Unlike the transverse light-cone operators $L_n^\perp$ (which run over $I=2,\dots,D-1$ only), the covariant $L_n$ in (4) contract with $\eta_{\mu\nu}$, so the timelike oscillators appear. That extra baggage is exactly why covariant quantization must work to kill negative-norm ("ghost") states that light-cone gauge never even produces.
- **Equivalently on the plane,** $L_n$ is the Laurent mode of the holomorphic stress tensor, $T(z)=\sum_n L_n/z^{n+2}$, i.e. $L_n=\frac{1}{2\pi i}\oint dz\,z^{n+1}T(z)$ (see [[Complex coordinates on the worldsheet]]). The contour integral is just coefficient extraction; it is the CFT-native route to the same operators.

## The quantum weakening — and why it is forced

Classically, demanding $L_n=0$ for *every* $n$ is harmless. Quantum-mechanically it is **impossible**, and the reason is a short computation, not a slogan.

Promote the $L_n$ to operators. They no longer commute; they obey the Virasoro algebra
$$
[L_m,L_n]=(m-n)L_{m+n}+\frac{c}{12}\,m(m^2-1)\,\delta_{m+n,0},
\qquad c=D\tag{6}
$$
(derived in [[Virasoro algebra and central charge]]; $c=D$ because each of the $D$ free bosons contributes one unit to the central term). Suppose a physical state $|\psi\rangle$ were annihilated by *all* $L_n$. Take $m=2,\,n=-2$. The left side of (6) then kills $|\psi\rangle$ automatically:
$$
[L_2,L_{-2}]\,|\psi\rangle = L_2\underbrace{L_{-2}|\psi\rangle}_{0}-L_{-2}\underbrace{L_2|\psi\rangle}_{0}=0.
$$
But the right side of (6) at $m=2$ is $[L_2,L_{-2}]=4L_0+\tfrac{c}{12}\cdot 2(4-1)=4L_0+\tfrac{c}{2}$. Using the required mass-shell condition $(L_0-1)|\psi\rangle=0$ (the "intercept," fixed below), this must also annihilate $|\psi\rangle$:
$$
\Big(4L_0+\tfrac{c}{2}\Big)|\psi\rangle=\Big(4+\tfrac{c}{2}\Big)|\psi\rangle=0.
$$
Since $c=D>0$, the prefactor $4+D/2$ is a nonzero number, so $|\psi\rangle=0$. **Imposing all the constraints leaves only the zero state.** The central term — the purely quantum piece of (6) — is the obstruction: it is a c-number that cannot be annihilated away.

The escape is the same one used for the Lorenz condition $\partial_\mu A^\mu=0$ in photon quantization: impose only *half* the constraints. Keep the **positive-mode** ("annihilation-like") half,
$$
\boxed{\,L_n|\psi\rangle=0\ \ (n>0),
\qquad
(L_0-1)|\psi\rangle=0\,}\tag{7}
$$
(for the open bosonic string; the closed string adds the barred copy $\bar L_n|\psi\rangle=0$, $(\bar L_0-1)|\psi\rangle=0$, and level matching $L_0=\bar L_0$). The negative modes $L_{-n}$ then build *descendants* rather than being set to zero, and the two "halves" only have to agree in expectation value, $\langle\psi|L_n|\psi\rangle=0$ for all $n\neq0$, which (7) guarantees. It is a theorem that this half suffices to remove every negative-norm state.

Why the shift by $1$ in $L_0$? The naive $L_0$ is a divergent operator-ordered sum; normal-ordering it leaves a finite constant $a$, and matching the covariant spectrum to the light-cone answer fixes $a=-1$ for the bosonic string — an intercept $-a=1$ (the same $-1/12$-flavored Casimir shift that gives the tachyon; see [[Normal ordering constant]]). Concretely, $(L_0-1)|\psi\rangle=0$ is the mass-shell relation $M^2=\tfrac{1}{\alpha'}(N-1)$ with $N$ the number operator.

States satisfying (7) are **Virasoro primaries with the right $L_0$ eigenvalue**; the leftover null/gauge states are quotiented out, a story continued in [[Vertex operators and physical-state conditions]].

## Two gauges, one physics

Light-cone gauge and covariant quantization attack (2) from opposite ends:

- **Light-cone** *solves* the constraints classically. Setting $X^+\propto\tau$ uses up the residual gauge freedom, and then (2) determines $X^-$ algebraically in terms of the transverse $X^I$. Only the $D-2$ transverse oscillators survive — manifestly ghost-free, but Lorentz invariance is hidden.
- **Covariant** keeps *all* $X^\mu$ and never solves (2); it imposes (7) on states instead. Lorentz invariance is manifest, but ghosts must be exorcised by hand.

The two must agree, and their agreement — the covariant spectrum matching the transverse one — is a linchpin of the consistency argument that culminates in [[Total central charge and D = 26]].

## Open questions

- The Virasoro algebra (6) and the origin of its central term $c=D$ are derived in [[Virasoro algebra and central charge]].
- The ghost contribution $c=-26$, BRST refinement, and the resulting $D=26$ live in [[Total central charge and D = 26]] and its siblings.
- The claim that "half the constraints suffice to kill all negative-norm states" (the no-ghost theorem) is used here but proved only in outline; the full statement is the Goddard–Thorn / DDF result, beyond this module.

## Exercise

Repeat the killing argument of the "quantum weakening" section with the pair $(L_1,L_{-1})$ instead of $(L_2,L_{-2})$. What does it tell you, and why is it *not* enough to conclude "you can't impose all the constraints"? Then say which values of $m$ *do* give a fatal obstruction.

> [!success]- Solution
> Assume $L_1|\psi\rangle=L_{-1}|\psi\rangle=0$ and $(L_0-1)|\psi\rangle=0$. As before the commutator annihilates $|\psi\rangle$ term by term, so we need the algebra's right-hand side to do the same. From (6) with $m=1,\,n=-1$:
> $$[L_1,L_{-1}]=(1-(-1))L_0+\frac{c}{12}\cdot 1\cdot(1^2-1)=2L_0+0=2L_0.$$
> The central term **vanishes** because $m(m^2-1)=1\cdot0=0$ at $m=1$. So the condition is just $2L_0|\psi\rangle=0$, i.e. $L_0|\psi\rangle=0$. Combined with $(L_0-1)|\psi\rangle=0$ this forces $L_0|\psi\rangle=0$ *and* $L_0|\psi\rangle=|\psi\rangle$, hence $|\psi\rangle=0$ — but only because of the intercept, **not** because of the anomaly. This is a weaker, less interesting obstruction: it would disappear if the intercept were zero.
>
> The lesson: the anomaly bites exactly when the central term $\tfrac{c}{12}m(m^2-1)$ is nonzero, which requires $|m|\ge 2$. For $m\in\{-1,0,1\}$ the central term is zero, so $\{L_{-1},L_0,L_1\}$ close *without* anomaly (this holomorphic triplet generates the $SL(2,\mathbb{R})$ Möbius subalgebra; together with the barred triplet $\{\bar L_{-1},\bar L_0,\bar L_1\}$ it gives the full global $SL(2,\mathbb{C})$ conformal group of the plane). The genuinely quantum, intercept-independent contradiction — the one that says "no nonzero state can satisfy every constraint" — first appears at $m=2$, exactly the pair used in the main text. Any $|m|\ge2$ works: on an intercept-$1$ state the pair $(L_m,L_{-m})$ leaves the residual c-number $2m+\tfrac{c}{12}m(m^2-1)$, whose survival is forced by the central term (the $2m$ piece alone would cancel against a zero intercept, but the $c$-piece cannot, and it is positive since $c=D>0$).
