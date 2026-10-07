/* Education Section */
/* ========================================================================== */

import { Section, Heading, Card, CardContent } from '../../components/ui';
import { education } from '../../data';
import type { EducationEntry } from '../../data/types';

export function EducationSection() {
  return (
    <Section id="education" aria-labelledby="education-heading" variant="default">
      <Heading id="education-heading" level={2} variant="section">
        Education
      </Heading>
      <div className="education-list">
        {education.map((edu: EducationEntry) => (
          <Card
            key={edu.id}
            className={`education-entry priority-${edu.portfolioPriority}`}
            variant="default"
          >
            <CardContent>
              <header className="entry-header">
                <h3 className="entry-degree">{edu.degree}</h3>
                <div className="entry-meta">
                  <span className="entry-institution">{edu.institution}</span>
                  <span className="entry-period">{edu.period}</span>
                </div>
              </header>
              <p className="entry-location">{edu.location}</p>
              {edu.highlights && (
                <ul className="entry-highlights">
                  {edu.highlights.map((highlight: string, i: number) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}