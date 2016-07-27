---
order: 0
title: 基本
---


基本滑动条。当 `range` 为 `true` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。



```jsx

import { Slider, WingBlank, WhiteSpace } from 'antd-mobile';

let App = React.createClass({
  render() {
    return (
      <div className="am-slider-example">
        <WhiteSpace size={32} />
        <WingBlank size={20}>
          <p className="title">单模块</p>
          <Slider defaultValue={26} />
        </WingBlank>
        <WhiteSpace size={32} />
        <WingBlank size={20}>
          <p className="title">双模块</p>
          <WhiteSpace />
          <Slider range defaultValue={[20, 50]} />
        </WingBlank>
        <WhiteSpace size={32} />
        <WingBlank size={20}>
          <p className="title">不可用状态</p>
          <Slider range defaultValue={[20, 50]} disabled />
        </WingBlank>
        <WhiteSpace size={32} />
      </div>
    );
  },
});
ReactDOM.render(<App />, mountNode);
```

<style>
.code-box-demo .am-slider {
  margin-bottom: 80px;
}
.code-box-demo .am-slider-example .title {
  margin-bottom: 32px;
}
.code-box-demo .am-slider:last-child {
  margin-bottom: 20px;
}
</style>
