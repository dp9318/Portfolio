/* Hero Section */
/* ========================================================================== */

import { Link } from '../../components/ui';

export function HeroSection() {
  return (
    <section id="hero" className="hero section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-name">Dipankar</h1>
          <p className="hero-tagline">I learn what the problem needs and build it.</p>
          <p className="hero-subtagline">Software Engineer and MCA student exploring application development, systems integration, data, and emerging technologies through real projects.</p>
          <div className="hero-actions">
            <Link href="#projects" className="btn btn-primary btn-lg">
              View Projects
            </Link>
            <Link href="https://github.com/dp9318" external className="btn btn-secondary btn-lg">
              GitHub
            </Link>
            <Link href="https://drive.google.com/drive/folders/1_0XEvkFYHP4ZGoslBVSa78gYvTJmlp1Y?usp=drive_link" external className="btn btn-secondary btn-lg">
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}