---
title: 07 — Nonrelativistic Strings (Overview)
number: "7.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, nonrelativistic-strings]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

An ordinary stretched string — violin, not spacetime — is string theory's mechanics in miniature: wave equation, boundary conditions, standing-wave modes, and a conserved energy that splits into independent oscillators.

## What a plucked string already knows

Pluck a violin string and it hums a definite pitch. That single everyday fact contains, in embryo, every idea we will later dress up relativistically. The point of this module is to earn those ideas on home turf — pure PDEs on an interval — so that when the relativistic string arrives, **nothing about the mechanics is new; only the geometry is.**

Strip a real string down to three ingredients: uniform mass density $\mu_0$, constant tension $T_0$, and a small transverse displacement $y(t,x)$ on $0\le x\le a$. Everything follows:

1. **Curvature drives the motion.** A short segment feels a net transverse pull toward its concave side, proportional to how sharply it bends: the vertical force is $\propto \partial_x^2 y$. Newton's law then reads $\mu_0\,\partial_t^2 y = T_0\,\partial_x^2 y$ — the wave equation, with speed $v_0=\sqrt{T_0/\mu_0}$. Tighter or lighter string, faster waves. This is 7.1 [[The wave equation on an interval]].

2. **Boundary data is physics, not bookkeeping.** The bulk equation cannot say what happens at the two ends, and the choice fixes the mode shapes and decides whether momentum is conserved. **Dirichlet** (glue the end to a wall, $y=0$) versus **Neumann** (thread the end on a frictionless ring, $\partial_x y=0$) are the only two ways to make the endpoint term in the varied action vanish — the action *tells you* which conditions are legal instead of you imposing them. That same boundary term is where D-branes will later hide. This is 7.2 [[Fixed versus free endpoints]].

3. **Modes are eigenvectors; frequencies are eigenvalues.** Standing waves are the eigenfunctions of $-\partial_x^2$ on the interval. Both boundary conditions quantize the wavenumber to $k_n=n\pi/a$, giving the **same** harmonic frequency tower $\omega_n = n\pi v_0/a$ — the reason a plucked string sounds like one pitch with integer overtones rather than noise. The only difference is sine profiles for Dirichlet against cosine profiles for Neumann, plus one extra Neumann mode at $\omega_0=0$: a rigid transverse drift of the whole string. This is 7.3 [[Normal modes and frequencies]].

