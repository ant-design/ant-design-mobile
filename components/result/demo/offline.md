---
order: 5
title: 断线
---

````jsx
import { Result } from 'antd-mobile';

const ResultExample = () => (
  <Result
    imgUrl="https://os.alipayobjects.com/rmsportal/XMUAssczvVftDHX.png"
    title="网络无法连接"
    brief="请查看网络连接或稍后重试"
    buttonText="刷新"
    buttonClick={() => alert('点击了按钮')}
  />
);

ReactDOM.render(<ResultExample />, mountNode);
````
