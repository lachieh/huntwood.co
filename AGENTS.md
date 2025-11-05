# AGENTS.md - Guide for AI Agents and Contributors

This document provides essential information for AI agents (like Claude Code) and other contributors to effectively understand and make improvements to the huntwood.co repository.

## Repository Overview

This is a monorepo containing two separate web applications:

### 1. Main Project: Huntwood.co (Next.js)
**Location:** Root directory
**Purpose:** Professional services website for Huntwood, a geospatial technology consulting company serving mining, utilities, and infrastructure organizations in the APAC region.

### 2. Wedding Application (Remix)
**Location:** `/wedding` directory
**Purpose:** Wedding RSVP management system with Google Sheets integration

---

## Project 1: Huntwood.co (Main Website)

### Technology Stack
- **Framework:** Next.js 15.5.4
- **React:** 19.2.0
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS 4.1.9 with custom configuration
- **UI Components:** Radix UI primitives with shadcn/ui
- **Animations:** Framer Motion 12.x
- **Font:** Geist Sans and Geist Mono
- **Deployment:** Vercel
- **Package Manager:** pnpm 9.x

### Architecture

#### Directory Structure
```
/app                  # Next.js app directory
  layout.tsx         # Root layout with metadata
  page.tsx           # Home page composition
  globals.css        # Global styles
/components          # React components
  /ui               # Reusable UI primitives (shadcn/ui)
  *-section.tsx     # Page section components
  navigation.tsx    # Main navigation
  footer.tsx        # Site footer
/lib                 # Utilities
  utils.ts          # Helper functions (cn utility)
```

#### Component Architecture
The main page (`/app/page.tsx`) is composed of modular section components:
- `Navigation` - Site navigation header
- `HeroSection` - Hero with animated topographical background
- `AboutSection` - Company information
- `ApproachSection` - Methodology and approach
- `ServicesSection` - Service offerings
- `ImpactSection` - Success metrics and case studies
- `PartnersSection` - Partner logos and relationships
- `ContactSection` - Contact form
- `Footer` - Site footer

### Key Configuration Files

#### next.config.mjs
```javascript
{
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: true,
  images: { unoptimized: true }
}
```
**Note:** Build-time type checking and linting are disabled. Consider enabling these for production-quality code.

#### tsconfig.json
- Path alias: `@/*` maps to root directory
- Target: ES6
- Module resolution: bundler (Next.js specific)

#### components.json
Contains shadcn/ui configuration for component generation

### Styling System
- **Base:** Tailwind CSS 4.x with PostCSS
- **Theme Colors:**
  - Primary: `#344330` (dark green)
  - Accent: `#ffdd18` (yellow)
  - Secondary: `#62776b` (muted green)
  - Light: `#e1ecc5` (light green)
- **Typography:** Geist Sans (body) and Geist Mono (code)
- **Utility:** `cn()` function in `/lib/utils.ts` combines clsx and tailwind-merge

### Development Workflow

#### Common Tasks

**Starting Development Server:**
```bash
pnpm dev
```

**Building for Production:**
```bash
pnpm build
```

**Running Production Build:**
```bash
pnpm start
```

**Linting:**
```bash
pnpm lint
```

#### Adding New Components
1. UI primitives should go in `/components/ui/`
2. Page sections should follow the pattern: `*-section.tsx`
3. Use the `cn()` utility for className merging
4. Follow the existing component structure (client/server components)

#### Client vs Server Components
- Most page sections are client components (`"use client"`) due to Framer Motion
- The root layout is a server component
- Consider performance implications when adding client components

### Common Improvements

#### Performance Optimizations
- Enable Next.js image optimization (currently `unoptimized: true`)
- Review and optimize bundle size
- Consider lazy loading for heavy components
- Implement proper code splitting

#### Code Quality
- Enable TypeScript strict checking
- Enable ESLint during builds
- Add proper error boundaries
- Implement proper loading states
- Add unit tests (no testing framework currently installed)

#### SEO & Accessibility
- Add more comprehensive metadata
- Implement structured data (JSON-LD)
- Audit and improve accessibility (ARIA labels, keyboard navigation)
- Add Open Graph images
- Implement sitemap and robots.txt

---

## Project 2: Wedding Application

### Technology Stack
- **Framework:** Remix 2.12.1
- **React:** 18.3.1
- **TypeScript:** 5.6.3
- **Styling:** Tailwind CSS 3.4.13 with @tailwindcss/typography
- **Animations:** Framer Motion 11.x
- **Backend:** Netlify Functions
- **Database:** Google Sheets (via googleapis)
- **Email:** Mailgun.js
- **Deployment:** Netlify
- **Package Manager:** pnpm 9.12.1

### Architecture

#### Directory Structure
```
/wedding
  /app
    /routes          # Remix routes
      _index.tsx    # Home page
      rsvp.tsx      # RSVP form
      rsvp.$id.tsx  # RSVP lookup by ID
      rsvp.thanks.tsx # Thank you page
      venue.tsx     # Venue information
      faq.tsx       # FAQ page
    /components     # React components
    /utils          # Utilities
      sheetsService.ts  # Google Sheets integration
      analytics.ts      # Analytics tracking
      md.tsx           # Markdown utilities
    /.server        # Server-only code
      /templates    # Email templates (Handlebars)
    root.tsx        # Root layout
  /public           # Static assets
    /assets/images  # Image files
```

