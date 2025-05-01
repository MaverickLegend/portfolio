import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { templateCompilerOptions } from "@tresjs/core";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ ...templateCompilerOptions }), imagetools()],
  assetsInclude: ["**/*.webp"],
});