4. **Energy diagonalizes.** The conserved energy $E=\int(\tfrac12\mu_0\dot y^2+\tfrac12 T_0 y'^2)\,dx$ is a sum of kinetic and elastic pieces. In the mode basis its cross-terms die by orthogonality, leaving one independent harmonic oscillator per mode: $E=\sum_n \tfrac14\mu_0 a\,\omega_n^2 A_n^2$. This is 7.4 [[Energy in string oscillations]].

One sentence carries forward: **a string is a collection of decoupled oscillators — one per standing wave — and its energy is their sum.** When we quantize, each of those classical oscillators becomes a quantum oscillator with its own creation and annihilation operators, and the string's excitations become *particles*. Everything downstream is that sentence, made relativistic.

Two methods, one answer: we derive the wave equation twice — once from Newton's force balance, once by varying an action — because the action route is the one that survives into relativity, and it delivers the complete menu of legal boundary conditions in the same stroke, where Newton needs a separate force model (a wall, a massless ring) for each kind of endpoint.

## Sublessons

- 7.1 [[The wave equation on an interval]] — Newton's law on a string element gives $\partial_x^2 y - v_0^{-2}\partial_t^2 y = 0$; d'Alembert's left/right movers; what initial and boundary data pin a solution.
- 7.2 [[Fixed versus free endpoints]] — Dirichlet vs. Neumann; how the action's boundary term selects them; sine vs. cosine profiles; the $\omega_0=0$ zero mode; when transverse momentum is (not) conserved; the D-brane teaser.
- 7.3 [[Normal modes and frequencies]] — the standing-wave ansatz, the interval eigenvalue problem $-y''=k^2y$, and the tower $\omega_n=n\pi v_0/a$; general motion as a Fourier sum of oscillator coordinates.
- 7.4 [[Energy in string oscillations]] — kinetic + elastic energy, the field Lagrangian $\mathcal L=\tfrac12\mu_0\dot y^2-\tfrac12 T_0 y'^2$, and the energy of a single mode as $\tfrac14\mu_0 a\,\omega_n^2 A_n^2$.

## Open questions

- None specific to this overview; each subnote carries its own technical caveats (nonlinear stretching, mixed/Robin boundary conditions, completeness of the mode basis).

## Exercise

Close the notes and reproduce, on a blank page, the spine of the whole module. Do all five from scratch:

1. Derive the wave equation for small transverse oscillations of a string with tension $T_0$ and density $\mu_0$, and identify the wave speed $v_0$.
2. Explain the endpoint term that appears when you vary the action, and why it forces *either* $y=0$ *or* $\partial_x y=0$ at each end.
3. Impose **fixed** (Dirichlet) endpoints $y(t,0)=y(t,a)=0$. Find the mode profiles and the frequencies $\omega_n$, and say why $n=0$ is excluded.
4. Switch to **free** (Neumann) endpoints $\partial_x y=0$ at both ends. State exactly what changes in the profiles, what stays identical in the frequencies, and what new $n=0$ solution appears.
5. Write the conserved energy and show why one normal mode behaves like one harmonic-oscillator coordinate.

> [!success]- Solution
> **1. Wave equation.** Take an element between $x$ and $x+dx$, mass $dm=\mu_0\,dx$. Tension pulls along the local tangent; for small slope the vertical component is $T_0\,\partial_x y$. The net upward force is the difference between the two ends,
> $$dF_v = T_0\,\partial_x y\big|_{x+dx}-T_0\,\partial_x y\big|_{x}\simeq T_0\,\partial_x^2 y\,dx.$$
> Newton's law $dF_v=dm\,\partial_t^2 y$ gives $T_0\,\partial_x^2 y = \mu_0\,\partial_t^2 y$, i.e.
> $$\partial_x^2 y-\frac{1}{v_0^2}\partial_t^2 y=0,\qquad v_0=\sqrt{T_0/\mu_0}.$$
> Only the *curvature* $\partial_x^2 y$ survives at leading order; the horizontal forces cancel to one higher power of the slope.
>
> **2. Boundary term.** With action $S=\int dt\int_0^a dx\,[\tfrac12\mu_0(\partial_t y)^2-\tfrac12 T_0(\partial_x y)^2]$, varying $y\to y+\delta y$ and integrating by parts in $x$ produces a spatial boundary piece
> $$\int dt\,\big[-T_0\,\partial_x y\,\delta y\big]_{x=0}^{x=a}.$$
> Stationarity needs this to vanish at each end separately. Two ways: hold the endpoint fixed so $\delta y=0$ (**Dirichlet**, $y=0$), or let the endpoint move but force $\partial_x y=0$ (**Neumann**). The action selects the conditions; we don't impose them.
>
> **3. Dirichlet.** The standing-wave ansatz $y=y(x)\sin(\omega t+\phi)$ turns the wave equation into $y''+k^2y=0$ with $k=\omega/v_0$; general solution $A\sin kx+B\cos kx$. $y(0)=0\Rightarrow B=0$; $y(a)=0\Rightarrow \sin(ka)=0\Rightarrow ka=n\pi$. So
> $$y_n(x)=A_n\sin\!\Big(\frac{n\pi x}{a}\Big),\qquad \omega_n=\frac{n\pi v_0}{a},\qquad n=1,2,\dots$$
> $n=0$ gives $\sin 0\equiv 0$ — a motionless string, not a mode.
>
> **4. Neumann.** Same equation, same solution family. $\partial_x y(0)=0\Rightarrow A=0$, leaving $y=B\cos kx$; $\partial_x y(a)=0\Rightarrow \sin(ka)=0\Rightarrow ka=n\pi$ again. So the **profiles become cosines** $y_n=A_n\cos(n\pi x/a)$, the **nonzero frequencies are identical** $\omega_n=n\pi v_0/a$, and now $n=0$ *survives*: $\cos 0=1$ is a constant profile with $\omega_0=0$ — a rigid transverse translation (the string's center-of-mass drift, $y=b+ut$ for constants $b,u$), which Dirichlet forbids.
>
> **5. Energy.** $E=\int_0^a[\tfrac12\mu_0(\partial_t y)^2+\tfrac12 T_0(\partial_x y)^2]\,dx$ — kinetic *plus* potential, with a $+$ where the Lagrangian has a $-$ — and $dE/dt=T_0[\dot y\,y']_0^a=0$ under either boundary condition. For one Dirichlet mode $y=A_n\sin(k_nx)\sin(\omega_n t)$, use $\int_0^a\sin^2=\int_0^a\cos^2=a/2$ and $T_0k_n^2=\mu_0\omega_n^2$:
> $$E_{\rm kin}(t)=\tfrac14\mu_0 a\,\omega_n^2A_n^2\cos^2\omega_n t,\qquad E_{\rm pot}(t)=\tfrac14\mu_0 a\,\omega_n^2A_n^2\sin^2\omega_n t,$$
> $$E_n=E_{\rm kin}+E_{\rm pot}=\tfrac14\mu_0 a\,\omega_n^2A_n^2,$$
> constant in time. Kinetic and potential trade off as $\cos^2\leftrightarrow\sin^2$ while their sum stays fixed — exactly a harmonic oscillator of effective mass $\mu_0 a/2$, half the string's total mass, since $\tfrac12(\mu_0 a/2)\omega_n^2A_n^2=\tfrac14\mu_0 a\,\omega_n^2A_n^2$. Orthogonality kills the cross-terms in a multi-mode sum, so the total energy is $\sum_n\tfrac14\mu_0 a\,\omega_n^2A_n^2$: one independent oscillator per mode.
