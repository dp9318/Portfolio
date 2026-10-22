import { useState } from 'react';
import { Section, Heading, Link } from '../../components/ui';
import { profile } from '../../data';
import { Magnetic } from '../../components/motion';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const discordHandle = profile.discordHandle || 'dp_9318';

  const handleCopyDiscord = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(discordHandle);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = discordHandle;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy Discord handle:', err);
    }
  };

  return (
    <Section id="contact" aria-labelledby="contact-heading" variant="sm">
      <Heading id="contact-heading" level={2} variant="section">
        Let's build something useful.
      </Heading>
      <p className="contact-subtext">
        For opportunities, collaboration, or a technical conversation, email is the preferred contact method.
      </p>
      <div className="contact-links">
        <Magnetic strength={0.2} activeScale={1.03}>
          <a href={`mailto:${profile.email}`} className="contact-primary">
            <span className="contact-label">Email</span>
            <span className="contact-value">{profile.email}</span>
          </a>
        </Magnetic>
        <div className="contact-secondary">
          <Magnetic strength={0.2} activeScale={1.05}>
            <Link href="https://www.linkedin.com/in/dipankar-kumar-95bab1234" external variant="secondary" className="contact-link">
              LinkedIn
            </Link>
          </Magnetic>
          <Magnetic strength={0.2} activeScale={1.05}>
            <Link href="https://github.com/dp9318" external variant="secondary" className="contact-link">
              GitHub
            </Link>
          </Magnetic>
          <Magnetic strength={0.2} activeScale={1.05}>
            <Link href="https://leetcode.com/u/Dipankar9318/" external variant="secondary" className="contact-link">
              LeetCode
            </Link>
          </Magnetic>
          <Magnetic strength={0.2} activeScale={1.05}>
            <Link href="https://hackerrank.com/profile/dipankarkumar626" external variant="secondary" className="contact-link">
              HackerRank
            </Link>
          </Magnetic>
          <Magnetic strength={0.2} activeScale={1.05}>
            <button
              type="button"
              className="contact-link contact-copy-btn"
              onClick={handleCopyDiscord}
              aria-label={`Copy Discord handle ${discordHandle} to clipboard`}
              title="Click to copy Discord handle"
            >
              <span aria-live="polite">
                {copied ? 'Copied handle!' : `Discord: ${discordHandle}`}
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ marginLeft: '4px', verticalAlign: 'middle' }}
              >
                {copied ? (
                  <polyline points="20 6 9 17 4 12" />
                ) : (
                  <>
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </>
                )}
              </svg>
            </button>
          </Magnetic>
        </div>
      </div>
    </Section>
  );
}