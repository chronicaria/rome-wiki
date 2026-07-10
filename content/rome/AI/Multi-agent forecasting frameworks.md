---
title: Multi-agent forecasting frameworks
created: 2026-07-08
source: llm
status: seed
tags: [ai, agents, forecasting, prediction-markets, llms]
---
Multi-agent forecasting frameworks work best when they treat agents as decorrelated evidence processors, not as many copies of the same opinion engine.

## Framework families

**RAG forecaster.** A single or small set of LLM agents searches, summarizes evidence, makes a probability forecast, and stores the rationale. Halawi et al.'s 2024 forecasting system is the canonical baseline: retrieval, reasoning, and forecast aggregation can approach competitive human-crowd performance on some questions.

**Model ensemble.** Multiple models forecast independently, then the system aggregates them. The useful result from [[Diversity is the Strength of the AI Crowd]] is that the best ensemble is not always the best solo model repeated many times; it is the best mix of accurate and decorrelated models.

**Delphi-style deliberation.** Agents forecast independently, read each other's rationales, and update. The Schneider and Schramm 2025 Metaculus study found that deliberation can help in some settings, especially with model diversity, but homogeneous groups often gain little.

**Information-asymmetric deliberation.** [[Designed information asymmetry for LLM forecasts|InfoDelphi]] is the sharper version: each agent gets common public evidence plus a private evidence slice. Agents must exchange rationales, not just probabilities, because the private evidence has to cross agent boundaries.

**Prediction-market swarm.** [[PolySwarm]] uses a 50-persona LLM swarm for Polymarket-style binary markets, combines swarm estimates with market-implied probabilities, and sizes positions with fractional Kelly logic. The important design move is treating market price as an external prior, not an enemy to beat on every question.

**Market-conditioned updating.** Mention-market work treats the market probability as the prior and asks the LLM to revise it using textual evidence, then conservatively mixes the market prior and model posterior. This is a good pattern for investment agents: "what does the market already believe, and what evidence justifies moving away?"

**Last-mile forecast revision.** LLM agents can sit on top of a numerical forecast backbone and make constrained, auditable edits using contextual evidence. For asset prices, this argues for a split: statistical models produce baselines; agents explain when and why to revise them.

**Question-generation agents.** Forecasting systems also need question factories. Recent work uses web-research agents plus verifier agents to generate and resolve forecasting questions at scale, emphasizing unambiguous resolution criteria and diversity.

## Design principles

- **Independence before deliberation.** Every agent should forecast before seeing the crowd.
- **Private evidence beats persona theater.** Different biographies or tones do less than different inputs, models, tools, and priors.
- **Exchange rationales, not only numbers.** The number alone hides the evidence that made the agent useful.
- **Stop early.** InfoDelphi's ablations suggest a third round can reverse gains by pushing agents toward consensus.
- **Aggregate in probability space.** Binary forecasts should use logit-space or odds-space aggregation, then be scored by Brier score, log loss, and calibration.
- **Use markets as priors.** For traded markets, the price is an information aggregate. The LLM swarm should explain deviations from it.
- **Track marginal contribution.** Agent weights should depend on calibration history, decorrelation, evidence quality, and out-of-sample value-added.

## Sources

- [Approaching Human-Level Forecasting with Language Models](https://arxiv.org/abs/2402.18563)
- [ForecastBench](https://arxiv.org/abs/2409.19839)
- [The Wisdom of Deliberating AI Crowds](https://arxiv.org/abs/2512.22625)
- [Diverse Evidence, Better Forecasts](https://arxiv.org/html/2607.01661v1)
- [Diversity is the Strength of the AI Crowd](https://arxiv.org/html/2606.29661v1)
- [Preference Optimization Drives Monoculture in LLM Prediction Markets](https://arxiv.org/html/2606.26583v1)
- [PolySwarm](https://arxiv.org/html/2604.03888v1)
- [Forecasting Future Language](https://arxiv.org/html/2602.21229v1)
- [Bridging the Last Mile of Time Series Forecasting with LLM Agents](https://arxiv.org/html/2606.02497v1)
- [Automating Forecasting Question Generation and Resolution](https://arxiv.org/html/2601.22444v2)

## Open questions

- How should a forecasting system estimate true error decorrelation before outcomes resolve?
- When is market-conditioned updating better than independent forecasting plus later aggregation?
- Can agent weights be learned online without overfitting to a tiny set of resolved questions?