#### Data Flow
1. **Guest List:** Stored in Google Sheets "Invite List" tab
2. **RSVPs:** Submitted via form and appended to Google Sheets "RSVPs" tab
3. **Email Notifications:** Sent via Mailgun using Handlebars templates

### Key Integration Points

#### Google Sheets Service (`/wedding/app/utils/sheetsService.ts`)
- **Authentication:** Service account credentials via environment variable
- **Operations:**
  - `getGuests()`: Fetches invite list from sheet
  - `addRsvp()`: Appends RSVP data to sheet
- **Required Environment Variables:**
  - `GOOGLE_SHEET_ID`: The spreadsheet ID
  - `GOOGLE_API_KEY`: JSON string with `private_key` and `client_email`

#### Environment Variables Required
```
GOOGLE_SHEET_ID=<spreadsheet_id>
GOOGLE_API_KEY={"private_key":"...","client_email":"..."}
MAILGUN_API_KEY=<mailgun_key>
MAILGUN_DOMAIN=<mailgun_domain>
```

### Development Workflow

**Starting Development:**
```bash
cd wedding
pnpm dev
```

**Building:**
```bash
cd wedding
pnpm build
```

**Type Checking:**
```bash
cd wedding
pnpm typecheck
```

### Common Improvements

#### Data Management
- Consider migrating from Google Sheets to a proper database (PostgreSQL, Supabase)
- Add data validation and error handling
- Implement rate limiting for form submissions
- Add CSRF protection

#### User Experience
- Add form validation feedback
- Implement optimistic UI updates
- Add proper loading states
- Improve mobile responsiveness
- Add internationalization if needed

#### Security
- Rotate API keys regularly
- Implement proper input sanitization
- Add rate limiting
- Use environment-specific configurations

---

## General Development Guidelines

### Code Style
- **TypeScript:** Use strict typing where possible
- **Components:** Prefer functional components with hooks
- **Naming:**
  - Components: PascalCase
  - Files: kebab-case or PascalCase for components
  - Functions: camelCase
- **Imports:** Use path aliases (`@/` for main project)

### Git Workflow
- **Branch Naming:** Use descriptive branch names (feature/*, fix/*, docs/*)
- **Commits:** Write clear, concise commit messages
- **Pull Requests:** Include description of changes and testing performed

### Testing Strategy (To Be Implemented)
- **Unit Tests:** Vitest or Jest recommended
- **Integration Tests:** Playwright or Cypress
- **E2E Tests:** Playwright for critical user flows
- **Component Tests:** Storybook + Testing Library

### Performance Considerations
- **Main Project:**
  - Monitor Core Web Vitals
  - Optimize images and fonts
  - Consider ISR or SSG for static content
- **Wedding App:**
  - Cache Google Sheets responses
  - Implement request debouncing
  - Optimize Remix loader functions

### Deployment

#### Main Project (Vercel)
- Automatically deploys from main branch
- Environment variables managed in Vercel dashboard
- Preview deployments for pull requests

#### Wedding App (Netlify)
- Deployed via Netlify CLI or Git integration
- Environment variables in Netlify dashboard
- Netlify Functions for serverless endpoints

---

## Common Issues & Solutions

### Issue: Build Failures
- Check Node.js version (>=18 required)
- Clear node_modules and reinstall: `rm -rf node_modules && pnpm install`
- Check for TypeScript errors: `pnpm typecheck`

### Issue: Google Sheets Integration Failing
- Verify `GOOGLE_API_KEY` is valid JSON
- Check service account has access to the sheet
- Ensure Sheet ID is correct
- Verify API scopes include spreadsheets

### Issue: Styling Not Applied
- Check Tailwind configuration
- Ensure PostCSS is properly configured
- Clear `.next` cache: `rm -rf .next`

### Issue: Animations Not Working
- Verify Framer Motion is properly installed
- Check if component is client-side (`"use client"`)
- Review browser console for errors

---

## Making Improvements

### Before Making Changes
1. **Understand the Context:** Review relevant files and their dependencies
2. **Check Existing Patterns:** Follow established architectural patterns
3. **Test Locally:** Always test changes in development environment
4. **Consider Impact:** Think about how changes affect other parts of the system

### Suggested Improvement Areas

#### High Priority
1. Enable TypeScript strict mode and fix type errors
2. Add proper error handling and user feedback
3. Implement loading states for async operations
4. Add input validation and sanitization
5. Set up basic testing infrastructure

#### Medium Priority
1. Optimize images and implement proper lazy loading
2. Add comprehensive SEO metadata
3. Implement analytics and monitoring
4. Add rate limiting and security headers
5. Create component documentation

#### Low Priority
1. Add Storybook for component development
2. Implement design system documentation
3. Add more animation and interaction details
4. Consider micro-interactions and polish
5. Implement advanced caching strategies

---

## Resources

### Documentation Links
- **Next.js:** https://nextjs.org/docs
- **Remix:** https://remix.run/docs
- **React:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion
- **shadcn/ui:** https://ui.shadcn.com

### Project-Specific
- **Vercel Dashboard:** https://vercel.com/lachiehs-projects/v0-professional-services-website
- **v0.app Project:** https://v0.app/chat/projects/qlRvvRAnQRW

---

## Contact & Support

For questions or issues:
1. Review this document thoroughly
2. Check existing issues and PRs
3. Review the README.md
4. Contact the repository maintainer

---

**Last Updated:** 2025-11-05
**Version:** 1.0.0
