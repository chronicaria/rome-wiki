---
title: Free particle equation of motion
number: "8.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, equations-of-motion]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Extremizing the geometric action $S=-mc\int ds$ gives $dp_\mu/d\tau=0$ for *any* worldline parameter — a free particle's four-momentum is frozen along its worldline — and in the proper-length gauge this reads $d^2x^\mu/ds^2=0$, the relativistic Newton's first law.

## Straightness from extremal length

A free particle sweeps out a worldline, and its action measures one thing: the proper length $\int ds$ of that curve (equivalently the proper time $\int ds/c$ its onboard clock ticks off). Nature picks the worldline that extremizes this length, and the extremal worldline turns out to be straight — where "straight in spacetime" is exactly the statement that the four-momentum never changes. That is Newton's first law — a free body moves in a straight line at constant velocity — written so that every inertial observer sees the same equation.

One deliberate choice before the algebra: we refuse to privilege time as the clock ticking off the motion. We use an arbitrary label $\tau$ along the curve, so space and time enter symmetrically, and the answer comes out parameter-blind — it holds no matter which ruler we lay along the worldline. Why the parameter drops out is proved once and for all in [[Part II - Classical Strings/08 Relativistic Point Particle/Reparameterization invariance|Reparameterization invariance]]; this note is the derivation half of that story.

## Vary the action

Deform the worldline by $\delta x^\mu(\tau)$, pinning the endpoints. The action changes by

$$\delta S = -mc\int \delta(ds). \tag{1}$$

We need $\delta(ds)$. It is cleaner to vary $ds^2$, then divide. Starting from $ds^2 = -\eta_{\mu\nu}\,dx^\mu dx^\nu$ (mostly-plus signature; the proper-length element from [[Proper length and proper time]]),

$$2\,ds\,\delta(ds) = -\eta_{\mu\nu}\,\delta(dx^\mu dx^\nu) = -2\,\eta_{\mu\nu}\,\delta(dx^\mu)\,dx^\nu.$$

> Two factors of 2 appear and cancel. On the left, $\delta(ds^2)=2\,ds\,\delta(ds)$ by the chain rule. On the right, varying the product gives $\delta(dx^\mu)\,dx^\nu + dx^\mu\,\delta(dx^\nu)$, and these two terms are equal after contracting with the symmetric $\eta_{\mu\nu}$ — so they combine into a single factor of 2.

Dividing by $2\,ds$,

$$\delta(ds) = -\eta_{\mu\nu}\,\delta(dx^\mu)\,\frac{dx^\nu}{ds}. \tag{2}$$

## The one lemma: variation commutes with $d$

$$\delta(dx^\mu) = d(\delta x^\mu). \tag{3}$$

The plain-language version: *the wiggle in a small step equals the small step of the wiggle*. Proof: a step is a difference, $dx^\mu = x^\mu(\tau+d\tau)-x^\mu(\tau)$, and $\delta$ is linear, so it passes straight through the subtraction:

$$\delta\big[x^\mu(\tau+d\tau)-x^\mu(\tau)\big] = \delta x^\mu(\tau+d\tau) - \delta x^\mu(\tau).$$

The left side is $\delta(dx^\mu)$; the right side is $d(\delta x^\mu)$. This is the covariant cousin of "the change in velocity is the time-derivative of the change in position." Insert (3) into (2) and write the step as a $\tau$-derivative:

$$\delta(ds) = -\eta_{\mu\nu}\,\frac{d(\delta x^\mu)}{d\tau}\,\frac{dx^\nu}{ds}\,d\tau. \tag{4}$$

## Integrate by parts

Feed (4) into (1). The two minus signs make the prefactor $+mc$:

$$\delta S = mc\int_{\tau_i}^{\tau_f}\eta_{\mu\nu}\,\frac{d(\delta x^\mu)}{d\tau}\,\frac{dx^\nu}{ds}\,d\tau.$$

To read off an equation of motion we need $\delta x^\mu$ standing bare, not differentiated. Move the derivative off it by parts — write the integrand as a total derivative minus the leftover:

$$\delta S = mc\int_{\tau_i}^{\tau_f} d\tau\,\frac{d}{d\tau}\Big(\eta_{\mu\nu}\,\delta x^\mu\,\frac{dx^\nu}{ds}\Big) - mc\int_{\tau_i}^{\tau_f} d\tau\;\delta x^\mu\,\eta_{\mu\nu}\,\frac{d}{d\tau}\frac{dx^\nu}{ds}. \tag{5}$$

The first integral is a total derivative, so it collapses to a boundary term evaluated at $\tau_i,\tau_f$. We pinned the endpoints, $\delta x^\mu(\tau_i)=\delta x^\mu(\tau_f)=0$, so it dies:

