import pluginJs from '@eslint/js';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import jsdoc from 'eslint-plugin-jsdoc';
import packageJson from 'eslint-plugin-package-json/configs/recommended';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import jsoncParser from 'jsonc-eslint-parser';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  comments.recommended,
  packageJson,
  eslintPluginPrettierRecommended,
  jsdoc.configs['flat/recommended'],
  {
    ignores: ['node_modules/**', '**/dist', '.parcel-cache/**']
  },
  {
    files: ['*.json', '*.json5'],
    languageOptions: {
      parser: jsoncParser
    }
  },
  {
    files: ['**/*.js'],
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    },

    plugins: {
      perfectionist,
      jsdoc
    },
    rules: {
      'constructor-super': 2,
      'default-case': 2,
      'default-case-last': 2,
      'jsdoc/check-access': 1,
      'jsdoc/check-alignment': 1,
      'jsdoc/check-param-names': 1, // Recommended
      'jsdoc/check-property-names': 1, // Recommended
      'jsdoc/check-tag-names': 1, // Recommended
      'jsdoc/check-types': 1, // Recommended
      'jsdoc/check-values': 'error',
      'jsdoc/empty-tags': 1, // Recommended
      'jsdoc/implements-on-classes': 1, // Recommended
      'jsdoc/multiline-blocks': 1, // Recommended
      'jsdoc/no-multi-asterisks': 1, // Recommended
      'jsdoc/no-undefined-types': 1, // Recommended
      'jsdoc/require-asterisk-prefix': 1,
      'jsdoc/require-jsdoc': 2, // Recommended
      'jsdoc/require-param': 2, // Recommended
      'jsdoc/require-param-description': 1, // Recommended
      'jsdoc/require-param-name': 1, // Recommended
      'jsdoc/require-param-type': 1, // Recommended
      'jsdoc/require-property': 1, // Recommended
      'jsdoc/require-property-description': 1, // Recommended
      'jsdoc/require-property-name': 1, // Recommended
      'jsdoc/require-property-type': 1, // Recommended
      'jsdoc/require-returns': 1, // Recommended
      'jsdoc/require-returns-check': 1, // Recommended
      'jsdoc/require-returns-description': 1, // Recommended
      'jsdoc/require-returns-type': 1, // Recommended
      'jsdoc/require-yields': 1, // Recommended
      'jsdoc/require-yields-check': 1, // Recommended
      'jsdoc/tag-lines': 1, // Recommended
      'jsdoc/valid-types': 1, // Recommend
      'no-const-assign': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-ex-assign': 'error',
      'no-sparse-arrays': 'error',
      'no-this-before-super': 'error',
      'no-unreachable': 'error',
      'no-useless-assignment': 'error',
      'no-var': 'error',
      'no-magic-numbers': 'error',
      'no-self-compare': 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      semi: 'error',
      'jsdoc/require-description': 'warn',
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc'
        }
      ]
    }
  }
];
