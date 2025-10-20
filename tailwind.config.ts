import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // B&B Color Palette - Cozy, Trustworthy, Homely
        'coastal': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Primary blue - calm, trustworthy
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'cream': {
          50: '#fefdfb',
          100: '#fefaf5',
          200: '#fcf5ed',
          300: '#f9eee0',
          400: '#f5e6d3',
          500: '#f0dec4',  // Warm cream - cozy, homely
          600: '#d4c4a8',
          700: '#b8aa8c',
          800: '#8c7d66',
          900: '#5a5142',
        },
        'sage': {
          50: '#f6f7f6',
          100: '#e8ebe8',
          200: '#d1d7d1',
          300: '#a9b5a9',
          400: '#7d8e7d',
          500: '#5c6f5c',  // Soft sage green - natural, Irish countryside
          600: '#4a5a4a',
          700: '#3c483c',
          800: '#2f382f',
          900: '#212621',
        },
        'warm-gold': {
          50: '#fefbf3',
          100: '#fdf4e0',
          200: '#fae8c1',
          300: '#f7d68f',
          400: '#f3bf5b',
          500: '#e9a730',  // Warm gold - premium accent
          600: '#d18c1e',
          700: '#a96f18',
          800: '#825519',
          900: '#5b3b11',
        },
        'slate': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',  // Neutral slate - text, borders
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'coastal-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
        'cream-gradient': 'linear-gradient(135deg, #fefaf5 0%, #f9eee0 100%)',
        'sage-gradient': 'linear-gradient(135deg, #7d8e7d 0%, #5c6f5c 100%)',
        'hero-gradient': 'linear-gradient(180deg, #f0f9ff 0%, #fefaf5 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(5deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(-5deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'coastal': '0 10px 40px -10px rgba(14, 165, 233, 0.3)',
        'cream': '0 10px 40px -10px rgba(240, 222, 196, 0.3)',
        'sage': '0 10px 40px -10px rgba(92, 111, 92, 0.3)',
        'warm': '0 10px 40px -10px rgba(233, 167, 48, 0.3)',
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'lifted': '0 20px 60px -10px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
