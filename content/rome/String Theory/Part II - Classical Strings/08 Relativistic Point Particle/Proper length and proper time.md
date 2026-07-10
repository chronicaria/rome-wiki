---
title: Proper length and proper time
number: "8.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, point-particle]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A moving clock's own ticking, the **proper time**, is the one duration every observer agrees on; $ds$ is that same tick measured as a length (proper time times $c$), and the minus sign in $ds^2=-\eta_{\mu\nu}\,dx^\mu dx^\nu$ keeps it positive for a real particle.

## The riding stopwatch

Strap a stopwatch to a particle and let it fly. The number the stopwatch reads between two events on its path is the **proper time** — "proper" in the old sense of *belonging to it*. Two events, one clock riding between them: that reading is a fact about the trip, not about who is watching.

Different observers disagree about how much *coordinate* time $t$ passed and how far $\vec x$ the particle went — moving clocks run slow, moving rulers shrink. But they disagree in a coordinated way, and the combination

$$c^2\,dt^2 - d\vec x^{\,2}$$

comes out the *same* for all of them: the invariant left over after the frame-dependent pieces cancel, and exactly what the riding stopwatch measures. What remains is to name this quantity and fix its units.

This is why the invariant matters. The [[Proper-time action]] for a relativistic particle is built from exactly this quantity, because an action all observers compute identically gives physics all observers agree on. The four-momentum, the mass shell, the string generalization — everything downstream hangs on getting this one quantity and its units straight.

## The convention

The metric is mostly-plus,

$$\eta_{\mu\nu}=\mathrm{diag}(-1,+1,+1,+1).$$

For a timelike displacement $dx^\mu=(c\,dt,\,d\vec x)$ the invariant combination is

$$\eta_{\mu\nu}\,dx^\mu dx^\nu=-c^2dt^2+d\vec x^{\,2}<0,$$

negative because a real (timelike) particle covers less distance than light would in the same $dt$: $|d\vec x|<c\,dt$. A negative square is inconvenient if we want a length, so we flip the sign once and for all:

$$\boxed{\;ds^2=-\eta_{\mu\nu}\,dx^\mu dx^\nu=c^2dt^2-d\vec x^{\,2}\;}\tag{1}$$

$ds$ has units of **length** — the invariant above, repackaged as a positive number. The minus sign is not physics; it is the toll for describing a timelike path with a mostly-plus metric. The physical proper time is $ds$ divided by $c$:

$$\boxed{\;d\tau_{\text{proper}}=\frac{ds}{c}=dt\sqrt{1-\frac{v^2}{c^2}}\;}\tag{2}$$

This *is* the stopwatch reading, in units of **time**, and the factor $\sqrt{1-v^2/c^2}<1$ is time dilation made local: per tick $dt$ of a lab clock, the moving clock advances by less. At $v=0$ it gives $d\tau_{\text{proper}}=dt$ — a clock at rest reads coordinate time, as it must. To get (2) from (1), factor $c^2dt^2$ out of the root: $ds=\sqrt{c^2dt^2 - d\vec x^{\,2}} = c\,dt\sqrt{1-(d\vec x/dt)^2/c^2} = c\,dt\sqrt{1-v^2/c^2}$, with $\vec v=d\vec x/dt$.

Two names, one quantity: $ds$ is the tick as a **length**, $ds/c$ is the tick as a **time**. The elapsed proper time along a path is $\int ds/c$; the elapsed proper length is $\int ds = c\int d\tau_{\text{proper}}$. In this module the length variable serves as the worldline parameter, written $s$, with physical proper time $s/c$.

## Unit tangent versus four-velocity

Once we have a scalar to parameterize by, we can differentiate position along the path. Two natural choices of parameter give two objects that differ only by a factor of $c$.

Using the **length** $s$ as parameter gives the dimensionless tangent vector

$$u^\mu\equiv \frac{dx^\mu}{ds},\qquad \eta_{\mu\nu}\,u^\mu u^\nu=-1.\tag{3}$$

The normalization $u^2=-1$ is not a law of motion — it is (1) divided by $ds^2$. Any curve parameterized by its own proper length has a unit-norm tangent, automatically; this one fact drives the [[Mass-shell relation]].

Using the physical **proper time** $\tau_{\text{proper}}=s/c$ as parameter gives the four-velocity a physicist usually means,

$$U^\mu\equiv \frac{dx^\mu}{d\tau_{\text{proper}}}=c\,\frac{dx^\mu}{ds}=c\,u^\mu,\qquad U^\mu U_\mu=-c^2.\tag{4}$$

