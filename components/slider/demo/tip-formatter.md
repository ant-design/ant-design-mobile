---
order: 3
title: 自定义提示
---

使用 `tipFormatter` 可以格式化 `Tooltip` 的内容，设置 `tipFormatter={null}`，则隐藏 `Tooltip`。



````jsx
import { Slider, WhiteSpace, WingBlank } from 'antd-mobile';

function formatter(value) {
  return `${value}%`;
}

const App = React.createClass({
  render() {
    return (
      <div className="am-slider-example">
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <div className="sub-title">格式化Tooltip</div>
          <Slider tipFormatter={formatter} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <div className="sub-title">隐藏Tooltip</div>
          <Slider tipFormatter={null} />
        </WingBlank>
        <WhiteSpace size="lg" />
      </div>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````
