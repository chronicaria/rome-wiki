---
title: Ladder operators
number: "3.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, oscillator-algebra]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Repackaging $\hat x,\hat p$ into the complex combinations $a$ and $a^\dagger$ turns the harmonic-oscillator Hamiltonian into $H=\hbar\omega(a^\dagger a+\tfrac12)$, governed by the single relation $[a,a^\dagger]=1$ — and that one relation *is* the entire oscillator, solved without a single derivative.

## A circle in phase space

Rescale position and momentum by the oscillator's natural units and its energy becomes $H\propto P^2+X^2$: a **circle in phase space**. The energy is the squared radius, and classical motion runs around that circle at frequency $\omega$. For ordinary numbers you factor a sum of squares as $A^2+B^2=(A-iB)(A+iB)$ — you split the radius into a complex amplitude and its conjugate. The whole trick is to do the same thing to the *operator* $P^2+X^2$. The amplitude becomes $a$, its conjugate becomes $a^\dagger$, and because $X$ and $P$ don't commute the factorization leaves behind one extra term. That leftover is the zero-point energy, and generalized to infinitely many oscillators it is what fixes the critical dimension of the string. This note is the atom of everything downstream: **factor a quadratic, keep track of the ordering term.**

Once we have that factorization, $a^\dagger$ climbs the energy ladder one rung at a time, $a$ climbs down, and $H$ reports which rung you are on. No differential equation, no special functions — the spectrum falls out of one commutator. This method, not the Hermite-polynomial slog, is the one that survives into string theory verbatim, with an index attached.

## The problem

The harmonic oscillator is a particle of mass $m$ in the potential $V(x)=\tfrac12 m\omega^2 x^2$. Its Hamiltonian (the energy observable) is

$$ H = \frac{\hat p^2}{2m} + \frac12 m\omega^2 \hat x^2 . $$

We want its energy spectrum. The brute-force route solves a Hermite differential equation. The slick route — the one the string inherits — never touches a differential equation. We just factor $H$.

## Defining $a$ and $a^\dagger$

The constants in the definition look mysterious only until we nondimensionalize phase space. Set

$$ X=\sqrt{\frac{m\omega}{\hbar}}\,\hat x,\qquad P=\frac{\hat p}{\sqrt{m\omega\hbar}}. $$

These compare position to the natural oscillator length $\sqrt{\hbar/(m\omega)}$ and momentum to $\sqrt{m\omega\hbar}$, so $X$ and $P$ are pure numbers. Their commutator loses its units too:

$$ [X,P]=\sqrt{\frac{m\omega}{\hbar}}\,\frac{1}{\sqrt{m\omega\hbar}}\,[\hat x,\hat p]=\frac{1}{\hbar}(i\hbar)=i. $$

In these units the Hamiltonian is the promised circle,

$$ H=\frac{\hbar\omega}{2}\left(P^2+X^2\right), $$

with $\hbar\omega$ carrying all the dimensions out front. Factoring $A^2+B^2=(A-iB)(A+iB)$ suggests the combinations

$$ a=\frac{X+iP}{\sqrt2},\qquad a^\dagger=\frac{X-iP}{\sqrt2}. $$

Written back in $\hat x,\hat p$ this is

$$ a = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat x + \frac{i}{m\omega}\hat p\right), \qquad a^\dagger = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat x - \frac{i}{m\omega}\hat p\right). $$

Since $\hat x,\hat p$ are Hermitian, $a^\dagger$ really is the Hermitian conjugate of $a$ — the $i$ flips sign under daggering. Hence the dagger notation, and hence that $a$ itself, not being Hermitian, is not an observable. The prefactor $\sqrt{m\omega/(2\hbar)}$ (with the $1/\sqrt2$ absorbed into it) is tuned to make the commutator come out to exactly $1$; we verify that next.

Inverting the definitions — add them for $\hat x$, subtract for $\hat p$ — gives the bridge back to physical variables:

