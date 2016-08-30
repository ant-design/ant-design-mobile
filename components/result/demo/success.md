---
order: 0
title: 支付成功
---

````jsx
import { Result } from 'antd-mobile';

const ResultExample = () => (
  <Result
    imgUrl="https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png"
    title="支付成功"
    message={<div><div style={{ fontSize: '0.72rem', color: '#000', lineHeight: 1 }}>998.00</div><del>1098元</del></div>}
  />
);

ReactDOM.render(<ResultExample />, mountNode);
````
