---
title: 'GAMIC: Graph-Aligned Molecular In-context Learning for Molecule Analysis via LLMs'
alt_title: Graph-based Molecular In-context Learning Grounded on Morgan Fingerprints
authors: Ali Al-Lawati, Jason S Lucas, Zhiwei Zhang, Prasenjit Mitra, Suhang Wang
venue: EMNLP 2025
venue_full: Findings of Empirical Methods in Natural Language Processing
year: 2025
date: '2025-11-01'
order: 9
group: conference
short: "GAMIC"
image: /images/papers/gamic.webp
topics: ["icl"]
tags: ["Graph Learning", "RAG"]
selected: true
tldr: Graph-based RAG in-context example selection for molecular learning with LLMs.
arxiv: '2502.05414'
doi: 10.18653/v1/2025.findings-emnlp.996
conference: 'Findings of the Association for Computational Linguistics: EMNLP 2025'
pdf: https://arxiv.org/pdf/2502.05414
links:
- name: arXiv
  url: https://arxiv.org/abs/2502.05414
- name: Proceedings
  url: https://aclanthology.org/2025.findings-emnlp.996/
- name: Code
  url: https://github.com/aliwister/mol-icl
abstract: 'In-context learning (ICL) effectively conditions large language models (LLMs) for molecular tasks, such as property prediction and molecule captioning, by embedding carefully selected demonstration examples into the input prompt. This approach eliminates the computational overhead of extensive pre-training and fine-tuning. However, current prompt retrieval methods for molecular tasks rely on molecule feature similarity, such as Morgan fingerprints, which do not adequately capture the global molecular and atom-binding relationships. As a result, these methods fail to represent the full complexity of molecular structures during inference. Moreover, medium-sized LLMs, which offer simpler deployment requirements in specialized systems, have remained largely unexplored in the molecular ICL literature. To address these gaps, we propose a self-supervised learning technique, GAMIC (Graph-Aligned Molecular In-Context learning), which aligns global molecular structures, represented by graph neural networks (GNNs), with textual captions (descriptions) while leveraging local feature similarity through Morgan fingerprints. In addition, we introduce a Maximum Marginal Relevance (MMR) based diversity heuristic during retrieval to optimize input prompt demonstration samples. Our experimental findings using diverse benchmark datasets show GAMIC outperforms simple Morgan-based ICL retrieval methods across all tasks by up to 45%. Our code is available at: https://github.com/aliwister/mol-icl.'
bibtex: |
  @inproceedings{al-lawati-etal-2025-gamic,
      title = "{GAMIC}: Graph-Aligned Molecular In-context Learning for Molecule Analysis via {LLM}s",
      author = "Al Lawati, Ali  and
        Lucas, Jason S  and
        Zhang, Zhiwei  and
        Mitra, Prasenjit  and
        Wang, Suhang",
      booktitle = "Findings of the {A}ssociation for {C}omputational {L}inguistics: {EMNLP} 2025",
      month = nov,
      year = "2025",
      address = "Suzhou, China",
      publisher = "Association for Computational Linguistics",
      url = "https://aclanthology.org/2025.findings-emnlp.996/",
      doi = "10.18653/v1/2025.findings-emnlp.996",
      pages = "18364--18378",
  }
---
