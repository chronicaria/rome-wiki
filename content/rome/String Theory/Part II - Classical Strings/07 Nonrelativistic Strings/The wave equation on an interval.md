---
title: The wave equation on an interval
number: "7.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, wave-equation]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A small transverse displacement $y(t,x)$ on a taut string obeys the wave equation $\partial_x^2 y = v_0^{-2}\,\partial_t^2 y$, because the only transverse force at leading order is the string's own curvature pulling it straight.

## Why a plucked string whips back

Grab a tiny piece of a taut string. Tension pulls that piece toward each neighbor, *along the string*, at both ends. If the piece is straight, the two pulls are equal and opposite — no net force. If the piece is **curved**, the two tangent directions disagree and the pulls fail to cancel: the leftover points toward the string's rest line. A hilltop gets yanked down, a valley gets yanked up, with a force set by how sharply the piece bends — the second derivative $\partial_x^2 y$.

Net transverse force is proportional to curvature — that single statement is the whole mechanism. Newton's law then reads "acceleration $\propto$ curvature," which is already the wave equation; the constant of proportionality is all that remains to pin down, and it turns out to be a speed. Picture instead a chain of masses, each pulled toward the average of its two neighbors: bumps flatten, the flattening travels outward, and that traveling flattening is the wave.

## Setup

Work in the $(x,y)$ plane. The string sits along the $x$ axis with ends at $(0,0)$ and $(a,0)$. Two material constants describe it:

- **tension** $T_0$ — a force (units energy/length), the pull the string exerts along its own length;
- **linear mass density** $\mu_0$ — mass/length, so the total mass is $M=\mu_0 a$.

We track only *transverse* motion: the displacement is purely vertical, $y(t,x)$, with $x\in[0,a]$ the *longitudinal* coordinate. In applied-math terms $y$ is a scalar field on the strip $\{(t,x):\ t\in\mathbb{R},\ 0\le x\le a\}$; the "string" is just that field plus its constants and endpoint rules.

The one modeling assumption is **small slopes**:
$$\left|\frac{\partial y}{\partial x}\right|\ll 1.\tag{1}$$
This is what makes the problem linear. It lets us treat $T_0$ as constant (the string barely stretches) and, as we check next, lets us ignore horizontal motion entirely.

## Only curvature matters: the force balance

Take the element between $x$ and $x+dx$. Tension pulls each end along the local tangent. For a small slope $\partial_x y$, the *vertical* component of a tangential pull $T_0$ is
$$T_0\sin\theta\approx T_0\tan\theta = T_0\,\frac{\partial y}{\partial x},$$
since $\sin\theta\approx\tan\theta$ when $\theta$ is small. The neighbor beyond $x+dx$ pulls along the forward tangent (vertical component $+T_0\,\partial_x y$ there); the neighbor before $x$ pulls along the backward tangent (vertical component $-T_0\,\partial_x y$). The **net vertical force** is the difference of the slope-force at the two ends:
$$dF_v = T_0\,\frac{\partial y}{\partial x}\Big|_{x+dx} - T_0\,\frac{\partial y}{\partial x}\Big|_{x}\;\simeq\; T_0\,\frac{\partial^2 y}{\partial x^2}\,dx.$$
If the tangent on the right tilts up more steeply than the one on the left, the upward pull wins and the piece accelerates up. Equal slopes at both ends means the vertical pulls cancel and there is no force. Only the *change* in slope — the curvature $\partial_x^2 y$ — produces a leading transverse force.

**Why we may ignore the horizontal force.** Write $s\equiv\partial_x y$. The horizontal component of the pull is $T_0\cos\theta$, and $\cos\theta = (1+s^2)^{-1/2}\approx 1-\tfrac12 s^2$, so
$$dF_h = T_0\cos\theta\big|_{x+dx}-T_0\cos\theta\big|_{x}\simeq -\frac{T_0}{2}\big(s^2\big|_{x+dx}-s^2\big|_x\big)\simeq -T_0\,s\,\partial_x s\,dx.$$
Compare to $dF_v\simeq T_0\,\partial_x s\,dx$: the ratio is $|dF_h/dF_v|\simeq |s|\ll 1$. The horizontal force is smaller by one power of the slope, so dropping it is *self-consistent* with the small-slope assumption (1), not an extra fudge. This is what "linearization" means here.

