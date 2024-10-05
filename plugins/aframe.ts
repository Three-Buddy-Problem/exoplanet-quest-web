export default defineNuxtPlugin({
  name: "aframe",
  enforce: "pre",
  async setup() {
    await import("aframe");
  },
});
