---
title: Conditional political probabilities
created: 2026-07-09
source: llm
status: seed
tags: [prediction-markets, politics, forecasting, quantitative-research, market-microstructure]
---

A conditional political probability answers “how likely is outcome $A$ if condition $B$ holds?”, but extracting it from event contracts is valid only when the contracts implement the same event algebra, information cutoff, and settlement convention.

Up: [[Political prediction markets]]

Related: [[Logical coherence across prediction markets]] · [[From event-contract prices to probabilities]] · [[Prediction-market resolution risk]] · [[Cross-market arbitrage and contract basis risk]] · [[Forecast combination with polls models and markets]]

## The object being estimated

Political reasoning is full of conditional questions. What is the probability that a party wins the presidency **given** that it nominates a particular candidate? How likely is unified government **if** the party wins the presidency? What is the probability that a bill passes **if** one party controls both chambers? These questions differ from ordinary forecasts because they hold one event fixed and ask about uncertainty inside that branch of the world.

For events $A$ and $B$, with $P(B)>0$, the ordinary conditional probability is

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

The identity is simple; implementing it with market prices is not. It requires a contract for the joint event $A\cap B$, a contract for $B$, and a defensible interpretation of both prices as probabilities measured at the same time. It also requires that “$B$” mean exactly the same thing in the numerator and denominator. If one nomination contract resolves on acceptance at a convention while another presidential contract names a person regardless of ballot substitution, the ratio is not estimating a single coherent conditional.

Suppose, purely as an arithmetic illustration, that aligned contracts imply $P(N)=0.40$ for a politician to become the nominee and $P(W\cap N)=0.18$ for that politician both to become the nominee and win the general election. Then

$$
P(W\mid N)=0.18/0.40=0.45.
$$

That calculation does **not** mean a 45% market price is executable. A trader may have to buy one claim and sell another at bid and ask, post collateral until different settlement dates, pay fees, and bear separate resolution risk. It is first an inference about a probability model, not an arbitrage quotation.

## Three structures that labels often blur

### A joint claim

A joint claim pays only when both $A$ and $B$ occur. Its idealized probability value is $P(A\cap B)$. A contract titled “Candidate X wins the nomination and the presidency” is a joint claim if its rules really require both events. Dividing its probability by a separately estimated $P(B)$ can produce $P(A\mid B)$, subject to all the price and semantic caveats below.

### A branch-conditional claim

A genuinely branch-conditional claim is designed to report on $A$ inside the $B$ branch. One possible payoff convention pays $1$ if $A\cap B$, pays $0$ if $\neg A\cap B$, and cancels or refunds if $\neg B$. That resembles a bet activated only when $B$ happens. But cancellation makes the security's cash flows and opportunity cost state-dependent. Its market price need not equal the ratio of two ordinary binary-contract prices, especially when $B$ is unlikely or when capital is tied up until the condition is known.

The word “conditional” therefore does not determine the payoff. Rules might instead settle the claim at a fixed value when $B$ fails, use an oracle to select an outcome, or define $A$ so that $A$ logically implies $B$. The full resolution tree is the instrument.

### A technological “condition” token

Polymarket's documentation calls its infrastructure the Conditional Token Framework. In that framework, a binary market has fully collateralized Yes and No tokens, a complete pair can be split from collateral or merged back into collateral, and the winning token is redeemable after resolution. Here “condition” identifies an oracle question and its outcome slots. It does **not**, by itself, mean the quoted market estimates $P(A\mid B)$ for two political events.

This distinction prevents a category error. Tokenizing “Will A occur?” as a condition produces ordinary outcome claims on $A$. To elicit “Will A occur if B occurs?”, the market's question, payout vector, invalid-state treatment, and resolution rules must explicitly implement that conditional object.

## Four ways to obtain a conditional estimate

### 1. Divide a joint estimate by a marginal estimate

The direct estimator is

$$
\widehat P(A\mid B)=\frac{\widehat P(A\cap B)}{\widehat P(B)}.
$$

