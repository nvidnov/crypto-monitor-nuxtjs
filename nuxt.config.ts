// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  srcDir: "src",
  serverDir: "server",
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "localhost:3001",
    },
  },
  typescript: {
    strict: true,
  },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@pinia/nuxt"],
  plugins: ["~/shared/plugin/api.ts"],
  alias: {
    "@shared": "src/shared",
    "@entities": "src/entities",
    "@features": "src/features",
    "@widgets": "src/widgets",
    "@pages": "src/pages",
    "@stores": "src/stores",
  },
  components: [
    {
      path: "~/features",
      pathPrefix: false,
    },
  ],
  router: {},
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },
  eslint: {
    // options here
  },
});
