---
title: Free boson OPEs
number: "22.8"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, polyakov-cft]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Every short-distance product in the free-boson worldsheet CFT is built by Wick-contracting fields against a single number: the propagator $\partial X(z)\,\partial X(w)\sim-\tfrac{\alpha'}{2}(z-w)^{-2}$. This note runs the four contractions that matter — the propagator itself, $T\,\partial X$ ($\partial X$ is a weight-1 primary), $T\,e^{ikX}$ (a vertex operator of weight $\alpha'k^2/4$), and $T\,T$ (which exposes the central charge $c=1$).

## What an OPE is

Think of a local operator as a *disturbance* stamped onto the worldsheet at a point. When you bring two disturbances close together, from far away they look like one combined disturbance — some superposition of the operators the theory has to offer. The **operator product expansion (OPE)** is the precise Taylor-like series for that merger:
$$\mathcal O_i(z)\,\mathcal O_j(w)=\sum_k C^k_{ij}(z-w)\,\mathcal O_k(w).\tag{1}$$
It is not an approximation. Inside a correlation function (with all other operators kept far away) it is an *exact* identity, convergent up to the next nearest insertion. The singular terms — the ones that blow up as $z\to w$ — carry all the physics; they play the role that commutators play in canonical quantization, telling you how operators transform and what algebra they close into. Everything finite we bundle into "$+\ldots$".

For a free boson the *entire* theory is one contraction. Learn the double pole below, and every OPE is bookkeeping — count the ways two $\partial X$'s can touch, and Taylor-expand.

The working recipe:

1. Write composites with normal-ordering colons $:\ :$ (the quantum "don't self-contract" instruction).
2. Contract every pair of $\partial X$'s across the two operators, each contraction $\to$ one propagator.
3. Keep only singular powers of $z-w$.
4. Taylor-expand any surviving field from $z$ to $w$.
5. Read off weights by matching to the stress-tensor template.

This is just Wick's theorem, reread as a short-distance calculus.

## The one number: the propagator

