---
title: 'WildGEN: Long-horizon Trajectory Generation for Wildlife'
authors: Ali Al-Lawati, Elsayed Eshra, Prasenjit Mitra
venue: CIKM 2023 Workshop
venue_full: CIKM Workshop on Knowledge Extraction and Management for Wildlife Conservation (InfoWild)
year: 2023
date: '2023-10-21'
order: 13
group: workshop
short: "WildGEN"
image: /images/papers/wildgen.webp
topics: ["trajectories"]
tags: ["Generative Models"]
tldr: "A VAE-based framework that learns the long-horizon movement of wild geese from a sparse set of real trajectories and generates new ones."
arxiv: '2401.05421'
conference: CIKM Workshop on Knowledge Extraction and Management for Wildlife Conservation (InfoWild 2023)
pdf: https://arxiv.org/pdf/2401.05421
links:
- name: arXiv
  url: https://arxiv.org/abs/2401.05421
abstract: 'Trajectory generation is an important concern in pedestrian, vehicle, and wildlife movement studies. Generated trajectories help enrich the training corpus in relation to deep learning applications, and may be used to facilitate simulation tasks. This is especially significant in the wildlife domain, where the cost of obtaining additional real data can be prohibitively expensive, time-consuming, and bear ethical considerations. In this paper, we introduce WildGEN: a conceptual framework that addresses this challenge by employing a Variational Auto-encoders (VAEs) based method for the acquisition of movement characteristics exhibited by wild geese over a long horizon using a sparse set of truth samples. A subsequent post-processing step of the generated trajectories is performed based on smoothing filters to reduce excessive wandering. Our evaluation is conducted through visual inspection and the computation of the Hausdorff distance between the generated and real trajectories. In addition, we utilize the Pearson Correlation Coefficient as a way to measure how realistic the trajectories are based on the similarity of clusters evaluated on the generated and real trajectories.'
bibtex: |
  @misc{allawati2023wildgenlonghorizontrajectorygeneration,
    title={WildGEN: Long-horizon Trajectory Generation for Wildlife},
    author={Ali Al-Lawati and Elsayed Eshra and Prasenjit Mitra},
    year={2023},
    eprint={2401.05421},
    archivePrefix={arXiv},
    primaryClass={cs.LG},
    url={https://arxiv.org/abs/2401.05421},
  }
---
