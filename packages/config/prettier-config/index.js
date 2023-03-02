module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  bracketSameLine: true,
  endOfLine: 'lf',
  /*
   * importOrder is an extension of @trivago/prettier-plugin-sort-imports package
   */
  importOrder: [
    'react(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/components/(.*)$',
    '^@/context/(.*)$',
    '^@/data/(.*)$',
    '^@/interfaces/(.*)$',
    '^@/pages/(.*)$',
    '^@/styles/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  jsxSingleQuote: true,
  parser: 'typescript',
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  printWidth: 120,
  proseWrap: 'never',
  semi: false,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
}
