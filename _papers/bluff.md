---
title: 'BLUFF: Benchmarking the Detection of False and Synthetic Content across 58 Low-Resource Languages'
authors: Jason Lucas, Matt Murtagh-White, Adaku Uchendu, Ali Al-Lawati, Michiharu Yamashita, Dominik Macko, Ivan Srba, Robert Moro, Dongwon Lee
venue: KDD 2026
venue_full: ACM SIGKDD Conference on Knowledge Discovery and Data Mining
year: 2026
date: '2026-08-08'
order: 8
group: conference
selected: true
short: "BLUFF"
image: /images/papers/bluff.webp
topics: ["harmful-content"]
tags: ["Benchmarks", "Multilingual", "LLM Agents"]
tldr: "A 202K-sample benchmark for detecting false and synthetic content in 79 languages, where state-of-the-art detectors lose up to 25.3% F1 on low-resource languages."
arxiv: '2603.00634'
doi: 10.1145/3770855.3817546
conference: Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining
pdf: https://arxiv.org/pdf/2603.00634
links:
- name: arXiv
  url: https://arxiv.org/abs/2603.00634
- name: Proceedings
  url: https://doi.org/10.1145/3770855.3817546
- name: Project
  url: https://jsl5710.github.io/BLUFF
abstract: 'Multilingual falsehoods threaten information integrity worldwide, yet detection benchmarks remain confined to English or a few high-resource languages, leaving low-resource linguistic communities without robust defense tools. We introduce BLUFF, a comprehensive benchmark for detecting false and synthetic content, spanning 79 languages with over 202K samples, combining human-written fact-checked content (122K+ samples across 57 languages) and LLM-generated content (79K+ samples across 71 languages). BLUFF uniquely covers both high-resource "big-head" (20) and low-resource "long-tail" (59) languages, addressing critical gaps in multilingual research on detecting false and synthetic content. Our dataset features four content types (human-written, LLM-generated, LLM-translated, and hybrid human-LLM text), bidirectional translation (English↔X), 39 textual modification techniques (36 manipulation tactics for fake news, 3 AI-editing strategies for real news), and varying edit intensities generated using 19 diverse LLMs. We present AXL-CoI (Adversarial Cross-Lingual Agentic Chainof-Interactions), a novel multi-agentic framework for controlled fake/real news generation, paired with mPURIFY, a quality filtering pipeline ensuring dataset integrity. Experiments reveal state-of-theart detectors suffer up to 25.3% F1 degradation on low-resource versus high-resource languages. BLUFF provides the research community with a multilingual benchmark, extensive linguistic-oriented benchmark evaluation, comprehensive documentation, and opensource tools to advance equitable falsehood detection. Dataset and code are available at: https://jsl5710.github.io/BLUFF/'
bibtex: |
  @inproceedings{lucas2026bluff,
    title     = {BLUFF: Benchmarking the Detection of False and Synthetic Content across 58 Low-Resource Languages},
    doi       = {10.1145/3770855.3817546},
    booktitle = {Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining V.2},
    publisher = {ACM},
    author    = {Lucas, Jason and Murtagh-White, Matt and Uchendu, Adaku and Al-Lawati, Ali and Yamashita, Michiharu and Macko, Dominik and Srba, Ivan and Moro, Robert and Lee, Dongwon},
    year      = {2026},
    month     = Aug,
    pages     = {9498--9509}
  }
---
