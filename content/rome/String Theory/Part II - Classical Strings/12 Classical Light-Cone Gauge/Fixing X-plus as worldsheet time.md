---
title: "Fixing X-plus as worldsheet time"
number: "12.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, gauge-fixing]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Choosing a null direction $n$ in the gauge $n\cdot X = \beta\alpha'(n\cdot p)\,\tau$ locks light-cone time to worldsheet time, $X^+ = \beta\alpha'p^+\tau$ — so $X^+$ stops being an unknown field and becomes the clock.

## Spending the gauge freedom on a clock

The worldsheet coordinates $(\tau,\sigma)$ are labels drawn on the string, and the string does not care which grid we draw. Light-cone gauge spends that relabeling freedom to make one of the string's *own coordinates* the time axis. Instead of asking "where is the string at worldsheet time $\tau$?", we declare that $\tau$ *means* the light-cone time $X^+ = (X^0+X^1)/\sqrt2$ has reached a given value. Time on the sheet and light-cone time in spacetime become the same clock; once $X^+$ is pinned to $\tau$ it is no longer a field to solve for, and that single move is what makes the string exactly solvable in the notes that follow.

Filming a thrown ball, you can label the frames by frame number ($\tau$) or by how far downrange the ball has traveled ($X^+$). The second labels time by a coordinate of the object itself, so that coordinate stops being separately unknown. Downrange distance works where height would fail: a clock must advance monotonically, and height turns around. For the string, $p^+ > 0$ is what keeps $X^+$ ticking forward.

## Why we are allowed to choose

The Nambu–Goto action is **reparameterization invariant**: relabeling $(\tau,\sigma)\to(\tilde\tau,\tilde\sigma)$ leaves the physics unchanged. This is a gauge symmetry — a redundancy in the description, not a symmetry of nature — and it contains two relabelings to fix, one for $\tau$ and one for $\sigma$.

A gauge choice picks one coordinate grid on each worldsheet out of the infinitely many equivalent ones. We add no force and change no string; we choose coordinates in which a dependent variable can be promoted to the independent time variable. The point particle already shows this: the covariant description uses $D$ functions $X^\mu(\tau)$, but one function's worth of that is pure parameter choice.

## The class of gauges

Fix $\tau$ by demanding it equal a linear combination of the spacetime coordinates. Pick a constant covector $n_\mu$ and impose

$$ n\cdot X(\tau,\sigma) = \lambda\,\tau. $$

> At fixed $\tau$ the string lies in the hyperplane $n\cdot x = \lambda\tau$, normal to $n$. So $n$ chooses *which slicing of the worldsheet* counts as "equal time" — different $n$, different notion of simultaneity along the string.

- $n_\mu = (1,0,\dots,0)$ makes $n\cdot X = X^0$: worldsheet time tracks ordinary time. This is the **static gauge**; see [[Static gauge]].
- A *null* $n$ gives the light-cone gauge — the choice this note is about.

Trade $\lambda$ for a cleaner constant built from the conserved component $n\cdot p$ (for a free open string all of $p^\mu$ is conserved; in general we only need $n\cdot p$). Working in natural units $\hbar = c = 1$ with $\tau,\sigma$ dimensionless, the full gauge fixes both relabelings at once:

$$
\boxed{\,
n\cdot X(\tau,\sigma) = \beta\,\alpha'\,(n\cdot p)\,\tau,\qquad
(n\cdot p)\,\sigma = \frac{2\pi}{\beta}\int_0^\sigma d\bar\sigma\, n\cdot\mathcal P^\tau(\tau,\bar\sigma)
\,}
\tag{1}
$$
$$
\beta = \begin{cases} 2 & \text{open strings} \\ 1 & \text{closed strings.}\end{cases}
$$

