# MUSKAN-001 — Contrast, photography, and motion

| Field | Value |
|---|---|
| Type | feat (visual theme) |
| Status | Open. Not started. |
| Repository | `sahyog-seva-foundation` (Next.js 16, React 19, Tailwind v4) |
| Reference | https://muskanfoundation.org.in/ — visual reference only |
| Parent tickets | [SANSTHA-001](./SANSTHA-001-sanstha-redesign.md), [CHATGPT1-001](./CHATGPT1-001-premium-bilingual.md) |
| Work branch | `sahayog_samarpan_muskan_theme` |
| Branched from | `main` at `fca3041` (`feat(content): add farmer welfare and the new seal`) |
| Live site to inspect first | https://sahayogsamarpan.org/ |
| Deploy target | Preview of this branch only. Do not merge to `main` until that preview is approved. |

## Why this ticket exists

`main` is one visual theme from the header to the footer: paper, a hairline rule, then more paper. Navy appears in the opening and the footer and then disappears. Photographs sit in bordered frames beside text. Sections do not change character, so a long page feels like one document that keeps going.

Home carries that flatness and also too much at once. In `app/page.tsx` today a visitor gets a type-only opening, two full visit layouts, all seven areas of work, a three-item recent list, a gallery grid, an upcoming essay, and a join band. Our Work and Gallery already hold the record and the photographs. Home repeats them.

What is worth taking from Muskan Foundation is not their programs or their copy. It is three visual habits:

1. **Background images.** A real photograph fills a section. Type sits on a dark scrim, so the picture and the words are one screen.
2. **Colour contrast.** Dark bands and light bands alternate. A section is obviously finished before the next one starts.
3. **Transitions.** The opening settles in, and the next section arrives as it enters the screen. Motion explains the change. It does not decorate every element.

After this ticket, Home should be readable in a few screens, and the rest of the site should use the same light and dark surfaces so it no longer feels like a single unbroken theme.

## Precedence

When this brief disagrees with SANSTHA-001 or CHATGPT1-001, this table wins. A later section of this ticket does not override the row above it.

| Question | Decision |
|---|---|
| Full-bleed photography | Home opening, and the Gallery heading only. The photograph is an existing file in `public/`. Text sits on a scrim, not across a face. |
| `object-fit` | `cover` is allowed only on those two background bands. Every photograph that is the subject of a visit, gallery item, team portrait, or lightbox stays `object-contain`, uncropped. |
| Navy surfaces | Navy may be a full section band, not only the opening and the footer. Paper sections stay paper. |
| Motion | Entrance motion is opacity and a short upward move, once, and only when JavaScript runs and the user has not asked for reduced motion. No animation library, no parallax, no scroll-jacking, no looping. |
| Reduced motion | The existing rule in `app/globals.css` stays: under `prefers-reduced-motion: reduce`, every animation and transition duration collapses. That includes entrance and the 150ms hover. Do not special-case hover back on. |
| Home length | Home shows one current story, not two featured visits, and does not repeat the recent list or the gallery grid. CHATGPT1-001’s “two featured visits” acceptance is retired by this row. |
| Palette | Keep the seal colours already in `app/globals.css`. Do not import Muskan’s greens, teals, or layout chrome. |
| Content | Do not rewrite, translate, invent, or delete Marathi or English copy, people, dates, or contact details. Do not put membership fees back on Home or Contact. Do not sync About’s Focus Areas bullets with `data/focus-areas.ts`. |
| Language | No language switcher. Marathi leads. English follows on the same page. `html lang="en"` stays; changing it is out of scope. |
| Packages | No animation library, carousel, UI kit, CMS, or backend. CSS plus at most one small client component for the in-view entrance. |

## What to take from Muskan, and what to leave there

Take:

- One idea per screen, with the next idea clearly a different surface.
- A photograph used as the ground of a section, with a dark veil so the type stays readable.
- A short entrance: the heading arrives, then the line under it.
- Strong contrast between a dark band and the paper section that follows it.

