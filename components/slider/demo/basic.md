---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---


基本滑动条。当 `disabled` 为 `true` 时，滑块处于不可用状态。可以使用`createTooltip`来进行封装以产生 ToolTip 功能。


````jsx
/* eslint arrow-body-style: 0*/
import { Slider, WingBlank, WhiteSpace, createTooltip } from 'antd-mobile';

const SliderWithTooltip = createTooltip(Slider);

class App extends React.Component {
  log = (name) => {
    return (value) => {
      console.log(`${name}: ${value}`);
    };
  }
  render() {
    return (
      <div className="am-slider-example">
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">Slider</p>
          <Slider defaultValue={26} min={0} max={30} onChange={this.log('change')} onAfterChange={this.log('afterChange')} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">Slider 带 ToolTip</p>
          <SliderWithTooltip defaultValue={26} min={0} max={30} onChange={this.log('change')} onAfterChange={this.log('afterChange')} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">Slider 禁用</p>
          <Slider defaultValue={26} min={0} max={30} disabled onChange={this.log('change')} onAfterChange={this.log('afterChange')} />
        </WingBlank>
      </div>
    );
  }
}

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
