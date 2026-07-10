---
title: Proper-time action
number: "8.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, point-particle]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The free relativistic particle maximizes its own aging: its action $S=-mc\int_\mathcal{P} ds$ is minus the rest energy times the proper time elapsed along its worldline, and this single geometric statement yields the relativistic momentum, the energy, the speed limit, and the Newtonian limit.

## Maximal aging

A free particle is a clock that ages as much as it possibly can. Between two events, the straight (unaccelerated) worldline is the one that racks up the *most* proper time on a carried clock — the twin paradox, restated as a variational principle. The action counts the ticks of the particle's own clock and multiplies by minus its rest energy. Below we build that action from invariance and units, then check it reproduces Newton.

The Newtonian action cannot simply be reused, because it has no speed limit: it never mentions $c$, so it happily allows $v>c$. We need an action that forbids superluminal motion *structurally* — and the fix also makes the action a single number every observer agrees on.

## Why the nonrelativistic action fails

For a nonrelativistic free particle the action is the time integral of the kinetic energy,

$$S_{\text{nr}} = \int L_{\text{nr}}\,dt = \int \tfrac12 m v^2(t)\,dt, \qquad \vec v = \frac{d\vec x}{dt}.$$

Hamilton's principle gives $d\vec v/dt = 0$: constant velocity. That *looks* fine — a free relativistic particle also moves at constant velocity — so where is the problem?

Two problems, one cure.

1. **No speed limit.** $S_{\text{nr}}$ permits *any* constant velocity, including $v>c$. The speed of light does not appear anywhere in it, so nothing forbids superluminal motion.
2. **Not observer-independent.** Under a Galilean boost $\vec v \to \vec v + \vec v_0$ the Lagrangian changes, so different inertial observers write different actions. The physical path should be something every observer agrees on, and the clean way to guarantee that is to demand the action itself be a **Lorentz scalar** — one number all observers compute identically. A scalar action has Lorentz-invariant equations of motion: if one observer sees a worldline make the action stationary, so does everyone. $S_{\text{nr}}$ is not a scalar.

## The educated guess: proper time

What number attached to a worldline $\mathcal{P}$ do *all* observers agree on? The **elapsed proper time** — the reading of a clock carried along $\mathcal{P}$. Boosts disagree about coordinate time, but never about what one physical clock displays. So make the action proportional to proper time.

Quantitatively, use the invariant interval. In the mostly-plus signature $\eta_{\mu\nu}=\mathrm{diag}(-,+,+,+)$, a timelike step has $\eta_{\mu\nu}dx^\mu dx^\nu<0$; the positive **proper-length** element is its sign-flip,

$$ds^2=-\eta_{\mu\nu}\,dx^\mu dx^\nu=c^2dt^2-d\vec x^{\,2}. \tag{1}$$

Here $ds$ is a length and $ds/c$ is the corresponding clock time — the notation bridge lives in [[Proper length and proper time]]. So $\int_\mathcal{P} ds/c$ is the total proper time along the path.

Units fix the prefactor. The action needs units of energy $\times$ time, and $\int ds/c$ already supplies the time, so the prefactor must be a Lorentz invariant with units of energy. The velocity is frame-dependent, so it cannot appear; the only invariants on hand are the rest mass $m$ and $c$, and their unique energy-valued combination is the rest energy $mc^2$. This forces

$$S = A\,mc^2\!\int_\mathcal{P} \frac{ds}{c} = A\,mc\!\int_\mathcal{P} ds$$

for some dimensionless constant $A$.

**Fixing $A=-1$.** Convert to a time integral to read off the Lagrangian, then match Newton. From (1), $ds = c\,dt\sqrt{1-v^2/c^2}$, so $L = A\,mc^2\sqrt{1-v^2/c^2}$. Expanding for $v\ll c$,

$$L = A\,mc^2\Big(1-\tfrac12\tfrac{v^2}{c^2}+\cdots\Big) = A\,mc^2 - \tfrac{A}{2}mv^2+\cdots.$$

The kinetic term must equal $+\tfrac12 mv^2$, which forces $A=-1$:

$$\boxed{\,S = -mc\int_\mathcal{P} ds\,} \tag{2}$$

Since $mc\,ds = mc^2\,(ds/c)$, this is $S = -(mc^2)\times(\text{proper time})$: minimizing $S$ means *maximizing* proper time, and the minus sign is exactly what turns maximal aging into least action. In flat spacetime the straight worldline maximizes proper time among timelike paths between fixed events, so it minimizes (2). The geometry (maximize aging) and the mechanics (recover $+\tfrac12 mv^2$) select the same sign; the exercise below probes what the opposite choice would break.

## Recovering familiar physics

Fix one observer and write everything as a $dt$-integral. Substituting $ds = c\,dt\sqrt{1-v^2/c^2}$ into (2),

