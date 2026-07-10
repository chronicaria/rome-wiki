---
title: State-operator correspondence
number: "23.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, ghosts-d26]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---
In a 2d CFT every local operator inserted at the origin *is* a state, because the conformal map from the cylinder to the plane crushes the infinite past $\tau\to-\infty$ into the single point $z=0$ — so "prepare a state in the far past" and "insert an operator at the origin" become the same instruction.

## The core idea

Draw a state on a circle. Now evolve it backwards in time forever. On the cylinder that means sliding the circle off to $\tau=-\infty$. But the conformal map to the plane sends $\tau=-\infty$ to a **single point**, $z=0$. A state pushed infinitely far into the past therefore collapses onto one point of the plane — and "put something at one point" is exactly what a local operator does. Every state $\leftrightarrow$ a local operator at the origin, and the dictionary runs both ways.

This is the trick that lets us stop juggling abstract string states $|\Psi\rangle$ and instead work with concrete operators we can multiply, expand, and integrate — the [[Vertex operators and physical-state conditions|vertex operators]] that build amplitudes.

## Why this is surprising

In an ordinary quantum theory, **states** and **local operators** are different species. A state is a wavefunctional $\Psi[\phi(\sigma)]$ — data spread over an entire spatial slice at fixed time. A local operator lives at one spacetime point. There is no reason to identify a whole-slice object with a single-point object, and in a generic (non-conformal) theory you cannot: inserting one operator kicks the system into a *superposition* of many states.

Conformal symmetry is what changes the game. It gives us a map that turns "the whole far-past slice" into "the origin," and that map is what makes the identification exact.

## The map: cylinder $\to$ plane

The closed-string worldsheet is a **cylinder**: coordinate $w=\sigma+i\tau$ with $\sigma\sim\sigma+2\pi$ periodic (Euclidean time $\tau$). Map it to the complex plane by
$$z=e^{-iw}=e^{-i\sigma}\,e^{\tau}.\tag{1}$$
Read off what happens to a slice of fixed time:

- A circle $\sigma\in[0,2\pi)$ at fixed $\tau$ becomes a **circle of radius** $|z|=e^{\tau}$. Time slices become concentric rings.
- $\tau\to-\infty$ (infinite past) $\;\Rightarrow\;|z|\to0$: **the single point $z=0$**.
- $\tau\to+\infty$ (infinite future) $\;\Rightarrow\;|z|\to\infty$.

So time evolution on the cylinder becomes **radial evolution** on the plane: later = bigger radius. The Hamiltonian $H=\partial_\tau$ maps to the dilatation (radial-scaling) generator
$$D=z\partial+\bar z\bar\partial = L_0+\bar L_0,\tag{2}$$
which measures scaling weight on the plane. Two immediate consequences:

- **Energy becomes scaling weight.** A cylinder energy eigenstate maps to a plane operator with definite scaling dimension $h+\bar h$. (There is a constant offset from the Casimir energy; see the box at the end.)
- **Radial ordering replaces time ordering.** In a correlator, operators at larger $|z|$ sit to the left — this is just "later on the left" translated through the map. Every CFT operator statement is implicitly inside a radially-ordered correlator.

## The map, via path integrals

Here is why a state and an operator are literally the same object. Recall how a path integral prepares a state, starting in quantum mechanics. The propagator from $x_i$ at time $\tau_i$ to $x_f$ at $\tau_f$ is $G(x_f,x_i)=\int_{x(\tau_i)=x_i}^{x(\tau_f)=x_f}\mathcal Dx\,e^{-S}$, and an initial wavefunction $\psi_i$ evolves as
$$\psi_f(x_f)=\int dx_i\,G(x_f,x_i)\,\psi_i(x_i).$$
Two lessons: to read off $\psi_f$ at $x_f$, integrate over paths ending at $x_f$; and the initial state $\psi_i$ enters only as a *weighting of the inner boundary condition*.

Now the same statement for a CFT on the plane. A state lives on a circle $|z|=r_f$; to prepare it, integrate over all fields on the **annulus** between an inner circle $|z|=r_i$ and $|z|=r_f$, with the initial state weighting the inner edge:
$$\Psi[\phi_f;r_f]=\int_{\phi(r_i)=\phi_i}^{\phi(r_f)=\phi_f}\mathcal D\phi\;e^{-S[\phi]}\;\Psi_i[\phi_i;r_i].\tag{3}$$

