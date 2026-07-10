---
title: Information aggregation in prediction markets
created: 2026-07-09
source: llm
status: seed
tags: [prediction-markets, politics, forecasting, information-aggregation, market-design]
desk: Political prediction markets
---

Prediction markets can combine dispersed evidence into a useful forecast, but aggregation is an achievement of a particular contract, participant population, and trading mechanism—not an automatic property of putting a price on an event.

Up: [[Political prediction markets]]

## What aggregation means

Suppose three political researchers observe different evidence about an election. One knows that late registrations shifted toward a party, another has a credible district-level poll, and a third knows that the pollster historically overstates that party. **Information aggregation** occurs when their interaction produces a public forecast that incorporates more of this dispersed evidence than any participant's initial forecast did alone. A market can aggregate even if no trader ever learns everyone else's raw signal. Orders and prices transmit enough about willingness to buy or sell that informed traders update and trade again.

This definition is stronger than saying that a market price moved after news. A price can move because one trader arrived, because liquidity disappeared, or because an uninformed order consumed the best quote. It is also different from [[Prediction-market calibration]]. Calibration asks whether events quoted near a probability happen at the corresponding frequency across a defined sample. Aggregation asks whether the mechanism combined information held in different places. A market may aggregate the available evidence and still forecast badly because everyone lacks a crucial fact. Conversely, it may land near the outcome by luck without aggregating much.

The classic intellectual case begins with Friedrich Hayek's account of the price system. Knowledge relevant to a decision is often distributed across people and circumstances; no central observer possesses it in full. Prices can economize on communication by summarizing how dispersed knowledge affects marginal choices. Prediction markets apply that logic to contingent claims. A trader who thinks a binary contract's payoff is more likely than its cost can buy; one who thinks it is less likely can sell or buy the complementary claim, depending on the mechanism. Their orders alter the terms faced by everyone else.

Yet a prediction-market price is not a literal average of private probabilities. The marginal order moves the price. Influence depends on wealth, confidence, risk tolerance, information, costs, inventory, access, and the market maker or order book. The question is therefore not whether a crowd contains wisdom. It is whether the rules let better-supported beliefs exert enough corrective pressure on price while allowing traders to learn from one another.

## A minimal mechanism

Take a binary contract paying $1 if an event occurs and $0 otherwise. In a frictionless, risk-neutral benchmark, a trader with probability belief $q$ values the payoff at $q$ dollars. If the contract can be bought at $p<q$, the trade has positive expected value; if it can be sold at $p>q$, selling does. Repeated trades can move the public price toward a value consistent with the information revealed through orders.

The important word is **benchmark**. Real traders are risk averse, capital constrained, and strategically aware. A buyer may stop before price reaches her belief because the remaining edge is too small for the risk. A seller may be unable to short. Fees and spread create a no-trade interval. A trader may infer that an aggressive counterparty knows something and revise instead of trading. Thus the observable price reflects both beliefs and the process by which beliefs become orders. [[From event-contract prices to probabilities]] explains why the resulting quote must be normalized before it is read as a probability; [[Bid-ask spreads as probability uncertainty]] explains why an executable interval can be more honest than a midpoint.

Aggregation has two linked stages:

1. **Elicitation:** people who possess useful information must have a reason and an ability to express it through orders.
2. **Transmission:** the trading mechanism must turn those orders into prices that help other participants infer and act on the information.

Profit incentives help with elicitation because correct contrarian beliefs can earn money rather than merely lose a vote in a meeting. Markets also weight contributions endogenously: traders who perceive larger discrepancies can take larger positions, and successful traders may accumulate resources or reputation. But this weighting is not guaranteed to track epistemic quality. Wealth is not knowledge; confidence can be mistaken; and traders with valuable information may rationally remain small because their signal is weak or their risk budget is limited.

## What laboratory markets establish

Controlled experiments provide the cleanest evidence that prices can synthesize signals. Researchers can specify the true state, give different participants different pieces of information, vary the securities, and compare the resulting price with equilibria implied by partial or pooled information.

