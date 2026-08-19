import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { FOOTER_QUICK_LINKS, FOOTER_CTA_LINKS } from '@/data/navigationData';
import { scrollToSection, scrollToTop } from '@/utils/scrollUtils';

/**
 * Global Site Footer Component
 */
export const Footer = () => {
  return (
    <footer className="bg-secondary-900 pt-16 pb-8 border-t border-secondary-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 mb-6 group cursor-pointer"
              aria-label={SITE_CONFIG.name}
            >
              <img
                src={logo}
                alt={SITE_CONFIG.shortName}
                className="h-28 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </button>
            <p className="text-secondary-400 mb-6 leading-relaxed text-sm font-medium">
              {SITE_CONFIG.name}
              <br />
              {SITE_CONFIG.dates}
              <br />
              {SITE_CONFIG.citiesDisplay}
            </p>

            {/* CTA shortcuts */}
            <div className="space-y-2 mb-6">
              {FOOTER_CTA_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block text-sm font-bold transition-colors cursor-pointer ${link.color}`}
                >
                  {link.label} →
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-400 hover:bg-primary-700 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-400 hover:bg-pink-600 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 font-display text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={SITE_CONFIG.contact.emailHref}
                  className="flex items-center gap-3 text-secondary-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary-800 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary-500 mb-0.5">Enquiries &amp; Partnerships</div>
                    <div className="text-sm font-medium">{SITE_CONFIG.contact.email}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.contact.phoneKSA.href}
                  className="flex items-center gap-3 text-secondary-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary-800 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary-500 mb-0.5">{SITE_CONFIG.contact.phoneKSA.country}</div>
                    <div className="text-sm font-medium">{SITE_CONFIG.contact.phoneKSA.display}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.contact.phoneIndia.href}
                  className="flex items-center gap-3 text-secondary-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary-800 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary-500 mb-0.5">{SITE_CONFIG.contact.phoneIndia.country}</div>
                    <div className="text-sm font-medium">{SITE_CONFIG.contact.phoneIndia.display}</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-400">
                <div className="w-9 h-9 rounded-lg bg-secondary-800 flex items-center justify-center mt-0.5 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-secondary-500 mb-0.5">Tour Cities</div>
                  <div className="text-sm font-medium">{SITE_CONFIG.citiesDisplay}</div>
                  <div className="text-xs text-secondary-500 mt-0.5">{SITE_CONFIG.dates}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6 font-display text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-secondary-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm text-left flex items-center gap-2 group cursor-pointer"
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
            Organized by {SITE_CONFIG.organizer} © 2026. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection('exhibit')}
              className="text-secondary-600 hover:text-secondary-300 transition-colors cursor-pointer"
            >
              Exhibit
            </button>
            <button
              onClick={() => scrollToSection('register-buyer')}
              className="text-secondary-600 hover:text-secondary-300 transition-colors cursor-pointer"
            >
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
