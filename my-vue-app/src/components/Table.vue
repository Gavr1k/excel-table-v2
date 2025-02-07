<template>
  <div class="table-container">
    <noRecordsInfo v-if="data.length"></noRecordsInfo>
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
      <button @click.self="openModal">открыть</button>
    </table>
    <SettingsModal 
      :show="showSettingsModal" 
      @close="closeModal" 
      @exportToExcel="exportToExcel"
      @importToExcel="importToExcel"
      >
    </SettingsModal>
    <LoadingSpinner :loading="loading"></LoadingSpinner>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SettingsModal from './modals/SettingsModal.vue';
import LoadingSpinner from './ui/Loaderspinner.vue';
import noRecordsInfo from './noRecordsInfo.vue';
import { utils, writeFile } from 'xlsx';

const props = defineProps<{
  headers: string[];
  data: Record<string, any>[];
}>();

const loading = ref(false);

const showSettingsModal = ref(false);

const openModal = () => {
  showSettingsModal.value = true;
};

const closeModal = () => {
  console.log('here');
  showSettingsModal.value = false;
};

//TODO обновить метод под vueExcelEditor
const exportToExcel = () => {
  const ws = utils.json_to_sheet(props.data);

  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, 'Таблица');

  writeFile(wb, 'table_data.xlsx');
}

const importToExcel = () => {};

</script>

<style scoped>
.table-container {
  position: relative;
  width: 100%;
  display: flex;
}

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
