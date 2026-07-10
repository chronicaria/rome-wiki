---
title: Reparameterization invariance
number: "1.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, reparameterization]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Reparameterization invariance means the action cares about the *path*, not the labels painted on it — relabeling points is a **redundancy** in the description, not a symmetry relating different physical states. The free relativistic particle is the simplest place to pin this down.

Related: [[String Theory/Part II - Classical Strings/08 Relativistic Point Particle/Reparameterization invariance|module 08 reparameterization invariance]] revisits the same redundancy inside the relativistic point-particle module.

A hiking trail carries the intuition. The trail's length is a fact about the trail: measure it by mile markers, by GPS pings every second, or by counting your steps, and you get the same number. How you walk it — fast, slow, stopping to rest — is a *choice of parameter*; the trail is the *physics*. The particle's action is the spacetime length of its worldline, so it inherits exactly this indifference to how the curve is labeled.

## The action: a relativistic particle's worldline length

The free relativistic particle has action

$$S = -mc\int_{\mathcal P} ds , \tag{1}$$

which is (minus) the rest energy $mc^2$ times the proper time $\int ds/c$ elapsed along the worldline $\mathcal P$. Here $ds$ is the infinitesimal proper interval, defined in mostly-plus signature by

$$ds^2 = -\eta_{\mu\nu}\,dx^\mu dx^\nu = c^2 dt^2 - d\vec x^{\,2}, \qquad \eta_{\mu\nu}=\mathrm{diag}(-1,+1,\dots,+1). \tag{2}$$

Why this form and not something else: every Lorentz observer agrees on the proper time a clock records along $\mathcal P$ — it is a Lorentz scalar — so an action built from it automatically gives frame-independent equations of motion. The minus sign and the $mc$ are fixed by the nonrelativistic limit: expanding $ds = c\,dt\sqrt{1-v^2/c^2}$ gives $L = -mc^2\sqrt{1-v^2/c^2} \approx -mc^2 + \tfrac12 mv^2$, the familiar kinetic term (the constant $-mc^2$ does not affect the motion). See [[Proper-time action|Proper time]] and [[Minkowski metric and the mass shell|Minkowski metric]].

The crucial structural fact: $S$ in the form (1) needs **no parameter at all**. Chop $\mathcal P$ into tiny geometric pieces and add up $mc\,ds$ for each. The proper time along the curve is a geometric property of the curve — it exists before you decide how to label points on it.

## Making the redundancy explicit

To actually compute, describe the worldline by a parameter $\tau$ that increases monotonically along it, running from $\tau_i$ at one endpoint to $\tau_f$ at the other but otherwise arbitrary, so that $x^\mu = x^\mu(\tau)$. Even the time coordinate $x^0 = ct$ becomes a function of $\tau$ — that is what puts space and time on equal footing. Feeding (2) into (1):

$$S = -mc\int_{\tau_i}^{\tau_f} \sqrt{-\eta_{\mu\nu}\,\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau}}\;\, d\tau . \tag{3}$$

The square root is the proper-time rate $ds/d\tau$; multiplying by $d\tau$ and integrating re-sums $\int ds$, now in coordinates.

