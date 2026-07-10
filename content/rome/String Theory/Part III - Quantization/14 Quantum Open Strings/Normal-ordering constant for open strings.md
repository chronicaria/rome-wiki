---
title: Normal-ordering constant for open strings
number: "14.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, normal-ordering]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The normal-ordering constant $a$ is the vacuum (Casimir) energy of the string's transverse oscillators. A cutoff turns the divergent sum $\tfrac12(D-2)\sum_{n\ge1}n$ into a finite $-(D-2)/24$; Lorentz invariance later pins $D=26$, so $a=-1$.

## A Casimir energy, not a fudge factor

A quantum string is an infinite bag of harmonic oscillators — one for every mode number $n$ in every transverse direction $I$ (see [[Oscillator commutation relations]]). Every harmonic oscillator has a **zero-point energy**: even in its ground state it jitters, with energy $\tfrac12\omega$ for a mode of frequency $\omega$ (natural units, $\hbar=c=1$, throughout). Add up the zero-point energies of all the string's oscillators and you get the string's vacuum energy. That vacuum energy is the constant $a$.

The catch: summing $\tfrac12\omega$ over infinitely many oscillators of ever-higher frequency naively gives $+\infty$. This is not a string-theory disease — it is the **Casimir effect**, the same divergent zero-point sum that, handled honestly, produces a real, measurable force between two metal plates in the vacuum. The lesson transfers intact: the infinite part is unphysical bookkeeping to subtract, and a finite leftover survives that genuinely shifts the energy. For the string that leftover is negative, and it is what drags the first excited level down to zero mass and makes the photon of [[Critical dimension and the spectrum]]. So $a$ is not a fudge factor to be tuned; it is a Casimir energy to be computed.

## Where the constant sits in the formulas

The zero-mode Virasoro operator $L_0^\perp$ is *defined* as the finite, normal-ordered operator (derived in [[Transverse Virasoro operators]]):

$$L_0^\perp \equiv \alpha' p^I p^I + N^\perp,\qquad N^\perp=\sum_{n\ge1}\alpha_{-n}^I\alpha_n^I .$$

The classical expression $\tfrac12\sum_{p\in\mathbb Z}\alpha_{-p}^I\alpha_p^I$ is order-ambiguous once the $\alpha$'s become operators. Reordering it into the normal-ordered form above leaves behind a c-number — the zero-point sum — which we do not fold into $L_0^\perp$ but carry separately as $a$, inserted where the dependent light-cone momentum $p^-$ is defined:

$$2\alpha'p^- = \frac{1}{p^+}\big(L_0^\perp + a\big). \tag{1}$$

Because $a$ sits inside the light-cone Hamiltonian $p^-$, it shifts every state's energy by the same amount. Feeding (1) into $M^2=2p^+p^--p^Ip^I$ (mostly-plus signature; done in [[Mass formula and excitation level]]) gives the open-string mass formula

$$\alpha' M^2 = N^\perp + a,$$

so the entire mass tower rides rigidly on $a$. If we take the reordering literally, $a$ is the formal zero-point sum

$$a \overset{\text{formal}}{=} \tfrac12(D-2)\sum_{n=1}^{\infty} n, \tag{2}$$

since the mode-$n$ oscillator has frequency $n$ in worldsheet time and so contributes $\tfrac12 n$ — one such tower for each of the $D-2$ transverse directions. This sum diverges. The rest of the note asks what finite number, if any, it should stand for.

> [!warning] Sign convention
> Here $a$ is the additive constant inside the bracket of (1), giving $a=-1$; where the literature says "intercept", that is the positive number $-a=1$, and some texts flip the sign of $a$ outright. Same physics either way — the mass tower is shifted down by one unit. This vault uses the additive convention throughout.

## Regularizing the sum with a cutoff

Do not use "$\sum n = -1/12$" as arithmetic. Do what you would do for any physical vacuum energy: suppress the high-frequency modes with a cutoff, isolate the divergence, and keep the finite part. Introduce a soft exponential cutoff $e^{-\epsilon n}$ with $\epsilon>0$:

$$S(\epsilon) = \sum_{n=1}^{\infty} n\,e^{-\epsilon n}.$$

This converges. Because $n\,e^{-\epsilon n} = -\frac{d}{d\epsilon}e^{-\epsilon n}$, sum the geometric series first and then differentiate:

$$\sum_{n=1}^{\infty} e^{-\epsilon n} = \frac{1}{e^{\epsilon}-1}
\;\Longrightarrow\;
S(\epsilon) = -\frac{d}{d\epsilon}\,\frac{1}{e^{\epsilon}-1}.$$

Expanding the generating function about $\epsilon=0$,

$$\frac{1}{e^{\epsilon}-1} = \frac1\epsilon - \frac12 + \frac{\epsilon}{12} + O(\epsilon^3),$$

and differentiating term by term,

$$S(\epsilon) = \frac{1}{\epsilon^2} - \frac{1}{12} + O(\epsilon^2). \tag{3}$$

