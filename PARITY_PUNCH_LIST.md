# Pixel-Parity Punch List — Phase 1 → 1.1

Comparison of https://www.slapharma.com (live) vs https://sla-pharma-website.vercel.app (replica).
Live captures at 1440px collected 2026-04-23 in `.playwright-mcp/live-*-1440.png`.

**Honest assessment: the replica renders end-to-end with the right brand colour, routes and content intent, but is ~50% visually matched. It needs a Phase 1.1 refit across every page before it can be called pixel-perfect.**

---

## Global (applies to every page)

| # | Element | Live behaviour | Replica | Fix |
|---|---------|----------------|---------|-----|
| G1 | **Header** | Big orange "SLA Pharma" logo top-left + 4 utility icons top-right (phone, email, LinkedIn, X). No inline nav at desktop — likely hamburger at all widths. | 6 inline horizontal nav links + hamburger on mobile. | Rebuild header: utility-icon bar + full-screen overlay menu on click. |
| G2 | **Footer background** | White/light. Orange logo + orange arrow bullets on links. | Dark gray-900 background. | Flip to white; restyle links with orange arrows. |
| G3 | **Copyright** | "©2025 SLA Pharma (UK) Limited" | "©{year} SLA Pharma" | Hardcode exact entity name. |
| G4 | **CTA band** | Light peach/cream bg, centered black "Start a conversation with us today", orange pill "Contact Us" button below. | Solid orange bg, white text, white button. | Swap bg to `#fdeee5` (approx), centered column, keep orange pill. |
| G5 | **Cookie banner** | Thin horizontal overlay near top of content area. Two explicit "Reject All" / "Accept All" buttons (orange). Copy begins "We use cookies to enhance your experience on our website…" | Floating card bottom-right, "Accept" / "Reject". | Rebuild as top-of-content bar, update copy, match button styles. |
| G6 | **All H2 section headings** | Orange (`#fe5200`) | Gray-900 | Change default H2 colour to primary in content pages. |

---

## Home (`/`)

| # | Element | Live | Replica | Fix |
|---|---------|------|---------|-----|
| H1 | Hero title colour | Mixed: "Trusted by Global" in orange + "Healthcare Professionals" in white (line-wrapped, same weight) | All-white single colour | Split title into coloured spans per slide. |
| H2 | Hero CTA button | White pill-rounded, orange "Learn More →" text, orange arrow icon | Orange solid, white text | Swap variant. |
| H3 | Hero slide navigation | Left/right chevron arrows at viewport edges | Bullet dots pagination | Use Swiper `Navigation` module instead of `Pagination`. |
| H4 | Hero subtitle copy | Slide 1: "Our partnerships with renowned researchers, clinicians, and pharmaceutical organisations ensure our treatments are backed by rigorous scientific validation." | Placeholder ("Over 30 years of clinical expertise...") | Replace with exact live copy. |
| H5 | GI Medicine section heading | Orange colour, larger | Gray-900 | Colour fix (covered by G6). |
| H6 | GI Medicine image | CIRCULAR mask with dark vignette, stylised gut illustration on black | Rectangular aspect-[4/3] | Apply `rounded-full` + dark bg frame. |
| H7 | GI Medicine bullets | Orange right-triangle markers (▶) + shorter copy | Green-tinted checkmarks | Switch to `▶` SVG in primary colour, rewrite copy. |
| H8 | GI Medicine copy | "SLA Pharma is one of the few global pharmaceutical companies focused solely on developing medicines for the prevention and treatment of a range of gastrointestinal and related disorders…" | My paraphrased version | Use exact live copy. |

---

## About Us (`/about-us`)

