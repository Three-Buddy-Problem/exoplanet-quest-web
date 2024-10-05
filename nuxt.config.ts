import { tailwindcss } from "./config/";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  pages: true,
  ssr: false,
  modules: [
    "@formkit/auto-animate/nuxt",
    "@pinia/nuxt",
    "nuxt-typed-router",
    [
      "@pinia-plugin-persistedstate/nuxt",
      {
        storage: "localStorage",
      },
    ],
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/color-mode",
      {
        classSuffix: "",
        preference: "system",
      },
    ],
    "shadcn-nuxt",
    "@vueuse/nuxt",
    "@nuxt/fonts",
  ],
  tailwindcss,
  colorMode: {
    classSuffix: "",
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  css: ["~/assets/css/fonts.css"],
  app: {
    baseURL: "/exoplanet-quest-web/",
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  nitro: {
    experimental: {
      websocket: true,
    },
  },
});
