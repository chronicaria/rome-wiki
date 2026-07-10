---
title: Stablecoin depeg transmission
created: 2026-07-10
source: llm
status: seed
tags: [crypto, stablecoins, market-structure, defi, systemic-risk]
---

A stablecoin depeg spreads when a loss of confidence in one redemption promise changes the prices, balance sheets, or automated actions of systems that treat the token as cash-like collateral.

## A depeg is a gap between two prices

A dollar stablecoin has at least two economically distinct prices. The **primary-market price** is the amount an eligible holder can receive from an issuer or protocol through redemption. The **secondary-market price** is what anyone can obtain immediately on an exchange or automated market maker (AMM). A print at $0.97 therefore does not by itself prove that three cents of backing has disappeared. It may instead price delay, eligibility, operational uncertainty, transaction cost, or the risk that redemption will fail before it completes.

This distinction is the starting point for understanding transmission. Circle's terms, for example, commit to redeem one native USDC for one dollar subject to the terms, law, fees, and account eligibility. Circle separately warns that it does not guarantee a $1 price on third-party platforms. Direct redemption is chiefly an institutional rail; many end users must sell to an exchange or intermediary. If banking rails are closed for a weekend while crypto trades continuously, arbitrage capital cannot instantly collapse the secondary-market discount even if eventual redemption remains likely. The peg is consequently an institutional arrangement, not a property embedded in the token.

The relevant question is not simply “did it depeg?” but: **which claim changed, who can enforce it, on what timeline, and which other systems use that claim as an input?** That framing connects this note to [[Stablecoin reserve and redemption risk]] and [[Stablecoin yield is a balance-sheet claim]].

## The first transmission channel is redemption itself

For a fully reserved custodial stablecoin, the intended lower-bound arbitrage is straightforward. An eligible dealer buys tokens below $1, sends them to the issuer, receives dollars, and earns the spread net of fees and financing. Burning the redeemed tokens contracts supply. Above $1, the dealer deposits dollars, mints tokens, and sells them, expanding supply. This mechanism works only when several conditions hold together:

- the reserve is sufficient and liquid;
- the issuer is willing and legally able to redeem;
- the arbitrageur is eligible and has operational access;
- fiat settlement and blockchain settlement are available;
- the expected spread exceeds fees, price risk, funding cost, and delay risk.

A shock can weaken any link without producing immediate insolvency. News that a reserve bank has failed increases the probability of a reserve shortfall. A banking outage delays dollars even if the assets are intact. Compliance restrictions segment holders into those who can redeem and those who can only sell. Congestion raises the cost of reaching an issuer or exchange. Uncertainty widens the return demanded by arbitrageurs. The market discount then becomes a noisy composite of expected recovery, time, and risk appetite.

The mechanism is different for crypto-collateralized and algorithmic coins. A crypto-collateralized system generally promises that overcollateralized positions, fees, auctions, and incentives will keep its token near target; it may not offer every holder an unconditional dollar claim. An endogenous-collateral coin may let holders exchange the stablecoin for a dollar's worth of a volatile companion token. That rule can look like redemption, but it pays with newly issued risk rather than outside money. If redemptions dilute the companion token and its price falls, more of it must be issued per stablecoin, weakening the backing further. The “arbitrage” can become a death spiral rather than a stabilizer.

TerraUSD (UST) in May 2022 illustrates this distinction. The BIS describes UST as convertible into $1 worth of Luna. When confidence broke, holders burned UST for newly minted Luna and tried to sell the Luna. Issuance expanded just as demand vanished; Luna's price collapsed, making subsequent redemptions more destructive. This was not merely a temporary secondary-market dislocation around an intact pool of dollars. The redemption asset was endogenous to confidence in the same system.

## Pools transmit order flow and inventory risk

Stablecoin AMMs are a fast visible transmission surface because they warehouse several cash-like tokens in a common pool. Curve's StableSwap invariant deliberately concentrates liquidity around parity. Near $1 this produces low slippage and makes stablecoin exchange efficient. The same design means that a large exit from one coin can rapidly change pool composition: sellers deposit the doubted coin and withdraw the coin they trust. The pool becomes overweight the weak asset, while its marginal exchange rate moves away from one.

Three consequences follow.

First, the pool **discovers and broadcasts** the depeg. Arbitrageurs compare its price with centralized venues, issuer redemption, and other pools. Their trades propagate the new relative price across venues. This is ordinary price transmission, not necessarily contagion in the stronger sense of causing new fundamental losses.

