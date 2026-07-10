---
title: Tokenized fixed-income products in crypto rankings
aliases: [Tokenized Treasury products in crypto rankings]
created: 2026-07-09
source: llm
status: seed
tags: [crypto, tokenized-securities, real-world-assets, fixed-income, market-structure]
as_of: 2026-07-09
desk: crypto-markets
---

Tokenized fixed-income products can appear beside cryptocurrencies in market-cap rankings, but their quoted capitalization usually measures an outstanding security or fund net asset value—not a protocol valuation—and neither YLDS nor JAAA is simply a tokenized Treasury bill.

Up: [[Crypto]]

## The ranking creates a category error

A crypto ranking normally multiplies a token price by a provider's circulating-supply figure. That operation is useful for comparing freely circulating native assets such as BTC, but it does not make every resulting number economically comparable. When the token is a legal security backed by offchain assets, “market capitalization” can instead approximate the face amount of debt outstanding or the net asset value of issued fund shares. The token wrapper changes transfer and recordkeeping; it does not turn the underlying claim into crypto equity.

This distinction became concrete at the lower edge of Rome's July 2026 [[Crypto top 100 hourly snapshot ledger]]. CoinGecko identified `ylds` and `janus-henderson-anemoy-aaa-clo-fund` as ranked assets. The first is a digital representation of Figure Certificate Company's registered face-amount certificates. The second is a tokenized share class of a British Virgin Islands professional fund investing in AAA-rated collateralized-loan-obligation tranches. Their rank values may be numerically close to the capitalization of a governance token, yet the sources of return, legal rights, eligibility, liquidity, and failure modes are different. The accurate umbrella for this comparison is **tokenized fixed income**, not tokenized Treasuries.

The inherited label “tokenized Treasury products” is therefore a category error rather than a settled classification. YLDS's issuer invests its own balance sheet under a registered face-amount-certificate structure; the certificate is unsecured issuer debt rather than beneficial ownership of named Treasury bills. JAAA is more clearly a fund share, but its portfolio is AAA CLO tranches, not U.S. government obligations. A genuine tokenized Treasury fund—such as Anemoy's separate JTRSY product—would be a more direct member of that narrower category. Collapsing all three into “Treasury tokens” hides the claim that a holder actually owns.

## YLDS is an unsecured certificate obligation

Figure Certificate Company, or FCC, is the legal issuer of the Figure Transferable Certificates marketed as YLDS. FCC is registered with the SEC as a face-amount certificate company under the Investment Company Act of 1940. The certificates themselves are registered securities. The controlling prospectus calls them interest-bearing debt securities and states that they are unsecured obligations backed solely by FCC's assets. They carry no voting rights, are not bank deposits, are not FDIC-insured, are not equity, and are not shares in a money-market mutual fund.

Each transferable certificate has a face amount of $0.01. A holder may surrender certificates to FCC for face amount plus accrued interest, less applicable expenses and fees. The prospectus dated April 24, 2026 states an interest formula of overnight SOFR minus 35 basis points, floored at zero. That term can change through a later controlling filing, so a live rate should always be dated rather than repeated as a permanent token property. The prospectus also distinguishes the official account value—principal plus accrued interest—from the one-cent face amount of each certificate.

The economic relationship is debtor and creditor. FCC receives principal and manages assets subject to its statutory and disclosed investment policies; the investor owns FCC's promise to repay, not a segregated pro-rata slice of a specified bill or repo. The Investment Company Act requires capital and reserves to support the obligations, but the certificates are not secured by any particular FCC asset. If FCC's assets suffer losses or become illiquid, the issuer may be unable to pay principal or interest. SEC registration improves disclosure and imposes a legal regime; it does not mean that the SEC approved the investment or guaranteed payment.

That is why “Treasury-backed stablecoin” is too compressed. Figure's public-company filing describes backing in cash and cash equivalents and compares it to a prime money-market-fund profile. The certificate prospectus permits and describes an issuer investment portfolio rather than granting holders title to Treasury collateral. The proper questions are FCC's asset quality, duration, liquidity, custody, leverage or other liabilities, capital requirements, expenses, affiliate conflicts, and surrender mechanics. [[Stablecoin reserve and redemption risk]] provides a useful framework, but the certificate's security-law form and unsecured creditor status must remain visible.

