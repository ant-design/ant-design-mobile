---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

```<WingBlank size='md'>...</WingBlank>```

````jsx
import { WingBlank, WhiteSpace } from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
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

````css
.placeholder {
  background-color: #ebebef;
  color: #bbb;
  text-align: center;
  height: 30px;
  line-height: 30px;
  width: 100%;
}
````
