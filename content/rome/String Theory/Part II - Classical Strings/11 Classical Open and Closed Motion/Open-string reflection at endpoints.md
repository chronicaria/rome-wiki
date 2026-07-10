---
title: Open-string reflection at endpoints
number: "11.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, open-string]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A free (Neumann) endpoint is a mirror: it reflects the right-moving wave straight back as a left-moving wave. The two independent waveforms of the general solution collapse into a single function $\vec F$, and the whole motion of the string is that one waveform bouncing back and forth between the two ends.

## Reflection without flipping

A guitar string is pinned at both ends, so a wave hits the end and flips upside-down (fixed-end reflection). A relativistic open string with free ends does the opposite: the end is loose, and the wave reflects without flipping. Send a bump down the string; it runs to the far end, reflects, runs back, reflects again, forever. Nothing is created or destroyed at the ends — the traffic just turns around.

That single fact does all the work below. It forces two things: one waveform, not two (the reflected wave *is* the incoming wave), and a period of $2\sigma_1$ — the round-trip length — because a bump returns to its starting configuration only after touching both ends.

The payoff is worth stating first: watch one endpoint of an open string for one round-trip time, and you know the string's entire past and future. The rest of the note earns that claim, starting from the general wave solution and the free-end boundary conditions and watching the freedom shrink at each step.

## Step 0 — start from d'Alembert

From [[Left-moving and right-moving components]], the wave equation $\ddot{\vec X}=c^2\vec X''$ has general solution
$$\vec X(t,\sigma)=\tfrac12\big(\vec F(ct+\sigma)+\vec G(ct-\sigma)\big),\qquad \sigma\in[0,\sigma_1], \tag{1}$$
a left-mover $\vec F$ plus an independent right-mover $\vec G$. Two arbitrary vector functions. The free-endpoint conditions and the parameterization constraints will whittle these down to one.

Here $\sigma$ is the energy parameter ($d\sigma = dE/T_0$, so $\sigma_1 = E/T_0$), and the boundary condition for a free end is [[Wave equation and constraints|Neumann]]: $\partial\vec X/\partial\sigma = 0$ at $\sigma=0$ and $\sigma=\sigma_1$. The momentum flowing along the string is $\vec{\mathcal P}^\sigma=-T_0\,\partial_\sigma\vec X$, and a free end has nothing beyond it to hand momentum to, so $\vec X'$ must vanish there.

## Step 1 — Neumann at $\sigma=0$ glues $\vec G$ to $\vec F$

Differentiate (1): $\partial_\sigma\vec X = \tfrac12\big(\vec F'(ct+\sigma)-\vec G'(ct-\sigma)\big)$ (the minus is just $\partial_\sigma(ct-\sigma)=-1$). Set $\sigma=0$ and demand it vanish:
$$\vec F'(ct)-\vec G'(ct)=0.$$
As $t$ runs over all time, $ct$ sweeps every real number, so this is not one equation at one instant — it is a function identity. Writing $u$ for the common argument,
$$\frac{d\vec F}{du}=\frac{d\vec G}{du}\;\Longrightarrow\;\vec G(u)=\vec F(u)+\vec a_0,$$
with $\vec a_0$ a constant of integration. The constant merely translates the entire string in space (harmless), so absorb it by redefining $\vec F(u)+\vec a_0/2\to\vec F(u)$. The solution becomes
$$\boxed{\;\vec X(t,\sigma)=\tfrac12\big(\vec F(ct+\sigma)+\vec F(ct-\sigma)\big)\;} \tag{2}$$

This is the mirror. The same function $\vec F$ now feeds both arguments: the right-mover $\vec F(ct-\sigma)$ is the left-mover $\vec F(ct+\sigma)$ seen after bouncing off $\sigma=0$. One independent waveform remains. (Contrast the closed string, where $\sigma=0$ is not a wall and $\vec F\neq\vec G$ stay independent — see [[Closed-string periodicity and rotating strings]].)

## Step 2 — Neumann at $\sigma=\sigma_1$ makes $\vec F$ quasi-periodic