This is attractive because it uses ordinary binary claims. It is also fragile. If $P(B)$ is small, a modest error in either input creates a large change in the ratio. Using the delta method as a rough diagnostic, the sensitivity to the joint estimate is $1/P(B)$ and the sensitivity to the denominator is $-P(A\cap B)/P(B)^2$. Rare conditioning events amplify noise.

Prices should therefore enter as intervals, not false-point precision. If executable, semantically aligned intervals are $P(A\cap B)\in[j_L,j_U]$ and $P(B)\in[b_L,b_U]$, a conservative first bound is

$$
P(A\mid B)\in\left[\frac{j_L}{b_U},\frac{j_U}{b_L}\right],
$$

with the probability constraint then imposed on the upper endpoint if necessary. This is not a license to hide incoherence: if $j_L>b_U$, no joint distribution represented by those intervals can satisfy $P(A\cap B)\leq P(B)$, so the analyst should report a semantic, timestamp, or executable-price inconsistency rather than clip the result to $[1,1]$. If only $j_U>b_L$, capping the upper conditional bound at one is a conservative probability restriction, not a repair of the inputs. Even this calculation assumes the intervals can be treated as probability bounds and ignores dependence in estimation error. Bid-ask spreads, fees, depth, and the fact that both legs may not be executable simultaneously can make the honest interval wider.

### 2. Compare a nested event with its parent

Sometimes contract logic supplies the joint automatically. If $A$ implies $B$, then $A\cap B=A$, so

$$
P(A\mid B)=\frac{P(A)}{P(B)}.
$$

“The nominee wins the presidency” can have this nested form only if the presidential-win rules guarantee that the person was the relevant party's nominee under the nomination contract's definition. Write-in victories, replacement candidates, deadlines, party labels, withdrawal, death, and disputed certifications can break the implication. Logical nesting must be proved from rules, not inferred from natural-language shorthand.

### 3. Trade an explicitly conditional market

A venue can list separate claims on $A$ under $B$ and on $A$ under $\neg B$. This can make the desired question legible and lets traders express information about different political branches. Wolfers and Zitzewitz note that conditional markets can reveal beliefs about relationships between outcomes, while warning that correlation remains distinct from causation.

The design creates thin-market problems. Trading interest fragments across branches, the unlikely branch may receive little informed participation, and traders who influence or anticipate the decision that selects a branch may have unusual incentives. The reported conditional can be less stable than an unconditional market even when its label is more precise.

### 4. Recover a coherent joint distribution

A richer contract family can be viewed as fragments of one joint distribution. For a candidate $C$, nomination $N$, and victory $W$, a coherent model assigns probabilities to mutually exclusive states such as $N\cap W$, $N\cap\neg W$, and $\neg N$. Conditional probabilities follow by normalization within the relevant branch.

In practice, independently traded contracts may violate adding-up and monotonicity restrictions because of spreads, fees, separated collateral, participant access, or different wording. A researcher can fit the closest coherent distribution subject to the rules, but that fitted distribution is a model output. The objective function, price inputs, weighting by liquidity, and timestamp must be disclosed. It should never be presented as a directly traded consensus.

## Conditional is not causal

The most consequential error is reading $P(A\mid B)$ as the effect of making $B$ happen. A market may show that a party has a higher probability of winning the presidency conditional on nominating Candidate X than conditional on nominating Candidate Y. That difference does not establish that choosing X would cause the higher win probability.

Selection into the nomination can reveal information. X may become nominee mainly in worlds where the economy, opposition, scandals, health, or primary turnout already favor the party. Traders may condition on those correlated states. In causal notation,

$$
P(W\mid N=X) \neq P(W\mid do(N=X))
$$

in general. The left side is observational: it concerns worlds in which X is nominated. The right side concerns an intervention that sets the nominee to X while defining what else is held fixed. Ordinary event contracts usually identify, at best, the left side.

