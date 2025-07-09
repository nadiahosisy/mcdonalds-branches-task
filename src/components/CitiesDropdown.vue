<template>
  <div class="cities-dropdown">
    <label for="cities">Select City:</label>
    <Dropdown
      id="cities"
      v-model="selectedCity"
      :options="cityOptions"
      placeholder="Select a city"
      showClear
      class="city-dropdown"
      @change="onCityChange"
    />
  </div>
</template>

<script setup>
import { useBranchesStore } from "../stores/branches.js";
import { computed } from "vue";

// Use Pinia store
const store = useBranchesStore();

// Computed properties from store
const selectedCity = computed({
  get: () => store.selectedCity,
  set: (value) => store.setSelectedCity(value)
});

const cityOptions = computed(() => store.cityOptions);

// Event handler
const onCityChange = (event) => {
  store.setSelectedCity(event.value);
};
</script>

<style scoped>
.cities-dropdown {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cities-dropdown label {
  font-weight: bold;
  color: #333;
  font-size: 14px;
}

.city-dropdown {
  width: 100%;
}
</style> 