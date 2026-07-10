---
title: Participant access and selection in political prediction markets
created: 2026-07-10
source: llm
status: seed
tags: [prediction-markets, politics, forecasting, market-microstructure, regulation]
as_of: 2026-07-10
desk: Political prediction markets
review_after: 2026-07-17
---

A political prediction-market price aggregates the valuations of people who were eligible, able, willing, funded, and active enough to trade—not a representative sample of voters or experts.

Up: [[Political prediction markets]] · Related: [[Information aggregation in prediction markets]] · [[Order-book microstructure of event contracts]] · [[Prediction-market calibration]] · [[Prediction-market regulatory docket]]

## The access funnel

Calling a market price “what people think” skips the process that determines whose orders can affect it. The relevant population is not the electorate, the public, or even everyone who visits the venue. It is the residue of an access funnel:

1. a person must be eligible under the venue agreement and applicable rules;
2. the person's jurisdiction and physical location must be supported;
3. identity, age, sanctions, account, and payment checks must be satisfied where required;
4. the person must possess compatible money, banking or crypto infrastructure, devices, language ability, and technical competence;
5. the person must notice the contract, understand its resolution terms, and accept the venue's financial and nonfinancial costs;
6. the person must choose to risk capital and submit an order;
7. the order must be competitive or marketable enough to influence an executable quote or trade.

Each stage selects participants. The selection can improve a forecast if it concentrates informed and motivated traders. It can worsen one if it excludes people with relevant local knowledge, concentrates correlated viewpoints, or makes contrarian correction too costly. The net effect is empirical, contract-specific, and time-varying.

This is why participant access belongs beside the order book in a research record. A price cannot be interpreted from contract wording and liquidity alone. It also reflects which population could reach that book and which subset chose to supply its marginal orders.

## Eligibility is a market-design variable

Eligibility rules create the first boundary. They can include age, legal capacity, sanctions status, regulatory disqualification, entity type, employment or insider restrictions, residency, physical-location requirements, and venue-specific exclusions. Some restrictions apply across an account; others attach to a contract or participant role. Because the relevant documents can change, a researcher should archive the dated member agreement, help page, and contract rules rather than infer eligibility from a platform's marketing.

Kalshi's individual signup guidance dated March 10, 2026 says an applicant must be at least 18 and pass document verification if requested. It says the exchange is internationally accessible while some jurisdictions remain restricted, and directs readers to the Kalshi Member Agreement for the operative geographic terms. The current agreement also conditions access on applicable law and Kalshi policy. These sources establish the venue's stated rules, not that every nominally eligible applicant can successfully onboard or that trading is lawful for a particular person. This note is research, not legal advice.

The Iowa Electronic Markets illustrate a different design. They are small, real-money research and teaching markets operated by the University of Iowa under a CFTC no-action framework, historically with investment limits. The first 1988 political market drew from University of Iowa students, faculty, and staff; the potential pool later expanded nationally. That history is a useful natural contrast: “the market” can refer to an academic experiment with deliberately bounded stakes and recruitment or to a commercial venue seeking a much larger population. Forecast performance from one design cannot be transferred to the other without examining participation, incentives, limits, and contract set.

Eligibility is not equivalent to participation. A rule permitting millions of adults to open accounts does not show that they did so, and an account count does not show who supplied price-setting orders. Conversely, a narrow eligible population need not yield a poor forecast if enough informed traders participate and erroneous prices invite correction. Market breadth is a capacity for aggregation, not proof that aggregation occurred.

## Jurisdiction changes the information pool

Geographic access is especially important for political contracts because political knowledge is often local. Residents may understand ballot procedure, coalition bargaining, local media, language, institutions, and candidate networks better than outsiders. Yet those same residents may be excluded, face higher onboarding friction, or be legally uncertain about participation. A market about a country can therefore be priced mainly by observers elsewhere.

Jurisdiction also changes the composition of comparative markets. Two venues displaying prices for nearly identical election questions may draw different national, linguistic, regulatory, and payments populations. A cross-venue gap can reflect different beliefs, but it can also persist because the people best placed to arbitrage it cannot access both venues, cannot move compatible collateral between them, or face different identity and banking requirements. [[Cross-market arbitrage and contract basis risk]] therefore needs an access column, not merely matched semantics and timestamps.

