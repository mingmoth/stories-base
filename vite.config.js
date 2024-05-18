import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/stories-base/',
    css: {
        modules: {
            localsConvention: 'camelCase'
        }
    },
    plugins: [
        vue(),
        eslint({
            cache: false
        })
    ]
})
