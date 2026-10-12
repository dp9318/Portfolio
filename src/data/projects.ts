/* Projects Data */
/* ========================================================================== */

import type { Project, ProjectsData, ProjectStatus } from './types';

// Project Image Assets
import recallUiDark from '../assets/images/projects/recall/recall-ui-dark.png';
import recallUiLight from '../assets/images/projects/recall/recall-ui-light.png';
import recallArchitecture from '../assets/images/projects/recall/recall-architecture.png';
import recallHero from '../assets/images/projects/recall/recall-hero.png';

import aqiconic01 from '../assets/images/projects/aqiconic/aqiconic01.png';
import aqiconic02 from '../assets/images/projects/aqiconic/aqiconic02.png';
import aqiconic03 from '../assets/images/projects/aqiconic/aqiconic03.png';
import aqiconic04 from '../assets/images/projects/aqiconic/aqiconic04.png';

import aiFoodAnalyzerTest01 from '../assets/images/projects/ai-food-analyzer/ai-food-analyzer-test01.png';

import salesOverYears from '../assets/images/projects/video-game-sales-analysis/sales-over-years.png';
import consoleGenre from '../assets/images/projects/video-game-sales-analysis/console-genre.png';
import regionAndPopularity from '../assets/images/projects/video-game-sales-analysis/region-and-popularity.png';
import topTiles from '../assets/images/projects/video-game-sales-analysis/top-tiles.png';

import epicGamesClone01 from '../assets/images/projects/epic-games-clone/epic-games-clone01.png';

/* Helper to create status with consistent typing */
const status = {
  completed: 'completed' as ProjectStatus,
  inProgress: 'in-progress' as ProjectStatus,
  prototype: 'prototype' as ProjectStatus,
  experimental: 'experimental' as ProjectStatus,
  learning: 'learning' as ProjectStatus,
};

/* Featured Projects */
/* -------------------------------------------------------------------------- */

const recall: Project = {
  id: 'recall',
  slug: 'recall',
  name: 'RECALL',
  shortDescription: 'Persistent context and memory engine for AI coding agents with SQLite canonical storage, Model Context Protocol (MCP), deterministic retrieval, and a web dashboard.',
  description: 'A local, persistent cognitive memory and context engine for AI coding agents. RECALL preserves architectural decisions and developer conventions across sessions, enforces user custom instructions with strict precedence, resolves historical context conflicts, and exposes unified context via the Model Context Protocol (MCP) and a developer web dashboard.',
  problem: 'AI coding assistants lose critical context the moment a session ends. Every new conversation forgets past architectural decisions, project conventions, and user preferences, leading to repeated explanations and conflicting agent suggestions.',
  solution: 'Architected and implemented a local persistent memory engine using canonical SQLite storage, deterministic context retrieval, strict custom-instruction precedence enforcement, MCP integration for AI coding agents, and a React + Tailwind CSS web dashboard.',
  contribution: 'Co-developed the project. Architected the system and modular repository layout. Designed and implemented the database persistence layer and canonical SQLite ledger. Built the core memory-management and orchestration layer (lifecycle, compaction, and context assembly). Implemented custom instruction handling with strict precedence enforcement (user instruction > supersession > memory). Ensured canonical persistence resilience against derived index failures. Built extensive core regression test suites, and refined the web dashboard UI/UX, theme system, and memory statistics.',
  challenges: [
    'Enforcing strict context-precedence hierarchy (user instructions over historical memories)',
    'Ensuring canonical SQLite writes remain successful even when secondary index operations fail',
    'Coordinating dual client interfaces (MCP for AI agents and HTTP API for human dashboard)',
    'Structuring modular monorepo boundaries for collaborative, contract-driven development',
  ],
  learnings: [
    'Model Context Protocol (MCP) specification and agent-tool integration',
    'Designing persistent memory architectures for LLM coding agents',
    'Resilient multi-tier persistence (canonical SQLite ledger + derived vector index)',
    'Deterministic context assembly and arbitration policies',
  ],
  status: status.completed,
  category: 'AI Systems / Developer Tooling / Context Engine',
  featured: true,
  technologies: ['Python', 'SQLite', 'MCP', 'FastAPI', 'ChromaDB', 'React', 'Tailwind CSS', 'TypeScript'],
  repositoryUrl: 'https://github.com/dp9318/RECALL',
  demoUrl: undefined,
  documentationUrl: undefined,
  images: [recallUiDark, recallArchitecture, recallUiLight, recallHero],
  thumbnail: recallUiDark,
  startDate: '2024',
  endDate: '2024',
  isCollaborative: true,
  teamSize: undefined,
};

