import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const __dirname = path.resolve();

export default defineConfig({
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});