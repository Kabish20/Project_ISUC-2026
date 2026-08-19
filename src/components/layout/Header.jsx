import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { scrollToTop } from '@/utils/scrollUtils';
import TopBar from './TopBar';
import MobileNav from './MobileNav';

/**
 * Main Application Header & Navigation Bar
 */
export const Header = ({ onOpenExhibit, onOpenBuyer }) => {
  const { isScrolled } = useScrollPosition(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Hides on scroll */}
      <TopBar isScrolled={isScrolled} />

      {/* Main Sticky Navigation */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'top-0 py-2 bg-secondary-900/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'top-10 py-4 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2.5 group cursor-pointer"
              aria-label={SITE_CONFIG.name}
            >
              <img
                src={logo}
                alt={SITE_CONFIG.name}
                className={`${
                  isScrolled ? 'h-16' : 'h-24'
                } w-auto object-contain transition-all duration-500 group-hover:scale-105`}
              />
            </button>

            {/* Desktop Navigation & CTAs */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Contact details appearing inline when scrolled */}
              <AnimatePresence>
                {isScrolled && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-md"
                  >
                    <a
                      href={SITE_CONFIG.contact.emailHref}
                      className="flex items-center gap-2 text-secondary-300 hover:text-secondary-50 transition-colors group"
                    >
                      <Mail className="w-3.5 h-3.5 text-primary-600" />
                      <span className="text-xs font-medium tracking-tight">{SITE_CONFIG.contact.email}</span>
                    </a>
                    <div className="w-px h-3 bg-white/10" />
                    <a
                      href={SITE_CONFIG.contact.phoneIndia.href}
                      className="flex items-center gap-2 text-secondary-300 hover:text-secondary-50 transition-colors group"
                    >
                      <Phone className="w-3.5 h-3.5 text-primary-700" />
                      <span className="text-xs font-medium tracking-tight">{SITE_CONFIG.contact.phoneIndia.display}</span>
                    </a>
                    <div className="w-px h-3 bg-white/10" />
                    <a
                      href={SITE_CONFIG.contact.phoneKSA.href}
                      className="flex items-center gap-2 text-secondary-300 hover:text-secondary-50 transition-colors group"
                    >
                      <Phone className="w-3.5 h-3.5 text-accent-600" />
                      <span className="text-xs font-medium tracking-tight">{SITE_CONFIG.contact.phoneKSA.display}</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenExhibit}
                  className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-secondary-900 font-bold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-primary-500/20"
                >
                  Exhibit at ISUC
                </button>
                <button
                  onClick={onOpenBuyer}
                  className="px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-400 text-secondary-900 font-bold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-accent-500/20"
                >
                  Register as Buyer
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-2 text-secondary-50 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <MobileNav
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          onOpenExhibit={onOpenExhibit}
          onOpenBuyer={onOpenBuyer}
        />
      </nav>
    </>
  );
};

export default Header;
