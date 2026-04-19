/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        void: '#07070F',
        surface: '#0E0E1A',
        card: '#13131F',
        elevated: '#1A1A2E',
        violet: '#6C63FF',
        cyan: '#00D4FF',
        coral: '#FF6B6B',
        green: '#00FFB3',
        amber: '#FFB347',
        fb: '#1877F2',
        snap: '#FFFC00',
        tw: '#E7E9EA',
        li: '#0A66C2',
      },
      boxShadow: {
        'glow-violet': '0 0 40px rgba(108,99,255,0.4)',
        'glow-cyan': '0 0 40px rgba(0,212,255,0.4)',
        'glow-coral': '0 0 40px rgba(255,107,107,0.4)',
        'glow-green': '0 0 40px rgba(0,255,179,0.4)',
        'card': '0 4px 24px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
        'aurora': 'aurora 15s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)', opacity: '0.6' },
          '33%': { transform: 'translate(15%, -10%) scale(1.1)', opacity: '0.8' },
          '66%': { transform: 'translate(-10%, 15%) scale(0.95)', opacity: '0.7' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
