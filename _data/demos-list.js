const React  = require("react");
const ReactDOM = require("react-dom");
module.exports = {
  'components/article/index.md': [
    require('../components/article/demo/basic.md'),
  ],
  'components/button/index.md': [
    require('../components/button/demo/basic.md'),
    require('../components/button/demo/size.md'),
  ],
  'components/captcha-item/index.md': [
    require('../components/captcha-item/demo/basic.md'),
  ],
  'components/card/index.md': [
    require('../components/card/demo/basic.md'),
  ],
  'components/checkbox-item/index.md': [
    require('../components/checkbox-item/demo/basic.md'),
  ],
  'components/flex/index.md': [
    require('../components/flex/demo/align.md'),
    require('../components/flex/demo/basic.md'),
  ],
  'components/input-item/index.md': [
    require('../components/input-item/demo/addmember.md'),
    require('../components/input-item/demo/addmember2.md'),
    require('../components/input-item/demo/basic.md'),
  ],
  'components/list/index.md': [
    require('../components/list/demo/basic.md'),
    require('../components/list/demo/basic2.md'),
    require('../components/list/demo/memberdetail.md'),
    require('../components/list/demo/twoline.md'),
  ],
  'components/list-date-picker/index.md': [
    require('../components/list-date-picker/demo/basic.md'),
  ],
  'components/list-picker/index.md': [
    require('../components/list-picker/demo/basic.md'),
  ],
  'components/list-selector/index.md': [
    require('../components/list-selector/demo/basic.md'),
  ],
  'components/message/index.md': [
    require('../components/message/demo/basic.md'),
  ],
  'components/modal/index.md': [
    require('../components/modal/demo/basic.md'),
  ],
  'components/page-result/index.md': [
    require('../components/page-result/demo/basic.md'),
  ],
  'components/process/index.md': [
    require('../components/process/demo/basic.md'),
  ],
  'components/result/index.md': [
    require('../components/result/demo/basic.md'),
  ],
  'components/search-bar/index.md': [
    require('../components/search-bar/demo/basic.md'),
  ],
  'components/segmented-control/index.md': [
    require('../components/segmented-control/demo/basic.md'),
  ],
  'components/select-item/index.md': [
    require('../components/select-item/demo/basic.md'),
  ],
  'components/switch-item/index.md': [
    require('../components/switch-item/demo/basic.md'),
  ],
  'components/tab/index.md': [
    require('../components/tab/demo/basic.md'),
  ],
  'components/textarea-item/index.md': [
    require('../components/textarea-item/demo/basic.md'),
  ],
  'components/toast/index.md': [
    require('../components/toast/demo/basic.md'),
    require('../components/toast/demo/fail.md'),
    require('../components/toast/demo/loading.md'),
    require('../components/toast/demo/network.md'),
    require('../components/toast/demo/success.md'),
  ],
  'components/top-notice/index.md': [
    require('../components/top-notice/demo/basic.md'),
  ],
  'components/white-space/index.md': [
    require('../components/white-space/demo/basic.md'),
  ],
  'components/wing-blank/index.md': [
    require('../components/wing-blank/demo/basic.md'),
  ],
};
Object.keys(module.exports).map((key) => module.exports[key])
  .forEach((demos) => {
    demos.forEach((demo) => {
      if (typeof demo.preview !== "function") return;
      demo.preview = demo.preview(React, ReactDOM);
    });
  });