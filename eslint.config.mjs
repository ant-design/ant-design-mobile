import { react } from 'eslint-config-ali'
import prettier from 'eslint-plugin-prettier/recommended'
import { globalIgnores } from 'eslint/config'

export default [
  ...react,
  prettier,
  {
    rules: {
      // Disable for now to not block CI. We will fix them one by one in future...
      'no-console': 'off',
      'no-nested-ternary': 'off',
      'no-template-curly-in-string': 'off',
      'react/display-name': 'off',
      'react/jsx-no-bind': 'off',
      'react/no-array-index-key': 'off',
      'react/no-unused-prop-types': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/no-shadow': 'off',
    },
  },
  globalIgnores(['.dumi/**/*', 'config/**/*', 'docs/**/*']),
]
