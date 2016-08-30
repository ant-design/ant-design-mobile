---
order: 1
title: 验证成功
---

````jsx
import { Result } from 'antd-mobile';

const ResultExample = () => (
  <Result
    imgUrl="https://zos.alipayobjects.com/rmsportal/hbTlcWTgMzkBEiU.png"
    title="验证成功"
    message="所提交内容已成功完成验证"
  />
);

ReactDOM.render(<ResultExample />, mountNode);
````
