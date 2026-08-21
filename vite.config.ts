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
  },
}));
