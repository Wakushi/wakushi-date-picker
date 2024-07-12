import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import * as path from "path"
import copyTypes from "./vite-plugin-copy-types"

export default defineConfig({
  plugins: [react(), copyTypes()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "WakushiDatePicker",
      fileName: (format) => `wakushi-date-picker.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
})