The Euclidean free-scalar action and its equation of motion are
$$S=\frac{1}{4\pi\alpha'}\int d^2\sigma\,\partial_\alpha X\,\partial^\alpha X,\qquad \partial\bar\partial X=0.$$
To get the propagator, use that the path integral of a total derivative vanishes; inserting $X(\sigma')$ before integrating by parts gives $\langle\partial^2 X(\sigma)\,X(\sigma')\rangle=-2\pi\alpha'\,\delta(\sigma-\sigma')$. Solving this with the 2D Green's-function identity $\partial^2\ln|\sigma-\sigma'|^2=4\pi\delta(\sigma-\sigma')$ yields
$$X(\sigma)X(\sigma')=-\frac{\alpha'}{2}\ln(\sigma-\sigma')^2+\ldots$$
The logarithm is a warning: $X$ itself has no clean transformation law under conformal maps, so **the fundamental field $X$ is not a good CFT operator.** Its derivative is. Splitting $X(z,\bar z)=X(z)+\bar X(\bar z)$, the holomorphic half obeys $X(z)X(w)=-\tfrac{\alpha'}{2}\ln(z-w)+\ldots$, and differentiating once in each argument turns the log into a clean pole:
$$\boxed{\,\partial X(z)\,\partial X(w)=-\frac{\alpha'}{2}\frac{1}{(z-w)^2}+\text{non-singular}\,}\tag{2}$$
This single double pole is the whole dynamical content of the free boson. (Check: $\partial_z\!\left[-\tfrac{\alpha'}{2}\ln(z-w)\right]=-\tfrac{\alpha'}{2}(z-w)^{-1}$, then $\partial_w(z-w)^{-1}=+(z-w)^{-2}$, giving $-\tfrac{\alpha'}{2}(z-w)^{-2}$.) The $\alpha'$ out front will reappear as $\hbar$ would — it marks these as quantum effects.

For the string's $D$ embedding coordinates, attach a spacetime index and the flat metric:
$$\partial X^\mu(z)\,\partial X^\nu(w)\sim-\frac{\alpha'}{2}\frac{\eta^{\mu\nu}}{(z-w)^2}.$$
The $\eta^{\mu\nu}$ (mostly-plus signature) means contractions can carry a timelike minus sign — yet each of the $D$ directions contributes an *identical, positive* amount to the central charge below, because there the two indices meet as $\eta^{\mu\nu}\eta_{\mu\nu}=D$. There is no sign subtlety in the OPE route to $c$; the well-known "timelike sign squares away" caveat belongs to the mode-commutator route in [[Virasoro algebra and central charge]], not here.

## The weight dictionary

An operator $\mathcal O$ has weight $(h,\bar h)$ if under $z\to z'(z)$ it transforms as $\mathcal O\to(\partial z'/\partial z)^{-h}(\partial\bar z'/\partial\bar z)^{-\bar h}\,\mathcal O$. Equivalently — and this is the version we use — its singular OPE with the [[Worldsheet stress tensor|stress tensor]] reads
$$T(z)\,\mathcal O(w)=\frac{h\,\mathcal O(w)}{(z-w)^2}+\frac{\partial\mathcal O(w)}{z-w}+\ldots\tag{3}$$
The double pole hands you $h$; the single pole is always $\partial\mathcal O$ (the operator's own derivative). An operator is **primary** when its $T\mathcal O$ OPE has nothing worse than that double pole — no higher poles. The combination $\Delta=h+\bar h$ is the scaling dimension, $s=h-\bar h$ the spin. All that follows is: build $T$, contract, and match to (3).

Throughout, $T(z)=-\tfrac{1}{\alpha'}:\!\partial X\,\partial X\!:$ from [[Worldsheet stress tensor]].

## Example 1: $T\,\partial X$ — $\partial X$ is a weight-1 primary

$T$ holds two $\partial X$'s; either can contract with the lone $\partial X(w)$, so a combinatorial factor 2 appears:
$$T(z)\,\partial X(w)=-\frac{1}{\alpha'}:\!\partial X(z)\partial X(z)\!:\,\partial X(w)=-\frac{2}{\alpha'}\,\partial X(z)\underbrace{\left(-\frac{\alpha'}{2}\frac{1}{(z-w)^2}\right)}_{\text{propagator}}+\ldots=\frac{\partial X(z)}{(z-w)^2}+\ldots$$
The uncontracted $\partial X(z)$ still sits at $z$; Taylor-expand it to $w$ via $\partial X(z)=\partial X(w)+(z-w)\partial^2X(w)+\ldots$:
$$\boxed{\,T(z)\,\partial X(w)=\frac{\partial X(w)}{(z-w)^2}+\frac{\partial^2 X(w)}{z-w}+\ldots\,}$$
Matching to (3): the double-pole coefficient is $1\cdot\partial X$, so $h=1$; the single pole is exactly $\partial(\partial X)=\partial^2X$ as required — nothing worse. So **$\partial X$ is a primary of weight $(1,0)$**, the prototype holomorphic current. (Factor check: $2\times(-\tfrac1{\alpha'})\times(-\tfrac{\alpha'}{2})=+1$.)

## Example 2: $T\,e^{ikX}$ — a vertex operator of weight $\alpha'k^2/4$

The normal-ordered exponential $:\!e^{ikX}\!:$ is the **tachyon vertex operator** — the local operator that creates the string's ground state. Warm up with its $\partial X$ OPE: expand $e^{ikX}=\sum_n\tfrac{(ik)^n}{n!}X^n$; a single $\partial X(z)$ can contract with any one of the $n$ factors of $X(w)$, and the surviving $X^{n-1}$ resums back into the exponential:
$$\partial X(z)\,:\!e^{ikX(w)}\!:\;=(ik)\!\left(-\frac{\alpha'}{2}\frac{1}{z-w}\right):\!e^{ikX(w)}\!:+\ldots=-\frac{i\alpha' k}{2}\,\frac{:\!e^{ikX(w)}\!:}{z-w}+\ldots$$
(Here $\partial X$ contracts with $X$, not $\partial X$, so only a *single* power of $z-w$ appears — a simple pole, not a double.) Now feed this into $T=-\tfrac1{\alpha'}:\!\partial X\partial X\!:$. Contracting **both** $\partial X$'s in $T$ with the exponential gives the double pole; contracting **one** gives the single pole:
$$\boxed{\,T(z)\,:\!e^{ikX(w)}\!:\;=\frac{\alpha'k^2/4}{(z-w)^2}\,:\!e^{ikX(w)}\!:+\frac{\partial\,:\!e^{ikX(w)}\!:}{z-w}+\ldots\,}$$
The double-pole coefficient is $h=\alpha'k^2/4$, and the single pole is the full derivative of the operator, so $:\!e^{ikX}\!:$ is **primary with weight $h=\bar h=\alpha'k^2/4$**. The weight is *proportional to $\alpha'$* — a purely quantum result, invisible classically, born entirely from the log in the $XX$ propagator (classically $e^{ikX}$ would look dimensionless). This is why the marginality condition $h+\bar h=2$ reproduces the closed-string tachyon mass shell $\alpha'k^2=4$, i.e. $M^2=-4/\alpha'$; see [[Mass-shell relation]].

## Example 3: $T\,T$ — the central charge $c=1$

Now the stress tensor with itself. Each $T$ carries two $\partial X$'s, so there are two contraction patterns. Contracting **both** pairs (2 ways) makes the leading quartic pole; contracting **one** pair (4 ways) makes the term proportional to $T$:
$$T(z)T(w)=\frac{1}{\alpha'^2}\left[2\left(-\frac{\alpha'}{2}\frac{1}{(z-w)^2}\right)^2+4\left(-\frac{\alpha'}{2}\frac{1}{(z-w)^2}\right):\!\partial X(z)\partial X(w)\!:\right]+\ldots$$
The first bracket gives $\tfrac{1}{\alpha'^2}\cdot2\cdot\tfrac{\alpha'^2}{4}(z-w)^{-4}=\tfrac12(z-w)^{-4}$. In the second, Taylor-expand $:\!\partial X(z)\partial X(w)\!:$ to $w$ and use $-\tfrac1{\alpha'}:\!\partial X\partial X\!:=T$; the constant piece rebuilds $2T(w)(z-w)^{-2}$ and the linear piece $\partial T(w)(z-w)^{-1}$:
$$\boxed{\,T(z)\,T(w)=\frac{1/2}{(z-w)^4}+\frac{2T(w)}{(z-w)^2}+\frac{\partial T(w)}{z-w}+\ldots\,}$$
The $(z-w)^{-2}$ and $(z-w)^{-1}$ terms have coefficients $2$ and $\partial$: read off $h=2$, as $T$ must have (dimension 2, spin 2). But the $(z-w)^{-4}$ term is **new** — $T$ is *not* primary. Comparing with the universal form $T(z)T(w)=\tfrac{c/2}{(z-w)^4}+\ldots$,
$$\frac{c}{2}=\frac12\;\Longrightarrow\;\boxed{c=1}\quad\text{(one free boson).}$$
That quartic pole *is* the **central charge**. Physically it is the failure of $T$ to be a genuine tensor — the quantum anomaly in how the stress tensor responds to conformal maps, and equivalently the theory's count of degrees of freedom. One free boson carries $c=1$; $D$ decoupled bosons give $c=D$ (the quartic poles simply add, all with the positive sign noted above). This is the OPE face of the object analyzed in [[Virasoro algebra and central charge]], and the reason the $D$ embedding coordinates push $c$ toward the $c_{\text{total}}=0$ condition that fixes $D=26$.

## Weight $\ne$ primary (a caution)

$\partial^2X$ has weight $(2,0)$ but is **not** primary: acting with $T$ and differentiating the Example-1 result once more produces a *cubic* pole,
$$T(z)\,\partial^2X(w)=\frac{2\,\partial X(w)}{(z-w)^3}+\frac{2\,\partial^2X(w)}{(z-w)^2}+\ldots$$
So "has a definite weight $h$" and "is primary" are different tests: primary additionally demands no pole worse than $(z-w)^{-2}$.

## Open questions

- **State-operator map.** The line "$h+\bar h=2$ marginal $\Rightarrow$ tachyon mass shell" is orientation only; the careful dictionary between vertex-operator weights and the string spectrum lives in [[State-operator correspondence]] and [[Vertex operators and physical-state conditions]].
- **Normal ordering.** Colons are kept here wherever a coincident product could confuse; every same-point product of fields inside $T$ is normal-ordered by definition.

## Exercise

The vertex-operator weight $h=\alpha'k^2/4$ came out proportional to $\alpha'$, which we called "purely quantum." Pin that down. Show, directly from the $\partial X\!\cdot\!e^{ikX}$ contraction, that the *double*-contraction term in $T(z)\,:\!e^{ikX(w)}\!:$ has coefficient $\alpha'k^2/4$ — and identify exactly where the classical answer ($h=0$) is overturned.

> [!success]- Solution
> Write $T=-\tfrac1{\alpha'}:\!\partial X(z)\partial X(z)\!:$ and contract *both* of its $\partial X$'s with the exponential. Each contraction of one $\partial X(z)$ against $:\!e^{ikX(w)}\!:$ produces the factor found in the note,
> $$\partial X(z)\,:\!e^{ikX(w)}\!:\;\to\;-\frac{i\alpha' k}{2}\frac{1}{z-w}\;:\!e^{ikX(w)}\!:\;.$$
> Doing this to both $\partial X(z)$'s gives two such factors, and the exponential comes back out once:
> $$-\frac{1}{\alpha'}\left(-\frac{i\alpha' k}{2}\frac{1}{z-w}\right)^{\!2}:\!e^{ikX(w)}\!:\;=-\frac{1}{\alpha'}\cdot\frac{(i)^2\alpha'^2k^2}{4}\frac{1}{(z-w)^2}\,:\!e^{ikX(w)}\!:.$$
> Now $(i)^2=-1$ and one power of $\alpha'$ cancels:
> $$=-\frac{1}{\alpha'}\cdot\left(-\frac{\alpha'^2k^2}{4}\right)\frac{:\!e^{ikX(w)}\!:}{(z-w)^2}=+\frac{\alpha'k^2/4}{(z-w)^2}\,:\!e^{ikX(w)}\!:,$$
> so the double-pole coefficient is $h=\alpha'k^2/4$. Here is where the classical answer dies: each contraction is one power of the propagator, and the propagator is $\propto\alpha'$ (it came from the log in $\langle XX\rangle=-\tfrac{\alpha'}{2}\ln|\cdots|^2$). Two contractions bring two powers of $\alpha'$, one of which the $1/\alpha'$ in $T$ removes, leaving a net single $\alpha'$. Classically there is no propagator to contract against — fields at a point just multiply — so $e^{ikX}$ would be dimensionless, $h=0$. The nonzero weight is entirely the short-distance quantum contraction; $\alpha'$ marks the spot where $\hbar$ entered.