Now relabel: $\tau \to \tau'(\tau)$, with $d\tau'/d\tau > 0$ (a legal relabeling preserves orientation). The chain rule $\frac{dx^\mu}{d\tau} = \frac{dx^\mu}{d\tau'}\frac{d\tau'}{d\tau}$ puts a factor $\left(\frac{d\tau'}{d\tau}\right)^2$ inside the square root, which comes out as $\frac{d\tau'}{d\tau}$ — positive, so no absolute-value ambiguity; *this* is why we demand increasing parameters:

$$S = -mc\int \sqrt{-\eta_{\mu\nu}\,\frac{dx^\mu}{d\tau'}\frac{dx^\nu}{d\tau'}}\;\frac{d\tau'}{d\tau}\, d\tau
   = -mc\int_{\tau_i'}^{\tau_f'} \sqrt{-\eta_{\mu\nu}\,\frac{dx^\mu}{d\tau'}\frac{dx^\nu}{d\tau'}}\;\, d\tau' ,$$

because $\frac{d\tau'}{d\tau}\,d\tau = d\tau'$. The result is **identical in form** to (3): the action is manifestly reparameterization invariant. One factor of $d\tau'/d\tau$ comes out of the square root and the measure $d\tau=(d\tau/d\tau')\,d\tau'$ supplies exactly one to cancel it — a first-power integrand against a first-order measure. That single power is the whole point: it is special to the square root, and the exercise below shows invariance failing the moment you drop it.

## Redundancy vs. symmetry

This distinction is the spine of everything that follows:

- A **symmetry** (Lorentz boost, spatial translation) sends one physical configuration to a *different, equally valid* one. Via [[Noether's theorem]] it hands you a **conserved charge**. Distinct states, related physics.
- A **redundancy** — gauge freedom, here reparameterization — sends a description to *another description of the very same state*. Nothing physical moved; you renamed points. There is no new conserved charge; instead there is a **constraint** (below).

Two parameterizations $x^\mu(\tau)$ and $x^\mu(\tau'(\tau))$ are the *same worldline*, hence the same physics. So the freedom to choose $\tau$ is freedom we will later *spend*: pick a convenient $\tau$ and the redundancy is gone. For a massive particle we can set $\tau$ equal to the arc length $s$ (proper time, up to the factor $c$); for the string, we choose [[Light-cone gauge]]. That is the engine of light-cone quantization — burn the redundancy to delete unphysical degrees of freedom *before* quantizing, so you never have to quantize gauge junk.

The trap on a first pass: **not every transformation that leaves $S$ unchanged gives a Noether charge.** If it only shuffles labels, the payoff is a constraint and a gauge choice, not a conserved quantity.

## The price of the redundancy: an equation of motion and a constraint

Vary $S = -mc\int ds$. From (2), $\delta(ds^2) = 2\,ds\,\delta(ds) = -2\eta_{\mu\nu}\,\delta(dx^\mu)\,dx^\nu$, so

$$\delta(ds) = -\eta_{\mu\nu}\,\frac{d(\delta x^\mu)}{d\tau}\frac{dx^\nu}{ds}\,d\tau ,$$

using $\delta(dx^\mu) = d(\delta x^\mu)$ (varying and differentiating commute). Then

$$\delta S = mc\int_{\tau_i}^{\tau_f}\eta_{\mu\nu}\,\frac{d(\delta x^\mu)}{d\tau}\frac{dx^\nu}{ds}\, d\tau .$$

Integrate by parts to move the derivative off $\delta x^\mu$; the boundary term dies because the endpoints are held fixed (see [[Boundary terms and allowed variations]]):

$$\delta S = -\int_{\tau_i}^{\tau_f}\delta x^\mu(\tau)\,\frac{dp_\mu}{d\tau}\, d\tau,
\qquad p^\mu \equiv mc\,\frac{dx^\mu}{ds}.$$

Here $p^\mu$ is the relativistic four-momentum — the derivative of position with respect to **proper time**, not $\tau$, so it is itself a geometric object. Since $\delta x^\mu$ is arbitrary in the interior, its coefficient must vanish:

$$\boxed{\ \frac{dp_\mu}{d\tau} = 0 \ } \tag{4}$$

The four-momentum is constant along the worldline. And this is a **parameterization-independent** statement: if a quantity is constant along a curve, its derivative vanishes with respect to *any* good parameter. Indeed $\frac{dp_\mu}{d\tau'} = \frac{d\tau}{d\tau'}\frac{dp_\mu}{d\tau} = 0$ for every $\tau'$ with $d\tau'/d\tau \neq 0$ — precisely the condition for $\tau'$ to be a legal label. The physics (momentum conserved) does not know or care which $\tau$ you chose.

Choosing the special parameter $\tau = s$ sharpens (4) into the clean geometric form

$$\frac{dp^\mu}{ds} = 0 \quad\Longrightarrow\quad \frac{d^2 x^\mu}{ds^2} = 0 :$$

a free relativistic particle moves in a **straight worldline at constant four-velocity** — the spacetime version of "no force, no acceleration." The fine print: $d^2x^\mu/ds^2 = 0$ holds for $\tau = s$ and **not** for arbitrary $\tau$. An arbitrary parameter spaces its marks unevenly, so $d^2x^\mu/d\tau^2$ generically is nonzero even though the worldline is dead straight. That is the redundancy showing its face one last time: the *form* of the equation depends on the label; the *physics* (a straight line) does not.

The redundancy also leaves a fingerprint: the components of $p^\mu$ are not independent. Contract $p^\mu = mc\,dx^\mu/ds$ with itself:

$$p^\mu p_\mu = m^2c^2\,\frac{dx^\mu}{ds}\frac{dx_\mu}{ds} = -m^2 c^2,$$

because along a timelike worldline $\eta_{\mu\nu}\,dx^\mu dx^\nu = -ds^2$ in mostly-plus signature, so $\frac{dx^\mu}{ds}\frac{dx_\mu}{ds} = -1$. This is the **mass-shell constraint** — energy and momentum are locked together, $E^2 = (pc)^2 + (mc^2)^2$ in disguise. Its appearance is no accident: a reparameterization-invariant (gauge) theory always produces a constraint among its momenta in place of the Noether charge a genuine symmetry would give. Redundancy in $\Rightarrow$ constraint out. See [[Mass-shell relation]].

## Why this matters for strings

The relativistic string's Nambu–Goto action is the worldsheet *area*, invariant under reparameterizations of **both** coordinates $(\tau,\sigma)$ — a two-dimensional gauge redundancy. Same story, one dimension up: two redundancies $\Rightarrow$ two families of constraints (the **Virasoro constraints**), and the power to gauge-fix down to the physical transverse oscillations. The point particle is the rehearsal; the string is the performance. See [[Nambu-Goto action]], [[Virasoro constraints]], [[Light-cone gauge]].

## Open questions

- The square-root action (1) is singular for massless particles: at $m=0$ it collapses to zero, and dividing by $ds$ (zero on a null curve) is illegal. The fix is the **einbein** form — introduce an auxiliary worldline metric $e(\tau)$ and write $S = \tfrac12\int d\tau\,\big(e^{-1}\dot x^2 - e\,m^2 c^2\big)$ with $\dot x^2 = \eta_{\mu\nu}\dot x^\mu\dot x^\nu$, which is polynomial, smooth at $m=0$, *and* still reparameterization invariant. That is the right tool once massless worldlines (and eventually the string) enter.

## Exercise

Take the nonrelativistic-looking action $\displaystyle S = \int_{\tau_i}^{\tau_f} \tfrac12\,\eta_{\mu\nu}\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau}\,d\tau$ — the "kinetic" action without the square root. Under a relabeling $\tau\to\tau'(\tau)$ (strictly increasing), is $S$ reparameterization invariant? Show your work, and say in one sentence which feature of the point-particle action (1) is doing the real work.

> [!success]- Solution
> **No — it is not invariant.** Under $\tau\to\tau'(\tau)$, the chain rule gives $\dfrac{dx^\mu}{d\tau} = \dfrac{dx^\mu}{d\tau'}\dfrac{d\tau'}{d\tau}$, so the integrand carries **two** factors of $d\tau'/d\tau$:
> $$\tfrac12\,\eta_{\mu\nu}\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau} = \tfrac12\,\eta_{\mu\nu}\frac{dx^\mu}{d\tau'}\frac{dx^\nu}{d\tau'}\left(\frac{d\tau'}{d\tau}\right)^2 .$$
> The measure supplies only **one** compensating factor, $d\tau = (d\tau/d\tau')\,d\tau'$. Rewriting the integral in $\tau'$:
> $$S = \int \tfrac12\,\eta_{\mu\nu}\frac{dx^\mu}{d\tau'}\frac{dx^\nu}{d\tau'}\left(\frac{d\tau'}{d\tau}\right)^2 \frac{d\tau}{d\tau'}\,d\tau' = \int \tfrac12\,\eta_{\mu\nu}\frac{dx^\mu}{d\tau'}\frac{dx^\nu}{d\tau'}\,\underbrace{\frac{d\tau'}{d\tau}}_{\neq\,1}\,d\tau' .$$
> One uncancelled factor of $d\tau'/d\tau$ survives inside the integral, so the relabeled path $\tilde x(\tau') \equiv x(\tau(\tau'))$ is assigned a different number than $x(\tau)$: the action is **not** invariant. Its value depends on how fast the curve is traversed, not only on the curve itself — the mark of a genuine kinetic energy rather than a geometric length.
>
> The invariance of (1) came entirely from the **square root**. Taking $\sqrt{\;\;}$ of the quadratic form makes the integrand scale as the *first* power of $d\tau'/d\tau$, matching the single power from the measure so they cancel. An integrand homogeneous of degree one in the velocities is the structural reason the point-particle action is reparameterization invariant — and exactly what the einbein trick restores in polynomial form (see Open questions).
