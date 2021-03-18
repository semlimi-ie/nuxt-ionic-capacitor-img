const baseHref = process.env.BASE_HREF || '/'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-ionic-img',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: baseHref + 'favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // add required css:
    '../node_modules/@ionic/core/css/core.css',
    '../node_modules/@ionic/core/css/normalize.css',
    '../node_modules/@ionic/core/css/structure.css',
    '../node_modules/@ionic/core/css/typography.css',
    '../node_modules/@ionic/core/css/ionic.bundle.css',
    '../node_modules/@ionic/core/css/padding.css',
    '../node_modules/@ionic/core/css/float-elements.css',
    '../node_modules/@ionic/core/css/text-alignment.css',
    '../node_modules/@ionic/core/css/text-transformation.css',
    '../node_modules/@ionic/core/css/flex-utils.css',
    '../node_modules/@ionic/core/css/display.css',
    '@/assets/styles/core.css',
    '@/assets/styles/variables.css',
  ],
  tailwindcss: {
    jit: true,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/global-components.js',
    { src: '~/plugins/ionic.js', mode: 'client' },
  ],
  generate: {
    routes: ['/'],
  },
  router: {
    // router with correct public path
    base: baseHref,
    mode: 'history',
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/dotenv'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
  },
}
