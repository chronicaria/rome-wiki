---
title: Solving the mass shell in light-cone coordinates
number: "2.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, mass-shell]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

In light-cone coordinates the mass shell $p\cdot p=-m^2c^2$ is *linear* in the light-cone energy $p^-$, so $p^-=(p_T^2+m^2c^2)/(2p^+)$ falls out by one division — no square root.

In ordinary coordinates, solving the mass shell for the energy means taking a square root: $E=c\sqrt{\vec p^{\,2}+m^2c^2}$, and a square root is an awkward thing to quantize — it becomes an operator under a radical. Light-cone coordinates tilt the axes onto the light rays themselves. The mass shell is the same hyperbola it always was, but in the tilted variables its equation is first order in the energy, and a first-order equation is solved by one rearrangement. This is the finite-dimensional rehearsal of the move that makes light-cone string quantization work.

This note assumes [[Light-cone coordinates]] (the definitions $x^\pm=(x^0\pm x^1)/\sqrt2$, the off-diagonal metric $\hat\eta$, and the scalar product) and [[Minkowski metric and the mass shell]] (the constraint $p\cdot p=-m^2c^2$, mostly-plus signature).

## Which component is the energy?

The light-cone momenta are built by the same rule as the coordinates:

$$ p^+ = \frac{1}{\sqrt2}(p^0 + p^1), \qquad p^- = \frac{1}{\sqrt2}(p^0 - p^1). $$

Since $x^+$ is called light-cone *time*, the naive guess is that its partner $p^+$ is the energy. That guess is wrong, and the reason is index-lowering: in a null basis, lowering a $+$ swaps it to a $-$ (so $p_+=-p^-$, $p_-=-p^+$). Energy is whatever generates translations in time, and "generates translations in $x^+$" picks out the *covariant* coefficient of $x^+$, not the contravariant one.

A plane wave makes this precise. A momentum eigenstate is $\psi=\exp\!\big(\tfrac{i}{\hbar}\,p\cdot x\big)$, and in light-cone components the invariant phase reads

$$ p\cdot x = p_+x^+ + p_-x^- + p_Ix^I = -p^-x^+ - p^+x^- + p_Ix^I, \qquad I=2,3. $$

The coefficient multiplying $x^+$ is $p_+=-p^-$; that number controls how the wave oscillates in light-cone time. Differentiate:

$$ i\hbar\,\frac{\partial\psi}{\partial x^+} = i\hbar\cdot\frac{i}{\hbar}\,p_+\,\psi = -p_+\,\psi = p^-\,\psi. $$

The $i\hbar\,(i/\hbar)=-1$ turns $p_+$ into $-p_+=p^-$. Compare the ordinary energy eigenvalue equation $i\hbar\,\partial_{x^0}\psi = (E/c)\psi$: the operator $i\hbar\,\partial_{x^+}$ plays the role of "energy over $c$" in light-cone time, so

$$ \boxed{\,p^- = \frac{E_{\mathrm{lc}}}{c}\,} $$

The convention, fixed once and used everywhere after: $p^-$ is the light-cone energy (the Hamiltonian variable, conjugate to $x^+$); $p^+$ is an ordinary conserved momentum (conjugate to $x^-$). We solve the constraint for $p^-$ because $p^-$ is what plays the role of energy.

## Solving the constraint

Set the light-cone self-product (derived in [[Light-cone coordinates]]) equal to the mass shell:

$$ p\cdot p = -2\,p^+ p^- + p_T^2 = -m^2c^2, \qquad p_T^2 \equiv (p^2)^2+(p^3)^2. \tag{1}$$

Two facts are packed into the left side: the cross term is $-2p^+p^-$ — the factor of $2$ is the sum of the two symmetric off-diagonal entries $\hat\eta_{+-}=\hat\eta_{-+}=-1$ — and, crucially, there is no $(p^-)^2$ term, because $\hat\eta_{--}=0$. Equation (1) is therefore linear in $p^-$. Move $p_T^2$ across and divide by $2p^+$:

$$ 2p^+p^- = p_T^2 + m^2c^2 \quad\Longrightarrow\quad \boxed{\,p^- = \frac{p_T^2 + m^2c^2}{2\,p^+} = \frac{(p^2)^2+(p^3)^2+m^2c^2}{2\,p^+}\,} \tag{2}$$

The light-cone energy is fixed completely by $p^+$, the transverse momenta, and the mass — no square root anywhere. In $D$ spacetime dimensions the transverse sum simply runs wider, $p_T^2=\sum_{I=2}^{D-1}(p^I)^2$, and nothing else changes.