$$\delta S = -\int_{\tau_i}^{\tau_f} d\tau\;\delta x^\mu(\tau)\,\eta_{\mu\nu}\,\frac{d}{d\tau}\Big(mc\,\frac{dx^\nu}{ds}\Big).$$

## Read off the momentum and conclude

The object inside the derivative is the four-momentum:

$$mc\,\frac{dx^\nu}{ds} = m\,U^\nu = p^\nu, \qquad U^\nu \equiv \frac{dx^\nu}{d(s/c)} = c\,\frac{dx^\nu}{ds}.$$

Here $U^\nu$ is the four-velocity — position differentiated with respect to the *physical proper time* $s/c$ — so it carries units of velocity, while the bare $dx^\nu/ds$ is the dimensionless unit tangent. Sanity check on the spatial part: with $ds=c\,dt/\gamma$, we get $p^i = mc\,dx^i/ds = \gamma m\,v^i$ — the relativistic three-momentum from [[Proper-time action]]. The full units dictionary is in [[Proper length and proper time]].

Pull $\eta_{\mu\nu}$ through the derivative to lower the index, $\eta_{\mu\nu}\,dp^\nu/d\tau = dp_\mu/d\tau$:

$$\delta S = -\int_{\tau_i}^{\tau_f} d\tau\;\delta x^\mu(\tau)\,\frac{dp_\mu}{d\tau}.$$

The variation $\delta x^\mu$ is arbitrary in the interior, so $\delta S=0$ for *every* wiggle forces the coefficient to vanish pointwise:

$$\boxed{\,\frac{dp_\mu}{d\tau} = 0\,} \tag{6}$$

A free particle's four-momentum is constant along its worldline. The statement is automatically parameter-blind: a quantity constant along a curve has vanishing derivative with respect to *any* label, so we never had to say what $\tau$ was — exactly as [[Part II - Classical Strings/08 Relativistic Point Particle/Reparameterization invariance|Reparameterization invariance]] promised. All four components are conserved: the energy component $p^0=E/c$ and the three-momentum $p^i$ alike.

## The straight-line form

Choose the parameter to be the proper length itself, $\tau=s$ (see [[Gauge choices for the worldline parameter]]). Then (6) becomes $dp^\mu/ds=0$, and with $p^\mu = mc\,dx^\mu/ds$ and constant mass,

$$\boxed{\,\frac{d^2 x^\mu}{ds^2} = 0\,}. \tag{7}$$

The worldline advances by *equal four-vector steps per equal proper-length interval* — that is what "straight in spacetime" means, Newton's first law in relativistic dress. But (7) is gauge-specific: an arbitrary $\tau$ spaces its tick marks unevenly, so $d^2x^\mu/d\tau^2$ need not vanish even though $dp_\mu/d\tau$ does. The frame- and parameter-independent statement is (6), not (7).

## Arbitrary-parameter form

There is a version of (7) that keeps an arbitrary $\tau$ and is manifestly reparameterization invariant. Start from the parameterized action

$$S=-mc\int d\tau\,\sqrt{-\dot x^2},\qquad \dot x^2\equiv \eta_{\mu\nu}\dot x^\mu\dot x^\nu,\quad \dot x^\mu\equiv\frac{dx^\mu}{d\tau}.$$

The momentum conjugate to $x^\mu$ is

$$\frac{\partial L}{\partial \dot x^\mu} = mc\,\frac{\dot x_\mu}{\sqrt{-\dot x^2}}.$$

Since $ds=\sqrt{-\dot x^2}\,d\tau$, the fractions of $d\tau$ cancel and this is exactly $p_\mu=mc\,dx_\mu/ds$ again. Euler–Lagrange, $\frac{d}{d\tau}\frac{\partial L}{\partial\dot x^\mu}-\frac{\partial L}{\partial x^\mu}=0$, has no $\partial L/\partial x^\mu$ term (the Lagrangian has no bare $x$), so after dropping the nonzero constant $mc$:

$$\boxed{\;\frac{d}{d\tau}\left(\frac{\dot x_\mu}{\sqrt{-\dot x^2}}\right)=0\;}. \tag{8}$$

This *is* constant four-momentum wearing arbitrary-$\tau$ clothes: the bracket is the unit tangent, and $mc$ times it is $p_\mu$. Setting $\tau=s$ makes $\sqrt{-\dot x^2}=1$ and collapses (8) back to $d^2x_\mu/ds^2=0$; the dividing $\sqrt{-\dot x^2}$ is what soaks up any uneven spacing of the parameter, restoring the invariance that (7) gave up.

The parameter-independence of (6) is now a one-liner. Under any good reparameterization $\tau'(\tau)$ (with $d\tau'/d\tau\neq0$),

$$\frac{dp_\mu}{d\tau'}=\frac{dp_\mu}{d\tau}\,\frac{d\tau}{d\tau'}=0.$$

Requiring $d\tau'/d\tau>0$ also keeps the new parameter running from the initial endpoint to the final one.