**Now shrink the inner circle to a point:** push the initial state into the far past, $r_i\to0$. The annulus fills in to the whole disc $|z|\le r_f$, and the only surviving trace of the initial state is a weighting of the path integral **at the single point $z=0$**:
$$\Psi[\phi_f;r_f]=\int^{\phi(r_f)=\phi_f}\mathcal D\phi\;e^{-S[\phi]}\;\mathcal O(0).\tag{4}$$
But "weight the path integral at a point" is the *definition* of inserting a local operator $\mathcal O(0)$. So:

$$\boxed{\;\text{local operator }\mathcal O(0)\;\longleftrightarrow\;\text{state }|\mathcal O\rangle\;}$$

Every operator at the origin defines a state; conversely, any state, evolved back to the far past, is reproduced by *some* local operator at the origin. That is the **state–operator map**. For the string, $\partial X^\mu$ inserts an oscillator excitation ($\alpha^\mu_{-1}$), while $e^{ip\cdot X}$ inserts momentum $p^\mu$ (it maps to the momentum eigenstate $|0;p\rangle$ — the ground state carrying momentum $p^\mu$ — instead of the zero-momentum vacuum).

## The dictionary

- **Vacuum $|0\rangle\;\leftrightarrow\;$ identity $\mathbf 1$.** "Insert nothing at the origin" = "no disturbance in the far past" = the ground state. (On the cylinder this is the standard Euclidean trick: propagating back to $\tau=-\infty$ projects onto the ground state.)
- **Primary state $\;\leftrightarrow\;$ primary operator.** A state with $L_0|\Psi\rangle=h|\Psi\rangle$ and $L_n|\Psi\rangle=0$ for $n>0$ maps to a primary operator of weight $h$. You can see this directly: acting with $L_n=\oint\frac{dz}{2\pi i}z^{n+1}T(z)$ on $|\mathcal O\rangle$ and picking up poles of the $T\mathcal O$ OPE gives $L_0|\mathcal O\rangle=h|\mathcal O\rangle$ and $L_{n>0}|\mathcal O\rangle=0$ exactly when $\mathcal O$ is primary of weight $h$. **The energy and spin spectrum of states is exactly the spectrum of operator weights** — which is why computing the primary weights is the central task of a CFT.

Two guardrails so the statement is not overclaimed:

- It is a bijection with **local** operators, not "#states $=$ #operators" (never true). Fock-space creation operators are *not* local operators — they are Fourier transforms of them. This is a genuinely new, CFT-specific correspondence.
- It holds **only in conformal theories**, precisely because it needs the cylinder$\leftrightarrow$plane map. Kill conformal invariance and a local operator smears into many states.

## Why the string needs this

An on-shell string state satisfies the covariant Virasoro (physical-state) conditions
$$L_n|\Psi\rangle=0\;(n>0),\qquad (L_0-1)|\Psi\rangle=0,\tag{5}$$
with an identical barred copy $\bar L_n,\ (\bar L_0-1)$ for the closed string. Read through the map, (5) says two things at once: the first line makes $|\Psi\rangle$ a **primary state**, and the second fixes its matter weight to $h=1$ (and $\bar h=1$ for the closed string). So each physical string state is a **primary operator of weight $1$** (open) or $(1,1)$ (closed). Promoting that operator to a diffeomorphism- and Weyl-invariant insertion turns it into a [[Vertex operators and physical-state conditions|vertex operator]] — the object we actually feed into amplitudes. This is the bridge from the abstract spectrum to computable string scattering.

**Convention bridge.** The light-cone route (Modules 14/16) writes the same physics as $\alpha' M^2=N^\perp+a$ with normal-ordering constant $a=-1$: the $-1$ appears as a *shift in $M^2$*. The covariant route packages the same fact as the *required weight* $+1$ that a matter operator must carry — $(L_0-1)|\Psi\rangle=0$ — which is the intercept $-a=+1$. Same number, two bookkeepings.

