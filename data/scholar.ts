import type { Publication, ScholarStats } from "@/lib/types";

// Manually maintained snapshot from Google Scholar (see data/site.ts for the
// profile link) — update by hand when new citations/publications come in.
// Last updated: 2026-08.
export const SCHOLAR_STATS: ScholarStats = {
  citationsAll: 13,
  citationsSince2021: 12,
  hIndexAll: 2,
  hIndexSince2021: 2,
};

export const PUBLICATIONS: Publication[] = [
  {
    title:
      "A Comprehensive Study on Simultaneous Localization and Mapping (SLAM): Types, Challenges, and Applications",
    authors: "A. Khole, A. Thakar, S. Shende, V. Karajkhede",
    venue: "2023 International Conference on Sustainable Computing and Smart Systems (ICSCSS), IEEE",
    year: 2023,
    citations: 6,
    url: "https://ieeexplore.ieee.org/abstract/document/10169695/",
  },
  {
    title: "A Compendium on Distributed Systems",
    authors: "A. Khole, A. Thakar, A. Kulkarni, H. Jadhav, S. Shende, V. Karajkhede",
    venue: "arXiv preprint arXiv:2302.03990",
    year: 2023,
    citations: 6,
    url: "https://arxiv.org/abs/2302.03990",
  },
  {
    title:
      "RGE-GCN: Recursive Gene Elimination with Graph Convolutional Networks for RNA-seq based Early Cancer Detection",
    authors: "S. Shende, V. Narayanan, V. Fenn, Y. Huang, D. Goksuluk, G. Choudhary, et al.",
    venue: "arXiv preprint arXiv:2512.04333",
    year: 2025,
    citations: 1,
    url: "https://arxiv.org/abs/2512.04333",
  },
  {
    title:
      "Real-Time Monocular SLAM: Accurate Localization and Mapping Using Point Map and Search-by-Projection Approach",
    authors: "A. Khole, A. Thakar, S. Shende, V. Karajkhede",
    venue: "Authorea Preprints",
    year: 2023,
    url: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.22819913",
  },
];
