---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

Basic slider. When `disabled` is `true`, the slider will not be interactable

````jsx
/* eslint arrow-body-style: 0 */
import { Slider, WingBlank, WhiteSpace } from 'antd-mobile';

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
          <p className="sub-title">Slider</p>
          <Slider
            style={{ marginLeft: 30, marginRight: 30 }}
            defaultValue={26}
            min={0}
            max={30}
            onChange={this.log('change')}
            onAfterChange={this.log('afterChange')}
          />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="sub-title">Disabled slider</p>
          <Slider
            style={{ marginLeft: 30, marginRight: 30 }}
            defaultValue={26}
            min={0}
            max={30}
            disabled
            onChange={this.log('change')}
            onAfterChange={this.log('afterChange')}
          />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="sub-title">Slider with customized color</p>
          <Slider
            style={{ marginLeft: 30, marginRight: 30 }}
            defaultValue={26}
            min={0}
            max={30}
            trackStyle={{
              backgroundColor: 'red',
              height: '5px',
            }}
            railStyle={{
              backgroundColor: 'blue',
              height: '5px',
            }}
            handleStyle={{
              borderColor: 'blue',
              height: '14px',
              width: '14px',
              marginLeft: '-7px',
              marginTop: '-4.5px',
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
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
  margin: 0;
}
````
