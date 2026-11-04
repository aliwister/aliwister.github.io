---
title: 'Position: LLM Benchmark Datasets Should Be Contamination-Resistant'
alt_title: LLM Benchmark Datasets Should Be Contamination-Resistant
authors: Ali Al-Lawati, Jason Lucas, Dongwon Lee, Suhang Wang
venue: ICML 2026
venue_full: International Conference on Machine Learning, Position Paper Track
year: 2026
date: '2026-07-06'
order: 5
group: conference
short: "Contamination-Resistant Benchmarks"
image: /images/papers/contamination-resistant-benchmarks.webp
topics: ["pretraining-safety"]
tags: ["Benchmarks"]
tldr: "Argues that LLM benchmarks should be unlearnable yet still support inference, using the asymmetry between how Transformers train and how they infer."
selected: true
arxiv: '2605.19999'
conference: Proceedings of the 43rd International Conference on Machine Learning
pdf: https://arxiv.org/pdf/2605.19999
links:
- name: arXiv
  url: https://arxiv.org/abs/2605.19999
- name: Proceedings
  url: https://proceedings.mlr.press/v306/lawati26a.html
abstract: 'Benchmark datasets are critical for reproducible, reliable, and discriminative evaluation of LLMs. However, recent studies reveal that many benchmark datasets are included in pretraining corpora, i.e., contaminated, which diminishes their value as reliable measures of model generalization. In this paper, we argue that benchmark datasets should be contamination-resistant, i.e., unlearnable, but support inference. To accomplish this, we first highlight the wide prevalence of benchmark dataset contamination and outline the properties of contamination-resistant datasets. Second, we highlight how the asymmetry between the inference and training pipelines in the Transformer architecture can be leveraged to support contamination-resistance. Third, we outline mathematical advancements to make these datasets interoperable across various LLM architectures. Based on the above, we call on the community to ensure the reliability of LLM benchmarking by: (i) advancing novel contamination-resistant methodologies, (ii) developing supporting methods and platforms, and (iii) adopting contamination-resistant benchmarks into existing evaluation pipelines.'
bibtex: |
  @InProceedings{pmlr-v306-lawati26a,
    title = {Position: {LLM} Benchmark Datasets Should Be Contamination-Resistant},
    author = {Lawati, Ali Al and Lucas, Jason S and Lee, Dongwon and Wang, Suhang},
    booktitle = {Proceedings of the 43rd International Conference on Machine Learning},
    pages = {171162--171175},
    year = {2026},
    volume = {306},
    series = {Proceedings of Machine Learning Research},
    month = {06--11 Jul},
    publisher = {PMLR},
    pdf = {https://raw.githubusercontent.com/mlresearch/v306/main/assets/lawati26a/lawati26a.pdf},
    url = {https://proceedings.mlr.press/v306/lawati26a.html},
  }
---
