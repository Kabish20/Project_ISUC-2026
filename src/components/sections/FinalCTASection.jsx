import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, BarChart3, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/siteConfig';

/**
 * Final Call-to-Action & Urgency Conversion Section
 */
export const FinalCTASection = ({ onOpenExhibit, onOpenBuyer }) => {
  const stats = [
    { icon: <Users className="w-5 h-5" />, value: SITE_CONFIG.stats.verifiedBuyersCount, label: 'Verified Buyers' },
    { icon: <BarChart3 className="w-5 h-5" />, value: SITE_CONFIG.stats.meetingsPerSupplier, label: 'Meetings / Supplier' },
    { icon: <Clock className="w-5 h-5" />, value: SITE_CONFIG.stats.durationDays, label: '3 Cities, Fully Managed' },
  ];

  return (
    <section className="py-24 bg-secondary-900 relative overflow-hidden">
      {/* Top gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 via-secondary-900 to-secondary-900 z-0 opacity-5" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-secondary-900 rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl border border-primary-500/10"
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img src="/assets/hero_banner.png" alt="" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 via-secondary-900/60 to-secondary-900" />
          </div>

          {/* Animated Background gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-primary-600/20 blur-[100px] rounded-full mix-blend-screen animate-pulse" />
            <div
              className="absolute -bottom-[50%] -right-[10%] w-[70%] h-[150%] bg-accent-500/20 blur-[100px] rounded-full mix-blend-screen animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-8"
            >
              <Zap className="w-4 h-4" />
              Limited Tables — Act Fast
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight">
              India's Umrah Trade Is Moving Fast. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-500">
                Enter at ISUC-2026.
              </span>
            </h2>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm"
                >
                  <div className="text-primary-400">{s.icon}</div>
                  <div className="text-left">
                    <div className="text-white font-bold text-xl leading-none">{s.value}</div>
                    <div className="text-secondary-400 text-xs mt-1">{s.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch max-w-4xl mx-auto mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenExhibit}
                className="btn-primary flex-1 shadow-[0_0_20px_rgba(182,141,64,0.3)] hover:shadow-[0_0_40px_rgba(182,141,64,0.6)] transition-shadow text-center flex items-center justify-center cursor-pointer"
              >
                Saudi Suppliers: Exhibit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenBuyer}
                className="btn-secondary flex-1 border-0 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow text-center flex items-center justify-center cursor-pointer"
              >
                Indian Agents: Apply to Buy
              </motion.button>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500" />
              </span>
              <p className="text-primary-100 font-medium">
                <strong className="text-white">
                  Only {SITE_CONFIG.stats.totalSuppliersCap} exhibitor tables. {SITE_CONFIG.stats.reservedTables} already reserved.
                </strong>{' '}
                Buyer verification closes 15 May 2026.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
