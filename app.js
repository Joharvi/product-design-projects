/* ============================================================
   DATA — all case study content
   Card accent colors are Salesforce brand palette primitives:
     SCI          → #1b96ff  (--color-brand-60: Cosmos Blue)
     Skills       → #cb65ff  (--color-violet-60: Salesforce Violet)
     Playground   → #ff5d2d  (--color-hot-orange-60: Hot Orange)
     OrgSync      → #91db8b  (--color-green-80: Salesforce Green)
============================================================ */
const PROJECTS = [
  {
    id: 'sci',
    number: '01',
    title: 'Strategic Customer Investment (SCI) 2.0',
    tagline: '$480M+/yr in investments running through fragmented BaseCamp, Google Sheets, and Slack — 70% expiration/rejection rate',
    kpi: { label: 'Approval time', value: '18.4 → <15 days' },
    badge: { variant: 'slds-badge_success', text: 'Shipped' },
    accent: '#1b96ff',
    links: {
      summary: 'https://docs.google.com/presentation/d/10B9HG7T5fXcW101Jtkdcxn2fVTwxL5rDGNaMGmN2c1Y/edit?usp=sharing',
      figma:   'https://www.figma.com/design/lJC7YlKOPI4q6fSmSzkKE1/-PS----SCI-Modernized?node-id=0-1&t=n61Iutb9qWwixroF-1',
    },
    problem: '$480M+/yr (≈$885M over 3 years) in customer investments ran through a fragmented BaseCamp intake, a heavily customized Google Sheet, and a Slack "approval channel" with no source of truth — carrying SOX compliance risk. ~6,000 requests/year, with 70% expiring, stuck, recalled, or rejected due to tooling limits; approval cycles ran 1–2 months.',
    problemQuote: '"The SCI thread is like a WhatsApp channel — I can\'t find what I need to approve." — approver',
    role: 'Senior Product Designer on the DET tripod. Led UX, interviewed requestors and approvers (RVPs, VPs, Directors, SVPs across Sales and CSG), mapped every pain point to a feature, and defined the end-to-end journey and three key surfaces.',
    decisions: [
      'Moved intake to Salesforce-native (Org62), triggered from the account record to avoid context switching.',
      'Built a Slack-first approval engine (filtered queues, in-context Approve/Reject/Request Info, dedicated record channels).',
      'Made investment types/programs configuration records instead of hard-coded picklists — new investment paths don\'t require a redesign.',
      'Tradeoff: external SWE creation (Org62) and PO creation (Coupa) remained required prerequisite steps outside the new flow rather than being absorbed.',
    ],
    outcomes: [
      { metric: 'Approval time', before: '18.4 days', after: 'Under 15 days' },
      { metric: 'Rejection/recall/expiration rate', before: '61%', after: '22%' },
      { metric: 'Operational overhead', before: '—', after: '600+ hrs/month eliminated' },
      { metric: 'Compliance', before: 'SOX risk', after: 'Audit-ready' },
      { metric: 'Build-to-launch', before: '—', after: 'Under 4 months' },
    ],
  },
  {
    id: 'skills',
    number: '02',
    title: 'Skills Insights App Redesign',
    tagline: 'Legacy Visualforce app with fragmented leveling guide vs. opportunity exploration forcing constant tab-switching',
    kpi: { label: 'Review speed', value: '30–40% faster' },
    badge: { variant: 'slds-badge_success', text: 'Shipped Mar 2026' },
    accent: '#cb65ff',
    links: {
      summary: 'https://docs.google.com/presentation/d/19wkdwznh-WNMb_XXIyOgMbCDbDvaoBrgf6U-yYAbgKc/edit?usp=sharing',
      figma:   'https://www.figma.com/design/MjdNVS0TowZXGHMjTvDhHe/ProServ----Skill-Insights-App-Migration?node-id=0-1&t=Yc1VWN2EenXxUh5N-1',
    },
    problem: 'Legacy app ran on Visualforce and couldn\'t scale to a modern web experience. Poor data visualization and inconsistencies hurt usability. The Leveling Guide and Opportunity Exploration lived in separate places, forcing constant switching to compare current readiness vs. a target role. Managers manually consolidated data across systems for quarterly check-ins.',
    role: 'Product Designer in a 4-person DEX pod. Ran a UX audit and IA/flow mapping to de-risk the migration, led two research rounds (8 moderated interviews with leaders/managers and technical consultants, plus usability testing), and produced wireframes/wireflows/before-after visions for every key surface.',
    decisions: [
      'Replatformed to LWC on the new Services Org.',
      'Unified the leveling guide and career exploration into one place with a side-by-side readiness comparison.',
      'Gave managers a "My Team" command center spanning org hierarchy levels 01–12 with search/filter/sort.',
      'Surfaced skill definitions via in-app tooltips — removing the need for an external Google Sheet.',
      'Auto-excluded off-boarded/inactive users from active views.',
    ],
    outcomes: [
      { metric: 'Skill-assessment review speed', before: '—', after: '30–40% faster' },
      { metric: 'Visibility into skill definitions', before: '—', after: '~95%' },
    ],
    outcomeQuote: '"This looks much cleaner and this definitely tells everything... where you stand today for your current role." — user feedback',
  },
  {
    id: 'playground',
    number: '03',
    title: 'Opportunity Playground',
    tagline: 'Manual PM-dependent "Pulse" health reporting scraped across Slack, calendars, and docs every Friday',
    kpi: { label: 'Per-update time', value: '45–60 min → ~5 min' },
    badge: { variant: 'slds-badge_info', text: 'Concept + Prototype' },
    accent: '#ff5d2d',
    links: {
      summary: 'https://docs.google.com/presentation/d/1QzcQyCs0QWvU1z9Fh7NoJaZ6rMq1_qJcoNilEBCavTQ/edit?usp=sharing',
      figma:   'https://www.figma.com/proto/tqKveJgSUvvoS2otV4m1Ip/Slackbot-Version?node-id=2387-150195&p=f&viewport=144%2C-396%2C0.05&t=QcpqHGUofE4gaGZQ-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2387%3A156834&show-proto-sidebar=1',
    },
    problem: '"Pulse" (project health reporting) was PM-dependent and manual — PMs scraped signals scattered across Slack, calendars, and docs, then hand-copy-pasted a judgment-based update (RYG status, 5 health indicators, governance, compliance) into Org62 every Friday, competing with their actual delivery work. The model couldn\'t scale.',
    problemQuote: '"I literally use Slack Bot… and then copy paste." — PM',
    role: 'Product Designer. Framed the problem (Susan, a Resource Manager, and Arthur, a Lead Architect, as core personas), designed the concept/prototype for an agentic "Staffing/Pulse Agent," and built the Figma prototype and ROI model.',
    decisions: [
      'Shifted from "manual execution" to "agentic automation" — an agent that gathers signals across systems, drafts the full Pulse update, recommends RYG + reasoning, and writes back to Org62.',
      'Moved from a tool that assists to a system that takes responsibility.',
      'Framed as a repeatable pattern — same approach sketched for healthcare care-coordination, insurance claims, and supply-chain health.',
    ],
    outcomes: [
      { metric: 'Per-update time', before: '45–60 min', after: '~5 min (review only)' },
      { metric: 'PM hours saved (15 projects)', before: '—', after: '720 hrs/year ≈ $50,400 recovered capacity' },
      { metric: 'Manager savings', before: '—', after: '40–60 hrs/month per manager' },
      { metric: 'Staffing workload agent-handled', before: '—', after: '80%' },
      { metric: 'Annual savings', before: '—', after: '$216K' },
      { metric: 'Break-even', before: '—', after: '3.5 months' },
      { metric: 'Revenue upside (5 RMs)', before: '—', after: 'Up to $2.4M for $62K incremental investment' },
    ],
  },
  {
    id: 'orgsync',
    number: '04',
    title: 'OrgSync App',
    tagline: 'Highly technical org-to-org sync config with no in-context guidance — 90% of errors traced to manual JSON editing',
    kpi: { label: 'Manual JSON errors', value: '90% error source' },
    badge: { variant: 'slds-badge_success', text: 'Shipped Jul 2026' },
    accent: '#91db8b',
    links: {
      summary: 'https://docs.google.com/presentation/d/13S3DEkmj-L4IJ2ntLzhFLFWGQWlhWCYORnxykujL_qY/edit?usp=sharing',
      figma:   'https://www.figma.com/design/ThSM1oXiJwPSMk2QPaS0ND/Revenue-SOS-UXD----OrgSync-App-%F0%9F%9A%A7?node-id=0-1&t=xpIjyHJuTAIn9gSY-1',
    },
    problem: 'OrgSync provides a central, low-code interface for configuring org-to-org data synchronization (e.g. between Org62 and Org CS) for Integration Developers and Integration Support Engineers. The framework carried a highly technical, specialized vocabulary with a steep learning curve and no in-context guidance; the homepage lacked contextual descriptions and clear CTAs; configuration flows and error handling had no consistent Salesforce platform pattern. Manual entry of complex JSON configurations caused 90% of all reported errors.',
    problemQuote: '"I want the Quick Setup Tool to guide me through the configuration with zero manual JSON editing. If I can prevent those configuration errors, I can finally stop debugging integration issues caused by a missing comma." — Mark, Integration Developer persona',
    role: 'Sr. UX Designer on a 4-person UX team (with a Director, Lead UX Designer, and UX Designer), partnering with DET product owners and engineers. Built the journey map across OrgSync\'s core features (Framework Installation, Quick Setup, Stream Channel Setting, Event Tracker/Monitoring), ran quick-wins analysis against cognitive-load pain points, redesigned key flows and the visual branding, and produced the end-to-end Figma prototypes.',
    decisions: [
      'Prioritized a journey map and quick-wins analysis to target the highest cognitive-load steps first, rather than a full redesign of every screen at once.',
      'Introduced page headers, feature descriptions, new icons, and direct guide access on the homepage to reduce reliance on external technical documentation.',
      'Added a stepper, modal-based configuration (to keep context visible), tooltips, and helper text to Quick Setup flows to replace raw JSON editing with guided input.',
      'Standardized interactive components across sections for consistent behavior, reducing the learning curve.',
      'Rebranded the OrgSync logo (light/dark versions) for a clearer go-to-market/global navigator identity.',
      'Tradeoff: scope was deliberately focused on usability and self-service guidance for early adopters/technical audiences rather than re-architecting the underlying publish-subscribe framework itself.',
    ],
    outcomes: [
      { metric: 'Cognitive load (Homepage + Quick Setup)', before: 'High', after: 'Regular — via descriptive cards, clear CTAs' },
      { metric: 'Configuration flow', before: 'Flat, unnamed forms', after: 'Logical stepped flow, consistently named' },
      { metric: 'Framework-specific input', before: 'Raw JSON, no guidance', after: 'Tooltips + helper text at point of input' },
      { metric: 'Component consistency', before: 'Fragmented patterns', after: 'Standardized across all interactive elements' },
      { metric: 'Deliverables', before: '—', after: 'Full E2E UX/UI blueprint + interactive prototypes' },
    ],
  },
];

