import type { ModuleOptions } from "@nuxtjs/tailwindcss";
export const tailwindcss: ModuleOptions = {
  cssPath: "~/assets/css/tailwind.css",
  configPath: "tailwind.config",
  exposeConfig: false,
  exposeLevel: 2,
  config: {},
  injectPosition: "first",
  viewer: true,
  quiet: true,
  editorSupport: false,
  // disableHmrHotfix: false,
  addTwUtil: false,
};
