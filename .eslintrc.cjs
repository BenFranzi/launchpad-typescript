module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@bengineer.dev/core'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    "@typescript-eslint/explicit-function-return-type": "error",
    "object-curly-spacing": ["error", "always"],
    "no-unused-vars": "off",
    "padding-line-between-statements": "off",
    "import/no-nodejs-modules": "off"
  },
  // TEST CONDITIONS - REMOVE FOR REAL PROJECTS
  overrides: [
    {
      files: ['*'],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "prefer-arrow-callback": "off",
        "no-console": "warn",
        "import/unambiguous": "off",
        "import/no-namespace": "off"
      }
    },
    //\TEST CONDITIONS - REMOVE FOR REAL PROJECTS
  ],
}
