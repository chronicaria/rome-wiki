---
title: Worldsheet and induced metric
number: "9.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, induced-metric]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A moving string sweeps a 2D surface in spacetime; the induced metric is the ruler you get by measuring that surface with the ambient spacetime's own dot product.

## A map and its ruler

Think of a paper map of the Earth. The map has its own flat grid — latitude/longitude squares. But real distances live on the round Earth. To measure a real distance from a map, you need a rule that converts "grid steps on the paper" into "meters on the globe." That rule is a metric, and it is *induced* on the map by the geometry of the sphere it depicts.

A string worldsheet is the same setup. We draw a flat $(\tau,\sigma)$ grid — pure bookkeeping labels — and a map $X^\mu$ paints each grid point into real spacetime. The induced metric is the conversion rule: it tells us the true spacetime interval corresponding to any step on the grid. Nothing new is invented; the ruler is inherited from Minkowski spacetime through the map. That inherited ruler is the single object every later formula in this module ($\sqrt{-\gamma}$, the Nambu–Goto action, the equations of motion) is built from.

## The embedding map

A point particle traces a 1D worldline; a string traces a 2D worldsheet. Label points on the sheet by two parameters,
$$ \tau\quad\text{and}\quad\sigma, $$
where $\tau$ advances "sheet-time" and $\sigma$ runs along the string at fixed $\tau$. The embedding is the collection of functions
$$ X^\mu(\tau,\sigma),\qquad \mu=0,1,\dots,d, $$
one per spacetime coordinate: grid point $(\tau,\sigma)$ lands at spacetime location $X^\mu$.

The parameters are **not** spacetime coordinates — they are just labels, like latitude/longitude on the map. Lines of constant $\tau$ are string snapshots (the whole string at one instant of sheet-time); lines of constant $\sigma$ are the worldlines of individually marked points along the string. For $\tau$ to deserve the name "time," physical time must actually advance as $\tau$ advances, i.e. $\partial X^0/\partial\tau\neq0$; otherwise the "grid time" would stand still in real spacetime.

## Tangent vectors

The two grid directions push forward through the map into two spacetime vectors:
$$ \dot X^\mu\equiv\frac{\partial X^\mu}{\partial\tau},\qquad
X'^\mu\equiv\frac{\partial X^\mu}{\partial\sigma}. $$
$\dot X$ is how the landing point moves when you nudge $\tau$; $X'$, when you nudge $\sigma$. These two vectors span the tangent plane to the worldsheet at each point — the plane the surface locally looks like.

For an ordinary tensile string this tangent plane is **Lorentzian**: it holds one timelike direction (the sheet marches forward in time) and one spacelike direction (the sheet has extent along the string). That single fact is what forces the sign surprise in [[Proper area of the worldsheet]].

## Pulling back the spacetime metric

Take a small step on the grid, $d\xi^\alpha=(d\tau,d\sigma)$. Its image in spacetime is the displacement
$$ dX^\mu=\partial_\alpha X^\mu\,d\xi^\alpha \qquad\text{(sum over }\alpha=\tau,\sigma). $$
Now measure that displacement with Minkowski's own ruler — the dot product $A\cdot B=\eta_{\mu\nu}A^\mu B^\nu$ with $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,\dots,+1)$ (mostly-plus signature):
$$
dX\cdot dX
=\eta_{\mu\nu}\,\partial_\alpha X^\mu\,\partial_\beta X^\nu\,d\xi^\alpha d\xi^\beta.
$$
The whole coefficient of $d\xi^\alpha d\xi^\beta$ is, by definition, the **induced metric**:
$$ \boxed{\;
\gamma_{\alpha\beta}
=\eta_{\mu\nu}\,\partial_\alpha X^\mu\,\partial_\beta X^\nu
=\partial_\alpha X\cdot\partial_\beta X\;}\tag{1}
$$
The content of $(1)$ is that the squared spacetime interval of a grid step is $\gamma_{\alpha\beta}\,d\xi^\alpha d\xi^\beta$. It is called **induced** because we chose no metric on the sheet by hand — we pulled Minkowski's $\eta_{\mu\nu}$ back through $X$. In differential-geometry shorthand, $\gamma=X^*\eta$ (the star is "pullback").

Two kinds of indices do two jobs: Greek $\alpha,\beta\in\{\tau,\sigma\}$ live on the 2D sheet; $\mu,\nu\in\{0,\dots,d\}$ live in the $(d{+}1)$-dimensional target spacetime. The map $X^\mu$ and the metric $\eta_{\mu\nu}$ do the translation between the two worlds.

## The $2\times2$ matrix

