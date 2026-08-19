import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, Utensils, Hotel, Car } from 'lucide-react';
import { TOUR_SCHEDULE, TOUR_INCLUSIONS } from '@/data/scheduleData';

const iconMap = {
  Hotel: <Hotel className="w-5 h-5 text-primary-500" />,
  Plane: <Plane className="w-5 h-5 text-primary-500" />,
  Utensils: <Utensils className="w-5 h-5 text-primary-500" />,
  Car: <Car className="w-5 h-5 text-primary-500" />,
};

/**
 * 3-City 6-Day Tour Schedule & Inclusions Section
 */
export const TourScheduleSection = () => {
  return (
    <section id="schedule" className="py-24 bg-secondary-900 relative">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#b68d40_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-secondary-50 mb-6"
          >
            3 Cities. 6 Days.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              One Powerful Platform.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-secondary-300 font-medium"
          >
            ISUC-2026 Tour Schedule
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-5xl mx-auto mb-20 relative">
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-white/5 -translate-y-1/2 rounded-full" />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 relative z-10">
            {TOUR_SCHEDULE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-secondary-900 rounded-3xl p-8 shadow-xl border border-white/10 hover:border-primary-500/40 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(182,141,64,0.2)] transition-all duration-500 relative group overflow-hidden"
              >
                {/* Background image overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.city}
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-secondary-900/60 group-hover:from-secondary-900/90 group-hover:to-secondary-900/40 transition-all duration-500" />
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-secondary-800 rounded-full flex items-center justify-center mb-6 lg:mx-auto group-hover:bg-primary-900 shadow-inner transition-colors duration-500 relative overflow-hidden border border-white/5">
                    <MapPin className="w-7 h-7 text-secondary-400 group-hover:text-primary-400 transition-colors duration-500 group-hover:scale-110 relative z-10" />
                  </div>

                  <div className="lg:text-center">
                    <p className="text-primary-400 font-bold text-sm mb-2">{item.date}</p>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">{item.city}</h3>
                    <p className="text-secondary-400 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Exhibitor Inclusions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto bg-secondary-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group border border-white/10"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/tour_banner.png"
              alt="Tour Route Map"
              className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/60 to-transparent" />
          </div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

          <div className="relative z-10">
            <h3 className="text-2xl font-display font-bold mb-8 text-center">Fully Managed for Exhibitors</h3>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
              {TOUR_INCLUSIONS.map((inc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10 shadow-sm backdrop-blur-sm"
                >
                  {iconMap[inc.iconName] || <Hotel className="w-5 h-5 text-primary-500" />}
                  <span className="font-bold text-white">{inc.text}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-secondary-400 font-medium max-w-2xl mx-auto">
              Plus dedicated on-ground support throughout the tour. You just focus on the meetings, we handle the logistics.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TourScheduleSection;
