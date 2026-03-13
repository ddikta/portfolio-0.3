export interface Project {
  id: string;
  title: string;
  description: string;
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
    tags: ['Python', 'Google Colab', 'Data Analytics', 'Sales Strategy'],
    link: 'https://docs.google.com/presentation/d/1GkpuplYkwyG8wzE4twAhMzM7ZUcOt36Jle-_uFUiI_o/edit?usp=sharing',
    metrics: [
      { label: 'Focus', value: 'Growth' },
      { label: 'Tool', value: 'Colab' }
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
