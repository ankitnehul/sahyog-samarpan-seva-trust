# CHATGPT1-001 — Premium bilingual elevation of the Sanstha site

| Field | Value |
|---|---|
| Type | feat (visual elevation of the existing Sanstha site) |
| Status | Ready to execute. Not started. |
| Repository | `sahyog-seva-foundation` (Next.js 16, React 19, Tailwind v4) |
| Parent ticket | [SANSTHA-001](./SANSTHA-001-sanstha-redesign.md) |
| Work branch | `sahayog_samarpan_chatgpt1_theme` |
| Branched from | `main` at `aa6921f` (`feat(home): feature the Ganpati visit and retitle it from its account`) |
| Live site to inspect first | https://sahayogsamarpan.org/ |
| Deploy target | `main` → Vercel project `sahyog-samarpan-seva`, and only after a preview of this branch is approved |

## Why this ticket exists

SANSTHA-001 replaced the generic NGO template with the foundation’s letterhead: Marathi first, the seal as an emblem, paper and ink, and real seva photographs at their own proportions. That work is already on `main` and on https://sahayogsamarpan.org/.

The live site is functional and consistent, and it still reads as restrained to the point of being plain. This ticket raises the same six pages into a polished, memorable, human-centered site that is recognisable as Sahayog Samarpan. It does not replace the Sanstha system and it does not rebuild the application.

The status line in SANSTHA-001 that says preview and merge are still open is historical. Do not re-implement SANSTHA-001. Do not revert `main`.

## Precedence

When this brief and SANSTHA-001 disagree, use this order. A later section of this ticket does not override the row above it.

| Question | Decision |
|---|---|
| Palette, type, seal, navy-only opening and footer, saffron/gold/green rules | Keep the SANSTHA-001 design system and the accessible tokens already in `app/globals.css`. Refine spacing, composition, and hierarchy inside that system. Do not introduce a new palette, a green hero, or a second visual language on one page. |
| Image crops, overlapping layouts, “thoughtful crops” | Editorial overlap, thin borders, and whitespace are allowed. Cropping is not. The SANSTHA-001 image contract wins: `object-contain`, natural ratio, no crop of faces, text inside a photo, the seal, event banners, or the activity itself. Overlap must not hide those either. |
| Language switcher | There is no language switcher, and this ticket does not add one. Every page shows Marathi first and English as the translation on the same page. Do not hide either language behind a toggle. |
| Home photography | Keep the navy motto opening. Photography enters as the real visits immediately under it, not as a stock or full-viewport hero. |
| Home featured visits | `app/page.tsx` features the two newest `workEvents` (`slice(0, 2)`), then a dated recent list of the next three (`slice(2, 5)`). Today those two are Dussehra at Balghar (20 October 2026) and the Ganpati workshop (9 September 2026). Do not collapse Home back to a single latest visit. |
| Content | Do not machine-translate, rewrite, invent, or delete Marathi or English copy, people, fees, dates, registrations, statistics, or contact details. |
| Packages and architecture | Stay on the current Next.js App Router, Tailwind v4 `@theme` tokens, and `data/` content files. No backend, CMS, database, animation library, or UI kit. |
| SANSTHA-001 responsive table, row 1024–1279px | That row says full navigation from 1024px. The site intentionally switched to `xl` (1280px) because the brand, six bilingual links, Join, and Donate do not fit in one row below it. 1280px wins. |
| SANSTHA-001 `overflow-wrap:anywhere` | Superseded. Body uses `break-word`; `anywhere` breaks Devanagari. Only email addresses may use `break-all`. |
| “Clear next step” in the opening | Allowed as one quiet text link inside the navy opening (to the first featured visit or `/our-work`), gold underline on navy. Join stays the only saffron filled action and stays in the letterhead and the Join band. |
| Interface labels that are English only | Content copy is never translated by the implementer. Interface labels (buttons, fallbacks, status words) may gain a Marathi label only when it already appears in the codebase or the user approves the wording. See the bilingual contract. |

## What `main` already does — do not undo

Confirm these on the branch before editing. If one is missing, restore it before any visual work.