YLDS is represented on Provenance Blockchain. The SEC correspondence of Figure Technology Solutions describes YLDS as the Figure Certificates' corresponding digital representation, native to a public blockchain. The prospectus says FCC's official books and records determine ownership and describes peer-to-peer and registered alternative-trading-system transfers. A blockchain balance is therefore part of a legally administered securities system, not necessarily bearer ownership that can circulate without identity and compliance constraints. Purchase, transfer, and surrender can depend on account verification, approved rails, banking hours, securities rules, and the issuer's records even if blockchain transfers are technically available around the clock.

## JAAA is a tokenized professional-fund share—and not the ETF

The Janus Henderson Anemoy AAA CLO Fund uses the ticker JAAA, but identity must begin with the issuer and vehicle, not the symbol. Anemoy's official product page identifies it as a regulated, open-ended BVI fund for non-U.S. professional investors, tokenized on Centrifuge. Its April 2026 factsheet names the issuer as Anemoy Capital SPC Limited and says the token represents shares of the Janus Henderson Anemoy AAA CLO Fund segregated portfolio. Anemoy Asset Management Limited is the investment manager; Janus Henderson supplies the securitized-credit investment expertise. Trident Trust is listed as administrator and MHA Cayman as auditor.

This is not the U.S.-listed Janus Henderson AAA CLO ETF merely moved onto a chain. The U.S. ETF also trades under JAAA and supplies a relevant strategy benchmark and management lineage, which makes symbol-only sources particularly hazardous. The tokenized BVI segregated portfolio is a separate legal vehicle with its own investors, assets, fees, administrator, subscription documents, and redemption process. ETF assets do not automatically backstop the tokenized fund. A provider identity should therefore retain the CoinGecko ID `janus-henderson-anemoy-aaa-clo-fund`, the BVI issuer, and the Centrifuge deployment rather than mapping the ticker to the ETF.

The token represents a fund share whose value accrues with net asset value. It is not intended to remain at one dollar in the manner of a par-redemption stablecoin. Investors subscribe and redeem with USDC or other supported stablecoins, subject to eligibility and fund procedures. The factsheet describes issuance on Centrifuge Chain or a supported investor-selected chain, including Ethereum, Base, Arbitrum, and Celo. Centrifuge's official deployment documentation separately lists JAAA USDC vault addresses for Ethereum and Base. A vault address, share-token address, and a bridged or derivative token are not interchangeable identifiers; each chain representation needs its own verified mapping before supply is aggregated.

JAAA's assets are AAA-rated CLO tranches. A CLO pools primarily below-investment-grade corporate loans and issues a capital structure in which junior tranches absorb losses before senior AAA tranches. The AAA tranche can therefore have substantial subordination and high ratings while still depending on loan performance, deal documentation, collateral managers, interest coverage, overcollateralization tests, trading liquidity, and rating methodology. It is private-credit securitization exposure, not sovereign U.S. credit.

The floating-rate character limits ordinary duration exposure relative to fixed-rate bonds, but it does not eliminate risk. Credit spreads can widen, secondary-market liquidity can deteriorate, underlying loan defaults can rise, and structural protections can erode. Ratings are opinions about credit risk under specified assumptions, not guarantees of market value or immediate redemption. Fund-level risks add valuation, custody, administrator, stablecoin settlement, concentration, operational, legal, smart-contract, and investor-eligibility dependencies. The net return is portfolio income and price change minus management and pass-through costs—not a protocol emission and not risk-free SOFR.

## What the capitalization number means

For YLDS, Figure's own reporting defines “YLDS in circulation” as the total U.S.-dollar-equivalent value of outstanding unsecured face-amount certificates. If an aggregator uses a near-$1 displayed unit and a supply scaled differently from the legal $0.01 certificates, the resulting market cap may approximate the issuer's outstanding certificate liability. Analysts must reconcile decimals, the legal certificate count, blockchain units, and issuer-reported face amount before treating the number as verified. A $500 million aggregator figure cannot be reconciled merely by citing a company filing that reports a much smaller balance at an earlier date; the date, definition, chain representation, and supply source must agree.

