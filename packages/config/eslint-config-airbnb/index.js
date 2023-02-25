const eslintSetting = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks'],
  globals: {
    page: true,
    browser: true,
    context: true,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    /*
     * Disabling `import/prefer-default-export` gives us the flexibility to
     * use `export { default as Module } from './Module'` in index.ts files.
     * As index.ts file grows having to read 1 line of exported module gives better code readability.
     */
    'import/prefer-default-export': ['off'],
    /*
     * Disabling this rule makes our index.ts file more readable.
     * This should be disabled along with `import/prefer-default-export`.
     */
    'import/no-unresolved': ['off'],
    /*
     * For the most part of our code, we always know what files we are importing.
     * Removing this won't hurt a lot but definitely will make our code much more cleaner.
     */
    'import/extensions': ['off'],
    /*
     * Suppress errors for missing 'import React' in files.
     * React version detect needs to be configured along side with this.
     */
    'react/react-in-jsx-scope': 'off',
    /*
     * This is an opinionated rule. Prettier should handle reordering of imports for better dev experience.
     */
    'import/order': 'off',
    /*
     * We expect react to have .ts or .tsx extension.
     * Setting this overrides .js or .jsx rule extension.
     */
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    /*
     * We are just basically overriding the default setting which was set to `function-declaration`.
     * For this rule, only arrow functions for named components.
     * This enforces code consistency type of function components.
     */
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    /*
     * Writing return every function is just an extra work.
     * Setting return type to void is much more readable.
     */
    'consistent-return': 'off',
    /*
     * Temporary Disabled. These are rules I agree with.
     */
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'arrow-body-style': 'off',
    'react/button-has-type': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'object-shorthand': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'array-callback-return': 'off',
    'no-else-return': 'off',
    'react/jsx-boolean-value': 'off',
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/newline-after-import': 'off',
  },
  settings: {
    react: {
      /*
       * Tells eslint-plugin-react to automatically detect the version of React to use.
       */
      version: 'detect',
    },
  },
};

module.exports = eslintSetting;