const aqiconic: Project = {
  id: 'aqiconic',
  slug: 'aqiconic',
  name: 'AQIconic',
  shortDescription: 'Environmental air-quality monitoring and control platform combining a Windows desktop application with ESP32-based hardware and real-time communication.',
  description: 'An environmental air-quality monitoring and control platform combining a Windows desktop application with ESP32-based hardware and real-time communication. The system enables real-time environmental data interaction and visualization.',
  problem: 'Need for a comprehensive air-quality monitoring solution that bridges hardware sensors with a user-friendly desktop interface for real-time data visualization and control.',
  solution: 'Built a Windows desktop application using Qt/QML/PySide6 for real-time environmental data interaction and visualization, integrated with an ESP32-based hardware layer via Socket.IO communication.',
  contribution: 'Built and contributed to the Windows desktop application. Learned Qt/QML and PySide6 to meet project requirements. Worked on the software–hardware communication layer. Contributed to Socket.IO communication and ESP32 integration. Contributed to the broader direction of the project as it expanded beyond basic air-quality monitoring.',
  challenges: [
    'Learning Qt/QML and PySide6 from scratch for desktop application development',
    'Establishing reliable real-time communication between desktop app and ESP32 hardware',
    'Integrating Socket.IO for bidirectional data flow',
    'Handling cross-platform desktop development considerations',
  ],
  learnings: [
    'Desktop application development with Qt/QML/PySide6',
    'Real-time communication protocols (Socket.IO)',
    'Hardware/software integration with ESP32 microcontrollers',
    'Cross-platform GUI development challenges',
  ],
  status: status.inProgress,
  category: 'Desktop Application / Environmental Monitoring / Hardware Integration',
  featured: true,
  technologies: ['Qt', 'QML', 'PySide6', 'Python', 'C++', 'ESP32', 'Socket.IO'],
  repositoryUrl: 'https://github.com/dp9318/AQIconic',
  demoUrl: undefined,
  documentationUrl: undefined,
  images: [aqiconic01, aqiconic02, aqiconic03, aqiconic04],
  thumbnail: aqiconic01,
  startDate: '2024',
  endDate: undefined,
  isCollaborative: true,
  teamSize: undefined,
};

const aiFoodAnalyzer: Project = {
  id: 'ai-food-analyzer',
  slug: 'ai-food-analyzer',
  name: 'AI Food Analyzer',
  shortDescription: 'Computer-vision system for microscopic food-sample analysis and bacterial pattern detection to assist assessment of food purity and hygiene.',
  description: 'A computer-vision system for microscopic food-sample analysis and bacterial pattern detection to assist the assessment of food purity and hygiene. Developed under the guidance of Dr. Jay Kumar Jain, Assistant Professor.',
  problem: 'Need for automated microscopic analysis of food samples to detect bacterial patterns and assess food purity/hygiene levels.',
  solution: 'Developing an analysis system that explores microscopic image analysis and computer vision for bacterial-pattern detection across food-related samples using YOLO-based object detection.',
  contribution: 'Developing the analysis system. Working with microscopic image datasets. Implementing bacterial-pattern detection using YOLO. Training and validating against Lactobacillus species. Working with research samples involving L. delbrueckii and L. salivarius.',
  challenges: [
    'Working with microscopic image datasets and preprocessing',
    'Training YOLO models for bacterial pattern detection',
    'Validating against specific Lactobacillus species (L. delbrueckii, L. salivarius)',
    'Balancing research exploration with practical implementation',
  ],
  learnings: [
    'Computer vision with YOLO for object detection',
    'Microscopic image analysis techniques',
    'Model training and validation workflows',
    'Research-oriented development process',
  ],
  status: status.inProgress,
  category: 'Machine Learning / Computer Vision / Research',
  featured: true,
  technologies: ['Python', 'YOLO', 'Jupyter Notebook', 'NumPy'],
  repositoryUrl: 'https://github.com/dp9318/AI-Food-Analyzer',
  demoUrl: undefined,
  documentationUrl: undefined,
  images: [aiFoodAnalyzerTest01],
  thumbnail: aiFoodAnalyzerTest01,
  startDate: '2024',
  endDate: undefined,
  isCollaborative: true,
  teamSize: undefined,
};

