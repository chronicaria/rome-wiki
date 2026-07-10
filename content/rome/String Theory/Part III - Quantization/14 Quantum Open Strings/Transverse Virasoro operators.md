---
title: Transverse Virasoro operators
number: "14.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, virasoro]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The operators $L_n^\perp=\tfrac12\sum_p\alpha_{n-p}^I\alpha_p^I$ are the quantized constraints of the string. Only $L_0^\perp$ carries an ordering ambiguity, and closing their algebra leaves a purely quantum remainder — the central term $\frac{D-2}{12}(m^3-m)$ — whose refusal to vanish is what will pin the spacetime dimension to $D=26$.

## What quantization does to the constraints

Classically the string is not free: the constraints $(\dot X\pm X')^2=0$ say its motion is entirely transverse, with no independent wiggle along its own length. The $L_n^\perp$ are the Fourier modes of exactly that constraint combination, so $L_n^\perp$ measures the amount of $n$-th-harmonic constraint the string is carrying. Classically every $L_n^\perp$ is forced to a definite value; nothing is left over.

Quantization changes their status in two ways, and this note is about both:

1. The $\alpha$'s no longer commute, so a product like $\alpha_{-p}\alpha_p$ differs from $\alpha_p\alpha_{-p}$. We must *choose* an ordering, and the choice injects a constant — the seed of the vacuum energy.
2. When we compute how two $L$'s fail to commute, the same non-commutativity leaves behind a c-number the classical calculation never saw — the **central term**. The algebra nearly closes on the $L$'s alone; the quantum vacuum forces one extra piece that no $L$ can absorb.

Keep one number in view: the extra piece is proportional to $D-2$, the number of transverse directions. The string is counting its own wiggle directions, and demanding that the count be consistent with Lorentz symmetry is what fixes $D$.

## Definition: the constraints as operators

In light-cone gauge we solve the constraints for the dependent coordinate $X^-$ in terms of the physical transverse $X^I$. Its oscillator modes come out **quadratic** in the transverse oscillators (natural units, $\hbar=c=1$, throughout):

$$\sqrt{2\alpha'}\,\alpha_n^-=\frac1{p^+}L_n^\perp,\qquad L_n^\perp\equiv\frac12\sum_{p\in\mathbb Z}\alpha_{n-p}^I\alpha_p^I,\tag{1}$$

with $I$ summed over the transverse directions $I=2,\dots,D-1$. Each $L_n^\perp$ is, up to normalization, the $n$-th Fourier mode of the constraint combination $(\dot X^I)^2+(X'^I)^2$. Because $X^-$ is built from these, and the Hamiltonian is essentially $L_0^\perp$, the $L_n^\perp$ run the theory: they encode the hidden minus-direction, generate reparameterizations of the worldsheet, and set the mass.

## The ordering ambiguity lives only in $L_0^\perp$

Two oscillators $\alpha_{n-p}^I$ and $\alpha_p^I$ in (1) fail to commute only when their mode numbers cancel, $(n-p)+p=n=0$. Every $L_n^\perp$ with $n\neq0$ is therefore unambiguous as written, and **only $L_0^\perp$ needs an ordering decision.** Splitting off the zero mode and the two mode sums,

$$L_0^\perp=\frac12\alpha_0^I\alpha_0^I+\frac12\sum_{p=1}^\infty\alpha_{-p}^I\alpha_p^I+\frac12\sum_{p=1}^\infty\alpha_p^I\alpha_{-p}^I.$$

The first sum is already creation-before-annihilation; the last is backwards. Reorder it with $[\alpha_p^I,\alpha_{-p}^I]=p\,\delta^{II}=p(D-2)$, the contracted delta $\delta^{II}$ counting one unit per transverse direction:

$$\frac12\sum_{p=1}^\infty\alpha_p^I\alpha_{-p}^I=\frac12\sum_{p=1}^\infty\alpha_{-p}^I\alpha_p^I+\frac12(D-2)\sum_{p=1}^\infty p.$$

Pulling the annihilation operators to the right cost us the divergent c-number $\frac12(D-2)\sum_{p\ge1}p$ — literally the zero-point energy of one oscillator per mode $p$ per transverse direction. Rather than carry an infinity in the definition, we **define** $L_0^\perp$ as the finite, normal-ordered operator

$$\boxed{\;L_0^\perp\equiv\frac12\alpha_0^I\alpha_0^I+\sum_{p=1}^\infty\alpha_{-p}^I\alpha_p^I=\alpha'\,p^Ip^I+N^\perp\;}\tag{2}$$

using $\alpha_0^I=\sqrt{2\alpha'}\,p^I$ and the number operator $N^\perp$ of the [[Open-string Fock space]]. The would-be infinity is banished from the operator and carried instead as a single **ordering constant $a$**, inserted where the dependent momentum $p^-$ is defined:

$$2\alpha'p^-\equiv\frac1{p^+}\big(L_0^\perp+a\big).$$

Taken literally, the reordering suggests $a\overset{\rm formal}{=}\tfrac12(D-2)\sum_{p\ge1}p$, divergent because it is written as a raw zero-point sum. The honest finite value comes from a cutoff (the Casimir part $-(D-2)/24$) and is worked out in [[Normal-ordering constant for open strings]]; its final pinning to $a=-1$ is forced by Lorentz invariance in [[Light-cone Lorentz anomaly]]. Here we only need that the ordering constant is *separate* from $L_0^\perp$ and must not be double-counted.

## How $L_m^\perp$ acts on an oscillator

Warm up on the simpler bracket, one $L$ against one oscillator. Expanding $[L_m^\perp,\alpha_n^J]$ with the oscillator algebra, the two Kronecker deltas contribute one term each and combine to

$$[L_m^\perp,\alpha_n^J]=-n\,\alpha_{m+n}^J.$$

$L_m^\perp$ takes an oscillator, **shifts its mode number by $m$**, and reweights it by $-n$. The mode number on the right ($m+n$) is the sum of those on the left — total mode number is conserved, inherited from the $\alpha$-algebra. This is the fingerprint of a reparameterization generator: acting on $X^I(\tau,\sigma)$ it produces $\xi^\tau\dot X^I+\xi^\sigma X'^I$, an infinitesimal wiggle of the $(\tau,\sigma)$ coordinates. The Virasoro operators are the quantum generators of worldsheet reparameterizations.

Setting $m=0$ gives $[L_0^\perp,\alpha_n^J]=-n\,\alpha_n^J$, so $\alpha_{-n}^I$ raises the $L_0^\perp$ eigenvalue by $n$ — consistent with the normal-ordered form (2), which counts excitation level.

## The algebra and where the anomaly comes from

Away from $m+n=0$ the algebra closes with no surprises — this is the classical Witt algebra of vector fields on a circle:

$$[L_m^\perp,L_n^\perp]=(m-n)L_{m+n}^\perp\qquad(m+n\neq0).$$

The interesting case is $m+n=0$, where reordering can strand a c-number. Write the general result as

$$[L_m^\perp,L_n^\perp]=(m-n)L_{m+n}^\perp+A^\perp(m)\,\delta_{m+n,0},\tag{3}$$

so the whole anomaly is the number $A^\perp(m)$ hiding in $[L_m^\perp,L_{-m}^\perp]=2m\,L_0^\perp+A^\perp(m)$. Antisymmetry of the commutator forces $A^\perp(-m)=-A^\perp(m)$, so we may take $m>0$.

**Strip to one oscillator species first.** The transverse index rides along as a spectator, so compute the constant for a single field $\alpha_n$ (no index) and multiply by the number of fields at the end:

$$L_m=\frac12\sum_{p\in\mathbb Z}\alpha_{m-p}\alpha_p,\qquad [\alpha_m,\alpha_n]=m\,\delta_{m+n,0}.$$

**Why only a finite block matters.** A c-number survives only when every oscillator gets contracted. In $L_m$ the piece that can produce a constant against $L_{-m}$ is the finite window of annihilators $\frac12\sum_{n=1}^{m-1}\alpha_n\alpha_{m-n}$, paired against the matching window of creators in $L_{-m}$; every other pairing has a spectator zero mode or leaves an oscillator uncontracted. So, writing $[\,\cdot\,,\cdot\,]_{\rm central}$ for the c-number part of a commutator,

$$A(m)=\frac14\sum_{n,p=1}^{m-1}\big[\alpha_n\alpha_{m-n},\,\alpha_{-p}\alpha_{p-m}\big]_{\rm central}.$$

**Extract the constant.** For a product of two oscillators a c-number appears only when *both* commutators are used — one contraction alone leaves an operator. Keeping only the doubly contracted terms,

$$\big[\alpha_n\alpha_{m-n},\alpha_{-p}\alpha_{p-m}\big]_{\rm central}
=n(m-n)\big(\delta_{n,p}+\delta_{n,m-p}\big).$$

The two deltas are the two ways to pair the annihilators of $L_m$ against the creators of $L_{-m}$ (pair $n$ with $-p$, or $n$ with $p-m$). Each delta collapses the $p$-sum, and the two give identical contributions, so

$$A(m)=\frac12\sum_{n=1}^{m}n(m-n)=\frac12 m\sum_{n=1}^{m}n-\frac12\sum_{n=1}^{m}n^2\tag{4}$$

(the upper limit is padded to $m$ since the $n=m$ term vanishes). With $\sum_{1}^{m}n=\tfrac{m(m+1)}2$ and $\sum_{1}^{m}n^2=\tfrac{m(m+1)(2m+1)}6$,

$$A(m)=\frac{m^2(m+1)}{4}-\frac{m(m+1)(2m+1)}{12}=\frac1{12}\,(m^3-m).$$

Restoring the transverse index, the double contraction closes an index loop $\delta^{II}=D-2$, multiplying the constant by the number of transverse fields; (3) becomes

$$\boxed{\;[L_m^\perp,L_n^\perp]=(m-n)L_{m+n}^\perp+\frac{D-2}{12}\,(m^3-m)\,\delta_{m+n,0}\;}$$

Three features of this result carry the physics.

- **$(m^3-m)$ vanishes at $m=0,\pm1$.** So $L_0^\perp,L_{\pm1}^\perp$ close *without* anomaly — an honest $SL(2)$ subalgebra, the global conformal group. The anomaly first bites at $m=\pm2$: $A^\perp(2)=\tfrac12(D-2)$, one $\tfrac12$ per transverse direction, matching the single-species hand check $[L_2,L_{-2}]=4L_0+\tfrac12$.
- **The coefficient is $D-2$, not $D$.** Only the transverse directions are dynamical in light-cone gauge; there are no timelike or longitudinal oscillators to count. The central charge literally *is* the number of physical wiggle directions.
- **It is a genuine quantum obstruction, not a bookkeeping artifact.** The constant grows like $m^3$, while redefining $L_0^\perp\to L_0^\perp+{\rm const}$ shifts the commutator only by a term $\sim m$ — no redefinition absorbs it (the Exercise makes this precise). The vacuum permanently blocks the classical algebra from closing.

The same $D-2$ reappears in the zero-point energy of $L_0^\perp$, and that is no coincidence: closing the *Lorentz* algebra ties the ordering constant $a$ and this central term together, and the only solution is $D=26$, $a=-1$.

## Open questions

- The CFT reading of this number — the $D-2$ transverse bosons contribute central charge $c=D-2$; covariantly all $D$ bosons contribute $c_{\text{matter}}=D$ and the $bc$-ghosts $c_{\text{gh}}=-26$ — is deferred to [[Virasoro algebra and central charge]] and [[Total central charge and D = 26]].
- How this central term feeds the boost commutator $[M^{-I},M^{-J}]$ is made explicit in [[Light-cone Lorentz anomaly]]; the full term-by-term expansion there is long bookkeeping, but the entry points of the $D-2$ and $a$ pieces are identified.

## Exercise

Verify that the central term is real, not a convention, in two steps.

**(a)** Compute $A(3)$ two ways: directly from the finite sum (4), $A(m)=\tfrac12\sum_{n=1}^{m}n(m-n)$, and from the closed form $\tfrac1{12}(m^3-m)$. They must agree.

**(b)** Suppose someone tries to kill the anomaly by shifting $\tilde L_0=L_0^\perp+\lambda$ for a constant $\lambda$ (leaving $L_{n\neq0}^\perp$ alone). Does any choice of $\lambda$ remove the central term from $[L_m^\perp,L_{-m}^\perp]$ for all $m$? Explain in one line why not.

> [!success]- Solution
> **(a)** Directly:
> $$A(3)=\tfrac12\sum_{n=1}^{3}n(3-n)=\tfrac12\big[\,1\cdot2+2\cdot1+3\cdot0\,\big]=\tfrac12(2+2+0)=2.$$
> Closed form:
> $$\tfrac1{12}(3^3-3)=\tfrac1{12}(27-3)=\tfrac{24}{12}=2.\ \checkmark$$
>
> **(b)** The anomalous relation is $[L_m^\perp,L_{-m}^\perp]=2m\,L_0^\perp+A^\perp(m)$. Written in terms of $\tilde L_0=L_0^\perp+\lambda$, it reads $[L_m^\perp,L_{-m}^\perp]=2m\,\tilde L_0+\big(A^\perp(m)-2m\lambda\big)$: the shift redefines the anomaly by a term *linear* in $m$. But the true anomaly is $A^\perp(m)=\tfrac{D-2}{12}(m^3-m)$, and no constant $\lambda$ can produce the $m^3$ growth: a shift buys you $\propto m$, the anomaly needs $\propto m^3$. So the cubic piece is untouchable — a genuine central extension of the algebra, present whenever $D\neq2$. (Only the linear $-m$ part of $m^3-m$ could be traded against such a shift; the cubic core cannot, which is exactly why the anomaly survives at $m\ge2$.)
