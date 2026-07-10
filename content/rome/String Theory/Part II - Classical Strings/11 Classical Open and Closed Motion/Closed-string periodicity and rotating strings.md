---
title: Closed-string periodicity and rotating strings
number: "11.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, closed-string]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A closed string is a loop with no endpoints, so the open string's wall-reflection rule gives way to a single demand — the string must close on itself, $\vec X(t,\sigma)=\vec X(t,\sigma+\sigma_1)$ — leaving the left- and right-moving waves independent: the classical seed of the closed string's two oscillator towers. The rigidly rotating open string, worked in full below, is the module's capstone: one spinning rod whose tips reach the speed of light.

## Closed string: periodicity instead of reflection

For an open string the endpoints act as mirrors: a wave hits $\sigma=0$, bounces, and comes back as itself, collapsing the two movers into one function $\vec F$ (see [[Open-string reflection at endpoints]]). A closed string has no walls. Its parameter $\sigma$ lives on a circle, $\sigma\sim\sigma+\sigma_1$ with $\sigma_1=E/T_0$ the energy parameter as before; a wave runs around the loop forever, never turning around. We keep the full d'Alembert solution with both movers independent ($c$ stays explicit, as throughout the classical modules):
$$\vec X(t,\sigma)=\tfrac12\big(\vec F(ct+\sigma)+\vec G(ct-\sigma)\big), \tag{1}$$
$\vec F$ the left-mover, $\vec G$ the right-mover. The one condition to impose is that the loop is single-valued — that $\sigma$ and $\sigma+\sigma_1$ label the *same physical point*:
$$\vec X(t,\sigma+\sigma_1)=\vec X(t,\sigma)\quad\text{for all }t,\sigma. \tag{2}$$

**What periodicity forces.** Set $u=ct+\sigma$ and $w=ct-\sigma$. Advancing $\sigma\to\sigma+\sigma_1$ pushes $u\to u+\sigma_1$ but pulls $w\to w-\sigma_1$: the two arguments move in *opposite* directions. Condition (2) becomes
$$\vec F(u+\sigma_1)+\vec G(w-\sigma_1)=\vec F(u)+\vec G(w)
\;\Longrightarrow\;
\underbrace{\vec F(u+\sigma_1)-\vec F(u)}_{\text{depends only on }u}=\underbrace{\vec G(w)-\vec G(w-\sigma_1)}_{\text{depends only on }w}.$$
Since $u$ and $w$ vary independently, a function of $u$ alone can equal a function of $w$ alone only if both are the same constant vector $\vec c_0$. Hence
$$\boxed{\;\vec F(u+\sigma_1)=\vec F(u)+\vec c_0,\qquad \vec G(w+\sigma_1)=\vec G(w)+\vec c_0\;} \tag{3}$$

Each mover in (3), advanced by $\sigma_1$ in its *own* argument, gains the same $+\vec c_0$, and in (2) that constant cancels: raising $\sigma$ advances $u$ but retreats $w$, so $\vec F$ contributes $+\vec c_0$ while $\vec G$ contributes $-\vec c_0$. The single-valuedness a closed loop demands survives. What (3) says is that the derivatives $\vec F'$ and $\vec G'$ are strictly periodic with period $\sigma_1$, while $\vec F$ and $\vec G$ themselves may carry a shared linear drift.

**The drift is the center of mass.** Peel off the linear part: $\vec F(u)=\frac{\vec c_0}{\sigma_1}u+\vec F_{\rm per}(u)$ and likewise for $\vec G$, with $\vec F_{\rm per},\vec G_{\rm per}$ genuinely $\sigma_1$-periodic. The drift terms in (1) add:
$$\vec X(t,\sigma)=\underbrace{\frac{\vec c_0}{\sigma_1}\,ct}_{\text{rigid drift}}+\tfrac12\big(\vec F_{\rm per}(ct+\sigma)+\vec G_{\rm per}(ct-\sigma)\big),$$
so the loop translates rigidly at
$$\vec v_{\rm cm}=\frac{c\,\vec c_0}{\sigma_1}.$$
If the loop is not drifting, $\vec c_0=0$ and both movers are *strictly* periodic. The period is $\sigma_1$, not $2\sigma_1$: there is no round trip off two walls, just one lap around the loop. (Contrast the open string, whose $\vec F$ has period $2\sigma_1$ from the there-and-back bounce.)

The unit-speed constraints $|\vec F'|^2=|\vec G'|^2=1$ from [[Left-moving and right-moving components]] still hold, separately for each mover. That independence is the structural payoff: the closed string carries **two** independent wave towers, left and right, where the open string's mirror fuses them into one. Quantum-mechanically these become two independent oscillator sets, tied together only by the [[Level matching]] condition; the single shared momentum lives in the common drift $\vec c_0$.

## Worked example: the rigidly rotating open string

This example runs the open-string machinery end to end. Picture a straight rigid rod of length $\ell$ spinning about its midpoint in the $(x,y)$ plane at angular frequency $\omega$, its two tips whipping around like a propeller. Everything follows from one input — how an endpoint moves — plus the two rules from [[Open-string reflection at endpoints]]: quasi-periodicity of $\vec F$ and unit speed $|\vec F'|=1$.