Charles Plott and Shyam Sunder's 1982 experiments studied markets for a one-period security when some participants held insider information. Prices often converged toward levels predicted by models in which information becomes reflected in market behavior. The stronger result came with their 1988 *Econometrica* experiments. Each trader received information that was insufficient alone but informative in combination. With a single compound security and identical preferences, markets often approached the fully revealing rational-expectations benchmark. When traders had different preferences, however, the same single-security design aggregated little: an order could reflect private information or simply a different valuation, and observers could not readily distinguish the two. Replacing the compound security with a complete set of state-contingent claims restored much stronger aggregation even with heterogeneous preferences.

That contrast is foundational because it identifies a mechanism-design condition, not merely a success story. Prices communicate only through the vocabulary of available claims. If several states generate different private values but the market offers one coarse payoff, a trade confounds information about the state with taste for the payoff. A richer set of claims lets participants express distinctions and lets prices cross-check one another. Political applications face the same issue. One contract on “Party A wins the presidency” may aggregate less structure than a coherent family covering nomination, popular vote, electoral vote, turnout, and chamber control. Richer menus can reveal more, although they also divide liquidity and create the coherence problems discussed in [[Logical coherence across prediction markets]].

Laboratory evidence also disciplines a popular oversimplification: markets need not require every trader to reason perfectly. Experimental prices can become informative even when individuals make errors, because a subset of attentive marginal traders responds to discrepancies. But success is not proof that irrationality is irrelevant. If errors are correlated, if informed traders face binding constraints, or if market design hides the distinction between information and preferences, error can survive in price.

## Evidence from political markets

The Iowa Electronic Markets provide long-running field evidence under real-money incentives. Robert Forsythe, Forrest Nelson, George Neumann, and Jack Wright's study of the 1988 Iowa Political Stock Market found that its vote-share forecasts outperformed the polls they compared them with, despite substantial judgment biases among traders. Their account emphasized marginal traders: market participants were not representative voters, but a sufficient set of less-biased traders recognized and traded against mispricing. This is precisely why a market is not a poll. A poll estimates population preferences through sampling; a market attempts to synthesize predictive information through voluntary, price-sensitive action.

Later evidence extends the performance record without establishing a universal law. Joyce Berg, Forrest Nelson, and Thomas Rietz compared contemporaneous Iowa vote-share forecasts with 964 national polls across the five U.S. presidential elections from 1988 through 2004. The market forecast was closer to the eventual two-party vote split 74% of the time and had its clearest relative advantage more than 100 days before election day. The comparison supports the claim that the market incorporated information useful beyond a single poll—possibly other polls, fundamentals, anticipated campaign effects, and corrections for known survey patterns.

But forecast superiority is only indirect evidence of aggregation. The market could reuse a public polling average plus a good adjustment model. The set of elections is small, observations within an election are highly dependent, and a vote-share contract is not the same object as a winner-take-all probability. A fair conclusion is that these political markets produced useful composite forecasts in the studied settings, not that every displayed political price is a sufficient statistic for all public and private evidence.

Field markets can also reveal which participants matter. The 1988 study reported that traders' political preferences and biases did not mechanically determine the final forecast; price-setting activity by better-calibrated traders could counter the average participant. This endogenous correction is an advantage over an unweighted survey of opinions. It also creates a selection question. If the few corrective traders leave, hit position limits, or cannot take the opposite side, the same crowd can yield a worse price without any visible change in head count.

## Organizational markets and shared error

Internal corporate markets test aggregation where useful knowledge is dispersed across teams. Bo Cowgill, Justin Wolfers, and Eric Zitzewitz studied Google's prediction markets, which asked employees about project completion, product demand, and other organizational outcomes. The markets conveyed useful information, but they also documented optimistic bias. New hires were especially optimistic, optimism was stronger when Google's stock price rose, and trading was correlated among employees who sat near each other or shared social and work relationships.

These findings cut both ways. An internal market can make organizational information visible without requiring a manager to know who possesses it. At the same time, participation was not representative of the workforce, and social proximity made signals less independent than a “wisdom of crowds” story might assume. Ten traders repeating a team's shared narrative are not equivalent to ten independent measurements. The price may efficiently aggregate the orders submitted while still underweighting facts held by nonparticipants or lower-status employees.

Political markets have analogous dependence. Traders read the same polls, follow the same accounts, and may copy the same model. A rapid consensus can therefore mean either efficient synthesis or synchronized attention. Counting traders, trades, or dollars does not reveal the effective number of independent information sources. A rigorous analyst asks what evidence could have entered, who could trade, and whether apparently separate beliefs share an upstream source.

