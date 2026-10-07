/* Data Index - Single Entry Point for All Content */
/* ========================================================================== */

// Types
export type {
  ProjectStatus,
  SkillCategory,
  SocialLink,
  Profile,
  Project,
  ProjectsData,
  ExperienceEntry,
  LeadershipEntry,
  EducationEntry,
  Skill,
  SkillGroup,
  LearningFocus,
  PortfolioContent,
} from './types';

// Profile
export { profile, socialLinks, primaryCtaLinks, iconKeys, type IconKey } from './profile';

// Projects
export { projectsData, projects } from './projects';

// Experience & Leadership
export { experience, leadership, achievements } from './experience';

// Education
export { education } from './education';

// Skills
export { skills, workingStrengths, skillPriorityOrder } from './skills';

// Learning
export { learning } from './learning';