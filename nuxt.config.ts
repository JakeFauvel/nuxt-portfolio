// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src: 'https://static.cloudflareinsights.com/beacon.min.js',
          defer: true,
          'data-cf-beacon': JSON.stringify({ token: '3e8e8981420c4cdfbd14561de7ed8085' })
        }
      ]
    }
  }
})
