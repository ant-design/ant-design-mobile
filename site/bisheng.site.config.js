const path = require('path');
const commonConfig = require('./bisheng.common.config');

function pickerGenerator(module) {
  const tester = new RegExp(`^docs/${module}`);
  /* eslint-disable consistent-return */
  return (markdownData) => {
    const filename = markdownData.meta.filename;
    if (tester.test(filename) && !/\.en-US\.md/.test(filename)) {
      return {
        meta: markdownData.meta,
      };
    }
  };
  /* eslint-enable consistent-return */
}

module.exports = Object.assign({}, commonConfig, {
  port: 8001,
  source: [
    './components',
    './docs',
    'CHANGELOG.md', // TODO: fix it in bisheng
  ],
  theme: './site/theme',
  htmlTemplate: path.join(__dirname, './theme/static/template.html'),
  pick: {
    components: commonConfig.pick.components,
    /* eslint-disable consistent-return */
    changelog(markdownData) {
      if (markdownData.meta.filename === 'CHANGELOG.md') {
        return {
          meta: markdownData.meta,
        };
      }
    },
    /* eslint-enable consistent-return */
    'docs/react': pickerGenerator('react'),
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2',
    'bisheng-plugin-antd',
  ],
  doraConfig: {
    verbose: true,
  },
  webpackConfig(config) {
    config = commonConfig.webpackConfig(config);
    return config;
  },
});
