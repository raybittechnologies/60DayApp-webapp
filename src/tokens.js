// ============================================================
//  60DayApp — Design Tokens
//  Import this wherever you need raw token values in JS/TS
//  e.g. for inline styles, canvas drawing, charting libs, etc.
// ============================================================

export const colors = {
  // Brand
  orange:          '#F05A28',
  orangeLight:     '#FF8055',
  orangeDark:      '#C03A10',
  charcoal:        '#2B2E34',

  // Backgrounds
  bgPage:          '#070A14',
  bgPage2:         '#0D1020',
  bgWhite:         '#FFFFFF',
  bgSoftGray:      '#F5F6F8',
  bgPeach:         '#FFF3EE',

  // Text
  textPrimary:     '#1A1A1A',
  textBody:        '#6B7280',
  textMuted:       '#9CA3AF',
  textWhite:       '#FFFFFF',

  // Borders
  borderDefault:   '#E8EAED',
  borderOrange:    '#FFCAB2',

  // Semantic
  success:         '#22C55E',
  error:           '#EF4444',
  info:            '#3B82F6',
  warning:         '#F59E0B',

  // Glass — rgba values for dark glassmorphism
  glass: {
    bg:            'rgba(255, 255, 255, 0.05)',
    bgHover:       'rgba(255, 255, 255, 0.08)',
    border:        'rgba(255, 255, 255, 0.08)',
    borderTop:     'rgba(255, 255, 255, 0.14)',
    borderStrong:  'rgba(255, 255, 255, 0.18)',
    orangeBg:      'rgba(240, 90, 40, 0.08)',
    orangeBorder:  'rgba(240, 90, 40, 0.20)',
    orangeFeatured:'rgba(240, 90, 40, 0.06)',
  },

  // Text on dark backgrounds
  onDark: {
    100: 'rgba(255, 255, 255, 0.90)',
    80:  'rgba(255, 255, 255, 0.80)',
    65:  'rgba(255, 255, 255, 0.65)',
    55:  'rgba(255, 255, 255, 0.55)',
    45:  'rgba(255, 255, 255, 0.45)',
    38:  'rgba(255, 255, 255, 0.38)',
    25:  'rgba(255, 255, 255, 0.25)',
    12:  'rgba(255, 255, 255, 0.12)',
    8:   'rgba(255, 255, 255, 0.08)',
    5:   'rgba(255, 255, 255, 0.05)',
  },
}

export const fonts = {
  heading: '"Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Poppins, sans-serif',
  body:    'Inter, "Lucida Sans", sans-serif',
  poppins: 'Poppins, sans-serif',
}

export const fontSizes = {
  xs:        '12px',
  sm:        '14px',
  base:      '16px',
  lg:        '18px',
  xl:        '20px',
  '2xl':     '24px',
  '3xl':     '28px',
  '4xl':     '36px',
  '5xl':     '48px',
  '6xl':     '64px',
  display:   '64px',
  displayLg: '72px',
}

export const fontWeights = {
  regular:   400,
  medium:    500,
  semibold:  600,
  bold:      700,
  extrabold: 800,
  black:     900,
}

export const spacing = {
  1:  '4px',
  2:  '8px',
  3:  '12px',
  4:  '16px',
  5:  '20px',
  6:  '24px',
  7:  '28px',
  8:  '32px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  30: '120px',
}

export const borderRadius = {
  xs:   '4px',
  sm:   '8px',
  md:   '10px',
  lg:   '12px',
  xl:   '14px',
  '2xl':'18px',
  '3xl':'20px',
  '4xl':'24px',
  '5xl':'36px',
  full: '9999px',
}

export const shadows = {
  glassCard:   '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)',
  glassCardLg: '0 8px 40px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.08)',
  orangeSm:    '0 4px 14px rgba(240,90,40,0.40)',
  orange:      '0 4px 16px rgba(240,90,40,0.45)',
  orangeLg:    '0 6px 24px rgba(240,90,40,0.50)',
  phone:       '0 24px 60px rgba(0,0,0,0.60)',
  nav:         '0 8px 32px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.09)',
}

export const breakpoints = {
  xs:  '390px',
  sm:  '640px',
  md:  '768px',
  lg:  '1024px',
  xl:  '1280px',
  '2xl': '1440px',
  '3xl': '1920px',
}

export const layout = {
  maxContent:  '1280px',
  maxWide:     '1440px',
  sectionPx:   '80px',
  sectionPxMd: '40px',
  sectionPxSm: '20px',
  sectionPy:   '64px',
}

// ── Orb presets (reused across all sections) ─────────────────
export const orbs = {
  orangeLg: {
    width:      '500px',
    height:     '400px',
    background: 'rgba(240, 90, 40, 0.18)',
    filter:     'blur(100px)',
  },
  orangeMd: {
    width:      '350px',
    height:     '350px',
    background: 'rgba(240, 90, 40, 0.12)',
    filter:     'blur(90px)',
  },
  purple: {
    width:      '380px',
    height:     '300px',
    background: 'rgba(80, 60, 255, 0.12)',
    filter:     'blur(90px)',
  },
}
