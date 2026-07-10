---
title: Visualizing string charge
number: "19.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, string-charge]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

String charge is a current running down a wire, not charge smeared along a line: a divergenceless vector that cannot stop in empty space, so strings close, run to infinity, or end only where something else picks up the current.

You count a point charge by *enclosing* it in a sphere and measuring the flux out; you count a string by *linking* it with a loop and measuring the circulation around. Same topological idea, one dimension up. This is the geometric picture behind [[Fundamental string charge]], and it turns the open-string endpoint into a genuine puzzle for [[Endpoint charge]].

## Why "current," not "line charge"

From [[Fundamental string charge]] the charge density $\vec j^{\,0}$ is supported only on the string, is a vector pointing *along* it, and obeys

$$\nabla\cdot\vec j^{\,0}=0. \tag{1}$$

These are exactly the properties of a steady current in magnetostatics. There, charge conservation $\partial_t\rho+\nabla\cdot\vec j=0$ with a time-independent $\rho$ forces $\nabla\cdot\vec j=0$: current in equals current out of every little box. Here $\nabla\cdot\vec j^{\,0}=0$ holds even for *moving* strings, so string charge is always magnetostatic in character.

So the string is a wire carrying current down its length, not a smear of static charge sitting on it. A divergenceless current has nowhere to dump itself; like an incompressible flow, its lines cannot terminate. A real current-carrying wire either closes into a loop or runs off to infinity, and the string inherits the same constraint, before D-branes enter:

> String-charge conservation forces every string to be a closed loop or infinitely long.

A string that simply *ended* in empty space would be a current that stops: the flow lines would have a source or sink at the endpoint, violating (1). A string *can* end on a D-brane, but only because electric flux on the brane picks up the current where the string drops it, the resolution in [[Endpoint charge]].

## The dual "magnetic" field: string charge is Ampère's law

Work in four spacetime dimensions with static strings, so the purely spatial current $j^{ik}=0$. The [[Kalb-Ramond field]] equation $\partial_\rho H^{\mu\nu\rho}=\kappa^2 j^{\mu\nu}$ then splits into a trivial piece and one live equation,

$$\partial_l H^{0kl}=\kappa^2\,j^{0k}. \tag{2}$$

The object $H^{0kl}$ is antisymmetric in its two spatial indices $k,l$, so in three spatial dimensions it has exactly three independent components. Package them as a vector $\vec B_H$:

$$H^{0kl}=\epsilon^{kln}B_{H\,n},\qquad \epsilon^{123}=1. \tag{3}$$

Substituting (3) into (2) and using $\epsilon^{kln}\partial_l B_{H\,n}=(\nabla\times\vec B_H)_k$ gives

$$\boxed{\;\nabla\times\vec B_H=\kappa^2\,\vec j^{\,0}\;} \tag{4}$$

This is Ampère's law: a "magnetic" field $\vec B_H$ curling around the current $\kappa^2\vec j^{\,0}$. The Kalb–Ramond field strength of a static string has been repackaged as the magnetic field of a wire, so magnetostatics intuition transfers wholesale. $\vec B_H$ circulates around the string exactly as a real $\vec B$ circulates around a current-carrying wire.

Integrate (4) over a surface $S$ bounded by a curve $\Gamma$ and apply Stokes' theorem:

$$\frac{1}{\kappa^2}\oint_\Gamma\vec B_H\cdot d\vec\ell=\int_S\vec j^{\,0}\cdot d\vec a. \tag{5}$$

This turns "no loose ends" into a theorem. The left side depends only on the curve $\Gamma$, while the right side is a surface integral, so consistency demands that its value not depend on which surface $S$ caps $\Gamma$. That independence is precisely $\nabla\cdot\vec j^{\,0}=0$: two surfaces sharing the boundary $\Gamma$ enclose a volume, and the difference of their fluxes is $\int\nabla\cdot\vec j^{\,0}=0$. If a string ended in empty space, $\vec j^{\,0}$ would have a source there, the flux would jump depending on which side of the endpoint the surface passed, and (5) would be contradictory. One can read the same fact off (4) directly: $\nabla\cdot(\nabla\times\vec B_H)=0$ identically forces $\kappa^2\nabla\cdot\vec j^{\,0}=0$, so the consistency of the curl equation *is* the conservation law.

## Counting strings: the string number $\mathcal N$

The circulation of $\vec B_H$ around a loop counts the strings threading it. Define

$$\tfrac12\,\mathcal N\equiv\frac{1}{\kappa^2}\oint_\Gamma\vec B_H\cdot d\vec\ell=\int_S\vec j^{\,0}\cdot d\vec a. \tag{6}$$

$\mathcal N$ is the signed number of strings that the loop $\Gamma$ **links**, the string analog of the charge $Q$ enclosed by a Gaussian surface. Check it on the simplest case, one infinite string along $x^1$ with orientation $f'>0$, where $j^{01}=\tfrac12\,\delta(x^2)\,\delta(x^3)$. Thread it with a loop $\Gamma$ in a constant-$x^1$ plane, oriented so its surface normal points along $+x^1$:

$$\tfrac12\,\mathcal N=\int_S j^{01}\,dx^2\,dx^3=\tfrac12\int_S\delta(x^2)\,\delta(x^3)\,dx^2\,dx^3=\tfrac12\quad\Longrightarrow\quad\mathcal N=1. \tag{7}$$

