module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'node_modules/**',
    '.storybook/**',
    'src/stories/**',
    '*.scss',
    '*.js',
  ],
  rules: {
    '@typescript-eslint/semi': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/quotes': 'off',
    'multiline-ternary': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'simple-import-sort'],
};
