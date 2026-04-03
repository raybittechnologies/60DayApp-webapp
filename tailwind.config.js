// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
     
//       borderRadius: {
//         'card': '32px', 
//         'pill': '9999px',
//       },

      
//       spacing: {
//         '180': '180px',
//         '588': '588px',
//         '657': '657px',
//         '528': '528px',
//         '458': '458px',
//       },

//       fontFamily: {
//         heading: ['Poppins', 'sans-serif'],
//         body:    ['Inter', 'sans-serif'],
//       },

//       colors: {
//         brand: {
//           orange: '#F05A28',
//           'orange-light': '#FF8055',
//         },
//                 text: {
//           primary: '#1A1A1A',
//           body: '#6B7280',
//         },
//         border: {
//           default: '#E8EAED',
//         },
//       },

//       fontSize: {
//         'display': ['64px', { lineHeight: '110%', letterSpacing: '-1.5px' }],
//       },

//       boxShadow: {
//         'card': '0 8px 32px rgba(0, 0, 0, 0.08)',
//       },

//       maxWidth: {
//         'content': '1280px',
//         'wide': '1440px',
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'card': '32px',
        'pill': '9999px',
      },
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
          orange:         '#F05A28',
          'orange-light': '#FF8055',
          'orange-dark':  '#C03A10',  // ← added
          charcoal:       '#2B2E34',  // ← added
        },
        text: {
          primary: '#1A1A1A',
          body:    '#6B7280',
          muted:   '#9CA3AF',         // ← added
          white:   '#FFFFFF',         // ← added
        },
        bg: {                         // ← entire block added
          peach:      '#FFF3EE',
          'soft-gray': '#F5F6F8',
          white:       '#FFFFFF',
        },
        border: {
          default: '#E8EAED',
          orange:  '#FFCAB2',         // ← added
        },
      },
      fontSize: {
        'display': ['64px', { lineHeight: '110%', letterSpacing: '-1.5px' }],
      },
      boxShadow: {
        'card':      '0 8px 32px rgba(0, 0, 0, 0.08)',
        'orange':    '0 4px 16px rgba(240,90,40,0.45)',   // ← added
        'orange-lg': '0 6px 24px rgba(240,90,40,0.50)',   // ← added
      },
      maxWidth: {
        'content': '1280px',
        'wide':    '1440px',
      },
    },
  },
  plugins: [],
}