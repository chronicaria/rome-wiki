---
title: Bid-ask spreads as probability uncertainty
created: 2026-07-09
source: llm
status: seed
tags: [prediction-markets, politics, forecasting, market-microstructure, quantitative-research]
as_of: 2026-07-09
desk: Political prediction markets
review_after: 2026-07-16
---
A prediction-market bid and ask define an executable probability interval, but the interval mixes uncertainty about the event with trading frictions and therefore is not a statistical confidence interval.

Up: [[Political prediction markets]]

A binary event contract makes probability look unusually tangible. A Yes share pays $1 if a specified event occurs and $0 otherwise, so a price in dollars resembles a probability. Yet an order book normally offers at least two prices: the highest price somebody will pay now, the bid $b$, and the lowest price somebody will accept now, the ask $a$. If the best Yes bid is $0.58$ and the best Yes ask is $0.64$, the immediately executable evidence is not a single 61% forecast. It is a two-sided market in which a seller can hit roughly 58 cents and a buyer can lift roughly 64 cents, before fees and subject to the displayed quantities.

That distinction is the practical bridge between [[From event-contract prices to probabilities]] and research-grade political forecasting. The midpoint is a useful summary. The spread is useful information. Neither, without more structure, identifies a true probability or measures the forecaster's statistical confidence.

## The executable interval

Let $V\in\{0,1\}$ be the contract payoff, with $V=1$ when the contract's exact resolution condition is satisfied. In a frictionless risk-neutral benchmark with common information, no funding cost, and unambiguous settlement, the fair price would be

$$
p^*=\mathbb{E}[V]=\Pr(V=1).
$$

In a live limit-order book, the best quotes instead define a no-immediate-trade region. If $m$ denotes a candidate latent value that would not by itself imply crossing the posted book, then

$$
b \leq m \leq a,
$$

This inequality does not establish that one unique “true” market valuation lies inside the quotes; it merely records the range within which a marginal valuation would neither sell at the bid nor buy at the ask. The midpoint and quoted spread are

$$
q=\frac{a+b}{2},\qquad s=a-b.
$$

Calling $[b,a]$ an *executable probability interval* is useful shorthand. It says what prices are available to a marginal seller and buyer at a timestamp. It also refuses false point precision: a 58–64 book supports a weaker public inference than a deep 60–61 book, all else equal. But the word “probability” requires caveats. Bid and ask are reservation prices for particular quantities under a contract rulebook. Risk aversion, fees, capital constraints, market-maker inventory, access restrictions, and resolution risk can move them away from a common expected payoff.

The interval is also directional. Someone who already owns Yes can immediately sell at the bid. Someone seeking Yes can immediately buy at the ask. The midpoint is normally not executable. It is an analyst's interpolation between two orders posted by potentially different people. A chart that treats $q$ as though a trade occurred there converts a useful descriptive statistic into fictional execution evidence.

On Kalshi, the public order-book response makes the binary complement explicit. Its current fixed-point response returns `yes_dollars` and `no_dollars` bid arrays rather than redundant ask arrays; prices and quantities are strings, the arrays are ascending by price, and the final element is the best bid. A No bid at $n$ implies a Yes ask at $1-n$, so

$$
a_{Yes}=1-b_{No},\qquad s_{Yes}=1-b_{No}-b_{Yes}.
$$

An analyst who reads the highest Yes bid as “the price,” without reconstructing the complementary ask, discards half of the executable information. Polymarket's documentation similarly distinguishes best buy and sell prices from the midpoint. It states that its interface displays the midpoint when the spread is no more than ten cents but switches to the last traded price when the spread is wider. Consequently, the same visual field can represent two different estimators depending on market state. A stable data pipeline must store bid, ask, midpoint, last trade, display convention, and timestamp as separate fields.

## Why a spread exists

The spread is often described casually as “uncertainty.” That is directionally helpful but mechanically incomplete. Several forces can widen it, and they imply different things about the underlying event forecast.

### Adverse selection

