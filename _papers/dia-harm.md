---
title: 'DIA-HARM: Dialectal Disparities in Harmful Content Detection Across 50 English Dialects'
authors: Jason Lucas, Matt Murtagh, Ali Al-Lawati, Uchendu Uchendu, Adaku Uchendu, Dongwon Lee
venue: ACL 2026
venue_full: Annual Meeting of the Association for Computational Linguistics
year: 2026
date: '2026-07-01'
order: 7
group: conference
short: "DIA-HARM"
image: /images/papers/dia-harm.webp
topics: ["harmful-content"]
tags: ["Benchmarks", "Multilingual"]
tldr: "A 195K-sample benchmark across 50 English dialects showing that disinformation detectors degrade on human-written dialectal text, which can disadvantage hundreds of millions of non-SAE speakers."
award: Best Social Impact Paper
arxiv: '2604.05318'
doi: 10.18653/v1/2026.acl-long.144
conference: 'Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)'
pdf: https://arxiv.org/pdf/2604.05318
links:
- name: arXiv
  url: https://arxiv.org/abs/2604.05318
- name: Proceedings
  url: https://aclanthology.org/2026.acl-long.144/
- name: Code
  url: https://github.com/jsl5710/dia-harm
abstract: 'Harmful content detectors, particularly disinformation classifiers, are predominantly developed and evaluated on Standard American English (SAE), leaving their robustness to dialectal variation unexplored. We present DIA-HARM, the first benchmark for evaluating disinformation detection robustness across 50 English dialects spanning U.S., British, African, Caribbean, and Asia-Pacific varieties. Using Multi-VALUE''s linguistically grounded transformations, we introduce D-CUBE (Dialectal Disinformation Detection Corpus), a core corpus component of DIA-HARM comprising 195K samples derived from established disinformation benchmarks. Our evaluation of 16 detection models reveals systematic vulnerabilities: human-written dialectal content degrades detection by 1.4-3.6% F1, while AI-generated content remains stable. Fine-tuned transformers substantially outperform zero-shot LLMs (96.6% vs. 78.3% best-case F1), with some models exhibiting catastrophic failures exceeding 33% degradation on mixed content. Cross-dialectal transfer analysis across 2,450 dialect pairs shows that multilingual models (mDeBERTa: 97.2% average F1) generalize effectively, while monolingual models like RoBERTa and XLM-RoBERTa fail on dialectal inputs. These findings demonstrate that current disinformation detectors may systematically disadvantage hundreds of millions of non-SAE speakers worldwide. We release the DIA-HARM benchmark, including the D-CUBE corpus (https://github.com/jsl5710/dia-harm), and evaluation tools (https://jsl5710.github.io/dia-harm).'
bibtex: |
  @inproceedings{lucas-etal-2026-dia,
      title = "{DIA}-{HARM}: Dialectal Disparities in Harmful Content Detection Across 50 {E}nglish Dialects",
      author = "Lucas, Jason S  and
        White, Matt Murtagh  and
        Al-Lawati, Ali  and
        Uchendu, Uchendu  and
        Uchendu, Adaku  and
        Lee, Dongwon",
      booktitle = "Proceedings of the 64th Annual Meeting of the {A}ssociation for {C}omputational {L}inguistics (Volume 1: Long Papers)",
      month = jul,
      year = "2026",
      address = "San Diego, California, United States",
      publisher = "Association for Computational Linguistics",
      url = "https://aclanthology.org/2026.acl-long.144/",
      doi = "10.18653/v1/2026.acl-long.144",
      pages = "3171--3214",
  }
---
