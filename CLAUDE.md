# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a travel agency website for "Polyglot Travel" (Полиглот Тревел) built with vanilla HTML, CSS, and JavaScript. The site promotes premium travel services specializing in destinations like Maldives, UAE, Turkey, Thailand, Vietnam, China, Seychelles, Mauritius, and cruises.

## Project Structure

- **Static website** with no build process or package manager
- **Components system** in `components.js` for reusable navigation, footer, and WhatsApp button
- **Main scripts** in `script.js` handle testimonial slider, modal, form submissions, and smooth scrolling
- **Individual destination pages** in subdirectories (e.g., `/maldives/`, `/uae/`)
- **No testing framework** - manual testing only

## Key Files

- `index.html` - Main landing page
- `style.css` - Global styles
- `script.js` - Main interactivity and form handlers
- `components.js` - Reusable component templates and initialization
- `доработки.md` - Detailed task backlog with priorities and requirements

## Development Commands

Since this is a static site with no build process:
- **Run locally**: Open `index.html` directly in browser or use a local server (e.g., `python -m http.server`)
- **Deploy**: Upload files directly to hosting (GitHub Pages via CNAME file present)

## Brand Guidelines

### Color Palette
- Primary (Midnight Green): `#004953`
- Secondary (Hooker's Green): `#49796B`
- Tertiary (Ash Gray): `#B2BEB5`
- Accent (Sun): `#FCA987`
- Background: `#fffaed`

### Logo
- Small compressed version: `logo-small-compress.png`
- Alternative versions available: `logo-big.png`, `logo-small.png`

## Active Development Tasks

The `доработки.md` file contains prioritized tasks including:
- P0: Legal disclaimers, WhatsApp integrations, brand colors implementation
- P1: UAE page structure, navigation improvements, "About Us" section
- P2: UI polish and content refinements

## Important Integration Points

### WhatsApp
- Phone: +7 (995) 281-73-99
- Multiple entry points required (header, hero, forms, floating button)
- QR code: `wpqr.jpeg` for desktop users

### Forms
All forms redirect to WhatsApp with pre-filled messages rather than traditional backend submission.

## Code Conventions

- Use vanilla JavaScript (no frameworks)
- Follow existing component patterns in `components.js`
- Maintain semantic HTML structure
- Keep styles in single `style.css` file
- Use Font Awesome 6 for icons
- Forms should integrate with WhatsApp API, not backend endpoints

## Deployment

- Hosted on GitHub Pages
- Custom domain: pta4u.ru (configured via CNAME)
- No CI/CD pipeline - direct commits to main branch