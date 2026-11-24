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
            <CardContent className="skill-group-content">
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
                    <Tag variant="default" size="md" className="skill-tag">
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

      <div className="working-strengths-section">
        <div className="working-strengths-header">
          <Heading level={3} variant="subsection" className="working-strengths-title">
            Working Strengths
          </Heading>
          <span className="working-strengths-subtitle">
            // Core engineering habits &amp; cognitive approach
          </span>
        </div>
        <div className="working-strengths-card">
          <div className="strengths-list">
            {workingStrengths.map((strength: string, i: number) => (
              <span key={i} className="strength-chip">
                <span className="strength-chip-bullet" aria-hidden="true">&#x25C7;</span>
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}