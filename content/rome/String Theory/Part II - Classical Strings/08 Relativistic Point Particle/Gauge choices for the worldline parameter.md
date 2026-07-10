---
title: Gauge choices for the worldline parameter
number: "8.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, gauge]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Because the action is [[Part II - Classical Strings/08 Relativistic Point Particle/Reparameterization invariance|reparameterization invariant]], the label $\tau$ on the worldline is pure redundancy, so we may *fix a gauge* by choosing a convenient $\tau$ — and the three standard choices (proper length, lab time, light-cone time) each buy a simpler equation at a different price.

## A blank ruler along the worldline

The worldline is a curve in spacetime — a set of points, a bare wire. To describe it we lay a ruler alongside it and read off $x^\mu(\tau)$. But the ruler starts *blank*: [[Part II - Classical Strings/08 Relativistic Point Particle/Reparameterization invariance|reparameterization invariance]] says any smooth monotone relabeling $\tau\to f(\tau)$ gives the same curve, the same action, the same physics. We get to paint the tick marks wherever we like. That freedom is a *gauge redundancy*, not a symmetry: a symmetry relates different physical situations (a boost relates two observers), a redundancy relates two *descriptions of the same situation*. Fixing a gauge just picks one representative from the equivalence class of relabelings — it deletes bookkeeping, never physics.

In applied-math terms: the physical object is the equivalence class of parameterized curves under precomposition with a monotone bijection, and a gauge condition is a rule that selects one representative, at least locally.

For a point particle this is a luxury — the [[Free particle equation of motion]] is already trivial. For the *string* it is survival: the [[Nambu-Goto action]] is intractable until we spend the reparameterization freedom, all the way to the [[Light-cone gauge]] on which quantization is built. The point particle is the rehearsal, where each move is visible with one dimension instead of two.

**Legal ruler.** A relabeling must stay one-to-one along the curve, so $d\tau'/d\tau\neq 0$; we take it strictly increasing, $d\tau'/d\tau>0$, so the parameter still runs from the initial endpoint to the final one.

Below, the same freedom is spent three ways. Read each as: *what did we set the ruler to, and what did that buy us?*

## Gauge 1 — Proper-length gauge: $\tau = s$

Set the ruler to the particle's own clock: paint the marks so equal spacing means equal proper time elapsed on a clock the particle carries. In this vault the parameter is the proper-*length* variable $s$, with physical proper time $\tau_{\text{proper}}=s/c$ (see [[Proper length and proper time]]); the two differ only by the constant $c$, which is why the literature names the identical choice the *proper-time gauge*. Two names, one gauge — anywhere else in the vault, "proper-time gauge" means exactly this $\tau=s$.

- **Defining condition.** With $\tau=s$ the tangent is a *unit* vector (mostly-plus signature, $c$ kept explicit throughout this module),
$$-\eta_{\mu\nu}\frac{dx^\mu}{ds}\frac{dx^\nu}{ds}=1,$$
which is just $ds^2=-\eta_{\mu\nu}\,dx^\mu dx^\nu$ divided by $ds^2$ — the *definition* of $s$, not dynamics. In time units, $U^\mu=dx^\mu/d\tau_{\text{proper}}=c\,dx^\mu/ds$ obeys $U^\mu U_\mu=-c^2$.
- **Payoff.** The equation of motion $dp_\mu/d\tau=0$ collapses to its cleanest form,
$$\boxed{\;\frac{d^2 x^\mu}{ds^2} = 0.\;}$$
Because $p^\mu=mc\,dx^\mu/ds$ is constant and $m$ is constant, the tangent is constant: the worldline is *literally straight*, advancing by equal four-vector steps per unit of proper length — equivalently, per tick of the particle's own clock. This is Newton's first law in covariant dress. (In time units the same statement is $d^2x^\mu/d\tau_{\text{proper}}^2=0$.)
- **Cost.** Only exists for *massive* particles. A massless particle moves on a null line where $ds=0$: its clock never advances, so there is no ruler to paint. The gauge simply does not exist for it.

## Gauge 2 — Static/time gauge: $\tau = t$

Set the ruler to the lab clock: paint the marks so $\tau$ equals coordinate time in one chosen frame, $x^0(\tau)=c\,\tau$, i.e. $\tau=t$. This is the everyday habit — "position as a function of time" — now recognized as *one gauge among many*.

- **Defining condition.** $x^0(\tau)=c\,\tau$, equivalently $\tau=t$.
- **Payoff.** The action becomes an ordinary time integral,
$$S=-mc^2\int dt\,\sqrt{1-v^2/c^2}, \tag{1}$$
from which the familiar Lagrangian $L=-mc^2\sqrt{1-v^2/c^2}$, momentum $\vec p=\gamma m\vec v$, and energy $E=\gamma mc^2$ fall out (see [[Proper-time action]]). This is the gauge that reconnects to Newtonian intuition.
- **Cost.** Lorentz covariance is no longer manifest: we singled out one frame's time. The physics is still invariant — it just is not *obvious* from the formulas anymore.

## Gauge 3 — Light-cone gauge: $\tau \propto x^+$