Now the *other* end. From (2), $\partial_\sigma\vec X = \tfrac12\big(\vec F'(ct+\sigma)-\vec F'(ct-\sigma)\big)$; set $\sigma=\sigma_1$ and demand it vanish:
$$\vec F'(ct+\sigma_1)-\vec F'(ct-\sigma_1)=0.$$
Let $u=ct-\sigma_1$, so $ct+\sigma_1=u+2\sigma_1$:
$$\frac{d\vec F}{du}(u+2\sigma_1)=\frac{d\vec F}{du}(u).$$

So $\vec F'$ is periodic with period $2\sigma_1$, the round-trip length. That factor of two is the signature of the open string: a bump must go to the far end *and back* before the waveform repeats. The first end eliminated $\vec G$; the second can only constrain the $\vec F$ that remains.

Integrate a periodic derivative and you recover a function that is periodic up to a constant drift — over each period $\vec F$ slides by the average of $\vec F'$ times the period. Package that constant as $2\sigma_1\vec v_0/c$:
$$\boxed{\;\vec F(u+2\sigma_1)=\vec F(u)+2\sigma_1\,\frac{\vec v_0}{c}\;} \tag{3}$$
This is quasi-periodicity: the shape of $\vec F$ repeats every $2\sigma_1$, shifted by the fixed vector $2\sigma_1\vec v_0/c$. The constant $\vec v_0$ has units of velocity, and we identify it below as the center-of-mass velocity.

## Step 3 — the constraints force unit speed $|\vec F'|=1$

The [[Wave equation and constraints|two parameterization constraints]] package into a single statement — each of the two combinations $\vec X'\pm\tfrac1c\dot{\vec X}$ is a unit vector:
$$\left(\frac{\partial\vec X}{\partial\sigma}\pm\frac1c\frac{\partial\vec X}{\partial t}\right)^2=1.$$
From (2) the two tangent derivatives are
$$\vec X'=\tfrac12\big(\vec F'(ct+\sigma)-\vec F'(ct-\sigma)\big),\qquad
\tfrac1c\dot{\vec X}=\tfrac12\big(\vec F'(ct+\sigma)+\vec F'(ct-\sigma)\big),$$
so the two combinations collapse to a single $\vec F'$ each:
$$\vec X'+\tfrac1c\dot{\vec X}=\vec F'(ct+\sigma),\qquad
\vec X'-\tfrac1c\dot{\vec X}=-\vec F'(ct-\sigma).$$
The stray minus disappears on squaring; both squares must equal $1$, and as $t$ and $\sigma$ vary the arguments $ct\pm\sigma$ sweep every real number, leaving one condition on every value of $u$:
$$\boxed{\;\left|\frac{d\vec F(u)}{du}\right|^2=1\;} \tag{4}$$

Read $u$ as arc length along the space curve $\vec F(u)$: advancing $du$ in the parameter moves you exactly $|du|$ in space. The energy parameterization ($d\sigma=dE/T_0$) has resurfaced as a clean geometric statement — equal parameter, equal length, equal energy.

## The open-string general solution (assembled)

$$\vec X(t,\sigma)=\tfrac12\big(\vec F(ct+\sigma)+\vec F(ct-\sigma)\big),\qquad \sigma\in[0,\sigma_1],\quad \sigma_1=\frac{E}{T_0}, \tag{5}$$
with the single waveform $\vec F$ obeying
$$\left|\frac{d\vec F}{du}\right|^2=1\qquad\text{and}\qquad \vec F(u+2\sigma_1)=\vec F(u)+2\sigma_1\,\frac{\vec v_0}{c}.$$
The entire dynamics is reduced to choosing **one** unit-speed curve $\vec F$. Quasi-periodicity means it is enough to specify $\vec F$ on $u\in[0,2\sigma_1]$; everything else is fixed by repetition-plus-drift.

## What $\vec F$ and $\vec v_0$ actually are

