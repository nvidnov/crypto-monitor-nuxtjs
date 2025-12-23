<template>
  <UPageSection>
    <PinFormSection
      v-if="!isLoading"
      @fetchPin="onHandlerFetchPin"
      :error="messageError"
    />
    <SkeletonVerificationFormSection v-else />
  </UPageSection>
</template>

<script setup lang="ts">
import SkeletonVerificationFormSection from "~/features/auth/ui/SkeletonVerificationFormSection.vue";
import PinFormSection from "~/features/auth/ui/PinFormSection.vue";
import { useRegisterForm } from "~/features/auth/composable/useRegisterForm";
import { useRegistrationStore } from "~/entities/auth/model/registration";
import { ref } from "vue";

definePageMeta({
  label: "auth",
});

const store = useRegistrationStore();
const registerForm = useRegisterForm();
const { isLoading, fetchCheckVerificationCode } = registerForm;

const messageError = ref<string | null>(null);

const onHandlerFetchPin = async (code: string) => {
  messageError.value = null;

  const payload = {
    email: store.form.email,
    code: code,
  };
  const { error } = await fetchCheckVerificationCode(payload);
  if (error) {
    messageError.value = error || null;
  }
};
</script>

<style scoped></style>
