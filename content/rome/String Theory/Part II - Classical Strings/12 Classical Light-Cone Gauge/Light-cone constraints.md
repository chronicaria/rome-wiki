---
title: "Light-cone constraints"
number: "12.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, constraints]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

In light-cone coordinates the two worldsheet constraints stop being restrictions and become a *formula*: they hand you the longitudinal motion $X^-$ for free, computed from the transverse motion $X^I$ alone.

## The shadow determines the string

Each point of the string has a velocity, and the string through that point has a local stretch. The constraints lock the two together and, crucially, lock the direction: the physical motion is **transverse** — perpendicular to the string. Nothing genuinely new happens *along* the string; sliding a point down its own length just relabels which $\sigma$ sits where.

Think of the transverse wiggling $X^I$ as the string's **shadow** on the screen perpendicular to the light-cone axis. In ordinary coordinates, reconstructing the full motion from a shadow needs a square root (depth is ambiguous). In light-cone coordinates the "depth" coordinate $X^-$ comes back with **no square root at all** — you just divide. One algebraic accident is responsible: the light-cone metric has no $(X^-)^2$ term, so the constraint, which looks quadratic, is secretly *linear* in $X^-$. Given the shadow, the whole string follows.

## Where the constraints come from

Choosing $\tau$ as worldsheet time (in [[Fixing X-plus as worldsheet time]]) and the matching uniform-density $\sigma$ ruler forces two conditions on the worldsheet (natural units, $\hbar=c=1$):

$$ \dot X \cdot X' = 0, \qquad \dot X^2 + X'^2 = 0. \tag{1}$$

> The first says lines of constant $\tau$ and constant $\sigma$ are orthogonal on the worldsheet — geometrically, **the string's velocity is perpendicular to the string**, no sloshing along its own length. The second ties the local velocity to the local stretching. These are the constraints met in static gauge ([[Wave equation and constraints]], Module 11), with units now folded into $\alpha'$.

The useful repackaging is to add and subtract them:

