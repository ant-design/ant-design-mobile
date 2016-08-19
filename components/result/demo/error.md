---
order: 0
title: 出错
---

````jsx
import { Result } from 'antd-mobile';

const ResultExample = () => (
  <Result
    imgUrl="https://os.alipayobjects.com/rmsportal/SgCjcxAQTmmNUWi.png"
    title="加载出错"
    buttonTxt="重新加载"
    buttonClick={() => alert('点击了按钮')}
  />
);

ReactDOM.render(<ResultExample />, mountNode);
````
