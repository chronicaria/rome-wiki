---
title: Fixed versus free endpoints
number: "7.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, boundary-conditions]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A string's two ends can each be nailed down (Dirichlet, $y=0$) or left to slide (Neumann, $\partial_x y=0$). The choice leaves the nonzero frequencies identical but swaps sine profiles for cosine, adds a drifting zero mode for free ends, and decides whether transverse momentum is conserved.

## Two ways to end a string

A vibrating string on $0\le x\le a$ obeys the wave equation in the bulk, but the wave equation alone doesn't know what happens at the two ends. You have to tell it. There are exactly two natural things to fix at an endpoint:

- **the height $y$** — pin the end to a wall. This is **Dirichlet**.
- **the slope $\partial_x y$** — let the end ride a frictionless massless ring on a vertical pole, so the string always meets the pole horizontally. This is **Neumann**.

The gut-level difference: a nailed end has a wall pushing on it to hold it in place, while a free end feels no transverse force at all. That single distinction — *who is allowed to push on the endpoint* — is what generates every downstream consequence below, and it is the seed of the D-brane.

## Why exactly these two: the endpoint comes from the ring

The Neumann condition isn't an arbitrary rule; it's forced by Newton. Picture the massless ring threaded on the pole. The pole blocks horizontal motion but exerts no vertical friction, so the only vertical force on the ring is the string pulling on it — the transverse component of the tension, $T_0\,\partial_x y$. A massless object with any net force on it would have infinite acceleration, which is impossible. Hence the force must vanish:
$$\partial_x y(t,0)=\partial_x y(t,a)=0.$$
The end is free to move in $y$, but the string always leaves the pole flat. Dirichlet is the opposite extreme — the wall clamps the height:
$$y(t,0)=y(t,a)=0.$$

## Both conditions fall out of the action

You don't have to know the two conditions in advance — the variational principle hands them to you. Vary the action and read off which endpoints are allowed. With Lagrangian density $\tfrac12\mu_0(\partial_t y)^2-\tfrac12 T_0(\partial_x y)^2$, the action is
$$S=\int dt\int_0^a dx\left[\tfrac12\mu_0(\partial_t y)^2 - \tfrac12 T_0(\partial_x y)^2\right].$$
Varying $y\to y+\delta y$ and integrating by parts in both $t$ and $x$ produces three pieces:
$$\delta S = \underbrace{\int_0^a\!\Big[\mu_0\,\partial_t y\,\delta y\Big]_{t_i}^{t_f}dx}_{\text{set by initial/final data}} + \underbrace{\int_{t_i}^{t_f}\!\Big[-T_0\,\partial_x y\,\delta y\Big]_{x=0}^{x=a}dt}_{\textbf{endpoint term}} - \int\!\!\int dx\,dt\,\Big(\mu_0\partial_t^2 y - T_0\partial_x^2 y\Big)\delta y.$$
Killing the bulk term gives the wave equation. Stationarity *also* demands the endpoint term vanish at each end separately — and there are exactly two ways to make $-T_0\,\partial_x y\,\delta y$ vanish at an endpoint:

- **freeze the endpoint** so its variation dies: $\delta y=0 \Rightarrow$ Dirichlet;
- **let it move** ($\delta y$ free) but force the slope to zero: $\partial_x y=0 \Rightarrow$ Neumann.

So Dirichlet fixes the *value* and Neumann fixes the conjugate quantity $\mathcal{P}^x=\partial\mathcal{L}/\partial y'=-T_0\,\partial_x y$: the transverse force the string left of a point exerts on the string to its right, which is the same thing as the flux of transverse momentum past that point. Neumann is just "$\mathcal{P}^x=0$ at the ends" — no momentum crosses an endpoint. The very same endpoint term, taken seriously, is what later reveals D-branes — see [[D-branes (first appearance)]]. (The action itself is set up in [[Energy in string oscillations]].)

