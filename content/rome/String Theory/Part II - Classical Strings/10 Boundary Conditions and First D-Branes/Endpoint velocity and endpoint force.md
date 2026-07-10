---
title: Endpoint velocity and endpoint force
number: "10.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, endpoints]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A free open-string endpoint has nowhere to send the string's tension, and the only way to balance the books is for the end to whip *sideways through space at the speed of light*.

Twirl a straight open string like a baton, pinned at the center, spinning in a plane. The middle barely moves; the two tips race around a circle. Push the tips to the fastest speed physics allows and you have a free relativistic string endpoint: forever moving at $c$, forever perpendicular to the string, like the crack of a whip that never slows down. This note proves the motion is forced, not merely allowed.

## Why "velocity" is subtle in the interior but clean at the endpoints

A string has no substructure — no painted dots to track from one instant to the next. The naive velocity $\partial\vec X/\partial t$ points "along constant $\sigma$," but $\sigma$ is our own arbitrary ruling of the string ([[Static gauge]] fixed $\tau=t$ but left $\sigma$ free). Slide the labels along the string and $\partial\vec X/\partial t$ tilts, even though the string itself did nothing. Longitudinal reparameterization is pure gauge, so the *direction* of this velocity is not physical.

The cure is the **transverse velocity** $\vec v_\perp$: the part of $\partial\vec X/\partial t$ perpendicular to the string. It needs no $\sigma$-choice — it is the rate at which the string, seen as a curve in space, sweeps sideways. Sliding labels along the curve cannot fake it.

### Building $\vec v_\perp$

Measure position along the string by arc length $s$, so $ds = |\partial\vec X/\partial\sigma|\,|d\sigma|$, and orient $\sigma$ so that $s$ grows with it. Then $\partial\vec X/\partial s$ is a **unit tangent**: differentiating position by distance-along-the-curve gives a unit vector pointing along the curve, because

$$\frac{\partial\vec X}{\partial s}\cdot\frac{\partial\vec X}{\partial s} = \Big|\frac{\partial\vec X}{\partial\sigma}\Big|^2\Big(\frac{d\sigma}{ds}\Big)^2 = 1.$$

Write $\hat n \equiv \partial\vec X/\partial s$ for this unit tangent. The transverse velocity is $\partial\vec X/\partial t$ with its component along $\hat n$ subtracted off — the standard "kill the parallel part" projection $\vec u - (\vec u\cdot\hat n)\hat n$:

$$\vec v_\perp = \frac{\partial\vec X}{\partial t} - \Big(\frac{\partial\vec X}{\partial t}\cdot\hat n\Big)\hat n. \tag{1}$$

Squaring (1), the cross term and the $(\vec u\cdot\hat n)^2$ term combine, using $\hat n\cdot\hat n = 1$, to leave

$$v_\perp^2 = \Big(\frac{\partial\vec X}{\partial t}\Big)^2 - \Big(\frac{\partial\vec X}{\partial t}\cdot\hat n\Big)^2. \tag{2}$$

This is Pythagoras: (full speed)$^2$ minus (speed along the string)$^2$.

## The action in terms of $v_\perp$

Feed the static-gauge tangents into the Nambu–Goto action. With $X^\mu = (ct,\vec X)$ and $\eta = \mathrm{diag}(-,+,\dots,+)$ (mostly-plus signature),

