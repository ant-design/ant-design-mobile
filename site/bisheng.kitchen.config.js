const commonConfig = require('./bisheng.common.config');

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
  plugins: [
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-antd',
  ],
  doraConfig: {
    verbose: true,
    plugins: ['dora-plugin-upload'],
  },
});
