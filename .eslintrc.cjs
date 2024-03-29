/* eslint-disable no-undef */
module.exports = {
  plugins: [
    '@typescript-eslint',
    'import',
    'tailwindcss',
    'promise',
    'react',
    'jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  root: true,
  env: {
    browser: true,
    es2022: true
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json'
      }
    },
    react: {
      version: 'detect'
    },
    tailwindcss: {
      config: './tailwind.config.cjs'
    }
  },
  rules: {
    'lines-between-class-members': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'var', next: 'return' }
    ],
    'newline-before-return': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'prefer-destructuring': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    yoda: 'error',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
    'import/order': [
      'warn',
      {
        groups: [
          'type',
          'builtin',
          'object',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after'
          }
        ],
        'newlines-between': 'always'
      }
    ],
  }
};
