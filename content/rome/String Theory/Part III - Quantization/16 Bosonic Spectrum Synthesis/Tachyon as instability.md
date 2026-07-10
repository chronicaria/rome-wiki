---
title: Tachyon as instability
number: "16.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, tachyon]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The bosonic ground state has $M^2<0$ — a tachyon. This is not a faster-than-light particle; it is the diagnosis that we quantized the theory at the top of a potential hill, around a vacuum that wants to roll away.

## A marble on a dome

Balance a marble on the peak of a dome. The tiniest nudge accelerates it *away* — the fluctuation grows instead of oscillating. That marble is the bosonic string vacuum. "Tachyon" is the field-theory name for exactly this situation: a field whose energy *decreases* when you turn it on. Nothing outruns light; we simply expanded around a bad point.

Two identifications organize everything that follows:

- $M^2$ is the **curvature of the potential** at the expansion point. Positive curvature = valley = stable; negative curvature = hilltop = unstable.
- A tachyon means **you are not at the true vacuum yet**.

## The negative mass-squared

The Fock vacuum $|0;p\rangle$ — shorthand for the light-cone ground state $|p^+,\vec p_T\rangle$ — has no oscillators excited, so $N^\perp=0$. Feed it into the mass formulas of [[Open versus closed spectra]] (natural units $\hbar=c=1$; mostly-plus signature, so $M^2=-p_\mu p^\mu$):

