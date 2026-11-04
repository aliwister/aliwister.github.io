---
title: Quantifying Behavioral Tails in Black-Box Language Models
authors: Elsayed Eshra†, Ali Al-Lawati†, Dongwon Lee, Suhang Wang
venue: arXiv
venue_full: arXiv preprint
year: 2026
date: '2026-09-27'
order: 2
group: preprint
short: "Behavioral Tails"
image: /images/papers/behavioral-tails.webp
topics: ["ai-safety"]
tags: ["Black-Box LLMs", "Rare-Event Simulation"]
tldr: "RareTrap estimates the probability of rare, severe behaviors in black-box LLMs, including GPT-5.4 and Claude Sonnet 4.6, with as few as 200 evaluations, using a geometry-aware prompt distribution and sequential rare-event simulation."
selected: true
arxiv: '2609.33638'
pdf: https://arxiv.org/pdf/2609.33638
links:
- name: arXiv
  url: https://arxiv.org/abs/2609.33638
abstract: We introduce RareTrap, a framework for estimating the probability of severe behaviors in black box large language models (LLMs). A key challenge for probability estimation is defining a tractable distribution over the input space. To accomplish that, RareTrap uses a surrogate LLM and constructs a geometry-aware mapping from a lower-dimensional latent reference space into its token-embedding space to induce an explicit and reproducible distribution over input prompts. A response-level performance function is utilized on the response to quantify behavior severity. This enables sequential rare event simulation that concentrates evaluations on progressively more severe behaviors while preserving probability under the induced prompt distribution, which would otherwise be prohibitive to measure. Across 10 open-weight and two frontier models (GPT-5.4 and Claude Sonnet 4.6), we find that RareTrap successfully induces severe resource consumption behaviors and computes their probability with as few as 200 evaluations. RareTrap provides model developers a principled approach for evaluating language models under a common distribution, and prioritizing alignment effort to improve safety and mitigate risks.
bibtex: |
  @misc{eshra2026quantifyingbehavioraltailsblackbox,
    title={Quantifying Behavioral Tails in Black-Box Language Models},
    author={Elsayed Eshra and Ali Al-Lawati and Dongwon Lee and Suhang Wang},
    year={2026},
    eprint={2609.33638},
    archivePrefix={arXiv},
    primaryClass={cs.LG},
    url={https://arxiv.org/abs/2609.33638},
  }
---
