# Release evidence — Fran Pérez landing

## Scope

This document records the non-test acceptance evidence for `build-fran-perez-landing`. Automated tests and TDD are intentionally out of scope by explicit project instruction.

## Automated quality checks

| Check | Command | Result |
| --- | --- | --- |
| Strict TypeScript | `npm run typecheck` | Passed |
| Lint | `npm run lint` | Passed |
| Production build | `npm run build` | Passed |

## Manual release gates

- [x] Static page order is Navbar, Hero, Bio, Music, supporters/labels, News, Featured At, Booking, social, and footer.
- [x] Booking is informational only: no form, input, submit action, API route, provider, storage, or fake submission exists.
- [x] Required manifest parsing uses `safeParse` and throws on invalid data before publication selectors run.
- [x] News, Featured At, releases, supporters, and social links publish only fully verified entries; the current manifest intentionally renders their pending states.
- [x] Hero uses the centralized supplied live-photo sequence; Bio and Booking retain distinct provisional vertical photos with descriptive filenames and captions.
- [x] No support videos or `.DS_Store` files were copied into `public/`.
- [x] Hero keeps its first image as the eager LCP candidate; the second layer is CSS-only, lazy, decorative, pointer-transparent, and optional alongside CursorGrid.
- [x] Native focus styles, landmarks, headings, alt text, skip link, and 44px interaction targets are present.
- [x] Smooth Cursor and Progressive Blur have reduced-motion, capability, exclusion, and cleanup fallbacks.
- [x] Music and Featured At use native overflow/snap rails with supplementary controls and no carousel dependency.

## Unresolved publication gates

Release remains blocked until the manifest receives:

- official canonical origin and verified destinations;
- final copy, identity/claim review, image rights/releases, and approved focal points;
- verified upstream provenance/license for the supplied CursorGrid snapshot;
- Booking provider, privacy, retention, abuse, and failure policies;
- a final decision on preview-photo publication.

The reserved `https://example.com/fran-perez` value is a centralized placeholder, not a published official URL. The four copied photos are preview assets and remain explicitly marked `preview` with unapproved rights/release gates.

## Manual checks still required before release

- [ ] Inspect 320, 390, 768, 1024, and 1440px layouts in a real browser.
- [ ] Inspect keyboard, screen reader landmarks, focus visibility, contrast, touch scrolling, and native rail reachability.
- [ ] Inspect fine-pointer CursorGrid/Smooth Cursor lifecycle, Hero exit, tab/focus behavior, visibility loss, resize, and unmount cleanup.
- [ ] Compare reduced-motion/reduced-transparency behavior and browser fallbacks in Chrome, Safari, and Firefox.
- [ ] Record LCP/CLS/INP, delivered Hero bytes, client JavaScript gzip, and CursorGrid frame cost.

## Hero sequence evidence

- Source `/Users/leonardohernandez/Desktop/Trabajo/Lyon incode/fran-perez/horizontal-photos/651815283_18057542510435236_3524907248285710611_n.jpg` maps to `public/media/photos/fran-hero-live-horizontal.jpg` and remains the first Hero/LCP asset.
- Source `/Users/leonardohernandez/Desktop/Trabajo/Lyon incode/fran-perez/horizontal-photos/642593185_18001379753854275_4538077589249504326_n.jpg` maps to `public/media/photos/fran-hero-dj-frontal-horizontal.jpg` and is the second Hero asset.
- The CSS-first sequence runs for 28 seconds: the first image holds, crossfades to the frontal DJ image, holds, then crossfades back to the first image without a hard loop cut.
- `prefers-reduced-motion: reduce` disables animation and hides the second layer, leaving the first image static and eager.
