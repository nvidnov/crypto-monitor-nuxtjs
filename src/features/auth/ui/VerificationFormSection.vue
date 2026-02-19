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
  </UPageSection>
</template>

<script setup lang="ts">
import SkeletonVerificationFormSection from "~/features/auth/ui/SkeletonVerificationFormSection.vue";
import PinFormSection from "~/features/auth/ui/PinFormSection.vue";
import { useRegisterForm } from "~/features/auth/composable/useRegisterForm";
import { useRegistrationStore } from "~/entities/auth/model/registration";
import { ref } from "vue";

const store = useRegistrationStore();
const router = useRouter();
const registerForm = useRegisterForm();
const { isLoading, isSuccess, fetchCheckVerificationCode } = registerForm;
const { fetchRegistrationUser } = store;

const messageError = ref<string | null>(null);

const normalizeError = (err: unknown): { code?: number; message: string } => {
  if (typeof err === "string") return { code: 400, message: err };
  if (err && typeof err === "object") {
    const anyErr = err as any;
    const code =
      typeof anyErr.statusCode === "number"
        ? anyErr.statusCode
        : typeof anyErr.status === "number"
          ? anyErr.status
          : typeof anyErr.response?.status === "number"
            ? anyErr.response.status
            : undefined;
    const message =
      anyErr?.data?.message ||
      anyErr?.response?._data?.message ||
      anyErr?.message ||
      anyErr?.statusMessage ||
      "Произошла ошибка";
    return { code, message: String(message) };
  }
  return { code: 400, message: "Произошла ошибка" };
};

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
  } catch (error: unknown) {
    const { code: statusCode, message } = normalizeError(error);
    messageError.value = message;
    const query: Record<string, string> = {
      title: "Ошибка регистрации",
      details: message,
    };
    if (statusCode) query.code = String(statusCode);

    try {
      navigateTo({path: "/error", query});
    } catch {
      showError({
        statusCode: statusCode ?? 400,
        statusMessage: "Ошибка регистрации",
        message,
      });
    }
  }
};
</script>

<style scoped></style>
