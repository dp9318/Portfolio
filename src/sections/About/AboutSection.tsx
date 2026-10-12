/* About Section */
/* ========================================================================== */

import { Section, Heading } from '../../components/ui';
import { profile } from '../../data';

export function AboutSection() {
  return (
    <Section id="about" aria-labelledby="about-heading" variant="sm">
      <Heading id="about-heading" level={2} variant="section">
        About Me
      </Heading>
      <div className="about-layout">
        <div className="about-image">
          {profile.profilePhoto && (
            <img
              src={profile.profilePhoto}
              alt="Dipankar Kumar"
              loading="lazy"
            />
          )}
        </div>
        <div className="about-content">
          <p>
            Dipankar is an MCA student at MANIT Bhopal focused on core software and application development with AI integration.
            He is a systems-oriented developer who explores unfamiliar problem spaces, learns what the problem requires,
            and builds functioning, reliable software.
          </p>
          <p>
            His work spans agentic AI tooling and persistent context systems, desktop software, hardware–software integration,
            and data analytics. The unifying thread is not a static tech stack, but the process of understanding problem constraints,
            designing sensible architectures, and executing practical solutions through persistence and adaptability.
          </p>
          <p>
            Grounded in a personal philosophy of continuous learning — a <em>polymath in progress</em> — he is focused on
            engineering real-world applications that solve substantive problems while contributing actively to the developer community.
          </p>
        </div>
      </div>
    </Section>
  );
}