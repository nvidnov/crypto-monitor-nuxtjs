<template>
  <section>
    <UAuthForm :fields="fields" class="max-w-sm" />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

import type { AuthFormField } from '@nuxt/ui'

const fields = ref<AuthFormField[]>([
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    required: true
  },
  {
    name: 'country',
    type: 'select',
    label: 'Country',
    placeholder: 'Select country',
    items: [
      {
        label: 'United States',
        value: 'us'
      },
      {
        label: 'France',
        value: 'fr'
      },
      {
        label: 'United Kingdom',
        value: 'uk'
      },
      {
        label: 'Australia',
        value: 'au'
      }
    ]
  },
  {
    name: 'otp',
    type: 'otp',
    label: 'OTP',
    length: 6,
    placeholder: '○'
  },
  {
    name: 'remember',
    type: 'checkbox',
    label: 'Remember me',
    description: 'You will be logged in for 30 days.'
  }
])
</script>
