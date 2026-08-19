import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Users } from 'lucide-react';
import { MAIN_SPONSOR, EXHIBITOR_PARTNERS } from '@/data/partnersData';
import { LogoImage } from '@/components/common/LogoImage';

/**
 * Official Partners, Main Sponsor & Exhibitors Showcase Section
 */
export const PartnerShowcaseSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="showcase" className="py-24 bg-secondary-900 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-accent-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            ISUC 2026 Partners
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
          >
            Leading Industry{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500">
              Partners & Exhibitors
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Connect with certified Saudi DMCs, luxury hotel aggregators, transport innovators, and B2B travel-tech leaders.
          </motion.p>
        </div>

        {/* ── Main Sponsor Spotlight ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative group p-1 rounded-3xl bg-gradient-to-r from-primary-500/40 via-accent-500/30 to-primary-500/40 shadow-[0_0_50px_rgba(212,175,55,0.15)] hover:shadow-[0_0_70px_rgba(212,175,55,0.25)] transition-all duration-500">
            <div className="bg-secondary-900/90 backdrop-blur-2xl rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Logo Card */}
              <div className="w-56 h-36 shrink-0 bg-white rounded-2xl p-6 shadow-2xl flex items-center justify-center border border-white/20 relative group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                <LogoImage
                  src={MAIN_SPONSOR.logo}
                  alt={MAIN_SPONSOR.name}
                  className="max-h-full max-w-full object-contain"
                  scale={1.15}
                />
              </div>

              {/* Sponsor Info */}
              <div className="text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-xs font-bold uppercase tracking-wider mb-4">
                  <Award className="w-3.5 h-3.5" />
                  {MAIN_SPONSOR.role}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                  {MAIN_SPONSOR.name}
                </h3>
                <p className="text-secondary-300 text-sm md:text-base leading-relaxed">
                  {MAIN_SPONSOR.desc}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Exhibitors Grid Header ── */}
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-display font-bold text-white inline-flex items-center gap-2">
            <Users className="w-5 h-5 text-accent-400" />
            Participating Exhibitors
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* ── Exhibitors Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {EXHIBITOR_PARTNERS.map((exhibitor, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center min-h-[160px] border border-white/20 relative group transition-all duration-300 overflow-hidden"
            >
              <div className="w-full h-24 flex items-center justify-center overflow-hidden">
                <LogoImage
                  src={exhibitor.logo}
                  alt={exhibitor.name}
                  className="max-h-full max-w-full object-contain"
                  scale={exhibitor.scale || 1.1}
                />
              </div>
              <span className="text-xs font-semibold text-secondary-600 mt-2 text-center group-hover:text-secondary-900 transition-colors">
                {exhibitor.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerShowcaseSection;
