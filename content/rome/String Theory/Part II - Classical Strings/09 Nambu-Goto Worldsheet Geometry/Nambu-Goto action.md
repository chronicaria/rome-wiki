---
title: Nambu-Goto action
number: "9.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, nambu-goto]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A classical string sweeps out the two-dimensional surface of stationary (extremal) proper area in spacetime, and the Nambu–Goto action is minus (tension/$c$) times that area: $S=-\frac{T_0}{c}\int d\tau\,d\sigma\,\sqrt{-\gamma}$.

## From length to area

A point particle, left alone, travels the worldline of **longest proper time** — a straight line in spacetime. Its action is $-mc\int ds$, and extremizing it just says "go straight." A string lifts this one dimension up. It sweeps out a 2D **worldsheet** and extremizes the natural invariant of a surface: not length but **area**. A free string therefore sweeps an *extremal surface in spacetime* — a soap film stretched across its boundary, except the film lives in Minkowski space, so "area" carries a Lorentzian sign flip that turns the extremum into a saddle rather than a strict minimum.

The only new ingredient is the constant out front. Area has units of length$^2$; action needs units of $ML^2/T$. The fix is to multiply by something with units of $M/T$, and the string's **tension** $T_0$ (a force, units $ML/T^2$) divided by $c$ does exactly that: $[T_0/c]=M/T$. That constant is what makes the string a *physical* stretched object rather than an abstract surface. The minus sign is fixed by physics, not by dimensions: as with the particle's $-mc\int ds$, it is the choice that gives a stretched string positive energy — the static check below makes this concrete.

## The action

The proper-area element of the worldsheet, from [[Proper area of the worldsheet]], is
$$ dA=d\tau\,d\sigma\sqrt{(\dot X\cdot X')^2-\dot X^2X'^2}, \qquad
\dot X^\mu\equiv\frac{\partial X^\mu}{\partial\tau},\quad
X'^\mu\equiv\frac{\partial X^\mu}{\partial\sigma}. $$
Multiplying by $-T_0/c$ gives the **Nambu–Goto action**:
$$ \boxed{\;
S=-\frac{T_0}{c}\int_{\tau_i}^{\tau_f}d\tau\int_0^{\sigma_1}d\sigma\,
\sqrt{(\dot X\cdot X')^2-\dot X^2X'^2}\;}\tag{1}
$$
The integrand is the local proper area swept per unit parameter rectangle; the whole integral is the total worldsheet area in the physical (proper) metric, not in the arbitrary parameter grid.

Dot products use the Minkowski metric $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,\dots,+1)$ (mostly-plus signature), so $\dot X^2<0$ for a timelike $\tau$-direction and $X'^2>0$ for a spacelike step along the string. Then $-\dot X^2X'^2>0$, both terms under the root are nonnegative, and the square root is real. The discriminant argument in [[Proper area of the worldsheet]] covers general parameterizations, where $\dot X$ alone need not be timelike — only the tangent *plane* must hold both signatures.

## Induced-metric form

The two tangent vectors $\dot X^\mu, X'^\mu$ pull the ambient metric back onto the sheet, giving the **induced metric** from [[Worldsheet and induced metric]]:
$$ \gamma_{\alpha\beta}=\partial_\alpha X\cdot\partial_\beta X
=\begin{pmatrix}\dot X^2 & \dot X\cdot X'\\[2pt] \dot X\cdot X' & X'^2\end{pmatrix},
\qquad
\gamma\equiv\det(\gamma_{\alpha\beta})=\dot X^2X'^2-(\dot X\cdot X')^2. $$
The quantity under the root in (1) is exactly $-\gamma$, so the action collapses to its compact geometric form:
$$ \boxed{\;
S=-\frac{T_0}{c}\int d\tau\,d\sigma\,\sqrt{-\gamma}\;}\tag{2}
$$
Why $\sqrt{-\gamma}$ and not $\sqrt{\gamma}$? The tangent plane of a real string history has one timelike and one spacelike direction, so its Gram determinant is negative — the Lorentzian echo of the Euclidean $\sqrt{g}$ surface-area element. The minus under the root is not inserted by hand; it is forced by the signature.

