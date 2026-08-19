/**
 * Smooth scroll helper utilities
 */

/**
 * Smoothly scrolls the window to an HTML element by ID
 * @param {string} id - HTML element id to scroll to
 * @param {ScrollIntoViewOptions} options
 */
export const scrollToSection = (id, options = { behavior: 'smooth', block: 'start' }) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView(options);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

/**
 * Smoothly scrolls to the top of the page
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
