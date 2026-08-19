import { useState, useEffect } from 'react';

/**
 * Custom hook to track window scroll position and threshold state
 * @param {number} threshold - Scroll offset in pixels to trigger isScrolled
 * @returns {{ scrollY: number, isScrolled: boolean }}
 */
export const useScrollPosition = (threshold = 50) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { scrollY, isScrolled };
};

export default useScrollPosition;
