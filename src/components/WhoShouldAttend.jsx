import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const WhoShouldAttend = () => {
  const saudiList = [
    'Umrah DMCs & Ground Handlers',
    'Hotels in Makkah & Madinah — 3-star to 5-star',
    'Transport Companies: Buses, VIP, Ziyarat',
    'B2B Booking Platforms & Travel Tech',
    'Visa & Service Companies'
  ];

  const indianList = [
    'Umrah Group Operators: 300+ pax/month',
    'Regional Consolidators & Sub-agent Networks',
    'Retail Travel Agencies with Umrah focus',
    'Corporate & VIP Umrah Planners'
  ];

  return (
    <section id="attendees" className="py-24 bg-secondary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src="/assets/attendees_banner.png" 
          alt="Premium Networking Event" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/60 to-secondary-900"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Who Should Attend</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Saudi Exhibitors Column */}
          {/* Saudi Exhibitors Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden group shadow-2xl hover:shadow-primary-500/20"
          >
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-500"></div>

            <div className="absolute top-0 left-0 w-2 h-full bg-primary-500 group-hover:w-3 transition-all duration-300"></div>
            <h3 className="text-3xl font-display font-bold mb-8 flex items-center gap-4 relative z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Saudi Exhibitors</span>
            </h3>
            
            <ul className="space-y-6 mb-12 relative z-10">
              {saudiList.map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-4 text-lg text-secondary-300 group/item hover:text-white transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary-400 shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:text-primary-300 transition-all" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <a href="#exhibit" className="relative z-10 inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-primary-900/50 group-hover:-translate-y-1 hover:shadow-primary-500/30">
              Reserve Your Table <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          {/* Indian Buyers Column */}
          {/* Indian Buyers Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden group shadow-2xl hover:shadow-accent-500/20"
          >
            {/* Glow effect */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl group-hover:bg-accent-500/20 transition-all duration-500"></div>

            <div className="absolute top-0 left-0 w-2 h-full bg-accent-500 group-hover:w-3 transition-all duration-300"></div>
            <h3 className="text-3xl font-display font-bold mb-8 flex items-center gap-4 relative z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-orange-300">Indian Buyers</span>
            </h3>
            
            <ul className="space-y-6 mb-8 relative z-10">
              {indianList.map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-4 text-lg text-secondary-300 group/item hover:text-white transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent-400 shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:text-accent-300 transition-all" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="relative z-10 bg-accent-500/10 border border-accent-500/20 rounded-xl p-4 mb-8 flex items-start gap-3 backdrop-blur-sm group-hover:bg-accent-500/20 transition-colors">
              <AlertCircle className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
              <p className="text-sm text-accent-100">
                <strong className="text-accent-400">Note:</strong> Buyer attendance is by verification only. IATA status + past volume required.
              </p>
            </div>

            <a href="#register-buyer" className="relative z-10 inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-400 hover:from-accent-400 hover:to-accent-300 text-secondary-900 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-accent-900/50 group-hover:-translate-y-1 hover:shadow-accent-500/40">
              Apply as Verified Buyer <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;
