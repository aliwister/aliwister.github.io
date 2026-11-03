---
title: Do Multimodal RAG Systems Leak Data? A Comprehensive Evaluation of Membership Inference and Image Caption Retrieval Attacks
authors: Ali Al-Lawati, Suhang Wang
venue: ACL 2026
venue_full: Findings of the Association for Computational Linguistics
year: 2026
date: '2026-07-01'
order: 6
group: conference
selected: true
tldr: We evaluate VLM privacy risk to membership inference and retrieval attacks under novel settings, such as transformed images.
arxiv: '2601.17644'
doi: 10.18653/v1/2026.findings-acl.444
conference: 'Findings of the Association for Computational Linguistics: ACL 2026'
pdf: https://arxiv.org/pdf/2601.17644
links:
- name: arXiv
  url: https://arxiv.org/abs/2601.17644
- name: Proceedings
  url: https://aclanthology.org/2026.findings-acl.444/
- name: Code
  url: https://github.com/aliwister/mrag-attack-eval
abstract: 'The growing adoption of multimodal Retrieval-Augmented Generation (mRAG) pipelines for vision-centric tasks (e.g., visual QA) introduces important privacy challenges. In particular, while mRAG provides a practical capability to connect private datasets and improve model performance, it risks the leakage of private information from these datasets. In this paper, we perform an empirical study to analyze the privacy risks inherent in the mRAG pipeline observed through standard model prompting. Specifically, we implement a case study that attempts to determine whether a visual asset (e.g., image) is included in the mRAG, and, if present, to leak the metadata (e.g., caption) related to it.Our findings highlight the need for privacy-preserving mechanisms and motivate future research on mRAG privacy. Our code is published online: https://github.com/aliwister/mrag-attack-eval.'
bibtex: |
  @inproceedings{al-lawati-wang-2026-multimodal,
      title = "Do Multimodal {RAG} Systems Leak Data? A Comprehensive Evaluation of Membership Inference and Image Caption Retrieval Attacks",
      author = "Al-Lawati, Ali  and
        Wang, Suhang",
      booktitle = "Findings of the {A}ssociation for {C}omputational {L}inguistics: {ACL} 2026",
      month = jul,
      year = "2026",
      address = "San Diego, California, United States",
      publisher = "Association for Computational Linguistics",
      url = "https://aclanthology.org/2026.findings-acl.444/",
      doi = "10.18653/v1/2026.findings-acl.444",
      pages = "9139--9154",
  }
---
