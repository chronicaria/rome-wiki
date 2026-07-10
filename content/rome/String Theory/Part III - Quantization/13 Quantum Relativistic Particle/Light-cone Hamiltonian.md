---
title: Light-cone Hamiltonian
number: "13.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, light-cone-hamiltonian]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The light-cone Hamiltonian $H=\frac{1}{2m^2}\big(p^Ip^I+m^2\big)$ is the mass-shell condition $p^2+m^2=0$ solved for the light-cone energy $p^-$ and rescaled so it generates $\tau$-evolution. Derive it once for a point particle; the string repeats the identical logic with $m^2$ promoted to an oscillator operator.

## Solve the constraint, don't impose it

A free relativistic particle obeys one law: $p^2=-m^2$ — energy and momentum sit on the mass shell. Light-cone gauge does not fight this constraint; it solves it, reading off one component of the momentum in terms of the others. The Hamiltonian is that solution times a conversion factor, so $H$ never *imposes* the mass shell — it *is* the mass shell, already solved.

Compare a bead on the circle $x^2+y^2=R^2$: you don't carry $y$ as an independent variable and enforce the circle at every step — you write $y=\sqrt{R^2-x^2}$ and work with $x$ alone. Light-cone gauge does exactly this to the relativistic energy.

## Setup: action, momentum, mass shell

Start from the relativistic point-particle action with an arbitrary worldline parameter $\tau$ (from [[Proper-time action|the proper-time action]]):
$$ S = -m\int_{\tau_i}^{\tau_f}\sqrt{-\eta_{\mu\nu}\dot x^\mu \dot x^\nu}\;d\tau = \int L\,d\tau,\qquad L=-m\sqrt{-\dot x^2}, $$
with $\dot x^\mu = dx^\mu/d\tau$, $\hbar=c=1$, mostly-plus signature, and $\tau$ **dimensionless** — this last choice is why factors of $m^2$ (not $m$) appear below. The conjugate momentum is
$$ p_\mu = \frac{\partial L}{\partial \dot x^\mu} = \frac{m\,\dot x_\mu}{\sqrt{-\dot x^2}}. \tag{1}$$
$L$ depends only on $\tau$-derivatives of $x^\mu$, never on $x^\mu$ itself, so each coordinate is cyclic: $dp_\mu/d\tau=0$, every momentum component conserved. Separately, the action carries a redundancy that conservation laws do not touch — any reparameterization of $\tau$ describes the same worldline — and fixing that freedom is light-cone gauge's job.

Square (1) and contract — the arbitrary $\dot x^2$ cancels:
$$ p^2 = p_\mu p^\mu = \frac{m^2\,\dot x^2}{-\dot x^2} = -m^2 \quad\Longrightarrow\quad \boxed{\,p^2 + m^2 = 0\,}. \tag{2}$$
This **mass shell** is the entire on-shell content of the theory, true in *any* parameterization. Everything below is this equation in a convenient disguise.

## The light-cone gauge

Reparameterization freedom lets us choose how $\tau$ tracks the motion. Light-cone gauge ties the coordinate $x^+=\tfrac{1}{\sqrt2}(x^0+x^1)$ (see [[Light-cone coordinates]]) linearly to $\tau$:
$$ \boxed{\;x^+ = \frac{p^+}{m^2}\,\tau\;}\tag{3}$$
Light-cone time runs uniformly in $\tau$. Dimensions demand *some* constant of length dimension in front of the dimensionless $\tau$; choosing precisely $p^+/m^2$ is what cancels every $p^+$ from the Hamiltonian below. This one choice also kills the square-root nonlinearity. Raise the index on (1), take the $+$ component, and feed in $\dot x^+ = p^+/m^2$:
$$ p^+ = \frac{m\,\dot x^+}{\sqrt{-\dot x^2}} = \frac{1}{\sqrt{-\dot x^2}}\,\frac{p^+}{m} \;\Longrightarrow\; \dot x^2 = -\frac{1}{m^2}. $$
The otherwise-arbitrary quantity $\sqrt{-\dot x^2}$ is now fixed to $1/m$, so the square root in $L$ is gone and (1) linearizes to $p_\mu = m^2\dot x_\mu$. Combined with $dp_\mu/d\tau=0$ this gives $\ddot x_\mu=0$: free straight-line motion. Integrating, $x^I(\tau)=x_0^I+\frac{p^I}{m^2}\tau$ and $x^-(\tau)=x_0^-+\frac{p^-}{m^2}\tau$; only $x^+$ gets no integration constant, because (3) already pinned it to $\tau$.

## The key step: solve the mass shell for $p^-$