$$ \boxed{\,(\dot X \pm X')^2 = 0\,}. \tag{2}$$

> Expand: $(\dot X \pm X')^2 = \dot X^2 \pm 2\,\dot X\cdot X' + X'^2$. The cross term dies by the first constraint in (1); what remains is $\dot X^2 + X'^2$, which dies by the second. Both signs together carry exactly the two original constraints.

## Reading the constraint in light-cone coordinates

From [[Light-cone coordinates]], the dot product in mostly-plus signature is off-diagonal in the $(+,-)$ sector:

$$ a\cdot b = -a^+ b^- - a^- b^+ + a^I b^I. $$

Write $V^\mu \equiv \dot X^\mu \pm X^{\mu\prime}$, so the constraint (2) is just $V\cdot V = 0$. Applying the dot product with $a=b=V$:

$$ V\cdot V = -2\,V^+ V^- + V^I V^I = 0. $$

Spelling out $V^\pm = \dot X^\pm \pm X^{\pm\prime}$ and $V^I = \dot X^I \pm X^{I\prime}$:

$$ -2\big(\dot X^+ \pm X^{+\prime}\big)\big(\dot X^- \pm X^{-\prime}\big) + \big(\dot X^I \pm X^{I\prime}\big)^2 = 0. \tag{3}$$

> Look at what is missing: there is **no $(V^-)^2$ term**. That term would need $\eta_{--}$, and $\eta_{--}=0$. So (3), though it came from a quadratic $V\cdot V$, is *linear* in $V^- = \dot X^- \pm X^{-\prime}$. The off-diagonal metric is doing all the work.

## Solving for the longitudinal motion

Now use the gauge condition. From [[Fixing X-plus as worldsheet time]], $X^+ = \beta\alpha' p^+\tau$ with $\beta=2$ for open strings and $\beta=1$ for closed, so

$$ \dot X^+ = \beta\alpha' p^+, \qquad X^{+\prime} = 0 \quad\Longrightarrow\quad V^+ = \dot X^+ \pm X^{+\prime} = \beta\alpha' p^+, $$

a **constant**, the same for both signs. Equation (3) is linear in $V^-$ with a constant coefficient, so solving it is a division:

$$ \boxed{\;\dot X^- \pm X^{-\prime} = \frac{1}{2\beta\alpha' p^+}\,\big(\dot X^I \pm X^{I\prime}\big)^2\;}. \tag{4}$$

> This one line *is* the module. The two longitudinal combinations $\dot X^- \pm X^{-\prime}$ are **completely determined** by the transverse data $\dot X^I \pm X^{I\prime}$. No square root was taken — we divided by the constant $\dot X^+$. Contrast static gauge (Module 11), where the constraints could only be imposed, never inverted.

For open strings $\beta = 2$:

$$ \dot X^- \pm X^{-\prime} = \frac{1}{4\alpha' p^+}\big(\dot X^I \pm X^{I\prime}\big)^2 \qquad \text{(open string)}. \tag{5}$$

> The $4$ is where the module's normalization is most often misremembered. It is $2\times 2$: one $2$ from the light-cone dot product $-2V^+V^-$, the other from the open-string value $\dot X^+ = 2\alpha' p^+$.

Two ingredients were both essential:

1. **Light-cone coordinates** — the off-diagonal $(+,-)$ metric killed the $(V^-)^2$ term, making the constraint linear in $X^-$.
2. **Light-cone gauge** — it made $\dot X^+ = \beta\alpha' p^+$ a *constant* we could divide by.

Neither alone cracks it; together they do.

## What this buys: $X^-$ up to one number

Adding and subtracting the two signs of (4) gives both partial derivatives of $X^-$:

$$ \dot X^- = \frac{A+B}{2}, \qquad X^{-\prime} = \frac{A-B}{2}, \qquad A \equiv \dot X^-+X^{-\prime},\ \ B \equiv \dot X^--X^{-\prime}, $$

and by (4) the right-hand sides are known functions of the transverse fields. Knowing both partials of a field on the worldsheet pins it down **up to a single additive constant** $x_0^-$:

$$ X^-(\tau,\sigma) \text{ is fixed by the } X^I, \text{ up to one number } x_0^-. $$

> This is the precise sense in which $X^-$ is *not* an independent dynamical field. The constraints are not extra equations the transverse waves must satisfy after the fact — once $X^I$ solves the wave equation, these formulas *define* $X^-$. See [[Transverse coordinates as physical degrees of freedom]] for the mode-by-mode version; the zero mode of (4), fed through the [[Mass-shell relation]], becomes the mass formula in [[Mode expansions in light-cone gauge]].

> We divided by $p^+$, so the formulas need $p^+ \neq 0$. Physical momentum has $p^0 = E \geq |\vec p|$ (classically $M^2 \geq 0$), so $p^+ = (p^0+p^1)/\sqrt2 \geq 0$, with equality only when $E = -p^1$. Then $E^2 = (p^1)^2 + p^I p^I + M^2$ collapses to $p^I p^I + M^2 = 0$, forcing $M = 0$ and $p^I = 0$: a massless object moving exactly along $-x^1$. Anything else has $p^+ > 0$, and the formalism applies.

## Consistency: the reconstructed $X^-$ is a genuine field

Two derivatives don't automatically come from one function. We assigned $\dot X^-$ and $X^{-\prime}$ independently through $A$ and $B$; for a single field $X^-(\tau,\sigma)$ to exist, they must satisfy the mixed-partials condition

$$ \partial_\sigma \dot X^- = \partial_\tau X^{-\prime}. $$

Check it. With the open-string coefficient $\kappa \equiv 1/(4\alpha' p^+)$, we have $A = \kappa(\dot X^I + X^{I\prime})^2$ and $B = \kappa(\dot X^I - X^{I\prime})^2$. The transverse fields obey the wave equation $\ddot X^I - X^{I\prime\prime}=0$, which factors neatly on the chiral combinations:

$$ (\partial_\tau - \partial_\sigma)(\dot X^I + X^{I\prime}) = \ddot X^I - X^{I\prime\prime} = 0, \qquad (\partial_\tau + \partial_\sigma)(\dot X^I - X^{I\prime}) = \ddot X^I - X^{I\prime\prime} = 0. $$

So $A$ is purely left-moving (a function of $\tau+\sigma$) and $B$ is purely right-moving (a function of $\tau-\sigma$):

$$ (\partial_\sigma - \partial_\tau)A = 0, \qquad (\partial_\sigma + \partial_\tau)B = 0. $$

Feeding these into $\partial_\sigma\dot X^- - \partial_\tau X^{-\prime} = \tfrac12[(\partial_\sigma-\partial_\tau)A + (\partial_\sigma+\partial_\tau)B]$ gives zero.

> The mixed partials agree, so the two formulas reconstruct one honest field $X^-$ from the transverse solution, up to the single constant $x_0^-$. The boundary conditions cooperate too: at a free endpoint $X^{I\prime}=0$, so $A=B$ and $X^{-\prime}=0$ — the reconstructed $X^-$ satisfies its own Neumann condition automatically.

## One notational trap

Two different $\pm$'s live near this material. There are **worldsheet** light-cone coordinates $\sigma^\pm = \tau \pm \sigma$ (used to write the constraint as $(\partial_+X)^2 = (\partial_-X)^2 = 0$ and to define the Virasoro modes $L_n$ — see [[Virasoro constraints]]), and there are **spacetime** light-cone coordinates $x^\pm = (x^0\pm x^1)/\sqrt2$ (the $X^\pm$ of this note). They share the symbol $\pm$ and nothing else. The two-stage story: first *impose* the constraints covariantly, $L_n = 0$ with every component of $X^\mu$ in play; then, after choosing spacetime light-cone gauge, *solve* them for the $-$ components — equation (4). Same physics, different bookkeeping.

## Open questions

- For closed strings the same local solution (4) holds with $\beta = 1$, but wrapping the $\sigma$ circle adds a global consistency condition (level matching). That belongs with the closed-string modules.

## Exercise

The open-string coefficient in (5) is $1/(4\alpha' p^+)$. Redo the two-line argument for a **closed string**, where the gauge fixes $X^+ = \alpha' p^+\tau$ (i.e. $\beta = 1$), and confirm the coefficient becomes $1/(2\alpha' p^+)$ — twice as large. Then say in one sentence which factor changed and why, so you could never misremember the open-string $4$.

> [!success]- Solution
> Start from the light-cone form of the constraint (3), which holds for any $\beta$:
> $$ -2\big(\dot X^+ \pm X^{+\prime}\big)\big(\dot X^- \pm X^{-\prime}\big) + \big(\dot X^I \pm X^{I\prime}\big)^2 = 0. $$
> The gauge choice enters only through $\dot X^+$. For the closed string $X^+ = \alpha' p^+\tau$, so $\dot X^+ = \alpha' p^+$ and $X^{+\prime}=0$, giving $V^+ = \alpha' p^+$. Dividing:
> $$ \dot X^- \pm X^{-\prime} = \frac{1}{2\,\alpha' p^+}\big(\dot X^I \pm X^{I\prime}\big)^2. $$
> This matches the general formula (4), $1/(2\beta\alpha' p^+)$, at $\beta = 1$. Compared with open ($\beta = 2$, coefficient $1/(4\alpha' p^+)$) it is larger by a factor of $2$.
>
> **The one factor that changed:** the $2$ inside $\dot X^+ = 2\alpha' p^+$ (open) versus $\dot X^+ = \alpha' p^+$ (closed) — i.e. $\beta$ itself. The other factor of $2$, from the $-2V^+V^-$ light-cone dot product, is present in **both** cases. So the open-string denominator is $2\beta\alpha'p^+ = 2\cdot 2\cdot\alpha'p^+ = 4\alpha'p^+$: one $2$ is universal (the metric), the other $2$ is $\beta$ (open vs closed).