Put $\sigma=0$ in (5): the two arguments coincide, so
$$\vec X(t,0)=\vec F(ct). \tag{6}$$
So $\vec F(u)$ is literally the position of the $\sigma=0$ endpoint at time $t=u/c$. The abstract waveform is a thing you can watch: the trajectory of one loose end. The unit-speed condition (4) becomes physics you can see — the endpoint velocity is $\partial_t\vec X(t,0)=c\,\vec F'(ct)$, a vector of magnitude exactly $c$. A free endpoint always moves at the speed of light, the general fact behind the lightspeed tips of the rotating string in [[Closed-string periodicity and rotating strings]]. Knowing the whole string forever takes only $\vec F$ on one period $[0,2\sigma_1]$ — watch that endpoint for $\Delta t = 2\sigma_1/c = 2E/(cT_0)$, twice the light-crossing time of a static string of that energy. That is the claim from the top: one endpoint, one round trip, complete knowledge.

And $\vec v_0$ is that drift made visible. Combine the quasi-periodicity (3) with (6):
$$\vec X\!\left(t=\tfrac{2\sigma_1}{c},0\right)=\vec X(t=0,0)+\frac{2\sigma_1}{c}\,\vec v_0,$$
so $\vec v_0$ is the average velocity of the endpoint over one round trip — $c$ times an average of unit vectors, hence automatically $|\vec v_0|\le c$. It is in fact the average velocity of *every* labeled point over *any* interval of length $2\sigma_1/c$, the center-of-mass drift. For fixed $\sigma$, shift $t$ by one round trip in (5) and use (3) on each argument:
$$\begin{aligned}
\vec X\!\left(t+\tfrac{2\sigma_1}{c},\sigma\right)
&=\tfrac12\Big(\vec F(ct+2\sigma_1+\sigma)+\vec F(ct+2\sigma_1-\sigma)\Big)\\
&=\tfrac12\Big(\vec F(ct+\sigma)+\vec F(ct-\sigma)\Big)+\frac{2\sigma_1}{c}\vec v_0
=\vec X(t,\sigma)+\frac{2\sigma_1}{c}\vec v_0.
\end{aligned}$$
Each argument picks up one drift vector, and the overall $\tfrac12$ turns the two of them into a single displacement $\tfrac{2\sigma_1}{c}\vec v_0$, independent of $\sigma$. So every point translates by the same amount each round trip: uniform center-of-mass drift at velocity $\vec v_0$, oscillation on top. If the endpoints trace a stationary closed pattern (no net drift), then $\vec v_0=0$ and $\vec F$ is strictly periodic.

## Open questions

- The standing-wave form of this solution — the same $\vec F$ at $ct+\sigma$ and $ct-\sigma$ recombining the two traveling waves into $\cos n\sigma$ standing waves — is a rewriting, not new physics; the mode expansion built on it lives in [[Light-cone gauge]].
- Fixed (Dirichlet) endpoints reflect with inversion instead; the exercise below derives the sign flip, and the relativistic jumping-rope and cusp solutions are built on the resulting difference form. What an endpoint can be fixed *to* is the D-brane story of [[Neumann versus Dirichlet conditions]].

## Exercise

A wave on a free-ended open string reflects without inversion, so the two arguments of (5) share the same $\vec F$ with a plus sign. Redo Step 1 for a fixed (Dirichlet) end, $\vec X(t,0)=\vec x_1$ (a constant), instead of the Neumann condition. Show that $\vec G$ is again determined by $\vec F$, but now the string is built from a *difference*, and state in one line what happens to a reflected wave.

> [!success]- Solution
> Impose $\vec X(t,0)=\vec x_1$ on the general solution (1):
> $$\tfrac12\big(\vec F(ct)+\vec G(ct)\big)=\vec x_1\quad\text{for all }t.$$
> Since $ct$ ranges over all reals this is a function identity: $\vec F(u)+\vec G(u)=2\vec x_1$, i.e.
> $$\vec G(u)=2\vec x_1-\vec F(u).$$
> Substitute back into (1):
> $$\vec X(t,\sigma)=\tfrac12\big(\vec F(ct+\sigma)-\vec F(ct-\sigma)\big)+\vec x_1,$$
> a *difference* of the same waveform, pinned to pass through $\vec x_1$ at $\sigma=0$ (the two terms cancel there, leaving $\vec x_1$). Compare the Neumann boxed result (2), a *sum*.
>
> One line: the fixed end reflects the wave with a sign flip (inversion) — exactly the guitar-string boundary — whereas the free Neumann end reflects it upright. That relative sign between the two waveforms is the whole difference between the two boundary conditions.