This matters for “decision markets,” which aim to advise a decision-maker by eliciting outcome forecasts under alternative actions. The decision rule affects what gets observed and how forecasters are paid. If the principal chooses the action with the best reported forecast, reports can change the probability that their own branch is selected and scored. Othman and Sandholm show that natural combinations of decision rules and scoring rules can create manipulability; Chen, Kash, Ruberry, and Shnayder likewise analyze incentive problems and propose designs for decision markets. These are mechanism-design problems, not cosmetic details.

A political conditional can still be useful without a causal interpretation. It can describe how market participants sort possible worlds, expose assumptions inside an electoral narrative, or provide an input to scenario planning. The safe wording is “market-implied belief about $A$ among worlds where $B$ occurs,” followed by the contract and price caveats. Calling it “the effect of $B$ on $A$” requires an independent causal design.

## Information feedback and endogenous conditions

Political conditions are often endogenous to the market itself. A visible nomination probability can affect donors, volunteers, media coverage, endorsements, and candidate withdrawal. A conditional general-election market can influence elite arguments about “electability,” which may influence the nomination whose consequences it purports to forecast. The object can change as people react to it.

This feedback does not make conditional probabilities meaningless, but it fixes their interpretation to a market and institutional regime. The estimate is conditional on information available at time $t$, the existence and visibility of the contracts, expected reactions to their prices, and traders' beliefs about those reactions. It is not a timeless property of a candidate.

Decision-linked markets add a further missing-data problem. If only the chosen branch resolves naturally, forecasters on unchosen branches cannot be scored against an observed outcome. Designs may cancel those claims, use randomized action selection, or alter payments to preserve incentives. Each remedy changes participation, variance, and ethical or legal feasibility. A public election market should not be casually described as a validated decision market merely because several “if” contracts exist.

## A contract-level audit

Before reporting any political conditional, record the following for every input leg:

1. **Event definitions.** Transcribe the exact criteria for $A$, $B$, and $A\cap B$; include deadlines, jurisdiction, named resolution authority, recount and postponement treatment, substitution, withdrawal, death, and invalid-market rules.
2. **Payoff algebra.** State what each claim pays in all four states $A\cap B$, $\neg A\cap B$, $A\cap\neg B$, and $\neg A\cap\neg B$. Mark impossible states only after proving the logical implication from the rules.
3. **Matched time.** Capture bid, ask, last trade, midpoint, spread, depth, volume or open interest, and timestamp from the same information cutoff. Do not divide a current numerator by yesterday's denominator.
4. **Execution and financing.** Report whether both inputs were executable at the stated size, applicable fees, collateral requirements, settlement dates, and cancellation refunds. A probability identity is not a zero-cost trading strategy.
5. **Price interpretation.** Explain whether prices are last trades, quotes, midpoints, or fitted probabilities. Manski shows that binary-contract equilibrium prices do not generically reveal a simple average of heterogeneous beliefs; Wolfers and Zitzewitz provide sufficient conditions and argue prices are often close to mean beliefs, but potentially biased. A ratio inherits the weaknesses of both inputs.
6. **Coherence checks.** Verify $0\le P(A\cap B)\le P(B)$ and $P(A\mid B)\in[0,1]$. Across a partition $B_1,\ldots,B_k$, check the law of total probability:

$$
P(A)=\sum_i P(A\mid B_i)P(B_i).
$$

Failure can reveal semantic mismatch, stale or thin quotes, or true trading frictions; it is not automatically arbitrage.
7. **Comparator and uncertainty.** Compare the result with a poll model, historical base rate, or expert forecast only when the conditioning event and information cutoff match. Publish an interval and sensitivity analysis when the denominator is small.

## Worked diagnostic example

Imagine three synchronized, hypothetical estimates:

- $P(N_X)=0.30$ for Candidate X to be nominated;
- $P(N_X\cap W_X)=0.12$ for X to be nominated and then win;
- $P(W_P)=0.52$ for X's party to win with any nominee.