> With $n$ on both sides, only its direction matters — its overall scale cancels. The first equation fixes the $\tau$ slicing: the clock. The second lays the ruler: the $n\cdot p$-momentum accumulated between $0$ and $\sigma$ (density $\mathcal P^{\tau\mu}$, from [[Variation of the worldsheet area]]) must grow linearly in $\sigma$. Differentiating gives $n\cdot p = \frac{2\pi}{\beta}\,n\cdot\mathcal P^\tau$, so that density is constant along the string — a uniform ruler. Evaluating the second equation at the far end, where the integral is all of $n\cdot p$, sets the ranges $\sigma\in[0,2\pi/\beta]$: $[0,\pi]$ open, $[0,2\pi]$ closed. The factor $\alpha'$ keeps $\tau$ dimensionless.

So the gauge does two jobs: the first equation makes a spacetime coordinate into a clock; the second lays a uniform $\sigma$-ruler along each clock slice. Both are needed before the clean constraints of [[Light-cone constraints]] appear.

Here $\alpha'$ is the Regge slope, the theory's one dimensionful parameter (tension $T_0 = 1/(2\pi\alpha')$, string length $\ell_s = \sqrt{\alpha'}$). Everything below is dimensional analysis around it — no QFT needed.

## Light-cone coordinates

From $x^0$ (time) and one chosen spatial direction $x^1$, define (see [[Light-cone coordinates]])

$$ x^\pm = \tfrac{1}{\sqrt 2}\big(x^0 \pm x^1\big). \tag{2} $$

The fact that matters is the metric. With mostly-plus signature $\eta = \mathrm{diag}(-,+,+,\dots)$, invert (2) to $a^0 = \tfrac{1}{\sqrt2}(a^++a^-)$, $a^1 = \tfrac{1}{\sqrt2}(a^+-a^-)$ and compute:

$$ a\cdot b = -a^0 b^0 + a^1 b^1 + a^I b^I = -a^+ b^- - a^- b^+ + a^I b^I. $$

> The $(+,-)$ block is off-diagonal: $\eta_{+-} = \eta_{-+} = -1$, with *no* $(a^+)^2$ or $(a^-)^2$ term. This single fact drives the whole module — it lets a quadratic constraint be solved for the $-$ component *linearly*, no square root.

The transverse coordinates are everything left over:
$$ X^I = (X^2,\dots,X^{D-1}), \qquad I = 2,\dots,D-1, $$
which is $D-2$ of them.

## Imposing the gauge: $X^+ \propto \tau$

Choose $n$ to *be* the light-cone direction, as the covector

$$ n_\mu = \Big(\tfrac{1}{\sqrt 2},\, \tfrac{1}{\sqrt 2},\, 0,\dots,0\Big). \tag{3} $$

This is null: raising with mostly-plus gives $n^\mu = (-\tfrac1{\sqrt2},\tfrac1{\sqrt2},0,\dots)$, so $n_\mu n^\mu = -\tfrac12+\tfrac12 = 0$. Contracting the covector (3) — as displayed, without raising — with $X$ and with $p$:

$$ n\cdot X = \frac{X^0 + X^1}{\sqrt 2} = X^+, \qquad n\cdot p = \frac{p^0 + p^1}{\sqrt 2} = p^+. \tag{4} $$

The null slicing still cuts the string along sensible directions: a tangent $b^\mu$ to an equal-$\tau$ slice obeys $n\cdot b = 0$, so $b^1 = -b^0$ and $b^2 = -(b^0)^2+(b^1)^2+b^Ib^I = b^Ib^I \geq 0$ — the slices are spacelike (at worst null), never timelike.

The gauge condition (1) with $\beta = 2$ (open) now reads