Form (2) exposes the action's deepest property: it depends only on the *embedded surface*, not on the coordinate grid $(\tau,\sigma)$ we happen to draw on it.

## Reparameterization invariance

Redraw the grid: write $\xi^\alpha=(\tau,\sigma)$ and pass to new parameters $\tilde\xi^\alpha(\xi)$. The induced metric is a tensor (a pullback), so it transforms with one Jacobian at each index:
$$ \gamma_{\alpha\beta}
=\tilde\gamma_{\kappa\lambda}\,\frac{\partial\tilde\xi^\kappa}{\partial\xi^\alpha}
\frac{\partial\tilde\xi^\lambda}{\partial\xi^\beta}
\;\Longrightarrow\;
\sqrt{-\gamma}=\left|\det\frac{\partial\tilde\xi}{\partial\xi}\right|\sqrt{-\tilde\gamma}. $$
The measure carries the *inverse* factor, $d\tau\,d\sigma=\left|\det\frac{\partial\xi}{\partial\tilde\xi}\right|d\tilde\tau\,d\tilde\sigma$. The two Jacobians cancel, so $\sqrt{-\gamma}\,d\tau\,d\sigma$ is invariant and $S$ is unchanged. This is the identical determinant-vs-Jacobian cancellation that makes ordinary surface area in multivariable calculus independent of the parameters used — here applied one metric-sign flip deeper.

Consequence: the parameters $(\tau,\sigma)$ carry no physics; only the surface does. That freedom is exactly what later **gauge choices** ([[Static gauge]], [[Light-cone gauge]]) exploit to tame the nonlinear equations of motion without changing the physical string.

## Normalization check: the static stretched string

