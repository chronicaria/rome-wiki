---
title: Favorite-longshot bias in event contracts
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, politics, quantitative-research, forecasting, calibration, market-microstructure]
---
The favorite-longshot bias is a calibration pattern—not a law of every market—in which low-priced outcomes occur less often than their prices imply while high-priced outcomes occur more often; testing it in political event contracts requires independent events, synchronized price horizons, and careful separation of prices from executable returns.

Up: [[Political prediction markets]]

## What the bias means

Suppose a binary contract pays $1 if an event occurs and $0 otherwise. If a frictionless, risk-neutral interpretation were valid, a price of $p$ would represent an event probability of $p$. Across many resolved forecasts, perfect calibration would imply

$$
E[Y\mid P=p]=p,
$$

where $Y\in\{0,1\}$ is the outcome and $P$ is the observed price. A favorite-longshot bias (FLB) has two linked sides:

- among contracts priced low, the empirical event rate is below the quoted price, so longshots are overpriced;
- among contracts priced high, the empirical event rate is above the quoted price, so favorites are underpriced.

The calibration curve $m(p)=E[Y\mid P=p]$ is then typically S-shaped around the 45-degree line: $m(p)<p$ toward zero and $m(p)>p$ toward one. This is probability compression toward 50%, not merely a collection of surprising losses. A 10% event should fail nine times in ten even under a perfect forecast. One cannot diagnose bias from an upset, a single election, or the fact that the market's modal outcome lost. The proper object is a set of probability–outcome pairs evaluated as in [[Prediction-market calibration]].

The name comes from racetrack wagering, where the empirical regularity is old and unusually persistent: bets on longshots tend to have worse average returns than bets on favorites. That betting evidence is the intellectual origin of the hypothesis, but it is not direct evidence about political contracts. Pari-mutuel pools, bookmaker margins, simultaneous races, and consumption-motivated gambling differ from double-auction event markets. Political evidence must therefore be established separately.

Nor is the bias identical to a profitable strategy. Calibration compares price with outcome frequency. Profitability compares an executable purchase or sale, after spread, commissions, capital lock-up, and risk, with the payoff. A 90-cent favorite that wins 92% of the time is underpriced on a midpoint basis, yet crossing a wide ask, paying fees, and tying up collateral for months can eliminate the return. Page and Clemen's study makes this distinction explicit: their estimated long-horizon miscalibration generated excess returns only for traders with sufficiently low discount rates.

## Mechanisms that can produce the same shape

An S-shaped calibration curve does not identify its cause. Several mechanisms can generate similar reduced-form evidence.

### Probability weighting and demand for lottery-like payoffs

People may overweight small probabilities or value the skewed payoff of a cheap chance at a large multiple. In a betting pool, that demand raises longshot prices and reduces their expected returns. Snowberg and Wolfers use a large horse-racing dataset containing ordinary win bets and compound exacta, quinella, and trifecta bets to distinguish nonlinear utility over payoffs from nonlinear treatment of probabilities. Their cross-bet restrictions favor probability misperception over a representative risk-loving explanation.

That result is strong evidence about racetrack choices, not a universal structural estimate for event-contract traders. A five-cent political contract may attract expressive partisans, entertainment demand, or attention to a vivid scenario; it may also simply be stale or costly to short. These channels predict similar prices but different remedies and external validity.

### Time discounting and capital lock-up

Page and Clemen model traders who discount future payouts. Buying a contract far from expiration requires paying now for a state-contingent dollar later. The buyer of a high-priced favorite commits much more capital than the buyer of a low-priced longshot for the same maximum unit payoff. When both sides discount delayed proceeds, a no-trade interval opens between valuations; equilibrium transaction prices can be pulled toward the middle.

This mechanism predicts a larger FLB at longer horizons and better calibration near resolution. It also shows why apparent probability bias need not be an easy arbitrage. Financing and opportunity costs are part of the price. Fully collateralized venues, zero interest on collateral, and long-dated resolution can intensify the wedge; interest-bearing collateral or portfolio margin can alter it. See [[From event-contract prices to probabilities]] for the assumptions under which a price can approximate a belief aggregate.