| # | Element | Live | Replica | Fix |
|---|---------|------|---------|-----|
| A1 | Hero | Full-bleed photo of people in meeting, dark overlay, orange uppercase H1 centred | `PageHero` gradient gray-to-white | Rebuild as full-bleed hero component with background image. |
| A2 | Mission block | Right column: orange H2 "Our Mission" + orange-tinted body copy. Left: huge faded decorative SLA logo | 3-column grid of cards | Redesign as 2-col: decorative logo left, copy right. |
| A3 | Commitments list | Orange arrow bullet + bold title + one-line description, VERTICAL checklist under mission | 3-col `ValueCard` grid | Redesign as compact vertical list, drop card chrome. |
| A4 | History section | White bordered card, bold H2, 3 orange-arrow bullets (Founded by Justin Slagel / Leader in clinical trials / Patient well-being) | Centered paragraph on gray-50 | Rebuild as bordered card with bullet list. |
| A5 | Values section | Orange H2 centred + subtitle; 3 white cards each with orange outline icon (shield / bolt / heart) + bold title + 2-line description | 3 cards, no icons | Add icons, match copy. |

---

## What We Do (`/about/what-we-do`)

| # | Element | Live | Replica | Fix |
|---|---------|------|---------|-----|
| W1 | Hero | Dark blue lab/microscope photo full-bleed, orange H1 "WHAT WE DO" | Gradient PageHero | Rebuild with bg image. |
| W2 | Hero subtitle | "Identifying known chemical entities for new pharmacological indications" | My paraphrase | Replace copy. |
| W3 | "Our Approach" intro | Orange H2, centered paragraph | Missing section | Add. |
| W4 | 3 pillars | Numbered (1/2/3) stacked cards: orange number circle left, bold title + body + orange checkmark sub-bullets right | 3-col `ValueCard` grid | Build `NumberedStepCard` component; stack vertically; add sub-bullets. |
| W5 | "Our Research Focus" | Orange H2 centered + copy; 2 cards (Therapeutic Development / Clinical Research) with orange outline icons (flask, shield) | Gray-50 text block | Rebuild as 2-card section with icons. |

---

## Partnerships (`/partnerships`)

| # | Element | Live | Replica | Fix |
|---|---------|------|---------|-----|
| P1 | Hero | Globe + foliage photo, orange H1 | Gradient | Swap to bg image. |
| P2 | Network intro | Orange H2 ("We've Built a Network of Partners Including Opinion Leaders and Experts") + centered subtitle | Plain hero subtitle only | Add dedicated intro section. |
| P3 | Professional/Commercial | 2-card grid with orange icons (people / people-globe), centered title + body copy, NO photos | Image-left + text-right alternating | Rebuild as icon cards, remove photos. |
| P4 | Out-Licensing card | White bordered card: orange eyebrow "Out-Licensing", H2 "Our Programs, Your Market", body, 4 orange-arrow bullets, CIRCULAR photo on right, inline peach "Partner with Us" pill button | Image-left / text-right split, rectangular image | Rebuild as single bordered card; circular image; inline CTA. |
| P5 | In-Licensing card | Same pattern mirrored (circular image LEFT, text right) "Your Program, Our Expertise" | Image-right / text-left | Mirror P4. |
| P6 | Global Reach | Centered H2 "Global Reach, Local Impact" + subtitle | H2 "Global Reach" | Update copy. |

---

## Therapeutic Areas (`/therapeutic-areas`)

| # | Element | Live | Replica | Fix |
|---|---------|------|---------|-----|
| T1 | Hero | Doctor-patient photo full-bleed, orange H1 "THERAPEUTIC AREAS", white subtitle "Treatments for gastrointestinal conditions, supported by clinical research" | Gradient PageHero | Swap to bg image hero. |
| T2 | "Over 30 Years" section | White card: orange H2 centered + body copy in 2-col with circular sunrise photo right | Body + rectangular image 2-col | Rebuild as bordered card, circular photo. |
| T3 | **Mind map** | **Interactive custom SVG/HTML graphic**: central orange circle "Gastroenterology" with 5 satellite peach circles (Inflammatory Conditions, Colorectal & Oncological, Functional/Motility Disorders, Rare GI Disorders, Proctological Disorders), each with a bulleted indication list. NOT a PNG. | Downloaded static PNG (desktop/mobile variants) | **Rebuild as SVG + absolutely-positioned HTML circles with indication data.** High-effort — biggest single divergence. |
| T4 | Closing section | Bordered card: bold centered H2 "Advancing Gastrointestinal Health Together" + body | Centered paragraph, no border | Wrap in bordered card. |

