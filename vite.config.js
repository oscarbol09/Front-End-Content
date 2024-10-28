import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader"; // Para manejar SVGs como componentes

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(), // Importa el loader para SVGs
  ],
});