- **Open:** $\displaystyle M^2=\frac{1}{\alpha'}\Bigl(N^\perp-\frac{D-2}{24}\Bigr)\Big|_{N^\perp=0}=-\frac{D-2}{24\,\alpha'}\;\xrightarrow{\,D=26\,}\;-\frac{1}{\alpha'}.$
- **Closed:** $\displaystyle M^2=\frac{4}{\alpha'}\Bigl(N^\perp-\frac{D-2}{24}\Bigr)\Big|_{N^\perp=\bar N^\perp=0}=-\frac{D-2}{6\,\alpha'}\;\xrightarrow{\,D=26\,}\;-\frac{4}{\alpha'}.$

Both are negative, and not by accident. The culprit is the normal-ordering constant ([[Normal ordering constant]]): the regularized zero-point energy of the infinite oscillator tower sits *below* zero, and with nothing excited the ground state inherits the full deficit $-\frac{D-2}{24}$. The tachyon is therefore a fingerprint of the *same* shift that makes the photon and graviton come out exactly massless one level up. You cannot have the massless graviton without inheriting the tachyon — they are two readings of one constant.

## Mass-squared measures curvature, not speed

The naive special-relativity reading of $M^2<0$ — imaginary mass, superluminal particle — is wrong in field theory. Let $T(X)$ be the scalar field whose quanta are these ground states, with potential $V(T)$. The mass-squared is the curvature of $V$ at the point you expand around:
$$M^2=\left.\frac{\partial^2 V(T)}{\partial T^2}\right|_{T=0}. \tag{1}$$
A field's mass-squared is just the quadratic Taylor coefficient of its potential.

- $M^2>0$: $T=0$ is a minimum — a valley — and the field is a stable massive particle.
- $M^2<0$: $T=0$ is a maximum — a hilltop — and the "particle" is the unstable direction of a field about to roll.

The Standard Model Higgs is the canonical example. At $H=0$ it too has $M^2<0$: a tachyon there. Nothing is pathological; the theory is simply not at its true vacuum, and it resolves this by rolling to $\langle H\rangle\neq0$, the bottom of the Mexican hat, where the physical Higgs has $M^2>0$. A tachyon is a signpost pointing off the hilltop, not a sick particle.

## The instability, made quantitative

Here is why $M^2<0$ literally means "rolls away." For a spatially homogeneous field, the equation of motion is Newton's law for a unit-mass particle in the potential $V$, $\ddot T=-V'(T)$; linearized about $T=0$ using $(1)$,
$$\ddot T + M^2 T = 0. \tag{2}$$
Write $M^2=-\beta^2<0$. Then $(2)$ reads $\ddot T = \beta^2 T$, solved by
$$T(t)=A\,e^{\beta t}+B\,e^{-\beta t}.$$
The $e^{\beta t}$ branch grows without bound: $T=0$ is an equilibrium, but an unstable one, and a generic perturbation runs away at the rate $\beta=\sqrt{|M^2|}$ — exactly $1/\sqrt{\alpha'}$ for the open tachyon, $2/\sqrt{\alpha'}$ for the closed. Contrast $M^2=+\omega^2>0$, where $(2)$ gives $\cos\omega t$: bounded oscillation about a stable minimum.

Restoring spatial dependence sharpens the picture. A Fourier mode of wavenumber $k$ has $\omega^2=k^2+M^2=k^2-\beta^2$. Long-wavelength modes with $k^2<\beta^2$ have imaginary $\omega$ and grow; short-wavelength modes with $k^2>\beta^2$ still oscillate. The instability is an infrared effect: what runs away is the smooth, large-scale rearrangement of the vacuum, exactly as a marble rolls off a dome as a whole rather than crumbling locally.

## The unresolved endpoint

For the Higgs we know the potential and its true minimum. For the closed bosonic tachyon we do not. Expanding around $T=0$,
$$V(T)=\tfrac12 M^2T^2+c_3T^3+c_4T^4+\cdots,\qquad M^2<0,$$
the coefficients $c_n$ come from string interactions, not from the free spectrum. What is known is discouraging: the $T^3$ term appears to create a minimum, the $T^4$ term destabilizes it again, and $T$ mixes with other scalars, notably the dilaton. The closed bosonic tachyon has no known stable, time-independent endpoint; the perturbative closed-string vacuum may simply not make sense.

The open bosonic tachyon is better understood. It signals that the space-filling D25-brane background is unstable; the tachyon rolls to a vacuum in which the brane and its open-string excitations disappear (tachyon condensation). But that cures only the open-string sickness — the closed-string tachyon of the purely bosonic theory remains.

## Why this dooms the bosonic string — and why we study it anyway

This is a genuine disease, and it is *the* reason the bosonic string is a warm-up rather than a candidate theory of nature. An unstable vacuum is not an exotic particle to catalog; a theory built on a hilltop has no trustworthy ground state. We study the bosonic string anyway because everything else it teaches — the mode expansion, light-cone quantization, the critical-dimension argument, the massless graviton — reappears in the superstring with only the numbers changed ($26\to10$). And the superstring has no tachyon: worldsheet fermions plus the GSO projection remove the ground state that causes all this trouble. That is a central reason the superstring, not the bosonic string, is the physical candidate.

So a negative mass-squared is not a fast particle but a field balanced on a hilltop, and the bosonic vacuum is the marble on the dome — mathematically a solution, physically doomed to roll. The open tachyon rolls somewhere we understand (a brane dissolving); the closed one rolls somewhere nobody has found. The bad news lives at $N^\perp=0$; the good news one level up is the massless [[Photon from open strings]] and [[Graviton from closed strings]], born of the very same Casimir constant.

## Open questions

- The interaction coefficients $c_n$ in $V(T)$ require string field theory / string interactions and are not derived in this module.
- Open-string tachyon condensation on unstable D-branes deserves its own later note; this synthesis needs only the instability diagnosis and the open/closed distinction.
- The closed bosonic tachyon's endpoint is genuinely unresolved; this note establishes only that the perturbative vacuum is unstable.

## Exercise

The open and closed bosonic tachyons have *different* masses. Show that
$$\frac{M^2_{\text{closed}}}{M^2_{\text{open}}}=4\qquad(\text{at }D=26),$$
and explain in one sentence, without the mass formulas, where the factor of $4$ comes from. Then compute the exponential growth rate $\beta$ (in units of $1/\sqrt{\alpha'}$) of a homogeneous open-string tachyon field rolling off the hilltop.

> [!success]- Solution
> **Ratio.** At $N^\perp=\bar N^\perp=0$ and $D=26$ the two mass formulas give
> $$M^2_{\text{open}}=\frac{1}{\alpha'}(0-1)=-\frac{1}{\alpha'},\qquad
> M^2_{\text{closed}}=\frac{4}{\alpha'}\Bigl(0-\tfrac{24}{24}\Bigr)=-\frac{4}{\alpha'}.$$
> Hence $M^2_{\text{closed}}/M^2_{\text{open}}=(-4/\alpha')/(-1/\alpha')=4$.
>
> **Where the 4 comes from.** It is the same factor of $4$ that sits in front of the closed mass formula versus the open one: it traces to the zero-mode normalization $\alpha_0^\mu=\sqrt{2\alpha'}\,p^\mu$ (open) versus $\alpha_0^\mu=\bar\alpha_0^\mu=\sqrt{\alpha'/2}\,p^\mu$ (closed) — a factor of $2$ in the zero mode, squared in $M^2$ — not a different Casimir energy. That is also why the ratio is $4$ at *any* $D$: the common factor $\frac{D-2}{24}$ cancels.
>
> **Growth rate.** With $M^2_{\text{open}}=-1/\alpha'\equiv-\beta^2$, the homogeneous equation $\ddot T=\beta^2 T$ has runaway solution $e^{\beta t}$ with
> $$\beta=\sqrt{|M^2_{\text{open}}|}=\frac{1}{\sqrt{\alpha'}}.$$
> The perturbation grows on the string timescale $\sqrt{\alpha'}$ — the only scale in the free theory.
