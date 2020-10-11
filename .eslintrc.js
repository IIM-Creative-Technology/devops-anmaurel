module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: [2, 'single', { avoidEscape: true }],
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
}