/* ============================================================
   BUILD CARD HTML
============================================================ */
function buildCard(p) {
  const el = document.createElement('article');
  el.className = 'project-card';
  el.id = `card-${p.id}`;
  el.setAttribute('tabindex', '0');
  el.setAttribute('role', 'button');
  el.setAttribute('aria-expanded', 'false');
  el.setAttribute('aria-label', `${p.title} — click to expand`);
  el._project = p;

  el.innerHTML = `
    <div class="project-card__accent" style="background:${p.accent};" aria-hidden="true"></div>

    <div class="card-face">
      <div class="project-card__num">${p.number} / 0${PROJECTS.length}</div>
      <h2 class="project-card__title">${p.title}</h2>
      <p class="project-card__tagline">${p.tagline}</p>
      <div class="project-card__footer">
        <div>
          <div class="project-card__kpi-label">${p.kpi.label}</div>
          <div class="project-card__kpi-value">${p.kpi.value}</div>
        </div>
        <span class="slds-badge ${p.badge.variant}">${p.badge.text}</span>
      </div>
      <div class="project-card__hint">
        <button class="btn-primary btn-primary--small btn-expand" aria-label="Expand ${p.title}">Expand</button>
      </div>
    </div>

    <div class="card-detail" aria-hidden="true">
      <div class="card-detail__close-bar">
        <span class="card-detail__close-label">${p.number} / 0${PROJECTS.length}</span>
        <button class="btn-close" aria-label="Close ${p.title}">✕ Close</button>
      </div>

      <div class="card-detail__body">
        <div class="card-detail__header">
          <h2 class="card-detail__title">${p.title}</h2>
          <span class="slds-badge ${p.badge.variant}">${p.badge.text}</span>
          <div class="card-detail__actions">
            ${p.links.summary ? `<a class="btn-primary btn-primary--small" href="${p.links.summary}" target="_blank" rel="noopener">Executive Summary</a>` : ''}
            <a class="btn-secondary btn-secondary--small" href="${p.links.figma}" target="_blank" rel="noopener">Open Figma Blueprint</a>
          </div>
        </div>

        <section class="detail-section" data-s="problem">
          <h3 class="detail-section__heading">PROBLEM</h3>
          <p class="detail-section__body">${p.problem}</p>
          ${p.problemQuote ? `<blockquote class="detail-section__quote" style="border-color:${p.accent}">${p.problemQuote}</blockquote>` : ''}
        </section>

        <section class="detail-section" data-s="role">
          <h3 class="detail-section__heading">MY ROLE</h3>
          <p class="detail-section__body">${p.role}</p>
        </section>

        <section class="detail-section" data-s="decisions">
          <h3 class="detail-section__heading">KEY DECISIONS & TRADEOFFS</h3>
          <ul class="detail-section__list">
            ${p.decisions.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </section>

        <section class="detail-section" data-s="outcomes">
          <h3 class="detail-section__heading">MEASURED OUTCOMES</h3>
          <table class="outcomes-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th class="num">Before</th>
                <th class="num">After</th>
              </tr>
            </thead>
            <tbody>
              ${p.outcomes.map(o => `
                <tr>
                  <td>${o.metric}</td>
                  <td class="num">${o.before}</td>
                  <td class="num val-after">${o.after}</td>
                </tr>`).join('')}
            </tbody>
          </table>
          ${p.outcomeQuote ? `<blockquote class="detail-section__quote" style="border-color:${p.accent};margin-top:12px">${p.outcomeQuote}</blockquote>` : ''}
        </section>
      </div>
    </div>
  `;
  return el;
}

