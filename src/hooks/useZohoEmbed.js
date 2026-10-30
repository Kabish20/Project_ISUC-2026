import { useState, useEffect } from 'react';

// Trusted Zoho Form origins for postMessage validation
const TRUSTED_ORIGIN_REGEX = /^https:\/\/[a-z0-9-]+\.(zohopublic\.(in|com)|zoho\.(com|in))$/i;

/**
 * Custom hook to manage Zoho Form iframe auto-resizing and message handling
 * Hardened with strict origin validation (CWE-345 mitigation) and bounds checks.
 *
 * @param {boolean} isOpen - Whether the modal/embed is active
 * @param {string} targetPerma - The form perma identifier to match incoming messages
 * @param {string} initialHeight - Default fallback height
 * @returns {string} Dynamic iframe height string (e.g. "650px")
 */
export const useZohoEmbed = (isOpen, targetPerma, initialHeight = '650px') => {
  const [iframeHeight, setIframeHeight] = useState(initialHeight);

  useEffect(() => {
    if (!isOpen) return;

    const handleMessage = (event) => {
      // Security Check: Verify message sender origin is trusted Zoho endpoint
      if (!event.origin || !TRUSTED_ORIGIN_REGEX.test(event.origin)) {
        return;
      }

      const evntData = event.data;
      if (evntData && typeof evntData === 'string') {
        const zf_ifrm_data = evntData.split(':');
        let zf_perma = '';
        let heightValue = 0;

        if (zf_ifrm_data.length === 2) {
          zf_perma = zf_ifrm_data[0];
          heightValue = parseInt(zf_ifrm_data[1], 10);
        } else if (zf_ifrm_data.length >= 3) {
          zf_perma = zf_ifrm_data[0] + ':' + zf_ifrm_data[1];
          heightValue = parseInt(zf_ifrm_data[2], 10);
        }

        // Validate target perma and enforce sensible height bounds (prevent layout DoS)
        if (zf_perma === targetPerma && Number.isFinite(heightValue) && heightValue >= 200 && heightValue <= 3500) {
          setIframeHeight(`${heightValue + 15}px`);
        }
      }
    };

    window.addEventListener('message', handleMessage, false);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isOpen, targetPerma]);

  return iframeHeight;
};

export default useZohoEmbed;
