---
order: 1
title: 水平方向的步骤条
---

````jsx
/* eslint global-require: 0 */
import { Steps, WingBlank, WhiteSpace, Icon } from 'antd-mobile';

const Step = Steps.Step;

const steps = [{
  title: '已完成',
  description: '这里是信息的描述',
}, {
  title: '进行中',
  description: '这里是信息的描述',
}, {
  title: '待运行',
  description: '这里是信息的描述',
}].map((s, i) => <Step key={i} title={s.title} description={s.description} />);

ReactDOM.render(
  <div className="stepsExample">
    <WhiteSpace mode={20} />
    <WingBlank mode={20}>
      <Steps current={1} direction="horizontal" size="small">{steps}</Steps>
      <Steps current={1} direction="horizontal">{steps}</Steps>
      <WhiteSpace mode={20} />
      <Steps direction="horizontal">
        <Step status="finish" title="步骤1" icon={<Icon type={require('./pay-circle.svg')} />} />
        <Step status="process" title="步骤2" icon={<Icon type={require('./pay-circle.svg')} />} />
        <Step status="error" title="步骤3" icon={<Icon type={require('./pay-circle.svg')} />} />
      </Steps>
      <WhiteSpace mode={20} />
      <Steps direction="horizontal">
        <Step title="步骤1" icon={<Icon type={require('./pay-circle.svg')} />} />
        <Step status="error" title="步骤2" icon={<Icon type={require('./pay-circle.svg')} />} />
        <Step title="步骤3" icon={<Icon type={require('./pay-circle.svg')} />} />
      </Steps>
    </WingBlank>
  </div>
, mountNode);
````
