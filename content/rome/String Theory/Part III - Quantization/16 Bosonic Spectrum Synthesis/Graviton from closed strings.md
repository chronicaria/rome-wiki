---
title: Graviton from closed strings
number: "16.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, graviton]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The first excited closed-string state $\bar\alpha_{-1}^I\alpha_{-1}^J|0;p\rangle$ is massless at $D=26$ and splits into a **graviton**, a **$B$-field**, and a **dilaton**. A massless spin-2 particle can only interact as gravity, so string theory contains general relativity without ever being told about it.

## Two waves, two indices

A closed string carries two independent vibrations: a wave running left around the loop and a wave running right, each with its own transverse polarization. The mildest excitation wiggles each wave once, picking up one polarization index from each. Two indices glued together form a rank-2 tensor, and a massless rank-2 tensor field *is* a metric perturbation. Everything after that is bookkeeping: splitting the tensor into its irreducible pieces.

The open string, by contrast, supports a single wave: one index, one massless vector, a photon ([[Photon from open strings]]). Same machine, one more wave, and gravity drops out.

## The state and its mass

The closed string carries **two** oscillator towers — left-movers $\bar\alpha_n^I$ and right-movers $\alpha_n^I$, with transverse indices $I=2,\dots,D-1$, i.e. $D-2$ values. In natural units ($\hbar=c=1$) the mass formula is symmetric in the two sectors ([[Open versus closed spectra]]):
$$M^2=\frac{4}{\alpha'}\Bigl(N^\perp-\tfrac{D-2}{24}\Bigr)=\frac{4}{\alpha'}\Bigl(\bar N^\perp-\tfrac{D-2}{24}\Bigr).\tag{1}$$
These are two independent mass-shell conditions — one from the right-mover $L_0$, one from the left-mover $\bar L_0$ — and both must hold, so $N^\perp=\bar N^\perp$: **level matching**. This is not optional. A closed loop has no marked starting point, so states must be invariant under rigid shifts of $\sigma$; the generator of those shifts is $L_0-\bar L_0$, and demanding it annihilate physical states is exactly $N^\perp=\bar N^\perp$. It forbids exciting one sector alone.

The lowest state above the ground state must therefore put one oscillator in **each** tower:
$$\boxed{\;|\Omega^{IJ}\rangle \equiv \bar\alpha_{-1}^I\,\alpha_{-1}^J\,|0;p\rangle\;}\qquad I,J=2,\dots,D-1,$$
where $|0;p\rangle$ is shorthand for the light-cone Fock ground state $|p^+,\vec p_T\rangle$. It has $N^\perp=\bar N^\perp=1$, so (1) gives
$$M^2=\frac{4}{\alpha'}\Bigl(1-\tfrac{D-2}{24}\Bigr),$$
which is generically nonzero and vanishes exactly when $\tfrac{D-2}{24}=1$, i.e. $D=26$ — the [[Critical dimension D=26]] step.

Masslessness here is forced, not convenient. The states $|\Omega^{IJ}\rangle$ carry two transverse indices, so they fill representations of $SO(D-2)$ — the little group of a *massless* particle ([[Little group and Wigner classification]]). Were this level massive, its states would have to assemble into complete multiplets of the larger massive little group $SO(D-1)$, and they cannot: a massive spin-2 is the symmetric traceless tensor of $SO(D-1)$ with $\tfrac{D(D-1)}{2}-1$ components, while the symmetric part of $\Omega^{IJ}$ supplies only $\tfrac{(D-1)(D-2)}{2}-1$ — at $D=26$, $324$ needed versus $299$ available. The only Lorentz-consistent reading is $M^2=0$, and (1) then pins $D=26$.

So at $D=26$ this level consists of $24^2=576$ massless states $|\Omega^{IJ}\rangle$, each index running over the $24$ transverse directions.

## Splitting the two-index object

Each index of $\Omega^{IJ}$ is a vector of $SO(24)$, so the state lives in $\mathbf{24}\otimes\mathbf{24}$. Any rank-2 tensor splits into three pieces that do not mix under rotations — symmetrize, antisymmetrize, and pull out the trace:
$$\Omega^{IJ}=\underbrace{\Bigl(\Omega^{(IJ)}-\tfrac{\delta^{IJ}}{D-2}\,\Omega^{KK}\Bigr)}_{\text{symmetric traceless}}\;+\;\underbrace{\Omega^{[IJ]}}_{\text{antisymmetric}}\;+\;\underbrace{\tfrac{\delta^{IJ}}{D-2}\,\Omega^{KK}}_{\text{trace}}.$$
Here $\Omega^{(IJ)}=\tfrac12(\Omega^{IJ}+\Omega^{JI})$ and $\Omega^{[IJ]}=\tfrac12(\Omega^{IJ}-\Omega^{JI})$. Each piece is the transverse content of a spacetime field:

- **Symmetric traceless** $G_{\mu\nu}$ — a massless spin-2 field: the **graviton** ($\tfrac{24\cdot25}{2}-1=299$ states).
- **Antisymmetric** $B_{\mu\nu}$ — the **Kalb–Ramond field**, a 2-form: it couples to the string's worldsheet the way the 1-form photon $A_\mu$ couples to a charged particle's worldline ($\tfrac{24\cdot23}{2}=276$ states).
- **Trace** $\Phi$ — a single scalar, the **dilaton**, whose expectation value sets the string coupling $g_s=e^{\langle\Phi\rangle}$; the derivation from the worldsheet Euler character is in [[String coupling and the dilaton]] ($1$ state).

The count closes: $299+276+1=576=24^2$, every component of $\Omega^{IJ}$ accounted for. These three massless fields are universal — they appear in every string theory. Only the graviton concerns us here.

## Why a massless spin-2 field must be gravity

That $G_{\mu\nu}$ "looks like" a metric is not enough. The load-bearing claim is stronger: **any consistent interacting massless spin-2 field is forced to be general relativity** — the Feynman–Weinberg argument, in three steps.

**Step 1 — expand around flat space.** Write the field as a fluctuation
$$G_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}.$$
At this stage $h_{\mu\nu}$ is a free spin-2 field, not yet a dynamical metric.

