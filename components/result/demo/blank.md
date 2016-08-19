---
order: 3
title: 空白页
---

````jsx
import { Result } from 'antd-mobile';

const ResultExample = () => (
  <Result
    imgUrl="https://os.alipayobjects.com/rmsportal/dlMevdYPbXUwgCQ.png"
    title="空白页"
    brief="可各业务自定义文案"
    buttonTxt="重新加载"
    buttonClick={() => alert('点击了按钮')}
  />
);

ReactDOM.render(<ResultExample />, mountNode);
````
