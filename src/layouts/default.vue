<template>
  <div class="header">
    <h1>🌟 Мой сайт</h1>
    <nav>
      <NuxtLink to="/">Главная</NuxtLink>
      <NuxtLink to="/about">О нас</NuxtLink>
    </nav>
  </div>
  <main class="main">
    <slot/>
  </main>
  <div class="footer">
    <p>© 2025 Все права защищены</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
