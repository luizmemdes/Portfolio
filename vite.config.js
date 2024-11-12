import { defaultConfig } from "vite";
import react from '@vitejs/plugin-react';
import { plugins } from "eslint-config-next";

//https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/Portfolio",
});