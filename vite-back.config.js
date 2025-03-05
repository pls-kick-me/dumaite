import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/back/app.js"],
            refresh: true,
        }),
        vue({
            template: {
                compilerOptions: {},
            },
        }),
    ],
});
