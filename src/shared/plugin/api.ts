// plugins/api.client.ts
import { useApi } from "~/shared/composable/useApi";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("api", useApi());
});
