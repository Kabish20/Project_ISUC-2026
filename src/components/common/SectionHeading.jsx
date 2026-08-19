import React from 'react';
import { motion } from 'framer-motion';

/**
 * Standardized Section Heading with optional badge chip and subtitle
 */
export const SectionHeading = ({
  badge,
  badgeIcon,
  title,
  highlight,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`${centered ? 'text-center max-w-3xl mx-auto' : ''} mb-16 ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-6"
        >
          {badgeIcon}
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight"
      >
        {title}{' '}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
            {highlight}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-secondary-300 font-medium leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
