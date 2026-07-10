---
title: Action and field equations for a scalar
number: "4.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, scalar-field]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A free scalar field is a continuum of coupled springs; demanding Lorentz invariance forces its action, whose equation of motion is Klein–Gordon, and whose Fourier modes can be nonzero only on the mass-shell $p^2+m^2=0$.

Imagine an infinite mattress of springs — one at every point of space, each pulled back toward $\phi=0$, each tied to its neighbors so a wiggle propagates. That is a **field**: a number $\phi(t,\vec x)$ at every point, evolving in time. Write down the energy of this mattress in the only way relativity allows, demand stationary action, and two things fall out. First, the wiggles obey a wave equation with a stiffness term (Klein–Gordon). Second, in momentum space that equation is pure algebra: a wave of momentum $\vec p$ can oscillate only at the frequency $E_p=\sqrt{\vec p^{\,2}+m^2}$ — the relativistic energy of a particle of mass $m$. The field's constitution already contains the particle; everything below works out those two sentences.

## What a field is

In particle mechanics the dynamical variables are positions — finitely many numbers per instant. A **field** $\phi(t,\vec x)$ is one number *per point of space, per instant*. The clean mental model: a long vector $q_i(t)$ indexed by lattice sites, then send the lattice spacing to zero, so the sum over sites $i$ becomes an integral over $\vec x$. A **scalar** field carries no spacetime indices — two Lorentz observers agree on its value at each fixed spacetime point. That makes it the cleanest place to learn the field-to-particle dictionary: no polarization labels to track yet, unlike the photon and graviton later in this module.

> **Conventions, fixed once.** Natural units $\hbar=c=1$. Mostly-plus signature: $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,\dots,+1)$, so $p^\mu=(E,\vec p)$, $p_\mu=(-E,\vec p)$, and $p^2=p_\mu p^\mu=-E^2+\vec p^{\,2}$. Spacetime dimension $D=d+1$. (Many texts use the opposite, mostly-minus signature — flip signs when cross-reading.)

## Building the action

Mechanical intuition, imported term by term:

- **Kinetic energy** $\sim(\text{rate of change})^2$: it costs energy for the field to change in time. $\;T=\tfrac12(\partial_0\phi)^2$.
- **Potential energy** $\sim(\text{displacement})^2$: a harmonic well pinning $\phi$ to equilibrium $\phi=0$. $\;V=\tfrac12 m^2\phi^2$.

Both terms are quadratic in $\phi$ and must share units, so $[m]=L^{-1}=M$: **the constant $m$ carries units of mass** — the first hint it will *be* the particle's mass.

The naive density $\mathcal L=T-V=\tfrac12(\partial_0\phi)^2-\tfrac12 m^2\phi^2$ is **not** Lorentz invariant: it singles out time. Relativity refuses to let time-variation cost energy while space-variation is free, so we must add a **gradient energy** $\tfrac12(\nabla\phi)^2$ — spatial wiggles cost energy too, entered with the sign of ordinary potential energy. The time and space derivatives then merge into one contracted term:

$$ \boxed{\ \mathcal L = -\tfrac12\,\eta^{\mu\nu}\,\partial_\mu\phi\,\partial_\nu\phi - \tfrac12 m^2\phi^2\ } $$

Every index is contracted, so $\mathcal L$ is a Lorentz scalar — that was the whole point of adding the gradient term. Sign check: $-\tfrac12\eta^{\mu\nu}\partial_\mu\phi\,\partial_\nu\phi = -\tfrac12\big(-(\partial_0\phi)^2+(\nabla\phi)^2\big)=\tfrac12(\partial_0\phi)^2-\tfrac12(\nabla\phi)^2$, i.e. kinetic minus gradient energy, as required. The action is

$$ S = \int d^Dx\;\Big(-\tfrac12\eta^{\mu\nu}\partial_\mu\phi\,\partial_\nu\phi - \tfrac12 m^2\phi^2\Big). $$

"**Free**" means every term is quadratic in $\phi$. In linear-algebra language $S$ is a quadratic form, so its equation of motion is linear and Fourier modes will diagonalize it, exactly as eigenvectors diagonalize a finite quadratic form. A cubic-or-higher term would couple the modes — an *interacting* field.

## Equation of motion

Vary $\phi\to\phi+\delta\phi$; only the derivative term needs care:

$$
\delta S
= \int d^Dx\,\Big(-\eta^{\mu\nu}\partial_\mu(\delta\phi)\,\partial_\nu\phi - m^2\phi\,\delta\phi\Big).
$$

Integrate the derivative term by parts,

$$
-\eta^{\mu\nu}\partial_\mu(\delta\phi)\,\partial_\nu\phi
=-\partial_\mu\!\left(\eta^{\mu\nu}\delta\phi\,\partial_\nu\phi\right)
+\delta\phi\,\eta^{\mu\nu}\partial_\mu\partial_\nu\phi ,
$$

and the total derivative integrates to a boundary term that vanishes (compact support, falloff at infinity, or the periodic box used later). What survives is

$$ \delta S = \int d^Dx\;\delta\phi\,\Big(\eta^{\mu\nu}\partial_\mu\partial_\nu\phi - m^2\phi\Big). $$

Requiring $\delta S=0$ for *arbitrary* $\delta\phi$ forces the bracket to vanish. Writing $\partial^2\equiv\eta^{\mu\nu}\partial_\mu\partial_\nu$:

$$ \boxed{\ (\partial^2 - m^2)\,\phi = 0\ } $$

Separating time and space ($\partial^2=-\partial_t^2+\nabla^2$) this is the **Klein–Gordon equation**:

$$ -\frac{\partial^2\phi}{\partial t^2} + \nabla^2\phi - m^2\phi = 0. $$

Read it as a wave equation with a stiffness term $m^2\phi$: the stiffness makes different wavelengths travel at different speeds (dispersion), and that dispersion *is* the relativistic $E$–$p$ relation we extract next.

> **Energy, for later bookkeeping.** With $\mathcal L=\tfrac12(\partial_0\phi)^2-\tfrac12(\nabla\phi)^2-\tfrac12m^2\phi^2$, the conjugate momentum is $\Pi=\partial\mathcal L/\partial(\partial_0\phi)=\partial_0\phi$, so
> $$ \mathcal H = \Pi\,\partial_0\phi - \mathcal L = \tfrac12\Pi^2 + \tfrac12(\nabla\phi)^2 + \tfrac12 m^2\phi^2,\qquad E=\int d^dx\,\mathcal H. $$
> All three pieces — kinetic, gradient, potential — are $\ge 0$ when $m^2\ge0$, so the energy is bounded below. A vacuum exists to build particles on top of.

## Momentum space: the mass-shell appears

Fourier transform over all spacetime, with $p\cdot x = -p^0x^0+\vec p\cdot\vec x$:

$$ \phi(x) = \int \frac{d^Dp}{(2\pi)^D}\, e^{ip\cdot x}\,\phi(p). $$

Each derivative pulls down a factor of $ip$, so $\partial^2 e^{ip\cdot x}=(ip)\cdot(ip)\,e^{ip\cdot x}=-p^2\,e^{ip\cdot x}$, and Klein–Gordon becomes, mode by mode,

$$ (p^2 + m^2)\,\phi(p) = 0 \quad\text{for every } p. $$

This is now **algebra, not calculus**: a number times $\phi(p)$ must vanish. So either $\phi(p)=0$, or

$$ \boxed{\ p^2 + m^2 = 0 \iff E^2 = \vec p^{\,2}+m^2 \iff E = \pm E_p\,,\quad E_p\equiv\sqrt{\vec p^{\,2}+m^2}\ } \tag{1}$$

This locus is the **mass-shell** (see [[Mass-shell relation]]): two sheets, $E=+E_p$ and $E=-E_p$, exchanged by $p\to-p$. The classical field lives *only* on it: off-shell the amplitude is forced to zero, on-shell it is free, subject only to the reality condition $\phi(p)^*=\phi(-p)$ (automatic for a real $\phi(x)$). One complex amplitude therefore fixes the field at the two on-shell points $p$ and $-p$ — the negative-energy sheet carries no independent data — so on average there is **one real degree of freedom per point of the mass-shell**, the phrase that generalizes to "$D-2$ per point" for the photon and graviton in [[Polarizations of massless spin-1 and spin-2]].

Nothing here was quantized and no particles were assumed. A free scalar field is just a relativistic spring mattress, yet its own equation of motion refuses any wave whose $(E,\vec p)$ is not that of a mass-$m$ relativistic particle. Quantization ([[Fourier modes as oscillators]] and onward) will promote each allowed wave to a countable excitation — a particle. The field already knew the particle's energy.