- Routes, in this order: `/`, `/about`, `/our-work`, `/team`, `/gallery`, `/contact`.
- Fonts: Tiro Devanagari Marathi (motto and Marathi titles), Mukta (Marathi body), Newsreader (English titles), Source Sans 3 (English body, navigation, labels). Plus Jakarta Sans stays removed.
- Tokens: navy `#1e2a5c`, saffron `#ef7c20`, gold `#f5b81d`, green `#6cae3e`, paper `#f7f2e8`, paper-deep `#efe7d6`, ink `#1f1d1a`, ink-soft `#5b564d`, rule `rgb(30 42 92 / 0.15)`.
- Accessible text colors, because bright saffron and gold fail contrast for small text and white labels: `--color-brand-saffron-text` `#9a3412`, `--color-brand-saffron-action` `#c2410c`, `--color-brand-gold-ink` `#92600a`, `--color-brand-green-ink` `#3d6b4f`. Body text and button labels stay at least 4.5:1. Do not put white text on `#ef7c20`, `#f5b81d`, or WhatsApp green `#25D366`.
- Navy only on the home opening and the footer. Saffron for the motto, dates, and Join. Gold for one heading rule and the current-page underline. Green only on focus areas whose `growth` flag is true in `data/focus-areas.ts`: today education, child welfare, environment, and youth development. Healthcare and women empowerment stay ink and navy.
- The seal is `components/Seal.tsx`: a sized frame with `fill` and `object-contain`. Nav `h-12 w-11`, home `h-24 w-[5.5rem]`, footer `h-14 w-[3.2rem]`. Never `h-* w-auto max-w-full` on the seal. Never a circle mask.
- Desktop navigation only at `xl` (1280px), one row. Below that, the mobile menu. Marathi label, then English. Current page: gold underline and `aria-current`. Menu closes on navigation, `Escape`, and when the desktop breakpoint matches. Body scroll locks while open. Focus returns to the menu button.
- Skip link, visible gold-ink focus, `scroll-padding-top` from the measured header, and `prefers-reduced-motion` killing transitions.
- `overflow-wrap: break-word` on the body. Do not switch it back to `anywhere`; that breaks Devanagari. Emails may use `break-all`.
- Donate stays visible, `aria-disabled`, in the tab order, labelled coming soon. It does not navigate.
- Membership URL `https://forms.gle/XJkS4AHdGHvAe7Ev7` and fees (₹500 ordinary, ₹1,000 lifetime) live only in `siteConfig`. Home, About, and Contact read that one source.
- `ContentImage` reserves width and height from `data/image-meta.ts`, defaults to `contain`, and keeps a stable fallback if the file fails.
- Description text under photographs is `text-lg leading-9 sm:text-xl sm:leading-10`. Do not shrink it back.
- Diwali 2024 (`public/images/our-work/diwali-2024-matoshri.png`) is the lower photograph only, 1024×512. Do not restore the collage.
- Ganpati titles, unless the content is explicitly changed later: Marathi **३१ बाप्पा — छोट्या कलाकारांच्या आनंदाचे प्रतीक**, English **Thirty-one Ganpatis, symbols of the children's joy**. Dussehra: **दसऱ्याच्या रंगात उमलला बालघराचा आनंद** / **Dussehra colours and sweets at Balghar Prakalp**.
- `ongoingEvent` is `null`. The ongoing block renders only when that value is set.
- Footer reads focus areas from `data/focus-areas.ts`. Social links that are not live stay text marked coming soon, not fake buttons. WhatsApp remains the one pill, brand green with ink text.
- `components/EventCard.tsx` has no `reverse` prop. Each visit still closes with **!! सेवा हेच कर्म !!**.
- No Cursor co-author trailer on commits, merge requests, or comments.

## Goal

After this ticket, a visitor should recognise the site as Sahayog Samarpan’s own record of seva: compassionate, local, and specific to Ahilyanagar, not a template with the logo swapped in.

The elevation is compositional. Pages may differ in rhythm. They must still be one letterhead, one type system, one palette, and one way of showing a photograph.

## Out of scope

