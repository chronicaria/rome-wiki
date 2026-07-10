---
title: 00 — Overview
number: "8.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, point-particle]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The relativistic point particle is the string in miniature — its geometric action, reparameterization redundancy, gauge freedom, and mass-shell constraint are the *same* four features that reappear one dimension up on the worldsheet.

## Curve to surface

A point particle moving through spacetime traces out a **curve** — its worldline. A string moving through spacetime sweeps out a **surface** — its worldsheet. Every construction in this module survives that single upgrade: master how the particle works and the string is a near-mechanical copy with one more dimension.

Here is the recipe, identical for both:

> Measure the **geometric size** of what the object sweeps out — proper *length* for a particle's curve, proper *area* for a string's surface — multiply by the right dimensionful constant ($mc$ for the particle, the tension for the string), and *that* is the action.

Everything else follows from that one action. And because "the length of a curve" doesn't care what ruler you laid along it, the particle carries a built-in redundancy: you can relabel the worldline any way you like without changing the physics. Spend that freedom well (pick a convenient label) and the equations collapse to something simple. This redundancy is the toy version of the gauge freedom that makes the whole string story tractable.

**Why start here instead of jumping to the string?** Because the string action is impossible to guess cold, but it is an obvious generalization of the particle action. You are not learning the particle for its own sake — you are learning the *pattern*, so that the [[Nambu-Goto action|Nambu–Goto action]] of Module 09 feels inevitable rather than dropped from the sky.

## What you'll build, and the tools you'll pick up

Starting from the geometric action

$$S = -mc\int ds$$

— minus the rest energy times the proper time, since $ds$ is proper *length* and $ds/c$ is proper *time* — you extract, in order: the equation of motion, the conserved four-momentum, and the mass-shell constraint, plus the freedom to relabel the worldline.

New tools, introduced just-in-time (no prior physics assumed):

- the invariant interval, proper length, and proper time (mostly-plus signature $\eta=\mathrm{diag}(-,+,+,+)$ throughout);
- four-vectors $x^\mu,\,p^\mu$ and how to contract them with $\eta_{\mu\nu}$;
- varying an action with the endpoints held fixed;
- a **gauge redundancy** (relabeling the same object) versus a genuine **symmetry** (relating different physical situations) — a distinction that will matter enormously later.

## The sublessons

Read them roughly in this order; each is one atomic idea.