One string linked, $\mathcal N=1$, as it must be. The two factors of $\tfrac12$ cancel to give a clean *integer* count: one is built into $j^{01}$ (the $\tfrac12$ in the string current, tracked in [[Fundamental string charge]]), the other is in the definition $\tfrac12\mathcal N$, and that cancellation is the whole reason the $\tfrac12$ was carried along. Orientation is physical here: reverse the string and $j^{01}$ flips sign, so a loop linking two oppositely oriented strings gets $\mathcal N=0$, the contributions canceling just as $\pm$ charges cancel inside a Gaussian surface.

Linking is not special to three dimensions; only the vector $\vec B_H$ is. In $d$ spatial dimensions a string is a line, its transverse space is $(d-1)$-dimensional, and the surface surrounding those transverse directions is a sphere $S^{d-2}$. For $d=3$ that is the $S^1$ loop above; for $d=4$, a string along $x^1$ is linked by the 2-sphere
$$(x^2)^2+(x^3)^2+(x^4)^2=R^2\quad\text{at fixed }x^1,$$
which you cannot shrink to a point without dragging it through the string. That inability to pull the sphere off is what *linking* means, in any dimension.

## The dictionary: enclosing vs. linking

| Maxwell point charge | Fundamental string |
|---|---|
| charge density $\rho=j^0$ (scalar) | charge density $\vec j^{\,0}$ (vector, along the string) |
| couples to $A_\mu$ (1 index) | couples to $B_{\mu\nu}$ (2 indices) |
| **enclosed** by a sphere $S^2$ | **linked** by a loop $S^1$ |
| $Q=\oint_{S^2}\vec E\cdot d\vec a$ (flux) | $\tfrac12\mathcal N=\tfrac{1}{\kappa^2}\oint_{S^1}\vec B_H\cdot d\vec\ell$ (circulation) |
| can't remove without puncturing $S^2$ | can't remove without cutting the $S^1$ |

The last two rows carry the whole content: **enclosing a point and linking a line are the same topological statement, shifted up one dimension in the charged object.** A point charge is trapped inside a codimension-one sphere; a string is trapped inside a loop threaded around it. This is why the string is the honest one-dimensional generalization of a charged particle, and why its natural gauge field carries one extra index. Measure a particle by the flux it pushes *out*; measure a string by the field that swirls *around*.

## Open questions

- The one-string calculation (7) checks that $\mathcal N$ counts links. The general statement, that $\mathcal N$ is invariant under smooth deformations of $\Gamma$ that do not cross a string, is a linking-number and homology fact taken on faith here.
- $\vec B_H$ as a vector is a four-dimensional luxury: it needs $H^{0kl}$ to have exactly three components. In general $D$ the same content lives in the two-form $H$ itself, with the linking sphere an $S^{D-3}$ and the circulation an integral of $H$ over it.
- With D-branes present, "no endpoints" softens to "no *uncancelled* endpoints": electric flux on the brane worldvolume carries exactly the current the string drops at its end. That handoff is [[Endpoint charge]] and [[Maxwell fields on branes]].

## Exercise

Two parallel infinite strings run along the $x^1$ axis (three spatial dimensions). String A has orientation $f'>0$; string B is *antiparallel*, $f'<0$. A loop $\Gamma$ in a constant-$x^1$ plane, with normal along $+x^1$, encircles **both**.

(a) Write $\vec j^{\,0}$ for the pair and compute $\mathcal N$ from (6).
(b) Now reverse only $\Gamma$'s orientation (normal along $-x^1$), still encircling both. What is $\mathcal N$? State the general rule your two answers illustrate.

> [!success]- Solution
> **(a)** For a single string along $x^1$ the current is $j^{01}=\tfrac12\,\mathrm{sgn}(f')\,\delta(x^2)\,\delta(x^3)$, with the sign set by orientation. Place A at the transverse origin and B at transverse position $(b_2,b_3)$. Superposing:
> $$j^{01}=\tfrac12\,\delta(x^2)\delta(x^3)\;+\;\bigl(-\tfrac12\bigr)\,\delta(x^2-b_2)\delta(x^3-b_3).$$
> With the normal along $+x^1$, equation (6) gives
> $$\tfrac12\,\mathcal N=\int_S j^{01}\,dx^2\,dx^3=\tfrac12-\tfrac12=0\quad\Longrightarrow\quad\mathcal N=0.$$
> The oppositely oriented strings contribute $+1$ and $-1$, and they cancel. The two current-wires' $\vec B_H$ fields cancel their net circulation around $\Gamma$, like two antiparallel wires carrying equal and opposite currents.
>
> **(b)** Reversing $\Gamma$ flips the sign of the surface normal, hence of $d\vec a$ and of every term in the integral: each string's contribution changes sign ($+1\to-1$ and $-1\to+1$). The sum is still $0$, so $\mathcal N=0$ again.
>
> **Rule.** $\mathcal N$ is the *signed* count of linked strings: a string counts $+1$ or $-1$ according to whether its orientation agrees with the loop's, and reversing the loop flips the sign of the whole count. Only the *relative* orientation of string and loop is physical. Antiparallel strings threaded by one loop are invisible to $\mathcal N$, exactly as $\pm q$ inside a Gaussian surface give zero enclosed charge.
