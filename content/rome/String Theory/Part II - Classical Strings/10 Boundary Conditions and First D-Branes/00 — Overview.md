---
title: 00 — Overview
number: "10.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, overview]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

This module runs the [[Nambu-Goto action|Nambu–Goto action]] through its first two computations: a stretched string stores energy $V=T_0\,a$, linear in its length, and open-string endpoints obey boundary conditions whose free/fixed pattern *is* a D-brane.

## Two facts from one taut thread

A relativistic string is a taut, tensionful thread. Two facts fall out of that single idea, and this module is nothing but those two facts worked out:

1. **Pulling the string out to length $a$ costs energy $T_0\,a$** — like a rubber band whose pull never stiffens, however far you stretch it. That constant cost per unit length is exactly what the word *tension* means, and it forces the string to have mass $\mu_0 = T_0/c^2$ per unit length. The string weighs something *only because* it is taut; kill the tension and it is genuinely massless.
2. **An open string has two ends, and physics has to say something about them.** Coordinate by coordinate, each end is either *free to slide* (Neumann) or *pinned* (Dirichlet). The pinned directions cut the endpoint down to a hyperplane; the free directions let it roam that plane. That hyperplane, swept through time, is a **D-brane** — the surface strings live on. You don't put it in by hand; the boundary conditions draw it for you.

The glue between them is the **10.1 [[Static gauge]]**: set worldsheet time equal to lab time, $X^0=c\tau$, and the intimidating Nambu–Goto action collapses into an ordinary mechanics problem you can integrate.

## The one calculation that starts it all

The first fact is one line of algebra once the string is set up. Freeze it straight along the $x^1$-axis from $0$ to $a$. In static gauge the two worldsheet tangents are pure time and pure stretch, so (mostly-plus signature, $c$ kept explicit)

$$\dot X^2=-c^2,\qquad X'^2=(f')^2,\qquad \dot X\cdot X'=0,$$

