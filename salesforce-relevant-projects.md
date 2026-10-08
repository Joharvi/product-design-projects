# From Legacy Workflows to Intelligent Native Experiences


---

## Case Study 1: Strategic Customer Investment (SCI) 2.0

### Problem

$480M+/yr (≈$885M over 3 years) in customer investments ran through a fragmented BaseCamp intake, a heavily customized Google Sheet, and a Slack "approval channel" with no source of truth — carrying SOX compliance risk. ~6,000 requests/year, with 70% expiring, stuck, recalled, or rejected due to tooling limits; approval cycles ran 1–2 months.

> "The SCI thread is like a WhatsApp channel — I can't find what I need to approve." — approver quote

### My Role

Senior Product Designer on the DET tripod. Led UX, interviewed requestors and approvers (RVPs, VPs, Directors, SVPs across Sales and CSG), mapped every pain point to a feature, and defined the end-to-end journey and three key surfaces.

### Key Decisions & Tradeoffs

- Moved intake to Salesforce-native (Org62), triggered from the account record to avoid context switching.
- Built a Slack-first approval engine (filtered queues, in-context Approve/Reject/Request Info, dedicated record channels).
- Made investment types/programs configuration records instead of hard-coded picklists, so new investment paths don't require a redesign.
- **Tradeoff:** external SWE creation (Org62) and PO creation (Coupa) remained required prerequisite steps outside the new flow rather than being absorbed.

### Measured Outcomes

| Metric | Before | After |
|---|---|---|
| Approval time | 18.4 days | Under 15 days |
| Rejection/recall/expiration rate | 61% | 22% |
| Operational overhead | — | 600+ hrs/month eliminated |
| Compliance | SOX risk | Audit-ready |
| Build-to-launch | — | Under 4 months |

- Legacy Google Sheet retired; audit-ready SOX compliance achieved

---

## Case Study 2: Skills Insights App Redesign

### Problem

Legacy app ran on Visualforce and couldn't scale to a modern web experience. Poor data visualization and inconsistencies hurt usability. The Leveling Guide and Opportunity Exploration lived in separate places, forcing constant switching to compare current readiness vs. a target role. Managers manually consolidated data across systems for quarterly check-ins.

### My Role

Product Designer in a 4-person DEX pod. Ran a UX audit and IA/flow mapping to de-risk the migration, led two research rounds (8 moderated interviews with leaders/managers and technical consultants, plus usability testing), and produced wireframes/wireflows/before-after visions for every key surface.

### Key Decisions & Tradeoffs

- Replatformed to LWC on the new Services Org.
- Unified the leveling guide and career exploration into one place with a side-by-side readiness comparison.
- Gave managers a "My Team" command center spanning org hierarchy levels 01–12 with search/filter/sort.
- Surfaced skill definitions via in-app tooltips, removing the need for an external Google Sheet.
- Auto-excluded off-boarded/inactive users from active views.

### Measured Outcomes

Shipped March 2026 on the new Services Org.

| Metric | Result |
|---|---|
| Skill-assessment review speed | 30–40% faster |
| Visibility into skill definitions | ~95% |

> "This looks much cleaner and this definitely tells everything... where you stand today for your current role." — user feedback

---

## Case Study 3: Opportunity Playground

### Problem

"Pulse" (project health reporting) was PM-dependent and manual — PMs scraped signals scattered across Slack, calendars, and docs, then hand-copy-pasted a judgment-based update (RYG status, 5 health indicators, governance, compliance) into Org62 every Friday, competing with their actual delivery work. The model couldn't scale.

> "I literally use Slack Bot… and then copy paste." — PM quote

### My Role

Product Designer. Framed the problem (Susan, a Resource Manager, and Arthur, a Lead Architect, as core personas), designed the concept/prototype for an agentic "Staffing/Pulse Agent," and built the Figma prototype and ROI model.

### Key Decisions & Tradeoffs

- Shifted from "manual execution" to "agentic automation" — an agent that gathers signals across systems, drafts the full Pulse update, recommends RYG + reasoning, and writes back to Org62.
- Moved from a tool that assists to a system that takes responsibility.
- Framed as a repeatable pattern — same approach sketched for healthcare care-coordination, insurance claims, and supply-chain health.

### Measured Outcomes

