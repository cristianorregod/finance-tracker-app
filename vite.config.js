import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/shared/components',
      '@containers': '/src/shared/containers',
      '@hooks': '/src/hooks',
      '@lib': '/src/lib',
      '@accounts': '/src/modules/accounts',
      '@budgets': '/src/modules/budgets',
      '@dashboard': '/src/modules/dashboard',
      '@reducers': '/src/reducers',
      '@context': '/src/context',
      '@services': '/src/shared/services',
      '@helpers': '/src/shared/helpers',
      '@shared': '/src/shared',
      '@modules': '/src/modules',
    },
  },
})
