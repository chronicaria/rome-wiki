---
title: Left and right oscillator algebras
number: "15.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, oscillators]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A closed string carries two independent, commuting copies of the open-string oscillator algebra — left-movers $\bar\alpha_n^I$ and right-movers $\alpha_n^I$ — because a loop with no ends lets a wave circling one way and a wave circling the other never interact. They share only the string's overall position and momentum: one zero mode, common to both.

## Two waves on a ring that never meet

Pluck a guitar string and the disturbance splits into a wave running left and a wave running right. On an open string these two waves are the *same* excitation seen twice: each one hits an endpoint, reflects, and comes back as the other. The boundary condition welds left to right, leaving one set of vibrations — one oscillator tower.

A closed string is a loop. A left-running wave keeps circling one way, a right-running wave circles the other, and neither ever bounces off anything or turns into the other. The closed string therefore has two genuinely independent vibration patterns, hence two oscillator towers. That one fact — no endpoints — drives everything below: a closed string is two copies of an open string glued at a shared center of mass.

## Why two sectors, precisely

In the gauge where the string equation of motion is the free wave equation,
$$\big(\partial_\tau^2-\partial_\sigma^2\big)X^\mu=0,$$
the general solution is a left-mover plus a right-mover:
$$X^\mu(\tau,\sigma)=X_L^\mu(\tau+\sigma)+X_R^\mu(\tau-\sigma).$$
$X_L$ depends only on $u=\tau+\sigma$, $X_R$ only on $v=\tau-\sigma$ — *a priori* two unrelated functions.

- **Open string:** endpoints at $\sigma=0,\pi$ impose Neumann (or Dirichlet) conditions, which weld the two functions together: the would-be second tower collapses onto the first, $\bar\alpha_n=\pm\alpha_n$.
- **Closed string:** no endpoints, only periodicity,
$$X^\mu(\tau,\sigma)=X^\mu(\tau,\sigma+2\pi).$$

Periodicity is far weaker than a boundary condition. It says $X_L(u+2\pi)-X_L(u)=X_R(v)-X_R(v-2\pi)$ for all $u,v$; a function of $u$ that equals a function of $v$ can only be a constant, so $X_L'$ and $X_R'$ are each *separately* periodic with period $2\pi$ and each gets its own Fourier series (the leftover constant is the zero-mode story below). Two independent periodic functions carry two independent sets of Fourier coefficients, and quantization turns each set into its own operator algebra.

## The mode expansions