> [!note]- The Casimir offset in "energy = weight"
> The identification "cylinder energy $=$ plane scaling weight" carries a constant shift. On the cylinder with $\sigma\in[0,2\pi)$ the Hamiltonian is
> $$H=L_0+\bar L_0-\frac{c+\bar c}{24},$$
> where $-\frac{c+\bar c}{24}$ is the Casimir energy of the ground state (its energy on the plane is normalized to zero). So the cylinder energy of a state equals $h+\bar h$ minus that offset — not $h+\bar h$ on the nose. A full free scalar has $c=\bar c=1$, so the offset is $-\frac{c+\bar c}{24}=-\frac{1}{12}$: one chiral half contributes $-\frac{1}{24}=\frac12\sum_{n\ge1}n=\frac12\zeta(-1)$ (the regularized $\sum n=-\frac1{12}$), and the two halves sum to $-\frac1{12}$. This is the iconic zero-point energy, recovered through a genuine finite computation, no hand-thrown infinities.

## Open questions

- The $r_i\to0$ shrink-the-circle argument is heuristic about convergence and about the exact sense in which the limit of states exists. Making this rigorous (radial quantization proper) is standard but deferred.
- The map extends to the ghosts: the $bc$ system has its own state–operator dictionary, and the ghost vacuum that dresses physical string states is **not** the ghost-number-zero identity $|0\rangle=\mathbf 1$ — it carries nonzero ghost number. That state is the ghost ground state $|\!\downarrow\rangle=c_1|0\rangle$, annihilated by $b_{n\ge 0}$ and $c_{n\ge 1}$ (here $c_1|\!\downarrow\rangle=c_1^2|0\rangle=0$ by nilpotency, while $b_0|\!\downarrow\rangle=0$ instead because $\{b_0,c_1\}=\delta_{1,0}=0$ and $b_0|0\rangle=0$), whereas the $SL(2,\mathbb C)$-invariant vacuum $|0\rangle\leftrightarrow\mathbf 1$ is annihilated by $b_{n\ge -1}$ and $c_{n\ge 2}$ — so on $|0\rangle$ the modes $c_1,c_0,c_{-1}$ act as *creation* operators and $|\!\downarrow\rangle=c_1|0\rangle\neq|0\rangle$. This matters for BRST and for the moduli-space measure; deferred to [[The bc ghost CFT]]/Module 24.

## Exercise

The map (1) is $z=e^{-iw}$ with $w=\sigma+i\tau$. Show directly that the operator generating radial scaling on the plane is the cylinder Hamiltonian generating $\tau$-translation — i.e. that dilatation $D=z\partial_z+\bar z\partial_{\bar z}$ is the pushforward of $\partial_\tau$. Then state, in one sentence, why this single fact forces energy eigenstates on the cylinder to become definite-weight operators on the plane.

> [!success]- Solution
> Take a function on the plane and pull it back to the cylinder via $z=e^{-iw}$, so it depends on $w,\bar w$ through $z,\bar z$. Using $w=\sigma+i\tau$, the antiholomorphic coordinate is $\bar w=\sigma-i\tau$, hence $\bar z=\overline{e^{-iw}}=e^{+i\bar w}=e^{+i\sigma+\tau}$ (matching $|z|=e^\tau$, and $z=e^{-i\sigma+\tau}$). Then
> $$\frac{\partial z}{\partial\tau}=\frac{\partial}{\partial\tau}e^{-i\sigma+\tau}=z,\qquad \frac{\partial\bar z}{\partial\tau}=\frac{\partial}{\partial\tau}e^{i\sigma+\tau}=\bar z .$$
> By the chain rule,
> $$\partial_\tau=\frac{\partial z}{\partial\tau}\,\partial_z+\frac{\partial\bar z}{\partial\tau}\,\partial_{\bar z}=z\,\partial_z+\bar z\,\partial_{\bar z}=D.$$
> So $\tau$-translation on the cylinder is exactly radial scaling (dilatation) on the plane, i.e. $H=D=L_0+\bar L_0$ (up to the Casimir constant, which shifts all states equally and so does not affect the generator).
>
> **Why it forces the correspondence:** an energy eigenstate on the cylinder, $H|\Psi\rangle=E|\Psi\rangle$, is by this identity a $D$-eigenstate on the plane, $D|\Psi\rangle=(h+\bar h)|\Psi\rangle$. But a $D$-eigenstate is precisely an operator with definite scaling weight. So "definite energy on the cylinder" and "definite conformal weight on the plane" are the *same* condition — which is why the state–operator map ties energy levels to operator weights.
