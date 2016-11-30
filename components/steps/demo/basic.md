---
order: 0
title: 步骤条
---


````jsx
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';

const Step = Steps.Step;
const Icon = ({ type }) => <span className={`anticon anticon-${type}`} />;

ReactDOM.render(
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Steps size="small" current={1}>
      <Step title="已完成" description="这里是信息的描述" />
      <Step title="进行中" description="这里是信息的描述" />
      <Step title="待运行" description="这里是信息的描述" />
    </Steps>

    <WhiteSpace size="lg" />
    <Steps size="small">
      <Step status="process" title="进行中" description="这里是信息的描述" />
      <Step status="error" className="aa" title="出错" description="这里是信息的描述" />
      <Step title="待运行" description="这里是信息的描述" />
    </Steps>

    <WhiteSpace size="lg" />
    <Steps>
      <Step status="finish" title="步骤1" icon="pay-circle-o" />
      <Step status="process" title="步骤2" icon="pay-circle" />
      <Step status="error" title="步骤3" icon="pay-circle" />
    </Steps>

    <WhiteSpace size="lg" />
    <Steps current={1}>
      <Step title="步骤1" icon="pay-circle" description="这里是信息的描述" />
      <Step title="步骤2" icon="pay-circle" description="这里是信息的描述" />
      <Step title="步骤3" icon="pay-circle" description="这里是信息的描述" />
    </Steps>

    <WhiteSpace size="lg" />
    <Steps current={1}>
      <Step title="步骤1" icon={<Icon type="pay-circle" />} />
      <Step title="步骤2" icon="pay-circle" />
      <Step title="步骤3" status="error" icon="pay-circle" />
      <Step title="步骤4" icon="pay-circle" />
    </Steps>
  </WingBlank>
, mountNode);
````
