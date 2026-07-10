---
title: Constraints as restrictions on motion
number: "5.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, constraints]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A constraint does not tell your data how to move; it tells you which data were legal to begin with.

## Evolution laws versus constraints

Most equations of physics are *evolution laws*: hand one the state now, it returns the state a moment later. A constraint never mentions the future. It is a bouncer at the door: it inspects a candidate state, pronounces it allowed or forbidden, and only allowed states are ever admitted to the dynamics.

Two ways to tell them apart at a glance:

- **Evolution law** — can be solved for an acceleration ("$\ddot x = \dots$"). It predicts.
- **Constraint** — an algebraic relation among positions, velocities, or momenta *at one instant*, with no acceleration in sight. It filters.

The claim this note develops: wherever a physical history can be described in more than one way — the same worldline traced at any speed, the same string surface gridded by any coordinates — the description carries more variables than the physics does, and the surplus is pinned down by constraints. **Redundancy in the description is the source of the constraints.** That single principle produces both the relativistic particle's mass shell and the string's two Virasoro conditions below.

## Warm-up: a bead on a wire

A bead threaded on a fixed wire obeys $f(q)=0$, the equation of the wire. Notice what this equation is *not*: it says nothing about the bead's acceleration. It only declares that the configuration must sit on the wire. Dynamics happens *along* the allowed surface; the constraint just says which surface. Every constraint below is this same move, promoted to phase space: an algebraic surface the pair $(\text{position},\text{momentum})$ must lie on before any evolution is even discussed.

## Relativistic particle: the mass shell is a constraint

The cleanest example. A point particle sweeps a worldline; its action is the invariant length of that line (mostly-plus signature; $c$ kept throughout):
$$
S=-mc\int d\tau\,\sqrt{-\dot x^\mu\dot x_\mu},
\qquad
\dot x^\mu=\frac{dx^\mu}{d\tau}.
$$
The integrand $d\tau\sqrt{-\dot x^2}$ is invariant arc length along the curve ($c$ times the elapsed proper time) — reparameterizing $\tau$ retraces the *same* curve at a different speed, so $\tau$ is a fake label. That fakeness is the redundancy that will force a constraint.

The canonical momentum is
$$
p_\mu=\frac{\partial L}{\partial\dot x^\mu}
=mc\,\frac{\dot x_\mu}{\sqrt{-\dot x^2}}.
$$
It points along the worldline's tangent, but the arbitrary *magnitude* of $\dot x^\mu$ has divided out — $p_\mu$ knows the direction of travel, not the (meaningless) speed in $\tau$. That erasure of scale is what leaves a relation behind. Square it:
$$
p^\mu p_\mu
=m^2c^2\,\frac{\dot x^\mu\dot x_\mu}{-\dot x^\nu\dot x_\nu}
=-m^2c^2.
$$
Therefore
$$ \boxed{\;p^\mu p_\mu+m^2c^2=0.\;} \tag{1}$$
This is the [[Mass-shell relation]]. Read it correctly: it is **not** an equation for $\dot p_\mu$ or $\ddot x^\mu$ — no time derivative of the momentum appears. It is the bouncer. Every allowed momentum must already satisfy it; a $p_\mu$ off the mass shell was never a legal particle state.

The same redundancy shows up as a vanishing Hamiltonian:
$$
H_{\rm can}=p_\mu\dot x^\mu-L=0.
$$
Why zero? Because $L$ is homogeneous of degree one in $\dot x^\mu$, Euler's theorem gives $p_\mu\dot x^\mu=L$ and the difference vanishes identically. So "evolution in $\tau$" generates no real change — $\tau$ is a gauge label, not a clock, until you pick a gauge. A vanishing canonical Hamiltonian is the signature of reparameterization redundancy.

## Nambu–Goto string: two constraints at every point

