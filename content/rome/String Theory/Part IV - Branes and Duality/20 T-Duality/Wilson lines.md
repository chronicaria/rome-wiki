---
title: Wilson lines
number: "20.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, wilson-line]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A constant gauge field around a compact circle has no magnetic field yet is physical: its holonomy $\theta = q\oint A_x\,dx$ is an angle, and under T-duality that angle is the position of a D-brane on the dual circle.

A vector potential wrapping a circle is a phase the circle can never shake off — an Aharonov–Bohm flux with no solenoid inside — and T-duality reveals that this phase was secretly a place: the point where the dual brane sits.

## A vector potential with no magnetic field that still matters

Let the spatial direction $x$ be a circle, $x\sim x+2\pi R$, with only one nonzero gauge-field component, a constant $A_x$ along it. The field strength vanishes everywhere,
$$ F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu = 0, $$
so there is no magnetic field anywhere. On a line, a pure-gauge $A$ like this would be physically empty.

The circle changes that. The gauge-invariant quantity is the **holonomy** around the loop:
$$ \omega \equiv q\oint dx\,A_x,\qquad W\equiv \exp\!\Big(iq\oint dx\,A_x\Big)=e^{i\omega}. $$
$W$ is the **Wilson line**. On a non-compact line the loop bounds a surface, and Stokes' theorem with $F=0$ forces $\omega$ to vanish. On a circle there is no bounding surface, so $\oint A_x\,dx$ can be nonzero while $F\equiv 0$. The circle remembers the gauge field as a phase — exactly the Aharonov–Bohm effect, where an electron circling a solenoid picks up a phase from a magnetic flux it never touches. Here there isn't even a solenoid; the flux lives in a region that doesn't exist.