/* ============================================================
   INIT
============================================================ */
const gallery    = document.getElementById('card-gallery');
const backdrop   = document.getElementById('backdrop');
const cardEls    = [];
let expandedCard = null;
let draggables   = [];
const isMobile   = () => window.innerWidth <= 700;

PROJECTS.forEach(p => {
  const el = buildCard(p);
  gallery.appendChild(el);
  cardEls.push(el);
});

/* ============================================================
   ENTRANCE — stagger fade + rise
============================================================ */
gsap.to(cardEls, {
  opacity: 1, y: 0,
  duration: 0.65,
  stagger: 0.14,
  ease: 'power3.out',
  delay: 0.2,
  clearProps: 'transform',
  onComplete() { initDraggables(); }
});

/* ============================================================
   HOVER MICRO-INTERACTIONS
============================================================ */
cardEls.forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (expandedCard || el.classList.contains('is-dragging') || isMobile()) return;
    gsap.to(el, {
      scale: 1.025,
      boxShadow: `0 8px 32px ${el._project.accent}28, 0 2px 8px rgba(0,0,0,.45)`,
      duration: 0.22, ease: 'power2.out',
    });
  });
  el.addEventListener('mouseleave', () => {
    if (expandedCard || el.classList.contains('is-dragging') || isMobile()) return;
    gsap.to(el, { scale: 1, boxShadow: 'none', duration: 0.28, ease: 'power2.inOut' });
  });
});

