---
order: 0
title: 基本
---

````jsx
import { Icon } from 'antd-mobile';

const icons = ['search'];

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