## Why full revelation is impossible as a general rule

The Grossman–Stiglitz paradox supplies the central theoretical limit. If market prices perfectly and costlessly revealed all costly information, nobody would pay to acquire that information, because there would be no profit left from trading on it. Without acquisition, the fully informative price could not exist. Informational efficiency must therefore be an equilibrium with some residual error or reward that compensates informed participation.

This point changes the right standard. The relevant question is not “Does the price contain all information?” but “How much useful information does this market incorporate, how quickly, at what cost, and relative to which alternative?” Some predictable discrepancy can be the payment that sustains research. Conversely, a market that appears nearly efficient after a major public poll may say little about its ability to discover obscure local information.

The no-trade logic adds another tension. With common priors, fully rational Bayesian agents, and common knowledge of rationality, a willingness to trade can reveal that the counterparty knows something, potentially unraveling speculative trade. Actual prediction markets trade because assumptions fail in productive and unproductive ways: participants differ in priors, information, hedging needs, entertainment value, risk tolerance, and reasoning. Those differences generate liquidity, but they also weaken the clean interpretation of price as a pooled posterior.

## Conditions that improve aggregation

No single checklist guarantees informational efficiency, but the evidence suggests several favorable conditions.

**Clearly specified and discriminating claims.** Traders must know which state pays. Ambiguous resolution makes research about the political event compete with research about adjudication. A well-designed family of claims can separate hypotheses that one coarse contract confounds. [[Prediction-market resolution risk]] is therefore an information problem as well as a legal one.

**Two-sided, executable liquidity.** Informed beliefs correct price only if traders can act at meaningful size in both directions. A cheap-looking yes contract is not fully contestable if skeptical traders cannot sell, obtain no shares, or efficiently buy “no.” Bid–ask spread, depth, position limits, fees, collateral, and access determine how much information can become price.

**Diverse, partially independent evidence.** Demographic representativeness is not necessary for forecasting, as the Iowa evidence shows. Informational coverage is. A politically homogeneous group can forecast well if it contains diverse models and rewards correction; a demographically diverse crowd can fail if everyone consumes the same erroneous signal.

**Incentives large enough to correct, not so distorted that they dominate.** Stakes should reward costly research and disagreement. Yet wealth concentration, hedging demand, entertainment trading, or publicity motives can disconnect order size from information quality. Market subsidies or automated market makers can keep trading possible, but their parameters affect how strongly orders move prices.

**Time for error correction.** Manipulative or mistaken orders can create opportunity for informed counterparties, and experiments and Iowa episodes suggest that some distortions decay. That claim is conditional. Correction requires observability, capital, access, and time before settlement; a thin contract near expiry may not recover.

**A comparison architecture.** Aggregation should be tested against preregistered alternatives: a polling average, statistical model, expert aggregate, or participants' pre-trade forecasts. Measuring only final accuracy cannot show whether trading added information. The strongest design elicits initial beliefs, records signal structure, follows trades, and measures how much the market forecast improves beyond a mechanically defined baseline.

## Alternatives and limits

Markets are one aggregation technology among several. A simple average of independent forecasts often reduces idiosyncratic error and may outperform a thin market without requiring collateral or trading literacy. Properly weighted expert or superforecaster ensembles can preserve individual forecasts, expose disagreement, and avoid confusing risk appetite with confidence. Polling estimates what a target population currently says; statistical election models combine polls, fundamentals, and uncertainty under explicit assumptions. [[Proper scoring rules and market forecasts]] shows how a sponsor can elicit probabilities without operating a conventional exchange.

Markets have a comparative advantage when information is dispersed, updates arrive continuously, and participants can profit from correcting a public number. They are less attractive when claims are hard to define, participation is restricted, inside information creates ethical or legal concerns, or the sponsor needs an auditable explanation rather than a price alone. A hybrid can be better: maintain independent forecasts and a market, compare both prospectively, and investigate divergences rather than declaring one mechanism universally superior.

Several empirical hazards recur. Closing prices select one time and may benefit from late public information. Reusing many daily observations from a few elections exaggerates sample size. Contract selection can omit failures that never became popular. A market can appear prescient because its traders read the benchmark before trading. Prices can be accurate yet miscalibrated across probability bins, or calibrated yet no better than base rates. None of these objections nullifies aggregation; each specifies evidence needed to identify it.

