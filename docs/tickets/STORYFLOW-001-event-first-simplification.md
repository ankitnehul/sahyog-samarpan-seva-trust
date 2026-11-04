# STORYFLOW-001 — Event-first structure, simpler site, richer motion and imagery

| Field | Value |
|---|---|
| Type | feat (information architecture, visual theme, motion) |
| Status | Open. Not started. |
| Repository | `sahyog-seva-foundation` (Next.js 16, React 19, Tailwind v4) |
| Work branch | `sahayog_samarpan_storyflow_redesign` |
| Branched from | `main` at `58b138c` (`feat(content): add Ustod Kamgar upcoming event and list all upcoming events`) |
| Parent tickets | [SANSTHA-001](./SANSTHA-001-sanstha-redesign.md), [CHATGPT1-001](./CHATGPT1-001-premium-bilingual.md), [MUSKAN-001](./MUSKAN-001-contrast-motion.md) (never built; this ticket supersedes it where they disagree) |
| Primary device | **Mobile phone, portrait.** Most visitors arrive from WhatsApp and Instagram links. Design and test at 360 px first, then scale up. |
| Deploy target | Vercel preview of this branch only. Do not merge to `main` until that preview is approved on a real phone. |
| Backend | **Out of scope.** No change to `sahyog-samarpan-seva-backend`, and the site does not call `/api/events`. |

## Why this ticket exists

The site is simple to read but expensive to maintain and flat to look at.

- **Repeated content.** Home (`app/page.tsx`, 305 lines) repeats what Our Work and Gallery already hold: a latest-visit layout, areas, links, an upcoming essay and a join band. The same bilingual heading and `data-enter` markup is hand-written in every section.
- **Content is split by file, not by event.** `data/events.ts`, `data/upcoming.ts`, `data/ongoing.ts` and `data/gallery.ts` all describe events in different shapes. Adding one event means touching several files.
- **One flat theme.** Paper, a hairline rule, more paper. Only the Home opening has a photograph. Motion is one fade-and-rise.
- **Six routes** for a small site, and five git branches carrying competing themes.

Simpler must not mean duller. The goal is fewer pages and fewer moving parts in the code, with more imagery, colour contrast and motion in what the visitor sees — and none of it may break or slow down on a phone.

## Approach: reverse-engineer the site from its events

Events are what the foundation does and what visitors come to see. Define the event first, then derive every page from it.

1. One event model feeds Home, Our Work, event detail pages and the gallery.
2. Each page is a view on that model, not a separate copy of the content.
3. Adding an event is one data entry plus its photographs.

## Precedence

When this ticket disagrees with an earlier ticket, this table wins. When two rows of this table disagree, the higher row wins.

| Question | Decision |
|---|---|
| Mobile first | Every layout, image and effect is designed at 360 px portrait first. If an effect cannot be made smooth and unbroken on a mid-range Android phone, it is desktop-only or dropped. |
| Background photographs | Allowed on any section band whose photograph is atmosphere, not the subject. Text sits on a scrim. Each background band names a **mobile source** (portrait or square, see Imagery) and a **desktop source**. Replaces MUSKAN-001's "Home and Gallery heading only". |
| `object-fit` | `cover` only on background bands and on the fixed-ratio thumbnails of the Our Work index (the full photograph is one tap away). Every other photograph that is the subject (event photo, gallery item, team portrait, lightbox) stays `contain` and uncropped. |
| Home length | Five sections at most (see Home below). Supersedes MUSKAN-001's six blocks. |
| Routes | Merged to four primary routes plus event detail pages. Old URLs redirect. |
| Motion | Transform and opacity only. CSS and `IntersectionObserver` first. A small animation library is allowed only if a listed effect cannot be done cleanly without it, and only after the reason is written in the PR. |
| Reduced motion | The `prefers-reduced-motion: reduce` rule in `app/globals.css` stays and covers every new effect. No looping or autoplay motion under reduce. |
| Statistics | Counters only from numbers computable from the data (events held, years active, photographs). Do not invent or hard-code impact figures. |
| Palette | Keep the seal colours and accessible text colours already in `app/globals.css`. |
| Content | Do not rewrite, translate, invent or delete Marathi or English copy, people, dates or contact details. Move it; do not edit it. |
| Backend and CMS | None. Content stays in code. |

## Out of scope

- Anything in `sahyog-samarpan-seva-backend`, API calls from the site, a CMS, or authentication.
- Turning donations on, adding a contact form, changing `html lang`, adding a language switcher.
- Rewriting event copy, About copy, team details or contact details.
- Stock photography or invented imagery. Backgrounds use photographs already in `public/images/`.
- New font families. Open Graph, sitemap and `robots` work.
- Merging this branch to `main`.

