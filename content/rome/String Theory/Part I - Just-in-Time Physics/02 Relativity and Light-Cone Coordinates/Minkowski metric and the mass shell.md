---
title: Minkowski metric and the mass shell
number: "2.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, minkowski]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Spacetime measures separation with a *minus sign on time*; feed a particle's energy-momentum into that lopsided ruler and you always get back the same number, $-m^2c^2$. That number is the mass shell.

## The one number everyone agrees on

Newton's world had two absolutes: everyone measured the same time between two events, and the same distance. Relativity breaks both — a moving clock runs slow, a moving ruler shrinks — but it hands back **one** replacement absolute. All inertial observers agree on a single combination of time and space:

$$ -ds^2 = -(dx^0)^2 + (dx^1)^2 + (dx^2)^2 + (dx^3)^2, \qquad x^\mu \equiv (ct,\,x,\,y,\,z). \tag{1}$$

The lone minus sign on the time term is the entire geometry: time and space enter the ruler with opposite signs. Ordinary Pythagoras adds up squared displacements; Minkowski subtracts the time part. That single sign flip is why light, moving at $c$, has $ds^2 = 0$ — it sits exactly on the boundary between the time-dominated and space-dominated regimes.

Why call the left side $-ds^2$? For a ticking clock at rest $dx^i=0$, so $-ds^2 = -(c\,dt)^2 < 0$, hence $ds^2 = (c\,dt)^2 > 0$. The convention keeps $ds$ real and equal to $c$ times proper time for a moving particle — the reading on its own wristwatch.

Package (1) into a matrix $\eta_{\mu\nu}$, the **Minkowski metric**, defined by $-ds^2 = \eta_{\mu\nu}\,dx^\mu dx^\nu$ (Einstein summation: an index repeated once up, once down is summed over). The quadratic form only sees the symmetric part of $\eta$, so demanding $\eta$ symmetric pins it down uniquely:

$$ \eta_{\mu\nu} = \begin{pmatrix} -1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}. $$

This is the mostly-plus signature $(-,+,+,+)$, the convention used throughout these notes. Many particle-physics texts flip every sign to mostly-minus $(+,-,-,-)$, which flips the sign of $p^2$ below; check the signature before trusting any relativistic sign.

Mathematically $\eta$ is a symmetric bilinear form of signature $(1,3)$ — one negative direction, three positive: non-degenerate but not positive definite, so "lengths" can be negative. The maps preserving it — the analogue of rotations preserving the Euclidean dot product — are the Lorentz transformations $L$, characterized by $L^{\mathsf T}\eta L = \eta$. They are exactly the changes of frame that keep (1) invariant.

## Raising, lowering, and the scalar product

The metric turns an upper index into a lower one, $a_\mu \equiv \eta_{\mu\nu}a^\nu$. Because only the time entry is negative, this flips just the time component: $a_0 = -a^0$, while $a_i = a^i$. The **relativistic scalar product** contracts one raised with one lowered index:

$$ a\cdot b \equiv \eta_{\mu\nu}\,a^\mu b^\nu = a_\mu b^\mu = -a^0 b^0 + a^1 b^1 + a^2 b^2 + a^3 b^3. \tag{2}$$

Every observer computes the same $a\cdot b$, because Lorentz transformations preserve $\eta$. Its sign classifies a vector observer-independently: **timelike** if $a\cdot a < 0$ (more time than space — worldlines of massive particles), **spacelike** if $a\cdot a > 0$, **null** if $a\cdot a = 0$ (light).

The inverse metric $\eta^{\mu\nu}$ has the same numerical entries in these coordinates and undoes the lowering, $\eta^{\nu\rho}\eta_{\rho\mu} = \delta^\nu_\mu$ — raise then lower and you are back where you started.

## The four-momentum and its fixed length

Energy and ordinary momentum assemble into a single four-vector:

$$ p^\mu \equiv \left(\tfrac{E}{c},\, p_x,\, p_y,\, p_z\right). $$

Energy sits in the time slot of $p^\mu$ exactly as $ct$ sits in the time slot of $x^\mu$. That energy-time pairing is the hook light-cone coordinates exploit next.

Now measure this vector with the Minkowski ruler. Lowering the index gives $p_\mu = (-E/c,\,p_x,\,p_y,\,p_z)$, so

