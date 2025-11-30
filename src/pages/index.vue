<script setup lang="ts">
const { data, pending, error } = useFetch('/api/test');
</script>

<template>
    <div>
        <h1>Data: {{ data }}</h1>
        <h1>Pending: {{ pending }}</h1>
        <h1>{{ error }}</h1>
    </div>
</template>

<style scoped>

</style>
