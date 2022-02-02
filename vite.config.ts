import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
// // https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: './src/main.tsx',
      name: 'hubilo',
      // formats: ["cjs", "es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
      external: ['react', 'react-dom'],
    },
  },
  define: {
    'process.env': {},
  },
})
