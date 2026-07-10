---
title: Fundamental string charge
number: "19.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, string-charge]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A fundamental string is electrically charged under the closed-string [[Kalb-Ramond field]] $B_{\mu\nu}$, the way a point particle is charged under the Maxwell field $A_\mu$. But the source is one-dimensional, so its charge density is a vector that flows along the string like current in a wire.

## Two charged objects side by side

Set the particle and the string next to each other.

- A **point charge** couples to $A_\mu$ (one index); its charge density $\rho=j^0$ is a scalar sitting at a point; you measure it by *enclosing* it in a sphere.
- A **string** couples to $B_{\mu\nu}$ (two indices); its charge density $\vec{j}^{\,0}$ is a vector pointing along the string; it behaves not like a static line of charge but like a steady current in a wire.

The wire is the picture to carry through the note: a current cannot simply stop, and every result below follows from that.

## Where the charge comes from: the coupling term

Quantizing the closed string produced a massless antisymmetric tensor state $B_{\mu\nu}=-B_{\nu\mu}$ (the Kalb–Ramond field), alongside the graviton $g_{\mu\nu}$ and the dilaton. A point particle of charge $q$ couples to $A_\mu$ through the worldline term $q\int A_\mu\,dx^\mu$. The string, sweeping out a two-dimensional worldsheet rather than a worldline, couples instead to the *two-index* field $B_{\mu\nu}$ through a worldsheet integral:

$$S_B = -\frac{1}{2}\int d\tau\,d\sigma\;\epsilon^{\alpha\beta}\,\partial_\alpha X^\mu\,\partial_\beta X^\nu\,B_{\mu\nu}\big(X(\tau,\sigma)\big).\tag{1}$$

Here $\alpha,\beta=0,1$ are worldsheet indices ($\partial_0=\partial_\tau$, $\partial_1=\partial_\sigma$) and $\epsilon^{\alpha\beta}$ is the 2D Levi-Civita symbol with $\epsilon^{01}=1$. The object $\epsilon^{\alpha\beta}\partial_\alpha X^\mu\partial_\beta X^\nu$ is the antisymmetrized **oriented area element** the worldsheet sweeps through spacetime — the natural thing to contract with the antisymmetric $B_{\mu\nu}$. Compare the two couplings directly: a particle's worldline drags a *tangent vector* $dx^\mu$ to feed the one-index $A_\mu$; a string's worldsheet drags an *oriented area 2-form* to feed the two-index $B_{\mu\nu}$. One more index in the field, one more dimension in the source.

The $\tfrac12$ is bookkeeping: because $B_{\mu\nu}$ is antisymmetric, only the antisymmetric part of $\partial_\alpha X^\mu\partial_\beta X^\nu$ survives the contraction, and the $\tfrac12$ keeps that antisymmetrization clean. It rides along into every equation below.

This is a *background* coupling: we quantized with $B=0$, which was valid; turning on a classical $B_{\mu\nu}$ that solves its own field equations is what "a Kalb–Ramond background" means. The rest of this note treats $B_{\mu\nu}$ as such a fixed background and asks what the string looks like *as a source* for it.

## Reading off the string current $j^{\mu\nu}$

The coupling (1) lives on the worldsheet; to see the string as a spacetime source we localize $B$ with a delta function:

$$B_{\mu\nu}\big(X(\tau,\sigma)\big)=\int d^D x\;\delta^D\big(x-X(\tau,\sigma)\big)\,B_{\mu\nu}(x).\tag{2}$$

Substituting (2) into (1) turns the worldsheet coupling into a spacetime coupling $-\int d^D x\,B_{\mu\nu}(x)\,j^{\mu\nu}(x)$, which *defines* the **string current**:

$$j^{\mu\nu}(x)=\frac{1}{2}\int d\tau\,d\sigma\;\delta^D\big(x-X(\tau,\sigma)\big)\left(\frac{\partial X^\mu}{\partial\tau}\frac{\partial X^\nu}{\partial\sigma}-\frac{\partial X^\nu}{\partial\tau}\frac{\partial X^\mu}{\partial\sigma}\right).\tag{3}$$

Two features are immediate and load-bearing. First, $j^{\mu\nu}=-j^{\nu\mu}$ by construction — it is antisymmetric like the field it sources. Second, the delta function fires **only on the worldsheet**: off the sheet, $x\neq X(\tau,\sigma)$ always, and $j^{\mu\nu}=0$. So the string is a source for $B_{\mu\nu}$ exactly as the Maxwell current $j^\mu$ is a source for $A_\mu$ — except this source also remembers an oriented direction in spacetime.

## It is a conserved current

To get the equation of motion for $B_{\mu\nu}$ we need its kinetic term. The gauge-invariant field strength is the exterior derivative of $B$ (see [[Kalb-Ramond field]]),

