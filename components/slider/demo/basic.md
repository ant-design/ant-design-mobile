---
order: 0
title: 基本
---


基本滑动条。当 `disabled` 为 `true` 时，滑块处于不可用状态。



```jsx

import { Slider, WingBlank, WhiteSpace } from 'antd-mobile';

const App = React.createClass({
  render() {
    return (
      <div className="am-slider-example">
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">单模块</p>
          <Slider defaultValue={26} min={0} max={100} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">不可用状态</p>
          <Slider defaultValue={26} disabled />
        </WingBlank>
        <WhiteSpace size="lg" />
      </div>
    );
  },
});
ReactDOM.render(<App />, mountNode);
```

<style>
.demo-preview-item .am-slider-wrapper {
  margin-bottom: 30px;
}
.demo-preview-item .am-slider-example {
  overflow: hidden;
}
.am-wingblank.am-wingblank-lg {
  margin-bottom: 60px;
}
.demo-preview-item .am-slider-example .title {
  margin-bottom: 32px;
}
.demo-preview-item .am-slider-wrapper:last-child {
  margin-bottom: 20px;
}
</style>
