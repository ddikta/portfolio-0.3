export interface Project {
  id: string;
  title: string;
  description: string;
  keyResults?: string[];
  tags: string[];
  link: string;
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Sales Territory Effectiveness Analysis',
    description: 'RevoU Final Project: Analyzed sales performance, team regions, and store territories using Google Colab to identify growth opportunities and reduce regional mismatches.',
    keyResults: [
      'Analyzed sales performance and store territories to identify expansion opportunities.',
      'Developed data-driven strategies to reduce regional mismatches and optimize field team distribution.'
    ],
    tags: ['Python', 'Google Colab', 'Data Analytics', 'Sales Strategy'],
    link: '#',
    metrics: [
      { label: 'Focus', value: 'Growth' },
      { label: 'Tool', value: 'Colab' }
    ]
  },
  {
    id: '2',
    title: 'Loan Portfolio Risk Analysis & Underwriting Strategy',
    description: 'Based on RevoU Finance Insight Project: Comprehensive risk profiling and underwriting optimization for loan portfolios.',
    keyResults: [
      'Profiled anomaly cohort vs. others: uncovered that low income and distress purposes (87% debt consolidation/credit card) drove defaults more than homeownership or tenure.',
      'Delivered 4 prioritised recommendations (tighter purpose underwriting, geographic overlays, pricing recalibration, and early-warning monitoring) projected to reduce credit losses by 15-30%'
    ],
    tags: ['Finance Insight', 'Risk Analysis', 'Python', 'Underwriting', 'Tableau'],
    link: 'https://docs.google.com/presentation/d/1-3Frusi40N-cd5bP2asgNuM2Cetm0s4AGZnf0aYfab4/edit?usp=sharing',
    metrics: [
      { label: 'Credit Loss', value: '-15-30%' },
      { label: 'Distress PTP', value: '87%' }
    ]
  },
  {
    id: '3',
    title: 'Marketing Strategy Optimization: SaaS Company Case',
    description: 'Based on RevoU Data Exploration Sprint Project: End-to-end marketing analytics and customer segmentation analysis for a B2B SaaS HR platform.',
    keyResults: [
      'Conducted segmentation analysis using Python, BigQuery, and Tableau, revealing that enterprise and large-company leads generated significantly higher GMV and ROAS despite lower acquisition volume.',
      'Produced data-driven recommendations for reallocating budget toward high-intent channels and higher-value customer segments to improve marketing efficiency.'
    ],
    tags: ['B2B SaaS', 'Marketing Analytics', 'BigQuery', 'Python', 'Tableau'],
    link: 'https://docs.google.com/presentation/d/1taoYBW-5LxDIA_GK6F97pS5w0tf7D33_yu_Ptx2MUQ8/edit?usp=sharing',
    metrics: [
      { label: 'ROAS Focus', value: 'Enterprise' },
      { label: 'Database', value: 'BigQuery' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Jayadi Media',
    role: 'Growth Consultant',
    period: 'Aug 2022 – Oct 2024',
    description: [
      'Managed apartment supply ads on Meta Ads, increasing leads by 10% through creative optimization.',
      'Optimized landing pages via MoEngage, increasing promotion engagement by 5%.',
      'Partnered with developers to enhance UI/UX, improving conversion rates by 3%.'
    ]
  },
  {
    company: 'PT Meta Visio Indonesia',
    role: 'Junior Screening Specialist',
    period: 'Dec 2020 – Mar 2022',
    description: [
      'Conducted candidate background screenings and provided tracking via Google Sheets.',
      'Involved in multiple state-owned companies hiring projects through extensive internet research.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    school: 'RevoU',
    degree: 'Full-Stack Data Analysis',
    period: 'Oct 2025 – Feb 2026',
    details: 'Acquired end-to-end skills in SQL, Python, and Tableau for data-driven decision making.'
  },
  {
    school: 'BINUS University',
    degree: 'Master of Management (Creative Marketing)',
    period: 'Sep 2018 – Jun 2021',
    details: 'GPA: 3.45'
  },
  {
    school: 'President University',
    degree: 'Bachelor of International Relations',
    period: 'Sep 2010 – Jun 2018',
    details: 'GPA: 3.28'
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Technical',
    items: ['SQL', 'Python (Google Colab)', 'Tableau', 'Microsoft Excel', 'Data Analytics']
  },
  {
    category: 'Marketing & Tools',
    items: ['Meta Ads', 'Google Ads', 'Google Analytics', 'AppsFlyer', 'MoEngage', 'ChatGPT']
  },
  {
    category: 'Soft Skills',
    items: ['Creative Evaluations', '360 Communications', 'Internet Research']
  }
];
