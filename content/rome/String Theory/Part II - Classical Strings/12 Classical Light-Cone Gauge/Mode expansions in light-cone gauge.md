---
title: "Mode expansions in light-cone gauge"
number: "12.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, mode-expansion]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

An open string vibrates as a superposition of standing-wave harmonics whose amplitudes are spacetime vectors. In light-cone gauge only the transverse amplitudes $\alpha_n^I$ are freely chosen — $X^+$ is the clock, every mode of $X^-$ is computed from the transverse ones — so the string's whole motion, and its mass, is built from transverse oscillators alone.

A mode expansion is nothing more than writing a vibrating object as a sum of standing waves. What makes the string interesting is that it lives in spacetime, so the amplitude of each harmonic is itself a spacetime vector $\alpha_n^\mu$. A gauge choice plus two constraints then strip the unphysical directions off those vectors, leaving only the transverse harmonics. Everything below is that stripping, done explicitly.

## Step 1 — The equation of motion is just the wave equation

In the gauge class of [[Fixing X-plus as worldsheet time]] the momentum densities collapse to $\mathcal P^{\tau\mu} = \frac{1}{2\pi\alpha'}\dot X^\mu$ and $\mathcal P^{\sigma\mu} = -\frac{1}{2\pi\alpha'}X^{\mu\prime}$ (natural units, $\hbar=c=1$). Feeding them into the field equation $\partial_\tau\mathcal P^{\tau\mu} + \partial_\sigma\mathcal P^{\sigma\mu} = 0$ leaves

$$ \ddot X^\mu - X^{\mu\prime\prime} = 0. $$

> This is the reward for the gauge work. The raw Nambu–Goto equations are nonlinear (a square root of derivatives sits in the action); the constraints $(\dot X\pm X')^2=0$ are exactly what flattens them into free waves — a guitar string, one per spacetime direction $\mu$.

The general solution is any left-mover plus any right-mover, $X^\mu = \tfrac12\big(f^\mu(\tau+\sigma) + g^\mu(\tau-\sigma)\big)$.

## Step 2 — Free ends pick out cosines

A space-filling D-brane leaves every endpoint free, so $\mathcal P^{\sigma\mu}=0$ at $\sigma=0,\pi$, i.e. **Neumann conditions** $\partial_\sigma X^\mu=0$ there — see [[Neumann versus Dirichlet conditions|Neumann boundary conditions]].

- At $\sigma=0$: $f^{\mu\prime}=g^{\mu\prime}$, so left- and right-movers are the *same* function, $X^\mu = \tfrac12\big(f^\mu(\tau+\sigma)+f^\mu(\tau-\sigma)\big)$.
- At $\sigma=\pi$: $f^{\mu\prime}$ must be **periodic with period $2\pi$**. This is the payoff of choosing $\sigma\in[0,\pi]$ — the natural period drops out for free.

A periodic $f^{\mu\prime}$ is a Fourier series; integrating and collecting constants gives the conventional open-string expansion,

$$ X^\mu(\tau,\sigma) = x_0^\mu + 2\alpha' p^\mu\,\tau - i\sqrt{2\alpha'}\sum_{n\geq1}\frac{1}{\sqrt n}\big(a_n^{\mu*}e^{in\tau} - a_n^\mu e^{-in\tau}\big)\cos n\sigma. \tag{1} $$

> Term by term: $x_0^\mu$ is where the string sits; $2\alpha' p^\mu\tau$ is its uniform drift (the coefficient is fixed by $p^\mu=\int_0^\pi\mathcal P^{\tau\mu}\,d\sigma$); the sum is the ringing, with $\cos n\sigma$ enforcing the free-end standing-wave shape — antinodes at both ends. Kill every $a_n^\mu$ and the string shrinks to a point particle coasting along.

## Step 3 — The $\alpha$-oscillator notation

Two changes of variable turn (1) into the standard oscillator form: absorb $\sqrt n$ into the oscillator, and promote the momentum to an $n=0$ "oscillator":

