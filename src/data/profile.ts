export const profile = {
  name: 'Geping Chen',
  initials: 'GC',
  headline: 'Statistics PhD Candidate working on causal inference and tabular foundation models.',
  shortBio:
    'I develop statistical and machine-learning methods for causal inference and tabular data, with applications in precision medicine, agriculture, and remote sensing.',
  affiliation: 'PhD Candidate in Statistics at Iowa State University',
  email: 'gepingc@iastate.edu',
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/GepingChen' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/geping-chen-860b6722b/' },
  ],
  researchInterests: [
    {
      title: 'Causal inference',
      description: 'Identification and estimation under unmeasured confounding, with an emphasis on distributional effects.',
    },
    {
      title: 'Tabular foundation models',
      description: 'In-context learning and probabilistic prediction for structured data and causal problems.',
    },
    {
      title: 'Precision medicine',
      description: 'Individualized treatment rules for settings with multiple, interacting treatment decisions.',
    },
    {
      title: 'Agricultural statistics',
      description: 'Bayesian modeling, model calibration, and decision support for nitrogen-rate trials.',
    },
    {
      title: 'Experimental design',
      description: 'Optimal and robust designs that connect statistical efficiency with field constraints.',
    },
  ],
  skills: [
    { label: 'Programming', items: ['Python', 'R', 'SQL', 'C/C++'] },
    { label: 'ML & statistics', items: ['PyTorch', 'scikit-learn', 'Causal inference', 'Bayesian modeling'] },
    { label: 'Research systems', items: ['Linux', 'HPC', 'Git', 'AWS', 'Jupyter'] },
    { label: 'Spatial data', items: ['ArcGIS Pro', 'ArcPy', 'Google Earth Engine', 'Raster processing'] },
  ],
  sources: ['private-cv:reviewed-2026-08-09'],
} as const;