| Metric | Before | After |
|---|---|---|
| Per-update time | 45–60 min | ~5 min (review only) |
| PM hours saved (15 projects) | — | 720 hrs/year ≈ $50,400 recovered capacity |
| Manager savings | — | 40–60 hrs/month per manager |
| Staffing workload agent-handled | — | 80% |
| Annual savings | — | $216K |
| Break-even | — | 3.5 months |
| Revenue upside (5 RMs) | — | Up to $2.4M for $62K incremental investment |

---

## Case Study 4: OrgSync App

### Problem

OrgSync provides a central, low-code interface for configuring org-to-org data synchronization (e.g. between Org62 and Org CS) for Integration Developers and Integration Support Engineers across programs like Customer Success, Professional Services, Pub Sec, Tableau, Slack, and M&A integrations. The framework carried a highly technical, specialized vocabulary with a steep learning curve and no in-context guidance; the homepage lacked contextual descriptions and clear CTAs; and configuration flows plus error handling had no consistent Salesforce platform pattern. Manual entry of complex JSON configurations caused 90% of all reported errors.

> "I want the Quick Setup Tool to guide me through the configuration with zero manual JSON editing. If I can prevent those configuration errors, I can finally stop debugging integration issues caused by a missing comma." — Mark, Integration Developer persona

### My Role

Sr. UX Designer on a 4-person UX team (with a Director, Lead UX Designer, and UX Designer), partnering with DET product owners and engineers. Built the journey map across OrgSync's core features (Framework Installation, Quick Setup, Stream Channel Setting, Event Tracker/Monitoring), ran quick-wins analysis against cognitive-load pain points, redesigned key flows and the visual branding, and produced the end-to-end Figma prototypes.

### Key Decisions & Tradeoffs

- Prioritized a journey map and quick-wins analysis to target the highest cognitive-load steps first, rather than a full redesign of every screen at once.
- Introduced page headers, feature descriptions, new icons, and direct guide access on the homepage to reduce reliance on external technical documentation.
- Added a stepper, modal-based configuration (to keep context visible), tooltips, and helper text to Quick Setup flows to replace raw JSON editing with guided input.
- Standardized interactive components across sections for consistent behavior, reducing the learning curve.
- Rebranded the OrgSync logo (light/dark versions) for a clearer go-to-market/global navigator identity.
- **Tradeoff:** scope was deliberately focused on usability and self-service guidance for early adopters/technical audiences rather than re-architecting the underlying publish-subscribe framework itself.

### Measured Outcomes

- Reduced cognitive load across Homepage and Quick Setup flows (High → Regular) via descriptive cards, clear CTAs, and feature descriptions.
- Clearer navigation and structure: long configuration forms now follow a logical, consistently named, stepped flow.
- Better input implementation: tooltips/helper text clarify framework-specific terminology at the point of input.
- Consistent design patterns across all interactive elements, reducing learning curve for new technical users.
- Delivered full E2E UX/UI design blueprint and interactive prototypes (Home Page, Quick Setup, Setup Stream Channels, Event Tracker).

### Resources

- UX Exec Summary
- Figma File — E2E UXUI Design Blueprint

---

## Cross-Cutting Throughline

All four projects replatformed or redesigned brittle legacy tools and fragmented workflows into native, research-grounded experiences — each validated with real users and tied to a hard operational number or measurable usability improvement.

| | SCI 2.0 | Skills Insights | Opportunity Playground | OrgSync App |
|---|---|---|---|---|
| **Legacy tool** | Sheets + BaseCamp + Slack | Visualforce app | Manual Pulse / Slack scraping | Raw JSON config, no in-context guidance |
| **New platform** | Salesforce-native (Org62) + Slack | LWC on Services Org | Agentic Pulse system | Low-code guided UI on Salesforce platform |
| **Research method** | Stakeholder interviews (RVPs, VPs, SVPs) | 8 moderated interviews + usability testing | Persona framing + prototype + ROI model | Journey map + quick-wins analysis |
| **Key win** | 61% → 22% failure rate | 30–40% faster reviews | 45–60 min → 5 min per update | 90% error source addressed via guided input |
| **Compliance/scale unlock** | SOX audit-ready | 95% skill visibility | $2.4M revenue upside modeled | Full E2E blueprint + interactive prototypes |
