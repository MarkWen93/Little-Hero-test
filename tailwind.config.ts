import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1E5C',
          800: '#1E3A8A',
          700: '#1E40AF',
          600: '#2563EB',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        'twinkle-delayed': 'twinkle 4s ease-in-out infinite 2s',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse-slow': 'spin-reverse 10s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.95)' },
          '75%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      backgroundImage: {
        'magic-gradient':
          'radial-gradient(circle at center, rgba(191,219,254,0.2) 0%, rgba(191,219,254,0.1) 25%, transparent 70%)',
      },
    },
  },
  plugins: [],
};

export default config;
