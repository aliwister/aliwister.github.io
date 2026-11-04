---
title: Diffusion Language Models for Perplexity-Aware Black-Box Attacks
authors: Ali Al-Lawati†, Elsayed Eshra†, Dongwon Lee, Suhang Wang
venue: arXiv
venue_full: arXiv preprint
year: 2026
date: '2026-10-22'
order: 1
group: preprint
short: "Perplexity-Aware Attacks"
image: /images/papers/diffusion-perplexity-aware-attacks.webp
topics: ["ai-safety"]
tags: ["Black-Box LLMs", "Rare-Event Simulation", "Diffusion LMs"]
tldr: "Replaces the random latent-to-text mapping of continuous-space black-box attacks with a diffusion language model, so attack prompts read naturally (perplexity 3–5 instead of 10³–10⁷) and risk estimates rest on natural prompts."
selected: true
note: under submission
arxiv: '2610.31558'
pdf: https://arxiv.org/pdf/2610.31558
links:
- name: arXiv
  url: https://arxiv.org/abs/2610.31558
abstract: 'Continuous-space attacks find prompts that trigger malicious behaviors, such as overthinking, in black-box LLMs by sampling or optimizing over a low-dimensional Gaussian latent space and decoding it to text through a random mapping and nearest-token lookup. Because the random mapping is not learned from language, its prompts can be highly unnatural, and as such easily detectable through input guardrails, and the risk estimates they yield are not grounded in natural prompts. In this paper, we demonstrate that the same continuous latent-space framework can be coupled directly to a learned generative distribution over language, a continuous diffusion language model (dLLM), which removes the artificial random mapping while preserving the standard-Gaussian latent formulation and the downstream sampling or optimization procedure. We evaluate this approach under two settings: sampling-based estimation using RareTrap and optimization-based search using ThinkTrap. We find that character-level perplexity drops from 10³–10⁷ to 3–5 in RareTrap and from 20–28 to 4.3–5.4 in ThinkTrap. We also find that model risk estimates can differ by an order of magnitude across the two mappings.'
bibtex: |
  @misc{allawati2026diffusionlanguagemodelsperplexityaware,
    title={Diffusion Language Models for Perplexity-Aware Black-Box Attacks},
    author={Ali Al-Lawati and Elsayed Eshra and Dongwon Lee and Suhang Wang},
    year={2026},
    eprint={2610.31558},
    archivePrefix={arXiv},
    primaryClass={cs.LG},
    url={https://arxiv.org/abs/2610.31558},
  }
---
