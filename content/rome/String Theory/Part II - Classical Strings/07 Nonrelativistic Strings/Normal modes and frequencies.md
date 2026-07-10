---
title: Normal modes and frequencies
number: "7.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, normal-modes]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A normal mode is a standing wave in which the whole string swings in lockstep at one frequency; the fixed-endpoint string admits a harmonic tower $\omega_n = n\pi v_0/a$, and these are the classical ancestors of the oscillators of the quantum string.

## What a normal mode is

A plucked guitar string, instead of thrashing chaotically, settles into a handful of pure shapes, each humming at a single pitch. A **normal mode** is one such shape. Every point of the string bobs up and down *at the same frequency, on the same clock* — the string reaches its extremes all at once and passes through flat all at once. (Different points may move in opposite directions; that sign belongs to the frozen shape, not the shared time factor.) The *shape* stays put; only its overall height breathes in and out. This is a **standing wave**, not a traveling one.

Two payoffs are worth naming before the derivation. First, the allowed frequencies will turn out to be exact integer multiples of one fundamental, and that integer spacing is what your ear hears as a definite pitch — a "note" rather than a hiss. Second, each mode will behave like one independent harmonic oscillator: when we later quantize, each oscillator becomes a quantum degree of freedom, and the "number of quanta in mode $n$" becomes a particle-like excitation. Everything downstream in this course is built on the classical skeleton assembled here.

## The normal-mode ansatz

We start from the wave equation derived in [[The wave equation on an interval]],
$$\partial_x^2 y = \frac{\mu_0}{T_0}\,\partial_t^2 y, \qquad v_0^2 = \frac{T_0}{\mu_0},$$
with $y(t,x)$ the transverse displacement, $T_0$ the tension, $\mu_0$ the mass density, and $v_0$ the wave speed.

To encode "every point oscillates at one shared frequency $\omega$ and phase $\phi$," we demand that the time dependence factor out of the shape:

$$y(t,x) = y(x)\,\sin(\omega t + \phi). \tag{1}$$

This is the whole content of "normal mode" written as an equation: the profile $y(x)$ is frozen, and $\sin(\omega t + \phi)$ is one common metronome for the entire string.

Substitute (1) into the wave equation. The time factor gives $\partial_t^2 \to -\omega^2$, and the common $\sin(\omega t+\phi)$ cancels off both sides:

$$\frac{d^2 y(x)}{dx^2} + \omega^2\,\frac{\mu_0}{T_0}\,y(x) = 0.$$

The two-variable PDE has collapsed into a one-variable ODE for the *shape*. Writing $k^2 \equiv \omega^2\mu_0/T_0 = \omega^2/v_0^2$, this is the Helmholtz equation

$$y'' + k^2 y = 0, \qquad k = \frac{\omega}{v_0}, \tag{2}$$

whose general solution is $y(x) = A\sin(kx) + B\cos(kx)$. The wavenumber $k$ and the frequency $\omega$ are locked together by $\omega = v_0 k$: fixing one fixes the other.

Read (2) as an eigenvalue problem: $-y'' = k^2 y$ says $y$ is an eigenfunction of the operator $-\partial_x^2$ with eigenvalue $k^2$. The physicist's "normal mode" and the mathematician's "eigenfunction of $-\partial_x^2$" are the same object. What (2) does **not** do on its own is quantize anything: with $x$ ranging over all of $\mathbb{R}$, *every* $k$ is allowed. Quantization is not in the differential equation — it comes entirely from the **boundary conditions**, which is where we turn next.

## Fixed endpoints: the sine tower

Pin the string to walls at both ends (Dirichlet conditions, $y(0)=y(a)=0$; see [[Fixed versus free endpoints]]). Impose them on $y(x)=A\sin(kx)+B\cos(kx)$:

- $y(0)=0$ forces $B=0$ (the cosine is nonzero at the origin), leaving $y(x)=A\sin(kx)$.
- $y(a)=0$ then needs $\sin(ka)=0$, i.e. $ka = n\pi$ for a positive integer $n$.

So only a discrete ladder of wavenumbers survives, and the allowed profiles are

$$y_n(x) = A_n \sin\!\left(\frac{n\pi x}{a}\right), \qquad n = 1, 2, 3, \dots$$

Physically, the string must fit a whole number of half-wavelengths between the two walls: since the half-wavelength is $\pi/k = a/n$, the string holds exactly $n$ of them. In pictures: $n=1$ is a single arch pinned at both ends; $n=2$ is two arches with a stationary node in the middle; $n=3$ is three arches; and so on. We discard $n=0$ because $\sin 0 \equiv 0$ gives a motionless flat string — not an oscillation. Negative $n$ only flips the sign of $\sin$, which is absorbed into $A_n$, so it is no new mode.

Feed $k=n\pi/a$ back into $\omega = v_0 k$ to get the **allowed frequencies**:

$$\boxed{\;\omega_n = \sqrt{\frac{T_0}{\mu_0}}\,\frac{n\pi}{a} = \frac{n\pi v_0}{a}, \qquad n = 1, 2, 3, \dots\;} \tag{3}$$

### Reading the spectrum

This one formula carries all the music.

- **The tower is harmonic.** $\omega_n = n\,\omega_1$: every frequency is an integer multiple of the fundamental $\omega_1 = \pi v_0/a$. This exact integer spacing is *why* a plucked string produces a clean pitch — the overtones reinforce a single perceived note instead of scattering into noise. (Real instruments are only approximately harmonic, because real strings have stiffness this model ignores.)
- **Tension sets pitch.** $\omega_n \propto \sqrt{T_0}$: tighten a string and every frequency rises together. This is exactly what you do when you tune a guitar or violin by turning a peg.
- **Length sets pitch.** $\omega_n \propto 1/a$: shorten the string — press a fret — and the pitch goes up.
- **Units check.** $\omega_1 = \pi v_0/a$ has units $(\text{length/time})/\text{length} = 1/\text{time}$, an angular frequency. Good. In cycles per second, $f_n = \omega_n/2\pi = n v_0/(2a)$, so $f_1 = v_0/(2a)$ — the familiar "fundamental = wave speed over twice the length."

