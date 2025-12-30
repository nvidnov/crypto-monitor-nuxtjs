<template>
  <component :is="stepForm" @setForm="onHandlerSetForm" />
</template>

<script setup lang="ts">
import RegisterFormSection from "~/features/auth/ui/RegisterFormSection.vue";
import VerificationFormSection from "~/features/auth/ui/VerificationFormSection.vue";
import { useRegistrationStore } from "~/entities/auth/model/registration";
import type { IRegisterForm } from "~/entities/auth/types";
import { computed, onMounted } from "vue";

definePageMeta({
  layout: "auth",
});
const store = useRegistrationStore();
const { setForm, nextStep } = store;

const onHandlerSetForm = (form: IRegisterForm) => {
  setForm(form);
  nextStep();
};
const stepForm = computed(() =>
  store.step === 1 ? RegisterFormSection : VerificationFormSection,
);
onMounted(() => {
  store.resetStep();
});
</script>

<style scoped></style>
