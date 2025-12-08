<template>
  <UPageSection>
    <PinFormSection v-if="!isLoading" @fetchPin="onHandlerFetchPin" />
    <SkeletonVerificationFormSection v-else />
  </UPageSection>
</template>

<script setup lang="ts">
import SkeletonVerificationFormSection from "~/features/auth/ui/SkeletonVerificationFormSection.vue";
import PinFormSection from "~/features/auth/ui/PinFormSection.vue";
import { useRegisterForm } from "~/features/auth/composable/useRegisterForm";
import { useRegistrationStore } from "~/entities/auth/model/registration";

definePageMeta({
  label: "auth",
});

const registrationStore = useRegistrationStore();
const { form } = registrationStore;
const registerForm = useRegisterForm();
const { isLoading, fetchCheckVerificationCode } = registerForm;

showToast();

async function showToast() {}

const onHandlerFetchPin = async (code: string) => {
  const payload = {
    email: form.email,
    code: code,
  };
  await fetchCheckVerificationCode(payload);
};
</script>

<style scoped></style>
