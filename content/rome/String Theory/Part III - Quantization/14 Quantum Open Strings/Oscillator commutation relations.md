---
title: Oscillator commutation relations
number: "14.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, oscillators]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The vibration modes of an open string obey $[\alpha_m^I,\alpha_n^J]=m\,\delta^{IJ}\delta_{m+n,0}$; a $\sqrt n$ rescaling turns them into an infinite collection of independent harmonic-oscillator ladder operators $[a_m^I,a_n^{J\dagger}]=\delta_{mn}\delta^{IJ}$.

## From standing waves to oscillators

Pluck a guitar string and it rings in a superposition of standing waves — a fundamental, an octave, and so on. A relativistic string is the same, except each standing wave, once quantized, becomes a **quantum harmonic oscillator**: it holds $0,1,2,\dots$ quanta of vibration, nothing in between. A single quantum string is therefore not one oscillator but a whole warehouse of them — one for every mode number $n$ and every transverse direction $I$ the string can wiggle in, all independent. Establishing that, and fixing the normalization, is the work of this note.

The quanta are what become **particles**. Adding one quantum to the $n$-th oscillator raises the string's energy by a fixed amount, and a state with a definite set of quanta is a definite particle. The oscillator algebra derived here is the machinery that later manufactures the tachyon, the photon, and the whole mass tower ([[Open-string Fock space]], [[Mass formula and excitation level]]).

## The canonical field commutator

