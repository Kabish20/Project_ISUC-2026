# Indo-Saudi Umrah Connect (ISUC 2026)

> **India's Largest B2B Umrah Trade Event**
> 3 Cities (Mumbai • Chennai • Delhi) • 6 Days • 40 Pre-Screened Saudi Suppliers • 300+ Verified Indian Buyers

ISUC-2026 is an exclusive B2B trade corridor platform connecting Saudi DMCs, luxury hotel aggregators, transport operators, and travel-tech leaders directly with verified Indian Umrah tour operators through curated, pre-scheduled, 20-minute deal-making sessions and VIP networking gala dinners.

---

## 📁 Clean & Secure Project Structure

```
ISUC-2026/
├── public/
│   ├── assets/                           # High-resolution web assets & banners
│   ├── exbit/                            # Sanitized exhibitor brand assets (URL-safe names)
│   ├── sponsors/                         # Official main sponsor branding
│   ├── pdf/                              # Event overview brochure (isuc-2026-brochure.pdf)
│   └── logo.png                          # Production webroot favicon & brandmark
│
├── src/
│   ├── assets/                           # Static assets bundled with Vite
│   │   └── logo.png                      # Primary ISUC 2026 brand mark
│   │
│   ├── components/                       # Modular UI & Section Components
│   │   ├── common/                       # Reusable UI Primitives
│   │   │   ├── CountUp.jsx               # Viewport-triggered animated number counter
│   │   │   ├── FeatureCard.jsx           # Glassmorphism feature card with glow
│   │   │   ├── LogoImage.jsx             # Smart logo renderer with auto-background cleanup
│   │   │   ├── SectionHeading.jsx        # Standard section titles & badge chips
│   │   │   └── index.js                  # Barrel export
│   │   │
│   │   ├── layout/                       # Structural Layout Components
│   │   │   ├── Header.jsx                # Sticky responsive navbar with scroll blur
│   │   │   ├── TopBar.jsx                # Top bar with contacts & trust badges
│   │   │   ├── MobileNav.jsx             # Animated fullscreen mobile drawer
│   │   │   ├── Footer.jsx                # Multi-column footer with secure external links
│   │   │   └── index.js                  # Barrel export
│   │   │
│   │   ├── modals/                       # Form Dialogs & Zoho Lightboxes
│   │   │   ├── ExhibitModal.jsx          # Sandboxed Exhibitor Stall Booking lightbox
│   │   │   ├── BuyerModal.jsx            # Sandboxed Buyer Registration lightbox
│   │   │   └── index.js                  # Barrel export
│   │   │
│   │   ├── sections/                     # Landing Page Sections
│   │   │   ├── HeroSection.jsx           # Hero banner, countdown, and primary CTAs
│   │   │   ├── WhySection.jsx            # Market opportunity & brochure PDF download
│   │   │   ├── PartnerShowcaseSection.jsx# Main sponsor & exhibitor showcase grid
│   │   │   ├── HowItWorksSection.jsx     # 3-step structured meeting format
│   │   │   ├── WhoShouldAttendSection.jsx# Saudi suppliers vs. Indian buyers matrix
│   │   │   ├── ExhibitSection.jsx        # Exhibitor packages, inclusions & ROI metrics
│   │   │   ├── RegisterBuyerSection.jsx  # Buyer application, criteria & FAQ accordion
│   │   │   ├── TourScheduleSection.jsx   # 6-day multi-city tour itinerary
│   │   │   ├── VenueSection.jsx          # 4-star luxury venues & guarantee
│   │   │   ├── SponsorshipSection.jsx    # Official sponsorship packages & inquiry CTA
│   │   │   ├── OrganizedBySection.jsx    # 9X Events mission & organizer role
│   │   │   ├── FinalCTASection.jsx       # Dual conversion & table urgency banner
│   │   │   └── index.js                  # Barrel export
│   │   │
│   │   └── index.js                      # Root components barrel export
│   │
│   ├── constants/                        # Single Source of Truth Configuration
│   │   ├── siteConfig.js                 # Contact details, phones, emails, event dates
│   │   └── formConfig.js                 # Zoho Forms perma IDs & endpoints
│   │
│   ├── data/                             # Decoupled Application Data
│   │   ├── navigationData.js             # Nav links, mobile menu items, footer links
│   │   ├── scheduleData.js               # 6-day tour timeline & inclusions
│   │   ├── partnersData.js               # Sponsor & exhibitor list and metadata
│   │   ├── sponsorshipData.js            # Tier definitions, perks & features
│   │   ├── featuresData.js               # Venue features, roles & attendee specs
│   │   └── index.js                      # Data barrel export
│   │
│   ├── hooks/                            # Custom React Lifecycle Hooks
│   │   ├── useScrollPosition.js          # Reactive window scroll tracking
│   │   ├── useLockBodyScroll.js          # Body scroll locker for open modals/drawers
│   │   └── useZohoEmbed.js               # Hardened postMessage listener with origin check
│   │
│   ├── utils/                            # Pure Utility Helpers
│   │   ├── imageUtils.js                 # Bounded-cache canvas logo background processor
│   │   └── scrollUtils.js                # Smooth scrolling to element anchors
│   │
│   ├── App.jsx                           # Application root orchestrator
│   ├── index.css                         # Tailwind directives, custom glassmorphism styles
│   └── main.jsx                          # React 18 DOM entry point
│
├── deploy_to_aws.sh                      # Hardened automated deployment & Nginx provisioning
├── vercel.json                           # Edge security headers & asset caching rules
├── index.html                            # Hardened HTML5 head, SEO & absolute OpenGraph tags
├── tailwind.config.js                    # Metallic gold palette, fonts & animations
├── vite.config.js                        # Vite bundler with `@/` path alias support
└── package.json                          # Dependencies & NPM scripts
```