Physical location, nationality, residency, and citizenship are not interchangeable. A venue agreement may use more than one, and a platform can apply technical geofencing in addition to contractual representations. Researchers should not advise users how to bypass such controls. Nor should blockchain settlement be described as universal access: a public ledger may be globally readable while the trading interface, terms, sanctioned-address screening, fiat on-ramps, stablecoin availability, and local law remain restrictive.

Access can change during a forecast series. A venue may add countries, withdraw from them, tighten geoblocking, alter banking partners, or migrate customers to a different entity. Such a change is a population intervention. If price behavior changes afterward, the series should not automatically be treated as generated by the same forecasting process. The access-policy version belongs in the immutable snapshot manifest alongside the contract version.

## Identity verification selects as well as protects

Identity controls serve regulatory and market-integrity purposes. The federal customer-identification rule for futures commission merchants and introducing brokers requires a written, risk-based program designed to form a reasonable belief that the firm knows each customer's true identity. It addresses documentary and nondocumentary verification, recordkeeping, government-list checks, and circumstances in which identity cannot be verified. Kalshi says it collects signup information to comply with applicable U.S. law and CFTC rules and may request identification documents; its help center says identity confirmation applies to people trading on the platform.

Those controls can deter duplicate accounts, sanctioned participation, fraud, and some forms of evasion. They can make participant-level surveillance and enforcement more credible. That may improve price integrity. But verification also imposes costs: documents, a stable identity record, supported address formats, privacy trust, time, device compatibility, and tolerance for possible review or rejection. People who lack standard documentation, have name or address mismatches, distrust data collection, or cannot complete an automated process may be underrepresented even if formally eligible.

The forecasting implication is not that identity verification is good or bad. It is that it changes the sample and the behavior of the sample. Pseudonymous participation may admit knowledgeable people who value privacy, while also making multi-account behavior and participant measurement harder. Verified participation may improve accountability while excluding or deterring some informed actors. A venue comparison must avoid treating these architectures as a single neutral wrapper around beliefs.

Researchers should distinguish four measurable states: permitted by published rules, attempted onboarding, approved account, and active trader. Public documents usually establish only the first and describe the process for the others. Without venue data, claims about rejection rates or the demographics of failed applicants are speculation.

## Demographic selection is not a poll-weighting problem

Prediction markets and surveys aggregate different objects. A representative poll estimates attitudes or intended votes in a target population using sampling and weighting. A market elicits trades from self-selected participants and weights their influence through willingness and ability to trade at particular prices. Making a trader sample demographically representative would not automatically make its price an unbiased forecast; leaving it unrepresentative does not automatically make it useless.

The classic Iowa evidence makes this distinction concrete. Forsythe, Nelson, Neumann, and Wright studied the 1988 Iowa market and documented a participant pool whose political preferences were not representative of the electorate. Yet the market forecast could outperform a simple average of trader beliefs because trading incentives and the actions of marginal traders disciplined the price. Subsequent work describes this as the marginal-trader hypothesis: participants who recognize mispricing and trade against it can have more price influence than participants who merely hold biased beliefs.

That mechanism is plausible but conditional. Correction requires capital, confidence, attention, low enough transaction costs, and the ability to take or maintain the opposing position. Position limits, thin depth, wide spreads, funding frictions, correlated information, or fear of resolution ambiguity can prevent informed beliefs from becoming marginal orders. A venue can contain a diverse set of account holders while its active liquidity is supplied by a narrow cluster. It can also contain a demographically narrow population whose price is nonetheless competitive because traders disagree, seek profit, and react to public evidence.

Demographic labels are at best proxies for information and incentives. Geography may proxy for local knowledge; occupation for institutional knowledge; age for platform familiarity; wealth for capacity; partisanship for both information networks and motivated reasoning. None identifies forecast quality by itself. The defensible questions are behavioral: who trades, at what horizons, after which information, with what capital and constraints, and whose orders move the executable book?

## Incentive selection and the marginal trader

Self-selection begins before the first order. People join because they expect entertainment, profit, status, hedging value, ideological expression, research participation, or learning. Contract choice adds another filter: a participant who trades presidential elections may ignore local primaries or procedural policy questions. Activity can then be highly unequal: a small share of accounts may generate a large share of volume or quote updates. Without participant-level concentration data, registered-user counts are therefore a weak measure of epistemic breadth.

