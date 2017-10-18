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
  secret: 'mXvdTx0LJjKDCb2Wqsq5jKpiMEvk2SL1ocVESHCfn5iHb4RWOB+34ihM2e+Rc6SZssxX1vQ041Q2OIg+j6uy7/mrTp/TvDOqORHzLGtLnSA=',
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
