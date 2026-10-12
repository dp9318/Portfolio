/* Profile Data */
/* ========================================================================== */

import type { Profile, SocialLink } from './types';
import profilePhotoImg from '../assets/images/profile/profile.png';

/* Inline SVG Icons - Keys for use in components */
export const iconKeys = {
  github: 'github',
  linkedin: 'linkedin',
  leetcode: 'leetcode',
  hackerrank: 'hackerrank',
  email: 'email',
  discord: 'discord',
  download: 'download',
  external: 'external',
  close: 'close',
  menu: 'menu',
  chevronDown: 'chevronDown',
  chevronRight: 'chevronRight',
  check: 'check',
  tag: 'tag',
  code: 'code',
  database: 'database',
  server: 'server',
  monitor: 'monitor',
  smartphone: 'smartphone',
  cpu: 'cpu',
  brain: 'brain',
  book: 'book',
  award: 'award',
  users: 'users',
  rocket: 'rocket',
  sparkles: 'sparkles',
  lightbulb: 'lightbulb',
  target: 'target',
  arrowRight: 'arrowRight',
  arrowLeft: 'arrowLeft',
} as const;

export type IconKey = keyof typeof iconKeys;

/* Social Links */
export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/dp9318',
    icon: iconKeys.github,
    external: true,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dipankar-kumar-95bab1234',
    icon: iconKeys.linkedin,
    external: true,
  },
  {
    label: 'LeetCode',
    url: 'https://leetcode.com/u/Dipankar9318/',
    icon: iconKeys.leetcode,
    external: true,
  },
  {
    label: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/dipankarkumar626',
    icon: iconKeys.hackerrank,
    external: true,
  },
  {
    label: 'Email',
    url: 'mailto:dipankarkumar626@gmail.com',
    icon: iconKeys.email,
    external: false,
  },
];

/* Primary CTA Links (used in Hero) */
export const primaryCtaLinks: SocialLink[] = [
  {
    label: 'View Projects',
    url: '#projects',
    icon: iconKeys.code,
    external: false,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/dp9318',
    icon: iconKeys.github,
    external: true,
  },
  {
    label: 'View Resume',
    url: 'https://drive.google.com/drive/folders/1_0XEvkFYHP4ZGoslBVSa78gYvTJmlp1Y?usp=drive_link',
    icon: iconKeys.download,
    external: true,
  },
];

/* Profile Data */
export const profile: Profile = {
  name: 'Dipankar Kumar',
  displayName: 'Dipankar',
  title: 'Software Engineer',
  tagline: 'I learn what the problem needs and build it.',
  shortTagline: 'Learn the problem needs, then build it.',
  supportingMessage: 'Software Engineer and MCA student focused on application development and AI integration — understanding problem needs, designing practical systems, and building working software.',
  email: 'dipankarkumar626@gmail.com',
  location: 'Bhopal, Madhya Pradesh, India',
  profilePhoto: profilePhotoImg,
  resumeUrl: 'https://drive.google.com/drive/folders/1_0XEvkFYHP4ZGoslBVSa78gYvTJmlp1Y?usp=drive_link',
  socialLinks,
  discordHandle: 'dp_9318',
};