### Heterogeneous beliefs and wealth

A market price clears quantities, not opinions. Traders differ in beliefs, wealth, risk tolerance, inventory, and constraints. Even if the average belief is calibrated, the marginal traders at five cents may not resemble those at ninety-five cents. Limited budgets can stop informed traders from correcting many small mispricings. Short-sale or “No” access may be asymmetric. Wealth-weighted beliefs can therefore create compression without each participant overweighting longshots.

This matters especially in politics. A candidate contract can combine genuine probabilistic disagreement with partisan utility: owning the favored candidate may be expressive, while owning the opponent may hedge emotional or economic exposure. The resulting price is an equilibrium object, not a poll of representative beliefs.

### Fees, tick size, spread, and boundary effects

At extreme prices, market frictions are large relative to expected profit. A one-cent tick is 20% of a five-cent price. A two-cent spread can overwhelm the edge in a nominally mispriced longshot. Fees may depend nonlinearly on price, volume, or payout. These features weaken arbitrage precisely where an FLB is usually measured.

Using last trades aggravates the problem. A five-cent last trade may be stale while the live book is 2 bid / 8 ask. Treating five cents as a precise forecast creates false confidence and can manufacture calibration error. The admissible observation should record an executable side or an interval, not only a chart point; [[Bid-ask spreads as probability uncertainty]] and [[Order-book microstructure of event contracts]] develop this distinction.

### Selection, attention, and herding

Venues do not list a random sample of propositions. They select events likely to attract trade, often including colorful longshots. Researchers then select markets with archived data, sufficient liquidity, unambiguous resolution, or prominent coverage. Users may select whichever cheap contracts survived long enough to be noticed. These filters change the population being estimated.

Restocchi, McGroarty, and Gerding report FLB in political prediction-market data and study how it evolves through a market's life. Their temporal results are consistent with herding, but “consistent with” is not causal identification: changing composition, information arrival, and liquidity could also produce time patterns. A clean design must distinguish within-contract convergence from a changing cross-section of contracts.

## What the empirical literature actually establishes

### Betting markets: a durable prior, not political proof

Racetrack research supplies the strongest repeated evidence for the classic bias. The pattern is defined in return terms because pari-mutuel odds and the track take map bets into payoffs. Snowberg and Wolfers' contribution is mechanistic: by comparing choices across simple and compound pools, they find that distorted probability weights explain the observed allocation better than risk-loving utility over winnings.

This literature justifies treating FLB as a serious hypothesis. It does not justify automatically “correcting” every event-contract price. Racetrack outcomes are short-horizon, repeated, mutually exclusive contests; political contracts can last months, overlap logically, resolve through legal language, and trade in continuous order books. The bettors, incentives, and transaction costs differ.

### Broad prediction-market evidence: Intrade

Page and Clemen begin with 512,828 transactions from 1,883 Intrade markets. After excluding markets with fewer than five observations or total volume below 10 contracts, their final dataset contains 512,612 transactions from 1,787 markets grouped into 597 competitions spanning sports, politics, and other topics. To prevent a handful of highly active competitions from dominating their nonparametric calibration curve, they sample the same number of transactions per competition and use a clustered bootstrap that respects dependence among contracts tied to one outcome set.

They estimate a clear aggregate S-shape. In their reported curve, a price of 0.20 corresponds to a 15.3% empirical event frequency, while 0.80 corresponds to 87.4%. Political markets show a stronger longshot pattern than nonpolitical markets. More importantly for their theory, miscalibration is greater farther from expiration and prices become reasonably well calibrated over shorter horizons.

This is direct evidence involving political prediction markets, but its scope should be stated precisely. It is evidence from one historical commercial venue and its selected contract mix, not from all political markets or current venues. Repeated transaction prices from one contract are not repeated independent forecasts. Although the authors cluster by competition and equalize contribution in part of the analysis, price observations still reflect a dynamic market path. The sample also blends contracts with different horizon, liquidity, subject matter, and trader populations.

### A conflicting design: Iowa Electronic Markets

