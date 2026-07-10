---
title: 04 — Classical Fields, Modes, and Particles (Overview)
number: "4.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, fields-and-particles]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A field is an infinite grid of coupled springs; its normal modes are independent harmonic oscillators, their shared ground state is the vacuum, and one creation operator acting on that vacuum makes one particle. This module turns the slogan "particles are excitations of fields" into a calculation.

## The mattress of springs

Imagine a mattress: springs at every point of space, each pulling on its neighbors. That is a **field** $\phi(t,\vec x)$ — one number per point, per time. Pluck it and the disturbance does not stay put; the natural description is not point-by-point but in **normal modes**, standing waves of definite momentum $\vec p$. Change basis to those modes and the coupling disappears: each mode is a lone harmonic oscillator vibrating at frequency $E_p=\sqrt{\vec p^{\,2}+m^2}$ (natural units $\hbar=c=1$, mostly-plus signature, throughout this module).

Now quantize each oscillator with the ladder algebra you already own from Module 3. The mattress's joint ground state is the **vacuum** $|\Omega\rangle$ — no springs excited, no particles. Add one quantum to the mode of momentum $\vec p$ and you get a state carrying energy $E_p$ and momentum $\vec p$: that lump of excitation, spread across the whole mattress, is what we *mean* by "a particle of momentum $\vec p$." The particle is not a bead sitting on the field; it *is* the field, ringing in one mode.

## Why this module matters

When we quantize the string later, each vibrational mode $\alpha_{-n}$ will again be a harmonic oscillator, and physical states will again be creation operators hitting a vacuum. To read those states — "this level is a tachyon, that one a photon, that one a graviton" — we need the dictionary this module builds: **a field, put on its mass-shell and quantized, gives particle states, one oscillator species per physical degree of freedom.** We build it on the three fields that actually appear in the string spectrum:

- the **scalar** $\phi$ — the string's tachyon and dilaton are scalars;
- the **Maxwell field** $A_\mu$ — the open string's massless level is a photon;
- the **graviton** $h_{\mu\nu}$ — the closed string's massless level contains a spin-2 state.

We do all three in **light-cone gauge** on purpose: it is the gauge we will quantize the string in, so the degree-of-freedom count — the $D-2$ transverse directions — will match line for line. The recurring lesson is a counting rule: **physical dof = transverse-tensor components**, with the tensor's rank equal to the spin.

## The chain of ideas

Read the sublessons in order; each is one link.

- 4.1 [[Action and field equations for a scalar]] — the Lorentz-invariant quadratic action gives the Klein–Gordon equation $(\partial^2-m^2)\phi=0$, and Fourier transforming forces the field onto the [[Mass-shell relation]] $p^2+m^2=0$, i.e. $E=E_p=\sqrt{\vec p^{\,2}+m^2}$.
- 4.2 [[Fourier modes as oscillators]] — the central calculation: put space in a box, feed a single-momentum configuration into the action, and out drops the action of two harmonic oscillators of frequency $E_p$. Quantize them to get $a_p,a_p^\dagger$ with $[a_p,a_p^\dagger]=1$.
- 4.3 [[Fock vacuum]] — the no-particle state $|\Omega\rangle$, the tensor product of every oscillator's ground state, defined by $a_p|\Omega\rangle=0$.
- 4.4 [[One-particle states]] — the payoff: acting with the mode-summed operators $H=\sum_{\vec p}E_p\,a_p^\dagger a_p$ and $\vec P=\sum_{\vec p}\vec p\,a_p^\dagger a_p$ proves $a_p^\dagger|\Omega\rangle$ has energy $E_p$ and momentum $\vec p$. That is one particle, earned not asserted.
- 4.5 [[Polarizations of massless spin-1 and spin-2]] — repeat the story for $A_\mu$ and $h_{\mu\nu}$. Gauge symmetry is over-description; light-cone gauge removes it, leaving $D-2$ photon states and $\tfrac12 D(D-3)$ graviton states.

Recurring tools: [[Light-cone gauge]], [[Mass-shell relation]], [[Ladder operators|Creation and annihilation operators]], [[Ladder operators|Harmonic oscillator]].

## The headline table

The whole module compresses into one comparison. Gauge symmetry over-counts the field's components; light-cone gauge strips each field to its transverse content, and *that* is what gets quantized.

| field | spin | mass | gauge symmetry | physical dof / mass-shell point | one-particle state |
|---|---|---|---|---|---|
| scalar $\phi$ | 0 | $m$ (free) | none | $1$ | $a^\dagger_{p^+,p_T}\lvert\Omega\rangle$ |
| photon $A_\mu$ | 1 | $0$ | $\delta A_\mu=\partial_\mu\epsilon$ | $D-2$ | $\sum_I \xi_I\,a^{I\dagger}_{p^+,p_T}\lvert\Omega\rangle$ |
| graviton $h_{\mu\nu}$ | 2 | $0$ | $\delta h_{\mu\nu}=\partial_\mu\epsilon_\nu+\partial_\nu\epsilon_\mu$ | $\tfrac12 D(D-3)$ | $\sum_{I,J}\xi_{IJ}\,a^{IJ\dagger}_{p^+,p_T}\lvert\Omega\rangle,\ \xi_{II}=0$ |

