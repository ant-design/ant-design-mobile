---
order: 2
title: 网站通用图标
---

````jsx
const icons = ['lock', 'unlock', 'android', 'apple', 'area-chart', 'bar-chart', 'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code', 'copy', 'credit-card', 'delete', 'desktop', 'download', 'edit', 'ellipsis', 'file', 'file-text', 'file-unknown', 'folder', 'folder-open', 'github', 'hdd', 'frown', 'meh', 'inbox', 'laptop', 'appstore-o', 'appstore', 'line-chart', 'link', 'logout', 'mail', 'menu-fold', 'menu-unfold', 'mobile', 'notification', 'paper-clip', 'picture', 'pie-chart', 'poweroff', 'reload', 'search', 'setting', 'share-alt', 'shopping-cart', 'smile', 'tablet', 'tag', 'tags', 'to-top', 'upload', 'user', 'video-camera', 'windows', 'ie', 'chrome', 'home', 'loading', 'smile-circle', 'meh-circle', 'frown-circle', 'tags-o', 'tag-o', 'cloud-upload-o', 'cloud-download-o', 'cloud-upload', 'cloud-o', 'star-o', 'star', 'heart-o', 'heart', 'environment', 'environment-o', 'eye', 'eye-o', 'camera', 'camera-o', 'aliwangwang', 'aliwangwang-o', 'save', 'team', 'solution', 'phone', 'filter', 'exception', 'export', 'customerservice', 'qrcode', 'scan', 'like', 'dislike', 'message', 'pay-circle', 'pay-circle-o', 'calculator'];

import { Icon, Flex } from 'antd-mobile';

let IconExample = React.createClass({
  render() {
    return (<div style={{ paddingTop: 16 }}>
      <Flex wrap="wrap">
        {
          icons.map((item, index) => (
            <span key={index} style={{ width: 100, height: 60, fontSize: 24, textAlign: 'center' }}>
              <Icon type={item} />
            </span>
          ))
        }
      </Flex>
    </div>);
  },
});

ReactDOM.render(<IconExample />, mountNode);
````
