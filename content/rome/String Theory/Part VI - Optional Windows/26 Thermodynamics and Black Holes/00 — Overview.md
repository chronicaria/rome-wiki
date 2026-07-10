---
title: 00 — Overview
number: "26.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, thermodynamics-overview]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

One combinatorial fact — how fast the number of string states grows with energy — sets a limiting temperature, and then *is* the entropy of a black hole.

## One exponential, chased down three roads

A quantized string is a tower of harmonic oscillators, so counting its states at energy $E$ is pure combinatorics: it is counting the ways to partition an integer $N \sim \alpha' M^2$. That count grows **exponentially**, $\ln(\text{states}) \sim \sqrt N \sim \sqrt{\alpha'}\,E$. Everything in this module is a consequence of that one exponential, chased down three roads:

1. **Exponential density of states $\Rightarrow$ entropy *linear* in energy $\Rightarrow$ a limiting temperature** $T_H$ (Hagedorn). Pour in energy, the temperature stops rising.
2. **Black holes carry entropy** $S_B/k = A/(4\ell_P^2)$ — proportional to horizon *area*, not volume. Classically they have no visible microstates; string theory asks what is being counted.
3. **For one supersymmetric black hole, the answer is the string count itself.** Partitioning momentum among open strings reproduces $S_{bh}$ *including the coefficient* — string theory's one quantitative, checkable statement about gravity (Strominger–Vafa).

Why it matters: this is the single place in an intro course where "a string is a bunch of oscillators" turns into "a black hole has a definite number of quantum microstates." It is also the on-ramp to holography and the [[Gauge-gravity duality|AdS-CFT correspondence]]. The only new inputs beyond oscillator quantization you already have ([[Transverse coordinates as physical degrees of freedom|light-cone gauge]], [[Mass-shell relation]]) are statistical mechanics and a little just-in-time general relativity.

## The chain, link by link

**Counting = partitions.** A state of level $N$ is a choice of occupation numbers $\{n_\ell\}$ with $\sum_\ell \ell\, n_\ell = N$ — exactly a partition of $N$. Routing the combinatorics through thermodynamics (build $Z$, get $F=-kT\ln Z$, read $S=k\ln p$) gives the leading growth $\ln p_b(N) \simeq 2\pi\sqrt{Nb/6}$. For the bosonic string's $b=24$ transverse directions this is $\ln p_{24}(N) \simeq 4\pi\sqrt N$. Details in 26.1 [[Partitions and oscillator counting]].

**Partitions $\Rightarrow$ Hagedorn.** For an open string at rest, $\alpha' M^2 = N - 1 \simeq N$, so $\sqrt N = \sqrt{\alpha'}\,E$ and the entropy is $S = k\,4\pi\sqrt{\alpha'}\,E$ — **linear** in energy, the fingerprint of an exponential density of states. Temperature is the inverse slope of $S(E)$; a straight line has constant slope, so

$$\frac{1}{kT_H} = \frac{\partial(S/k)}{\partial E} = 4\pi\sqrt{\alpha'} \quad\Longrightarrow\quad kT_H = \frac{1}{4\pi\sqrt{\alpha'}}.$$

Equivalently, $\rho(E)\sim e^{\beta_H E}$ makes the canonical partition function $Z(\beta)=\int dE\,\rho(E)e^{-\beta E}\sim\int dE\,e^{(\beta_H-\beta)E}$ diverge once $\beta<\beta_H$ (i.e. $T>T_H$). Details, and the closed-string case (same $T_H$), in 26.2 [[Hagedorn temperature]].

**Black holes have entropy.** Drop entropy-carrying gas past a horizon; the second law forces the black hole to absorb that entropy, so a black hole *has* entropy — yet classically it is fixed by a few numbers ($M$, charge, spin). Feeding the quoted Hawking temperature $kT = \hbar c^3/(8\pi GM)$ into $dE = T\,dS_B$ and integrating gives $S_B/k = 4\pi G M^2/(\hbar c) = A/(4\ell_P^2)$ — one-quarter the horizon area in Planck units, scaling with **area not volume**. Details in 26.3 [[Entropy-area relation]].

**What are those microstates?** String theory's proposal: a black hole is a very highly excited string. Dial the coupling $g_s$ down and its horizon shrinks; at the **correspondence point** where the horizon equals the string length, the black-hole and string descriptions cross over. There the two entropies — string ($\propto M$) and black hole ($\propto M^2$) — meet, both $\sim 1/g_s^2$. This is *parametric* agreement (powers match, not the $1/4$). Details in 26.3 [[Entropy-area relation]].

**The exact match needs supersymmetry.** For the extremal D1-D5-P black hole in 5D, the charge-only entropy $S_{bh}/k = 2\pi\sqrt{NQ_1Q_5}$ is reproduced by partitioning momentum among $(1,5)$ open strings, each carrying $4$ bosonic $+ 4$ fermionic labels. Once the branes bind into one long D1 and one D5, the momentum unit shrinks to $1/(Q_1Q_5R)$, so the integer to partition is not $N$ but $NQ_1Q_5$. The master count $\ln P(M;b,f)\simeq 2\pi\sqrt{\tfrac M6(b+\tfrac f2)}$ with $M = NQ_1Q_5$ and $b=f=4$ gives $b+f/2 = 6$, which cancels the $1/6$ exactly, leaving $2\pi\sqrt{NQ_1Q_5}$. The load-bearing SUSY input is that this $g=0$ count survives to the $g\neq0$ where the black hole exists (BPS protection). Details in 26.4 [[Supersymmetric black-hole counting]].

