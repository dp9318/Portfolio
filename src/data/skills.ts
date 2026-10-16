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
      skill('Qt / PySide6', 'application-development'),
      skill('REST API Integration', 'application-development'),
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
  'Academic Background',
  'Leadership',
  'Machine Learning Exploration',
];