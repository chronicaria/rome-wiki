---
title: Light-cone gauge
number: "12.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, light-cone-gauge]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Light-cone gauge is the one coordinate choice that untangles the classical string: pick $X^+$ as the worldsheet clock, and the constraints hand you $X^-$ for free, leaving the $D-2$ transverse fields $X^I$ as the only things the string is really doing.

## Three moves

A relativistic string carries $D$ embedding fields $X^\mu(\tau,\sigma)$, but they are not all independent: reparameterization invariance (relabel $\tau,\sigma$ freely) plus two constraints tie them together. This note spends that freedom deliberately and counts what survives.

Film a wave traveling down a rope, and you get to choose how the camera sweeps through spacetime — which slices count as "one instant." A clumsy sweep, ordinary time, leaves the rope's motion tangled with constraints you can only stare at. Tilt the notion of "now" 45° onto a light ray instead: in those slices the leftover bookkeeping collapses, and the rope's genuine wiggling — always transverse, never along its own length — is laid bare. That tilt is light-cone gauge.

Three moves, in order:

1. **$X^+$ becomes the clock.** Spend the $\tau$-relabeling freedom to declare $X^+ \propto \tau$. Light-cone time is no longer a field to solve for; it *is* the time axis.
2. **$X^-$ falls out of the constraints.** Because the light-cone metric is off-diagonal, the constraint that looked quadratic is linear in $X^-$ — solve, don't just impose.
3. **$X^I$ is what's left.** The $D-2$ transverse coordinates carry every physical degree of freedom.

A classical string is therefore $D-2$ transverse oscillators; the other two coordinates are a clock and its shadow.

## Move 1 — Fix $X^+$ as the clock

Light-cone coordinates split off the $x^0,x^1$ plane:
$$
X^\pm=\tfrac{1}{\sqrt2}(X^0\pm X^1),\qquad X^I=(X^2,\dots,X^{D-1}).
$$
Reparameterization freedom lets us demand that light-cone time run linearly in $\tau$. For the open string (natural units, $\hbar=c=1$) this fixes
$$
X^+(\tau,\sigma)=2\alpha'p^+\tau,\qquad x_0^+=0,\ \alpha_n^+=0.
$$
$X^+$ has no oscillations and no starting offset — it is pure clock, ticking at the constant rate $2\alpha'p^+$. One of the $D$ coordinates is now spent. (Full derivation: [[Fixing X-plus as worldsheet time]].)

This needs $p^+=\tfrac1{\sqrt2}(p^0+p^1)\neq0$. Any positive-energy state can be boosted to $p^+>0$; a state with $p^+=0$ is simply the wrong object for this chart.

## Move 2 — The constraints hand you $X^-$

