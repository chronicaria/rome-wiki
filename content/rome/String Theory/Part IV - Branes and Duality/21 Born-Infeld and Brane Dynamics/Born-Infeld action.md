---
title: Born-Infeld action
number: "21.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, born-infeld]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Born–Infeld is the nonlinear electrodynamics with a built-in maximal field $b=1/(2\pi\alpha')$ that reduces to Maxwell when the field is weak; it packs into a square-root determinant, gives a point charge finite self-energy, and with the brane tension out front is the leading local abelian gauge action on a D-brane: $\mathcal L = -T_p\sqrt{-\det(\eta_{mn}+2\pi\alpha' F_{mn})}$.

The relativistic particle Lagrangian $L=-mc^2\sqrt{1-v^2/c^2}$ has a square root that forbids $v>c$. Born–Infeld puts the field inside a square root the same way, so the field can never exceed $b$ — and that one move cures the infinite self-energy of the Maxwell electron and turns out to be exactly what a D-brane's gauge field does.

Builds on [[Nonlinear electrodynamics]] (the $\mathcal L(s,p)$ framework) and [[Electric and magnetic fields on D-branes]] (where the bound $E_{\rm crit}=b$ comes from).

## Building the Lagrangian from two demands

From [[Nonlinear electrodynamics]] we know any Lorentz- and gauge-invariant local theory is a function $\mathcal L(s,p)$ of the two invariants
$$ s=-\tfrac14 F_{\mu\nu}F^{\mu\nu}=\tfrac12(E^2-B^2), \qquad p=\vec E\cdot\vec B. $$
We want the one that (i) $\to s$ at small field, so it looks Maxwellian, and (ii) has a maximal electric field, because string theory bounds $E$ on a brane.

The particle analogy tells us how: put the field invariant inside a square root. The simplest candidate,
$$ \mathcal L = -b^2\sqrt{1 - \frac{E^2-B^2}{b^2}} + b^2 = -b^2\sqrt{1 - \frac{2s}{b^2}} + b^2, \tag{1}$$
does both. With $B=0$ it is $-b^2\sqrt{1-E^2/b^2}+b^2$, real only for $E\le b$ — the maximal field. For $s\ll b^2$ the root expands as $-b^2(1-s/b^2)+b^2 = s+\mathcal O(s^2)$, whose leading term is exactly Maxwell. The additive $+b^2$ enforces $\mathcal L(0)=0$, cancelling the constant the root leaves behind.

Genuine Born–Infeld also keeps the second invariant $p$:
$$ \boxed{\;\mathcal L = -b^2\sqrt{1 - \frac{2s}{b^2} - \frac{p^2}{b^4}} + b^2\;}. \tag{2}$$
The $p^2$ term is what makes Born–Infeld non-birefringent: every polarization propagates at the same speed even in a strong background. Generic nonlinear theories split polarizations, so the vacuum acts like a birefringent crystal; Born–Infeld is the unique one that does not. That is its signature virtue.

## The determinant form

One rewrite makes everything portable across dimensions:
$$ \boxed{\;\mathcal L = -b^2\sqrt{-\det\!\Big(\eta_{\mu\nu} + \tfrac{1}{b}F_{\mu\nu}\Big)} + b^2\;}. \tag{3}$$

Why it equals (2) in 4D is pure algebra. Since $\eta+F/b = \eta\,(1 + \eta F/b)$ and $\det\eta=-1$,
$$ -\det\!\Big(\eta+\tfrac1b F\Big) = \det\!\Big(1+\tfrac1b\,\eta F\Big), $$
and (setting $b=1$ for readability) the matrix $1+\eta F$ in mostly-plus signature is
$$ 1+\eta F = \begin{pmatrix} 1 & E_x & E_y & E_z\\ E_x & 1 & B_z & -B_y\\ E_y & -B_z & 1 & B_x\\ E_z & B_y & -B_x & 1\end{pmatrix}. $$
Its determinant collects into two pieces. The terms quadratic in the field (one off-diagonal factor from each of the symmetric pairs) give $-E^2+B^2=-2s$. The purely quartic terms (permutations touching no diagonal entry) assemble into
$$ -\sum_i E_i^2 B_i^2 - 2\sum_{i<j}E_iE_jB_iB_j = -(\vec E\cdot\vec B)^2 = -p^2. $$
So $\det(1+\eta F)=1-2s-p^2$, i.e. with $b$ restored $1-2s/b^2-p^2/b^4$ — exactly the argument of the root in (2). This is an exact identity, not an expansion.

The determinant form buys generality. Lorentz invariance is manifest because $\det(\eta+F/b)$ is a scalar, and the determinant makes sense in any number of dimensions, whereas the "$s$ and $p$" form is special to 4D — only there is $p$ a single scalar. This is why (3), not (2), is what travels to the brane.

## Finite self-energy of a point charge

