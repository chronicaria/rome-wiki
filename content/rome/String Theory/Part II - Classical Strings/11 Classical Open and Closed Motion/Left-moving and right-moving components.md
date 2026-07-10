---
title: Left-moving and right-moving components
number: "11.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, dalembert]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Every motion of a classical string is two waveforms sliding past each other — one to the left, one to the right, each frozen in shape and moving at speed $c$: $\vec X(t,\sigma)=\tfrac12\big(\vec F(ct+\sigma)+\vec G(ct-\sigma)\big)$.

Pluck a guitar string and the bump you made does not sit still — it splits into two half-height bumps that travel in opposite directions. The string's shape at any instant is the *sum* of a left-traveller and a right-traveller, each rigid, each gliding at the wave speed $c$. Nothing about the shapes themselves is fixed yet; the boundary conditions (open vs closed) come later and decide how the two travellers are related. This note establishes only that the split exists and what the parameterization constraints demand of each half. The one non-obvious ingredient is that the wave operator **factorizes** into a left-derivative times a right-derivative; once it does, the general solution is immediate.

Throughout, $\dot{\vec X}=\partial_t\vec X$ and $\vec X'=\partial_\sigma\vec X$, while a prime on $\vec F$ or $\vec G$ is the derivative in its single argument.

## d'Alembert: why any function of $ct\pm\sigma$ solves the wave equation

The wave equation from [[Wave equation and constraints]] is
$$\frac{\partial^2\vec X}{\partial\sigma^2}-\frac{1}{c^2}\frac{\partial^2\vec X}{\partial t^2}=0.$$
Change to **light-cone-like coordinates on the worldsheet**,
$$u_+ \equiv ct+\sigma,\qquad u_- \equiv ct-\sigma,$$
the worldsheet analogue of the spacetime light-cone coordinates of [[Light-cone coordinates]] — the same trick, played on $(ct,\sigma)$ instead of $(x^0,x^1)$. Treating $\vec X$ as a function of $(u_+,u_-)$, the chain rule gives
$$\frac{\partial}{\partial\sigma}=\partial_+-\partial_-,\qquad \frac{1}{c}\frac{\partial}{\partial t}=\partial_++\partial_-,$$
where $\partial_\pm\equiv\partial/\partial u_\pm$. Squaring and subtracting, the pure squares cancel and only the cross terms survive:
$$\frac{\partial^2}{\partial\sigma^2}-\frac{1}{c^2}\frac{\partial^2}{\partial t^2} = (\partial_+-\partial_-)^2-(\partial_++\partial_-)^2 = -4\,\partial_+\partial_-.$$
So the wave equation collapses to
$$\partial_+\partial_-\vec X=0.$$
The second-order operator has **factorized** into two first-order pieces, and that is what makes the equation trivial to solve. If $\partial_-(\partial_+\vec X)=0$, then $\partial_+\vec X$ depends on $u_+$ alone; integrating in $u_+$ adds an integration "constant" that may still depend on $u_-$. The general solution is therefore a piece that ignores $u_-$ plus a piece that ignores $u_+$:
$$\vec X(t,\sigma)=\tfrac12\big(\vec F(u_+)+\vec G(u_-)\big)=\tfrac12\big(\vec F(ct+\sigma)+\vec G(ct-\sigma)\big). \tag{1}$$
$\vec F$ and $\vec G$ are **arbitrary vector functions of one variable** — at this stage completely unconstrained. The $\tfrac12$ is a convention chosen so that later, once boundary conditions are imposed, $\vec F$ turns out to be exactly an endpoint's position with no stray factors.

## Which is left- and which is right-moving

A "waveform moving at speed $c$" means the same value of $\vec F$ reappears wherever its argument is held constant. Follow a point of constant argument $ct+\sigma=\text{const}$:
$$\frac{d\sigma}{dt}=-c,$$
so the whole pattern $\vec F(ct+\sigma)$ slides toward **smaller** $\sigma$ — call that "left." Likewise $\vec G(ct-\sigma)$ has constant argument along $d\sigma/dt=+c$, sliding toward **larger** $\sigma$ — "right." Hence:

- $\vec F(ct+\sigma)$ — **left-mover**.
- $\vec G(ct-\sigma)$ — **right-mover**.

Both travel at speed $c$ in the $\sigma$ coordinate, exactly as a relativistic string demands.

## What the constraints say about each mover