Fixing the ends also forces $\partial_t y=0$ there — the endpoints can't move if they're nailed — but that's a *consequence*, not a substitute for stating where the ends are pinned.

## Same frequencies, different shapes

Every normal mode solves $y''+k^2y=0$ with $k=\omega/v_0$ (see [[Normal modes and frequencies]]); only the endpoints select $k$. General solution $y(x)=A\sin kx+B\cos kx$.

**Dirichlet** ($y=0$ at both ends) kills the cosine and needs $\sin(ka)=0$:
$$y_n(x)=A_n\sin\!\Big(\frac{n\pi x}{a}\Big),\quad n=1,2,\dots$$

**Neumann** ($y'=0$ at both ends): $y'(0)=0$ kills the sine, leaving $y=B\cos kx$; then $y'(a)=0$ again needs $\sin(ka)=0$:
$$y_n(x)=A_n\cos\!\Big(\frac{n\pi x}{a}\Big),\quad n=0,1,2,\dots$$

Both land on the *identical* condition $ka=n\pi$, so both give the same frequency tower:
$$\boxed{\;\omega_n=\frac{n\pi v_0}{a}=\sqrt{\frac{T_0}{\mu_0}}\,\frac{n\pi}{a}.\;} \tag{1}$$
Sine versus cosine is the only difference in shape; the nonzero frequencies coincide exactly. Dirichlet asks the *height* to vanish at both ends, Neumann asks the *slope* to — geometrically different demands that quantize $k$ the same way.

## The real difference lives at $n=0$

The two spectra part company only at the very bottom.

- **Dirichlet $n=0$:** $\sin 0\equiv 0$ — no string, no mode. Excluded.
- **Neumann $n=0$:** $\cos 0\equiv 1$ — a *constant* profile $y_0(x)=A_0$, the whole string shifted rigidly and $\omega_0=0$. It isn't an oscillation; it's a **rigid translation**. More strongly, $y(t,x)=b+ut$ (uniform drift, constants $b,u$) solves both the wave equation and the Neumann conditions: nothing pins a free string, so it can slide bodily in $y$.

Physically, the Neumann zero mode is the string's **center-of-mass motion** in the transverse direction — the free string can be anywhere and can drift. This is the classical seed of a deep fact: for the relativistic open string, Neumann ends are the natural ones, and this zero mode becomes the string's overall position and momentum. A Dirichlet string has no such freedom; its ends are nailed, so it can neither sit wherever it likes nor drift.

## Momentum: conserved or leaking?

Total transverse momentum is $p_y=\int_0^a \mu_0\,\partial_t y\,dx$. Using the wave equation to turn $\partial_t^2 y$ into $\partial_x^2 y$, its rate of change collapses to a boundary term:
$$\frac{dp_y}{dt}=\int_0^a \mu_0\,\partial_t^2 y\,dx = \int_0^a T_0\,\partial_x^2 y\,dx = T_0\Big[\partial_x y\Big]_{x=0}^{x=a}.$$
Momentum can only change through the slope at the ends — i.e., through the transverse force the supports apply. So the two boundary conditions give opposite verdicts:

- **Neumann:** $\partial_x y=0$ at both ends $\Rightarrow dp_y/dt=0$. **Momentum is conserved** — free ends push on nothing.
- **Dirichlet:** the end slope is generally nonzero $\Rightarrow$ **momentum is not conserved.** The walls continually shove the string; in the fundamental mode the net momentum sloshes back and forth between $+y$ and $-y$.

To see the Dirichlet leak explicitly, expand $y=\sum_n q_n(t)\sin(n\pi x/a)$. Then $\partial_x y=\sum_n q_n\frac{n\pi}{a}\cos(n\pi x/a)$, and $\cos(n\pi)-\cos 0=(-1)^n-1$, so
$$\frac{dp_y}{dt}=T_0\sum_{n=1}^{\infty}\frac{n\pi}{a}\,q_n(t)\big((-1)^n-1\big).$$
Only **odd** modes contribute ($(-1)^n-1=-2$ for odd $n$, $0$ for even) — even modes are antisymmetric about the midpoint and carry zero net momentum. The moral isn't that every Dirichlet motion loses momentum; it's that the boundary condition **does not enforce** conservation, whereas Neumann does.

**The D-brane teaser.** String theorists long distrusted Dirichlet conditions precisely *because* momentum leaks — where does it go, and what is this "wall"? The resolution: a Dirichlet open-string endpoint ends on a **D-brane**, a real dynamical object that soaks up the momentum. The wall is physical. This module plants that seed; [[D-branes (first appearance)]] grows it.

## Side-by-side

| | **Dirichlet (fixed)** | **Neumann (free)** |
|---|---|---|
| Condition at $x=0,a$ | $y=0$ | $\partial_x y=0$ |
| Profile $y_n(x)$ | $A_n\sin(n\pi x/a)$ | $A_n\cos(n\pi x/a)$ |
| Allowed $n$ | $1,2,3,\dots$ | $0,1,2,3,\dots$ |
| Frequencies $\omega_n$ | $n\pi v_0/a$ | $n\pi v_0/a$ (same) |
| Endpoint is a node of | displacement $y$ | slope $\partial_x y$ |
| Zero mode ($n=0$) | none | rigid translation, $\omega_0=0$ |
| Transverse momentum $p_y$ | **not** conserved (walls push) | conserved (free ends) |
| String-theory role | ends on a **D-brane** | natural open-string endpoint |

## Open questions

- **Mixed conditions** (Dirichlet at one end, Neumann at the other) force $ka=(n+\tfrac12)\pi$ and a half-integer-shifted spectrum — the exercise below works this out. They return later for strings stretched between different branes.
- **Robin conditions** ($c_1 y+c_2\,\partial_x y=0$, e.g. from a spring at the endpoint) interpolate between the two extremes and lie outside the fixed-wall / massless-ring models.

## Exercise

A string on $0\le x\le a$ has a **mixed** setup: Dirichlet at $x=0$ (nailed) and Neumann at $x=a$ (free ring).

(a) Find the allowed mode profiles and the quantized wavenumbers $k$.
(b) Write the frequency tower $\omega_n$ and say how it compares to the pure Dirichlet/Neumann tower (1).
(c) Is there a zero mode? Is transverse momentum conserved?

> [!success]- Solution
> Start from $y(x)=A\sin kx + B\cos kx$.
>
> **(a)** Dirichlet at $x=0$: $y(0)=B=0$, so $y=A\sin kx$ and $y'=Ak\cos kx$. Neumann at $x=a$: $y'(a)=0\Rightarrow \cos(ka)=0$, i.e.
> $$ka=\Big(n+\tfrac12\Big)\pi,\qquad n=0,1,2,\dots$$
> Profiles: $y_n(x)=A_n\sin\!\big(\frac{(n+\frac12)\pi x}{a}\big)$ — these are the shapes that vanish at the nailed end and are flat at the free end (a quarter-wave for $n=0$, three-quarters for $n=1$, …).
>
> **(b)** With $\omega=v_0 k$,
> $$\omega_n=\frac{(n+\tfrac12)\pi v_0}{a},\qquad n=0,1,2,\dots$$
> The tower is **shifted by a half-integer** relative to (1): frequencies sit halfway between the pure-case values, and the fundamental $\omega_0=\pi v_0/(2a)$ is *half* the pure Dirichlet fundamental $\pi v_0/a$ (a mixed string is effectively "twice as long" acoustically).
>
> **(c)** No zero mode: $ka=(n+\tfrac12)\pi$ never allows $k=0$, and the Dirichlet end forbids the constant profile. Momentum is **not** conserved — the nailed $x=0$ end still has nonzero slope in general, so the wall keeps pushing. (The free end contributes nothing, but one leaking end is enough.)
