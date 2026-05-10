import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, CheckCircle2, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden bg-secondary-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/assets/hero_banner.png"
          alt="B2B Trade Event Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 via-secondary-900/60 to-secondary-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/50 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            India's Largest B2B Umrah Event
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
            INDO-SAUDI UMRAH <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              CONNECT 2026
            </span>
          </h1>

          <p className="text-lg md:text-xl text-primary-50 mb-6 font-medium max-w-3xl mx-auto">
            The Only Structured B2B Gateway to India's 1.8M+ Umrah Market
          </p>

          <p className="text-base text-secondary-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            3 Cities. 6 Days. 150–300 Verified Buyers. Direct Table Meetings. Zero Wasted Time.
          </p>

          {/* Date & Location Strip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-3 px-6 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary-400" />
              </div>
              <span className="text-lg font-semibold tracking-wide">3–8 July 2026</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20"></div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent-500" />
              </div>
              <span className="text-lg font-semibold tracking-wide">Delhi • Mumbai • Chennai</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-stretch max-w-4xl mx-auto mb-12"
          >
            <a href="#exhibit" className="btn-primary flex-1 group">
              <span className="relative z-10 flex flex-col items-center">
                <span className="text-sm font-normal text-primary-100 mb-1 group-hover:text-white transition-colors">I'm a Saudi Supplier</span>
                <span className="flex items-center gap-2">Exhibit at ISUC-2026 <span className="group-hover:translate-x-1 transition-transform">→</span></span>
              </span>
            </a>
            <a href="#register-buyer" className="btn-secondary flex-1 group">
              <span className="relative z-10 flex flex-col items-center">
                <span className="text-sm font-normal text-secondary-300 mb-1 group-hover:text-white transition-colors">I'm an Indian Agent</span>
                <span className="flex items-center gap-2 text-white">Register as Buyer <span className="group-hover:translate-x-1 transition-transform">→</span></span>
              </span>
            </a>
            <a href="#sponsor-deck" className="btn-accent flex-1 group">
              <span className="relative z-10 flex flex-col items-center">
                <span className="text-sm font-normal text-secondary-900 mb-1 transition-colors">Become a Sponsor</span>
                <span className="flex items-center gap-2">Get Sponsor Deck <span className="group-hover:translate-x-1 transition-transform">→</span></span>
              </span>
            </a>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-secondary-400 font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary-400" />
              Limited to 40 Suppliers
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary-400" />
              Verified Buyers Only
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary-400" />
              Organized by 9X EVENTS
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary-900 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