## General motion is a Fourier sine series

Because the wave equation is linear, any sum of modes is again a solution, and the sines $\{\sin(n\pi x/a)\}$ are a complete basis for functions on $(0,a)$ vanishing at the ends. So the most general fixed-endpoint motion is a superposition, cleanest written with **time-dependent mode amplitudes** $q_n(t)$:

$$y(t,x) = \sum_{n=1}^{\infty} q_n(t)\,\sin(k_n x), \qquad k_n = \frac{n\pi}{a}. \tag{4}$$

Substituting (4) into the wave equation and matching each sine separately gives, for every $n$,

$$q_n''(t) + \omega_n^2\, q_n(t) = 0 \;\;\Longrightarrow\;\; q_n(t) = A_n\cos(\omega_n t) + B_n\sin(\omega_n t).$$

Each spatial mode carries one ordinary harmonic oscillator as its time coefficient. A vibrating string is not one complicated object but an infinite collection of independent, decoupled oscillators — one per mode, each with its own frequency $\omega_n$. This is the classical template that, upon quantization, turns each $q_n$ into a quantum oscillator with creation and annihilation operators — the story of [[A string is many oscillators]].

The constants $A_n, B_n$ are fixed by the initial shape and velocity. Let $f(x) = y(0,x)$ and $g(x) = \partial_t y(0,x)$. Using the orthogonality relation
$$\int_0^a \sin(k_n x)\sin(k_m x)\,dx = \frac{a}{2}\,\delta_{nm},$$
multiply $f(x) = \sum_n A_n\sin(k_n x)$ by $\sin(k_m x)$ and integrate; only the $n=m$ term survives:
$$A_m = \frac{2}{a}\int_0^a f(x)\,\sin(k_m x)\,dx.$$
Differentiating (4) in time and setting $t=0$ gives $g(x) = \sum_n \omega_n B_n\sin(k_n x)$, so the same projection yields
$$B_m = \frac{2}{a\,\omega_m}\int_0^a g(x)\,\sin(k_m x)\,dx.$$
Orthogonality is the tool that isolates one mode at a time: the initial *shape* fixes each $A_m$, the initial *velocity* fixes each $B_m$. This is just the Fourier-series solution of the wave equation.

### Same solutions, seen as traveling waves

The standing-wave picture and the traveling-wave picture of [[The wave equation on an interval]] describe the same solutions. A single mode splits by a product-to-sum identity:

$$\sin(kx)\sin(\omega t) = \tfrac12\big[\cos(kx - \omega t) - \cos(kx + \omega t)\big].$$

So each standing wave *is* a right-mover plus a left-mover of equal frequency. The boundary condition lives in how the wave turns around: a fixed end reflects a pulse back inverted (the sign flip), and the superposition of the outgoing and reflected waves is exactly the standing sine pattern.

## Open questions

- Completeness of the sine basis (that (4) can represent *every* physical motion) is a Fourier–Sturm–Liouville theorem; here we take it as given for piecewise-smooth data.
- Free (Neumann) endpoints replace sines by cosines and add a separate $\omega_0 = 0$ zero mode; that case is handled in [[Fixed versus free endpoints]].

## Exercise

A string of length $a$ with fixed ends is released from rest ($g \equiv 0$) in the initial shape of its **third mode only**: $f(x) = C\sin(3\pi x/a)$.

1. Which modes $q_n(t)$ are excited, and what is the full motion $y(t,x)$?
2. Now suppose you *shorten* the string to length $a/2$ (both ends still fixed) while keeping tension and density unchanged. By what factor does the fundamental frequency $\omega_1$ change, and does the shape of part 1 remain a normal mode of the shortened string?

> [!success]- Solution
> **Part 1.** The projection integrals pick out only the mode matching the initial data. Since $f(x)=C\sin(3\pi x/a)$ is already a single eigenfunction, orthogonality gives $A_3 = C$ and $A_n = 0$ for $n\neq 3$. Released from rest means $g\equiv 0$, so every $B_m = 0$. Only the third oscillator moves:
> $$y(t,x) = C\,\cos(\omega_3 t)\,\sin\!\left(\frac{3\pi x}{a}\right), \qquad \omega_3 = \frac{3\pi v_0}{a}.$$
> A single mode, launched cleanly, stays a single mode forever — the modes are decoupled, so no others get stirred up. It is a pure standing wave humming at $\omega_3$.
>
> **Part 2.** From (3), $\omega_1 = \pi v_0/a$ with $v_0=\sqrt{T_0/\mu_0}$ unchanged. Replacing $a\to a/2$ doubles it: $\omega_1 \to 2\omega_1$. (Halving the length raises the pitch by an octave — pressing the 12th fret.)
> The shape $\sin(3\pi x/a)$ is *not* a normal mode of the shortened string. On $[0,a/2]$ the fixed-end modes are $\sin(m\pi x/(a/2)) = \sin(2m\pi x/a)$, i.e. only the *even*-argument sines $\sin(2\pi x/a), \sin(4\pi x/a),\dots$; the odd $\sin(3\pi x/a)$ is not among them, and indeed it fails $y(a/2)=0$ since $\sin(3\pi/2)=-1\neq 0$. The mode ladder is set by the length, so changing $a$ redefines which shapes are allowed.