The string repeats the particle's trick — twice, because a surface has two coordinate labels $(\tau,\sigma)$ to relabel instead of one. The Nambu–Goto density is
$$
\mathcal L=-\frac{T_0}{c}\sqrt{(\dot X\cdot X')^2-\dot X^2 X'^2},
$$
with $\dot X=\partial_\tau X$, $X'=\partial_\sigma X$, and tension $T_0$. Abbreviate the three invariants and the discriminant:
$$
A=\dot X^2,\qquad B=\dot X\cdot X',\qquad C=X'^2,\qquad \Delta=B^2-AC.
$$
For a physical worldsheet the $\tau$-direction is timelike and the $\sigma$-direction spacelike, so $A<0$, $C>0$, and $\Delta>0$: the square root is real.

The momentum density conjugate to $X^\mu$ follows by differentiating $\mathcal L=-\frac{T_0}{c}\sqrt\Delta$, using $\partial\Delta/\partial\dot X^\mu = 2B X'_\mu - 2C\dot X_\mu$:
$$
\mathcal P^\tau_\mu
=\frac{\partial\mathcal L}{\partial\dot X^\mu}
=\frac{T_0}{c}\,\frac{C\dot X_\mu-B X'_\mu}{\sqrt\Delta}.
$$
This is the $\sigma$-density of spacetime momentum built in [[World-sheet momentum current]]. The two constraints now fall out by pure algebra — no equations of motion needed, which is the tell that they are constraints, not dynamics.

**Constraint 1 — dot $\mathcal P^\tau$ into $X'$:**
$$
\mathcal P^\tau\cdot X'
=\frac{T_0}{c}\,\frac{C(\dot X\cdot X')-B(X'^2)}{\sqrt\Delta}
=\frac{T_0}{c}\,\frac{CB-BC}{\sqrt\Delta}=0.
$$
Momentum density has zero component along the string's own tangent. Sliding grid points along the string is not motion of the string — it is renaming, and renaming carries no momentum. All real motion is transverse.

**Constraint 2 — square $\mathcal P^\tau_\mu$:**
$$
(\mathcal P^\tau)^2
=\frac{T_0^2}{c^2}\,\frac{C^2A-2CB^2+B^2C}{\Delta}
=\frac{T_0^2}{c^2}\,\frac{C(AC-B^2)}{\Delta}
=-\frac{T_0^2}{c^2}\,C,
$$
using $AC-B^2=-\Delta$. Since $C=X'^2$,
$$
\boxed{\;
\mathcal P^\tau\cdot X'=0,\qquad
(\mathcal P^\tau)^2+\frac{T_0^2}{c^2}\,X'^2=0.
\;} \tag{2}
$$
These are two local conditions on the phase-space data $(X^\mu,\mathcal P^\tau_\mu)$ **at each point $\sigma$** — the string version of the particle's single mass shell $(1)$. Before you evolve a string, its data must already sit on this surface. The family resemblance is no accident: $(1)$ ties $p^2$ to a mass, $(2)$ ties $(\mathcal P^\tau)^2$ to the local stretch $X'^2$, and each is the fingerprint of a fake label being quotiented away.

## Conformal-gauge form: the classical Virasoro seeds

The redundancy lets us choose worldsheet coordinates ($\tau$ and $\sigma$ in common units) in which the induced metric $\gamma_{\alpha\beta}=\partial_\alpha X\cdot\partial_\beta X$ is conformally flat: a positive function times $\mathrm{diag}(-1,1)$. Then $B=0$ and $A=-C$, so $\sqrt\Delta=C$ and the momentum density collapses to $\mathcal P^\tau_\mu=(T_0/c)\,\dot X_\mu$. In these coordinates the pair $(2)$ reads
$$
\dot X\cdot X'=0,\qquad \dot X^2+X'^2=0.
$$
The first says the $\tau$- and $\sigma$-tangents are orthogonal; the second says they have equal and opposite norm. Add and subtract them:
$$
(\dot X+X')^2=0,\qquad (\dot X-X')^2=0,
$$
since $(\dot X\pm X')^2 = (\dot X^2+X'^2)\pm 2\,\dot X\cdot X'$ and both pieces vanish. The left- and right-moving tangent directions on the string are null in spacetime — a wave running along the string traces a light-like track in the target. These two null conditions are the classical seeds of the [[Virasoro constraints]]: mode-expanding them yields the Virasoro operators, and demanding that they survive quantization is what later fixes the critical dimension.

## Symmetry versus redundancy: the same origin, opposite meanings

Both conserved charges and constraints are born from invariance — but invariance of two different kinds, and confusing them is the classic beginner error.

| | maps between... | produces | example |
|---|---|---|---|
| **Physical symmetry** | *different* physical states | a conserved **charge** | spacetime translation $\to$ momentum $p_\mu$ |
| **Gauge redundancy** | *the same* physical state | a **constraint** | worldline / worldsheet reparameterization $\to$ mass shell, Virasoro |

**An invariance that carries you to a genuinely new state hands you a conserved quantity; an invariance that merely renames the state you are already in hands you a constraint.** Momentum is real physics you can measure; the mass shell is bookkeeping that removes fiction. See [[Gauge fixing as choosing a representative]] for how one then *chooses* a representative and solves the constraints away.

## Open questions

- Dirac's first-class / second-class classification is the systematic Hamiltonian language for these constraints; worth a note only once quantization needs it.
- Boundary conditions can turn string-only momentum conservation into momentum *exchange* with a brane — that belongs with D-branes, not this structural note.

## Exercise

A student, reasoning by analogy with the ordinary particle Hamiltonian, claims the relativistic particle's canonical Hamiltonian should be the familiar relativistic energy $H=\sqrt{c^2 p^ip_i+m^2c^4}$ (spatial momenta only) and is puzzled why the boxed result $(1)$ instead gives a *constraint*. Resolve the tension in two short steps:

1. Compute $H_{\rm can}=p_\mu\dot x^\mu-L$ directly for $S=-mc\int d\tau\sqrt{-\dot x^2}$ and show it vanishes identically.
2. Explain, in one sentence each, (a) *why* it vanishes and (b) what the mass-shell relation $(1)$ is doing if it is not serving as the Hamiltonian.

> [!success]- Solution
> **Step 1.** With $p_\mu = mc\,\dot x_\mu/\sqrt{-\dot x^2}$,
> $$
> p_\mu\dot x^\mu = mc\,\frac{\dot x_\mu\dot x^\mu}{\sqrt{-\dot x^2}} = mc\,\frac{\dot x^2}{\sqrt{-\dot x^2}} = -mc\,\sqrt{-\dot x^2} = L.
> $$
> Hence $H_{\rm can}=p_\mu\dot x^\mu-L=L-L=0$ identically, for *every* trajectory — not only on shell.
>
> **Step 2.**
> (a) It vanishes because $L$ is homogeneous of degree one in $\dot x^\mu$ (rescaling $\dot x^\mu\to\lambda\dot x^\mu$ scales $L$ by $\lambda$), so Euler's theorem forces $p_\mu\dot x^\mu=L$. This homogeneity is exactly the $\tau$-reparameterization redundancy: $\tau$ is a fake label, so "energy conjugate to $\tau$" is zero.
> (b) With $H_{\rm can}\equiv 0$ there is no clock and no evolution law from it; the physical content lives entirely in the constraint $(1)$, $p^2+m^2c^2=0$, which filters allowed momenta rather than evolving them. The student's $H$ appears only *after* gauge-fixing $\tau$ to a physical time (static gauge $x^0=c\tau$): solving $(1)$ for the positive-energy root, $p_0=-\sqrt{p^ip_i+m^2c^2}$, gives $E=-cp_0=\sqrt{c^2p^ip_i+m^2c^4}$ (mostly-plus: $E=cp^0=-cp_0$), turning the constraint into exactly that gauge-fixed Hamiltonian. Constraint first, Hamiltonian only after a choice of clock.
