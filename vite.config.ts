import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite-plus';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  fmt: {
    ignorePatterns: ['src/routeTree.gen.ts', 'coverage/**', 'dist/**'],
    printWidth: 88,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'none',
    arrowParens: 'avoid',
    sortImports: true,
    sortTailwindcss: true,
    sortPackageJson: true
  },
  lint: {
    ignorePatterns: ['src/routeTree.gen.ts', 'coverage/**', 'dist/**'],
    options: {
      typeAware: true,
      typeCheck: true
    }
  },
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportOnFailure: true,
      include: ['src/**/*.ts'],
      exclude: [
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/vite-env.d.ts',
        '**/routeTree.gen.ts',
        '**/lib/shadcn/**'
      ],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100
      }
    }
  },
  run: {
    tasks: {
      coverage: {
        command: 'vp test --coverage'
      },
      'test:ui': {
        command: 'vp test --ui --open',
        cache: false
      }
    }
  },
  staged: {
    '*.{js,jsx,ts,tsx,json,css}': 'vp check --fix'
  }
});