Born and Infeld built this in 1934 for a specific reason: in Maxwell theory a point charge has infinite self-energy, and they wanted a classical electron with a finite one. Set $\vec B=0$, so $\mathcal L=-b^2\sqrt{1-E^2/b^2}+b^2$. The constitutive relation (from $\vec D=\partial\mathcal L/\partial\vec E$, see [[Nonlinear electrodynamics]]) is
$$ \vec D = \frac{\vec E}{\sqrt{1-E^2/b^2}}, \qquad\text{invert:}\qquad \vec E = \frac{\vec D}{\sqrt{1+D^2/b^2}}. \tag{4}$$
This carries two bounds: $E\le b$ (the maximal field) and $E\le D$, with $E\to b$ only as $D\to\infty$. The energy density is the Legendre transform $\mathcal H=\vec D\cdot\vec E-\mathcal L$, which in terms of $D$ is
$$ \mathcal H = b^2\sqrt{1+\frac{D^2}{b^2}} - b^2. \tag{5}$$

The divergence lives entirely in the energy, not the field. Gauss's law $\nabla\cdot\vec D=\rho$ is linear, so $\vec D$ around a point charge $Q$ is the ordinary Coulomb field $D\sim Q/(4\pi r^2)$, same as Maxwell. What changes is how the energy density behaves where $D$ is huge:

- Maxwell ($D=E$): $\mathcal H\sim\tfrac12 D^2\sim r^{-4}$, so $\int\!\mathcal H\,d^3x \sim \int r^{-4}\cdot r^2\,dr=\int r^{-2}\,dr$ diverges at $r=0$.
- Born–Infeld (large $D$): $E$ is capped at $b$, so $\mathcal H\simeq bD\sim r^{-2}$ grows only linearly in $D$. Then $\int\!\mathcal H\,d^3x\sim\int r^{-2}\cdot r^2\,dr=\int dr$ converges.

The cap on $E$ softens $r^{-4}$ to $r^{-2}$ and saves the integral. Substituting the Coulomb $D$ into (5) and integrating over all space, the radial integral is $\int_0^\infty(\sqrt{1+x^4}-x^2)\,dx=\Gamma(\tfrac14)^2/(6\sqrt\pi)$, and
$$ U_Q = \frac{1}{4\pi}\cdot\frac13\,\Gamma(\tfrac14)^2\, b^{1/2}\,Q^{3/2} \approx \frac{1}{4\pi}\,(4.382)\, b^{1/2}Q^{3/2}. \tag{6}$$
The tell-tale is the power: $Q^{3/2}$, not the Maxwell $Q^2$. A nonlinear theory does not scale quadratically with charge. With $b=1/(2\pi\alpha')$ and $\ell_s=\sqrt{\alpha'}$, the finite radius that regulates the charge is the string length — the string smears the point out over $\ell_s$, the cutoff Maxwell always needed but never had.

## The D-brane action