Dimensions force the coefficient to be $T_0/c$, but they cannot tell us that the symbol $T_0$ *is* the tension. One explicit calculation nails it. Take a straight string pinned from $x^1=0$ to $x^1=a$, in static gauge:
$$ X^0=c\tau,\qquad X^1=f(\sigma),\qquad X^{2},\dots,X^{d}=0,\qquad
f(0)=0,\;\; f(\sigma_1)=a,\;\; f'>0. $$
Here $f$ merely relabels points on the *same* segment. The tangent products are
$$ \dot X^2=-c^2,\qquad X'^2=(f')^2,\qquad \dot X\cdot X'=0, $$
so the root becomes $\sqrt{(0)-(-c^2)(f')^2}=c\,f'$ — manifestly positive, a clean sign check on the whole $\sqrt{-\gamma}$ construction. Then
$$
S=-\frac{T_0}{c}\int d\tau\,d\sigma\,c\,f'
=-T_0\int d\tau\,[f(\sigma_1)-f(0)]
=-T_0\,a\int d\tau.
$$
The $\sigma$-integral of the total derivative $f'$ collapsed to the endpoint values — so the answer is independent of the parameterization $f$, a live demonstration of reparameterization invariance.

Static gauge identifies $\tau$ with coordinate time $t$ (since $X^0=ct=c\tau$), so this is $S=\int dt\,L$ with a static Lagrangian $L=-V$ (no kinetic energy); reading off $L=-T_0 a$ gives
$$ \boxed{\;V=T_0\,a\;}. $$
The stored energy grows **linearly** with length: stretch the string by $\Delta a$ and it costs $T_0\,\Delta a$ of energy — the defining property of a constant tension $T_0$. This is what fixes the symbol as tension and, at the same time, forces the overall **minus sign**: with the opposite sign the stretched string would have *negative* potential energy and want to grow without bound.

Dividing the energy by length and by $c^2$ gives a rest mass per unit length:
$$ \mu_0=\frac{V}{a\,c^2}=\frac{T_0}{c^2}. $$
All of the string's mass is stored tension energy — a relativistic string is, in this sense, made of pure tension. A guitar string has mass whether or not it is under tension; a relativistic string has mass *only because* it is under tension. This is what makes the vibrating string a spectrum-generating machine: excite it and you add energy, hence mass, so a single string produces a whole tower of particle masses.

## Particle-to-string dictionary

The action is easiest to remember as a one-dimension-up lift of the point particle:

| | Point particle | String |
|---|---|---|
| swept object | worldline (1D) | worldsheet (2D) |
| parameters | $\tau$ | $\tau,\sigma$ |
| map | $x^\mu(\tau)$ | $X^\mu(\tau,\sigma)$ |
| induced metric | $\dot x^2$ (one number) | $\gamma_{\alpha\beta}$ ($2\times2$) |
| invariant measure | proper length $ds=\sqrt{-\dot x^2}\,d\tau$ | proper area $\sqrt{-\gamma}\,d\tau\,d\sigma$ |
| coefficient | $mc$ | $T_0/c$ |
| action | $-mc\int ds$ | $-\frac{T_0}{c}\int\sqrt{-\gamma}\,d\tau\,d\sigma$ |

Even the particle fits the determinant pattern: its "induced metric" is the single number $\dot x^2$, and $\sqrt{-\det}$ reduces to $\sqrt{-\dot x^2}$. Nambu–Goto is that same geometric idea, promoted from a curve to a surface.

## The $\alpha'$ normalization (a forward pointer)

Later notes trade the tension for the **slope parameter** $\alpha'$ (units $[\alpha']=L^2$) through
$$ \frac{T_0}{\hbar c}=\frac{1}{2\pi\alpha'}, $$
and in natural units ($\hbar=c=1$) the action becomes $S=-\frac{1}{2\pi\alpha'}\int d\tau\,d\sigma\,\sqrt{-\gamma}$. The $2\pi$ lives in the *definition* of $\alpha'$; it is not a missing factor in the classical $T_0/c$ convention. Both write the same action.

## Open questions

- The [[Polyakov action]] introduces an independent worldsheet metric $h_{\alpha\beta}$ and reproduces Nambu–Goto only after eliminating it by its own equation of motion; that form quantizes far more cleanly because it has no square root.
- The relation $T_0=\frac{\hbar c}{2\pi\alpha'}$ (equivalently $\frac{T_0}{\hbar c}=\frac{1}{2\pi\alpha'}$, with $[\alpha']=L^2$) becomes load-bearing when the oscillator spectrum is quantized: $\alpha'$ sets the spacing of the mass tower.

## Exercise

A cosmic-string enthusiast proposes a **negative-tension** string by keeping the same area but flipping the overall sign: $S_{\text{bad}}=+\frac{T_0}{c}\int d\tau\,d\sigma\,\sqrt{-\gamma}$. Evaluate $S_{\text{bad}}$ on the static stretched string of length $a$, read off the potential energy $V$, and explain in one sentence why this sign is unphysical. Then state what value of $\mu_0=V/(ac^2)$ you get and why that is the tell.

> [!success]- Solution
> Reuse the static-gauge computation: $\dot X^2=-c^2$, $X'^2=(f')^2$, $\dot X\cdot X'=0$, so $\sqrt{-\gamma}=c\,f'$. With the flipped sign,
> $$ S_{\text{bad}}=+\frac{T_0}{c}\int d\tau\,d\sigma\,c\,f'
> =+T_0\int d\tau\,[f(\sigma_1)-f(0)]=+T_0\,a\int d\tau. $$
> For a static configuration $S=\int dt\,(-V)$, and static gauge sets $t=\tau$, so $-V=+T_0 a$, giving
> $$ V=-T_0\,a<0, \qquad \mu_0=\frac{V}{ac^2}=-\frac{T_0}{c^2}<0. $$
> The energy *decreases* without bound as the string lengthens — even with pinned ends it can bow out to arbitrary length — so no stable configuration exists, and the rest mass per unit length is negative. Both are physical nonsense, which is exactly why Nambu–Goto carries the **minus** sign: it gives a stretched string positive energy $V=+T_0 a$ that grows with length, so tension pulls the string taut instead of blowing it apart.
