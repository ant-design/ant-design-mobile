---
order: 0
title: 页面中的步骤条
---

页面中简单的竖直方向的步骤条，`size=small`

````jsx
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';

const Step = Steps.Step;

ReactDOM.render(
  <div className="stepsExample">
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <Steps size="small" current={3}>
        <Step title="已完成" description="这里是信息的描述" />
        <Step title="进行中" description="这里是信息的描述" />
        <Step title="待运行" description="这里是信息的描述" />
      </Steps>
    </WingBlank>

    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <Steps size="small">
        <Step status="process" title="已完成" description="这里是信息的描述" />
        <Step status="error" title="出错" description="这里是信息的描述" />
        <Step title="待运行" description="这里是信息的描述" />
      </Steps>
    </WingBlank>
  </div>
, mountNode);
````
