
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Scale up ──
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Stagger container (wraps children with staggered delays) ──
export const staggerContainer = (staggerAmount = 0.2, delayChildren = 0.2) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerAmount,
      delayChildren: delayChildren,
    },
  },
});

// ── Stagger item (used inside stagger container) ──
export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Scale stagger item ──
export const staggerScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 20,
      mass: 0.8,
    },
  },
};

// ── Float animation (continuous, for mockups) ──
export const float = {
  y: [0, -15, 0],
  transition: {
    duration: 7,
    ease: 'easeInOut',
    repeat: Infinity,
  },
};

// ── Smooth hover effect ──
export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.3, ease: 'easeOut' },
};

// ── Tap effect ──
export const tapScale = {
  scale: 0.98,
};

// ── Viewport config (shared whileInView settings) ──
export const viewport = { once: true, amount: 0.2 };

