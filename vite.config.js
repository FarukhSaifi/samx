import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@context": "/src/Context",
      "@pages": "/src/pages",
      "@assets": "/src/assets",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@styles": "/src/style",
    },
  },
  esbuild: {
    jsx: "automatic",
  },
});
