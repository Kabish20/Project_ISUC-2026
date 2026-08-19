# Indo-Saudi Umrah Connect (ISUC 2026)

> **India's Largest B2B Umrah Trade Event**
> 3 Cities (Mumbai • Chennai • Delhi) • 6 Days • 40 Pre-Screened Saudi Suppliers • 300+ Verified Indian Buyers

ISUC-2026 is an exclusive B2B trade corridor platform connecting Saudi DMCs, luxury hotel aggregators, transport operators, and travel-tech leaders directly with verified Indian Umrah tour operators through curated, pre-scheduled, 20-minute deal-making sessions and VIP networking gala dinners.

---

## 📁 Professional Project Structure

```
Trade Fair/
├── public/
│   ├── assets/                           # High-resolution web assets & banners
│   ├── docs/                             # Official PDF documents & brochures
│   ├── exbit/                            # Exhibitor brand assets
│   ├── Main spo/                         # Official main sponsor branding
│   └── pdf/                              # Event overview and deck downloads
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
│   │   │   ├── Footer.jsx                # Multi-column footer with quick links
│   │   │   └── index.js                  # Barrel export
│   │   │
│   │   ├── modals/                       # Form Dialogs & Zoho Lightboxes
│   │   │   ├── ExhibitModal.jsx          # Exhibitor Stall Booking Zoho lightbox modal
│   │   │   ├── BuyerModal.jsx            # Buyer Registration Zoho lightbox modal
│   │   │   └── index.js                  # Barrel export
│   │   │
│   │   ├── sections/                     # Landing Page Sections
│   │   │   ├── HeroSection.jsx           # Hero banner, countdown, and primary CTAs
│   │   │   ├── WhySection.jsx            # Market opportunity & overview PDF download
│   │   │   ├── PartnerShowcaseSection.jsx# Main sponsor & exhibitor showcase grid
│   │   │   ├── HowItWorksSection.jsx     # 3-step structured meeting format
│   │   │   ├── WhoShouldAttendSection.jsx# Saudi suppliers vs. Indian buyers matrix
│   │   │   ├── ExhibitSection.jsx        # Exhibitor packages, inclusions & ROI metrics
│   │   │   ├── RegisterBuyerSection.jsx  # Buyer application, criteria & FAQ accordion
│   │   │   ├── TourScheduleSection.jsx   # 6-day multi-city tour itinerary
│   │   │   ├── VenueSection.jsx          # 4-star luxury venues & guarantee
│   │   │   ├── OrganizedBySection.jsx    # 9X Events mission & organizer role
│   │   │   ├── SponsorshipSection.jsx    # Sponsorship tiers overview
│   │   │   ├── SponsorDeckSection.jsx    # Deep-dive sponsorship presentation deck
│   │   │   ├── FinalCTASection.jsx       # Dual conversion & table urgency banner
│   │   │   └── index.js                  # Barrel export
│   │   │
│   │   └── index.js                      # Root components barrel export
│   │
│   ├── constants/                        # Single Source of Truth Configuration
│   │   ├── siteConfig.js                 # Contact details, phones, emails, event dates
│   │   ├── formConfig.js                 # Zoho Forms perma IDs & endpoints
│   │   └── index.js                      # Constants barrel export
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
│   │   ├── useZohoEmbed.js               # Zoho iframe height listener & URL builder
│   │   └── index.js                      # Hooks barrel export
│   │
│   ├── utils/                            # Pure Utility Helpers
│   │   ├── imageUtils.js                 # HTML5 canvas background remover & logo cache
│   │   ├── scrollUtils.js                # Smooth scrolling to element anchors
│   │   └── index.js                      # Utils barrel export
│   │
│   ├── App.jsx                           # Application root orchestrator
│   ├── index.css                         # Tailwind directives, custom glassmorphism styles
│   └── main.jsx                          # React 18 DOM entry point
│
├── index.html                            # Semantic HTML5, SEO & OpenGraph meta tags
├── tailwind.config.js                    # Metallic gold palette, fonts & animations
├── vite.config.js                        # Vite bundler with `@/` path alias support
└── package.json                          # Dependencies & NPM scripts
```

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom Metallic Gold tokens & glassmorphism
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: Embedded [Zoho Forms](https://www.zoho.com/forms/) with dynamic responsive height listener

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16.0 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone or navigate to project directory
cd "Trade Fair"

# Install dependencies
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

The build output is located in the `dist/` directory and can be deployed directly to AWS S3 + CloudFront, Vercel, Netlify, or any static web hosting provider.

```bash
npm run build
```

---

## 📄 License
Organized by **9X EVENTS © 2026**. All rights reserved.