Berg and Rietz study repeated winner-takes-all contracts on the Iowa Electronic Markets. Their principal dataset is not an election sample: it consists of monthly contracts tied to Microsoft price levels and relative computer-industry stock returns. The design is valuable because essentially similar binary markets repeat under controlled rules, complete slates span mutually exclusive outcomes, and final values are known with certainty.

They find no longshot bias in these IEM markets. At short horizons prices are broadly efficient; at intermediate horizons, if anything, low-priced contracts are underpriced and high-priced contracts overpriced—a pattern more consistent with overconfidence, the reverse of classic FLB. The bias fades near resolution. This does not refute Page and Clemen. The IEM study uses different underlying events, participants, investment limits, horizons, and market design. It does demonstrate that binary payoff structure alone does not mechanically force longshots to be overpriced.

The political interpretation must therefore remain narrower than either slogan “prediction markets have FLB” or “prediction markets are efficient.” Intrade offers direct historical political evidence of a horizon-dependent pattern. IEM offers strong counterevidence to universality in repeated binary markets, but not a matched political replication. Restocchi and coauthors add political-market evidence with temporal dynamics, while also leaving mechanism identification open.

## How to test political contracts without fooling yourself

### Define the forecast unit before viewing outcomes

Choose a fixed sampling rule—for example, the executable midpoint at 16:00 Eastern at 180, 90, 30, 7, and 1 days before resolution—and preregister it in a ledger. Do not include every trade as though each were an independent prediction. A contract contributes one observation per chosen horizon; dependence across horizons is handled explicitly.

The outcome unit also matters. Candidate contracts within one nomination contest are mutually exclusive, as are state-winner contracts nested within one national election environment. Treating all as independent makes confidence intervals too narrow. Cluster at least by competition or event family, and consider higher-level dependence by election cycle or common shock.

### Preserve contract semantics

“Wins the election,” “is inaugurated,” “is certified,” and “receives the most electoral votes” are not synonymous. A calibration dataset needs the permanent contract identifier, complete resolution rule, source authority, deadline, cancellation terms, and every rule version. Otherwise a resolution dispute is mislabeled as probability error. [[Prediction-market resolution risk]] is part of the forecast target, not clerical noise.

### Use executable prices and matched costs

Store bid, ask, last, midpoint, depth at several levels, spread, fee rule, open interest or comparable activity measure, and timestamp. A useful evaluation can show three curves:

1. midpoint calibration, as a descriptive belief proxy;
2. buyer calibration at the ask and seller calibration at the bid;
3. net returns after fees and a stated collateral opportunity cost.

If only last prices are available, label the study as a trade-price analysis and test sensitivity to staleness and minimum activity. Never transform a displayed cent price into a point probability without reporting the measurement convention.

### Avoid endogenous survival and hindsight bins

Markets may close, void, merge, or become inactive. Excluding them after seeing resolution creates survivorship bias. Include every contract that met the ex ante rule, then classify voids and ambiguous settlements separately. Fix price bins or use a prespecified continuous calibration model before observing the realized curve. Flexible smoothing is valuable for diagnosis but can overfit sparse tails.

Report counts of independent event families, not merely millions of ticks. A dataset with 500,000 trades but 30 political contests has much less outcome information than the transaction count suggests. Bootstrap or standard-error procedures should resample the independent unit, not individual trades.

### Separate calibration from sharpness and skill

A forecaster can improve calibration by moving every probability toward 50%, while becoming less informative. Evaluate proper scores such as Brier or log loss alongside calibration, and compare against synchronized baselines: poll-based models, simple base rates, and a no-change forecast. A recalibration map estimated and tested on the same elections is not evidence of out-of-sample improvement. Fit it on earlier cycles or cross-validate by event family, as discussed in [[Backtesting political forecasts without leakage]].

### Test horizon and venue interactions rather than pooling them away

Time to expiration is a central theoretical and empirical moderator. Estimate separate curves at fixed horizons or interact price with horizon. Also stratify or hierarchically model venue, contract family, liquidity, and election type. Pooling long-dated nomination markets with election-eve binary races can create an average S-shape that describes neither group.

Cross-venue replication is especially valuable, but only when contract wording and timestamps match. If a pattern appears on one venue but not another, investigate participant access, collateral treatment, fees, tick sizes, and listing selection before calling one crowd more rational.