$$S = -mc^2\int_{t_i}^{t_f} dt\,\sqrt{1-\frac{v^2}{c^2}}, \qquad L = -mc^2\sqrt{1-\frac{v^2}{c^2}}.$$

The square root goes imaginary for $v>c$: the action ceases to exist for superluminal motion. The speed limit is built in — exactly the property $S_{\text{nr}}$ lacked, and the reason $c$ had to enter: it lives inside the square root that defines proper time.

**Small-velocity check.** For $v\ll c$,

$$L \simeq -mc^2\Big(1-\tfrac12\tfrac{v^2}{c^2}\Big) = \underbrace{-mc^2}_{\text{constant}} + \tfrac12 m v^2.$$

The constant $-mc^2$ drops out of the equations of motion; the surviving term is exactly the Newtonian kinetic energy, confirming both the sign and the normalization.

**Momentum and energy.** The canonical momentum is

$$\vec p = \frac{\partial L}{\partial \vec v} = -mc^2\Big(-\frac{\vec v}{c^2}\Big)\frac{1}{\sqrt{1-v^2/c^2}} = \frac{m\vec v}{\sqrt{1-v^2/c^2}} = \gamma m\vec v,$$

the relativistic momentum. The Hamiltonian is

$$H = \vec p\cdot\vec v - L = \frac{mv^2}{\sqrt{1-v^2/c^2}} + mc^2\sqrt{1-v^2/c^2} = \frac{mc^2}{\sqrt{1-v^2/c^2}} = \gamma mc^2,$$

the relativistic energy — over the common denominator $\sqrt{1-v^2/c^2}$ the numerator collapses to $mv^2 + mc^2(1-v^2/c^2) = mc^2$. One geometric guess has delivered $E=\gamma mc^2$, $\vec p = \gamma m\vec v$, the speed limit, and the Newtonian limit — with no relativistic mechanics assumed in advance, only that the action measures proper time.

## Why this is the template for strings

A point particle sweeps a **1-dimensional worldline**; its action is (rest energy) $\times$ (proper time). A string sweeps a **2-dimensional [[Worldsheet and induced metric|worldsheet]]**, and the [[Nambu-Goto action|Nambu–Goto action]] will be (tension) $\times$ (proper area). The recipe — find the invariant geometric measure of the swept object, multiply by the one dimensionful constant units allow — carries over unchanged. Learn it here and the string action stops looking like a guess. The full lift is tabulated in [[Worldline versus worldsheet]].

## Open questions

- "Maximizes proper time" as stated is a flat-spacetime fact. In curved spacetime the global statement needs geodesic-deviation / conjugate-point caveats — a worldline can be a saddle rather than a maximum past a conjugate point.
- Massless particles ($m=0$) make $S=-mc\int ds$ vanish identically, and $ds=0$ along a null path anyway, so this action cannot describe the photon. The cure is the einbein / auxiliary-field form, flagged for [[Polyakov action]].

## Exercise

The prefactor in (2) was fixed by demanding $L$ reproduce the *Newtonian* Lagrangian at low speed. Suppose a careless colleague instead wrote $S = +mc\int ds$ (right magnitude, wrong sign). Without recomputing the whole expansion, answer both:

(a) What is the resulting low-velocity Lagrangian, and what physics comes out wrong?
(b) The correct action $-mc\int ds$ is said to *maximize* proper time on the physical path. Does the wrong-sign action extremize proper time at all, and if so, does it max or min it? Argue from the interpretation of the boxed action, not from re-deriving the equation of motion.

> [!success]- Solution
> **(a)** With the flipped sign, $L = +mc^2\sqrt{1-v^2/c^2} \simeq mc^2 - \tfrac12 mv^2$: the kinetic term carries the wrong sign. For a *free* particle this alone does not change the motion — multiplying an action by a nonzero constant leaves its stationary paths untouched — but the canonical quantities come out backwards: $\vec p = \partial L/\partial\vec v = -\gamma m\vec v$, and $H = \vec p\cdot\vec v - L = -\gamma mc^2$, a negative energy that decreases further as the particle speeds up. The moment any interaction is added (a potential, a coupling to a field), the relative sign between the kinetic term and everything else is wrong, and the low-speed dynamics no longer matches Newton. That mismatch is what forces $A=-1$.
>
> **(b)** Both signs extremize the same geometric quantity $\int ds$ (the proper time), because they differ only by the overall constant $\pm mc$, and rescaling an action by a nonzero constant leaves the stationary paths unchanged. So the physical worldline is the *same* straight line either way, and that line *maximizes* proper time regardless of which action we write — maximal aging is a geometric fact about straight timelike worldlines, not a property of our sign convention. What flips is the label on the action: $S = -(mc^2)(\text{proper time})$ makes the straight path a local **minimum** of $S$, while the flipped $S = +(mc^2)(\text{proper time})$ makes that same path a local **maximum** of $S$. The extremal path is identical; what genuinely breaks is (a) — the signs of momentum and energy, and the Newtonian matching — which is the real reason the sign matters.
