---
title: Perpetual funding and crowded leverage
created: 2026-07-09
source: llm
status: seed
tags: [crypto, markets, derivatives, perpetual-futures, funding, leverage, liquidations]
as_of: 2026-07-09
desk: Crypto markets
review_after: 2026-10-09
---
Perpetual funding is a price-tethering transfer between longs and shorts, not a complete sentiment gauge: crowding becomes dangerous when one-sided positioning, thin executable liquidity, tight margin, and correlated collateral create a forced-liquidation feedback loop.

Up: [[Crypto]]

## Place in the map


A perpetual future, or “perp,” is a derivative that gives price exposure without a fixed maturity. Unlike a dated future, it has no terminal date at which cash-and-carry arbitrage mechanically forces convergence to spot. The venue instead uses a recurring funding transfer: when the perp trades rich to its reference, longs generally pay shorts; when it trades cheap, shorts generally pay longs. The payment makes the expensive side costly to hold and rewards positions that lean against the dislocation.

That mechanism is often turned into a market slogan. Positive funding gets labeled “bullish positioning,” very positive funding “overheated leverage,” and negative funding “bearish positioning” or a possible squeeze. Those descriptions can be clues, but funding is neither a census of all traders nor a countdown clock. It is the output of a venue-specific formula applied to a local order book and reference index. It says much more when read beside open interest, basis, collateral, liquidation rules, position concentration, spot flows, and executable depth.

This is an explanatory framework, not live trading advice. Venue rules change, rates can reverse quickly, and the same displayed rate can imply different risks on different contracts.

## Why perpetuals need an anchor

A dated futures contract has a known settlement value at expiry. If it becomes too expensive relative to spot and financing costs, arbitrageurs can buy spot, sell the future, and hold the package toward settlement. The approach of expiry disciplines the spread. A perpetual has no such terminal event. Left alone, its price could remain persistently above or below the underlying market.

Funding substitutes a repeated carrying cost for terminal convergence. In a simplified linear contract, a funding payment is

$$
\text{funding payment}=N\times f,
$$

where $N$ is position notional and $f$ is the funding rate for the interval. Bybit defines notional for its USDT perpetual example as contract quantity times mark price. Hyperliquid instead states that its payment uses position size times oracle price. BitMEX applies funding to marked position value. These differences matter: formulas, conversion prices, interval length, caps, and settlement conventions are contract specifications, not universal properties of “crypto funding.”

If $f>0$, longs usually pay and shorts receive. A trader can respond by reducing a long, opening a short, or combining a short perp with a long spot position. Each response tends to reduce the premium: selling the perp pressures its price directly, while spot-perp arbitrage adds relative demand to spot. With $f<0$, the directions reverse. Funding is usually transferred between position holders rather than retained as a venue fee; BitMEX, Bybit, and Hyperliquid each describe peer-to-peer or long-to-short transfers, though trading and liquidation fees remain separate.

The anchor is elastic rather than absolute. Funding is computed and paid at discrete times, arbitrage consumes capital and balance-sheet capacity, spot may be difficult to borrow or custody, and different venues have different users and constraints. A perp can therefore trade away from spot for meaningful periods. Funding makes that divergence costly; it does not guarantee instantaneous equality.

## Index, mark, last, and impact prices

Four prices must not be collapsed into one.

The **index price** is an external reference assembled from spot venues or oracles. It is intended to represent the underlying asset rather than the local derivative's last trade. Its integrity depends on constituent selection, weights, outlier handling, data availability, and the quality of thin underlying spot markets.

The **last price** is the most recent perp trade. It is the price at which two local orders matched. A small trade can move it in a thin book, which makes it a poor sole trigger for liquidations.

The **mark price** is the venue's fair-value estimate used for unrealized profit and loss and commonly for liquidation. BitMEX says its perpetual fair price equals the index plus a decaying funding basis. Fair marking is meant to prevent a manipulated or illiquid last trade from liquidating accounts, but the protection is only as sound as the index and mark methodology.

An **impact price** estimates the average execution price for a specified notional on the bid or ask. Funding formulas use it to ignore a token top-of-book quote that cannot absorb meaningful size. Hyperliquid defines its premium from impact bid and ask prices relative to its oracle. BitMEX similarly uses impact prices in its premium index. The impact notional is therefore an economically important venue parameter: a shallow book can produce a larger premium signal for the same displayed mid-price.

These prices can diverge during stress. A trader may enter at the last price, see unrealized P&L at the mark, pay funding calculated from a premium index, and be liquidated when the mark crosses a threshold, while the liquidation engine actually executes into the order book. Marking can reduce false triggers, but it cannot manufacture exit liquidity.

## What the funding formula really measures

