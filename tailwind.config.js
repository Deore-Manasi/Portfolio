/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#060B14',
          secondary: '#0B1324',
          card: '#0F1A30',
          elevated: '#15223E',
        },
        accent: {
          primary: '#0EA5E9',
          bright: '#38BDF8',
          neon: '#7DD3FC',
          glow: 'rgba(14, 165, 233, 0.4)',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        border: {
          subtle: 'rgba(56, 189, 248, 0.18)',
          glow: 'rgba(56, 189, 248, 0.45)',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(14, 165, 233, 0.25)',
        'glow-md': '0 0 30px rgba(14, 165, 233, 0.35)',
        'glow-lg': '0 0 50px rgba(56, 189, 248, 0.45)',
        'neon-border': '0 0 10px rgba(125, 211, 252, 0.3), inset 0 0 10px rgba(125, 211, 252, 0.15)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 20px -5px rgba(14, 165, 233, 0.18)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(14, 165, 233, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(56, 189, 248, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
