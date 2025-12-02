<template>
    <UAuthForm
        title="Регистрация"
        icon="i-lucide-user"
        :fields="fields"
        class="max-w-lg mx-auto"
    >
      <template #description>
        У вас нет аккаунта? <ULink to="register" class="text-primary font-medium">Зарегистрируйтесь</ULink>.
      </template>
    </UAuthForm>
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
