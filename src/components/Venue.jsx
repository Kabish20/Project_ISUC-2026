import React from 'react';
import { motion } from 'framer-motion';
import { Star, Map, Wifi, Wine, ShieldCheck } from 'lucide-react';

const Venue = () => {
  const features = [
    { icon: <Map className="w-6 h-6" />, title: 'Pillarless Ballrooms', desc: 'Smooth 50-table layout for maximum meeting flow', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    { icon: <Star className="w-6 h-6" />, title: 'Central Location', desc: 'Near airports & major business districts for easy access', color: 'text-primary-400', bg: 'bg-primary-500/10', border: 'border-primary-500/20' },
    { icon: <Wifi className="w-6 h-6" />, title: 'Business Environment', desc: 'High-speed WiFi, AV setup & a dedicated support team', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    { icon: <Wine className="w-6 h-6" />, title: 'Networking Dinners', desc: 'Exclusive evening sessions in private banquet spaces', color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20' }
  ];

  return (
    <section id="venue" className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background with parallax effect simulation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="/assets/venue_banner.png" 
          alt="Premium Venue" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-slate-900/95 to-slate-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Premium Venues. <br/>
              <span className="text-amber-400">Premium Outcomes.</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              ISUC-2026 will be hosted at 4-star hotels only. We believe the environment dictates the quality of business.
            </p>
            
            <div className="inline-block bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border-l-4 border-amber-500 p-6 rounded-r-2xl mb-8 shadow-xl">
              <p className="font-display font-bold text-xl italic text-white">
                "Bad venue = bad ROI. We don't compromise."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-semibold">Travizly Quality Guarantee</span>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`backdrop-blur-sm border ${feature.border} ${feature.bg} p-6 rounded-2xl hover:shadow-lg transition-all duration-300 relative overflow-hidden group`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent`}></div>
                <div className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} ${feature.border} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-1 text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