A liquidity provider who posts both sides risks trading against someone with better information. If an informed buyer is especially likely to arrive when the contract is truly worth more than current public estimates, a market maker who sells Yes at an undifferentiated price loses on those trades. The ask must rise relative to the maker's conditional estimate. Symmetrically, an informed seller is more likely to hit the bid when Yes is worth less, pushing the safe bid down.

This is the central mechanism in Glosten and Milgrom's sequential-trade model. Competitive, risk-neutral market makers can quote a positive spread even with zero expected profit because a trade's direction is informative about asset value. The ask is an expectation conditional on observing a buy; the bid is an expectation conditional on observing a sell. A larger chance that the next trader is informed, or more consequential private information, can widen the gap.

Political event contracts fit the intuition imperfectly but usefully. Some participants may process a poll release faster, understand a party rule better, possess superior local reporting, or model correlated races more carefully. A maker cannot know whether an incoming order reflects that edge or merely entertainment, hedging, or noise. Around debates, court rulings, candidate withdrawals, counting updates, and ambiguous resolution news, the composition of order flow can change abruptly. A wider spread may then be a rational defense against informed flow rather than a direct statement that the election itself became intrinsically harder to predict.

Kyle's model emphasizes a related object: market depth. Informed trading is camouflaged by noise trading, and price responds to net order flow through a liquidity parameter. The key lesson for event contracts is that tightness and depth are separate. The best quotes might be only one cent apart while very little quantity rests there; a modest market order can consume those levels and move the price sharply. Conversely, a visibly wider top-of-book spread can coexist with substantial depth farther out. Spread alone cannot describe how much capital is required to change the apparent probability.

### Inventory and risk bearing

Even without private information, a market maker may not want unlimited exposure to one political outcome. If customer flow leaves the maker long Yes, the maker can lower both bid and ask to encourage buyers of No or sellers of Yes. If hedges are unavailable or only approximate, carrying the position through volatile news consumes risk capacity. The quote may therefore move or widen even when the maker's central event estimate is unchanged.

This matters more for contracts with few natural cross-hedges. A presidential winner contract might be partially hedged through nomination, popular-vote, state, or party-control markets, but differing resolution terms create [[Prediction-market resolution risk]]. A contract on a cabinet appointment, court action, or procedural deadline may have no close hedge. Inventory compensation then contaminates any attempt to read the spread as pure belief dispersion.

### Order-processing, fees, and minimum price increments

Posting and maintaining quotes consumes infrastructure, attention, capital, and sometimes explicit venue fees. Makers also face cancellation latency, failed hedges, chain or rail costs, and the opportunity cost of collateral locked until resolution. These costs can create a spread even if everybody agrees on the probability.

The tick size places a mechanical floor under observable precision. If a particular market requires one-cent increments, a latent value of 60.4 cents may appear as a 60 bid and 61 ask even in a highly competitive book. Tick size is a market field, not a safe venue-wide constant: Polymarket's order-book response exposes it explicitly, while Kalshi's current fixed-point API supports price strings and documents subpenny pricing. A one-cent spread near 50 cents and a one-cent spread near 99 cents have the same dollar width but not the same proportional significance for the cheap side or the same attainable payoff geometry. The bounded $[0,1]$ price scale also makes conventional percentage-spread measures unstable near zero.

Fees widen the economically relevant no-trade region beyond the raw quoted spread. If a buyer pays the ask plus a transaction charge, the buyer's break-even probability exceeds $a$. If a seller incurs a fee or sacrifices collateral yield, the seller's threshold differs from $b$. Exact adjustment depends on the venue, fee schedule, price, order type, and holding path. Public reporting should therefore label $[b,a]$ “before fees” unless the transformation has actually been calculated.

### Sparse participation and stale orders

A wide spread can mean that informed traders disagree, but it can also mean that almost nobody is paying attention. Old orders can remain after public information changes. One side may be empty. A maker may quote token size to preserve optionality without inviting a meaningful trade. A newly listed or obscure contract can have a wide interval simply because the expected reward from improving it is too small.

