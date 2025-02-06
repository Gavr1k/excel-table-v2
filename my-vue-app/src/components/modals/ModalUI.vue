<template>
  <div 
    v-if="props.show" 
    class="modal modal_overlay" 
    @click.self="handleClickOutside"
  >
    <div class="modal__content">
      <div class="modal__title">
        <slot name="title"></slot>
      </div>
      <div class="modal__body">
        <slot name="content"></slot>
      </div>
      <div class="modal__actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonUI from '../ui/ButtonUI.vue';
const props = defineProps<{
  show: {
    type: Boolean,
    required: false,
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true,
  },
}>();

const emit = defineEmits(['close']);

const handleClickOutside = () => {
  if (props.closeOnClickOutside) {
    emit('close');
  }
};
</script>

<style scoped>
.modal_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-close {
  margin-top: 10px;
  padding: 5px 10px;
  background: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