This is where the module lands. [[Electric and magnetic fields on D-branes]] showed, by T-duality, that a constant electric field on a brane matches a *moving* dual brane with Lagrangian $\propto -\sqrt{1-(2\pi\alpha' E)^2}$, and a constant magnetic field matches a *tilted* dual brane with $\propto -\sqrt{1+(2\pi\alpha' B)^2}$. Both are the electric and magnetic slots of one determinant. Identifying $b=1/(2\pi\alpha')$, so that $F/b = 2\pi\alpha' F$, the determinant form (3) becomes the local abelian Born–Infeld action on a D$p$-brane:
$$ \boxed{\;\mathcal L = -T_p\sqrt{-\det\!\big(\eta_{mn} + 2\pi\alpha'\,F_{mn}\big)}\;}. \tag{7}$$
Here $m,n=0,\dots,p$ run over the brane world-volume and $T_p$ is the brane tension. Two things happened to the constants of (3):

- The overall $b^2$ and the additive $+b^2$ were free normalizations there; on the brane the scale is fixed to $T_p$, and the constant is now physical — at $F=0$, $\mathcal L\to -T_p$, i.e. minus the tension, the rest energy of a static brane.
- The scale $b$ survives only inside the root, as $1/b=2\pi\alpha'$. The dimensionless combination $2\pi\alpha' F$ is the same one that entered the open-string boundary condition in [[Maxwell fields coupled to open strings]] — the field turns nonlinear precisely when $2\pi\alpha' F\sim 1$.

Maxwell is the low-field limit. Expand the root to second order in $F$ (using the determinant identity above with $F\to 2\pi\alpha' F$):
$$ \mathcal L = -T_p\Big(1 + \frac{(2\pi\alpha')^2}{4}F_{mn}F^{mn} + \cdots\Big). $$
The constant $-T_p$ is the rest energy; the $F^2$ term is $-T_p\tfrac{(2\pi\alpha')^2}{4}F_{mn}F^{mn}$, the Maxwell Lagrangian, with the prefactor $T_p(2\pi\alpha')^2$ setting the gauge coupling. The remaining terms are higher powers of $2\pi\alpha' F$. The brane's photon obeys Maxwell only because we usually sit at $F\ll 1/\alpha'$; push the field toward the string scale and the square root's nonlinearities take over.

## Three senses of "exact" (don't conflate them)

This note uses "exact" three times, meaning three different things:

1. The determinant identity (2)$\leftrightarrow$(3) is exact **algebra**.
2. The point-charge energy (6) is exact within **classical 3+1 Born–Infeld electrodynamics**.
3. The brane action (7) is exact in $F$ for **constant** abelian fields at disk (tree) level, and is the *leading* term for slowly varying fields. Derivative corrections ($\partial F$), non-abelian ordering, and string loops all live outside the determinant.

---

## Maxwell vs Born–Infeld (one-page comparison)

| | **Maxwell** | **Born–Infeld** |
|---|---|---|
| **Lagrangian** | $\mathcal L_M = -\tfrac14 F^{\mu\nu}F_{\mu\nu} = s$ | $-b^2\sqrt{1-\tfrac{2s}{b^2}-\tfrac{p^2}{b^4}}+b^2$ |
| **Determinant form** | none (quadratic) | $-b^2\sqrt{-\det(\eta+\tfrac1b F)}+b^2$ |
| **On a D-brane** | low-field limit only | full local action $-T_p\sqrt{-\det(\eta_{mn}+2\pi\alpha' F_{mn})}$ |
| **Field scale** | none — scale-free | maximal field $b=E_{\rm crit}=1/(2\pi\alpha')$ |
| **Constitutive law** ($B{=}0$) | $\vec D=\vec E$ (linear) | $\vec D=\vec E/\sqrt{1-E^2/b^2}$ (nonlinear) |
| **Max electric field** | unbounded | $E\le b$; reached only as $D\to\infty$ |
| **Energy density** ($B{=}0$) | $\tfrac12 D^2$ | $b^2\sqrt{1+D^2/b^2}-b^2$ |
| **Point-charge self-energy** | $\propto Q^2/a$, **diverges** | $\propto b^{1/2}Q^{3/2}$, **finite** |
| **Birefringence** | n/a (linear) | **none** — special |
| **Weak-field relation** | exact | $\mathcal L = s + \mathcal O(s^2) \to \mathcal L_M$ |

## Open questions

- The brane action (7) is fixed here by matching the pure-electric and pure-magnetic cases *separately*. That the same determinant handles simultaneous constant $\vec E$ and $\vec B$ is strongly motivated but not re-derived from a full disk partition function (the beta-function route in [[DBI action as a preview]] confirms it).
- The Maxwell prefactor $T_p(2\pi\alpha')^2$ is the brane gauge coupling $g_{YM}^{-2}$; its exact normalization (factors of $g_s$) is not tracked here.
- Higher-derivative ($\partial F$) corrections are not inside the determinant; Born–Infeld is the leading term of an $\alpha'$ expansion (see [[DBI action as a preview]]).

## Exercise

The maximal field caps $E$; does the same square root cap $B$? Take the pure-magnetic branch $\vec E=0$ in (2), $\mathcal L=-b^2\sqrt{1+B^2/b^2}+b^2$, where the magnetic term enters with a plus sign — the opposite signature sign from electric. (a) Is there any bound on $B$? (b) Compute the magnetic response $\vec H=-\partial\mathcal L/\partial\vec B$ and its large-$B$ limit, and contrast the electric–magnetic asymmetry with the symmetric-looking determinant (7). (c) Why does the *brane* nonetheless treat $E$ and $B$ so differently physically?

> [!success]- Solution
> **(a) No bound on $B$.** With $\vec E=0$, $s=-\tfrac12 B^2$ and $p=0$, so the root is $\sqrt{1+B^2/b^2}$, real for *all* $B$. Only the electric field is capped ($\sqrt{1-E^2/b^2}$ needs $E\le b$); the magnetic root only grows. The maximal field is electric, not magnetic.
>
> **(b) Magnetic response.** $\displaystyle \vec H = -\frac{\partial}{\partial\vec B}\Big(-b^2\sqrt{1+B^2/b^2}+b^2\Big) = \frac{\vec B}{\sqrt{1+B^2/b^2}}.$ At small $B$, $\vec H\to\vec B$ (Maxwell). At large $B$, $H\to b$ — the response **saturates** at $b$ even though $B$ itself is unbounded. Compare the electric relation (4): there $\vec D=\vec E/\sqrt{1-E^2/b^2}$ *blows up* as $E\to b$ while $E$ is capped. The roles of "field" and "response" swap between the electric and magnetic sectors, which is exactly the $\pm$ inside the root — the signature of spacetime, entering the determinant through the $\eta_{mn}$ with one timelike and $p$ spacelike directions.
>
> **(c) Physically**, from [[Electric and magnetic fields on D-branes]]: an electric field is T-dual to a *moving* brane, and its speed cannot exceed $c$, which caps $E$ at $b$. A magnetic field is T-dual to a *tilted* brane, and a brane can tilt by any angle — so $B$ is unbounded. The $1-E^2/b^2$ versus $1+B^2/b^2$ asymmetry is the string-theory statement that "you can't beat the speed of light, but you can rotate as much as you like," written inside one Lorentz-invariant determinant.