$$(\dot X)^2 = -c^2 + \Big(\frac{\partial\vec X}{\partial t}\Big)^2, \qquad (X')^2 = \Big(\frac{\partial\vec X}{\partial\sigma}\Big)^2, \qquad \dot X\!\cdot X' = \frac{\partial\vec X}{\partial t}\cdot\frac{\partial\vec X}{\partial\sigma}.$$

Substituting these into the Nambu–Goto radicand and using (2) plus $\partial\vec X/\partial\sigma = (ds/d\sigma)\,\hat n$, the mess collapses into a single relativistic factor:

$$\sqrt{(\dot X\!\cdot X')^2 - (\dot X)^2(X')^2} = c\,\frac{ds}{d\sigma}\sqrt{1 - \frac{v_\perp^2}{c^2}}. \tag{3}$$

So the action and Lagrangian become

$$S = -T_0\int dt\int_0^{\sigma_1}\!d\sigma\,\frac{ds}{d\sigma}\sqrt{1-\frac{v_\perp^2}{c^2}}, \qquad L = -T_0\int ds\,\sqrt{1-\frac{v_\perp^2}{c^2}}. \tag{4}$$

The Lagrangian reads off cleanly. Each length $ds$ carries rest energy $T_0\,ds$ (from [[String tension and the energy of a stretched string]], where $\mu_0 c^2 = T_0$), and $L = -\!\int(\text{rest energy})\sqrt{1-v_\perp^2/c^2}$ is the string version of the relativistic point particle $L=-mc^2\sqrt{1-v^2/c^2}$. Only the transverse speed appears; longitudinal sliding is gauge and correctly drops out.

## Endpoint motion: the two theorems

Free (Neumann) endpoints are those with $\mathcal P^\sigma_\mu = 0$ at $\sigma=0,\sigma_1$ — see [[Neumann versus Dirichlet conditions]], where $\mathcal P^\sigma_\mu = \partial\mathcal L/\partial X'^\mu$ is computed for the Nambu–Goto action. Substitute the static-gauge tangents into that expression, use (3) as the denominator, and trade every $\sigma$-derivative for an $s$-derivative — the factors of $ds/d\sigma$ cancel — to get

$$\vec{\mathcal P}^\sigma = -\frac{T_0}{c^2}\,\frac{\Big(\hat n\cdot\dfrac{\partial\vec X}{\partial t}\Big)\dfrac{\partial\vec X}{\partial t} + \bigg(c^2 - \Big(\dfrac{\partial\vec X}{\partial t}\Big)^{\!2}\bigg)\hat n}{\sqrt{1-v_\perp^2/c^2}}, \qquad \mathcal P^{\sigma\,0} = -\frac{T_0}{c}\,\frac{\hat n\cdot(\partial\vec X/\partial t)}{\sqrt{1-v_\perp^2/c^2}}. \tag{5}$$

The arbitrary $\sigma$ is gone: everything is built from the unit tangent $\hat n$ and the velocity $\partial\vec X/\partial t$. Two facts fall out — one from the time component, one from the space components.

**(1) The velocity is transverse.** The time component $\mathcal P^{\sigma\,0}$ must vanish at the end. Its denominator is at most $1$, so it cannot rescue a nonzero numerator — the numerator itself vanishes:

$$\hat n\cdot\frac{\partial\vec X}{\partial t} = 0 \quad\text{at the endpoints.} \tag{6}$$

The unit tangent $\hat n$ and the endpoint velocity $\partial\vec X/\partial t$ are orthogonal — the end moves *perpendicular to the string*. Feeding (6) back into (1), the subtracted term dies and $\vec v_\perp = \partial\vec X/\partial t \equiv \vec v$: at a free end the velocity is *entirely* transverse, and we may write $v$ for $v_\perp$ interchangeably there.

**(2) The speed is $c$.** Now the space components. Transversality (6) wipes out the first term in the numerator of $\vec{\mathcal P}^\sigma$, and in what survives $(\partial\vec X/\partial t)^2 = v_\perp^2 = v^2$, so $c^2 - v^2$ cancels against the square root:

$$\vec{\mathcal P}^\sigma = -\frac{T_0}{c^2}\,\frac{(c^2 - v^2)\,\hat n}{\sqrt{1-v^2/c^2}} = -T_0\sqrt{1-\frac{v^2}{c^2}}\,\hat n = 0 \quad\text{at the endpoints.} \tag{7}$$

But $\hat n$ is a *unit* vector — never zero. The product can only vanish if the square root does:

$$\boxed{\,v^2 = c^2\,} \tag{8}$$

**Free open-string endpoints move at the speed of light.** And it is *forced*, not optional. Equation (6) by itself would be satisfied trivially by a motionless end ($\vec v = 0$), but a motionless end makes $\sqrt{1-v^2/c^2}=1$, so $\vec{\mathcal P}^\sigma = -T_0\hat n \ne 0$ and the Neumann condition (7) fails. The only escape is $v=c$. The whip must crack.

**Why this is not a paradox.** A massive particle at $v=c$ would cost infinite energy — but the tip is not a massive particle. The Hamiltonian built from (4) assigns each piece of string the energy $T_0\,ds/\sqrt{1-v_\perp^2/c^2}$: rest energy times the usual relativistic factor. Approaching the tip, $1-v_\perp^2/c^2$ vanishes linearly in the remaining arc length $\delta$, so the energy density diverges like $\delta^{-1/2}$ — but *integrably*: the last $\delta$ of string has rest energy only $T_0\,\delta$ and carries total energy $\sim T_0\sqrt{\delta}\to 0$. The tip itself has no rest mass to boost (the string is made of pure tension — see [[String tension and the energy of a stretched string]]), and a massless thing is allowed to move at $c$. The exercise runs the same numerator-versus-denominator race for $\mathcal P^{\sigma\,0}$ in (5), which becomes a $0/0$ form at the end.

## "Endpoint force": where the tension goes

The $v=c$ theorem is momentum bookkeeping at the end. $\mathcal P^\sigma_\mu$ is the flux of $\mu$-momentum flowing *along* the string toward the endpoint — the tension's pull, carried outward. At a **free** end there is nothing beyond the tip to push against, so this flux must vanish: $\mathcal P^\sigma_\mu = 0$. The string cannot dump its longitudinal pull into empty space, so it converts it into transverse motion at the maximum allowed speed. That is theorem (8), reread as force balance.

At a **fixed** (Dirichlet) end the story flips: $\mathcal P^\sigma_\mu \ne 0$ is allowed, and that nonzero flux *is* the force the string exerts on whatever holds it — a D-brane. Momentum leaks from string into brane. This is the hinge between this note and [[Neumann versus Dirichlet conditions]] / [[D-branes (first appearance)]]: *which* directions are free (transverse, at $c$) versus pinned (force absorbed) is exactly the data that defines a brane's worldvolume.

## What changes on a Dp-brane

The $v=c$ theorem assumed the end is free in **all** spatial directions — a space-filling brane. On a D$p$-brane with $p<d$, only brane-tangent directions are Neumann; the normal directions are Dirichlet and can absorb force. The blanket "every free end moves at $c$" softens to

$$\sqrt{1-\frac{v^2}{c^2}}\,\hat n_\parallel = 0,$$

where $\hat n_\parallel$ is the projection of the tangent $\hat n$ onto the brane. An end that meets the brane orthogonally ($\hat n_\parallel = 0$) may move slower than light; an end whose tangent has any component along the brane is still forced to $v=c$. The D0/D1/D$p$ split is worked out in [[Endpoint motion on a Dp-brane]].

## Open questions
- A gauge-independent check computes $\mathcal P^\sigma_\mu\mathcal P^{\sigma\mu}$ directly at the endpoint; the static-gauge proof above suffices for this module.
- $v=c$ is a *classical* statement. What the always-luminal endpoint means for the quantum open string is deferred to the open-string spectrum modules.

## Exercise

At a free endpoint, both the numerator and the denominator of $\mathcal P^{\sigma\,0}$ in (5) vanish: the numerator by transversality (6), the denominator because $v_\perp \to c$. So $\mathcal P^{\sigma\,0}$ is a $0/0$ form there. Show that it genuinely vanishes — that the numerator wins the race — by comparing how fast each factor goes to zero as the endpoint is approached along the string ($s\to s_{\text{end}}$). Assume the geometric quantities are smooth in $s$ near the end.

> [!success]- Solution
> Write $\mathcal P^{\sigma\,0} = -\tfrac{T_0}{c}\,N/D$ with
> $$N(s) = \hat n\cdot\frac{\partial\vec X}{\partial t}, \qquad D(s) = \sqrt{1 - \frac{v_\perp^2}{c^2}}.$$
> Both vanish at the end: $N\to 0$ is transversality (6), and $D\to 0$ because $v_\perp\to c$ — at the end the velocity is entirely transverse with $v=c$.
>
> **Denominator rate.** Since $v_\perp^2 \to c^2$ smoothly, write $v_\perp^2/c^2 = 1 - \epsilon(s)$ with $\epsilon\to 0$ linearly in the distance $\delta \equiv s_{\text{end}}-s$ (generic smooth approach, $\epsilon \sim k\,\delta$ with $k>0$). Then $D = \sqrt{\epsilon} \sim \sqrt{k\,\delta}$ — a *square-root* (slow) approach to zero.
>
> **Numerator rate.** $N$ is a smooth function of $s$ that hits zero at the end, so Taylor expansion gives $N = O(\delta)$: generically a simple zero, $N \sim m\,\delta$, and any faster vanishing only helps.
>
> **The race.** Therefore
> $$\mathcal P^{\sigma\,0} \sim \frac{\delta^{1}}{\delta^{1/2}} = \delta^{1/2} \to 0.$$
> The numerator's linear zero beats the denominator's square-root zero, so the ratio vanishes — the boundary condition $\mathcal P^{\sigma\,0}=0$ holds honestly, not as an artifact of writing $0/0$. The same rates run the energy budget: each piece of string carries energy $T_0\,ds/D$, so the last $\delta$ of string holds $\sim T_0\!\int_0^\delta ds/\sqrt{k\,s} \sim T_0\sqrt{\delta} \to 0$ — the luminal tip is massless and costs nothing.
