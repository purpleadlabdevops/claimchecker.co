export default {
  target: 'server',
  head: {
    title: 'Financial Match | Apply for Your ERC Credit Today!',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Financial Match | Apply for Your ERC Credit Today!' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "facebook-domain-verification", content: "kiopg5rxifn74adikb3gbcqtbnreck" }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    script: []
  },
  styleResources: {
    scss: ['~/assets/scss/_functions.scss']
  },
  plugins: [],
  css: ["~/assets/scss/global.scss"],
  components: true,
  router: {
    base: '/',
    mode: 'history',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'error',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue'),
      })
    },
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],
  env: {
    API: process.env.NODE_ENV === 'production' ? process.env.API_production : process.env.API_development,
  },
  server: {
    port: process.env.PORT,
    host: process.env.HOST,
  },
  serverMiddleware: ['~/api/index.js'],
}