Contrast the ordinary frame, where the mass shell $-(p^0)^2+\vec p^{\,2}=-m^2c^2$ is *quadratic* in the energy $p^0$, so solving forces the square root $p^0=\sqrt{\vec p^{\,2}+m^2c^2}$. The square root is the price of asking for the energy tied to $x^0$; asking instead for the energy tied to the null coordinate $x^+$ eliminates it.

### Why square-root-free is the payoff
After quantization the ordinary Hamiltonian $E=c\sqrt{\vec p^{\,2}+m^2c^2}$ is a square-root *operator* — clumsy. The light-cone Hamiltonian variable $p^-$ is instead a *rational* function of the other momenta. For the string, $m^2$ becomes an oscillator expression, and (2) turns into "$p^-$ = (transverse oscillators)$/(2p^+)$": only the transverse degrees of freedom stay dynamical, the null ones are solved away. That is the motivation for [[Light-cone gauge]] (later module), and the template — light-cone energy equals transverse energy divided by $2p^+$ — never changes from here to the full string.

### Sign and factor checks
- Cross-term coefficient: $\hat\eta_{+-}+\hat\eta_{-+}=-2$, so $p\cdot p$ carries $-2p^+p^-$. The $2$ is genuine, not a slip.
- Moving $p_T^2$ across flips only its own sign; both $p_T^2$ and $m^2c^2$ land with $+$ on the right, as in (2).
- Dividing by $2p^+$ needs $p^+\neq0$. For a positive-energy massive particle $p^0=\sqrt{\vec p^{\,2}+m^2c^2}>|p^1|$, so both $p^\pm=(p^0\pm p^1)/\sqrt2>0$. The excluded case $p^+=0$ is a massless ray moving purely in $-x^1$; it falls off this light-cone chart.
- Fast-particle limit: for $p_T=0$, (2) gives $p^-=m^2c^2/(2p^+)$. A particle boosted hard along $+x^1$ has $p^+\simeq\sqrt2\,p^1$, so $p^-\simeq m^2c^2/(2\sqrt2\,p^1)$ — the light-cone energy shrinks as $p^1$ grows, matching the direct expansion $p^0=\sqrt{(p^1)^2+m^2c^2}\simeq p^1+\tfrac{m^2c^2}{2p^1}$.

### Setting $c=1$
Later chapters drop $c$, and (2) reads

$$ p^- = \frac{p_T^2 + m^2}{2p^+}, $$

the form you meet everywhere in string quantization. The string replaces the fixed number $m^2$ by a spectrum built from oscillator levels; the *shape* of the formula never changes.

## Open questions

- Tachyons ($m^2<0$, as in the bosonic-string ground state) make $p^-$ negative for small $p^+$. Revisit in [[Tachyon as instability]] once the string spectrum exists.
- How does $p^+$ conservation in interacting string theory keep amplitudes away from the excluded $p^+=0$ sector?

## Exercise

A massless particle ($m=0$) moves in the $x^1$–$x^2$ plane with $p^1,p^2>0$ and $p^3=0$. Using only this note:
(a) Write its light-cone energy $p^-$ from (2).
(b) Now suppose it moves purely along $+x^1$ ($p^2=0$). Show $p^-=0$, and reconcile this with the claim that $p^-$ is "the energy" of a genuinely energetic photon.

> [!success]- Solution
> **(a)** With $m=0$ and $p_T^2=(p^2)^2$ (since $p^3=0$), equation (2) gives
> $$ p^- = \frac{(p^2)^2}{2p^+} = \frac{(p^2)^2}{\sqrt2\,(p^0+p^1)}. $$
> **(b)** Purely along $+x^1$: a massless particle has $p^0=|\vec p|=p^1$, so $p^2=0$ makes the numerator vanish and $p^-=0$. This is not a contradiction. Light-cone energy generates evolution in light-cone time, and a right-moving photon has nothing left to evolve: $x^-=\tfrac1{\sqrt2}(x^0-x^1)$ and the transverse positions are constant along its worldline, so the light-cone Hamiltonian has no work to do. Its entire ordinary energy is stored in the momentum $p^+=\tfrac1{\sqrt2}(p^0+p^1)=\sqrt2\,p^1$, and none in $p^-$. Formula (2) itself is untroubled here — $p^+\neq0$, so the division is legal and correctly returns $p^-=0$. The genuinely excluded ray is the mirror image, a photon moving purely along $-x^1$, which has $p^+=0$ and falls off the chart, as flagged in the sign checks. Consistency: $p\cdot p=-2p^+p^-=0$ with $p^-=0$ and $p^+\neq0$ — correctly massless.
