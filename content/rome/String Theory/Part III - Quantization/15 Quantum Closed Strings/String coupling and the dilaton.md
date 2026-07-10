---
title: String coupling and the dilaton
number: "15.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, dilaton]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The dilaton $\phi$ — the trace state at the massless closed-string level — sets the strength of every string interaction: the string coupling is $g_s=e^{\langle\phi\rangle}$. How strongly strings talk to each other is not a number dialed in by hand; it is the value of a **dynamical field**.

Two consequences follow.

- **$g_s$ is not a constant of the theory.** It is set by a field with its own equations of motion — in principle *computed*, not measured. That is the property you want in a candidate theory of everything.
- **The perturbation series is a sum over topologies.** Each handle added to a closed-string worldsheet costs a factor $g_s^2$, so at weak coupling ($g_s\ll1$) the simplest surfaces dominate, just as low-order loop diagrams dominate a weakly coupled field theory.

## What a coupling constant is: the electromagnetic analogy

A coupling constant is a dimensionless number that controls how strong an interaction is. We set $\hbar=c=1$ throughout, with Heaviside–Lorentz units for electromagnetism; the textbook case is then the fine-structure constant,
$$\alpha\equiv\frac{e^2}{4\pi}\simeq\frac{1}{137}.$$
It fixes, for instance, the hydrogen ground-state binding energy: with Bohr radius $a_0=4\pi/(m_e e^2)=1/(\alpha m_e)$,
$$E=\frac{e^2}{4\pi}\,\frac{1}{2a_0}=\frac12\,\alpha^2 m_e\simeq 13.6\ \text{eV}.$$
Send $\alpha\to0$ and electromagnetism switches off: $a_0\to\infty$, $E\to0$, the atom unbinds. A dimensionless coupling is the on/off knob for an interaction.

## The string coupling $g_s$

String theory has one **dimensionful** parameter, $\alpha'$ (equivalently the string length $\ell_s=\sqrt{\alpha'}$), and one **dimensionless** coupling for closed strings, $g_s$. If $g_s=0$, strings do not interact — and since the graviton is a closed-string state ([[Graviton antisymmetric tensor and dilaton]]), switching off string interactions switches off gravity: Newton's constant must vanish with $g_s$. More sharply, the leading gravitational interaction between two sources is a single closed string exchanged — emitted at one, absorbed at the other — and each emission costs a factor of $g_s$ (the topology count below confirms this), so $G\sim g_s^2$. Dimensional analysis supplies the powers of $\alpha'$.

