# SANSTHA-001 — Sanstha redesign of the foundation website

| Field | Value |
|---|---|
| Type | feat (design system and page structure) |
| Status | Ready, not started |
| Repository | `sahyog-seva-foundation` (Next.js 16, React 19, Tailwind v4) |
| Work branch | `sahayog_samarpan_sanstha_template` |
| Snapshot of the old design | `sahayog_samarpan_first_template` (commit `baf8441`) |
| Deploy target | `main` → Vercel project `sahyog-samarpan-seva` |

## Background

The current site uses a common NGO template on every page: a white sticky bar, a navy banner, a small gold Marathi line, an English title, an 80px saffron underline, then rounded white cards. Plus Jakarta Sans reads as a startup typeface. Marathi, the language of the motto and the event writing, sits underneath English as a small caption. Strong photographs, like the Ganpati workshop at Balghar, are cropped into the same 4:3 card as everything else.

The foundation is a local, registered sanstha in Ahilyanagar, established in 2016, with the motto **सेवा हेच कर्म** (“Service is our Duty”). It has a managing committee, paid membership (₹500 ordinary, ₹1,000 lifetime), and a ten-year record of hands-on seva. Donations are not open yet.

## Goal

Make the site look and read like the foundation’s own letterhead, the seal opened into pages:

- Marathi leads; English follows as the translation.
- The seal is an emblem, not a round thumbnail.
- The latest real seva photograph carries the home page.
- Navy, paper, saffron, gold, and green come from the seal and are used as surfaces and signals, not as scattered accents.

## Out of scope

- Changing routes, page names, or the navigation order.
- Rewriting content in `data/` (events, about, team, gallery, upcoming).
- Turning on donations. The Donate button stays visible, disabled, and labelled “coming soon.”
- Backend (`sahyog-samarpan-seva-backend`) and Vercel project settings.
- Adding animation libraries or UI kits.

## Design system

### Type (`app/layout.tsx`, `next/font/google`)

| Role | Font | Notes |
|---|---|---|
| Motto and Marathi titles | Tiro Devanagari Marathi | Weight 400 only. Use size, not weight, for emphasis. |
| Marathi body | Mukta | Keep weights 400, 500, 600. |
| English titles | Newsreader | Optical-size serif. Weights 500 and 600. |
| English body, navigation, labels | Source Sans 3 | Weights 400, 500, 600. |

Remove Plus Jakarta Sans. Expose each font as a CSS variable and map it in `@theme`, for example `--font-display-mr`, `--font-body-mr`, `--font-display-en`, `--font-sans`. Keep the `.font-marathi` utility working, so existing markup does not break mid-migration.

### Color (`app/globals.css`, `@theme`)

Keep the existing `brand-*` tokens. Add:

| Token | Value (starting point) | Use |
|---|---|---|
| `paper` | `#f7f2e8` | Page background |
| `paper-deep` | `#efe7d6` | Ruled blocks, quiet bands |
| `ink` | `#1f1d1a` | Reading text |
| `ink-soft` | `#5b564d` | Secondary text |
| `rule` | `rgb(30 42 92 / 0.15)` | Thin dividers |

Rules for color:

- **Navy** for the home opening band and the footer only.
- **Saffron** for the motto, dates, and the Join action. No other filled buttons.
- **Gold** for one thin rule under a page heading, and for the current-page underline in the navigation.
- **Green** only on growth areas: children, workshops, environment.
- Body text is `ink` on `paper`, not `gray-600` on white.

### Shape and surface

- Retire the default `rounded-2xl border shadow-sm` card. Sections are separated by space and a `rule` line.
- Corner radius 4–6px at most, where a radius is needed. No pill buttons, except the WhatsApp link, which keeps its brand color.
- Photographs keep their natural proportions where the layout allows it.

### Responsive contract

Build mobile-first. Each page must work from 320px upward without horizontal scrolling, clipped text, overlapping controls, or content hidden behind the sticky letterhead.