$U^\mu$ carries units of velocity, and its normalization is (3) times $c^2$. In the rest frame $U^\mu=(c,\vec 0)$: a particle at rest still "moves through time" at rate $c$, which is the geometric content of $U^2=-c^2$.

The four-momentum can be written either way, and this is where the factors of $c$ throughout the module come from:

$$\boxed{\;p^\mu=mU^\mu=mc\,\frac{dx^\mu}{ds}\;}$$

Read it as rest mass times four-velocity. The $mc\,dx^\mu/ds$ form is the one that appears when we vary the action in [[Free particle equation of motion]]; the $mU^\mu$ form is the one that resembles Newtonian $\vec p=m\vec v$. They are the same identity in the two unit conventions.

## Quick dictionary

| Symbol | Units | Meaning | Normalization |
|---|---|---|---|
| $s$ | length | proper length along the worldline | — |
| $\tau_{\text{proper}}=s/c$ | time | proper time read by the particle's own clock | — |
| $u^\mu=dx^\mu/ds$ | none | unit tangent | $u^2=-1$ |
| $U^\mu=dx^\mu/d\tau_{\text{proper}}$ | velocity | four-velocity | $U^2=-c^2$ |

Working rule for the rest of the module: when you see $ds$, read "proper length"; when you see $ds/c$, read "proper time." Everything else is a factor of $c$.

## Open questions

- **Massless particles.** A photon has $ds=0$ along its path (it moves at $c$, so $c^2dt^2=d\vec x^2$): no proper time ticks, and neither $s$ nor $\tau_{\text{proper}}$ can parameterize it. The invariant *constraint* still makes sense, but the square-root action $-mc\int ds$ must be traded for an auxiliary-field (einbein) form — flagged for later.
- **Is straight-line motion really the maximum?** Among nearby timelike worldlines between two fixed events, the straight one *maximizes* elapsed proper time (the twin who coasts ages most). Globally this can fail past conjugate points in curved spacetime — a caveat for the geodesic version, not needed here.
- **One tick vs. a whole sheet.** A string sweeps a 2D worldsheet with an induced $2\times2$ metric, not a single proper-time element. That is why [[Worldline versus worldsheet]] treats "proper time" as a particle-only convenience rather than a literal string gauge.

## Exercise

A muon is created at altitude and flies straight down at $v=0.99c$ toward a detector, taking $t=34\ \mu\text{s}$ of lab time to arrive. Its rest-frame lifetime is $2.2\ \mu\text{s}$, so a lab observer, ignoring relativity, would expect it to have decayed roughly $15$ times over. Yet many muons arrive. Using only this note, compute the **proper time** the muon experiences during the flight and show that its survival is no longer wildly improbable, then verify the four-velocity normalization $U^\mu U_\mu=-c^2$ for this trajectory.

> [!success]- Solution
> **Proper time.** The flight is straight-line at constant speed, so integrate (2) with $v$ constant:
> $$\tau_{\text{proper}}=\int dt\sqrt{1-\tfrac{v^2}{c^2}} = t\sqrt{1-\tfrac{v^2}{c^2}}.$$
> With $v/c=0.99$, $\ \sqrt{1-0.99^2}=\sqrt{1-0.9801}=\sqrt{0.0199}\approx 0.141$. So
> $$\tau_{\text{proper}}\approx (34\ \mu\text{s})(0.141)\approx 4.8\ \mu\text{s}.$$
> The muon's *own* clock reads only about $4.8\ \mu\text{s}$ — roughly two lifetimes — so an appreciable fraction survive: $e^{-4.8/2.2}\approx 0.11$, an $11\%$ chance per muon, against the near-impossible $e^{-34/2.2}\approx 2\times10^{-7}$ of the naive lab estimate. The resolution is entirely in reading the clock that belongs to the muon: decay is governed by proper time, and the moving muon ages slowly.
>
> **Normalization check.** In the lab frame the four-velocity is $U^\mu=(U^0,\vec U)$ with $U^0=c\,dt/d\tau_{\text{proper}}=c/\sqrt{1-v^2/c^2}=\gamma c$ and $\vec U=d\vec x/d\tau_{\text{proper}}=\gamma\vec v$, where $\gamma=1/\sqrt{1-v^2/c^2}$. Then
> $$U^\mu U_\mu=-(U^0)^2+\vec U^{\,2}=-\gamma^2 c^2+\gamma^2 v^2=-\gamma^2 c^2\Big(1-\tfrac{v^2}{c^2}\Big)=-c^2,$$
> using $\gamma^2(1-v^2/c^2)=1$. The result is $-c^2$ regardless of $v$ — exactly (4). The normalization is a fixed geometric fact, not something that depends on how fast the muon moves.