## Must keep working (carry over from `main`)

- Fonts (Tiro Devanagari Marathi, Mukta, Newsreader, Source Sans 3) and the colour tokens, including the accessible text colours. Body text 4.5:1 or better; large type on dark 3:1 or better. No white text on saffron, gold or WhatsApp green.
- The seal asset and its frames; favicon and Apple icon read `siteConfig.logo`.
- Skip link, `id="content"`, sticky header, `--header-offset` and anchor offsets, `aria-current` on the active link, the mobile menu behaviour (closes on navigation, on `Escape`, and when crossing the desktop breakpoint; body scroll lock; menu panel scrolls inside `max-h-[calc(100dvh-4.5rem)]`).
- Donate stays visible, `aria-disabled`, labelled coming soon. Join opens `siteConfig.membershipFormUrl`.
- `ContentImage` reserves space from `data/image-meta.ts`, defaults to `contain`, and shows "Photograph unavailable" on failure.
- Gallery dialog behaviour: Close, `Escape`, focus returns to the opener, captions in both scripts.
- Marathi leads, English follows. Devanagari is never letter-spaced or uppercased. `overflow-wrap: break-word` stays on `body`.
- Vercel Analytics and Speed Insights stay mounted.

## Simplicity rules

"Simpler" is measured, not felt. Every page must pass these:

1. **One idea per section.** A section has one heading, at most one short paragraph or list, and at most **one** call to action.
2. **One motion per section.** A section uses at most one entrance effect plus, on a photograph band, its background effect. No stacking of reveal, parallax and clip on the same block.
3. **Two card styles in the whole site:** an event card and a small info tile. No other card variants.
4. **One spacing scale.** Section padding `py-12` mobile / `py-20` desktop; content `max-w-7xl` with `px-4 sm:px-6 lg:px-8`. No one-off spacing.
5. **Three type sizes per section at most** (display, heading, body), all from `clamp()` so nothing jumps between breakpoints.
6. **No more than two paper sections in a row**, and no two photograph bands in a row.
7. **No hidden content on mobile.** Nothing a visitor needs sits in a carousel, a hover state or a horizontal scroller they might not notice.

## Mobile and layout safety rules

These are hard rules. The acceptance checklist tests each one.

### Viewport and overflow
- Full-height bands use `min-height` with `svh` (`min-h-[85svh]` on mobile), never `height` and never `100vh`. Content may make a band taller; it may never be clipped. This keeps the band stable when the mobile address bar shows and hides.
- Landscape phones (about 375 px tall) must still show the whole hero text and link without overlap; the band grows instead.
- No horizontal scroll at any width from **320 px** up: `document.documentElement.scrollWidth === document.documentElement.clientWidth` on every page. Any element that scales or translates (zoom, parallax) sits inside an `overflow-hidden` parent.
- Sticky header and any fixed control respect `env(safe-area-inset-*)` on notched phones.

### Text
- Body text at least 16 px on mobile (avoids iOS zoom on focus and keeps Marathi readable). Marathi body keeps its existing `leading-9`.
- Headings use `clamp()` with a mobile minimum that fits the longest current Marathi title on 320 px in at most three lines (test with `बालघर प्रकल्पातील अनाथ मुलांबरोबर आनंदमयी दिवाळी!`).
- Text never sits on an un-scrimmed photograph. On mobile the scrim covers the whole band, because the text block covers most of the screen.

### Touch
- Every tap target at least 44 × 44 px with 8 px between neighbours (nav, links, cards, dialog close, previous/next).
- Hover effects are wrapped in `@media (hover: hover) and (pointer: fine)`. Nothing is reachable only by hover. A tap on a card goes straight to the event; it does not first trigger a hover state.
- Event cards are a single link (one tap target), not a card with several small links.

### Layout per breakpoint
| Element | < 640 px | 640–1023 px | ≥ 1024 px |
|---|---|---|---|
| Event index cards | 1 column, full width | 2 columns | 3 columns |
| Upcoming events (Home) | Stacked vertically | 2 columns | Row of up to 3 |
| Focus area tiles | 2 columns | 3 columns | 4 columns |
| Event photo grid | 1 column | 2 columns | 3 columns; wide images span 2 |
| Team (in About) | 1 column | 2 columns | 3 columns |
| Our Work year label | Inline above the first card of the year | Inline | Sticky in left column |

