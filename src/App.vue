<script setup>
import { onMounted } from "vue";
import { useBranchesStore } from "./stores/branches.js";
import PageTitle from "./components/PageTitle.vue";
import AreasDropdown from "./components/AreasDropdown.vue";
import CitiesDropdown from "./components/CitiesDropdown.vue";
import FreeTextSearch from "./components/FreeTextSearch.vue";
import BranchesList from "./components/BranchesList.vue";

// Use Pinia store
const store = useBranchesStore();

// Lifecycle hooks
onMounted(() => {
  store.fetchBranches();
});
</script>

<template>
  <div class="app-container">
    <!-- Page Title Component -->
    <PageTitle />

    <!-- Filter Controls -->
    <div class="filter-controls">
      <!-- Areas Dropdown List Component -->
      <AreasDropdown />

      <!-- Cities Dropdown List Component -->
      <CitiesDropdown />

      <!-- Free Text Search Component -->
      <FreeTextSearch />
    </div>

    <!-- Branches List Component -->
    <BranchesList />
  </div>
</template>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  padding: 20px 0;
}

/* App container styles */
.app-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.filter-controls {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  border: 2px solid #ccc;
  background-color: #f9f9f9;
}

/* Responsive design */
@media (max-width: 768px) {
  .filter-controls {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .app-container {
    padding: 10px;
  }
}
</style>
