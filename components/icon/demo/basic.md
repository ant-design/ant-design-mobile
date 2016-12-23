---
order: 0
title: 基本
---


````jsx
import { Icon } from 'antd-mobile';

const icons = [
  'check', 'check-circle', 'check-circle-o',
  'cross', 'cross-circle', 'cross-circle-o',
];

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
      <div style={{ padding: '0.3rem' }}>更多图标查看 pc demo</div>
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