/* ============================================================
   DRAGGABLE
============================================================ */
function initDraggables() {
  if (isMobile()) return;
  draggables.forEach(d => d.kill());
  draggables = [];

  cardEls.forEach((el, i) => {
    const d = Draggable.create(el, {
      type: 'x,y',
      bounds: '#stage',
      edgeResistance: 0.65,
      onPress() {
        this._pressX = this.x; this._pressY = this.y;
        this._moved  = false;
        el.style.zIndex = 200;
      },
      onDragStart() {
        el.classList.add('is-dragging');
        gsap.to(el, {
          scale: 1.05,
          rotation: i % 2 === 0 ? 1.8 : -1.8,
          boxShadow: `0 20px 56px ${el._project.accent}35, 0 4px 16px rgba(0,0,0,.6)`,
          duration: 0.18, ease: 'power2.out',
        });
      },
      onDrag() {
        const dx = Math.abs(this.x - this._pressX);
        const dy = Math.abs(this.y - this._pressY);
        if (dx > 4 || dy > 4) this._moved = true;
      },
      onDragEnd() {
        el.classList.remove('is-dragging');
        el.style.zIndex = '';
        gsap.to(el, {
          scale: 1, rotation: 0, boxShadow: 'none',
          duration: 0.4, ease: 'elastic.out(1, 0.55)',
        });
        el._dragX = this.x; el._dragY = this.y;
        el._wasDragged = this._moved;
      },
    })[0];
    draggables.push(d);
  });
}