---

## Contact (`/contact`)

| # | Element | Live | Replica | Fix |
|---|---------|------|---------|-----|
| C1 | Hero | Full-bleed hands-holding-icons photo, orange H1 "LET'S START A CONVERSATION" | Gradient PageHero | Swap. |
| C2 | Form card | Single white shadow card, compact. Fields: First Name / Last Name (2-col), Email Address, Subject (select), Message (textarea with placeholder "How can we help you?"), orange full-width "Send Message →" button. Intro copy "Fill in the form below and we'll get back to you shortly." | Form plus heading | Match card chrome + placeholder copy. |
| C3 | Contact Information | Single compact block right of form: small orange phone icon, "Get in Touch" H3, phone, email, LinkedIn/X icons | Elaborate multi-block layout | Consolidate. |
| C4 | **Global Offices** section | Separate section below form on a beige/warm bg. Orange eyebrow "Strategic Locations Across Europe", centered copy, 3 cards with orange globe icons. Each card: SWISS / UK / IRELAND OFFICE with **full street addresses**: "Gestadeckplatz 2, CH-4410, Liestal, Switzerland" / "3a Chestnut House, Farm Close, Shenley, Hertfordshire, WD7 9AD, United Kingdom" / "Unit 3d North Point House, North Point Business Park, New Mallow Road, Cork, Ireland" + phone/email per office. | 3 cards in same section, placeholder copy, no street addresses. | Update `lib/site-config.ts` with full addresses; rebuild as dedicated section. |

---

## Summary of effort

| Work | Scope | Complexity |
|------|-------|-----------|
| Global refit (header, footer, CTA band, cookie banner, H2 colour) | Touches every page | Medium — 1 sitting |
| Per-page hero rebuild (full-bleed photo + orange uppercase H1) | 6 pages × new hero component | Low once the shared component exists |
| Content refit (exact copy for every section + full office addresses) | Every page | Medium — content sweep |
| Mind map rebuild (T3) | Therapeutic Areas only | **High** — custom SVG/CSS |
| Icon library (shield/bolt/heart/flask/globe/handshake/people etc.) | Values, pillars, partnerships | Low with Lucide or Heroicons |
| Circular image treatments (`rounded-full` frames) | Home, partnerships | Low |
| Numbered-step cards (What We Do pillars) | New component | Low |

**Recommended ordering for Phase 1.1:**
1. Global refit first (G1–G6) — single biggest visual delta with lowest cost.
2. Hero component unification — introduce `FullBleedHero` and migrate all 6 content pages.
3. Exact-copy sweep from live site.
4. Per-page layout corrections (A2–A5, W3–W5, P2–P6, T2/T4, C2–C4).
5. Mind map rebuild (highest effort, isolatable).

**Assets still to download from live:** new hero backgrounds for About / What We Do / Partnerships / Therapeutic Areas / Contact (live site doesn't expose them at `/6.jpg` etc., they're on different paths — need to inspect each page's source).

---

## Open questions for Phase 1.1 kickoff

1. **Nav architecture** — live uses icon-only top bar at all widths, likely with full-screen overlay menu. Is that intentional for phase-1 parity, or should the replica keep the horizontal nav as an "improvement"?
2. **Exact office addresses** — do you want the real street addresses (captured above) committed to the public repo?
3. **Mind map** — rebuild as SVG (recommended, retains crispness + interactivity) or keep the PNG for this phase and schedule SVG for Phase 2?
