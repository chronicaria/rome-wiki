---
title: Light-cone coordinates
number: "2.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, light-cone]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Tilt the $(x^0,x^1)$ axes onto the two light rays through the origin, $x^\pm=(x^0\pm x^1)/\sqrt2$. In this null basis the Minkowski metric goes purely off-diagonal — and the mass-shell constraint turns linear in the light-cone energy.

Ordinary spacetime axes measure "how much time" and "how much space" separately. Light-cone axes instead measure position *along the two light rays* — the directions in which time and space cancel to zero interval. Aligning the coordinates with the rays trades the mixed signs of the interval for a single cross-term, and everything downstream — a square-root-free energy, the tractable quantization of the string — is the payoff of this one change of basis.

## Definition

Pick one spatial direction, $x^1$, and mix it with time:

$$ x^+ \equiv \frac{1}{\sqrt2}\left(x^0 + x^1\right), \qquad x^- \equiv \frac{1}{\sqrt2}\left(x^0 - x^1\right). \tag{1}$$

Adding and subtracting inverts this:

$$ x^0=\frac{x^++x^-}{\sqrt2}, \qquad x^1=\frac{x^+-x^-}{\sqrt2}. $$

The transverse coordinates $x^I$, $I=2,3$, are untouched, so the full set is $(x^+,x^-,x^2,x^3)$; in $D$ spacetime dimensions the transverse range is $I=2,\dots,D-1$ and nothing below changes. The $1/\sqrt2$ is a deliberate normalization: it makes the metric coefficients come out $\pm1$ instead of dragging along factors of $2$, as we verify below.

**Why "light-cone."** A photon moving right along $x^1$ covers distance $ct$ in time $t$, and with $x^0=ct$ ($c$ stays explicit in this module) its worldline reads $x^1=x^0$. So $x^-=0$ all along its path: the $x^+$-axis *is* the worldline of a right-moving light ray. A left-moving photon has $x^1=-x^0$, so $x^+=0$: the $x^-$-axis is the left-moving ray. The new axes are the light rays themselves, tilted $45^\circ$ from the old $x^0,x^1$ axes — hence the light *cone*.

We call $x^+$ the **light-cone time** and $x^-$ a light-cone spatial coordinate. (Which one is "time" is pure convention; this is the standard choice.)

> [!warning] This is a change of coordinates, not a Lorentz boost.
> A Lorentz transformation keeps the metric in the *same* diagonal $\mathrm{diag}(-1,+1,+1,+1)$ form. Here we deliberately rewrite the metric in a null basis, where it looks off-diagonal. There is no boost taking $(x^0,x^1)\mapsto(x^+,x^-)$. The practical upshot: "light-cone velocity" $dx^-/dx^+$ can exceed $1$ or be infinite without violating relativity — computed in the final section.

## The metric becomes off-diagonal

Take differentials of (1) and multiply:

$$ 2\,dx^+ dx^- = (dx^0+dx^1)(dx^0-dx^1) = (dx^0)^2 - (dx^1)^2 . \tag{2}$$

The $\tfrac1{\sqrt2}$ from each factor combines to a clean $2\,dx^+dx^-$ — that is what the normalization buys us. Substitute (2) into the invariant interval $-ds^2=-(dx^0)^2+(dx^1)^2+(dx^2)^2+(dx^3)^2$ (mostly-plus signature):

$$ \boxed{\,-ds^2 = -2\,dx^+ dx^- + (dx^2)^2 + (dx^3)^2\,} $$

The whole time–space part is now a single cross-term $-2\,dx^+dx^-$: **no $(dx^+)^2$ and no $(dx^-)^2$.** That is the structural point of the null basis — the quadratic form is *bilinear* between $+$ and $-$, never quadratic in either alone.

Reading off $-ds^2=\hat\eta_{\mu\nu}\,dx^\mu dx^\nu$ over indices $+,-,2,3$:

$$ \hat\eta_{+-} = \hat\eta_{-+} = -1, \qquad \hat\eta_{++} = \hat\eta_{--} = 0, \qquad \hat\eta_{\pm I}=0, $$

$$ \hat\eta_{\mu\nu} = \begin{pmatrix} 0 & -1 & 0 & 0 \\ -1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}. $$

The geometry lives entirely in the off-diagonal $-1$'s. This matrix is its own inverse, so the inverse metric $\hat\eta^{\mu\nu}$ has the *same* nonzero entries. Consequently raising or lowering a light-cone index **swaps $+$ and $-$** on top of flipping the sign — made precise in (5) below.

## Vectors and the scalar product

Any four-vector transforms the same way as the coordinates:

$$ a^+ = \frac{1}{\sqrt2}(a^0 + a^1), \qquad a^- = \frac{1}{\sqrt2}(a^0 - a^1). \tag{3}$$

Its Minkowski scalar product, written in light-cone components, is

$$ a\cdot b = \hat\eta_{\mu\nu}a^\mu b^\nu = -a^+ b^- - a^- b^+ + a^I b^I . \tag{4}$$

The time–space piece is $-(a^+b^-+a^-b^+)$: symmetric under exchanging the $+$ and $-$ roles, with no $a^+b^+$ or $a^-b^-$ term. This is the ordinary product in disguise — expanding the definitions,

