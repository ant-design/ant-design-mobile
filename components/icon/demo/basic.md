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
    return (<div className="container">
      {
        icons.map(item => (
          <div key={item} className="icon-item-wrap">
            <Icon type={item} />
            <div className="icon-item">{item}</div>
          </div>
        ))
      }
      <div key="customIcon" className="icon-item-wrap">
        <Icon type={require('./reload.svg')} />
        <div className="icon-item">自定义图标</div>
      </div>
    </div>);
  }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.container {
  margin-top: 50px;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}
.icon-item-wrap {
  height: 1.5rem;
  flex: 0 0 33%;
  text-align: center;
}
````
