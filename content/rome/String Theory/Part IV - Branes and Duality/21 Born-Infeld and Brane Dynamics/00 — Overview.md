---
title: 21 — Born-Infeld and Brane Dynamics (Overview)
number: "21.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, born-infeld]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The photon living on a D-brane looks like Maxwell only at weak field. String theory caps the electric field at $E_{\rm crit}=1/(2\pi\alpha')$, and a theory with a built-in maximal field cannot be linear — the exact local dynamics is the **Born–Infeld** Lagrangian, a square-root determinant whose leading term *is* Maxwell.

## A ceiling forces nonlinearity

A charged string endpoint on a D-brane can only be pulled so hard before the string tension gives out, so the electric field on the brane has a ceiling — and a theory with a ceiling cannot be Maxwell. That single fact forces the entire chapter. Maxwell theory is scale-free: nothing in $-\tfrac14 F^2$ fixes a field magnitude, so $E$ is unbounded. The moment you find a field you *cannot* exceed, you know the true theory is nonlinear. The nonlinear theory that has exactly this ceiling and reduces to Maxwell below it is Born–Infeld, and with the brane tension out front it is the D-brane's own action:
$$ \mathcal L = -T_p\sqrt{-\det(\eta_{mn}+2\pi\alpha' F_{mn})}. \tag{1} $$

The relativistic particle Lagrangian $L=-mc^2\sqrt{1-v^2/c^2}$ has a square root that *enforces* a speed limit $v<c$. Born–Infeld is the same trick for fields: a square root that enforces a field limit $E<b$, with $b=1/(2\pi\alpha')$ playing the role of $c$. Expand either root for small argument and the "linear" theory comes back — Newton from the particle, Maxwell from the field. The nonlinearity is the fingerprint of the ceiling.

## Why this is the payoff of the T-duality chapter

In [[Endpoint charge|module 19]] we quantized open strings on a D-brane and found a massless $U(1)$ vector — a photon on the world-volume. But that was a *low-energy* accident. Open strings are extended objects whose charged endpoints carry tension, and at strong field the stringy nature of the charge asserts itself.

The mechanism that reveals it is T-duality ([[Spectrum invariance under R to alpha-prime over R|module 20]]). The same boost/rotation arguments that turned a compact dimension into its dual here turn **an electric field into a moving brane** and **a magnetic field into a tilted brane**. A moving brane carries the relativistic factor $\sqrt{1-\beta^2}=\sqrt{1-(2\pi\alpha' E)^2}$; a tilted brane is longer by $\sqrt{1+\tan^2\!\alpha}=\sqrt{1+(2\pi\alpha' B)^2}$. Both are limits of the *one* determinant in (1) — the relative sign is just the Minkowski signature (mostly-plus signature: the time–space slot gives $1-\mathcal E^2$, the space–space slot gives $1+\mathcal B^2$). Born–Infeld, invented in the 1930s to give the electron a finite self-energy and then abandoned, turns out to be exactly the constant-field effective action string theory hands you.

## The four beats of the argument

1. **The coupling.** A prescribed Maxwell field couples to the open string only at its charged **endpoints**, and that endpoint coupling changes the free (Neumann) boundary condition into a *mixed* one, $\partial_\sigma X_m - 2\pi\alpha' F_{mn}\partial_\tau X^n=0$. The dimensionless knob is $2\pi\alpha' F$. → 21.1 [[Maxwell fields coupled to open strings]]
2. **The ceiling.** Feed that boundary condition through T-duality: electric field $\to$ moving brane, so $|E|<E_{\rm crit}=1/(2\pi\alpha')=T_0$ (the string tension); magnetic field $\to$ tilted brane, so compact flux is quantized. A bounded field is the death of linearity. → 21.2 [[Electric and magnetic fields on D-branes]]
3. **The framework.** Nonlinearity means the vacuum acts like a polarizable medium: $\vec D\neq\vec E$. The clean language is a Lagrangian $\mathcal L(s,p)$ of the two field invariants, with $\vec D=\partial\mathcal L/\partial\vec E$. → 21.3 [[Nonlinear electrodynamics]]
4. **The theory.** Demand (i) reduce to Maxwell at small $F$ and (ii) a maximal field $b$. The simplest $\mathcal L$ that does both is Born–Infeld; it rewrites as the determinant (1), gives a point charge finite self-energy, and is the D-brane action. → 21.4 [[Born-Infeld action]] (work product lives here)

Adding the brane's own shape fluctuations promotes Born–Infeld to the **Dirac–Born–Infeld (DBI)** action by swapping $\eta\to\gamma$ (the pullback metric). → 21.5 [[DBI action as a preview]]

## What is and isn't being claimed

- **Exact** here (classical, local): the endpoint coupling $\int_{\partial\Sigma}A_m\,dX^m$, the mixed boundary condition for constant $F$, the electric/magnetic T-dual pictures, and the determinant algebra with its weak-field Maxwell limit.
- **Effective-action statement:** the determinant (1) is exact to all powers of a *constant* abelian $F$ at tree level (disk order), and is the leading term when $F$ varies slowly.
- **Not** inside the determinant: gradients $\partial F$, string loops, non-abelian stacks, and RR/Wess–Zumino couplings. Those are separate higher corrections, deferred.

## Open questions

- The determinant (1) is fixed here by matching the pure-electric and pure-magnetic T-dual Lagrangians *separately*; that the *same* determinant handles a simultaneous $\vec E$ and $\vec B$ is strongly motivated (and independently confirmed by the world-sheet beta-function route in 21.5 [[DBI action as a preview]]) but not re-derived here from a full disk partition function.
- The Maxwell-limit prefactor $T_p(2\pi\alpha')^2$ is the brane gauge coupling $g_{\rm YM}^{-2}$; its precise $g_s$ normalization is not tracked.
- The non-abelian generalization ($N$ coincident branes, $U(N)$) is genuinely subtle: $\det$ and $\mathrm{Tr}$ don't commute, so an ordering prescription (Tseytlin's symmetrized trace) is needed. Beyond first-pass scope.

## Exercise

The load-bearing claim of this chapter is that **the brane photon is Maxwell only at low field, and Born–Infeld above it.** Test it end to end, using only this note:

1. State in one line why a *maximal* electric field is incompatible with Maxwell theory, and name the value of that maximal field on a D-brane.
2. Expand the brane action (1) to second order in $F$ and read off the coefficient of $F_{mn}F^{mn}$. Show the leading nonconstant term is the Maxwell Lagrangian, and say what the constant term $-T_p$ means physically.
3. At what field strength do the neglected higher-order terms become comparable to Maxwell?

> [!success]- Solution
> **1. Maximal field vs Maxwell.** Maxwell's Lagrangian $-\tfrac14 F^2$ is quadratic and scale-free: nothing in it sets a field magnitude, so $E$ is unbounded. A ceiling $|E|<E_{\rm crit}$ is a *scale*, so the true Lagrangian must be nonlinear. On a D-brane the ceiling is $E_{\rm crit}=1/(2\pi\alpha')=T_0$, the string tension — the electric pull on a unit-charge endpoint can never beat the tension holding the string together.
>
> **2. Weak-field expansion.** Write $M=\eta+2\pi\alpha' F$ and use $\det M=\det\eta\,\det(1+\eta^{-1}(2\pi\alpha'F))$ with $\det(1+A)=\exp\operatorname{tr}\ln(1+A)=\exp\operatorname{tr}(A-\tfrac12A^2+\cdots)$. Here $A^m{}_n=2\pi\alpha'\,F^m{}_n$, so $\operatorname{tr}A=(2\pi\alpha')F^m{}_m=0$ (antisymmetry) and $\operatorname{tr}A^2=(2\pi\alpha')^2 F^m{}_n F^n{}_m=-(2\pi\alpha')^2 F_{mn}F^{mn}$. Then
> $$\det M=-\Big(1-\tfrac12\operatorname{tr}A^2+\cdots\Big)=-\Big(1+\tfrac{(2\pi\alpha')^2}{2}F_{mn}F^{mn}+\cdots\Big),$$
> and $\sqrt{-\det M}=1+\tfrac{(2\pi\alpha')^2}{4}F_{mn}F^{mn}+O(F^4)$. Therefore
> $$\mathcal L=-T_p\sqrt{-\det(\eta+2\pi\alpha'F)}=-T_p-T_p\,\frac{(2\pi\alpha')^2}{4}F_{mn}F^{mn}+\cdots.$$
> The constant $-T_p$ is the brane's rest energy density (a static brane has Lagrangian $=-$tension). The next term is $-T_p\tfrac{(2\pi\alpha')^2}{4}F_{mn}F^{mn}=+T_p(2\pi\alpha')^2\,s$ — **exactly the Maxwell Lagrangian** $-\tfrac14 F^2\propto s$, up to the prefactor $T_p(2\pi\alpha')^2$ that fixes the gauge coupling. (Sign check: $F_{mn}F^{mn}=2(B^2-E^2)$, so $-\tfrac14 F^2=\tfrac12(E^2-B^2)=s$.)
>
> **3. When corrections matter.** Each higher term carries another power of the dimensionless $2\pi\alpha' F$, so they become comparable to Maxwell when $2\pi\alpha' F\sim 1$, i.e. $F\sim 1/\alpha'$ — string-scale fields. Below that, Maxwell is an excellent approximation; at that scale, the full Born–Infeld square root takes over.
