/**
 * Design system motion variants (Framer Motion).
 * Use with motion.* components; pair with staggerContainer for staggered list/hero entrances.
 * Prefer defaultTransition for duration/easing consistency.
 */

/** Standard fade + move up (e.g. hero text blocks). y: 24px on enter. */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 12 },
};

/** Softer fade-up for less prominent elements. */
export const fadeUpSubtle = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/** Header / nav entrance from top. */
export const slideDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

/** Stagger children with 80ms delay between each; use for hero column or list entrances. */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

/** Faster stagger for dense grids or cards. */
export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.06,
    },
  },
};

/** Default easing and duration; use for all block animations so motion feels consistent. */
export const defaultTransition = {
  type: "tween" as const,
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94],
};
