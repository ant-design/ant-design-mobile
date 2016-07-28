---
order: 3
title: 空白页
---

````jsx
import { PageResult } from 'antd-mobile';

const PageResultExample = () => (
  <PageResult
    imgUrl="https://os.alipayobjects.com/rmsportal/dlMevdYPbXUwgCQ.png"
    title="空白页"
    brief="可各业务自定义文案"
    buttonTxt="重新加载"
    buttonClick={() => alert('点击了按钮')}
  />
);

ReactDOM.render(<PageResultExample />, mountNode);
````
