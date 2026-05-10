import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import {
  Building2, Star, Clock, Users, MapPin, CheckCircle2, Zap,
  ArrowRight, Shield, TrendingUp, Globe, Calendar, Hotel,
  Plane, Utensils, Car, Award, BarChart3, Handshake,
  ArrowUpRight, Info, HelpCircle
} from 'lucide-react';

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const FeatureCard = ({ icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -8, scale: 1.02 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary-500/30 hover:bg-white/8 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="w-14 h-14 rounded-2xl bg-secondary-800 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">{title}</h3>
    <p className="text-secondary-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const ExhibitPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);

  const tableFeatures = [
    { icon: <Building2 className="w-6 h-6 text-primary-400" />, title: 'Branded Table in All 4 Cities', desc: 'Your dedicated premium exhibition space across Delhi, Mumbai, Hyderabad & Chennai — fully set up and managed.' },
    { icon: <Users className="w-6 h-6 text-accent-400" />, title: '60–80 Pre-Matched Buyer Meetings', desc: 'Guaranteed face-to-face sessions with verified Indian operators matched to your hotel category, group size & regions.' },
    { icon: <Shield className="w-6 h-6 text-emerald-400" />, title: 'Zero Cold Outreach Needed', desc: 'We screen, qualify and schedule all buyer meetings. You arrive ready to close deals.' },
    { icon: <Globe className="w-6 h-6 text-primary-400" />, title: 'Access to 1.8M+ Pilgrim Market', desc: "India's Umrah market sent 1.8M pilgrims in 2025. 70% of volume controlled by the buyers you'll meet here." },
    { icon: <Handshake className="w-6 h-6 text-accent-400" />, title: 'Networking Dinners Each Evening', desc: 'Exclusive gala dinners where real partnerships and MoUs are signed in a relaxed luxury setting.' },
    { icon: <TrendingUp className="w-6 h-6 text-primary-400" />, title: 'Full 7-Day Tour Managed', desc: 'From airport to airport — 4-star hotels, domestic flights, half-board meals, transfers. You just focus on business.' },
  ];

  const tourInclusions = [
    { icon: <Hotel className="w-5 h-5" />, label: '4-Star Hotels', desc: 'Premium stay in all 4 cities' },
    { icon: <Plane className="w-5 h-5" />, label: 'Domestic Flights', desc: 'Convenient inter-city flights' },
    { icon: <Utensils className="w-5 h-5" />, label: 'Half Board Meals', desc: 'Breakfast, Lunch + 2 Coffee Breaks' },
    { icon: <Car className="w-5 h-5" />, label: 'Airport Transfers', desc: 'All Domestic Pick-up & Drop Off' },
  ];

  return (
    <div id="exhibit" ref={containerRef} className="relative bg-secondary-900 text-white selection:bg-primary-500/30">
      
      {/* ── Massive Hero Section ── */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            style={{ y: bgY }}
            src="/assets/nano_exhibit_banner.png" 
            alt="Exhibit at ISUC 2026" 
            className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 via-secondary-900/40 to-secondary-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/60 to-transparent" />
        </div>

        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-[120px] bg-blue-600/10"
              style={{
                width: 400 + i * 200,
                height: 400 + i * 200,
                left: `${15 + i * 25}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-500/20 border border-primary-400/40 text-primary-300 text-sm font-bold mb-10 backdrop-blur-md"
          >
            <Building2 className="w-4 h-4" />
            B2B EXHIBITOR OPPORTUNITY — SAUDI SUPPLIERS
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-display font-bold mb-8 leading-[1.1] tracking-tight"
          >
            The Direct Path to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-300 to-primary-600">
              India's Umrah Trade
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.45 }}
            className="text-lg md:text-xl text-secondary-200 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Skip the booths. Skip the random footfall. <br />
            Secure one of <span className="text-primary-400">40 exclusive tables</span> and meet India's top 300 buyers in focused, pre-scheduled sessions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <button
              onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 px-8 py-4 text-base font-bold bg-primary-600 hover:bg-primary-500 text-white rounded-xl shadow-[0_0_40px_rgba(182,141,64,0.4)] transition-all duration-300 hover:-translate-y-1"
            >
              <Zap className="w-5 h-5 fill-current" />
              Reserve Exhibitor Table
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Explore Inclusions
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-blue-400"
            />
          </div>
        </motion.div>
      </div>

      {/* ── Stats Highlight ── */}
      <div className="relative py-24 bg-slate-900 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: 40, suffix: '', label: 'Exhibitor Tables', sub: 'Fixed Cap' },
              { stat: 300, suffix: '+', label: 'Verified Buyers', sub: 'IATA Accredited' },
              { stat: 4, suffix: '', label: 'Indian Cities', sub: 'Tier-1 Markets' },
              { stat: 80, suffix: '', label: 'Avg Meetings', sub: 'Per Exhibitor' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="text-5xl md:text-6xl font-display font-bold text-white mb-3 flex items-center justify-center gap-1">
                  <CountUp end={item.stat} suffix={item.suffix} />
                </div>
                <div className="text-primary-400 font-bold tracking-widest uppercase text-xs mb-1 group-hover:text-white transition-colors">
                  {item.label}
                </div>
                <div className="text-secondary-500 text-sm">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Detailed Features Section ── */}
      <div id="details" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                Not a Stall. <br />
                <span className="text-blue-400">A Structured Bridge.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Standard exhibitions rely on luck. ISUC 2026 relies on data. We match your hotel, DMC, or transport inventory with buyers specifically looking for your category.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "20-Minute Focused Slots", desc: "Every meeting is timed and pre-matched. No time wasted on 'just looking' visitors." },
                  { title: "Branded Premium Table", desc: "Fully set up across 4 luxury hotels in Delhi, Mumbai, Hyderabad, and Chennai." },
                  { title: "Direct MoU Signing", desc: "Exclusive gala dinners designed for concluding business and signing partnerships." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
              <img 
                src="/assets/nano_b2b_meetings.png" 
                alt="B2B Meetings" 
                className="relative z-10 rounded-3xl shadow-2xl border border-white/10 w-full object-cover aspect-video"
              />
              <div className="absolute -bottom-6 -right-6 z-20 bg-slate-900 border border-white/10 p-6 rounded-2xl shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white tracking-tight">60–80</div>
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Meetings Guaranteed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {tableFeatures.map((feature, i) => (
              <FeatureCard key={i} {...feature} delay={i * 0.1} />
            ))}
          </div>

          {/* ── Gala Dinner Section ── */}
          <div className="relative rounded-[40px] overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <img 
                src="/assets/nano_gala_dinner.png" 
                alt="Networking Gala" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-secondary-900/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 p-10 md:p-20 flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-400 text-xs font-bold mb-8 tracking-widest uppercase">
                  Relationship Building
                </div>
                <h3 className="text-4xl md:text-6xl font-display font-bold mb-8">
                  Where Handshakes <br />
                  <span className="text-amber-400">Become Contracts.</span>
                </h3>
                <p className="text-lg text-slate-300 mb-12 leading-relaxed">
                  Every evening concludes with a luxury networking gala dinner. A curated environment where Saudi exhibitors and Indian buyers socialize in an informal yet high-end setting to solidify the day's business talks.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  {[
                    { label: "Exclusive Venue", icon: <Star className="w-5 h-5 text-amber-400" /> },
                    { label: "Top 300 Buyers", icon: <Users className="w-5 h-5 text-amber-400" /> },
                    { label: "Unmatched Vibe", icon: <Award className="w-5 h-5 text-amber-400" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-white font-bold">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Fully Managed Tour Grid ── */}
      <div className="py-32 bg-slate-900 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              A 7-Day <span className="text-blue-400">Seamless Tour.</span>
            </h2>
            <p className="text-slate-400 text-lg">
              One package, zero logistics. From the moment you land in Delhi until you fly out from Chennai, we handle every detail of your stay, travel, and meetings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourInclusions.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-secondary-900 border border-white/5 hover:border-blue-500/30 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-400">{item.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.label}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Eligibility & Process ── */}
      <div className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 p-10 md:p-16 rounded-[40px] border border-white/10"
            >
              <h3 className="text-3xl font-display font-bold mb-10">Eligibility Checklist</h3>
              <div className="space-y-6">
                {[
                  "KSA-based Umrah DMCs & Ground Handlers",
                  "Makkah & Madinah Hotels (3★ to 5★)",
                  "Transport & Fleet Operators in Saudi Arabia",
                  "B2B Booking & Travel Tech Platforms",
                  "Catering & Meal Solution Companies",
                  "Visa & Pilgrim Service Companies",
                  "Saudi Tourism & Destination Boards"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 text-slate-300"
                  >
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-3xl font-display font-bold mb-6">Simple Application Path</h3>
              <p className="text-slate-400 mb-10 leading-relaxed">
                We maintain a strict quality balance. Applications are reviewed within 48 hours to ensure a balanced mix of products for our Indian buyers.
              </p>
              
              <div className="space-y-8 relative">
                <div className="absolute left-[27px] top-4 bottom-4 w-px bg-white/10" />
                {[
                  { step: "01", title: "Submit Online Profile", desc: "Tell us about your inventory and target market segment." },
                  { step: "02", title: "Verification Review", desc: "Our team validates your status and product fit." },
                  { step: "03", title: "Secure Your Table", desc: "Receive your invitation and confirm with a table reservation." },
                  { step: "04", title: "Show Up & Close", desc: "We handle the rest. Land in India and start meeting." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 relative z-10 group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center font-display font-bold text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
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
          </div>
        </div>
      </div>

      {/* ── Final CTA Section ── */}
      <div id="apply-form" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-600/5 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-10 md:p-14 rounded-[32px] bg-gradient-to-br from-secondary-900 to-secondary-900 border border-primary-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                Ready to Meet <br />
                Your Next 300 Partners?
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
                Applications for ISUC 2026 are now open. Only 40 table slots are available for Saudi suppliers. Secure yours today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
                <a
                  href="https://zoho.com/exhibit"
                  className="px-10 py-5 bg-white text-blue-700 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  Start My Application
                </a>
                <a
                  href="mailto:info@travizly.com"
                  className="px-10 py-5 bg-blue-700/30 text-white font-bold text-lg rounded-2xl border border-white/30 backdrop-blur-md hover:bg-blue-700/50 transition-all duration-300"
                >
                  Contact Organizer
                </a>
              </div>

              <div className="flex items-center justify-center gap-6 text-blue-100/70 text-sm font-bold tracking-widest uppercase">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 48h Response</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> B2B Verified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default ExhibitPage;
