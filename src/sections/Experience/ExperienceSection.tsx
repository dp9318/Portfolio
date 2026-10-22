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
            scrollTrigger: {
              trigger: entry,
              start: 'top 87%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Subtle parallax response to scroll
        gsap.to(entry, {
          y: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: entry,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
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
        <div className="leadership-list" role="list" aria-label="Leadership and community">
          <Heading level={3} variant="subsection">
            Community & Leadership
          </Heading>
          {leadership.map((entry: LeadershipEntry) => (
            <Card key={entry.id} className="experience-entry" variant="default" role="listitem">
              <CardContent>
                <header className="entry-header">
                  <h3 className="entry-role">{entry.role}</h3>
                  <div className="entry-meta">
                    <span className="entry-org">{entry.organization}</span>
                    <span className="entry-period">{entry.period}</span>
                  </div>
                </header>
                <p className="text-secondary">{entry.description}</p>
                <ul className="entry-responsibilities">
                  {entry.contributions.map((contrib: string, i: number) => (
                    <li key={i}>{contrib}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="achievements-list" role="list" aria-label="Achievements">
            <Heading level={3} variant="subsection">
              Achievements
            </Heading>
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="experience-entry" variant="default" role="listitem">
                <CardContent>
                  <h4 className="font-semibold text-primary">{achievement.title}</h4>
                  <p className="text-secondary mt-1">{achievement.description}</p>
                  <p className="text-caption text-muted mt-2">{achievement.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}