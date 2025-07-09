import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// Pinia import
import { createPinia } from "pinia";

// PrimeVue imports
import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Paginator from "primevue/paginator";

// PrimeVue theme
import Aura from "@primevue/themes/aura";

// PrimeIcons
import "primeicons/primeicons.css";

const app = createApp(App);
const pinia = createPinia();

// Use Pinia for state management
app.use(pinia);

// Configure PrimeVue with Aura theme in light mode
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".dark-mode-disabled",
    },
  },
});

// Register PrimeVue components globally
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Dropdown", Dropdown);
app.component("InputText", InputText);
app.component("Paginator", Paginator);

app.mount("#app");
