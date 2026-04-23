# SLA Pharma Website

Pixel-perfect replica of [www.slapharma.com](https://www.slapharma.com) built on Next.js 16, Tailwind CSS v4 and TypeScript. Phase 1 = faithful clone; Phase 2 = improvements (see `plans/`).

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` in `app/globals.css`)
- **Fonts:** Inter via `next/font/google`
- **Carousel:** Swiper React
- **Email:** Resend (`/api/contact`)
- **Deploy:** Vercel

## Local development

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY + CONTACT_TO_EMAIL
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx              # Root: Inter, Header, Footer, CookieBanner, JSON-LD
  page.tsx                # Home (hero carousel, GI medicine, CTA)
  about-us/               # About page
  about/what-we-do/       # What We Do
  partnerships/
  therapeutic-areas/      # Responsive mind-map
  contact/
  privacy-policy/
  api/contact/route.ts    # Resend contact form
  sitemap.ts - robots.ts
components/
  layout/                 # Header, Footer, CookieBanner, OrganizationJsonLd
  home/HeroCarousel.tsx   # Swiper carousel
  shared/                 # PageHero, CtaBand, ValueCard, ObfuscatedEmail
  contact/ContactForm.tsx
lib/site-config.ts        # Nav, offices, social, contact details
public/                   # Logo, favicon, hero images, mind-map, OG image
```

## Theme tokens

Primary `#fe5200`, primary-dark `#e9550e`, Inter font variable, fade-in and scale-in keyframes, `.hover-lift` utility. See `app/globals.css`.

## Deployment

1. Push to `https://github.com/slapharma/SLA-Pharma-Website`.
2. Import project into Vercel at `https://vercel.com/slapharma/sla-pharma-website`.
3. Set env vars: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`.
4. Verify `/sitemap.xml` and `/robots.txt` return 200 after first deploy.

## Phase 1 scope

Home, About Us, What We Do, Partnerships, Therapeutic Areas, Contact, Privacy Policy. Content is hard-coded (no CMS in Phase 1); migrate to MDX or headless CMS in Phase 2.
