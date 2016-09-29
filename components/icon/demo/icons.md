---
order: 0
title: 基本
---

````jsx
import { Icon } from 'antd-mobile';

const icons = ['adduser', 'alipay-o', 'alipay', 'bars', 'bill', 'chat', 'chats', 'check', 'checkbox', 'clock-circle', 'comment', 'complain', 'complaint', 'complaints', 'delete', 'down', 'edit', 'elipsis-circle', 'elipsis', 'email', 'error', 'eye', 'font', 'friends-o', 'friends', 'frown', 'frown-o', 'group', 'groupx', 'help', 'keep', 'koubei-o', 'koubei', 'like', 'link', 'loading', 'lock', 'map', 'minus-circle', 'money', 'ownset', 'pay-circle-o', 'pay-circle', 'plus', 'refresh', 'scan', 'search', 'setting', 'setting-sm', 'share', 'team', 'titlebar', 'trips', 'user', 'world'];

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
