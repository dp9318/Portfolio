/* Experience Section */
/* ========================================================================== */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section, Heading, Card, CardContent } from '../../components/ui';
import { experience, leadership, achievements } from '../../data';
import type { ExperienceEntry, LeadershipEntry } from '../../data/types';

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const entries = gsap.utils.toArray<HTMLElement>('.experience-entry');
      entries.forEach((entry) => {
        // Entrance: subtle scale-up and float-up as each entry enters viewport
        gsap.fromTo(
          entry,
          {
            opacity: 0,
            y: 35,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: entry,
              start: 'top 87%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <Section id="experience" aria-labelledby="experience-heading" variant="default">
        <Heading id="experience-heading" level={2} variant="section">
          Experience & Leadership
        </Heading>

        {/* Professional Experience */}
        <div className="experience-list" role="list" aria-label="Professional experience">
          {experience.map((entry: ExperienceEntry) => (
            <Card key={entry.id} className="experience-entry" variant="default" role="listitem">
              <CardContent>
                <header className="entry-header">
                  <h3 className="entry-role">{entry.role}</h3>
                  <div className="entry-meta">
                    <span className="entry-org">{entry.organization}</span>
                    <span className="entry-period">{entry.period}</span>
                    {entry.location && <span className="entry-location">{entry.location}</span>}
                  </div>
                </header>
                <ul className="entry-responsibilities">
                  {entry.responsibilities.map((resp: string, i: number) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership & Community */}
        <div className="leadership-section">
          <Heading level={3} variant="subsection" className="leadership-heading">
            Community & Leadership
          </Heading>
          <div className="leadership-grid" role="list" aria-label="Leadership and community">
            {leadership.map((entry: LeadershipEntry) => (
              <Card key={entry.id} className="experience-entry leadership-entry" variant="default" role="listitem">
                <CardContent>
                  <header className="entry-header">
                    <h3 className="entry-role">{entry.role}</h3>
                    <div className="entry-meta">
                      <span className="entry-org">{entry.organization}</span>
                      <span className="entry-period">{entry.period}</span>
                    </div>
                  </header>
                  <p className="entry-description text-secondary">{entry.description}</p>
                  <ul className="entry-responsibilities">
                    {entry.contributions.map((contrib: string, i: number) => (
                      <li key={i}>{contrib}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="achievements-section">
            <Heading level={3} variant="subsection" className="achievements-heading">
              Achievements
            </Heading>
            <div className="achievements-grid" role="list" aria-label="Achievements">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className="experience-entry achievement-entry" variant="default" role="listitem">
                  <CardContent>
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description text-secondary">{achievement.description}</p>
                    <p className="achievement-period text-caption text-muted">{achievement.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}