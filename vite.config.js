import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Raise the per-chunk warning limit (default 500 KB). After splitting the
    // big vendor libs into their own chunks the remaining app chunks are
    // expected to stay well under this, so warnings should be gone.
    chunkSizeWarningLimit: 1500,
    rolldownOptions: {
      output: {
        // Manual code splitting complements the automatic splitting already
        // provided by the React.lazy() route imports in App.jsx. Grouping the
        // heavy, stable vendor libraries into separate chunks keeps them out of
        // the entry bundle and lets the browser cache them independently.
        codeSplitting: {
          minSize: 20000,
          groups: [
            // React core (react, react-dom, scheduler)
            {
              name: "react-vendor",
              test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 30,
            },
            // Routing
            {
              name: "router-vendor",
              test: /node_modules[\\/]react-router(-dom)?[\\/]/,
              priority: 25,
            },
            // Animation library (large)
            {
              name: "framer-motion",
              test: /node_modules[\\/]framer-motion[\\/]/,
              priority: 20,
            },
            // Icon libraries (large)
            {
              name: "react-icons",
              test: /node_modules[\\/]react-icons[\\/]/,
              priority: 20,
            },
            {
              name: "lucide",
              test: /node_modules[\\/]lucide-react[\\/]/,
              priority: 20,
            },
            // Everything else from node_modules
            {
              name: "vendor",
              test: /node_modules[\\/]/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
});
