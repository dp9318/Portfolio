/* Project Detail Modal Component */
/* ========================================================================== */

import { useEffect, useRef } from 'react';
import { Link, Tag } from '../../components/ui';
import type { Project } from '../../data/types';

export interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Handle focus management and keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    // Store the previously focused element
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Focus the modal after a brief delay to allow render
    const timer = setTimeout(() => {
      modalRef.current?.focus();
    }, 0);

    // Handle escape key
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      // Restore focus to trigger element
      previousActiveElement.current?.focus();
    };
  }, [isOpen, onClose]);

  // Trap focus within modal
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    modalRef.current.addEventListener('keydown', handleTab);
    firstElement?.focus();

    return () => {
      modalRef.current?.removeEventListener('keydown', handleTab);
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  // Format status for display
  const formatStatus = (status: string) => 
    status.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <>
      <div
        className={`modal-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={modalRef}
        className={`modal ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
      >
        <div className="modal-content">
          <header className="modal-header">
            <h2 id="modal-title" className="modal-title">{project.name}</h2>
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Close project details"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </header>

          <div className="modal-body">
            {project.description && (
              <section className="modal-section">
                <h3 className="modal-section-title">Overview</h3>
                <p className="modal-text">{project.description}</p>
              </section>
            )}

            {project.problem && (
              <section className="modal-section">
                <h3 className="modal-section-title">Problem</h3>
                <p className="modal-text">{project.problem}</p>
              </section>
            )}

            {project.solution && (
              <section className="modal-section">
                <h3 className="modal-section-title">Solution</h3>
                <p className="modal-text">{project.solution}</p>
              </section>
            )}

            {project.contribution && (
              <section className="modal-section">
                <h3 className="modal-section-title">My Contribution</h3>
                <p className="modal-text">{project.contribution}</p>
              </section>
            )}

            {(project.challenges && project.challenges.length > 0) && (
              <section className="modal-section">
                <h3 className="modal-section-title">Challenges</h3>
                <ul className="modal-text" style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
                  {project.challenges.map((challenge, i) => (
                    <li key={i} style={{ marginBottom: 'var(--space-2)' }}>{challenge}</li>
                  ))}
                </ul>
              </section>
            )}

            {(project.learnings && project.learnings.length > 0) && (
              <section className="modal-section">
                <h3 className="modal-section-title">Learnings</h3>
                <ul className="modal-text" style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
                  {project.learnings.map((learning, i) => (
                    <li key={i} style={{ marginBottom: 'var(--space-2)' }}>{learning}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className="modal-section">
              <h3 className="modal-section-title">Details</h3>
              <div className="modal-meta">
                <Tag variant={`status-${project.status}` as any} size="md">
                  {formatStatus(project.status)}
                </Tag>
                <Tag variant="default" size="md">
                  {project.category}
                </Tag>
              </div>

              {project.technologies.length > 0 && (
                <div className="modal-tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              )}

              <div className="modal-links">
                {project.repositoryUrl && (
                  <Link href={project.repositoryUrl} external variant="primary" size="sm">
                    Repository
                  </Link>
                )}
                {project.demoUrl && (
                  <Link href={project.demoUrl} external variant="secondary" size="sm">
                    Live Demo
                  </Link>
                )}
                {project.documentationUrl && (
                  <Link href={project.documentationUrl} external variant="ghost" size="sm">
                    Documentation
                  </Link>
                )}
              </div>
            </section>
          </div>

          <footer className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

