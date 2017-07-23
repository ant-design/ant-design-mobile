const libDir = process.env.LIB_DIR;

const transformPackages = [
  'react-native',
  'react-native-menu',
  'react-native-scrollable-tab-view',
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
  testRegex: libDir === 'dist' ? 'demo\\.test\\.js$' : '.*\\.test\\.js$',
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!components/**/demo/*.{ts,tsx}',
    '!components/**/*.web.{ts,tsx}',
    '!components/*/style/index.tsx',
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(${transformPackages.join('|')})/)`,
  ],
};
