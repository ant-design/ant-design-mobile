---
order: 0
title: 基本
---

基本功能展示


````jsx
import { Progress } from 'antd-mobile';

const MyProgress = React.createClass({
  render() {
    return (
      <div className="progress-container">
        <Progress percent={30} position="fixed" />
        <div style={{ height: 36 }} />
        <Progress percent={40} position="normal" unfilled="hide" />
        <div className="show-info">
          <div className="progress"><Progress percent={50} position="normal" /></div>
          <div>50%</div>
        </div>
      </div>
    );
  },
});
ReactDOM.render(<MyProgress />, mountNode);
````
````css
.show-info {
  margin-top: 36px;
  display: flex;
  align-items: center;
}
.show-info .progress {
  margin-right: 10px;
  width: 100%;
}
````
