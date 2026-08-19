import React from 'react';
import { FORM_CONFIG } from '@/constants/formConfig';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { useZohoEmbed } from '@/hooks/useZohoEmbed';

/**
 * Exhibitor Stall Booking Zoho Form Lightbox Modal
 */
export const ExhibitModal = ({ isOpen, onClose }) => {
  useLockBodyScroll(isOpen);
  const iframeHeight = useZohoEmbed(isOpen, FORM_CONFIG.exhibitor.perma, '650px');

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .zf_lB_Dimmer_168832 { 
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(4px);
          z-index: 10000000;
        }

        .zf_lB_Container_168832 {
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

        .zf_main_id_168832 {
          height: 100%;
          display: flex;
          overflow-y: auto;
          overflow-x: hidden;
          border-radius: 16px;
        }

        .zf_lb_closeform_168832 {
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

        .zf_lb_closeform_168832:hover {
          background: #0f172a;
          transform: scale(1.1);
        }

        .zf_lb_closeform_168832:before, .zf_lb_closeform_168832:after {
          position: absolute;
          content: ' ';
          height: 16px;
          width: 2px;
          background-color: #ffffff;
        }

        .zf_lb_closeform_168832:before {
          transform: rotate(45deg);
        }
        .zf_lb_closeform_168832:after {
          transform: rotate(-45deg);
        }

        @media (max-width: 640px) {
          .zf_lB_Container_168832 {
            width: 92% !important;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .zf_lB_Container_168832 {
            width: 80% !important;
          }
        }
      `}</style>

      {/* Backdrop Dimmer */}
      <div className="zf_lB_Dimmer_168832" onClick={onClose} />

      {/* Lightbox Container */}
      <div
        id="containerDiv_168832"
        className="zf_lB_Container_168832"
        style={{ height: iframeHeight }}
      >
        <div id="Jp9Ce_FP2xvmT8mN_kItNw0_Ev1BJcIMIsJi4sE6WKo_168832" className="zf_main_id_168832">
          <iframe
            src={FORM_CONFIG.exhibitor.src}
            style={{ border: 'none', minWidth: '100%', overflow: 'hidden', height: '100%' }}
            title={FORM_CONFIG.exhibitor.title}
          />
        </div>
        <div
          id="deleteform_168832"
          className="zf_lb_closeform_168832"
          onClick={onClose}
          tabIndex={0}
          role="button"
          aria-label="Close exhibitor registration modal"
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

export default ExhibitModal;
