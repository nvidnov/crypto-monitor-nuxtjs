<template>
  <div class="w-full max-w-md p-6 bg-white rounded shadow">
    <h1>Войти в систему</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['auth'],
})
</script>