$$ \alpha_0^\mu \equiv \sqrt{2\alpha'}\,p^\mu, \qquad \alpha_n^\mu \equiv \sqrt n\,a_n^\mu,\quad \alpha_{-n}^\mu \equiv \sqrt n\,a_n^{\mu*}\;\;(n\geq1), $$

so reality of $X^\mu$ becomes the single condition $\alpha_{-n}^\mu=(\alpha_n^\mu)^*$. The expansion and its two most useful derivatives are then

$$ X^\mu(\tau,\sigma) = x_0^\mu + \sqrt{2\alpha'}\,\alpha_0^\mu\,\tau + i\sqrt{2\alpha'}\sum_{n\neq0}\frac{1}{n}\,\alpha_n^\mu\,e^{-in\tau}\cos n\sigma, \tag{2} $$

$$ \boxed{\;\dot X^\mu \pm X^{\mu\prime} = \sqrt{2\alpha'}\sum_{n\in\mathbb Z}\alpha_n^\mu\,e^{-in(\tau\pm\sigma)}\;}. \tag{3} $$

> Equation (3) is the workhorse. The constraint we must impose is built from precisely $\dot X^\mu\pm X^{\mu\prime}$, and written as a single exponential sum it is diagonal in the mode label — so imposing the constraint will reduce to matching Fourier coefficients, one $n$ at a time.

Everything so far holds for every $\mu$, in any gauge of this class. The light-cone choice now decides which of these modes are physically free.

## Step 4 — Impose light-cone gauge

From [[Fixing X-plus as worldsheet time]], the $+$ direction is frozen into a clock — no position zero mode, no oscillators:

$$ X^+ = \sqrt{2\alpha'}\,\alpha_0^+\tau = 2\alpha' p^+\tau, \qquad x_0^+ = 0,\quad \alpha_n^+ = 0\ (n\neq0). $$

The transverse directions $X^I$ ($I=2,\dots,D-1$, so $D-2$ of them) are the free physical fields — just (2) with $\mu\to I$:

$$ \boxed{\;X^I(\tau,\sigma) = x_0^I + \sqrt{2\alpha'}\,\alpha_0^I\,\tau + i\sqrt{2\alpha'}\sum_{n\neq0}\frac{1}{n}\,\alpha_n^I\,e^{-in\tau}\cos n\sigma,\qquad \alpha_0^I = \sqrt{2\alpha'}\,p^I\;}. \tag{4} $$

This is the open-string light-cone solution for the physical degrees of freedom. The only free data at this point are the transverse constants $x_0^I,p^I,\alpha_n^I$ plus the two longitudinal numbers $p^+$ and $x_0^-$. The last step *computes* the remaining longitudinal motion — it adds no new freedom.

## Step 5 — The constraint fixes the $X^-$ modes

$X^-$ obeys the same wave equation and Neumann conditions, so it has the same expansion (2) with $\mu\to-$. To pin its modes, impose the solved constraint from [[Light-cone constraints]],

$$ \dot X^- \pm X^{-\prime} = \frac{1}{4\alpha' p^+}\big(\dot X^I \pm X^{I\prime}\big)^2, $$

and expand both sides using (3):

$$ \sqrt{2\alpha'}\sum_{n\in\mathbb Z}\alpha_n^- e^{-in(\tau\pm\sigma)} = \frac{1}{4\alpha' p^+}\cdot 2\alpha'\sum_{p,q}\alpha_p^I\alpha_q^I\,e^{-i(p+q)(\tau\pm\sigma)} = \frac{1}{2p^+}\sum_{p,q}\alpha_p^I\alpha_q^I\,e^{-i(p+q)(\tau\pm\sigma)}. $$

> Squaring (3) produces a factor $2\alpha'$, which cancels half of the $4\alpha' p^+$ in the denominator, leaving exactly $1/(2p^+)$. Track the $\alpha'$ carefully here: the leftover $1/(2p^+)$ is what turns into the transverse Virasoro mode below.

Relabel $q=n-p$ and match the coefficient of each $e^{-in(\tau\pm\sigma)}$:

$$ \boxed{\;\sqrt{2\alpha'}\,\alpha_n^- = \frac{1}{2p^+}\sum_{p\in\mathbb Z}\alpha_{n-p}^I\alpha_p^I = \frac{1}{p^+}\,L_n^\perp\;}, \qquad L_n^\perp \equiv \frac12\sum_{p\in\mathbb Z}\alpha_{n-p}^I\alpha_p^I. \tag{5} $$

> Every $X^-$ oscillator is a **quadratic in the transverse oscillators** — the *transverse Virasoro mode* $L_n^\perp$. The spacetime index on the right runs over transverse labels only: that is what "$X^-$ is a function of the physical data" means concretely (see [[Transverse coordinates as physical degrees of freedom]]). Only $x_0^-$ stays free.

Substituting (5) into the $X^-$ expansion gives $X^-$ explicitly in terms of the physical modes:

$$
\boxed{\;
X^-(\tau,\sigma)
=x_0^-+\frac{1}{p^+}L_0^\perp\,\tau
+\frac{i}{p^+}\sum_{n\neq0}\frac{1}{n}L_n^\perp e^{-in\tau}\cos n\sigma
\;}. \tag{6}
$$

> Choose the transverse oscillators, form the quadratics $L_n^\perp$, and $X^-$ is written out — every non-constant piece is fixed, with $x_0^-$ the single leftover integration constant.

So the complete open-string solution is an algorithm, not a search:

1. Pick $p^+>0$, $x_0^-$, and transverse data $x_0^I,p^I,\alpha_n^I$.
2. Set $X^+=2\alpha'p^+\tau$; build $X^I$ from (4).
3. Form the $L_n^\perp$ and drop them into (6) for $X^-$.

No longitudinal oscillator is ever chosen independently — that is the whole content of "the transverse modes are the physical degrees of freedom."

## Step 6 — The mass is pure transverse energy

The $n=0$ case of (5), using $\alpha_0^\mu=\sqrt{2\alpha'}p^\mu$, is the mass-shell relation:

$$ 2p^+p^- = \frac{1}{\alpha'}L_0^\perp. $$

Expand $L_0^\perp$, splitting the zero mode from the rest:

$$ L_0^\perp = \tfrac12\sum_p \alpha_{-p}^I\alpha_p^I = \underbrace{\tfrac12\alpha_0^I\alpha_0^I}_{=\,\alpha' p^Ip^I} + \sum_{n\geq1}\underbrace{\alpha_{-n}^I\alpha_n^I}_{=\,n\,a_n^{I*}a_n^I} = \alpha' p^Ip^I + \sum_{n\geq1} n\,a_n^{I*}a_n^I. $$

Feed this into $M^2 = -p^2 = 2p^+p^- - p^Ip^I$ (mostly-plus signature); the $p^Ip^I$ terms cancel:

$$ \boxed{\;M^2 = \frac{1}{\alpha'}\sum_{n\geq1} n\,a_n^{I*}\,a_n^I\;}. \tag{7} $$

> A string's mass is the energy stored in its transverse vibrations — nothing else. Each term is $n\,|a_n^I|^2\geq0$, so $M^2\geq0$: **the classical string is never a tachyon**, and a non-vibrating string ($a_n^I=0$) is a massless point. See [[Mass-shell relation]].

> [!warning] This is the *classical* mass, and it does not survive quantization.
> Promoting $a_n^{I*}a_n^I$ to operators forces an ordering choice; the regularized sum $\sum_{n\geq1} n = \zeta(-1) = -\tfrac{1}{12}$ (obtained with a cutoff, *never* from the naive divergent sum) contributes the additive constant $a=-\tfrac{D-2}{24}$ to $\alpha'M^2$. Requiring Lorentz invariance to survive forces $D=26$, hence $a=-1$, which pushes the ground state to $M^2=-1/\alpha'<0$ — a genuine tachyon — and discretizes the spectrum. Derived in Part III.

## Static gauge vs light-cone gauge

Both gauges freeze one coordinate (the static-gauge column keeps $c$, as Module 11 did). The difference is whether the leftover constraints can be *solved* or only *imposed*.

| | **Static gauge** | **Light-cone gauge** |
|---|---|---|
| Frozen coordinate | $X^0 = c\tau$ (timelike $n$) | $X^+ = 2\alpha'p^+\tau$ (**null** $n$) |
| Constraints | $\dot{\vec X}\cdot\vec X'=0$, $\ \vec X'^2+\dot{\vec X}^2/c^2=1$ | $(\dot X\pm X')^2=0$ |
| Can you *solve* them? | **No** — only impose | **Yes** — solve for $\dot X^-\pm X^{-\prime}$ |
| Physical fields | $D-1$ spatial $X^i$, still entangled | $D-2$ transverse $X^I$, free |
| $X^-$ analogue | no clean separation | determined: $\alpha_n^-\propto L_n^\perp$ |
| Manifest symmetry | spatial rotations; boosts need reparameterizations | transverse rotations; boosts hidden |
| Best for | visualizing string shapes | counting dof, solving, quantizing |

> In static gauge the constraints are nonlinear relations tangling all $D-1$ spatial fields — no single variable is isolated. In light-cone gauge the cross term $-2\dot X^+\dot X^- = -2(2\alpha'p^+)\dot X^-$ is **linear** in $\dot X^-$, so you divide it out. The null direction is exactly what turns a quadratic-looking constraint into a linear reconstruction. The price: the gauge singles out $x^1$, so Lorentz invariance is real but no longer manifest.

## Open questions

- The closed string is not done here: it uses $\beta=1$, $\sigma\in[0,2\pi]$, **independent** left- and right-moving oscillators, and a global level-matching condition. Deferred to the closed-string modules.
- The critical dimension $D=26$ and the constant $a=-1$ are asserted above, not derived. The derivation — demanding the hidden Lorentz generators close under quantization — belongs to the light-cone quantization notes in Part III.

## Exercise

The mass formula (7) fixes $M^2$ but says nothing about **spin**. Take the first excited open string: excite only the lowest mode, in a single transverse direction, so $a_1^2\neq0$ and every other $a_n^I=0$.

**(a)** Compute $\alpha'M^2$ for this configuration. **(b)** How does it transform under rotations of the transverse space — as a scalar or as a vector? **(c)** Use this to argue that the massless first-excited level — the same $a_1^I$ excitation, which the quantum shift $a=-1$ pushes to $\alpha'M^2=0$ — has a state count running over the $D-2$ transverse directions, and say what familiar particle that suggests.

> [!success]- Solution
> **(a)** From (7), $M^2=\frac{1}{\alpha'}\sum_{n\geq1} n\,a_n^{I*}a_n^I$. Only $n=1$, $I=2$ survives, so
> $$\alpha' M^2 = 1\cdot a_1^{2*}a_1^2 = |a_1^2|^2 > 0.$$
> Classically this is a continuous positive number set by the amplitude $|a_1^2|$ — the string is genuinely vibrating in the $x^2$ direction. (Quantum mechanically the shift $a=-1$ moves the first excited level to $\alpha'M^2 = 1 + a = 0$: it becomes massless. But that is Part III; here $M^2$ is whatever the classical amplitude makes it.)
>
> **(b)** The excitation carries the transverse index $I=2$: it points along a specific direction in the $(D-2)$-dimensional transverse space. So it is **not a scalar** — it transforms as a *vector* under $SO(D-2)$ rotations of the transverse space. Exciting $a_1^3$ instead would give a rotated partner; the set $\{a_1^I\}$, $I=2,\dots,D-1$, rotates into itself.
>
> **(c)** The distinct single-oscillator excitations $a_1^I$ come in exactly $D-2$ flavors, one per transverse direction, forming a vector of $SO(D-2)$. A massless vector particle is precisely a **photon** (a massless spin-1 gauge boson has $D-2$ physical polarizations). So the open string's lowest nontrivial excitation is a candidate photon — the transverse count $D-2$ is what makes the polarization bookkeeping come out right. This is why the "physical = transverse" logic of light-cone gauge is not just tidy but predictive: it hands you the right number of photon polarizations automatically.
