---
title: Electric and magnetic fields on D-branes
number: "21.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, brane-fields]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A background gauge field on a D-brane is the geometry of a T-dual brane in disguise: an electric field turns the dual brane into one that moves, so the speed limit $v<c$ becomes a maximum electric field, while a magnetic field tilts it, so wrapping it on a torus quantizes the flux. Electric is a boost, magnetic is a rotation.

This is the bridge from [[Maxwell fields coupled to open strings]] to [[Born-Infeld action]]: the relativistic square roots and the field bounds found here are exactly what the Born–Infeld Lagrangian must reproduce.

## The one dimensionless knob

Everything runs on the dimensionless field strengths
$$ \mathcal E \equiv 2\pi\alpha'\,E, \qquad \mathcal B \equiv 2\pi\alpha'\,B. \tag{1}$$
This is the same $2\pi\alpha' F$ that entered the mixed boundary condition $\partial_\sigma X_m - 2\pi\alpha' F_{mn}\partial_\tau X^n = 0$ (from [[Maxwell fields coupled to open strings]]). These are the numbers that appear everywhere below, and $\mathcal E = 1$ is where the story breaks.

## Electric field = moving brane, and the critical field

Take a D$p$-brane wrapped on a compact direction $x^{25}$ of radius $R$, carrying a constant electric field along it, $F_{25,0} = E$. The only string coordinates that feel this are time $X^0$ and the wrapped direction $X\equiv X^{25}$; the mixed boundary condition couples them:
$$ \partial_\sigma X^0 - \mathcal E\,\partial_\tau X = 0, \qquad \partial_\sigma X - \mathcal E\,\partial_\tau X^0 = 0. \tag{2}$$
Each ties the endpoint's $\sigma$-slope in one direction to its $\tau$-velocity in the other: the field drags the string endpoint along the circle.

To read off the physics, package (2) as a matrix. Switch to the worldsheet derivatives $\partial_\pm \equiv \tfrac12(\partial_\tau \pm \partial_\sigma)$ and solve for the $\partial_+$ data in terms of the $\partial_-$ data:
$$ \partial_+\begin{pmatrix} X^0\\ X\end{pmatrix} = \frac{1}{1-\mathcal E^2}\begin{pmatrix} 1+\mathcal E^2 & 2\mathcal E\\ 2\mathcal E & 1+\mathcal E^2\end{pmatrix}\partial_-\begin{pmatrix} X^0\\ X\end{pmatrix}. \tag{3}$$
The matrix has unit determinant and blows up at $\mathcal E=\pm1$ — the first hint that $\mathcal E = 1$ is a wall.

