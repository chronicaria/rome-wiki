---
title: Maxwell fields coupled to open strings
number: "21.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, brane-gauge-coupling]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A background Maxwell field $A_m$ on a D-brane couples to an open string only through its two endpoints — just as it would to a pair of charged point particles — and that coupling replaces the free Neumann boundary condition by the mixed condition $\partial_\sigma X_m - 2\pi\alpha'\,F_{mn}\,\partial_\tau X^n = 0$.

## Where the new physics sits

Picture the open string as a taut elastic thread with a charged bead glued to each end. The gauge field on the brane tugs sideways on the beads; the string tension resists. An interior point of the thread feels nothing — it carries no charge, and the field lives on the brane, not in the bulk of the worldsheet. All the new physics is at the ends. The boundary condition below is the force balance for one bead: how much the string bends (the $\sigma$-derivative) is fixed by how fast the bead moves (the $\tau$-derivative), with the field strength as the exchange rate.

## Where the coupling lives: the endpoints

A relativistic point particle of charge $q$ couples to a potential through $q\int A_\mu\,\frac{dx^\mu}{d\tau}\,d\tau$ — the potential integrated along the particle's worldline. An open string's endpoints carry exactly this kind of $U(1)$ charge: quantizing the open string produces a massless photon on the brane, and its two ends are the sources of that field ([[Endpoint charge]]). The natural coupling is then a boundary term — one worldline integral for each end. Added to the free string action:

$$ S = \int d\tau\,d\sigma\, \mathcal L(\dot X, X') \;+\; \int d\tau\, A_m(X)\,\frac{dX^m}{d\tau}\Big|_{\sigma=\pi} \;-\; \int d\tau\, A_m(X)\,\frac{dX^m}{d\tau}\Big|_{\sigma=0}. \tag{1}$$

Here $\mathcal L$ is the free (Nambu–Goto) Lagrangian density. Two features stand out. The ends enter with opposite sign because they carry opposite charge $\pm1$ — one end a "quark," the other an "antiquark," in the old flux-tube language; those signs are the orientation signs of the worldsheet boundary, $\sigma=\pi$ traversed one way and $\sigma=0$ the other. And only brane-tangent indices appear: $A_m$ lives on the world-volume ($m=0,\dots,p$), so the string couples to it only along directions the brane fills, never along the normal directions the endpoints are pinned to.

Gauge invariance is automatic. Under $A_m\to A_m+\partial_m\lambda$ each endpoint term shifts by $\int d\tau\,\partial_m\lambda\,\frac{dX^m}{d\tau}=\int d\tau\,\frac{d\lambda}{d\tau}=\lambda(X_{\text{final}})-\lambda(X_{\text{initial}})$ — a pure boundary-in-time term. With the endpoint histories held fixed at the initial and final times, it drops out of the equations of motion. The physics depends on $F$, not $A$.

> **Index convention** (matches [[Definition of a Dp-brane]]): $\mu,\nu$ are spacetime indices $0..d$; $m,n$ are brane world-indices $0..p$; $i,j$ are spatial brane indices; $a,b$ are normal directions $p{+}1..d$. The gauge potential $A_m$ carries a brane index.

## Rewrite the coupling with $F_{mn}$

We care about a **constant** field strength $F_{mn}=\partial_m A_n-\partial_n A_m$. For constant $F$ a convenient gauge is

$$ A_n(x) = \tfrac{1}{2}\,F_{mn}\, x^m, \tag{2}$$

which checks out: $\partial_p A_n-\partial_n A_p = \tfrac12 F_{pn}-\tfrac12 F_{np}=F_{pn}$, where antisymmetry makes the two halves add. Substituting (2) into the endpoint terms of (1) and combining the ends turns the coupling into

$$ S = \int d\tau\,d\sigma\,\mathcal L \;+\; \frac{1}{2}\int d\tau\, F_{mn}\Big( X^m\,\partial_\tau X^n\big|_{\sigma=\pi} - X^m\,\partial_\tau X^n\big|_{\sigma=0}\Big). \tag{3}$$

The coupling now runs through the gauge-invariant $F_{mn}$ rather than the potential $A_m$. Local dynamics depend only on $F$; genuinely global data — Wilson lines, holonomy around a compact direction — are separate and handled in [[Wilson lines]].

## Deriving the modified boundary condition

Vary $S$ and watch the endpoints. Write $\mathcal P^\tau_\mu=\partial\mathcal L/\partial\dot X^\mu$ and $\mathcal P^\sigma_\mu=\partial\mathcal L/\partial X'^\mu$ for the free momentum densities. The variation of (3) splits into a bulk piece and boundary pieces:

$$ \delta S = \int d\tau\,d\sigma\,\big(\mathcal P^\tau_\mu\,\partial_\tau\delta X^\mu + \mathcal P^\sigma_\mu\,\partial_\sigma\delta X^\mu\big) + \tfrac12\int d\tau\, F_{mn}\big(\delta X^m\partial_\tau X^n + X^m\partial_\tau\delta X^n\big)\Big|^{\sigma=\pi}_{\sigma=0}. $$

Integrating the bulk term by parts gives the usual wave equation $\partial_\tau\mathcal P^\tau_\mu+\partial_\sigma\mathcal P^\sigma_\mu=0$ — unchanged, since the field only touches the boundary — plus surface terms. In the endpoint piece, the $X^m\partial_\tau\delta X^n$ term is integrated by parts in $\tau$; its total-$\tau$-derivative part is irrelevant to the equations of motion, and using $F_{mn}=-F_{nm}$ the two $F$-terms combine. Collecting everything that multiplies $\delta X^m$ at an endpoint:

- **Normal directions $X^a$:** nothing changes. Still Dirichlet, $\delta X^a=0$ — the endpoint stays pinned to the brane, and no field couples there.
- **Tangent directions $X^m$:** the variation is free, so the coefficient must vanish:

$$ \mathcal P^\sigma_m + F_{mn}\,\partial_\tau X^n = 0, \qquad \sigma = 0,\pi. \tag{4}$$

This holds at both ends. Each carries an opposite endpoint sign and an opposite boundary-orientation sign, and the two flips cancel, so (4) comes out identical at $\sigma=0$ and $\sigma=\pi$. Setting $F=0$ recovers the free Neumann condition $\mathcal P^\sigma_m=0$; the $F$-term is the entire new ingredient.

To make (4) concrete, pick the orthonormal worldsheet gauge

$$ \dot X\cdot X'=0, \qquad \dot X^2+X'^2=0, $$

valid in both static and light-cone gauges. Here the Nambu–Goto $\sigma$-momentum collapses to a single clean expression,

$$ \mathcal P^\sigma_\mu = -\frac{1}{2\pi\alpha'}\,\partial_\sigma X_\mu, \tag{5}$$

i.e. it is just the string tension $T_0=\tfrac{1}{2\pi\alpha'}$ times the bending $\partial_\sigma X_\mu$ (with a sign). Insert (5) into (4) and multiply through by $-2\pi\alpha'$:

$$ \boxed{\;\partial_\sigma X_m - 2\pi\alpha'\, F_{mn}\,\partial_\tau X^n = 0, \qquad \sigma = 0,\pi.\;} \tag{6}$$

Equation (6) is a force balance. The bending $\partial_\sigma X_m$, multiplied by $T_0$, is the tension's pull; $F_{mn}\partial_\tau X^n$ is the Lorentz force on the moving charged endpoint (field times velocity). The two cancel — the bead sits where tension and electromagnetic tug balance. When $F=0$ the string meets the brane straight on (pure Neumann); turning on $F$ tilts it.

The condition is genuinely mixed. It ties the $\sigma$-derivative (Neumann data) to the $\tau$-derivative (the endpoint's velocity), so it is neither pure Neumann ($\partial_\sigma X=0$, free end) nor pure Dirichlet ($\partial_\tau X=0$, frozen end) but interpolates between them. The magnetic case shows the endpoint of the interpolation: cranking $F\to\infty$ drives the end toward Dirichlet, an infinitely strong field freezing the endpoint's motion as if the brane had filled with lower-dimensional branes the string must end on.

> **The one factor that matters.** The combination $2\pi\alpha' F$ is dimensionless: $\alpha'$ has units of length$^2$ and $F$ has units of length$^{-2}$. Everything downstream is an expansion in this number. The $2\pi\alpha'$ traces entirely to the tension $T_0=\tfrac{1}{2\pi\alpha'}$ in (5); drop the $2\pi$ or the $\alpha'$ and the later identification of the critical field $E_{\rm crit}=T_0$ collapses. This is why $2\pi\alpha' F$ becomes the expansion parameter of the whole brane Lagrangian ([[Born-Infeld action]]).

## Why this already hints that Maxwell isn't the whole story

Condition (6) is linear in $F$, so the endpoint coupling itself is as tame as electromagnetism. The nonlinearity is invisible here; it surfaces only when you ask for the effective action of $F$ — that is, integrate the string out. Two routes reach the same nonlinear answer.

- **Moving-brane route.** T-duality reads a purely electric $F$ on the brane as a moving dual brane ([[Electric and magnetic fields on D-branes]]). A moving brane carries a relativistic $\sqrt{1-v^2}$ in its Lagrangian; translated back, that square root is the seed of the Born–Infeld form, and it explains the field bound $E<E_{\rm crit}$ since $v<1$.
- **Conformal-invariance route.** Treat $A_m(X)$ as a boundary interaction of the worldsheet theory and demand the quantum theory stay conformal, so its boundary beta function vanishes. The resulting equation for $F$ is not Maxwell's $\partial_m F^{mn}=0$ — it is nonlinear, and the action that produces it is precisely Born–Infeld.

Both routes land in the same place: the endpoint coupling is linear in the prescribed potential, but the self-consistent local dynamics of the brane gauge field stop being Maxwellian once fields reach the string scale $F\sim 1/\alpha'$.

## Scope

Equation (6) is an exact classical endpoint condition for the local worldsheet action with a prescribed constant $F_{mn}$. It is not yet an equation of motion for $A_m$ itself — that requires choosing an effective action for $F$, which is what the rest of the module builds toward the Born–Infeld determinant.

## Open questions

- The coupling is written for **constant** $F$. For $F_{mn}(X)$ the gauge (2) fails and the boundary theory picks up $\partial F$ terms — exactly the higher-derivative corrections Born–Infeld omits. Flagged for when field gradients matter.
- The endpoint charges $\pm1$ are asserted from [[Endpoint charge]]. The absolute normalization of the brane gauge kinetic term is fixed later by matching to brane tension and string coupling, not here.
- In a nonzero Kalb–Ramond background the gauge-invariant object is the combination $B+2\pi\alpha' F$, not bare $F$ ([[Maxwell fields on branes]]). This note sets that background to zero.

## Exercise

Work in the electric case: a constant field with only $F_{25,0}=E$ nonzero (so $F_{0,25}=-E$ by antisymmetry), and only $X^0$ and $X\equiv X^{25}$ feel it. Starting **from the boxed condition (6)**, write out the two boundary conditions explicitly (be careful with the mostly-plus signature: $X_0=-X^0$). Then define $\mathcal E\equiv 2\pi\alpha' E$ and show the equations become symmetric under $X^0\leftrightarrow X$. Finally, without any T-duality, argue directly from your two equations what goes wrong as $\mathcal E\to 1$.

> [!success]- Solution
> Take $m=0$ in (6). The only nonzero $F_{0n}$ is $F_{0,25}=-E$, so $F_{0n}\partial_\tau X^n = -E\,\partial_\tau X$, and $\partial_\sigma X_0 = -\partial_\sigma X^0$ in mostly-plus signature. Equation (6) gives
> $$ -\partial_\sigma X^0 - 2\pi\alpha'(-E)\,\partial_\tau X = 0 \;\Longrightarrow\; \partial_\sigma X^0 - 2\pi\alpha' E\,\partial_\tau X = 0. $$
> Now take $m=25$: the only nonzero $F_{25,n}$ is $F_{25,0}=E$, so $F_{25,n}\partial_\tau X^n = E\,\partial_\tau X^0$, and $\partial_\sigma X_{25}=\partial_\sigma X$ (spatial, index up = index down). So
> $$ \partial_\sigma X - 2\pi\alpha' E\,\partial_\tau X^0 = 0. $$
> With $\mathcal E\equiv 2\pi\alpha' E$ the pair is
> $$ \partial_\sigma X^0 = \mathcal E\,\partial_\tau X, \qquad \partial_\sigma X = \mathcal E\,\partial_\tau X^0, $$
> manifestly symmetric under $X^0\leftrightarrow X$ (the two coordinates trade roles, so the electric field couples time and space democratically). The sign matters: had you dropped the antisymmetry and used $F_{0,25}=+E$, the two lines would have picked up mismatched signs and the $X^0\leftrightarrow X$ symmetry would break — a quick self-check that you kept $F$ antisymmetric.
>
> **What breaks at $\mathcal E\to1$.** Package the pair with the light-cone worldsheet derivatives $\partial_\pm\equiv\tfrac12(\partial_\tau\pm\partial_\sigma)$, so $\partial_\sigma=\partial_+-\partial_-$ and $\partial_\tau=\partial_++\partial_-$. Substituting and collecting the $\partial_+$ data on one side,
> $$ \partial_+\begin{pmatrix}X^0\\ X\end{pmatrix} = \frac{1}{1-\mathcal E^2}\begin{pmatrix}1+\mathcal E^2 & 2\mathcal E\\ 2\mathcal E & 1+\mathcal E^2\end{pmatrix}\partial_-\begin{pmatrix}X^0\\ X\end{pmatrix}. $$
> This is an invertible linear relation between right- and left-moving data — for any $\mathcal E<1$ it fixes the boundary reflection cleanly. At $\mathcal E=1$ the prefactor $1/(1-\mathcal E^2)$ diverges: the matrix acting on the $\partial_+$ data becomes singular, so the pair can no longer be solved for both $\partial_+$-derivatives in terms of the $\partial_-$ data — the boundary relation degenerates (it collapses to the single constraint $\partial_-(X^0+X)=0$). Physically $\mathcal E=1$ means $E=1/(2\pi\alpha')=T_0$: the electromagnetic tug on the endpoint has reached the maximal tension the string can supply, and the force balance (6) has no room left. That is the critical field $E_{\rm crit}=T_0$, pinned down independently in [[Electric and magnetic fields on D-branes]].