/* ============================================================
   HINT CARD — reset layout
============================================================ */
const resetBtn = document.getElementById('reset-positions');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    cardEls.forEach((el, i) => {
      gsap.to(el, {
        x: 0, y: 0,
        duration: 0.55,
        ease: 'power3.out',
        onComplete() {
          el._dragX = 0; el._dragY = 0; el._wasDragged = false;
          if (draggables[i]) draggables[i].update();
        },
      });
    });
  });
}

/* ============================================================
   CLICK / KEYBOARD
============================================================ */
cardEls.forEach(el => {
  el.addEventListener('click', e => {
    if (el._wasDragged) { el._wasDragged = false; return; }
    if (e.target.closest('.btn-close')) return;
    if (expandedCard) return;
    expandCard(el);
  });
  el.querySelector('.btn-expand').addEventListener('click', e => {
    e.stopPropagation();
    if (expandedCard) return;
    expandCard(el);
  });
  el.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && !expandedCard) {
      e.preventDefault(); expandCard(el);
    }
  });
  el.querySelector('.btn-close').addEventListener('click', e => {
    e.stopPropagation(); collapseCard();
  });
});

document.addEventListener('keydown', e => { if (e.key === 'Escape' && expandedCard) collapseCard(); });
backdrop.addEventListener('click', () => collapseCard());

