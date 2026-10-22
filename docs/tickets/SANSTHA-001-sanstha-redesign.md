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

## Shared components

### 1. `components/Navbar.tsx` → letterhead bar

- Small seal on the left, with the Marathi name in Tiro Devanagari Marathi and the English name beneath in Source Sans 3.
- Links in Source Sans 3. The current page gets a gold underline instead of a saffron color change.
- On the right: **Join** (saffron, opens the membership form) and **Donate** (quiet outline, disabled, “coming soon”).
- Mobile menu: Marathi label first, English beside it, on `paper`.

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

### Team (`app/team/page.tsx`, `components/Avatar.tsx`)

- `PageHeading`: आमची टीम / Our Team.
- Managing committee: photos kept, Marathi role first, English role beneath, laid out like an office roll, not floating cards.
- Project teams and members: name rolls under ruled headings. Drop the round initial avatars there, unless a photo exists.

### Gallery (`app/gallery/page.tsx`)

- `PageHeading`: गॅलरी / Gallery.
- Albums stay in the same order. Photographs sit in a print-like grid with thin borders and Mukta captions.
- Keep the hover zoom subtle, or remove it.

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
- [ ] **8. Verify** (see below).
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

## Verification

1. `npm run lint` and `npm run build` in `sahyog-seva-foundation`.
2. `npm run dev`, then check every route at 375px, 768px, and 1280px wide.
3. Check long Marathi paragraphs for line length and line height, and check that Devanagari conjuncts render in Tiro Devanagari Marathi and Mukta.
4. Check keyboard focus on the navigation, Join, the mobile menu, and the WhatsApp link.
5. Review the Vercel preview for the branch before merging into `main`.

## Branch and release notes

- `sahayog_samarpan_first_template` keeps the current design and is never changed.
- All work happens on `sahayog_samarpan_sanstha_template`.
- `main` is the production branch on Vercel. Merge only after the preview is approved.
- All three branches currently exist only on this machine. Push them to `origin` (`github.com/ankitnehul/sahyog-samarpan-seva-trust`) when you want them backed up and previewed.
