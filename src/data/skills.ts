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
    label: 'Programming',
    skills: [
      skill('Python', 'programming'),
      skill('SQL', 'programming'),
    ],
  },
  {
    category: 'application-development',
    label: 'Application Development',
    skills: [
      skill('Qt / QML', 'application-development'),
      skill('PySide6', 'application-development'),
      skill('REST APIs', 'application-development'),
    ],
  },
  {
    category: 'data-analytics',
    label: 'Data & Analytics',
    skills: [
      skill('NumPy', 'data-analytics'),
      skill('Power BI', 'data-analytics'),
      skill('Prompt Engineering', 'data-analytics'),
    ],
  },
  {
    category: 'tools',
    label: 'Tools',
    skills: [
      skill('Git', 'tools'),
      skill('GitHub', 'tools'),
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