import { useState, useEffect } from 'react';

/**
 * Custom hook to manage Zoho Form iframe auto-resizing and message handling
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
      const evntData = event.data;
      if (evntData && typeof evntData === 'string') {
        let zf_ifrm_data = evntData.split(':');
        let zf_perma = '';
        let zf_ifrm_ht_nw = '';

        if (zf_ifrm_data.length === 2) {
          zf_perma = zf_ifrm_data[0];
          zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + 'px';
        } else if (zf_ifrm_data.length >= 3) {
          zf_perma = zf_ifrm_data[0] + ':' + zf_ifrm_data[1];
          zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[2], 10) + 15) + 'px';
        }

        if (zf_perma === targetPerma) {
          setIframeHeight(zf_ifrm_ht_nw);
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
