/**
 * Global Site Configuration & Metadata for ISUC 2026
 */
export const SITE_CONFIG = {
  name: 'Indo-Saudi Umrah Connect 2026',
  shortName: 'ISUC 2026',
  tagline: 'Connecting Saudi suppliers with India’s Umrah market',
  subtitle: '3 Cities. 6 Days. Countless Business Opportunities. One Powerful Platform.',
  dates: '26–31 July 2026',
  cities: ['Mumbai', 'Chennai', 'Delhi'],
  citiesDisplay: 'Mumbai • Chennai • Delhi',
  organizer: '9X EVENTS',
  brochurePdfUrl: '/pdf/ISUC2026%20BROCHURE%209X.pdf',
  
  contact: {
    email: 'info@travizly.com',
    emailHref: 'mailto:info@travizly.com',
    sponsorshipEmailHref: 'mailto:info@travizly.com?subject=Sponsorship%20Inquiry%20ISUC%202026',
    phoneIndia: {
      display: '+91 80728 96589',
      href: 'tel:+918072896589',
      label: 'IN: +91 80728 96589',
      country: 'India',
    },
    phoneKSA: {
      display: '+966 55 889 1231',
      href: 'tel:+966558891231',
      label: 'KSA: +966 55 889 1231',
      country: 'Saudi Arabia',
    },
  },

  stats: {
    totalSuppliersCap: 40,
    reservedTables: 22,
    meetingsPerSupplier: '60–80',
    verifiedBuyersCount: '150–300',
    marketVolumePilgrims: '1.8M+',
    durationDays: '6 Days',
    citiesCount: 3,
  },

  trustBadges: [
    'Limited to 40 Suppliers',
    'Verified Buyers Only',
    'Organized by 9X EVENTS',
  ],

  socialLinks: {
    linkedin: '#',
    instagram: '#',
  },
};

export default SITE_CONFIG;
