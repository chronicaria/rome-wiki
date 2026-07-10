---
title: Energy in string oscillations
number: "7.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, string-energy]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A vibrating string stores energy as motion (kinetic) plus stretch (elastic), and in the normal-mode basis that total splits into a sum of independent harmonic-oscillator energies — one per mode.

Pluck a string and it holds energy in two ways: in how fast its points move, and in how far it is stretched from its flat rest shape. As it vibrates, energy sloshes between the two — all kinetic as the string whips through flat, all elastic at the peak of the swing — while the total stays fixed. And written in the standing-wave basis, the modes do not share: each is its own oscillator, sealed off from the others. That independence is the reason a quantum string will turn out to be a box of independent quantum oscillators.

## Kinetic energy

Each element $dx$ carries mass $\mu_0\,dx$ and moves transversely with velocity $\partial y/\partial t$. Summing $\tfrac12(\text{mass})(\text{velocity})^2$ along the string,

$$E_{\rm kin}=\int_0^a \tfrac12\,\mu_0\left(\frac{\partial y}{\partial t}\right)^2 dx.$$

This is ordinary $\tfrac12 mv^2$ turned into a density and integrated. Nothing subtle.

## Potential energy: the cost of stretching

A flat string stores no transverse energy. Energy goes in only when an element is *lengthened*, because pulling it out against the tension $T_0$ does work $T_0\,\Delta\ell$. Take the element from $(x,0)$ to $(x+dx,0)$ and displace it to run from $(x,y)$ to $(x+dx,\,y+dy)$. Its new length minus its old:

$$\Delta\ell=\sqrt{(dx)^2+(dy)^2}-dx = dx\left(\sqrt{1+(\partial_x y)^2}-1\right)\simeq dx\,\tfrac12(\partial_x y)^2. \tag{1}$$

The stretch is *second order* in the slope, because $\sqrt{1+s^2}-1\approx\tfrac12 s^2$ — the same small-slope regime $\partial_x y\ll 1$ that makes the wave equation linear makes the energy quadratic. There is no term linear in the slope: a constant slope stretches the string (a quadratic cost) but exerts no net transverse force, since force comes from curvature, not slope.

The work to stretch each element is $T_0\,\Delta\ell$, so

$$E_{\rm pot}=\int_0^a \tfrac12\,T_0\left(\frac{\partial y}{\partial x}\right)^2 dx.$$

Kinetic energy watches the *velocity* $\dot y$; elastic energy watches the *slope* $y'$. A fast-moving flat string is all kinetic; a steeply sloped frozen string is all elastic.

The two integrands also assemble into the string Lagrangian density $\mathcal L=\tfrac12\mu_0\dot y^2-\tfrac12 T_0 y'^2$, whose action reproduces the wave equation and the endpoint conditions; that variational story lives in [[Fixed versus free endpoints]]. The same kinetic-minus-stretching structure returns, repackaged as worldsheet area, in the [[Nambu-Goto action]].

## Total energy is conserved

The energy is the sum $E_{\rm kin}+E_{\rm pot}$ (the Lagrangian took the difference):

$$E=E_{\rm kin}+E_{\rm pot}=\int_0^a\left[\tfrac12\mu_0(\partial_t y)^2 + \tfrac12 T_0(\partial_x y)^2\right]dx.$$

Why conserved? Differentiate and feed in the wave equation $\mu_0\partial_t^2 y=T_0\partial_x^2 y$:

