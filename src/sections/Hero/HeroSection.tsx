import { Link } from '../../components/ui';
import { profile } from '../../data';
import { Magnetic } from '../../components/motion';
import sketchArrow from '../../assets/images/sketch/sketch-arrow.svg';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero intro-section section"
      aria-labelledby="intro-heading"
    >
      {/* Anchor targets to preserve all internal and external link compatibility */}
      <span id="about" tabIndex={-1} style={{ position: 'absolute', top: 0, opacity: 0, pointerEvents: 'none' }} />
      <span id="intro" tabIndex={-1} style={{ position: 'absolute', top: 0, opacity: 0, pointerEvents: 'none' }} />

      <div className="container">
        <div className="intro-grid">
          {/* Left Column: Core Identity, Tagline, Unified Bio, Actions */}
          <div className="intro-content">
            <div className="intro-meta-pill">
              <span className="intro-status-dot" aria-hidden="true" />
              <span>MCA · MANIT Bhopal &apos;28</span>
            </div>

            <h1 id="intro-heading" className="intro-name">
              {profile.displayName}
            </h1>

            <p className="intro-tagline">
              I learn what the problem needs and{' '}
              <span className="intro-tagline-end">
                <span className="sketch-highlight">build it</span>.
              </span>
            </p>

            <div className="intro-summary">
              <p>
                Software Engineer and MCA student at MANIT Bhopal specializing in core application development, 
                persistent agentic AI context architectures, and hardware–software systems. 
                I focus on understanding constraints first, designing sensible architectures, 
                and delivering reliable, production-ready software.
              </p>
              <p>
                A <em>polymath in progress</em>, my work spans local cognitive memory engines (RECALL), 
                desktop environmental telemetry (AQIconic), and computer vision research.
              </p>
            </div>

            <div className="intro-actions">
              <Magnetic strength={0.25}>
                <Link href="#projects" className="btn btn-primary btn-lg">
                  View Projects
                </Link>
              </Magnetic>
              <Magnetic strength={0.25}>
                <Link href="#contact" className="btn btn-secondary btn-lg">
                  Contact Me
                </Link>
              </Magnetic>
              <Magnetic strength={0.25}>
                <Link href={profile.resumeUrl} external className="btn btn-secondary btn-lg">
                  View Resume
                </Link>
              </Magnetic>
              <Magnetic strength={0.25}>
                <Link href="https://github.com/dp9318" external className="btn btn-secondary btn-lg">
                  GitHub
                </Link>
              </Magnetic>
            </div>

            <div className="hero-sketch-note">
              <span className="sketch-note-text">explore real engineering projects &amp; architectures</span>
              <img src={sketchArrow} alt="" className="sketch-arrow-icon" aria-hidden="true" />
            </div>
          </div>

          {/* Right Column: Taped Polaroid Photo & Sketch Stickers */}
          <div className="intro-visual">
            <div className="intro-polaroid-card">
              {profile.profilePhoto && (
                <div className="intro-photo-frame">
                  <img
                    src={profile.profilePhoto}
                    alt="Dipankar Kumar - Software Engineer"
                    className="intro-photo"
                    loading="eager"
                  />
                </div>
              )}
              <span className="intro-polaroid-caption">Dipankar · MANIT Bhopal</span>
              
              <div className="intro-sticker-note">
                <span className="intro-sticker-title">// Focus</span>
                <span className="intro-sticker-desc">Systems &amp; AI Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}