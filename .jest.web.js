const libDir = process.env.LIB_DIR;

const transformIgnorePatterns = [
  '/dist/',
  'node_modules\/[^/]+?\/(?!es\/)', // Ignore modules without es dir
];

module.exports = {
  moduleFileExtensions: [
    'web.tsx',
    'web.js',
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
    '\\.svg$': '<rootDir>/tests/imageStub.js',
  },
  testRegex: libDir === 'dist' ? 'demo\\.test\\.web\\.js$' : '.*\\.test\\.web\\.js$',
  collectCoverageFrom: [
    'components/**/*.web.{ts,tsx}',
    '!components/*/style/index.tsx',
  ],
  transformIgnorePatterns,
  testEnvironment: 'jsdom',
};
