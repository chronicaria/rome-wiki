---
title: Graviton, antisymmetric tensor, and dilaton
number: "15.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, graviton]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Quantize a closed loop of string, look at its first excited level, and a **graviton** falls out — massless spin 2, the quantum of the gravitational field — with nothing gravitational put into the action. Two more massless fields ride along: an antisymmetric tensor $B_{\mu\nu}$ (the Kalb–Ramond field) and a scalar $\phi$ (the dilaton).

## Two indices, three particles

The massless level of the closed string is one left-moving quantum times one right-moving quantum. Each quantum is a transverse vector — it points in one of the $D-2$ directions perpendicular to the string's motion. So a massless state is labeled by **two** transverse directions $(I,J)$: it is a $(D-2)\times(D-2)$ matrix of polarizations.

A matrix is not an irreducible object. Rotate the transverse space and it reshuffles — but it reshuffles in three sealed compartments that never mix: its **symmetric-traceless** part, its **antisymmetric** part, and its **trace**. Those three compartments are three different particles. The names follow from which rotation representation each piece furnishes:

- symmetric traceless $\to$ spin-2 polarizations $\to$ **graviton** $G_{\mu\nu}$,
- antisymmetric $\to$ 2-form polarizations $\to$ **Kalb–Ramond** $B_{\mu\nu}$,
- trace (a single number) $\to$ scalar $\to$ **dilaton** $\phi$.

The rest of the note supplies the linear algebra, the graviton identification, and the reason masslessness is forced.

## The massless level

The lowest excitation [[Level matching]] allows is one creation operator from each tower, both at mode $n=1$:
$$\sum_{I,J}R_{IJ}\,a_1^{I\dagger}\,\bar a_1^{J\dagger}\,|p^+,\vec p_T\rangle,\qquad I,J=2,\dots,D-1.$$
Here $a_1^{I\dagger}=\alpha_{-1}^I$ raises the right-moving tower, $\bar a_1^{J\dagger}=\bar\alpha_{-1}^J$ the left-moving one, and $R_{IJ}$ is an arbitrary polarization matrix. Because $I$ and $J$ are independent transverse labels, there are $(D-2)^2$ basis states.

From the [[Closed-string mass formula]] with $N^\perp=\bar N^\perp=1$,
$$\tfrac12\alpha'M^2 = N^\perp+\bar N^\perp-2 = 1+1-2 = 0,$$
so every state at this level is **massless**. That is not optional; we return below to why Lorentz invariance forces it.

## Decomposing the polarization matrix

