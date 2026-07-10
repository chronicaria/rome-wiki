---
title: Level matching
number: "15.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, level-matching]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A closed string is a loop with no marked starting point, so nothing physical can depend on where you set $\sigma=0$. Demanding that states not notice a rigid slide of that origin forces the left- and right-moving excitations to carry equal total level — $N^\perp=\bar N^\perp$, the level-matching constraint.

## A loop has no origin

Draw a closed string at a fixed instant: a loop in space, parameterized by $\sigma\in[0,2\pi]$ with the endpoints identified. On an open string the two endpoints anchor the coordinate — $\sigma=0$ is *that* end. A loop has no ends. You can rotate the parameter, $\sigma\mapsto\sigma+\sigma_0$, and the physical string is unchanged; you have only relabeled its points. So any legitimate description of the string must be blind to this rotation.

The string's excitations come in two families — right-movers ($\alpha_{-n}^I$) and left-movers ($\bar\alpha_{-n}^I$) — independent because a loop has no boundary to glue them (see [[Left and right oscillator algebras]]). Rotating $\sigma$ twists the two families in opposite directions: the same shift that advances every right-mover's phase winds every left-mover's back. A state survives only if the two windups cancel — only if the string carries as much rightward excitation as leftward. That balance is level matching. We derive it twice below: algebraically, from the shared zero mode, and geometrically, from the rotation itself.

## The constraint, from the shared zero mode

