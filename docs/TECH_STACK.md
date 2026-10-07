# Technology Stack
## Personal Engineering Portfolio — Dipankar Kumar

**Document:** TECH_STACK.md  
**Version:** 1.0  
**Status:** V1 technology specification

This document defines the approved technology choices and implementation boundaries for Version 1 of the portfolio.

The goal is not to demonstrate how many web technologies can be used. The goal is to build a clean, maintainable, responsive portfolio that works reliably.

---

# 1. V1 Stack Summary

| Area | Technology |
|---|---|
| Frontend | React |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | CSS / modern CSS |
| Routing | React Router only if dedicated project routes are implemented |
| Icons | Inline SVG or lightweight icon library only when justified |
| Content | Local TypeScript/JSON data |
| Package Manager | npm |
| Version Control | Git + GitHub |
| Deployment | Vercel |
| Backend | None for V1 |
| Database | None for V1 |
| Authentication | None |
| Email | `mailto:` link |
| Resume | External URL |
| Analytics | None initially |

---

# 2. Frontend

## React

Use React as the primary UI framework.

Reason:

- Component-based architecture fits the portfolio structure.
- Makes reusable project cards, sections, navigation, and content rendering straightforward.
- Provides a useful foundation for future application-development learning without requiring a complex framework.
- Large ecosystem and strong documentation.
- Appropriate complexity for this project.

React should be used primarily for component organization and rendering.

Do not introduce additional frontend frameworks on top of React.

---

# 3. Language

## TypeScript

Use TypeScript for the application.

Reason:

- Provides type safety for structured content such as projects, experience, skills, and links.
- Makes the data-driven architecture safer.
- Helps catch common mistakes during development.
- Provides useful experience with strongly typed frontend development.

Use TypeScript consistently.

Do not mix TypeScript and JavaScript unnecessarily.

---

# 4. Build Tool

## Vite

Use Vite as the build/development tool.

Reason:

- Lightweight.
- Fast development server.
- Straightforward configuration.
- Well suited to a static React portfolio.
- Avoids the additional complexity of a full framework when server-side rendering is not required.

The project does not need Next.js for V1.

---

# 5. Styling

## Primary Styling: CSS

Use standard CSS / modern CSS rather than a large UI framework.

The visual design should be implemented with:

- CSS custom properties
- Flexbox
- CSS Grid
- Media queries
- Modern responsive units
- Transitions where useful
- Native CSS states such as `:hover`, `:focus-visible`, and `:active`

The design specification in `DESIGN.md` is the source of truth for visual decisions.

---

# 6. Tailwind CSS

Tailwind CSS is **not required for V1**.

Do not introduce Tailwind merely because it is commonly used in developer portfolios.

Custom CSS is preferred because:

- The design is relatively simple.
- The visual system needs to remain understandable.
- The project owner is learning web development.
- The project should not hide layout decisions behind a large utility vocabulary.

Tailwind may only be introduced later if there is a clear project-level reason and the change is explicitly approved.

---

# 7. UI Component Libraries

Do not use a large prebuilt UI component framework such as:

- Material UI
- Ant Design
- Chakra UI
- Mantine
- Bootstrap component libraries

The portfolio has a small, custom visual system and does not need a large component library.

Custom React components + CSS are sufficient.

---

# 8. Icons

Use one of these approaches:

### Preferred

Inline SVG for a small number of custom icons.

### Acceptable

A lightweight icon package such as `lucide-react`, only if several consistent interface icons are required.

Do not install multiple icon libraries.

Do not use icon fonts unnecessarily.

---

# 9. Animation

Animation should be minimal and purposeful.

V1 should primarily use:

- CSS transitions
- Small hover interactions
- Subtle entrance effects only where they improve hierarchy

Do not add:

- Three.js
- WebGL
- GSAP
- Framer Motion
- Lottie

unless a future design requirement specifically justifies them.

The portfolio is an engineering portfolio, not an animation showcase.

