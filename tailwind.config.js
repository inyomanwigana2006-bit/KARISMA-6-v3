/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#f5c842',
          500: '#e6b800',
          600: '#c9a000',
        },
        navy: {
          900: '#0a0e1a',
          800: '#0f1628',
          700: '#151d38',
          600: '#1c2748',
        },
        accent: '#7c3aed',
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a0e1a 0%, #151d38 50%, #0a0e1a 100%)',
      },
    },
  },
  plugins: [],
}
