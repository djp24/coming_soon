/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    darkMode: 'class',
    extend: {
      'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
      'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)' },

      fontFamily: {
        'roboto': ['roboto','roboto serif'],
      },

      colors: {
        'magic': {
          100: '#B3A9D9',
          200: '#8684BF',
          300: '#3D4573',
          400: '#1A2040',
          500: '#0E1126',
        },
        'off': {
          100: '#A6A6A6',
          200: '#595959',
          300: '#2A2D40',
          400: '#181B26',
          500: '#0D0D0D',
        },
        'peach': {
          100: '#FFF6E7',
          200: '#FFEBD4',
          300: '#FFDCBE',
          400: '#E7EBCE',
          500: '#C8DBAD',
        },
        'coffee': {
          100: '#F1E8E1',
          200: '#C1B0A6',
          300: '#71635D',
          400: '#D7BD9F',
          500: '#3E2C24',
        },
    },
    },
  },
  plugins: [],
}