const videoGameSales: Project = {
  id: 'video-game-sales',
  slug: 'video-game-sales',
  name: 'Video Game Sales Analysis (1971–2024)',
  shortDescription: 'Power BI analysis of 50+ years of global video-game sales data, examining platform, genre, regional, and market trends.',
  description: 'An interactive Power BI dashboard for exploring long-term patterns in global video-game sales across more than 50 years of data.',
  problem: 'Need to analyze and visualize long-term trends in the global video game market across platforms, genres, and regions.',
  solution: 'Built an interactive Power BI dashboard with DAX measures for exploring platform, genre, regional, and market trends from 1971-2024.',
  contribution: 'Prepared and analyzed the dataset. Built the Power BI visualizations. Examined platform, genre, and regional trends. Presented insights through interactive dashboards.',
  challenges: [
    'Cleaning and preparing 50+ years of sales data',
    'Designing effective DAX measures for trend analysis',
    'Creating intuitive interactive visualizations',
  ],
  learnings: [
    'Advanced Power BI dashboard development',
    'DAX for complex analytical calculations',
    'Data visualization best practices for time-series data',
    'Market trend analysis methodology',
  ],
  status: status.completed,
  category: 'Data Analytics / Visualization',
  featured: true,
  technologies: ['Power BI', 'DAX'],
  repositoryUrl: 'https://github.com/dp9318/Game-Sales-Analysis-1971-2024-',
  demoUrl: undefined,
  documentationUrl: undefined,
  images: [salesOverYears, consoleGenre, regionAndPopularity, topTiles],
  thumbnail: salesOverYears,
  startDate: '2024',
  endDate: '2024',
  isCollaborative: false,
};

/* Additional Projects */
/* -------------------------------------------------------------------------- */

const epicGamesClone: Project = {
  id: 'epic-games-clone',
  slug: 'epic-games-clone',
  name: 'Epic Games Clone',
  shortDescription: 'Learning-oriented implementation of an Epic Games Store-style application with game discovery, authentication, and e-commerce-oriented functionality.',
  description: 'A learning-oriented implementation of an Epic Games Store-style application with game discovery, authentication, and e-commerce-oriented functionality. Currently in active development.',
  problem: 'Learning project to understand full-stack e-commerce application patterns, authentication flows, and modern web development practices.',
  solution: 'Building a clone of the Epic Games Store to learn and practice web development fundamentals.',
  contribution: 'Dipankar is developing the application and learning through implementation.',
  challenges: [
    'Implementing authentication and user management',
    'Building product discovery and catalog interfaces',
    'Understanding e-commerce data models',
  ],
  learnings: [
    'Frontend development with HTML/CSS/JavaScript',
    'Authentication patterns',
    'E-commerce UI/UX patterns',
    'Project structure and organization',
  ],
  status: status.inProgress,
  category: 'Web Application / Full-Stack Learning Project',
  featured: false,
  technologies: ['HTML', 'CSS', 'JavaScript'],
  repositoryUrl: 'https://github.com/dp9318/Epic-Games-Clone',
  demoUrl: undefined,
  documentationUrl: undefined,
  images: [epicGamesClone01],
  thumbnail: epicGamesClone01,
  startDate: '2024',
  endDate: undefined,
  isCollaborative: false,
};

const creditCardAnalysis: Project = {
  id: 'credit-card-analysis',
  slug: 'credit-card-analysis',
  name: 'Indian Credit Card Analysis',
  shortDescription: 'Python-based recommendation system that analyzes spending patterns and suggests suitable credit-card options.',
  description: 'A data-processing and recommendation workflow using spending information to generate personalized card recommendations.',
  problem: 'Need for a personalized credit card recommendation system based on user spending patterns.',
  solution: 'Built a Python-based recommendation system using data preprocessing and machine learning to analyze spending patterns and suggest suitable credit cards.',
  contribution: 'Built the data processing pipeline and recommendation workflow.',
  challenges: [
    'Processing and cleaning spending data',
    'Building a recommendation algorithm with scikit-learn',
    'Validating recommendation quality',
  ],
  learnings: [
    'Data preprocessing with Pandas',
    'Recommendation system implementation with scikit-learn',
    'Practical data analysis workflow',
  ],
  status: status.completed,
  category: 'Data Analysis / Recommendation System',
  featured: false,
  technologies: ['Python', 'Pandas', 'scikit-learn'],
  repositoryUrl: undefined,
  demoUrl: undefined,
  documentationUrl: undefined,
  images: [],
  thumbnail: undefined,
  startDate: '2023',
  endDate: '2023',
  isCollaborative: false,
};

/* Export Combined Data */
/* -------------------------------------------------------------------------- */

export const projectsData: ProjectsData = {
  featured: [recall, aqiconic, aiFoodAnalyzer, videoGameSales],
  additional: [epicGamesClone, creditCardAnalysis],
};

/* Export individual projects for direct import if needed */
export const projects = {
  recall,
  aqiconic,
  aiFoodAnalyzer,
  videoGameSales,
  epicGamesClone,
  creditCardAnalysis,
};