The derived quantity is $P(W_X\mid N_X)=0.40$. It is coherent with the two X contracts because $0.12\le0.30$. It does not imply that nominating X reduces the party's chance from 52% to 40%. The 52% marginal averages over possible nominees and over political states correlated with their selection:

$$
P(W_P)=P(W_P\mid N_X)P(N_X)+P(W_P\mid \neg N_X)P(\neg N_X).
$$

If the first term uses 0.40 and the marginal is 0.52, then the other branch would need an implied value of approximately 0.571, assuming exhaustive, aligned definitions. That 17-point branch contrast might reflect candidate strength, but it might instead reflect selection: X could be nominated disproportionately in adverse environments.

Now suppose executable quotes imply intervals of $[0.10,0.14]$ for the joint and $[0.27,0.33]$ for the nomination. The elementary ratio bound becomes roughly $[0.303,0.519]$. The “40%” midpoint calculation conceals a much less precise market statement. If the contracts settle months apart or differ on replacement rules, even that interval is too confident.

The correct publication would identify the claims as hypothetical or give permanent real identifiers, display the interval and timestamp, say that the result is observational rather than causal, and list the edge cases that could break nesting. It would not announce that “markets say nominating X costs 12 points.”

## Why it matters

Conditional probabilities are the bridge from generic forecasting to political scenario analysis. They let a researcher decompose an unconditional election outlook into nomination, turnout, chamber-control, policy, or personnel branches. Used carefully, they expose hidden assumptions: two analysts may agree on the nomination probability but disagree sharply about general-election performance conditional on nomination.

They are also where prediction-market overclaiming becomes most dangerous. A neat ratio can disguise incompatible contracts, illiquid denominators, non-executable midpoints, state-dependent cancellation, and causal selection. Because conditional figures sound like answers to policy questions, readers may treat them as prescriptions rather than descriptions.

The durable practice is to start with the state-contingent payoff table, prove the event relationships, preserve executable intervals, and label the inferential object. Only then should arithmetic convert joint and marginal beliefs into a conditional. A conditional market can organize thinking about possible worlds; it does not, without additional design, tell political actors what their intervention will cause.

## Sources

- Justin Wolfers and Eric Zitzewitz, “Prediction Markets,” *Journal of Economic Perspectives* 18(2), 2004: https://www.aeaweb.org/articles?id=10.1257%2F0895330041371321
- Charles F. Manski, “Interpreting the Predictions of Prediction Markets,” *Economics Letters* 91(3), 2006: https://doi.org/10.1016/j.econlet.2006.01.004
- Justin Wolfers and Eric Zitzewitz, “Interpreting Prediction Market Prices as Probabilities,” NBER Working Paper 12200, 2006: https://www.nber.org/papers/w12200
- Robin Hanson, “Decision Markets,” *IEEE Intelligent Systems* 14(3), 1999: https://mason.gmu.edu/~rhanson/decisionmarkets.pdf
- Abraham Othman and Tuomas Sandholm, “Decision Rules and Decision Markets,” AAMAS 2010: https://www.cs.cmu.edu/~sandholm/www/decision%20rules%20and%20decision%20markets.AAMAS10.pdf
- Yiling Chen, Ian A. Kash, Mike Ruberry, and Victor Shnayder, “Decision Markets with Good Incentives,” WINE 2011: https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/wine11-decision-markets.pdf
- Polymarket documentation, “Conditional Token Framework,” accessed 2026-07-09: https://docs.polymarket.com/trading/ctf/overview
- Gnosis, “Conditional Tokens,” framework documentation: https://conditional-tokens.readthedocs.io/en/latest/

## Open questions

- Which public political venues, if any, currently implement a genuinely branch-conditional payout rather than merely listing related ordinary binary contracts?
- How should a researcher propagate bid-ask, depth, and semantic uncertainty through ratios when the two input markets share traders and liquidity shocks?
- Can randomized decision selection make a political decision market incentive-compatible without imposing unacceptable institutional or ethical costs?
- What minimum probability and depth should a conditioning event have before its derived conditional is stable enough for a public tracker?
