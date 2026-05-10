import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import {
  Shield, CheckCircle2, AlertCircle, Users, Star, Clock,
  ArrowRight, Zap, Building2, TrendingUp, BadgeCheck, Lock,
  Globe, BarChart3, Calendar, MapPin, Award, ChevronDown,
  Target, Rocket, Briefcase
} from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-lg font-bold text-secondary-200 group-hover:text-primary-400 transition-colors">{question}</span>
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
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed">
              {answer}
            </p>
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

const RegisterBuyer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  
  const benefits = [
    { icon: <Building2 className="w-6 h-6 text-primary-400" />, title: '40+ Saudi Suppliers in Your City', desc: 'Meet top-tier DMCs, 5-star hotels from Makkah & Madinah, and transport giants directly in your own city.', color: 'bg-primary-500', delay: 0.1 },
    { icon: <TrendingUp className="w-6 h-6 text-accent-400" />, title: 'Direct Season Contracting', desc: 'Bypass all intermediaries. Negotiate and sign direct contracts for the 2026-27 Umrah season for maximum margins.', color: 'bg-accent-500', delay: 0.2 },
    { icon: <Clock className="w-6 h-6 text-emerald-400" />, title: 'Zero-Wait Meeting Schedule', desc: 'Your 15-20 meetings are pre-scheduled based on your profile. No standing in lines or random booth visits.', color: 'bg-emerald-500', delay: 0.3 },
    { icon: <Globe className="w-6 h-6 text-primary-400" />, title: 'New Product Previews', desc: 'Get first access to exclusive hotel room allotments and luxury transport packages before they hit the general market.', color: 'bg-primary-500', delay: 0.4 },
    { icon: <Award className="w-6 h-6 text-accent-400" />, title: 'VIP Networking Dinners', desc: 'Connect with Saudi decision-makers in a premium setting during our evening gala networking dinners.', color: 'bg-accent-500', delay: 0.5 },
    { icon: <Briefcase className="w-6 h-6 text-primary-400" />, title: 'IATA Agent Ecosystem', desc: 'Network with India\'s elite 150-300 Umrah agents. Build regional and national partnerships with your peers.', color: 'bg-primary-500', delay: 0.6 },
  ];

  const faqs = [
    { question: "Is there a registration fee for buyers?", answer: "Attendance is completely free for verified Umrah operators who meet the eligibility criteria (IATA status + minimum volume of 300 pax/month)." },
    { question: "How are the meetings scheduled?", answer: "Once your application is approved, our matching algorithm pairs you with Saudi suppliers that fit your business needs. You'll receive a detailed meeting itinerary 7 days before the event." },
    { question: "Can I attend in multiple cities?", answer: "Yes, you can register for multiple cities if your company operates across regions. However, you must qualify for each city's buyer quota independently." },
    { question: "What documents are required for verification?", answer: "We require your IATA accreditation certificate, company profile, and a summary of your Umrah pax volume for the past 24 months." }
  ];

  return (
    <div id="register-buyer" ref={containerRef} className="relative bg-secondary-900 text-white selection:bg-amber-500/30">
      
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

        {/* Floating orbs */}
        {['bg-amber-500/20', 'bg-blue-500/10', 'bg-indigo-500/10'].map((cls, i) => (
          <motion.div key={i} className={`absolute rounded-full blur-[100px] ${cls}`}
            style={{ width: 400 + i * 200, height: 400 + i * 200, left: `${10 + i * 30}%`, top: `${20 + i * 20}%` }}
            animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
            transition={{ duration: 10 + i * 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-sm font-bold mb-10 backdrop-blur-md"
          >
            <BadgeCheck className="w-4 h-4" />
            INDIAN AGENTS — REGISTER AS VERIFIED BUYER
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-display font-bold mb-8 leading-[1.1] tracking-tight"
          >
            Scale Your Umrah <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">
              Supply Chain.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.45 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Stop chasing suppliers. Let them come to you. <br />
            Meet <span className="text-amber-400">40+ Saudi decision-makers</span> in your city for pre-matched, high-volume business sessions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a 
              href="#apply-now"
              className="group inline-flex items-center gap-3 px-8 py-4 text-base font-bold bg-primary-600 hover:bg-primary-500 text-white rounded-xl shadow-[0_0_40px_rgba(182,141,64,0.4)] transition-all duration-300 hover:-translate-y-1"
            >
              <Zap className="w-5 h-5 fill-current" />
              Apply as Verified Buyer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#market-insights"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Why Attend?
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="mt-12 inline-flex items-center gap-3 bg-red-500/10 border border-red-500/30 px-6 py-3 rounded-full backdrop-blur-sm"
          >
            <Lock className="w-4 h-4 text-red-400" />
            <span className="text-red-200 text-sm font-medium">
              <strong className="text-white">Verification Deadline: 15 May 2026.</strong> Slots are filling fast in Delhi & Mumbai.
            </span>
          </motion.div>
        </div>
      </div>

      {/* ── Market Insights Section ── */}
      <div id="market-insights" className="py-24 relative bg-slate-900 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-6 tracking-widest uppercase">
                Market Opportunity
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-white">
                India's 1.8M+ <br />
                <span className="text-amber-400">Pilgrim Market.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                In 2025, India emerged as one of the fastest-growing Umrah markets. ISUC 2026 brings the sources of that growth directly to your doorstep. This is where high-volume agents find the inventory they need to dominate the season.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <MarketStat value="1.8M+" label="Total Pilgrims" sub="2025 Market Volume" />
                <MarketStat value="70%" label="OTA's Share" sub="Controlled by Agents" />
                <MarketStat value="40+" label="Top Saudi DMCs" sub="Confirmed Exhibitors" />
                <MarketStat value="Zero" label="Cost to Buyer" sub="For Verified Agents" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 grid grid-cols-2 gap-5"
            >
              {[
                { city: 'Delhi', date: '3–5 July 2026', img: '/assets/nano_delhi_banner.png' },
                { city: 'Mumbai', date: '5–7 July 2026', img: '/assets/nano_mumbai_banner.png' },
                { city: 'Hyderabad', date: '7–8 July 2026', img: '/assets/nano_hyd_banner.png' },
                { city: 'Chennai', date: '8–9 July 2026', img: '/assets/nano_chennai_banner.png' },
              ].map((c, i) => (
                <div key={i} className="relative rounded-3xl overflow-hidden group aspect-square border border-white/10 hover:border-amber-500/40 transition-colors">
                  <img src={c.img} alt={c.city} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-xl font-bold text-white mb-0.5">{c.city}</h4>
                    <p className="text-amber-400 text-xs font-bold uppercase tracking-widest">{c.date}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Key Benefits Grid ── */}
      <div className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              A Private Room. <br /> <span className="text-amber-400">Public Gains.</span>
            </h2>
            <p className="text-slate-400 text-lg">
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
                className="p-10 rounded-[35px] bg-white/5 border border-white/10 hover:border-amber-500/30 hover:bg-white/8 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-secondary-900 transition-all duration-300">
                  {b.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">{b.title}</h3>
                <p className="text-slate-400 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Verification & Eligibility ── */}
      <div className="py-32 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-8">Verification Process</h2>
              <div className="space-y-10 relative">
                <div className="absolute left-[27px] top-4 bottom-4 w-px bg-amber-500/20" />
                {[
                  { step: "01", title: "Registration", desc: "Submit your basic company details and IATA number." },
                  { step: "02", title: "Volume Audit", desc: "Our team reviews your past 12-month Umrah pax volume." },
                  { step: "03", title: "Market Fit", desc: "We ensure your business matches our Saudi suppliers category." },
                  { step: "04", title: "Final Invitation", desc: "Receive your city-specific badge and meeting itinerary." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 relative z-10 group">
                    <div className="w-14 h-14 rounded-full bg-slate-900 border border-amber-500/30 flex items-center justify-center font-display font-bold text-amber-400 group-hover:bg-amber-500 group-hover:text-secondary-900 transition-all duration-300">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
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
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white">Who Qualifies?</h3>
              </div>
              <ul className="space-y-6 mb-12">
                {[
                  "IATA Accredited Travel Agencies",
                  "Consolidators with 300+ pax monthly volume",
                  "Regional Sub-Agent Network Owners",
                  "Retail Agencies with Dedicated Umrah Desks",
                  "Corporate & VIP Pilgrim Tour Planners"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300 group">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{item}</span>
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
            <h2 className="text-4xl font-display font-bold mb-4">Common Questions</h2>
            <p className="text-slate-400">Everything you need to know about attending as a buyer.</p>
          </div>
          <div className="bg-white/5 rounded-[40px] border border-white/10 p-10 md:p-16 backdrop-blur-sm">
            {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
          </div>
        </div>
      </div>

      {/* ── Final CTA Section ── */}
      <div id="apply-now" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto p-10 md:p-16 rounded-[40px] bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 relative overflow-hidden group text-center"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-8 leading-tight">
                Secure Your <br /> Season Inventory.
              </h2>
              <p className="text-xl text-slate-900/80 mb-12 max-w-2xl mx-auto font-bold">
                Verification takes 72 hours. Don't wait until the deadline. Apply now to secure your pre-matched meeting schedule with Saudi suppliers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://zoho.com/buyer-reg"
                  className="px-12 py-6 bg-secondary-900 text-white font-bold text-xl rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  Apply as Verified Buyer
                </a>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-amber-600 bg-slate-800 flex items-center justify-center overflow-hidden">
                        <Users className="w-5 h-5 text-amber-500" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="text-secondary-900 font-bold text-sm uppercase tracking-widest">Join 150+</div>
                    <div className="text-slate-900/60 text-xs font-bold uppercase tracking-widest">Verified Agents</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default RegisterBuyer;
