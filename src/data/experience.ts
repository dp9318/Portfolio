/* Experience & Leadership Data */
/* ========================================================================== */

import type { ExperienceEntry, LeadershipEntry } from './types';

/* Professional Experience */
/* -------------------------------------------------------------------------- */

export const experience: ExperienceEntry[] = [
  {
    id: 'ekara-financials',
    role: 'Data Analyst Intern',
    organization: 'Ekara Financials',
    period: 'June 2024 – August 2024',
    location: 'Remote',
    description: 'Practical exposure to data analysis, reporting, SQL, business-oriented analysis, and collaborative technical work.',
    responsibilities: [
      'Developed an interactive Power BI dashboard using DAX',
      'Worked on a credit-card recommendation analysis based on user spending',
      'Analyzed SMS data to identify patterns relevant to spam detection',
      'Extracted and prepared datasets using SQL in collaboration with data scientists and analysts',
    ],
    technologies: ['Power BI', 'DAX', 'SQL', 'Data Analysis'],
    type: 'internship',
    portfolioEmphasis: 'Shows practical exposure to data analysis, reporting, SQL, business-oriented analysis, and collaborative technical work.',
  },
  {
    id: 'outlier-ai',
    role: 'AI Prompt Writer & Evaluator (Freelance)',
    organization: 'Outlier AI',
    period: 'October 2024 – January 2025',
    location: 'Remote',
    description: 'Analytical evaluation, communication, prompt engineering, attention to quality, and exposure to generative AI workflows.',
    responsibilities: [
      'Authored, evaluated, and edited prompts used to test LLM performance',
      'Analyzed model responses for accuracy, coherence, and tone',
      'Provided structured feedback for model improvement',
      'Reworked AI-generated content to meet defined quality standards',
    ],
    technologies: ['Prompt Engineering', 'LLM Evaluation', 'Content Quality'],
    type: 'freelance',
    portfolioEmphasis: 'Shows analytical evaluation, communication, prompt engineering, attention to quality, and exposure to generative AI workflows.',
  },
];

/* Leadership & Community */
/* -------------------------------------------------------------------------- */

export const leadership: LeadershipEntry[] = [
  {
    id: 'catalyst-club',
    role: 'Head of Mock Interview',
    organization: 'Catalyst Club',
    period: 'September 2026 – Present',
    description: 'Helps juniors and batchmates improve communication and interview performance through mock interview sessions and club activities.',
    contributions: [
      'Conducts mock interview sessions for juniors and batchmates',
      'Provides feedback on communication and technical interview performance',
      'Organizes club activities focused on interview preparation',
    ],
    portfolioEmphasis: 'Shows mentoring, communication, and peer development.',
  },
  {
    id: 'skillx-community',
    role: 'Founder',
    organization: 'SKILLX Community',
    period: 'March 2023 – Present',
    description: 'Founded and managed a technology-learning community. Grew the community to more than 200 students. Conducted live technical tutorials and workshops including hands-on Android development sessions.',
    contributions: [
      'Founded and managed a technology-learning community',
      'Grew the community to more than 200 students',
      'Conducted live technical tutorials and workshops',
      'Included hands-on Android development sessions',
    ],
    portfolioEmphasis: 'This is one of the strongest leadership examples and should be presented as evidence of initiative, teaching, communication, and community building.',
  },
  {
    id: 'encrypt',
    role: 'Head of Design',
    organization: 'ENCRYPT',
    period: '2022 – 2023',
    description: 'Led a 40-member design team. Oversaw creative output and design standards. Supported society initiatives and brand collaborations.',
    contributions: [
      'Led a 40-member design team',
      'Oversaw creative output and design standards',
      'Supported society initiatives and brand collaborations',
    ],
    portfolioEmphasis: 'Use this selectively as supporting evidence of leadership, coordination, and creative problem solving.',
  },
];

/* Achievements */
/* -------------------------------------------------------------------------- */

export const achievements = [
  {
    id: 'sih-hackathon',
    title: 'Smart India Hackathon Participant',
    description: 'Participated in Smart India Hackathon as part of a technical project team.',
    period: '2024',
  },
];