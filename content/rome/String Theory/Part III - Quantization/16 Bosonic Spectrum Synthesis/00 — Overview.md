---
title: 16 Bosonic Spectrum Synthesis — Overview
number: "16.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, synthesis]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The whole light-cone story end to end: Nambu–Goto action, gauge-fix to the $D-2$ transverse modes, quantize them as harmonic oscillators, and read spacetime mass off the oscillator level. Out come a tachyon, a photon, a **graviton**, and the number $26$ — none of them assumed.

## The one thing to take away

You never *put* gravity into string theory. You start with the simplest relativistic object — a rubber band whose worldsheet area you extremize — and quantize it like a violin string. The notes of that string are particles. One of the low notes is a **massless spin-2 particle**, and a theorem outside string theory says the only consistent thing a massless spin-2 particle can do is mediate general relativity. So gravity *falls out*. Run the same machine with open (Neumann) instead of closed (periodic) boundary conditions and it produces a **photon** instead. That is the bosonic string in one line, and this module is where you watch it happen end to end.

The price of admission: the construction is only Lorentz-consistent in **$D=26$** spacetime dimensions. That is not a choice — it is forced by demanding the quantum theory keep the Lorentz symmetry the classical string had.

## Why this module exists

Modules 7–15 built the bosonic string one tool at a time: the worldsheet action, boundary conditions and D-branes, classical motion, classical light-cone gauge, then the quantum point particle, open string, and closed string. Each module stopped to invent machinery. This module is the **checkpoint**: run the entire chain without stopping, so the logical skeleton stands exposed. If you can narrate "extremize a worldsheet area" all the way to "therefore, a graviton," and say *why every step was forced*, you have passed.

## The spine (one continuous derivation)

Think of it as a five-link chain. Each link is a full sibling note; here is the shape, with the physical reason each step is unavoidable.

**1. Action → constraints.** The Nambu–Goto action $S_{\rm NG}=-\dfrac{1}{2\pi\alpha'}\int d^2\sigma\sqrt{-\det\gamma}$ says the worldsheet extremizes its area, with tension $T_0=\tfrac{1}{2\pi\alpha'}$ (natural units, $\hbar=c=1$). It is reparametrization-invariant because area does not care how you coordinatize the sheet. That invariance is a *gauge redundancy*: the coordinates $(\tau,\sigma)$ are labels we chose, not physics. Passing to the equivalent Polyakov form, the three gauge symmetries — two diffeomorphisms and one Weyl rescaling — fix the worldsheet metric flat, $h_{\alpha\beta}=\eta_{\alpha\beta}$. What survives is a free wave equation $\partial_+\partial_- X^\mu=0$ and the **Virasoro constraints** $T_{\alpha\beta}=0$, the leftover metric equations of motion enforcing that the gauge we fixed was legal.

**2. Constraints → transverse modes.** One residual gauge freedom remains; spending it defines **light-cone gauge**, $X^+ = x^+ + \alpha' p^+\tau$ in light-cone coordinates $X^\pm = (X^0\pm X^1)/\sqrt2$. The Virasoro constraints then *solve* $X^-$ algebraically in terms of the rest. Of the $D$ coordinate fields, $X^+$ is frozen and $X^-$ is determined, so only the $D-2$ **transverse** fields $X^I$ carry independent physics. This is the master trick: trade manifest Lorentz symmetry for a clean, ghost-free description in genuine physical oscillators. See [[Light-cone gauge]], [[Transverse coordinates as physical degrees of freedom|Transverse oscillators]].

**3. Modes → Fock space.** Mode-expand each $X^I$ and quantize: the Fourier modes obey $[\alpha_m^I,\alpha_n^J]=m\,\delta^{IJ}\delta_{m+n,0}$, rescaled harmonic-oscillator ladder operators. Build a Fock space on the light-cone momentum vacuum $|0;p\rangle$ (shorthand for $|p^+,\vec p_T\rangle$). Because only *spacelike* transverse indices appear, every state has positive norm — no negative-probability ghosts. Details and the open/closed split are in 16.1 [[Open versus closed spectra]].