(The symbol $\omega$ denotes only this gauge holonomy. It is not the winding momentum $w=mR/\alpha'$ of [[Winding modes]].)

## Why the holonomy is an angle

Under a gauge transformation $A_x\to A_x+\partial_x\chi$, the holonomy shifts by the total change in $\chi$ around the loop:
$$ \omega \to \omega + q\big(\chi(x_0+2\pi R)-\chi(x_0)\big). $$
So whether $\omega$ is physical hinges on one question: must $\chi$ come back to itself after one lap?

The naive answer, $\chi(x+2\pi R)=\chi(x)$, would make $\omega$ flatly gauge-invariant. It is wrong. The object that acts on charged states is not $\chi$ but the phase $U=e^{iq\chi}$: a charged wavefunction transforms as $\psi\to e^{iq\chi}\psi$, and that is what makes the Schrödinger operator transform covariantly,
$$ \Big(\tfrac1i\partial_x-q(A_x+\partial_x\chi)\Big)\big(e^{iq\chi}\psi\big)=e^{iq\chi}\Big(\tfrac1i\partial_x-qA_x\Big)\psi. \tag{1}$$
The transformed wavefunction solves the transformed equation at the same energy, so the physical gauge transformation is the single-valued phase $U$, not $\chi$ itself. To check (1), expand $\partial_x(e^{iq\chi}\psi)=e^{iq\chi}(iq\,\chi'\psi+\psi')$; the two $q\chi'$ terms cancel.

What must be single-valued is therefore $U$, not $\chi$:
$$ U(x+2\pi R)=U(x)\ \Longrightarrow\ q\big(\chi(x+2\pi R)-\chi(x)\big)=2\pi m,\quad m\in\mathbb Z. $$
So $\chi$ need only be **quasi-periodic** — it may jump by an integer multiple of $2\pi/q$ per lap. Feeding this back,
$$ \omega \to \omega + 2\pi m. $$
The holonomy is defined only **modulo $2\pi$: it is an angle.** Physically inequivalent constant gauge fields are labeled by
$$ \boxed{\;\theta \equiv \omega\!\!\pmod{2\pi}=q\oint dx\,A_x\in[0,2\pi).\;} \tag{2}$$
For a *constant* $A_x$ on a circle of circumference $2\pi R$, (2) reads
$$ \boxed{\;qA_x=\frac{\theta}{2\pi R}.\;} \tag{3}$$
The factor is fixed by units: $\theta$ is dimensionless, so dividing by the circumference $2\pi R$ gives inverse length — the units of $qA_x$, and of momentum.

## What the Wilson line does: it shifts momentum

Put a charged particle of mass $\mu$ on the circle. Its Schrödinger equation, with the minimal coupling $\tfrac1i\partial_x\to\tfrac1i\partial_x-qA_x$, is
$$ \frac{1}{2\mu}\Big(\frac1i\partial_x-qA_x\Big)^2\psi=E\psi,\qquad qA_x=\frac{\theta}{2\pi R}. $$
Single-valuedness still forces $\psi_\ell\sim e^{i\ell x/R}$ with $\ell\in\mathbb Z$ — the Wilson line does **not** touch the boundary condition on $\psi$. It shows up only inside the covariant derivative, giving energies
$$ \boxed{\;E_\ell=\frac{1}{2\mu}\Big(\frac{\ell}{R}-\frac{\theta}{2\pi R}\Big)^2.\;} \tag{4}$$
The effective momentum is shifted, $\ell/R\to \ell/R-\theta/(2\pi R)$: clean integer momenta become fractional. This is real physics — it splits the $\pm\ell$ degeneracy for any $\theta\neq0$. It also re-confirms that $\theta$ is an angle: the set of levels is unchanged under $\theta\to\theta+2\pi$ once you relabel $\ell\to\ell+1$.

## Why $\theta$ is a brane position

This is what puts the Wilson line in a T-duality module. Take a D$p$-brane wrapping the circle, carrying a Wilson line with $q\oint A_x\,dx=\theta$, and T-dualize. From [[Dp to D(p minus 1) under T-duality]] the brane becomes a D$(p\!-\!1)$-brane sitting at a point on the dual circle of radius $\tilde R=\alpha'/R$. That point is the one at angle $\theta$: the gauge phase becomes a literal location, arc-length coordinate $y=\theta\,\tilde R$, read modulo the circumference $2\pi\tilde R$.

On the original brane, how much gauge field is smeared around the loop is invisible as a field — undetectable locally, only as a phase. T-duality turns the loop inside out: winding becomes position, and the phase you couldn't see becomes the spot where the dualized brane sits. A quantity with no local meaning on one side is pure geometry on the other.

Three checks that the dictionary is right:

- **Periodicity.** A brane at angle $\theta$ equals a brane at $\theta+2\pi$ — the same identification the Wilson line already obeys.
- **A neutral string feels nothing.** For a string with both endpoints on the *same* brane, the two endpoints carry opposite charge, so the holonomy contributions cancel: $p\to p-qA+qA=p$. Correspondingly, a single brane's *absolute* position never affects strings ending on it. Only differences can matter.
- **Two branes, and only the difference counts.** Put the negatively charged endpoint on brane 1 (angle $\theta_1$) and the positive endpoint on brane 2 (angle $\theta_2$). The momentum shifts by $qA_1-qA_2$:
$$ \frac{\ell}{R}\longmapsto \frac{\ell}{R}-\frac{\theta_2}{2\pi R}+\frac{\theta_1}{2\pi R}=\frac{2\pi\ell-(\theta_2-\theta_1)}{2\pi R}. $$
Only the *relative* angle $\theta_2-\theta_1$ survives — just as only the *relative* brane position matters after T-duality. The open-string mass formula becomes
$$ M^2=\Big(\frac{2\pi\ell-(\theta_2-\theta_1)}{2\pi R}\Big)^2+\frac{1}{\alpha'}\big(N^\perp-1\big), $$
and for the lowest sector $\ell=0$,
$$ M^2=\Big(\frac{\theta_2-\theta_1}{2\pi R}\Big)^2+\frac{1}{\alpha'}\big(N^\perp-1\big). \tag{5}$$

One normalization check seals the dictionary. On the dual circle the two branes are separated by arc length $L=|\theta_2-\theta_1|\,\tilde R$. A fundamental string stretched between them costs energy = tension $\times$ length, with tension $T_0=1/(2\pi\alpha')$:
$$ (LT_0)^2=\Big(|\theta_2-\theta_1|\,\frac{\alpha'}{R}\cdot\frac{1}{2\pi\alpha'}\Big)^2=\Big(\frac{\theta_2-\theta_1}{2\pi R}\Big)^2. $$
The $\alpha'$ cancels exactly, matching the $\ell=0$ term of (5). The stretched-string mass computed from *gauge theory* — a Wilson-line difference — equals the one computed from *geometry* — a physical brane separation. That agreement is the proof that $\theta$ is the angular position of the dual brane.

## Open questions

- For coincident branes the holonomy becomes matrix-valued (non-abelian Wilson line); $\theta$ generalizes to the eigenvalues of a matrix, and the dual picture is a *stack* of branes at those eigenvalue positions. This is beyond the abelian case here.
- In the dynamical theory, Wilson-line moduli and transverse brane positions land in the same open-string gauge multiplet after T-duality. This note fixes the background brane; Born–Infeld dynamics comes later.

## Exercise

A D$p$-brane wraps the circle with Wilson-line angle $\theta$; a second, identical brane wraps it with angle $\theta'=\theta+\pi$. **(a)** Where do the two dual D$(p\!-\!1)$-branes sit relative to each other on the dual circle? **(b)** Using (5), find the mass of the lightest string stretched between them (take $N^\perp=1$, for which the oscillator term $\tfrac{1}{\alpha'}(N^\perp-1)$ vanishes, isolating the pure stretch energy), and express it as tension $\times$ length to confirm the geometry. **(c)** If instead both endpoints sat on the *same* brane, what would this mass be, and why?

> [!success]- Solution
> **(a)** The dual positions are the angles themselves, $\theta$ and $\theta+\pi$. They differ by $\pi$: the two branes sit at **antipodal points** (diametrically opposite) on the dual circle of radius $\tilde R=\alpha'/R$.
>
> **(b)** Here $\theta'-\theta=\pi$. From (5) with $N^\perp=1$ the oscillator term $\tfrac{1}{\alpha'}(N^\perp-1)$ vanishes, leaving
> $$ M^2=\Big(\frac{\theta'-\theta}{2\pi R}\Big)^2=\Big(\frac{\pi}{2\pi R}\Big)^2=\frac{1}{4R^2}, \qquad M=\frac{1}{2R}. $$
> Geometry check: antipodal points are separated by half the circumference, $L=\pi\tilde R=\pi\alpha'/R$. With tension $T_0=1/(2\pi\alpha')$,
> $$ LT_0=\pi\frac{\alpha'}{R}\cdot\frac{1}{2\pi\alpha'}=\frac{1}{2R}=M.\ \checkmark $$
> The $\alpha'$ cancels and the two routes agree — a stretched string across half the dual circle. (The genuine ground state is $N^\perp=0$, with $M^2=\tfrac{1}{4R^2}-\tfrac{1}{\alpha'}$ — lighter, and tachyonic when $R>\sqrt{\alpha'}/2$. It stretches too, but its $-1/\alpha'$ zero-point shift spoils the clean $M=LT_0$ identity, which is exactly why $N^\perp=1$ is the state that displays the geometry.)
>
> **(c)** Both endpoints on one brane means $\theta'=\theta$, so the relative angle is zero and the $M^2$ term $\big(\tfrac{\theta'-\theta}{2\pi R}\big)^2$ vanishes: $M^2=\tfrac{1}{\alpha'}(N^\perp-1)$, giving $M=0$ at $N^\perp=1$. Physically the string has zero length to stretch — its two endpoints sit on the same dual brane — and, because the endpoints carry opposite charge, the single brane's Wilson line cancels out entirely ($p\to p-qA+qA=p$). Only *relative* angles are ever physical.
