---
title: 'Moderation by Interrogation: Uncovering Concealed Intent in Agent Social Networks'
authors: Ali Al-Lawati, Nafis Tripto, Abolfazl Ansari, Fali Wang, Jason Lucas, Suhang Wang, Dongwon Lee
venue: arXiv
venue_full: arXiv preprint
year: 2026
date: '2026-05-13'
order: 3
group: preprint
short: "Bot-Mod"
image: /images/papers/moderation-by-interrogation.webp
topics: ["agent-safety"]
tags: ["LLM Agents", "Bayesian Inference", "Benchmarks"]
tldr: "Bot-Mod questions an agent before ruling on its post and infers its hidden intent by Bayesian updating over diagnostic probes, beating content-only moderators and LLM judges on the new Molt-Intent dataset."
selected: true
arxiv: '2605.12856'
pdf: https://arxiv.org/pdf/2605.12856
links:
- name: arXiv
  url: https://arxiv.org/abs/2605.12856
- name: Code
  url: https://github.com/aliwister/Bot-Mod
abstract: The emergence of multi-agent systems introduces novel moderation challenges that extend beyond content filtering. Agents with malicious intent may contribute content that appears benign to evade content-based moderation, while serving a hidden objective. To address this challenge, we introduce Bot-Mod a moderation framework that grounds detection in agent intent rather than traditional content-level signals. Bot-Mod interrogates a target agent using a fixed set of diagnostic probes and infers its intent through Bayesian posterior inference over candidate intents. It starts with a calibrated content-only prior and updates the posterior using the likelihood of each answer under every candidate intent, as assigned by the moderator, until a stopping criterion is met. To evaluate our approach, we construct Molt-Intent, a dataset derived from Moltbook, capturing diverse benign and malicious behaviors within real community structures through posts and comments. Across Molt-Intent, an external social engineering dataset, and three agent LLMs, Bot-Mod outperforms content-only moderators, a fine-tuned classifier, and judge-based interrogators both in- and out-of-distribution. On Molt-Intent, it reaches a composite F1 of 0.736 in distribution and 0.684 out of distribution, 22% and 14% above the best baseline.
bibtex: |
  @misc{allawati2026moderationinterrogationuncoveringconcealed,
    title={Moderation by Interrogation: Uncovering Concealed Intent in Agent Social Networks},
    author={Ali Al-Lawati and Nafis Tripto and Abolfazl Ansari and Fali Wang and Jason Lucas and Suhang Wang and Dongwon Lee},
    year={2026},
    eprint={2605.12856},
    archivePrefix={arXiv},
    primaryClass={cs.AI},
    url={https://arxiv.org/abs/2605.12856},
  }
---