- New routes, renamed pages, or a changed navigation order.
- Rewriting `data/events.ts`, `data/about.ts`, `data/team.ts`, `data/gallery.ts`, `data/upcoming.ts`, or `data/site.ts` except to thread an existing field into a layout.
- Inventing history, achievements, registration claims, statistics, testimonials, team members, roles, biographies, or contact details. NGO Darpan ID, phone numbers, email, and city stay as they are.
- A contact form, a map embed, or a donation flow. None of these exist. Membership remains the existing Google Form link.
- A language switcher, locale routes, or hiding one language.
- Backend (`sahyog-samarpan-seva-backend`) and Vercel project settings.
- Changing `sahayog_samarpan_first_template` or rewriting history on `sahayog_samarpan_sanstha_template`.
- Gradients, decorative blobs, drop shadows, pill buttons (except WhatsApp), `rounded-2xl` cards, carousels, and animation for its own sake.

## Creative direction

Confirm these weaknesses on the live site and in the code. Record any correction in this ticket before writing page code. Then implement inside the precedence rules above.

1. The home opening is type on navy, and the two visits under it repeat one identical split. The first screen does not yet feel composed.
2. About, Contact, and the recent-record list are single ruled columns. They are clear and they do not yet have a page-specific rhythm.
3. Our Work repeats one block shape for every year. The year marker exists; the visits themselves do not vary when a photograph is portrait, square, or very wide.
4. Gallery is an even grid. It is correct and it is not yet a highlight of the real photographs.
5. Team portraits and name rolls are credible and visually flat. All five committee members (Shubham Madke, Rohit Bhojane, Devdatta Zikre, Laukik Shelke, Rushikesh Ghule) have photographs today. Keep the `Avatar` initials fallback for future members; never a generated face.

Also fix these concrete issues found on `main`:

- Footer section headings (`आमचे कार्यक्षेत्र`, `पृष्ठे`, `संपर्क`) use `tracking-wide`. Remove letter-spacing from Devanagari.
- Home Join band, Team page context line, and several interface labels are English only. Handle them under the bilingual contract; do not invent translations.

Direction to implement:

- Editorial and warm, using paper, ink, the seal, and the real photographs already in `public/`.
- Section changes come from rules, a `paper-deep` band, or a change of column rhythm. Not from a new card style.
- A pull quote is allowed only as a line already present in `data/`, set in Tiro Devanagari Marathi. Do not write a new quotation.
- Overlap means a caption, rule, or date sitting beside or just across an image edge while the full photograph remains visible.
- Buttons, the mobile menu, and focus states stay the ones SANSTHA-001 specified. Refine their spacing and hit area; do not restyle Join into a second button language.
- Texture is optional and CSS only (no new image asset or package). It sits on paper surfaces, never on photographs or behind body text, and must not lower any contrast ratio.
- Interactive states are defined once and reused: hover changes underline or color, never size or layout; `:active` is a slight color shift; `:focus-visible` keeps the gold-ink outline. Transitions are 150ms or less, color or opacity only, and disappear under `prefers-reduced-motion`.
- The footer keeps its content (motto, focus areas from data, pages, contact, social, establishment year). Elevation means composition and spacing, not removing or duplicating information.
- Every visual addition has to survive deletion in a screenshot test: if removing it does not hurt hierarchy or meaning, do not add it.

## Bilingual contract

- Marathi leads in the letterhead, every `PageHeading`, the home motto, event titles, focus areas, and footer motto. English follows in Newsreader or Source Sans 3, at a smaller size, still readable.
- Do not put Marathi in uppercase, letter-spacing tricks, or a fixed-height box sized for the English line.
- Headings use `clamp()` with a minimum that stays readable at 320px and a maximum that does not overflow at 1440px. Long Marathi titles wrap. They are never truncated or clamped to a line count.
- Navigation labels stay “Marathi · English” in the mobile menu and the current desktop labels. Do not shorten Marathi to make the desktop row fit; the menu remains until 1280px.
- Body Marathi stays Mukta at the sizes already used for descriptions. Line height stays loose enough for conjuncts and matras (`leading-9` / `sm:leading-10` on long accounts).
- Devanagari digits stay on `toDevanagariDigits` for the establishment year. Do not mix a new numeral style into dates that are already English `dateLabel` values.
- There is no separate language control to design. Both scripts are on the page. Checking “language selection on mobile” means checking that both scripts are visible without horizontal scroll, not adding a control.
- Do not use uppercase or letter-spacing for emphasis in either script. Use size and weight.
- Check button and link widths with both scripts: the Join, Donate, menu, and “Read this visit” controls must not clip or wrap into an unreadable shape at 320px.

