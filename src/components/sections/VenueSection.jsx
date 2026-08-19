import React from 'react';
import { motion } from 'framer-motion';
import { Star, Map, Wifi, Wine, ShieldCheck } from 'lucide-react';
import { VENUE_FEATURES } from '@/data/featuresData';
import { SITE_CONFIG } from '@/constants/siteConfig';

const iconMap = {
  Map: <Map className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />,
  Wifi: <Wifi className="w-6 h-6" />,
  Wine: <Wine className="w-6 h-6" />,
};

/**
 * 4-Star Premium Venues Showcase Section
 */
export const VenueSection = () => {
  return (
    <section id="venue" className="py-16 bg-secondary-900 text-white relative overflow-hidden">
      {/* Background with parallax effect simulation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          src="/assets/venue_banner.png"
          alt="Premium Venue"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/95 to-secondary-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent opacity-80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Premium Venues. <br />
              <span className="text-accent-400">Premium Outcomes.</span>
            </h2>
            <p className="text-lg text-secondary-300 mb-8 max-w-xl">
              ISUC-2026 will be hosted at 4-star hotels only. We believe the environment dictates the quality of business.
            </p>

            <div className="inline-block bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border-l-4 border-accent-500 p-6 rounded-r-2xl mb-8 shadow-xl">
              <p className="font-display font-bold text-xl italic text-white">
                "Bad venue = bad ROI. We don't compromise."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <ShieldCheck className="w-4 h-4 text-accent-400" />
                <span className="text-accent-400 text-sm font-semibold">
                  {SITE_CONFIG.organizer} Quality Guarantee
                </span>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {VENUE_FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`backdrop-blur-sm border ${feature.border} ${feature.bg} p-6 rounded-2xl hover:shadow-lg transition-all duration-300 relative overflow-hidden group`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent" />
                <div
                  className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} ${feature.border} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {iconMap[feature.iconName] || <Star className="w-6 h-6" />}
                </div>
                <h3 className="font-bold text-lg mb-1 text-white">{feature.title}</h3>
                <p className="text-secondary-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
