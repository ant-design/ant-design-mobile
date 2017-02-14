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
          <p className="title">格式化Tooltip</p>
          <Slider tipFormatter={formatter} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">隐藏Tooltip</p>
          <Slider tipFormatter={null} />
        </WingBlank>
        <WhiteSpace size="lg" />
      </div>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````
