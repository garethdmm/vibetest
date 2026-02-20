import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hades-black': '#080504',
        'hades-surface': '#110b09',
        'hades-gold': '#c9a227',
        'hades-gold-light': '#e8c95d',
        'hades-red': '#7a1818',
        'hades-cream': '#f0e6d3',
        'hades-ember': '#ff6b35',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        crimson: ['var(--font-crimson)', 'serif'],
      },
      keyframes: {
        flicker: {
          '0%, 89%, 91%, 96%, 100%': { opacity: '1' },
          '90%': { opacity: '0.55' },
          '92%': { opacity: '0.9' },
          '95%': { opacity: '0.65' },
          '97%': { opacity: '0.85' },
          '99%': { opacity: '0.7' },
        },
        'float-ember': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0.85' },
          '40%': { opacity: '0.6' },
          '80%': { opacity: '0.25' },
          '100%': {
            transform: 'translateY(-105vh) translateX(var(--drift, 20px))',
            opacity: '0',
          },
        },
        glow: {
          '0%, 100%': {
            textShadow:
              '0 0 30px #c9a22770, 0 0 60px #c9a22740, 0 0 100px #c9a22720',
          },
          '50%': {
            textShadow:
              '0 0 40px #c9a227a0, 0 0 80px #c9a22760, 0 0 120px #c9a22730',
          },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'line-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        flicker: 'flicker 8s infinite',
        'float-ember': 'float-ember var(--duration, 7s) var(--delay, 0s) infinite linear',
        glow: 'glow 4s ease-in-out infinite',
        'fade-in': 'fade-in 1.4s ease-out forwards',
        'line-grow': 'line-grow 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
