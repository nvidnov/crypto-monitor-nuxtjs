<template>
  <component :is="stepForm" @setForm="onHandlerSetForm" />
</template>

<script setup lang="ts">
import RegisterFormSection from "~/features/auth/ui/RegisterFormSection.vue";
import VerificationFormSection from "~/features/auth/ui/VerificationFormSection.vue";
import { useRegistrationStore } from "~/entities/auth/model/registration";
import type { IRegisterForm } from "~/entities/auth/types";

definePageMeta({
  layout: "auth",
});
const useRegistration = useRegistrationStore();
const { step, setForm, nextStep } = useRegistration;

const onHandlerSetForm = (form: IRegisterForm) => {
  setForm(form);
  nextStep();
};
const stepForm = step === 2 ? RegisterFormSection : VerificationFormSection;
</script>

<style scoped></style>
