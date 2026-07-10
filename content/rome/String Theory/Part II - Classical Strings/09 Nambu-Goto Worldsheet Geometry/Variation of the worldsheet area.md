---
title: Variation of the worldsheet area
number: "9.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, nambu-goto, variation]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Varying the Nambu–Goto area produces two momentum densities, $\mathcal P^\tau_\mu$ and $\mathcal P^\sigma_\mu$ — the sensitivities of the area to tilting the string's two tangent vectors. They are the raw material for the equation of motion.

## The area depends only on the tangents

We want the extremal-area surface, so we wiggle the embedding, $X^\mu\to X^\mu+\delta X^\mu$, and ask how the area responds. The area depends on $X^\mu$ only through the two tangent vectors $\dot X^\mu$ (a step in worldsheet time) and $X'^\mu$ (a step along the string), so the question is local: how much does the area change when each tangent tilts? Those two sensitivities are $\mathcal P^\tau_\mu$ and $\mathcal P^\sigma_\mu$.

Think of a soap film. Stretch it in one direction and it pulls back; the pull is the derivative of area with respect to that stretch. This film lives in Minkowski spacetime and has two stretch directions, $\tau$ and $\sigma$, so there are two pulls, one per tangent. The name "momentum density" is earned in [[Bulk equations versus boundary terms]], where conservation of these quantities becomes the string's equation of motion; for now they are area-response covectors.

## Set up the variation

