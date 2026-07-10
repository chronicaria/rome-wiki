---
title: Nonlinear electrodynamics
number: "21.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, nonlinear-electrodynamics]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Nonlinear electrodynamics is Maxwell's theory with one rule loosened: instead of forcing the response fields $\vec D=\vec E$, $\vec H=\vec B$, you let a single function — the Lagrangian $\mathcal L$ — decide how the vacuum responds. The vacuum stops being empty and starts acting like a polarizable material. This is the framework Born–Infeld lives in; here we build the machinery, and [[Born-Infeld action]] picks the one $\mathcal L$ that string theory demands.

In a medium, Maxwell's equations come in two families: the ones about $(\vec E,\vec B)$ and the ones about $(\vec D,\vec H)$. What glues the families together is a *constitutive law* $\vec D(\vec E,\vec B)$ fixing how strongly the material polarizes. Ordinary electromagnetism sets that law to the trivial $\vec D=\vec E$. Nonlinear electrodynamics keeps every Maxwell equation but replaces the law by a free function $\mathcal L$ — and applies it to the vacuum itself. Everything below unpacks that one move.

## The split: $(\vec E,\vec B)$ vs $(\vec D,\vec H)$

In a medium Maxwell's equations split into two groups (we set $c=1$ throughout). The **source-free** pair:

$$ \nabla\times\vec E = -\frac{\partial\vec B}{\partial t}, \qquad \nabla\cdot\vec B = 0, $$

and the pair carrying the **free** sources $\rho,\vec j$:

$$ \nabla\cdot\vec D = \rho, \qquad \nabla\times\vec H = \vec j + \frac{\partial\vec D}{\partial t}. $$

The first pair holds *automatically* once $\vec E,\vec B$ descend from potentials ($\vec E=-\nabla\phi-\partial_t\vec A$, $\vec B=\nabla\times\vec A$) — it is the Bianchi identity, geometry, no physics. All the physics is in the second pair, inert until you supply a rule connecting $\vec D,\vec H$ back to $\vec E,\vec B$:

$$ \vec D = \vec D(\vec E,\vec B), \qquad \vec H = \vec H(\vec E,\vec B). $$

In a linear dielectric $\vec D=\epsilon\vec E$; in a linear magnetic material $\vec B=\mu\vec H$. Nonlinear electrodynamics is the case where this rule is nonlinear, and applied to the vacuum. The conceptual leap is that the $(\vec E,\vec B)$ equations are *not* more fundamental than the $(\vec D,\vec H)$ ones: the nonlinear constitutive law is not an add-on describing some material, it *is* the definition of the theory.

## Covariant form: the tensor $G^{\mu\nu}$

Package $\vec E,\vec B$ into $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$ as usual, with $F_{i0}=E_i$, $F_{ij}=\epsilon_{ijk}B_k$ (mostly-plus signature throughout). The source-free pair is the automatic Bianchi identity. The sourced pair is written with a *new* antisymmetric tensor $G^{\mu\nu}$:

$$ \frac{\partial G^{\mu\nu}}{\partial x^\nu} = j^\mu, $$

where $G^{\mu\nu}$ is the same matrix as $F^{\mu\nu}$ but with $\vec E\to\vec D,\ \vec B\to\vec H$:

$$ G^{\mu\nu} = \begin{pmatrix} 0 & D_x & D_y & D_z\\ -D_x & 0 & H_z & -H_y\\ -D_y & -H_z & 0 & H_x\\ -D_z & H_y & -H_x & 0\end{pmatrix}. $$

In Maxwell theory $G=F$ and this is just $\partial_\nu F^{\mu\nu}=j^\mu$. In a nonlinear theory $G\ne F$, and the entire content of the nonlinearity sits in the function $G(F)$. The rest of the note produces that function from a Lagrangian.

## The master formula: $G^{\mu\nu} = -\partial\mathcal L/\partial F_{\mu\nu}$

Where does $G$ come from? From an action. Take a Lagrangian density $\mathcal L(F_{\mu\nu})$ — gauge invariant because it is built from $F$, and **local** because it uses $F$ itself and not derivatives like $\partial_\rho F_{\mu\nu}$ — plus the source coupling:

$$ S = \int d^Dx\, \mathcal L(F_{\mu\nu}) + \int d^Dx\, A_\mu j^\mu. $$

Varying $\mathcal L$ means differentiating with respect to the *antisymmetric* object $F_{\mu\nu}$, which needs one convention. For any function $M$ of the field strengths,

$$ \delta M = \frac{1}{2}\frac{\partial M}{\partial F_{\mu\nu}}\,\delta F_{\mu\nu}, \qquad \frac{\partial M}{\partial F_{\mu\nu}} = -\frac{\partial M}{\partial F_{\nu\mu}}. \tag{1}$$

