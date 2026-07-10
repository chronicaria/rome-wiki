---
title: 09 — Nambu-Goto Worldsheet Geometry (Overview)
number: "9.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, nambu-goto]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A relativistic string picks its history by extremizing the spacetime area of its worldsheet, exactly as a free particle extremizes the proper length of its worldline.

## The one idea

A stretched rubber band pulls itself straight because a straight shape has the least length. Promote that to spacetime and one dimension up — trading *least* for *extremal*, as Lorentzian signature demands — and you have the whole module.

- A **particle** sweeps out a 1D **worldline** through spacetime. Its action is (minus a constant times) the invariant **length** of that line: $S=-mc\int ds$ (factors of $c$ stay explicit in this module). Extremizing length gives a straight line — free motion.
- A **string** sweeps out a 2D **worldsheet**. Its action is (minus a constant times) the invariant **area** of that sheet: $S=-\tfrac{T_0}{c}\int d\tau\,d\sigma\,\sqrt{-\gamma}$. Extremizing area gives the string's equations of motion.

That is the entire logical jump: **worldline length becomes worldsheet area.** Everything below is the machinery needed to say "area of a surface sitting in Minkowski spacetime" precisely — plus one sign the machinery forces on us.

## The one surprise

Area of a surface in ordinary space is $\int\sqrt{g}$, a square root of a Gram determinant $g>0$. For a worldsheet, that same determinant comes out **negative**. The reason is physical: a string's tangent plane holds one timelike direction (the sheet moves forward in time) and one spacelike direction (the sheet has extent along the string). A determinant built from one "minus" and one "plus" direction is negative, so the honest area element is $\sqrt{-\gamma}$, not $\sqrt{\gamma}$. The minus sign is not a convention we impose; it is Minkowski geometry reporting that the sheet is Lorentzian. Keeping it is what makes the string's proper area real and Lorentz-invariant.

## The build order

The module assembles the action in the order you would need to invent it, one note per step.

- 9.1 [[Worldsheet and induced metric]] — the map $X^\mu(\tau,\sigma)$ that paints the sheet into spacetime, and the **induced metric** $\gamma_{\alpha\beta}=\eta_{\mu\nu}\,\partial_\alpha X^\mu\partial_\beta X^\nu$, the ambient Minkowski metric *pulled back* onto the sheet's own $(\tau,\sigma)$ grid.
- 9.2 [[Proper area of the worldsheet]] — area as a Gram determinant, the Lorentzian sign flip to $\sqrt{-\gamma}$, and a dimensional argument fixing the action's coefficient at $T_0/c$.
- 9.3 [[Nambu-Goto action]] — the action $S=-\tfrac{T_0}{c}\int d\tau\,d\sigma\,\sqrt{-\gamma}$, why it is reparameterization invariant, and the check that a static string of length $a$ stores energy $T_0a$ (so $T_0$ really is tension).
- 9.4 [[Variation of the worldsheet area]] — varying the action produces two momentum densities, $\mathcal P^\tau_\mu$ (spacetime momentum carried per unit of string) and $\mathcal P^\sigma_\mu$ (spacetime momentum flowing along the string).
- 9.5 [[Bulk equations versus boundary terms]] — integration by parts splits the variation into a bulk law $\partial_\tau\mathcal P^\tau_\mu+\partial_\sigma\mathcal P^\sigma_\mu=0$ and endpoint terms, killed by Dirichlet (pinned end) or free (no momentum leaks out) conditions — the first sight of D-branes.

## The payoff

By the end of the module the classical string is stated in full: it sweeps out a surface of extremal proper area; that area is $\int d\tau\,d\sigma\,\sqrt{-\gamma}$, with $\gamma$ the determinant of the pulled-back Minkowski metric; the sign under the root flips because the sheet is part timelike, part spacelike; and varying the area gives a momentum-conservation law in the interior plus a choice of endpoint conditions at the edges. The nonlinear $\sqrt{-\gamma}$ is ugly to solve directly — later gauge choices tame it — but the geometry is clean, and it is the whole of classical string dynamics.

## Open questions

