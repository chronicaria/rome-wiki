---
title: LLM agent ensembles for forecasting
created: 2026-07-08
source: llm
status: seed
tags: [ai, agents, forecasting, prediction-markets, llms]
---
A many-agent LLM forecasting system should behave less like a shouting debate club and more like an evidence-diverse, calibrated forecasting ensemble.

Related: [[Multi-agent forecasting frameworks]], [[Designed information asymmetry for LLM forecasts]], [[From forecasts to positions in agentic portfolios]].

The attractive idea is simple: ask 100 agents to research a political race, make independent probability estimates, debate, vote, and converge on a forecast. That is plausible, but the design has to protect against the classic failure mode: if every agent sees the same evidence and uses the same base model, the system mostly produces correlated errors with a theatrical debate wrapped around them.

## What current work suggests

**Sampling and voting works surprisingly well.** "More Agents Is All You Need" found that simply sampling multiple LLM outputs and voting can improve benchmark performance. That is the same family of idea as [[Ensemble forecasting]] and self-consistency: many noisy predictors can beat one noisy predictor if their errors are not perfectly correlated.

**Debate is not automatically better than voting.** A 2025 NeurIPS paper, "Debate or Vote," found that majority voting accounts for much of the gain often attributed to multi-agent debate. The lesson is not "never debate"; it is that debate needs a reason to exist beyond spending more tokens.

**Decision protocol matters.** Work comparing voting and consensus found that voting helped reasoning tasks more, while consensus helped knowledge tasks more. It also found that more agents helped, but more discussion rounds before voting could hurt.

**Information diversity matters most for forecasting.** The 2026 InfoDelphi paper makes the key point for your political-race idea: when agents share identical evidence, deliberation collapses into herding. Their method deliberately gives agents a shared public evidence set plus private, disjoint evidence subsets, then aggregates confidence-weighted rationales. On a 375-question prediction-market benchmark, they reported better Brier scores and accuracy than single-agent and standard multi-agent baselines.

**Prediction markets are a natural testbed.** PolySwarm proposes a 50-persona LLM swarm for Polymarket-style binary markets, combining agent probability estimates with market-implied probabilities and risk controls. Whether or not that exact system is durable, the structure is directly relevant: a swarm forecasts, a market provides an external prior, and calibration metrics decide whether the swarm is useful.

## A good political-race architecture

1. **Question definition**: lock the exact event, candidates, resolution date, and data source. Ambiguous questions poison probability work.
2. **Evidence routing**: give all agents shared basics: polling average, district partisanship, fundraising, incumbency, candidate quality, election rules, and historical turnout. Then give each cluster private evidence: local news, demographic shifts, endorsements, ad spending, ground game, early vote, candidate scandals, issue salience, macro environment.
3. **Independent first forecast**: every agent gives probabilities before seeing others. Require a numeric forecast, confidence, key evidence, and what would change its mind.
4. **Disagreement map**: cluster agents by rationale, not by assigned persona. Natural "parties" should emerge from assumptions: turnout maximizers, fundamentals modelers, polling skeptics, local-news readers, national-environment priors.
5. **Debate only on cruxes**: do not let agents freestyle. Ask them to attack the highest-impact disagreements: poll bias, turnout, undecided allocation, candidate-specific scandal risk, ballot access, late swing.
6. **Aggregation**: combine forecasts with a weighting scheme tied to calibration history, evidence quality, and rationale independence. Use a market price as a prior if a liquid market exists, not as truth.
7. **Backtesting**: score the system with [[Brier score]], log loss, calibration curves, and comparison to polls, prediction markets, and naive baselines.

## Why agents might form "political parties"

They can cluster for several reasons:

- **Evidence specialization**: agents looking at the same kind of evidence converge.
- **Model priors**: the base model has learned associations about politics and voters.
- **Persona priors**: a pollster-agent, field-organizer-agent, and fundamentals-agent will privilege different signals.
- **Social influence**: once agents see others' arguments, they may herd unless the protocol preserves independent private evidence.
- **Objective differences**: some agents may optimize accuracy, others calibration, others downside risk, others adversarial skepticism.

The interesting version is not "Democrat agents versus Republican agents." It is "forecasting factions" based on causal models of the race.

## Failure modes

- **Correlated hallucination**: many agents repeat the same false fact.
- **Persona theater**: different names produce stylistic diversity but not informational diversity.
- **Debate herding**: agents converge because confident language sounds persuasive.
- **Calibration drift**: the ensemble gives sharp probabilities without being scored over time.
- **Synthetic consensus laundering**: a consensus number feels more objective than the weak evidence behind it.
- **Feedback loops**: if agents trade or publish into markets they observe, their forecasts can move the very signal they use.

## Sources

- [More Agents Is All You Need](https://arxiv.org/abs/2402.05120)
- [Debate or Vote: Which Yields Better Decisions in Multi-Agent Large Language Models?](https://proceedings.neurips.cc/paper_files/paper/2025/file/934252acd87f254d5d4672fbde283bd2-Paper-Conference.pdf)
- [Voting or Consensus? Decision-Making in Multi-Agent Debate](https://aclanthology.org/2025.findings-acl.606.pdf)
- [Diverse Evidence, Better Forecasts: Multi-Agent Deliberation Under Information Asymmetry](https://arxiv.org/html/2607.01661v1)
- [PolySwarm: A Multi-Agent LLM Framework for Prediction Market Trading and Latency Arbitrage](https://arxiv.org/html/2604.03888v1)

## Open questions

- How many agents are needed before marginal accuracy gains flatten for real election forecasting?
- Can an LLM swarm beat a strong baseline that combines polls, fundamentals, and prediction markets?
- What prompt and evidence-routing designs produce real error independence rather than cosmetic disagreement?
