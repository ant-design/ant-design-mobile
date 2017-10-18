---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

```<WingBlank size='md'>...</WingBlank>```

````jsx
import { WingBlank, WhiteSpace } from 'antd-mobile';

const PlaceHolder = props => (
  <div
    style={{
      backgroundColor: '#ebebef',
      color: '#bbb',
      textAlign: 'center',
      height: '30px',
      lineHeight: '30px',
      width: '100%',
    }}
    {...props}
  >Block</div>
);

const WingBlankExample = () => (
  <div style={{ padding: '15px 0' }}>
    <WingBlank><PlaceHolder /></WingBlank>

    <WhiteSpace size="lg" />
    <WingBlank size="md"><PlaceHolder /></WingBlank>

    <WhiteSpace size="lg" />
    <WingBlank size="sm"><PlaceHolder /></WingBlank>
  </div>
);

ReactDOM.render(<WingBlankExample />, mountNode);
````
