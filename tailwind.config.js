/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dharma Brand Palette
        dharma: {
          black:    '#0a0500',
          dark:     '#120800',
          card:     '#1a0e04',
          saffron:  '#FF6B00',
          saffron2: '#FF8C00',
          gold:     '#D4AF37',
          gold2:    '#F0D060',
          muted:    '#A08060',
          text:     '#F5EDE0',
        },
      },
      fontFamily: {
        cinzel:  ['Cinzel', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'saffron-gradient': 'linear-gradient(135deg, #FF6B00, #FF8C00)',
        'gold-gradient':    'linear-gradient(135deg, #D4AF37, #F0D060)',
        'dark-gradient':    'linear-gradient(180deg, #0a0500 0%, #120800 100%)',
      },
      boxShadow: {
        'saffron':    '0 0 30px rgba(255, 107, 0, 0.4)',
        'saffron-lg': '0 0 60px rgba(255, 107, 0, 0.6)',
        'gold':       '0 0 30px rgba(212, 175, 55, 0.3)',
        'gold-lg':    '0 0 60px rgba(212, 175, 55, 0.5)',
        'card':       '0 20px 60px rgba(0,0,0,0.5)',
      },
      animation: {
        'spin-slow':  'spin 60s linear infinite',
        'marquee':    'marquee 25s linear infinite',
        'fade-up':    'fadeUp 0.8s ease forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,107,0,0.4)' },
          '50%':      { boxShadow: '0 0 50px rgba(255,107,0,0.8)' },
        },
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [],
}
