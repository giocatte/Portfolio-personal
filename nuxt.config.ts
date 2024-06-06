// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/i18n"],
  css: ["animate.css/animate.min.css"],
  i18n: {
    vueI18n: "./i18n.config.ts", //default
    locales: [
      { code: "en", iso: "en-US" },
      { code: "it", iso: "it-IT" },
    ],
    defaultLocale: "en",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: false,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: "Giosuè Cattelan",
      meta: [{ name: "description", content: "Giosuè Cattelan's Porfolio" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    // layoutTransition: { name: "layout", mode: "out-in" },
  },
});
