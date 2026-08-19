import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Users, Handshake, BarChart3, Sparkles, TrendingUp } from 'lucide-react';
import { ORGANIZER_ROLES } from '@/data/featuresData';
import { SITE_CONFIG } from '@/constants/siteConfig';

const iconMap = {
  Filter: <Filter className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Handshake: <Handshake className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
};

/**
 * About Organizer & Mission Section
 */
export const OrganizedBySection = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="organizer" className="py-24 bg-secondary-900 relative overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#b68d40_1px,transparent_1px)] [background-size:24px_24px]" />
      {/* Glow orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
          <div className="grid md:grid-cols-2">
            {/* Left Content */}
            <div className="p-10 md:p-16 bg-gradient-to-br from-secondary-900 to-secondary-900 backdrop-blur-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent-500/20 rounded-full blur-2xl" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  Organized by {SITE_CONFIG.organizer}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                  We Are Market Connectors,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">
                    Not Event Organizers.
                  </span>
                </h2>
                <p className="text-secondary-100/80 text-lg mb-8 leading-relaxed">
                  {SITE_CONFIG.organizer} is a trade facilitation company specializing in Saudi-India travel corridors. We understand the nuances of both markets deeply.
                </p>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-2 mb-2 relative z-10">
                    <TrendingUp className="w-5 h-5 text-primary-300" />
                    <h4 className="font-bold text-white text-xl">Annual Vision</h4>
                  </div>
                  <p className="text-secondary-200/80 relative z-10">
                    ISUC will run every year as <strong className="text-white">India Umrah Trade Week</strong> — the go-to property for Indo-Saudi travel trade.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Content */}
            <div className="p-10 md:p-16 bg-secondary-900/80 backdrop-blur-xl flex flex-col justify-center border-l border-white/5">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-display font-bold text-white mb-8"
              >
                Our Role at ISUC-2026
              </motion.h3>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {ORGANIZER_ROLES.map((role, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${role.bg} ${role.color} border ${role.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {iconMap[role.iconName] || <Filter className="w-6 h-6" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1 group-hover:text-primary-300 transition-colors duration-300">
                        {role.title}
                      </h4>
                      <p className="text-secondary-400 text-sm leading-relaxed">{role.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizedBySection;
