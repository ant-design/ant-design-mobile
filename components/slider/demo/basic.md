---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

Basic slider. When `disabled` is `true`, the slider will not be interactable, you can use `createTooltip` to encapsulate
to simulate tooltip.

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
          <p className="title">Slider with ToolTip</p>
          <SliderWithTooltip defaultValue={26} min={0} max={30} onChange={this.log('change')} onAfterChange={this.log('afterChange')} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">Disabled Slider</p>
          <Slider defaultValue={26} min={0} max={30} disabled onChange={this.log('change')} onAfterChange={this.log('afterChange')} />
        </WingBlank>
        <WingBlank size="lg">
          <p className="title">Slider With Customized Color</p>
          <Slider
            defaultValue={26}
            min={0}
            max={30}
            trackStyle={{
              backgroundColor: 'red',
              height: '0.1rem',
            }}
            railStyle={{
              backgroundColor: 'blue',
              height: '0.1rem',
            }}
            handleStyle={{
              borderColor: 'blue',
              height: '0.28rem',
              width: '0.28rem',
              marginLeft: '-0.14rem',
              marginTop: '-0.09rem',
              backgroundColor: 'blue',
            }}
          />
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
