<template>
  <div class="free-text-search">
    <label for="search">Search:</label>
    <InputText
      id="search"
      v-model="searchText"
      placeholder="Search branches..."
      class="search-input"
      @input="onSearchChange"
    />
  </div>
</template>

<script setup>
import { useBranchesStore } from "../stores/branches.js";
import { computed } from "vue";

// Use Pinia store
const store = useBranchesStore();

// Computed property from store
const searchText = computed({
  get: () => store.searchText,
  set: (value) => store.setSearchText(value)
});

// Event handler
const onSearchChange = (event) => {
  store.setSearchText(event.target.value);
};
</script>

<style scoped>
.free-text-search {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.free-text-search label {
  font-weight: bold;
  color: #333;
  font-size: 14px;
}

.search-input {
  width: 100%;
}
</style> 