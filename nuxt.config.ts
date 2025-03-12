// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint'],

  eslint: {
    config: {
      stylistic: true,
      typescript: true,
    },
  },

  compatibilityDate: '2025-03-12',

  css: ['~/assets/css/fonts.css'],

  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          sans: ['Verb', 'sans-serif'],
          serif: ['Georgia', 'serif'],
        },
      },
    },
  },

  app: {
    head: {
      title: '✨ KCDM ✨',
      meta: [
        {
          name: 'description',
          content: 'Kompetenčni center za design management.',
        },
        { name: 'keywords', content: 'design, management, kcdm' },
      ],
    },
  },
})
