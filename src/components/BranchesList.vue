<template>
  <div class="list-container">
    <DataTable 
      :value="filteredBranches" 
      :loading="loading"
      scrollable 
      scrollHeight="400px"
      paginator 
      :rows="10" 
      :rowsPerPageOptions="[5, 10, 20, 50]"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      tableStyle="min-width: 50rem"
      class="branches-list"
    >
      <Column 
        field="store_id" 
        header="Id"
        :sortable="true"
        style="width: 10%"
      ></Column>
      <Column 
        field="store_title" 
        header="Name" 
        :sortable="true"
        style="width: 30%"
      ></Column>
      <Column 
        field="store_address" 
        header="Address" 
        :sortable="true"
        style="width: 30%"
      ></Column>
      <Column 
        field="city" 
        header="City" 
        :sortable="true"
        style="width: 15%"
      ></Column>
      <Column 
        field="store_region" 
        header="Area" 
        :sortable="true"
        style="width: 15%"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { useBranchesStore } from "../stores/branches.js";
import { computed } from "vue";

// Use Pinia store
const store = useBranchesStore();

// Computed properties from store
const filteredBranches = computed(() => store.filteredBranches);
const loading = computed(() => store.loading);
</script>

<style scoped>
.list-container {
  width: 100%;
}

.branches-list {
  width: 100%;
}
</style> 