$$ p\cdot p = p^\mu p_\mu = -\frac{E^2}{c^2} + \vec p\cdot\vec p. \tag{3}$$

The physics that makes this special is the relativistic energy-momentum relation. It is not an extra assumption — it drops out of the definitions $E=\gamma mc^2$ and $\vec p = \gamma m\vec v$ (the relativistic energy and momentum of a particle of mass $m$ and speed $v$, with $\gamma = 1/\sqrt{1-v^2/c^2}$):

$$ \frac{E^2}{c^2} - \vec p\cdot\vec p = \gamma^2 m^2\left(c^2 - v^2\right) = \gamma^2 m^2 c^2\left(1 - \frac{v^2}{c^2}\right) = m^2 c^2. $$

The factor $\gamma^2$ cancels $1 - v^2/c^2$ exactly, leaving a value with no $v$ in it. Energy and momentum both depend on who is watching; this combination does not — it is the rest mass, dressed with $c$'s. Substituting $E^2/c^2 = \vec p\cdot\vec p + m^2c^2$ into (3), the $\vec p\cdot\vec p$ cancels:

$$ \boxed{\,p\cdot p = -m^2 c^2\,} \tag{4}$$

**This is the mass shell.** A particle of mass $m$ can carry any energy and momentum it likes, but they are chained together so that this one invariant length always equals $-m^2c^2$. Different observers see different $E$ and $\vec p$; all of them compute the same shell.

Geometrically, plot $p^\mu$ in four-dimensional momentum space. Equation (4) carves out a **hyperboloid** — a two-sheeted one for $m>0$, the two sheets being $E>0$ and $E<0$. A physical particle's momentum is pinned to this surface, hence "on shell." The name is literal: the shell is the level set the four-momentum is allowed to live on.

Solving (4) for the ordinary energy makes the two sheets explicit:

$$ E = \pm c\sqrt{\vec p\cdot\vec p + m^2c^2}. \tag{5}$$

The $+$ sign is the positive-energy sheet, the $-$ sign the negative-energy one. Classical single-particle mechanics keeps $E>0$; quantum field theory later reinterprets the negative branch as antiparticles rather than discarding it.

## Why this matters for strings

The mass shell is a **constraint, not a force law.** It says nothing about how $p^\mu$ evolves in time; it says which four-momenta are even allowed for mass $m$. That distinction is what strings exploit: quantizing the string will spit out a *tower* of allowed values of $m^2$, one for each oscillator excitation, and (4) will convert each into an allowed energy. The next note rewrites this same constraint in light-cone coordinates, where the square root in (5) disappears and $p^-$ falls out by a single division — see [[Solving the mass shell in light-cone coordinates]].

## Open questions

- The mass shell is quadratic in $E$, so solving for the energy forces a square root. Is there a coordinate system in which the same constraint becomes linear in some energy variable, sparing the root? (Yes — the next module aligns the axes with light rays.)
- Quantum field theory keeps the $E<0$ sheet and reads it as antiparticles. What goes wrong if a single-particle theory simply throws it away?

## Exercise

A photon is massless. Using only this note, (a) state what its four-momentum satisfies, (b) show the resulting relation between its energy $E$ and the magnitude $|\vec p|$ of its momentum, and (c) classify the photon's four-momentum as timelike, spacelike, or null.

> [!success]- Solution
> **(a)** Set $m=0$ in the mass shell (4): the photon's four-momentum obeys
> $$ p\cdot p = 0. $$
> **(b)** Write it out with the scalar product (3): $p\cdot p = -E^2/c^2 + \vec p\cdot\vec p = 0$, so
> $$ \frac{E^2}{c^2} = |\vec p|^2 \quad\Longrightarrow\quad E = c\,|\vec p| $$
> (taking $E>0$). This is the familiar photon relation — energy is momentum times $c$, with no rest-mass term. It is the $m\to 0$ limit of (5), where the hyperboloid degenerates into the cone $E = \pm c|\vec p|$.
> **(c)** Since $p\cdot p = 0$, the four-momentum is **null** by the classification under (2). That is exactly what "moves at the speed of light" means geometrically: the momentum lies on the light cone, the $ds^2 = 0$ boundary from (1).