Most prominent formulas contain an interest component and a premium component. A common stylized form is

$$
F=P+\operatorname{clamp}(I-P,-d,d),
$$

where $P$ is a time-averaged premium index, $I$ is an interest-rate component, and $d$ is a dampening band. When $I-P$ lies within the band, the formula can settle near $I$. When the perp premium is large, funding increasingly reflects that dislocation.

The resemblance across venues should not obscure implementation differences. BitMEX documents eight-hour funding, a time-weighted premium, a dampener, and caps related to the gap between initial and maintenance margin. Hyperliquid documents hourly payments equal to one eighth of an eight-hour formula, with premium samples taken every five seconds, a fixed interest component, and a stated 4% hourly cap. Bybit documents contract-dependent interval and limit rules and says its settlement frequency can switch in extreme conditions. A rate cannot be compared responsibly until it is normalized to the same interval and its cap is known.

Annualizing is especially treacherous. If an eight-hour rate $f$ persisted unchanged for a year, a simple annualization would be approximately $3\times365\times f$. Compounding would produce a different number. But the persistence premise is usually false: funding responds to basis, positioning, prices, and arbitrage. A spectacular annualized dashboard number may describe one interval in a dislocated market, not an investable one-year return.

The funding rate is also not simply the net number of longs minus shorts. Every matched derivative has a long and a short. “Long crowding” instead means that aggressive demand, willingness to pay carry, leverage, concentration, or vulnerability is asymmetric. A small set of highly leveraged longs can be fragile even though the number of contracts long equals the number short. Conversely, large positive funding may be paid by well-capitalized directional holders to diversified market makers and cash-and-carry arbitrageurs.

## From leverage to liquidation

Leverage is exposure relative to equity. A position with notional $N$ and posted equity $E$ has rough leverage $L=N/E$. Before fees, funding, and maintenance requirements, a move of about $1/L$ against the position consumes equity. At 20 times leverage, a 5% adverse move is roughly the entire starting equity; actual liquidation occurs earlier because a venue requires maintenance margin and needs a buffer to close the account.

Suppose a trader posts $10,000 and opens a $100,000 linear long, or 10-times leverage. A 4% fall creates roughly a $4,000 mark-to-market loss. A positive funding payment of 0.05% costs another $50 for that interval because funding is charged on notional, not merely on posted collateral. The same $50 is only 0.05% of exposure but 0.5% of starting equity. Repeated carry therefore reduces the cushion even if spot is unchanged.

Liquidation begins when account equity falls below the venue's maintenance requirement. The engine cancels orders, assumes or closes the position, and sells a long or buys back a short. Larger positions commonly face higher margin tiers because they are harder to exit. Isolated margin confines available collateral to a position; cross margin allows other account equity and P&L to support it, which can delay one liquidation but transmit losses across positions.

If the engine closes the position before losses consume the allocated buffer, any remaining mechanism-specific surplus may support an insurance fund. If it cannot close before the account reaches its bankruptcy price, the venue needs a loss-allocation rule. Depending on the platform, that can include an insurance fund, partial liquidation, backstop liquidity, or auto-deleveraging, which reduces profitable opposing positions. “The exchange liquidates you” is therefore only the beginning of the question. The important tail-risk question is who bears a deficit when liquidation execution is worse than the risk model assumed.

Collateral can amplify the move. In a stablecoin-margined linear contract, collateral value is comparatively stable unless the stablecoin depegs. In an inverse or coin-margined long, the collateral may be the same cryptoasset whose price is falling. The account then suffers both derivative losses and shrinking dollar collateral—a form of wrong-way risk. Cross-collateral systems add correlations among assets, haircuts, oracle dependencies, and venue discretion.

## How a crowded trade becomes a cascade

Funding does not cause every liquidation cascade, but it can reveal one part of the setup. A stylized long cascade has six stages:

1. Directional demand lifts the perp relative to spot, increasing the premium component and positive funding.
2. Rising prices or low recent volatility encourage larger positions and thinner equity cushions. Open interest grows.
3. An adverse spot move reduces long equity. Coin collateral may fall simultaneously.
4. Mark prices cross maintenance thresholds. Liquidation engines submit sell orders or transfer positions to backstops.
5. Forced sales consume bid depth and move the perp and connected spot markets lower, triggering additional liquidations.
6. Open interest collapses, basis and funding normalize or overshoot negative, and the survivors depend on insurance, backstops, and auto-deleveraging rules.

The loop is mechanical because liquidators are not deciding whether the fundamental thesis remains valid. Their mandate is to reduce exposure. That urgency makes market depth more important than headline volume. A market can report enormous turnover yet have little bid capacity during a synchronized exit. Depth can also be endogenous: market makers widen or cancel quotes when volatility, adverse selection, inventory, or venue solvency risk rises.

