import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { SPONSORSHIP_TIERS } from '@/data/sponsorshipData';

/**
 * Sponsorship Packages & Tiers Section
 */
export const SponsorshipSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-secondary-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          src="/assets/sponsor_banner.png"
          alt="Sponsorship Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/90 via-secondary-900/80 to-secondary-900" />
      </div>

      {/* Animated orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Sponsorship Opportunities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Become an ISUC-2026 Partner. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-orange-500">
              Own the India Market.
            </span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 items-center">
          {SPONSORSHIP_TIERS.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              style={{ boxShadow: tier.popular ? `0 0 60px ${tier.glowColor}` : 'none' }}
              className={`relative rounded-3xl border ${tier.borderColor} overflow-hidden backdrop-blur-xl transition-all duration-500 ${
                tier.popular ? 'bg-white/10 lg:-translate-y-4 shadow-2xl' : 'bg-white/5'
              }`}
            >
              {/* Popular top border */}
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-accent-400 to-orange-400" />
              )}

              {/* Glow Orb */}
              <div
                className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${tier.accentFrom} ${tier.accentTo}`}
              />

              <div className="p-8 relative z-10">
                {tier.popular ? (
                  <span className="inline-block mb-4 px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-400 text-xs font-bold tracking-wider uppercase">
                    ✦ {tier.tag}
                  </span>
                ) : (
                  <span className="inline-block mb-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-secondary-400 text-xs font-semibold tracking-wider uppercase">
                    {tier.tag}
                  </span>
                )}

                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${tier.iconBg} border border-white/10 text-4xl`}
                >
                  {tier.emoji}
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-1">
                  ISUC-2026 {tier.title}
                </h3>

                <p className="text-sm font-medium text-secondary-400 mb-6 pb-6 border-b border-white/10">
                  Best for: <span className="text-secondary-200 font-semibold">{tier.bestFor}</span>
                </p>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-br ${tier.accentFrom} ${tier.accentTo} flex items-center justify-center shrink-0 mt-0.5 shadow-md`}
                      >
                        <Check className="w-3 h-3 text-secondary-900" />
                      </div>
                      <span className="text-secondary-300 text-sm leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#sponsor-deck"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold bg-gradient-to-r from-accent-500 to-orange-500 hover:from-accent-400 hover:to-orange-400 text-secondary-900 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] transition-all duration-300 hover:-translate-y-1"
          >
            <Sparkles className="w-5 h-5" />
            Request Sponsor Deck & Pricing
            <span className="transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorshipSection;
