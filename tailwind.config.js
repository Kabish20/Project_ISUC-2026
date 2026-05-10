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
          50: '#fbf8f1',
          100: '#f5edd9',
          200: '#ebdbb5',
          300: '#dbbf84',
          400: '#ca9e57',
          500: '#b68d40', // Base Gold
          600: '#a37635',
          700: '#875e2d',
          800: '#6e4c29',
          900: '#342213', // Replaced 950
        },
        secondary: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#1a1a1a', // Near Black
          900: '#000000', // Pure Black (Replaced 950)
        },
        accent: {
          50: '#fffef2',
          100: '#fffbd6',
          200: '#fff3ad',
          300: '#ffe575',
          400: '#ffd03b',
          500: '#fbb111', // Vibrant Gold
          600: '#da8a07',
          700: '#b5640a',
          800: '#934e0e',
          900: '#7a4110',
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