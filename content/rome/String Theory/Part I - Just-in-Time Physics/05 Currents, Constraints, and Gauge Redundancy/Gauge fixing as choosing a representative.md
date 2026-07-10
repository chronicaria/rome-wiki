---
title: Gauge fixing as choosing a representative
number: "5.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, gauge-fixing]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Gauge fixing is picking one convenient description out of the many that all mean the same physical thing.

## Lowest terms

A gauge redundancy is like the difference between "3/6" and "1/2": two symbols, one number. Gauge fixing is the rule "always write fractions in lowest terms" — it changes no number, it just stops you from carrying the same fact around in five disguises. For the string, the disguises are the coordinate grids $(\tau,\sigma)$ you can paint on a worldsheet; the number is the physical surface the string sweeps out. Fix a gauge and you compute with one grid instead of infinitely many.

Everything below obeys one rule: **gauge fixing removes fake variables, never real physics.** If a quantity changes when you re-fix the gauge, it was never a physical quantity to begin with.

## Redundancy as an equivalence relation

Gauge redundancy is not uncertainty about the system. It is surplus notation. To make that precise, let $\mathcal D$ be a space of descriptions — for a string, all maps $X^\mu(\tau,\sigma)$ that trace out a worldsheet. A gauge group $G$ acts on $\mathcal D$ by relabeling, and two descriptions related by $G$ are declared equivalent:
$$
d_1\sim d_2
\quad\Longleftrightarrow\quad
d_2=g\cdot d_1\ \text{for some }g\in G.
$$
The physical object is the whole equivalence class (the **orbit**), not any single member, so the real physical space is the quotient $\mathcal D/G$. The prototype from applied math is a curve with many parameterizations: as functions, $\gamma(s)$ and $\gamma(f(s))$ look different, yet they trace the *same* geometric curve whenever $f$ is an allowed reparameterization. The curve is the orbit; the choice of $s$ is a representative.

Gauge fixing picks one representative from each orbit — a **section** of the quotient:
$$
\text{gauge fixing}\;:\;\mathcal D/G\to\mathcal D .
$$
Nothing physical is lost: the section deletes only coordinates that never encoded a physical distinction. It need not be *global*, though — a single gauge can miss some orbits, hit an orbit twice, or leave leftover freedom. That is a limitation of the chosen slice, not of the idea.

Two rules follow immediately:

- **Observables are orbit-constant.** Anything physical must take the same value on every representative of an orbit.
- **Constraints are the phase-space shadow of the redundancy.** The redundancy acts on descriptions; in the Hamiltonian picture its fingerprint is a set of constraints, as in [[Constraints as restrictions on motion]].

## Worldsheet reparameterization is the string's gauge group

The Nambu–Goto action depends only on the geometric surface swept out in spacetime, not on the grid you draw on it. Swapping coordinates $(\tau,\sigma)\to(\tilde\tau,\tilde\sigma)$ rewrites the functions $X^\mu(\tau,\sigma)$ but leaves the embedded worldsheet untouched. Reparameterization *is* the gauge group $G$ here.

This is why string momentum is naturally integrated over a *curve* rather than pinned to one favorite time-slice. The momentum
$$
p_\mu(\gamma)=\int_\gamma
\left(\mathcal P^\tau_\mu\,d\sigma-\mathcal P^\sigma_\mu\,d\tau\right)
\tag{1}
$$
returns the same physical answer for any curve $\gamma$ that slices across the worldsheet once, so long as deforming one such curve into another sweeps across no momentum-leaking boundary (derived in [[World-sheet momentum current]]). The curve and the coordinates are description data; $p_\mu$ is orbit-constant, hence physical.

## Static gauge: worldsheet time is the observer's clock

Static gauge ties worldsheet time to target-space time for one chosen Lorentz observer (keeping $c$ explicit for the moment):
$$
X^0(\tau,\sigma)=c\,\tau .
$$
Every constant-$\tau$ slice is now a literal snapshot of the string at one instant of the observer's clock — in this gauge $\tau$ *is* the observer's time $t=X^0/c$. The worldsheet conservation law becomes the everyday one,
$$
\frac{dp_\mu}{d\tau}=0
\quad\Longleftrightarrow\quad
\frac{dp_\mu}{dt}=0 .
$$
Nothing new was proven — the same conserved $p_\mu$ existed before the gauge choice (that is the content of (1)). Static gauge merely relabels the clock so the bookkeeping reads like Newton's.

Static gauge is **partial**: it spends the $\tau$-relabeling freedom but still lets you relabel $\sigma$ along each slice, and it is tied to one observer's frame. Light-cone gauge, next, spends both functions at once — a different clock, plus a $\sigma$-rule to match.

## Light-cone gauge: spend the freedom to expose the real degrees of freedom

Light-cone gauge is the workhorse for quantization. Build light-cone coordinates from time and one chosen spatial direction,
$$
X^\pm=\frac{1}{\sqrt2}\,(X^0\pm X^1),
$$
so a target-space vector is described by $(X^+,X^-,X^I)$ with $I=2,\dots,D-1$ the **transverse** directions. The gauge makes $X^+$ run linearly with worldsheet time, at a rate set by the string's own momentum:
$$
X^+(\tau,\sigma)=\beta\,\alpha' p^+\,\tau ,
\qquad
\beta=\begin{cases}2,&\text{open string}\\[2pt]1,&\text{closed string,}\end{cases}
\tag{2}
$$
Here and below we adopt the natural units $\hbar=c=1$ of the light-cone modules. The factor of 2 tracks the $\sigma$-interval convention (open $\sigma\in[0,\pi]$, closed $\sigma\in[0,2\pi]$), and [[Light-cone gauge]] fixes the constant from the mode expansion. The choice is legal exactly when $p^+=\tfrac{1}{\sqrt2}(p^0+p^1)\neq0$ — automatic for every massive state, and failing only for a massless string aimed exactly along the negative $X^1$ axis.

