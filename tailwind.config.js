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
          50: '#000000', // Black (Previously white-ish)
          100: '#1a1a1a',
          200: '#2d2d2d',
          300: '#404040',
          400: '#525252',
          500: '#737373',
          600: '#a3a3a3',
          700: '#d4d4d4',
          800: '#f5f5f5',
          900: '#ffffff', // White (Previously black)
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