---

# 10. Routing

## V1 Preference

A single-page portfolio is preferred.

Section navigation may use anchor links such as:

```text
#about
#projects
#experience
#skills
#contact
```

## React Router

React Router should only be added when the project actually requires dedicated routes, such as:

```text
/projects/aqiconic
/projects/ai-food-analyzer
/projects/lms
```

Do not add React Router merely because it is commonly used in React projects.

---

# 11. Content Data

Portfolio content should live in structured TypeScript data.

Recommended conceptual files:

```text
src/data/
├── profile.ts
├── projects.ts
├── experience.ts
├── education.ts
└── skills.ts
```

Typed interfaces should describe the shape of these records.

For example:

```text
Project
Experience
Education
SkillGroup
SocialLink
```

The exact interfaces should be defined during implementation.

---

# 12. Data Format

For V1, prefer TypeScript objects over an external CMS.

Example:

```ts
export const projects: Project[] = [
  {
    id: "aqiconic",
    name: "AQIconic",
    status: "in-progress",
    featured: true,
    // ...
  }
];
```

JSON files are also acceptable when there is a specific reason to prefer them.

Do not introduce:

- Firebase
- Supabase
- MongoDB
- PostgreSQL
- Headless CMS
- REST API
- GraphQL

for static portfolio content in V1.

---

# 13. State Management

No global state library is required.

Do not install:

- Redux
- Zustand
- MobX
- Recoil

unless a future requirement actually creates a meaningful need.

Local React state is sufficient for:

- Mobile navigation
- Small interaction states
- Optional project filtering
- Optional project modal state

---

# 14. Backend

## V1: No Backend

The portfolio does not require a backend.

Do not create:

- Express server
- Node API
- Django backend
- Spring Boot service
- ASP.NET Core backend

for the initial website.

This keeps the project aligned with its actual requirements.

Future versions may introduce a backend if the portfolio eventually needs dynamic content, analytics, authentication, an admin interface, or another justified capability.

---

# 15. Email

Use a standard `mailto:` URL:

```text
mailto:dipankarkumar626@gmail.com
```

The purpose is to open the visitor's email client and create a new message.

No custom mail API is required.

Do not expose email-service API keys in frontend code.

---

# 16. Resume

The resume should be linked from the structured profile data.

Current source:

```text
https://drive.google.com/drive/folders/1_0XEvkFYHP4ZGoslBVSa78gYvTJmlp1Y?usp=drive_link
```

The application should make it easy to replace this with a direct PDF URL later.

Do not build resume hosting infrastructure in V1.

---

# 17. Images and Assets

Use standard image assets stored in the project or served from an appropriate public URL.

Prefer:

- WebP
- AVIF
- Optimized PNG/JPEG when required

Profile and project images should be appropriately sized.

Do not include:

- raw datasets
- unnecessary source design files
- high-resolution originals that are not needed
- large video backgrounds

inside the deployed frontend bundle.

---

# 18. Fonts

Use a small, intentionally selected font stack.

Prefer a web-safe/system-first strategy where practical.

A hosted font may be introduced if it materially improves the approved design.

Do not load several font families.

Keep typography simple and performance-conscious.

The specific typefaces and weights belong in `DESIGN.md`.

---

# 19. Environment Variables

V1 should require **no secrets**.

The portfolio should ideally run with:

```text
npm install
npm run dev
```

and build with:

```text
npm run build
```

Do not add `.env` files unless a real public configuration value requires them.

Never commit:

- API keys
- private tokens
- passwords
- OAuth secrets
- private URLs

---

# 20. Package Management

Use npm.

Standard commands should be available:

```bash
npm install
npm run dev
npm run build
npm run preview
```

The exact scripts should be documented in the project README.

Avoid unnecessary dependency additions.

---

# 21. Code Quality

Use standard TypeScript/React conventions.

Recommended:

- Strict TypeScript configuration
- Clear component names
- Small focused components
- Typed props
- Consistent imports
- No unused variables
- No dead dependencies
- No duplicated project data

A formatter/linter may be added if useful, but only after establishing the basic application structure.

---

# 22. Testing

V1 does not require a large automated test suite.

At minimum, verify:

- Application starts correctly.
- Production build succeeds.
- Navigation works.
- External links work.
- Email CTA works.
- Resume CTA works.
- Project cards render correctly.
- Missing optional project links do not create broken controls.
- Mobile layout works.
- Desktop layout works.

Automated tests may be added later if the application gains more interactive behavior.

---

# 23. Accessibility

Use browser and framework capabilities directly.

The implementation should include:

- semantic HTML
- keyboard navigation
- accessible buttons
- accessible links
- `alt` text
- `aria-label` only where needed
- visible focus states
- reduced-motion support where animations exist

Do not add a dedicated accessibility library unless a real requirement appears.

---

# 24. SEO

V1 should use basic static metadata.

Include:

- title
- description
- favicon
- Open Graph metadata
- appropriate social preview metadata
- canonical URL when known

No external SEO platform is required.

---

# 25. Analytics

Do not add analytics in the initial version unless explicitly requested.

No:

- Google Analytics
- Hotjar
- Mixpanel
- PostHog

by default.

A lightweight analytics solution can be considered later if there is a practical reason.

---

# 26. Deployment

## Target

Vercel is the preferred initial deployment target.

Reason:

- Simple deployment for Vite/React applications.
- Automatic builds from Git.
- Easy preview deployments.
- Suitable for static frontend hosting.

The application should remain portable enough that it can also be deployed to other static hosts.

---

# 27. Version Control

Use Git with GitHub as the source repository.

Repository:

```text
https://github.com/dp9318
```

The portfolio repository should contain:

```text
src/
public/
docs/
README.md
AGENTS.md
package.json
...
```

Do not commit:

- `node_modules`
- build output
- local environment secrets
- editor-specific temporary files
- large unrelated project assets

---

# 28. Browser Support

Support current mainstream browsers:

- Chrome
- Edge
- Firefox
- Safari

The portfolio should not depend on experimental browser APIs unless there is a strong reason.

---

# 29. Explicitly Out of Scope for V1

Do not implement:

- Authentication
- User accounts
- CMS
- Admin dashboard
- Database
- Backend API
- Server-side application
- Blog CMS
- Comments
- Contact database
- Newsletter system
- Custom email backend
- Real-time features
- WebGL
- 3D portfolio scenes
- Complex page transitions
- Advanced animation systems
- AI chatbot
- Visitor-specific personalization

These may become future experiments but are not part of the initial product.

---

# 30. Future Technology Exploration

The portfolio itself may eventually become a place to demonstrate new technologies.

Potential future experiments include:

- ASP.NET Core
- C#
- Backend APIs
- Dynamic project data
- Interactive technical demonstrations
- More advanced application architecture
- Analytics
- Technical writing
- Portfolio content management

These technologies should be introduced because a future problem requires them, not simply to make the portfolio stack look impressive.

---

# 31. Stack Decision Principle

The technology stack follows the same philosophy as the portfolio itself:

> **Learn the problem needs, then build it.**

For V1, the problem needs a reliable, responsive, maintainable portfolio.

Therefore the stack should remain simple:

```text
React
+
TypeScript
+
Vite
+
CSS
+
Local structured data
+
Vercel
```

Nothing more is required unless an actual requirement appears.

---

# 32. Definition of Stack Success

The technology stack is successful when:

- The site loads quickly.
- The UI is responsive.
- The code is understandable.
- Content is easy to update.
- New projects are easy to add.
- The build is reliable.
- Deployment is simple.
- The project teaches useful web-development fundamentals.
- No dependency exists merely for decoration.

A smaller stack that works reliably is preferred over a larger stack that is technically impressive but unnecessary.
