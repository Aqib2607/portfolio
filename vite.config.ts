import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Documented justification: On Windows environments, background dev watchers hold
    // file handles on copied public asset directories in dist (e.g. dist/about).
    // Setting emptyOutDir: false prevents Windows EPERM permission lock errors during builds
    // while Vite cleanly overwrites all output bundle chunks.
    emptyOutDir: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core runtime
          "vendor-react": ["react", "react-dom", "react/jsx-runtime"],
          // Routing
          "vendor-router": ["react-router-dom"],
          // Animation
          "vendor-motion": ["framer-motion"],
          // Radix UI primitives (shared across all shadcn components)
          "vendor-radix": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-toast",
            "@radix-ui/react-tabs",
            "@radix-ui/react-slot",
            "@radix-ui/react-label",
            "@radix-ui/react-separator",
            "@radix-ui/react-accordion",
          ],
          // Data fetching / state
          "vendor-query": ["@tanstack/react-query"],
        },
      },
    },
  },
}));
