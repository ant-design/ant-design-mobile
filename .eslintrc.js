module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': 'tsconfig.json',
    'sourceType': 'module',
  },
  'plugins': ['@typescript-eslint'],
  'rules': {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/camelcase': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'no-case-declarations': 'off',
    'no-prototype-builtins': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-inner-declarations': 'off',
    'react/no-unescaped-entities': 'off',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],
    // 下面的是临时规则
    'react/display-name': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      'files': ['**/demos/**/*'],
      'rules': {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
}
