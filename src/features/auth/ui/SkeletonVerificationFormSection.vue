<template>
  <div class="max-w-lg mx-auto p-6">
    <div class="flex flex-col justify-center items-center gap-2 mb-2">
      <USkeleton class="w-6 h-6 text-primary" />

      <USkeleton class="h-8 w-[150px]" />
    </div>

    <p class="text-gray-600 mb-8 flex justify-center items-center text-center">
      <USkeleton class="h-6 w-[500px]" />
    </p>
    <div class="flex justify-center items-center gap-2 mb-2">
      <USkeleton class="h-8 w-8" />
      <USkeleton class="h-8 w-8" />
      <USkeleton class="h-8 w-8" />
      <USkeleton class="h-8 w-8" />
      <USkeleton class="h-8 w-8" />
      <USkeleton class="h-8 w-8" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