The payoff is structural. Condition (2) spends only the $\tau$-relabeling; the companion $\sigma$-choice spreads the $p^+$-density uniformly along each slice, and together the two conditions put the constraints of [[Constraints as restrictions on motion]] in the form
$$
\dot X\cdot X'=0,\qquad \dot X^2+X'^2=0 .
$$
With $X^+$ frozen, these can be solved *algebraically* for $X^-$. The light-cone dot product $a\cdot b=-a^+b^--a^-b^++a^Ib^I$ (mostly-plus signature) has no $(a^-)^2$ term, so both constraints are linear in the derivatives of $X^-$: dividing by the constant $\dot X^+=\beta\alpha'p^+$ hands you $\dot X^-$ and $X'^-$ in terms of the transverse fields, which determines $X^-$ up to one constant $x_0^-$. The bookkeeping is now settled:

- $X^+$ is frozen by the gauge,
- $X^-$ is determined by the constraints (up to the zero mode $x_0^-$),
- only the transverse $X^I$ are free.

The **independent physical vibrations are the $D-2$ transverse modes.** In quotient language: the gauge chose a slice through the orbits, the constraints solved for the dependent coordinates on it, and what parameterizes $\mathcal D/G$ is the transverse fields $X^I$ plus two longitudinal constants, $p^+$ and $x_0^-$. A string in $D$ spacetime dimensions vibrates in only $D-2$ transverse ways.

## What you must re-check after fixing a gauge

Fixing a gauge can *hide* a symmetry that was obvious before. Light-cone gauge singles out $X^0$ and $X^1$, so Lorentz invariance — which rotates all directions into each other — is no longer manifest. Classically the symmetry is still there, just disguised. Quantum-mechanically it is not automatic: it survives only if an **anomaly cancels**, and demanding that cancellation is precisely what pins the bosonic critical dimension to $D=26$.

The moral generalizes. A gauge-fixed calculation is only trustworthy if its answers are independent of which representative you picked. If they are not, the gauge has not created a problem — it has *exposed* a real inconsistency hiding in the quantized theory.

## Open questions

- The constant in (2) — the open/closed factor of 2 and its convention dependence — is fixed by the mode expansion in [[Light-cone gauge]], together with the $\sigma$-parameterization that spends the second function of gauge freedom.
- Global gauge-fixing failures (a section that misses or double-counts orbits) and residual/Gribov-type freedom become real issues beyond the classical, contractible-worldsheet setting; they are not needed before the classical light-cone module.

## Exercise

Count the physical degrees of freedom of a classical bosonic string in $D$ spacetime dimensions, tracking exactly where each gauge choice and each constraint removes one. You start with the $D$ fields $X^\mu(\tau,\sigma)$. Show the surviving count is $D-2$, and name the field that each step eliminates.

> [!success]- Solution
> Start with $D$ oscillating fields $X^\mu$, $\mu=0,\dots,D-1$.
>
> 1. **Worldsheet reparameterization is a gauge redundancy with two functions' worth of freedom** ($\tau$- and $\sigma$-relabeling), so we may impose two gauge conditions. Light-cone gauge spends the $\tau$-function on $X^+=\beta\,\alpha'p^+\tau$ (2): $X^+$ carries no independent oscillations — it is frozen. The $\sigma$-function goes into fixing the grid along each slice (a uniform $p^+$-density); that removes labeling freedom, not a field. Fields removed: **one** ($X^+$). Count: $D-1$.
> 2. **The two constraints** $\dot X\cdot X'=0$ and $\dot X^2+X'^2=0$ are not evolution equations. With $X^+$ frozen, $X'^+=0$ and $\dot X^+=\beta\alpha'p^+$, and the light-cone dot product $a\cdot b=-a^+b^--a^-b^++a^Ib^I$ makes each constraint *linear* in a minus-derivative: the first solves for $X'^-=\dot X^IX'^I/(\beta\alpha'p^+)$, the second for $\dot X^-=\big(\dot X^I\dot X^I+X'^IX'^I\big)/(2\beta\alpha'p^+)$ — the division by $p^+$ is where $p^+\neq0$ is used. Both derivatives fixed means $X^-$ is determined up to its constant zero mode $x_0^-$: its oscillators $\alpha_n^-$ and momentum $p^-$ are all composites of transverse data. Fields removed: **one** more ($X^-$). Count: $D-2$.
> 3. What is left are the transverse coordinates $X^I$, $I=2,\dots,D-1$ — exactly $D-2$ independent fields.
>
> One field killed by the gauge choice ($X^+$), one killed by the constraints the redundancy left behind ($X^-$); the $D-2$ transverse vibrations are the only physical degrees of freedom. (Demanding that the quantized transverse theory still close into the Lorentz algebra is what later forces $D=26$.)
