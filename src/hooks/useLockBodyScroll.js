import { useEffect } from 'react';

/**
 * Custom hook to lock document body scrolling when a modal or overlay is open
 * @param {boolean} isLocked - Whether scrolling should be locked
 */
export const useLockBodyScroll = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isLocked]);
};

export default useLockBodyScroll;
