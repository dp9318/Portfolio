/* Skills Data */
/* ========================================================================== */

import type { Skill, SkillGroup, SkillCategory } from './types';

/* Helper to create skills with consistent structure */
const skill = (name: string, category: SkillCategory): Skill => ({
  name,
  category,
});

/* Skill Groups */
/* -------------------------------------------------------------------------- */

export const skills: SkillGroup[] = [
  {
    category: 'programming',
    label: 'Programming & Software Engineering',
    skills: [
      skill('Java', 'programming'),
      skill('Python', 'programming'),
      skill('SQL', 'programming'),
      skill('Object-Oriented Programming', 'programming'),
      skill('Data Structures & Algorithms', 'programming'),
      skill('REST APIs', 'programming'),
    ],
  },
  {
    category: 'application-development',
    label: 'Application Development',
    skills: [
      skill('Qt / QML', 'application-development'),
      skill('PySide6', 'application-development'),
      skill('Desktop Application Development', 'application-development'),
      skill('Software–Hardware Integration', 'application-development'),
      skill('API-Driven Applications', 'application-development'),
    ],
  },
  {
    category: 'data-analytics',
    label: 'Data & Analytics',
    skills: [
      skill('Power BI', 'data-analytics'),
      skill('DAX', 'data-analytics'),
      skill('Pandas', 'data-analytics'),
      skill('NumPy', 'data-analytics'),
      skill('Data Analysis', 'data-analytics'),
      skill('Data Visualization', 'data-analytics'),
    ],
  },
  {
    category: 'ai-ml',
    label: 'AI & Machine Learning',
    note: 'Active Exploration',
    description: 'Active learning and research exploration, not established specialization.',
    skills: [
      skill('Machine Learning', 'ai-ml'),
      skill('Computer Vision', 'ai-ml'),
      skill('YOLO', 'ai-ml'),
      skill('Prompt Engineering', 'ai-ml'),
      skill('LLM Evaluation', 'ai-ml'),
    ],
  },
  {
    category: 'databases',
    label: 'Databases & Foundations',
    skills: [
      skill('DBMS', 'databases'),
      skill('SQL', 'databases'),
      skill('Computer Networks', 'databases'),
      skill('OOP Concepts', 'databases'),
    ],
  },
  {
    category: 'tools',
    label: 'Developer Tools',
    skills: [
      skill('Git', 'tools'),
      skill('GitHub', 'tools'),
      skill('VS Code', 'tools'),
      skill('Jupyter Notebook', 'tools'),
    ],
  },
];

/* Working Strengths / Soft Skills */
/* -------------------------------------------------------------------------- */

export const workingStrengths = [
  'Learning agility',
  'Problem solving',
  'Adaptability',
  'Analytical thinking',
  'Communication',
  'Technical curiosity',
  'Collaboration',
  'Teaching / mentoring',
  'Initiative',
  'Creative thinking',
];

/* Current Priority Order (from CONTENT.md) */
/* -------------------------------------------------------------------------- */

export const skillPriorityOrder = [
  'Software Engineering',
  'Application Development',
  'Learning / Adaptability',
  'Data / Analytics',
  'Academic Background',
  'Leadership',
  'Machine Learning Exploration',
];