**Endpoint motion sets $\vec F$.** The $\sigma=0$ tip sits at radius $\ell/2$ and rotates:
$$\vec X(t,0)=\frac{\ell}{2}\big(\cos\omega t,\ \sin\omega t\big).$$
For the open string $\vec F(u)$ *is* the position of the $\sigma=0$ endpoint at time $t=u/c$ (from [[Open-string reflection at endpoints]]). Substituting $t=u/c$,
$$\vec F(u)=\frac{\ell}{2}\Big(\cos\frac{\omega u}{c},\ \sin\frac{\omega u}{c}\Big). \tag{4}$$
The tip traces a *fixed* circle, so its average velocity vanishes: $\vec v_0=0$, and $\vec F$ is **strictly** periodic with period $2\sigma_1$.

**Periodicity quantizes $\omega$.** Demanding $\vec F(u+2\sigma_1)=\vec F(u)$ means the phase advances by a whole number of turns:
$$\frac{\omega}{c}(2\sigma_1)=2\pi m \;\Longrightarrow\; \frac{\omega}{c}=\frac{\pi m}{\sigma_1}, \tag{5}$$
with $m$ a positive integer ($m=0$ fails the unit-speed condition below; negative $m$ just reverses the spin). To pick $m$, inspect the string at $t=0$: assembling $\vec X(0,\sigma)=\tfrac12\big(\vec F(\sigma)+\vec F(-\sigma)\big)=\frac{\ell}{2}\big(\cos\frac{\pi m\sigma}{\sigma_1},\,0\big)$ shows that as $\sigma$ runs from $0$ to $\sigma_1$, the parameterization traces one rod $m$ times over. The honest singly-covered string is $m=1$. With $\sigma_1=E/T_0$,
$$\frac{\omega}{c}=\frac{\pi}{\sigma_1}=\frac{\pi T_0}{E}.$$
More energetic strings spin more slowly — counterintuitive, but forced: the tips already move at $c$ (shown next), so a longer, heavier string must rotate more slowly to keep its more distant tips from exceeding light speed.

**Unit speed fixes $\ell$.** Impose $|\vec F'|^2=1$ on (4):
$$\frac{d\vec F}{du}=\frac{\omega\ell}{2c}\Big(-\sin\frac{\omega u}{c},\ \cos\frac{\omega u}{c}\Big)
\;\Longrightarrow\;
\left|\frac{d\vec F}{du}\right|^2=\Big(\frac{\omega\ell}{2c}\Big)^2=1. \tag{6}$$
So $\frac{\omega\ell}{2c}=1$, giving
$$\ell=\frac{2c}{\omega}=\frac{2\sigma_1}{\pi}=\frac{2}{\pi}\frac{E}{T_0}.$$
Two consequences. First, the spinning string is **shorter by a factor $2/\pi\approx0.64$** than a static string of the same energy ($\ell_{\rm static}=E/T_0$): part of the energy budget is rotational kinetic energy, leaving less to be stored as length. Second, $\omega\cdot(\ell/2)=c$ exactly — **the tips move at precisely the speed of light**, the defining behavior of a relativistic string's free ends.

**Full parameterized solution.** With $\omega/c=\pi/\sigma_1$ and $\ell/2=\sigma_1/\pi$, (4) becomes $\vec F(u)=\frac{\sigma_1}{\pi}\big(\cos\frac{\pi u}{\sigma_1},\sin\frac{\pi u}{\sigma_1}\big)$. Assemble $\vec X=\tfrac12\big(\vec F(ct+\sigma)+\vec F(ct-\sigma)\big)$ and collapse with the sum-to-product identities ($\cos A+\cos B=2\cos\frac{A+B}{2}\cos\frac{A-B}{2}$ and its sine partner):
$$\vec X(t,\sigma)=\frac{\sigma_1}{\pi}\cos\frac{\pi\sigma}{\sigma_1}\Big(\cos\frac{\pi ct}{\sigma_1},\ \sin\frac{\pi ct}{\sigma_1}\Big). \tag{7}$$
This factorizes cleanly: a **fixed spatial profile** $\cos(\pi\sigma/\sigma_1)$ — maximal at the ends $\sigma=0,\sigma_1$ (where $\cos=\pm1$), zero at the center $\sigma=\sigma_1/2$ — times a **rigid rotation** $(\cos,\sin)\tfrac{\pi ct}{\sigma_1}$ of that shape in the plane. Project onto either axis and the time factor becomes a single $\cos(\pi ct/\sigma_1)$: the lowest standing-wave mode of the open string. The rotation is that mode circularly polarized, its two transverse components a quarter-period out of step.

