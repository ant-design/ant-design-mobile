---
order: 2
title: 支付失败
---

````jsx
import { Result } from 'antd-mobile';

const ResultExample = () => (
  <Result
    imgUrl="https://zos.alipayobjects.com/rmsportal/LUIUWjyMDWctQTf.png"
    title="支付失败"
    message="所选银行卡余额不足"
    buttonText="点击重试"
    buttonType="primary"
    buttonClick={() => alert('点击了按钮')}
  />
);

ReactDOM.render(<ResultExample />, mountNode);
````