## The light-cone form (preview)

In light-cone coordinates $x^\pm=\frac{1}{\sqrt2}(x^0\pm x^1)$, with $\vec x_T$ collecting the transverse coordinates $x^I$, $I=2,\dots,D-1$, the operator $\partial^2-m^2$ reads $-2\partial_+\partial_-+\partial_I\partial_I-m^2$, and $x^+$ plays the role of time. Fourier transform the dependence on $x^-$ and $\vec x_T$, with kernel $e^{-ip^+x^-+i\vec p_T\cdot\vec x_T}$, so that $\partial_-\to-ip^+$ and $\partial_I\to ip^I$; dividing by $2p^+$ (nonzero here) turns the second-order equation into a **first-order, Schrödinger-like** equation in light-cone time:

$$ \Big(i\,\frac{\partial}{\partial x^+} - \frac{1}{2p^+}\big(p^I p^I + m^2\big)\Big)\,\phi(x^+,p^+,\vec p_T) = 0. \tag{2}$$

The bracket $\frac{1}{2p^+}(p^Ip^I+m^2)$ is exactly $p^-$ — the mass-shell $-2p^+p^-+p^Ip^I+m^2=0$ solved for $p^-$. So $p^-$ plays the role of a Hamiltonian and $x^+$ of time: light-cone evolution is *first order*, which is why it will parallel ordinary quantum mechanics so cleanly. Developed in [[Light-cone gauge]].

## Open questions

- For $m^2<0$ the algebraic mass-shell (1) still holds, but the potential $\tfrac12 m^2\phi^2$ turns into a hilltop: the Hamiltonian is no longer bounded below at $\phi=0$, so the field wants to roll away. This is the string tachyon; see [[Tachyon as instability]].
- Which boundary conditions legitimize dropping the boundary term? Compact support, falloff at infinity, or the periodic box of [[Fourier modes as oscillators]] — each closes the integration-by-parts.

## Exercise

The mass-shell (1) was extracted from the covariant equation. Recover it instead from the **light-cone** equation (2), and read off what plays the role of energy.

Show that the plane wave $\phi\propto e^{-ip^+x^- - ip^-x^+ + i\vec p_T\cdot\vec x_T}$ solves the covariant Klein–Gordon equation iff $2p^+p^- = p^Ip^I+m^2$, and confirm that this is the same condition as the bracket in (2) vanishing. Then explain in one sentence why $p^-$ deserves the name "light-cone energy."

> [!success]- Solution
> In light-cone coordinates the metric gives $p^2 = -2p^+p^- + p^Ip^I$ (the dot product is $a\cdot b=-a^+b^--a^-b^++a^Ib^I$). The mass-shell $p^2+m^2=0$ is therefore
> $$ -2p^+p^- + p^Ip^I + m^2 = 0 \quad\Longleftrightarrow\quad 2p^+p^- = p^Ip^I + m^2, $$
> i.e. $p^- = \dfrac{1}{2p^+}\big(p^Ip^I+m^2\big)$.
> The covariant KG operator in these coordinates is $-2\partial_+\partial_- + \partial_I\partial_I - m^2$. Acting on the plane wave, $\partial_+\to -ip^-$, $\partial_-\to -ip^+$, $\partial_I\to ip^I$, so the eigenvalue is $-2(-ip^-)(-ip^+) + (ip^I)(ip^I) - m^2 = 2p^+p^- - p^Ip^I - m^2$. Setting it to zero reproduces the boxed condition — the plane wave solves KG iff $2p^+p^-=p^Ip^I+m^2$.
> This is precisely the bracket in (2) vanishing: dividing $2p^+p^- = p^Ip^I+m^2$ by $2p^+$ gives $p^- = \frac{1}{2p^+}(p^Ip^I+m^2)$, and on the same plane wave $i\,\partial_{x^+}\to p^-$, so (2) reads $p^- - \frac{1}{2p^+}(p^Ip^I+m^2) = 0$.
> $p^-$ is the "light-cone energy" because it is the quantity conjugate to light-cone time $x^+$ — it generates evolution in $x^+$ exactly as the ordinary Hamiltonian $E$ generates evolution in $t$ — and it is fixed by the transverse momenta and mass, just as $E=E_p$ is fixed by $\vec p$ and $m$ on the ordinary mass-shell.
