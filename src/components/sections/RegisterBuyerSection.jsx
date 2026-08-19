import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  CheckCircle2, AlertCircle, Clock, ArrowRight, Zap, Building2,
  TrendingUp, BadgeCheck, Globe, Award, ChevronDown, Briefcase
} from 'lucide-react';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { BuyerModal } from '@/components/modals/BuyerModal';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all cursor-pointer"
      >
        <span className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary-400 group-hover:bg-primary-500/20 group-hover:text-primary-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-secondary-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MarketStat = ({ value, label, sub }) => (
  <div className="text-center p-6 rounded-3xl bg-primary-500/5 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
    <div className="text-3xl font-display font-bold text-primary-400 mb-1">{value}</div>
    <div className="text-white font-bold text-sm mb-1 uppercase tracking-wider">{label}</div>
    <div className="text-secondary-500 text-xs">{sub}</div>
  </div>
);

/**
 * Buyer Registration Section with Market Stats, Benefits & Verification Criteria
 */
export const RegisterBuyerSection = ({ isModalOpen, setIsModalOpen }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const benefits = [
    {
      icon: <Building2 className="w-6 h-6 text-primary-400" />,
      title: '40+ Saudi Suppliers in Your City',
      desc: 'Meet top-tier DMCs, 5-star hotels from Makkah & Madinah, and transport giants directly in your own city.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-accent-400" />,
      title: 'Direct Season Contracting',
      desc: 'Bypass all intermediaries. Negotiate and sign direct contracts for the 2026-27 Umrah season for maximum margins.',
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-400" />,
      title: 'Zero-Wait Meeting Schedule',
      desc: 'Your 15-20 meetings are pre-scheduled based on your profile. No standing in lines or random booth visits.',
    },
    {
      icon: <Globe className="w-6 h-6 text-primary-400" />,
      title: 'New Product Previews',
      desc: 'Get first access to exclusive hotel room allotments and luxury transport packages before they hit the general market.',
    },
    {
      icon: <Award className="w-6 h-6 text-accent-400" />,
      title: 'VIP Networking Dinners',
      desc: 'Connect with Saudi decision-makers in a premium setting during our evening gala networking dinners.',
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary-400" />,
      title: 'IATA Agent Ecosystem',
      desc: "Network with India's elite 150-300 Umrah agents. Build regional and national partnerships with your peers.",
    },
  ];

  const faqs = [
    {
      question: 'Is there a registration fee for buyers?',
      answer: 'Attendance is completely free for verified Umrah operators who meet the eligibility criteria (IATA status + minimum volume of 300 pax/month).',
    },
    {
      question: 'How are the meetings scheduled?',
      answer: "Once your application is approved, our matching algorithm pairs you with Saudi suppliers that fit your business needs. You'll receive a detailed meeting itinerary 6 days before the event.",
    },
    {
      question: 'Can I attend in multiple cities?',
      answer: 'Yes, you can register for multiple cities if your company operates across regions. However, you must qualify for each city\'s buyer quota independently.',
    },
    {
      question: 'What documents are required for verification?',
      answer: 'We require your IATA accreditation certificate, company profile, and a summary of your Umrah pax volume for the past 24 months.',
    },
  ];

  return (
    <div id="register-buyer" ref={containerRef} className="relative bg-secondary-900 text-white selection:bg-accent-500/30">
      {/* ── Massive Hero Section ── */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            style={{ y: bgY }}
            src="/assets/nano_buyer_banner.png"
            alt="Register as Buyer"
            className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 via-secondary-900/40 to-secondary-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/60 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-500/20 border border-accent-400/40 text-accent-300 text-sm font-bold mb-10 backdrop-blur-md"
          >
            <BadgeCheck className="w-4 h-4" />
            INDIAN AGENTS — REGISTER AS VERIFIED BUYER
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-display font-bold mb-8 leading-[1.1] tracking-tight text-white"
          >
            Scale Your Umrah <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-orange-400 to-accent-500">
              Supply Chain.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-lg md:text-xl text-secondary-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Stop chasing suppliers. Let them come to you. <br />
            Meet <span className="text-accent-400 font-bold">40+ Saudi decision-makers</span> in your city for pre-matched, high-volume business sessions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 px-8 py-4 text-base font-bold bg-primary-600 hover:bg-primary-500 text-white rounded-xl shadow-[0_0_40px_rgba(182,141,64,0.4)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-current" />
              Apply as Verified Buyer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#market-insights"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Why Attend?
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Market Insights Section ── */}
      <div id="market-insights" className="py-24 relative bg-secondary-900 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-bold mb-6 tracking-widest uppercase">
                Market Opportunity
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-white">
                India's 1.8M+ <br />
                <span className="text-accent-400">Pilgrim Market.</span>
              </h2>
              <p className="text-lg text-secondary-300 mb-0 leading-relaxed font-medium">
                In 2025, India emerged as one of the fastest-growing Umrah markets. ISUC 2026 brings the sources of that growth directly to your doorstep. This is where high-volume agents find the inventory they need to dominate the season.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 grid grid-cols-2 gap-4"
            >
              <MarketStat value={SITE_CONFIG.stats.marketVolumePilgrims} label="Total Pilgrims" sub="2025 Market Volume" />
              <MarketStat value="70%" label="OTA's Share" sub="Controlled by Agents" />
              <MarketStat value={`${SITE_CONFIG.stats.totalSuppliersCap}+`} label="Top Saudi DMCs" sub="Verified Suppliers" />
              <MarketStat value="Zero" label="Cost to Buyer" sub="For Verified Agents" />
            </motion.div>
          </div>

          {/* 3-City Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { city: 'Mumbai', date: '26–27 July 2026', img: '/assets/nano_mumbai_banner.png' },
              { city: 'Chennai', date: '28 July 2026', img: '/assets/nano_chennai_banner.png' },
              { city: 'Delhi', date: '29–30 July 2026', img: '/assets/nano_delhi_banner.png' },
            ].map((c, i) => (
              <div
                key={i}
                className="relative rounded-[32px] overflow-hidden group aspect-[4/3] border border-white/10 hover:border-accent-500/40 transition-all duration-500 shadow-xl"
              >
                <img src={c.img} alt={c.city} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-2xl font-bold text-white mb-1">{c.city}</h4>
                  <p className="text-accent-400 text-sm font-bold uppercase tracking-widest">{c.date}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Key Benefits Grid ── */}
      <div className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              A Private Room. <br /> <span className="text-accent-400">Public Gains.</span>
            </h2>
            <p className="text-secondary-400 font-medium text-lg">
              ISUC 2026 is not an exhibition. It is a series of private, high-value business meetings curated specifically for your profile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[35px] bg-white/5 border border-white/10 hover:border-accent-500/30 hover:bg-white/8 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary-900 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-secondary-900 transition-all duration-300 shadow-sm">
                  {b.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-400 transition-colors">{b.title}</h3>
                <p className="text-secondary-400 font-medium leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Verification & Eligibility ── */}
      <div className="py-32 bg-secondary-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-white mb-8">Verification Process</h2>
              <div className="space-y-10 relative">
                <div className="absolute left-[27px] top-4 bottom-4 w-px bg-accent-500/20" />
                {[
                  { step: '01', title: 'Registration', desc: 'Submit your basic company details and IATA number.' },
                  { step: '02', title: 'Volume Audit', desc: 'Our team reviews your past 12-month Umrah pax volume.' },
                  { step: '03', title: 'Market Fit', desc: 'We ensure your business matches our Saudi suppliers category.' },
                  { step: '04', title: 'Final Invitation', desc: 'Receive your city-specific badge and meeting itinerary.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 relative z-10 group">
                    <div className="w-14 h-14 rounded-full bg-secondary-900 border border-accent-500/30 flex items-center justify-center font-display font-bold text-accent-400 group-hover:bg-accent-500 group-hover:text-secondary-900 transition-all duration-300">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-secondary-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-10 md:p-16 rounded-[50px] border border-white/10 backdrop-blur-md"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-accent-500/20 flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white">Who Qualifies?</h3>
              </div>
              <ul className="space-y-6 mb-12">
                {[
                  'IATA Accredited Travel Agencies',
                  'Consolidators with 300+ pax monthly volume',
                  'Regional Sub-Agent Network Owners',
                  'Retail Agencies with Dedicated Umrah Desks',
                  'Corporate & VIP Pilgrim Tour Planners',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-secondary-300 group">
                    <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 rounded-3xl bg-red-500/10 border border-red-500/20 flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm text-red-200">
                  <strong>Strict Policy:</strong> Direct pilgrims, retail customers, and unverified agents are not permitted to attend ISUC 2026.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── FAQ Section ── */}
      <div className="py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Common Questions</h2>
            <p className="text-secondary-400 font-medium">Everything you need to know about attending as a buyer.</p>
          </div>
          <div className="bg-white/5 rounded-[40px] border border-white/10 p-10 md:p-16 backdrop-blur-sm">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Final Call to Action ── */}
      <div className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-10 md:p-14 rounded-[32px] bg-gradient-to-br from-secondary-900 to-secondary-900 border border-accent-500/20 relative overflow-hidden"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Ready to Secure <br />
              <span className="text-accent-400">Your Direct Saudi Contracts?</span>
            </h2>
            <p className="text-xl text-accent-100 mb-12 max-w-2xl mx-auto font-medium">
              Applications for verified buyers are completely free but limited by city quotas. Apply now to secure your invitation.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 bg-white text-secondary-900 font-bold text-lg rounded-2xl hover:bg-secondary-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
            >
              Open Buyer Application Form →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <BuyerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default RegisterBuyerSection;
