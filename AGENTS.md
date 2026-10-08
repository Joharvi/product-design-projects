# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project

Joharvi Projects Showcase is a vibe-coded prototype of a unified portfolio of product design and visual design projects console, built on a PageBuilder-founded design system.

## Stack

- **Framework:** React 18.3
- **Build tool:** Vite 6.0
- **Styling:** Tailwind CSS 3.4 + Salesforce Design Tokens
- **Package manager:** npm

## Architecture

The project uses the Salesforce brand-refreshed design tokens from the hosted bundle at `https://sfdc-ui-documentation-667d4c5e8394.herokuapp.com/salesforce-tokens/`.

Key files:
- `tailwind.preset.js` — Token-driven Tailwind preset (colors, spacing, typography, radii)
- `public/tokens.css` — 271 CSS custom properties for Day/Night themes
- `index.html` — Inlined @font-face declarations (Avant Garde + Salesforce Sans)
- `src/App.jsx` — Hero blade component (`.hero-blade--2col`)
- `src/App.css` — Token-cited component styles (hero + CTA recipes)

## Commands

```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

## Design Token Rules

When working with this codebase, follow the three non-negotiable token rules from the salesforce-tokens skill:

1. **Never hardcode hex values** — always use `var(--color-*, fallback)` lookups
2. **Theme switches are attribute changes** — set `data-theme="day|night"` on `<html>` or scoped sections
3. **Gradients are inline data** — pulled from `salesforce.json`, not CSS vars (they vary per theme)

All token usage includes two-line citation comments: token name + role.