For current political venues, the safest stored object is therefore not “the crowd believes 63%.” It is a timestamped contract definition, executable bid and ask, available depth, fees, access conditions, and a labeled interpretation of what evidence the market may be combining. Information aggregation is a hypothesis about the process behind that object, to be tested rather than assumed.

## Why it matters

Prediction markets are compelling because they promise a compact answer to a hard organizational problem: how to combine evidence that no analyst possesses in full. Laboratory experiments demonstrate that trading institutions can perform this function and that security design materially changes success. Political and corporate field studies show useful composite forecasts alongside bias, selection, and correlated information. The practical lesson is neither “trust the market” nor “markets are just gambling.” It is to treat a price as the output of an information-processing institution.

That framing makes analysis more demanding and more useful. It directs attention to who can trade, which distinctions the contracts express, whether informed disagreement is executable, how independent the signals are, and what baseline the market beats. A prediction market earns epistemic weight when those conditions and comparative evidence support it. The label alone earns none.

## Sources

- Friedrich A. Hayek, [“The Use of Knowledge in Society”](https://www.kysq.org/docs/Hayek_45.pdf), *American Economic Review* 35(4), 1945 — foundational account of dispersed knowledge and prices as communication; accessed July 9, 2026.
- Charles R. Plott and Shyam Sunder, [“Efficiency of Experimental Security Markets with Insider Information: An Application of Rational-Expectations Models”](https://doi.org/10.1086/261084), *Journal of Political Economy* 90(4), 1982 — controlled evidence on information integration in security markets; accessed July 9, 2026.
- Charles R. Plott and Shyam Sunder, [“Rational Expectations and the Aggregation of Diverse Information in Laboratory Security Markets”](https://doi.org/10.2307/1911360), *Econometrica* 56(5), 1988 — experiments showing how preference heterogeneity and the available security set alter aggregation; accessed July 9, 2026.
- Robert Forsythe, Forrest Nelson, George R. Neumann, and Jack Wright, [“Anatomy of an Experimental Political Stock Market”](https://gwern.net/doc/statistics/prediction/election/1992-forsythe.pdf), *American Economic Review* 82(5), 1992 — trader-level and market-level evidence from the 1988 Iowa market; accessed July 9, 2026.
- Sanford J. Grossman and Joseph E. Stiglitz, [“On the Impossibility of Informationally Efficient Markets”](https://doi.org/10.2307/1805228), *American Economic Review* 70(3), 1980 — theoretical limit on costless full revelation; accessed July 9, 2026.
- Joyce E. Berg, Forrest D. Nelson, and Thomas A. Rietz, [“Prediction Market Accuracy in the Long Run”](https://www.biz.uiowa.edu/faculty/trietz/papers/long%20run%20accuracy.pdf), *International Journal of Forecasting* 24(2), 2008 — comparison of Iowa vote-share market forecasts with 964 polls; accessed July 9, 2026.
- Joyce E. Berg and Thomas A. Rietz, [“The Iowa Electronic Markets: Stylized Facts and Open Issues”](https://users.nber.org/~jwolfers/papers/InfoMarkets%28book%29.pdf), in *Information Markets*, 2006 — primary synthesis by IEM researchers of accuracy, trader behavior, and unresolved mechanisms; accessed July 9, 2026.
- Bo Cowgill, Justin Wolfers, and Eric Zitzewitz, [“Using Prediction Markets to Track Information Flows: Evidence from Google”](https://www.columbia.edu/~bc2656/GooglePredictionMarketPaper.pdf), 2009 manuscript, later published in *Auctions, Market Mechanisms and Their Applications* — field evidence on optimism, participation, and socially correlated trading in an internal market; accessed July 9, 2026.

## Open questions

- In field political markets, how much forecast improvement remains after controlling prospectively for the exact polls, models, and public news available to traders?
- What metric should estimate the effective number of independent information sources when traders share polls, social networks, or model code?
- When does adding a richer family of state-contingent political claims improve identification enough to offset the liquidity divided across contracts?
- How strongly do access restrictions, position limits, fees, and asymmetric shorting constrain informed correction on modern event-contract venues?
- Which hybrid design—market plus independent scored forecasts—best distinguishes genuine synthesis from synchronized copying?
