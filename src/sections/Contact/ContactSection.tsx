/* Contact Section */
/* ========================================================================== */

import { Section, Heading, Link } from '../../components/ui';

export function ContactSection() {
  return (
    <Section id="contact" aria-labelledby="contact-heading" variant="sm">
      <Heading id="contact-heading" level={2} variant="section">
        Let's build something useful.
      </Heading>
      <p className="contact-subtext">
        For opportunities, collaboration, or a technical conversation, email is the preferred contact method.
      </p>
      <div className="contact-links">
        <a href="mailto:dipankarkumar626@gmail.com" className="contact-primary">
          <span className="contact-label">Email</span>
          <span className="contact-value">dipankarkumar626@gmail.com</span>
        </a>
        <div className="contact-secondary">
          <Link href="https://www.linkedin.com/in/dipankar-kumar-95bab1234" external variant="secondary" className="contact-link">
            LinkedIn
          </Link>
          <Link href="https://discord.com/users/dp_9318" external variant="secondary" className="contact-link">
            Discord: dp_9318
          </Link>
          <Link href="https://github.com/dp9318" external variant="secondary" className="contact-link">
            GitHub
          </Link>
        </div>
      </div>
    </Section>
  );
}