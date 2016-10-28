const commonConfig = require('./bisheng.common.config');
const config = require('./mobile/');

const indexDemos = config.indexDemos;

module.exports = Object.assign({}, commonConfig, {
  port: 8002,
  source: [
    './components',
  ],
  output: './_site/kitchen-sink',
  root: '/kitchen-sink/',
  entryName: 'kitchen-sink',
  theme: './site/mobile',
  htmlTemplate: './site/mobile/static/template.html',
  pick: {
    components: commonConfig.pick.components,
    /* eslint-disable consistent-return */
    indexDemos(markdownData) {
      const paths = markdownData.meta.filename.split('/');
      // add demos to index page, e.g. "components/drawer/demo/basic.md"
      if (paths[1] && indexDemos.indexOf(paths[1]) > -1 && paths[2] && paths[2] === 'demo') {
        return {
          component: paths[1],
          meta: markdownData.meta,
        };
      }
    },
  },
  plugins: [
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-antd',
  ],
  doraConfig: {
    verbose: true,
    plugins: ['dora-plugin-upload'],
  },
});
