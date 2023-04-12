/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      enabled: true,
      provider: 'c8',
      all: true,
      exclude: [...configDefaults.exclude, 'src/types/', 'public/', '**/*.d.ts', '**/*.test.tsx'],
      reporter: 'text',
    },
  },
});
