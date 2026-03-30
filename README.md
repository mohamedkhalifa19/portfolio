# Mohamed Ahmed Khalifa — Portfolio

A high-performance, dark-mode portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**.

---

## 🚀 Quick Start

### 1. Clone & install

```bash
git clone https://github.com/mohamedkhalifa/portfolio.git
cd portfolio
npm install          # or: pnpm install / yarn install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind base, CSS variables, utilities
│   ├── layout.tsx           # Root layout — fonts, metadata, dark class
│   └── page.tsx             # Root page — section composition + Suspense
│
├── components/
│   ├── ui/                  # Reusable primitives
│   │   ├── button.tsx       # shadcn/ui Button with custom variants
│   │   ├── card.tsx         # shadcn/ui Card primitives
│   │   ├── badge.tsx        # shadcn/ui Badge
│   │   ├── skeleton.tsx     # shadcn/ui Skeleton for loading states
│   │   ├── ProjectCard.tsx  # ★ Core project card with Framer Motion
│   │   ├── SectionHeader.tsx# Reusable eyebrow + title + description
│   │   └── Skeletons.tsx    # Composed skeleton screens (ProjectsSkeleton)
│   │
│   └── sections/            # Page sections (one file per section)
│       ├── Navbar.tsx       # Fixed nav + mobile sheet drawer
│       ├── Hero.tsx         # Full-screen hero with animated headline
│       ├── SkillGrid.tsx    # Bento-style skill cards with animated bars
│       ├── ProjectGallery.tsx  # Staggered project cards grid
│       ├── Timeline.tsx     # Vertical education/experience timeline
│       ├── Contact.tsx      # Contact form + social links
│       └── Footer.tsx       # Minimal footer
│
├── hooks/
│   ├── useScrollReveal.ts   # IntersectionObserver → isVisible boolean
│   ├── useMouseGlow.ts      # Writes --mouse-x/y for card glow effects
│   └── useSectionActive.ts  # Tracks which section is in viewport
│
└── lib/
    ├── data.ts              # ★ All portfolio content & TypeScript types
    └── utils.ts             # cn() helper (clsx + tailwind-merge)
```

---

## ✏️ Customisation Guide

### Update your personal info
All content lives in **one file**: `src/lib/data.ts`

```ts
export const OWNER = {
  name: "Mohamed Ahmed Khalifa",
  role: "React Front-End Developer",
  email: "m.khalifa.dev@gmail.com",
  github: "https://github.com/mohamedkhalifa",
  linkedin: "https://linkedin.com/in/mohamedkhalifa",
  // ...
};
```

### Add a new project
Append to the `PROJECTS` array in `src/lib/data.ts`:

```ts
{
  id: "my-new-project",
  title: "My New Project",
  subtitle: "Short tagline",
  description: "What it does and what you built.",
  role: "Frontend",           // "Frontend" | "Backend" | "Full Stack"
  techs: ["React", "TypeScript"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",     // optional
  gradient: "from-rose-600/20 via-pink-500/10 to-transparent",
  featured: false,
},
```

### Wire up the contact form
Replace the `setTimeout` in `Contact.tsx` with a real service:

```ts
// Formspree:
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(fields),
});

// Resend (via Next.js API route):
const res = await fetch("/api/contact", { method: "POST", body: ... });
```

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Components | shadcn/ui (Button, Card, Badge, Skeleton) |
| Animation | Framer Motion v11 |
| Icons | Lucide React |
| Font | Geist (body) + Cabinet Grotesk (display) |

---

## ⚡ Performance Features

- **React Suspense** boundary on the project grid with skeleton fallback
- **`next/image`** ready — swap `<img>` tags for `<Image>` when adding real screenshots
- **App Router** — server components by default, `"use client"` only where interactivity is needed
- **Mobile-first** — navigation becomes a sheet drawer below `md:` breakpoint
- **Security headers** — X-Frame-Options, CSP, Referrer-Policy in `next.config.ts`

---

## 📦 Deployment

Deploy instantly on **Vercel** (recommended):

```bash
npx vercel --prod
```

Or export as static HTML:

```bash
# Add output: "export" to next.config.ts first
npm run build
# → deploys the /out directory to any static host
```
