/* Education Data */
/* ========================================================================== */

import type { EducationEntry } from './types';

export const education: EducationEntry[] = [
  {
    id: 'mca-manit',
    degree: 'Master of Computer Applications (MCA)',
    field: 'Computer Applications',
    institution: 'Maulana Azad National Institute of Technology (MANIT), Bhopal',
    period: '2025 – 2028',
    location: 'Bhopal, Madhya Pradesh, India',
    cgpa: undefined, // Do not prominently display CGPA unless needed for specific context
    highlights: [
      'Current student',
      'Focus: Software Engineering, Application Development, Systems',
    ],
    portfolioPriority: 'high',
  },
  {
    id: 'bsc-du',
    degree: 'B.Sc. (Hons.) Computer Science',
    field: 'Computer Science',
    institution: 'College of Vocational Studies, University of Delhi',
    period: '2021 – 2024',
    location: 'Delhi, India',
    cgpa: '6.67',
    highlights: [
      'Core CS curriculum: Data Structures, Algorithms, OOP, DBMS, Computer Networks',
      'Programming: Java, Python, C++',
    ],
    portfolioPriority: 'medium',
  },
  {
    id: 'class-xii',
    degree: 'Class XII (Senior Secondary)',
    field: 'PCM (Physics, Chemistry, Mathematics)',
    institution: 'D.A.V. Model School C.F.R.I., Dhanbad, Jharkhand',
    period: '2021',
    location: 'Dhanbad, Jharkhand, India',
    cgpa: undefined,
    highlights: ['Score: 87.4%'],
    portfolioPriority: 'low',
  },
  {
    id: 'class-x',
    degree: 'Class X (Secondary)',
    field: 'General',
    institution: 'D.A.V. Model School C.F.R.I., Dhanbad, Jharkhand',
    period: '2019',
    location: 'Dhanbad, Jharkhand, India',
    cgpa: undefined,
    highlights: ['Score: 84%'],
    portfolioPriority: 'low',
  },
];