**Neumann check.** Differentiate (7) in $\sigma$:
$$\vec X'(t,\sigma)=-\sin\frac{\pi\sigma}{\sigma_1}\Big(\cos\frac{\pi ct}{\sigma_1},\ \sin\frac{\pi ct}{\sigma_1}\Big),$$
the $\pi/\sigma_1$ from differentiating cancelling the $\sigma_1/\pi$ prefactor. Since $\sin(\pi\sigma/\sigma_1)$ vanishes at $\sigma=0$ and $\sigma=\sigma_1$, the free-endpoint (Neumann) condition $\vec X'(t,0)=\vec X'(t,\sigma_1)=0$ holds automatically.

**Energy density along the rod.** The energy parameterization assigns each $d\sigma$ a fixed energy, $dE=T_0\,d\sigma$; per unit *physical* length the story is different. At fixed time the signed distance of the point $\sigma$ from the center is
$$s(\sigma)=\frac{\sigma_1}{\pi}\cos\frac{\pi\sigma}{\sigma_1},\qquad \frac{\ell}{2}=\frac{\sigma_1}{\pi},\qquad -\frac{\ell}{2}\le s\le\frac{\ell}{2}.$$
Since $\cos\frac{\pi\sigma}{\sigma_1}=2s/\ell$, we have $\big|\frac{ds}{d\sigma}\big|=\big|\sin\frac{\pi\sigma}{\sigma_1}\big|=\sqrt{1-\cos^2\frac{\pi\sigma}{\sigma_1}}=\sqrt{1-4s^2/\ell^2}$, and dividing $dE=T_0\,d\sigma$ by $ds$ gives the density per physical length:
$$\boxed{\;\epsilon(s)\equiv\frac{dE}{ds}=\frac{T_0}{\sqrt{1-4s^2/\ell^2}}\;}$$
At the center $\epsilon(0)=T_0$: the midpoint never moves, so its density is pure tension. Near the tips ($s\to\pm\ell/2$) the material moves at nearly $c$, relativistic energy piles up, and the density **diverges** — but only as an integrable inverse square root. Integrating recovers the total energy exactly:
$$\int_{-\ell/2}^{\ell/2}\epsilon(s)\,ds=T_0\frac{\ell}{2}\int_{-1}^1\frac{dy}{\sqrt{1-y^2}}=T_0\frac{\ell}{2}\cdot\pi=T_0\sigma_1=E.$$

## Open questions

- The full quantum closed-string expansion — $\alpha_0^\mu=\bar\alpha_0^\mu=\sqrt{\alpha'/2}\,p^\mu$ (the shared momentum living in $\vec c_0$) plus level matching of the two independent towers — is deferred to [[Left and right oscillator algebras]] and [[Level matching]].

## Exercise

The rotating string in (7) is the $m=1$ mode. Keep general $m\ge1$ in the periodicity condition (5) and repeat the derivations: find $\ell_m$ and assemble the full solution $\vec X(t,\sigma)$. Show that as $\sigma$ runs over $[0,\sigma_1]$ the string covers a single rod of length $\ell_m=\ell_1/m$ exactly $m$ times, and explain why these folded, multiply-covered configurations are set aside in favor of $m=1$.

> [!success]- Solution
> From (5), $\omega_m/c=\pi m/\sigma_1$. The unit-speed condition (6) is unchanged, $\omega_m\ell_m/(2c)=1$, so
> $$\ell_m=\frac{2c}{\omega_m}=\frac{2\sigma_1}{\pi m}=\frac{\ell_1}{m}.$$
> The $\vec F$-circle has radius $\ell_m/2=\sigma_1/(\pi m)$. Assembling as before, with $\vec F(u)=\frac{\sigma_1}{\pi m}\big(\cos\frac{\pi m u}{\sigma_1},\sin\frac{\pi m u}{\sigma_1}\big)$, the same sum-to-product step gives
> $$\vec X(t,\sigma)=\frac{\sigma_1}{\pi m}\cos\frac{\pi m\sigma}{\sigma_1}\Big(\cos\frac{\pi m ct}{\sigma_1},\ \sin\frac{\pi m ct}{\sigma_1}\Big).$$
> The spatial profile is now $\cos(\pi m\sigma/\sigma_1)$. As $\sigma$ runs over $[0,\sigma_1]$ the argument runs from $0$ to $\pi m$, completing $m$ half-periods, so the position along the rod, $s(\sigma)=\frac{\sigma_1}{\pi m}\cos\frac{\pi m\sigma}{\sigma_1}$, traverses from one tip $+\ell_m/2$ to the other $-\ell_m/2$ and back $m$ times over: one rod, covered $m$-fold.
> So the $m$-th solution is a rigid rod of length $\ell_m=\ell_1/m$ spinning at $\omega_m=m\omega_1$ — *not* the $m=1$ rod — with the string folded onto itself in $m$ coincident strands, each strand of parameter length $\sigma_1/m$ carrying energy $E/m$. It is a genuine solution of the wave equation, constraints, and Neumann conditions, but it is not a new rigid-rod shape: it is a degenerate, self-overlapping cover of one rod. Since the setup asks for a single rod traced once by the string, $m=1$ is the only admissible choice — the same conclusion the shape-at-$t=0$ inspection reaches in the main text, there before $\ell$ is even fixed.
