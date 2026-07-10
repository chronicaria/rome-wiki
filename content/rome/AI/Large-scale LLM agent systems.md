---
title: Large-scale LLM agent systems
created: 2026-07-08
source: llm
status: seed
tags: [ai, agents, multi-agent-systems, llms]
---
Large-scale LLM agent systems currently appear in three public forms: task teams, forecasting/debate ensembles, and simulated societies where many agents interact over time.

As of 2026-07-08, the public examples are still mostly research prototypes, open-source frameworks, demos, or early controlled products. The impressive part is real: systems now run tens, hundreds, thousands, or even simulated millions of agents. The caution is also real: "many agents" does not automatically mean better judgment.

## Main use cases

| Use case | Examples | What the agents do |
|---|---|---|
| Software and workflow teams | AutoGen, ChatDev, MetaGPT, CAMEL | Split a task into roles such as planner, coder, tester, reviewer, researcher, or tool user. |
| Scientific hypothesis generation | Google DeepMind [[Co-Scientist]] | Generate, critique, rank, evolve, and synthesize scientific hypotheses with search and specialized tools. |
| Forecasting and prediction markets | [[LLM agent ensembles for forecasting]], InfoDelphi, PolySwarm | Produce probability estimates, debate evidence, aggregate forecasts, and sometimes trade prediction markets. |
| Social-media simulation | [[LLM agent societies]], OASIS | Simulate information spreading, group polarization, herd effects, recommendation systems, and platform dynamics. |
| Game or civilization simulation | Project Sid, Generative Agents | Let agents live in a world, form roles, coordinate socially, follow rules, and transmit culture. |
| Medical and institutional simulation | Agent Hospital, AI Hospital | Simulate patients, nurses, doctors, consultation, diagnosis, treatment, and administrative workflows. |
| Geopolitical simulation | WarAgent | Represent countries as agents in historical conflicts to study collective decision dynamics. |

## Public examples worth knowing

**AutoGen** is a Microsoft open-source framework for composing multiple conversable agents, including humans and tools. It is infrastructure, not one fixed swarm.

**ChatDev** and **MetaGPT** make the "AI software company" metaphor concrete: agents play product, architecture, engineering, QA, and management roles. ChatDev 2.0 broadens this into a zero-code multi-agent orchestration platform.

**CAMEL** is an open-source community and framework built around the scaling laws of agents, with applications in data generation, task automation, and world simulation.

**Google DeepMind Co-Scientist** is one of the strongest current examples of structured multi-agent reasoning: specialized Gemini-based agents generate ideas, map related hypotheses, critique, rank through tournaments, evolve top candidates, and synthesize meta-reviews. It is closer to a scientific committee than a simple chatbot.

**Project Sid** reports 10 to 1000+ agents in Minecraft-like societies. The agents developed specialized roles, collective rules, cultural transmission, and even religious influence inside the simulation.

**OASIS** targets social-media-scale simulation. It supports up to one million users and studies information spread, polarization, herd effects, X-like and Reddit-like platform mechanics, and recommendation systems.

**PolySwarm** is a 2026 prediction-market framework using 50 LLM personas to evaluate Polymarket-style binary markets, aggregate probability estimates, and detect possible mispricings.

## The useful mental model

There are two different meanings of "lots of agents":

- **Many workers**: parallel agents attack different subtasks, then an orchestrator merges the results. This is closest to software teams, research assistants, and coding workflows.
- **Many simulated people**: agents are the thing being studied. This is closest to social science, political polarization, game worlds, and institutional simulation.
- **Many samples as an ensemble**: "agents" may just be independent model runs with different prompts, evidence, models, or personas. This is closest to [[Ensemble forecasting]] and [[LLM agent ensembles for forecasting]].

The most promising systems combine all three: many workers gather evidence, many forecasters produce calibrated probabilities, and a society-like debate layer exposes disagreements before aggregation.

## Sources

- [AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation](https://www.microsoft.com/en-us/research/publication/autogen-enabling-next-gen-llm-applications-via-multi-agent-conversation-framework/)
- [ChatDev 2.0 GitHub](https://github.com/OpenBMB/ChatDev)
- [MetaGPT GitHub](https://github.com/FoundationAgents/MetaGPT)
- [CAMEL-AI](https://www.camel-ai.org/)
- [Google DeepMind: Co-Scientist](https://deepmind.google/blog/co-scientist-a-multi-agent-ai-partner-to-accelerate-research/)
- [Nature: Accelerating scientific discovery with Co-Scientist](https://www.nature.com/articles/s41586-026-10644-y)
- [Project Sid](https://arxiv.org/html/2411.00114v1)
- [OASIS](https://arxiv.org/abs/2411.11581)
- [PolySwarm](https://arxiv.org/html/2604.03888v1)
- [Generative Agents](https://arxiv.org/abs/2304.03442)
- [WarAgent](https://arxiv.org/abs/2311.17227)
- [Agent Hospital](https://arxiv.org/abs/2405.02957)

## Open questions

- Which public examples are actually deployed continuously, versus one-off research simulations?
- When should a system use 100 agents instead of 10 agents with better tools and evidence?
- What monitoring is needed when agent swarms can reinforce each other's mistakes?
