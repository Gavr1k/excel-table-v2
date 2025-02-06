<template>
    <ModalUI :show="props.show" @close="emit('close')">
      <template #title>Проверка заголовка</template>
    </ModalUI>
</template>

<script setup lang="ts">
import ModalUI from './ModalUI.vue';

const props = defineProps<{
  show: boolean,
}>();

const emit = defineEmits(['close']);

</script>

<style scoped></style>