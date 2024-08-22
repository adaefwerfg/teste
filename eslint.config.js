import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import jsdoc from 'eslint-plugin-jsdoc';
import jsonc from 'eslint-plugin-jsonc';
import n from 'eslint-plugin-n';
import * as regexp from 'eslint-plugin-regexp';

export default tseslint.config(
	{
		ignores: ['coverage*', 'lib', 'node_modules', 'pnpm-lick', '**/*.snap'],
	},
	{
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
		},
	},
	eslint.configs.recommended,
	...jsonc.configs['flat/recommended-with-json'],
	comments.recommended,
	jsdoc.configs['flat/recommended-typescript-error'],
	n.configs['flat/mixed-esm-and-cjs'],
	regexp.configs['flat/recommended'],
	...tseslint.config({
		extends: [
			...tseslint.configs.strictTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
		],
		settings: {
			'prettier/prettier': 'error',
			'import/extensions': ['.ts'],
			'import/resolver': {
				typescript: {},
			},
		},
		files: ['**/*.js', '**/*.ts'],
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ['./*.*s', 'eslint.config.js', './src'],
					defaultProject: './tsconfig.json',
				},
			},
		},
		rules: {
			'jsdoc/informative-docs': 'error',
			'logical-assignment-operators': [
				'error',
				'always',
				{ enforceForIfStatements: true },
			],
			'operator-assignment': 'error',

			'jsdoc/require-jsdoc': 'off',
			'jsdoc/require-param': 'off',
			'jsdoc/require-property': 'off',
			'jsdoc/require-returns': 'off',
			'no-constant-condition': 'off',

			'@typescript-eslint/no-unnecessary-condition': [
				'error',
				{
					allowConstantLoopConditions: true,
				},
			],
			'@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'all' }],
			'@typescript-eslint/prefer-nullish-coalescing': [
				'error',
				{ ignorePrimitives: true },
			],
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{ allowBoolean: true, allowNullish: true, allowNumber: true },
			],
			'n/no-unsupported-features/node-builtins': [
				'error',
				{ allowExperimental: true },
			],
			'no-useless-rename': 'error',
			'object-shorthand': 'error',
		},
	}),
	{
		files: ['*.jsonc'],
		rules: {
			'jsonc/comma-dangle': 'off',
			'jsonc/no-comments': 'off',
			'jsonc/sort-keys': 'error',
		},
	},
);
