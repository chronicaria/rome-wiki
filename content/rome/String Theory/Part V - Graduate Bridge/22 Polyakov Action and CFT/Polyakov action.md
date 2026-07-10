---
title: Polyakov action
number: "22.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, polyakov-cft]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The Polyakov action rewrites string dynamics as $D$ free scalar fields $X^\mu$ living on a worldsheet whose metric $h_{\alpha\beta}$ is itself a field to be varied — trading the ugly Nambu–Goto square root for a clean quadratic action, at the price of one extra (non-propagating) field.

## The one idea

Think of the string's worldsheet as a rubber sheet swept out in spacetime. Nambu–Goto measures its *area* directly — geometrically honest, but the area formula has a square root of derivatives buried in it, and square roots are poison for quantization.

Polyakov's move is to stop insisting the worldsheet metric equal the geometry the string actually has. Instead, lay down a **separate, freely adjustable metric** $h_{\alpha\beta}(\tau,\sigma)$ — a "reference grid" you paint on the sheet by hand — and let the action decide, through $h_{\alpha\beta}$'s equation of motion, how the grid should match the real geometry. The reward: with $h_{\alpha\beta}$ carrying the geometric information, the $X^\mu$ enter only quadratically. The worldsheet becomes $D$ ordinary free fields, and the whole quantum machinery of 2D field theory opens up.

This is the same trick as the einbein for the relativistic particle: introduce an auxiliary variable so the square root dissolves. The $X^\mu$ are scalar fields; $h_{\alpha\beta}$ is a metric with no dynamics of its own; varying $h_{\alpha\beta}$ hands you the constraints for free.

## The action

Let $h_{\alpha\beta}$ be an independent Lorentzian metric on the worldsheet, coordinates $\sigma^\alpha=(\tau,\sigma)$, with target-space dot product $A\cdot B=\eta_{\mu\nu}A^\mu B^\nu$ in mostly-plus signature $\eta=\mathrm{diag}(-,+,\dots,+)$. Then

