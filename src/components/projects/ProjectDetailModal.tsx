/* Project Detail Modal Component */
/* ========================================================================== */

import { useEffect, useRef } from 'react';
import { Link, Tag } from '../../components/ui';
import type { Project } from '../../data/types';
import { useSmoothScroll } from '../motion';

export interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const { stop, start } = useSmoothScroll();

  // Handle focus management, body scroll lock, and keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    // Pause Lenis smooth scroll while modal is active
    stop();

    // Store the triggering element to restore focus when modal closes
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Lock body scroll and preserve previous overflow state
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the first interactive element (close button) or modal container
    const focusTimer = setTimeout(() => {
      if (!modalRef.current) return;
      const focusables = modalRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length > 0) {
        focusables[0].focus();
      } else {
        modalRef.current.focus();
      }
    }, 50);

    // Keyboard navigation: Escape key to close, Tab key trap
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onCloseRef.current();
        return;
      }

      if (event.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === first || document.activeElement === modalRef.current) {
            event.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      // Restore focus to triggering element
      previousActiveElement.current?.focus();
      // Resume Lenis smooth scroll
      start();
    };
  }, [isOpen, stop, start]);

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
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        data-lenis-prevent-touch="true"
      />
      <div
        ref={modalRef}
        className={`modal ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        data-lenis-prevent-touch="true"
      >
        <div
          className="modal-content"
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
        >
          <header className="modal-header">
            <h2 id="modal-title" className="modal-title">{project.name}</h2>
            <button
              type="button"
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

          <div
            className="modal-body"
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
          >
            {project.description && (
              <section className="modal-section">
                <h3 className="modal-section-title">Overview</h3>
                <p className="modal-text">{project.description}</p>
              </section>
            )}

            {(project.images && project.images.length > 0) && (
              <section className="modal-section">
                <h3 className="modal-section-title">Screenshots</h3>
                <div className="modal-images">
                  {project.images.map((img, idx) => (
                    <div key={idx} className="modal-image-item">
                      <img
                        src={img}
                        alt={getScreenshotAlt(project.name, img, idx)}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
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
                {project.isCollaborative && (
                  <Tag variant="info" size="md">
                    Collaborative Project
                  </Tag>
                )}
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

              {(project.repositoryUrl || project.demoUrl || project.documentationUrl) && (
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
              )}
            </section>
          </div>

          <footer className="modal-footer">
            <button
              type="button"
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

function getScreenshotAlt(projectName: string, src: string, index: number): string {
  const lower = src.toLowerCase();
  if (lower.includes('architecture')) return `${projectName} architecture diagram`;
  if (lower.includes('dark')) return `${projectName} dark-mode dashboard preview`;
  if (lower.includes('light')) return `${projectName} light-mode dashboard preview`;
  if (lower.includes('hero') || lower.includes('banner')) return `${projectName} overview banner`;
  return `${projectName} screenshot ${index + 1}`;
}

