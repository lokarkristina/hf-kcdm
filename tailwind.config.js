/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      // Add your custom variables here
      colors: {
        bg: '#F2F1EE',
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
