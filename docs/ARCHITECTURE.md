# Architecture Specification
## Personal Engineering Portfolio — Dipankar Kumar

**Document:** ARCHITECTURE.md  
**Version:** 1.0  
**Status:** Initial architecture specification

This document defines the technical structure of the portfolio application.

The architecture should support a simple, maintainable, responsive portfolio that can evolve as Dipankar adds projects, experience, skills, and learning milestones.

The architecture should remain intentionally lightweight. The portfolio is not a complex SaaS product and should not be engineered like one.

---

# 1. Architectural Goals

The application should prioritize:

1. Simplicity
2. Maintainability
3. Clear separation of content and presentation
4. Reusability
5. Responsive behavior
6. Accessibility
7. Fast loading
8. Easy content updates
9. Easy project additions
10. Minimal unnecessary dependencies

The implementation should make the portfolio easy for a developer with growing web-development experience to understand and maintain.

---

# 2. High-Level Application Model

The portfolio should be a primarily static frontend application.

Conceptually:

```text
                     ┌───────────────────────┐
                     │       Visitor         │
                     └───────────┬───────────┘
                                 │
                                 ▼
                     ┌───────────────────────┐
                     │    Portfolio UI       │
                     │  React / Components   │
                     └───────────┬───────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
              ▼                  ▼                  ▼
       Content Data         Static Assets     External Links
       / project data       / images / icons  GitHub / LinkedIn
              │
              ▼
       Rendered Sections
```

There is no requirement for a custom backend for V1.

The portfolio should not introduce a database, CMS, authentication system, or API layer unless a future requirement explicitly justifies it.

---

# 3. Application Scope

## V1 Structure

The initial application should function primarily as a single portfolio experience with logical sections.

Recommended major sections:

```text
Home / Hero
    ↓
About
    ↓
Projects
    ↓
Experience / Journey
    ↓
Skills / Capabilities
    ↓
Education
    ↓
Current Learning
    ↓
Contact
    ↓
Footer
```

The navigation should allow users to jump to major sections.

A dedicated project-detail route may be introduced if the project content becomes sufficiently detailed.

---

# 4. Recommended Project Structure

The exact framework syntax may vary according to `TECH_STACK.md`, but the application should follow a structure conceptually similar to:

```text
portfolio/
├── public/
│   ├── favicon/
│   ├── images/
│   └── ...
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── navigation/
│   │   ├── projects/
│   │   ├── cards/
│   │   └── ui/
│   │
│   ├── sections/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Experience/
│   │   ├── Skills/
│   │   ├── Education/
│   │   ├── Learning/
│   │   └── Contact/
│   │
│   ├── data/
│   │   ├── profile.*
│   │   ├── projects.*
│   │   ├── experience.*
│   │   ├── education.*
│   │   └── skills.*
│   │
│   ├── layouts/
│   │   └── ...
│   │
│   ├── routes/
│   │   └── ...
│   │
│   ├── styles/
│   │   ├── globals.*
│   │   └── ...
│   │
│   ├── App.*
│   └── main.*
│
├── docs/
│   ├── PRD.md
│   ├── DESIGN.md
│   ├── CONTENT.md
│   ├── ARCHITECTURE.md
│   ├── TECH_STACK.md
│   └── DEVELOPMENT_RULES.md
│
├── AGENTS.md
├── README.md
└── package.json
```

The concrete file extensions depend on the approved technology stack.

Do not create directories merely because this document shows them. Keep the actual structure proportional to the complexity of the application.

---

# 5. Component Architecture

The application should use reusable components.

## Core Component Groups

### Navigation

Examples:

```text
Navbar
NavLink
MobileMenu
SocialLinks
```

### Common UI

Examples:

```text
Button
SectionHeading
Tag
IconButton
Link
StatusBadge
```

### Project Components

Examples:

```text
ProjectCard
ProjectGrid
ProjectTags
ProjectStatus
ProjectDetails
ProjectLinks
```

### Section Components

Each major section should have a clear component boundary.

For example:

```text
HeroSection
AboutSection
ProjectsSection
ExperienceSection
SkillsSection
EducationSection
LearningSection
ContactSection
Footer
```

Avoid creating components for trivial markup when doing so adds unnecessary indirection.

The purpose of componentization is reuse and clarity, not maximizing the number of files.

---

# 6. Data-Driven Content Architecture

Portfolio content should be separated from presentation wherever practical.

The UI should not contain large blocks of hardcoded project text.

Instead, project information should exist in structured data.

Conceptually:

```text
projects = [
  {
    id: "aqiconic",
    name: "AQIconic",
    description: "...",
    status: "In Progress",
    category: "...",
    technologies: [...],
    contribution: "...",
    repository: "...",
    demo: null,
    featured: true
  },
  ...
]
```

The exact schema should be defined during implementation.

The same principle should apply to:

- Experience
- Education
- Skills
- Social links
- Current learning
- Achievements

This allows the content to be updated without changing UI components.

