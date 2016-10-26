---
order: 0
title: 基本
---

````jsx
import { Icon } from 'antd-mobile';

const icons = ['adduser', 'alipay-o', 'alipay', 'bars', 'bill', 'chat', 'chats', 'check', 'check-circle-o', 'check-circle', 'clock-circle', 'comment', 'complain', 'complaint', 'complaints', 'cross', 'cross-circle', 'cross-circle-o', 'delete', 'down', 'edit', 'ellipsis-circle', 'ellipsis', 'eye', 'font', 'friends-o', 'friends', 'frown', 'frown-o', 'group', 'groupx', 'help', 'keep', 'koubei-o', 'koubei', 'left', 'like', 'link', 'loading', 'lock', 'mail', 'map', 'minus-circle', 'money', 'ownset', 'pay-circle-o', 'pay-circle', 'plus', 'qrcode', 'reload', 'right', 'scan', 'search', 'setting', 'setting-sm', 'share', 'team', 'titlebar', 'trips', 'user', 'world'];

class IconItems extends React.Component {
  render() {
    return (<div>
      {
        icons.map((item) => (
          <span key={item} className="icon-item-wrap">
            <Icon type={item} />
            <span className="icon-item">{item}</span>
          </span>
        ))
      }
    </div>);
  }
}

ReactDOM.render(<IconItems />, mountNode);
````

````css
.icon-item-wrap {
  width: 150px;
  text-align: center;
  display: inline-block;
  margin-bottom: 24px;
}
.icon-item {
	display: block;
}
````