For JAAA, an appropriate capitalization concept is issued shares multiplied by per-share NAV, which should approximate fund net assets attributable to that share class. It is not the market's valuation of Anemoy, Janus Henderson, Centrifuge, or the underlying corporate borrowers. Nor is it automatically equal to secondary-market liquidity: a fund can have hundreds of millions in NAV while only a small amount is available in onchain pools. Creation and redemption through the fund may be the principal liquidity channel, and that channel can require professional-investor qualification, KYC, accepted stablecoins, business-day asset sales, and administrator processing.

These numbers should not be added to protocol-token capitalizations as if they were homogeneous wealth. YLDS capitalization is principally a debt liability matched against FCC assets. JAAA capitalization represents investor equity in a segregated investment portfolio. A governance token's capitalization represents the marked value of circulating units whose legal and economic claims may be far weaker. A fiat stablecoin's capitalization is another issuer liability, normally without a holder claim on reserve yield. [[Wrapped assets and duplicate crypto exposure]] explains the analogous double-counting problem for representations of existing cryptoassets.

The ranking is still useful. It shows the scale of blockchain-recorded financial claims, highlights operational dependencies that can affect crypto liquidity, and identifies products large enough to matter as collateral. But the sortable field should be labeled precisely: provider-reported market cap, issuer-reported outstanding face amount, fund NAV, onchain token supply, and freely tradable float are different observations. A robust registry should preserve all of them rather than forcing one canonical “cap.”

## A claim-first classification

The cleanest way to compare tokenized fixed income is to start with the holder's legal claim.

| Product type | Holder's claim | Main return source | Typical value convention | Central risks |
| --- | --- | --- | --- | --- |
| YLDS transferable certificate | unsecured debt obligation of FCC | contract interest linked to SOFR, paid from issuer resources | $0.01 face amount plus accrued interest; aggregators may display scaled units | issuer credit, asset/liability mismatch, surrender and compliance operations |
| JAAA tokenized fund share | pro-rata interest in a BVI segregated portfolio | income and valuation of AAA CLO tranches, net of costs | NAV-accreting share | CLO credit/spread risk, fund liquidity, custody, administration, eligibility |
| tokenized Treasury fund share | pro-rata fund interest holding government bills or similar cash instruments | Treasury income net of fund costs | stable or accreting NAV, depending on share design | duration, fund, custody, settlement, eligibility |
| fiat stablecoin | contractual redemption claim defined by issuer terms | usually no automatic reserve yield for holder | target par value | reserve, issuer, bank, redemption, legal priority |
| governance token | protocol-specific governance or utility rights | only the value flows the protocol actually grants | market price | adoption, governance, dilution, legal and capture uncertainty |

This table prevents two common mistakes. First, an asset's offchain portfolio does not by itself define the token. Two products can both hold short government securities while one gives fund ownership and the other gives only an unsecured issuer promise. Second, blockchain settlement does not erase the administrator. Smart contracts can automate issuance, transfer checks, cross-chain messaging, and NAV reporting while the enforceable asset ownership, investor register, valuation, custody, and redemption remain institutionally administered.

## Due diligence for a ranked tokenized security

Identity verification should precede market analysis. Record the full issuer, jurisdiction, legal vehicle, offering-document date, eligible investor class, official share register, and economic parent. Then map each chain, token contract, vault, decimal convention, and wrapper. Never use the ticker alone: JAAA demonstrates a direct collision between a tokenized BVI fund and a U.S. ETF, while generic labels such as “yield dollar” invite unrelated imitations.

Next reconcile supply through three independent layers. The legal layer reports certificates or shares outstanding. The administrator or issuer reports face amount or NAV. The chain layer reports token balances by deployment, including treasury, escrow, bridge, vault, and investor addresses. Differences may be legitimate—timing, decimals, pending subscriptions, non-tokenized shares, or cross-chain representations—but unexplained differences invalidate a confident capitalization claim. Provider pages are discovery tools, not controlling books.

