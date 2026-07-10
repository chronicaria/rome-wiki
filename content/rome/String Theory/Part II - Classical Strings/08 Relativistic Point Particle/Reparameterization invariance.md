---
title: Reparameterization invariance
number: "8.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, reparameterization]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Relabeling the points of a worldline by any new increasing parameter leaves the action unchanged, because the action measures the *curve's* proper length (proper time), not the ruler we lay along it. The parameter is a redundancy of the description, not physics.

Related: [[String Theory/Part I - Just-in-Time Physics/01 Action Principles/Reparameterization invariance|module 01 reparameterization invariance]] introduces the same idea as an action-principle and gauge-redundancy prototype.

## Length belongs to the road, not the milestones

Think of a road on a map. Its length is a property of the *road*. You can plant milestone markers along it however you like — every meter, every mile, bunched up here, spread out there — and when you add up the distances between markers you always get the same total. Where you paint the markers is bookkeeping; the road doesn't care.

A [[Proper-time action|worldline]] is that road, drawn in spacetime, and its "length" is [[Proper length and proper time|proper time]]. The parameter $\tau$ is where you paint the markers. So the action $S=-mc\int ds$ — which is $-mc$ times that length — must come out the same no matter which parameter you use. That is *reparameterization invariance*, and it holds for one reason: the integrand is **homogeneous of degree one** in the velocities.

The parameter was never physical, so it cannot change the physics. That single sentence is why the next note can [[Gauge choices for the worldline parameter|choose a convenient parameter]] and lose nothing.

## Setup: a parameterized worldline

A worldline $\mathcal{P}$ is a *set of points* — a curve in spacetime. Proper length $\int_\mathcal{P} ds$ is intrinsic to that curve: chop $\mathcal{P}$ into little pieces, add up $ds$ for each, and you never had to name a parameter at all.

To actually *compute*, we describe the curve with a parameter $\tau$, strictly increasing from the initial point to the final point but otherwise arbitrary:

$$x^\mu = x^\mu(\tau), \qquad x_i^\mu = x^\mu(\tau_i),\quad x_f^\mu = x^\mu(\tau_f).$$

This is a map from an interval $[\tau_i,\tau_f]$ into spacetime. Time itself, $x^0$, is now a function of $\tau$: we gave up the everyday habit of using time as the parameter precisely so that space and time enter on the same footing, which keeps the treatment manifestly Lorentz-covariant.

Rewrite $ds$ using the parameter. With the mostly-plus metric $\eta=\mathrm{diag}(-,+,+,+)$, a timelike displacement has $ds^2 = -\eta_{\mu\nu}\,dx^\mu dx^\nu > 0$, so

$$ds^2 = -\eta_{\mu\nu}\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau}\,(d\tau)^2, \qquad ds = \sqrt{-\eta_{\mu\nu}\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau}}\;d\tau.$$

The action in explicit, parameter-dependent form:

$$S = -mc\int_{\tau_i}^{\tau_f}\sqrt{-\eta_{\mu\nu}\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau}}\;d\tau. \tag{1}$$

Every symbol under the integral now refers to $\tau$; the claim is that the *value* of the integral does not.

## The derivation: invariance under $\tau \to \tau'$

Switch to a new parameter $\tau'(\tau)$ that is strictly increasing, so $d\tau'/d\tau > 0$. By the chain rule,

$$\frac{dx^\mu}{d\tau} = \frac{dx^\mu}{d\tau'}\frac{d\tau'}{d\tau}.$$

The factor $d\tau'/d\tau$ multiplies *both* velocities inside the square root, so it appears squared under the root and comes out as one power — positive, so no absolute value is needed:

$$\sqrt{-\eta_{\mu\nu}\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau}} = \frac{d\tau'}{d\tau}\sqrt{-\eta_{\mu\nu}\frac{dx^\mu}{d\tau'}\frac{dx^\nu}{d\tau'}}.$$

Put this back into (1). The leftover Jacobian recombines with the measure — $\dfrac{d\tau'}{d\tau}\,d\tau = d\tau'$ — and the same change of variables carries the limits $\tau_{i,f}\to\tau'_{i,f}$:

$$S = -mc\int_{\tau_i}^{\tau_f}\sqrt{-\eta_{\mu\nu}\frac{dx^\mu}{d\tau'}\frac{dx^\nu}{d\tau'}}\;\underbrace{\frac{d\tau'}{d\tau}\,d\tau}_{=\,d\tau'} = -mc\int_{\tau'_i}^{\tau'_f}\sqrt{-\eta_{\mu\nu}\frac{dx^\mu}{d\tau'}\frac{dx^\nu}{d\tau'}}\;d\tau'. \tag{2}$$

Equation (2) has *exactly the same form* as (1), only with every $\tau$ replaced by $\tau'$, so $S$ is unchanged. The check took two lines and used no equations of motion — the action is **manifestly** reparameterization invariant.

**The one fact that made it work.** The integrand is a square root, hence **homogeneous of degree one** in the velocities $\dot x^\mu \equiv dx^\mu/d\tau$: rescale all velocities by a common positive factor $\lambda$ and the integrand scales by exactly $\lambda^1$. Under $\tau\to\tau'$ the velocities pick up the common factor $\lambda = d\tau'/d\tau$, so:

- degree-one homogeneity pulls **one** power of the Jacobian *out* of the root;
- converting $d\tau\to d\tau'$ absorbs **one** power *into* the measure.

They cancel exactly; any other degree fails (see the Exercise). The string will lean on the same cancellation: reparameterizing the two worldsheet coordinates pulls exactly one Jacobian *determinant* out of the [[Nambu-Goto action|Nambu–Goto action]] integrand, and the two-dimensional measure absorbs it.

## Why this matters

1. **It is a redundancy, not a symmetry.** A Lorentz boost relates the descriptions of two *different* observers, both physical. A reparameterization relates one geometric curve to *itself*, written with a different label — an equivalence between descriptions, carrying no new physical motion. This is the freedom we spend next by making a [[Gauge choices for the worldline parameter|gauge choice]].

2. **The equation of motion must be parameter-blind.** Varying the action gives $dp_\mu/d\tau = 0$ for *arbitrary* $\tau$ — see [[Free particle equation of motion]]. "The four-momentum is constant along the curve" cannot depend on which ruler we chose, and indeed it doesn't.

**One subtlety on orientation.** If $\tau'(\tau)$ *decreases* ($d\tau'/d\tau<0$), the factor leaving the root is $|d\tau'/d\tau|$, and the new parameter would run from the final endpoint back to the initial one. The geometric length is still the same, but for a variational problem with a fixed initial-to-final orientation it is cleanest to restrict to strictly increasing reparameterizations, which is what we did above.

## Open questions

- Reparameterization invariance is the origin of a *constraint* in the Hamiltonian formulation: the Hamiltonian of a purely geometric action vanishes identically. Not developed here; flagged for the string constraints later.
- The two-parameter worldsheet version replaces the one-variable Jacobian with a Jacobian *determinant*; Module 09 ([[Nambu-Goto action|Nambu–Goto action]]) supplies the details.

## Exercise

The proof above hinged on the integrand being homogeneous of degree *one*. Test that this is really the load-bearing property by trying the "wrong" power. Consider the alternative action

$$\tilde S = \int_{\tau_i}^{\tau_f}\Big(-\eta_{\mu\nu}\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau}\Big)\,d\tau,$$

whose integrand (no square root) is homogeneous of degree *two* in the velocities. Reparameterize $\tau\to\tau'$ with $\tau'$ strictly increasing and show that $\tilde S$ is **not** reparameterization invariant. What is the extra factor that fails to cancel, and what does it mean physically that $\tilde S$ "knows" about the parameter?

> [!success]- Solution
> Under the chain rule each velocity picks up $d\tau'/d\tau$, and because the integrand is degree two it scales by $(d\tau'/d\tau)^2$:
> $$-\eta_{\mu\nu}\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau} = \Big(\frac{d\tau'}{d\tau}\Big)^2\Big(-\eta_{\mu\nu}\frac{dx^\mu}{d\tau'}\frac{dx^\nu}{d\tau'}\Big).$$
> Converting the measure eats only *one* power: $\frac{d\tau'}{d\tau}\,d\tau = d\tau'$. So
> $$\tilde S = \int_{\tau'_i}^{\tau'_f}\Big(-\eta_{\mu\nu}\frac{dx^\mu}{d\tau'}\frac{dx^\nu}{d\tau'}\Big)\,\frac{d\tau'}{d\tau}\;d\tau'.$$
> One factor of $d\tau'/d\tau$ is left over inside the integral. Unless $d\tau'/d\tau \equiv 1$ — a trivial shift of origin, $\tau'=\tau+\text{const}$ — this factor rescales the integrand and $\tilde S$ genuinely changes value: an affine relabeling $\tau'=a\tau$ multiplies $\tilde S$ by $1/a$, and a non-affine one distorts it point by point. Physically, $\tilde S$ measures the "energy" of the parameterization, not the intrinsic length. On a timelike curve the integrand is $(ds/d\tau)^2$, so over a fixed interval Cauchy–Schwarz gives $\tilde S \ge \big(\int ds\big)^2/(\tau_f-\tau_i)$, with equality exactly when the marks are spaced evenly: $\tilde S$ is smallest for a constant-speed labeling and larger for any uneven one. It secretly encodes a choice of clock — exactly the information a geometric action must not contain. (The degree-two form is still useful: promote the leftover Jacobian into a dynamical variable — an auxiliary *einbein* field on the worldline — and the resulting action is reparameterization invariant again and, unlike $-mc\int ds$, survives the massless limit. That einbein formulation is the point-particle prototype of the string's [[Polyakov action]].)