Any square matrix splits into symmetric plus antisymmetric parts:
$$R_{IJ}=\underbrace{\tfrac12(R_{IJ}+R_{JI})}_{S_{IJ}}+\underbrace{\tfrac12(R_{IJ}-R_{JI})}_{A_{IJ}}.$$
The symmetric part still carries a trace, which rotates on its own, so pull it out. Define $S\equiv\delta^{IJ}S_{IJ}$ and write
$$S_{IJ}=\Big(S_{IJ}-\tfrac{1}{D-2}\delta_{IJ}S\Big)+\tfrac{1}{D-2}\delta_{IJ}S.$$
The bracket is traceless: contract with $\delta^{IJ}$ and use $\delta^{IJ}\delta_{IJ}=D-2$ to get $S-\frac{1}{D-2}(D-2)S=0$. Writing $\hat S_{IJ}$ for the traceless symmetric part and $S'\equiv S/(D-2)$,
$$\boxed{\;R_{IJ}=\hat S_{IJ}+A_{IJ}+S'\,\delta_{IJ}\;}\tag{1}$$
Under transverse rotations $SO(D-2)$ these three pieces transform among themselves and never into each other — they are the irreducible blocks of the matrix. So the $(D-2)^2$ states split into three closed subspaces (abbreviating $|p\rangle\equiv|p^+,\vec p_T\rangle$):
$$\sum_{I,J}\hat S_{IJ}\,a_1^{I\dagger}\bar a_1^{J\dagger}|p\rangle,\qquad
\sum_{I,J}A_{IJ}\,a_1^{I\dagger}\bar a_1^{J\dagger}|p\rangle,\qquad
S'\,a_1^{I\dagger}\bar a_1^{I\dagger}|p\rangle.$$

**Counting check** ($D-2=24$):

| piece | dimension formula | count |
|---|---|---|
| symmetric-traceless $\hat S_{IJ}$ | $\tfrac{(D-2)(D-1)}{2}-1$ | $\tfrac{24\cdot25}{2}-1=299$ |
| antisymmetric $A_{IJ}$ | $\tfrac{(D-2)(D-3)}{2}$ | $\tfrac{24\cdot23}{2}=276$ |
| trace $S'$ | $1$ | $1$ |

Total $299+276+1=576=24^2=(D-2)^2$. Every state is accounted for. In representation language this is $\mathbf{24}\otimes\mathbf{24}=(\text{sym. traceless})\oplus(\text{antisym.})\oplus(\text{singlet})$ for $SO(24)$.

## The graviton — and why it wasn't put in by hand

The symmetric-traceless block $\sum\hat S_{IJ}\,a_1^{I\dagger}\bar a_1^{J\dagger}|p\rangle$ **is** a set of graviton states, one for one — and the way to see it is to match labels. Quantize the free linearized gravitational field $h_{\mu\nu}$ on its own: a one-graviton state of definite momentum is
$$\sum_{I,J}\xi_{IJ}\,a^{IJ\dagger}_{p^+,\vec p_T}|\Omega\rangle,$$
where $\xi_{IJ}$ is an **arbitrary symmetric traceless** matrix on the $D-2$ transverse indices. That is exactly the physical polarization content of a massless spin-2 particle: transverse (only $D-2$ directions survive gauge fixing), symmetric (spin 2, not spin 1), traceless (the trace is a separate scalar degree of freedom). Our $\hat S_{IJ}$ is *also* an arbitrary symmetric traceless matrix, on the same transverse indices, at the same momentum, at the same mass (zero). Same labels, same count $\Rightarrow$ same states:
$$a_1^{I\dagger}\bar a_1^{J\dagger}|p^+,\vec p_T\rangle\;\longleftrightarrow\;a^{IJ\dagger}_{p^+,\vec p_T}|\Omega\rangle.$$

**Nothing gravitational went in.** We never wrote a dynamical metric into the string action and never demanded general covariance. We quantized a relativistic loop and asked for its lightest excitations — and one of them carries exactly the polarizations of the gravitational field. Gravity is not an assumption of closed-string theory; it is a *prediction*.

**"Graviton-like" vs. actually gravity (Feynman–Weinberg).** A free massless spin-2 field $h_{\mu\nu}$ has unphysical negative-norm polarizations from its timelike components. Removing them requires a gauge redundancy,
$$h_{\mu\nu}\to h_{\mu\nu}+\partial_\mu\xi_\nu+\partial_\nu\xi_\mu,$$
the linear shadow of diffeomorphisms. Couple $h_{\mu\nu}$ to matter through $\kappa\!\int\! h_{\mu\nu}T^{\mu\nu}$; gauge invariance then forces $\partial_\mu T^{\mu\nu}=0$ (a conserved source). But an interacting $h_{\mu\nu}$ itself carries energy-momentum, so it must source itself; adding that coupling changes $T^{\mu\nu}$ again, and iterating the requirement forces the full nonlinear diffeomorphism symmetry — Einstein gravity, up to higher-derivative corrections. A consistent *interacting* massless spin-2 particle has no choice but to be a graviton.

**Why it must be massless (Wigner).** A *massive* particle can be boosted to rest, where its internal states must fill a representation of the little group $SO(D-1)$. Our states carry only transverse $I,J$ indices and form representations of $SO(D-2)$ — the little group of a *massless* particle. There are no longitudinal oscillators available to complete a massive multiplet. So Lorentz invariance forces this level to be massless, and the mass formula $M^2=\frac{4}{\alpha'}\!\big(1-\frac{D-2}{24}\big)$ then forces $D=26$ (see [[Closed-string mass formula]]).

## The antisymmetric tensor (Kalb–Ramond / $B$-field)

The antisymmetric block $\sum A_{IJ}\,a_1^{I\dagger}\bar a_1^{J\dagger}|p\rangle$ is the one-particle content of an antisymmetric field $B_{\mu\nu}=-B_{\nu\mu}$, the **Kalb–Ramond field**, also called the **2-form**.

The geometry is the reason for the name. An antisymmetric matrix naturally eats an oriented area element $dX^\mu\wedge dX^\nu$. A point particle traces a **curve**, so it couples to a 1-form $A_\mu\,dX^\mu$ — that is ordinary electromagnetism. A string traces a **surface**, so the natural object it couples to is a 2-form $B_{\mu\nu}\,dX^\mu\wedge dX^\nu$ integrated over the worldsheet. Thus $B_{\mu\nu}$ is to a string what $A_\mu$ is to a charged particle: strings carry Kalb–Ramond charge the way particles carry electric charge (the coupling itself is developed in [[Fundamental string charge]]).

## The dilaton (trace)

The trace block $S'\,a_1^{I\dagger}\bar a_1^{I\dagger}|p\rangle$ has $I$ summed — **no free index** — so it is a single state: the one-particle content of a massless **scalar** field, the **dilaton** $\phi$. In the matrix picture the trace is the uniform-scale part; it picks out no transverse direction and no orientation plane, which is exactly why its spacetime field is a scalar rather than a vector or tensor.

Despite being "just a scalar," the dilaton is operationally the most important of the three: its expectation value *sets the string coupling*, $g_s\sim e^{\phi}$ — so the strength of all string interactions is itself a dynamical field. See [[String coupling and the dilaton]].

## From polarizations to fields

Promote the polarization matrix to a wavefunction $\psi_{IJ}(\tau,p^+,\vec p_T)$. The Schrödinger equation $i\partial_\tau|\Psi\rangle=H|\Psi\rangle$, with the light-cone Hamiltonian $H=\frac{\alpha'}{2}p^Kp^K+N^\perp+\bar N^\perp-2$ reducing to $\frac{\alpha'}{2}p^Kp^K$ at $N^\perp=\bar N^\perp=1$, becomes
$$i\,\frac{\partial\psi_{IJ}}{\partial\tau}=\frac{\alpha'}{2}\,p^Kp^K\,\psi_{IJ}.\tag{2}$$
The light-cone gauge relation $x^+=\alpha'p^+\tau$ gives $\partial_\tau=\alpha'p^+\partial_{x^+}$, and $i\partial_{x^+}$ acts as $p^-$, so (2) says $2p^+p^-=p^Kp^K$ on $\psi_{IJ}$ — the massless mass-shell condition (mostly-plus signature), i.e. the wave equation $\partial^2\psi_{IJ}=0$. Its symmetric-traceless part is the classical **graviton field** $G_{\mu\nu}$, its antisymmetric part the **Kalb–Ramond field** $B_{\mu\nu}$, its trace the **dilaton field** $\phi$ — the three blocks of (1), now as fields. The same triplet reappears in the superstring as its massless NS–NS sector, where $B_{\mu\nu}$ is called the NS–NS 2-form.

## Open questions

- This note *uses* the transverse-traceless polarization count of a free linearized graviton rather than deriving the light-cone quantization of $h_{\mu\nu}$; that count is developed in [[Polarizations of massless spin-1 and spin-2]].
- The Feynman–Weinberg argument is a bootstrap sketch, not a full nonlinear proof. Higher-derivative gravitational corrections are allowed and matter at the string scale.
- The explicit Kalb–Ramond worldsheet coupling and its gauge symmetry are deferred to [[Fundamental string charge]]; here we only identify the free one-particle state.

## Exercise

Suppose a colleague claims the closed string's massless graviton, being a *rank-2 spacetime tensor* $G_{\mu\nu}$ in $D=26$, therefore has $\tfrac12\cdot 26\cdot 27=351$ independent polarizations. Where does this go wrong, and what is the correct number? Give the count three ways: (a) directly from the string oscillators, (b) as an $SO(24)$ representation dimension, (c) as the physical polarizations of a massless spin-2 field, and check they agree.

> [!success]- Solution
> The error is counting $G_{\mu\nu}$ as an arbitrary symmetric $26\times 26$ matrix. The physical states are neither arbitrary, nor 26-dimensional in their indices, nor merely symmetric.
>
> **(a) From the oscillators.** The graviton states are $\hat S_{IJ}\,a_1^{I\dagger}\bar a_1^{J\dagger}|p\rangle$ with $\hat S_{IJ}$ symmetric *and traceless* on the $D-2=24$ **transverse** indices. A symmetric $24\times24$ matrix has $\frac{24\cdot25}{2}=300$ entries; removing one trace condition leaves
> $$300-1=299.$$
>
> **(b) As an $SO(24)$ irrep.** The symmetric-traceless representation of $SO(n)$ has dimension $\frac{n(n+1)}{2}-1$. With $n=24$: $\frac{24\cdot25}{2}-1=299$. Same number.
>
> **(c) As physical spin-2 polarizations.** A massless particle in $D$ dimensions has states labeled by the little group $SO(D-2)=SO(24)$, not the full $SO(D-1)$ — you cannot boost a massless particle to rest, so the timelike and longitudinal polarizations are pure gauge and drop out. A spin-2 field is the symmetric-traceless tensor of that little group, giving $299$ again.
>
> All three agree: $\boxed{299}$. The colleague's $351$ counts an arbitrary symmetric tensor over all $26$ spacetime directions; the transverse restriction ($26\to24$: gauge freedom plus the wave equation eliminate the two light-cone index directions) and the trace removal (the trace is a *separate particle*, the dilaton) cut it down. As a consistency check, the full massless level splits as $299\,(\text{graviton})+276\,(B\text{-field})+1\,(\text{dilaton})=576=24^2$, exactly $(D-2)^2$.
