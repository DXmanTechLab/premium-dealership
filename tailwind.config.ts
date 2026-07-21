import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        premium: '0 20px 60px rgba(0, 0, 0, 0.45)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(251,146,60,0.14), transparent 40%), linear-gradient(180deg, #0b1120 0%, #070b14 100%)'
      }
    }
  },
  plugins: []
};

export default config;
