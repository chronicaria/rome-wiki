---
title: String tension and the energy of a stretched string
number: "10.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, tension]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Evaluating the Nambu–Goto action for a static stretched string gives an energy $V = T_0\,a$, proportional to length — which is why $T_0$ deserves the name "tension" and why the rest mass per unit length must be $\mu_0 = T_0/c^2$.

## What stretching costs

Stretch an open string to length $a$ and hold it there. The energy that costs is $T_0\,a$: each additional unit of length costs the same $T_0$, however long the string already is. A constant cost per unit length is exactly what "tension" means — a restoring force that never grows, an idealized rubber band with no stiffening. $T_0$ is the first genuine quantity string theory computes, and this note is the short calculation that produces it.

The calculation has a payoff. Stored energy *is* rest mass ($E=mc^2$), so the relativistic string has mass only because it has tension. Turn off $T_0$ and the string is massless — there is no separate "stuff" carrying its own weight.

## Setup: a string frozen along one axis

Pin the two endpoints of an open string at $x^1 = 0$ and $x^1 = a>0$, with every other spatial coordinate zero — so the endpoints sit at $(0,\vec 0)$ and $(a,\vec 0)$ and the string is stretched only along $x^1$. Work in [[Static gauge]], $X^0 = c\tau$, so worldsheet time equals lab time.

Label the material points of the static string by a strictly increasing function $f$:

$$X^1(t,\sigma) = f(\sigma),\quad X^2 = \cdots = X^d = 0,\qquad f(0)=0,\ f(\sigma_1)=a.$$

"Strictly increasing" just means each bead of string gets its own $\sigma$. The configuration is a straight segment from $0$ to $a$ on the $x^1$-axis, and $f$ is nothing but a choice of ruler laid along it. The final answer will forget $f$ entirely.

## The two worldsheet tangents

Nothing moves and nothing happens off the $x^1$-axis, so the $\tau$-tangent is pure time and the $\sigma$-tangent is pure stretch:

$$\dot X^\mu = (c,\,0,\,\vec 0), \qquad X'^\mu = (0,\,f',\,\vec 0), \qquad f' = \frac{df}{d\sigma}>0.$$

Contract these with the mostly-plus metric $\eta_{\mu\nu}=\mathrm{diag}(-,+,\dots,+)$:

$$(\dot X)^2 = -c^2, \qquad (X')^2 = (f')^2, \qquad \dot X\cdot X' = 0. \tag{1}$$

