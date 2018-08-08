const libDir = process.env.LIB_DIR;

const transformIgnorePatterns = [
  '/dist/',
  'node_modules\/[^/]+?\/(?!(es|node_modules)\/)', // Ignore modules without es dir
];

module.exports = {
  setupFiles: [
    'raf/polyfill',
    './tests/setup.js'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'md',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '_site',
    'site'
  ],
  transform: {
    '\\.tsx?$': './node_modules/antd-tools/lib/jest/codePreprocessor',
    '\\.js$': './node_modules/antd-tools/lib/jest/codePreprocessor',
    '\\.md$': './node_modules/antd-tools/lib/jest/demoPreprocessor',
  },
  testRegex: libDir === 'dist' ? 'demo\\.test\\.js$' : '.*\\.test\\.js$',
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!components/**/*.native.{ts,tsx}',
    '!components/*/style/*.{ts,tsx}',
  ],
  transformIgnorePatterns,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  reporters: [
    'default',
    'jest-spec-reporter'
  ],
};