Written out in the $(\tau,\sigma)$ grid, $\gamma_{\alpha\beta}$ is the **Gram matrix** of the two tangent vectors — the table of their mutual dot products:
$$
\gamma_{\alpha\beta}
=
\begin{pmatrix}
\dot X\cdot\dot X & \dot X\cdot X' \\[2pt]
\dot X\cdot X' & X'\cdot X'
\end{pmatrix}
=
\begin{pmatrix}
\dot X^2 & \dot X\cdot X' \\[2pt]
\dot X\cdot X' & X'^2
\end{pmatrix}.\tag{2}
$$
Each entry has a plain geometric meaning:

- $\gamma_{\tau\tau}=\dot X^2$ — squared interval of a step along a $\tau$ grid line (negative, since that direction is timelike).
- $\gamma_{\sigma\sigma}=X'^2$ — squared length of a step along the string (positive, spacelike).
- $\gamma_{\tau\sigma}=\dot X\cdot X'$ — the skew: how far the two grid directions tilt away from perpendicular.

Its determinant is
$$ \gamma\equiv\det(\gamma_{\alpha\beta})
=\dot X^2X'^2-(\dot X\cdot X')^2.$$
Because the tangent plane carries one timelike and one spacelike direction, $\gamma<0$. Quick sanity check: in a basis where the two directions are orthogonal, $\gamma_{\alpha\beta}=\mathrm{diag}(-a^2,\,b^2)$ so $\gamma=-a^2b^2<0$; passing to the actual coordinate basis $(\dot X,X')$ multiplies $\gamma$ by the square of a change-of-basis Jacobian, which cannot flip its sign. (The clean $\gamma<0$ proof — a discriminant argument on all tangent directions — lives in [[Proper area of the worldsheet]].)

The real, Lorentz-invariant area density is therefore $\sqrt{-\gamma}$:
$$ \sqrt{-\gamma}=\sqrt{(\dot X\cdot X')^2-\dot X^2X'^2}.$$
This is the Lorentzian cousin of the familiar $\sqrt{g}$ area element for a spatial surface — same Gram-determinant formula, one flipped sign.

That is the full content of the induced metric: the spacetime dot product, restricted to the string's own surface and rewritten in the surface's $(\tau,\sigma)$ grid. It is the Gram matrix of two tangent vectors, its determinant is negative because the surface is part-time and part-space, and $\sqrt{-\gamma}$ is the honest area element the [[Nambu-Goto action]] then extremizes.

## Open questions

- Curved target spacetime replaces $\eta_{\mu\nu}$ by $G_{\mu\nu}(X)$ in the pullback $(1)$; that upgrade is the sigma-model / [[Polyakov action]] bridge.
- The induced metric can be locally nondegenerate ($\gamma<0$ everywhere) yet still resist a *global* worldsheet coordinate choice; static and light-cone gauges later confront that.

## Exercise

A static, straight open string of length $a$, in static gauge $X^0=c\tau$ with $\sigma$ chosen as arc length along it (we keep $c$ explicit):
$$ X^0=c\tau,\qquad X^1=\sigma\quad(0\le\sigma\le a),\qquad X^{2,\dots,d}=0. $$
Compute the full induced-metric matrix $\gamma_{\alpha\beta}$ from definition $(1)$, its determinant $\gamma$, and the area density $\sqrt{-\gamma}$. Check the sign of $\gamma$ against the Lorentzian claim, and identify what $\sqrt{-\gamma}\,d\tau\,d\sigma$ measures physically.

> [!success]- Solution
> Differentiating the embedding (only $\mu=0,1$ are nonzero):
> $$\dot X^\mu=(c,0,0,\dots),\qquad X'^\mu=(0,1,0,\dots).$$
> Dot products with mostly-plus $\eta=\mathrm{diag}(-1,+1,\dots)$:
> $$\dot X^2=\eta_{\mu\nu}\dot X^\mu\dot X^\nu=-c^2,\qquad X'^2=+1,\qquad \dot X\cdot X'=0.$$
> So the Gram matrix $(2)$ is diagonal:
> $$\gamma_{\alpha\beta}=\begin{pmatrix}-c^2 & 0\\ 0 & 1\end{pmatrix},\qquad
> \gamma=\det\gamma_{\alpha\beta}=(-c^2)(1)-0=-c^2.$$
> The determinant is negative, as promised for a Lorentzian tangent plane — here transparently, since one diagonal entry is $-c^2$ (timelike $\tau$ direction) and the other is $+1$ (spacelike $\sigma$ direction). The area density is
> $$\sqrt{-\gamma}=\sqrt{c^2}=c.$$
> Then $\sqrt{-\gamma}\,d\tau\,d\sigma=c\,d\tau\,d\sigma$: integrating over $\sigma\in[0,a]$ and a time span $\Delta\tau$ gives $c\,a\,\Delta\tau$, the proper (Minkowski) area of the flat spacetime strip swept by the resting string — a rectangle of spatial width $a$ and temporal height $c\,\Delta\tau=\Delta X^0$. This is exactly the $\sqrt{-\gamma}$ that [[Nambu-Goto action]] multiplies by $-T_0/c$ to get the action of a static string.
