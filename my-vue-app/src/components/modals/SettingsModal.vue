<template>
    <ModalUI :show="props.show" @close="emit('close')">
      <template #title>Проверка заголовка</template>
      <template #content>
        <ButtonUI>Экспорт в эксель</ButtonUI>
        <ButtonUI>Импорт в эксель</ButtonUI>
      </template>
      <template #actions>
        <ButtonUI>Назад</ButtonUI>
      </template>
    </ModalUI>
</template>

<script setup lang="ts">
import ModalUI from './ModalUI.vue';
import ButtonUI from '../ui/ButtonUI.vue';



const props = defineProps<{
  show: boolean,
}>();

const emit = defineEmits(['close']);

</script>

<style scoped></style>