/* Projects Section */
/* ========================================================================== */

import { useState } from 'react';
import { Section, Heading, Card, Tag } from '../../components/ui';
import { ProjectDetailModal } from '../../components/projects';
import { projectsData } from '../../data';
import type { Project } from '../../data/types';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const renderProjectCard = (project: Project) => (
    <Card
      key={project.id}
      className="project-card"
      hoverable
      onClick={() => handleProjectClick(project)}
      style={{ cursor: 'pointer' }}
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
          <Tag variant="default" size="sm">
            {project.category}
          </Tag>
        </div>
        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </Card>
  );

  return (
    <>
      <Section id="projects" aria-labelledby="projects-heading" variant="default">
        <Heading id="projects-heading" level={2} variant="section">
          Selected Projects
        </Heading>
        <div className="projects-grid">
          {projectsData.featured.map(renderProjectCard)}
        </div>

        {/* Additional Projects */}
        {projectsData.additional.length > 0 && (
          <div className="mt-8">
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
          onClose={() => setSelectedProject(null)}
        />
      </Section>
    </>
  );
}

function formatStatus(status: string): string {
  return status.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}