| Range | Required behavior |
|---|---|
| 320–639px (phone) | One content column; 16px page gutters; stacked actions; no side margins for timeline years; tap targets at least 44×44px. |
| 640–767px (large phone) | One column with wider gutters; two columns only for short, equal-length items where wrapping is safe. |
| 768–1023px (tablet) | Two-column compositions may begin; navigation remains in its mobile form until all labels fit without compression. |
| 1024–1279px (small desktop) | Full letterhead navigation; timeline may gain its year margin; content width remains constrained for readability. |
| 1280px and above (desktop) | Use whitespace, not stretched text or oversized images; cap the site shell around 1200–1280px and reading columns around 65 characters. |

- Prefer normal document flow, CSS Grid, and Flexbox. Do not position content with fixed pixel offsets.
- Use fluid type and spacing where helpful (`clamp()` or responsive Tailwind classes), but set sensible minimum and maximum values.
- Long English names, Marathi text, dates, phone numbers, and email addresses must wrap safely (`min-w-0`, `overflow-wrap:anywhere` where necessary).
- At 200% browser zoom, navigation and page actions remain reachable and content does not overlap.
- Avoid viewport-height hero sections on phones; the opening must not push all useful content below the fold.

### Image and media contract

- Preserve each content photograph’s intrinsic aspect ratio. With `next/image`, prefer explicit `width` and `height` (or imported image metadata) and `className="h-auto w-full"` for editorial images.
- Use `fill` only when a deliberately fixed visual frame is part of the design and its parent has a defined aspect ratio.
- Use `object-cover` only for intentionally decorative crops. Never crop faces, the foundation banner/logo, event artwork, text inside a photo, or important activity details.
- Keep existing `photoFit` and `photoPosition` metadata working. `contain` images receive a neutral `paper-deep` background and must not be silently changed to `cover`.
- Add per-image focal-position metadata only when a crop is unavoidable. Validate that focal point at phone, tablet, and desktop widths.
- The logo always uses `object-contain`; it must never be stretched, clipped, or masked by a circle.
- Gallery thumbnails may use a consistent frame for rhythm, but opening/full presentation must show the complete image. If no lightbox is implemented, use `object-contain` for images whose important content would otherwise be lost.
- Supply accurate responsive `sizes` to every `next/image`, keep descriptive `alt` text, and prevent layout shift by reserving image dimensions before loading.
- Missing or broken images must not collapse the surrounding layout.

## Shared components

### 1. `components/Navbar.tsx` → letterhead bar

- Small seal on the left, with the Marathi name in Tiro Devanagari Marathi and the English name beneath in Source Sans 3.
- Links in Source Sans 3. The current page gets a gold underline instead of a saffron color change.
- On the right: **Join** (saffron, opens the membership form) and **Donate** (quiet outline, disabled, “coming soon”).
- Mobile menu: Marathi label first, English beside it, on `paper`.
- At widths where the brand, six links, and actions do not all fit, use the mobile menu; do not shrink text or allow two navigation rows.
- Opening the mobile menu must not move controls off-screen. It closes after navigation, on `Escape`, and when switching to the desktop breakpoint. Lock background scrolling while it is open.
- The sticky header must have a measured offset so anchored content and page headings are not obscured.

### 2. `components/PageHeading.tsx` (new)

One heading pattern for every inner page:

- Marathi title in Tiro Devanagari Marathi, large.
- English title in Newsreader below it.
- One short line of context, optional.
- A single gold rule.

Replace the navy `<section className="bg-brand-navy py-16 ...">` banner on About, Our Work, Team, Gallery, and Contact with this component.

### 3. `components/Footer.tsx` → closing footer

Navy ground. Motto **सेवा हेच कर्म** large, the six areas of work, Ahilyanagar contact and social links, and “स्थापना २०१६ · Est. 2016.” Read the focus areas from the shared data (see below), not from a hard-coded list.

### 4. Shared data

- Add `data/focus-areas.ts` with the six areas, each with English label, Marathi label, and a `growth` flag that decides whether green may be used. Initial set: education, healthcare, women empowerment, child welfare, environment, youth development.
- Move the membership form URL (`https://forms.gle/XJkS4AHdGHvAe7Ev7`), which is currently duplicated in `Navbar.tsx` and `app/contact/page.tsx`, into `siteConfig` in `data/site.ts`. Add the two fees there too, so Home, About, and Contact show the same numbers.

## Pages

