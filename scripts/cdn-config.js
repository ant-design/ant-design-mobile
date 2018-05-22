/**
 * 此脚本作用：把 静态资源(js/css) 上传到 alipay cdn 上，加速页面显示。
 * 需要配合 tnpm 的 @alipay/cdn-tools 工具，在 `npm run site` 命令构建完网站后使用。
 *
 * 由于有 安全风险，开源版本去掉此功能。可咨询作者 @扬远/@zhang740
 */

const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, '../');
const baseDir = path.join(projectDir, '_site');

// PC Pages
const pcFL = [];
let dir = `${baseDir}`;
fs.readdirSync(dir)
  .filter(file => path.parse(file).ext === '.html')
  .forEach((doc) => {
    pcFL.push(path.join(dir, doc));
  });

dir = `${baseDir}/docs/pattern`;
fs.readdirSync(dir)
  .filter(file => path.parse(file).ext === '.html')
  .forEach((doc) => {
    pcFL.push(path.join(dir, doc));
  });

dir = `${baseDir}/docs/react`;
fs.readdirSync(dir)
  .filter(file => path.parse(file).ext === '.html')
  .forEach((doc) => {
    pcFL.push(path.join(dir, doc));
  });

dir = `${baseDir}/components`;
fs.readdirSync(dir)
  .filter(file => path.parse(file).ext === '.html')
  .forEach((doc) => {
    pcFL.push(path.join(dir, doc));
  });

// Mobile Pages
const mobileFL = [];
dir = `${baseDir}/kitchen-sink`;
fs.readdirSync(dir)
  .filter(file => path.parse(file).ext === '.html')
  .forEach((doc) => {
    mobileFL.push(path.join(dir, doc));
  });

dir = `${baseDir}/kitchen-sink/components`;
fs.readdirSync(dir)
  .filter(file => path.parse(file).ext === '.html')
  .forEach((doc) => {
    mobileFL.push(path.join(dir, doc));
  });

module.exports = {
  cwd: projectDir,
  secret: '5E+3rBBn4Rw+PeBAxefHUC+DjxgoNzMrk1KsUAmIjvK+YsZOXObcNcP30U0wuPCNil7nMh/R098L+60ekfw9+FkM35+dktEMIm+N4uek9fE=',
  fileList: [
    {
      template: pcFL,
      data: [
        {
          regex: /"\/index.css"/g,
          file: `${baseDir}/index.css`,
          template: '"{url}"',
        },
        {
          regex: /"\/index.js"/g,
          file: `${baseDir}/index.js`,
          template: '"{url}"',
        },
        {
          regex: /"\/common.js"/g,
          file: `${baseDir}/common.js`,
          template: '"{url}"',
        },
      ],
      options: {
        mode: 'public',
      },
    },
    {
      template: mobileFL,
      data: [
        {
          regex: '/kitchen-sink/kitchen-sink.css',
          file: `${baseDir}/kitchen-sink/kitchen-sink.css`,
        },
        {
          regex: '/kitchen-sink/common.js',
          file: `${baseDir}/kitchen-sink/common.js`,
        },
        {
          regex: '/kitchen-sink/kitchen-sink.js',
          file: `${baseDir}/kitchen-sink/kitchen-sink.js`,
        },
      ],
      options: {
        mode: 'public',
      },
    },
  ],
};