Second, liquidity providers inherit inventory concentration. A nominally diversified stablecoin pool can end up holding mostly the impaired coin. The low-slippage region is not a guarantee that all constituents are worth the same; it is a trading design premised on their remaining near parity. Once order flow pushes the pool far from balance, withdrawing “one's share” may realize the pool's adverse selection. LP tokens used elsewhere as collateral can then transmit the loss into lending systems.

Third, routing can connect pools that share only one constituent. An aggregator may sell the weak coin through several intermediate stablecoins, distributing inventory and moving quoted prices. Cross-chain wrapped versions add another layer: native issuer-backed tokens, canonical bridges, and third-party wrapped representations can have different redemption paths. A bridge-specific discount should not automatically be read as impairment of native reserves, yet protocols or dashboards that collapse the identities can spread that signal. This is one reason [[Oracle bridge and sequencer risk]] and precise asset identity matter.

StableSwap's white paper compares its amplification around parity to leverage. That is a useful intuition, but not a claim that the pool borrows money. Concentrated liquidity offers unusually deep execution while the parity assumption is valid; once it is not, pool inventory can change sharply before the curve supplies strong price resistance. Exact outcomes depend on pool parameters, fees, balances, routing, and arbitrage capacity. “A Curve imbalance caused the run” is therefore too strong unless transaction-level evidence establishes direction and timing. A pool may initiate selling, amplify it, or simply record a shock that began elsewhere.

## Oracles turn market prices into protocol actions

An AMM changes who holds what. An oracle can change how a protocol **accounts** for what they hold. Lending markets, derivatives, vaults, and synthetic assets need a reference price to calculate collateral value, debt, margin, or liquidation eligibility. Because a blockchain cannot natively know an external market price, protocols use oracle networks, time-weighted onchain prices, fixed assumptions, or hybrids.

A stablecoin depeg creates a difficult choice. If a protocol hard-codes a stablecoin at $1, borrowers may continue receiving full collateral credit for an asset the market values below par. If the token ultimately fails, the protocol can accumulate bad debt. If the oracle promptly marks it to market, collateral ratios fall and liquidations may begin during a temporary liquidity dislocation. Selling seized collateral into the same stressed market can deepen the discount. Neither policy is universally safe: the correct response depends on redemption quality, market depth, oracle latency, and the protocol's liabilities.

Price feeds also update discretely. A deviation threshold or heartbeat can produce a step change in onchain accounting after the market has already moved. Different chains and protocols may use different feeds, parameters, or fixed-price conventions, so the same token can have several operative prices at once. That segmentation creates arbitrage opportunities but also liquidation and insolvency risk. A borrower might withdraw stronger assets against collateral still valued at $1 in one venue while hedging or selling it below $1 elsewhere.

It is important to distinguish **market manipulation** from an **oracle failure**. In the first, the reported price may accurately reflect a thin or attacked market. In the second, the oracle reports data that does not represent the relevant market. Both can trigger harmful smart-contract actions, but evidence and remedies differ. Robust aggregation reduces dependence on one venue; it cannot decide the normative question of whether a redeemable token experiencing a weekend discount should be marked at spot, expected redemption value, or a conservative haircut.

## Collateral links convert a price shock into balance-sheet stress

Transmission becomes more than correlated trading when one stablecoin directly backs another. Before and during the March 2023 episode, DAI had material exposure to USDC through Maker's Peg Stability Module (PSM), which allowed conversion between DAI and approved stablecoins under protocol parameters. Economically, this gave DAI holders a liquid route tied to USDC and made USDC an asset on Maker's balance sheet. When USDC traded below $1, DAI's backing and exit mechanics were no longer independent of it.

This is a stronger causal link than two stablecoins merely sharing an exchange. A fixed or near-fixed conversion can import the weaker asset's valuation into the stronger coin. If users can deliver discounted USDC and receive DAI credited near $1, they rationally shift the impaired asset onto the protocol. Capacity limits, fees, governance intervention, and alternative collateral determine the eventual loss distribution. The linkage is analogous to a standing liquidity facility whose accepted collateral has become questionable.

Collateral transmission also works through loans. Suppose a borrower posts $150 of a stablecoin to borrow $100 of another asset. A 10% depeg reduces marked collateral to $135. If that crosses the liquidation threshold, keepers repay debt and seize collateral at a discount. They then need to finance or sell the seized token. Many simultaneous liquidations create one-way flow, particularly if the stablecoin is also the unit in which debts or liquidator profits are measured.

Conversely, a depegging stablecoin used as **debt** can produce windfalls or complications. If debt accounting assumes one dollar while the borrower can buy the token for less, repayment becomes cheaper in market value. If a protocol marks the debt down but collateral is sold against another oracle convention, solvency can shift in non-obvious ways. Stablecoin pairs are not symmetric merely because both names contain “USD.”

