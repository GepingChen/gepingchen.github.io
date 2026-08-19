export const profile = {
  name: 'Geping Chen',
  initials: 'GC',
  headline: 'Statistics PhD Candidate working on AI-enhanced causal inference and tabular foundation models.',
  introduction: [
    'I’m a PhD Candidate in Statistics at Iowa State University, under the supervision of Dr. Chunlin Li and Dr. Zhengyuan Zhu.',
    'My research interests are AI-enhanced causal inference and the pretraining and post-training of tabular foundation models.',
    'Before that, I completed my bachelor’s degree in Statistics at Renmin University of China under the supervision of Dr. Hanfang Yang and Dr. Annie Qu.',
  ],
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
  sources: ['private-cv:reviewed-2026-08-09'],
} as const;