$$
\begin{aligned}
-a^+b^- - a^-b^+
&= -\tfrac12(a^0+a^1)(b^0-b^1)-\tfrac12(a^0-a^1)(b^0+b^1)\\
&= -a^0b^0+a^1b^1 ,
\end{aligned}
$$

where the cross-terms $a^0b^1$ and $a^1b^0$ cancel between the two halves. Adding the transverse $a^Ib^I=a^2b^2+a^3b^3$ recovers the mostly-plus product $-a^0b^0+a^1b^1+a^2b^2+a^3b^3$, as it must.

**Lowering indices.** From the metric rows,

$$ a_+ = \hat\eta_{+\nu}a^\nu = \hat\eta_{+-}a^- = -a^-, \qquad a_- = \hat\eta_{-\nu}a^\nu = \hat\eta_{-+}a^+ = -a^+ . \tag{5}$$

So "lowering a plus gives minus a minus." Unlike the ordinary $a_0=-a^0$, the *label* flips too. This has a physical bite downstream: the coordinate $x^+$ is conjugate to the covariant component $p_+=-p^-$, which is why the light-cone energy turns out to be $p^-$, not $p^+$ — worked out in [[Solving the mass shell in light-cone coordinates]]. (Convention: keep $+,-$ always **up**; only lower them when the sign swap is written out.)

## The self-product of the momentum

Set $a=b=p$ in (4), with $p^\mu$ the four-momentum:

$$ p\cdot p = -2\,p^+ p^- + p^Ip^I = -2\,p^+ p^- + p_T^2 , \tag{6}$$

with $p_T^2=(p^2)^2+(p^3)^2$ the transverse momentum squared. The factor of $2$ counts the two off-diagonal terms $\hat\eta_{+-}p^+p^-$ and $\hat\eta_{-+}p^-p^+$. Crucially, (6) is **linear in $p^-$** — there is no $(p^-)^2$ because $\hat\eta_{--}=0$. So imposing the mass shell $p\cdot p=-m^2c^2$ from [[Minkowski metric and the mass shell]] and solving for $p^-$ takes one division, not a square root — cashed in at [[Solving the mass shell in light-cone coordinates]].

## Light-cone velocity

Take a particle moving along $x^1$ with speed $\beta=v/c$, so $dx^1=\beta\,dx^0$ along its worldline. Its light-cone "velocity" is the slope of $x^-$ against light-cone time $x^+$:

$$ \frac{dx^-}{dx^+} = \frac{dx^0-dx^1}{dx^0+dx^1} = \frac{1-\beta}{1+\beta}. $$

Three limits show how strange this ratio is:

- **Right-moving light** ($\beta=1$): $dx^-/dx^+=0$. Light moving right doesn't move at all in light-cone coordinates — it just advances $x^+$.
- **A particle at rest** ($\beta=0$): $dx^-/dx^+=1$. Standing still becomes unit light-cone speed.
- **Left-moving light** ($\beta=-1$): $dx^-/dx^+=\infty$. Infinite light-cone velocity, and no contradiction — this is a change of coordinates, not a boost.

This is the payoff of the null basis: it trades the sign-indefinite quadratic geometry of relativity for something with an almost *nonrelativistic* flavor, where $x^+$ plays the role of an ordinary time. That is exactly the setting in which the string's constraints become solvable.

## Open questions

- Light-cone time $x^+$ is frozen ($x^+=0$) for a ray moving exactly in the $-x^1$ direction — the left-moving photon. What breaks if we try to use $x^+$ as time for that ray?
- The later **light-cone gauge** excludes the $p^+=0$ sector. Why must it, and which motions live there?

## Exercise

A vector $n^\mu$ points purely along light-cone time: $n^+=1$, $n^-=n^2=n^3=0$. (a) Compute its norm $n\cdot n$ and classify it (timelike / spacelike / null). (b) Find its lowered components $n_\mu$. (c) A particle at rest, $p^\mu=(mc,0,0,0)$, has what light-cone components $p^\pm$, and what is $p\cdot p$ in light-cone form — does it match $-m^2c^2$?

> [!success]- Solution
> **(a)** Using (4) with $a=b=n$: every term of $-n^+n^- - n^-n^+ + n^In^I$ contains a factor that is zero. So $n\cdot n=0$ — **null**. This is the geometric meaning of the light-cone axes: the $x^+$-axis is a light ray, and light rays have zero interval.
>
> **(b)** By the lowering rule (5): $n_+=-n^-=0$, $n_-=-n^+=-1$, $n_2=n_3=0$. So $n_\mu=(n_+,n_-,n_2,n_3)=(0,-1,0,0)$ — the label swap on display: an "all-plus" vector lowers to an "all-minus" covector.
>
> **(c)** By the component rule (3): $p^+=p^-=\tfrac{1}{\sqrt2}(mc\pm0)=\tfrac{mc}{\sqrt2}$. Then (6) gives
> $$ p\cdot p=-2p^+p^-+0=-2\cdot\frac{mc}{\sqrt2}\cdot\frac{mc}{\sqrt2}=-2\cdot\frac{m^2c^2}{2}=-m^2c^2.\ \checkmark $$
> The factor of $2$ in (6) is cancelled exactly by the two factors of $1/\sqrt2$ in the components — a sign check that the $\sqrt2$ normalization and the $-2$ cross-term are consistent.
