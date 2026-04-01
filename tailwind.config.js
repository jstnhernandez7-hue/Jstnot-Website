/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        'ink-soft': '#111111',
        'ink-border': '#1F1F1F',
        paper: '#FFFFFF',
        'paper-soft': '#F5F5F3',
        'text-primary': '#FFFFFF',
        'text-secondary': '#888888',
        'text-dark': '#1A1A1A',
        accent: '#C8A96E',
        'accent-hover': '#B8945A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(48px,7vw,80px)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        section: ['clamp(36px,5vw,56px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        section: '120px',
        'section-sm': '80px',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
