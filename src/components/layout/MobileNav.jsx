import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, X, ArrowRight, ShieldCheck, Globe, Calendar, Zap, Users, Building2, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { MOBILE_NAV_ITEMS } from '@/data/navigationData';
import { scrollToSection } from '@/utils/scrollUtils';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

const iconMap = {
  Globe: <Globe className="w-5 h-5" />,
  ArrowRight: <ArrowRight className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Calendar: <Calendar className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
};

/**
 * Fullscreen Animated Mobile Navigation Drawer
 */
export const MobileNav = ({ isOpen, onClose, onOpenExhibit, onOpenBuyer }) => {
  useLockBodyScroll(isOpen);

  const handleNavClick = (id) => {
    scrollToSection(id);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[100] lg:hidden bg-secondary-900/95 backdrop-blur-2xl flex flex-col"
        >
          {/* Header inside Menu */}
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <img src={logo} alt={SITE_CONFIG.name} className="h-12 w-auto" />
            <button
              onClick={onClose}
              className="p-3 bg-white/5 rounded-full text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <nav className="space-y-2">
              {MOBILE_NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 text-left group hover:bg-primary-600/10 hover:border-primary-500/20 transition-all"
                >
                  <span className="flex items-center gap-4">
                    <span className="p-2 rounded-lg bg-white/5 text-primary-400 group-hover:bg-primary-500 group-hover:text-secondary-900 transition-all">
                      {iconMap[item.iconName] || <ArrowRight className="w-4 h-4" />}
                    </span>
                    <span className="text-lg font-bold text-white tracking-tight">{item.label}</span>
                  </span>
                  <ArrowRight className="w-5 h-5 text-secondary-500 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                </motion.button>
              ))}
            </nav>

            {/* Contact Info in Menu */}
            <div className="mt-12 pt-8 border-t border-white/5 space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-secondary-500 mb-4">
                Official Contact
              </h4>
              <div className="space-y-4">
                <a
                  href={SITE_CONFIG.contact.emailHref}
                  className="flex items-center gap-4 text-secondary-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{SITE_CONFIG.contact.email}</span>
                </a>
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href={SITE_CONFIG.contact.phoneIndia.href}
                    className="flex items-center gap-4 text-secondary-200 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-700 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">{SITE_CONFIG.contact.phoneIndia.label}</span>
                  </a>
                  <a
                    href={SITE_CONFIG.contact.phoneKSA.href}
                    className="flex items-center gap-4 text-secondary-200 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent-600 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">{SITE_CONFIG.contact.phoneKSA.label}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-6 bg-secondary-900 border-t border-white/5 grid grid-cols-1 gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenExhibit();
              }}
              className="w-full py-4 bg-primary-600 hover:bg-primary-500 rounded-2xl font-bold text-secondary-900 shadow-lg shadow-primary-600/20 transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Exhibit at ISUC
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBuyer();
              }}
              className="w-full py-4 bg-accent-500 hover:bg-accent-400 rounded-2xl font-bold text-secondary-900 shadow-lg shadow-accent-500/20 transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-5 h-5" />
              Register as Buyer
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