## Lorentz invariance, checked

The final test the geometric-action strategy was built to pass: the equation must look identical to every inertial observer. Under a Lorentz transformation $x'^\mu = L^\mu{}_\nu x^\nu$ — constant and $\eta$-preserving, so $ds$ is unchanged —

$$0 = \frac{d^2 x^\mu}{ds^2} \;\Longrightarrow\; \frac{d^2 x'^\mu}{ds^2} = L^\mu{}_\nu\,\frac{d^2 x^\nu}{ds^2} = 0,$$

and invertibility of $L$ (any $\eta$-preserving matrix has $(\det L)^2=1$) runs the implication backward. Physical in one frame $\Leftrightarrow$ physical in all frames — the payoff a scalar action was chosen for in [[Proper-time action]].

## Open questions

- Curved space: the *same* action $-mc\int ds$ with $g_{\mu\nu}(x)$ in place of $\eta_{\mu\nu}$ yields the geodesic equation $\frac{d^2x^\mu}{ds^2}+\Gamma^\mu_{\nu\rho}\frac{dx^\nu}{ds}\frac{dx^\rho}{ds}=0$. The extra Christoffel term is the position-dependence of the metric leaking into the variation; it needs geodesic machinery beyond this flat-space module, picked up when curved backgrounds appear in [[Metric, B-field, and dilaton as low-energy fields]].

## Exercise

The boundary term in equation (5) was thrown away because we pinned both endpoints. Suppose instead we free the *final* endpoint: $\delta x^\mu(\tau_i)=0$ but $\delta x^\mu(\tau_f)$ arbitrary, while still demanding $\delta S=0$ for all such variations. What extra condition does this impose at $\tau_f$? Show that a massive particle cannot satisfy it, then find the modified free-endpoint problem that *does* have a solution.

> [!success]- Solution
> Redo the integration by parts (5) keeping the boundary term. The total-derivative piece evaluates the bracket at the two endpoints:
> $$\delta S = mc\,\Big[\eta_{\mu\nu}\,\delta x^\mu\,\frac{dx^\nu}{ds}\Big]_{\tau_i}^{\tau_f} - \int_{\tau_i}^{\tau_f} d\tau\;\delta x^\mu\,\frac{dp_\mu}{d\tau}.$$
> With $p_\nu = mc\,dx_\nu/ds$ the boundary piece is $\big[\delta x^\mu\, p_\mu\big]_{\tau_i}^{\tau_f}$; it vanishes at $\tau_i$ because $\delta x^\mu(\tau_i)=0$. Arbitrary interior variations still force the bulk equation $dp_\mu/d\tau=0$. What remains is $\delta x^\mu(\tau_f)\,p_\mu(\tau_f)$, and since all four components of $\delta x^\mu(\tau_f)$ are now arbitrary, stationarity demands the natural (free-endpoint) boundary condition
> $$p_\mu(\tau_f)=0.$$
> A massive particle cannot obey this. The momentum is $mc$ times the unit tangent, so
> $$p^\mu p_\mu = m^2c^2\,\eta_{\mu\nu}\frac{dx^\mu}{ds}\frac{dx^\nu}{ds} = -m^2c^2 \neq 0$$
> identically along *any* timelike worldline — the [[Mass-shell relation]] holds by the definition of $s$, equations of motion or not. In particular $p^0 = \gamma mc \geq mc > 0$: even a particle at rest carries rest energy, so the four components can never vanish simultaneously. The fully-free-endpoint problem therefore has *no* extremal at all. Geometrically: once the bulk equation holds, $\delta S = \delta x^\mu(\tau_f)\,p_\mu(\tau_f)$, and choosing $\delta x^\mu(\tau_f) = -\epsilon\,p^\mu$ gives $\delta S = +\epsilon\,m^2c^2 \neq 0$ — sliding the endpoint along the worldline always changes the length at first order. This is why the equation of motion is stated for *pinned* endpoints.
> The version that works frees only *where* the particle ends, not *when*: hold $\delta x^0(\tau_f)=0$ and let the spatial $\delta x^i(\tau_f)$ range freely over the slice $t=t_f$. Then only $p_i(\tau_f)=0$ is forced — the particle must end at rest — and since momentum is conserved, it is at rest throughout. Check: proper time from a fixed starting event to *anywhere* on the slice $t=t_f$ is $\int_{t_i}^{t_f}\sqrt{1-v^2/c^2}\,dt$, maximized by $v\equiv0$; the stay-at-home worldline of [[Proper-time action]] wins.
> On the string worldsheet the same free-endpoint variation produces a boundary condition at each end of an open string — but there it constrains the *flow of momentum off the end*, not the endpoint's total momentum, so it can be satisfied. Choosing which directions are freed versus pinned is Neumann versus Dirichlet, the seed of D-branes.