$$\frac{dE}{dt}
=\int_0^a\big(\mu_0\dot y\,\ddot y+T_0\,y'\dot y'\big)\,dx
=T_0\int_0^a\big(\dot y\,y''+y'\dot y'\big)\,dx
=T_0\int_0^a\partial_x(\dot y\,y')\,dx
=T_0\big[\dot y\,y'\big]_{0}^{a}.$$

**Energy leaves the string only through the endpoints, and only if an endpoint is simultaneously moving ($\dot y\neq 0$) and sloped ($y'\neq 0$)** — that combination is a support doing work. Both standard boundary conditions kill it: Dirichlet fixes $\dot y=0$ at the ends (a wall does no work on a point it holds still), Neumann fixes $y'=0$ (a free end exerts no transverse force). Energy is conserved either way — even for the Dirichlet string, whose *momentum* is not.

## One mode = one oscillator

Take a single Dirichlet standing wave,
$$y(t,x)=A_n\sin(k_n x)\sin(\omega_n t),\qquad k_n=\frac{n\pi}{a},\quad \omega_n=v_0 k_n,\quad v_0^2=\frac{T_0}{\mu_0}.$$

Kinetic piece — differentiate in $t$, square, integrate with $\int_0^a\sin^2(k_n x)\,dx=a/2$:
$$E_{\rm kin}(t)=\tfrac12\mu_0 A_n^2\omega_n^2\cos^2(\omega_n t)\cdot\frac{a}{2}.$$

Potential piece — differentiate in $x$, square, integrate with $\int_0^a\cos^2(k_n x)\,dx=a/2$:
$$E_{\rm pot}(t)=\tfrac12 T_0 A_n^2 k_n^2\sin^2(\omega_n t)\cdot\frac{a}{2}.$$

The two prefactors are equal, because $T_0 k_n^2=\mu_0 v_0^2 k_n^2=\mu_0\omega_n^2$. Adding them, $\cos^2+\sin^2=1$ collapses the time dependence:

$$\boxed{\;E_n=\tfrac14\,\mu_0\,a\,\omega_n^2\,A_n^2.\;} \tag{2}$$

Three things to read off:

- **The total is frozen in time**, even though $E_{\rm kin}\propto\cos^2$ and $E_{\rm pot}\propto\sin^2$ each oscillate. Being exactly out of phase, they hand energy back and forth so the sum stays put — the trade-off that defines a normal mode.
- **$E_n\propto A_n^2$ and $E_n\propto\omega_n^2$** — quadratic in amplitude, quadratic in frequency: the signature of a harmonic oscillator, $E=\tfrac12 m\omega^2 A^2$.
- **The factor $\tfrac14$.** Match against $\tfrac12 m\omega^2 A^2$: the mass is not the full string mass $M=\mu_0 a$ but $M/2$, the $a/2$ that $\int\sin^2$ leaves behind. So $E_n=\tfrac12\big(\tfrac{\mu_0 a}{2}\big)\omega_n^2 A_n^2$: a mode behaves like a single oscillator of mass $M/2$.

## The whole string = a stack of independent oscillators

A general Dirichlet motion is a superposition, $y(t,x)=\sum_n q_n(t)\sin(k_n x)$, with each amplitude an oscillator coordinate obeying $\ddot q_n+\omega_n^2 q_n=0$. Because distinct sines are orthogonal on $[0,a]$, every cross term in $E$ integrates to zero, and the energy is a clean sum:

$$E=\sum_{n=1}^{\infty}\frac{\mu_0 a}{4}\left(\dot q_n^{\,2}+\omega_n^2 q_n^{\,2}\right)
=\sum_{n=1}^{\infty}\left[\tfrac12 m_{\text{eff}}\,\dot q_n^{\,2}+\tfrac12 m_{\text{eff}}\,\omega_n^2 q_n^{\,2}\right],\qquad m_{\text{eff}}=\frac{\mu_0 a}{2}. \tag{3}$$

**No cross terms means no energy exchange: in the linear theory the modes never talk to each other.** Diagonalizing the quadratic energy in the standing-wave basis has turned one string into an infinite stack of independent oscillators of mass $\mu_0 a/2$ and frequency $\omega_n$ — the single most important structural fact in the module. Quantize it and each $q_n$ becomes its own quantum oscillator, its amplitude an operator built from creation and annihilation operators, and "energy = sum over modes" becomes "Hamiltonian = sum of oscillator Hamiltonians." (For $q_n=A_n\sin(\omega_n t+\phi_n)$, equation (3) collapses back to $E=\sum_n\tfrac14\mu_0 a\,\omega_n^2 A_n^2$, one copy of (2) per mode.)

Neumann modes give the identical formula with $\cos(k_n x)$ profiles for $n\ge 1$. Their extra $n=0$ mode is not an oscillation but rigid drift, $y_0=ut+b$: slope zero, so no elastic energy, and
$$E_0=\int_0^a\tfrac12\mu_0 u^2\,dx=\tfrac12\mu_0 a\,u^2$$
— the ordinary kinetic energy of the whole string mass $M=\mu_0 a$ sliding transversely. The static shift $b$ costs nothing.

## Open questions

- "Classical mode energy $\to$ quantum oscillator" is made precise in [[A string is many oscillators]] and the quantum-string modules.
- The exact nonlinear stretch energy keeps the full square root in (1); we stay at leading small-slope order throughout.

## Exercise

A guitar string of length $a$, density $\mu_0$, tension $T_0$ vibrates purely in its fundamental Dirichlet mode with amplitude $A$. **Without recomputing any integral**, use the boxed result (2) plus the kinetic–potential trade-off to answer: (a) What is the string's total energy? (b) At the instant the string is momentarily flat ($y\equiv 0$ everywhere), how is that energy distributed between kinetic and potential? (c) At the instant of maximum displacement? (d) Its *time-averaged* kinetic energy $\langle E_{\rm kin}\rangle$?

> [!success]- Solution
> Fundamental means $n=1$, so $\omega_1=\pi v_0/a$ with $v_0=\sqrt{T_0/\mu_0}$.
>
> **(a)** Plug $n=1$ into (2): $E=\tfrac14\mu_0 a\,\omega_1^2 A^2=\tfrac14\mu_0 a\left(\dfrac{\pi v_0}{a}\right)^2 A^2=\dfrac{\pi^2 T_0 A^2}{4a}$, using $\mu_0 v_0^2=T_0$. It is constant in time — that is the content of (2).
>
> **(b)** Flat means $y'=0$ everywhere, so $E_{\rm pot}=0$: the energy is **entirely kinetic**, $E_{\rm kin}=E$. This is the moment the whole string is whipping through the axis at top speed. In the single-mode formulas, $\sin(\omega_1 t)=0$ there, killing $E_{\rm pot}$, while $\cos^2(\omega_1 t)=1$ makes $E_{\rm kin}$ maximal.
>
> **(c)** Maximum displacement means the string is momentarily at rest ($\dot y=0$), so $E_{\rm kin}=0$: the energy is **entirely potential**, $E_{\rm pot}=E$. Here $\cos(\omega_1 t)=0$.
>
> **(d)** From the single-mode expressions, $E_{\rm kin}(t)=E\cos^2(\omega_1 t)$ and $E_{\rm pot}(t)=E\sin^2(\omega_1 t)$. Since $\langle\cos^2\rangle=\tfrac12$ over a period, $\langle E_{\rm kin}\rangle=\tfrac12 E=\dfrac{\pi^2 T_0 A^2}{8a}$, and equally $\langle E_{\rm pot}\rangle=\tfrac12 E$: on average the mode's energy sits half in motion and half in stretch, as it does for every harmonic oscillator.
