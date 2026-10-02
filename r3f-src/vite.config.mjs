import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    global: "globalThis",
  },
  build: {
    outDir: "../assets/r3f",
    emptyOutDir: true,
    lib: {
      entry: "src/main.jsx",
      formats: ["es"],
      fileName: () => "bundle.js",
    },
  },
});
