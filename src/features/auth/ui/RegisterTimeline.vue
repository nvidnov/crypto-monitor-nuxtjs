<template>
  <div class="">
    <UTimeline
      orientation="horizontal"
      :default-value="activeValue"
      :items="items"
    />
  </div>
</template>

<script setup lang="ts">
import type { ITimelineItem } from "~/features/auth/types/types";
import { computed } from "vue";

const props = defineProps<{
  items: ITimelineItem[];
  valueTimeline: number;
}>();
const activeValue = computed(() => props.valueTimeline - 1);
</script>

<style scoped></style>
