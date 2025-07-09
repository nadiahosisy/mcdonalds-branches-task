# McDonald's Branches Management Application

A responsive web application built with Vue.js 3 and PrimeVue that displays McDonald's branch locations with advanced filtering capabilities.

## 🚀 Features

### Core Functionality

- **Branch List Display**: Shows branches in a sortable, paginated, and scrollable table format
- **Area Filtering**: Dropdown to filter branches by geographical area (store_region)
- **City Filtering**: Dynamic city dropdown that updates based on selected area
- **Free Text Search**: Real-time search across all branch data fields
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Technical Features

- **Vue.js 3**: Built with the latest Vue.js using Composition API
- **PrimeVue Components**: Professional UI components with Aura theme
- **API Integration**: Fetches real-time data from McDonald's API endpoint
- **Reactive Filtering**: All filters work together seamlessly with instant updates
- **Error Handling**: Shows empty table if API is unavailable
- **Loading States**: Shows loading indicators during data fetch
- **Scrollable Table**: 400px height with pagination (10 rows per page)

## 🛠️ Tech Stack

- **Framework**: Vue.js 3 (Composition API)
- **UI Library**: PrimeVue with Aura theme
- **Build Tool**: Vite
- **Styling**: CSS3 with responsive design
- **API**: RESTful API integration with fetch() and proxy configuration

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm or yarn package manager

### Installation

1. **Clone or download the project**

   ```bash
   cd mcdonalds-branches-task
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any web server.

## 🔧 API Integration

### Primary Data Source

- **Endpoint**: `https://mcdonalds-live-engage-api-stage-1.azurewebsites.net/stores.json`
- **Method**: GET
- **Authentication**: None required
- **Proxy Configuration**: Uses Vite proxy to avoid CORS issues

### Data Handling

The application uses the API data directly without transformation:

- **store_id**: Branch ID
- **store_title**: Branch name (Hebrew)
- **store_address**: Branch address (Hebrew)
- **city**: City name (Hebrew)
- **store_region**: Area/region identifier

### No Fallback Data

If the API is unavailable, the application will show an empty table with no data.

## 🎨 User Interface

The application features:

- Clean, professional layout with 1400px max width
- Bordered sections for visual organization
- PrimeVue's Aura theme for consistency
- Scrollable table with 400px height and pagination
- Intuitive navigation and interaction patterns

## 🔍 Filtering Logic

### Area Filter

- Dynamically populated from API data using store_region
- Automatically updates city options when changed
- Clears city selection when area changes

### City Filter

- Shows all cities or filtered by selected area
- Works in combination with area filter

### Free Text Search

- Searches across all visible fields (store_id, store_title, store_address, city, store_region)
- Case-insensitive matching
- Instant results as you type

### Combined Filtering

All filters work together seamlessly - you can combine area, city, and text search for precise results.

## 📱 Responsive Design

The application is fully responsive with:

- Desktop: 3-column filter layout
- Mobile: Single-column stacked layout
- Optimized table display for different screen sizes
- Touch-friendly interface elements

## 🧩 Architecture

### Component Structure

```
src/
├── App.vue                     # Main application component
├── components/
│   ├── PageTitle.vue           # Page title component
│   ├── AreasDropdown.vue       # Area selection dropdown
│   ├── CitiesDropdown.vue      # City selection dropdown
│   ├── FreeTextSearch.vue      # Free text search input
│   └── BranchesList.vue        # Data table with branches
├── stores/
│   └── branches.js             # Pinia store for state management
├── main.js                     # Application entry point
└── assets/                     # Static assets
```

### Key Design Patterns

- **Composition API**: Modern Vue.js approach for better code organization
- **Reactive Data**: All state changes trigger automatic UI updates
- **Computed Properties**: Efficient filtering and data transformation
- **Component Composition**: Modular, reusable component structure
- **Props & Emit**: Clean parent-child communication

## 🔧 Configuration

### Vite Configuration

- Proxy setup to handle CORS issues with the API
- Development server optimized for fast rebuilds
- Production build optimization

### PrimeVue Setup

- Aura theme configured
- Core components (DataTable, Dropdown, InputText) registered
- Responsive design patterns implemented

## 🚀 Deployment Ready

This application is production-ready and can be deployed to any web server:

- Static file hosting (Netlify, Vercel, GitHub Pages)
- Traditional web servers (Apache, Nginx)
- Cloud platforms (AWS S3, Azure Blob Storage, etc.)

---

**Built with ❤️ using Vue.js 3 and PrimeVue by Nadia Hosisy**
