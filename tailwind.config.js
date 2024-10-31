/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        'primary-gold': '#BDA56A',
        'primary-beige': '#D1BE96',
      },
    },
  },
  plugins: [],
};