**Step 2 — the free theory needs a gauge symmetry.** Canonically quantizing $h_{\mu\nu}$ covariantly hits the same trouble as covariant electromagnetism: the mostly-plus metric has a minus sign in the time direction, so time-like polarizations create **negative-norm** states — a state like $a^\dagger_{0i}|0\rangle$ has norm proportional to $\eta_{00}=-1$. The only cure is a gauge symmetry that decouples them:
$$h_{\mu\nu}\longrightarrow h_{\mu\nu}+\partial_\mu\xi_\nu+\partial_\nu\xi_\mu.\tag{2}$$
This is the **linearized diffeomorphism**. It removes the time-like and longitudinal polarizations, leaving exactly the transverse-traceless states counted above — the same $\tfrac{24\cdot25}{2}-1=299$ physical polarizations light-cone gauge produced directly. A healthy free massless spin-2 field *must* carry gauge symmetry (2).

**Step 3 — turn on interactions and bootstrap.** Couple $h_{\mu\nu}$ to matter. Lorentz invariance plus (2) force the leading coupling to be to the conserved stress tensor,
$$S_{\text{int}}\sim\int d^Dx\,h_{\mu\nu}\,T^{\mu\nu},$$
so the field's charge is energy-momentum itself. But $h_{\mu\nu}$ carries energy, so its own stress tensor must appear on the right-hand side too; that correction shifts $T^{\mu\nu}$ again, and iterating the self-consistency bootstraps the linear symmetry (2) into **full nonlinear diffeomorphism invariance**. The unique two-derivative theory with that symmetry is the Einstein–Hilbert action,
$$S_{\rm EH}\sim\int d^Dx\,\sqrt{-G}\,R,$$
up to higher-derivative corrections suppressed at low energy (prefactors are schematic; the structure is the point). The string-internal route to Einstein's equations — demanding that worldsheet conformal invariance survive quantization — comes later, in [[Einstein equations from conformal invariance]].

String theory was never handed a metric. We extremized the area of a worldsheet, gauge-fixed, quantized free transverse oscillators, and the first excited closed level automatically contained a massless spin-2 particle. The Feynman–Weinberg logic then says that particle can only interact as general relativity. Gravity is not an input; it is the mildest closed-string vibration.

## Open questions

- Light-cone gauge displays only physical polarizations. The covariant gauge redundancies of $G_{\mu\nu}$ (diffeomorphisms) and $B_{\mu\nu}$ (2-form gauge symmetry) are invisible here; they reappear in covariant/BRST language.
- The Feynman–Weinberg bootstrap is sketched to checkpoint level. A full proof that the nonlinear completion is *uniquely* Einstein–Hilbert is a field-theory result beyond this vault; the string-internal derivation is [[Einstein equations from conformal invariance]].
- The dilaton–coupling relation $g_s=e^{\langle\Phi\rangle}$ is stated at spectrum level; its derivation from the worldsheet Euler character lives in [[String coupling and the dilaton]].

## Exercise

The photon ([[Photon from open strings]]) is the open-string analogue of this note. Use the open mass formula $\alpha'M^2=N^\perp-1$ and the closed formula (1).

1. The open string's first massless state $\alpha_{-1}^I|0;p\rangle$ carries **one** transverse index. Why does the closed string's first massless state carry **two**? Answer using level matching, in one sentence.
2. The open massless level has $D-2=24$ states (one massless vector). Show the closed massless level has $(D-2)^2=576$ states, and check that the graviton, $B$-field, and dilaton dimensions sum to that number.

> [!success]- Solution
> **Part 1.** The two towers are tied by level matching $N^\perp=\bar N^\perp$: you cannot raise the right-mover level without matching it in the left-mover. The lowest excited state therefore needs $N^\perp=\bar N^\perp=1$, i.e. one oscillator in *each* tower, contributing one transverse index each — two indices total. (The open string has a single tower, so one oscillator, one index.)
>
> **Part 2.** Both closed indices run over the $D-2=24$ transverse directions, so $\Omega^{IJ}$ has $24\times24=576$ components. The irreducible pieces of a rank-2 tensor of $SO(n)$, with $n=24$:
> $$\underbrace{\tfrac{n(n+1)}{2}-1}_{\text{sym. traceless}}+\underbrace{\tfrac{n(n-1)}{2}}_{\text{antisym.}}+\underbrace{1}_{\text{trace}}=299+276+1=576=24^2.\ \checkmark$$
> The $-1$ in the symmetric part is the trace, moved into its own singlet — that is exactly the dilaton. So graviton $(299)$, $B$-field $(276)$, dilaton $(1)$ account for every state, with no double-counting.
