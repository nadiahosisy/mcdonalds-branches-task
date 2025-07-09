import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useBranchesStore = defineStore("branches", () => {
  // State
  const branches = ref([]);
  const loading = ref(true);
  const selectedArea = ref(null);
  const selectedCity = ref(null);
  const searchText = ref("");

  // Getters (computed)
  const filteredBranches = computed(() => {
    let filtered = branches.value;

    // Filter by area
    if (selectedArea.value) {
      filtered = filtered.filter(
        (branch) => branch.store_region === selectedArea.value
      );
    }

    // Filter by city
    if (selectedCity.value) {
      filtered = filtered.filter(
        (branch) => branch.city === selectedCity.value
      );
    }

    // Filter by search text
    if (searchText.value && searchText.value.trim() !== "") {
      const searchLower = searchText.value.toLowerCase().trim();
      filtered = filtered.filter(
        (branch) =>
          (branch.store_title &&
            branch.store_title.toLowerCase().includes(searchLower)) ||
          (branch.store_address &&
            branch.store_address.toLowerCase().includes(searchLower)) ||
          (branch.city && branch.city.toLowerCase().includes(searchLower)) ||
          (branch.store_region &&
            branch.store_region.toLowerCase().includes(searchLower)) ||
          (branch.store_id && branch.store_id.toString().includes(searchLower))
      );
    }

    return filtered;
  });

  const areaOptions = computed(() => {
    const areas = [
      ...new Set(branches.value.map((branch) => branch.store_region)),
    ]
      .filter((area) => area && area.trim() !== "")
      .sort();
    return areas;
  });

  const cityOptions = computed(() => {
    let cities = [];
    if (selectedArea.value) {
      cities = branches.value
        .filter((branch) => branch.store_region === selectedArea.value)
        .map((branch) => branch.city);
    } else {
      cities = branches.value.map((branch) => branch.city);
    }

    return [...new Set(cities)]
      .filter((city) => city && city.trim() !== "")
      .sort();
  });

  // Actions
  const fetchBranches = async () => {
    try {
      loading.value = true;

      // Use proxy URL to avoid CORS issues, Method: GET
      const response = await fetch("/api/stores.json", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Use API data directly without transformation, but trim city names
      branches.value = data.map((store) => ({
        ...store,
        city: store.city ? store.city.trim() : "N/A", // Hebrew city name, trimmed
      }));
    } catch (error) {
      // No fallback data - will show empty table if API fails
      branches.value = [];
    } finally {
      loading.value = false;
    }
  };

  const setSelectedArea = (area) => {
    selectedArea.value = area;
    // Clear city selection when area changes
    selectedCity.value = null;
  };

  const setSelectedCity = (city) => {
    selectedCity.value = city;
  };

  const setSearchText = (text) => {
    searchText.value = text;
  };

  return {
    // State
    branches,
    loading,
    selectedArea,
    selectedCity,
    searchText,

    // Getters
    filteredBranches,
    areaOptions,
    cityOptions,

    // Actions
    fetchBranches,
    setSelectedArea,
    setSelectedCity,
    setSearchText,
  };
});