- Navigation: four items. The desktop row appears at the smallest breakpoint where all four bilingual labels, the seal, Join and Donate fit **on one line without wrapping**; measure it, default to `xl` if in doubt. Below it, the existing mobile menu.

### Dialog (photo viewer)
- On mobile the dialog is full screen, image `contain` and centred, close button top-right inside the safe area and at least 44 px.
- Body scroll is locked while open. Pinch-zoom on the image is not blocked (no `user-scalable=no`, no `touch-action: none` on the image).

## Target structure

### Routes

| Today | After | Notes |
|---|---|---|
| `/` | `/` | One scrolling story |
| `/our-work` | `/our-work` | Event index |
| — | `/our-work/[id]` | New: one page per event, statically generated from the event model |
| `/about`, `/team` | `/about` | Team becomes a section of About. `/team` redirects to `/about#team` |
| `/gallery` | folded into events | Photos live on each event page. `/gallery` stays as one "all photographs" view, or redirects to `/our-work`. Decide in Phase 0 |
| `/contact` | `/contact` | Contact, Join and Donate on one page |

Navigation shrinks to four items: Home, About, Our Work, Contact. Redirects go in `next.config.ts`; no old URL may 404. Existing `/our-work#<id>` anchors (shared on WhatsApp) must still land on the right event — either keep the anchors on the index, or redirect each hash on the client to `/our-work/<id>`.

### Event model

One type in `types/index.ts`, one data file `data/events.ts`:

```
id, title, titleMr, date (ISO), dateLabel, location,
status: "done" | "upcoming" | "ongoing",
hero?: {
  src, position,               // desktop / wide background
  mobileSrc?, mobilePosition?  // portrait or square background for < 768 px
},
photos: [{ src, alt, caption?, captionMr? }],   // subject images, always contain
description: string[],          // Marathi paragraphs, unchanged
summary?: string, summaryMr?    // optional short line, only if it already exists in copy
featured?: boolean
```

- `ongoing.ts` and `upcoming.ts` are replaced by `status`.
- `gallery.ts` albums are derived from events (gallery-only albums become events with `status: "done"` and no story).
- Existing copy moves across byte-for-byte.
- An event with no `hero` renders its band as solid navy. Upcoming events usually have no photograph; their cards must look complete without one.

### Home (five sections)

| # | Section | Surface | Mobile behaviour | Content |
|---|---|---|---|---|
| 1 | Hero | Background photograph, navy scrim | `min-h-[85svh]`, portrait `mobileSrc`, text at the bottom, link reachable without scrolling | Seal, **सेवा हेच कर्म**, **Service is our Duty**, year and city, one link to Our Work |
| 2 | Latest event | Photograph band, or paper with the photo below the text on mobile | On mobile: title, date, first paragraph, then the photo `contain`, then the link. No text over a cropped landscape photo | The ongoing event if set, else the newest done event; link to `/our-work/[id]` |
| 3 | What we do | Navy band | 2-column tiles, counters above | Seven focus areas as icon tiles, with the computed counters |
| 4 | Upcoming | Paper | Stacked cards | Cards for `status: "upcoming"` events. Hidden when none |
| 5 | Join and donate | Navy band (photograph optional on desktop only) | Full-width buttons, 44 px tall | Existing join copy and `JoinLink`; donate stays disabled |

### Our Work and event pages

- Index: event cards from the model, newest first, with a year label. Card = image (`cover` thumbnail at a fixed 4:3 ratio is allowed here because the full photograph is on the detail page), date, Marathi title, English title.
- Detail: hero band (navy if no `hero`), story (full Marathi `description[]`), photo grid with the existing dialog, previous and next event as two full-width buttons on mobile, the `!! सेवा हेच कर्म !!` close.
- Long Marathi stories stay readable on mobile: max line length about 65 characters on desktop, full width with `px-4` on mobile, no justified text.

## Visual system

- **One `Section` primitive**: `tone: "paper" | "paper-deep" | "navy" | "photo"`, optional `bg` (`{ src, position, mobileSrc?, mobilePosition? }`), optional `reveal`. It replaces the hand-written `surface-*` classes and repeated heading markup.
- **One bilingual heading component** (`titleMr` then `title`), reused by Home, Our Work, About and Contact.
- **Image components** reduced to two: a subject image (`ContentImage`, `contain`) and a background image (`cover`, scrim, art-directed mobile source, fallback to solid tone). `CoverBand` is folded into the second.
- **Alternating bands**: paper and navy alternate; photograph bands break up long runs (see Simplicity rules 6).
- **Paper texture**: optional, CSS-only (no image download), and only if body text still passes 4.5:1 on it.