The $-c^2$ marks the $\tau$-tangent as timelike, an "at rest" direction; $(f')^2$ is the squared stretch; and $\dot X\cdot X' = 0$ says the time direction is orthogonal in spacetime to the stretch direction, exactly what "sitting still" should look like.

## Evaluate the action

The [[Nambu-Goto action|Nambu–Goto action]] carries $\sqrt{(\dot X\cdot X')^2 - (\dot X)^2(X')^2}$ under its integral. Plugging in (1):

$$\sqrt{0 - (-c^2)(f')^2} = c\,f' \quad (\text{since } f'>0).$$

So, with $S = -\tfrac{T_0}{c}\int dt\int d\sigma\,\sqrt{\cdots}$,

$$S = -\frac{T_0}{c}\int_{t_i}^{t_f}\!dt\int_0^{\sigma_1}\!d\sigma\;c\,f' \;=\; -T_0\int_{t_i}^{t_f}\!dt\int_0^{\sigma_1}\!d\sigma\,\frac{df}{d\sigma}. \tag{2}$$

The $\sigma$-integrand is a total derivative, so the inner integral collapses to endpoint values:

$$S = -T_0\int_{t_i}^{t_f}\!dt\,\big(f(\sigma_1)-f(0)\big) = \int_{t_i}^{t_f}\!dt\,(-T_0\,a). \tag{3}$$

The function $f$ has vanished: any ruler gives the same $T_0\,a$. That is reparameterization invariance made concrete — the calculation kept the endpoint separation $a$ and threw away the coordinate labels, which is exactly what a geometric quantity should do.

## Read off the potential energy

For a static configuration the kinetic energy is zero, so $L = -V$ and $S = \int dt\,(-V)$. Matching this against (3):

$$\boxed{\,V = T_0\,a\,} \tag{4}$$

The energy stored is proportional to length, with constant of proportionality $T_0$. Differentiating, $dV/da = T_0$ is the force you must apply to hold the endpoint out — the tension. That $dV/da$ is *constant* is the defining signature: the force is the same at every length, unlike a Hooke spring whose pull grows with extension.

## The same $T_0$ from the endpoint force

The force reading can be checked without differentiating $V$, straight from the boundary term. Varying the open-string action leaves the endpoint term $\int dt\,\big[\mathcal P^\sigma_\mu\,\delta X^\mu\big]_{\sigma=0}^{\sigma=\sigma_1}$ (see [[Neumann versus Dirichlet conditions]]), where $\mathcal P^\sigma_\mu$ is the flux of $\mu$-momentum along the string toward its end. For this static string (computed in the next section)

$$\mathcal P^\sigma_1 = -T_0, \qquad \mathcal P^\sigma_\mu = 0 \ (\mu\neq 1).$$

Move the right endpoint by $\delta a = \delta X^1(t,\sigma_1)$; its contribution to the action is

$$\delta S_{\text{right}} = \int dt\,\mathcal P^\sigma_1\,\delta a = -\int dt\,T_0\,\delta a.$$

A static variation obeys $\delta S = -\int dt\,\delta V$, so $\delta V = T_0\,\delta a$ — the same law as (4), now read off from the momentum flowing off the end. The two derivations agree because the boundary term is precisely the variational form of the endpoint force:

$$T_0 = \frac{dV}{da} = |\text{endpoint force}|.$$

One view says how much extra energy a longer string costs; the other says what force the support must hold. Same number.

## The static string really solves the equations of motion

We assumed the straight string is a solution — worth one line to confirm. Since neither $\dot X^\mu$ nor $X'^\mu$ depends on $\tau$, neither momentum density does either, and the equation of motion $\partial_\tau\mathcal P^\tau_\mu + \partial_\sigma\mathcal P^\sigma_\mu = 0$ reduces to $\partial_\sigma\mathcal P^\sigma_\mu = 0$. The $\sigma$-momentum density is $\mathcal P^\sigma_\mu = \partial\mathcal L/\partial X'^\mu$ with $\mathcal L$ the Nambu–Goto integrand; carrying out the derivative and then substituting (1),

$$\mathcal P^\sigma_\mu = -\frac{T_0}{c}\,\frac{(\dot X\cdot X')\,\dot X_\mu - (\dot X)^2\,X'_\mu}{\sqrt{(\dot X\cdot X')^2 - (\dot X)^2(X')^2}} = -\frac{T_0}{c}\,\frac{c^2\,X'_\mu}{\sqrt{c^2 (f')^2}} = -T_0\,\frac{X'_\mu}{f'}.$$

This is nonzero only for $\mu=1$, where $X'_1 = f'$ (mostly-plus leaves the spatial index unchanged), giving the constant $\mathcal P^\sigma_1 = -T_0$. That constant is manifestly $\sigma$-independent, so $\partial_\sigma\mathcal P^\sigma_\mu = 0$ holds and the straight string is a genuine solution. The boundary conditions hold too. Every spatial coordinate of an endpoint is pinned, so all spatial directions are Dirichlet — in the language of [[D-branes (first appearance)]], each end sits on a D0-brane. Time is always Neumann, $\mathcal P^\sigma_0 = 0$, satisfied here because $X'_0 = 0$. This is the boundary bookkeeping developed in [[Neumann versus Dirichlet conditions]].

## The payoff: mass from tension

Creating the string from nothing deposits rest energy $V$ into a length $a$. So the rest mass per unit length $\mu_0$ obeys

$$\mu_0 c^2 = \frac{V}{a} = T_0 \quad\Longrightarrow\quad \mu_0 = \frac{T_0}{c^2}.$$

This is the deep part. In a Newtonian string, mass density $\mu_0$ and tension $T_0$ are two independent inputs — you can imagine a heavy slack rope with density but no tension. The relativistic string has no such freedom: its mass density *is* its tension, divided by $c^2$. Set $T_0=0$ and the string is genuinely massless, with no leftover "stuff." The string weighs something only because it is taut; every gram of its rest mass is stored tension energy, not intrinsic material. (Contrast [[The wave equation on an interval]], where tension and density are separate nonrelativistic dials.)

The signs matter here. Had we chosen the opposite sign in front of the action or under the radical, $V$ in (4) would have come out *negative* — a string that releases energy as you stretch it, an instability. Positive $V$ justifies both minus signs after the fact (the same check done fast in [[Static gauge]]).

## Open questions
- $\mu_0$ is a *rest* mass density. Once the string moves, transverse motion adds a relativistic $\gamma$-factor to the energy — see [[Endpoint velocity and endpoint force]] for the moving-string Lagrangian $L = -T_0\!\int ds\,\sqrt{1-v_\perp^2/c^2}$.
- Units: $T_0$ is a force (energy per length). Later it is traded for the slope parameter $\alpha'$ via $T_0 = \dfrac{1}{2\pi\alpha'}$ in $\hbar=c=1$ units — with units restored, $T_0 = \dfrac{\hbar c}{2\pi\alpha'}$, where $\alpha' = \ell_s^2$ carries dimensions of length squared. The $2\pi$ is a convention in the definition of $\alpha'$ and plays no role in this classical result.

## Exercise

A common slip is to think that if you use a "denser" reparameterization near one end — say $f$ that rises slowly then quickly — the string stores more energy there and the total changes. Show explicitly that it does not: take the concrete ruler $f(\sigma) = a\,(\sigma/\sigma_1)^3$ on $\sigma\in[0,\sigma_1]$, carry it through the action, and confirm you still get $V = T_0 a$. Then state in one sentence which line of the general derivation guarantees this had to happen.

> [!success]- Solution
> With $f(\sigma) = a\,(\sigma/\sigma_1)^3$ we have $f(0)=0$, $f(\sigma_1)=a$ (endpoints correct), and
> $$f'(\sigma) = \frac{3a}{\sigma_1^3}\,\sigma^2 > 0 \quad\text{on } (0,\sigma_1],$$
> so $f$ is strictly increasing. The tangents are unchanged in form, $\dot X^\mu=(c,0,\vec 0)$ and $X'^\mu=(0,f',\vec 0)$, giving the same radicand $\sqrt{-(-c^2)(f')^2}=c\,f'$. The action is
> $$S = -T_0\int dt\int_0^{\sigma_1} d\sigma\,\frac{df}{d\sigma} = -T_0\int dt\int_0^{\sigma_1} d\sigma\,\frac{3a}{\sigma_1^3}\,\sigma^2.$$
> The inner integral is $\dfrac{3a}{\sigma_1^3}\cdot\dfrac{\sigma_1^3}{3} = a$, so $S = \int dt\,(-T_0 a)$ and hence $V = T_0 a$ — identical to the general result. The "denser" ruler near $\sigma=\sigma_1$ (large $f'$ there) is exactly compensated by being "sparser" near $\sigma=0$ (small $f'$).
>
> The guarantee: the $\sigma$-integrand in (2) is a total derivative $df/d\sigma$, so the integral is $f(\sigma_1)-f(0)=a$ for *any* increasing $f$ with the right endpoints. The answer can only depend on the endpoint values, never on the ruler in between.