Leave:

- Their words (“From Isolation to Inclusion”, MDVI, centres, therapies, sponsorship products).
- Their donate-first hero, career page, publications, and impact counters. Sahayog has no approved statistics. Do not add a counter.
- Their palette, their logo, and their card carousels. Duplicate sliding cards are the complexity this ticket is removing.

## What `main` already does — do not undo

Confirm these on `sahayog_samarpan_muskan_theme` before editing. If one is missing, restore it before any visual work.

- Routes, in this order: `/`, `/about`, `/our-work`, `/team`, `/gallery`, `/contact`. There is no custom `app/not-found.tsx`. Do not add one.
- Fonts: Tiro Devanagari Marathi, Mukta, Newsreader, Source Sans 3. Plus Jakarta Sans stays removed.
- Tokens in `app/globals.css`: navy `#1e2a5c`, saffron `#ef7c20`, gold `#f5b81d`, green `#6cae3e`, paper `#f7f2e8`, paper-deep `#efe7d6`, ink `#1f1d1a`, ink-soft `#5b564d`. Accessible text colours stay: saffron text `#9a3412`, saffron action `#c2410c`, gold ink `#92600a`, green ink `#3d6b4f`. Body text and button labels stay at least 4.5:1. Large display type on a dark band stays at least 3:1. Do not put white text on `#ef7c20`, `#f5b81d`, or WhatsApp green `#25D366`. WhatsApp stays ink text on `#25D366`.
- The seal file is `/logo/foundation-seal.png` (1884×1543, transparent). Frames today: nav `h-12 w-[3.67rem]`, home `h-24 w-[7.33rem]`, footer `h-14 w-[4.27rem]`. `Seal` has no paper fill behind it. Do not restore `bg-paper` on the seal, and do not mask it into a circle. Favicon and Apple icon keep reading `siteConfig.logo`.
- Focus areas in `data/focus-areas.ts`, including Farmer Welfare / शेतकरी कल्याण. Home and the footer both read that list. Green still marks only areas with `growth: true` (education, child welfare, environment, youth). Farmer welfare, healthcare, and women empowerment stay without the green bar. On the navy areas band, the marker is a `brand-green` bar, not green text. Footer lists stay plain text, with no green bar.
- Home join heading is **सदस्य व्हा** / **Join the foundation**. The paragraph is only “Membership is open to any Indian citizen who agrees with the foundation’s objectives.” No fee amounts on Home.
- Contact membership is the `JoinLink` only. No fee amounts on Contact. About Governance still shows the fees, in both languages, inside the existing `paper-deep` box. Leave that until a later content change.
- Donate stays visible, `aria-disabled`, in the tab order, and labelled coming soon. It does not navigate. Join still opens `siteConfig.membershipFormUrl`.
- `ongoingEvent` is `null`. The ongoing block renders only when that value is set. See the ongoing-event contract below.
- Devanagari is never letter-spaced or uppercased. `overflow-wrap` stays `break-word`.
- Desktop navigation stays at `xl` (1280px). Below that, the mobile menu. Current page uses `aria-current` and a gold underline. The menu closes on navigation, on `Escape` (focus returns to the button), and when the viewport crosses 1280px. Body scroll locks while it is open and is restored when it closes. `--header-offset` is measured from the real header and keeps in-page anchors below it.
- Skip link, `id="content"`, and `scroll-padding-top` / `scroll-margin-top` stay. The header is sticky paper. The footer is not sticky.
- `ContentImage` reserves space from `data/image-meta.ts`, defaults to `contain`, and on failure shows “Photograph unavailable” at the image ratio. A missing meta entry uses the existing 1200×900 fallback. Do not throw.
- `components/EventCard.tsx` keeps the full Marathi `description[]`, the optional `secondaryPhoto`, the `!! सेवा हेच कर्म !!` close, and the wide / portrait / square frame. Our Work keeps the sticky year label and the hash target for each visit.
- Gallery keeps album ids, captions in both scripts, `spansGalleryColumns`, the dialog, Close, `Escape`, and focus return to the image that opened it. Images inside the grid and the dialog stay `contain`.
- `Avatar` still falls back to initials when a photo is missing. `ComingSoon.tsx`, `TeamMember.hidePhoto`, unused `brand-cream`, and the footer’s unused `twitter` icon mapping stay untouched.
- Root metadata (title template, description, keywords, icons), Vercel Analytics, and Speed Insights stay mounted in `app/layout.tsx`.
- The type comment on `WorkEvent.photoFit` says the default is cover. The component default is contain. During this work, change the comment to contain. Behaviour of contained photographs does not change.

