import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      green: {
        darker: '#2d2c24',
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
      current: colors.current,
    },
    extend: {
      screens: {
        xs: '400px',
      },
      fontFamily: {
        sans: ['Poppins', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        light: '200',
        DEFAULT: '300',
        normal: '300',
        bold: '500',
      },
      fontSize: {
        sm: ['12px', '18px'],
        base: ['14px', '20px'],
        lg: ['16px', '24px'],
        xl: ['20px', '28px'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
