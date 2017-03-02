---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---


区域选择滑动条。当 `disabled` 为 `true` 时，滑块处于不可用状态。可以使用`createTooltip`来进行封装以产生 ToolTip 功能。



````jsx
/* eslint arrow-body-style: 0*/
import { Range, WingBlank, WhiteSpace, createTooltip } from 'antd-mobile';

const RangeWithTooltip = createTooltip(Range);
const App = () => {
  this.log = (name) => {
    return (value) => {
      console.log(`${name}: ${value}`);
    };
  };
  return (
    <div className="am-slider-example">
      <WhiteSpace size="lg" />
      <WingBlank size="lg">
        <p className="title">Range, 基础使用</p>
        <Range min={0} max={20} defaultValue={[3, 10]} onChange={this.log('change')} onAfterChange={this.log('afterChange')} />
      </WingBlank>
      <WhiteSpace size="lg" />
      <WingBlank size="lg">
        <p className="title">Range, 带 Tooltip</p>
        <RangeWithTooltip min={0} max={20} defaultValue={[3, 10]} onChange={this.log('change')} onAfterChange={this.log('afterChange')} />
      </WingBlank>
      <WhiteSpace size="lg" />
      <WingBlank size="lg">
        <p className="title">Range, 禁用</p>
        <Range min={0} max={20} defaultValue={[3, 10]} onChange={this.log('change')} onAfterChange={this.log('afterChange')} disabled />
      </WingBlank>
    </div>
  );
};

ReactDOM.render(<App />, mountNode);
````

````css
.demo-preview-item .am-slider-wrapper {
  margin-bottom: 0.3rem;
}
.demo-preview-item .am-slider-example {
  overflow: hidden;
}
.am-wingblank.am-wingblank-lg {
  margin-bottom: 0.6rem;
}
.demo-preview-item .am-slider-wrapper:last-child {
  margin-bottom: 0.2rem;
}
````
