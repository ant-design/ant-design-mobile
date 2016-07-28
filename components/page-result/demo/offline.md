---
order: 4
title: 断线
---

````jsx
import { PageResult } from 'antd-mobile';

const PageResultExample = () => (
  <PageResult
    imgUrl="https://os.alipayobjects.com/rmsportal/XMUAssczvVftDHX.png"
    title="网络无法连接"
    brief="请查看网络连接或稍后重试"
    buttonTxt="刷新"
    buttonClick={() => alert('点击了按钮')}
  />
);

ReactDOM.render(<PageResultExample />, mountNode);
````
