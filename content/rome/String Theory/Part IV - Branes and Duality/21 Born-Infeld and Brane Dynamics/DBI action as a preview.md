---
title: DBI action as a preview
number: "21.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, dbi-action]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The Dirac–Born–Infeld (DBI) action is the single Lagrangian for a D-brane that captures both the gauge field living on it and the brane's own shape: replace the flat metric $\eta_{mn}$ inside the Born–Infeld determinant by the pullback metric $\gamma_{mn}$, and you get $S_{\rm DBI}=-T_p\int d^{p+1}\xi\,\sqrt{-\det(\gamma_{mn}+2\pi\alpha'F_{mn})}$.

## A membrane carrying a field

A D$p$-brane is a relativistic membrane — a sheet in spacetime whose energy is its tension times its proper volume. Two things happen to it. It moves and bends: wiggle the sheet and its proper volume changes, and the action penalizes that like a soap film. And it carries an electric field: open strings end on the brane, and their massless mode is a photon that lives on the sheet. That gauge field is not quite Maxwell — string theory caps it at a maximal value — and its energy is the Born–Infeld square root.

DBI does both at once. Each half is already the square root of a determinant, so the two merge into one: the bending enters through the pullback metric $\gamma$, the gauge field through $2\pi\alpha' F$, and they sit inside the same determinant. A D-brane is a tension-times-volume membrane with a bounded electric field painted on it, and DBI measures its proper volume with a metric that knows about both.

## Two kinds of field live on a brane

Quantizing an open string with endpoints on a D$p$-brane (back in [[Endpoint charge|module 19]]) gave two massless world-volume fields:

- a gauge field $A_m$, $m=0,\dots,p$ — a photon that propagates along the brane;
- $(d-p)$ scalars $Y^a$, $a=p+1,\dots,d$ — one for each direction transverse to the brane.

The scalars are not decoration. Their values are where the brane sits in the transverse directions, and their fluctuations are the brane bending and moving. Born–Infeld (in [[Born-Infeld action]]) described only the gauge field, with the brane held rigid and flat. DBI turns the scalars on too.

## The pullback metric: how a brane feels geometry

A point particle's action is $-m\int ds$ = (mass) $\times$ (proper length of its worldline). A brane's is the natural generalization, $-T_p\times$(proper world-volume). To measure proper volume on a curved, moving sheet you need the metric induced on it — the pullback of the spacetime metric:

$$ \gamma_{mn} = \frac{\partial X^\mu}{\partial\xi^m}\frac{\partial X^\nu}{\partial\xi^n}\,\eta_{\mu\nu}, \tag{1}$$

where $\xi^m$ are coordinates painted on the world-volume and $X^\mu(\xi)$ is the brane's embedding in spacetime (mostly-plus signature). This is the spacetime metric as experienced on the brane: it records how on-brane distances stretch when the brane tilts or curves. A flat static brane aligned with the axes gives $\gamma_{mn}=\eta_{mn}$; bend it and $\gamma$ departs from $\eta$. The pure-geometry action $-T_p\int\sqrt{-\det\gamma}$ is the Dirac action, the brane version of Nambu–Goto.

To make this concrete, use static gauge: name the world-volume coordinates so they coincide with the brane-parallel spacetime coordinates, and let the transverse position be the scalar fields,

$$ X^m(\xi)=\xi^m\ \ (m=0,\dots,p),\qquad X^a(\xi)=Y^a(\xi)\ \ (a=p+1,\dots,d). $$

The parallel derivatives are then $\partial X^n/\partial\xi^m=\delta^n_m$, while the transverse ones are $\partial X^a/\partial\xi^m=\partial_m Y^a$, so (1) splits into a parallel and a transverse piece:

$$ \gamma_{mn}=\underbrace{\eta_{mn}}_{\text{parallel}}+\underbrace{\partial_m Y^a\,\partial_n Y^a}_{\text{transverse, }\delta_{ab}\text{ summed}}. \tag{2}$$