The same process works upward for crowded shorts. Rising prices force purchases, which can accelerate the rise. Very negative funding may coexist with short vulnerability, but a squeeze still needs a catalyst, tight exit capacity, or enough price movement to reach margin thresholds.

Academic evidence supports the general mechanism but should be used carefully. Cheng, Deng, Wang, and Yu's study of BitMEX perpetual data found substantial forced liquidations relative to outstanding positions and very high leverage among liquidated traders; their extreme-value analysis concluded that normal return assumptions understate prudent margin. That result concerns a particular venue, era, and model, not a timeless optimal leverage rule. Theoretical work by Ackerer, Filipović, and Pulido formalizes a perpetual-futures contract whose funding specification can anchor the contract to its underlying. Together, the literature supports the plumbing—funding as an anchor and margin as a nonlinear constraint—without turning any single funding observation into a forecast.

## A crowding dashboard needs several columns

No single metric identifies a fragile market. A defensible reading combines:

| Signal | What it can show | What it cannot show alone |
| --- | --- | --- |
| Funding rate and premium | Cost of holding one side; local perp dislocation | Total leverage, trader identities, or reversal timing |
| Open interest | Gross outstanding contracts | Directional imbalance; whether positions are hedged elsewhere |
| Price plus open-interest change | Whether exposure is being added or removed during a move | Exact initiator, leverage, or liquidation distance |
| Dated-futures basis | Broader cost of synthetic exposure across maturities | Perp-specific fragility or executable arbitrage capacity |
| Liquidation prints | Forced flow already occurring | Hidden near-liquidation positions or complete venue coverage |
| Order-book depth and slippage | Capacity to absorb urgent orders now | Resilience after makers cancel; hidden or off-venue liquidity |
| Collateral composition | Wrong-way and depeg exposure | Account-level buffers and cross-margin offsets |
| Position concentration | Dependency on a few accounts | Their hedges, collateral mobility, or intent |

A useful regime description distinguishes at least four cases. Rising price, rising open interest, and positive funding can reflect newly added leveraged longs, but may also be the derivative leg of spot accumulation or structured hedging. Rising price with falling open interest may be short covering rather than new long leverage. Falling price with rising open interest and negative funding may reflect fresh shorts. Falling price with collapsing open interest often indicates long deleveraging. These are hypotheses to test across venues, not identities.

Cross-venue dispersion is informative. If one small venue shows extreme funding while major books do not, local inventory or liquidity may dominate. If funding, basis, and open interest become extreme across venues, a common positioning factor is more plausible. But aggregation introduces its own errors: symbols may refer to wrapped or bridged assets, contract multipliers differ, some data count both sides, and venues can report open interest in coins, contracts, or dollars.

## Why funding can stay extreme

An apparently easy funding-arbitrage return is compensation for constraints. The textbook positive-funding package buys spot and shorts the perp, aiming to neutralize first-order price exposure and receive funding. Yet it requires capital on multiple rails and creates basis, execution, custody, venue, stablecoin, borrow, fee, settlement, and liquidation risks. If spot and the short are on different venues, profits on one platform may not arrive quickly enough to support margin on the other. During an outage or withdrawal freeze, the hedge can be economically offset but operationally stranded.

Funding itself can reverse before entry costs are recovered. The short perp can trade further rich, producing mark-to-market pressure even if eventual convergence seems likely. A venue's mark or index can diverge from the spot asset actually held. Tokens with transfer restrictions, scarce borrow, bridges, staking delays, or fragmented spot markets are harder to arbitrage. Capacity is finite, so the rate can remain extreme longer than a thinly capitalized trader can remain solvent.

The sign can also reflect ordinary financing. If dollars are costlier to borrow than the base asset, a modest positive interest component may be a neutral design baseline rather than exuberance. Venue dampeners can pin funding near that baseline across a range of small premiums. Caps then truncate the visible rate precisely when the underlying pressure is larger than the display can express.

## Common analytical mistakes

**Treating positive funding as proof that price must fall.** Funding raises the cost of the long side and may attract arbitrage, but a strong spot-led rally can persist while longs willingly pay. Timing requires a trigger and a map of liquidation capacity.

**Treating negative funding as free income for longs.** A long receiving funding can lose far more from price decline, depeg, execution, or liquidation. The payment is not downside insurance.

**Comparing raw rates with different intervals.** A one-hour rate and an eight-hour rate are not directly comparable. Neither should be annualized without stating a persistence assumption.

**Calling every carry trade risk-free.** Delta hedging removes a local first-order price exposure. It does not remove basis, gap, margin, custody, counterparty, index, liquidity, legal, or operational risk.