$$
S_P=-\frac{1}{4\pi\alpha'}\int d^2\sigma\,\sqrt{-h}\;h^{\alpha\beta}\,\partial_\alpha X^\mu\,\partial_\beta X_\mu,
\tag{1}
$$

with $h\equiv\det h_{\alpha\beta}<0$ and $h^{\alpha\beta}$ the matrix inverse. Read it as a field theory: the $X^\mu(\tau,\sigma)$ are $D$ scalar fields on the two-dimensional worldsheet, and $\sqrt{-h}\,h^{\alpha\beta}$ is the machinery that tells those fields how to measure their own gradients. It is the flat free-scalar action $-\frac{1}{4\pi\alpha'}\int \eta^{\alpha\beta}\partial_\alpha X\cdot\partial_\beta X$ with $\eta^{\alpha\beta}$ promoted to the field $\sqrt{-h}\,h^{\alpha\beta}$.

The coefficient $1/(4\pi\alpha')$ is half of Nambu–Goto's, and it has to be, so that eliminating $h_{\alpha\beta}$ lands back exactly on $S_{\mathrm{NG}}=-\frac{1}{2\pi\alpha'}\int\sqrt{-\gamma}$. When $h_{\alpha\beta}$ solves its equation of motion, the contraction $h^{\alpha\beta}h_{\alpha\beta}=2$ (a $2\times2$ metric) supplies the missing factor of two; see the [Equivalence](#equivalence-to-nambu-goto) section. The coefficient looks wrong next to NG precisely because that $2$ is waiting to appear.

## Its symmetries

The action (1) has three *local* symmetries:

- **two reparametrizations** (worldsheet diffeomorphisms) $\sigma^\alpha\to\tilde\sigma^\alpha(\sigma)$;
- **one Weyl rescaling** $h_{\alpha\beta}\mapsto\Omega^2(\sigma)\,h_{\alpha\beta}$, with $X^\mu$ untouched (see [[Weyl invariance]]).

A symmetric $2\times2$ metric has three independent components, and three local symmetries can kill all three. So $h_{\alpha\beta}$ carries **no local propagating degrees of freedom** — it is pure gauge, and can be fixed to a flat reference metric ("conformal gauge"). The counting is the subject of [[Independent worldsheet metric]]; here it suffices that this is *why* the extra field costs nothing physical.

## Equation of motion for $X^\mu$

This is the action's own dynamics. Vary $X^\mu$ with $h_{\alpha\beta}$ held fixed. Only $\partial_\alpha X$ carries the variation, and each of the two $\partial X$ factors contributes equally:

$$
\delta S_P=-\frac{1}{4\pi\alpha'}\int d^2\sigma\,\sqrt{-h}\,h^{\alpha\beta}\big(2\,\partial_\alpha\delta X^\mu\big)\partial_\beta X_\mu
=-\frac{1}{2\pi\alpha'}\int d^2\sigma\,\sqrt{-h}\,h^{\alpha\beta}\,\partial_\alpha\delta X^\mu\,\partial_\beta X_\mu.
$$

Integrate by parts to strip the derivative off $\delta X^\mu$:

$$
\delta S_P=\frac{1}{2\pi\alpha'}\int d^2\sigma\,\delta X^\mu\,\partial_\alpha\!\big(\sqrt{-h}\,h^{\alpha\beta}\partial_\beta X_\mu\big)
-\frac{1}{2\pi\alpha'}\int d^2\sigma\,\partial_\alpha\!\big(\sqrt{-h}\,h^{\alpha\beta}\,\delta X^\mu\,\partial_\beta X_\mu\big).
$$

The second term is a total derivative — a boundary term. It vanishes for closed strings (periodicity in $\sigma$) and, for open strings, is killed by imposing Neumann or Dirichlet conditions at the endpoints (worked in the [Exercise](#exercise)). Demanding $\delta S_P=0$ for arbitrary $\delta X^\mu$ in the bulk gives

$$
\partial_\alpha\!\big(\sqrt{-h}\,h^{\alpha\beta}\,\partial_\beta X^\mu\big)=0.
\tag{2}
$$

This is the covariant free-field equation: a massless scalar on the curved worldsheet. In conformal gauge $\sqrt{-h}\,h^{\alpha\beta}=\eta^{\alpha\beta}$, the metric factor is constant and (2) collapses to the flat 2D wave equation $(-\partial_\tau^2+\partial_\sigma^2)X^\mu=0$ — the Weyl factor drops out because $\sqrt{-h}\,h^{\alpha\beta}$ is Weyl-invariant.

## Equation of motion for $h_{\alpha\beta}$: the constraints, for free

Now vary $h_{\alpha\beta}$ (equivalently $h^{\alpha\beta}$). Because $h_{\alpha\beta}$ appears in (1) with **no derivatives**, its equation of motion is purely algebraic — it constrains rather than propagates. Varying $\sqrt{-h}$ (via $\delta\sqrt{-h}=-\tfrac12\sqrt{-h}\,h_{\alpha\beta}\,\delta h^{\alpha\beta}$) and the explicit $h^{\alpha\beta}$ gives

$$
T_{\alpha\beta}\;\equiv\;\partial_\alpha X\cdot\partial_\beta X-\tfrac12\,h_{\alpha\beta}\,h^{\gamma\delta}\,\partial_\gamma X\cdot\partial_\delta X=0.
\tag{3}
$$

The full metric variation is carried out in [[Worldsheet stress tensor]]; $T_{\alpha\beta}$ is the worldsheet **stress tensor**. Two things to see immediately:

- The constraints are not an extra postulate: $T_{\alpha\beta}=0$ *is* the metric's equation of motion. In conformal gauge (3) reads $\dot X^2+X'^2=0$ and $\dot X\cdot X'=0$, i.e. $(\dot X\pm X')^2=0$ — the [[Virasoro constraints]], which in light-cone quantization had to be imposed by hand.
- The trace vanishes identically. Contracting (3) with $h^{\alpha\beta}$ and using $h^{\alpha\beta}h_{\alpha\beta}=2$ gives $h^{\alpha\beta}T_{\alpha\beta}=0$ with no reference to the equations of motion. A traceless stress tensor is the local signature of Weyl invariance, and the hallmark of a conformal theory.

## Equivalence to Nambu–Goto

Equation (3) says $h_{\alpha\beta}$ is proportional, point by point, to the induced metric $\gamma_{\alpha\beta}=\partial_\alpha X\cdot\partial_\beta X$: any solution has the form $h_{\alpha\beta}=f^2(\sigma)\,\gamma_{\alpha\beta}$ for some positive function $f^2$ (its indices must match $\gamma_{\alpha\beta}$, and only the scale is left free). In two dimensions the scale then cancels inside the action's combination,

$$
\sqrt{-h}\,h^{\alpha\beta}=f^2\sqrt{-\gamma}\cdot f^{-2}\gamma^{\alpha\beta}=\sqrt{-\gamma}\,\gamma^{\alpha\beta},
$$

so substituting back into (1), with $\gamma^{\alpha\beta}\gamma_{\alpha\beta}=2$,

$$
S_P\;\longrightarrow\;-\frac{1}{4\pi\alpha'}\int d^2\sigma\,\sqrt{-\gamma}\,\gamma^{\alpha\beta}\gamma_{\alpha\beta}
=-\frac{1}{2\pi\alpha'}\int d^2\sigma\,\sqrt{-\gamma}
=S_{\mathrm{NG}}.
$$

There is the promised factor of two: $\tfrac{1}{4\pi\alpha'}\cdot2=\tfrac{1}{2\pi\alpha'}$. Classically, Polyakov and Nambu–Goto are the same theory; the cancellation of the arbitrary scale $f^2$ *is* Weyl invariance in action. The full accounting lives in [[Polyakov vs Nambu-Goto]].

To restate the payoff: you paid for one auxiliary metric and bought three things: a quadratic (hence quantizable) action for the $X^\mu$, the Virasoro constraints delivered automatically as $h_{\alpha\beta}$'s equation of motion, and a new gauge symmetry (Weyl) that makes the gauge-fixed worldsheet a conformal field theory. That is the whole reason every modern treatment starts from $S_P$.

## Open questions

- Classical equivalence is settled above; **quantum** equivalence needs the path-integral measure and the Faddeev–Popov ghost determinant, the gateway to [[Faddeev-Popov ghosts]] and the critical dimension $D=26$.
- Fixing $h_{\alpha\beta}$ to a flat reference is a *local* statement. On higher-genus worldsheets a finite set of moduli survive gauge-fixing; see [[Moduli spaces]].

## Exercise

For an **open** string, $\sigma\in[0,\pi]$ with no periodicity, the boundary term in $\delta S_P$ does not automatically vanish. Working in conformal gauge ($\sqrt{-h}\,h^{\alpha\beta}=\eta^{\alpha\beta}$), extract the boundary term from the $X$-variation and determine the condition on the endpoints that kills it while leaving the string ends free to move (a **Neumann** condition). What is the geometric meaning of that condition?

> [!success]- Solution
> In conformal gauge the $X$-variation is
> $$\delta S_P=\frac{1}{2\pi\alpha'}\int d\tau\,d\sigma\,\delta X^\mu\,(-\partial_\tau^2+\partial_\sigma^2)X_\mu-\frac{1}{2\pi\alpha'}\int d\tau\,d\sigma\,\partial_\alpha\big(\eta^{\alpha\beta}\,\delta X^\mu\,\partial_\beta X_\mu\big).$$
> The total-derivative term is a sum over $\alpha=\tau,\sigma$. The $\tau$ piece integrates to a $\tau$-boundary (initial/final time slices), where we hold $\delta X^\mu=0$ as usual. The surviving piece is the $\sigma$-derivative, evaluated at the two spatial endpoints:
> $$-\frac{1}{2\pi\alpha'}\int d\tau\,\Big[\delta X^\mu\,\partial_\sigma X_\mu\Big]_{\sigma=0}^{\sigma=\pi}$$
> (the $+$ sign from $\eta^{\sigma\sigma}=+1$ absorbed into the bracket orientation). For this to vanish for arbitrary bulk variations $\delta X^\mu$, we need at each end
> $$\partial_\sigma X^\mu\big|_{\sigma=0}=\partial_\sigma X^\mu\big|_{\sigma=\pi}=0,$$
> the **free (Neumann) boundary condition**. (Alternatively $\delta X^\mu=0$ at the ends — a Dirichlet condition pinning the endpoint, the seed of D-branes — but that fixes the endpoint rather than freeing it.)
>
> Geometric meaning: $\partial_\sigma X^\mu$ is the spatial tangent to the string. Setting it to zero at the ends says no momentum flows off the end of the string — the endpoints are free and move at the speed of light, transverse to the string. The endpoints are not tied to anything.
