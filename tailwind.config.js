module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-dark': 'rgb(6 103 56)',
        'green-mid': 'rgb(61 123 81)',
        'green-light': 'rgb(82 142 128)',
        'blue-light': 'rgb(39 102 116)',
        'blue-mid': 'rgb(40 82 100)',
        'blue-dark': 'rgb(38 62 84)',
        copy: '#6C6E70',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
