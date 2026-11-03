---
title: 'Semantic Captioning: Benchmark Dataset and Graph-Aware Few-Shot In-Context Learning for SQL2Text'
authors: Ali Al-Lawati, Jason Lucas, Prasenjit Mitra
venue: COLING 2025
venue_full: International Conference on Computational Linguistics
year: 2025
date: '2025-01-19'
order: 11
group: conference
selected: true
tldr: Self-correcting iterative prompting builds a SQL2Text dataset, and a graph-based RAG ICL selection mechanism is benchmarked on it.
arxiv: '2501.03166'
doi: 10.18653/v1/2025.coling-main.536
conference: Proceedings of the 31st International Conference on Computational Linguistics
pdf: https://arxiv.org/pdf/2501.03166
links:
- name: arXiv
  url: https://arxiv.org/abs/2501.03166
- name: Proceedings
  url: https://aclanthology.org/2025.coling-main.536/
- name: Code
  url: https://github.com/aliwister/ast-icl
abstract: Large Language Models (LLMs) have demonstrated remarkable performance in various NLP tasks, including semantic parsing, which translates natural language into formal code representations. However, the reverse operation, translating code into natural language, termed semantic captioning, has received less attention. This task is increasingly important as LLMs are integrated into platforms for code generation, security analysis, and educational purposes. In this paper, we focus on the captioning of SQL query (SQ2Text) to address the critical need for understanding and explaining SQL queries in an era where LLM-generated code poses potential security risks. We repurpose semantic parsing datasets for semantic captioning, specifically SQL2Text. To overcome the limited robustness of Text2SQL datasets for the reverse task, we introduce an iterative ICL prompt leveraging GPT-4o to generate multiple additional utterances. We conduct experiments across multiple in-context learning (ICL) methods, emphasizing smaller, more computationally efficient LLMs. Our findings demonstrate that leveraging the inherent graph properties of SQL for few-shot ICL sample selection significantly outperforms random selection by up to 39% on BLEU score and provides better results than alternative approaches. Dataset and codes are accessible.
bibtex: |
  @inproceedings{al-lawati-etal-2025-semantic,
      title = "Semantic Captioning: Benchmark Dataset and Graph-Aware Few-Shot In-Context Learning for {SQL}2{T}ext",
      author = "Al Lawati, Ali  and
        Lucas, Jason  and
        Mitra, Prasenjit",
      booktitle = "Proceedings of the 31st International Conference on Computational Linguistics",
      month = jan,
      year = "2025",
      address = "Abu Dhabi, UAE",
      publisher = "Association for Computational Linguistics",
      url = "https://aclanthology.org/2025.coling-main.536/",
      pages = "8026--8042"
  }
---