### Home (`app/page.tsx`)

1. **Opening (navy).** Seal as an emblem. **सेवा हेच कर्म** very large in Tiro Devanagari Marathi. “Service is our Duty” under it in Newsreader. “२०१६ · अहिल्यानगर” as a small line.
2. **Latest seva.** The newest `workEvents` entry as a full-width photograph, with date, place, Marathi title, English title, and a link to Our Work. Today this is the Ganpati workshop at Balghar Prakalp.
3. **Areas of work.** The six focus areas as the map of the sanstha, Marathi first. Text, not icon tiles.
4. **Recent record.** The next two or three visits as a dated list: date, place, Marathi title. No cards.
5. **Upcoming.** Entries from `data/upcoming.ts` (currently rainwater harvesting awareness) as one quiet note.
6. **Ongoing.** If `ongoingEvent` in `data/ongoing.ts` is not `null`, show it above Latest seva. It is `null` today, so nothing renders.
7. **Join.** A `paper-deep` band: why to join, ₹500 and ₹1,000, and the Join action.

On phones, every section is one column and the latest-seva text follows the complete image. On desktop, image and text may share a grid only if neither is cropped and the reading order remains image → date/place → titles → action.

### About (`app/about/page.tsx`, `components/AboutSections.tsx`)

- `PageHeading`: आमच्याबद्दल / About Us.
- Order: preface, objectives (as the commitments a member agrees to), journey from the 2016 group to the foundation, governance, commitment.
- Governance and fees sit in a ruled `paper-deep` block.
- The Marathi content follows in the same sizes and on the same paper, not on a different-colored band.
- Remove the logo-and-name intro banner. The letterhead already carries it.

### Our Work (`app/our-work/page.tsx`, `components/EventCard.tsx`)

- `PageHeading`: आमचे कार्य / Our Work.
- A vertical seva record, newest first, with the year as a marker in the margin on desktop.
- Each visit: date in saffron, place, Marathi title in Tiro Devanagari Marathi, English title in Newsreader, photograph at natural proportion (respect `photoFit` and `photoPosition`), then the Marathi account in Mukta in a reading column of about 65 characters.
- Keep the closing **!! सेवा हेच कर्म !!** once per visit.
- Remove the alternating left/right card layout and the `reverse` prop.
- On phones and tablets, the year becomes an inline label above the event; no empty timeline gutter remains.
- For very tall or very wide source images, constrain only the maximum rendered height and use `object-contain`; do not force a common aspect ratio.

### Team (`app/team/page.tsx`, `components/Avatar.tsx`)

- `PageHeading`: आमची टीम / Our Team.
- Managing committee: photos kept, Marathi role first, English role beneath, laid out like an office roll, not floating cards.
- Project teams and members: name rolls under ruled headings. Drop the round initial avatars there, unless a photo exists.
- Committee photos use one documented portrait ratio and `object-position` metadata where needed. Verify every face remains visible at all breakpoints.
- The committee grid is two columns only when names and roles fit; otherwise it falls back to one. Do not truncate names.

### Gallery (`app/gallery/page.tsx`)

- `PageHeading`: गॅलरी / Gallery.
- Albums stay in the same order. Photographs sit in a print-like grid with thin borders and Mukta captions.
- Keep the hover zoom subtle, or remove it.
- Use one column on phones, two on tablets, and up to three on desktop. Captions determine card height; they must not be line-clamped.
- Do not use hover as the only way to reveal information or access the complete photograph.

### Contact (`app/contact/page.tsx`)

- `PageHeading`: संपर्क / Contact.
- One paper page with three paths, separated by rules: WhatsApp community, membership (fees and the Join action), and phone, email, and place.

### `components/ComingSoon.tsx`

Restyle to the new heading and paper so any placeholder page matches.

## Tasks

Do these in order, with one commit per step, using conventional commits (for example, `feat(design): add Sanstha type and color tokens`). Do not add any Cursor co-author trailer.

