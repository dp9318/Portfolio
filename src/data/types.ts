/* Content Data Types */
/* ========================================================================== */

/* Base Types */
export type ProjectStatus =
  | 'completed'
  | 'in-progress'
  | 'prototype'
  | 'experimental'
  | 'learning'
  | 'archived';

export type SkillCategory =
  | 'programming'
  | 'application-development'
  | 'tools';

export interface SocialLink {
  label: string;
  url: string;
  icon: string; // inline SVG key or component name
  external?: boolean;
}

/* Profile */
export interface Profile {
  name: string;
  displayName: string;
  title: string;
  tagline: string;
  shortTagline: string;
  supportingMessage: string;
  email: string;
  location: string;
  profilePhoto?: string; // path to image
  resumeUrl: string;
  socialLinks: SocialLink[];
  discordHandle?: string;
}

/* Projects */
export interface Project {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description?: string; // longer description for modal
  problem?: string;
  solution?: string;
  contribution?: string;
  challenges?: string[];
  results?: string[];
  learnings?: string[];
  status: ProjectStatus;
  category: string;
  featured: boolean;
  technologies: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  images: string[]; // paths to images
  thumbnail?: string; // card thumbnail
  startDate?: string;
  endDate?: string;
  isCollaborative?: boolean;
  teamSize?: number;
}

export interface ProjectsData {
  featured: Project[];
  additional: Project[];
}

/* Experience */
export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
  type: 'internship' | 'freelance' | 'full-time' | 'part-time' | 'volunteer';
  portfolioEmphasis?: string;
}

export interface LeadershipEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  contributions: string[];
  portfolioEmphasis?: string;
}

/* Education */
export interface EducationEntry {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  location?: string;
  cgpa?: string;
  highlights?: string[];
  portfolioPriority: 'high' | 'medium' | 'low';
}

/* Skills */
export interface Skill {
  name: string;
  proficiency?: 'learning' | 'developing' | 'proficient' | 'advanced';
  category: SkillCategory;
}

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: Skill[];
  description?: string;
  note?: string; // e.g., "Active exploration"
}

/* Learning */
export interface LearningFocus {
  label: string;
  items: string[];
  category: 'primary' | 'exploration' | 'principle';
}

/* All Content */
export interface PortfolioContent {
  profile: Profile;
  projects: ProjectsData;
  experience: ExperienceEntry[];
  leadership: LeadershipEntry[];
  education: EducationEntry[];
  skills: SkillGroup[];
  learning: LearningFocus[];
}