In light-cone components $p^2 = -2p^+p^- + p^Ip^I$ (with $\eta^{+-}=-1$ and Euclidean transverse part; see [[Light-cone coordinates]]), so the mass shell (2) reads
$$ -2p^+p^- + p^Ip^I + m^2 = 0 \quad\Longrightarrow\quad \boxed{\;p^- = \frac{1}{2p^+}\big(p^Ip^I + m^2\big)\;}\tag{4}$$

This is the crux. The mass shell is quadratic in the momentum components; solving it for $p^-$ makes the light-cone energy a **derived** quantity — once $p^+$ and the transverse $\vec p_T=(p^I)$ are known, $p^-$ is fixed. There is no independent $p^-$ degree of freedom to quantize; the constraint is solved explicitly, not dragged along. With $p^-$ derived, the entire motion is fixed by the independent data $(x^I, x_0^-, p^I, p^+)$ — exactly the variables that get promoted to operators.

## From $p^-$ to the Hamiltonian

Why isn't $H$ simply $p^-$? Because $p^-$ is the light-cone energy — it generates translations in $x^+$, not in $\tau$: $\partial/\partial x^+ \leftrightarrow p^-$. We evolve operators in $\tau$, and the gauge (3) says a step in $\tau$ is a $(p^+/m^2)$-sized step in $x^+$:
$$ \frac{\partial}{\partial\tau} = \frac{p^+}{m^2}\frac{\partial}{\partial x^+} \;\longleftrightarrow\; \frac{p^+}{m^2}\,p^-. $$
So the generator of $\tau$-evolution — the Hamiltonian — is
$$ \boxed{\;H = \frac{p^+}{m^2}\,p^- = \frac{1}{2m^2}\big(p^Ip^I + m^2\big)\;}\tag{5}$$
by (4); the two factors of $p^+$ cancel. $H$ has no explicit $\tau$-dependence, so it is conserved.

Only two inputs went into (5): $p^-$ is the mass shell solved for the energy, and $H$ is $p^-$ times the gauge factor $p^+/m^2$. Rearranged, $2m^2H - p^Ip^I = m^2$ is just the on-shell statement that the invariant mass is $m$.

## Going quantum

Everything so far was classical — $p^\mu, x^\mu$ were numbers. Quantization keeps the relations and changes the type of object: the reduced variables $(x^I, x_0^-, p^I, p^+)$ become operators, with brackets promoted to commutators via $[A,B]=i\{A,B\}$ (the postulates live in [[Canonical commutators]]). The Hamiltonian function (5) becomes the Hamiltonian operator
$$ H=\frac{1}{2m^2}\big(p^Ip^I+m^2\big). $$
There is **no ordering ambiguity**: the $p^I$ commute with each other and with the number $m^2$. This is the gentle version of light-cone quantization — solve the constraint, then reuse the reduced Hamiltonian. For the string, this $m^2$ becomes an infinite oscillator sum, where ordering stops being bookkeeping and becomes real mathematics (the $a=-1$, $D=26$ story of Module 14).

## Check: does $H$ generate the right motion?

Verify that the Heisenberg equation $i\,d\xi/d\tau=[\xi,H]$ — with an extra $i\,\partial_\tau\xi$ term for operators carrying explicit $\tau$ (see [[Schrodinger and Heisenberg pictures]]) — reproduces the classical equations of motion, using [[Canonical commutators]]:

- **$p^+, p^I$:** $[p^+,H]=[p^I,H]=0$, since $H$ depends only on the mutually commuting $p^I$. Constants of motion, as classically. $\checkmark$
- **$x^I$:** with $[x^I,p^Jp^J]=2i\,p^I$,
$$ i\,\dot x^I = \Big[x^I,\tfrac{1}{2m^2}(p^Jp^J+m^2)\Big] = \frac{i\,p^I}{m^2}\;\Rightarrow\; x^I(\tau)=x_0^I+\frac{p^I}{m^2}\tau, $$
the classical straight-line drift. $\checkmark$
- **$x_0^-$:** commutes with every $p^I$, so $\dot x_0^-=0$ — a constant, as it must be. $\checkmark$
- **$x^\pm(\tau)$:** carry explicit $\tau$, so the $\partial_\tau$ term acts; the commutator parts vanish and the explicit derivatives give $\dot x^\pm = p^\pm/m^2$. $\checkmark$

Every classical equation returns, so (5) is the correct Hamiltonian, not merely a plausible one. This check is the rehearsal for the identically structured but far longer string version.

## The state space and the scalar field

