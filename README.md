# Product Design Projects — Joharvi Garcia

**Senior Visual and Product Designer** · Concentrix · Córdoba, Argentina (GMT−3)

[Live site →](https://joharvi.github.io/product-design-projects/) · [LinkedIn](https://www.linkedin.com/in/joharvi-garcia-product-designer/) · [Portfolio](https://joharvigarcia.webflow.io/) · [Behance](https://www.behance.net/joharvigarcia)

---

## About

This repository is the source for an interactive case study console showcasing four end-to-end product design engagements delivered inside the Salesforce ecosystem. Each project ran on Salesforce-native infrastructure (Org62, LWC, Slack), was grounded in primary user research, and shipped to production with a measurable operational outcome.

---

## Case Studies

### 01 · Strategic Customer Investment (SCI) 2.0
> $480M+/yr in customer investments running through fragmented BaseCamp, Google Sheets, and a Slack approval channel — 70% expiration/rejection rate

Redesigned the end-to-end SCI intake and approval flow as a Salesforce-native experience on Org62, with a Slack-first approval engine for RVPs, VPs, and SVPs.

| Metric | Before | After |
|---|---|---|
| Approval time | 18.4 days | Under 15 days |
| Rejection / recall / expiration | 61% | 22% |
| Operational overhead | — | 600+ hrs/month eliminated |
| Compliance | SOX risk | Audit-ready |
| Build-to-launch | — | Under 4 months |

[Executive Summary](https://docs.google.com/presentation/d/10B9HG7T5fXcW101Jtkdcxn2fVTwxL5rDGNaMGmN2c1Y/edit?usp=sharing) · [Figma Blueprint](https://www.figma.com/design/lJC7YlKOPI4q6fSmSzkKE1/-PS----SCI-Modernized?node-id=0-1&t=n61Iutb9qWwixroF-1)

---

### 02 · Skills Insights App Redesign
> Legacy Visualforce app with fragmented leveling guide and opportunity exploration forcing constant tab-switching

Replatformed to LWC on the new Services Org. Ran two research rounds (8 moderated interviews + usability testing). Unified career exploration and leveling into a single surface with a side-by-side readiness comparison and a manager "My Team" command center.

| Metric | Result |
|---|---|
| Skill-assessment review speed | 30–40% faster |
| Visibility into skill definitions | ~95% |

Shipped March 2026.

[Executive Summary](https://docs.google.com/presentation/d/19wkdwznh-WNMb_XXIyOgMbCDbDvaoBrgf6U-yYAbgKc/edit?usp=sharing) · [Figma Blueprint](https://www.figma.com/design/MjdNVS0TowZXGHMjTvDhHe/ProServ----Skill-Insights-App-Migration?node-id=0-1&t=Yc1VWN2EenXxUh5N-1)

---

### 03 · Opportunity Playground
> Manual PM-dependent "Pulse" health reporting scraped across Slack, calendars, and docs every Friday — model couldn't scale

Designed the concept and prototype for an agentic Staffing/Pulse system that gathers signals across systems, drafts the full Pulse update, recommends RYG status with reasoning, and writes back to Org62 — shifting from a tool that assists to a system that takes responsibility.

| Metric | Before | After |
|---|---|---|
| Per-update time | 45–60 min | ~5 min (review only) |
| PM hours saved (15 projects) | — | 720 hrs/year |
| Annual savings | — | $216K |
| Revenue upside (5 RMs) | — | Up to $2.4M |

[Executive Summary](https://docs.google.com/presentation/d/1QzcQyCs0QWvU1z9Fh7NoJaZ6rMq1_qJcoNilEBCavTQ/edit?usp=sharing) · [Figma Blueprint](https://www.figma.com/proto/tqKveJgSUvvoS2otV4m1Ip/Slackbot-Version?node-id=2387-150195)

---

### 04 · OrgSync App
> Highly technical org-to-org sync configuration with no in-context guidance — 90% of errors traced to manual JSON editing

Built the journey map across OrgSync's core features, ran a quick-wins analysis against cognitive-load pain points, and produced end-to-end Figma prototypes covering Homepage, Quick Setup, Stream Channel Setting, and Event Tracker — replacing raw JSON editing with a stepped, guided configuration experience.

| Metric | Before | After |
|---|---|---|
| Cognitive load (Homepage + Quick Setup) | High | Regular |
| Configuration flow | Flat, unnamed forms | Logical stepped flow |
| Framework-specific input | Raw JSON, no guidance | Tooltips + helper text |
| Component consistency | Fragmented | Standardized across all surfaces |

Shipped July 2026.

[Executive Summary](https://docs.google.com/presentation/d/13S3DEkmj-L4IJ2ntLzhFLFWGQWlhWCYORnxykujL_qY/edit?usp=sharing) · [Figma Blueprint](https://www.figma.com/design/ThSM1oXiJwPSMk2QPaS0ND/Revenue-SOS-UXD----OrgSync-App-%F0%9F%9A%A7?node-id=0-1&t=xpIjyHJuTAIn9gSY-1)

---

## Cross-Cutting Throughline

All four projects replatformed brittle legacy tools into native, research-grounded Salesforce experiences — each validated with real users and tied to a measurable operational outcome.

| | SCI 2.0 | Skills Insights | Opportunity Playground | OrgSync App |
|---|---|---|---|---|
| **Legacy tool** | Sheets + BaseCamp + Slack | Visualforce app | Manual Pulse / Slack scraping | Raw JSON config, no guidance |
| **New platform** | Salesforce-native (Org62) + Slack | LWC on Services Org | Agentic Pulse system | Low-code guided UI |
| **Research method** | Stakeholder interviews (RVPs, VPs, SVPs) | 8 moderated interviews + usability testing | Persona framing + prototype + ROI model | Journey map + quick-wins analysis |
| **Key win** | 61% → 22% failure rate | 30–40% faster reviews | 45–60 min → 5 min per update | 90% error source addressed |

---

## Stack

The console is built as a lightweight static site — no framework dependency, instant load, deployable anywhere.

- Vanilla HTML / CSS / JavaScript
- [GSAP 3.12](https://greensock.com/gsap/) for card entrance animations and FLIP-style expand/collapse
- Salesforce Design Tokens (SLDS2 night theme) for all color, spacing, and typography
- Hosted on GitHub Pages

---

## Contact

**Joharvi Garcia** · Senior Visual and Product Designer  
Concentrix · Córdoba, Argentina · GMT−3  
[linkedin.com/in/joharvi-garcia-product-designer](https://www.linkedin.com/in/joharvi-garcia-product-designer/)
