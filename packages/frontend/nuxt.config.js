export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'test'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // babel: {
  //   presets () {
  //     return [
  //       [
  //         '@nuxt/babel-preset-app',
  //         {
  //           corejs: {
  //             version: 3
  //           }
  //         }
  //       ]
  //     ],
  //   }
  // },

  server: {
    port: 3000,
    host: process.env.SSR_HOST ? process.env.SSR_HOST : '0.0.0.0',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/styles/app.styl'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/viewportSizeHandler', ssr: false },
    { src: '@/plugins/svgxuse.ts' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-typed-vuex'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
    // [
    //   'nuxt-mq',
    //   {
    //     defaultBreakpoint: 'sm',
    //     breakpoints: {
    //       xs: 320,
    //       mb: 414,
    //       sm: 768,
    //       md: 1024,
    //       lg: 1280,
    //       xl: 1680,
    //       xxl: 1920,
    //     },
    //   },
    // ],
  ],

  styleResources: {
    stylus: ['@/styles/tools.styl']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
