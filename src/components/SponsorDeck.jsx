import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Trophy, Medal, Award, Check, Sparkles, ArrowRight, Star,
  Zap, Globe, Users, Building2, BarChart3, TrendingUp,
  Megaphone, Download, Mail, ChevronDown, Rocket, Eye,
  Target, ShieldCheck
} from 'lucide-react';

const SponsorDeck = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  
  const tiers = [
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Title Partner',
      tag: 'Exclusive · One Only',
      bestFor: 'Large Saudi DMCs & Tourism Boards',
      color: 'from-primary-400 to-primary-700',
      glow: 'rgba(182,141,64,0.4)',
      border: 'border-primary-500/50',
      badge: 'bg-primary-500 text-secondary-900 font-black',
      popular: true,
      features: [
        'Presented by [Your Brand] across all materials',
        '20-min Keynote Address in all 3 cities',
        'Top-priority branded tables in all cities',
        'Logo on lanyards, delegate badges & backdrops',
        'Full page feature in the Buyer Handbook',
        '3,000+ targeted email blast feature',
        '5 Full Access Delegate Passes'
      ],
    },
    {
      icon: <Medal className="w-12 h-12" />,
      title: 'City Partner',
      tag: 'City-Specific Dominance',
      bestFor: 'Regional Hotels & Fleet Aggregators',
      color: 'from-secondary-200 to-secondary-400',
      glow: 'rgba(200,200,200,0.2)',
      border: 'border-white/20',
      badge: 'bg-white/10 text-white border-white/20',
      popular: false,
      features: [
        'City-specific naming rights (e.g. Delhi Partner)',
        'Panel participation at the chosen city event',
        'Branded zone in the exhibition area',
        'Logo on city-specific digital signage',
        '2 Full Access Delegate Passes'
      ],
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Category Partner',
      tag: 'Segment Exclusivity',
      bestFor: 'Tech Platforms & Visa Companies',
      color: 'from-accent-400 to-accent-600',
      glow: 'rgba(251,177,17,0.2)',
      border: 'border-accent-500/30',
      badge: 'bg-accent-500/20 text-accent-400 border-accent-500/30',
      popular: false,
      features: [
        'Official [Category] Partner Status',
        'Exclusivity: No competitors in your segment',
        'Dedicated product demo session',
        'Logo on website & social media collateral',
        '1 Full Access Delegate Pass'
      ],
    },
  ];

  const valueProps = [
    { icon: <Eye className="w-6 h-6" />, title: 'Unmatched Visibility', desc: 'Your brand positioned as the primary authority in the Indo-Saudi Umrah corridor.' },
    { icon: <Target className="w-6 h-6" />, title: 'Direct Access', desc: 'Speak directly to the decision-makers who control 70% of India’s 1.8M pilgrim market.' },
    { icon: <Rocket className="w-6 h-6" />, title: 'Market Leadership', desc: 'Secure the first-mover advantage as the market shifts toward direct B2B contracting.' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Verified Audience', desc: 'Zero wastage. Every attendee is a pre-vetted, high-volume IATA accredited operator.' }
  ];

  return (
    <div id="sponsor-deck" ref={containerRef} className="relative bg-secondary-900 text-white selection:bg-primary-500/30">
      
      {/* ── Massive Hero Section ── */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            style={{ y: bgY }}
            src="/assets/nano_sponsor_branding.png" 
            alt="Sponsorship at ISUC 2026" 
            className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 via-secondary-900/40 to-secondary-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/60 to-transparent" />
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div key={i}
            className="absolute w-1 h-1 rounded-full bg-yellow-400/60"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ 
              scale: [1, 2, 1],
              opacity: [0, 0.8, 0],
              y: [0, -40, 0]
            }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
          />
        ))}

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-500/20 border border-primary-400/40 text-primary-300 text-sm font-bold mb-10 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4" />
            PARTNERSHIP OPPORTUNITIES — ISUC 2026
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-display font-bold mb-8 leading-[1.1] tracking-tight"
          >
            The Ultimate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-500 to-accent-600">
              Brand Positioning.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.45 }}
            className="text-lg md:text-xl text-secondary-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Don't just exhibit—lead. <br />
            Partner with ISUC 2026 and become the primary name associated with the <span className="text-yellow-400 font-bold">future of Indo-Saudi Umrah business.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a 
              href="mailto:info@travizly.com?subject=Sponsorship%20Inquiry%20ISUC%202026"
              className="group inline-flex items-center gap-3 px-8 py-4 text-base font-bold bg-primary-600 hover:bg-primary-500 text-white rounded-xl shadow-[0_0_40px_rgba(182,141,64,0.4)] transition-all duration-300 hover:-translate-y-1"
            >
              <Download className="w-5 h-5 fill-current" />
              Request Sponsor Deck
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#tiers"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Compare Tiers
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Value Proposition Grid ── */}
      <div className="py-24 bg-secondary-900 border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-secondary-900 border border-white/5 hover:border-yellow-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-yellow-400">{prop.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{prop.title}</h4>
                <p className="text-secondary-500 text-sm leading-relaxed">{prop.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tier Comparison Section ── */}
      <div id="tiers" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              A Tier for Every <br /> <span className="text-yellow-400">Ambition Level.</span>
            </h2>
            <p className="text-secondary-400 text-lg">
              Whether you want national dominance or city-specific impact, our partnership tiers are designed to provide maximum ROI.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {tiers.map((tier, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative p-1 rounded-[40px] ${tier.popular ? 'bg-gradient-to-b from-yellow-400 to-accent-600' : 'bg-white/10'}`}
              >
                <div className="bg-secondary-900 rounded-[38px] h-full p-10 flex flex-col relative overflow-hidden group">
                  {tier.popular && (
                    <div className="absolute top-6 right-6">
                      <span className="bg-yellow-500 text-secondary-900 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                        Most Impact
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-10 relative">
                    <div className={`w-20 h-20 rounded-[28px] bg-gradient-to-br ${tier.color} flex items-center justify-center text-secondary-900 shadow-2xl mb-8 group-hover:scale-110 transition-transform duration-500`}>
                      {tier.icon}
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-2">{tier.title}</h3>
                    <p className="text-yellow-400 text-sm font-bold tracking-widest uppercase">{tier.tag}</p>
                  </div>

                  <p className="text-secondary-400 text-sm mb-10 font-medium">Best for: <span className="text-secondary-200">{tier.bestFor}</span></p>

                  <div className="space-y-4 mb-12 flex-grow">
                    {tier.features.map((f, fi) => (
                      <div key={fi} className="flex gap-3">
                        <div className="mt-1.5 flex-shrink-0 w-4 h-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-yellow-400" />
                        </div>
                        <span className="text-secondary-300 text-sm leading-relaxed">{f}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${tier.popular ? 'bg-yellow-500 text-secondary-900 hover:bg-yellow-400 shadow-2xl' : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'}`}>
                    Request Proposal
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Audience Insight Section ── */}
      <div className="py-32 bg-secondary-900 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Brand Visibility <br />
                <span className="text-yellow-400">Beyond the Table.</span>
              </h2>
              <p className="text-lg text-secondary-400 mb-10 leading-relaxed">
                As a sponsor, your brand isn’t just seen in the meeting room. It’s part of a 4-month multi-channel marketing campaign targeting India's entire Umrah ecosystem.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "3,000+ Verified Agency Emails", desc: "Your brand featured in our weekly 'Industry Spotlight' mailers to IATA agents." },
                  { title: "50,000+ Monthly Social Reach", desc: "Collaborative posts and countdown highlights on LinkedIn, Instagram & WhatsApp groups." },
                  { title: "On-Site Premium Signage", desc: "Large format LED backdrops, floor graphics, and lanyards worn by every buyer." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400">
                      <Megaphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-secondary-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-10 bg-yellow-500/10 blur-[120px] rounded-full" />
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-secondary-900 border border-white/5 p-8 rounded-[40px] shadow-2xl">
                    <div className="text-4xl font-display font-bold text-yellow-400 mb-2">300+</div>
                    <div className="text-xs text-secondary-500 uppercase font-black tracking-widest">Targeted Buyers</div>
                  </div>
                  <div className="bg-secondary-900 border border-white/5 p-8 rounded-[40px] shadow-2xl translate-x-8">
                    <div className="text-4xl font-display font-bold text-white mb-2">3</div>
                    <div className="text-xs text-secondary-500 uppercase font-black tracking-widest">Major Hub Cities</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-secondary-900 border border-white/5 p-8 rounded-[40px] shadow-2xl">
                    <div className="text-4xl font-display font-bold text-primary-400 mb-2">7</div>
                    <div className="text-xs text-secondary-500 uppercase font-black tracking-widest">Days Exposure</div>
                  </div>
                  <div className="bg-secondary-900 border border-white/5 p-8 rounded-[40px] shadow-2xl -translate-x-4">
                    <div className="text-4xl font-display font-bold text-primary-400 mb-2">100%</div>
                    <div className="text-xs text-secondary-500 uppercase font-black tracking-widest">B2B Verified</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Final Call to Action ── */}
      <div className="py-32 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[40px] bg-gradient-to-br from-yellow-500 via-accent-600 to-accent-800 p-10 md:p-16 text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-8 leading-tight">
                Claim Your <br /> Marketplace Status.
              </h2>
              <p className="text-xl text-secondary-900 font-bold mb-12 max-w-2xl mx-auto">
                Title partnership for ISUC 2026 is exclusive to one brand. Category partner slots are strictly first-come, first-served. Secure your interest now.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="mailto:info@travizly.com?subject=Sponsorship%20Inquiry%20ISUC%202026"
                  className="px-12 py-6 bg-secondary-900 text-white font-bold text-xl rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  Download Partnership Deck
                </a>
                <a 
                  href="tel:+918072896589"
                  className="px-12 py-6 bg-white/20 backdrop-blur-md text-secondary-900 font-bold text-xl rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/20"
                >
                  Talk to Organizer
                </a>
              </div>
              
              <div className="mt-12 flex items-center justify-center gap-8 text-secondary-900/60 font-black uppercase text-[10px] tracking-[0.2em]">
                <span>Limited Inventory</span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-900/20" />
                <span>B2B Only</span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-900/20" />
                <span>Global Reach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default SponsorDeck;
