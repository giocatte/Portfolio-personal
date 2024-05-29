// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/i18n"],
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