## Sublesson map

- 26.1 [[Partitions and oscillator counting]] — states at fixed energy = partitions of an integer; the thermodynamic route to $\ln p_{24}(N)\simeq 4\pi\sqrt N$, plus the mixed Bose/Fermi count needed later.
- 26.2 [[Hagedorn temperature]] — exponential density of states $\Rightarrow$ linear entropy $\Rightarrow$ constant $T_H = 1/(4\pi k\sqrt{\alpha'})$; the single-string canonical $Z$ diverges at $T_H$.
- 26.3 [[Entropy-area relation]] — Bekenstein–Hawking $S_B/k = A/(4\ell_P^2)$; why the string ($\propto M$) and black-hole ($\propto M^2$) entropies reconcile at the correspondence point.
- 26.4 [[Supersymmetric black-hole counting]] — the 5D extremal D1-D5-P black hole; partition counting reproduces the leading $S_{bh}$ coefficient; exactly what SUSY buys.

## What this module earns vs borrows

**Derived from scratch (no SUSY needed):** the partition asymptotic $\ln p_b(N)\simeq 2\pi\sqrt{Nb/6}$; the Hagedorn slope $kT_H = 1/(4\pi\sqrt{\alpha'})$ and the single-string canonical divergence; the calculus from Hawking temperature to $S_B/k = A/(4\ell_P^2)$; the parametric string↔black-hole correspondence; and the D1-D5-P partition arithmetic $2\pi\sqrt{NQ_1Q_5}$.

**Quoted, not derived:** the exact Schwarzschild factor of 2 and the Hawking temperature (both need GR / QFT-in-curved-spacetime); the type-IIB supergravity D1-D5-P solution and its horizon area; BPS non-renormalization (the $g=0$ count surviving to $g\neq0$); the $(1,5)$ string's $4+4$ ground states (a superstring result); and the co-directional-momentum SUSY constraint.

## Open questions

- Is the Hagedorn temperature a true ceiling, or a phase transition? The modern reading is a Hagedorn/deconfinement transition where added energy makes a few very long strings rather than a hotter gas — beyond scope.
- Canonical and microcanonical ensembles need not agree here: $\Omega(E)\sim e^{\beta_H E}$ gives an integrand $e^{(\beta_H-\beta)E}$ with no saddle point, so there is no guaranteed common temperature. Which ensemble is physical?
- Why area, not volume? The area law is a separate, deeper input than the string count; it points to holography / the [[Gauge-gravity duality|AdS-CFT correspondence]] (next module).

## Exercise

*Explain why exponential growth in the density of string states forces a limiting temperature — the Hagedorn scale — and locate that scale. Do it both the microcanonical way (entropy) and the canonical way (partition function), and get the same $T_H$.*

> [!success]- Solution
> **Microcanonical (entropy) route.** From the partition count, the number of states at level $N$ grows as $\ln p_{24}(N)\simeq 4\pi\sqrt N$. For an open string at rest, $\alpha' M^2 = N-1\simeq N$, so $\sqrt N = \sqrt{\alpha'}\,E$ (with $E=M$). Hence the entropy is
> $$\frac{S(E)}{k} = \ln p_{24}(N) \simeq 4\pi\sqrt N = 4\pi\sqrt{\alpha'}\,E,$$
> which is **linear** in $E$. Temperature is the inverse slope of $S(E)$, and the slope of a straight line is constant:
> $$\frac{1}{kT} = \frac{\partial(S/k)}{\partial E} = 4\pi\sqrt{\alpha'} \quad\Longrightarrow\quad kT_H = \frac{1}{4\pi\sqrt{\alpha'}}.$$
> Adding energy adds states (raises $S$) but not the leading temperature — the surplus goes into a longer string, not a hotter one. Dimension check: $\alpha'$ has units of length$^2$ = energy$^{-2}$ (with $\hbar=c=1$), so $\sqrt{\alpha'}$ is an inverse energy and $kT_H$ is an energy. Good.
>
> **Canonical (partition-function) route.** The exponential entropy means the density of states is $\rho(E)\sim e^{\beta_H E}$ with $\beta_H = 4\pi\sqrt{\alpha'} = 1/(kT_H)$. The single-string partition function is
> $$Z(\beta) = \int dE\,\rho(E)\,e^{-\beta E} \sim \int^\infty dE\,e^{(\beta_H-\beta)E}.$$
> The exponential growth in $\rho$ fights the Boltzmann suppression $e^{-\beta E}$. For $\beta>\beta_H$ ($T<T_H$) the integrand decays and $Z$ converges; at $\beta=\beta_H$ the exponents cancel and $Z$ diverges; for $\beta<\beta_H$ ($T>T_H$) it blows up. So the free single-string canonical ensemble has no ordinary continuation above $T_H$.
>
> **Same $T_H$ both ways.** Both routes place the boundary at $\beta_H = 4\pi\sqrt{\alpha'}$, i.e. $kT_H = 1/(4\pi\sqrt{\alpha'})$: the one temperature where exponential state growth exactly balances Boltzmann suppression. The growth $\rho(E)\sim e^{\beta_H E}$ and the suppression $e^{-\beta E}$ cancel at exactly one $\beta=\beta_H$, and that knife-edge is the Hagedorn scale.
