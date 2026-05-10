import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Target, ArrowDownToLine } from 'lucide-react';

const WhyISUC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="why" className="py-16 bg-secondary-900 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-secondary-50 mb-6"
          >
            Why India. Why Now. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Why ISUC.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-secondary-300 font-medium"
          >
            India is the fastest-growing Umrah market globally. Here is how ISUC-2026 bridges the gap between Saudi suppliers and Indian operators.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="bg-secondary-900 rounded-3xl p-8 group hover:-translate-y-3 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-2xl border border-white/10">
            <div className="absolute inset-0 z-0">
              <img src="/assets/nano_why_suppliers.png" alt="Saudi Suppliers" className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/90 to-secondary-900/60 transition-all duration-500 group-hover:from-secondary-900 group-hover:via-secondary-900/80 group-hover:to-secondary-900/50"></div>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-500 transition-all duration-500 border border-primary-500/30 shadow-lg">
                <Building2 className="w-7 h-7 text-primary-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">For Saudi Suppliers</h3>
              <p className="text-secondary-300 leading-relaxed mb-4 font-medium">
                India sent <strong className="text-primary-400">1.8M+ pilgrims</strong> for Umrah in 2025. But 70% of volume is controlled by &lt;50 B2B operators you can't reach on email.
              </p>
              <p className="font-bold text-secondary-900 bg-primary-600 p-3 rounded-lg shadow-sm">
                ISUC-2026 puts them across your table.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="bg-secondary-900 rounded-3xl p-8 group hover:-translate-y-3 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-2xl border border-white/10">
            <div className="absolute inset-0 z-0">
              <img src="/assets/nano_why_buyers.png" alt="Indian Buyers" className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/90 to-secondary-900/60 transition-all duration-500 group-hover:from-secondary-900 group-hover:via-secondary-900/80 group-hover:to-secondary-900/50"></div>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-accent-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent-500 transition-all duration-500 border border-accent-500/30 shadow-lg">
                <Users className="w-7 h-7 text-accent-400 group-hover:text-secondary-900 transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">For Indian Buyers</h3>
              <p className="text-secondary-300 leading-relaxed mb-4 font-medium">
                Meet <strong className="text-accent-400">40+ premium Saudi DMCs, Hotels, Transport & Tech companies</strong> in your city. Contract direct. Better rates. New products for 2026 season.
              </p>
              <p className="font-bold text-secondary-900 bg-accent-500 p-3 rounded-lg shadow-sm">
                No exhibition crowds. Just business.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="bg-secondary-900 rounded-3xl p-8 group hover:-translate-y-3 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-2xl border border-white/10">
            <div className="absolute inset-0 z-0">
              <img src="/assets/nano_why_sponsors.png" alt="For Sponsors" className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/90 to-secondary-900/60 transition-all duration-500 group-hover:from-secondary-900 group-hover:via-secondary-900/80 group-hover:to-secondary-900/50"></div>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-600 transition-all duration-500 border border-primary-600/30 shadow-lg">
                <Target className="w-7 h-7 text-primary-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">For Sponsors</h3>
              <p className="text-secondary-300 leading-relaxed mb-4 font-medium">
                <strong className="text-primary-400">Own the conversation</strong> between Saudi & India's Umrah trade. Title Partner branding across 4 cities + 600+ targeted meetings.
              </p>
              <p className="font-bold text-secondary-900 bg-primary-700 p-3 rounded-lg shadow-sm">
                This becomes your annual India pipeline.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/pdf/ISUC BROCHURE.pdf"
            download="ISUC-2026-Overview.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-800 hover:bg-secondary-700 border border-secondary-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <ArrowDownToLine className="w-5 h-5" />
            Download ISUC-2026 Overview PDF
          </a>
        </motion.div>

        {/* Social Proof area (as requested by user) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 pt-12 border-t border-white/10"
        >
          <p className="text-center text-sm font-semibold text-secondary-400 uppercase tracking-wider mb-8">
            Confirmed Exhibitors Include
          </p>
          <div className="flex justify-center items-center hover:opacity-100 transition-all duration-500 max-w-4xl mx-auto opacity-80">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              src="/assets/logos_collage.png"
              alt="Premium Partners and Exhibitors"
              className="w-full h-auto rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyISUC;
