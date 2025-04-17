import js from '@eslint/js';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist/**', 'node_modules/**'] },

  js.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'], // Target TypeScript and TSX files
    languageOptions: {
      parser: tsParser, // Use the TypeScript parser
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser, // Add browser global variables
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin, // Enable TypeScript plugin
      'react': reactPlugin,           // Enable React plugin
      'react-hooks': reactHooks,     // Enable React Hooks plugin
      'react-refresh': reactRefresh, // Enable React Refresh plugin
    },
    rules: {

      ...tsPlugin.configs['recommended'].rules,
      ...reactPlugin.configs['recommended'].rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off', 
      'react/react-in-jsx-scope': 'off', 

      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect', 
      },
    },
  },
];