The $\tfrac12$ undoes the double-counting from summing over both orderings $(\mu\nu)$ and $(\nu\mu)$; the antisymmetry of $\partial M/\partial F_{\mu\nu}$ is *imposed*, matching that of $F$. Now plug in $\delta F_{\mu\nu}=\partial_\mu\delta A_\nu-\partial_\nu\delta A_\mu$, use the antisymmetry to fold both terms into one, and integrate by parts:

$$ \delta\!\int d^Dx\,\mathcal L = \int d^Dx\,\frac12\frac{\partial\mathcal L}{\partial F_{\mu\nu}}(\partial_\mu\delta A_\nu-\partial_\nu\delta A_\mu) = \int d^Dx\,\delta A_\mu\,\partial_\nu\!\Big(\frac{\partial\mathcal L}{\partial F_{\mu\nu}}\Big). $$

Adding the source term, $\delta S=0$ for all $\delta A_\mu$ gives $\partial_\nu(\partial\mathcal L/\partial F_{\mu\nu}) + j^\mu = 0$. Comparing to $\partial_\nu G^{\mu\nu}=j^\mu$ forces the identification

$$ \boxed{\;G^{\mu\nu} = -\frac{\partial\mathcal L}{\partial F_{\mu\nu}}\;}. \tag{2}$$

This is the engine of the framework: name any $\mathcal L(F)$ and (2) hands you $G$, hence the constitutive law. Choosing $\mathcal L$ is choosing a theory.

## Reading off $\vec D$ and $\vec H$

Apply (2) componentwise. With $E_i=F_{i0}=-F_{0i}$, so $\partial/\partial E_i = -\partial/\partial F_{0i}$:

$$ D_i = G^{0i} = -\frac{\partial\mathcal L}{\partial F_{0i}} = \frac{\partial\mathcal L}{\partial E_i}, \qquad\text{i.e.}\qquad \boxed{\;\vec D = \frac{\partial\mathcal L}{\partial\vec E}\;}. $$

Here is the reading that makes the rest inevitable: $\vec E\sim\dot{\vec A}$ plays the role of a velocity, so $\vec D=\partial\mathcal L/\partial\vec E$ is the canonical momentum conjugate to $\vec A$. The same computation on the magnetic side gives

$$ \boxed{\;\vec H = -\frac{\partial\mathcal L}{\partial\vec B}\;}. $$

Because $\vec D$ is a momentum, the energy density is a Legendre transform of $\mathcal L$ — exactly $H=p\dot q - L$ from mechanics, with $\vec D\leftrightarrow p$ and $\vec E\leftrightarrow\dot q$:

$$ \mathcal H = \vec D\cdot\vec E - \mathcal L. \tag{3}$$

Maxwell is the sanity check. With $\mathcal L_M = -\tfrac14 F^{\mu\nu}F_{\mu\nu} = \tfrac12(E^2-B^2)$, differentiation gives $\vec D=\vec E$, $\vec H=\vec B$ — the trivial linear law — and (3) gives $\mathcal H = \vec D\cdot\vec E-\tfrac12(E^2-B^2)=\tfrac12(E^2+B^2)$, the familiar field energy. Maxwell is the one case where the vacuum is not polarizable; any nonlinear $\mathcal L$ makes $\vec D\ne\vec E$, and the vacuum responds.

## What can $\mathcal L$ depend on? The two invariants

Gauge invariance is free. Lorentz invariance is the real constraint: $\mathcal L$ must be a Lorentz scalar built from $F_{\mu\nu}$ with no free indices. In four dimensions there are **exactly two** independent such scalars:

$$ s \equiv -\frac{1}{4}F^{\mu\nu}F_{\mu\nu} = \frac{1}{2}(E^2 - B^2), \qquad p \equiv -\frac{1}{4}\tilde F^{\mu\nu}F_{\mu\nu} = \vec E\cdot\vec B, $$

where $\tilde F^{\mu\nu}=\tfrac12\epsilon^{\mu\nu\rho\sigma}F_{\rho\sigma}$ is the **dual** field strength (it swaps $\vec E\leftrightarrow\vec B$ up to signs). So in four dimensions the whole freedom of the theory is one function of two numbers:

$$ \boxed{\;\mathcal L = \mathcal L(s,p)\;}. $$

Maxwell is simply $\mathcal L = s$. Everything else — Born–Infeld included — is a different choice of this function. Note $s$ is a true scalar but $p=\vec E\cdot\vec B$ is a *pseudo*scalar (it flips sign under parity), so a parity-invariant theory can use $p$ only through $p^2$.

Why the list stops at two. Given a generic (non-null) electromagnetic field, you can always find a frame where $\vec E$ and $\vec B$ are *parallel* — boosting mixes them until the perpendicular parts cancel. In that frame the field is described by just two magnitudes, $E_\parallel$ and $B_\parallel$, and

