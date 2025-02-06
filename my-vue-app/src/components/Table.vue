<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex">
        <td v-for="(header, colIndex) in headers" :key="colIndex">
          {{ row[header] }}
        </td>
      </tr>
    </tbody>
    <SettingsModal :show="showSettingsModal" @close="closeModal"></SettingsModal>
    <button @click.self="openModal">открыть</button>
  </table>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import SettingsModal from './modals/SettingsModal.vue';
defineProps<{
  headers: string[];
  data: Record<string, any>[];
}>();

const showSettingsModal = ref(false);

const openModal = () => {
  showSettingsModal.value = true;
};

const closeModal = () => {
  showSettingsModal.value = false;
};

</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table th {
  background-color: #f4f4f4;
}
</style>
