---
title: Notation Sheet
created: 2026-07-01
source: llm
status: evergreen
tags: [meta, reference, physics, string-theory]
---
# Notation Sheet — one vault, one author


The binding conventions for every note in this course. Fixed during the publish pass (Fable 5, 2026-07-01) from a survey of all 27 modules; where notes disagreed, the majority/Zwiebach-compatible choice won. **A note that deviates from this sheet is wrong, even if its physics is right.**

## Metric, units, indices

- **Signature: mostly-plus**, $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,\dots,+1)$, written with `\mathrm{diag}`. State "(mostly-plus signature)" once per note where a sign depends on it. Mass shell: $p^2=p_\mu p^\mu=-m^2$ (with $c=1$).
- **Units.** Modules 1–11 may keep $c$ (they teach relativity); from module 12 on, $\hbar=c=1$ unless the note is explicitly about restoring units. Each note states its convention at its first formula that depends on it. Never mix within a note.
- **Light-cone:** $x^\pm=\frac{1}{\sqrt2}(x^0\pm x^1)$, $\eta_{+-}=\eta_{-+}=-1$, $a\cdot b=-a^+b^--a^-b^++a^Ib^I$, $p^-=\dfrac{p^Ip^I+m^2}{2p^+}$.
- **Indices:** spacetime $\mu,\nu,\rho$ with $\mu=0,\dots,D-1$ and $D=d+1$; ordinary spatial $i,j$; **transverse $I,J,K$ with range $I=2,\dots,D-1$** (never $1,\dots,D-2$); worldsheet coordinates $(\tau,\sigma)$ with **Greek worldsheet tensor indices $\alpha,\beta$** ($h_{\alpha\beta}$, never Latin $a,b$); brane world-volume $m,n=0,\dots,p$ and brane-transverse $a,b=p+1,\dots,d$; holomorphic $z,\bar z$ with weights $(h,\bar h)$.
- $\sigma$-ranges: open string $\sigma\in[0,\pi]$; closed string $\sigma\in[0,2\pi]$. Dot $=\partial_\tau$, prime $=\partial_\sigma$.

## The one dimensionful parameter

- $\alpha'$ is primary. String length $\ell_s=\sqrt{\alpha'}$. **String tension is $T_0$** (subscript always — $T$ alone is reserved for temperature and stress tensors): $T_0=\dfrac{1}{2\pi\alpha'}$ in natural units, $T_0=\dfrac{\hbar c}{2\pi\alpha'}$ with units restored. Always parenthesize: $1/(2\pi\alpha')$, never $1/2\pi\alpha'$.
- Actions: $S_{\rm NG}=-\dfrac{1}{2\pi\alpha'}\displaystyle\int d\tau\,d\sigma\sqrt{-\gamma}$ (natural units; $-\frac{T_0}{c}\int d\tau\,d\sigma\,\sqrt{-\gamma}$ with units), $\gamma_{\alpha\beta}=\partial_\alpha X\cdot\partial_\beta X$; $S_{\rm P}=-\dfrac{1}{4\pi\alpha'}\displaystyle\int d^2\sigma\sqrt{-h}\,h^{\alpha\beta}\,\partial_\alpha X\cdot\partial_\beta X$.

## Oscillators

- Mode expansion (open, NN, light-cone): $X^I(\tau,\sigma)=x_0^I+2\alpha'p^I\tau+i\sqrt{2\alpha'}\displaystyle\sum_{n\neq0}\frac{1}{n}\,\alpha_n^I\cos(n\sigma)\,e^{-in\tau}$, packaged as $\dot X^I\pm X'^I=\sqrt{2\alpha'}\sum_{n\in\mathbb Z}\alpha_n^I e^{-in(\tau\pm\sigma)}$.
- Zero modes: **open** $\alpha_0^I=\sqrt{2\alpha'}\,p^I$; **closed** $\alpha_0^\mu=\bar\alpha_0^\mu=\sqrt{\alpha'/2}\,p^\mu$.
- Commutators: $[\alpha_m^I,\alpha_n^J]=m\,\delta^{IJ}\delta_{m+n,0}$ (transverse; covariantly $m\,\eta^{\mu\nu}\delta_{m+n,0}$). Ladder form: $\alpha_n^I=\sqrt n\,a_n^I$, $\alpha_{-n}^I=\sqrt n\,a_n^{I\dagger}$ ($n\ge1$), $[a_m^I,a_n^{J\dagger}]=\delta_{mn}\delta^{IJ}$.
- **Closed-string left-movers are barred** ($\bar\alpha_n$, $\bar L_n$, $\bar N^\perp$, $\bar T(\bar z)$, $\bar h$, $\bar c$); unbarred = right-movers. **Never tildes** for the antiholomorphic sector.
- Level operator: $N^\perp=\sum_{n\ge1}\alpha_{-n}^I\alpha_n^I=\sum_{n\ge1}n\,a_n^{I\dagger}a_n^I$. Plain $N$ only in generic counting contexts (partitions), defined locally.
- Light-cone Fock ground state: $|p^+,\vec p_T\rangle$ in light-cone quantization contexts; the shorthand $|0;p\rangle$ is allowed in brane/spectrum notes if identified on first use. Canonical excited-state form uses $\alpha_{-n}^I$ (e.g. photon level: $\alpha_{-1}^I|p^+,\vec p_T\rangle$); the $a^\dagger$ form may appear beside it with the $\sqrt n$ conversion stated.

