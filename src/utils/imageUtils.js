/**
 * Image processing utilities with in-memory caching
 */
export const processedLogosCache = new Map();

/**
 * Automatically removes non-white solid or slight gradient backgrounds
 * from partner logos using HTML5 Canvas pixel manipulation.
 *
 * @param {string} src - The original image URL
 * @param {Function} callback - Called with the processed data URL
 */
export const processLogoBackground = (src, callback) => {
  if (!src) return;

  if (processedLogosCache.has(src)) {
    callback(processedLogosCache.get(src));
    return;
  }

  const img = new Image();
  img.crossOrigin = 'anonymous';

  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) {
      callback(src);
      return;
    }

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

      // Only remove background if it is not already pure white
      const isAlreadyWhite = refR > 245 && refG > 245 && refB > 245;

      if (!isAlreadyWhite) {
        // Threshold to clear gradient backgrounds
        const thresholdSq = 120 * 120;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const distSq = (r - refR) * (r - refR) + (g - refG) * (g - refG) + (b - refB) * (b - refB);

          if (distSq < thresholdSq) {
            data[i] = 255;
            data[i + 1] = 255;
            data[i + 2] = 255;
          }
        }

        ctx.putImageData(imageData, 0, 0);
        const processedUrl = canvas.toDataURL();
        processedLogosCache.set(src, processedUrl);
        callback(processedUrl);
      } else {
        processedLogosCache.set(src, src);
        callback(src);
      }
    } catch (err) {
      console.warn('Canvas logo background processing failed for: ' + src, err);
      callback(src);
    }
  };

  img.onerror = () => {
    console.warn('Image failed to load for processing: ' + src);
    callback(src);
  };

  img.src = src;
};
