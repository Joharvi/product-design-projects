# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Joharvi Garcia Project Showcase. It ships **three coexisting design-system skins** (SLDS2 is the default) that swap live at runtime — see "Design Systems" below.

## Stack

- **Framework:** React 18.3
- **Build tool:** Vite 6.0
- **Styling:** Tailwind CSS 3.4 + Salesforce Design Tokens
- **Package manager:** npm

## Architecture

The project uses the Salesforce brand-refreshed design tokens from the hosted bundle at `https://sfdc-ui-documentation-667d4c5e8394.herokuapp.com/salesforce-tokens/`.

Key files:
- `src/main.jsx` — App entry. Imports the token layer in order (`tokens.css` → `slds2-bridge.css` → `whatif-bridge.css` → `index.css`), then mounts `AppLayout`.
- `src/AppLayout.jsx` — Real application root (dashboard grid, routing, card catalog). This is the app, not `App.jsx`.
- `src/App.jsx` / `src/App.css` — The marketing-style landing route only (`.sf-nav` header + hero blade). Not the console shell.
- `src/tokens.css` — The base token layer: CSS custom properties for the Website Experience (Day/Night) look. (A copy is mirrored to `public/tokens.css` for static serving.)
- `src/slds2-bridge.css` / `src/whatif-bridge.css` — Skin bridges that redefine the semantic token aliases under `[data-ds="slds2"]` / `[data-ds="whatif"]` (see Design Systems).
- `src/lib/designSystem.js` — Tiny state layer that reads/writes the active skin (`data-ds` attribute + localStorage).
- `tailwind.preset.js` — Token-driven Tailwind preset (colors, spacing, typography, radii)
- `index.html` — Inlined @font-face declarations + a head script that sets `data-ds` before first paint (FOUC guard).

## Design Systems

The console ships **three swappable skins**, each a pure token swap — a bridge stylesheet redefines the Layer-2 semantic aliases under a `[data-ds="…"]` attribute on `<html>`, so setting that one attribute reskins the whole app live with zero component changes. `src/lib/designSystem.js` owns the state; `index.html`'s inline head script mirrors it to avoid a flash.

| Skin | `data-ds` value | Stylesheet | Notes |
| --- | --- | --- | --- |
| **SLDS2** (default) | `slds2` | `slds2-bridge.css` | The default; the "no stored preference" state. |
| **Website Experience** | _(none)_ | bare `tokens.css` | The PageBuilder brand-refresh; internal storage key `default`. |
| **What if** | `whatif` | `whatif-bridge.css` | Exploratory rebrand (Geist type, violet accent, soft cards). |

Only the two non-default choices are persisted; anything else resolves to SLDS2.

## Commands