---

## 🛡️ Security Hardening & Protection Overview

This repository has been comprehensively audited and hardened against common web attack vectors:

| Threat / Vulnerability | Attack Vector | Remediation Applied |
|---|---|---|
| **Clickjacking / UI Redress** | Phishing frames framing the website | Implemented `X-Frame-Options: SAMEORIGIN` and CSP `frame-ancestors 'none'` in Nginx and Vercel. |
| **Cross-Window postMessage Hijacking (CWE-345)** | Malicious origins injecting rogue resize events | Added strict regex validation in `useZohoEmbed.js` (`/^https:\/\/[a-z0-9-]+\.(zohopublic\.(in\|com)\|zoho\.(com\|in))$/i`) plus finite bounds checking (200px - 3500px). |
| **Iframe Privilege Escalation** | Embedded third-party forms taking over parent | Added `sandbox="allow-scripts allow-forms allow-same-origin allow-popups"`, `loading="lazy"`, and `referrerPolicy="strict-origin-when-cross-origin"`. |
| **MIME-Type Sniffing Attacks** | Browsers executing non-script files as scripts | Enforced `X-Content-Type-Options: nosniff` at HTML meta, Vercel edge, and Nginx reverse proxy. |
| **Information Disclosure / Server Fingerprinting** | Attackers targeting specific Nginx or OS versions | Set `server_tokens off;` and parameterized origin IPs in `deploy_to_aws.sh`. |
| **Sensitive File & Dotfile Exposure** | Direct downloads of `.env`, `.git`, or backup files | Added Nginx block rules `location ~ /\.(?!well-known) { deny all; }` and blocked extensions (`.bak`, `.env`, `.config`, `.sql`, `.sh`, `.log`). |
| **Supply Chain / Dependency Tampering** | Floated dependencies pulled during server deploy | Migrated `deploy_to_aws.sh` to use deterministic `npm ci` with cryptographic lockfile validation. |
| **Secret Leaks via Git** | Developers committing credentials or certs | Expanded `.gitignore` with strict patterns for private keys (`*.pem`, `*.key`), AWS credentials, and `.env*`. |
| **Reverse Tabnabbing** | External target `_blank` manipulating `window.opener` | Configured `rel="noopener noreferrer"` and click guards on external links. |

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom Metallic Gold tokens & glassmorphism
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: Embedded [Zoho Forms](https://www.zoho.com/forms/) with hardened responsive height listener

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18.0 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone or navigate to project directory
cd "ISUC-2026"

# Install verified dependencies
npm install

# Start local development server
npm run dev
```

The application will be running at `http://localhost:5173`.

### Production Build
```bash
# Compile and optimize production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ⚙️ Key Configuration Files

| Purpose | File Path | Description |
|---|---|---|
| **Site Metadata & Contacts** | `src/constants/siteConfig.js` | Update contact numbers, email addresses, event dates, and stats in one place. |
| **Zoho Forms Config** | `src/constants/formConfig.js` | Configure exhibitor and buyer Zoho form perma links and iframe IDs. |
| **Tour Itinerary** | `src/data/scheduleData.js` | Edit city dates, itineraries, and hospitality inclusions. |
| **Partners & Logos** | `src/data/partnersData.js` | Add, update, or re-scale exhibitor and sponsor logos. |
| **Sponsorship Packages** | `src/data/sponsorshipData.js` | Modify sponsorship tiers, deliverables, and perks. |

---

## 🌐 Deployment (AWS / Cloud / Static Host)

The build output is located in the `dist/` directory and can be deployed directly to AWS S3 + CloudFront, Vercel, Netlify, or Ubuntu/Nginx EC2 servers using our hardened deployment script:

```bash
# On Ubuntu EC2 host:
chmod +x deploy_to_aws.sh
./deploy_to_aws.sh
```

---

## 📄 License
Organized by **9X EVENTS © 2026**. All rights reserved.