---

# 7. Project Data Model

Each project should support at least:

```text
id
name
slug
shortDescription
status
category
featured
technologies[]
problem
solution
contribution
challenges[]
results[]
learnings
repositoryUrl
demoUrl
documentationUrl
images[]
```

Not every field must be populated.

Optional values should be handled gracefully.

For example:

```text
demoUrl: null
```

should not create an empty "Live Demo" button.

---

# 8. Featured vs Additional Projects

Projects should support a distinction between:

### Featured Projects

The strongest projects used in the main Projects section.

Initial featured candidates:

- AQIconic
- AI Food Analyzer
- LMS-OC
- Video Game Sales Analysis

### Additional Projects

Projects that can be displayed lower in the page or through a "View More" mechanism.

Examples:

- Epic Games Clone
- Indian Credit Card Analysis

The application should make this distinction data-driven rather than hardcoded into the visual components.

---

# 9. Routing Strategy

## V1

A single-page experience is preferred.

Navigation should use section anchors where practical:

```text
/#about
/#projects
/#experience
/#skills
/#contact
```

This keeps the initial architecture simple.

## Future Project Pages

If detailed project pages are introduced, use a predictable route such as:

```text
/projects/aqiconic
/projects/ai-food-analyzer
/projects/lms
```

The route should be generated from project data rather than duplicating entire page implementations.

---

# 10. Navigation Behavior

Desktop:

```text
Logo / Name

About
Projects
Experience
Skills
Contact
```

Mobile:

- Compact navigation
- Accessible menu trigger
- Clear active/open state
- Menu should close after navigation when appropriate

Navigation should remain usable without JavaScript-dependent visual tricks where possible.

---

# 11. Asset Architecture

Assets should be organized predictably.

Recommended structure:

```text
src/assets/
├── images/
│   ├── profile/
│   ├── projects/
│   └── misc/
└── icons/
```

or an equivalent public-assets structure supported by the framework.

## Project Images

Project images should be associated with their project data.

For example:

```text
projects/
  aqiconic/
    cover
    screenshot-1
    screenshot-2
```

Do not duplicate the same image across unrelated parts of the application.

Use descriptive filenames.

Avoid committing unnecessary source images, large raw datasets, or unrelated project files into the portfolio repository.

---

# 12. Profile Photo

The portfolio should support a profile image because the approved content specifies one.

The implementation should:

- Use a clear professional image.
- Provide appropriate alt text.
- Crop consistently according to the approved design.
- Avoid excessive filters or decorative effects.

The photo should remain a supporting identity element, not the central visual feature.

---

# 13. Responsive Architecture

The application must support:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Responsive behavior should be based on content and layout needs rather than targeting only a few named devices.

The main design system should use:

- Flexible widths
- Responsive grids
- Relative spacing
- Fluid typography where useful
- Appropriate breakpoints
- Touch-friendly controls

Avoid designing exclusively around one desktop resolution.

---

# 14. Layout System

Use a consistent page container.

The approved visual direction is based on a structured grid with generous whitespace.

Conceptually:

```text
Viewport
│
├── Full-width section
│
│   ┌───────────────────────────────┐
│   │       Content Container       │
│   │                               │
│   │       Grid / Sections         │
│   │                               │
│   └───────────────────────────────┘
│
└── Full-width section
```

The exact container width, spacing values, and grid rules belong to `DESIGN.md`.

Do not introduce arbitrary widths per section.

---

# 15. State Management

The portfolio should avoid global state unless it becomes necessary.

Most content is static.

Local state may be appropriate for:

- Mobile navigation open/close
- Project filtering, if implemented
- Modal/project detail visibility, if implemented
- Theme preference, if implemented

Do not add Redux, Zustand, or another state-management library solely for this portfolio unless there is a demonstrated requirement.

---

# 16. External Link Architecture

External links should be centralized in profile/link data where practical.

Example:

```text
github
linkedin
leetcode
hackerrank
resume
email
```

The same values should not be copied manually into multiple components.

External links should:

- Use correct URLs.
- Include appropriate accessibility attributes.
- Open in a new tab where that behavior is beneficial.
- Use safe `rel` attributes when opening external links in a new tab.

---

# 17. Email Interaction

The primary contact method is email.

The email CTA should use:

```text
mailto:dipankarkumar626@gmail.com
```

It should open a new mail compose interaction.

Do not add a custom backend email service for V1.

The portfolio should not expose API credentials or mail-service configuration in the frontend.

---

# 18. Resume Architecture

The resume should be accessible through a clear "Download Resume" CTA.

The URL should be maintained in profile/content configuration rather than hardcoded repeatedly.

The implementation should tolerate a future switch from:

```text
Google Drive folder URL
```

to:

```text
Direct PDF URL
```

without requiring significant UI changes.

---

# 19. Accessibility Architecture

The application should include basic accessibility from the beginning.

Requirements:

- Semantic HTML.
- Proper heading hierarchy.
- Accessible navigation.
- Labels for icon-only controls.
- Alt text for meaningful images.
- Keyboard-accessible interactions.
- Visible focus states.
- Sufficient text/background contrast.
- Buttons should behave like buttons.
- Links should behave like links.
- Do not rely on color alone to communicate state.

Animations must not prevent normal interaction.

Where animation exists, consider respecting reduced-motion preferences.

---

# 20. SEO / Metadata

V1 should include basic page metadata:

- Page title
- Description
- Open Graph metadata
- Relevant social preview information
- Favicon
- Canonical URL when the production domain is known

The metadata should describe the actual portfolio and not claim unsupported expertise.

Suggested conceptual title:

> Dipankar Kumar — Software Engineer

Suggested conceptual description:

> Software engineering portfolio of Dipankar Kumar, showcasing application development, systems integration, data projects, and ongoing technical exploration.

Final wording may be refined during implementation.

---

# 21. Performance Architecture

The portfolio should be lightweight.

Prefer:

- Static content
- Optimized images
- Lazy-loaded non-critical images
- Minimal JavaScript
- Minimal dependencies
- Reusable components
- No unnecessary third-party embeds

Avoid:

- Heavy animation libraries unless genuinely useful
- Large background videos
- Unnecessary 3D engines
- Large tracking scripts
- Automatically loading massive external resources

The site should feel responsive on ordinary mobile hardware and slower connections.

---

# 22. Error Handling

Because most content is local/static, error handling should remain simple.

Optional external content should fail gracefully.

Examples:

- Missing project image → show a neutral placeholder or omit the image.
- Missing demo URL → hide the demo CTA.
- Missing repository URL → hide the repository CTA.
- Missing optional description → maintain layout without rendering empty elements.

No broken card or empty button should be visible to users.

---

# 23. Content / UI Separation

A major architectural principle is:

```text
Content
   ↓
Structured Data
   ↓
Reusable Components
   ↓
Visual Sections
```

Avoid:

```text
Hardcoded content
      +
Hardcoded layout
      +
Repeated markup
```

This is important because the portfolio is expected to evolve.

A future content change should ideally require editing data rather than restructuring components.

---

# 24. Design / Architecture Boundary

`DESIGN.md` defines:

- Colors
- Typography
- Spacing
- Visual hierarchy
- Component appearance
- Animation style
- Layout aesthetics
- Responsive visual behavior

`ARCHITECTURE.md` defines:

- Component boundaries
- Data structures
- File organization
- Routing
- State
- Assets
- External integrations
- Maintainability

Do not duplicate detailed visual rules here.

---

# 25. Dependency Philosophy

The application should prefer platform capabilities and the chosen framework over adding libraries for trivial tasks.

Before adding a dependency, ask:

1. Is it necessary?
2. Does it meaningfully simplify the implementation?
3. Can the framework or browser already do this?
4. Does it create long-term maintenance cost?

A dependency should have a clear reason to exist.

---

# 26. Future Extensibility

The architecture should allow future additions such as:

- Dedicated project pages
- Project filtering
- Dark/light mode
- Blog or technical notes
- More detailed case studies
- Dynamic content source
- Analytics
- Backend/API integration
- ASP.NET Core experimentation
- Interactive technical demonstrations

These should **not** be implemented in V1 merely because the architecture allows them.

The architecture should support evolution without forcing premature complexity.

---

# 27. Deployment Model

The initial deployment should be suitable for static hosting.

Potential targets include:

- Vercel
- GitHub Pages
- Netlify
- Similar static frontend hosting

The exact deployment platform should be determined by `TECH_STACK.md` and the actual project configuration.

Production deployment should use:

- Optimized production build
- Correct routing configuration
- HTTPS
- Working external links
- Optimized assets
- Production metadata

---

# 28. Development Workflow

Recommended development flow:

```text
Read docs
    ↓
Understand requirement
    ↓
Update/confirm content data
    ↓
Implement reusable component
    ↓
Integrate into section
    ↓
Run development build
    ↓
Test responsive behavior
    ↓
Test links/interactions
    ↓
Run production build
    ↓
Review visual result
```

OpenCode should not modify architecture merely to complete a small visual task.

---

# 29. Architectural Constraints

The implementation must:

- Remain understandable to the project owner.
- Avoid unnecessary abstraction.
- Avoid premature backend infrastructure.
- Avoid unnecessary global state.
- Keep portfolio content editable.
- Keep project data structured.
- Preserve accessibility.
- Keep the application responsive.
- Avoid vendor lock-in where practical.
- Avoid making future content updates unnecessarily difficult.

---

# 30. Definition of a Good Architecture

The architecture is successful when:

> A new project can be added by updating structured content and assets without rewriting existing UI.

And:

> A future developer can open the repository and understand where the content, components, styles, and application entry points live without reverse-engineering the entire project.

The portfolio should be simple enough to learn from and strong enough to grow with Dipankar.
