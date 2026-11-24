import { Navigation } from './components/navigation/Navigation'
import { HeroSection } from './sections/Hero/HeroSection'
import { ProjectsSection } from './sections/Projects/ProjectsSection'
import { ExperienceSection } from './sections/Experience/ExperienceSection'
import { SkillsSection } from './sections/Skills/SkillsSection'
import { EducationSection } from './sections/Education/EducationSection'
import { LearningSection } from './sections/Learning/LearningSection'
import { ContactSection } from './sections/Contact/ContactSection'
import { Footer } from './sections/Contact/Footer'
import { ThemeProvider } from './context/ThemeContext'
import { SmoothScrollProvider } from './components/motion'
import { ScrollToTop } from './components/ui'

function App() {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        {/* Continuous Pencil-Drawn Journey Layer (V2.2 - Full Document Scroll Corridor) */}
        <div className="sketch-journey-container" aria-hidden="true">
          <div className="sketch-journey-rail sketch-journey-left" />
          <div className="sketch-journey-rail sketch-journey-right" />
        </div>

        {/* Content layer */}
        <div className="app-wrapper">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navigation />
          <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
            <LearningSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
        <ScrollToTop />
      </SmoothScrollProvider>
    </ThemeProvider>
  )
}

export default App