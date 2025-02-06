<template>
  <button class="btn btn-primary">
    <slot></slot>
  </button>
</template>


<script setup lang="ts"></script>

<style scoped>
.btn {
  padding: 10px 16px;
  font-size: 16px;
  border: 1px solid;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-primary {
  background-color: var(--base-color);
  color: var(--color-white);
}

</style>