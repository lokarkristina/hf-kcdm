/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './error.vue',
  ],
  theme: {
    extend: {
      // these colors need better names @todo
      colors: {
        'hf-bg': '#F2F1EE',
        'hf-captions-gray': '#737A77',
        'hf-lines-gray': '#D8D7D3',
        'hf-text-gray': '#3E5F52',
        'ocean-green': {
          DEFAULT: '#4BAC87',
          50: '#C8E7DB',
          100: '#BAE1D2',
          200: '#9DD4BF',
          300: '#81C8AD',
          400: '#64BC9A',
          500: '#4BAC87', // default
          600: '#318565', // green-darker
          700: '#3D5F52', // green-grey
          800: '#222E29', // even darker green?
          900: '#07100C',
          950: '#000000',
        },
      },
      fontFamily: {
        sans: [
          'Verb',
          'sans-serif',
        ],
      },
      fontWeight: {
        ultra: '950',
      },
      fontSize: {
        // @todo do i need different line height?
        'big-title': '3.25rem',
      },
      maxWidth: {
        main: '60rem', // 960px
      },
      gridTemplateColumns: {
        'split-40-60': '0.4fr 0.6fr',
      },
    },
  },
}