Take $(p^+, p^I)$ as a maximal commuting set (momentum space, with $p^+>0$ so $1/p^+$ is defined). States $|p^+,\vec p_T\rangle$ are momentum eigenstates, and $H$ acts as a number:
$$ H\,|p^+,\vec p_T\rangle = \frac{1}{2m^2}\big(p^Ip^I+m^2\big)\,|p^+,\vec p_T\rangle. $$
A superposition $|\Psi,\tau\rangle=\int dp^+d\vec p_T\,\psi(\tau,p^+,\vec p_T)\,|p^+,\vec p_T\rangle$ obeys $i\,\partial_\tau|\Psi,\tau\rangle=H|\Psi,\tau\rangle$, i.e.
$$ i\,\frac{\partial}{\partial\tau}\,\psi(\tau,p^+,\vec p_T) = \frac{1}{2m^2}\big(p^Ip^I+m^2\big)\,\psi(\tau,p^+,\vec p_T). \tag{6}$$

Equation (6) is the classical field equation of a free scalar field in light-cone gauge — not an analogy, an identity. A scalar mode of momentum $(p^+,\vec p_T)$ has its light-cone energy fixed by the same mass shell, $p^-=\frac{1}{2p^+}(p^Ip^I+m^2)$, and evolves in $\tau$ with phase $\exp[-i(p^+/m^2)\,p^-\tau]$, so its mode coefficient obeys $i\partial_\tau\phi=\frac{p^+}{m^2}p^-\phi=\frac{1}{2m^2}(p^Ip^I+m^2)\phi$ — exactly (6). Wavefunction and field mode carry the same on-shell labels and the same light-cone time dependence.

So the quantum mechanics of one relativistic particle is the one-particle sector of a free scalar field: $|p^+,\vec p_T\rangle \leftrightarrow a^\dagger_{p^+,\vec p_T}|\Omega\rangle$ (see [[One-particle states]]). First-quantizing the particle gives one-particle states; reinterpreting its Schrödinger equation (6) as a classical field equation and quantizing *again* — second quantization — builds the full multiparticle Fock space. Strings are quantized the same way, which is why a single string theory describes many particle species at once.

## Open questions

- For the open string, the same construction gives $\alpha' M^2 = N^\perp + a$, with Lorentz invariance forcing $a=-1$ in $D=26$ — so the ground state has $\alpha'M^2=-1$ (a tachyon). This note rehearses only the point-particle mechanism; the oscillator normal-ordering argument that produces $a$ lives in Module 14.
- The $p^+=0$ sector lies outside this light-cone coordinate patch (division by $p^+$ fails). Covariant quantization is the later framework that can treat such boundary cases.

## Exercise

The gauge factor in (5) is not decorative — it is forced by consistency, and dropping it is the classic light-cone mistake. Suppose a careless student, seeing that $p^-$ is "the energy," declares $H_{\text{wrong}} = p^-$ instead of $\frac{p^+}{m^2}p^-$.

Compute the $\dot x^I$ that $H_{\text{wrong}}$ predicts via $i\dot x^I=[x^I,H_{\text{wrong}}]$, and compare with the correct classical drift $\dot x^I = p^I/m^2$ found above. What extra factor appears, and which equation — the gauge condition (3) or the mass shell (2) — fixes it?

> [!success]- Solution
> Write $H_{\text{wrong}} = p^- = \frac{1}{2p^+}(p^Jp^J+m^2)$. Since $[x^I,p^+]=0$, the factor $1/(2p^+)$ passes through the commutator, and the same computation as in the check above gives
> $$ i\,\dot x^I = [x^I, H_{\text{wrong}}] = \frac{1}{2p^+}\,[x^I, p^Jp^J] = \frac{1}{2p^+}\,(2i\,p^I) = \frac{i\,p^I}{p^+}, $$
> so $H_{\text{wrong}}$ predicts $\dot x^I = p^I/p^+$.
>
> The correct answer is $\dot x^I = p^I/m^2$. The two differ by exactly the factor
> $$ \frac{\dot x^I_{\text{correct}}}{\dot x^I_{\text{wrong}}} = \frac{p^+}{m^2}, $$
> which is precisely the gauge factor multiplying $p^-$ in (5). The reason: $H_{\text{wrong}}=p^-$ generates evolution in $x^+$, whereas we parameterize by $\tau$, and the two clocks are related by the **gauge condition** (3), $x^+ = (p^+/m^2)\tau$, i.e. $\partial_\tau = (p^+/m^2)\partial_{x^+}$. Multiplying $p^-$ by $p^+/m^2$ converts "rate per unit $x^+$" into "rate per unit $\tau$," restoring $\dot x^I = p^I/m^2$. (The mass shell (2) is what makes $p^-$ a function of the transverse momenta in the first place, but it is the gauge condition, not the mass shell, that fixes the overall factor.)
