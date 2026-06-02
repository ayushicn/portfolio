import type { Variants, Transition } from 'framer-motion';

/**
 * Motion archetypes for the portfolio.
 * All Framer Motion components that use these should also call
 * useReducedMotion() and skip animation when it returns true.
 *
 * Archetype 1 — Page enter: stagger children fade-up.
 * Archetype 2 — Hover lift: cards.
 * Archetype 3 — Link underline: handled in CSS (AnimatedLink.module.css).
 */

// ─── Archetype 1: Page enter ──────────────────────────────────────────────

export const pageContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const pageItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    } as Transition,
  },
};

// ─── Archetype 2: Card hover lift ────────────────────────────────────────

export const cardVariants: Variants = {
  rest: {
    y: 0,
    boxShadow: '0 1px 4px rgba(26,23,21,0.06), 0 0 0 1px rgba(26,23,21,0.04)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  hover: {
    y: -4,
    boxShadow: '0 16px 40px rgba(26,23,21,0.12), 0 0 0 1px rgba(26,23,21,0.06)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const cardImageVariants: Variants = {
  rest: {
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};
