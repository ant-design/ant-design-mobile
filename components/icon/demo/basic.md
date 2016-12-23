---
order: 0
title: 基本
---


````jsx
import { Icon } from 'antd-mobile';

const icons = [
  'check', 'check-circle', 'check-circle-o',
  'cross', 'cross-circle', 'cross-circle-o',
  'up', 'down', 'left', 'right', 'ellipsis', 'loading', 'koubei-o', 'koubei',
];
/* eslint global-require: 0 */

class Demo extends React.Component {
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
      <div><span>自定义图标:</span> <Icon type={require('./reload.svg')} /></div>
    </div>);
  }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.icon-item-wrap {
  width: 1.5rem;
  text-align: center;
  display: inline-block;
  margin-bottom: 0.24rem;
}
.icon-item {
	display: block;
}
````
