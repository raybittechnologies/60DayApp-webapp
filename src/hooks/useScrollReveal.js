import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — triggers a CSS class when the element enters the viewport.
 * Returns a ref to attach and a boolean `isVisible`.
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

/**
 * Stagger delay helper — returns inline style with animation-delay
 */
export function staggerDelay(index, base = 0.1) {
  return { animationDelay: `${index * base}s` };
}