Compare this to a genuinely moving brane. A D$(p{-}1)$-brane on the dual circle has plain boundary conditions in its own rest frame: Neumann along the brane, Dirichlet across it. Boost to the lab frame with velocity $\beta = v/c$ and those conditions rotate into a matrix of exactly the form of (3), with $\beta$ wherever $\mathcal E$ stood. The two configurations obey identical string boundary conditions precisely when
$$ \boxed{\;\mathcal E = 2\pi\alpha'\,E = \beta\;}. \tag{4}$$
The endpoint dragged by the electric field is the endpoint sitting on a brane gliding past at speed $\beta$. An electric field is a velocity.

That dictionary turns a speed limit into a field limit. No massive brane reaches the speed of light, so $\beta<1$, so $\mathcal E<1$:
$$ |E| = \frac{|\beta|}{2\pi\alpha'} < \frac{1}{2\pi\alpha'} \equiv E_{\rm crit}. \tag{5}$$
The electric field on a D-brane is bounded — unthinkable in Maxwell theory, where $E$ can take any value. The ceiling is exactly the string tension:
$$ \boxed{\;E_{\rm crit} = T_0 = \frac{1}{2\pi\alpha'}\;}. \tag{6}$$

The bound equals the tension for a reason visible at a single endpoint. Two forces act on a charged string endpoint in the field: the electric pull $E$ along the brane, and the tension yanking it back. The endpoint moves at speed $v_\perp$ perpendicular to the string, so the tension available to resist is Lorentz-reduced to $T_0\sqrt{1-v_\perp^2}$ — the same $\sqrt{1-v^2}$ that shrinks a relativistic string's effective tension. Balance demands
$$ E = T_0\sqrt{1-v_\perp^2}. \tag{7}$$
For $E<T_0$ this has a solution, $v_\perp = \sqrt{1-(E/T_0)^2} = \sqrt{1-\mathcal E^2}$; at $E=T_0$ the endpoint must freeze ($v_\perp\to 0$), the tension maxed out; for $E>T_0$ no real speed balances the pull and the configuration runs away. Same wall, now seen from the endpoint rather than the dual brane. Maxwell has no scale at which $E$ saturates, so a maximal field is already evidence that the brane gauge field obeys something nonlinear — [[Born-Infeld action|Born–Infeld]], whose built-in maximal field $b$ is exactly this $E_{\rm crit}$.

## Magnetic field = tilted brane, and flux quantization

Now put a constant magnetic field $F_{23}=B$ on the brane. The mixed boundary condition ties $X^2$ and $X^3$:
$$ \partial_\sigma X^2 - \mathcal B\,\partial_\tau X^3 = 0, \qquad \partial_\sigma X^3 + \mathcal B\,\partial_\tau X^2 = 0. \tag{8}$$
Compactify $x^3$ and T-dualize it. The clean N/D conditions of a tilted D$(p{-}1)$-brane on the dual cylinder — a brane rotated by angle $\alpha$ — reproduce (8) exactly when
$$ \boxed{\;\mathcal B = 2\pi\alpha'\,B = -\tan\alpha\;}. \tag{9}$$
An electric field is a boost; a magnetic field is a rotation. A weak field is a small tilt, and it takes an infinite field to tip the dual brane a full $90^\circ$. Two consequences carry forward.

- **Flux quantization.** Wrap the tilted brane on a two-torus. A tilted line closes up on the torus only after winding an integer number of times, so the tilt angle is locked to a discrete set and the total magnetic flux is quantized:
$$ \Phi = -2\pi n, \qquad n\in\mathbb Z. \tag{10}$$
(The sign is orientation convention; the invariant statement is $\Phi/2\pi\in\mathbb Z$.) A constant $B$ on a compact brane is not a free dial — the integer $n$ is a topological winding number, pure stringy input that Maxwell on $\mathbb R^4$ never sees.

- **Dissolved branes.** That integer counts branes. A D$p$-brane with flux $2\pi n$ is deformation-equivalent to a D$p$-brane carrying $n$ dissolved D$(p{-}2)$-branes: a D2 with magnetic flux is a D2 with $n$ D0-branes melted into it, the flux being the smeared-out D0 charge. The bound state has less energy than the pieces held apart — the energies add in quadrature, $E=\sqrt{M_p^2+(nM_{p-2})^2} < M_p + nM_{p-2}$, the signature of a genuine bound state.

## The unifying square root

Both dual Lagrangians have the same shape. The moving brane carries the relativistic factor $\sqrt{1-\beta^2} = \sqrt{1-\mathcal E^2}$. The tilted brane is geometrically longer than the untilted one by $1/\cos\alpha = \sqrt{1+\tan^2\alpha} = \sqrt{1+\mathcal B^2}$, so its Lagrangian (energy $\propto$ length) carries that root. Translated back to the D$p$-brane:
$$ L_{\rm electric} \propto -\sqrt{1-(2\pi\alpha' E)^2}, \qquad L_{\rm magnetic} \propto -\sqrt{1+(2\pi\alpha' B)^2}. \tag{11}$$
These are the pure-electric and pure-magnetic limits of one object,
$$ \sqrt{-\det\!\big(\eta_{mn}+2\pi\alpha' F_{mn}\big)}, $$
the Born–Infeld determinant. The electric field sits in a time–space slot of $\eta_{mn}+2\pi\alpha' F_{mn}$, where the Minkowski minus sign (mostly-plus signature) turns into the $1-\mathcal E^2$; the magnetic field sits in a space–space slot, all plus, giving $1+\mathcal B^2$. The relative sign between the two bounds is nothing but the signature of spacetime. The full determinant is assembled in [[Born-Infeld action]]; the two limits derived here are the constant-field tests it must pass. They do not by themselves fix the determinant for arbitrary $F_{mn}(x)$ — that is a slowly-varying-field statement made in the sibling notes.

## Open questions

- The endpoint force-balance in (7) uses the effective-tension factor $T_0\sqrt{1-v_\perp^2}$ as given; a full rotating-string solution would confirm $v_\perp=\sqrt{1-\mathcal E^2}$ directly, but the T-duality route already delivers the bound, so it is not reproduced here.
- The dissolved-brane / bound-state energetics ($E$ in quadrature) is a structural preview of D-brane charge, stated but not derived; it is not needed for the Born–Infeld determinant.

## Exercise

The two boxed dictionary entries are $\mathcal E = \beta$ (electric = boost) and $\mathcal B = -\tan\alpha$ (magnetic = rotation). Use them to make each square root in (11) predict its own physics.

**(a)** From the electric identification, what is the endpoint speed $v_\perp$ at the critical field $E=E_{\rm crit}$, and what does the factor $\sqrt{1-\mathcal E^2}$ do there? **(b)** From the magnetic identification, show the tilted-brane length factor is $\sqrt{1+\mathcal B^2}$ and explain why it can grow without bound while the electric factor cannot. **(c)** In one sentence, say which slot of $\eta_{mn}+2\pi\alpha' F_{mn}$ produces each sign, and why they differ.

> [!success]- Solution
> **(a)** At $E=E_{\rm crit}=T_0$ we have $\mathcal E = 2\pi\alpha' E = E/T_0 = 1$, so from (7), $v_\perp = \sqrt{1-\mathcal E^2} = 0$: the endpoint freezes. The moving-brane Lagrangian $L_{\rm electric}\propto -\sqrt{1-\mathcal E^2}$ vanishes with it — the dual brane has hit the speed of light ($\beta=\mathcal E=1$), which is why the field cannot be pushed further. The bound $E<E_{\rm crit}$ is the speed limit $\beta<1$ in disguise.
> **(b)** A segment that spans horizontal length $\ell$ but is tilted by angle $\alpha$ is the hypotenuse of a right triangle with base $\ell$, so its length is $\ell/\cos\alpha$. Then $1/\cos\alpha = \sqrt{1+\tan^2\alpha} = \sqrt{1+\mathcal B^2}$ using $\mathcal B=-\tan\alpha$ from (9), where $\tan^2\alpha=\mathcal B^2$ kills the sign. As $B\to\infty$, $\alpha\to 90^\circ$ and $\sqrt{1+\mathcal B^2}\to\infty$: a rotation angle has no ceiling, so $\mathcal B$ (hence $B$) is unbounded. The electric factor $\sqrt{1-\mathcal E^2}$ instead hits zero at $\mathcal E=1$ and goes imaginary beyond, because a velocity is capped at $1$. Rotations run to infinity; boosts saturate at $c$.
> **(c)** The electric field occupies a time–space entry of $\eta_{mn}+2\pi\alpha' F_{mn}$, and the $-1$ from Minkowski time in that $2\times2$ block yields $1-\mathcal E^2$; the magnetic field occupies a space–space entry, all $+1$, yielding $1+\mathcal B^2$. The signs differ purely because of the spacetime signature $(-+++)$.
