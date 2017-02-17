---
order: 0
title: 基本使用
---


基本滑动条。当 `disabled` 为 `true` 时，滑块处于不可用状态。



````jsx
import { Range, WingBlank, WhiteSpace, createTooltip } from 'antd-mobile';

const RangeWithTooltip = createTooltip(Range);
const App = React.createClass({
  log(name) {
    return (value) => {
      console.log(`${name}: ${value}`);
    };
  },
  render() {
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
          <Range min={0} max={20} defaultValue={[3, 10]} onChange={this.log('change')} onAfterChange={this.log('afterChange')} disabled/>
        </WingBlank>
      </div>
    );
  },
});
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