## Imagery

Facts from `data/image-meta.ts` that shape this section:

- Most event photographs are **1024 px wide landscape** (for example 1024 × 576). The largest is `diwali-balghar-2026.jpg` at 1600 × 937.
- Shown as a full-screen `cover` background on a portrait phone (about 390 × 844 CSS px at 3× density), a 1024 × 576 photo is enlarged roughly 4× and only the middle third of its width is visible. It looks soft and can cut through faces.
- `public/images/our-work/diwali-2024-matoshri.png` is about **1.4 MB**.

Rules:

1. **Mobile background sources are portrait or square.** Candidates already in the repo: `gallery/diwali-balghar-children-making.jpg` (960 × 1200), `gallery/diwali-balghar-lanterns.jpg` (1280 × 1280), `gallery/ganpati-workshop-*.jpg` (768 × 1024). Choose in Phase 0 and check that no face is cut.
2. A landscape photo is a mobile background only if its band is no taller than its natural ratio allows (no more than about 1.5× upscale). Otherwise the band is solid navy on mobile, or the photo is shown `contain` below the text.
3. Art direction uses two `next/image` elements toggled by breakpoint (or `getImageProps` with `<picture>`), so a phone downloads only the mobile source. Check in the Network panel that only one hero file loads per device.
4. Only the hero image is `priority`. Every `Image` has a correct `sizes`. Below-the-fold backgrounds lazy-load.
5. Large PNG photographs are converted to JPEG or WebP at the same pixel size. Target: no single image over 300 KB; the mobile hero under 150 KB. Update `data/image-meta.ts` if any dimension changes.
6. Every image reserves its box before load (ratio from `image-meta.ts`, or fixed ratio for thumbnails), so nothing shifts as photos arrive.

## Motion catalogue

All effects use `transform` and `opacity` only (no animating `width`, `height`, `top`, `filter` or `background-position`). All are collapsed under `prefers-reduced-motion: reduce`. Server HTML stays fully visible with JavaScript off: entrance classes are added only in the browser.

| Effect | Where | Mobile | Desktop | Notes |
|---|---|---|---|---|
| Slow zoom (Ken-Burns) | Hero background | Scale 1 → 1.04, once, only on the portrait `mobileSrc` | Scale 1 → 1.06, once | Never on an upscaled landscape image. Not looping |
| Staggered headline reveal | Hero and section headings | Yes | Yes | Marathi first, English 120 ms after |
| Fade-and-rise | Blocks entering the viewport | Yes, 8 px rise | Yes, 12 px rise | `Reveal` wrapper replaces ad-hoc `data-enter` markup. Each element animates once |
| Image reveal | Event hero and photo grid | Fade only | Clip/mask reveal allowed | |
| Light parallax | Photograph bands | **Off** | On, ≤ 40 px travel, `(hover: hover) and (pointer: fine)` only | Never `background-attachment: fixed` (broken on iOS) |
| Counter count-up | Home "What we do" | Yes | Yes | Final value rendered on the server; `tabular-nums` and a fixed min-width so the line does not reflow while counting. Use the same digit style (Devanagari or Latin) as the rest of that section |
| Card hover | Event cards | **Off** (no hover on touch) | Image zoom 1.03 and gold underline, 150 ms | |
| Page cross-fade | Route change | Only if smooth | View Transitions API only, no library | Skip entirely if it stutters on a mid-range Android phone |

Budget: no more than **three** elements animating at the same time on mobile, and no animation longer than 800 ms (the hero zoom excepted).

## Performance budget (mobile, Lighthouse "Slow 4G", Moto G-class emulation)

| Metric | Target |
|---|---|
| LCP | ≤ 2.5 s on Home and one event page |
| CLS | ≤ 0.05 |
| INP / TBT | TBT ≤ 200 ms |
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Client JavaScript added by this ticket | ≤ 15 KB gzipped (motion helpers, counter, nav) |
| Fonts | No new families; check that only the used weights load |

## Phases and acceptance

### Phase 0 — Decisions (before code)
- [ ] Confirm the final route list and the fate of `/gallery` (keep as "all photographs" or fold into Our Work).
- [ ] Choose the hero **mobile** and **desktop** sources, and the Join band source (desktop only), from existing files. Screenshot each at 360 × 780 and 1280 × 800 and confirm no face is cut.
- [ ] Confirm which counters are shown, how each is computed from data, and which digit style they use.
- [ ] Measure the nav breakpoint where four bilingual items, Join and Donate fit on one line.

