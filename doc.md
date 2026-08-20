# Henry.io — Build Documentation

Single-file HTML/CSS/JS portfolio SPA. Hash-based routing across 5 pages (Home, About, Projects, Resume, Contact), fully responsive with a mobile drawer nav, matching the source mockup.

---

## Root color tokens

All defined in `:root` at the top of the `<style>` block — edit these to re-theme the entire site.

| Token | Hex | Used for |
|---|---|---|
| `--bg` | `#efeeec` | Page background (warm off-white) |
| `--surface` | `#ffffff` | Cards, form, nav on scroll |
| `--surface-alt` | `#f6f5f2` | Icon tiles, input fields, subtle fills |
| `--ink` | `#0e0e0d` | Primary text, headings, buttons |
| `--ink-soft` | `#68675f` | Secondary text, subtitles, nav links |
| `--ink-faint` | `#a5a49b` | Tertiary labels, timestamps, eyebrow labels |
| `--border` | `#e2e0da` | Default hairline borders |
| `--border-soft` | `#ebe9e3` | Card borders, dividers |
| `--accent` | `#111110` | Primary buttons / active states |
| `--accent-ink` | `#ffffff` | Text on accent buttons |
| `--dark-surface` | `#171715` | Dark CTA band background |

**Radii:** `--radius-xl 28px` · `--radius-lg 22px` · `--radius-md 16px` · `--radius-sm 10px` · `--radius-pill 999px`

**Shadows:** `--shadow-card` (resting card elevation) · `--shadow-float` (hover / hero portrait elevation)

**Type:** `--font-display` → Instrument Sans (headings) · `--font-body` → Inter (body/UI), loaded from Google Fonts.

---

## File structure

One file: `henry-portfolio.html`

```
<style>   → all CSS, organized by section with comment headers
<nav>     → sticky nav + mobile drawer
<main>
  #page-home
  #page-about
  #page-projects
  #page-resume
  #page-contact
<footer>
<script>  → routing, drawer, filters, form, CV download
```

Each `.page` is a `<section>` toggled via `display:none/.active` — no reload, no external router.

---

## How routing works

- URL hash drives state: `#home`, `#about`, `#projects`, `#resume`, `#contact`.
- `hashchange` listener + a `showPage()` function toggle the `.active` class on the matching `#page-*` section and sync the active nav link.
- Reloading or sharing a link (e.g. `henry-portfolio.html#projects`) opens directly on that page.
- Skill bars animate (width 0 → target %) each time About or Resume becomes active.

## Interactive pieces (all functional, not stubbed)

- **Mobile drawer** — hamburger opens a right-side panel with full nav; closes on link tap, close button, or backdrop click.
- **Project filters** — All / Web / SaaS / E-commerce / UI/UX buttons filter the grid by `data-cat` attributes on each card (a card can belong to multiple categories).
- **Contact form** — client-side validation (`required` fields), shows a real success message on submit, resets the form. No backend is wired up — connect `contactForm`'s submit handler to your form endpoint (Formspree, a serverless function, etc.) when ready.
- **Download CV** — both "Download CV" buttons generate and download a plain-text resume on the fly via a `Blob`, no server needed. Swap in a real PDF by replacing the handler with a link to a static `.pdf` file once you have one designed.

## Assets

- Icons: Font Awesome 6 (brands + solid), loaded from `cdnjs.cloudflare.com`.
- Portrait placeholders: `i.pravatar.cc`, desaturated via `filter: grayscale(1)` to match the mockup's monochrome photography. Swap the `src` on the two `<img>` tags (hero + about) for a real photo — grayscale filter will still apply automatically.
- Project thumbnails are pure CSS (no images) — small "browser window" mockups built from divs, so they load instantly and stay crisp at any size.

## Customizing

- **Re-theme:** change the `:root` tokens — the whole UI (buttons, cards, borders, shadows) derives from them.
- **Swap fonts:** update the Google Fonts `<link>` and the `--font-display` / `--font-body` values.
- **Add a project:** duplicate a `.proj-card` block in `#projectGrid`, set `data-cat` to the relevant filter keys (`web`, `saas`, `ecommerce`, `uiux`).
- **Real photo:** replace the two pravatar `src` attributes.

## Constraints followed

- Single HTML file, no build step.
- Only `cdnjs.cloudflare.com` used for external scripts/stylesheets (Font Awesome); Google Fonts used for type only.
- No ES module imports / unpkg.
- 
.whatido {
    max-width: 1200px;
    margin: 4rem auto 0;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
}

.wid_card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 1.6rem;
    transition: var(--transition);
}

.wid_card:hover {
    
}

.wid_icon {
    width: 44px;
    height: 44px;
    border-radius: var(--radius-sm);
    background: var(--surface-alt);
    box-shadow: inset 0 0 0 1px var(--border);
    display: grid;
    place-items: center;
    font-size: 18px;
    color: var(--ink);
    margin-bottom: 1rem;
}

.wid_card h3 {
    font-size: 16px;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 6px;
}

.wid_card p {
    font-size: 13.5px;
    color: var(--ink-soft);
    line-height: 1.5;
}

@media (max-width: 768px) {
    .whatido {
        grid-template-columns: 1fr;
    }
}

<section class="connect" id="connect">
  <div class="connect_wrap">
    <span class="connect_tag">Let's connect</span>
    <h2 class="connect_title">Find me on <span class="name">social media</span></h2>
    <p class="connect_desc">Follow along for the projects I'm building, quick tips, and behind-the-scenes of the work.</p>

    <div class="connect_grid" id="connect-grid"></div>
  </div>
