<template>
  <div class="min-h-screen flex flex-col bg-(--ui-bg)">
    <AppHeader />

    <main class="flex-1">
      <NuxtPage />
    </main>

    <footer
      class="border-t border-(--ui-border) py-6 text-center text-sm text-(--ui-text-muted)"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        CryptoMonitor &copy; {{ new Date().getFullYear() }}
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/widgets/AppHeader.vue'
</script>
