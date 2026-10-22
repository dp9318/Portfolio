import { motion, type Variants } from 'framer-motion';
import { Link } from '../../components/ui';
import { profile } from '../../data';
import { Magnetic } from '../../components/motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero section"
      aria-labelledby="hero-heading"
      style={{ position: 'relative' }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 id="hero-heading" className="hero-name" variants={itemVariants}>
            {profile.displayName}
          </motion.h1>
          <motion.p className="hero-tagline" variants={itemVariants}>
            {profile.tagline}
          </motion.p>
          <motion.p className="hero-subtagline" variants={itemVariants}>
            {profile.supportingMessage}
          </motion.p>
          <motion.div className="hero-actions" variants={itemVariants}>
            <Magnetic strength={0.25}>
              <Link href="#projects" className="btn btn-primary btn-lg">
                View Projects
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link href="https://github.com/dp9318" external className="btn btn-secondary btn-lg">
                GitHub
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link href={profile.resumeUrl} external className="btn btn-secondary btn-lg">
                View Resume
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}