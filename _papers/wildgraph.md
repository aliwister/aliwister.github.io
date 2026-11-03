---
title: 'WildGraph: Realistic Long-Horizon Trajectory Generation with Limited Sample Size'
alt_title: 'WildGraph: Realistic Graph-based Trajectory Generation for Wildlife'
authors: Ali Al-Lawati, Elsayed Eshra, Prasenjit Mitra
venue: SIGSPATIAL 2024
venue_full: ACM SIGSPATIAL International Conference on Advances in Geographic Information Systems
year: 2024
date: '2024-10-29'
order: 12
group: conference
selected: true
tldr: An encoder–decoder with attention over graph-based embeddings generates long-horizon trajectories from very few samples.
arxiv: '2404.08068'
doi: 10.1145/3678717.3691265
conference: Proceedings of the 32nd ACM International Conference on Advances in Geographic Information Systems
pdf: https://arxiv.org/pdf/2404.08068
links:
- name: arXiv
  url: https://arxiv.org/abs/2404.08068
- name: Proceedings
  url: https://doi.org/10.1145/3678717.3691265
- name: Code
  url: https://github.com/aliwister/wildgraph
- name: Slides
  url: /files/Allawati_Wildgraph_SigSpatial_2024.pdf
abstract: 'Trajectory generation is an important task in movement studies; it circumvents the privacy, ethical, and technical challenges of collecting real trajectories from the target population. In particular, real trajectories in the wildlife domain are scarce as a result of ethical and environmental constraints of the collection process. In this paper, we consider the problem of generating long-horizon trajectories, akin to wildlife migration, based on a small set of real samples. We propose a hierarchical approach to learn the global movement characteristics of the real dataset and recursively refine localized regions. Our solution, WildGraph, discretizes the geographic path into a prototype network of H3 (https://www.uber.com/blog/h3/) regions and leverages a recurrent variational auto-encoder to probabilistically generate paths over the regions, based on occupancy. WildGraph successfully generates realistic months-long trajectories using a sample size as small as 60. Experiments performed on two wildlife migration datasets demonstrate that our proposed method improves the generalization of the generated trajectories in comparison to existing work while achieving superior or comparable performance in several benchmark metrics. Our code is published on the following repository: https://github.com/aliwister/wildgraph.'
bibtex: |
  @inproceedings{allawati2024wildgraph,
    title     = {WildGraph: Realistic Long-Horizon Trajectory Generation with Limited Sample Size},
    doi       = {10.1145/3678717.3691265},
    booktitle = {Proceedings of the 32nd ACM International Conference on Advances in Geographic Information Systems},
    publisher = {ACM},
    author    = {Al-Lawati, Ali and Eshra, Elsayed and Mitra, Prasenjit},
    year      = {2024},
    month     = Oct,
    pages     = {247--258}
  }
---
