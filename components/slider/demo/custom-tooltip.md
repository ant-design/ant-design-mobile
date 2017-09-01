---
order: 2
title:
  zh-CN: 自定义滑动反馈
  en-US: 'Custom slider handle'
---


可以利用 [HOC](https://facebook.github.io/react/docs/higher-order-components.html) 对 `Slider` 进行封装以自定义 `Tooltip`


````jsx
/* eslint arrow-body-style: 0 */
import { Slider, WingBlank, WhiteSpace } from 'antd-mobile';

const createCustomTooltip = (Component) => {
  return class ComponentWrapper extends React.Component {
    handleWithTooltip = ({ value, dragging, index, className, vertical, offset, ...restProps }) => {
      const style = vertical ? { bottom: `${offset}%` } : { left: `${offset}%` };
      const tipStyle = { textAlign: 'center' };
      return (
        <div key={index}>
          <div {...restProps} className={className} style={style} />
          <div style={tipStyle}>{dragging && `拖动到了${value}` }</div>
        </div>
      );
    }
    render() {
      return <Component {...this.props} handle={this.handleWithTooltip} />;
    }
  };
};

const SliderWithCustomTooltip = createCustomTooltip(Slider);

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
          <p className="title">Slider with Customized ToolTip</p>
          <SliderWithCustomTooltip defaultValue={26} min={0} max={30} onChange={this.log('change')} onAfterChange={this.log('afterChange')} />
        </WingBlank>
        <WhiteSpace size="lg" />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````

````css
.demo-preview-item .am-slider-wrapper {
  margin-bottom: 15px;
}
.demo-preview-item .am-slider-example {
  overflow: hidden;
}
.am-wingblank.am-wingblank-lg {
  margin-bottom: 30px;
}
.demo-preview-item .am-slider-wrapper:last-child {
  margin-bottom: 10px;
}
````
