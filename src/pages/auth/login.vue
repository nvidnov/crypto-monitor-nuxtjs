<template>
  <UPageSection class="flex">
    <UAuthForm
        title="Авторизируйтесь"
        icon="i-lucide-user"
        :fields="fields"
        class="max-w-lg mx-auto"
    />
  </UPageSection>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'auth'
})

import type { AuthFormField } from '@nuxt/ui'

const fields = ref<AuthFormField[]>([
  {
    name: 'email',
    type: 'text',
    label: 'Email',
    size: 'lg'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    size: 'lg'
  }
])
</script>
