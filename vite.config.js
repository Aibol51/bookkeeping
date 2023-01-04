import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    base: "./",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            assets: path.resolve(__dirname, "./src/assets"),
        },
    },
    plugins: [vue()],
});
