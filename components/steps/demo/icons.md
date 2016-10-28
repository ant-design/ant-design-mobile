---
order: 1
title: 结果页面中的步骤条
---

结果页中的步骤条，根据业务设定步骤icon.

````jsx
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';

const Step = Steps.Step;

ReactDOM.render(
  <div className="stepsExample">
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <Steps>
        <Step status="finish" title="步骤1" icon="pay-circle" />
        <Step status="process" title="步骤2" icon="pay-circle" />
        <Step status="error" title="步骤3" icon="pay-circle" />
      </Steps>
    </WingBlank>

    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <Steps current={1}>
        <Step title="步骤1" icon="pay-circle" description="这里是信息的描述" />
        <Step title="步骤2" icon="pay-circle" description="这里是信息的描述" />
        <Step title="步骤3" icon="pay-circle" description="这里是信息的描述" />
      </Steps>
    </WingBlank>

    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <Steps current={1}>
        <Step title="步骤1" icon="pay-circle" />
        <Step title="步骤2" icon="pay-circle" />
        <Step title="步骤3" status="error" icon="pay-circle" />
        <Step title="步骤4" icon="pay-circle" />
      </Steps>
    </WingBlank>

  </div>
, mountNode);
````
