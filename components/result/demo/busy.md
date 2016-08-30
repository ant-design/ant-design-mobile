---
order: 3
title: 等待处理
---

````jsx
import { Result } from 'antd-mobile';

const ResultExample = () => (
  <Result
    imgUrl="https://zos.alipayobjects.com/rmsportal/gIGluyutXOpJmqx.png"
    title="等待处理"
    message="已提交申请，等待银行处理"
  />
);

ReactDOM.render(<ResultExample />, mountNode);
````
