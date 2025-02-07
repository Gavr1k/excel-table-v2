<template>
  <div class="norecord-info">
    <span class="norecord-info__text">No records</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.norecord-info {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.norecord-info__text {
  font-size: 16px;
  font-weight: 400;
  color: black;
}
</style>