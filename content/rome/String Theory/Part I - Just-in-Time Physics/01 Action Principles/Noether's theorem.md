---
title: Noether's theorem
number: "1.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, noether]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Every continuous symmetry of the action hands you a conserved quantity — for free, and mechanically. A one-parameter symmetry produces a current $j^\mu$ with $\partial_\mu j^\mu = 0$, hence a charge $Q=\int j^0\,d^dx$ that never changes.

The entire argument fits in three sentences. A symmetry makes $\delta S$ vanish; the equations of motion make the *bulk* of $\delta S$ vanish; so the leftover boundary term must take the same value at the start and the end of the motion — and a quantity equal at every pair of endpoints is a constant. That constant is the conserved charge, and energy, momentum, angular momentum, and electric charge are all this same boundary term, read off for different symmetries.

Why a mathematician should care: this is the theorem that turns conservation laws from a list of lucky accidents into a *dictionary*. You don't discover that momentum is conserved — you notice space looks the same everywhere and Noether hands you momentum. For string theory it is the machine that produces the string's spacetime momentum and the worldsheet stress tensor, so it must be airtight before we build strings.

**Two words of vocabulary.** *On-shell* = "after imposing the equations of motion"; *off-shell* = "for any trial path, EOM not assumed." Noether's argument lives in the gap between them: an identity that holds off-shell, then read on-shell.

Convention throughout: a continuous symmetry has a small *constant* parameter $\epsilon$. Below, $\delta q$ and $\delta\phi$ denote the coefficient of $\epsilon$ — the parameter itself is stripped off.

## The mechanic's version: one coordinate, fixed time

Start with $S=\int_{t_i}^{t_f} L(q,\dot q,t)\,dt$. Suppose the transformation $q(t)\to q(t)+\epsilon\,\delta q$ leaves the action invariant. The proof is two lines that pull in opposite directions and meet at the boundary.

**Line 1 (off-shell identity).** For *any* variation whatsoever, integration by parts splits $\delta S$ into a boundary piece and a bulk piece — this is the master formula from [[Euler-Lagrange equation]]:
$$\delta S=\left[\frac{\partial L}{\partial\dot q}\,\delta q\right]_{t_i}^{t_f}+\int_{t_i}^{t_f}\left(\frac{\partial L}{\partial q}-\frac{d}{dt}\frac{\partial L}{\partial\dot q}\right)\delta q\,dt.\tag{1}$$
This holds for every path, symmetry or not, on-shell or not. It is pure calculus.

**Line 2 (feed in the two facts).**

- *Go on-shell.* If $q(t)$ solves Euler–Lagrange, the bulk bracket in (1) is exactly zero. Only the boundary term survives:
$$\delta S=\left[\frac{\partial L}{\partial\dot q}\,\delta q\right]_{t_i}^{t_f}.$$
- *Use the symmetry.* By assumption this $\delta q$ leaves $S$ invariant for *every* path — in particular for the solution — so $\delta S=0$.

Setting the two equal, the boundary term itself vanishes: $\frac{\partial L}{\partial\dot q}\delta q$ takes **the same value at $t_i$ and $t_f$**. But $t_f$ was arbitrary — slide it anywhere and equality with $t_i$ still holds. A quantity equal at every instant is constant:
$$\boxed{\,Q\equiv\frac{\partial L}{\partial\dot q}\,\delta q=\text{const}.\,}$$

That $Q$ is the **Noether charge**: symmetry kills $\delta S$, the equations of motion kill the bulk, and the leftover boundary quantity is what remains conserved.

This is the payoff of respecting boundary terms in [[Boundary terms and allowed variations]]. There the endpoint expression $[p\,\delta q]$ looked like a nuisance to cancel; here the *same* expression, evaluated on a symmetry variation, **is** the conserved quantity. Same term, opposite attitude.

### Translation $\to$ momentum
If $L$ depends on $\dot q$ but not $q$, the shift $q\to q+\epsilon$ (so $\delta q=1$) leaves $L$ untouched. Then $Q=\partial L/\partial\dot q=p$. **Space looks the same everywhere $\Rightarrow$ momentum is conserved.** (Consistent with $\dot p=\partial L/\partial q=0$ straight from [[Euler-Lagrange equation]].)

