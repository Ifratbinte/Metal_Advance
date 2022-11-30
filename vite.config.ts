import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "#assets": resolve(__dirname, "./src/assets/"),
      "#components": resolve(__dirname, "./src/components/"),
      "#constants": resolve(__dirname, "./src/constants/"),
      "#helpers": resolve(__dirname, "./src/helpers/"),
      "#hooks": resolve(__dirname, "./src/hooks/"),
      "#routes": resolve(__dirname, "./src/routes/"),
      "#utils": resolve(__dirname, "./src/utils/"),
      "#store": resolve(__dirname, "./src/store/"),
    },
  },
  plugins: [react()],
});
