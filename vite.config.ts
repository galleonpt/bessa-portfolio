import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bessa-portfolio/dist",
  plugins: [react()],
  // build: { outDir: "docs" },
});
