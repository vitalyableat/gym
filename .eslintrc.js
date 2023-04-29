module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier', 'import', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['warn'],
    'no-console': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};
