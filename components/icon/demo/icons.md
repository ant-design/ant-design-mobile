---
order: 0
title: 基本
---

````jsx
import { Icon } from 'antd-mobile';

const icons = ['bars', 'bill', 'chat', 'chats', 'check', 'checkbox', 'comment', 'complain', 'complaint', 'complaints', 'cross', 'delete', 'delete-o', 'down', 'edit', 'ellipsis', 'email', 'eye', 'font', 'group', 'groupx', 'help', 'like', 'link', 'loading', 'lock', 'environment-o', 'money', 'minus-circle', 'ownset', 'plus', 'reload', 'clock-circle', 'frown-o', 'frown', 'scan', 'search', 'setting', 'share', 'star-o', 'titlebar', 'team', 'user', 'trips', 'world'];

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
