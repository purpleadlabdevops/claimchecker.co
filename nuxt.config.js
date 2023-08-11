export default {
  target: 'server',
  head: {
    title: 'Claim Checker',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Claim Checker' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "facebook-domain-verification", content: "kiopg5rxifn74adikb3gbcqtbnreck" }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    script: [
      // {
      //   ssr: false,
      //   async: true,
      //   src: '/js/fb.js'
      // },
      // {
      //   ssr: false,
      //   defer: true,
      //   hid: 'everflow',
      //   src: 'https://www.bls29trk.com/scripts/sdk/everflow.js',
      //   callback: () => {
      //     console.log(111);
      //     EF.click({
      //       offer_id: 200,
      //       affiliate_id: EF.urlParameter('affid'),
      //       sub1: EF.urlParameter('sub1'),
      //       sub2: EF.urlParameter('sub2'),
      //       sub3: EF.urlParameter('sub3'),
      //       sub4: EF.urlParameter('sub4'),
      //       sub5: EF.urlParameter('sub5'),
      //       uid: EF.urlParameter('uid'),
      //       source_id: EF.urlParameter('source_id'),
      //       transaction_id: EF.urlParameter('_ef_transaction_id')
      //     })
      //       .then(res => {
      //         console.log('EF.click')
      //         console.dir(res)
      //       })
      //   }
      // }
    ]
  },
  styleResources: {
    scss: ['~/assets/scss/_functions.scss', '~/assets/scss/_mixins.scss']
  },
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