$$ E_\parallel^2 - B_\parallel^2 = 2s, \qquad E_\parallel B_\parallel = p. $$

Any Lorentz scalar built algebraically from $F$ is a frame-independent number, so it can depend only on these two frame-independent magnitudes — on $s$ and $p$. There is nothing else. (Degenerate cases $s=0$ or $p=0$ follow by continuity.) That is why $s$ and $p$ are the only invariants in four dimensions.

One caveat on locality. All of this assumes $\mathcal L$ is algebraic in $F$. Derivative terms like $(\partial_\rho F_{\mu\nu})(\partial^\rho F^{\mu\nu})$ are also legal, gauge-invariant, and Lorentz-invariant, but they live *outside* this framework. Born–Infeld and its neighbors are the local, algebraic $\mathcal L(s,p)$; the $\partial F$ corrections are a separate story, and the first thing this framework misses.

## Why this is the right home for the brane gauge field

Two demands pick out the brane theory from the infinite space of $\mathcal L(s,p)$:

1. **Reduce to Maxwell at weak field** — because quantizing open strings already produced a genuine Maxwell photon on the brane ([[Endpoint charge|module 19]]). So $\mathcal L \to s$ as $F\to 0$.
2. **A maximal electric field** $E_{\rm crit}=1/(2\pi\alpha')\equiv b$ — because a charged string endpoint cannot be pulled harder than the string tension ([[Electric and magnetic fields on D-branes]]). Maxwell has no such scale, so the theory *must* be nonlinear.

These two conditions nearly pin down $\mathcal L$, and the simplest function meeting them is the Born–Infeld Lagrangian — the next note, [[Born-Infeld action]].

## Open questions

- General nonlinear theories exhibit **birefringence**: different polarizations travel at different speeds through a background field. Born–Infeld is the special member with *no* birefringence — a distinguishing virtue not derived here (it comes from the specific $p^2$ term in the BI Lagrangian).
- In $D\ne 4$ the counting of invariants changes — there is no single dual scalar $p$ — yet the determinant form of Born–Infeld still makes sense in any dimension. The clean "function of $s,p$" statement is special to four dimensions.

## Exercise

Show that the Maxwell Lagrangian $\mathcal L_M = \tfrac12(E^2-B^2)$ gives back the trivial constitutive law and the standard field energy. Concretely, use $\vec D=\partial\mathcal L/\partial\vec E$, $\vec H=-\partial\mathcal L/\partial\vec B$, and $\mathcal H=\vec D\cdot\vec E-\mathcal L$ to compute $\vec D$, $\vec H$, and $\mathcal H$. Then, as a one-line sign check, confirm that a Lagrangian with the *wrong* relative sign, $\mathcal L=\tfrac12(E^2+B^2)$, would give the unphysical $\vec H=-\vec B$ — showing why the $E^2-B^2$ combination (i.e. $s$) is forced.

> [!success]- Solution
> Differentiate componentwise. Since $\mathcal L_M=\tfrac12(E_x^2+E_y^2+E_z^2) - \tfrac12(B_x^2+B_y^2+B_z^2)$,
> $$ D_i = \frac{\partial\mathcal L_M}{\partial E_i} = E_i \;\Rightarrow\; \vec D=\vec E, \qquad H_i = -\frac{\partial\mathcal L_M}{\partial B_i} = -(-B_i) = B_i \;\Rightarrow\; \vec H=\vec B. $$
> The two minus signs on the magnetic side — one from the definition $\vec H=-\partial\mathcal L/\partial\vec B$, one from the $-B^2$ in $\mathcal L_M$ — cancel to give $\vec H=+\vec B$. This is the trivial linear law: the Maxwell vacuum is not polarizable.
>
> For the energy, use $\vec D=\vec E$:
> $$ \mathcal H = \vec D\cdot\vec E - \mathcal L_M = E^2 - \tfrac12(E^2-B^2) = \tfrac12(E^2+B^2), $$
> the familiar electromagnetic field energy — manifestly positive, as an energy must be.
>
> **Sign check.** Take $\mathcal L=\tfrac12(E^2+B^2)$ instead. Now $H_i=-\partial\mathcal L/\partial B_i=-B_i$, so $\vec H=-\vec B$: the magnetic response points *backwards*. Equivalently the energy would come out $\mathcal H=\tfrac12(E^2-B^2)$, which is *negative* for strong magnetic fields — unbounded below, an unstable theory. The relativistically correct scalar is $s=\tfrac12(E^2-B^2)$ (from $-\tfrac14 F^2$); its sign is fixed by Lorentz invariance, and it is exactly the sign that makes the energy positive. The apparent sign flip between $\mathcal L$ and $\mathcal H$ on the $B$ terms is the Legendre transform doing its job.
