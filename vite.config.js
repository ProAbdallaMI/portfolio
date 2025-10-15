import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      enabled: true,
      reporter: ["text"],
      provider: "v8",
    },
  },
});