- The nonlinear $\sqrt{-\gamma}$ becomes a linear wave equation only after a gauge choice; deferred to [[Static gauge]], [[Fixing X-plus as worldsheet time]], and the light-cone modules.
- Mixed endpoint conditions become explicit brane geometry in [[Neumann versus Dirichlet conditions]] and [[D-branes (first appearance)]].
- A curved target spacetime replaces $\eta_{\mu\nu}$ by $G_{\mu\nu}(X)$ in the pullback (the sigma-model / Polyakov bridge), and an independent worldsheet metric gives the equivalent [[Polyakov action]].

## Exercise

Without notes, reconstruct the skeleton of this module and pin down the sign.

1. Write the embedding map and the induced metric $\gamma_{\alpha\beta}$ as a $2\times2$ matrix in the $(\dot X, X')$ basis, and compute its determinant $\gamma$.
2. Show $\gamma<0$ for a physical string, and state the resulting area element.
3. Write the Nambu–Goto action and name the one-line analogy to the point particle.
4. Say what $\mathcal P^\tau_\mu$ and $\mathcal P^\sigma_\mu$ measure and why the string's two ends need their own boundary conditions.

> [!success]- Solution
> **1. Map and induced metric.** The sheet is the image of $X^\mu(\tau,\sigma)$, with $\mu=0,1,\dots,d$; $\tau$ is the timelike label, $\sigma$ runs along the string. The tangent vectors are $\dot X^\mu=\partial_\tau X^\mu$ and $X'^\mu=\partial_\sigma X^\mu$, and the induced metric is their Gram matrix under the Minkowski dot product ($\eta_{\mu\nu}$, mostly-plus):
> $$\gamma_{\alpha\beta}=\eta_{\mu\nu}\,\partial_\alpha X^\mu\partial_\beta X^\nu=\begin{pmatrix}\dot X^2 & \dot X\cdot X'\\ \dot X\cdot X' & X'^2\end{pmatrix},\qquad \gamma=\det\gamma_{\alpha\beta}=\dot X^2X'^2-(\dot X\cdot X')^2.$$
>
> **2. Sign and area element.** The tangent plane holds one timelike and one spacelike direction. Sweep across it with $v(\lambda)=\dot X+\lambda X'$; the norm $v^2(\lambda)=X'^2\lambda^2+2(\dot X\cdot X')\lambda+\dot X^2$ is an upward parabola ($X'^2>0$) that dips below zero where the plane is timelike, so it has two distinct real roots and hence positive discriminant, $(\dot X\cdot X')^2-\dot X^2X'^2>0$. That quantity is exactly $-\gamma$, so $\gamma<0$. The proper area element is
> $$dA=\sqrt{-\gamma}\,d\tau\,d\sigma=\sqrt{(\dot X\cdot X')^2-\dot X^2X'^2}\;d\tau\,d\sigma,$$
> the Lorentzian cousin of the Euclidean $\sqrt{g}$.
>
> **3. Action and analogy.**
> $$S_{\mathrm{NG}}=-\frac{T_0}{c}\int d\tau\,d\sigma\,\sqrt{-\gamma}.$$
> Analogy: the particle extremizes worldline length $-mc\int ds$; the string extremizes worldsheet area. Length in one dimension up becomes area, and $mc$ becomes $T_0/c$. (Units check: area has units $L^2$, action $ML^2/T$, so the coefficient must be $M/T$ — and $T_0/c=\text{force}/\text{speed}$ has exactly those units. The static-string check confirms $T_0$ is the tension, since it stores energy $T_0a$.)
>
> **4. Momenta and endpoints.** $\mathcal P^\tau_\mu=\partial\mathcal L/\partial\dot X^\mu$ is the density, per unit $\sigma$, of spacetime momentum carried by the string; $\mathcal P^\sigma_\mu=\partial\mathcal L/\partial X'^\mu$ is the flux of that momentum along the string. Varying the action integrates by parts into a bulk law $\partial_\tau\mathcal P^\tau_\mu+\partial_\sigma\mathcal P^\sigma_\mu=0$ plus a leftover term evaluated at the two ends. That endpoint term does not vanish on its own for an open string, so each end needs its own condition: **Dirichlet** ($\delta X^\mu=0$, the end is pinned) or **free** ($\mathcal P^\sigma_\mu=0$, no momentum leaks out). A closed string identifies the two ends, so periodicity cancels the term and no endpoint condition is needed.
