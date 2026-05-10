import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, BarChart3, Clock } from 'lucide-react';

const FinalCTA = () => {
  const stats = [
    { icon: <Users className="w-5 h-5" />, value: '150–300', label: 'Verified Buyers' },
    { icon: <BarChart3 className="w-5 h-5" />, value: '60–80', label: 'Meetings / Supplier' },
    { icon: <Clock className="w-5 h-5" />, value: '7 Days', label: '4 Cities, Fully Managed' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Top gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-white z-0 opacity-5"></div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img src="/assets/hero_banner.png" alt="" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
          </div>

          {/* Animated Background gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-primary-600/20 blur-[100px] rounded-full mix-blend-screen animate-pulse"></div>
            <div className="absolute -bottom-[50%] -right-[10%] w-[70%] h-[150%] bg-amber-500/20 blur-[100px] rounded-full mix-blend-screen animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-8"
            >
              <Zap className="w-4 h-4" />
              Limited Tables — Act Fast
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight">
              India's Umrah Trade Is Moving Fast. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
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
                  <div className="text-amber-400">{s.icon}</div>
                  <div className="text-left">
                    <div className="text-white font-bold text-xl leading-none">{s.value}</div>
                    <div className="text-slate-400 text-xs mt-1">{s.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch max-w-4xl mx-auto mb-12">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#exhibit" className="btn-primary flex-1 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-shadow">
                Saudi Suppliers: Exhibit
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#register-buyer" className="btn-secondary flex-1 border-0 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow">
                Indian Agents: Apply to Buy
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#sponsor-deck" className="btn-accent flex-1 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] transition-shadow">
                Brands: Sponsor ISUC-2026
              </motion.a>
            </div>

            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              <p className="text-amber-100 font-medium">
                <strong className="text-white">Only 40 exhibitor tables. 22 already reserved.</strong> Buyer verification closes 15 May 2026.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;