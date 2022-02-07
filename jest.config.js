module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  modulePathIgnorePatterns: [],
  moduleDirectories: ['node_modules', 'src/tests'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest/dist',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/tests/mocks/style-mock.js',
    '^antd-mobile$': '<rootDir>/src/index.ts',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!**/demos/**',
    '!**/tests/**',
  ],
}