Financial incentives can reward information, but only relative to costs. An informed trader acts when expected gain exceeds spread, fees, price impact, funding cost, settlement delay, platform risk, and the opportunity cost of investigation. A person with a small informational advantage may rationally abstain. A wealthy or automated participant can exploit smaller discrepancies and influence more prices. Subsidized makers may improve two-sided liquidity, but their orders may be optimized for rebates and inventory rather than express a directional forecast.

The marginal trader is therefore dynamic. Before a debate, slow retail disagreement may set quotes. During breaking news, automated or continuously monitoring traders may dominate. Near resolution, specialists in election administration or contract language may become decisive. At a quiet hour, one market maker's inventory controls can determine the visible spread. A daily closing price can splice together these different populations while appearing to be one continuous “crowd.”

Open interest and volume do not solve the identification problem. Volume counts transactions, not independent viewpoints; the same accounts can trade repeatedly or with one another. Open interest counts outstanding exposure, not the number or diversity of informed participants. Wallet counts can be distorted by address practices and do not reveal beneficial ownership. A credible breadth measure needs participant-level concentration, two-sided activity, persistence, and preferably information about linked control—data that public feeds may not provide.

## What access means for interpreting forecasts

Participant selection changes at least five common interpretations.

First, a market price is not public opinion. It is an equilibrium or temporary book state among eligible and active traders. It should not be reported as the percentage of voters who expect an outcome.

Second, cross-venue differences do not automatically reveal arbitrage or superior intelligence. Before comparing prices, match access populations, account rules, collateral rails, position limits, fees, contract semantics, and timestamps.

Third, historical accuracy does not establish transportability. An academic market with small stakes and a self-selected research population may forecast well, but that finding does not guarantee performance for a global crypto venue, a regulated commercial exchange, a different country, or a different contract family. The reverse is also true.

Fourth, a change in access can cause a structural break. Expansion may add local knowledge and arbitrage capital, or add noise and entertainment demand. Restriction may remove uninformed flow, or remove the very participants who correct errors. Direction must be measured rather than assumed.

Fifth, forecast evaluation must include coverage. If access and incentives produce markets only for salient, clearly resolvable, high-attention questions, good scores on those contracts do not imply skill on the political universe. [[Backtesting political forecasts without leakage]] should freeze the eligible event set and record why markets or quotes are missing.

## A research protocol

For each forecast snapshot, preserve an access record with:

- venue legal entity and regulatory category;
- dated member agreement and eligibility/help pages;
- minimum age and supported individual/entity account types;
- jurisdiction, residence, citizenship, and physical-location rules as stated by the venue;
- identity-verification and sanctions-screening requirements described publicly;
- funding and collateral rails, including practical currency and wallet requirements;
- relevant position or investment limits;
- contract-specific participant or insider restrictions;
- policy-effective timestamp and any known change from the prior snapshot;
- observed participation proxies: active accounts or addresses if defensibly measured, concentration, quote persistence, volume, open interest, and depth;
- explicit missing fields rather than guessed demographics.

Analysis should separate access policy from realized selection. A policy-change event study can compare spreads, depth, activity concentration, forecast error, and reaction speed before and after a documented change, while controlling for contract mix and political news. A cross-venue study should match propositions and horizons, then test whether gaps shrink when access populations overlap. A participant study should distinguish all registered accounts, active accounts, liquidity suppliers, aggressive traders, and marginal price movers.

Even these designs face confounding. Access changes may coincide with marketing, fee changes, new contract categories, an election phase, or new funding rails. Participant attributes can be missing, self-reported, or privacy-sensitive. Researchers should publish aggregate results, minimize personal data, and avoid identifying private traders. The aim is to understand the forecasting institution, not to profile individuals.

## Why it matters

Political prediction markets are often praised as crowds that turn dispersed information into a probability. Access and selection specify which crowd actually exists. Formal eligibility determines who may enter; jurisdiction and infrastructure determine who can enter; privacy, documentation, wealth, attention, and incentives determine who chooses to enter; microstructure determines whose orders set the observable price.

