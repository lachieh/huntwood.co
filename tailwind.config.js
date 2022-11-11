const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      green: {
        dark: '#434134',
        DEFAULT: '#636b53',
        light: '#929880',
      },
      tan: {
        DEFAULT: '#aa8478',
        light: '#ddc7b3',
        lighter: '#fff5ec',
      },
      white: colors.white,
      black: colors.black,
    },
    extend: {
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
