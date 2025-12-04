<template>
  <component :is="stepForm" />
</template>

<script setup lang="ts">
import RegisterFormSection from "~/features/auth/ui/RegisterFormSection.vue";
import VerificationFormSection from "~/features/auth/ui/VerificationFormSection.vue";
definePageMeta({
  layout: "auth",
});
let step = ref(1);
const stepForm =
  step.value === 1 ? RegisterFormSection : VerificationFormSection;
</script>

<style scoped></style>
