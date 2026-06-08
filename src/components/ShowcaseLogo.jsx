import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Users } from 'lucide-react';

const processedLogosCache = new Map();

const LogoImage = ({ src, alt, className, scale = 1.1 }) => {
  const [processedSrc, setProcessedSrc] = useState(src);

  useEffect(() => {
    if (processedLogosCache.has(src)) {
      setProcessedSrc(processedLogosCache.get(src));
      return;
    }

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      try {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Get background reference color from top-left pixel
        const refR = data[0];
        const refG = data[1];
        const refB = data[2];

        // Only remove background if it is not already white
        const isAlreadyWhite = refR > 245 && refG > 245 && refB > 245;

        if (!isAlreadyWhite) {
          // Threshold of 120 to completely clear gradients on Mishkat
          const thresholdSq = 120 * 120;

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            const distSq = (r - refR) * (r - refR) + (g - refG) * (g - refG) + (b - refB) * (b - refB);

            if (distSq < thresholdSq) {
              // Replace background with pure white
              data[i] = 255;
              data[i + 1] = 255;
              data[i + 2] = 255;
            }
          }
          ctx.putImageData(imageData, 0, 0);
          const processedUrl = canvas.toDataURL();
          processedLogosCache.set(src, processedUrl);
          setProcessedSrc(processedUrl);
        } else {
          processedLogosCache.set(src, src);
        }
      } catch (err) {
        console.error("Error clearing background for " + src, err);
      }
    };
    img.onerror = () => {
      console.error("Error loading image for " + src);
    };
    img.src = src;
  }, [src]);

  return (
    <motion.img
      src={processedSrc}
      alt={alt}
      className={className}
      style={{ scale }}
      whileHover={{ scale: scale * 1.1 }}
      transition={{ duration: 0.3 }}
    />
  );
};

const ShowcaseLogo = () => {
  const mainSponsor = {
    name: 'Main Sponsor',
    logo: '/Main spo/main_sponsor.jpg',
    role: 'Official Main Sponsor',
    desc: 'Empowering the Indo-Saudi Umrah business corridor with premium travel facilitation.'
  };

  const exhibitors = [
    { name: 'Dream Zone', logo: '/exbit/Dream Zone.jpg', scale: 1.05 },
    { name: 'Miskat Travel', logo: '/exbit/miskat.jpeg', scale: 1.05 },
    { name: 'Niyat Tours', logo: '/exbit/niyat.jpeg', scale: 1.05 },
    { name: 'Nomo', logo: '/exbit/nomo.jpg', scale: 1.35 },
    { name: 'Qasswa', logo: '/exbit/qasswa.jpg', scale: 1.15 },
    { name: 'Rahat Travels', logo: '/exbit/rahat.jpg', scale: 1.05 },
    { name: 'Travizly', logo: '/exbit/travisly.png', scale: 1.05 },
    { name: 'Al-Shiaar', logo: '/exbit/الشعار-خلفية-بيضاء.jpg.jpg', scale: 1.35 }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="showcase" className="py-24 bg-secondary-900 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-accent-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            ISUC 2026 Partners
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
          >
            Confirmed Sponsors &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-500 to-accent-400">
              Exhibiting Brands
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary-400 text-lg"
          >
            Meet the industry leaders, key hotel chains, premium DMCs, and tech innovators showcasing at the event.
          </motion.p>
        </div>

        {/* ── Main Sponsor Spotlight ── */}
        <div className="max-w-xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] p-1 bg-gradient-to-b from-primary-400 to-accent-600 shadow-[0_0_50px_rgba(182,141,64,0.3)] group"
          >
            <div className="bg-secondary-900 rounded-[2.4rem] p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden">
              {/* Gold glow in card */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-500/20 border border-primary-500/40 rounded-full text-primary-400 text-xs font-bold tracking-widest uppercase mb-6">
                <Award className="w-3.5 h-3.5" />
                {mainSponsor.role}
              </span>

              {/* Logo Card */}
              <div className="w-full max-w-[320px] h-40 bg-white rounded-3xl p-5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                <LogoImage
                  src={mainSponsor.logo}
                  alt={mainSponsor.name}
                  className="w-full h-full object-contain rounded-2xl"
                  scale={1.1}
                />
              </div>

              <p className="text-secondary-300 text-sm md:text-base leading-relaxed max-w-sm">
                {mainSponsor.desc}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Exhibitors Grid ── */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10 justify-center md:justify-start"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">Confirmed Exhibitors</h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {exhibitors.map((exhibitor, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-white border border-white/10 rounded-3xl p-4 flex items-center justify-center h-32 hover:border-primary-500/30 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary-500/5 group relative overflow-hidden"
              >
                {/* Subtle back gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <LogoImage
                  src={exhibitor.logo}
                  alt={exhibitor.name}
                  className="w-full h-full object-contain rounded-2xl"
                  scale={exhibitor.scale}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ShowcaseLogo;