Quantizing the point particle means $[\hat x,\hat p]=i$ (units $\hbar=c=1$ throughout). Quantizing a *field* means the same thing at every point of space at once. Here the "space" is the string itself, parametrized by $\sigma\in[0,\pi]$, and the field is the set of **transverse** coordinates $X^I(\tau,\sigma)$, $I=2,\dots,D-1$ — the only independent directions left after light-cone gauge eliminates $X^+$ and $X^-$ (see [[Fixing X-plus as worldsheet time]]). With conjugate momentum density $\mathcal P^{\tau I}=\dot X^I/(2\pi\alpha')$, the equal-time postulate is

$$[\,X^I(\tau,\sigma),\,\mathcal P^{\tau J}(\tau,\sigma')\,]=i\,\delta^{IJ}\,\delta(\sigma-\sigma'),\tag{1}$$

all other equal-time commutators zero. The Kronecker delta of ordinary QM has become a Dirac $\delta(\sigma-\sigma')$: there is one independent degree of freedom at *each point* along the string, and separated points do not disturb one another. The index factor is $\delta^{IJ}$: covariantly this slot holds the metric $\eta^{\mu\nu}$, but the transverse directions are purely spacelike, so its restriction to them is the identity — no minus signs, and (as we will see) no negative-norm states. The center of mass carries its own conjugate pair, $[x_0^I,p^J]=i\,\delta^{IJ}$, recovered at the end.

## The mode expansion we are quantizing

Read as an operator equation, the Neumann mode expansion is

$$X^I(\tau,\sigma)=x_0^I+\sqrt{2\alpha'}\,\alpha_0^I\,\tau+i\sqrt{2\alpha'}\sum_{n\neq0}\frac1n\,\alpha_n^I\cos(n\sigma)\,e^{-in\tau},\qquad \alpha_0^I=\sqrt{2\alpha'}\,p^I.\tag{2}$$

Term by term: $x_0^I$ is the center-of-mass position; the $\tau$-linear term carries the momentum ($\alpha_0^I\propto p^I$); each $\alpha_n^I$ is the amplitude of the $n$-th standing wave. The $\cos(n\sigma)$ (not sine) is what enforces the open-string Neumann condition $\partial_\sigma X^I=0$ at the free ends $\sigma=0,\pi$. Classical reality of $X^I$ becomes Hermiticity $(\alpha_n^I)^\dagger=\alpha_{-n}^I$; the explicit factor of $i$ out front is exactly what makes this consistent.

## Deriving the mode algebra

The trick is to package the modes into the combinations $\dot X^I\pm X'^I$, which depend on $\tau$ and $\sigma$ only through $\tau\pm\sigma$ and carry **no** $1/n$ and **no** cosine:

$$\dot X^I\pm X'^I=\sqrt{2\alpha'}\sum_{n\in\mathbb Z}\alpha_n^I\,e^{-in(\tau\pm\sigma)}.\tag{3}$$

This follows from (2) term by term: the $\tau$-derivative cancels the $1/n$, the $\sigma$-derivative turns the cosine into a sine, and $\cos(n\sigma)\mp i\sin(n\sigma)=e^{\mp in\sigma}$ reassembles a single exponential. These are the natural variables because their commutator is clean. Rewriting (1) with $\mathcal P^{\tau I}=\dot X^I/(2\pi\alpha')$ gives $[X^I,\dot X^J]=2\pi\alpha'\,i\,\delta^{IJ}\delta(\sigma-\sigma')$; differentiating with respect to $\sigma$ and $\sigma'$ and using $[X^I,X^J]=[\dot X^I,\dot X^J]=[X'^I,X'^J]=0$ at equal time, the two surviving cross terms add (because $\partial_{\sigma'}\delta(\sigma'-\sigma)=-\partial_\sigma\delta(\sigma-\sigma')$) to

$$\big[(\dot X^I\pm X'^I)(\tau,\sigma),\,(\dot X^J\pm X'^J)(\tau,\sigma')\big]=\pm 4\pi\alpha'\,i\,\delta^{IJ}\,\frac{d}{d\sigma}\delta(\sigma-\sigma').\tag{4}$$

The right-hand side carries a *derivative* of the delta function, not a bare delta. This is the structural fact to carry away: the derivative is what becomes the mode-number factor $m$ in the algebra below. A bare delta would have produced a plain Kronecker delta — the commutators of finitely many ordinary coordinates — with no weighting by mode number and no infinite tower.

Now extract a single $[\alpha_m^I,\alpha_n^J]$. The sum (3) defines $\dot X^I+X'^I$ for all $\sigma$ with period $2\pi$, and for $\sigma\in[-\pi,0]$ it reproduces $(\dot X^I-X'^I)(\tau,-\sigma)$ — the standard doubling of the open string. The "$+$" case of (4) then holds on all of $[-\pi,\pi]$: the one new case is the mixed commutator of $\dot X+X'$ with $\dot X-X'$, whose cross terms cancel rather than add — as they must, since $\frac{d}{d\sigma}\delta(\sigma-\sigma')$ has no support when the two arguments sit in opposite halves of the interval. So hit both sides with the Fourier projectors $\frac{1}{2\pi}\int_{-\pi}^{\pi}d\sigma\,e^{im\sigma}$ and $\frac{1}{2\pi}\int_{-\pi}^{\pi}d\sigma'\,e^{in\sigma'}$. On the left, orthogonality collapses the double sum to a single bracket; on the right, the $\sigma'$-integral turns $e^{in\sigma'}$ into $e^{in\sigma}$, the $\sigma$-derivative brings down $in$, and the $\sigma$-integral gives $2\pi\delta_{m+n,0}$:

$$2\alpha'\,[\alpha_m^I,\alpha_n^J]\,e^{-i(m+n)\tau}=\frac{4\pi\alpha'\,i\,\delta^{IJ}}{(2\pi)^2}\int d\sigma\,d\sigma'\,e^{im\sigma}e^{in\sigma'}\,\frac{d}{d\sigma}\delta(\sigma-\sigma')=2\alpha'\,i\,(in)\,\delta^{IJ}\,\delta_{m+n,0}.$$

On the support of the Kronecker delta $m+n=0$, so the leftover phase $e^{-i(m+n)\tau}$ is $1$ and $i\,(in)=-n=m$. Cancel the common $2\alpha'$:

$$\boxed{\;[\alpha_m^I,\alpha_n^J]=m\,\delta^{IJ}\,\delta_{m+n,0}\;}\tag{5}$$

Three features to read off:
- **Nonzero only when $m+n=0$:** a mode and its *opposite* fail to commute; the bracket conserves total mode number.
- **The factor $m$, not $1$:** these are not yet canonically normalized — the next section fixes that.
- **$\delta^{IJ}$, hence a plus sign:** only spacelike directions appear, and this positivity is the whole payoff of light-cone gauge — it guarantees positive-norm states. A covariant treatment keeps the timelike $\alpha_n^0$, whose $\eta^{00}=-1$ (mostly-plus signature) produces negative-norm *ghosts*; light-cone gauge has already thrown those away.

Setting $m=0$ shows $\alpha_0^I\propto p^I$ commutes with every oscillator — right, since momentum should. Its nontrivial partner is $x_0^I$: since $p^J=\int_0^\pi d\sigma'\,\mathcal P^{\tau J}$, integrating (1) over $\sigma'$ gives $[X^I(\tau,\sigma),p^J]=i\,\delta^{IJ}$, and every term of (2) except $x_0^I$ commutes with $p^J$, leaving $[x_0^I,p^J]=i\,\delta^{IJ}$. The center of mass is just a free quantum particle riding along.

## Rescaling to canonical ladder operators

The factor $m$ in (5) is ugly. Absorb it. For $n\ge1$ define

$$\alpha_n^I=\sqrt n\,a_n^I,\qquad \alpha_{-n}^I=\sqrt n\,a_n^{I\dagger}.$$

Hermiticity $(\alpha_n^I)^\dagger=\alpha_{-n}^I$ makes $a_n^I$ and $a_n^{I\dagger}$ genuine adjoints. For two positive modes, (5) becomes

$$[\sqrt m\,a_m^I,\sqrt n\,a_n^{J\dagger}]=m\,\delta_{mn}\,\delta^{IJ}\;\Longrightarrow\;[a_m^I,a_n^{J\dagger}]=\frac{m}{\sqrt{mn}}\,\delta_{mn}\,\delta^{IJ},$$

and since the delta forces $m=n$ the prefactor is exactly $1$:

$$\boxed{\;[a_m^I,a_n^{J\dagger}]=\delta_{mn}\,\delta^{IJ},\qquad [a_m^I,a_n^J]=[a_m^{I\dagger},a_n^{J\dagger}]=0\;}$$

For *each* mode number $n\ge1$ and *each* transverse direction $I$ this is one independent copy of the textbook algebra $[a,a^\dagger]=1$: a quantized open string is a countably infinite collection of decoupled harmonic oscillators. (The closed string carries a *second*, independent tower for its left-movers; the open string's Neumann ends tie left- and right-movers together, so it has only this one.)

## Which raise, which lower

By convention the ground state is annihilated by every $a_n^I=\alpha_n^I/\sqrt n$, $n\ge1$ — this is what *defines* the vacuum (see [[Open-string Fock space]]). Therefore

$$\alpha_n^I\ (n\ge1)\ \text{annihilate},\qquad \alpha_{-n}^I\ (n\ge1)\ \text{create}.$$

Mnemonic: **positive mode number lowers, negative mode number raises.**

## Open questions

- Strictly, light-cone quantization should quantize only the physical degrees of freedom, and the transverse commutators are not automatically inherited from a covariant field postulate. Here the algebra follows from the canonical postulate (1) — quick and correct, but not the last word. The honest, fully constrained-phase-space justification (checking that no correction sneaks in when the dependent modes $\alpha_n^-$ are rebuilt from $\alpha_n^I$) belongs with a later treatment of gauge fixing.

## Exercise

The $\sqrt n$ in $\alpha_n^I=\sqrt n\,a_n^I$ looks like a free choice. Show it is forced: suppose instead $\alpha_n^I=c_n\,a_n^I$ and $\alpha_{-n}^I=c_n\,a_n^{I\dagger}$ for some constants $c_n$ ($n\ge1$), and *demand* the canonical result $[a_m^I,a_n^{J\dagger}]=\delta_{mn}\delta^{IJ}$. What must $c_n$ be? Along the way, say what Hermiticity $(\alpha_n^I)^\dagger=\alpha_{-n}^I$ by itself demands of $c_n$, and why the leftover sign ambiguity in $c_n$ is physically harmless.

> [!success]- Solution
> Insert the ansatz into the mode algebra (5) for two positive modes $m,n\ge1$. Since $\alpha_{-n}^J=c_n a_n^{J\dagger}$,
> $$[\alpha_m^I,\alpha_{-n}^J]=[c_m a_m^I,\,c_n a_n^{J\dagger}]=c_m c_n\,[a_m^I,a_n^{J\dagger}],$$
> while (5) evaluated at indices $(m,-n)$, with $m+(-n)=0$ selecting $m=n$, reads
> $$[\alpha_m^I,\alpha_{-n}^J]=m\,\delta^{IJ}\,\delta_{m-n,0}=m\,\delta^{IJ}\,\delta_{mn}.$$
> Demanding $[a_m^I,a_n^{J\dagger}]=\delta_{mn}\delta^{IJ}$ forces $c_m c_n\,\delta_{mn}=m\,\delta_{mn}$; on the diagonal $m=n$ this is
> $$c_n^2=n,$$
> so $c_n=\sqrt n$ up to a sign, settled below.
>
> Hermiticity by itself demands that $c_n$ be *real*: taking $\dagger$ of $\alpha_n^I=c_n a_n^I$ gives $\alpha_{-n}^I=c_n^*\,a_n^{I\dagger}$, and comparing with the ansatz $\alpha_{-n}^I=c_n a_n^{I\dagger}$ forces $c_n^*=c_n$ — the same constant can serve in both definitions only if it is real. The algebra then fixes only $c_n^2=n$, leaving the sign $c_n=\pm\sqrt n$ free. Both signs are equally good: either gives $[a_m^I,a_n^{J\dagger}]=\frac{n}{c_n^2}\,\delta_{mn}\delta^{IJ}=+\delta_{mn}\delta^{IJ}$, and $a_n^I=\alpha_n^I/c_n\propto\alpha_n^I$ still annihilates the vacuum, so norms and the raising/lowering roles are untouched. The sign is an overall phase of the ladder operators, physically invisible; the convention $c_n>0$ picks $c_n=+\sqrt n$.
