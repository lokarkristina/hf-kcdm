/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      // these colors need better names @todo
      colors: {
        'hf-bg': '#F2F1EE',
        'hf-captions-gray': '#737A77',
        'hf-green-gray': '#3D5F52',
        'hf-green-darker': '#318565',
        'hf-lines-gray': '#D8D7D3',
        'hf-text-gray': '#3E5F52',
        'ocean-green': { DEFAULT: '#4BAC87', 50: '#C8E7DB', 100: '#BAE1D2', 200: '#9DD4BF', 300: '#81C8AD', 400: '#64BC9A', 500: '#4BAC87', 600: '#3A8568', 700: '#295E4A', 800: '#18372B', 900: '#07100C', 950: '#000000' },
      },
      fontFamily: {
        sans: ['Verb', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        ultra: '950',
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