**Using open interest as net bullishness.** Every contract has both sides. Open interest measures gross exposure; direction must be inferred from prices, basis, flows, and participant structure.

**Assuming liquidation data are complete.** Public feeds can be venue-specific, aggregated, delayed, or changed by partial-liquidation rules. They observe realized forced flow, not the distribution of accounts near maintenance margin.

**Ignoring the denominator.** A tiny funding payment on notional can be large relative to thin posted equity. Risk belongs on equity and liquidation distance, not only on contract value.

## A durable reading protocol

First identify the exact contract: linear, inverse, or quanto; collateral and settlement asset; index; mark methodology; funding interval and cap; initial and maintenance margin tiers; liquidation process; insurance fund; and auto-deleveraging rule. Then normalize funding to a common interval without pretending it will persist.

Second, separate **price pressure** from **balance-sheet fragility**. Premium and funding describe relative pricing. Open interest, leverage estimates, collateral, concentration, and distance to liquidation describe fragility. Order-book depth describes the capacity to absorb the resulting forced flow.

Third, compare venues and the spot market. Ask whether the move is spot-led or perp-led, whether dated basis confirms expensive leverage, whether funding is broad or local, and whether the reference index rests on deep, accessible spot markets. Apply [[Wrapped assets and duplicate crypto exposure]] when the “same” asset exists across wrappers or bridges.

Finally, write scenarios rather than a directional call: modest reversal with stable depth; sharp move with market makers withdrawing; collateral depeg; index constituent outage; exchange withdrawal halt; and simultaneous cross-margin losses. Funding is best treated as one state variable in that system. Its value is diagnostic, not oracular.

## Sources

- [BitMEX, Perpetual Contracts Guide](https://www.bitmex.com/app/perpetualContractsGuide) — primary specification of perpetual mechanics, eight-hour funding, premium and interest components, dampening, caps, and funding on position value (accessed 2026-07-09).
- [BitMEX, Fair Price Marking](https://www.bitmex.com/app/fairPriceMarking) — primary description of index-based fair marking, funding basis, unrealized P&L, and liquidation marking (accessed 2026-07-09).
- [BitMEX, Liquidation](https://www.bitmex.com/app/liquidation) — primary description of maintenance margin, risk tiers, order cancellation, incremental liquidation, and liquidation-system behavior (accessed 2026-07-09).
- [Bybit, Introduction to Funding Rate](https://www.bybit.com/en/help-center/article/Introduction-to-Funding-Rate) — primary venue formula, premium averaging, rate limits, and dynamic settlement-frequency rules (accessed 2026-07-09).
- [Bybit, Funding Fee Calculation](https://www.bybit.com/en/help-center/article/Funding-fee-calculation) — primary worked calculation using position value and mark price (accessed 2026-07-09).
- [Bybit, Index Price Calculation](https://www.bybit.com/en/help-center/article/Index-Price-Calculation) — primary index methodology and constituent-handling reference (accessed 2026-07-09).
- [Hyperliquid, Funding](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/funding) — primary description of hourly payments, oracle and impact-price premium, interest component, formula, cap, and payment notional (accessed 2026-07-09).
- [Hyperliquid, Contract Specifications](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/contract-specifications) — primary description of non-expiring contracts and funding-based convergence (accessed 2026-07-09).
- [Julien Ackerer, Damir Filipović, and Sergio Pulido, “The Perpetual Futures Contract,” Swiss Finance Institute Research Paper 23-73](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4506223) — theoretical treatment of perpetual-futures pricing and funding design; later published in *Mathematical Finance*.
- [Zhiyong Cheng, Jun Deng, Tianyi Wang, and Mei Yu, “Liquidation, Leverage and Optimal Margin in Bitcoin Futures Markets”](https://arxiv.org/abs/2102.04591) — empirical BitMEX study of forced liquidations, leverage, tail returns, and margin adequacy; results are venue-, period-, and model-specific.
- [Financial Stability Institute, “Regulating and supervising the risks of cryptoasset markets”](https://www.bis.org/fsi/fsipapers27.pdf) — official cross-market context on crypto intermediaries, leveraged derivatives, automatic liquidation, and perpetual funding.

## Open questions

- Which public datasets can reconstruct account-level distance to liquidation without relying on incomplete exchange liquidation feeds?
- How much of cross-venue funding dispersion is explained by collateral mobility, user segmentation, index design, or market-maker balance-sheet limits?
- When funding caps bind, which combination of premium, impact prices, and dated basis best measures the hidden intensity of the imbalance?
- How should a common stress test model the joint failure of a stablecoin margin asset, spot-index constituent, bridge, and derivatives venue?
- Do partial liquidation and auto-deleveraging designs reduce aggregate loss, or merely change who bears it during the largest gaps?