## Constraints, Virasoro, central charge

- $L_n^\perp=\frac12\sum_{p\in\mathbb Z}\alpha_{n-p}^I\alpha_p^I$; $\sqrt{2\alpha'}\,\alpha_n^-=\frac{1}{p^+}L_n^\perp$ (open); $L_0^\perp=\alpha'p^Ip^I+N^\perp$ (open), $L_0^\perp=\frac{\alpha'}{4}p^Ip^I+N^\perp$ (closed, with barred twin).
- Virasoro algebra: $[L_m,L_n]=(m-n)L_{m+n}+\frac{c}{12}m(m^2-1)\delta_{m+n,0}$.
- $TT$ OPE: $T(z)T(w)\sim\frac{c/2}{(z-w)^4}+\frac{2T(w)}{(z-w)^2}+\frac{\partial T(w)}{z-w}$. Free-boson propagator: $\partial X^\mu(z)\,\partial X^\nu(w)\sim-\frac{\alpha'}{2}\frac{\eta^{\mu\nu}}{(z-w)^2}$.
- **Central charges: $c_{\text{matter}}=D$, $c_{\text{gh}}=-26$** (these two symbols exactly), total $c_{\text{matter}}+c_{\text{gh}}=D-26$. Trace anomaly: $\langle T^\alpha{}_\alpha\rangle=-\frac{c}{12}R$.

## Mass formulas and the intercept

- **$a$ is the additive normal-ordering constant**: $\alpha'M^2=N^\perp+a$ with $a=-\frac{D-2}{24}\to-1$ at $D=26$. Never write $\alpha'M^2=N^\perp-a$ with $a=+1$; where "intercept" language is needed, the intercept is $-a=1$.
- Canonical results: **open** $\alpha'M^2=N^\perp-1$; **closed** $M^2=\frac{2}{\alpha'}(N^\perp+\bar N^\perp-2)$ with level matching $N^\perp=\bar N^\perp$, equivalently $\frac{\alpha'}{4}M^2=N^\perp-1$.
- Lorentz anomaly commutator is written $[M^{-I},M^{-J}]$ (minus first).
- Compactified (radius $R$): $p=n/R$, $w=\frac{mR}{\alpha'}$, $p_{L,R}=p\pm w$, T-dual radius $\tilde R=\alpha'/R$, self-dual $R^*=\sqrt{\alpha'}=\ell_s$.
- Hagedorn: $kT_H=\frac{1}{4\pi\sqrt{\alpha'}}$. String coupling $g_s$ (subscript, even in AdS/CFT contexts); $\lambda=g_{YM}^2N$; Newton constant $G^{(10)}$ (superscript in parentheses).

## Voice and structure (every note)

- Directly under frontmatter: a **bare one-to-two-sentence summary** in plain prose. No "One-line:" prefix, no "One-line summary:", no whole-line bold, no course-scaffolding jargon ("Work Product #2").
- Frontmatter key order: `title, created, source, status, tags, passes, finalized, published_pass`.
- Lecturer's voice: declarative, precise, intuition-first. "We" for shared derivation steps; never first-person singular. One interpretive sentence after each nontrivial equation, as plain prose — no recurring bold gloss labels ("**Reading:**", "**Interpretation:**").
- **Banned template scaffolds** (keep the intuition, lose the boilerplate): headings or phrases "The picture in one breath", "The one-sentence picture", "The picture first", "The picture to hold onto", "The one picture to keep", "in one breath", "explain it to a friend", "say to a friend", "the punchline you should be able to say", "Exit line:", "note that", "it is worth noting", "the whole game". Open with prose or a heading specific to the note's content.
- Equations: `\tag{n}` restarting per note, only on equations the note later references; `\boxed{}` for headline results. Checkmarks only as $\checkmark$ inside math, never ✓ in prose.
- Typography: en dash in paired proper names (Nambu–Goto, Bekenstein–Hawking, Hardy–Ramanujan) in body text (file names keep their hyphens); `\mathrm{diag}`; American spelling; "worldsheet" and "spacetime" unhyphenated, "light-cone" hyphenated as adjective.
- Wikilinks: short form `[[Title]]`/`[[Title|alias]]` unless the title is ambiguous vault-wide (duplicate basenames like "Boundary conditions as geometry", "Reparameterization invariance", every "00 — Overview") — those keep full-path links.
- ASCII diagrams live inside triple-backtick fences.
- Every content note ends `## Open questions` then `## Exercise` with one folded `> [!success]- Solution`.