This is why spread should be read alongside recency, depth, volume, and trade activity. Historical volume is not current liquidity. Open interest is not an executable quote. A last trade is not a current consensus. An interval whose best levels each contain one contract is a statement about one-contract execution, not a robust probability range for institutional size.

## Spread is not a confidence interval

A statistical confidence interval is generated by a specified sampling procedure and has a coverage interpretation under repeated samples. A Bayesian credible interval is generated by a posterior distribution and has a probability interpretation conditional on a model and prior. A bid-ask interval has neither property by default. It is generated by submitted orders.

If a Yes contract is quoted 58–64, one cannot say there is a 95% chance that the true probability lies between 58% and 64%, or that market participants assign all plausible probability mass to that range. A trader might believe the event is 70% likely but be unwilling or unable to buy because of fees, position limits, legal access, capital costs, or correlated exposure. Another might believe 50% yet decline to sell because short-side mechanics or collateral are unattractive. Orders outside the best quotes are hidden from a top-of-book snapshot, and beliefs held without orders are invisible entirely.

Nor is spread width a monotone measure of event uncertainty. Consider two contracts:

- Contract A is an election six months away, with genuinely diffuse possible outcomes but intense market-making competition. It trades 49–50 with deep size.
- Contract B concerns an administrative announcement tomorrow that almost everyone thinks has a 70% chance, but only two small traders participate. It trades 55–85.

The first event may have more irreducible outcome uncertainty even though its market is tighter. The second book reveals less about its participants' central estimate because liquidity is poor. Market uncertainty, event uncertainty, and estimator uncertainty are different objects.

The spread can nevertheless serve as an *identification warning*. Under a strong benchmark—matched contract meaning, competitive quoting, negligible fees, fresh orders, meaningful two-sided depth, and no severe constraints—a narrow interval supports using its midpoint as a compact market forecast. As those conditions fail, the analyst should weaken the claim: report the executable interval, avoid point scoring, or classify the market as not presently research-grade.

## Size turns one interval into a curve

The top of book answers only the smallest executable-size question. For a buy quantity $Q$, define a volume-weighted ask $A(Q)$ by walking up the sell orders needed to fill $Q$. Define $B(Q)$ analogously by walking down bids for a sale. The size-specific executable interval is

$$
[B(Q),A(Q)].
$$

Usually $A(Q)$ rises with $Q$ and $B(Q)$ falls, so the effective spread widens with size. Reporting “60–61” without quantities may be defensible for a one-contract observation and misleading for a $10,000 comparison. A depth-aware snapshot should preserve multiple levels or calculate standardized intervals at fixed quantities.

Price impact adds a dynamic dimension. A market order both consumes liquidity and potentially conveys information. Makers may cancel or revise remaining orders after observing it. The realized cost of a large trade therefore need not equal the cost computed from a stale snapshot. For research, this is a reason to call order-book calculations *quoted* or *instantaneous* depth, not guaranteed execution.

Political comparisons need a common size convention. If one venue has a 60–61 top-of-book interval for ten contracts and another has 59–63 for ten thousand, declaring the first venue more precise mistakes tightness for capacity. A reasonable tracker can publish the top of book plus intervals for several fixed notional sizes, while marking unavailable quantities rather than extrapolating.

## Midpoints: useful, conditional, and easy to misuse

The midpoint $q$ is attractive because it produces one number for charts, calibration bins, and comparisons with polls. Under symmetric trading frictions and competitive two-sided quotes, it can be a sensible estimator of latent value. Midquotes also avoid the mechanical bid-ask bounce that appears when successive trades alternate between sides.

But symmetry is an assumption. Inventory can shift both quotes. One side can be stale. Tick constraints can make the midpoint jump mechanically. The book may be crossed only in economically equivalent Yes/No representations that a data pipeline failed to reconcile. A platform's displayed number may switch to last trade in wide markets. The midpoint can even represent a price at which neither participant is willing to trade.

Rome should use a midpoint only under a written admissibility rule established before outcomes are known. A possible research protocol is:

1. retrieve the official order book and contract rules at a precise UTC timestamp;
2. reconstruct both Yes sides correctly, including the complement relation where applicable;
3. require live bids on both complementary outcomes and record their quantities;
4. store best bid, best ask, midpoint, spread, last trade, and several depth levels separately;
5. calculate fixed-size intervals and note whether fees are excluded;
6. use the midpoint for a point forecast only when spread and depth pass preregistered thresholds;
7. otherwise preserve an interval and exclude the observation from point-score comparisons or apply an explicitly preregistered interval-scoring method;
8. retain the raw snapshot so later changes in venue field definitions can be audited.

There is no universal five-cent or one-cent cutoff. An acceptable threshold depends on forecast horizon, contract family, sample size, intended comparison, and tick size. Choosing the cutoff after seeing which markets resolved correctly would create selection bias in [[Prediction-market calibration]]. The rule belongs in the study design, not in the postmortem.

## Why it matters

A narrow, deep, fresh spread supports a limited claim: at the stated timestamp and size, competitive orders bracket a marginal transaction in a small range. That makes the midpoint a more defensible market summary than it would be in a wide, thin, stale book. It does not prove that the midpoint is calibrated, unbiased, manipulation-resistant, or superior to polls and models.

A widening spread supports another limited claim: immediacy became more expensive or two-sided liquidity deteriorated. It does not by itself identify why. The cause could be adverse-selection risk before news, inventory imbalance, a maker outage, fee or incentive changes, stale orders being cancelled, resolution ambiguity, or genuine disagreement. Establishing a political explanation requires synchronized event timing, book depth, trades, comparator forecasts, and ideally evidence that distinguishes rival mechanisms.

A wide spread also sets bounds on honest prose. If a contract is 40–70, “the market gives the candidate a 55% chance” overstates precision. “The displayed midpoint is 55%, but executable Yes quotes span 40–70 before fees at the captured size” preserves the evidence. If one side is absent, even an interval may be impossible; the correct result is “no two-sided executable estimate.”

Finally, the interval inherits the contract's semantics. Tight quotes around the wrong interpretation are not precise forecasts of the event a reader has in mind. Before comparing spreads across venues, match resolution language, source, deadline, cancellation provisions, payout, participant access, collateral, and timestamp. Apparent precision cannot repair [[Prediction-market resolution risk]].

## Sources

- [Kalshi API documentation, “Orderbook Responses”](https://docs.kalshi.com/getting_started/orderbook_responses) — official explanation of fixed-point Yes/No bid arrays, ascending price order, complementary asks, and spread reconstruction; accessed July 9, 2026.
- [Kalshi API documentation, “Get Multiple Market Orderbooks”](https://docs.kalshi.com/api-reference/market/get-multiple-market-orderbooks) — official order-book endpoint and field description; accessed July 9, 2026.
- [Polymarket documentation, “Prices & Orderbook”](https://docs.polymarket.com/concepts/prices-orderbook) — official CLOB, displayed-midpoint, execution-price, and wide-spread display conventions; accessed July 9, 2026.
- [Polymarket documentation, “Orderbook”](https://docs.polymarket.com/trading/orderbook) — official best-price, midpoint, spread, and streaming-market documentation; accessed July 9, 2026.
- [Lawrence R. Glosten and Paul R. Milgrom, “Bid, ask and transaction prices in a specialist market with heterogeneously informed traders,” *Journal of Financial Economics* 14 (1985), 71–100](https://doi.org/10.1016/0304-405X%2885%2990044-3) — primary market-microstructure model of information-based spreads; DOI links to the publisher record.
- [Albert S. Kyle, “Continuous Auctions and Insider Trading,” *Econometrica* 53 (1985), 1315–1335](https://doi.org/10.2307/1913210) — primary model connecting informed order flow, noise trading, price impact, and depth; DOI links to the archival record.

## Open questions

- Which spread and fixed-size depth thresholds should Rome preregister for political-market calibration samples?
- How should interval-valued forecasts be scored without replacing them by outcome-informed point estimates?
- Can public order-book histories distinguish adverse-selection widening from inventory withdrawal around political news?
- How should tick size and fee schedules be normalized when comparing spread quality across venues and probabilities near zero or one?
