import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "src",
    build: {
        minify: true,
        lib: {
            entry: resolve(__dirname, "src/main.js"),
            name: "Quanta",
            fileName: "quanta",
        },
        outDir: "../dist",
    },
});
