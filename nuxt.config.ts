// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["assets/css/main.css"],
  devtools: { enabled: false },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    vue: {
      customElement: true,
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@vueuse/nuxt"],
});
