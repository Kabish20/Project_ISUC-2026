import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Menu, X, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar - Sliding out on scroll */}
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
                <a href="mailto:info@travizly.com" className="flex items-center gap-2 text-secondary-200 hover:text-secondary-50 transition-colors text-xs font-medium">
                  <Mail className="w-3.5 h-3.5 text-primary-600" />
                  info@travizly.com
                </a>
                <div className="flex gap-4 border-l border-white/10 pl-4">
                  <a href="tel:+918072896589" className="flex items-center gap-2 text-secondary-200 hover:text-secondary-50 transition-colors text-xs font-medium">
                    <Phone className="w-3.5 h-3.5 text-primary-700" />
                    IN: +91 80728 96589
                  </a>
                  <a href="tel:+966558891231" className="flex items-center gap-2 text-secondary-200 hover:text-secondary-50 transition-colors text-xs font-medium">
                    <Phone className="w-3.5 h-3.5 text-primary-600" />
                    KSA: +966 55 889 1231
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.1em] text-secondary-400">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> Verified B2B Only</span>
                <span className="w-1 h-1 rounded-full bg-secondary-300" />
                <span className="flex items-center gap-1.5"><Globe className="w-3 h-3" /> 3-City India Tour</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'top-0 py-2 bg-secondary-900/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'top-10 py-4 bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 group"
            >
              <img
                src={logo}
                alt="Indo Saudi Umrah Connect 2026"
                className={`${isScrolled ? 'h-16' : 'h-24'} w-auto object-contain transition-all duration-500 group-hover:scale-105`}
              />
            </button>

            {/* Desktop Navigation */}
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
                    <a href="mailto:info@travizly.com" className="flex items-center gap-2 text-secondary-300 hover:text-secondary-50 transition-colors group">
                      <Mail className="w-3.5 h-3.5 text-primary-600" />
                      <span className="text-xs font-medium tracking-tight">info@travizly.com</span>
                    </a>
                    <div className="w-px h-3 bg-white/10" />
                    <a href="tel:+918072896589" className="flex items-center gap-2 text-secondary-300 hover:text-secondary-50 transition-colors group">
                      <Phone className="w-3.5 h-3.5 text-primary-700" />
                      <span className="text-xs font-medium tracking-tight">+91 80728 96589</span>
                    </a>
                    <div className="w-px h-3 bg-white/10" />
                    <a href="tel:+966558891231" className="flex items-center gap-2 text-secondary-300 hover:text-secondary-50 transition-colors group">
                      <Phone className="w-3.5 h-3.5 text-accent-600" />
                      <span className="text-xs font-medium tracking-tight">+966 55 889 1231</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToSection('exhibit')}
                  className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-secondary-900 font-bold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-primary-500/20"
                >
                  Exhibit at ISUC
                </button>
                <button
                  onClick={() => scrollToSection('register-buyer')}
                  className="px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-400 text-secondary-900 font-bold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-accent-500/20"
                >
                  Register as Buyer
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-secondary-50 hover:bg-secondary-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-secondary-900 border-t border-white/10 overflow-hidden"
            >
              <div className="p-6 space-y-6">

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <a href="mailto:info@travizly.com" className="flex items-center gap-3 text-secondary-100">
                    <Mail className="w-5 h-5 text-primary-600" /> info@travizly.com
                  </a>
                  <a href="tel:+918072896589" className="flex items-center gap-3 text-secondary-100">
                    <Phone className="w-5 h-5 text-primary-700" /> IN: +91 80728 96589
                  </a>
                  <a href="tel:+966558891231" className="flex items-center gap-3 text-secondary-100">
                    <Phone className="w-5 h-5 text-accent-600" /> KSA: +966 55 889 1231
                  </a>
                </div>
                <div className="grid grid-cols-1 gap-3 pt-4">
                  <button onClick={() => scrollToSection('exhibit')} className="w-full py-4 bg-primary-600 rounded-xl font-bold text-secondary-900">Exhibit at ISUC</button>
                  <button onClick={() => scrollToSection('register-buyer')} className="w-full py-4 bg-accent-500 rounded-xl font-bold text-secondary-900">Register as Buyer</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Header;
