module.exports = {
  // ...andre konfigurasjoner...
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
  ignorePatterns: ['node_modules/'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },

  rules: {
    // Tillater ikke ubrukte variabler (som Prettier også håndterer)
    'no-unused-vars': 'error',
    // Bruk kun ESLint for håndtering av regler, ikke Prettier
    'prettier/prettier': 'off',
    'prefer-single/prefer-single': ['error', { allowTemplateLiterals: false }],
    quotes: ['error', 'single'],
  },
};