</section>

.connect {
    padding: 4rem 2rem;
}

.connect_wrap {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.connect_tag {
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--ink-soft);
    font-size: 13px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: var(--radius-pill);
}

.connect_title {
    font-size: clamp(26px, 4vw, 36px);
    font-weight: 800;
    color: var(--ink);
}

.connect_desc {
    max-width: 480px;
    font-size: 14px;
    color: var(--ink-soft);
    margin-bottom: 1rem;
}

.connect_grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.9rem;
}

.connect_card {
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 0.9rem 1.1rem;
    text-decoration: none;
    transition: var(--transition);
}

.connect_card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-card);
    border-color: var(--ink-faint);
}

.connect_icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 16px;
    flex-shrink: 0;
}

.connect_label {
    flex: 1;
    font-size: 14px;
    font-weight: 600;
    color: var(--ink);
    text-align: left;
}

.connect_card .fa-arrow-up-right-from-square {
    font-size: 12px;
    color: var(--ink-faint);
}

@media (max-width: 640px) {
    .connect_grid {
        grid-template-columns: 1fr;
    }
}
const socials = [
  { icon: "fa-brands fa-instagram", label: "Instagram", bg: "#fde2ea", color: "#e1306c", url: "https://instagram.com/yourhandle" },
  { icon: "fa-brands fa-github", label: "Github", bg: "#eeeeee", color: "#171515", url: "https://github.com/yourhandle" },
  { icon: "fa-brands fa-facebook", label: "Facebook", bg: "#e0edfe", color: "#1877f2", url: "https://facebook.com/yourhandle" },
  { icon: "fa-brands fa-tiktok", label: "TikTok", bg: "#eeeeee", color: "#010101", url: "https://tiktok.com/@yourhandle" },
  { icon: "fa-brands fa-youtube", label: "YouTube", bg: "#fde2e2", color: "#ff0000", url: "https://youtube.com/@yourhandle" },
  { icon: "fa-brands fa-square-threads", label: "Threads", bg: "#eeeeee", color: "#010101", url: "https://threads.net/@yourhandle" }
];

function renderSocials() {
  const grid = document.getElementById("connect-grid");
  grid.innerHTML = socials.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener" class="connect_card">
      <div class="connect_icon" style="background:${s.bg}; color:${s.color}">
        <i class="${s.icon}"></i>
      </div>
      <span class="connect_label">${s.label}</span>
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  `).join("");
}

renderSocials();

<div class="project_card">
  <img src="images/boot-preview.png" alt="boot system">

  <div class="project_info">
    <h3>Boot Interface UI</h3>
    <p>Futuristic animated system loader with terminal UI</p>

    <a href="boot.html" class="see_more">
      See More 
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  </div>
</div>

[
  {
    "id": "boot-interface",
    "title": "Boot Interface UI",
    "h3": "Futuristic System Boot Experience",
    "p": "A high-performance boot interface with real-time system logs and animated loading states.
Designed with a terminal-inspired layout for a next-gen OS startup feel.
    "tags": ["UI Design", "Frontend", "Animation"],
    "stack": ["HTML", "CSS", "JavaScript"],
    "type": "Concept UI",
    "status": "Completed",
    "cta": "View Project"
  },
  {
    "id": "portfolio",
    "title": "Personal Portfolio",
    "h3": "Modern Developer Portfolio",
    "p": "A sleek, responsive portfolio showcasing projects, skills, and personal brand.
Built with smooth interactions, clean layout, and strong visual identity.
    "tags": ["Portfolio", "UI/UX", "Responsive"],
    "stack": ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    "type": "Personal Project",
    "status": "Live",
    "cta": "View Portfolio"
  },
  {
    "id": "landing-page",
    "title": "SaaS Landing Page",
    "h3": "Sharp Brands for Serious Growth",
    "p": "A bold, dark landing page with strong typography for a creative agency.
Built with a strategic layout to drive engagement and brand impact.",
    "tags": ["Landing Page", "Branding", "SaaS"],
    "stack": ["HTML", "CSS", "JavaScript"],
    "type": "Client Style Concept",
    "status": "Completed",
    "cta": "Explore Design"
  }
]

link: "https://yourprojectlink.com"


const projects = [
  {
    id: "boot-interface",
    title: "Boot Interface UI",
    h3: "Futuristic System Boot Experience",
    p: "A high-performance boot interface...",
    tags: ["UI Design", "Frontend", "Animation"],
    link: "#"
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    h3: "Modern Developer Portfolio",
    p: "A sleek and responsive portfolio...",
    tags: ["Portfolio", "UI/UX", "Responsive"],
    link: "#"
  },
  {
    id: "landing-page",
    title: "SaaS Landing Page",
    h3: "Sharp Brands for Serious Growth",
    p: "A bold, conversion-focused landing page...",
    tags: ["Landing Page", "Branding", "SaaS"],
    link: "#"
  }
];

const container = document.getElementById("projects");

projects.forEach(project => {
  const card = document.createElement("a");
  card.className = "card";
  card.href = project.link;
  card.target = "_blank";

  card.innerHTML = `
    <h3>${project.h3}</h3>
    <h2>${project.title}</h2>
    <p>${project.p}</p>
    <div class="tags">
      ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;

  container.appendChild(card);
});