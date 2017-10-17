---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---


Silder with range. When `disabled` is `true`, the slider will not be interactable

````jsx
/* eslint arrow-body-style: 0 */
import { Range, WingBlank, WhiteSpace } from 'antd-mobile';

const App = () => {
  const log = (name) => {
    return (value) => {
      console.log(`${name}: ${value}`);
    };
  };
  return (
    <div className="am-slider-example">
      <WhiteSpace size="lg" />
      <WingBlank size="lg">
        <p className="sub-title">Basic range</p>
        <Range
          style={{ marginLeft: 30, marginRight: 30 }}
          min={0}
          max={20}
          defaultValue={[3, 10]}
          onChange={log('change')}
          onAfterChange={log('afterChange')}
        />
      </WingBlank>
      <WhiteSpace size="lg" />
      <WingBlank size="lg">
        <p className="sub-title">Disabled range</p>
        <Range
          style={{ marginLeft: 30, marginRight: 30 }}
          min={0}
          max={20}
          defaultValue={[3, 10]}
          onChange={log('change')}
          onAfterChange={log('afterChange')}
          disabled
        />
      </WingBlank>
      <WhiteSpace size="lg" />
      <WingBlank size="lg">
        <p className="sub-title">Range with customized style</p>
        <Range
          style={{ marginLeft: 30, marginRight: 30 }}
          min={0}
          max={20}
          defaultValue={[3, 10]}
          onChange={log('change')}
          onAfterChange={log('afterChange')}
          trackStyle={[{ backgroundColor: 'red' }, { backgroundColor: 'green' }]}
          handleStyle={[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]}
          railStyle={{ backgroundColor: 'black' }}
        />
      </WingBlank>
    </div>
  );
};

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
