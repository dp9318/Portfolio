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
        // Entrance: subtle scale-up and parallax float-up
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Subtle parallax movement on the card thumbnail
        const img = card.querySelector('.project-card-image img');
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          );
        }
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
          <img src={project.thumbnail} alt="" loading="lazy" />
        </div>
      )}
      <div className="project-card-content">
        <h3 className="project-title">{project.name}</h3>
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