This layered view avoids two symmetrical errors. One is to dismiss every market because its traders are not demographically representative. Markets are not polls, and informed marginal trading can correct average bias. The other is to treat profit incentives as an automatic cure for selection. Correction can fail when knowledgeable participants are absent, constrained, correlated, undercapitalized, or unable to access the same venue.

The disciplined interpretation is narrower and more useful: a political contract price is evidence produced by a particular, access-conditioned institution. Its value as a forecast depends on whether that institution admitted and motivated enough opposing information to make error costly. Researchers should record access rules, measure realized concentration where possible, and test forecast performance rather than treating “the crowd” as a self-explanatory source of authority.

## Sources

- [Kalshi, “Signing Up as an Individual”](https://help.kalshi.com/en/articles/13823778-signing-up-as-an-individual) — official age, verification, international-access, jurisdiction, and compliance overview; dated March 10, 2026; accessed July 10, 2026.
- [Kalshi, Member Agreement](https://kalshi.com/docs/kalshi-member-agreement.pdf) — official operative membership representations, eligibility, prohibited access, and account terms; accessed July 10, 2026.
- [Kalshi, “Document verification on Kalshi”](https://help.kalshi.com/en/articles/15581140-document-verification-on-kalshi) — official identity-verification explanation; accessed July 10, 2026.
- [Federal Reserve, 31 CFR § 1026.220, Customer Identification Programs for Futures Commission Merchants and Introducing Brokers](https://www.federalreserve.gov/frrs/regulations/section-1026220-customer-identification-programs-for-futures-commission-merchants-and-introducing-brokers.htm) — official rule text on risk-based identity verification, records, and government-list checks; accessed July 10, 2026.
- [CFTC, “Futures Commission Merchants and Introducing Brokers”](https://www.cftc.gov/IndustryOversight/Intermediaries/FCMs/fcmib) — official overview of intermediary registration and self-regulatory requirements; accessed July 10, 2026.
- [CFTC Staff Letter 93-66, Iowa Electronic Markets no-action relief](https://www.cftc.gov/letters/lettersarchive/93-66) — official archive entry for the June 18, 1993 no-action position permitting the University of Iowa's nonprofit academic political- and economic-event markets subject to stated conditions; accessed July 10, 2026.
- [Iowa Electronic Markets, Trader's Manual](https://iemweb.biz.uiowa.edu/trmanual/) — official account, trading, contract, and market-operation documentation; accessed July 10, 2026.
- [Forsythe, Nelson, Neumann, and Wright, “Anatomy of an Experimental Political Stock Market,” American Economic Review 82(5)](https://www.jstor.org/stable/2117471) — original research on participant preferences, trading behavior, marginal traders, and the 1988 Iowa market.
- [Berg, Forsythe, and Rietz, “What Makes Markets Predict Well? Evidence from the Iowa Electronic Markets”](https://iro.uiowa.edu/esploro/outputs/bookChapter/What-Makes-Markets-Predict-Well-Evidence/9984963123302771) — original research connecting market design and micro-behavior to accuracy across sixteen IEM markets.
- [Gruca, Berg, and Cipriano, “Consensus and Differences of Opinion in Electronic Prediction Markets”](https://electronicmarkets.org/fileadmin/user_upload/doc/Issues/Volume_15/Issue_01/V15I1_Consensus_and_Differences_of_Opinion_in_Electronic_Prediction_Markets.pdf) — research on restricted populations, self-selection, and differences between trader opinions and market prices.
- [Majumder, Diermeier, Rietz, and Amaral, “Price Dynamics in Political Prediction Markets,” PNAS 106(3)](https://pmc.ncbi.nlm.nih.gov/articles/PMC2630077/) — original research on price dynamics and information incorporation in Iowa presidential markets.

## Open questions

- Which privacy-preserving statistics can distinguish broad information aggregation from repeated activity by a concentrated set of beneficial owners?
- Do documented geographic expansions improve political-market calibration after controlling for contract mix, marketing, fees, and election phase?
- How often do identity-verification frictions exclude informed applicants, and can that be studied without collecting invasive personal data?
- When do local participants add unique political information, and when are they more exposed to correlated partisan narratives?
- What concentration threshold should trigger a warning that a displayed quote reflects a narrow set of marginal traders?