$$H_{\mu\nu\rho}=\partial_\mu B_{\nu\rho}+\partial_\nu B_{\rho\mu}+\partial_\rho B_{\mu\nu},$$

the two-form analogue of $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$: the combination built from the potential that survives gauge transformations. Its kinetic term is

$$S_H=-\frac{1}{6\kappa^2}\int d^D x\;H_{\mu\nu\rho}H^{\mu\nu\rho},$$

with $\kappa$ a coupling constant fixed later by the string coupling and $\alpha'$. Rather than quote the field equation, vary $S_H$. Varying $H^2$ pulls down a factor of $2$ ($\tfrac16\to\tfrac13$); then, because $H$ is totally antisymmetric, the three terms in $\delta H_{\mu\nu\rho}=\partial_\mu\delta B_{\nu\rho}+\partial_\nu\delta B_{\rho\mu}+\partial_\rho\delta B_{\mu\nu}$ each contract with $H^{\mu\nu\rho}$ to give the *same* thing after relabeling dummy indices, a factor of $3$ that clears the prefactor entirely ($\tfrac13\to1$):

$$
\begin{aligned}
\delta S_H
&=-\frac{1}{3\kappa^2}\int d^D x\;H^{\mu\nu\rho}\,\delta H_{\mu\nu\rho}\\
&=-\frac{1}{\kappa^2}\int d^D x\;H^{\mu\nu\rho}\,\partial_\rho(\delta B_{\mu\nu})\\
&=\frac{1}{\kappa^2}\int d^D x\;\delta B_{\mu\nu}\,\partial_\rho H^{\mu\nu\rho},
\end{aligned}
$$

the last line integrating by parts and dropping a spacetime boundary term. The coupling (1), rewritten via (2), contributes $\delta S_{\rm coup}=-\int d^D x\,\delta B_{\mu\nu}\,j^{\mu\nu}$. Requiring $\delta S_H+\delta S_{\rm coup}=0$ for arbitrary *antisymmetric* $\delta B_{\mu\nu}$ gives the field equation

$$\frac{1}{\kappa^2}\frac{\partial H^{\mu\nu\rho}}{\partial x^\rho}=j^{\mu\nu},\tag{4}$$

the exact analogue of Maxwell's $\partial_\nu F^{\nu\mu}=j^\mu$. Take one more divergence and use that $H$ is totally antisymmetric in $(\mu,\nu,\rho)$ while partial derivatives commute:

$$\frac{\partial j^{\mu\nu}}{\partial x^\mu}=\frac{1}{\kappa^2}\frac{\partial^2 H^{\mu\nu\rho}}{\partial x^\mu\,\partial x^\rho}=0.\tag{5}$$

The antisymmetric object $\partial_\mu\partial_\rho$ contracted against the antisymmetric-in-$\mu\rho$ tensor $H^{\mu\nu\rho}$ vanishes identically — the same one-line argument that makes the Maxwell current conserved. **The string current is conserved on its first index.**

## The charge is a vector along the string

Equation (5) conserves $j^{\mu\nu}$ on $\mu$ and leaves $\nu$ free. So $\nu$ labels a *whole family* of conserved currents, one for each value. Their charge densities are the time components $j^{0\nu}$; but $j^{00}=0$ by antisymmetry, so the survivors are the spatial ones $j^{0k}$. Hence

$$\text{the Kalb–Ramond charge density is a spatial vector }\vec{j}^{\,0}\text{ with components }j^{0k}.$$

This is *why* it is a vector and not a scalar: antisymmetry kills the $00$ component that a scalar density would have lived in. Setting $\nu=0$ in the conservation law (5) gives $\partial_\mu j^{\mu0}=-\partial_k j^{0k}=0$, i.e.

$$\nabla\cdot\vec{j}^{\,0}=0.\tag{6}$$

This is the local balance law for string charge. In ordinary vector calculus $\nabla\cdot\vec j=0$ says current is neither created nor destroyed: whatever flows into a small region flows back out. Here it says string-charge current lines have no loose ends — a string cannot stop in empty space, any more than a wire's current can. It can only close into a loop, run to infinity, or hand its current off to another system at a boundary. That handoff is what [[Endpoint charge]] and [[Maxwell fields on branes]] supply. The total vector charge is the space integral

$$\vec{Q}=\int d^d x\;\vec{j}^{\,0}.\tag{7}$$

Now pin down the *direction* of $\vec{j}^{\,0}$. Work in static gauge $X^0=\tau$: the delta function in (3) factorizes as $\delta(t-\tau)\,\delta(\vec x-\vec X)$, the $\tau$-integral collapses, and the second term drops (it carries $\partial X^0/\partial\sigma=0$), leaving