English-only interface labels on `main` today:

| Where | Current text | Rule |
|---|---|---|
| `components/JoinLink.tsx` | Join Us | `सदस्य व्हा` already exists as the home Join heading. It may be paired with “Join Us.” |
| `components/DonateButton.tsx` | Donate · Coming soon | Needs user-approved Marathi. Until then, keep English. |
| `components/ContentImage.tsx` | Photograph unavailable | Needs user-approved Marathi. Until then, keep English. |
| `app/page.tsx` upcoming fallback, `components/ComingSoon.tsx` | Coming soon | Needs user-approved Marathi. Until then, keep English. |
| `components/Footer.tsx` social | coming soon | Same as above. |

English-only content on `main` today: the Home Join band paragraph and the Team page context line. Do not translate them. List them in the final report as missing Marathi content.

## Pages

Shared shell on every page: letterhead, skip link, `main#content`, footer. Inner pages keep `PageHeading` (Marathi, English, optional context, one gold rule). Do not bring back the navy banner.

### Home — मुख्यपृष्ठ

Keep this order:

1. Navy opening: seal, **सेवा हेच कर्म**, “Service is our Duty”, “२०१६ · Ahilyanagar”. The opening must not be a `100vh` hero. On a phone, the first visit’s photograph should be reachable without a long empty band.
2. The two newest visits, each with its complete photograph, date, place, Marathi title, English title, the first description paragraph, and the link to `/our-work#id`. The two may differ in composition (for example, text-first on the second) only when the reading order is still obvious and neither image is cropped. On a phone, image then text, one column.
3. Areas of work, from `data/focus-areas.ts`, Marathi first, text rather than icon tiles. Green only where `growth` is true.
4. Recent record: the next three visits as a dated list, not cards, and not a repeat of the two featured visits.
5. Optional: a gallery highlight of three to five existing images from `data/gallery.ts`, `contain`, with their existing captions and a link to `/gallery`. Do not duplicate team or contact sections on Home; the footer already carries contact.
6. Upcoming from `data/upcoming.ts`. Ongoing only when `ongoingEvent` is not `null`; it renders above the featured visits.
7. Join band: fees from `siteConfig`, `JoinLink`.

Do not add a statistics strip, testimonials, or a third call-to-action style.

Measure the first impression. At 390×844 and 1440×900, the top edge of the first featured photograph must be visible in the first viewport, below the sticky letterhead. Tighten the opening’s spacing to meet this; do not shrink the motto below its readable minimum or hide the seal.

### About — आमच्याबद्दल

Keep the current section order in `components/AboutSections.tsx`: preface, objectives, journey, governance, commitment. Governance and fees stay in one `paper-deep` ruled block, and both languages stay on the same paper.

Elevation allowed: a real photograph already used elsewhere on the site, placed with `ContentImage` at its natural ratio, and a pull quote taken from an existing paragraph. Do not add a timeline of invented milestones. Remove nothing factual. The link to Our Work stays a gold underline, not a filled button.

### Our Work — आमचे कार्य

Keep the newest-first record, the year marker (inline below `lg`, sticky gutter from `lg`), and `EventCard`.

Elevation allowed: let a very wide and a very tall photograph sit in different grids, both `contain`, both fully visible. The Marathi account stays in a readable measure. Do not return to alternating cards or a shared 4:3 frame. Do not drop **!! सेवा हेच कर्म !!**.

Varying the layout must not change the information order: date, place, Marathi title, English title, photograph, account.

### Team — आमची टीम

Keep committee portraits only where a photo exists. `Avatar` stays a 3:4 frame with `object-contain` so Laukik’s square portrait and the taller portraits all show the full face. No round avatars. No invented portraits.

Project teams and members stay name rolls. Names wrap; they are not truncated. Two columns only when the name and both role lines fit; otherwise one column. Marathi role first.

### Gallery — गॅलरी

