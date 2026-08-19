import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { processLogoBackground } from '@/utils/imageUtils';

/**
 * Enhanced Logo Image with automated background clearing and hover effects
 */
export const LogoImage = ({ src, alt, className = '', scale = 1.1 }) => {
  const [processedSrc, setProcessedSrc] = useState(src);

  useEffect(() => {
    processLogoBackground(src, (cleanedSrc) => {
      setProcessedSrc(cleanedSrc);
    });
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

export default LogoImage;
