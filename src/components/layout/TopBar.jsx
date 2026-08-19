import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ShieldCheck, Globe } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/siteConfig';

/**
 * Top contact and trust information bar (visible when not scrolled)
 */
export const TopBar = ({ isScrolled }) => {
  return (
    <AnimatePresence>
      {!isScrolled && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: -40 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 h-10 bg-secondary-900 border-b border-white/5 z-[60] hidden md:flex items-center"
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-6">
              <a
                href={SITE_CONFIG.contact.emailHref}
                className="flex items-center gap-2 text-secondary-200 hover:text-secondary-50 transition-colors text-xs font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-primary-600" />
                {SITE_CONFIG.contact.email}
              </a>
              <div className="flex gap-4 border-l border-white/10 pl-4">
                <a
                  href={SITE_CONFIG.contact.phoneIndia.href}
                  className="flex items-center gap-2 text-secondary-200 hover:text-secondary-50 transition-colors text-xs font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-primary-700" />
                  {SITE_CONFIG.contact.phoneIndia.label}
                </a>
                <a
                  href={SITE_CONFIG.contact.phoneKSA.href}
                  className="flex items-center gap-2 text-secondary-200 hover:text-secondary-50 transition-colors text-xs font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-primary-600" />
                  {SITE_CONFIG.contact.phoneKSA.label}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.1em] text-secondary-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-primary-500" /> Verified B2B Only
              </span>
              <span className="w-1 h-1 rounded-full bg-secondary-300" />
              <span className="flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-accent-500" /> 3-City India Tour
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopBar;
