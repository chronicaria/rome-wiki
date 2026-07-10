---
title: Quantized momentum from boundary conditions
number: "3.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, boundary-conditions]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A free particle can carry any momentum; confine it and only special momenta survive — an interval forces standing waves with $q=n\pi/a$, a circle forces periodicity and hence $p=\hbar n/R$ with $n\in\mathbb Z$. That discreteness, chosen by the boundary condition rather than the equation, is the seed of the string's mode sum.

## Waves that must fit

Think of a guitar string. Left alone, a wave can have any wavelength. Pin down the ends and only the wavelengths that fit — a whole number of half-loops between the pegs — can ring; the rest cancel themselves out. Quantization is nothing more mysterious than this: **a wave that has to be consistent with itself can only exist at discrete frequencies.**

Quantum mechanics adds one twist: momentum *is* wavenumber (times $\hbar$), so restricting which waves can exist restricts which momenta a particle can carry. The Schrödinger equation is the same everywhere; what changes from one problem to the next is the *shape of the space* and the boundary condition it imposes. Two shapes matter for strings:

- **an interval** (walls at both ends) — the clamped guitar string,
- **a circle** (ends glued together) — a wave chasing its own tail around a loop.

The equation does not pick the spectrum; the boundary condition does. Same operator, different domain, different allowed momenta.

## The setup: free particle, then a constraint

Where a particle is free ($V=0$), the time-independent Schrödinger equation in 1D is

$$ -\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} = E\,\psi . $$

Its solutions are the plane waves $e^{\pm iqx}$ (equivalently $\sin qx,\cos qx$), with

$$ E = \frac{\hbar^2 q^2}{2m}. \tag{1} $$

The energy is fixed once we know the wavenumber $q$; the only real question is *which values of $q$ the boundary condition allows.* That is where the two geometries part ways.

## Case A — particle on a segment (the guitar string)

Put infinite walls at $x=0$ and $x=a$: the potential is $0$ inside and $\infty$ outside, so $\psi=0$ outside and continuity forces the **Dirichlet** condition

$$ \psi(0)=\psi(a)=0. $$

The wavefunction is pinned to zero at both walls — exactly a string clamped at two pegs. The condition at $x=0$ kills the cosine; making the surviving sine vanish again at $x=a$ requires $qa=n\pi$, so

$$ \psi_n(x) = \sqrt{\tfrac{2}{a}}\,\sin\!\Big(\frac{n\pi x}{a}\Big), \qquad n=1,2,\dots $$

The far wall is what discretizes the wavenumber to $q_n=n\pi/a$. The value $n=0$ is thrown out — it gives $\psi\equiv0$, which is no state at all. The prefactor normalizes: since $\int_0^a\sin^2(n\pi x/a)\,dx=a/2$, multiplying by $\sqrt{2/a}$ makes $\int_0^a|\psi_n|^2\,dx=1$. Substituting $q_n$ into (1),

$$ E_n = \frac{\hbar^2}{2m}\Big(\frac{n\pi}{a}\Big)^2, \qquad n=1,2,\dots \tag{2} $$

Only standing waves fitting a whole number of half-wavelengths survive: $n\,\tfrac{\lambda}{2}=a$. Confinement gives a discrete spectrum *with a nonzero floor* $E_1>0$: you cannot switch the particle off, because $n=0$ is forbidden. That floor is a confinement zero-point energy — the same "you can't stand perfectly still" effect as the oscillator's $\tfrac12\hbar\omega$.

## Case B — particle on a circle (the wave chasing its tail)

Now change the *shape* of the space: instead of walls, glue the ends together. Identify $y\sim y+2\pi R$, a circle of circumference $2\pi R$. There is no wall, so the wavefunction need not vanish anywhere. The one demand is that $y$ and $y+2\pi R$ are literally the same point, so the wavefunction must return to the same value after one lap — the **periodic** condition

$$ \phi(y) = \phi(y+2\pi R). $$

This is the decisive difference from the interval. Dirichlet pins $\psi$ *to zero* (sines only). Periodicity pins $\phi$ *to repeat*: both $\sin(ly/R)$ and $\cos(ly/R)$ survive — periodic exactly when $l$ is an integer — including the constant. Complex exponentials span the same space and diagonalize momentum directly, so we use those. Try $\phi(y)=e^{iqy}$; periodicity demands

$$ e^{iqy} = e^{iq(y+2\pi R)} \;\Longrightarrow\; e^{2\pi i qR}=1 \;\Longrightarrow\; qR \in \mathbb Z. $$

So the allowed wavenumbers are

$$ q = \frac{n}{R}, \qquad n=0,\pm1,\pm2,\dots $$

(The general rule on any loop of length $L$ is $q=2\pi n/L$; here $L=2\pi R$, so $q=n/R$.) The normalized eigenfunctions are

$$ \phi_n(y)=\frac{1}{\sqrt{2\pi R}}\,e^{iny/R}, $$