The two parameterization constraints, packaged, read
$$
(\dot X\pm X')^2=0. \tag{1}
$$
The trick is the light-cone dot product (mostly-plus signature), whose $(+,-)$ block is *off-diagonal*:
$$
a\cdot b=-a^+b^--a^-b^++a^Ib^I.
$$
There is no $(a^-)^2$ term, so the expansion of (1) is only **linear** in the $X^-$ combination — no square root to fight. Feeding in $\dot X^+\pm X^{+\prime}=2\alpha'p^+$ (a constant, from move 1) and dividing:
$$
\boxed{\;\dot X^-\pm X^{-\prime}=\frac{1}{4\alpha'p^+}\big(\dot X^I\pm X^{I\prime}\big)^2\;}. \tag{2}
$$
Both derivatives of $X^-$ are dictated by the transverse motion, so $X^-$ is fixed up to a single additive constant $x_0^-$ — it is not an independent field. The denominator $4\alpha'p^+$ is $2\times(2\alpha'p^+)$: one $2$ from the off-diagonal metric, the $2\alpha'p^+$ from the clock rate. This is the module's most common factor slip. (Full derivation and integrability check: [[Light-cone constraints]].)

Neither ingredient alone works: light-cone *coordinates* kill the square root, light-cone *gauge* makes $\dot X^+$ a constant you can divide by.

## Move 3 — The transverse fields are everything physical

What remains is the $D-2$ transverse coordinates. For the open string with free (Neumann) endpoints,
$$
X^I=x_0^I+2\alpha'p^I\tau+i\sqrt{2\alpha'}\sum_{n\neq0}\frac{\alpha_n^I}{n}e^{-in\tau}\cos n\sigma. \tag{3}
$$
The oscillators $\alpha_n^I$ are the free data, subject only to the reality condition $\alpha_{-n}^I=(\alpha_n^I)^*$. Feeding (3) into (2) and matching Fourier modes reconstructs $X^-$ mode by mode:
$$
\sqrt{2\alpha'}\,\alpha_n^-=\frac{1}{p^+}L_n^\perp,\qquad
L_n^\perp\equiv\tfrac12\sum_{p\in\mathbb Z}\alpha_{n-p}^I\alpha_p^I. \tag{4}
$$
Every longitudinal oscillator $\alpha_n^-$ is **quadratic** in the transverse ones — the transverse Virasoro mode $L_n^\perp$, summed over $I$ only. So $X^-$ is a functional of the physical data, plus the constant $x_0^-$; there is no freely choosable $\alpha_n^-$. (Full mode derivation: [[Mode expansions in light-cone gauge]].)

The complete free data is therefore
$$
\big\{\,x_0^I,\ p^I,\ \alpha_n^I,\ p^+,\ x_0^-\,\big\}:
$$
the data of $D-2$ dynamical fields plus two longitudinal constants. Why transverse? The constraint $\dot X\cdot X'=0$ says each point moves *perpendicular to the string*; sliding a point along the string is just relabeling $\sigma$, pure gauge. Physical motion is transverse by definition, and light-cone gauge is the slicing where "physical" and "transverse" become the same word. (Count and picture: [[Transverse coordinates as physical degrees of freedom]].)

## The zero mode: mass is transverse too

The $n=0$ case of (4), with $\alpha_0^\mu=\sqrt{2\alpha'}\,p^\mu$, gives $2p^+p^-=\tfrac1{\alpha'}L_0^\perp$, where classically $L_0^\perp=\alpha'p^Ip^I+\sum_{n\geq1}\alpha_{-n}^I\alpha_n^I$. Combined with $M^2\equiv-p^2=2p^+p^--p^Ip^I$, the transverse-momentum pieces cancel and
$$
M^2=\frac1{\alpha'}\sum_{n\geq1}\alpha_{-n}^I\alpha_n^I=\frac1{\alpha'}\sum_{n\geq1}n\,|a_n^I|^2\ \geq 0,
$$
using reality and the normalized amplitudes $\alpha_n^I=\sqrt n\,a_n^I$. Even the string's mass is built entirely from transverse oscillations, and it is manifestly non-negative: the classical string is never a tachyon.

## Why it is powerful and dangerous

Powerful: it exhibits the physical modes directly and makes the classical string trivially solvable. Dangerous: singling out $X^+$ breaks *manifest* Lorentz covariance — a boost mixing $+,-,I$ looks ugly, even though the physics is still Lorentz invariant. Classically this is a cosmetic price. Quantum mechanically it becomes a real test: the hidden Lorentz generators must still close into the right algebra, and for the bosonic string they do so **only in $D=26$** (with the normal-ordering constant $a=-1$). Light-cone gauge shows you the spectrum for free but forces you to *earn back* Lorentz invariance after quantizing.

## Open questions

- Closed strings fix $X^+=\alpha'p^+\tau$ (half the open-string clock rate), take $\sigma\in[0,2\pi]$, and carry independent left- and right-movers; wrapping the $\sigma$-circle adds a **level-matching** condition — see [[Level matching]].
- The full $D=26$ anomaly computation lives in [[Critical dimension and the spectrum]] / [[Critical dimension D=26]].

## Exercise

The solved constraint (2) carries the coefficient $\dfrac{1}{4\alpha'p^+}$. Derive that $4$ from scratch, and then answer conceptually: if you had chosen *static* gauge ($X^0\propto\tau$, a timelike clock) instead of light-cone gauge, would the constraint have been linear in some corresponding longitudinal derivative? Why is the null clock the magic ingredient?

> [!success]- Solution
> **The factor.** Write $V^\mu=\dot X^\mu\pm X^{\mu\prime}$; the constraint (1) is $V\cdot V=0$. In light-cone coordinates,
> $$V\cdot V=-2V^+V^-+V^IV^I=0,$$
> the $-2$ coming from $\eta_{+-}=\eta_{-+}=-1$ (two equal off-diagonal terms, no diagonal $(V^-)^2$). From move 1, $X^{+\prime}=0$ and $\dot X^+=2\alpha'p^+$, so $V^+=\dot X^+\pm X^{+\prime}=2\alpha'p^+$, a constant. Thus
> $$-2(2\alpha'p^+)\,V^-+V^IV^I=0\ \Rightarrow\ V^-=\frac{1}{4\alpha'p^+}V^IV^I,$$
> and the denominator $4\alpha'p^+=2\times(2\alpha'p^+)$: the $2$ is the metric's off-diagonal factor, the $2\alpha'p^+$ is the clock rate. Both are needed.
>
> **Why null.** The linearity came from two facts: (i) there is **no $(V^-)^2$ term**, i.e. $\eta_{--}=0$, and (ii) $V^+$ is a constant we can divide by. Fact (i) is *exactly* the statement that the coordinate direction $\partial/\partial X^-$ is **null** — a lightlike axis squares to zero, so its coordinate never appears quadratically; it only appears paired against the clock, whose coefficient is the constant from (ii). In static gauge no such partner exists: the timelike clock is its own metric partner ($\eta_{00}=-1$, all off-diagonal $(0,i)$ entries zero), and every unfrozen field is spacelike with $\eta_{ii}=+1\neq0$, so whichever one you try to solve for appears *squared*. The constraint $\dot X^2+X'^2=0$ can be imposed, but inverting it for any single field costs a square root and still tangles all the others. The null tilt is what converts a quadratic constraint into a linear reconstruction equation; that single algebraic fact is the engine of the entire gauge.
