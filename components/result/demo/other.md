---
order: 6
title: 其他自定义样式
---

````jsx
import { Result } from 'antd-mobile';

const ResultExample = () => (
  <div className="other">
    <Result
      imgUrl="https://os.alipayobjects.com/rmsportal/MKXqtwNOLFmYmrY.png"
      title="内容为空"
      message="可各业务自定义文案"
      buttonText="重新尝试"
      buttonType="primary"
      buttonClick={() => alert('点击了按钮')}
    />
    <Result
      imgUrl="https://os.alipayobjects.com/rmsportal/hcEPreZxgZWxhVw.png"
      title="警示"
      message="可各业务自定义文案"
      buttonText="重新加载"
      buttonType="primary"
      buttonClick={() => alert('点击了按钮')}
    />
    <Result
      imgUrl="https://zos.alipayobjects.com/rmsportal/TCIJgoBIvJjfbqo.png"
      title="提示信息"
      message="辅助说明信息"
    />
    <Result
      imgUrl="https://os.alipayobjects.com/rmsportal/QGxGZRxaqMRKnjS.png"
      title="网络不给力"
      message="请查看网络连接或稍后重试"
      buttonText="重新尝试"
      buttonType="primary"
      buttonClick={() => alert('点击了按钮')}
    />
  </div>
);

ReactDOM.render(<ResultExample />, mountNode);
````

````css
.other .am-result {
  border-bottom: 8px solid #e9e9e9;
}
````
