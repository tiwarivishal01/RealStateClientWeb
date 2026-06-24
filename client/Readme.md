# YourFutureHome - Frontend Client

This is the frontend component of **YourFutureHome**, a modern real estate booking application. It is bootstrapped with Vite + React.

## Technology Stack

- **Core**: React (v18)
- **Tooling**: Vite (v4) for ultra-fast bundling and HMR
- **UI Framework & Styling**: 
  - Mantine UI Core & Dates (v6) for modals, inputs, and layout components
  - Framer Motion for elegant sliding animations and transitions
  - Swiper React for smooth listing carousels
  - React Icons for modern UI symbols
- **Data Fetching & State**:
  - React Query (v3) for server-state caching, synchronization, and refetching
  - Axios for REST client calls
  - React Toastify for user feedback notifications
- **Authentication**:
  - Auth0 React SDK for secure sign-in, signup, and token-based OAuth authorization
- **Maps Integration**:
  - React Leaflet for interactive map components, geocoding, and property markers

## Installation & Setup

1. **Install Dependencies**:
   Ensure you have Node.js installed, then execute in this directory:
   ```bash
   npm install
   ```

2. **Vite Configurations**:
   The Vite dev server starts on port `5173`. Make sure the backend server (port `8000`) is running, as API calls are routed via `http://localhost:8000/api`.

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build Production Bundle**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## Key Files

- `src/main.jsx`: Renders the React root and wraps the application inside `Auth0Provider` and `BrowserRouter`.
- `src/App.jsx`: Sets up React Query client, global user context, toast containers, and route definitions.
- `src/utils/api.js`: Contains all Axios instance creation and backend API endpoints (Register User, Book Visit, Add Property, Favorites).
- `src/components/Header/Header.jsx`: Stylized header brand logo and navigation menu.
- `src/components/UploadImage/UploadImage.jsx`: Multi-step form step for uploading property images (includes fallback default image support).