Collateral sales can reach non-stable crypto assets. A protocol, reserve manager, or leveraged trader may sell bitcoin, ether, Treasury tokens, or LP positions to raise the trusted stablecoin needed for redemption, margin, or repayment. This is the portfolio-rebalancing channel: the initial stablecoin shock creates demand for cash-like liquidity, and holders sell whatever is liquid. Evidence of contemporaneous crypto declines alone does not establish this path; wallet flows, liquidation records, reserve disclosures, and venue-level order data are needed.

## Leverage accelerates forced transmission

Leverage changes a choice to wait into an obligation to act. An unlevered holder who believes redemption will recover may tolerate a temporary discount. A margined trader may be liquidated before that thesis resolves. Several feedback loops can operate:

1. The stablecoin falls, reducing collateral value.
2. Margin requirements or liquidation thresholds bind.
3. Positions are closed and collateral is sold.
4. Pool imbalance and slippage worsen.
5. Oracles update, bringing more accounts below threshold.
6. Liquidators demand more compensation as execution risk rises.

The loop is path-dependent. Deep liquidity, conservative loan-to-value ratios, isolation caps, circuit breakers, and available arbitrage capital can absorb the shock. Congestion, correlated collateral, concentrated positions, and common oracle inputs can amplify it. [[Crypto liquidation cascades]] explains the general forced-sale mechanism; [[Perpetual funding and crowded leverage]] covers the derivative side.

The March 2023 Aave record gives concrete evidence rather than a hypothetical. Aave community reporting says USDC volatility produced roughly $300,000 of insolvencies and that risk contributors recommended freezing markets to halt liquidations and avoid crystallizing mark-to-market insolvencies at dislocated prices. That episode shows both automated transmission and discretionary interruption. It does not establish that every freeze reduces losses: freezing can also trap positions, prevent repayment or rebalancing, and shift risk to users or other venues.

## March 2023: a traceable cross-system episode

The USDC shock around Silicon Valley Bank is useful because its initiating information and resolution are unusually clear. Circle disclosed that $3.3 billion of USDC reserves, about 8% of the reserve at the time, was held at SVB. Crypto markets remained open while access to those bank deposits and the ultimate recovery were uncertain. USDC traded below parity; other stablecoins, including DAI, also fell. On March 12, U.S. authorities announced that all SVB depositors would be made whole. Circle then said the reserve risk had been removed and that the depeg closed as banking reopened.

A 2025 Federal Reserve note using granular data describes the SVB run as the trigger for USDC's depeg and the USDC shock as sparking a broader stablecoin sell-off. The official sequence supports several causal inferences:

- reserve-bank uncertainty impaired confidence in redemption;
- closed or constrained fiat rails limited immediate arbitrage;
- secondary-market selling repriced USDC;
- direct collateral and conversion links transmitted the shock to DAI and DeFi protocols;
- the government depositor-protection announcement changed expected recovery, after which prices normalized.

It does **not** show that the entire discount equaled expected reserve loss. At most 8% of reserves was reported at the failed bank, recovery was uncertain rather than known to be zero, and the market price also embedded settlement delay and risk aversion. Nor does simultaneous movement prove that every stablecoin was fundamentally exposed. Some flows were plausibly a generalized flight from stablecoins; others were flight **between** stablecoins, with the destination trading above parity. The FSOC's 2023 annual report independently records that the news sparked a run on USDC and that DAI depegged over the weekend.

This event also cautions against static labels. “Fiat-backed” did not eliminate bank counterparty or operating-hour risk. “Decentralized” DAI had a direct centralized-stablecoin exposure through its collateral architecture. “Onchain” venues depended on offchain banking and government decisions for final confidence. The relevant unit of analysis is the dependency graph, not the marketing category.

## How to evaluate a claimed transmission path

A disciplined analysis should reconstruct the chain rather than infer it from a price chart.

**Identify the initiating impairment.** Was there evidence of missing reserves, inaccessible reserves, smart-contract failure, a bridge exploit, governance action, or only a large sale? State the timestamp and what market participants knew then.

**Map enforceable redemption.** Record the redemption asset, eligibility rules, fees, capacity, settlement hours, legal seniority, and whether supply is burned. A promised $1 conversion into a volatile token is not equivalent to a dollar wire.

**Map direct exposures.** Measure which protocols held the stablecoin, accepted it at a fixed conversion, used it as collateral, paired it in pools, or used LP tokens containing it. Gross notional is not identical to loss: haircuts, overcollateralization, caps, and recovery matter.

**Separate prices.** Compare centralized exchanges, AMMs, oracle reports, issuer redemption, native and bridged tokens, and the numeraire used. A USDC/USDT quote cannot alone reveal which side moved relative to dollars.

