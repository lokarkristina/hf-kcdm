// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/tailwindcss'],
  plugins: ['@/plugins/youtube.client.js'],
  devtools: { enabled: true },

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

  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/app.css',
    'lite-youtube-embed/src/lite-yt-embed.css',
  ],

  colorMode: {
    preference: 'light',
  },

  compatibilityDate: '2025-03-12',

  eslint: {
    config: {
      stylistic: true,
      typescript: true,
    },
  },

  tailwindcss: {
    configPath: '~/tailwind.config.js',
    viewer: true,
  },
})
