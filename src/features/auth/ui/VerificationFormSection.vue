<template>
  <UPageSection>
    <template v-if="!isSuccess">
      <PinFormSection
        v-if="!isLoading"
        @fetchPin="onHandlerFetchPin"
        :error="messageError"
      />
      <SkeletonVerificationFormSection v-else />
    </template>
    <template v-else> Успех! </template>
  </UPageSection>
</template>

<script setup lang="ts">
import SkeletonVerificationFormSection from "~/features/auth/ui/SkeletonVerificationFormSection.vue";
import PinFormSection from "~/features/auth/ui/PinFormSection.vue";
import { useRegisterForm } from "~/features/auth/composable/useRegisterForm";
import { useRegistrationStore } from "~/entities/auth/model/registration";
import { ref, toValue } from "vue";

const store = useRegistrationStore();
const registerForm = useRegisterForm();
const { isLoading, isSuccess, fetchCheckVerificationCode } = registerForm;
const { fetchRegistrationUser } = store;

const messageError = ref<string | null>(null);

const onHandlerFetchPin = async (code: string) => {
  messageError.value = null;
  const payload = {
    email: store.form.email,
    code: code,
  };
  try {
    const { error: verifyError } = await fetchCheckVerificationCode(payload);
    if (verifyError) {
      throw verifyError;
    }
    const { error: registrationError } = await fetchRegistrationUser({
      role: 1,
      ...store.form,
    });

    if (registrationError) {
      throw registrationError;
    }
  } catch (error) {
    messageError.value = error;
  }
};
</script>

<style scoped></style>
