/* Hero Section */
/* ========================================================================== */

import { Link } from '../../components/ui';
import { profile } from '../../data';

export function HeroSection() {
  return (
    <section id="hero" className="hero section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-name">{profile.displayName}</h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-subtagline">{profile.supportingMessage}</p>
          <div className="hero-actions">
            <Link href="#projects" className="btn btn-primary btn-lg">
              View Projects
            </Link>
            <Link href="https://github.com/dp9318" external className="btn btn-secondary btn-lg">
              GitHub
            </Link>
            <Link href={profile.resumeUrl} external className="btn btn-secondary btn-lg">
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}