The unifying pattern: **physical states = transverse-tensor oscillators on the vacuum**, tensor rank $=$ spin, trace/symmetry conditions on the polarization $\xi$ doing the counting. In $D=4$: scalar $1$, photon $2$, graviton $2$ (the $2=2$ is a four-dimensional coincidence, not generic). In $D=26$: photon $24$, graviton $\tfrac12\cdot 26\cdot 23=299$.

## Open questions

- Light-cone gauge gives the *free-field* graviton count. The interacting route from a massless spin-2 field to Einstein gravity needs a conserved stress tensor, self-coupling, and a two-derivative expansion — deferred to Modules 16 and 25, not settled by polarization counting.
- The scalar's vacuum energy is set to zero here by normal ordering, a harmless constant shift. The analogous oscillator constant for the string is *not* harmless: it sets the tachyon mass and forces $D=26$, and its honest regularization ($\sum n \to \zeta(-1)=-\tfrac1{12}$ via a cutoff) is the business of Modules 14 and 16.

## Exercise

Reconstruct the module's core result from a blank page: turn "particles are excitations of a free scalar field" into a calculation, ending with the energy and momentum of the one-particle state.

> [!success]- Solution
> **1. Action and equation of motion.** The free scalar has the Lorentz-invariant quadratic Lagrangian
> $$\mathcal L=-\tfrac12\,\eta^{\mu\nu}\partial_\mu\phi\,\partial_\nu\phi-\tfrac12 m^2\phi^2,\qquad \eta_{\mu\nu}=\mathrm{diag}(-1,+1,\dots,+1).$$
> Vary $\phi\to\phi+\delta\phi$, integrate the derivative term by parts, and drop the boundary term:
> $$\delta S=\int d^Dx\,\delta\phi\,(\eta^{\mu\nu}\partial_\mu\partial_\nu\phi-m^2\phi)=0\ \Rightarrow\ (\partial^2-m^2)\phi=0,$$
> the Klein–Gordon equation.
>
> **2. Mass-shell.** Fourier transform, $\phi(x)=\int\frac{d^Dp}{(2\pi)^D}e^{ip\cdot x}\phi(p)$. Since $\partial^2 e^{ip\cdot x}=-p^2 e^{ip\cdot x}$, the equation becomes algebraic, $(p^2+m^2)\phi(p)=0$. So $\phi(p)$ is nonzero only on the **mass-shell**
> $$p^2+m^2=0\iff E^2=\vec p^{\,2}+m^2\iff E=E_p\equiv\sqrt{\vec p^{\,2}+m^2}.$$
>
> **3. One mode is two oscillators.** Put space in a periodic box of volume $V$, so momenta are discrete. Feed the single-momentum real configuration $\phi_p=\tfrac{1}{\sqrt V\sqrt{2E_p}}\big(a(t)e^{i\vec p\cdot\vec x}+a^*(t)e^{-i\vec p\cdot\vec x}\big)$ into the action: every cross-term integrates to zero over the box, leaving
> $$S=\int dt\,\Big(\tfrac{1}{2E_p}\dot a^*\dot a-\tfrac12 E_p\,a^*a\Big),$$
> the action of a harmonic oscillator of frequency $\omega=E_p$ (two real oscillators via $a=q_1+iq_2$). The $\tfrac{1}{\sqrt{2E_p}}$ was chosen so quantizing gives $[a_p,a_p^\dagger]=1$ and a clean Hamiltonian.
>
> **4. Field operator and mode-summed generators.** Summing over all box momenta,
> $$\phi(t,\vec x)=\frac{1}{\sqrt V}\sum_{\vec p}\frac{1}{\sqrt{2E_p}}\big(a_p\,e^{-iE_pt+i\vec p\cdot\vec x}+a_p^\dagger\,e^{iE_pt-i\vec p\cdot\vec x}\big),$$
> with $[a_p,a_k^\dagger]=\delta_{p,k}$. In normal-ordered form (dropping the constant zero-point energy $\tfrac12\sum_{\vec p}E_p$),
> $$H=\sum_{\vec p}E_p\,a_p^\dagger a_p,\qquad \vec P=\sum_{\vec p}\vec p\,a_p^\dagger a_p.$$
>
> **5. One particle.** Define $a_p|\Omega\rangle=0$. Using $a_k a_p^\dagger|\Omega\rangle=[a_k,a_p^\dagger]|\Omega\rangle=\delta_{k,p}|\Omega\rangle$,
> $$H\,a_p^\dagger|\Omega\rangle=E_p\,a_p^\dagger|\Omega\rangle,\qquad \vec P\,a_p^\dagger|\Omega\rangle=\vec p\,a_p^\dagger|\Omega\rangle.$$
> So $a_p^\dagger|\Omega\rangle$ has energy $E_p$ and momentum $\vec p$, satisfying $E_p^2-\vec p^{\,2}=m^2$ — the dispersion relation of a relativistic mass-$m$ particle. **That is "one particle."** If you can run steps 1–5 unaided, you own the module.