$$\vec{j}^{\,0}(\vec x,t)=\frac{1}{2}\int d\sigma\;\delta\big(\vec x-\vec X(t,\sigma)\big)\,\vec{X}'(t,\sigma),\qquad \vec X'=\partial\vec X/\partial\sigma.\tag{8}$$

At every point of the string the charge density points along $\vec X'$ — the tangent to the string, in the direction of increasing $\sigma$. Kalb–Ramond charge is not a scalar smeared on the string; it is a vector that flows along it. That is the wire.

### Worked example: an infinite static string

Lay a static string along the $x^1$ axis: $X^1=f(\sigma)$ with $f$ strictly monotonic, $X^2=\dots=X^d=0$. Only $j^{01}$ survives, and (8) becomes

$$j^{01}=\frac12\,\delta(x^2)\cdots\delta(x^d)\int_{-\infty}^{\infty} d\sigma\;\delta\big(x^1-f(\sigma)\big)\,f'(\sigma)
=\frac12\,\mathrm{sgn}(f')\,\delta(\vec x_\perp),$$

using the delta-function identity $\int d\sigma\,\delta(x^1-f(\sigma))\,f'(\sigma)=f'/|f'|=\mathrm{sgn}(f')$ at the unique root. The charge is localized transverse to the string, and its **sign tracks the orientation**: increasing $f$ ($\mathrm{sgn}\,f'=+1$) versus decreasing ($-1$) are strings pointing opposite ways.

This is why $B$-charged strings must be **oriented** curves. The Nambu–Goto action is reparameterization-invariant, but the coupling (1) is *not*: sending $\sigma\to\pi-\sigma$ leaves the measure $d\tau\,d\sigma$ unchanged but flips the sign of $X'$, so $S_B$ changes sign. Orientation is therefore physical. Consistently, unoriented string theories carry no $B_{\mu\nu}$ in their spectrum — there would be no direction for the charge vector to point.

## Open questions

- The absolute normalization of $\kappa$ in terms of $g_s$ and $\alpha'$ is not fixed here; it belongs with the later string-coupling / Born–Infeld normalization.
- For an *open* string the conservation law (5) fails by endpoint terms unless brane fields are included; the delta-function calculation then produces boundary contributions at $\sigma=0,\pi$. That failure, and its cure, is the subject of [[Endpoint charge]].
- Whether a given $B_{\mu\nu}$ configuration is a legitimate background can only be settled by re-quantizing the string in that background; the full nonlinear consistency condition is deferred to later Polyakov/CFT material.

## Exercise

Take an infinite static string along $x^1$ described by $X^1=f(\sigma)$, and consider two parameterizations of the *same* curve in space:

$$
\text{(a)}\quad f(\sigma)=\sigma,\qquad\qquad
\text{(b)}\quad f(\sigma)=-\sigma.
$$

For each, compute $j^{01}$ from equation (8), and state the resulting total charge per unit transverse area. Then explain in one sentence why the two answers differ even though the *set of points* occupied by the string is identical — and what physical quantity the difference is tracking.

> [!success]- Solution
> Use $j^{01}=\tfrac12\int d\sigma\,\delta(x^1-f(\sigma))\,f'(\sigma)\,\delta(\vec x_\perp)$ from (8).
>
> **(a)** $f(\sigma)=\sigma$ gives $f'=+1$, so $\int d\sigma\,\delta(x^1-\sigma)\cdot 1 = 1$ and
> $$j^{01}=+\tfrac12\,\delta(\vec x_\perp).$$
> The charge per unit transverse area (integrate $\delta(\vec x_\perp)$ over the transverse plane) is $+\tfrac12$.
>
> **(b)** $f(\sigma)=-\sigma$ gives $f'=-1$. Substituting $u=-\sigma$, $\int d\sigma\,\delta(x^1+\sigma)\cdot(-1)=-1$, so
> $$j^{01}=-\tfrac12\,\delta(\vec x_\perp),$$
> charge per unit transverse area $-\tfrac12$. Equivalently, both cases collapse to $\tfrac12\,\mathrm{sgn}(f')\,\delta(\vec x_\perp)$, which is $\pm\tfrac12$.
>
> **Why they differ:** the coupling $S_B$ is not reparameterization-invariant, and (b) is (a) with orientation reversed ($\sigma\to-\sigma$ flips the sign of the tangent $\vec X'$). The current $\vec j^{\,0}\propto\vec X'$ points *along* the string, so reversing the string's orientation flips the sign of its charge. The difference is tracking **orientation**: (a) and (b) are the same wire carrying current in opposite directions, hence carrying opposite $B$-charge. A string and its orientation-reverse are charge conjugates, which is exactly why $B$-charged strings must be oriented curves.
