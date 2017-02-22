---
order: 0
title: 步骤条
---


````jsx
/* eslint global-require: 0 */
import { Steps, WingBlank, WhiteSpace, Icon } from 'antd-mobile';

const Step = Steps.Step;

ReactDOM.render(
  <WingBlank size="lg">
    <div className="sub-title">小尺寸</div>
    <WhiteSpace />
    <Steps size="small" current={1}>
      <Step title="已完成" description="这里是信息的描述" />
      <Step title="进行中" description="这里是信息的描述" />
      <Step title="待运行" description="这里是信息的描述" />
    </Steps>
    <div className="sub-title">小尺寸, 单行文字流程</div>
    <WhiteSpace />
    <Steps size="small" current={1}>
      <Step title="已完成" />
      <Step title="进行中" />
      <Step title="待运行" />
    </Steps>
    <div className="sub-title">正常尺寸</div>
    <WhiteSpace size="lg" />
    <Steps>
      <Step status="process" title="已完成" description="这里是信息的描述" />
      <Step status="error" title="出错" description="这里是信息的描述" />
      <Step title="待运行" description="这里是信息的描述" />
    </Steps>

    <div className="sub-title">自定义 status </div>
    <WhiteSpace size="lg" />
    <Steps>
      <Step status="finish" title="步骤1" icon={<Icon type={require('./pay-circle.svg')} />} />
      <Step status="process" title="步骤2" icon={<Icon type={require('./pay-circle.svg')} />} />
      <Step status="error" title="步骤3" icon={<Icon type={require('./pay-circle.svg')} />} />
    </Steps>

    <div className="sub-title">自定义 icon </div>
    <WhiteSpace size="lg" />
    <Steps current={1}>
      <Step title="步骤1" icon={<Icon type={require('./pay-circle.svg')} />} description="这里是信息的描述" />
      <Step title="步骤2" icon={<Icon type={require('./pay-circle.svg')} />} description="这里是信息的描述" />
      <Step title="步骤3" icon={<Icon type={require('./pay-circle.svg')} />} description="这里是信息的描述" />
    </Steps>

    <div className="sub-title">多 steps </div>
    <WhiteSpace size="lg" />
    <Steps current={1}>
      <Step title="步骤1" icon={<Icon type={require('./pay-circle.svg')} />} />
      <Step title="步骤2" icon={<Icon type={require('./pay-circle.svg')} />} />
      <Step title="步骤3" status="error" icon={<Icon type={require('./pay-circle.svg')} />} />
      <Step title="步骤4" icon={<Icon type={require('./pay-circle.svg')} />} />
    </Steps>
  </WingBlank>
, mountNode);
````
