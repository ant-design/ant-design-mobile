---
order: 5
title: 其他自定义样式
---

````jsx
import { PageResult } from 'antd-mobile';

const PageResultExample = () => (
  <div className="other">
    <PageResult
      imgUrl="https://os.alipayobjects.com/rmsportal/MKXqtwNOLFmYmrY.png"
      title="内容为空"
      brief="可各业务自定义文案"
      buttonTxt="重新尝试"
      buttonClick={() => alert('点击了按钮')}
    />
    <PageResult
      imgUrl="https://os.alipayobjects.com/rmsportal/hcEPreZxgZWxhVw.png"
      title="警示"
      brief="可各业务自定义文案"
      buttonTxt="重新加载"
      buttonClick={() => alert('点击了按钮')}
    />
    <PageResult
      imgUrl="https://os.alipayobjects.com/rmsportal/QGxGZRxaqMRKnjS.png"
      title="网络不给力"
      brief="请查看网络连接或稍后重试"
      buttonTxt="重新尝试"
      buttonClick={() => alert('点击了按钮')}
    />
  </div>
);

ReactDOM.render(<PageResultExample />, mountNode);
````

````css
.other .am-page-result {
  border-bottom: 8px solid #e9e9e9;
}
````
