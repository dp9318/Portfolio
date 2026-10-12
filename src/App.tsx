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

function App() {
  return (
    <ThemeProvider>
      <>
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
      </>
    </ThemeProvider>
  )
}

export default App