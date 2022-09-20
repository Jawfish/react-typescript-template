/* eslint-disable no-undef */
module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:tailwindcss/recommended',
		'plugin:import/typescript',
		'plugin:prettier/recommended',
		'plugin:promise/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		'@typescript-eslint',
		'prettier',
		'import',
		'tailwindcss',
		'simple-import-sort',
		'promise',
		'react'
	],
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
		}
	},
	rules: {
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
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
		'prettier/prettier': [
			'warn',
			{
				arrowParens: 'avoid',
				bracketSameLine: true,
				bracketSpacing: true,
				embeddedLanguageFormatting: 'auto',
				endOfLine: 'lf',
				htmlWhitespaceSensitivity: 'css',
				insertPragma: false,
				jsxSingleQuote: false,
				printWidth: 80,
				proseWrap: 'preserve',
				quoteProps: 'as-needed',
				requirePragma: false,
				semi: true,
				singleQuote: true,
				tabWidth: 2,
				trailingComma: 'none',
				useTabs: true
			}
		],
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
		]
	}
};