The wave equation alone knows nothing of the energy parameterization; that information lives in the two constraints, not yet imposed. Differentiate $\vec X=\tfrac12(\vec F+\vec G)$:
$$\vec X'=\tfrac12\big(\vec F'(u_+)-\vec G'(u_-)\big),\qquad \frac1c\dot{\vec X}=\tfrac12\big(\vec F'(u_+)+\vec G'(u_-)\big).$$
(The minus sign on $\vec G'$ is not physical — it is just $\partial_\sigma(ct-\sigma)=-1$; squaring will erase it.) Adding and subtracting isolates each mover cleanly:
$$\vec X'+\frac1c\dot{\vec X}=\vec F'(u_+),\qquad \vec X'-\frac1c\dot{\vec X}=-\vec G'(u_-). \tag{2}$$
The two parameterization constraints, added and subtracted, package into the single statement (derived in [[Wave equation and constraints]])
$$\left(\vec X'\pm\frac1c\dot{\vec X}\right)^2 = 1.$$
Substituting (2) — the lone minus sign vanishes on squaring — gives one condition per mover:
$$\boxed{\;|\vec F'(u_+)|^2 = 1,\qquad |\vec G'(u_-)|^2 = 1.\;} \tag{3}$$
The constraints **decouple**: each waveform is traced at unit speed in its own argument, and the two are otherwise blind to each other. Geometrically, $u$ is an **arc-length parameter** along the space curve $\vec F(u)$ — step $du$ in the parameter and the point $\vec F(u)$ moves exactly $|du|$ in space. The energy parameterization has become pure geometry: $u=ct\pm\sigma$ is built from the energy coordinate $\sigma$, and equal steps of it advance equal lengths along the mover curve.

Be careful about what is and is not fixed here. It is the *derivative* $\vec F'$ that is a unit vector, never $\vec F$ itself. The curve $\vec F(u)$ may wander anywhere in space, loop, or double back; only the *speed* at which it is traced is pinned to $1$. All the physics of a specific string lives in the shapes of these two unit-speed curves.

## Where this goes next

The boundary conditions now break the symmetry between the two movers:

- **Open string** — the free (Neumann) ends act as mirrors, reflecting the right-mover into the left-mover, so $\vec G$ is tied to $\vec F$ and there is really *one* independent waveform ([[Open-string reflection at endpoints]]).
- **Closed string** — no ends, no mirrors; $\vec F$ and $\vec G$ stay **independent**, the classical seed of the closed string's two separate towers of oscillators ([[Closed-string periodicity and rotating strings]]).

That split — one waveform versus two — is the entire difference between open and closed classical motion.

## Open questions

- Closed strings keep independent left/right movers; the quantum consequence (their oscillator levels must still match) is [[Level matching]].
- Turning these arbitrary unit-speed curves into a Fourier/oscillator expansion (with the $\sqrt{2\alpha'}$ open- vs $\sqrt{\alpha'/2}$ closed-string zero-mode normalizations) belongs to the quantization pass — see [[Open-string reflection at endpoints]] for the classical Fourier bridge and [[Mode expansions in light-cone gauge]] for the mode expansion proper.

## Exercise

A pure left-mover $\vec X(t,\sigma)=\tfrac12\vec F(ct+\sigma)$ — that is, $\vec G\equiv 0$ in equation (1) — solves the wave equation for *any* $\vec F$. Can it be a legal string? Feed it to the packaged constraints $(\vec X'\pm\frac1c\dot{\vec X})^2=1$ and decide whether both signs can hold. What does the result say about needing *two* movers?

> [!success]- Solution
> With $\vec G\equiv 0$, equation (1) gives $\vec X=\tfrac12\vec F(u_+)$, so $\vec X'=\tfrac12\vec F'(u_+)$ and $\frac1c\dot{\vec X}=\tfrac12\vec F'(u_+)$ — *identical*. The two combinations in (2) become
> $$\vec X'+\tfrac1c\dot{\vec X}=\vec F'(u_+),\qquad \vec X'-\tfrac1c\dot{\vec X}=0.$$
> Squaring: the $+$ constraint reads $|\vec F'|^2=1$; the $-$ constraint reads $0=1$. **Contradiction.** A single nonzero mover cannot satisfy both parameterization constraints.
>
> Unpacking which physical statement fails: in original form, constraint 1 (orthogonality) is $\dot{\vec X}\cdot\vec X'=0$, which here becomes $\tfrac{c}{4}|\vec F'|^2=0$, forcing $\vec F'=0$ — a static point; constraint 2 (unit normalization) is $\vec X'^2+\frac1{c^2}\dot{\vec X}^2=\tfrac12|\vec F'|^2=1$, forcing $|\vec F'|^2=2$. The two demands are incompatible for every $\vec F$ — even the static point fails constraint 2.
>
> The lesson: the constraints are not optional dressing on the wave equation — they *require both movers to be present*. In general $\dot{\vec X}\cdot\vec X'=\tfrac{c}{4}\big(|\vec F'|^2-|\vec G'|^2\big)$, so the string's velocity is orthogonal to its tangent exactly when the two movers are traced at equal speeds — which the unit-speed condition (3) enforces automatically. With a single mover, velocity ($\propto\vec F'+\vec G'$) and tangent ($\propto\vec F'-\vec G'$) become *parallel*, and their dot product $\tfrac{c}{4}|\vec F'|^2$ cannot vanish for a nontrivial string. This is why the boundary conditions never delete a mover outright: open strings *reflect* $\vec G$ into $\vec F$, and closed strings keep both — neither ever sets one to zero.
