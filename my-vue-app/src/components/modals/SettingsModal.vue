<template>
    <ModalUI :show="props.show" @close="emit('close')">
      <template #title>Проверка заголовка</template>
      <template #content>
        <ButtonUI @click.self="exportToExcel">Экспорт в эксель</ButtonUI>
        <ButtonUI @click.self="importToExcel">Импорт в эксель</ButtonUI>
      </template>
      <template #actions>
        <ButtonUI @click.self="emit('close')">Назад</ButtonUI>
      </template>
    </ModalUI>
</template>

<script setup lang="ts">
import ModalUI from './ModalUI.vue';
import ButtonUI from '../ui/ButtonUI.vue';

interface Props {
  show: boolean
}

const props = defineProps<Props>();

const emit = defineEmits(['close', 'exportToExcel', 'importToExcel']);

const exportToExcel = () => {
  emit('exportToExcel');
}

const importToExcel = () => {
  emit('importToExcel');
}

</script>

<style scoped></style>