## Newton's law gives the wave equation

The element's mass is $dm=\mu_0\,dx$ (it started with length $dx$ and, to leading order, keeps it). Newton's law, net vertical force $= dm\times$ vertical acceleration:
$$T_0\,\frac{\partial^2 y}{\partial x^2}\,dx = (\mu_0\,dx)\,\frac{\partial^2 y}{\partial t^2}.$$
Cancel $dx$ and rearrange:
$$\boxed{\;\frac{\partial^2 y}{\partial x^2} - \frac{\mu_0}{T_0}\,\frac{\partial^2 y}{\partial t^2} = 0\;}\tag{2}$$
This is the **wave equation**. Against the standard form $\partial_x^2 y - v_0^{-2}\partial_t^2 y=0$ we read off the wave speed
$$v_0=\sqrt{\frac{T_0}{\mu_0}}.$$
Tighter or lighter means faster waves. A dimension check confirms $v_0$ is a speed: $[T_0/\mu_0] = (\text{mass}\cdot\text{length}/\text{time}^2)/(\text{mass}/\text{length}) = \text{length}^2/\text{time}^2$.

Rewritten as $\partial_t^2 y = v_0^2\,\partial_x^2 y$, the equation says *acceleration equals $v_0^2$ times curvature* — restoring, exactly as the opening argued: concave-up accelerates upward, concave-down accelerates downward, and the string relaxes toward flat.

> **Where relativity will enter.** Here $T_0$ and $\mu_0$ are independent dials set by the material, and $v_0$ is whatever they dictate. The *relativistic* string has no such freedom: its only parameter is the tension, and its rest energy per unit length turns out to be $T_0$ itself, so $\mu_0=T_0/c^2$ and the wave speed is promoted to $c$. See [[String tension and the energy of a stretched string]].

## The general solution: d'Alembert

The wave operator factors:
$$\partial_x^2-v_0^{-2}\partial_t^2 = \big(\partial_x-v_0^{-1}\partial_t\big)\big(\partial_x+v_0^{-1}\partial_t\big).$$
In the characteristic coordinates $\xi = x-v_0t$, $\eta = x+v_0t$ this operator becomes $4\,\partial_\xi\partial_\eta$, so the equation reads $\partial_\xi\partial_\eta\,y=0$: $\partial_\eta y$ is a function of $\eta$ alone, and integrating gives the general solution on the infinite line,
$$y(t,x) = h_+(x - v_0 t) + h_-(x + v_0 t),\tag{3}$$
with $h_\pm$ *arbitrary* (twice-differentiable) single-variable functions. $h_+$ is a frozen waveform sliding **right** at speed $v_0$ — its argument stays constant on $x=v_0t+\text{const}$ — and $h_-$ slides **left**. Any disturbance is a right-mover plus a left-mover, no more.

## What data pins down a solution

Equation (2) is second order in time on a bounded interval, so a well-posed problem needs both **initial conditions** (in $t$) and **boundary conditions** (in $x$).

**Initial data** — the starting shape $y(0,x)$ and starting velocity $\partial_t y(0,x)$. From (3),
$$y(0,x)=h_+(x)+h_-(x),\qquad \partial_t y(0,x) = v_0\big(h_-'(x) - h_+'(x)\big).$$
These two determine $h_+$ and $h_-$, up to a constant traded between them that cancels in $y$: the shape splits the total between the two movers, and the velocity fixes how much heads each way (a rightward pulse has $h_+$ large, $h_-$ small).

**Boundary data** — what the ends do, at $x=0$ and $x=a$. This is the subject of [[Fixed versus free endpoints]]; it is also what *discretizes* the allowed standing waves in [[Normal modes and frequencies]].

