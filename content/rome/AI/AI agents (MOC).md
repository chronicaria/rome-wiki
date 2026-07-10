---
title: AI agents (MOC)
created: 2026-07-08
source: llm
status: seed
tags: [moc, ai, agents]
---
This MOC collects notes on LLM agents as teams, swarms, simulators, and collective reasoning systems.

## Agent Systems

- [[Large-scale LLM agent systems]] - current public examples of agent teams, swarms, societies, and domain simulators.
- [[LLM agent ensembles for forecasting]] - how many-agent forecasting, debate, voting, and calibration should work.
- [[Multi-agent forecasting frameworks]] - current framework patterns for LLM forecasters, deliberation, markets, and forecast revision.
- [[Designed information asymmetry for LLM forecasts]] - why useful forecasting swarms need public common ground plus private evidence.
- [[From forecasts to positions in agentic portfolios]] - how forecast agents should hand off to portfolio construction and risk agents.
- [[LLM agent societies]] - simulated social worlds where agents form roles, clusters, echo chambers, and collective dynamics.
- [[Orca workflow patterns]] - practical patterns for racing, reviewing, splitting, red-teaming, and orchestrating agents.
- [[Orca inter-agent orchestration]] - how Orca lets Claude Code, Codex, and other agents exchange messages, ask questions, and report completion.

## Nearby Ideas

- [[GPT-Live full-duplex voice architecture]] - why continuous voice coordination is a different evaluation problem from alternating text turns.
- [[Ensemble forecasting]] - the statistical ancestor of asking many imperfect predictors for a distribution.
- [[Forecast skill]] - how probabilistic forecasts should be scored.
- [[Prediction markets]] - market-based aggregation of distributed beliefs.
- [[Agent-based modeling]] - the pre-LLM tradition of simulating populations of interacting agents.
- [[Multi-agent debate]] - debate protocols among LLM agents.
- [[NBA multi-agent forecasting company]] - project idea for a 30-team NBA research company feeding prediction, aggregation, and betting-market comparison.

## Agent Evaluation

- [[Agent memory architectures]] - how working, episodic, semantic, and procedural memory fit into a write–retrieve–consolidate–forget lifecycle that must be tested by ablation.
- [[Model versus scaffold in agent evaluations]] - why an agent score belongs to the evaluated model-scaffold-tool-budget system rather than model weights alone.
- [[Reasoning budget and fair model comparison]] - how tokens, attempts, wall time, tools, verification, and cost change what a model comparison means.
- [[Long-horizon task reliability]] - why task-completion horizons measure fitted success on human-timed tasks rather than unattended runtime or job replacement.
- [[Infrastructure noise in agentic coding evaluations]] - how compute ceilings, sandbox enforcement, contention, and service failures can move coding-agent scores.
- [[Benchmark contamination and saturation]] - how exposure, memorization, leakage, ceiling effects, and post-hoc tuning invalidate different frontier claims.
- [[Time horizon of AI agents]] - how fitted task-completion horizons are constructed, calibrated, and easily misread.
- [[Computer-use evaluation]] - how environment, observability, action space, scaffold, budget, grading, and safety define a computer-use result.
- [[AI R&D automation evidence]] - what bounded research-engineering benchmarks establish and what end-to-end automation would still need to prove.
- [[Cost-adjusted frontier model performance]] - why deployment comparisons need task-specific quality–resource frontiers rather than a universal points-per-dollar ranking.
- [[Tool-use reliability]] - how relevance, selection, arguments, execution, policy, recovery, and end-state verification compose across an agent trajectory.
- [[Single-agent versus multi-agent inference]] - when parallel search, diversity, specialization, or verification can beat a compute-matched single-agent policy.
- [[Verification loops for coding agents]] - how to separate developmental execution feedback from independent evidence that a patch deserves trust.

## Open questions

- Which multi-agent patterns actually scale with agent count, rather than just spending more inference compute?
- How much of "agent diversity" comes from real information diversity versus superficial persona prompts?
- Can simulated agent societies become useful social-science instruments without simply re-expressing model bias?
