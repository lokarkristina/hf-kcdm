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
        'accent': '#E7745E',
        'hf-bg': '#F2F1EE',
        'captions': '#737A77',
        'lines': '#D8D7D3',
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
        mont: ['Montserrat', 'sans-serif'],
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
      aspectRatio: {
        video: '16 / 9',
      },
    },
  },
  plugins: [
    // @custom-variant pointer-coarse {
    //   @media (pointer: coarse) {
    //     @slot;
    //   }
    // }
    // --spacing(4) ??
    function ({ addUtilities }) {
      const newUtilities = {
        '.grid-4-8': {
          '& > *': {
            gridColumn: '6 / -1', // @todo maybe this is getting repeated?
          },
        },
        '.grid-4-8-full': {
          '& > *:nth-child(odd)': {
            gridColumn: '1 / 5',
          },
          '& > *:nth-child(even)': {
            gridColumn: '6 / -1',
          },
        },
        '.grid-container': {
          display: 'grid',
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
          columnGap: 'var(--spacing, 2rem)', // fallback of 2rem if --spacing not defined
        },
        '.link-inline': {
          fontSize: 'inherit',
          lineHeight: '1.4',
          color: 'var(--primary-color, #4BAC87)', // using CSS variable with fallback
        },
        '.date': {
          color: 'var(--color-captions, #737A77)', // @todo css varibles are not working
          fontSize: 'var(--text-sm, 0.875rem)',
          lineHeight: 'calc(1.25 / 0.875)',
          textTransform: 'uppercase',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