Set the ruler to a light-front clock: use a null combination of time and one space direction as "time." Define light-cone coordinates
$$x^\pm \equiv \frac{1}{\sqrt2}\big(x^0 \pm x^1\big), \tag{2}$$
and tie the parameter to light-cone time: $x^+ = \beta\,\tau$ for constant $\beta$.

- **Payoff.** In these coordinates the mass-shell constraint solves *linearly* for the dependent momentum $p^-$ (shown below), instead of the usual quadratic $E=\sqrt{\vec p^2c^2+m^2c^4}$. That one algebraic simplification is what makes string quantization tractable in [[Light-cone gauge]] (see also [[Mass-shell relation]]).
- **Cost.** Covariance is broken hardest of all: a specific spatial axis $x^1$ is singled out on top of the time direction. In exchange, every surviving variable is physical — no leftover gauge redundancy to quotient out.

**Point-particle version, worked.** The momentum component along $x^+$ is
$$p^+ = mc\,\frac{dx^+}{ds},$$
constant by the equation of motion $dp_\mu/d\tau=0$, and automatically positive for a massive, future-directed particle (since $|p^1|<p^0$). So $x^+$ increases monotonically with $s$, and $x^+$ is a *legal* ruler. Now the mass shell: with the convention (2), the inner product in light-cone components is $a\cdot b=-a^+b^- - a^-b^+ + a^Ib^I$, where the transverse index $I=2,\dots,D-1$ runs over the untouched directions. So $p\cdot p=-2p^+p^-+p^Ip^I$, and setting this to $-m^2c^2$,
$$-2p^+p^-+p^Ip^I=-m^2c^2 \quad\Longrightarrow\quad \boxed{\;p^-=\frac{p^Ip^I+m^2c^2}{2p^+}.\;}$$
The dependent component $p^-$ is now an *explicit* function of the independent data $(p^+,p^I)$, no square root. This is the exact prototype of the string move: choose $X^+$ as time, then *solve* the constraint for the minus-component rather than carrying it as an independent degree of freedom.

## The pattern

| Gauge | Ruler set to | Payoff | What's lost |
|---|---|---|---|
| Proper length | particle's own clock, $\tau=s$ ($=c\,\tau_{\text{proper}}$) | $d^2x^\mu/ds^2=0$, straightest form | undefined for $m=0$ |
| Static/time | lab clock, $\tau=t$, $x^0=c\tau$ | Newtonian $L$, $\vec p$, $E$ | manifest covariance |
| Light-cone | light-front clock, $x^+=\beta\tau$ | $p^-$ solved *linearly* | a spatial axis singled out |

Every row spends the *same* freedom — the reparameterization redundancy — and buys a different simplification. No row changes the physics; that is guaranteed by [[Part II - Classical Strings/08 Relativistic Point Particle/Reparameterization invariance]]. The parameter is a blank ruler, and a gauge choice is a decision about where to paint the marks so the equation you care about looks simplest.

## Open questions

- Static gauge $x^0=c\tau$ is global only for future-directed timelike worldlines whose coordinate time is monotonic in the chosen frame; a worldline that "doubles back" in $t$ breaks it.
- The massless light-cone gauge needs the einbein/constraint formulation, since $S=-mc\int ds$ degenerates at $m=0$ while the constraint $p^2=-m^2c^2$ survives.
- After fixing $\tau=s$, the only residual freedom is a constant shift $s\to s+s_0$ (choice of origin), once endpoint labels are matched.

## Exercise

Show that the static gauge $\tau=t$ and the proper-length gauge $\tau=s$ are related by a legal reparameterization for a massive particle, and find $ds/dt$ explicitly. Then explain in one sentence why the *massless* case blocks this.

> [!success]- Solution
> Both are legal rulers on the same timelike worldline, so they must be connected by a monotone relabeling $s(t)$. From the definition of proper length, $ds^2=c^2dt^2-d\vec x^{\,2}$, so
> $$\frac{ds}{dt}=\sqrt{c^2-\vec v^{\,2}}=c\sqrt{1-v^2/c^2}=\frac{c}{\gamma}.$$
> This is strictly positive for $v<c$, hence $ds/dt>0$: the relabeling is monotone increasing, a legal reparameterization. It is exactly the Jacobian that converts $S=-mc\int ds$ (proper-length gauge) into $S=-mc^2\int dt\sqrt{1-v^2/c^2}$ (static gauge, eq. (1)), since $mc\,ds = mc\cdot\frac{c}{\gamma}\,dt = mc^2\sqrt{1-v^2/c^2}\,dt$.
>
> Massless case: a photon has $v=c$, so $ds/dt=c\sqrt{1-1}=0$. The ruler $s$ collapses to a point — $s$ is constant along the whole worldline — so it is *not* one-to-one and cannot serve as a parameter. There is no reparameterization to the $\tau=s$ gauge because that gauge does not exist for $m=0$. (This is the same degeneracy that kills $S=-mc\int ds$ at $m=0$; the light-cone gauge, using $x^+$ instead of $s$, is the escape.)