Keep album order and every caption. Captions are not line-clamped and are not revealed only on hover.

Varied composition is allowed when it is derived from data, not guessed: an image may span two columns when its `data/image-meta.ts` ratio is landscape and the album has room, and portrait images keep one column. Spans are decided in render code from width and height, so adding a photo needs no layout edit. No masonry library and no client-side measuring.

An accessible lightbox is allowed if all of the following are true: the grid still shows each complete image (`contain`), the lightbox shows that same complete image, it opens from a button or link with an accessible name, `Escape` and a visible close control dismiss it, focus moves into it and returns to the trigger, background scroll locks, and it works at 320px without horizontal scroll. No carousel, no autoplay, no swipe-only close.

A lightbox is one small client component used only by the gallery, preferably on the native `<dialog>` element. Pages other than Gallery must not ship its JavaScript. It adds no package.

If a lightbox cannot meet that bar, do not add it. The current grid is acceptable.

### Contact — संपर्क

Keep the three ruled paths: WhatsApp, membership (fees and `JoinLink` from `siteConfig`), and phone, email, place, Darpan, Instagram, and LinkedIn. Telephone and email stay real `tel:` and `mailto:` links. Do not add a map, a form, or a success state. Facebook and YouTube stay “coming soon” text.

## Maintainability

- Change shared pieces in the shared component: `Navbar`, `Footer`, `PageHeading`, `Seal`, `ContentImage`, `EventCard`, `Avatar`, `JoinLink`, `DonateButton`. Do not copy a one-off heading into a page.
- New visual rules go in `app/globals.css` `@theme` as tokens, not as one-off hex values in JSX.
- A new layout wrapper is justified only when at least two pages use it. Otherwise keep the markup in the page.
- Do not add a dependency to satisfy this ticket.
- Update this ticket’s task checkboxes and a short verification record when the work is done. Update SANSTHA-001 only if a contract there is intentionally changed; if so, name the change in both tickets.

## Tasks

Do these in order, on `sahayog_samarpan_chatgpt1_theme`, one conventional commit per step. No Cursor co-author trailer.

- [ ] **1. Audit.** Read the live site and the files listed in SANSTHA-001. Confirm the “do not undo” list. Write the five confirmed weaknesses, the chosen compositions, and the list of files to change into this ticket. No page code in this commit. Then continue to task 2 without waiting; the brief asks for implementation, not a plan only. Stop only for a real blocker, such as missing content or a Marathi label that needs approval, and in that case keep the current label and carry on.
- [ ] **2. Shared elevation.** Adjust tokens, letterhead, footer, heading, focus, and image frame only where the audit found a real weakness. Preserve every contract in the precedence table.
- [ ] **3. Home.** Compose the opening and the two featured visits. Keep section order.
- [ ] **4. Our Work.**
- [ ] **5. About.**
- [ ] **6. Team, Gallery, Contact,** and `ComingSoon`, so a placeholder cannot fall back to the old banner.
- [ ] **7. Clean up.** Remove unused classes and imports introduced by this work. Do not remove SANSTHA-001 pieces that are still used.
- [ ] **8. Verify** with the matrix below, then run the final quality review. Fix failures and refine the weakest section before any preview.
- [ ] **9. Ship.** Push this branch, review the Vercel preview at phone and desktop, then merge into `main` only after that preview is approved. Do not force-push `main`.

## Acceptance criteria

Inherited from SANSTHA-001, still required:

- Marathi appears first in every page heading, the letterhead, and the home opening.
- Plus Jakarta Sans is not loaded. Saffron is the only filled button color, apart from the WhatsApp brand button.
- Photographs are not forced to 4:3. No logo, face, text-bearing image, event banner, or activity detail is cropped or covered.
- Footer and Home focus areas come from `data/focus-areas.ts`. The membership URL exists in one place. Donate stays disabled with “coming soon.”
- All six routes render. `npm run lint` and `npm run build` pass.
- Body text contrast is at least 4.5:1 on paper and on navy.
- No horizontal scroll at 320, 375, 390, 768, 1024, 1280, or 1440px. Nothing is clipped, truncated, or overlapping.
- Targets are at least 44×44px on touch layouts, with a visible keyboard focus state. Hover is not required to read or reach content.
- Usable at 200% zoom. Reduced motion does not hide content.
- Mobile menu and sticky header behave as they do now.
- Home still shows two featured visits and does not duplicate them in the recent list.
- Diwali 2024 still shows only the lower photograph.
- Description text under photographs stays at the current large sizes.
- No new package, route, form, map, language switcher, statistic, testimonial, or invented person.

