---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

上下留白 ```<WhiteSpace size='md' />```


````jsx
import { WhiteSpace } from 'antd-mobile';

const PlaceHolder = props => (
  <div style={{
    backgroundColor: '#ebebef',
    color: '#bbb',
    textAlign: 'center',
    height: '0.6rem',
    lineHeight: '0.6rem',
    width: '100%',
  }} {...props}
  >Block</div>
);

const WhiteSpaceExample = () => (
  <div>
    <WhiteSpace size="xs" />
    <PlaceHolder />

    <WhiteSpace size="sm" />
    <PlaceHolder />

    <WhiteSpace />
    <PlaceHolder />

    <WhiteSpace size="lg" />
    <PlaceHolder />

    <WhiteSpace size="xl" />
    <PlaceHolder />
  </div>
);

ReactDOM.render(<WhiteSpaceExample />, mountNode);
````
