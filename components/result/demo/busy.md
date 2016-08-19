---
order: 1
title: 系统繁忙
---

````jsx
import { Result } from 'antd-mobile';

const ResultExample = () => (
  <Result
    imgUrl="https://os.alipayobjects.com/rmsportal/awwrfcIKXAKwGyx.png"
    title="系统繁忙"
    buttonTxt="重新加载"
    buttonClick={() => alert('点击了按钮')}
  />
);

ReactDOM.render(<ResultExample />, mountNode);
````