**On an interval the two movers are no longer independent.** The boundary reflects one into the other. For fixed (Dirichlet) ends, $y(t,0)=0$ gives, with $u\equiv v_0 t$,
$$h_+(-u)+h_-(u)=0\quad\Rightarrow\quad h_-(u)=-h_+(-u):$$
the left-mover is the right-mover flipped in space *and* sign. Feeding that into $y(t,a)=0$,
$$h_+(a-v_0t) - h_+(-a-v_0t)=0\quad\Rightarrow\quad h_+(w)=h_+(w-2a):$$
the waveform is **periodic with period $2a$**. A pulse runs down the string, hits the wall, and comes back *inverted*; after traveling $2a$ (there and back) it repeats. The familiar sine standing-wave expansion is nothing but this single reflected traveling wave rewritten in Fourier modes.

## Variable density (aside)

If $\mu_0\to\mu(x)$ varies along the string, the derivation is *local* — it only ever looked at one small element — so the form is unchanged except the coefficient:
$$\frac{\partial^2 y}{\partial x^2} - \frac{\mu(x)}{T_0}\,\frac{\partial^2 y}{\partial t^2}=0.$$
This generally no longer separates into clean trig modes. We keep constant $\mu_0$.

## Open questions

- Small slopes exclude *longitudinal* oscillations, where the tension itself must vary and cannot be treated as constant. A separate (harder) problem.
- The reflection above was for Dirichlet ends and gave an **odd** reflection ($h_-(u)=-h_+(-u)$). Free (Neumann) ends give an **even** reflection instead — the exercise below constructs it on a half-line; [[Fixed versus free endpoints]] treats the boundary conditions themselves.

## Exercise

On the infinite line, launch a right-mover together with its mirror image moving left:
$$y(t,x)=h(x-v_0t)+h(-x-v_0t),$$
with $h$ any twice-differentiable profile.

(a) Show that $y$ satisfies the Neumann condition $\partial_x y(t,0)=0$ for *all* $t$ and *every* profile $h$, and find the endpoint motion $y(t,0)$.

(b) Take $h(\xi)=A\cos(k\xi)$ and show the superposition is a standing wave: a fixed spatial profile times an oscillating amplitude. Identify the profile and the frequency.

(c) Which combination of $h(x-v_0t)$ and its mirror enforces the Dirichlet condition $y(t,0)=0$ instead?

> [!success]- Solution
> **(a)** Both terms solve the wave equation: $h(x-v_0t)$ is a right-mover, and $h(-x-v_0t)$ is a function of $x+v_0t$ alone (namely $h_-(u)=h(-u)$), hence a left-mover. Differentiate in $x$, minding the inner derivative of $-x-v_0t$:
> $$\partial_x y = h'(x-v_0t)-h'(-x-v_0t).$$
> At $x=0$ both arguments equal $-v_0t$, so $\partial_x y(t,0)=h'(-v_0t)-h'(-v_0t)=0$ for all $t$, whatever $h$ is. The mirror-image left-mover is exactly the **even reflection** $h_-(u)=+h_+(-u)$ — flipped in space but *not* in sign — and it keeps the slope at the origin zero identically. The endpoint itself is free to move:
> $$y(t,0)=2h(-v_0t),$$
> generally nonzero — a Neumann end rides up and down with twice the incoming amplitude.
>
> **(b)** With $h(\xi)=A\cos(k\xi)$, evenness of cosine gives $h(-x-v_0t)=A\cos(kx+kv_0t)$, so with $\omega=kv_0$,
> $$y=A\cos(kx-\omega t)+A\cos(kx+\omega t)=2A\cos(kx)\cos(\omega t),$$
> by the sum-to-product identity. This is a standing wave: the spatial profile $\cos(kx)$ never translates; only its overall amplitude oscillates at frequency $\omega$. Consistently with (a), $\partial_x y=-2Ak\sin(kx)\cos(\omega t)$ vanishes at $x=0$: the origin is a node of the slope and an antinode of the displacement. The standing-wave form is special to sinusoidal profiles — for a localized bump $h$, the two mirrored pulses simply pass through each other and separate.
>
> **(c)** The difference $y=h(x-v_0t)-h(-x-v_0t)$. At $x=0$ the two terms are equal and cancel, so $y(t,0)=0$ for all $t$. This is the **odd reflection** $h_-(u)=-h_+(-u)$ derived in the body: the pulse reflected from a Dirichlet wall comes back inverted, whereas the Neumann reflection of (a) sends it back upright.
