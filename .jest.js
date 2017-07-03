const libDir = process.env.LIB_DIR;

const transformIgnorePatterns = [];

// if (libDir !== 'es') {
//   transformIgnorePatterns.push('/node_modules/');
// }

module.exports = {
  preset: 'react-native',
  setupFiles: [
    './tests/setup.js'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '_site',
    'site',
  ],
  transform: {
    '\\.tsx?$': './node_modules/antd-demo-jest/ts',
    '\\.js$': './node_modules/babel-jest',
    '\\.png': '<rootDir>/tests/imageStub.js',
  },
  testRegex: libDir === 'dist' ? 'demo\\.test\\.js$' : '.*\\.test\\.js$',
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!components/**/demo/*.{ts,tsx}',
    '!components/**/*.web.{ts,tsx}',
    '!components/*/style/index.tsx',
  ],
  transformIgnorePatterns,
};
