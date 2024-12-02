/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')
module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lemon: {
          50: '#f1feef',
          100: '#defeda',
          200: '#befbb7',
          300: '#7bf56f',
          400: '#4fe840',
          500: '#27d017',
          600: '#1aad0c',
          700: '#18870e',
          800: '#176a11',
          900: '#145710',
          950: '#033102',
          dark: '#040c03',
        },
      },
    },
  },
  plugins: [],
})
