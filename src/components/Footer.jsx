import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // All quick links mapped to their section ID and component file
  const quickLinks = [
    { label: 'Exhibit at ISUC 2026', id: 'exhibit' },       // → ExhibitPage.jsx
    { label: 'Register as Buyer', id: 'register-buyer' },    // → RegisterBuyer.jsx
    { label: 'Why ISUC', id: 'why' },                        // → WhyISUC.jsx
    { label: 'Event Format', id: 'format' },                 // → HowItWorks.jsx
    { label: 'Tour Schedule', id: 'schedule' },              // → TourSchedule.jsx
    { label: 'Venue & Hotels', id: 'venue' },                // → Venue.jsx
  ];

  const ctaLinks = [
    { label: 'Saudi Suppliers → Exhibit', id: 'exhibit', color: 'text-primary-400 hover:text-primary-300' },
    { label: 'Indian Agents → Buy', id: 'register-buyer', color: 'text-accent-400 hover:text-accent-300' },
  ];

  return (
    <footer className="bg-secondary-900 pt-16 pb-8 border-t border-secondary-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 mb-6 group">
              <img
                src={logo}
                alt="ISUC 2026"
                className="h-28 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </button>
            <p className="text-secondary-400 mb-6 leading-relaxed text-sm font-medium">
              Indo-Saudi Umrah Connect<br />
              3–8 July 2026<br />
              Delhi • Mumbai • Chennai
            </p>

            {/* CTA shortcuts */}
            <div className="space-y-2 mb-6">
              {ctaLinks.map((link) => (
                <button key={link.id} onClick={() => scrollTo(link.id)}
                  className={`block text-sm font-bold transition-colors ${link.color}`}>
                  {link.label} →
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-400 hover:bg-primary-700 hover:text-white transition-all duration-200 hover:scale-110">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-400 hover:bg-pink-600 hover:text-white transition-all duration-200 hover:scale-110">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 font-display text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@travizly.com"
                  className="flex items-center gap-3 text-secondary-400 hover:text-white transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-secondary-800 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary-500 mb-0.5">Enquiries &amp; Partnerships</div>
                    <div className="text-sm font-medium">info@travizly.com</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+966558891231"
                  className="flex items-center gap-3 text-secondary-400 hover:text-white transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-secondary-800 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary-500 mb-0.5">Saudi Arabia</div>
                    <div className="text-sm font-medium">+966 55 889 1231</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+918072896589"
                  className="flex items-center gap-3 text-secondary-400 hover:text-white transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-secondary-800 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary-500 mb-0.5">India</div>
                    <div className="text-sm font-medium">+91 80728 96589</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-400">
                <div className="w-9 h-9 rounded-lg bg-secondary-800 flex items-center justify-center mt-0.5 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-secondary-500 mb-0.5">Tour Cities</div>
                  <div className="text-sm font-medium">Delhi · Mumbai · Chennai</div>
                  <div className="text-xs text-secondary-500 mt-0.5">3–8 July 2026</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6 font-display text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-secondary-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm text-left flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary-600 group-hover:bg-primary-400 transition-colors shrink-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-500 text-sm">
            Organized by 9X EVENTS © 2026. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <button onClick={() => scrollTo('exhibit')}
              className="text-secondary-600 hover:text-secondary-300 transition-colors">
              Exhibit
            </button>
            <button onClick={() => scrollTo('register-buyer')}
              className="text-secondary-600 hover:text-secondary-300 transition-colors">
              Buy
            </button>
            <span className="text-secondary-700 font-medium">#ISUC2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
