/* eslint-disable unicorn/prefer-module */
import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  // Add react plugin
  plugins: [react()],

  // Configure nextjs default paths
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Specify the test environment
  test: {
    // Use jsdom environment
    environment: 'jsdom',

    // Import assertion library or any global setup
    globals: true,

    // Setup files to be run before each test
    setupFiles: ['./vitest.setup.mts'],
  },
})