**4. Level → mass.** The mass-shell relation $M^2=-p_\mu p^\mu$ (mostly-plus signature) becomes, after solving the constraint for $p^-$, a count of how many oscillators are excited, weighted by mode number: the level $N^\perp=\sum_{n>0}\sum_I \alpha_{-n}^I\alpha_n^I$. Normal-ordering the zero-point energies leaves a finite shift $-\tfrac{D-2}{24}$, from $\tfrac12$ per transverse direction times the regularized sum $\sum_{n\ge1} n\,e^{-\epsilon n}=\tfrac1{\epsilon^2}-\tfrac1{12}+O(\epsilon^2)$: drop the divergent local $1/\epsilon^2$, keep the Casimir remnant $-\tfrac1{12}$ (the number $\zeta(-1)$ shorthands). This yields
$$
\text{open: } \alpha' M^2 = N^\perp-\tfrac{D-2}{24},
\qquad
\text{closed: } \tfrac{\alpha'}{4} M^2 = N^\perp-\tfrac{D-2}{24}=\bar N^\perp-\tfrac{D-2}{24}.
$$
The relative **factor of 4** (open vs closed) is not a fudge: it is the zero-mode normalization $\alpha_0^\mu=\sqrt{2\alpha'}\,p^\mu$ (open) versus $\alpha_0^\mu=\bar\alpha_0^\mu=\sqrt{\alpha'/2}\,p^\mu$ (closed) — a factor of $2$ in the zero mode, squared. The closed string carries **two** oscillator towers (left-movers $\bar\alpha$, right-movers $\alpha$) tied by **level matching** $N^\perp=\bar N^\perp$, because a closed loop has no marked starting point. See 16.2 [[Normal ordering constant]].

**5. Read off the particles.** Now just list levels.
- $N^\perp=0$: the ground state has $M^2<0$ — a **tachyon**. Read it as a scalar field sitting at the *top* of its potential, not a faster-than-light particle: the bosonic vacuum is unstable. 16.3 [[Tachyon as instability]].
- $N^\perp=1$, open: $\alpha_{-1}^I|0;p\rangle$, one transverse index, massless — a **photon** ($U(1)$ gauge field). 16.4 [[Photon from open strings]].
- $N^\perp=\bar N^\perp=1$, closed: $\bar\alpha_{-1}^I\alpha_{-1}^J|0;p\rangle$, two transverse indices, massless *only if* $\tfrac{D-2}{24}=1$, i.e. **$D=26$**. It splits into symmetric-traceless (**graviton**) $\oplus$ antisymmetric ($B$-field) $\oplus$ trace (dilaton). 16.5 [[Graviton from closed strings]].

Why the first excited level *must* be massless — and hence why $D=26$ — is the 16.6 [[Critical dimension D=26]] argument: a massless particle's polarizations transform under the little group $SO(D-2)$, a massive one's under $SO(D-1)$. The transverse-index states carry exactly the $SO(D-2)$ count, so Lorentz invariance forces them massless. The sharper version is that the quantum Lorentz generators only close, $[M^{-I},M^{-J}]=0$, at $D=26$ with intercept $-a=1$. The representation-theory bridge is 16.7 [[Little group and Wigner classification]].

## The whole chain, restated

A relativistic string is a harmonic-oscillator factory. Gauge-fixing discards the redundant coordinates and leaves $D-2$ honest oscillators; their excitation number *is* the particle's mass-squared, offset by a universal Casimir dip that drags the ground state below zero (the tachyon). Stack one quantum: an open string gives you electromagnetism, a closed string gives you gravity. The one arithmetic condition that makes the massless level land exactly at zero — $\tfrac{D-2}{24}=1$ — pins spacetime to $26$ dimensions. Nothing about gravity, photons, or $26$ was assumed; all three are outputs.

## Open questions

- The tachyon is a real sickness, not a bookkeeping artifact: the bosonic vacuum genuinely has no known stable endpoint. It is *the* reason the bosonic string is only a warm-up, and the superstring (worldsheet fermions + GSO) is the candidate for nature. See 16.3 [[Tachyon as instability]] and, later, [[Worldsheet fermions|Superstring Preview]].
- Light-cone gauge shows only the physical polarizations; the spacetime gauge symmetries of the photon ($A_\mu\to A_\mu+\partial_\mu\lambda$) and graviton (linearized diffeomorphisms) are invisible here. They reappear in the covariant/CFT treatment — [[Vertex operators and physical-state conditions]].
- $D=26$ shows up a second, independent way as a vanishing total central charge $c_{\text{matter}}+c_{\text{gh}}=D-26=0$; that CFT route is [[Total central charge and D = 26]].

## Exercise

**Chalk-talk, no notes: from a stretched rubber band to the graviton.** With a blank board, reconstruct the spine and pin down the numbers where the subject bites.

1. Write $S_{\text{NG}}=-\tfrac{1}{2\pi\alpha'}\int d^2\sigma\sqrt{-\det\gamma}$, say in one sentence why it is reparametrization-invariant, and state the tension $T_0=\tfrac{1}{2\pi\alpha'}$.
2. Name the three gauge symmetries used to fix $h_{\alpha\beta}=\eta_{\alpha\beta}$, and state what survives (wave equation + Virasoro constraints).
3. Explain in one sentence why light-cone gauge leaves only $D-2$ physical fields $X^I$.
4. Write the closed mass formula and state the level-matching condition; then, taking $\bar\alpha_{-1}^I\alpha_{-1}^J|0;p\rangle$, show masslessness *forces* $D=26$, and name the three fields in its decomposition.
5. In one sentence, why does a massless spin-2 particle mean general relativity?

> [!success]- Solution
> **1.** $S_{\text{NG}}=-\dfrac{1}{2\pi\alpha'}\int d^2\sigma\sqrt{-\det\gamma}$, with $\gamma_{\alpha\beta}=\partial_\alpha X\cdot\partial_\beta X$ the induced worldsheet metric. It is reparametrization-invariant because it computes the proper *area* of the worldsheet, and area is independent of the $(\tau,\sigma)$ labels you use to coordinatize the sheet. Tension $T_0=\dfrac{1}{2\pi\alpha'}$.
>
> **2.** Two worldsheet diffeomorphisms and one Weyl (local scale) rescaling — three functions' worth of gauge freedom, exactly enough to set the $2\times2$ symmetric worldsheet metric $h_{\alpha\beta}=\eta_{\alpha\beta}$. What survives: the free wave equation $\partial_+\partial_- X^\mu=0$ plus the Virasoro constraints $T_{\alpha\beta}=0$ (the equations of motion for the metric we gauged away).
>
> **3.** Fixing $h_{\alpha\beta}=\eta_{\alpha\beta}$ leaves one residual conformal reparametrization; spending it sets $X^+=x^++\alpha' p^+\tau$, freezing $X^+$. The Virasoro constraints then solve $X^-$ algebraically in terms of the transverse $X^I$. So of $D$ fields, $X^+$ is frozen and $X^-$ is determined, leaving $D-2$ independent transverse oscillators.
>
> **4.** Closed mass formula, $\dfrac{\alpha'}{4}M^2=N^\perp-\dfrac{D-2}{24}=\bar N^\perp-\dfrac{D-2}{24}$, with **level matching** $N^\perp=\bar N^\perp$ (a closed loop has no marked origin, so states must be invariant under rigid $\sigma$-rotation). The first excited state $\bar\alpha_{-1}^I\alpha_{-1}^J|0;p\rangle$ has $N^\perp=\bar N^\perp=1$, so
> $$M^2=\frac{4}{\alpha'}\Bigl(1-\frac{D-2}{24}\Bigr).$$
> This vanishes iff $\dfrac{D-2}{24}=1\Rightarrow \boxed{D=26}$. (Massless it must be: two transverse indices give an $SO(D-2)$ tensor, the little group of a *massless* particle, not the $SO(D-1)$ of a massive one — Lorentz invariance forces $M^2=0$.) The tensor $\Omega^{IJ}$ decomposes as symmetric-traceless (**graviton**) $\oplus$ antisymmetric (**Kalb–Ramond $B$-field**) $\oplus$ trace (**dilaton**).
>
> **5.** A massless spin-2 field has a gauge symmetry $h_{\mu\nu}\to h_{\mu\nu}+\partial_\mu\xi_\nu+\partial_\nu\xi_\mu$ (linearized diffeomorphism); the only consistent way to couple it to matter is to the conserved stress-energy tensor, and demanding self-consistency once the field carries its own energy bootstraps that linear symmetry into full diffeomorphism invariance — i.e. general relativity. So a massless spin-2 particle *is* the graviton.
