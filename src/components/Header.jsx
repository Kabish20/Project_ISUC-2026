import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Menu, X, ArrowRight, ShieldCheck, Globe, Calendar, Zap, Users, Building2, MapPin } from 'lucide-react';
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

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[100] lg:hidden bg-secondary-900/95 backdrop-blur-2xl flex flex-col"
            >
              {/* Header inside Menu */}
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <img src={logo} alt="Logo" className="h-12 w-auto" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 bg-white/5 rounded-full text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6 py-8">
                <nav className="space-y-2">
                  {[
                    { id: 'why', label: 'Why India. Why Now.', icon: <Globe className="w-5 h-5" /> },
                    { id: 'format', label: 'Event Format', icon: <ArrowRight className="w-5 h-5" /> },
                    { id: 'attendees', label: 'Who Should Attend', icon: <Users className="w-5 h-5" /> },
                    { id: 'schedule', label: 'Tour Schedule', icon: <Calendar className="w-5 h-5" /> },
                    { id: 'venue', label: 'Premium Venues', icon: <MapPin className="w-5 h-5" /> },
                    { id: 'organizer', label: 'About Organizer', icon: <Building2 className="w-5 h-5" /> },
                  ].map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 text-left group hover:bg-primary-600/10 hover:border-primary-500/20 transition-all"
                    >
                      <span className="flex items-center gap-4">
                        <span className="p-2 rounded-lg bg-white/5 text-primary-400 group-hover:bg-primary-500 group-hover:text-secondary-900 transition-all">
                          {item.icon || <ArrowRight className="w-4 h-4" />}
                        </span>
                        <span className="text-lg font-bold text-white tracking-tight">{item.label}</span>
                      </span>
                      <ArrowRight className="w-5 h-5 text-secondary-500 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                    </motion.button>
                  ))}
                </nav>

                {/* Contact Info in Menu */}
                <div className="mt-12 pt-8 border-t border-white/5 space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-secondary-500 mb-4">Official Contact</h4>
                  <div className="space-y-4">
                    <a href="mailto:info@travizly.com" className="flex items-center gap-4 text-secondary-200 hover:text-white transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium">info@travizly.com</span>
                    </a>
                    <div className="grid grid-cols-1 gap-4">
                      <a href="tel:+918072896589" className="flex items-center gap-4 text-secondary-200 hover:text-white transition-colors group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-700 group-hover:scale-110 transition-transform">
                          <Phone className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium">IN: +91 80728 96589</span>
                      </a>
                      <a href="tel:+966558891231" className="flex items-center gap-4 text-secondary-200 hover:text-white transition-colors group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent-600 group-hover:scale-110 transition-transform">
                          <Phone className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium">KSA: +966 55 889 1231</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 bg-secondary-900 border-t border-white/5 grid grid-cols-1 gap-3">
                <button
                  onClick={() => scrollToSection('exhibit')}
                  className="w-full py-4 bg-primary-600 hover:bg-primary-500 rounded-2xl font-bold text-secondary-900 shadow-lg shadow-primary-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Exhibit at ISUC
                </button>
                <button
                  onClick={() => scrollToSection('register-buyer')}
                  className="w-full py-4 bg-accent-500 hover:bg-accent-400 rounded-2xl font-bold text-secondary-900 shadow-lg shadow-accent-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Register as Buyer
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Header;
