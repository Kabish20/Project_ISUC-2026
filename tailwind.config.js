/** @type {import('tailwindcss').Config} */
// Triggering reload
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF9E1',
          100: '#FEF0B3',
          200: '#FDE682',
          300: '#FBD84D',
          400: '#F9C826',
          500: '#D4AF37', // Refined Premium Metallic Gold
          600: '#B8860B', // Darker Bronze for hover states
          700: '#996515',
          800: '#7A4D0F',
          900: '#5C380A',
        },
        secondary: {
          50: '#ffffff', // White
          100: '#f8fafc',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#0f172a',
          900: '#000000', // Black
        },
        accent: {
          300: '#fde047',
          400: '#FACC15',
          500: '#EAB308', // Matches Logo Text "CONNECT 2026"
          600: '#CA8A04',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
      }
    },
  },
  plugins: [],
}