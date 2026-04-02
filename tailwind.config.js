/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ── BORDER RADIUS ─────────────────────────────────────
      // Adding 'card' so you can use 'rounded-card' in your JSX
      borderRadius: {
        'card': '32px', 
        'pill': '9999px',
      },

      // ── CUSTOM SPACING (The Secret Sauce) ─────────────────
      // This tells Tailwind to recognize these specific Figma numbers
      spacing: {
        '180': '180px',
        '588': '588px',
        '657': '657px',
        '528': '528px',
        '458': '458px',
      },

      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },

      colors: {
        brand: {
          orange: '#F05A28',
          'orange-light': '#FF8055',
        },
        // bg: {
        //   page: '#F5F6F8',
        //   'soft-gray': '#F5F6F8',
        // },
        text: {
          primary: '#1A1A1A',
          body: '#6B7280',
        },
        border: {
          default: '#E8EAED',
        },
      },

      fontSize: {
        'display': ['64px', { lineHeight: '110%', letterSpacing: '-1.5px' }],
      },

      boxShadow: {
        'card': '0 8px 32px rgba(0, 0, 0, 0.08)',
      },

      maxWidth: {
        'content': '1280px',
        'wide': '1440px',
      },
    },
  },
  plugins: [],
}