Finally, test liquidity as a process rather than a headline. Ask who may redeem, with whom, into what asset, at which NAV, on what dealing day, with which notice and settlement period, and subject to what gates or fees. Determine whether a secondary venue is a registered system, a permissioned pool, or merely a quoted pair with negligible depth. For offchain portfolios, consider weekends and market closures: a token may transfer continuously while its assets price, trade, and settle on business-day infrastructure.

## Why it matters

Tokenized securities are likely to occupy more ranking slots as funds and issuers place traditional claims on public chains. Without claim-first classification, a top-100 table can imply that a debt certificate, a CLO fund share, a stablecoin liability, and a governance token are competing species of the same asset. They are not. Their capitalizations answer different questions and their yields compensate different risks.

YLDS and JAAA also show why “real-world asset” is too broad to serve as analysis. YLDS requires issuer-credit and face-amount-certificate analysis. JAAA requires fund, securitized-credit, and professional-investor analysis. Neither should be described as direct Treasury ownership. The durable ranking layer should preserve their presence while labeling the claim, issuer, legal wrapper, underlying assets, transfer controls, and supply methodology. Classification is not exclusion; it is what makes inclusion informative.

## Sources

- [SEC, Figure Certificate Company prospectus dated April 24, 2026](https://www.sec.gov/Archives/edgar/data/1974395/000149315226018903/form497.htm) — controlling primary disclosure for issuer identity, unsecured debt status, face amount, SOFR-minus-35-basis-point interest formula, surrender, reserves, ownership records, and risks.
- [SEC, Figure Transferable Certificate terms and conditions](https://www.sec.gov/Archives/edgar/data/1974395/000094787125000458/ss4788142_ex04i.htm) — primary security terms and description of the blockchain representation and transfer channels.
- [Figure Technology Solutions, January 27, 2026 registration statement](https://investors.figure.com/static-files/368c35d1-1dc8-401a-a9b3-2f3bfc9a7ff8) — parent-company description of YLDS, Provenance Blockchain, historical balance, and backing claims; issuer characterizations are not independent assurance.
- [SEC, Figure Certificate Company Form 10-Q for the quarter ended March 31, 2026](https://www.sec.gov/Archives/edgar/data/1974395/000197439526000008/fcc-20260331.htm) — newer primary financial and legal-identity reporting from the certificate issuer itself.
- [SEC, Figure Technology Solutions filing correspondence](https://www.sec.gov/Archives/edgar/data/2064124/000162827925000409/filename1.htm) — primary clarification that YLDS is the digital representation of FCC's registered Figure Certificates.
- [Anemoy, Janus Henderson Anemoy AAA CLO Fund product page](https://www.anemoy.io/funds/jaaa) — official identity, strategy, eligible-investor, tokenization, and subscription/redemption overview.
- [Anemoy, JAAA April 2026 factsheet](https://ipfs.centrifuge.io/ipfs/QmaPbC3Pw3Rbnr3nXv1TUfgdtANUpdZRVVzAeTx72wWR8U) — official fund factsheet for issuer, share identity, service providers, portfolio, chains, fees, and risk statements.
- [Centrifuge, protocol deployments](https://docs.centrifuge.io/developer/protocol/deployments/) — official technical registry for supported JAAA subscription vault deployments; a vault address is not assumed to be the share-token contract.
- [Blockworks Advisory, JAAA as a USDe backing asset](https://blockworks.com/insights/ethena-jaaa-backing-asset) — independent June 2026 due-diligence context on legal structure, redemption evidence, concentration, and liquidity; used as verification rather than as the source of controlling fund terms.

## Open questions

- Which exact share-token contracts and decimal conventions correspond to CoinGecko's JAAA supply on every supported chain, and how does the provider avoid counting cross-chain representations twice?
- How does CoinGecko derive YLDS circulating supply, and can its July 2026 capitalization be reconciled exactly to FCC's current certificate face amount and official books?
- What are the current controlling JAAA private-placement memorandum terms for notice, gates, suspension, valuation, and total pass-through expenses?
- How should a top-100 dataset display fund NAV and issuer liabilities without implying that either is comparable to freely traded crypto network value?
