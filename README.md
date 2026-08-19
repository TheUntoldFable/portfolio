# Tsvetomir Uzunoff — Portfolio

An editorial single-page portfolio for a senior frontend & mobile engineer based in
Sofia, Bulgaria.

Built as a work sample as much as a résumé: no framework beyond React, no UI kit, no
animation library. The motion layer is roughly 90 lines of `IntersectionObserver` and
one rAF-throttled scroll listener that writes CSS custom properties.

## Stack

- **React 19** + **TypeScript** (strict)
- **Vite** for build and dev
- Hand-written CSS with custom properties — no Tailwind, no CSS-in-JS
- `lucide-react` for interface icons; brand marks are inline SVG

## Commands

```bash
npm install
npm run dev        # dev server on :5173
npm run typecheck  # tsc -b
npm run build      # typecheck + production build
npm run preview    # serve the production build
```

## Notes on the implementation

**Motion.** `usePortfolioMotion` handles the whole animation layer. Reveals use a single
`IntersectionObserver` that unobserves on first intersection. Parallax runs in one
rAF-throttled passive scroll listener that only ever writes CSS custom properties
(`--scroll-progress`, `--orbit-shift`, `--drift`) rather than touching individual element
styles, so scrolling stays off the layout path.

**Reduced motion.** `prefers-reduced-motion: reduce` short-circuits the observer (final
state applied immediately), skips all parallax maths, and neutralises every transform and
transition in CSS.

**Layout.** Content is capped at 1440px via
`padding-inline: max(gutter, (100% - 1440px) / 2)`, which keeps section backgrounds
full-bleed while the content stays aligned to a single left edge at any viewport width.

**Content.** All copy lives in `src/data/content.ts` as typed data, so it could move to a
CMS without touching a component.

## Accessibility

- Semantic landmarks, one `h1`, logical heading order
- Visible focus rings on every interactive element
- Decorative orbit, grain, and index glyphs are `aria-hidden`
- Verified no horizontal overflow at 320, 375, 768, 1440, and 2000px

## Licence

Source is public so the site can be read as a work sample. The written content, CV
details, and photograph are not licensed for reuse.

## Deployment

Production: https://tsvetomir-uzunoff.vercel.app

Pushes to `main` deploy automatically via Vercel.
