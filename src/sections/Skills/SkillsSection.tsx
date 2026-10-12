/* Skills Section */
/* ========================================================================== */

import { Section, Heading, Card, CardContent, Tag } from '../../components/ui';
import { skills, workingStrengths } from '../../data';
import type { SkillGroup } from '../../data/types';

export function SkillsSection() {
  return (
    <Section id="skills" aria-labelledby="skills-heading" variant="default">
      <Heading id="skills-heading" level={2} variant="section">
        Skills & Capabilities
      </Heading>

      <div className="skills-grid">
        {skills.map((group: SkillGroup) => (
          <Card key={group.category} className="skill-group" variant="default">
            <CardContent>
              <div className="skill-group-header">
                <h3 className="skill-group-label">{group.label}</h3>
                {group.note && (
                  <Tag variant="status-learning" size="sm" className="skill-group-note">
                    {group.note}
                  </Tag>
                )}
              </div>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="skill-item">
                    <Tag variant="default" size="sm" className="skill-tag">
                      {skill.name}
                    </Tag>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="skills-note mt-6">
        Skills reflect current, defensible capabilities rather than every technology I've encountered.
      </div>

      <div className="mt-8">
        <Heading level={3} variant="subsection">
          Working Strengths
        </Heading>
        <div className="strengths-list">
          {workingStrengths.map((strength: string, i: number) => (
            <span key={i} className="strength-chip">{strength}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}