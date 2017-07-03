const libDir = process.env.LIB_DIR;

const transformIgnorePatterns = [
  '/dist/',
];

if (libDir !== 'es') {
  transformIgnorePatterns.push('/node_modules/');
}

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
    '\\.tsx?$': './node_modules/typescript-babel-jest',
    '\\.js$': './node_modules/babel-jest',
    '\\.md$': './node_modules/antd-demo-jest',
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
