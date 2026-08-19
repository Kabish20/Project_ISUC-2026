import React from 'react';
import { FORM_CONFIG } from '@/constants/formConfig';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { useZohoEmbed } from '@/hooks/useZohoEmbed';

/**
 * Buyer Registration Zoho Form Lightbox Modal
 */
export const BuyerModal = ({ isOpen, onClose }) => {
  useLockBodyScroll(isOpen);
  const iframeHeight = useZohoEmbed(isOpen, FORM_CONFIG.buyer.perma, '650px');

  const getIframeSrc = () => {
    let src = `${FORM_CONFIG.buyer.baseUrl}?zf_rszfm=1`;
    try {
      if (typeof window !== 'undefined' && window.location && window.location.href) {
        let rfr = window.location.href;
        if (rfr) {
          const queryIndex = rfr.indexOf('?');
          if (queryIndex > -1) {
            rfr = rfr.substring(0, queryIndex);
          }
          if (rfr.length > 1800) {
            rfr = rfr.substring(0, 1800);
          }
          src += `&referrername=${encodeURIComponent(rfr)}`;
        }
      }
    } catch (e) {
      console.warn('Error computing referrer for Zoho embed', e);
    }
    return src;
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .zf_lB_Dimmer_828647 { 
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(4px);
          z-index: 10000000;
        }

        .zf_lB_Container_828647 {
          position: fixed;
          background-color: #ffffff;
          margin: 0;
          padding: 0;
          width: 70%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: none;
          max-height: calc(100% - 60px);
          z-index: 10000001;
          transition: height 0.3s ease;
          outline: none;
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .zf_main_id_828647 {
          height: 100%;
          display: flex;
          overflow-y: auto;
          overflow-x: hidden;
          border-radius: 16px;
        }

        .zf_lb_closeform_828647 {
          position: absolute;
          right: -16px;
          top: -16px;
          background: #1e293b;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          cursor: pointer;
          border: 2px solid #ffffff;
          z-index: 10000003;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, background-color 0.2s;
        }

        .zf_lb_closeform_828647:hover {
          background: #0f172a;
          transform: scale(1.1);
        }

        .zf_lb_closeform_828647:before, .zf_lb_closeform_828647:after {
          position: absolute;
          content: ' ';
          height: 16px;
          width: 2px;
          background-color: #ffffff;
        }

        .zf_lb_closeform_828647:before {
          transform: rotate(45deg);
        }
        .zf_lb_closeform_828647:after {
          transform: rotate(-45deg);
        }

        @media (max-width: 640px) {
          .zf_lB_Container_828647 {
            width: 92% !important;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .zf_lB_Container_828647 {
            width: 80% !important;
          }
        }
      `}</style>

      {/* Backdrop Dimmer */}
      <div className="zf_lB_Dimmer_828647" onClick={onClose} />

      {/* Lightbox Container */}
      <div
        id="containerDiv_828647"
        className="zf_lB_Container_828647"
        style={{ height: iframeHeight }}
      >
        <div id="5h0bIxK0Wj3PqZ3VFNxPE96ZemcNE-YRJTsdt4Jb2wI_828647" className="zf_main_id_828647">
          <iframe
            src={getIframeSrc()}
            style={{ border: 'none', minWidth: '100%', overflow: 'hidden', height: '100%' }}
            title={FORM_CONFIG.buyer.title}
          />
        </div>
        <div
          id="deleteform_828647"
          className="zf_lb_closeform_828647"
          onClick={onClose}
          tabIndex={0}
          role="button"
          aria-label="Close buyer registration modal"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onClose();
            }
          }}
        />
      </div>
    </>
  );
};

export default BuyerModal;
