import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    if (mode === "production") {
        return {
            base: "/tic-tac-toe/",
        };
    }

    return {
        plugins: [react()],
    };
});
