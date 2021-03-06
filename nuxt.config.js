module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'μRogu',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#64B587'
  },
  /*
   ** Build configuration
   */
  plugins: [
    {
      src: '~/plugins/font-awesome'
    }
  ],
  /*
   ** Modules 
   */
  modules: [
    '@nuxtjs/proxy'
  ],
  /*
   ** Add api proxy 
   */
  proxy: {
    '/api/*': {
      target: 'http://localhost:4000',
      changeOrigin: true
    }
  },
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