```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

## Design Token Rules

When working with this codebase, follow these non-negotiable token rules (adapted from the salesforce-tokens skill):

1. **Never hardcode hex values** — always use `var(--color-*)` lookups
2. **No fallback values in `var()`** — this project overrides the skill's fallback rule. Write bare `var(--token)`, never `var(--token, #hex)`. The token layer (`tokens.css` / `slds2-bridge.css`) always loads and defines every token, so a fallback is dead code that silently masks typos and makes every value painful to update in two places. A missing token should fail loudly, not resolve to a stale hardcoded copy. (The two primitive-definition files are self-contained and audited — token→token references inside them still resolve without fallbacks.)
3. **Theme switches are attribute changes** — set `data-theme="day|night"` on `<html>` or scoped sections
4. **Gradients are inline data** — pulled from `salesforce.json`, not CSS vars (they vary per theme)
5. **Always use the visualization color tokens** There are 6 colors defined for series data: `var(--viz-N)`. There are also colors defined for the grid, axis lines, and markers eg. `var(--viz-axis)` . Never make new tokens that are scoped to a specific chart. 

All token usage includes two-line citation comments: token name + role.

## Component Conventions

These keep repeated UI patterns visually identical across every card and page. Like the token rules, they favor a single source of truth — reuse the cited recipe/class rather than re-implementing the look.

1. **KPI tiles** — any set of KPI/stat tiles uses the shared bordered-tile recipe from `src/components/SpendOverTime.css` (`.spend-over-time__kpi*`), laid out as in `src/components/SpendVsPlan.jsx`. A `__kpis` grid (`repeat(auto-fit, minmax(150px, 1fr))`, `gap: var(--space-4)`) of `__kpi` tiles; each tile is a `__kpi-label` caption (`--font-style-body-copy-5-*`, `--color-on-surface-1`) above a `__kpi-value` (`--font-style-display-6-*`, tabular-nums, `--color-on-surface-3`); wrap the value in `__kpi-value-group` when a badge sits beside it. Don't invent a parallel tile style — reuse these classes so every tile reads identically.

2. **Chart legends** — any visualization chart carries a legend **beneath** the plot (after the chart container, as in `SpendVsPlan.jsx`), never floating or to the side. Use the `.spend-over-time__legend` markup: a wrapping flex row of items, each a color swatch **paired with a text label** (identity is never color-alone — the dataviz a11y rule). Legend text uses `--font-style-body-copy-5-size` and `--color-on-surface-1`.

3. **Badges** — all status/label badges use `.slds-badge` plus a feedback variant (`.slds-badge_success` / `_info` / `_warning` / `_error` / `_light`), defined in `src/App.css`. Never invent a per-component badge class or restyle a badge locally; if a new tone is needed, add it as an `.slds-badge_*` variant. (Non-badge chrome — the nav unread-count bubble, structural chips — is out of scope.)

4. **Tables** — every tabular surface (bento cards *and* full-page ledgers) renders through the shared `.uc-table` recipe in `src/components/DataTable.css` (loaded globally via `AppLayout.jsx`, like `.slds-badge`). Put `.uc-table` on the `<table>`; the header treatment (quiet `--color-on-surface-4` labels, **never** an uppercase eyebrow), row rhythm, and dividers come for free. Modifiers compose: `--comfortable` (roomy `space-3/4` cells that don't wrap — for full-width pages that scroll horizontally) and `--hover` (row hover wash — for clickable/actionable rows). Give each value its own column (don't stack values inside one cell). Cell/content classes are the single vocabulary: `__num` (right-aligned tabular numeric column, on both `<th>` and `<td>`), `__end` (right-aligned non-numeric column — status pill, toggle, actions), `__money` (monospace currency figure, pairs with `__num`), `__link` (linked identifier), `__date` / `__muted` (de-emphasized cells), `__empty` (empty-state row), and for ledger pages `__select-col` / `__checkbox` / `__actions-col` / `__action` (the visually-hidden select header reuses the global `.sr-only`). A consumer's own CSS owns only what's outside the table — the card scroll frame (`__table-wrap`), the page card frame (`__table-card`), breakout strips, and truly local placeholders. Don't re-declare `<table>`/`th`/`td` styling in a component; extend `.uc-table` (a new modifier or `__` class) so every table stays identical.

   **Column order** — every table orders its columns by the same role sequence, left to right: **`[select] → identity → attributes → status → value(s) → [actions]`**. *Identity* is the thing each row is (order #, invoice #, contract name — the `__link` anchor) and always leads; lead with the identifier, never the date. *Attributes* are descriptive context (type, related contract, dates/term — a date is an attribute, not identity). *Status* (the `.slds-badge`) sits immediately left of the value so state and figure read together. *Value(s)* are the right-aligned `__num`/`__money` columns at the right edge; when a table has no dollar value (e.g. Contracts), the status column takes that right-edge slot. *Actions* (Pay Now, download/share) are terminal. Tables carry different columns, but never a different order.

   **Tables vs. lists** — `.uc-table` governs *tabular* data: rows whose fields are all short, comparable, and scanned down their column (an id, a date, a dollar amount). Data that is a **feed of items** — one long free-text primary field (a customer-written subject line, a title, a message) plus supporting per-item metadata, read item-by-item rather than scanned by column — is a **list**, not a table. Don't force it into `.uc-table`: a wrapping sentence destroys column scanning and row rhythm, and a triage feed may deliberately lead with a severity pill rather than the identity. `SupportCasesCard` is the reference example (a `<ul>` of cases: severity pill · subject link + `#num · product · unit · status` meta line · age). Lists still share the cross-cutting primitives — `.slds-badge`, the card chrome (`__head` / `__title` / `__foot` / `__view-all`) — just not the `.uc-table` row grid or column-order rule.

## Typography Conventions

1. **No uppercase "eyebrow" micro-labels** — never use `text-transform: uppercase` (with or without manual `letter-spacing`) to style small labels. That treatment is a generic web tic, not part of the Salesforce type system. The token scale (`--font-style-body-copy-*`, `--font-style-display-*`) already carries hierarchy via size and weight — use sentence case at the appropriate token size/weight instead. If a label feels like it needs shrinking-and-uppercasing to fit, it's usually redundant next to a nearby title — drop it rather than eyebrow it. (Some legacy pages/components still have uppercase labels; leave those unless asked — just don't add new ones.)