Added by this ticket:

- The six pages share one visual language and do not each invent a card style.
- Home’s first screen identifies the sanstha by the motto and the seal, with a real visit photograph close enough to be part of the opening impression on a phone.
- Gallery, if it gains a lightbox, meets the keyboard and complete-image rules above.
- No Devanagari text uses letter-spacing or uppercase styling, including the footer headings.
- English-only labels are either paired with an existing or approved Marathi label or listed in the final report.
- The nine final-quality-review questions are answered in the verification record.
- The site is still understandable with CSS only: no essential text depends on a hover, a motion effect, or JavaScript beyond the menu, donate guard, and image fallback that already exist.

## Verification

Use SANSTHA-001’s verification list (production build, seven widths, every route, every real image compared with its source, keyboard, mobile menu, 200% zoom, reduced motion, Lighthouse on Home and Our Work). The project has no test script; `npm run lint` and `npm run build` are the automated checks. Do not add a test framework for this ticket. In addition:

1. On Home at 390px and 1440px, confirm both featured visits are present, in newest-first order, with complete photographs, and that the recent list starts at the third visit.
2. Compare every `ContentImage` with its file in `public/`. A face, a line of text in the photo, or the activity subject touching the frame edge is a failure.
3. Read one long Marathi account (Ganpati or the art workshop) at 320px and at 1440px. Conjuncts must not collide, and the line must not run wider than a comfortable measure on desktop.
4. If a lightbox ships: open it, close it with the control, close it with `Escape`, tab through it, and confirm focus returns. Repeat at 320px.
5. Confirm Donate does not navigate, Join opens the `siteConfig` form, and WhatsApp, phone, and email links still match `data/site.ts`.
6. Attach 390px and 1440px screenshots of all six routes to the merge request.
7. Review alt text. Every content photograph has a descriptive `alt` (today usually the English event title or the gallery `alt`). A second photograph that repeats the first may keep `alt=""` only if it adds nothing new. The seal’s alt names the foundation.
8. Check that the first featured photograph is visible in the first viewport at 390×844 and 1440×900.
9. With JavaScript disabled, every page still shows its content and links. Only the mobile menu, the lightbox (if any), and the image fallback may depend on JavaScript.

## Final quality review

Answer each question against the rendered production build, not the code. Record a one-line answer for each in the verification record.

1. Would this be recognised as Sahayog Samarpan’s site without the logo?
2. Does Home make a strong first impression on a phone and on desktop?
3. Does it look art-directed rather than assembled from generic components?
4. Are Marathi and English equally readable and balanced?
5. Does each page have its own layout while still sharing one identity?
6. Are the real photographs used well, complete and uncropped?
7. Is the mobile experience polished, including the menu?
8. Can the site still be maintained by editing `data/` files without layout changes?
9. Are all routes, content, and working functions preserved?

If any answer is no, refine the weakest section and repeat the review before task 9.

## Final report

When the ticket is complete, report:

- The design problems confirmed in the audit.
- The improvements made, page by page.
- Every file changed.
- Lint, build, viewport, keyboard, and Lighthouse results.
- Missing authentic assets or content, including the English-only content and unapproved Marathi labels listed above.

## Branch and release notes

- `sahayog_samarpan_first_template` is the pre-Sanstha snapshot. Do not commit on it.
- `sahayog_samarpan_sanstha_template` is the SANSTHA-001 implementation branch. Do not redo that work here.
- All implementation for this ticket happens on `sahayog_samarpan_chatgpt1_theme`, which starts at `main` `aa6921f`.
- `main` is production. Merge only after the preview of this branch is approved.
- Push this branch to `origin` (`github.com/ankitnehul/sahyog-samarpan-seva-trust`) when a preview is wanted. Do not push it as part of merely saving this ticket unless asked.
