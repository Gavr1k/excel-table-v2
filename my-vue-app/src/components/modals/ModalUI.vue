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
      <hr class="modal__divider"/>
      <div class="modal__body">
        <slot name="content"></slot>
      </div>
      <hr class="modal__divider"/>
      <div class="modal__actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  show: boolean;
  closeOnClickOutside?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  closeOnClickOutside: true,
});

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
  border-radius: 8px;
  min-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal__title {
  padding: 8px 16px;
  font-size: 1.5rem;
}

.modal__body {
  padding: 8px 16px;
}

.modal__actions {
  padding: 8px 16px;
}

.modal__divider {
  padding: 0px 4px;
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
