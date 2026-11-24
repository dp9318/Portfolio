/* Projects Section */
/* ========================================================================== */

import { useState, useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section, Heading, Card, Tag } from '../../components/ui';
import { ProjectDetailModal } from '../../components/projects';
import { projectsData } from '../../data';
import type { Project } from '../../data/types';
import { useSmoothScroll } from '../../components/motion';

import recallDoodle from '../../assets/images/sketch/recall-doodle.svg';
import aqiconicDoodle from '../../assets/images/sketch/aqiconic-doodle.svg';
import foodAnalyzerDoodle from '../../assets/images/sketch/food-analyzer-doodle.svg';
import gameSalesDoodle from '../../assets/images/sketch/game-sales-doodle.svg';
import epicCloneDoodle from '../../assets/images/sketch/epic-clone-doodle.svg';
import creditCardDoodle from '../../assets/images/sketch/credit-card-doodle.svg';

const projectDoodles: Record<string, string> = {
  'recall': recallDoodle,
  'aqiconic': aqiconicDoodle,
  'ai-food-analyzer': foodAnalyzerDoodle,
  'video-game-sales': gameSalesDoodle,
  'epic-games-clone': epicCloneDoodle,
  'credit-card-analysis': creditCardDoodle,
};

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { stop, start } = useSmoothScroll();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card');
      cards.forEach((card) => {
        // Entrance: subtle parallax float-up
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );

      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    stop();
  };

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
    start();
  }, [start]);

  const renderProjectCard = (project: Project) => (
    <Card
      key={project.id}
      className="project-card"
      hoverable
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`View details for ${project.name}`}
      onClick={() => handleProjectClick(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleProjectClick(project);
        }
      }}
    >
      {project.thumbnail && (
        <div className="project-card-image">
          <img src={project.thumbnail} alt="" loading="lazy" decoding="async" width={540} height={338} />
        </div>
      )}
      <div className="project-card-content">
        <div className="project-card-header-row">
          {projectDoodles[project.id] && (
            <img
              src={projectDoodles[project.id]}
              alt=""
              className="project-card-doodle"
              aria-hidden="true"
            />
          )}
          <div>
            <span className="project-card-sublabel">{project.category.split('/')[0].trim()}</span>
            <h3 className="project-title">{project.name}</h3>
          </div>
        </div>
        <p className="project-description">{project.shortDescription}</p>
        <div className="project-meta">
          <Tag variant={`status-${project.status}` as any} size="sm">
            {formatStatus(project.status)}
          </Tag>
          {project.isCollaborative && (
            <Tag variant="info" size="sm">
              Collaborative
            </Tag>
          )}
          <Tag variant="default" size="sm">
            {project.category}
          </Tag>
        </div>
        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-card-action">
          <span className="project-card-cta">
            View Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
        </div>
      </div>
    </Card>
  );

  return (
    <div ref={sectionRef}>
      <Section id="projects" aria-labelledby="projects-heading" variant="default">
        <Heading id="projects-heading" level={2} variant="section">
          Selected Projects
        </Heading>
        <div className="projects-grid">
          {projectsData.featured.map(renderProjectCard)}
        </div>

        {/* Additional Projects */}
        {projectsData.additional.length > 0 && (
          <div className="additional-projects-wrapper">
            <Heading level={3} variant="subsection">
              Additional Projects
            </Heading>
            <div className="projects-grid">
              {projectsData.additional.map(renderProjectCard)}
            </div>
          </div>
        )}

        <ProjectDetailModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={handleCloseModal}
        />
      </Section>
    </div>
  );
}

function formatStatus(status: string): string {
  return status.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}