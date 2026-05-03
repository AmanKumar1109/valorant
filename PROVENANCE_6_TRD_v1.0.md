# TECHNICAL REQUIREMENT DOCUMENT
## Provenance 6.0 — Infinite Realms: The Anime Protocol
### Helix v2.0 | RVSCET | Web Team Build Spec

---

```
Document Version : 1.0
Status           : DRAFT — Pending Tech Lead Sign-Off
Authored by      : Helix Executive Board (VP: Sumit Ghosh)
Target Team      : Web Development (Priyanshu Ghosh, Tech Lead)
Reference Repo   : https://github.com/mjgupta9135/Provenance-5.0-Build-Folder.git
Fest Date        : May 14–15, 2026
```

---

## TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Design System](#2-design-system)
3. [Architecture & Routing](#3-architecture--routing)
4. [Component Tree](#4-component-tree)
5. [State Management — Event Filter](#5-state-management--event-filter)
6. [Page Sections — Detailed Specs](#6-page-sections--detailed-specs)
   - 6.1 Hero
   - 6.2 Clubs Grid
   - 6.3 Event Pool — Category Filter + Cards
   - 6.4 Gallery (Masonry)
   - 6.5 Video Embeds
   - 6.6 Footer
7. [Full Event Master Data](#7-full-event-master-data)
8. [Asset Optimization Guidelines](#8-asset-optimization-guidelines)
9. [Sitemap](#9-sitemap)
10. [Repo Diff vs. 5.0 Build](#10-repo-diff-vs-50-build)
11. [Open Items & TBAs](#11-open-items--tbas)

---

## 1. PROJECT OVERVIEW

Provenance 6.0 is RVSCET's flagship inter-college tech fest. The website is the **primary digital touchpoint** — it must handle pre-event registration traffic, post-registration confirmations, and serve as a live reference hub on event day.

**Core Objectives:**

| # | Goal | Metric |
|---|------|--------|
| 1 | Drive registrations | CTA click → form conversion |
| 2 | Communicate all events clearly | Time-on-page for event cards |
| 3 | Build hype pre-fest | Reel views, brochure downloads |
| 4 | Mobile-first experience | <3s LCP on mobile (3G sim) |

**Scope Delta from 5.0 Repo:**
- New multi-club architecture (5 clubs vs. previous Helix-only)
- New event categorization model (theme-based, not club-based)
- New Valorant-inspired palette (purple/magenta/dark, not previous scheme)
- Parallax anime hero (new)
- Masonry gallery (new)
- AI Film Making, Khana Khazana events (new)
- Genjutsu UI **CANCELLED** — remove from event cards

---

## 2. DESIGN SYSTEM

### 2.1 Color Palette

```css
/* === PROVENANCE 6.0 — DESIGN TOKENS === */

/* PRIMARY */
--color-bg-base       : #050505;   /* near-black canvas */
--color-bg-surface    : #0D0D1A;   /* card/panel background */
--color-bg-elevated   : #12122A;   /* elevated surface (modals, hover) */

/* BRAND ACCENT — Valorant-Protocol Fusion */
--color-primary       : #C167FF;   /* Lavender — headings, primary CTA */
--color-secondary     : #9F8AFF;   /* Periwinkle — secondary text, tags */
--color-accent        : #FF66FF;   /* Neon Magenta — highlights, hover glows */

/* VALORANT REFERENCE PALETTE (from uploaded brand guide) */
--color-riot-coral    : #FF4655;   /* alert / danger states */
--color-evo-teal      : #15E6D8;   /* success / active states */
--color-iso-purple    : #521183;   /* deep accent / gradient stops */
--color-nexus-navy    : #12171E;   /* alternative dark bg */
--color-prismatic-gold: #DACAB2;   /* awards / tier indicators */

/* TEXT */
--color-text-primary  : #FFFFFF;
--color-text-secondary: #B0B0CC;
--color-text-muted    : #6B6B8A;
--color-text-disabled : #3A3A55;

/* BORDERS */
--color-border-subtle : rgba(193, 103, 255, 0.15);
--color-border-active : rgba(193, 103, 255, 0.6);
--color-border-glow   : rgba(255, 102, 255, 0.4);

/* GRADIENTS */
--gradient-hero       : linear-gradient(135deg, #050505 0%, #1A0A2E 50%, #050505 100%);
--gradient-card-hover : linear-gradient(180deg, rgba(193,103,255,0.1) 0%, transparent 100%);
--gradient-cta-primary: linear-gradient(90deg, #C167FF 0%, #FF66FF 100%);
--gradient-cta-hover  : linear-gradient(90deg, #FF66FF 0%, #C167FF 100%);
--gradient-category   : linear-gradient(135deg, rgba(159,138,255,0.2) 0%, rgba(193,103,255,0.05) 100%);
```

### 2.2 Typography

```css
/* Import in index.css or _app.tsx */
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

/* TOKENS */
--font-display  : 'Rajdhani', sans-serif;     /* headings, event names */
--font-body     : 'Inter', sans-serif;          /* body, descriptions */
--font-mono     : 'JetBrains Mono', monospace;  /* code, metadata, tags */

/* SCALE */
--text-xs   : 0.75rem;   /* 12px — meta labels */
--text-sm   : 0.875rem;  /* 14px — tags, captions */
--text-base : 1rem;      /* 16px — body */
--text-lg   : 1.125rem;  /* 18px — card titles */
--text-xl   : 1.25rem;   /* 20px — section sub-heads */
--text-2xl  : 1.5rem;    /* 24px — section heads */
--text-3xl  : 1.875rem;  /* 30px — hero sub-head */
--text-4xl  : 2.25rem;   /* 36px — hero title */
--text-5xl  : 3rem;      /* 48px — PROVENANCE */
--text-hero : clamp(3.5rem, 8vw, 7rem); /* responsive hero display */
```

### 2.3 Spacing & Radius

```css
--spacing-section : 5rem;       /* between major page sections */
--spacing-card    : 1.5rem;     /* inner card padding */
--radius-card     : 0.75rem;
--radius-chip     : 9999px;     /* pill tags */
--radius-button   : 0.375rem;
```

### 2.4 Shadows & Glows

```css
--shadow-card      : 0 4px 24px rgba(0, 0, 0, 0.6);
--shadow-card-hover: 0 8px 40px rgba(193, 103, 255, 0.25);
--glow-primary     : 0 0 20px rgba(193, 103, 255, 0.5);
--glow-accent      : 0 0 30px rgba(255, 102, 255, 0.4);
--glow-teal        : 0 0 20px rgba(21, 230, 216, 0.4);
```

---

## 3. ARCHITECTURE & ROUTING

### 3.1 Tech Stack

```
Framework     : React 18 (Vite or Next.js 14 — match 5.0 repo)
Styling       : Tailwind CSS v3 (extend tokens above in tailwind.config.js)
State         : Zustand OR React Context (see Section 5)
Animations    : Framer Motion v11
Parallax      : react-scroll-parallax v3
Icons         : Lucide React + custom SVG
Image Opt.    : next/image OR vite-imagetools
Fonts         : Google Fonts (self-hosted preferred for perf)
Forms         : React Hook Form + Zod validation
Analytics     : Umami (self-hosted) OR Google Analytics 4
```

> **NOTE:** Check 5.0 repo's `package.json` before adding dependencies.
> Avoid duplication. Align major version numbers.

### 3.2 Folder Structure

```
/src
├── assets/
│   ├── images/
│   │   ├── clubs/          # Club logos (SVG preferred)
│   │   ├── events/         # Event posters (WebP, 400x300)
│   │   ├── gallery/        # Gallery shots (WebP, various)
│   │   └── hero/           # Parallax layers (WebP)
│   └── videos/
│       └── reels/          # Hype reel thumbnails + URLs
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageWrapper.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── CountdownTimer.tsx
│   │   ├── ClubsGrid.tsx
│   │   ├── EventPool.tsx
│   │   │   ├── CategoryFilter.tsx
│   │   │   └── EventCard.tsx
│   │   ├── GalleryMasonry.tsx
│   │   ├── VideoEmbeds.tsx
│   │   └── SponsorStrip.tsx
│   └── shared/
│       ├── CTAButton.tsx
│       ├── GlowBorder.tsx
│       ├── NeonChip.tsx
│       └── AnimatedSection.tsx
├── data/
│   ├── events.ts           # MASTER EVENT DATA (see Section 7)
│   ├── clubs.ts            # Club metadata
│   └── categories.ts       # Category definitions + theme mappings
├── hooks/
│   ├── useEventFilter.ts   # Filter state logic
│   └── useParallax.ts
├── pages/ (or app/ for Next.js)
│   ├── index.tsx           # Home — single scroll page
│   ├── events/
│   │   └── [slug].tsx      # Dynamic event detail page
│   └── 404.tsx
├── store/
│   └── eventFilterStore.ts # Zustand store (see Section 5)
├── styles/
│   └── globals.css         # CSS tokens + base reset
└── types/
    └── index.ts            # TypeScript interfaces
```

### 3.3 Routing Map

```
/                          → Home (single-page scroll, all sections)
/events                    → All events grid (standalone, filterable)
/events/:slug              → Single event detail page
  e.g. /events/shinobi-script
       /events/eminence-in-prompt
       /events/robo-war
/gallery                   → Full gallery page (masonry)
/schedule                  → Event schedule / timetable
/register                  → Registration redirect OR embedded form
/brochure                  → PDF download trigger
```

### 3.4 TypeScript Interfaces

```typescript
// /src/types/index.ts

export type EventCategory =
  | 'tech-ai'
  | 'gaming'
  | 'robotics-iot'
  | 'cultural'
  | 'media'
  | 'sports'
  | 'culinary';

export type ClubId = 'helix' | 'tarangini' | 'circuitron' | 'xpectra' | 'panthers';

export interface Event {
  id: string;                    // kebab-case slug
  name: string;
  tagline: string;               // anime-flavored subtitle
  category: EventCategory;
  club: ClubId;
  description: string;
  venue: string;
  date: string | null;           // null = TBA
  time: string | null;           // null = TBA
  duration: string;
  format: string;                // "Individual" | "Team of N" | "5v5" etc.
  teamSize: string;
  requirements: string[];
  rules: string[];
  coordinators: Coordinator[];
  posterUrl?: string;
  status: 'active' | 'cancelled' | 'tba';
}

export interface Coordinator {
  name: string;
  phone?: string;
}

export interface Club {
  id: ClubId;
  name: string;
  tagline: string;
  description: string;
  mission: string;
  logoUrl: string;
  accentColor: string;
  eventCount: number;
}

export interface CategoryConfig {
  id: EventCategory;
  label: string;
  icon: string;           // Lucide icon name or emoji
  description: string;
  accentColor: string;
}
```

---

## 4. COMPONENT TREE

```
<App>
└── <PageWrapper>           [global: bg, fonts, ScrollProvider]
    ├── <Navbar>            [sticky, transparent → blur on scroll]
    │   ├── Logo
    │   ├── NavLinks        [#events, #clubs, #gallery, #schedule]
    │   └── <CTAButton>     ["Register Now" — accent gradient]
    │
    └── <main>
        ├── <Hero>                      [SECTION 1]
        │   ├── <ParallaxLayer layer=0> [deep bg — anime art]
        │   ├── <ParallaxLayer layer=1> [mid — floating elements]
        │   ├── <ParallaxLayer layer=2> [front — text content]
        │   │   ├── EventBadge          ["Provenance 6.0"]
        │   │   ├── HeroHeadline        ["INFINITE REALMS"]
        │   │   ├── HeroSub             ["The Anime Protocol"]
        │   │   ├── FestDate            ["May 14–15, 2026 | RVSCET"]
        │   │   └── HeroCTAs
        │   │       ├── <CTAButton primary> [Register Now]
        │   │       └── <CTAButton ghost>   [Download Brochure]
        │   └── <CountdownTimer>        [days/hours/mins/secs to fest]
        │
        ├── <ClubsGrid>                 [SECTION 2]
        │   └── ClubCard × 5
        │       ├── ClubLogo
        │       ├── ClubName
        │       ├── ClubTagline
        │       ├── ClubDescription
        │       ├── ClubMission
        │       └── EventCountBadge
        │
        ├── <EventPool>                 [SECTION 3]
        │   ├── SectionHeader
        │   ├── <CategoryFilter>
        │   │   └── CategoryChip × 7   [All | Tech & AI | Gaming | Robotics | Cultural | Media | Sports]
        │   └── <EventGrid>
        │       └── <EventCard> × N    [filtered by activeCategory]
        │           ├── EventPoster    [lazy, WebP]
        │           ├── CategoryBadge
        │           ├── ClubBadge
        │           ├── EventName
        │           ├── EventTagline
        │           ├── MetaStrip      [format | duration | venue]
        │           └── DetailsButton  [→ /events/:slug]
        │
        ├── <GalleryMasonry>           [SECTION 4]
        │   ├── SectionHeader
        │   ├── FilterTabs             [All | 5.0 | Campus | Teams]
        │   └── MasonryGrid            [react-masonry-css]
        │       └── GalleryItem × N
        │
        ├── <VideoEmbeds>              [SECTION 5]
        │   ├── SectionHeader          ["The Hype Archive"]
        │   └── VideoGrid
        │       └── VideoThumbnail × N [lazy YT embed]
        │
        └── <Footer>
            ├── FooterLogo
            ├── FooterLinks
            ├── SocialIcons
            └── CopyrightBar
```

---

## 5. STATE MANAGEMENT — EVENT FILTER

### 5.1 Zustand Store

```typescript
// /src/store/eventFilterStore.ts

import { create } from 'zustand';
import { EventCategory } from '../types';

interface EventFilterState {
  activeCategory: EventCategory | 'all';
  setCategory: (category: EventCategory | 'all') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  filteredCount: number;
  setFilteredCount: (n: number) => void;
}

export const useEventFilterStore = create<EventFilterState>((set) => ({
  activeCategory: 'all',
  setCategory: (category) => set({ activeCategory: category }),
  searchQuery: '',
  setSearchQuery: (q) => set({ searchQuery: q }),
  filteredCount: 0,
  setFilteredCount: (n) => set({ filteredCount: n }),
}));
```

### 5.2 Hook — Derived Filtered Events

```typescript
// /src/hooks/useEventFilter.ts

import { useMemo } from 'react';
import { useEventFilterStore } from '../store/eventFilterStore';
import { EVENTS } from '../data/events';
import type { Event } from '../types';

export function useEventFilter(): Event[] {
  const { activeCategory, searchQuery } = useEventFilterStore();

  return useMemo(() => {
    let results = EVENTS.filter((e) => e.status !== 'cancelled');

    if (activeCategory !== 'all') {
      results = results.filter((e) => e.category === activeCategory);
    }

    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.tagline.toLowerCase().includes(q)
      );
    }

    return results;
  }, [activeCategory, searchQuery]);
}
```

### 5.3 CategoryFilter Component

```typescript
// /src/components/home/EventPool/CategoryFilter.tsx

import { motion } from 'framer-motion';
import { useEventFilterStore } from '../../../store/eventFilterStore';
import { CATEGORIES } from '../../../data/categories';

export function CategoryFilter() {
  const { activeCategory, setCategory } = useEventFilterStore();

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-10">
      {/* ALL chip */}
      <CategoryChip
        label="All Events"
        id="all"
        active={activeCategory === 'all'}
        onClick={() => setCategory('all')}
        color="#C167FF"
      />
      {CATEGORIES.map((cat) => (
        <CategoryChip
          key={cat.id}
          label={cat.label}
          id={cat.id}
          active={activeCategory === cat.id}
          onClick={() => setCategory(cat.id)}
          color={cat.accentColor}
          icon={cat.icon}
        />
      ))}
    </div>
  );
}

function CategoryChip({ label, active, onClick, color, icon }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      style={{
        borderColor: active ? color : 'rgba(255,255,255,0.1)',
        backgroundColor: active ? `${color}22` : 'transparent',
        boxShadow: active ? `0 0 16px ${color}55` : 'none',
      }}
      className="px-5 py-2 rounded-full border text-sm font-medium
                 font-mono transition-all duration-200 flex items-center gap-2"
    >
      {icon && <span>{icon}</span>}
      <span style={{ color: active ? color : '#B0B0CC' }}>{label}</span>
    </motion.button>
  );
}
```

### 5.4 URL Sync (Optional — Recommended for Deep Links)

```typescript
// Sync filter state to URL query param for shareable links:
// /events?category=robotics-iot

// In EventPool.tsx:
import { useSearchParams } from 'react-router-dom'; // or next/navigation

const [searchParams, setSearchParams] = useSearchParams();
const categoryFromURL = searchParams.get('category') as EventCategory | 'all';

useEffect(() => {
  if (categoryFromURL) setCategory(categoryFromURL);
}, []);

// On chip click:
setSearchParams({ category: selectedCategory });
```

---

## 6. PAGE SECTIONS — DETAILED SPECS

### 6.1 Hero Section

**Layout:** Full viewport height (100svh). Parallax three-layer system.

```
LAYER 0 (speed: -0.3) — Background
  - Asset: anime landscape illustration (dark, purple/teal atmospheric)
  - Dimensions: 1920×1080px minimum, WebP
  - Overlay: gradient-hero (linear from #050505 edges to transparent center)
  - Opacity: 0.65 (art visible but not distracting)

LAYER 1 (speed: -0.15) — Mid Elements
  - Assets: floating geometric/rune elements (PNG with alpha)
  - Optional: particle system (tsParticles, 20 particles max, low perf cost)

LAYER 2 (speed: 0) — Foreground Text Content
  - Centered column layout
  - z-index: 10
```

**Text Content Stack:**

```
[BADGE]           PROVENANCE 6.0 • MAY 14–15 • RVSCET
[H1 DISPLAY]      INFINITE REALMS
[H2 SUBTITLE]     THE ANIME PROTOCOL
[BODY]            A multi-club inter-college fest powered by Helix v2.0
[META]            5 Clubs  ·  30+ Events  ·  ₹[Prize Pool]

[CTA ROW]
  [PRIMARY CTA]   [ ⚡ Register Now ]
                  bg: gradient-cta-primary
                  hover: gradient-cta-hover + glow-accent
                  → /register OR external Google Form URL

  [GHOST CTA]     [ ↓ Download Brochure ]
                  bg: transparent
                  border: color-border-active
                  hover: bg rgba(193,103,255,0.1)
                  → download PDF (link to /assets/brochure.pdf)

[COUNTDOWN]       [ DD ] [ HH ] [ MM ] [ SS ]
                  Days   Hrs   Mins  Secs
                  font: font-mono, text-3xl
                  labels: text-xs, text-muted
                  Target: 2026-05-14T09:00:00+05:30
```

**Scroll Indicator:** Animated chevron or "SCROLL" text at bottom center.

---

### 6.2 Clubs Section

**Layout:** Horizontal scroll on mobile, 5-column CSS Grid on desktop (min 280px per card, max 1fr).

**Club Data:**

```typescript
// /src/data/clubs.ts

export const CLUBS: Club[] = [
  {
    id: 'helix',
    name: 'Helix v2.0',
    tagline: 'Code. Create. Conquer.',
    description:
      'The premier technical society of RVSCET, Helix drives innovation across AI, development, design, and competitive programming. Helix owns the core technical event pool of Provenance 6.0.',
    mission:
      'To build a culture of technical excellence and creative problem-solving that prepares students for the challenges of the real world.',
    logoUrl: '/assets/images/clubs/helix-logo.svg',
    accentColor: '#C167FF',
    eventCount: 8,
  },
  {
    id: 'tarangini',
    name: 'Tarangini',
    tagline: 'Art is the language of the soul.',
    description:
      'Tarangini is the cultural and performing arts committee of RVSCET, breathing life into the fest through dance, music, fashion, and traditional art forms.',
    mission:
      'To celebrate India\'s rich cultural heritage while providing a stage for every creative voice on campus.',
    logoUrl: '/assets/images/clubs/tarangini-logo.svg',
    accentColor: '#FF66FF',
    eventCount: 7,
  },
  {
    id: 'circuitron',
    name: 'Circuitron',
    tagline: 'Build. Automate. Dominate.',
    description:
      'The robotics and electronics division of RVSCET, Circuitron hosts hands-on engineering challenges that push the boundaries of hardware design and automation.',
    mission:
      'To inspire a generation of hardware engineers and robotics innovators who can bring ideas from concept to circuit.',
    logoUrl: '/assets/images/clubs/circuitron-logo.svg',
    accentColor: '#15E6D8',
    eventCount: 5,
  },
  {
    id: 'xpectra',
    name: 'Xpectra',
    tagline: 'Capture. Create. Captivate.',
    description:
      'Xpectra is the media and visual storytelling club of RVSCET, running competitions in photography, short-form video, AI filmmaking, and culinary arts.',
    mission:
      'To empower visual storytellers and content creators who can communicate ideas with impact in the age of digital media.',
    logoUrl: '/assets/images/clubs/xpectra-logo.svg',
    accentColor: '#9F8AFF',
    eventCount: 4,
  },
  {
    id: 'panthers',
    name: 'RVS Panthers',
    tagline: 'Sweat. Compete. Elevate.',
    description:
      'The sports committee of RVSCET, RVS Panthers organizes the athletic backbone of Provenance 6.0 — from cricket and basketball to tug of war and arm wrestling.',
    mission:
      'To cultivate physical excellence and sporting spirit, proving that a technical mind is at its strongest in a fit body.',
    logoUrl: '/assets/images/clubs/panthers-logo.svg',
    accentColor: '#FF4655',
    eventCount: 6,
  },
];
```

**Club Card UI:**

```
┌─────────────────────────────────────┐
│  [LOGO — 48×48px, centered]         │
│  Club Name       [EVENT COUNT CHIP] │
│  Tagline (italic, muted)            │
│  ─────────────────────────────────  │
│  Description (2-3 lines, clamp)     │
│  ─────────────────────────────────  │
│  MISSION                            │
│  Mission text (2 lines, muted)      │
│  ─────────────────────────────────  │
│  [ View Events → ]                  │ ← scrolls to EventPool + sets filter
└─────────────────────────────────────┘
Border: 1px var(--color-border-subtle)
Hover:  border-color → club.accentColor
        box-shadow   → glow with club.accentColor
Transition: 300ms ease
```

---

### 6.3 Event Pool — Category Filter + Cards

**Category Definitions:**

```typescript
// /src/data/categories.ts

export const CATEGORIES: CategoryConfig[] = [
  {
    id: 'tech-ai',
    label: 'Tech & AI',
    icon: '⚡',
    description: 'DSA, Prompt Engineering, Graphic Design, Resume Challenge, Quiz',
    accentColor: '#C167FF',
  },
  {
    id: 'gaming',
    label: 'Gaming',
    icon: '🎮',
    description: 'PC FPS, Mobile Battle Royale',
    accentColor: '#FF66FF',
  },
  {
    id: 'robotics-iot',
    label: 'Robotics & IoT',
    icon: '🤖',
    description: 'Robo Race, Robo War, Robo Soccer, IoT Design, Bridge the Gap',
    accentColor: '#15E6D8',
  },
  {
    id: 'cultural',
    label: 'Cultural',
    icon: '🎭',
    description: 'Dance, Music, Rangoli, Fashion, Street',
    accentColor: '#FF4655',
  },
  {
    id: 'media',
    label: 'Media',
    icon: '📸',
    description: 'Photography, Reel Making, AI Film Making',
    accentColor: '#9F8AFF',
  },
  {
    id: 'sports',
    label: 'Sports',
    icon: '🏆',
    description: 'Cricket, Basketball, Volleyball, Football, Arm Wrestling',
    accentColor: '#DACAB2',
  },
  {
    id: 'culinary',
    label: 'Culinary',
    icon: '🍱',
    description: 'Food Without Fire',
    accentColor: '#FF8C00',
  },
];
```

**Event Card Animation (Framer Motion):**

```typescript
// Stagger children on category switch
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// AnimatePresence wraps the grid to handle removal animations
// key={activeCategory} on the grid forces re-mount on filter change
```

**Event Card Layout:**

```
┌────────────────────────────────────┐
│  [EVENT POSTER — 400×220px WebP]   │  aspect-ratio: 16/9, object-cover
│  [CATEGORY CHIP overlay — top-L]   │  absolute, backdrop-blur
├────────────────────────────────────┤
│  [CLUB CHIP — top-R of content]    │
│  Event Name (font-display, xl)     │
│  Tagline (italic, muted, sm)       │
│  ──────────────────────────────    │
│  📍 Venue    ⏱ Duration   👥 Format │
│  ──────────────────────────────    │
│  [ View Details ]                  │  → /events/:slug
└────────────────────────────────────┘
```

---

### 6.4 Gallery Section (Masonry Grid)

**Library:** `react-masonry-css`

```typescript
// breakpointColumnsObj for react-masonry-css
const breakpointColumns = {
  default: 4,
  1280: 3,
  768:  2,
  480:  1,
};
```

**Image Requirements:**
- Format: WebP (convert all source JPGs/PNGs before deploy)
- Sizes: max 800px wide, 85% quality
- Lazy load: `loading="lazy"` + `decoding="async"`
- Hover: overlay with date/caption, scale(1.02)
- Lightbox: `yet-another-react-lightbox` (lightweight, swipeable)

**Filter Tabs:** `All | Provenance 5.0 | Campus Life | Team Photos`

---

### 6.5 Video Embeds

**Pattern:** YouTube Facade (load iframe only on click) — critical for performance.

```typescript
// VideoThumbnail.tsx — facade pattern
const [isLoaded, setIsLoaded] = useState(false);

return (
  <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
       onClick={() => setIsLoaded(true)}>
    {!isLoaded ? (
      <>
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <PlayButton />
      </>
    ) : (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="w-full h-full"
      />
    )}
  </div>
);
```

**Section Content:**
- Title: "The Hype Archive"
- Sub: "Relive Provenance. Get hyped for 6.0."
- Videos: Provenance 5.0 aftermovie, event highlights, team reel
- YouTube IDs: `[TBA — to be provided by media team]`

---

### 6.6 Footer

```
┌───────────────────────────────────────────────────────┐
│  PROVENANCE 6.0  [Logo]    |  Quick Links             │
│  Infinite Realms           |  Events  Schedule        │
│  Helix v2.0 × RVSCET       |  Gallery  Register       │
│                            |                          │
│  Contact: helix@rvscet.ac.in                         │
│  Social: [Instagram] [LinkedIn] [GitHub]             │
├───────────────────────────────────────────────────────┤
│  © 2026 Helix v2.0, RVSCET. Built by the Web Team.   │
└───────────────────────────────────────────────────────┘
```

---

## 7. FULL EVENT MASTER DATA

### 7.1 Category Mapping

| Category | Events |
|----------|--------|
| **Tech & AI** | Eminence in Prompt, Shinobi Script, Mangaka's Edge, Hunter Rank: PRO, Sage Mode: Trivia |
| **Gaming** | Frag-Ops: CS:GO Elite, Trigger-Point: BGMI Arena |
| **Robotics & IoT** | Robo Race, Robo Soccer, Robo War, IoT Design, Bridge the Gap |
| **Cultural** | Solo/Duo Singing, Solo/Duo/Group Dance, Street Reloaded, Paper Dance, Paper Dress Making, Face Painting, Ramp Walk, **Colors of Konoha** *(Helix-managed, cultural category)*, Musical Chair |
| **Media** | Photography, Reel Making, AI Film Making |
| **Sports** | Gully Cricket (Boys/Girls), Basketball (Boys/Girls), Volleyball (Boys/Girls), Football (Boys), Tug of War, Arm Wrestling |
| **Culinary** | Khana Khazana |
| ~~Genjutsu UI~~ | **CANCELLED — DO NOT RENDER** |

### 7.2 Event Data Sample (expand for all events)

```typescript
// /src/data/events.ts  — PARTIAL SAMPLE (expand to all events)

export const EVENTS: Event[] = [
  // ─── TECH & AI ────────────────────────────────────────────────────────
  {
    id: 'eminence-in-prompt',
    name: 'Eminence in Prompt',
    tagline: 'Prompt-a-thon | Isekai World-Building',
    category: 'tech-ai',
    club: 'helix',
    description: 'Step into the role of a world-builder in this Isekai-inspired AI generation challenge. As the master of "Divine Command," manifest high-quality visuals from another realm using Generative AI. Navigate the line between chaos and creation — refining iterations into a singular masterpiece.',
    venue: 'TCS Lab, 1st Floor, B2 Block',
    date: '2026-05-14',
    time: 'TBA',
    duration: '60 min',
    format: 'Individual',
    teamSize: '1',
    requirements: [
      'Smartphone or Laptop with internet access',
      'Active account on permitted AI platform',
    ],
    rules: [
      'Permitted tools: Stable Diffusion, Midjourney, DALL-E, Adobe Firefly',
      'Document prompt engineering iterations (the Prompt Chain)',
      'Final output must be generated on-site within the window',
      'Pre-generated images or external storage strictly prohibited',
      'Images must adhere to the theme revealed at event start',
    ],
    coordinators: [
      { name: 'Satish Verma', phone: '6204477023' },
      { name: 'Umang Sharma', phone: '' },
      { name: 'Rishi Raj', phone: '9953534520' },
      { name: 'Priyanshu Ghosh', phone: '7549141757' },
    ],
    posterUrl: '/assets/images/events/eminence-in-prompt.webp',
    status: 'active',
  },
  {
    id: 'shinobi-script',
    name: 'Shinobi Script',
    tagline: 'DSA Challenge | Ninjutsu Strategy',
    category: 'tech-ai',
    club: 'helix',
    description: 'The ultimate test of logic and efficiency. Navigate complex algorithms under strict time limits. Only the sharpest code-ninjas with the best syntax-jutsu will survive this elimination round.',
    venue: 'TCS Lab, 1st Floor, B2 Block',
    date: '2026-05-14',
    time: 'TBA',
    duration: '2 hrs',
    format: 'Individual',
    teamSize: '1',
    requirements: ['Laptop + Charger (mandatory)'],
    rules: [
      'Languages: C, C++, Java, Python',
      'Solutions must pass hidden test cases within time and memory limits',
      'No internet access except official competition portal',
      'AI coding assistants (Copilot, ChatGPT) result in instant ban',
      'Tiebreaker: lowest total submission time',
    ],
    coordinators: [],
    posterUrl: '/assets/images/events/shinobi-script.webp',
    status: 'active',
  },
  {
    id: 'genjutsu-ui',
    name: 'Genjutsu UI',
    tagline: 'Web Design | CANCELLED',
    category: 'tech-ai',
    club: 'helix',
    description: 'CANCELLED',
    venue: 'TCS Lab, 1st Floor, B2 Block',
    date: null,
    time: null,
    duration: '90 min',
    format: 'Individual',
    teamSize: '1',
    requirements: [],
    rules: [],
    coordinators: [],
    status: 'cancelled',   // ← filter excludes this automatically
  },
  {
    id: 'mangakas-edge',
    name: "Mangaka's Edge",
    tagline: 'Graphic Design | Creative Craft',
    category: 'tech-ai',
    club: 'helix',
    description: 'A high-stakes brand identity battle. Design viral posters and logos from scratch. No pre-made templates — only pure digital craftsmanship.',
    venue: 'AI Lab, 2nd Floor, B2 Block',
    date: '2026-05-14',
    time: 'TBA',
    duration: '90 min',
    format: 'Individual',
    teamSize: '1',
    requirements: [
      'Laptop with Photoshop, Illustrator, Figma, or Canva (empty canvas only)',
    ],
    rules: [
      'Tools: Adobe Suite, Figma, or Canva (empty canvas only)',
      'No direct copy-paste of existing anime artwork (plagiarism)',
      'Submit in PDF and PNG formats',
      'Must present layer structure to verify authenticity',
      'Design must include Provenance 6.0 branding elements provided on-day',
    ],
    coordinators: [],
    posterUrl: '/assets/images/events/mangakas-edge.webp',
    status: 'active',
  },
  {
    id: 'hunter-rank-pro',
    name: 'Hunter Rank: PRO',
    tagline: 'ATS Resume Challenge | RPG Career Level-Up',
    category: 'tech-ai',
    club: 'helix',
    description: 'Powered by HireTip. Battle recruitment bots by building a high-scoring ATS-friendly resume. Claim your S-Rank professional status on the HireTip leaderboard.',
    venue: 'TBA',
    date: '2026-05-15',
    time: 'TBA',
    duration: '60 min',
    format: 'Individual',
    teamSize: '1',
    requirements: ['Smartphone or Laptop with internet', 'HireTip account (pre-create)'],
    rules: [
      'Resumes must be generated or uploaded via HireTip platform',
      'Evaluation based on ATS compatibility score, keyword density, layout',
      'Use official college email for registration',
      'Graphical/multi-column resumes not ATS-friendly will be penalized',
    ],
    coordinators: [],
    posterUrl: '/assets/images/events/hunter-rank.webp',
    status: 'active',
  },
  {
    id: 'sage-mode-trivia',
    name: 'Sage Mode: Trivia',
    tagline: 'Tech Quiz | Knowledge & Wisdom',
    category: 'tech-ai',
    club: 'helix',
    description: 'A deep dive into IT, AI, Hardware, and Tech History. Test your Sage Mode knowledge through written prelims and high-speed buzzer finals.',
    venue: 'TBA',
    date: '2026-05-15',
    time: 'TBA',
    duration: '~2 hrs',
    format: 'Team of 2',
    teamSize: '2',
    requirements: ['No electronic devices permitted during event'],
    rules: [
      'Team size: Exactly 2 members',
      'Rounds: Written prelims → Stage-based buzzer finals',
      'No smartwatches or smartphones during the quiz',
      'Topics: IT Trends, Computer History, AI, Hardware, Otaku Tech Lore',
      "Quizmaster's decision is final",
    ],
    coordinators: [],
    posterUrl: '/assets/images/events/sage-mode.webp',
    status: 'active',
  },

  // ─── GAMING ────────────────────────────────────────────────────────────
  {
    id: 'frag-ops-csgo',
    name: 'Frag-Ops: CS:GO Elite',
    tagline: 'PC Gaming | Tactical 5v5 FPS',
    category: 'gaming',
    club: 'helix',
    description: 'Tactical 5v5 FPS warfare. Coordinate with your squad to dominate the map pool. High-intensity knockout format where strategy meets lightning-fast reflexes.',
    venue: 'Gaming Arena / On-site',
    date: '2026-05-14',
    time: 'TBA',
    duration: 'TBD',
    format: '5v5 Team',
    teamSize: '5',
    requirements: [
      'Own Laptop + Mouse + Keyboard + Headset (mandatory — nothing provided)',
    ],
    rules: [
      'Format: 5v5 Tactical (Competitive Settings)',
      'Own peripherals mandatory',
      'Scripts, wall-hacks, aim-assist = permanent ban',
      'Map pool: Dust II, Mirage, Inferno, Nuke, Overpass (Veto applies)',
      'Standard timeout rules followed',
    ],
    coordinators: [],
    posterUrl: '/assets/images/events/frag-ops.webp',
    status: 'active',
  },
  {
    id: 'trigger-point-bgmi',
    name: 'Trigger-Point: BGMI Arena',
    tagline: 'Mobile Gaming | Battle Royale Survival',
    category: 'gaming',
    club: 'helix',
    description: 'A Battle Royale survival sprint. Pure mobile skill — no emulators or tablets. Squads of 4 drop in, only the elite remain standing.',
    venue: 'Mobile Lounge / On-site',
    date: '2026-05-14',
    time: 'TBA',
    duration: 'TBD',
    format: 'Squad of 4',
    teamSize: '4',
    requirements: ['Own Smartphone + Earphones (mandatory)'],
    rules: [
      'Platform: Mobile Smartphones only',
      'No emulators, iPads, or gaming tablets',
      'External triggers, cooling fans with software, GFX tools = banned',
      'Points: Placement + Kill points',
      'Organizers not responsible for lag/connectivity issues',
    ],
    coordinators: [],
    posterUrl: '/assets/images/events/trigger-point.webp',
    status: 'active',
  },

  // ─── ROBOTICS & IOT ────────────────────────────────────────────────────
  {
    id: 'robo-race',
    name: 'Robo Race',
    tagline: 'Obstacle Race | Build & Beat',
    category: 'robotics-iot',
    club: 'circuitron',
    description: 'Build a robot capable of completing an obstacle track in minimum time. Single attempt per team, battery-operated robots only.',
    venue: 'Front of B1 Building',
    date: 'TBA',
    time: 'TBA',
    duration: 'TBA',
    format: 'Team of 1–4',
    teamSize: '1-4',
    requirements: ['Battery-operated robot (max 30×30cm, 1–3kg)'],
    rules: [
      'One robot per team',
      'No touching robot during run (penalty applies)',
      'Size: max 30cm × 30cm; Weight: 1–3 kg',
      'Reset allowed at checkpoints',
      'Avoid track damage',
    ],
    coordinators: [
      { name: 'Prem Shaw', phone: '6206735402' },
      { name: 'Ajay Nayek', phone: '6201322650' },
    ],
    status: 'active',
  },
  {
    id: 'robo-war',
    name: 'Robo War',
    tagline: 'Robot Combat | Knockout Battles',
    category: 'robotics-iot',
    club: 'circuitron',
    description: 'Build robots capable of battling and disabling opponents. Win by pushing, flipping, or disabling. Wired or wireless control allowed.',
    venue: 'College Stage',
    date: 'TBA',
    time: 'TBA',
    duration: 'TBA',
    format: 'Team of 2–4',
    teamSize: '2-4',
    requirements: ['Robot max weight: 5kg'],
    rules: [
      'Allowed: pushing, lifting, flipping',
      'Prohibited: fire, explosives, liquids',
      'No human interference during match',
      'Arena damage = disqualification',
    ],
    coordinators: [
      { name: 'Abhay Prajapati', phone: '9508918090' },
      { name: 'Shaikh Khushboo', phone: '8797767565' },
    ],
    status: 'active',
  },
  {
    id: 'robo-soccer',
    name: 'Robo Soccer',
    tagline: 'Robot Football | Score & Strategize',
    category: 'robotics-iot',
    club: 'circuitron',
    description: 'Design robots to play soccer and score goals using strategy and control. Knockout/league matches, 10 minutes per match.',
    venue: 'Workshop',
    date: 'TBA',
    time: 'TBA',
    duration: '10 min/match',
    format: 'Team of 2–4',
    teamSize: '2-4',
    requirements: ['Robot following size/weight constraints'],
    rules: [
      'No manual interference',
      'No damage to arena or opponent robots',
      'Highest goals wins; Tie → extra time/penalty',
    ],
    coordinators: [
      { name: 'Ajay Nayek', phone: '6201322650' },
      { name: 'Joydav Kr. Mahato', phone: '6200419640' },
    ],
    status: 'active',
  },
  {
    id: 'iot-design',
    name: 'IoT Design',
    tagline: 'Smart Solutions | Real-World Impact',
    category: 'robotics-iot',
    club: 'circuitron',
    description: 'Design and develop innovative IoT-based solutions using sensors, smart devices, and connectivity to solve real-world problems.',
    venue: 'B1 Building (Electronics Lab)',
    date: 'TBA',
    time: 'TBA',
    duration: 'TBA',
    format: 'Team of 3',
    teamSize: '3',
    requirements: ['Working prototype or feasibility demo'],
    rules: [
      'Must be based on IoT (sensors, connectivity, data processing)',
      'Internet usage allowed during development',
      'Plagiarism strictly prohibited',
    ],
    coordinators: [
      { name: 'Subha Pain', phone: '8709658260' },
      { name: 'Rohini Kumari', phone: '8825239918' },
    ],
    status: 'active',
  },
  {
    id: 'bridge-the-gap',
    name: 'Bridge the Gap',
    tagline: 'Civil Challenge | Load-Bearing Design',
    category: 'robotics-iot',
    club: 'circuitron',
    description: 'Design a bridge model that sustains maximum load using max 200 pop sticks and thread. No glue allowed.',
    venue: 'B4 Building (Drawing Lab)',
    date: 'TBA',
    time: 'TBA',
    duration: 'TBA',
    format: 'Team of 3–4',
    teamSize: '3-4',
    requirements: [
      'Max 200 pop sticks, thread (provided)',
      'Dimensions: W 18–25cm, H 18–25cm, L 40–50cm',
    ],
    rules: [
      'No pinning/clamping',
      'Bridge must allow loading bar',
      'Must follow dimension constraints (±1cm tolerance)',
    ],
    coordinators: [
      { name: 'Ganesh Gope', phone: '8455075264' },
      { name: 'Jaysingh Murmu', phone: '8521644420' },
    ],
    status: 'active',
  },

  // ─── CULTURAL ──────────────────────────────────────────────────────────
  {
    id: 'colors-of-konoha',
    name: 'Colors of Konoha',
    tagline: 'Rangoli | Cultural Fusion Art',
    category: 'cultural',
    club: 'helix',           // managed by Helix, categorized cultural
    description: 'A fusion of tradition and the Anime Protocol. Teams create intricate floor art blending Indian cultural patterns with anime-themed visual elements.',
    venue: 'Quadrangle / TBA',
    date: 'TBA',
    time: 'TBA',
    duration: '90 min',
    format: 'Team of 2–5',
    teamSize: '2-5',
    requirements: ['Own colors, materials — nothing provided'],
    rules: [
      'Theme: Fusion of Traditional Indian Patterns and Anime Lore',
      'Bring own colors and cleaning materials',
      'Printed references allowed; direct tracing prohibited',
    ],
    coordinators: [],
    posterUrl: '/assets/images/events/colors-of-konoha.webp',
    status: 'active',
  },
  {
    id: 'solo-duo-group-dance',
    name: 'Solo / Duo / Group Dance',
    tagline: 'Dance | Main Stage',
    category: 'cultural',
    club: 'tarangini',
    description: 'A versatile stage event for individuals or teams to perform choreographed routines across three formats: solo, duo, or group.',
    venue: 'Main Stage',
    date: 'TBA', time: 'TBA',
    duration: 'Solo: 2–3 min | Duo: 3–5 min | Group: 4–6 min',
    format: 'Solo / Duo / Group',
    teamSize: '1+',
    requirements: ['Music submitted in advance (MP3 / pen drive)'],
    rules: ['Submit music before event day'],
    coordinators: [
      { name: 'Deepal Kumari', phone: '8581915569' },
      { name: 'Anshu Sharma', phone: '8709618562' },
    ],
    status: 'active',
  },
  {
    id: 'solo-duo-singing',
    name: 'Solo / Duo Singing',
    tagline: 'Vocal Performance | Main Stage',
    category: 'cultural',
    club: 'tarangini',
    description: 'A talent showcase for vocalists to perform a non-offensive song. Self-accompaniment (guitar, keyboard, etc.) is allowed.',
    venue: 'Main Stage',
    date: 'TBA', time: 'TBA',
    duration: '2:30–3:00 min',
    format: 'Solo / Duo',
    teamSize: '1-2',
    requirements: [],
    rules: ['Lyrics must be decent and non-offensive', 'Time limit: 2:30–3:00 minutes'],
    coordinators: [
      { name: 'Muskan Xalxo', phone: '6202293536' },
      { name: 'Sweta Kumari', phone: '9060108628' },
    ],
    status: 'active',
  },
  {
    id: 'street-reloaded',
    name: 'Street Reloaded',
    tagline: 'Impromptu Dance | Basketball Court',
    category: 'cultural',
    club: 'tarangini',
    description: 'A fast-paced dance challenge where participants perform to a random song on-the-spot with a 30–50 second limit.',
    venue: 'Basketball Court',
    date: 'TBA', time: 'TBA',
    duration: '30–50 sec',
    format: 'Individual / Duo',
    teamSize: '1-2',
    requirements: [],
    rules: ['Random song played on spot', 'Time limit: 30–50 seconds'],
    coordinators: [
      { name: 'Sneha Kumari', phone: '9798356931' },
      { name: 'Meghna Kumari', phone: '9332343696' },
    ],
    status: 'active',
  },
  {
    id: 'ramp-walk',
    name: 'Ramp Walk',
    tagline: 'Fashion | Main Stage',
    category: 'cultural',
    club: 'tarangini',
    description: 'Fashion and modeling event for individuals or groups. Theme-based runway walk — themes include Cyberpunk, Retro Glamour, Cultural, Junk to Funk, and more.',
    venue: 'Main Stage',
    date: 'TBA', time: 'TBA',
    duration: 'TBA',
    format: 'Solo / Duo / Group',
    teamSize: '1+',
    requirements: ['Music submitted in advance'],
    rules: ['Costume and walk must match given theme', 'No vulgar or inappropriate content'],
    coordinators: [],
    status: 'active',
  },

  // ─── MEDIA ─────────────────────────────────────────────────────────────
  {
    id: 'photography',
    name: 'Photography Competition',
    tagline: 'Capture | Compose | Tell Stories',
    category: 'media',
    club: 'xpectra',
    description: 'Capture compelling visual stories through your lens. Individual event testing creativity, composition, and technical skill around a specific theme.',
    venue: 'TBA',
    date: '2026-05-14',
    time: 'TBA',
    duration: 'TBA',
    format: 'Individual',
    teamSize: '1',
    requirements: ['Camera or smartphone', 'JPG/PNG, HD resolution minimum'],
    rules: [
      'Follow given theme',
      'Basic editing only — no heavy manipulation',
      'Photo must be original (clicked by participant)',
      'No plagiarism or copied images',
    ],
    coordinators: [
      { name: 'Kaif Ansari', phone: '8969290599' },
      { name: 'Navin Pradhan', phone: '9334863034' },
    ],
    status: 'active',
  },
  {
    id: 'reel-making',
    name: 'Reel Making Competition',
    tagline: 'Short-Form Video | Instagram Reels',
    category: 'media',
    club: 'xpectra',
    description: 'Produce engaging 30–60 second vertical videos resonating with current trends. MP4 format, posted on Instagram with official tag and hashtag.',
    venue: 'TBA',
    date: '2026-05-14',
    time: 'TBA',
    duration: '30–60 sec output',
    format: 'Individual or Team of ≤4',
    teamSize: '1-4',
    requirements: ['MP4 output, 9:16 ratio', 'Instagram account (public)'],
    rules: [
      'Duration: 30–60 seconds',
      'Original content only; no copyright violation',
      'Upload to Instagram, tag official page, use given hashtag',
      'Keep profile public until results',
    ],
    coordinators: [
      { name: 'Saksham Kumar', phone: '7004352665' },
      { name: 'Sumit Kumar', phone: '9341523834' },
    ],
    status: 'active',
  },
  {
    id: 'ai-film-making',
    name: 'AI Film Making',
    tagline: 'Generative Cinema | Prompt-Directed',
    category: 'media',
    club: 'xpectra',
    description: 'Leverage generative AI tools to produce, direct, and edit a compelling 1–3 minute short film. Prompt engineering skills and creative vision define the winner.',
    venue: 'TBA',
    date: '2026-05-15',
    time: 'TBA',
    duration: '1–3 min output',
    format: 'Individual or Team of ≤3',
    teamSize: '1-3',
    requirements: ['MP4, 1080p minimum'],
    rules: [
      'Visual assets must be AI-generated',
      'Royalty-free music and voiceovers permitted',
      'Prompts must be original',
    ],
    coordinators: [
      { name: 'Rishi Raj', phone: '9955334520' },
      { name: 'Roshan Kumar', phone: '8084495001' },
    ],
    status: 'active',
  },

  // ─── CULINARY ──────────────────────────────────────────────────────────
  {
    id: 'khana-khazana',
    name: 'Khana Khazana',
    tagline: 'Food Without Fire | No-Cook Culinary',
    category: 'culinary',
    club: 'xpectra',
    description: 'A unique culinary challenge celebrating raw, cold, and no-cook dishes. Salads, sushi, wraps, sandwiches, fruit platters — no heating allowed.',
    venue: 'Seminar Hall',
    date: 'TBA',
    time: 'TBA',
    duration: '35 min prep + 10 min plating',
    format: 'Team of 3',
    teamSize: '3',
    requirements: [
      'All ingredients and utensils self-provided',
      'Working table provided by organizers only',
    ],
    rules: [
      'No pre-cooked, boiled, or pre-heated items',
      'Present a chart with dish name and ingredient list',
      'Clean working area before leaving',
    ],
    coordinators: [
      { name: 'Prem Shaw', phone: '6206735402' },
      { name: 'Aniket Kumar', phone: '6202888536' },
    ],
    status: 'active',
  },

  // ─── SPORTS ────────────────────────────────────────────────────────────
  {
    id: 'gully-cricket',
    name: 'Gully Cricket',
    tagline: 'Boys & Girls | Main Stage Ground',
    category: 'sports',
    club: 'panthers',
    description: 'Fast-paced 6-over match with a COSCO ball. Hitting over the boundary = out. Unique rule: a lone remaining batsman can continue alone.',
    venue: 'Main Stage Ground',
    date: 'TBA', time: 'TBA',
    duration: '6-over match',
    format: 'Team of 6',
    teamSize: '6',
    requirements: [],
    rules: [
      '6-over match; bowlers limited to 2-2-1-1 overs',
      'Hitting ball over boundary = automatic out',
      'Overthrow runs counted',
      'COSCO ball only',
      "Umpire's decision is final",
    ],
    coordinators: [],
    status: 'active',
  },
  {
    id: 'basketball',
    name: 'Basketball 3v3',
    tagline: 'Boys & Girls | Basketball Court',
    category: 'sports',
    club: 'panthers',
    description: 'High-energy 3-on-3 tournament. Three 5-minute quarters. 12–24 second shot clock. Sudden death overtime.',
    venue: 'Basketball Court',
    date: 'TBA', time: 'TBA',
    duration: '3 × 5 min quarters',
    format: 'Team of 3–5',
    teamSize: '3-5',
    requirements: [],
    rules: [
      'Ball must clear three-point line after every defensive play',
      'Team fouls (after 5) → free throws',
      'Tied after regulation → sudden death',
    ],
    coordinators: [],
    status: 'active',
  },
  {
    id: 'arm-wrestling',
    name: 'Arm Wrestling',
    tagline: 'Strength Test | 65–75 kg Class',
    category: 'sports',
    club: 'panthers',
    description: 'One-on-one upper body strength contest. Weight class: 65–75 kg. Strategy and technique matter as much as raw force.',
    venue: 'Near Main Stage',
    date: 'TBA', time: 'TBA',
    duration: 'TBA',
    format: 'Individual',
    teamSize: '1',
    requirements: ['Weight: 65–75 kg'],
    rules: [
      'No lifting elbow off table',
      'No using other hand for assistance',
      'No sudden dangerous jerks',
    ],
    coordinators: [],
    status: 'active',
  },
];
```

---

## 8. ASSET OPTIMIZATION GUIDELINES

### 8.1 Image Pipeline

```
SOURCE FORMAT  →  EXPORT FORMAT  →  MAX SIZE   →  TOOL
─────────────────────────────────────────────────────────
Event posters  →  WebP           →  150KB      →  Squoosh / vite-imagetools
Gallery JPGs   →  WebP           →  200KB      →  sharp
Hero layers    →  WebP           →  400KB      →  sharp
Club logos     →  SVG            →  10KB       →  SVGO
Thumbnails     →  WebP           →  40KB       →  sharp
```

**Vite config for image optimization:**

```typescript
// vite.config.ts
import { imagetools } from 'vite-imagetools';

export default {
  plugins: [imagetools()],
};

// Usage in component:
import heroImg from './hero-bg.jpg?format=webp&width=1920&quality=80';
```

### 8.2 Lazy Loading Strategy

```typescript
// All images below the fold: loading="lazy" + decoding="async"
// Hero images: loading="eager" (critical path)
// Gallery: IntersectionObserver-based loading OR react-masonry-css's built-in
// YouTube: facade pattern (never load iframe until click — saves ~300KB per video)
```

### 8.3 Bundle Optimization

```
- Code split by route (React.lazy + Suspense)
- Framer Motion: import only used components
  import { motion } from 'framer-motion';          // OK for components
  import { AnimatePresence } from 'framer-motion'; // import separately
- Zustand: minimal footprint (~1KB gzipped)
- react-masonry-css: lightweight (no heavy deps)
- react-scroll-parallax: ensure SSR disabled if using Next.js
```

### 8.4 Performance Targets

| Metric | Target |
|--------|--------|
| LCP (desktop) | < 2.0s |
| LCP (mobile 3G sim) | < 3.5s |
| CLS | < 0.1 |
| FID / INP | < 100ms |
| Lighthouse Score | ≥ 85 |
| Bundle Size (gzip) | < 300KB initial |

---

## 9. SITEMAP

```
provenance6.rvscet.ac.in/
│
├── /                           HOME
│   ├── #hero                   Hero + CTAs
│   ├── #clubs                  5 Clubs grid
│   ├── #events                 Event pool + category filter
│   ├── #gallery                Masonry gallery
│   ├── #videos                 Hype reels
│   └── #contact / #footer
│
├── /events                     ALL EVENTS (grid, filterable)
│
├── /events/[slug]              INDIVIDUAL EVENT PAGES
│   ├── /events/eminence-in-prompt
│   ├── /events/shinobi-script
│   ├── /events/mangakas-edge
│   ├── /events/hunter-rank-pro
│   ├── /events/sage-mode-trivia
│   ├── /events/frag-ops-csgo
│   ├── /events/trigger-point-bgmi
│   ├── /events/colors-of-konoha
│   ├── /events/robo-race
│   ├── /events/robo-war
│   ├── /events/robo-soccer
│   ├── /events/iot-design
│   ├── /events/bridge-the-gap
│   ├── /events/photography
│   ├── /events/reel-making
│   ├── /events/ai-film-making
│   ├── /events/khana-khazana
│   ├── /events/gully-cricket
│   ├── /events/basketball
│   ├── /events/arm-wrestling
│   └── ... (all active events)
│
├── /schedule                   SCHEDULE / TIMETABLE
│   (Table view: Date × Time × Event × Venue)
│
├── /gallery                    FULL GALLERY PAGE
│
├── /register                   REGISTRATION
│   (Redirect to Google Form OR embedded iframe)
│
├── /brochure                   BROCHURE DOWNLOAD
│   (PDF served from /public/brochure.pdf — triggers download)
│
└── /404                        404 PAGE
```

---

## 10. REPO DIFF VS. 5.0 BUILD

> Reference: https://github.com/mjgupta9135/Provenance-5.0-Build-Folder.git
> Dev team must clone and audit before starting 6.0 build.

| Component | 5.0 Status | 6.0 Action |
|-----------|------------|------------|
| Hero | Exists — check parallax impl | REUSE: update copy, assets, palette |
| Event Cards | Exists — Helix only | REFACTOR: add `category`, `club`, `status` fields |
| Event Filter | May be absent or basic | REBUILD: Zustand store + animated chips |
| Clubs Section | Absent (Helix-only) | NEW: 5-club grid |
| Gallery | Exists — check masonry | REUSE or UPGRADE to `react-masonry-css` |
| Video Section | May exist | REUSE: update video IDs |
| Routing | Check if SPA or multi-page | EXTEND: add `/events/:slug` dynamic route |
| Design Tokens | Old palette | REPLACE: new tokens (Section 2.1) |
| TypeScript | Check coverage | ENFORCE: add interfaces from Section 3.4 |
| Cancelled Event Handling | N/A | NEW: `status: 'cancelled'` — hide from all renders |

---

## 11. OPEN ITEMS & TBAs

| # | Item | Owner | Due |
|---|------|-------|-----|
| 1 | Confirm date/time for all TBA events | Aadarsh Sir / Prayog | ASAP |
| 2 | Venue confirmation for Hunter Rank, Sage Mode, Colors of Konoha | Event coordinators | Before print |
| 3 | All event poster assets (WebP format) | Design Lead (Sumit Ghosh) | 1 week before launch |
| 4 | Club logos in SVG format | Each club rep | 1 week before launch |
| 5 | YouTube video IDs for hype reel section | Media/Xpectra | Before go-live |
| 6 | Registration form URL (Google Form / Unstop) | Prayog Priyanshu | Before CTA goes live |
| 7 | Brochure PDF (final version) | Helix Board | Before go-live |
| 8 | Prize pool figures (for hero section) | Aadarsh Sir | Optional |
| 9 | Genjutsu UI — confirm CANCELLED, remove from all outputs | Tech Lead | Immediate |
| 10 | Sports events coordinator list (Panthers) | Panthers rep | Before event page gen |
| 11 | Tarangini full coordinator list | Tarangini rep | Before event page gen |
| 12 | Xpectra: Fest dates confirmed as May 14–15 | Xpectra | Confirmed ✅ |

---

```
END OF DOCUMENT
─────────────────────────────────────────────────────────────────
Document : Provenance 6.0 TRD v1.0
Prepared : Helix v2.0 Executive Board
For      : Web Development Team
Status   : DRAFT — Awaiting Tech Lead (Priyanshu Ghosh) sign-off
─────────────────────────────────────────────────────────────────
```