- [ ] **1. Foundations.** Fonts in `layout.tsx`, tokens in `globals.css`, `data/focus-areas.ts`, membership URL and fees in `siteConfig`.
- [ ] **2. Shared components.** Letterhead `Navbar`, `PageHeading`, closing `Footer`.
- [ ] **3. Home.**
- [ ] **4. Our Work** and `EventCard`.
- [ ] **5. About** and `AboutSections`.
- [ ] **6. Team, Gallery, Contact,** and `ComingSoon`.
- [ ] **7. Clean up.** Remove unused classes, the unused `reverse` prop, and the Plus Jakarta import.
- [ ] **8. Verify responsive layout and images** using the matrix below; fix every failure before preview review.
- [ ] **9. Ship.** Push `sahayog_samarpan_sanstha_template`, review the Vercel preview deployment, then merge into `main`.

## Acceptance criteria

- No page uses the old navy banner plus saffron underline heading.
- Marathi appears first in every page heading, the letterhead, and the home opening.
- Plus Jakarta Sans is no longer loaded.
- Saffron is the only filled button color, apart from the WhatsApp brand button.
- Photographs on Our Work are not forced to 4:3.
- Footer focus areas and Home focus areas come from the same data file.
- The membership form URL exists in one place.
- Donate stays disabled with “coming soon.”
- Every route renders: `/`, `/about`, `/our-work`, `/team`, `/gallery`, `/contact`.
- `npm run lint` and `npm run build` pass.
- Body text contrast is at least 4.5:1 on `paper` and on navy.
- No horizontal page scroll at 320, 375, 390, 768, 1024, 1280, or 1440px.
- No text, navigation item, action, caption, or contact value is clipped, truncated, or overlaps another element.
- Layouts do not rely on hover and remain usable with keyboard and touch.
- All interactive targets are at least 44×44px on touch layouts and have a visible keyboard focus state.
- No logo, face, text-bearing image, event banner, or important activity detail is cropped.
- Images preserve their aspect ratios without stretching and reserve their space before loading (no visible layout jump).
- Mobile-menu state and sticky-header behavior remain correct during resize and route changes.
- The page remains usable at 200% browser zoom.

## Verification

1. `npm run lint` and `npm run build` in `sahyog-seva-foundation`.
2. Run the production build locally (`npm run build && npm run start`) for final browser checks; development mode alone is not sufficient.
3. Check **every route** at 320×568, 375×667, 390×844, 768×1024, 1024×768, 1280×800, and 1440×900. Test portrait and landscape where applicable.
4. At each width, inspect the top, middle, and bottom of the page—not only the initial viewport—and confirm there is no horizontal overflow.
5. Review every real image in Home, Our Work, Team, and Gallery. Compare it with its source file and confirm faces, text, logos, banners, and the activity’s subject are visible. Test both `cover` and `contain` metadata cases.
6. Test image loading with a throttled network and with one deliberately invalid image URL in local development; confirm reserved dimensions and a stable, readable fallback.
7. Check long Marathi paragraphs for line length and line height, and verify Devanagari conjuncts and numerals in Tiro Devanagari Marathi and Mukta.
8. Test keyboard-only navigation: skip through the letterhead, menu, Join, disabled Donate, gallery links (if any), contact links, and footer. Confirm visible focus and logical order.
9. Test the mobile menu at 320px and 390px: open, scroll, close with its button, close with `Escape`, navigate to another route, and resize past the desktop breakpoint.
10. Test at 200% browser zoom and with reduced-motion enabled. Confirm content remains available and no essential behavior depends on animation.
11. Check Chrome and Edge on desktop and at least one real or emulated iOS Safari-sized and Android Chrome-sized viewport. Record any browser-specific exception in this ticket.
12. Run Lighthouse on Home and Our Work in the production build. Resolve accessibility errors and image/layout-shift findings; treat performance warnings as work items when caused by this redesign.
13. Capture reference screenshots for all six routes at 390px and 1440px and attach them to the merge request or ticket.
14. Review the Vercel preview at phone and desktop widths before merging into `main`.

## Branch and release notes

- `sahayog_samarpan_first_template` keeps the current design and is never changed.
- All work happens on `sahayog_samarpan_sanstha_template`.
- `main` is the production branch on Vercel. Merge only after the preview is approved.
- All three branches currently exist only on this machine. Push them to `origin` (`github.com/ankitnehul/sahyog-samarpan-seva-trust`) when you want them backed up and previewed.