Expanding the derivatives (which are what the wave equation constrains):
$$X_L'^\mu(u)=\sqrt{\tfrac{\alpha'}{2}}\sum_{n\in\mathbb Z}\bar\alpha_n^\mu\,e^{-inu},\qquad
X_R'^\mu(v)=\sqrt{\tfrac{\alpha'}{2}}\sum_{n\in\mathbb Z}\alpha_n^\mu\,e^{-inv}.$$
Barred modes build the left-mover, unbarred the right-mover. Because these are derivatives, the modes appear without the $1/n$ that integration produces. Assembling the full coordinate:
$$X^\mu(\tau,\sigma)=x_0^\mu+\sqrt{2\alpha'}\,\alpha_0^\mu\,\tau
+i\sqrt{\tfrac{\alpha'}{2}}\sum_{n\neq0}\frac{e^{-in\tau}}{n}\big(\alpha_n^\mu e^{in\sigma}+\bar\alpha_n^\mu e^{-in\sigma}\big).$$
Read the phases and the split becomes visible: $\alpha_n^\mu e^{in\sigma}$ times $e^{-in\tau}$ is $e^{-in(\tau-\sigma)}$, a right-mover; the barred term is $e^{-in(\tau+\sigma)}$, a left-mover. The two towers ride opposite phase velocities around the loop.

## The one place they touch: the shared zero mode

The $n=0$ Fourier modes of the two derivative expansions are *a priori* separate constants $\bar\alpha_0$ and $\alpha_0$. Integrating turns them into terms linear in $u$ and $v$, whose $\sigma$-parts are $+\sqrt{\alpha'/2}\,\bar\alpha_0^\mu\,\sigma$ and $-\sqrt{\alpha'/2}\,\alpha_0^\mu\,\sigma$; every other piece of $X^\mu$ is periodic on its own, so the loop closes only if the two slopes cancel:
$$\boxed{\;\bar\alpha_0^\mu=\alpha_0^\mu\;}\tag{1}$$
Both zero modes are the same spacetime momentum:
$$\alpha_0^\mu=\bar\alpha_0^\mu=\sqrt{\tfrac{\alpha'}{2}}\,p^\mu.$$
This is the single thread stitching the two sectors together. Left and right waves vibrate however they like, but the loop as a whole has one position $x_0^\mu$ and one momentum $p^\mu$: a closed string moves through spacetime as one object, not two. Compare the open string, $\alpha_0^\mu=\sqrt{2\alpha'}\,p^\mu$ — the closed-string zero mode is smaller by a factor of 2, since $\sqrt{2\alpha'}/\sqrt{\alpha'/2}=\sqrt4=2$. That factor squares when the constraints are solved for the mass: momentum enters $L_0^\perp$ through $\tfrac12\alpha_0^2$, giving $\tfrac{\alpha'}{4}p^Ip^I$ here against $\alpha'p^Ip^I$ for the open string, and that 4 is why closed-string levels are spaced by $4/\alpha'$ rather than $1/\alpha'$ — see [[Closed-string mass formula]].

## The two algebras

Quantization starts from the equal-time canonical relation on the loop,
$$[X^I(\tau,\sigma),\mathcal P^{\tau J}(\tau,\sigma')]=i\,\delta(\sigma-\sigma')\,\delta^{IJ},\qquad
\mathcal P^{\tau J}=\frac{1}{2\pi\alpha'}\dot X^J,$$
the statement that field and momentum density are conjugate at each point of the string. Rather than commute $X^I$ directly, commute the two sector-isolating combinations $\dot X^I\pm X'^I$, each of which sees only one tower:
$$\dot X^I+X'^I=\sqrt{2\alpha'}\sum_{n\in\mathbb Z}\bar\alpha_n^I e^{-in(\tau+\sigma)},\qquad
\dot X^I-X'^I=\sqrt{2\alpha'}\sum_{n\in\mathbb Z}\alpha_n^I e^{-in(\tau-\sigma)}.$$
The canonical relation gives
$$[(\dot X^I\pm X'^I)(\sigma),(\dot X^J\pm X'^J)(\sigma')]
=\pm 4\pi i\alpha'\,\delta^{IJ}\,\partial_\sigma\delta(\sigma-\sigma').\tag{2}$$
Expand the periodic delta as $\delta(\sigma-\sigma')=\frac{1}{2\pi}\sum_{k\in\mathbb Z} e^{ik(\sigma-\sigma')}$ and match Fourier coefficients on both sides. The $\sqrt{2\alpha'}$ normalizations square to $2\alpha'$, matching the $4\pi\alpha'$ divided by the delta's $2\pi$, while $\partial_\sigma$ pulls down the mode number:
$$[\alpha_m^I,\alpha_n^J]=m\,\delta_{m+n,0}\,\delta^{IJ},\qquad
[\bar\alpha_m^I,\bar\alpha_n^J]=m\,\delta_{m+n,0}\,\delta^{IJ}.\tag{3}$$
The indices $I,J$ are transverse ($I=2,\dots,D-1$, so $D-2$ values), where $\eta^{IJ}=\delta^{IJ}$ (mostly-plus signature) — no timelike minus sign sneaks in, so these towers have positive norm. The opposite-sign combinations commute with each other — their two $\delta'$ cross terms cancel — so the two sectors are independent:
$$\boxed{\;[\alpha_m^I,\bar\alpha_n^J]=0\;}\tag{4}$$
Left and right oscillators are honestly separate degrees of freedom — this is the precise sense in which the closed string "is two copies of the open string, except for the zero mode."

Rescaling into creation/annihilation operators exactly as for the open string, $\alpha_n^I=\sqrt n\,a_n^I$ and $\alpha_{-n}^I=\sqrt n\,a_n^{I\dagger}$ for $n\ge1$ (and barred versions), (3) becomes the standard harmonic-oscillator algebra:
$$[a_m^I,a_n^{J\dagger}]=\delta_{m,n}\,\delta^{IJ},\qquad [\bar a_m^I,\bar a_n^{J\dagger}]=\delta_{m,n}\,\delta^{IJ}$$
— one independent harmonic oscillator per mode number and transverse direction, in each sector.

## The state space is (almost) a tensor product

Two independent oscillator towers means two independent number operators,
$$N^\perp=\sum_{n=1}^\infty n\,a_n^{I\dagger}a_n^I,\qquad
\bar N^\perp=\sum_{n=1}^\infty n\,\bar a_n^{I\dagger}\bar a_n^I,$$
and a general state stacks creation operators from *both* on the ground state. The working mental model is
$$\mathcal H_{\rm closed}\subset \mathcal H_R\otimes\mathcal H_L\otimes L^2(\text{center-of-mass momentum}).$$
The $\subset$, not $=$, is the loose end this note leaves. The shared zero mode plus the loop's leftover rotational symmetry ties the two towers together through level matching, which keeps only the states with $N^\perp=\bar N^\perp$ — see [[Level matching]]. The mass then depends symmetrically on both towers — see [[Closed-string mass formula]]. Two towers because the loop has no endpoints; one shared momentum because the loop must close; a cut-down tensor product because the loop has no marked point.

## Open questions

- The reduction to transverse indices $I=2,\dots,D-1$ is inherited from light-cone gauge-fixing ([[Light-cone constraints]], [[Transverse coordinates as physical degrees of freedom]]); this note uses the result rather than re-deriving it.
- In compact directions a closed string can *wind* around the circle, so periodicity is relaxed and the left/right zero modes no longer collapse to a single momentum. That is [[Winding modes]] and [[Compactified closed-string mass formula]].

## Exercise

The two boxed facts of this note pull in opposite directions: the oscillators are two independent towers (4), yet the zero modes are forced equal (1). Test that you understand *why the zero mode is the exception* by tracking where the oscillator algebra goes silent at $n=0$ — and what steps in to constrain it there.

**(a)** From the sector-isolating expansion $\dot X^I+X'^I=\sqrt{2\alpha'}\sum_n \bar\alpha_n^I e^{-in(\tau+\sigma)}$, read off the $n=0$ term. Why does the commutator relation (3) give *no* constraint on $\bar\alpha_0$ (i.e. why is $[\bar\alpha_0,\bar\alpha_0]$ trivially satisfied)?

**(b)** So the oscillator algebra alone never relates $\bar\alpha_0$ to $\alpha_0$. Which single condition *does* force $\bar\alpha_0^\mu=\alpha_0^\mu$, and at what step does it enter — before or after quantization?

> [!success]- Solution
> **(a)** The $n=0$ term of $\dot X^I+X'^I$ is the constant $\sqrt{2\alpha'}\,\bar\alpha_0^I$ (the $e^{-i\cdot0\cdot(\tau+\sigma)}=1$ mode). In the commutator (3), $[\bar\alpha_m^I,\bar\alpha_n^J]=m\,\delta_{m+n,0}\,\delta^{IJ}$, setting $m=0$ gives $[\bar\alpha_0^I,\bar\alpha_n^J]=0$ for every $n$ — in particular $[\bar\alpha_0^I,\bar\alpha_0^J]=0$ holds identically, constraining nothing. The vanishing coefficient $m$ traces back to the $\partial_\sigma$ in (2), which pulls down the mode number and gives zero weight to the constant mode. The zero mode is central in this algebra: it commutes with every oscillator, barred or not, and is neither a raising nor a lowering operator, so the algebra says nothing about how the barred and unbarred zero modes relate.
>
> **(b)** The link is periodicity of the closed string, $X^\mu(\tau,\sigma)=X^\mu(\tau,\sigma+2\pi)$, applied to the *integrated* coordinate. Integrating the derivative expansions gives $X_L$ a term $\sqrt{\alpha'/2}\,\bar\alpha_0^\mu\,u$ and $X_R$ a term $\sqrt{\alpha'/2}\,\alpha_0^\mu\,v$; the $\sigma$-linear parts of these are $+\sqrt{\alpha'/2}\,\bar\alpha_0^\mu\,\sigma$ and $-\sqrt{\alpha'/2}\,\alpha_0^\mu\,\sigma$. Their sum is periodic in $\sigma$ only if the linear pieces cancel, i.e. $\bar\alpha_0^\mu=\alpha_0^\mu$. This is a classical kinematic constraint — it holds for any solution before quantization — and it survives into the quantum theory, where it means there is one momentum operator, not two. So (4) is a statement of the quantum operator algebra, while (1) is a kinematic identification forced by periodicity; they never conflict because the algebra is silent at $n=0$.
