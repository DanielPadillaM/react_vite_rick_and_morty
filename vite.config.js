import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://DanielPadillaM.github.io/react_vite_rick_and_morty/",
  plugins: [react()],
})