**Find forced actions.** Liquidation transactions, emergency freezes, margin calls, reserve sales, redemptions, and supply burns are stronger evidence of transmission than social-media fear. Establish whether they preceded or followed the largest price move.

**Test alternatives.** Common exposure to the same macro news, broad risk-off trading, exchange outages, and data artifacts can produce comovement without contagion. A causal statement should explain why the proposed channel fits timing and quantities better than these alternatives.

## What can and cannot be generalized

Depeg transmission is nonlinear. A one-percent deviation under open redemption and deep liquidity can invite stabilizing arbitrage. The same deviation under closed rails, thin pools, and high leverage can trigger protective selling. A large discount may be less contagious if the token is isolated; a small discount can matter greatly if the token is treated as par collateral throughout DeFi.

There is no universal safe oracle policy, pool composition, or reserve model. Diversification can reduce exposure to one bank while adding more operational counterparties. Fixed-price accounting can bridge transient noise while concealing permanent impairment. Mark-to-market accounting recognizes loss while forcing sales into illiquidity. Circuit breakers buy time but redistribute optionality between borrowers, lenders, and liquidators. These are governance tradeoffs, not purely technical fixes.

The durable lesson is therefore modest: stablecoins transmit stress through claims and constraints. Redemption determines the anchor; pools redistribute inventory; oracles translate prices into rules; collateral links create balance-sheet exposure; and leverage forces timing. Which channel dominates is an empirical question for each event. None of this provides a basis for predicting a token's future price.

## Sources

- Circle, [USDC Terms](https://www.circle.com/legal/usdc-terms) — issuer redemption commitment, eligibility, and operating limitations.
- Circle, [USDC Risk Factors](https://www.circle.com/legal/usdc-risk-factors) — distinction between issuer redemption and third-party market price.
- Circle, [How Minting and Redemption Works](https://developers.circle.com/circle-mint/concepts/how-minting-works) — primary-market operational mechanics.
- Circle, [$3.3 Billion of USDC Reserve Risk Removed, Dollar De-peg Closes](https://www.circle.com/pressroom/3-3-billion-of-usdc-reserve-risk-removed-dollar-de-peg-closes) — issuer account of SVB exposure and resolution.
- Curve Finance, [StableSwap—efficient mechanism for Stablecoin liquidity](https://docs.curve.finance/assets/pdf/whitepaper_stableswap.pdf) — invariant design and concentrated liquidity around parity.
- Maker Protocol, [MakerDAO Technical Docs](https://docs.makerdao.com/) — protocol architecture, collateral, liquidation, oracle, and stabilization modules.
- Chainlink, [Securing Stablecoin Price Feeds and Maintaining Peg Stability](https://chain.link/article/stablecoin-price-feeds) — oracle functions and failure modes; vendor-authored and read accordingly.
- Aave governance forum, [Aave Resilient Through USDC Volatility](https://governance.aave.com/t/aave-resilient-through-usdc-volatility/12330) — contemporaneous protocol impact and mitigation report.
- Board of Governors of the Federal Reserve System, [In the Shadow of Bank Runs: Lessons from the Silicon Valley Bank Failure and Its Impact on Stablecoins](https://www.federalreserve.gov/econres/notes/feds-notes/in-the-shadow-of-bank-run-lessons-from-the-silicon-valley-bank-failure-and-its-impact-on-stablecoins-20251217.html) — granular reconstruction of the March 2023 event.
- Financial Stability Oversight Council, [2023 Annual Report](https://home.treasury.gov/system/files/261/FSOC2023AnnualReport.pdf) — official account of USDC and DAI stress.
- Bank for International Settlements, [Annual Economic Report 2022, Chapter III](https://www.bis.org/publ/arpdf/ar2022e3.htm) — UST/Luna mechanism and observed spillovers.
- Klages-Mundt et al., [While stability lasts: A stochastic model of noncustodial stablecoins](https://onlinelibrary.wiley.com/doi/10.1111/mafi.12357) — formal treatment of collateral, liquidation, and endogenous stablecoin dynamics.

## Open questions

- How much of a short-lived discount can be decomposed into expected reserve loss, settlement delay, redemption ineligibility, and intermediary balance-sheet scarcity?
- Which protocols still value external stablecoin collateral at a fixed dollar, and under what emergency conditions can that convention change?
- How should native, bridged, and wrapped stablecoins be represented in dependency maps so that one form's failure is not misattributed to another?
- When do freezes and oracle circuit breakers reduce aggregate losses rather than merely shift them across users, chains, and venues?
- Can transaction-level event studies reliably distinguish an AMM that initiated a run from one that only recorded or amplified offchain information?
