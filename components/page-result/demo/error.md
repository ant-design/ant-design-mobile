---
order: 0
title: 出错
---

````jsx
import { PageResult } from 'antd-mobile';

const PageResultExample = () => (
  <PageResult
    imgUrl="https://os.alipayobjects.com/rmsportal/SgCjcxAQTmmNUWi.png"
    title="加载出错"
    buttonTxt="重新加载"
    buttonClick={() => alert('点击了按钮')}
  />
);

ReactDOM.render(<PageResultExample />, mountNode);
````
