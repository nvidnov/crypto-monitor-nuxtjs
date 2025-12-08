<template>
  <div class="max-w-lg mx-auto p-6">
    <div class="flex flex-col justify-center items-center gap-2 mb-2">
      <UIcon name="i-lucide-user" class="w-6 h-6 text-primary" />
      <h1 class="text-2xl font-bold">Регистрация</h1>
    </div>

    <p class="text-gray-600 mb-8 flex justify-center items-center">
      У вас есть аккаунт?
      <ULink to="/login" class="text-primary font-medium">Авторизирутесь</ULink
      >.
    </p>

    <UForm
      :schema="schema"
      :state="form"
      @submit="fetchSendVerificationCode"
      class="space-y-6"
    >
      <!-- First Name -->
      <UFormField label="First Name" name="firstName" required>
        <template #label>
          <span class="text-sm font-medium text-gray-700">First Name</span>
        </template>
        <UInput
          v-model="form.firstName"
          placeholder=""
          size="lg"
          class="w-full"
        />
      </UFormField>

      <!-- Last Name -->
      <UFormField label="Last Name" name="lastName" required>
        <template #label>
          <span class="text-sm font-medium text-gray-700">Last Name</span>
        </template>
        <UInput
          v-model="form.lastName"
          placeholder=""
          size="lg"
          class="w-full"
        />
      </UFormField>

      <!-- Login -->
      <UFormField label="Login" name="login" required>
        <template #label>
          <span class="text-sm font-medium text-gray-700">Login</span>
        </template>
        <UInput v-model="form.login" placeholder="" size="lg" class="w-full" />
      </UFormField>

      <!-- Email -->
      <UFormField label="Email" name="email" required>
        <template #label>
          <span class="text-sm font-medium text-gray-700">Email</span>
        </template>
        <UInput v-model="form.email" placeholder="" size="lg" class="w-full" />
      </UFormField>

      <!-- Password -->
      <UFormField label="Password" name="password" required>
        <template #label>
          <span class="text-sm font-medium text-gray-700">Password</span>
        </template>
        <UInput
          v-model="form.password"
          type="password"
          placeholder=""
          size="lg"
          class="w-full"
        />
      </UFormField>

      <!-- Confirm Password -->
      <UFormField label="Confirm Password" name="confirmPassword" required>
        <template #label>
          <span class="text-sm font-medium text-gray-700"
            >Confirm Password
          </span>
        </template>
        <UInput
          v-model="form.confirmPassword"
          type="password"
          placeholder=""
          size="lg"
          class="w-full"
        />
      </UFormField>

      <!-- Submit Button -->
      <div class="pt-4">
        <UButton
          type="submit"
          size="lg"
          color="primary"
          class="w-full justify-center py-3"
        >
          Продолжить
        </UButton>
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { useRegisterForm } from "@/features/auth/composable/useRegisterForm";

definePageMeta({
  layout: "auth",
});
const emit = defineEmits(["setForm"]);
const {
  form,
  registerSchema: schema,
  fetchSendVerificationCode,
} = useRegisterForm(emit);
</script>

<style scoped></style>
