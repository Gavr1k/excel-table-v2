<template>
  <div v-if="props.loading" class="loading-spinner"></div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    loading: boolean,
  }>();
</script>

<style scoped>
.loading-spinner {
  border: 6px solid #f3f3f3;
  border-top: 6px solid green;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  animation: spin 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