with the factor fixed by one trip around, $\int_0^{2\pi R}|\phi_n|^2\,dy=1$. They are orthonormal by the standard Fourier computation,

$$ \int_0^{2\pi R}\phi_m^*\phi_n\,dy=\frac{1}{2\pi R}\int_0^{2\pi R}e^{i(n-m)y/R}\,dy=\delta_{mn}, $$

because for $m\neq n$ the exponential completes an integer number of laps and averages to zero, while for $m=n$ it integrates to the circumference.

Now apply the momentum operator $\hat p=\frac{\hbar}{i}\frac{d}{dy}$:

$$ \hat p\,\phi_n = \frac{\hbar}{i}\cdot\frac{in}{R}\,\phi_n = \frac{\hbar n}{R}\,\phi_n \quad\Longrightarrow\quad \boxed{\;p = \frac{\hbar n}{R},\;\; n\in\mathbb Z\;} \tag{3} $$

A plane wave on a circle closes up on itself only if its wavelength divides the circumference an integer number of times, and momentum is just $\hbar$ times that integer count of wavelengths per lap. The energies follow from (1):

$$ E_n = \frac{\hbar^2}{2m}\Big(\frac{n}{R}\Big)^2 = \frac{p^2}{2m}. \tag{4} $$

Two features separate the circle from the box, and both matter later:

- **$n=0$ is allowed** — the constant mode $\phi_0$, a genuine zero-momentum state. There is no confinement floor on a circle: the ground state sits at $E=0$. This is exactly why a small extra dimension leaves low-energy physics alone — the constant mode always survives.
- **States pair up as $\pm n$** (degenerate, $E_n=E_{-n}$): the same wave running clockwise or counterclockwise. In the box the two directions superpose into a single standing wave; on the circle they are distinct physical states.

The spacing $\hbar/R$ is the germ of Kaluza–Klein towers. As $R\to0$, every $n\neq0$ mode has $E\sim\frac{\hbar^2}{2m}(1/R)^2\to\infty$, so the excited momentum modes cost too much energy to reach and the small dimension effectively hides.

## Interval versus circle, and the handoff to strings

| | interval $(0,a)$ | circle, radius $R$ |
|---|---|---|
| boundary condition | $\psi(0)=\psi(a)=0$ (Dirichlet) | $\phi(y)=\phi(y+2\pi R)$ (periodic) |
| modes | $\sin(n\pi x/a)$ | $e^{iny/R}$ (sin **and** cos) |
| quantization | $q=n\pi/a$, $n\ge1$ | $p=\hbar n/R$, $n\in\mathbb Z$ |
| lowest mode | $E_1>0$ (no $n=0$) | $E_0=0$ (constant mode allowed) |

*Boundary conditions, not the equation, select the spectrum.* This exact dichotomy returns for the string: **open** strings get interval-type endpoint conditions, **closed** strings get periodicity $\sigma\sim\sigma+2\pi$ with left- and right-movers — see [[A string is many oscillators]]. And when a target dimension is compact, the closed string's center-of-mass momentum is quantized precisely by (3): the seed of momentum modes, winding, and **T-duality**.

## Open questions

- The angle operator $\hat\theta$ on the circle is ill-defined (multivalued), so $[\hat\theta,\hat p]=i\hbar$ cannot hold globally; the rigorous variable is $e^{i\theta}$. Working directly with $\hat p$ and plane waves sidesteps this and still gives the whole momentum spectrum.
- The real $\sin/\cos$ basis and the complex $e^{\pm iny/R}$ basis span the same space; the complex one diagonalizes $\hat p$, the real one is manifestly real. For counting states they agree — two real solutions correspond to the pair $\pm n$.

## Exercise

A particle lives on a circle of circumference $L$ (radius $R=L/2\pi$). Suppose you *cut the circle open* into an interval of the same length $L$ with hard walls (Dirichlet), keeping $L$ fixed. Compare the ground-state energies of the two systems, and explain in one sentence why they differ.

> [!success]- Solution
> **Circle.** From (3)–(4) with $R=L/2\pi$, the allowed momenta are $p=\hbar n/R = 2\pi\hbar n/L$. The ground state is $n=0$:
> $$ E_0^{\text{circle}} = 0. $$
> **Interval.** From (2) with box width $a=L$, the lowest allowed state is $n=1$:
> $$ E_1^{\text{interval}} = \frac{\hbar^2}{2m}\Big(\frac{\pi}{L}\Big)^2 > 0. $$
> They differ because the boundary conditions differ, even though the equation and the length are identical. The circle admits the constant mode $\phi_0=\text{const}$ — a perfectly periodic, zero-momentum state — so its floor is $E=0$. The interval forbids the constant mode: a nonzero constant cannot vanish at the walls, so the lowest surviving state must curve up from zero and back down, carrying momentum $\sim\hbar\pi/L$ and hence a nonzero confinement energy. *Gluing the ends removes the walls, and removing the walls removes the zero-point floor.*