### Time translation $\to$ energy
Time translations move the coordinate $t$ itself, so the fixed-time argument above does not literally apply. Derive it directly instead. Claim: if $L$ has no explicit $t$-dependence, the conserved charge is the **energy**
$$H=\dot q\,\frac{\partial L}{\partial\dot q}-L=p\dot q-L.$$
Differentiate along the motion:
$$\frac{dH}{dt}=\ddot q\,\frac{\partial L}{\partial\dot q}+\dot q\,\frac{d}{dt}\frac{\partial L}{\partial\dot q}-\frac{\partial L}{\partial q}\dot q-\frac{\partial L}{\partial\dot q}\ddot q-\frac{\partial L}{\partial t}=\dot q\underbrace{\left(\frac{d}{dt}\frac{\partial L}{\partial\dot q}-\frac{\partial L}{\partial q}\right)}_{=\,0\text{ on-shell (EL)}}-\frac{\partial L}{\partial t}.$$
On-shell the parenthesis vanishes, leaving $\frac{dH}{dt}=-\frac{\partial L}{\partial t}$. No explicit time in $L$ $\Rightarrow$ $H$ conserved. For $L=\tfrac12 m\dot q^2-V$ this gives $H=\tfrac12 m\dot q^2+V$ — kinetic plus potential, the total energy, exactly as it must be.

### One formula that contains both
Allow *both* a time shift $t\to t+\epsilon\tau$ and a coordinate shift, with the transformed path obeying $q'(t+\epsilon\tau)=q(t)+\epsilon\eta$, and with the Lagrangian changing by at most a total derivative, $L\to L+\epsilon\,dF/dt$. Running the fixed-time argument on the equivalent fixed-time variation $\bar\delta q=\epsilon(\eta-\dot q\,\tau)$ — the shifted integration limits contribute the extra $L\tau$ — the single conserved boundary quantity is
$$Q=p(\eta-\dot q\,\tau)+L\tau-F=p\eta-H\tau-F.\tag{2}$$
The term $-\dot q\,\tau$ appears because shifting $t$ drags $q$ along its own slope; grouping terms produces exactly the energy $H=p\dot q-L$. Two checks: $(\tau,\eta,F)=(0,1,0)$ gives $Q=p$ (momentum), and $(1,0,0)$ gives $Q=-H$ (energy, up to the conventional sign). Momentum and energy are the *same* Noether charge, read for space- and time-translations respectively.

## The field version: from a charge to a current

Promote $q(t)$ to a field $\phi(x)$ over $D$-dimensional spacetime with $d=D-1$ spatial dimensions, $S=\int d^Dx\,\mathcal{L}(\phi,\partial_\mu\phi)$, in units with $c=1$ so that $x^0=t$ (see [[Euler-Lagrange equation]]). A continuous internal symmetry $\phi\to\phi+\epsilon\,\delta\phi$ now buys you not one number but a **conserved current**:
$$\boxed{\,j^\mu=\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\,\delta\phi\,}\qquad\text{with}\qquad \partial_\mu j^\mu=0\ \ (\text{on-shell}).\tag{3}$$

Read the current physically before the algebra: $j^0$ is the **density** of the conserved stuff, $j^i$ is its **flux**. The statement $\partial_\mu j^\mu=0$ is a continuity equation — the local promise that the stuff is never created or destroyed, only moved. Conservation is *local first*; a single global charge appears only after you integrate over space.

**Why $\partial_\mu j^\mu=0$.** Take the divergence and use the field EL equation $\partial_\mu\!\big(\partial\mathcal{L}/\partial(\partial_\mu\phi)\big)=\partial\mathcal{L}/\partial\phi$:
$$\partial_\mu j^\mu=\Big(\partial_\mu\tfrac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\Big)\delta\phi+\tfrac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\partial_\mu(\delta\phi)=\tfrac{\partial\mathcal{L}}{\partial\phi}\delta\phi+\tfrac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\partial_\mu(\delta\phi)=\delta\mathcal{L}=0.$$
The last equality *is* the assumption that $\mathcal{L}$ is invariant; here $\delta\mathcal L$, like $\delta\phi$, has the $\epsilon$ stripped off. (If $\mathcal{L}$ instead shifts by a total divergence, $\delta\mathcal L=\partial_\mu K^\mu$, the conserved current is $j^\mu-K^\mu$ — needed just below.)

