import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable glassmorphic Feature Card with hover animation
 */
export const FeatureCard = ({ icon, title, desc, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -8, scale: 1.02 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary-500/30 hover:bg-white/8 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden ${className}`}
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="w-14 h-14 rounded-2xl bg-secondary-800 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
      {title}
    </h3>
    <p className="text-secondary-300 text-sm leading-relaxed">
      {desc}
    </p>
  </motion.div>
);

export default FeatureCard;