**Dimensional check.** In $D$ spacetime dimensions $G^{(D)}$ has units of $L^{D-2}$ — it is the $D$-dimensional Planck length to the power $D-2$. With $[\alpha']=L^2$ and $G\propto g_s^2$, in $D=26$,
$$G^{(26)}\sim g_s^2\,(\alpha')^{12},$$
since $(\alpha')^{12}$ carries $L^{24}=L^{D-2}$ and $12=(D-2)/2$ is the only power that works. For the superstring ($D=10$) the same logic gives
$$G^{(10)}=\big(\ell_P^{(10)}\big)^8\sim g_s^2(\alpha')^4\ \Rightarrow\ \ell_P^{(10)}\sim g_s^{1/4}\sqrt{\alpha'}=g_s^{1/4}\,\ell_s.$$
At weak coupling the string is longer than the Planck length ($g_s\ll1\Rightarrow\ell_P\ll\ell_s$): the extended object sits above the scale where quantum gravity would otherwise be violent.

## Why $g_s=e^{\phi}$: the dilaton–curvature coupling

Turning on a background of the string's own massless fields adds terms to the worldsheet action, and the dilaton's term is unlike the others: it couples $\phi(X)$ to the **intrinsic curvature of the worldsheet** $\Sigma$,
$$S_\phi=\frac{1}{4\pi}\int_\Sigma d^2\sigma\,\sqrt h\,\phi(X)\,R^{(2)}$$
(Euclidean worldsheet, so the path-integral weight is $e^{-S}$). Here $R^{(2)}$ is the Ricci scalar of the surface the string sweeps out — not of spacetime. Of the three massless fields ($G_{\mu\nu}$, $B_{\mu\nu}$, $\phi$), only the dilaton couples to worldsheet geometry rather than to $\partial X$.

Take a **constant** background $\phi(X)=\phi_0$. Then $\phi_0$ pulls out of the integral, and the Gauss–Bonnet theorem says what remains is a pure topological number, the **Euler characteristic**:
$$\frac{1}{4\pi}\int_\Sigma \sqrt h\,R^{(2)}=\chi(\Sigma),\qquad \chi=2-2g\ \ (\text{closed, oriented, genus }g).$$
So $S_\phi=\phi_0\,\chi(\Sigma)$: a constant dilaton contributes nothing local — it counts topology. Each worldsheet in the path integral is weighted by $e^{-S_\phi}$, so
$$\boxed{\;e^{-S_\phi}=e^{-\phi_0\chi(\Sigma)}=g_s^{-\chi(\Sigma)},\qquad g_s\equiv e^{\phi_0}.\;}$$
A closed surface of genus $g$ therefore carries weight $g_s^{-\chi}=g_s^{2g-2}$:

| surface | genus $g$ | $\chi$ | weight $g_s^{-\chi}$ | role |
|---|---|---|---|---|
| sphere | $0$ | $2$ | $g_s^{-2}$ | tree level |
| torus | $1$ | $0$ | $g_s^{0}$ | one loop |
| double torus | $2$ | $-2$ | $g_s^{2}$ | two loops |

Each added handle multiplies the amplitude by $g_s^2$. This is the closed-string loop expansion: handles play the role of loops and $g_s^2$ is the expansion parameter. A handle is an emitted and reabsorbed closed string, so its cost $g_s^2$ splits as one $g_s$ per emission — the gravitational-exchange count from above, now made precise. (Vertex operators for the external strings contribute a fixed power of $g_s$ common to all topologies; the genus dependence is the robust part.)

This is also why the coupling is $e^{\phi}$ rather than, say, $\phi$ itself: the dilaton enters amplitudes only through $e^{-\phi_0\chi}$, so each handle multiplies by $(e^{\phi_0})^2$, never by a power of $\phi_0$. Where the dilaton background is large and positive the coupling is strong ($g_s\gg1$ and the genus expansion breaks down); where it is very negative the coupling is weak ($g_s\ll1$ and perturbation theory is reliable). A non-constant background even lets the coupling vary from place to place in spacetime.

## The payoff: the coupling is a field

Add to a free Hamiltonian $H_0$ an interaction $g\,H_{\text{int}}$ with $g$ dimensionless. If $g$ is declared a constant, you must fix it by measurement. If instead $g$ is a dynamical field with its own dynamics $H_g$, you cannot fix it by hand even if you want to: the equations of motion of $H_0+g\,H_{\text{int}}+H_g$ decide its value. String theory is exactly the second case — the closed-string coupling is the vacuum value of the dilaton:
$$g_s=e^{\langle\phi\rangle}.$$
So $g_s$ is not an adjustable parameter of the theory; it could in principle be *calculated*. The humble trace scalar is operationally the most consequential of the three massless states: the graviton supplies gravity, but the dilaton decides how strongly everything — gravity included — couples.

The catch: at this order nothing generates a potential for $\phi$, so $\langle\phi\rangle$ is a flat direction — every constant value solves the equations of motion equally well. Pinning it down is the moduli-stabilization problem.

## Two relations worth carrying

- **Open vs closed coupling: $g_o^2\sim g_s$.** In a theory with both, the open coupling is not independent. With boundaries, Gauss–Bonnet gives $\chi=2-2g-b$, so each boundary costs one power of $g_s$: the disc ($\chi=1$) carries $g_s^{-1}$, the annulus ($\chi=0$) carries $g_s^{0}$. Read the same step diagrammatically: an open string propagates on a strip — topologically a disc — and its one-loop self-energy, where the string splits into two open strings that rejoin, is an annulus. That is one extra boundary, hence one factor of $g_s$; but as a diagram it contains two three-open-string vertices, hence $g_o^2$. Matching the two counts gives $g_o^2\sim g_s$. (The same annulus, read in the other channel, is a single closed string exchanged between the two boundaries — an open-string loop secretly contains gravity.)
- **Four-dimensional Newton constant.** Curl up 6 of the 10 dimensions on a volume $V^{(6)}$: $G\sim G^{(10)}/V^{(6)}$. For a compactification of fixed volume in string units, $G\sim g_s^2\,\alpha'$. The observed 4D gravitational strength is tied to both $g_s$ and the size of the hidden dimensions.

## Connection to the spectrum

The dilaton entered this module as the trace part $S'\delta_{IJ}$ of the massless tensor decomposition ([[Graviton antisymmetric tensor and dilaton]], [[Closed-string mass formula]]). A single scalar in the spectrum governing the global coupling has no analogue in point-particle field theory, where couplings are just numbers in the Lagrangian. The dilaton is the bridge from the *kinematics* of the spectrum (what states exist) to the *dynamics* of interactions (how strongly they talk).

## Open questions

- The normalization of $\phi$, the string-frame/Einstein-frame distinction, and the full spacetime effective action are later sigma-model topics; this note fixes only the scaling.
- Why the dilaton potential is flat at leading order, and how a realistic vacuum stabilizes $\langle\phi\rangle$, is the moduli-stabilization problem.

## Exercise

Using only Gauss–Bonnet, show that adding one handle to an oriented worldsheet multiplies a string amplitude by $g_s^2$, and that adding one boundary (an open-string effect) multiplies it by $g_s$. Then explain in one line why this makes the sphere the *leading* closed-string diagram rather than a subleading one.

> [!success]- Solution
> A constant dilaton contributes $S_\phi=\phi_0\,\chi$, so the worldsheet weight is $e^{-\phi_0\chi}=g_s^{-\chi}$ with $g_s=e^{\phi_0}$. For a surface with $g$ handles and $b$ boundaries, Gauss–Bonnet gives
> $$\chi=2-2g-b.$$
> (With boundaries, $\chi$ acquires a geodesic-curvature term $\frac{1}{2\pi}\oint ds\,k$ alongside the bulk integral, and the dilaton coupling contains the matching boundary piece, so $S_\phi=\phi_0\chi$ still holds.)
>
> **Add one handle** ($g\to g+1$): $\chi\to\chi-2$, so the weight changes by
> $$g_s^{-(\chi-2)}/\,g_s^{-\chi}=g_s^{2}.$$
> **Add one boundary** ($b\to b+1$): $\chi\to\chi-1$, so the weight changes by $g_s^{-(\chi-1)}/g_s^{-\chi}=g_s^{1}$. (The disc, $\chi=1$, carries $g_s^{-1}$; the annulus, $\chi=0$, carries $g_s^{0}$ — one boundary more, one power of $g_s$.)
>
> **Why the sphere leads.** The weight is $g_s^{-\chi}$, and $\chi$ is largest ($=2$) for the sphere, so the sphere carries the most negative power of $g_s$ — the largest weight when $g_s\ll1$. Every handle or boundary lowers $\chi$, raises the power of $g_s$, and suppresses the diagram: the genus-0 sphere is tree level, and the expansion in $g_s^2$ is an expansion in handles.