**Local law $\to$ global charge.** Split $\partial_\mu j^\mu=0$ into $\partial_t j^0+\partial_i j^i=0$, integrate over all space, and drop the spatial divergence as a boundary term at infinity (fields decay):
$$\frac{d}{dt}\underbrace{\int d^dx\,j^0}_{\displaystyle Q}=-\int d^dx\,\partial_i j^i=0\quad\Longrightarrow\quad Q=\text{const}.$$
A region's charge can change only by flux leaking across its boundary; seal the boundary and $Q$ is frozen — the field-theory echo of the mechanic's constant $Q$.

### Spacetime translations $\to$ the stress-energy tensor

When the symmetry also moves coordinates, the current picks up an extra term — exactly the $-H\tau$ move from formula (2). For a translation $x^\nu\to x^\nu+\epsilon^\nu$ the parameter is a vector, so keep it explicit and strip it only at the end. A scalar carries its value along, $\phi(x)\to\phi(x-\epsilon)$, so the field changes by $-\epsilon^\nu\partial_\nu\phi$, while $\mathcal{L}$ shifts by a total divergence, $-\epsilon^\nu\partial_\nu\mathcal{L}=\partial_\mu(-\epsilon^\mu\mathcal{L})$, giving $K^\mu=-\epsilon^\mu\mathcal{L}$. The refined current then collapses to
$$\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\big(-\epsilon^\nu\partial_\nu\phi\big)+\epsilon^\mu\mathcal{L}=-\epsilon^\nu\,T^\mu{}_\nu,$$
and stripping $-\epsilon^\nu$ leaves one conserved current per direction $\nu$ you can translate in:
$$T^\mu{}_\nu=\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\,\partial_\nu\phi-\delta^\mu{}_\nu\,\mathcal{L},\qquad \partial_\mu T^\mu{}_\nu=0.\tag{4}$$
This **canonical stress-energy tensor** is the Noether current for translations. Its top row is familiar physics: $T^0{}_0=\pi\dot\phi-\mathcal{L}$, with $\pi=\partial\mathcal L/\partial\dot\phi$, is the energy density (the field Hamiltonian density), while the momentum density is $-T^0{}_i=-\pi\,\partial_i\phi$. The sign deserves one check: a packet $\phi(x^1-t)$ moves in the $+x^1$ direction and should carry positive momentum. For a free scalar $\pi=\dot\phi$, so the density is $-\dot\phi\,\partial_1\phi=(\phi')^2\ge0$ — positive, as it must be. The charges assemble into the four-momentum as $p_\nu=-\int d^dx\,T^0{}_\nu$, matching $p_0=-E$ (mostly-plus signature). Translating in time gives energy; translating in space gives momentum — the field-theoretic version of formula (2)'s two checks.

### The same story, twice, in physics you already trust

- **The nonrelativistic string.** Shifting the whole string sideways, $y\to y+\epsilon$, leaves the string Lagrangian invariant, and the current (3) with $\delta y=1$ has components $\mathcal{P}^t=\partial\mathcal L/\partial\dot y=\mu_0\dot y$ (transverse momentum density) and $\mathcal{P}^x=\partial\mathcal L/\partial y'=-T_0\,y'$ (its flux). No stress-tensor sign appears here because the symmetry shifts the *field value*, not the base coordinate. The equation of motion is literally the continuity equation $\partial_t\mathcal{P}^t+\partial_x\mathcal{P}^x=0$, and the charge $p_y=\int_0^a\mathcal{P}^t\,dx$ is conserved **iff no flux escapes the ends** — free (Neumann) ends conserve it, a wall does not. That is Noether meeting [[Boundary terms and allowed variations]]: local conservation is automatic, but the global charge leaks if flux crosses a boundary (a wall, later a D-brane).
- **The relativistic particle.** For $S=-m\int ds$ (units with $c=1$ again), invariance under $x^\mu\to x^\mu+\epsilon^\mu$ gives the conserved **four-momentum** $p^\mu=m\,dx^\mu/ds$, and the equation of motion is precisely its conservation, $dp^\mu/ds=0$. Translation symmetry $\to$ four-momentum, word for word as the mechanic's version predicts (see [[Part I - Just-in-Time Physics/01 Action Principles/Reparameterization invariance|Reparameterization invariance]]).

## The symmetry $\to$ conservation dictionary

| Continuous symmetry of $S$ | Conserved Noether charge |
|---|---|
| time translation $t\to t+\epsilon$ | energy $H$ |
| space translation $\vec x\to\vec x+\vec\epsilon$ | momentum $\vec p$ |
| rotation | angular momentum |
| Lorentz boost | center-of-energy motion |
| internal phase $\phi\to e^{i\epsilon}\phi$ | charge (electric, particle number) |

Conservation laws are not gifts from nowhere; they are bookkeeping forced on us by the symmetries of the action.

## Crucial contrast: symmetry vs. redundancy

Everything above is Noether's *first* theorem, and it applies only to **global symmetries** — finitely many constant parameters, relating physically *distinct* states (a constant translation moves you to a genuinely different place). A local gauge *redundancy* like reparameterization invariance instead relabels the *same* state. It yields no new charge; its Noether content (the second theorem) is a **constraint** and identities among the equations of motion. Getting a constant $Q$ requires a real symmetry, not a relabeling — see [[Part I - Just-in-Time Physics/01 Action Principles/Reparameterization invariance|Reparameterization invariance]].

## Open questions

- The canonical $T^\mu{}_\nu$ in (4) need not be symmetric; the Belinfante procedure symmetrizes it once spin or gravity enters. Not needed for this module, but it is the tensor that couples to the metric later.
- Gauge symmetries can carry genuine boundary charges in advanced settings; here the redundancy-to-constraint lesson is the first-pass fact strings require.

## Exercise

A single free nonrelativistic particle in one dimension has $L=\tfrac12 m\dot q^2$. Under a **Galilean boost** $q\to q+\epsilon\, t$ (shift the trajectory by a uniform velocity $\epsilon$, so $\delta q=t$), the velocity shifts as $\dot q\to\dot q+\epsilon$, and $L$ is not invariant. Show that the boost is nonetheless a symmetry — the change in $L$ is a total time derivative — and use the refined formula (2) to find the conserved Noether charge. Interpret it.

> [!success]- Solution
> Under $q\to q+\epsilon t$ we have $\tau=0$ and $\eta=t$, and the velocity shifts by a constant, $\dot q\to\dot q+\epsilon$. Expand the Lagrangian directly:
> $$L\;\to\;\tfrac12 m(\dot q+\epsilon)^2=L+\epsilon\,m\dot q+O(\epsilon^2),$$
> and $m\dot q=\frac{d}{dt}(mq)$ identically, on any path. So $L\to L+\epsilon\,dF/dt$ with $F=mq$: not invariant, but off by a total derivative — exactly the case formula (2) covers. The boost is a legitimate symmetry.
>
> Apply $Q=p\eta-H\tau-F$ with $p=m\dot q$, $\eta=t$, $\tau=0$, $F=mq$:
> $$Q=(m\dot q)(t)-0-mq=m\dot q\,t-mq=-\,m\big(q-\dot q\,t\big).$$
> Check it is conserved on-shell: the free EOM is $\ddot q=0$, so $\dot Q=m\ddot q\,t+m\dot q-m\dot q=m\ddot q\,t=0$ $\checkmark$
>
> **Interpretation.** Up to the overall factor $-m$, the charge is $q-\dot q\,t=q(0)$, the particle's **initial position** (equivalently, $m$ times the position of the center of mass extrapolated back to $t=0$). Galilean-boost symmetry conserves the center-of-mass initial position — the statement that a free particle moves in a straight line at constant velocity. The charge depends *explicitly* on $t$, which is fine: Noether guarantees $dQ/dt=0$ along solutions, not that $Q$ is built from $q,\dot q$ alone. This is the one-particle shadow of the "center-of-energy motion" entry in the dictionary above.
