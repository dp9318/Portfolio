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
            Dipankar is an MCA student at MANIT Bhopal with a strong interest in technology and its practical application.
            He enjoys exploring different areas of computing, learning unfamiliar tools when a problem requires them,
            and turning that learning into working software.
          </p>
          <p>
            His work spans application development, desktop software, system integration, data and analytics,
            and ongoing exploration of machine learning and computer vision. The common thread is not a single
            technology stack, but the process of understanding a problem, learning what is necessary, and building
            a useful solution.
          </p>
          <p>
            He is currently preparing to enter the corporate workforce while continuing to grow as a software
            engineer and contribute to the wider technology community.
          </p>
        </div>
      </div>
    </Section>
  );
}