The algebraic route uses one fact from [[Left and right oscillator algebras]]: the closed string has **two** copies of the transverse Virasoro zero mode (natural units, $\hbar=c=1$),
$$L_0^\perp=\tfrac{\alpha'}{4}\,p^Ip^I+N^\perp,\qquad
\bar L_0^\perp=\tfrac{\alpha'}{4}\,p^Ip^I+\bar N^\perp, \tag{1}$$
but only **one** center-of-mass momentum $p^\mu$ (the barred and unbarred zero modes were forced equal by periodicity, $\alpha_0^\mu=\bar\alpha_0^\mu=\sqrt{\alpha'/2}\,p^\mu$). The two $L_0$'s therefore differ *only* in their number operators — the momentum piece is literally the same operator in both.

In light-cone gauge the constraints solve for the minus oscillators in terms of the transverse ones; at mode zero,
$$\sqrt{2\alpha'}\,\alpha_0^-=\tfrac{2}{p^+}\,L_0^\perp,\qquad
\sqrt{2\alpha'}\,\bar\alpha_0^-=\tfrac{2}{p^+}\,\bar L_0^\perp.$$
Periodicity binds $X^-$ exactly as it bound the $X^I$: a mismatch of its two zero modes would make $X^-$ grow linearly around the loop, so $\alpha_0^-=\bar\alpha_0^-$. The two left sides are the same operator, and the two right sides must agree:
$$\boxed{\,L_0^\perp=\bar L_0^\perp\,}$$
Subtract equations (1). The identical $\tfrac{\alpha'}{4}p^Ip^I$ pieces cancel, leaving the number operators:
$$\boxed{\,N^\perp=\bar N^\perp\,}$$
A physical closed-string state carries the same total level on its left and its right. The normal-ordering constant (the $-1$ per sector at $D=26$, derived in [[Closed-string mass formula]]) plays no role: it enters both sectors' relations identically, so it drops out of the difference. That is why level matching survives regularization untouched, even though the individual $L_0$'s do not.

## The same constraint, from the rotation symmetry

The geometric route shows *why* it had to be a constraint. The generator of the $\sigma$-rotation is the difference of the two Virasoro zero modes: its commutator with the string coordinate is a pure $\sigma$-derivative,
$$\big[\,L_0^\perp-\bar L_0^\perp,\;X^I(\tau,\sigma)\,\big]=i\,\frac{\partial X^I}{\partial\sigma}. \tag{2}$$
Compare the *sum*: $[L_0^\perp+\bar L_0^\perp,X^I]=-i\,\partial X^I/\partial\tau$, which generates $\tau$-evolution (it is the worldsheet Hamiltonian, and via the gauge condition the spacetime light-cone Hamiltonian). The **difference** generates $\sigma$-evolution — a rigid rotation of the loop.

> [!note] Reading (2) off the two $L_0$ commutators
> Work mode by mode in the expansion of $X^I$: $[N^\perp,\alpha_n^I]=-n\,\alpha_n^I$ multiplies each right-moving term by $-n$, and $\big[\tfrac{\alpha'}{4}p^Jp^J,\,x_0^I\big]=-\tfrac{i\alpha'}{2}\,p^I$ supplies the zero-mode piece. Resumming the series gives $[L_0^\perp,X^I]=-\tfrac{i}{2}(\dot X^I-X'^I)$ and, identically with bars, $[\bar L_0^\perp,X^I]=-\tfrac{i}{2}(\dot X^I+X'^I)$. Their sum is $-i\dot X^I$ (the $X'^I$ cancel); their difference is $+iX'^I$ (the $\dot X^I$ cancel). Hence (2).

Call the generator $P\equiv L_0^\perp-\bar L_0^\perp$. Exponentiating (2) turns the infinitesimal rotation into a finite one:
$$e^{-iP\sigma_0}\,X^I(\tau,\sigma)\,e^{iP\sigma_0}=X^I(\tau,\sigma+\sigma_0). \tag{3}$$

> [!note]- Why (3) follows from (2)
> Set $F(s)=e^{-iPs}\,X^I(\tau,\sigma)\,e^{iPs}$. Differentiate:
> $$\frac{dF}{ds}=e^{-iPs}\big(-i[P,X^I]\big)e^{iPs}=e^{-iPs}\,\partial_\sigma X^I\,e^{iPs}=\partial_\sigma F,$$
> using (2) in the middle step. So $F$ obeys $\partial_s F=\partial_\sigma F$ with $F(0)=X^I(\tau,\sigma)$, whose unique solution is the shifted field $F(s)=X^I(\tau,\sigma+s)$.

$P$ is the **worldsheet momentum** — the charge conjugate to the loop coordinate $\sigma$, not to be confused with the spacetime momentum $p^\mu$. Because the choice of $\sigma$-origin is pure convention, every physical state must be unmoved by the rotation:
$$e^{-iP\sigma_0}|\Psi\rangle=|\Psi\rangle\quad\text{for all }\sigma_0\ \Longleftrightarrow\ P|\Psi\rangle=0.$$
On a level-$(N^\perp,\bar N^\perp)$ state $P$ has eigenvalue $N^\perp-\bar N^\perp$, so $P|\Psi\rangle=0$ is once more $N^\perp=\bar N^\perp$. Zero worldsheet momentum *is* level matching.

### Why $P$ counts the difference

The eigenvalue can be read off phase by phase. In the mode expansion, a right-moving creation operator $\alpha_{-n}^I$ multiplies $X^I$ by $e^{-in\sigma}$, while a left-moving $\bar\alpha_{-n}^I$ multiplies it by $e^{+in\sigma}$ — the opposite sign is the counter-winding from the opening picture. Under $\sigma\mapsto\sigma+\sigma_0$ these pick up
$$\alpha_{-n}^I:\ e^{-in\sigma_0},\qquad \bar\alpha_{-n}^I:\ e^{+in\sigma_0}.$$
A basis state with right level $N^\perp$ and left level $\bar N^\perp$ collects the product of all its phases,
$$e^{-i(N^\perp-\bar N^\perp)\sigma_0}.$$
For an unmarked loop this must equal $1$ for *every* real $\sigma_0$ — which happens precisely when $N^\perp-\bar N^\perp=0$. The rotation invariance and the exponent's vanishing are the same statement.

## Reading the constraint correctly

Level matching acts **state by state**; you cannot enforce it by deleting oscillators from the allowed list. Both towers keep all of their creation operators — you keep only the products whose total left level equals the total right level:

| state | $(N^\perp,\bar N^\perp)$ | allowed? |
|---|---|---|
| $\alpha_{-1}^I\,\bar\alpha_{-1}^J\,\vert p^+,\vec p_T\rangle$ | $(1,1)$ | yes |
| $\alpha_{-1}^I\,\vert p^+,\vec p_T\rangle$ | $(1,0)$ | no |
| $\alpha_{-2}^I\,\bar\alpha_{-1}^J\,\bar\alpha_{-1}^K\,\vert p^+,\vec p_T\rangle$ | $(2,2)$ | yes |

The mental model from [[Left and right oscillator algebras]] sharpens: the raw tensor product $\mathcal H_R\otimes\mathcal H_L$ is too big, and level matching selects its **diagonal** — the subspace invariant under the $\sigma$-rotation. The lowest matched excited level is one quantum from each side at mode $1$: the massless $(1,1)$ level that hosts the graviton. No physical state has only one side excited, so there is no closed-string state at $\tfrac12\alpha'M^2=-1$.

## Open questions

- Equation (1) writes the $L_0$'s without their normal-ordering constant. Its value ($-1$ per sector, $-2$ total, at $D=26$) comes from Lorentz invariance / regularized zero-point energy and is derived in [[Closed-string mass formula]] and revisited in [[Critical dimension D=26]]. Level matching needs only that the *same* constant sits in both $L_0$'s, so it cancels in the difference.
- For strings on compact directions, momentum and winding enter the two zero modes unequally, and level matching becomes $N^\perp-\bar N^\perp=$ (momentum number $\times$ winding number) rather than zero. The uncompactified condition here is the special case; the general one is [[Compactified closed-string mass formula]].

## Exercise

Suppose someone hands you a would-be closed-string state $|\Psi\rangle=\alpha_{-3}^I\,\bar\alpha_{-1}^J\,\bar\alpha_{-1}^K\,|p^+,\vec p_T\rangle$ and claims it is physical. Use the worldsheet momentum operator $P=L_0^\perp-\bar L_0^\perp$ to test the claim directly — compute $P|\Psi\rangle$ — and separately confirm your answer with the rotation-phase argument. Is it physical?

> [!success]- Solution
> **Eigenvalue test.** The momentum pieces of $L_0^\perp$ and $\bar L_0^\perp$ are the same operator, so they cancel in the difference and $P=N^\perp-\bar N^\perp$. The right tower carries one mode-$3$ oscillator, so $N^\perp=3$. The left tower carries two mode-$1$ oscillators, so $\bar N^\perp=1+1=2$. Hence
> $$P|\Psi\rangle=(N^\perp-\bar N^\perp)|\Psi\rangle=(3-2)|\Psi\rangle=|\Psi\rangle\neq0.$$
> Since $P|\Psi\rangle\neq0$, the state is **not** physical — it carries one unit of worldsheet momentum.
>
> **Phase check.** Under $\sigma\mapsto\sigma+\sigma_0$ the creation operators pick up phases: $e^{-3i\sigma_0}$ from $\alpha_{-3}^I$ and $e^{+i\sigma_0}$ from each $\bar\alpha_{-1}$, giving the total phase
> $$e^{-3i\sigma_0}\cdot e^{+i\sigma_0}\cdot e^{+i\sigma_0}=e^{-i\sigma_0}\neq1\ \text{(for generic }\sigma_0).$$
> The state changes under a rigid rotation of the loop, so it cannot describe an unmarked closed string — consistent with $P|\Psi\rangle\neq0$. To repair it, add one more unit of left level (e.g. one more $\bar\alpha_{-1}$), making $\bar N^\perp=3=N^\perp$.