## Interpreting a detected pattern

A credible finding would say: in a preregistered population of contracts, at a specified horizon and price convention, resolved frequencies were systematically more extreme than quoted prices, with uncertainty clustered by independent event family. It would not say that every longshot is overpriced, that a particular favorite is certain, or that the cause is irrational gambling.

Three comparisons help discipline interpretation:

- **statistical:** Does a calibration slope or nonparametric curve differ from the identity after cluster-aware uncertainty?
- **economic:** Does the deviation exceed spread, fees, collateral cost, and realistic executable depth?
- **comparative:** Does a prespecified recalibration improve proper scores out of sample relative to raw market prices and relevant alternatives?

If only the first test passes, FLB may be a useful descriptive correction but not a tradable anomaly. If the effect disappears after matching horizons, it was composition. If it appears only in low-depth tails, microstructure may dominate psychology. If it persists across liquid, semantically clean contracts and venues, probability weighting or systematic belief aggregation becomes more plausible—but still requires evidence beyond curve shape.

The practical research conclusion is conservative. The favorite-longshot bias is a legitimate prior supplied by betting research and supported in some historical prediction-market samples, including political contracts. It is not a license to mechanically shrink prices away from 50%. Political market users should demand a selection-aware, horizon-matched, executable-price calibration study before treating the pattern as current or venue-general.

## Sources

- Lionel Page and Robert T. Clemen, [“Do Prediction Markets Produce Well-Calibrated Probability Forecasts?”](https://people.duke.edu/~clemen/bio/Published%20Papers/45.PredictionMarkets-Page%26Clemen-EJ-2013.pdf), *The Economic Journal* 123, no. 568 (2013): 491–513, DOI 10.1111/j.1468-0297.2012.02561.x — original article; Intrade sample, clustered calibration analysis, horizon mechanism, and political/nonpolitical comparison; accessed 2026-07-10.
- Erik Snowberg and Justin Wolfers, [“Explaining the Favorite-Longshot Bias: Is it Risk-Love or Misperceptions?”](https://www.nber.org/papers/w15923.pdf), NBER Working Paper 15923 (2010) — original empirical/theoretical racetrack study; betting evidence, not political prediction-market evidence; accessed 2026-07-10.
- Joyce E. Berg and Thomas A. Rietz, [“Longshots, Overconfidence and Efficiency on the Iowa Electronic Market”](https://www.biz.uiowa.edu/faculty/trietz/papers/longshots.pdf), *International Journal of Forecasting* 35, no. 1 (2019): 271–287 — original repeated-binary-market analysis finding no longshot bias in its IEM sample; accessed 2026-07-10.
- Valerio Restocchi, Frank McGroarty, and Enrico Gerding, [“The Temporal Evolution of Mispricing in Prediction Markets”](https://eprints.soton.ac.uk/423232/), *Finance Research Letters* 29 (2019): 303–307, DOI 10.1016/j.frl.2018.08.003 — author repository record and accepted manuscript for political-market temporal evidence; accessed 2026-07-10.
- Charles F. Manski, [“Interpreting the Predictions of Prediction Markets”](https://www.nber.org/papers/w10359.pdf), NBER Working Paper 10359 (2004) — theoretical caution on mapping equilibrium prices to population beliefs; accessed 2026-07-10.
- Justin Wolfers and Eric Zitzewitz, [“Interpreting Prediction Market Prices as Probabilities”](https://www.nber.org/papers/w12200.pdf), NBER Working Paper 12200 (2006) — equilibrium conditions and approximations linking prices to belief distributions; accessed 2026-07-10.

## Open questions

- Does an FLB persist in current Kalshi and Polymarket political contracts after using executable bid/ask snapshots, matching semantics, and clustering by event family?
- How much of any horizon effect is capital lock-up versus changing information, participant composition, or liquidity?
- Does venue-level interest on collateral measurably flatten the calibration curve for long-dated favorites?
- Can a recalibration map trained on earlier election cycles improve Brier and log scores out of sample without sacrificing too much sharpness?
- Are partisan or expressive contracts more compressed than politically neutral policy and personnel contracts after controlling for depth and horizon?
