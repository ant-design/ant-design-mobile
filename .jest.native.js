const libDir = process.env.LIB_DIR;

const transformPackages = [
  'react-native',
  'react-native-menu',
  'react-native-tab-view',
  'react-native-collapsible',
  'react-native-swipeout',
  'react-native-camera-roll-picker',
]

module.exports = {
  preset: 'react-native',
  setupFiles: [
    './tests/setup.js'
  ],
  moduleFileExtensions: [
    'native.ts',
    'native.tsx',
    'native.js',
    'native.jsx',
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
    '\\.tsx?$': './node_modules/antd-tools/lib/jest/codePreprocessor',
    '\\.js$': './node_modules/antd-tools/lib/jest/codePreprocessor',
    '\\.png': '<rootDir>/tests/imageStub.js',
  },
  testRegex: libDir === 'dist' ? 'demo\\.test\\.native\\.js$' : '.*\\.test\\.native\\.js$',
  collectCoverageFrom: [
    'components/**/*.native.{ts,tsx}',
    '!components/*/style/*.{ts,tsx}',
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(${transformPackages.join('|')})/)`,
  ],
};