The $1/\epsilon^2$ term is a hard ultraviolet divergence: it blows up as the cutoff is removed and depends on the *details* of the cutoff, so it is not physics. It is a local vacuum-energy density (in the covariant picture, a worldsheet cosmological constant), and we renormalize it away, just as the Casimir calculation subtracts the plate-independent bulk vacuum energy. What is left is cutoff-independent and finite:

$$\boxed{\,S_{\text{ren}} = -\frac{1}{12}\,}$$

This is the honest content of "$\sum_{n\ge1} n = -1/12$": not a sum, but the finite Casimir remnant after a divergence is subtracted. The zeta-function slogan $\zeta(-1)=-1/12$ reaches the same number by a slicker (but less transparent) route.

Feed $S_{\text{ren}}$ back into the formal expression (2):

$$a_{\text{Casimir}} = \tfrac12(D-2)\,S_{\text{ren}} = -\frac{D-2}{24}. \tag{4}$$

The vacuum energy is *negative*, and it scales with the number of transverse directions. Regularization has tied $a$ to $D$ — but it has not yet told us what $D$ is.

## Why the cutoff isn't the last word

Equation (4) is a strong hint, not a proof. Two gaps remain:

- **The subtraction was a choice.** We threw away the $1/\epsilon^2$ term by hand. That is only legitimate if it truly is unphysical, which in turn needs the worldsheet theory to be Weyl invariant — a fact this cutoff argument assumes rather than establishes.
- **A regulator can hide an anomaly.** A finite answer that respects one symmetry can secretly violate another. The quantum string must still pass the Lorentz test.

The sharp determination comes from demanding that the light-cone boosts close, $[M^{-I},M^{-J}]=0$. Worked out in [[Light-cone Lorentz anomaly]], that single requirement produces two conditions:

$$1-\frac{D-2}{24}=0,\qquad \frac{D-2}{24}+a=0,$$

whose only solution is

$$\boxed{D=26,\qquad a=-1.}$$

The first equation fixes the dimension; the second fixes the shift — and it agrees with (4), since $-(26-2)/24 = -1$. The two arguments are complementary: the cutoff computation explains the *form* $-(D-2)/24$; Lorentz invariance explains why the only consistent value is the critical one.

## Open questions

- The $1/\epsilon^2$ subtraction is justified here as removing a local worldsheet vacuum energy. The deeper reason it is *forced* — Weyl invariance of the Polyakov action, i.e. the vanishing of the conformal anomaly — is a CFT story deferred to [[Virasoro algebra and central charge]] and [[Total central charge and D = 26]].
- The cutoff fixes the finite part but takes on faith that no anomaly lurks; the audit that closes that gap is the boost-commutator calculation in [[Light-cone Lorentz anomaly]].

## Exercise

A student claims the whole $-1/12$ is a swindle: "you only got a finite answer because you *chose* the cutoff $e^{-\epsilon n}$; a different cutoff would give a different constant." Test this. Redo the finite part using the smooth cutoff $f(n)=e^{-\epsilon^2 n^2}$ (a Gaussian instead of an exponential) — compute $\tilde S(\epsilon)=\sum_{n\ge1} n\,e^{-\epsilon^2 n^2}$ far enough to identify its divergent piece and its $\epsilon$-independent constant. Is the finite part still $-1/12$? What, in one sentence, is the student half-right about?

> [!success]- Solution
> Use the Euler–Maclaurin formula, which compares a sum to an integral and expresses the difference through derivatives at the endpoint. For a smooth $g$ decaying (with all its derivatives) at infinity,
> $$\sum_{n=1}^{\infty} g(n) = \int_{0}^{\infty} g(x)\,dx - \frac12 g(0) - \frac{1}{12}g'(0) + \cdots,$$
> where the omitted terms involve higher odd derivatives of $g$ at $0$. Here $g(x)=x\,e^{-\epsilon^2 x^2}$, so $g(0)=0$ and $g'(0)=1$ (since $g(x)=x+O(x^3)$ near $0$); the higher derivatives at $0$ are $O(\epsilon^2)$ and vanish with the cutoff. The integral is the divergent piece:
> $$\int_0^\infty x\,e^{-\epsilon^2 x^2}\,dx = \frac{1}{2\epsilon^2},$$
> which blows up as $\epsilon\to0$ — the cutoff-dependent ultraviolet term, the Gaussian analogue of the $1/\epsilon^2$ in (3). Subtract it. The $-\tfrac12 g(0)$ term vanishes, and the surviving constant is
> $$-\frac{1}{12}\,g'(0) = -\frac{1}{12}.$$
> So the finite Casimir part is **again $-1/12$**, even though the divergent piece ($\tfrac{1}{2\epsilon^2}$ vs. $\tfrac1{\epsilon^2}$) changed shape. The student is half-right that the *divergent* term is cutoff-dependent and meaningless — but the *finite* remnant, which is the physics, is universal. That universality is exactly why $\zeta(-1)=-1/12$ is a legitimate physical statement and not a trick.
