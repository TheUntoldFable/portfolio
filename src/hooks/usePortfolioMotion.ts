import { useEffect, useState } from 'react';

/**
 * Editorial motion layer:
 *  - reveal-on-scroll via IntersectionObserver
 *  - scroll-linked parallax written to CSS custom properties
 *  - topbar "scrolled" state
 *
 * All scroll work happens inside a single rAF-throttled passive listener and
 * only ever writes custom properties, never individual element styles.
 */
export function usePortfolioMotion() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealables = document.querySelectorAll<HTMLElement>('.reveal');

    let observer: IntersectionObserver | undefined;

    if (!reduced && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer?.unobserve(entry.target);
            }
          }),
        { threshold: 0.12 },
      );
      revealables.forEach((el) => observer?.observe(el));
    } else {
      revealables.forEach((el) => el.classList.add('is-visible'));
    }

    const root = document.documentElement;
    const orbit = document.querySelector<HTMLElement>('.hero-orbit');
    const aside = document.querySelector<HTMLElement>('.aside-giant');
    const drifters = Array.from(document.querySelectorAll<HTMLElement>('.drift'));

    let frame: number | null = null;

    const update = () => {
      frame = null;
      const y = window.scrollY;

      setScrolled(y > 24);

      if (reduced) return;

      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      root.style.setProperty('--scroll-progress', String(max > 0 ? y / max : 0));

      // Hero orbit drifts up slowly as the hero leaves.
      if (orbit) orbit.style.setProperty('--orbit-shift', `${y * -0.12}px`);

      // Giant "+" in the orange panel counter-drifts against the scroll.
      if (aside) {
        const rect = aside.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        aside.style.setProperty('--aside-shift', `${(progress - 0.5) * -90}px`);
      }

      // Generic drift elements move relative to their own viewport position.
      for (const el of drifters) {
        const rect = el.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const depth = Number(el.dataset.depth ?? 40);
        el.style.setProperty('--drift', `${(progress - 0.5) * -depth}px`);
      }
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, []);

  return scrolled;
}