## Goal

Home is six blocks at most, in this order:

1. Who the sanstha is, on a real seva photograph.
2. The areas of work, as a short high-contrast list.
3. The current story: the ongoing event when one is set, otherwise the single latest visit.
4. Two existing links, to the record and the gallery.
5. The first upcoming item, only when `upcomingEvents` has one.
6. How to join.

Blocks 4 and 5 are part of the page. They are short. They are not a second copy of Our Work or Gallery.

About, Our Work, Team, Gallery, and Contact use the same dark and light surfaces so the site has one theme, not a restyled home page on the old pages.

## Out of scope

- New routes, a renamed navigation order, a custom 404, or a light/dark theme switcher. “One theme” means the site looks the same all the way down. The fix is alternating surfaces, not a user-controlled theme.
- Rewriting `data/events.ts`, `data/about.ts`, `data/team.ts`, `data/gallery.ts`, `data/upcoming.ts`, `data/ongoing.ts`, or `data/site.ts`, except to point a background at an image path that already exists.
- Inventing a slogan, a statistic, a testimonial, a stock photograph, or a new interface sentence. Links reuse labels already in `siteConfig.nav`.
- Turning donations on, adding a contact form, removing fees from About, or aligning About’s Focus Areas list with the seven home areas.
- Changing `html lang`, adding Open Graph, Twitter cards, a sitemap, or `robots`.
- Copying Muskan’s information architecture (centres, program mega-menu, donors, career, media).
- Backend and Vercel project settings.
- Merging this branch to `main` as part of writing or starting the ticket.

## Home, before and after

Home today, top to bottom:

| Block | What the visitor gets |
|---|---|
| Opening | Navy, seal, saffron motto. No photograph. Link jumps to the first visit. |
| Ongoing | Rendered only when `ongoingEvent` is set, and today it omits `appeal` and `tagline`. |
| Featured | Two full visits (Dussehra, then Ganpati). |
| Areas | Seven names on paper, split by hairlines. Growth areas have a green left bar. |
| Recent record | Three more visits as a date list. |
| Gallery | Five photographs. |
| Upcoming | Every upcoming item, English description and Marathi description. |
| Join | Membership sentence and the form button, on `paper-deep`. |

Home after this ticket:

| Order | Section | Surface | Content |
|---|---|---|---|
| 1 | Opening | Newest visit photograph, full width, navy scrim. Solid navy if there is no visit or the face rule rejects the crop. | Seal, white **सेवा हेच कर्म**, white **Service is our Duty**, year and city. One link, using the existing nav label **आमचे कार्य · Our Work**, to `/our-work`. Join stays in the header. |
| 2 | Areas of work | Solid navy, white type | All seven areas from `focusAreas`, Marathi then English. Green bar only where `growth` is true. |
| 3 | Current story | Paper | Ongoing event when set; otherwise only `workEvents[0]`. See the contracts below. Hidden when both are absent. |
| 4 | Record links | `paper-deep` | Two links only: **आमचे कार्य · Our Work** to `/our-work`, and **गॅलरी · Gallery** to `/gallery`. No recent list and no gallery grid. |
| 5 | Upcoming | Paper, only when `upcomingEvents.length > 0` | `upcomingEvents[0]` only: `titleMr`, `title`, `dateLabel`, `location` when present, `description`, and `descriptionMr`. |
| 6 | Join | Solid navy | Existing “Join the foundation” copy and `JoinLink`. No fees. |