where $f(\sigma)$ is any increasing relabeling of the segment. The Nambu–Goto radicand collapses to $(\dot X\cdot X')^2-\dot X^2X'^2=c^2(f')^2$; its square root $c\,f'$ cancels the $1/c$ in the prefactor $-T_0/c$, leaving

$$
S=-T_0\int dt\int_0^{\sigma_1}\!d\sigma\,\frac{df}{d\sigma}
=-T_0\int dt\,\big(f(\sigma_1)-f(0)\big)
=\int dt\,(-T_0\,a).
$$

The $\sigma$-integrand is a **total derivative**, so the parameterization $f$ drops out and only the endpoint gap $a$ survives — reparameterization invariance made concrete. A static Lagrangian is $L=-V$, so $\boxed{V=T_0\,a}$. That is the first real number in string theory. Full derivation: 10.2 [[String tension and the energy of a stretched string]].

## The one equation that defines a brane

Varying the open-string action, integration by parts leaves an unavoidable term at each end:

$$
\mathcal P^\sigma_\mu\,\delta X^\mu\big|_{\text{endpoint}}=0,
\qquad \text{one product per coordinate }\mu.
$$

The variational principle does *not* tell you how to zero it — you choose, axis by axis, which factor dies:

- **Neumann (free):** $\mathcal P^\sigma_\mu=0$. The endpoint may move in $x^\mu$; no momentum leaks off the end.
- **Dirichlet (fixed):** $\delta X^\mu=0$, i.e. $X^\mu=\bar x^\mu$ constant. The endpoint is pinned; momentum flows off the end into whatever holds it — a brane.

This is the exact Neumann/Dirichlet dichotomy of any PDE boundary-value problem: kill the normal-derivative-like flux, or kill the boundary value. **Time is always Neumann** — a Dirichlet condition on $X^0$ would freeze the endpoint to a single instant, and then it wouldn't exist at other times. So a brane always extends through time.

Count: with $p$ spatial directions Neumann and $d-p$ Dirichlet, the endpoint lives on a $p$-dimensional spatial hyperplane, swept through time into a $(p+1)$-dimensional **Dp-brane**. Details: 10.3 [[Neumann versus Dirichlet conditions]], 10.4 [[D-branes (first appearance)]].

The dictionary is one line: fixing a coordinate removes a brane dimension, freeing one adds it. "Choose boundary conditions" and "choose a brane" are the same act. And the branes are real — in the quantum theory, open-string excitations tied to a Dp-brane become genuine fields (a Maxwell field plus scalars) living on its worldvolume, so a brane is a dynamical object, not a clamp we imposed.

## Sublesson map

- 10.1 [[Static gauge]] — set $X^0=c\tau$; why reparameterization invariance lets you, and how it cleans up the tangent vectors.
- 10.2 [[String tension and the energy of a stretched string]] — the headline $V=T_0a$ and $\mu_0=T_0/c^2$.
- 10.3 [[Neumann versus Dirichlet conditions]] — the boundary term, the free/fixed binary, why time is always Neumann.
- 10.5 [[Endpoint velocity and endpoint force]] — transverse velocity $\vec v_\perp$, the relativistic string Lagrangian $L=-T_0\!\int ds\sqrt{1-v_\perp^2/c^2}$, and the proof that *fully free* ends move at $c$.
- 10.4 [[D-branes (first appearance)]] — the Dp-brane from the boundary pattern, the dimension dictionary, why branes are physical.
- 10.6 [[Endpoint motion on a Dp-brane]] — how the speed-of-light theorem weakens to $\sqrt{1-v^2/c^2}\,\vec n_\parallel=0$ when only brane-parallel directions are free.
- 10.7 [[Part II - Classical Strings/10 Boundary Conditions and First D-Branes/Boundary conditions as geometry]] — the module's capstone: the whole argument on one page, plus worldsheet sketches.

## Open questions
- Brane tension / energy density is a quantum result, not derived in this classical module.
- Curved or time-dependent branes are outside this first flat-hyperplane treatment.
- A string with each end on a *different* brane needs mixed ND/DN coordinates (half-integer modes); only previewed here, quantized later in [[Strings stretched between Dp- and Dq-branes]].

## Exercise

Do both cold, no notes — this is the module's self-test.

**(a)** Set up a static string from $0$ to $a$ in static gauge, parameterized by an increasing $f(\sigma)$. Show $\dot X^2=-c^2$, $X'^2=(f')^2$, $\dot X\cdot X'=0$; evaluate the Nambu–Goto action, using the total-derivative trick, to $S=\int dt\,(-T_0 a)$; read off $V=T_0 a$; then give $\mu_0=T_0/c^2$ and explain in one sentence why the string is "massless" without tension.

**(b)** Take $d=3$ spatial dimensions. Write the endpoint boundary term $\mathcal P^\sigma_\mu\,\delta X^\mu=0$, state the Neumann vs. Dirichlet alternatives, explain why time must be Neumann, and conclude that Neumann along $x^1,x^2$ with Dirichlet at $x^3=0$ traps the endpoints on a D2-brane. What is its worldvolume dimension?

*Bonus (mastery):* explain why a *fully free* endpoint is forced to move transversely at the speed of light.

> [!success]- Solution
> **(a)** In static gauge $X^\mu=(c\tau,\,f(\sigma),\,\vec 0)$, so $\dot X^\mu=(c,0,\vec 0)$ and $X'^\mu=(0,f',\vec 0)$ with $f'>0$. With the mostly-plus metric $\eta=\mathrm{diag}(-,+,\dots,+)$:
> $$\dot X^2=-c^2,\qquad X'^2=(f')^2,\qquad \dot X\cdot X'=0.$$
> The radicand is $(\dot X\cdot X')^2-\dot X^2 X'^2=0-(-c^2)(f')^2=c^2(f')^2$, so $\sqrt{\cdots}=c\,f'$. Then
> $$S=-\frac{T_0}{c}\int dt\int_0^{\sigma_1}\!d\sigma\,(c\,f')=-T_0\int dt\int_0^{\sigma_1}\!d\sigma\,\frac{df}{d\sigma}.$$
> The $\sigma$-integrand is a total derivative, so it collapses to boundary values: $\int_0^{\sigma_1}\!f'\,d\sigma=f(\sigma_1)-f(0)=a-0=a$, independent of $f$. Hence $S=\int dt\,(-T_0 a)$. A static configuration has zero kinetic energy, so $L=-V$ and $S=\int dt\,(-V)$; matching gives $V=T_0 a$.
> Creating the string deposits rest energy $V$ into length $a$, so the rest mass per unit length is $\mu_0=V/(ac^2)=T_0/c^2$. If $T_0=0$ then $\mu_0=0$: the string has mass *only* because it is taut — there is no independently postulated "stuff" carrying rest mass, so a tensionless relativistic string is genuinely massless.
>
> **(b)** Varying the action leaves $\mathcal P^\sigma_\mu\,\delta X^\mu=0$ at each end, one product per coordinate $\mu=0,1,2,3$. For each, either **Neumann** ($\mathcal P^\sigma_\mu=0$, endpoint free) or **Dirichlet** ($\delta X^\mu=0$, i.e. $X^\mu$ pinned). Time must be Neumann: $X^0=\text{const}$ would fix the endpoint to one instant, so it wouldn't exist at other times. Choose Neumann along $x^1,x^2$ (and $x^0$) and Dirichlet along $x^3$ with $\bar x^3=0$:
> $$\mathcal P^\sigma_0=\mathcal P^\sigma_1=\mathcal P^\sigma_2=0,\qquad X^3(\tau,\text{end})=0.$$
> The endpoints slide freely on the $(x^1,x^2)$-plane but can never leave $x^3=0$. That plane swept through time is the **D2-brane**; its worldvolume is $2+1=3$-dimensional ($p=2$).
>
> **Bonus.** Free means $\mathcal P^{\sigma\mu}=0$ in every direction, time included. Here $\partial_s\vec X$ is the unit tangent to the string (arc length $s$) and $v=|\partial_t\vec X|$ is the endpoint speed. The $\mu=0$ component forces $\partial_s\vec X\cdot\partial_t\vec X=0$: the endpoint velocity is orthogonal to the string, i.e. purely transverse. Feeding that back, the spatial components reduce to $\vec{\mathcal P}^\sigma=-T_0\sqrt{1-v^2/c^2}\,\partial_s\vec X=0$. But $\partial_s\vec X$ is a *unit* vector, never zero, so the square root must vanish: $v^2=c^2$. A fully free end is dragged sideways through space at the speed of light.