### Phase 1 — Event model and data
- [ ] New `Event` type and a single `data/events.ts`; `ongoing.ts`, `upcoming.ts` removed; gallery albums derived.
- [ ] Every existing event, caption and description appears unchanged on the old pages (diff the rendered text before and after).
- [ ] `npm run build` and `npm run lint` pass.

### Phase 2 — Primitives
- [ ] `Section`, `Reveal`, `Heading`, background image (with mobile source), `Counter` built and each used by at least one page.
- [ ] Reduced-motion verified: no animation runs.
- [ ] JavaScript-off verified: all text and images visible.

### Phase 3 — Pages
- [ ] Home matches the five-section table, including the mobile column.
- [ ] `/our-work` index and `/our-work/[id]` pages generated for every event.
- [ ] About includes Team; Contact includes Join and Donate.
- [ ] Redirects for `/team` and any retired URL; old `/our-work#<id>` links land on the right event; no 404 on an old link.
- [ ] Navigation reduced to four items on desktop and mobile.
- [ ] Every page passes the Simplicity rules.

### Phase 4 — Imagery and performance
- [ ] Large PNG photographs converted; no image over 300 KB; mobile hero under 150 KB; `image-meta.ts` updated.
- [ ] Network panel shows a phone loads only the mobile hero source.
- [ ] Performance budget met on Home and one event page.

### Phase 5 — Mobile QA (blocking)
- [ ] Chrome DevTools at **320, 360, 390, 414, 768, 1024, 1280** px wide, plus landscape **667 × 375**: no horizontal scroll, no overlapping text, no clipped buttons, no text over an unscrimmed photo.
- [ ] Real devices: one iPhone (Safari) and one mid-range Android (Chrome). Check the hero does not jump when the address bar hides, the menu opens and locks scroll, the dialog closes, and motion is smooth.
- [ ] Longest Marathi title fits within three lines at 320 px.
- [ ] Every tap target at least 44 × 44 px (Lighthouse "tap targets" and a manual pass).
- [ ] Browser zoom at 200 %: content reflows without horizontal scroll.
- [ ] Reduced motion turned on in the OS: no movement anywhere.
- [ ] Contrast checked wherever text sits on a photograph, on both mobile and desktop sources.
- [ ] Keyboard path works on desktop: skip link, menu, dialog, event navigation.

### Phase 6 — Cleanup and sign-off
- [ ] Dead components and data files removed (`CoverBand`, retired data files, unused `AboutSections` parts), unless still used. `ComingSoon` stays if any route still uses it.
- [ ] Vercel preview reviewed on a phone and approved by the owner before any merge.

## Risks

| Risk | Mitigation |
|---|---|
| Landscape photos look blurry or crop faces as mobile backgrounds | Portrait `mobileSrc` per band; 1.5× upscale limit; solid navy fallback |
| Background photographs slow mobile | Converted images, size budget, lazy loading, one priority image, art direction so phones download one file |
| Hero jumps when the mobile address bar hides | `svh` units and `min-height`, never `100vh` |
| Zoom or parallax causes horizontal scroll | `overflow-hidden` parents; parallax off on mobile; 320 px overflow check |
| Text unreadable on a bright photograph | Full-band scrim on mobile; contrast check per photograph |
| Hover-only affordances on touch | Hover wrapped in `(hover: hover)`; whole card is the link |
| Merging pages breaks shared WhatsApp links | Redirects in `next.config.ts`; hash links handled; test each retired URL |
| Event consolidation loses or alters copy | Move text without editing; compare rendered output before and after |
| Motion overload or jank on low-end phones | Motion catalogue is the full list; transform/opacity only; three-at-once budget |
| Next.js 16 differs from older versions | Read the relevant guide in `node_modules/next/dist/docs/` before using routing, redirects or image APIs (see `AGENTS.md`) |

## Open questions

1. Keep `/gallery` as a standalone "all photographs" page, or fold it into Our Work?
2. Which counters are acceptable (events held, years active, photographs), and in Devanagari or Latin digits? Children reached is excluded unless the owner supplies an approved figure.
3. Can the foundation supply one or two new portrait photographs (at least 1080 × 1920) for the mobile hero? Existing portrait files work, but a dedicated one would look sharper.
4. Should old theme branches (`chatgpt1`, `muskan`, `sanstha`, `first_template`) be archived once this branch is approved? No branch is deleted as part of this ticket.