The second featured visit, the three-item recent list, and the five gallery highlights leave Home. They remain on their own pages.

The opening motto changes from saffron-on-navy to white-on-scrim. Saffron stays on the Join button. The opening no longer jumps to a `#id` on the same page.

### Latest visit

When `ongoingEvent` is `null` and `workEvents` has an item, block 3 shows `workEvents[0]`:

- Date, place, Marathi title, English title, and the first description paragraph only. The rest of `description[]` stays on `/our-work`.
- The photograph is a contained `ContentImage`, with `photoFit` (default contain), `photoPosition`, the existing frame from `imageFrame`, and the “Photograph unavailable” fallback.
- Alt text is the English event title. This is the meaningful image.
- Link label stays **आमचे कार्य · Read this visit**, to `/our-work#${id}`.

### Ongoing event

When `ongoingEvent` is set, it replaces block 3. Do not also show the latest visit. The opening background still uses `workEvents[0].photo` when that visit exists. It does not use the flyer as the hero.

Render every field, in this order:

- `dateLabel`, `timeLabel`, `location`
- `titleMr`, then `title`
- each line of `intro`
- the flyer, when present, as a contained image with alt equal to `title`, and the same failure fallback
- each line of `appeal`
- `tagline`

There is no `/our-work` anchor for an ongoing event. Do not invent one. The record links in block 4 still go to Our Work and Gallery.

### Empty states

- No `workEvents`: opening is solid navy, with the seal and motto. Block 3 is omitted. Do not throw.
- Image file missing or broken: the contained image shows “Photograph unavailable”. The opening falls back to solid navy if its own image fails.
- No upcoming items: omit block 5. Do not leave an empty heading.
- No gallery albums: Gallery shows the paper `PageHeading` only. Do not throw.

## Surfaces

Define these once, in `app/globals.css` or a single shared section wrapper, and use them on every page. Do not invent a new palette per page.

| Surface | Ground | Type | Use |
|---|---|---|---|
| Photo | Existing photograph via `next/image` (`fill`, `priority` on the home opening, `sizes` matching the viewport), `object-cover`, `object-position` from `photoPosition` when that field exists. Minimum height is `calc(100dvh - var(--header-offset))` on desktop and `70dvh` on a phone, so the sticky header is not counted twice. | White motto and the line under it. | Home opening, and the Gallery heading. |
| Scrim | Navy at roughly 60% over the photograph, darker if a sample of the text area is still too bright | Large type ≥ 3:1. Any sentence under it ≥ 4.5:1. Measure the rendered scrim, not the flat navy token alone. | Only over a photo surface. |
| Ink band | Solid navy | White titles. Secondary lines white, or gold only when gold on navy clears 3:1. | Areas of work, Join, About objectives, Our Work heading, Team committee heading, Contact membership. |
| Paper | `#f7f2e8` | Ink titles in navy, body in ink | Latest visit, upcoming, About body, Team members, Contact details. |
| Paper deep | `#efe7d6` | Same as paper | Home record-links. Team project heads. About Governance box. At most one full-width `paper-deep` band per page besides that existing Governance box. |

Saffron remains the Join button (`brand-saffron-action` with white label). It is not a section background.

Green remains a thin marker on growth areas. It is not a hero colour and it is not used as text on navy.

### Focus

`:focus-visible` on paper stays the gold-ink outline. On a navy band, a photo scrim, `JoinLink`, and the disabled Donate control, the outline is `brand-gold` (`#f5b81d`) with a 3px offset, so it is visible on navy. The WhatsApp control keeps a 2px ink outline. The Gallery Close control keeps the paper gold-ink outline. Focus must remain visible at 200% zoom.

### PageHeading

`components/PageHeading.tsx` gains a `surface` prop:

| `surface` | Ground | Title | English line and description | Rule |
|---|---|---|---|---|
| `paper` (default) | Paper, current spacing | Navy | Ink / ink-soft, as today | `brand-gold-ink` |
| `navy` | Ink band | White | White | `brand-gold` |
| `photo` | Photo plus scrim. The image is `aria-hidden`. | White | White | `brand-gold` |

About, Team members, and Contact’s page title use `paper`. Our Work and the Team committee heading use `navy`. Gallery uses `photo` when the first album has an image, otherwise `paper`.

## Background images

- Home’s opening uses `workEvents[0].photo` and, when set, `workEvents[0].photoPosition`. Today that file is `/images/our-work/dussehra-balghar-2026.jpg`. A newer first event replaces it. Do not hard-code a second asset. Do not use a CSS `background-image` URL; use `next/image` so the file stays optimised.
- The opening image is decorative: `alt=""` and `aria-hidden="true"`. The same photograph may appear again, contained, in the latest-visit section, with the event title as alt. That is the one allowed repeat. Assistive technology announces it once.
- Gallery’s heading uses `galleryAlbums[0].images[0]`, also decorative. That image stays in the grid with its real alt, caption, and dialog. Do not remove it from the album.
- No new image files. No stock. No crop that places a child’s face under the motto. If the photograph is portrait or the text would cover a face, put the type in the darker lower or side region, or fall back to solid navy and show the photograph only as the contained document image.
- The seal stays an `<Image>` in the flow, in front of the scrim, not blended into the photograph.

## Transitions

One implementation, reused. It must not wrap the navbar, the mobile menu, the gallery dialog, or a photograph.

- Server HTML renders every section fully visible. JavaScript may add an entrance class. It must not set `opacity: 0` before hydration in a way that hides content when JavaScript is off or slow.
- With motion allowed, the opening motto fades and rises about 12px over 500–700ms. The English line follows about 120ms later. The seal does not bounce.
- When a section enters the viewport, its heading and body do the same fade-and-rise once. They do not replay on scroll-up.
- With motion allowed, hover and focus stay colour and underline at about 150ms. Size and layout do not change.
- Under `prefers-reduced-motion: reduce`, the global rule already sets transition and animation duration to almost zero. Content is in its final position. Do not add a second, conflicting rule that restores hover motion.
- With JavaScript disabled, every section is visible, including text, links, and images. Only the mobile menu, the gallery dialog, the donate guard, and the image error fallback may depend on JavaScript.
- Do not animate the mobile menu, the photograph itself, or counters.

## Other pages

Apply the surfaces. Do not redesign each page into a new composition.

| Page | Change | Preserve |
|---|---|---|
| About | Paper `PageHeading`. One navy band around both objective lists (English “Our Objectives” and Marathi “आमची उद्दिष्टे”), so the two language passes share one break. Journey, Focus Areas, and Commitment stay on paper. | Full English block, then full Marathi block. Governance box, both fee lines, commitment quote. Do not rewrite the About Focus Areas bullets. `max-w-7xl` stays. |
| Our Work | `PageHeading` `surface="navy"`. Visits stay on paper. | Year rail, sticky year, hash links, full Marathi accounts, contained photos, secondary photo, closing motto line. |
| Team | Committee heading is a navy band. Project heads stay the one `paper-deep` band. Members stay paper. | All three groups, portrait frames, initials fallback, responsive columns. Do not add a second `paper-deep` band. |
| Gallery | `PageHeading` `surface="photo"` when the first image exists. Grid stays on paper. | Every image remains in its album, including the one used in the heading. Dialog, Close, Escape, focus return, captions, column spans. |
| Contact | Page title on paper. Membership (section २) is the navy band: bilingual heading plus `JoinLink` only. | Numbered order: WhatsApp, membership, then phone, email, place, NGO Darpan, and social links. WhatsApp stays ink on green. `tel:` and `mailto:` stay. The page may keep `max-w-5xl`. |

