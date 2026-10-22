import { Navigation } from './components/navigation/Navigation'
import { HeroSection } from './sections/Hero/HeroSection'
import { AboutSection } from './sections/About/AboutSection'
import { ProjectsSection } from './sections/Projects/ProjectsSection'
import { ExperienceSection } from './sections/Experience/ExperienceSection'
import { SkillsSection } from './sections/Skills/SkillsSection'
import { EducationSection } from './sections/Education/EducationSection'
import { LearningSection } from './sections/Learning/LearningSection'
import { ContactSection } from './sections/Contact/ContactSection'
import { Footer } from './sections/Contact/Footer'
import { ThemeProvider } from './context/ThemeContext'
import { SmoothScrollProvider } from './components/motion'
import { HeroScene } from './sections/Hero/HeroScene'

function App() {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        {/* Global fixed 3D WebGL background layer */}
        <div className="global-scene-container" aria-hidden="true">
          <HeroScene />
        </div>
        {/* Apple-style frosted glass veil diffused over the 3D scene */}
        <div className="global-glass-veil" aria-hidden="true" />
        
        {/* Content layer floating cleanly on top */}
        <div className="app-wrapper">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navigation />
          <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
            <LearningSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </SmoothScrollProvider>
    </ThemeProvider>
  )
}

export default App