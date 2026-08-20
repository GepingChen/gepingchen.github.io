export const profile = {
  name: 'Geping Chen',
  initials: 'GC',
  headline: 'Statistics PhD Candidate working on AI-enhanced causal inference and tabular foundation models.',
  doctoralAdvisors: [
    { name: 'Dr. Chunlin Li', url: 'https://statistics.as.virginia.edu/people/chunlin-li' },
    { name: 'Dr. Zhengyuan Zhu', url: 'https://www.stat.iastate.edu/people/zhengyuan-zhu' },
  ],
  undergraduateAdvisors: [
    {
      name: 'Dr. Hanfang Yang',
      url: 'https://stat.ruc.edu.cn/EN/DepartmentFaulty/Department_of_Economic_and_Social_Statistics/cf0742addfd4451db91665797304d5b8.htm',
    },
    { name: 'Dr. Annie Qu', url: 'https://qu.pstat.ucsb.edu/' },
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