The header stays sticky paper, including over the photograph, so the seal and the name are readable on load. The footer stays navy and in normal flow: motto, seven focus areas, page links, contact, social links that are empty stay “coming soon”, establishment year. Do not make the footer sticky.

## Acceptance

- Home has at most the six blocks in the table, in that order. No gallery grid and no three-item recent list.
- The first screen at 390×844 and 1440×900 shows the motto on a photograph or, if the face rule or a missing file rejected that photograph, on solid navy. The English line is readable against the scrim. The sticky header is still paper.
- Areas of work show all seven names, including Farmer Welfare, with a green bar only on growth areas.
- Upcoming, when present, shows the Marathi description as well as the English one.
- An ongoing event, when set in data, replaces the latest visit and shows intro, appeal, tagline, time, and flyer. The latest visit is not duplicated under it.
- Home and Contact show no rupee amounts. About Governance still does, in both languages.
- With JavaScript disabled, Home text and links are visible. Nothing is left at `opacity: 0`.
- Reduced motion shows no entrance travel. The existing global rule may also remove hover transitions. Keyboard focus remains visible on paper, navy, the scrim, Join, Donate, WhatsApp, and Gallery Close.
- The opening and Gallery heading images are hidden from assistive technology. The contained visit image and the gallery grid image are not.
- `npm run lint` and `npm run build` pass. No new dependency in `package.json`. Analytics and Speed Insights are still in the root layout.
- `main` is unchanged until a preview of `sahayog_samarpan_muskan_theme` is approved.

## Verification

The project has no test script. `npm run lint` and `npm run build` are the automated checks.

1. Home at 320, 390, 768, 1024, 1280, and 1440px: opening, areas, one current story, two record links, upcoming if present, join. No horizontal scroll. Nothing else.
2. Sample the opening text colour against the rendered scrim. Record the contrast ratio for the motto and for the sentence under it.
3. Turn on `prefers-reduced-motion` and reload. Content is present and still. Then tab through the page.
4. Tab from the skip link through the header Join and Donate, the areas, and the visit link. Repeat on a navy band and on the scrim. Focus is visible.
5. Open the mobile menu, close it with `Escape`, and confirm focus returns and body scroll is restored. Widen past 1280px and confirm the menu closes.
6. Our Work still shows the visits that left Home, including hash targets that clear the sticky header. Gallery still shows every album image.
7. Open a gallery photograph, confirm Close receives focus, close with `Escape`, and confirm focus returns. The dialog fits at 320px. The image is `contain`.
8. Compare contained photographs with their files. A face or a line of text in the photo touching a crop edge is a failure. The opening and Gallery heading `cover` crops are the exceptions, and they must not place type on a face.
9. Disable JavaScript and reload Home. Motto, areas, visit text, and links are visible.
10. Break one image URL locally and confirm “Photograph unavailable” rather than a blank hole or a crash. Temporarily empty `upcomingEvents` and confirm that block disappears.
11. Temporarily set `ongoingEvent` to a fixture with intro, appeal, tagline, time, and flyer. Confirm it replaces the latest visit and the opening still uses the newest visit photo. Remove the fixture before the branch is reviewed.
12. Contact: WhatsApp, the membership form, both `tel:` links, email, and NGO Darpan still match `data/site.ts`. No fee amounts.
13. At 200% zoom, Home and Contact do not trap text or hide the focus outline.
14. Attach 390px and 1440px screenshots of all six routes to the merge request.
15. In the preview, confirm the Analytics and Speed Insights requests are still present. Do not treat a Lighthouse score as a merge gate unless a regression is obvious from the hero.

## Branch notes

- Implement only on `sahayog_samarpan_muskan_theme`.
- `main` at `fca3041` is the production content release (farmer welfare, the new seal, fees removed from Home and Contact). Do not revert it.
- CHATGPT1-001 required two featured visits on Home. This ticket replaces that with one current story. Say so in the merge request so the old acceptance is not treated as a failure.
- Push this branch to `origin` when a Vercel preview is wanted. Do not push it merely because this ticket file was added, unless asked.
