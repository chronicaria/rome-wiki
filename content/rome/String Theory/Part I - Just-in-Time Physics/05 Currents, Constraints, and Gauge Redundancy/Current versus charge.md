---
title: Current versus charge
number: "5.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, noether-current]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A current is a local flux field — how much flows where; a charge is the running-total number you get by integrating its density part — how much is inside.

Put a region $V$ in your mind with a counter on its wall. The charge $Q$ is the count inside. The current is the field that says, at every wall patch, how fast stuff is streaming across. The entire content of "conservation" is one accounting rule: the count inside changes *only* by what crosses the wall. Nothing appears or vanishes in the interior.

Current and charge live at different levels: the current is a field on the whole domain; the charge is one number at one instant. The rest of the note makes this precise, then builds the machine that manufactures a current from any symmetry.

## The local rule and its global consequence

The current is a vector field $j^\alpha=(j^0,\vec\jmath\,)$; the index $\alpha$ runs over the directions of whatever world the fields live on — ordinary spacetime here, the string worldsheet later in the module. The time part $j^0$ is a density (charge per unit volume, up to a factor of $c$); the space part $\vec\jmath$ is a flux (charge per unit area per unit time). "Conserved current" means it is divergence-free:
$$
\partial_\alpha j^\alpha=0.
\tag{1}
$$
With $x^0=ct$ so that $\partial_0=(1/c)\partial_t$, splitting time from space turns (1) into the **continuity equation**:
$$
\partial_\alpha j^\alpha=0
\quad\Longleftrightarrow\quad
\partial_t\rho+\nabla\cdot\vec\jmath=0,
\qquad \rho\equiv j^0/c.
\tag{2}
$$
Read it locally: the density at a point can drop only if flux carries charge away from that point. For electric charge, $\rho$ and $\vec\jmath$ are exactly the charge density and current density of Maxwell's theory. The name "conserved current" is a mild abuse — the *current* is merely divergence-free; what is actually conserved is the integrated charge, and only when nothing escapes.

Now integrate the density over a fixed region to get the charge, and watch local conservation force global conservation:
$$
Q(t)=\int_V\rho\,d^3x,
\qquad
\frac{dQ}{dt}
=\int_V\partial_t\rho\,d^3x
\;\overset{(2)}{=}\;-\int_V\nabla\cdot\vec\jmath\,d^3x
\;=\;-\oint_{\partial V}\vec\jmath\cdot d\vec a.
\tag{3}
$$
Three moves: differentiate the density inside a fixed region, substitute the continuity equation, then use the divergence theorem to turn a volume integral of a divergence into a boundary flux. The result is the accounting rule in equation form:
$$
\boxed{\;\frac{dQ}{dt}=-\oint_{\partial V}\vec\jmath\cdot d\vec a.\;}
\tag{4}
$$
If no current crosses $\partial V$, $Q$ is constant. If current does cross, $Q$ changes by exactly that boundary flux — no more, no less. The string reuses this template: its endpoints play the role of $\partial V$, and whether the string alone conserves a component of momentum comes down to whether flux leaks out the ends.

## Noether's machine: symmetry manufactures a current

Electric charge was just one example. The real engine is this: *every continuous symmetry of the action hands you a conserved current for free.* Start with the cleanest case, where the symmetry leaves the Lagrangian density itself untouched.

Write the action as an integral of a Lagrangian **density** over whatever world the fields live on:
$$
S=\int d\xi^0\cdots d\xi^k\;\mathcal L(\phi^a,\partial_\alpha\phi^a),
\qquad
\partial_\alpha\phi^a=\frac{\partial\phi^a}{\partial\xi^\alpha}.
$$
Keep three index families straight — confusing them is the usual beginner's error:

- $\alpha$ labels **directions of the world** $\xi^\alpha$ (spacetime axes, or the string worldsheet's $\tau,\sigma$),
- $a$ labels **which field** $\phi^a$,
- $i$ labels **which symmetry parameter** (a symmetry can have several independent knobs).

An infinitesimal symmetry is a rule for nudging every field configuration:
$$
\delta\phi^a=\epsilon^i h_i^a(\phi).
$$
The parameters $\epsilon^i$ are constants — the same nudge at every point of the world — which is what lets $\delta$ commute with $\partial_\alpha$ below.

**Strictly invariant case ($\delta\mathcal L=0$).** Then the current is
$$
\epsilon^i j_i^\alpha
=\frac{\partial\mathcal L}{\partial(\partial_\alpha\phi^a)}\,\delta\phi^a,
\qquad
\partial_\alpha j_i^\alpha=0.
\tag{5}
$$
The upper index $\alpha$ is which direction the current flows; the label $i$ is which charge is being carried. The proof is two steps. The chain rule always gives
$$
\delta\mathcal L
=\frac{\partial\mathcal L}{\partial\phi^a}\delta\phi^a
+\frac{\partial\mathcal L}{\partial(\partial_\alpha\phi^a)}\,\partial_\alpha(\delta\phi^a),
$$
and substituting the Euler–Lagrange equation $\dfrac{\partial\mathcal L}{\partial\phi^a}=\partial_\alpha\!\Big(\dfrac{\partial\mathcal L}{\partial(\partial_\alpha\phi^a)}\Big)$ packages the right-hand side into a single total derivative (the product rule read backward):
$$
\delta\mathcal L
=\partial_\alpha\!\left(\frac{\partial\mathcal L}{\partial(\partial_\alpha\phi^a)}\,\delta\phi^a\right)
=\epsilon^i\,\partial_\alpha j_i^\alpha .
\tag{6}
$$
If $\delta\mathcal L=0$, the current is divergence-free *on shell* — on solutions of the equations of motion — since Euler–Lagrange was used. Its integrated charge is
$$
Q_i=\int d\xi^1\cdots d\xi^k\;j_i^0,
$$
and $dQ_i/d\xi^0=0$ whenever the spatial flux through the boundary vanishes — the same $\int\to\oint$ argument as (3)–(4), now in $k$ spatial dimensions.

## Total-derivative symmetries

Here is the case string theory actually needs. Some transformations do **not** leave $\mathcal L$ strictly fixed; they change it by a total derivative,
$$
\delta\mathcal L=\partial_\alpha(\epsilon^i K_i^\alpha).
\tag{7}
$$
This is still a symmetry, because the *action* changes only by a boundary term, which is discarded (or held fixed by boundary conditions). Equation (6) is unchanged — it is just the chain rule plus Euler–Lagrange, true regardless of what $\delta\mathcal L$ equals. Setting (6) equal to (7),
$$
\partial_\alpha\!\left(\frac{\partial\mathcal L}{\partial(\partial_\alpha\phi^a)}\,\delta\phi^a\right)
=\partial_\alpha(\epsilon^i K_i^\alpha)
\quad\Longrightarrow\quad
\partial_\alpha\!\left(\frac{\partial\mathcal L}{\partial(\partial_\alpha\phi^a)}\,\delta\phi^a-\epsilon^i K_i^\alpha\right)=0.
$$
So the divergence-free object is the naive current (5) **minus** the boundary piece:
$$
\boxed{\;
\epsilon^i j_i^\alpha=
\frac{\partial\mathcal L}{\partial(\partial_\alpha\phi^a)}\,\delta\phi^a-\epsilon^i K_i^\alpha .
\;}
\tag{8}
$$
The $-K^\alpha$ is not optional. Without it the naive current has on-shell divergence $\partial_\alpha(\epsilon^i K_i^\alpha)\neq0$; subtracting $K^\alpha$ is exactly what cancels that leak.

This is *why* spacetime translations produce a stress-energy tensor and not merely the naive term. A translation shifts the field's argument, $\delta\phi=\epsilon^\beta\partial_\beta\phi$, so for an $\mathcal L$ with no explicit coordinate dependence
$$
\delta\mathcal L=\epsilon^\beta\partial_\beta\mathcal L
=\partial_\alpha(\epsilon^\beta\,\delta^\alpha_\beta\,\mathcal L),
$$
which is form (7) with $K^\alpha{}_\beta=\delta^\alpha_\beta\mathcal L$. Feeding this into (8) turns the $-K^\alpha$ into the $-\delta^\alpha_\beta\mathcal L$ term of the canonical stress tensor; the full derivation lives in [[Stress-energy tensor as momentum flow]]. (By contrast, a string's *target-space* translation $\delta X^\mu=\epsilon^\mu$ leaves $\mathcal L$ strictly fixed — no $K^\alpha$ — because $\mathcal L$ depends only on $\partial_\alpha X^\mu$; that gives the worldsheet momentum current in [[World-sheet momentum current]].)

## Point-mechanics sanity check

Point mechanics is the same machinery with the spatial integrals dropped: the "density" collapses to the whole Lagrangian $L(q,\dot q)$, and the current collapses directly to a conserved *number* — no local field in between. For $L$ invariant under $\delta q=\epsilon\,h(q)$,
$$
\epsilon Q=\frac{\partial L}{\partial\dot q}\,\delta q,
\qquad \frac{dQ}{dt}=0
$$
on shell. The cleanest instance: if $L$ depends only on $\dot q$ (not on $q$), then the constant shift $\delta q=\epsilon$ is a symmetry and
$$
Q=\frac{\partial L}{\partial\dot q}=p.
$$
Translation invariance of a free particle gives conserved momentum — the ancestor of every current above. Field theory simply inserts a local current between the symmetry and the conserved number; integrating the current's density recovers the number.

## Open questions

- Boundary conditions are as decisive as the differential equation. D-branes revisit cases where string-endpoint flux makes the string-only charge nonconserved — momentum then leaks into the brane, exactly per (4).
- The active/passive sign convention for translations flips the sign of the stress tensor; keep it explicit whenever comparing formulas across books.

## Exercise

The $-K^\alpha$ subtraction in (8) looks like it might be optional. Show it is forced, using the simplest total-derivative symmetry you can check by hand: a free particle under a Galilean boost.

Take $L=\tfrac12\dot q^2$ (unit mass) and $\delta q=\epsilon\,t$ (drift the trajectory at constant velocity). (a) Show $\delta L$ is a total time derivative and read off $K$ (the mechanics analogue of $K^\alpha$). (b) Write the naive current $(\partial L/\partial\dot q)\,\delta q$ and check whether *it* is conserved on shell. (c) Apply (8) and check that the corrected charge is conserved. Explain in one sentence what went wrong in (b).

> [!success]- Solution
> **(a)** The boost changes the velocity, $\delta\dot q=\dfrac{d}{dt}(\epsilon t)=\epsilon$, so
> $$\delta L=\frac{\partial L}{\partial\dot q}\,\delta\dot q=\dot q\,\epsilon=\frac{d}{dt}\!\left(\epsilon\,q\right).$$
> This is a genuine total derivative, form (7) with $K=q$ — nonzero, so the subtraction has something to cancel. (Contrast the constant shift $\delta q=\epsilon$, which gives $\delta L=0$ and $K=0$: too degenerate to test anything.)
>
> **(b)** Naive current: $\dfrac{\partial L}{\partial\dot q}\,\delta q=\dot q\,(\epsilon t)$, i.e. $Q_{\text{naive}}=\dot q\,t$. On shell $\ddot q=0$, so $\dfrac{d}{dt}Q_{\text{naive}}=\ddot q\,t+\dot q=\dot q$, nonzero for any moving solution. Not conserved — it drifts at exactly $dK/dt=\dot q$.
>
> **(c)** Corrected charge from (8): $Q=Q_{\text{naive}}-K=\dot q\,t-q$. Then $\dfrac{dQ}{dt}=(\ddot q\,t+\dot q)-\dot q=\ddot q\,t=0$ on shell. Conserved. (It is the boost charge $Q=\dot q\,t-q=-q(0)$: minus the initial position, constant because the free trajectory is the straight line $q=q(0)+\dot q\,t$.)
>
> **One sentence:** the naive current's on-shell divergence equals $dK/dt$, not zero, precisely because $\delta L$ is a total derivative rather than strictly zero — so subtracting $K$ is not a convention but the only thing that plugs that leak.