$$ \hat x = \sqrt{\frac{\hbar}{2m\omega}}\,(a+a^\dagger), \qquad \hat p = -i\sqrt{\frac{m\omega\hbar}{2}}\,(a-a^\dagger). $$

We need these to read physical quantities off the algebra, and their string analogues will express each transverse string coordinate $X^I$ as a sum over oscillator modes. One warning that saves confusion later: $a^\dagger$ is the **adjoint** of $a$, not its inverse. It raises a state up the tower, $a$ lowers it, and their product $a^\dagger a$ counts rungs — it is not the identity.

## Deriving $[a,a^\dagger]=1$

Compute directly, using bilinearity and $[\hat x,\hat p]=i\hbar$:

$$ [a,a^\dagger] = \frac{m\omega}{2\hbar}\left[\hat x + \tfrac{i}{m\omega}\hat p,\;\hat x - \tfrac{i}{m\omega}\hat p\right]. $$

The $[\hat x,\hat x]$ and $[\hat p,\hat p]$ terms vanish. The two cross terms are

$$ \left[\hat x,\,-\tfrac{i}{m\omega}\hat p\right] + \left[\tfrac{i}{m\omega}\hat p,\,\hat x\right] = -\frac{i}{m\omega}[\hat x,\hat p] + \frac{i}{m\omega}[\hat p,\hat x] = -\frac{i}{m\omega}(i\hbar) + \frac{i}{m\omega}(-i\hbar) = \frac{2\hbar}{m\omega}. $$

Multiplying by the prefactor $\frac{m\omega}{2\hbar}$ collapses everything to

$$ \boxed{\;[a,a^\dagger] = 1\;} \tag{1} $$

This is the only input the rest of the theory needs. The two cross terms contributed $\hbar/(m\omega)$ each; the prefactor $m\omega/(2\hbar)$ was chosen precisely to cancel their sum and leave a bare $1$. That is what "fixing the normalization of $a$" means.

## Factoring the Hamiltonian into $a^\dagger a$

Now multiply $a^\dagger$ and $a$, keeping the order straight because $\hat x,\hat p$ do **not** commute:

$$ a^\dagger a = \frac{m\omega}{2\hbar}\left(\hat x - \tfrac{i}{m\omega}\hat p\right)\left(\hat x + \tfrac{i}{m\omega}\hat p\right) = \frac{m\omega}{2\hbar}\left(\hat x^2 + \frac{\hat p^2}{m^2\omega^2} + \frac{i}{m\omega}[\hat x,\hat p]\right). $$

The two mixed products combined into the commutator (that is where the ordering shows up), and $\frac{i}{m\omega}[\hat x,\hat p]=\frac{i}{m\omega}(i\hbar)=-\frac{\hbar}{m\omega}$. Hence

$$ a^\dagger a = \frac{m\omega}{2\hbar}\hat x^2 + \frac{1}{2m\omega\hbar}\hat p^2 - \frac12 = \frac{1}{\hbar\omega}\left(\tfrac12 m\omega^2\hat x^2 + \frac{\hat p^2}{2m}\right) - \frac12 = \frac{H}{\hbar\omega} - \frac12 . $$

The middle step just regroups the $\hat x^2$ and $\hat p^2$ coefficients into exactly the potential and kinetic energy. Solving for $H$:

$$ \boxed{\;H = \hbar\omega\left(a^\dagger a + \tfrac12\right)\;} \tag{2} $$

The $+\tfrac12$ is not decoration — it is the ordering term $[\hat x,\hat p]$, the canonical commutation relation itself, made visible. Physically it is the **zero-point energy**: the algebraic echo of the uncertainty principle from [[Canonical commutation relations]], the reason the oscillator can't sit still at $x=p=0$.

Ordering is the whole story of that $\tfrac12$. Had we factored the other way, $aa^\dagger = a^\dagger a + [a,a^\dagger] = a^\dagger a + 1$, we would have found $H=\hbar\omega\!\left(aa^\dagger-\tfrac12\right)$ — same $H$, opposite sign on the constant. The gap between the two orderings is exactly $[a,a^\dagger]=1$:

$$ aa^\dagger-a^\dagger a=[a,a^\dagger]=1. $$

For one oscillator that leftover $1$ is harmless. For a string's *infinitely many* oscillators the analogous leftover is a divergent sum; **normal-ordering** sweeps it to one side and a finite constant is fixed by consistency. That is the same $\mp\tfrac12$ ambiguity, grown up — the shift that ultimately pins $D=26$.

## What we have achieved

Equations (1) and (2) reduce the oscillator to pure algebra: one commutator plus one number-counting Hamiltonian, no calculus anywhere. Define $N=a^\dagger a$ (the **number operator**) and the entire spectrum $E_n=\hbar\omega(n+\tfrac12)$ follows from $[a,a^\dagger]=1$ alone — that derivation, the module's exit check, is in [[The number operator]].

## Open questions

- The single-oscillator spectrum and state normalizations are completed in [[The number operator]]. The one convention to watch downstream is the string's normal-ordering constant — confusingly also named $a$, though unrelated to the ladder operator. This vault writes the open-string mass shell as $\alpha'M^2=N^\perp+a$ with $a=-1$, so the intercept is $-a=1$; some texts fold the sign into the definition and quote $a=+1$. Same physics.

## Exercise

The prefactor $\sqrt{m\omega/(2\hbar)}$ was chosen to make $[a,a^\dagger]=1$. Suppose you instead defined an unnormalized pair $b=\lambda\!\left(\hat x+\tfrac{i}{m\omega}\hat p\right)$ and $b^\dagger=\lambda\!\left(\hat x-\tfrac{i}{m\omega}\hat p\right)$ with an arbitrary real constant $\lambda>0$. (a) Find $[b,b^\dagger]$ in terms of $\lambda$. (b) What value of $\lambda$ recovers the standard normalization, and does it match the note? (c) With a general $\lambda$, is the Hamiltonian still $H=\hbar\omega(b^\dagger b+\tfrac12)$? Explain what goes wrong.

> [!success]- Solution
> **(a)** Only the prefactor changes relative to the boxed derivation, and $[b,b^\dagger]$ is quadratic in it. The cross terms gave $\frac{2\hbar}{m\omega}$, so
> $$ [b,b^\dagger]=\lambda^2\left[\hat x+\tfrac{i}{m\omega}\hat p,\ \hat x-\tfrac{i}{m\omega}\hat p\right]=\lambda^2\cdot\frac{2\hbar}{m\omega}=\frac{2\hbar\lambda^2}{m\omega}. $$
> **(b)** Setting this to $1$ gives $\lambda^2=\frac{m\omega}{2\hbar}$, i.e. $\lambda=\sqrt{m\omega/(2\hbar)}$ — exactly the prefactor in the note.
> **(c)** No. Repeating the $a^\dagger a$ computation with $\lambda$ gives $b^\dagger b=\lambda^2\!\left(\hat x^2+\frac{\hat p^2}{m^2\omega^2}\right)-\lambda^2\frac{\hbar}{m\omega}$. Since $\hat x^2+\frac{\hat p^2}{m^2\omega^2}=\frac{2H}{m\omega^2}$, and writing $c\equiv[b,b^\dagger]=\frac{2\hbar\lambda^2}{m\omega}$ from part (a), this is $b^\dagger b=\frac{c}{\hbar\omega}H-\frac{c}{2}$, i.e.
> $$ H=\frac{\hbar\omega}{c}\left(b^\dagger b+\tfrac{c}{2}\right). $$
> Only when $c=1$ does this collapse to $H=\hbar\omega(b^\dagger b+\tfrac12)$. Off normalization the counting operator $b^\dagger b$ no longer steps by one: $[b^\dagger b,b^\dagger]=c\,b^\dagger$, so its eigenvalues are spaced by $c$ and the clean "$H$ counts quanta of $\hbar\omega$" picture breaks. The normalization $\lambda=\sqrt{m\omega/(2\hbar)}$ is exactly what makes one rung equal one quantum.
