---
order: 4
title: 操作失败
---

````jsx
import { Result } from 'antd-mobile';

const ResultExample = () => (
  <Result
    imgUrl="https://zos.alipayobjects.com/rmsportal/NRzOqylcxEstLGf.png"
    title="无法完成操作"
    message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
  />
);

ReactDOM.render(<ResultExample />, mountNode);
````