Write the Nambu–Goto action as a Lagrangian density (from [[Nambu-Goto action]]; this module keeps $c$ explicit):
$$ S=\int d\tau\,d\sigma\,\mathcal L,\qquad
\mathcal L=-\frac{T_0}{c}\sqrt{R},\qquad
R\equiv(\dot X\cdot X')^2-\dot X^2X'^2=-\gamma. $$
$R$ is minus the Gram determinant of the two tangents; it is positive for a physical string, whose tangent plane holds one timelike and one spacelike direction, so $\sqrt R=\sqrt{-\gamma}$ is the real proper area per unit $d\tau\,d\sigma$.

Because $\mathcal L$ depends on $X^\mu$ only through $\dot X^\mu$ and $X'^\mu$, the first variation is pure chain rule:
$$ \delta S=\int d\tau\,d\sigma\left[
\frac{\partial\mathcal L}{\partial\dot X^\mu}\,\partial_\tau(\delta X^\mu)
+\frac{\partial\mathcal L}{\partial X'^\mu}\,\partial_\sigma(\delta X^\mu)
\right]. \tag{1}$$
The derivatives land on $\delta X^\mu$ because varying and differentiating commute: $\delta\dot X^\mu=\partial_\tau(\delta X^\mu)$ and $\delta X'^\mu=\partial_\sigma(\delta X^\mu)$. Reading off the two coefficients is the entire job of this note.

## Differentiate with respect to $\dot X^\mu$

Differentiate $R$ term by term. Differentiating with respect to the contravariant $\dot X^\mu$ contracts with the metric and lowers the index — true in any signature — so $\partial(\dot X^2)/\partial\dot X^\mu=2\dot X_\mu$ and $\partial(\dot X\cdot X')/\partial\dot X^\mu=X'_\mu$, while $X'^2$ contains no $\dot X$:
$$
\frac{\partial R}{\partial\dot X^\mu}
=2(\dot X\cdot X')\,X'_\mu-2X'^2\,\dot X_\mu .
$$
The overall factor of $2$ cancels the $1/(2\sqrt R)$ from the chain rule on $\sqrt R$, leaving
$$
\boxed{\;
\mathcal P^\tau_\mu\equiv\frac{\partial\mathcal L}{\partial\dot X^\mu}
=-\frac{T_0}{c}\,
\frac{(\dot X\cdot X')\,X'_\mu-X'^2\,\dot X_\mu}
{\sqrt{(\dot X\cdot X')^2-\dot X^2X'^2}}\; } \tag{2}
$$
This covector is the spacetime momentum density flowing across a line of constant $\tau$ — the momentum the string has now.

## Differentiate with respect to $X'^\mu$

The calculation is identical with $\dot X\leftrightarrow X'$ swapped:
$$
\frac{\partial R}{\partial X'^\mu}
=2(\dot X\cdot X')\,\dot X_\mu-2\dot X^2\,X'_\mu ,
$$
so
$$
\boxed{\;
\mathcal P^\sigma_\mu\equiv\frac{\partial\mathcal L}{\partial X'^\mu}
=-\frac{T_0}{c}\,
\frac{(\dot X\cdot X')\,\dot X_\mu-\dot X^2\,X'_\mu}
{\sqrt{(\dot X\cdot X')^2-\dot X^2X'^2}}\; } \tag{3}
$$
This is the momentum *flux* along the string — momentum flowing across a line of constant $\sigma$. An endpoint boundary condition is a statement about this flux: whether momentum leaks out the end.

## What the momenta point at

The numerator of (2) is $-X'^2$ times the part of $\dot X$ perpendicular to the string,
$$ \dot X_\perp^\mu\equiv\dot X^\mu-\frac{\dot X\cdot X'}{X'^2}\,X'^\mu
\quad\Longrightarrow\quad
\mathcal P^\tau_\mu=\frac{T_0}{c}\,\frac{X'^2}{\sqrt R}\,\dot X_{\perp\,\mu}. $$
A step along the string is spacelike and a step in worldsheet time is timelike, so $X'^2>0$ and $\dot X^2<0$ (mostly-plus signature); hence $\mathcal P^\tau$ points along the component of $\dot X$ orthogonal to $X'$. The same decomposition on (3) gives
$$ \mathcal P^\sigma_\mu=\frac{T_0}{c}\,\frac{\dot X^2}{\sqrt R}\,X'_{\perp\,\mu},
\qquad
X'^\mu_\perp\equiv X'^\mu-\frac{\dot X\cdot X'}{\dot X^2}\,\dot X^\mu, $$
Because $\dot X^2<0$, $\mathcal P^\sigma$ runs *anti-parallel* to the component of $X'$ orthogonal to $\dot X$: the sign of a pull, not a push. The exercise sharpens this into the statement that the flux *is* the tension.

Only the transverse part of a tangent changes the area; sliding one tangent along the other merely relabels the grid. Two contractions make this exact:
$$ \mathcal P^\tau_\mu\,X'^\mu=0,\qquad \mathcal P^\sigma_\mu\,\dot X^\mu=0. $$
Check the first directly: its numerator is $(\dot X\cdot X')\,(X'\!\cdot X')-X'^2\,(\dot X\cdot X')=0$. Tilting the $\tau$-tangent *toward* the $\sigma$-tangent shears the coordinate parallelogram without changing its area, so the area response in that direction vanishes.

Contracting each momentum with its *own* tangent returns the Lagrangian density itself:
$$ \mathcal P^\tau_\mu\,\dot X^\mu=\mathcal L=-\frac{T_0}{c}\sqrt R,
\qquad
\mathcal P^\sigma_\mu\,X'^\mu=\mathcal L. \tag{4}$$
That $\dot X^\mu\,\partial\mathcal L/\partial\dot X^\mu=\mathcal L$ is no coincidence. $\mathcal L$ is homogeneous of degree one in $\dot X$ — rescaling $\dot X\to\lambda\dot X$ with $\lambda>0$ sends $\sqrt R\to\lambda\sqrt R$ — so Euler's theorem for degree-one functions delivers exactly this identity, and the same holds in $X'$. This is the fingerprint of **reparameterization invariance**: since $\tau$ can be rescaled freely, the canonical energy density $\dot X^\mu\mathcal P^\tau_\mu-\mathcal L$ vanishes identically, and a theory whose canonical Hamiltonian vanishes identically is a theory with a gauge symmetry — here, the freedom to redraw the $(\tau,\sigma)$ grid. Verify (4) directly: the numerator of $\mathcal P^\tau_\mu\dot X^\mu$ is $(\dot X\cdot X')^2-X'^2\dot X^2=R$, and $R/\sqrt R=\sqrt R$.

## Where this goes next

Put the momenta back into (1):
$$ \delta S=\int d\tau\,d\sigma\left[
\mathcal P^\tau_\mu\,\partial_\tau(\delta X^\mu)
+\mathcal P^\sigma_\mu\,\partial_\sigma(\delta X^\mu)
\right]. $$
From here it is pure variational calculus: integrate by parts to peel the derivatives off $\delta X^\mu$, and the result splits into a bulk Euler–Lagrange equation, $\partial_\tau\mathcal P^\tau_\mu+\partial_\sigma\mathcal P^\sigma_\mu=0$, plus boundary terms at the endpoints. That split is [[Bulk equations versus boundary terms]].

## Open questions

- The momenta blow up at $R=0$ ($\gamma=0$): a null/tensionless worldsheet has a degenerate tangent plane and needs a different action.
- The densities are badly nonlinear in $\dot X,X'$. A gauge choice (static, then light-cone) collapses them to expressions *linear* in the derivatives — that linearity is what makes the string solvable.

## Exercise

Evaluate both momentum densities on the static stretched string of [[Nambu-Goto action]]: $X^0=c\tau$, $X^1=f(\sigma)$ with $f(0)=0$, $f(\sigma_1)=a$, $f'>0$, and all other components zero.

**(a)** Compute $\mathcal P^\tau_\mu$ from (2) and show that the total momentum $p_\mu=\int_0^{\sigma_1}\mathcal P^\tau_\mu\,d\sigma$ carries energy $E=c\,p^0=T_0\,a$ — the stretched string's potential energy.

**(b)** Compute $\mathcal P^\sigma_\mu$ from (3), interpret its constant value, and explain why these endpoints could not satisfy the free boundary condition $\mathcal P^\sigma_\mu=0$.

> [!success]- Solution
> The tangents are $\dot X^\mu=(c,0,\dots,0)$ and $X'^\mu=(0,f',0,\dots,0)$, so
> $$\dot X\cdot X'=0,\qquad \dot X^2=-c^2,\qquad X'^2=f'^2,\qquad
> \sqrt R=\sqrt{0-(-c^2)f'^2}=c\,f'.$$
>
> **(a)** With $\dot X\cdot X'=0$, equation (2) collapses to
> $$\mathcal P^\tau_\mu=-\frac{T_0}{c}\,\frac{-f'^2\,\dot X_\mu}{c\,f'}=\frac{T_0\,f'}{c^2}\,\dot X_\mu,$$
> whose only nonzero component is $\mathcal P^\tau_0=\frac{T_0f'}{c^2}(-c)=-\frac{T_0f'}{c}$ (index lowered with $\eta_{00}=-1$). Integrating,
> $$p_0=-\frac{T_0}{c}\int_0^{\sigma_1}f'\,d\sigma=-\frac{T_0\,a}{c}
> \quad\Longrightarrow\quad
> p^0=\frac{T_0\,a}{c},\qquad E=c\,p^0=T_0\,a.$$
> A static string carries no spatial momentum, and its energy equals the potential energy $V=T_0a$ found in [[Nambu-Goto action]] — all of it stored tension energy. (Consistency check: $\mathcal P^\tau_\mu\dot X^\mu=\frac{T_0f'}{c^2}\,\dot X^2=-T_0f'=\mathcal L$, identity (4).)
>
> **(b)** With $\dot X\cdot X'=0$, equation (3) collapses to
> $$\mathcal P^\sigma_\mu=-\frac{T_0}{c}\,\frac{-(-c^2)\,X'_\mu}{c\,f'}=-T_0\,\frac{X'_\mu}{f'},$$
> whose only nonzero component is $\mathcal P^\sigma_1=-T_0$: a constant momentum flux of magnitude $T_0$ everywhere along the string, independent of the parameterization $f$. This is tension read as momentum flow — cut the string anywhere and the two sides exchange $x^1$-momentum at rate $T_0$, each pulling the other with force $T_0$; the minus sign is the anti-parallel orientation derived in the body. Since $\mathcal P^\sigma_1=-T_0\neq0$ at $\sigma=0$ and $\sigma=\sigma_1$, a free end ($\mathcal P^\sigma_\mu=0$) is impossible: momentum would pour out and nothing would balance the tension. A static stretched string exists only with pinned (Dirichlet) ends — the boundary analysis of [[Bulk equations versus boundary terms]].
