<template>
    <UAuthForm
        title="Авторизируйтесь"
        icon="i-lucide-user"
        :fields="fields"
        class="max-w-lg mx-auto"
    />
</template>

<script setup lang="ts">

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