- 8.1 [[Proper length and proper time]] — the notation bridge: $ds$ is length, $ds/c$ is clock time, and $p^\mu = mc\,dx^\mu/ds$. Everything downstream inherits these units.
- 8.2 [[Proper-time action]] — building $S=-mc\int ds$ from a units-plus-invariance argument, then recovering the Lagrangian $L$, momentum $\vec p$, and energy $E$.
- 8.3 [[Part II - Classical Strings/08 Relativistic Point Particle/Reparameterization invariance|Reparameterization invariance]] — why relabeling the worldline can't change the physics; the one-line manifest proof.
- 8.4 [[Gauge choices for the worldline parameter]] — spending that freedom: the proper-length gauge $\tau=s$ (the particle's own clock, up to the factor $c$), the static gauge $\tau=t$, and the light-cone gauge.
- 8.5 [[Free particle equation of motion]] — varying the action to get $dp_\mu/d\tau=0$, and $d^2x^\mu/ds^2=0$ in the proper-length gauge.
- 8.6 [[Mass-shell relation]] — the constraint $p^\mu p_\mu = -m^2c^2$ and its lift to the string mass formula.
- 8.7 [[Worldline versus worldsheet]] — the module's capstone: the full point-particle $\leftrightarrow$ string dictionary, row by row, with honest flags on what does *not* carry over.

## What the module buys you

A particle's action is the length of its path in spacetime — that is the entire input. From it come how the particle moves (straight worldlines), what is conserved (four-momentum), and a hidden constraint linking energy, momentum, and mass. A string does the identical thing with area in place of length, so all four features — geometric action, reparameterization redundancy, gauge freedom, constraint — carry over, each with one more dimension's worth of structure.

One row of the coming dictionary matters already, because it is where string theory's characteristic fields come from: a **1-dimensional** worldline couples naturally to a field with **one** index ($A_\mu$, electromagnetism); a **2-dimensional** worldsheet therefore couples to a field with **two** indices — the antisymmetric [[Kalb-Ramond field|$B_{\mu\nu}$]]. The dimension of the swept object dictates the rank of the field it can carry. Details in 8.7 [[Worldline versus worldsheet]].

## Open questions

- **Global vs. local extremum.** A straight timelike worldline *locally* maximizes proper time; conjugate points can spoil the global statement in curved spacetime.
- **Constraint as a generator.** The mass shell $p^\mu p_\mu = -m^2c^2$ is really a Hamiltonian constraint that *generates* reparameterizations via Poisson brackets — tied to 8.6 [[Mass-shell relation]], developed fully in the quantization modules.
- **Massless limit.** $-mc\int ds$ degenerates when $m=0$ (the photon has $ds=0$ along its path), yet the mass-shell *constraint* survives. This is the first hint that the constraint is more fundamental than the square-root action, and it points toward the einbein / [[Polyakov action]] formulation — beyond this module.

## Exercise

This is the no-notes self-test for the whole module. Close the notes and do both halves; then check against the folded solution.

1. **Conceptual.** Explain *why* changing the parameter along a worldline cannot change the physical path.
2. **Derivation.** Starting from $S=-mc\int ds$, derive the free relativistic equation of motion. Identify the four-momentum along the way and state what happens in the proper-length gauge.

> [!success]- Solution
> **Part 1 — reparameterization can't change the physics.**
> The action measures the *intrinsic proper length* of the worldline as a curve (equivalently its proper time, after dividing by $c$). A parameter $\tau$ is just a ruler we lay along that curve; the curve, and hence its length, exist before we pick any ruler. Concretely, the integrand is a square root **homogeneous of degree one** in the velocities $dx^\mu/d\tau$. Under a relabeling $\tau\to\tau'(\tau)$ (strictly increasing), the chain rule pulls one Jacobian factor $d\tau'/d\tau$ *out* of the square root, while the measure absorbs the other: $\frac{d\tau'}{d\tau}\,d\tau = d\tau'$. The two cancel, and $S$ comes out with the identical form in $\tau'$. No equations of motion were used — the invariance is *manifest*. So the parameter was never physical, and the extremal path can't depend on it.
>
> **Part 2 — the equation of motion.**
> Vary the worldline by $\delta x^\mu(\tau)$ with fixed endpoints. Since $ds^2=-\eta_{\mu\nu}\,dx^\mu dx^\nu$, varying gives $2\,ds\,\delta(ds)=-2\,\eta_{\mu\nu}\,\delta(dx^\mu)\,dx^\nu$ (the two symmetric terms combine), so
> $$\delta(ds) = -\eta_{\mu\nu}\,\delta(dx^\mu)\,\frac{dx^\nu}{ds}.$$
> Use $\delta(dx^\mu)=d(\delta x^\mu)$ (variation and differentiation commute), giving
> $$\delta S = -mc\int\delta(ds) = mc\int_{\tau_i}^{\tau_f}\eta_{\mu\nu}\,\frac{d(\delta x^\mu)}{d\tau}\,\frac{dx^\nu}{ds}\,d\tau.$$
> Integrate by parts. The boundary term vanishes because $\delta x^\mu(\tau_i)=\delta x^\mu(\tau_f)=0$, leaving
> $$\delta S = -\int_{\tau_i}^{\tau_f} d\tau\;\delta x^\mu\,\frac{d}{d\tau}\Big(mc\,\frac{dx_\mu}{ds}\Big).$$
> Recognize the **four-momentum** $p_\mu = mc\,dx_\mu/ds$. Since $\delta x^\mu$ is arbitrary in the interior, $\delta S=0$ for all variations forces
> $$\boxed{\;\frac{dp_\mu}{d\tau}=0\;}$$
> — the four-momentum is constant along the worldline. This is manifestly parameter-independent: a constant function has zero derivative with respect to *any* parameter, exactly as Part 1 demanded.
>
> **Proper-length gauge.** Choose $\tau=s$. Then $p_\mu=mc\,dx_\mu/ds$ with constant $m$ gives
> $$\boxed{\;\frac{d^2x^\mu}{ds^2}=0\;}$$
> — the worldline is straight (equal four-vector steps per equal proper length, equivalently per equal proper time $ds/c$). This is Newton's first law in relativistic dress. It is *gauge-specific*: it holds for $\tau=s$, not for an arbitrary parameter that spaces its marks unevenly.
>
> You should be able to write both boxed equations from memory and say one sentence of meaning beside each. Full details: 8.5 [[Free particle equation of motion]] and 8.3 [[Part II - Classical Strings/08 Relativistic Point Particle/Reparameterization invariance|Reparameterization invariance]].
