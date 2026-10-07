/* Current Focus / Learning Section */
/* ========================================================================== */

import { Section, Heading, Card, CardContent } from '../../components/ui';
import { learning } from '../../data';
import type { LearningFocus } from '../../data/types';

export function LearningSection() {
  const principle = learning.find((area: LearningFocus) => area.category === 'principle');

  return (
    <Section id="learning" aria-labelledby="learning-heading" variant="default">
      <Heading id="learning-heading" level={2} variant="section">
        Current Focus & Learning
      </Heading>
      <div className="learning-grid">
        {learning
          .filter((area: LearningFocus) => area.category !== 'principle')
          .map((area: LearningFocus) => (
            <Card key={area.label} className="learning-group" variant="default">
              <CardContent>
                <h3 className="learning-group-label">{area.label}</h3>
                <ul className="learning-list">
                  {area.items.map((item: string, i: number) => (
                    <li key={i} className="learning-item">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
      </div>
      {principle && (
        <blockquote className="learning-principle">
          &ldquo;{principle.items[0]}&rdquo;
        </blockquote>
      )}
    </Section>
  );
}