---
order: 1
title: 结果页面中的步骤条
---

结果页中的步骤条，根据业务设定步骤icon.

````jsx
/* eslint global-require: 0 */
import { Steps, WingBlank, WhiteSpace, Icon } from 'antd-mobile';

const Step = Steps.Step;

ReactDOM.render(
  <div className="stepsExample">
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <Steps>
        <Step status="finish" title="步骤1" icon={<Icon type={require('./pay-circle.svg')} />} />
        <Step status="process" title="步骤2" icon={<Icon type={require('./pay-circle.svg')} />} />
        <Step status="error" title="步骤3" icon={<Icon type={require('./pay-circle.svg')} />} />
      </Steps>
    </WingBlank>

    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <Steps current={1}>
        <Step title="步骤1" icon={<Icon type={require('./pay-circle.svg')} />} description="这里是信息的描述" />
        <Step title="步骤2" icon={<Icon type={require('./pay-circle.svg')} />} description="这里是信息的描述" />
        <Step title="步骤3" icon={<Icon type={require('./pay-circle.svg')} />} description="这里是信息的描述" />
      </Steps>
    </WingBlank>

    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <Steps current={1}>
        <Step title="步骤1" icon={<Icon type={require('./pay-circle.svg')} />} />
        <Step title="步骤2" icon={<Icon type={require('./pay-circle.svg')} />} />
        <Step title="步骤3" status="error" icon={<Icon type={require('./pay-circle.svg')} />} />
        <Step title="步骤4" icon={<Icon type={require('./pay-circle.svg')} />} />
      </Steps>
    </WingBlank>

  </div>
, mountNode);
````