The transverse index $a$ is raised and lowered with $+\delta_{ab}$ because transverse directions are spacelike. So the scalars enter $\gamma$ as the gradient of the brane's transverse position: bend the brane sharply and $\partial Y$ is large and $\gamma$ swells.

## Putting it together: the DBI action

Born–Infeld supplied $\eta_{mn}+2\pi\alpha'F_{mn}$; Dirac supplies $\gamma_{mn}$. Since both are the same square-root-of-a-determinant, combine them by the single replacement $\eta\to\gamma$:

$$ \boxed{\;S_{\rm DBI} = -T_p\int d^{p+1}\xi\,\sqrt{-\det\big(\gamma_{mn} + 2\pi\alpha'\,F_{mn}\big)}\;}. \tag{3}$$

The determinant now mixes a symmetric part ($\gamma_{mn}$, the geometry) and an antisymmetric part ($2\pi\alpha'F_{mn}$, the gauge field). Two limits recover the two halves:

- $F=0$ (brane free to move, no gauge field): $S=-T_p\int\sqrt{-\det\gamma}$, the Dirac action.
- $\gamma=\eta$ (flat static brane, gauge field on): $S=-T_p\int\sqrt{-\det(\eta+2\pi\alpha'F)}$, the Born–Infeld action of [[Born-Infeld action]].

One check pins down that the scalars really encode motion. Take a rigid D-brane sliding at constant velocity $v$ along one transverse direction, $Y^a(\xi)=v\,\xi^0$ ($\hbar=c=1$), so $\partial_0 Y^a=v$ and every other derivative vanishes. By (2) only the time-time component shifts, $\gamma_{00}=-1+v^2$, with $\gamma_{ij}=\delta_{ij}$; then $\det\gamma=-(1-v^2)$ and

$$ \mathcal L = -T_p\sqrt{-\det\gamma}=-T_p\sqrt{1-v^2}. $$

This is the relativistic point-particle Lagrangian $-m\sqrt{1-v^2}$ (restore units and it reads $-mc^2\sqrt{1-v^2/c^2}$), with tension in place of mass. The scalar's time-derivative plays the role of velocity, so the scalars are the brane's position and their kinetic energy is its motion.

The weak-field expansion also fixes the natural normalization of the two fields. Expand (3) for small $\partial Y$ and small $F$, using $\sqrt{-\det(\eta+M)}=1+\tfrac12\eta^{mn}M_{mn}^{\rm sym}-\tfrac14\,\mathrm{tr}\,(\eta^{-1} M)^2+\cdots$:

$$ \mathcal L = -T_p\Big(1+\tfrac12\,\partial_m Y^a\partial^m Y^a+\tfrac{(2\pi\alpha')^2}{4}F_{mn}F^{mn}+\cdots\Big). $$

The gauge term carries a prefactor $T_p(2\pi\alpha')^2$; the scalar term does not. Defining $\phi^a\equiv Y^a/(2\pi\alpha')$ pulls the same $T_p(2\pi\alpha')^2$ in front of both, so the photon and the scalars share one gauge coupling — the natural normalization for the world-volume field theory.

## Where the DBI action comes from

This action is derived, not guessed, by two independent routes.

1. T-duality. The pure-electric and pure-magnetic constant-field cases were matched to a moving and a tilted dual brane, and those relativistic square roots fix the Born–Infeld determinant (see [[Electric and magnetic fields on D-branes]]). Letting the brane genuinely move fixes the $\gamma$ part the same way — the moving-brane check above is exactly that argument in miniature.
2. Worldsheet consistency. Treat $A_m(X)$ as a coupling on the boundary of the open-string worldsheet. Demanding that the quantum theory stay conformal — that its one-loop beta function vanish — forces $F$ to obey

$$ \partial_n F_{mk}\left[\frac{1}{1-(2\pi\alpha')^2 F^2}\right]^{mn}=0. \tag{4}$$

This is not Maxwell's $\partial_m F^{mn}=0$: the bracket is the field-dependent inverse that appears when you vary the Born–Infeld square root, so (4) is the Born–Infeld equation of motion. Turning on the scalars the same way promotes BI to DBI. The brane action is forced on us by quantum consistency of the open string — the worldsheet refuses to stay conformal unless the fields obey the DBI equations.

Route 2 is exact only for constant $F$. Gradients $\partial F$ bring in higher-loop terms — derivative corrections that DBI, built from $F$ and $\gamma$ with no $\partial F$, cannot contain. DBI is the leading term of an $\alpha'$ expansion of the open-string effective action, dominant when fields vary slowly on the string scale.

## Where this points next

- The brane is now a dynamical object. With the scalars turned on it has its own kinetic energy, so it is a genuine degree of freedom rather than a fixed boundary condition. Its tension, oscillations, and interactions all follow from $S_{\rm DBI}$.
- A non-abelian generalization awaits. For a stack of $N$ coincident branes the $U(1)$ becomes $U(N)$; ordering $\det$ against $\mathrm{Tr}$ is genuinely subtle (Tseytlin's symmetrized-trace prescription) and is beyond first-pass scope.
- A closed-string background modifies the action. It also carries the dilaton ($T_p\to T_p e^{-\Phi}$) and the Kalb–Ramond field, which enters through the gauge-invariant combination $P[B]_{mn}+2\pi\alpha'F_{mn}$ inside the determinant — a constant $B$-field acts just like a constant $F$ on the brane.

## Open questions

- The scalar term was obtained from the pullback in static gauge, not from an open-string boundary beta function. The direct sigma-model derivation (Leigh) is deferred to a later CFT pass.
- Equation (2) is the flat-background, static-gauge form. The general case uses the full pullback of a curved spacetime metric, and with a Kalb–Ramond field the determinant entry becomes $P[B]_{mn}+2\pi\alpha'F_{mn}$.
- The structure of the derivative corrections beyond DBI ($\partial F$, $\partial^2 Y$) is an active subject, not settled at this level.

## Exercise

A rigid D$p$-brane tilts rather than moves: give one transverse scalar a static displacement that grows linearly along a world-volume spatial direction, $Y^a(\xi)=s\,\xi^1$ (constant slope $s$, no time dependence, $F=0$). Compute $\sqrt{-\det\gamma}$ and interpret the result. Contrast the sign of the effect with the moving-brane case $Y^a=v\,\xi^0$ from the note.

> [!success]- Solution
> With $Y^a=s\,\xi^1$ the only nonzero derivative is $\partial_1 Y^a=s$, so by (2) the pullback (take $p\ge1$) is
> $$ \gamma_{mn}=\eta_{mn}+\partial_m Y^a\,\partial_n Y^a,\qquad \gamma_{11}=1+s^2, $$
> with every other component equal to $\eta_{mn}$. The metric is diagonal: $\gamma_{00}=-1$, $\gamma_{11}=1+s^2$, and $\gamma_{ii}=1$ for the remaining spatial directions. Hence
> $$ \det\gamma=(-1)(1+s^2)(1)\cdots(1)=-(1+s^2),\qquad \sqrt{-\det\gamma}=\sqrt{1+s^2}. $$
> The action density is $\mathcal L=-T_p\sqrt{1+s^2}$: tilting the brane raises its energy, because a sloped sheet has more proper area per unit coordinate range — the factor $\sqrt{1+s^2}$ is exactly the arc-length stretch of a line of slope $s$.
>
> The signs come straight from the signature. A spatial gradient lands in a spacelike $\gamma_{11}=1+s^2$, giving $\sqrt{1+s^2}\ge1$ — a cost. A time gradient (motion) lands in the timelike $\gamma_{00}=-1+v^2$, giving $\sqrt{1-v^2}\le1$ — a relativistic slowdown capped at $v=1$. Same pullback formula (2); the mostly-plus signature flips $+s^2$ (magnetic-like, tilt) to $-v^2$ (electric-like, boost). This is the geometric echo of the $1+(2\pi\alpha'B)^2$ versus $1-(2\pi\alpha'E)^2$ split in [[Electric and magnetic fields on D-branes]].