/* ============================================================
   EXPAND — FLIP-style
============================================================ */
function expandCard(el) {
  if (expandedCard) return;
  expandedCard = el;

  const from = el.getBoundingClientRect();
  el._cardRect   = from;
  el._savedDragX = el._dragX || 0;
  el._savedDragY = el._dragY || 0;

  const vw = window.innerWidth, vh = window.innerHeight;
  const tw = Math.min(680, vw - 40);
  const th = Math.min(820, vh - 60);
  const tx = (vw - tw) / 2, ty = (vh - th) / 2;

  gsap.set(el, {
    position: 'fixed',
    left: from.left, top: from.top,
    width: from.width, height: from.height,
    x: 0, y: 0, zIndex: 600,
  });

  el.setAttribute('aria-expanded', 'true');
  el.classList.add('is-expanded');
  el.setAttribute('aria-label', el._project.title);
  backdrop.classList.add('is-active');
  backdrop.removeAttribute('aria-hidden');

  const detail   = el.querySelector('.card-detail');
  const sections = detail.querySelectorAll('.detail-section');
  detail.style.display = 'flex';
  detail.setAttribute('aria-hidden', 'false');
  gsap.set(detail, { opacity: 0 });
  gsap.set(sections, { opacity: 0, y: 14 });

  const tl = gsap.timeline();
  tl.to(backdrop, { opacity: 1, duration: 0.3, ease: 'power2.out' });
  tl.to(el, { left: tx, top: ty, width: tw, height: th, borderRadius: 16, duration: 0.48, ease: 'power3.inOut' }, 0);
  tl.to(detail,   { opacity: 1, duration: 0.2 }, 0.3);
  tl.to(sections, { opacity: 1, y: 0, duration: 0.38, stagger: 0.07, ease: 'power2.out' }, 0.38);
  tl.call(() => el.querySelector('.btn-close').focus());
}

/* ============================================================
   COLLAPSE
============================================================ */
function collapseCard() {
  if (!expandedCard) return;
  const el       = expandedCard;
  const detail   = el.querySelector('.card-detail');
  const sections = detail.querySelectorAll('.detail-section');
  const naturalRect = el._cardRect;

  const tl = gsap.timeline({
    onComplete() {
      el.classList.remove('is-expanded');
      detail.style.display = 'none';
      detail.setAttribute('aria-hidden', 'true');
      gsap.set(el, {
        clearProps: 'position,left,top,width,height,zIndex,transform',
        x: el._savedDragX, y: el._savedDragY,
      });
      el.setAttribute('aria-expanded', 'false');
      el.setAttribute('aria-label', `${el._project.title} — click to expand`);
      backdrop.classList.remove('is-active');
      backdrop.setAttribute('aria-hidden', 'true');
      expandedCard = null;
      el.focus();
    }
  });

  tl.to(sections, { opacity: 0, y: -10, duration: 0.18, stagger: 0.04, ease: 'power2.in' });
  tl.to(detail,   { opacity: 0, duration: 0.12 }, '-=0.08');
  tl.to(backdrop, { opacity: 0, duration: 0.3, ease: 'power2.in' }, '-=0.1');
  tl.to(el, {
    left: naturalRect.left, top: naturalRect.top,
    width: naturalRect.width, height: naturalRect.height,
    borderRadius: 12, duration: 0.42, ease: 'power3.inOut',
  }, '-=0.25');
}

/* ============================================================
   RESIZE
============================================================ */
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(initDraggables, 150);
});

/* ============================================================
   SIDEBAR — collapse / expand
============================================================ */
const sidebar       = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');

sidebarToggle.addEventListener('click', () => {
  const collapsed = sidebar.classList.toggle('is-collapsed');
  sidebarToggle.setAttribute('aria-expanded', !collapsed);
  sidebarToggle.setAttribute('aria-label', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
});

/* ============================================================
   SIDEBAR — section accordion
============================================================ */
document.querySelectorAll('.sidebar__section-hd').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.closest('.sidebar__section');
    const isOpen  = section.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', isOpen);
  });
});

/* ============================================================
   SIDEBAR — open a card from the nav
============================================================ */
document.querySelectorAll('[data-open]').forEach(btn => {
  btn.addEventListener('click', () => {
    const el = document.getElementById(`card-${btn.dataset.open}`);
    if (el && !expandedCard) expandCard(el);
  });
});

/* ============================================================
   GMT−3 REAL-TIME CLOCK
============================================================ */
const clockEl = document.getElementById('gtm3-clock');

const _baClock = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'America/Argentina/Buenos_Aires',
  hour: '2-digit', minute: '2-digit', second: '2-digit',
  hour12: false,
});

function tickClock() {
  clockEl.textContent = _baClock.format(new Date());
}

tickClock();
setInterval(tickClock, 1000);