$$ \boxed{\,X^+(\tau,\sigma) = 2\alpha'\,p^+\,\tau\,}. $$

> Worldsheet time $\tau$ *is* the light-cone time $X^+$, up to the constant $2\alpha' p^+$ (positive, so the clock runs forward). $X^+$ is no longer an unknown function — it is fixed to be linear in $\tau$, with no center-of-mass position and no oscillators:
> $$ x_0^+ = 0, \qquad \alpha_n^+ = \alpha_{-n}^+ = 0 \quad (n\geq1). $$

One of the $D$ coordinate fields is thus entirely eaten by the gauge — the redundant parameter direction, now made explicit for the string. This is why the physical count will come out to $D-2$: this note kills one coordinate ($X^+$), and the constraints in [[Light-cone constraints]] will kill a second ($X^-$).

The second gauge condition, in light-cone variables, becomes

$$ p^+\,\sigma = \frac{2\pi}{\beta}\int_0^\sigma d\bar\sigma\, \mathcal P^{\tau +}(\tau,\bar\sigma). $$

> For open strings ($\beta = 2$) this forces $\mathcal P^{\tau +} = p^+/\pi$, constant along the string: every equal-$\tau$ slice carries a uniform density of $p^+$. This is the quieter $\sigma$-half of light-cone gauge, and it feeds directly into [[Light-cone constraints]].

## The price: no manifest Lorentz covariance

A null $n$ is exactly what makes $n\cdot X = X^+$. The cost: $n$ singles out the $x^1$ axis, so the gauge condition looks different in different Lorentz frames — light-cone gauge is **not Lorentz covariant**. Classically this is harmless: the *physics* stays Lorentz invariant, only our description hides it. It becomes the central issue at quantization, where demanding that the hidden Lorentz generators still close forces $D = 26$.

## Open questions

- We assumed the space-filling open-string setup, so all of $p^\mu$ (hence $p^+$) is conserved. For lower-dimensional D-branes, light-cone gauge needs $n$ chosen so $n\cdot p$ stays conserved along the Neumann directions; deferred to the D-brane modules.
- The gauge uses $p^+$ as a scale, and the next note divides by it. Why $p^+ > 0$ holds for every physical state except a massless particle aimed exactly along $-x^1$ is settled in [[Light-cone constraints]].

## Exercise

The boxed result $X^+ = 2\alpha' p^+\tau$ has the factor $2$ for the **open** string. Redo the substitution for a **closed** string ($\beta=1$) and state the analogous result. Then verify the null vector by lowering: given the raised null vector $n^\mu=(-\tfrac1{\sqrt2},\tfrac1{\sqrt2},0,\dots)$, lower it with $\eta=\mathrm{diag}(-,+,\dots)$ and confirm you recover the covector (3) — so that $n\cdot X=X^+$ regardless of which form you were handed.

> [!success]- Solution
> **Closed string.** Set $\beta=1$ in the first equation of (1). With $n$ the same null direction, $n\cdot X=X^+$ and $n\cdot p=p^+$ from (4) are unchanged (they do not depend on $\beta$). So
> $$ X^+(\tau,\sigma) = \alpha'\,p^+\,\tau, $$
> exactly half the open-string coefficient. The factor $2$ vs $1$ is the *only* difference; it tracks the doubled range $\sigma\in[0,2\pi]$ chosen for closed strings, so that the $p^+$-density comes out uniform on that longer ruler. $X^+$ is again pure clock: no $x_0^+$, no oscillators.
>
> **Lowering the null vector.** With $n^\mu=(-\tfrac1{\sqrt2},\tfrac1{\sqrt2},0,\dots)$, apply $n_\mu=\eta_{\mu\nu}n^\nu$:
> $$ n_0 = \eta_{00}\,n^0 = (-1)\big(-\tfrac1{\sqrt2}\big)=\tfrac1{\sqrt2},\qquad n_1=\eta_{11}\,n^1=(+1)\big(\tfrac1{\sqrt2}\big)=\tfrac1{\sqrt2}, $$
> and $n_I=0$. That is the covector (3). Check nullity either way: $n_\mu n^\mu = \tfrac1{\sqrt2}\!\cdot\!(-\tfrac1{\sqrt2})+\tfrac1{\sqrt2}\!\cdot\!\tfrac1{\sqrt2}=-\tfrac12+\tfrac12=0$. Because $n\cdot X=n_\mu X^\mu=\tfrac1{\sqrt2}(X^0+X^1)=X^+$ uses the *covector*, both presentations give the same contraction — the sign only bites if you mistake the displayed downstairs components for upstairs ones.
