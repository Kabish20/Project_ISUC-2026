import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Clock, Handshake } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <LayoutDashboard className="w-8 h-8 text-primary-600" />,
      title: 'Dedicated Table',
      description: 'Every Saudi supplier gets a branded table in all 4 cities. Your space. Your meetings.',
      bg: 'bg-primary-50',
      border: 'border-primary-100',
      image: '/assets/nano_table_banner.png'
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      title: 'Scheduled Rotation',
      description: 'Verified Indian buyers meet you in 20-min slots. Pre-matched to your hotel category, group size, regions.',
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      image: '/assets/nano_schedule_banner.png'
    },
    {
      icon: <Handshake className="w-8 h-8 text-emerald-500" />,
      title: 'Deals + Dinners',
      description: 'Continue conversations at exclusive networking dinners each evening. Where real contracts happen.',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
      image: '/assets/nano_dinner_banner.png'
    }
  ];

  return (
    <section id="format" className="py-16 relative overflow-hidden bg-slate-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src="/assets/how_it_works_banner.png" 
          alt="Premium Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-6"
          >
            No Stalls. No Footfall Games. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Just Business.
            </span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group"
              >
                {/* Background image overlay */}
                <div className="absolute inset-0 z-0">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60 transition-all duration-500 group-hover:from-slate-900/90 group-hover:via-slate-900/70 group-hover:to-slate-900/40"></div>
                </div>

                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-xl ${step.bg} border ${step.border} relative z-10 bg-white group-hover:scale-110 transition-transform duration-500`}>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-md border border-slate-700">
                      {index + 1}
                    </div>
                    {step.icon}
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-xl font-display font-semibold text-base shadow-xl shadow-slate-900/20 mb-8 border border-white/20">
            60-80 guaranteed meetings per supplier across the tour.
          </div>
          <br/>
          <a href="#" className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors">
            See Sample Buyer Profile <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
