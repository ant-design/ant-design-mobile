const path = require('path');
const commonConfig = require('./bisheng.common.config');

const kitchenConfig = {
  port: 8002,
  source: {
    components: './components',
  },
  output: './_site/kitchen-sink',
  root: '/kitchen-sink/',
  entryName: 'kitchen-sink',
  theme: './site/kitchen/src',
  htmlTemplate: path.join(__dirname, './kitchen/src/static/template.html'),
  doraConfig: {
    verbose: true,
    plugins: ['dora-plugin-upload'],
  },
};

module.exports = Object.assign({}, commonConfig, kitchenConfig);
