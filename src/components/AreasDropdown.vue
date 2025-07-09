<template>
  <div class="areas-dropdown">
    <label for="areas">Select Area:</label>
    <Dropdown
      id="areas"
      v-model="selectedArea"
      :options="areaOptions"
      placeholder="Select an area"
      showClear
      class="area-dropdown"
      @change="onAreaChange"
    />
  </div>
</template>

<script setup>
import { useBranchesStore } from "../stores/branches.js";
import { computed } from "vue";

// Use Pinia store
const store = useBranchesStore();

// Computed properties from store
const selectedArea = computed({
  get: () => store.selectedArea,
  set: (value) => store.setSelectedArea(value)
});

const areaOptions = computed(() => store.areaOptions);

// Event handler
const onAreaChange = (event) => {
  store.setSelectedArea(event.value);
};
</script>

<style scoped>
.areas-dropdown {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.areas-dropdown label {
  font-weight: bold;
  color: #333;
  font-size: 14px;
}

.area-dropdown {
  width: 100%;
}
</style> 