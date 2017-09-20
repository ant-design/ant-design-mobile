module.exports = {
  secret: 'mXvdTx0LJjKDCb2Wqsq5jKpiMEvk2SL1ocVESHCfn5iHb4RWOB+34ihM2e+Rc6SZssxX1vQ041Q2OIg+j6uy7/mrTp/TvDOqORHzLGtLnSA=',
  fileList: [
    {
      template: [
        './_site/index.html',
        './_site/index-cn.html',
        './_site/changelog.html',
        './_site/changelog-cn.html',
        './_site/changelog-cn-cn.html',
        './_site/404.html',
      ],
      data: [
        {
          regex: /"\/index.css"/g,
          file: './_site/index.css',
          template: '"{url}"',
        },
        {
          regex: /"\/index.js"/g,
          file: './_site/index.js',
          template: '"{url}"',
        },
        {
          regex: /"\/common.js"/g,
          file: './_site/common.js',
          template: '"{url}"',
        },
      ],
      options: {
        mode: 'public',
      },
    },
    {
      template: [
        './_site/kitchen-sink/index.html',
        './_site/kitchen-sink/404.html',
      ],
      data: [
        {
          regex: '/kitchen-sink/kitchen-sink.css',
          file: './_site/kitchen-sink/kitchen-sink.css',
        },
        {
          regex: '/kitchen-sink/common.js',
          file: './_site/kitchen-sink/common.js',
        },
        {
          regex: '/kitchen-sink/kitchen-sink.js',
          file: './_site/kitchen-sink/kitchen-sink.js',
        },
      ],
      options: {
        mode: 'public',
      },
    },
  ],
};
