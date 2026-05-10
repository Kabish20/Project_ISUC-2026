import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, Utensils, Hotel, Car, Info } from 'lucide-react';

const TourSchedule = () => {
  const schedule = [
    { date: '03 July 2026', city: 'Delhi', desc: 'Arrival, Hotel Check-In, Networking Dinner', image: '/assets/nano_delhi_banner.png' },
    { date: '04 July 2026', city: 'Delhi Event', desc: 'B2B Meetings, Morning & Evening Tea Sessions, Networking Dinner', image: '/assets/nano_delhi_banner.png' },
    { date: '05 July 2026', city: 'Delhi → Mumbai', desc: 'Domestic Flight, Hotel Check-In, Networking Dinner', image: '/assets/nano_mumbai_banner.png' },
    { date: '06 July 2026', city: 'Mumbai Event', desc: 'B2B Meetings, Evening Flight to Chennai, Hotel Check-In', image: '/assets/nano_mumbai_banner.png' },
    { date: '07 July 2026', city: 'Chennai Event', desc: 'B2B Meetings, Networking Dinner', image: '/assets/nano_chennai_banner.png' },
    { date: '08 July 2026', city: 'Departure', desc: 'Breakfast, Departure', image: '/assets/nano_chennai_banner.png' }
  ];

  const inclusions = [
    { icon: <Hotel className="w-5 h-5 text-primary-500" />, text: '4-Star Hotels' },
    { icon: <Plane className="w-5 h-5 text-primary-500" />, text: 'Domestic Flights' },
    { icon: <Utensils className="w-5 h-5 text-primary-500" />, text: 'Half Board Meals' },
    { icon: <Car className="w-5 h-5 text-primary-500" />, text: 'Airport Transfers' },
  ];

  return (
    <section id="schedule" className="py-24 bg-secondary-900 relative">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#b68d40_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            6 Days. 3 Markets. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Fully Managed.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-secondary-400"
          >
            ISUC-2026 Tour Schedule
          </motion.p>
        </div>

        {/* Horizontal Timeline for Desktop / Vertical for Mobile */}
        <div className="max-w-5xl mx-auto mb-20 relative">
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-white/5 -translate-y-1/2 rounded-full"></div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 relative z-10">
            {schedule.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-secondary-900 rounded-3xl p-8 shadow-lg border border-white/10 hover:border-primary-500/40 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(182,141,64,0.3)] transition-all duration-500 relative group overflow-hidden"
              >
                {/* Background nano banner image with overlay */}
                <div className="absolute inset-0 z-0">
                  <img src={item.image} alt={item.city} className="w-full h-full object-cover opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-secondary-900/60 group-hover:from-secondary-900/90 group-hover:to-secondary-900/40 transition-all duration-500"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-700 to-secondary-600 rounded-full flex items-center justify-center mb-6 lg:mx-auto group-hover:from-primary-900 group-hover:to-primary-800 shadow-inner transition-colors duration-500 relative overflow-hidden">
                    <MapPin className="w-7 h-7 text-secondary-400 group-hover:text-primary-600 transition-colors duration-500 group-hover:scale-110 relative z-10" />
                  </div>
                  
                  <div className="lg:text-center">
                    <p className="text-primary-400 font-bold text-sm mb-2">{item.date}</p>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">{item.city}</h3>
                    <p className="text-secondary-400 text-sm font-medium">{item.desc}</p>
                    
                    {item.note && (
                      <div className="mt-4 flex items-start gap-2 bg-accent-50/80 backdrop-blur-sm border border-accent-100 p-3 rounded-xl text-accent-800 text-xs font-semibold lg:justify-center text-left shadow-sm">
                        <Info className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{item.note}</span>
                      </div>
                    )}
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
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto bg-secondary-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 z-0">
             <img src="/assets/tour_banner.png" alt="Tour Route Map" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/60 to-transparent"></div>
          </div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
          
          <h3 className="text-2xl font-display font-bold mb-8 text-center">Fully Managed for Exhibitors</h3>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            {inclusions.map((inc, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-md border border-white/5">
                {inc.icon}
                <span className="font-medium">{inc.text}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-secondary-400 max-w-2xl mx-auto">
            Plus dedicated on-ground support throughout the tour. You just focus on the meetings, we handle the logistics.
          </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TourSchedule;
