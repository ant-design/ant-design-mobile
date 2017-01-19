---
order: 1
title: 水平方向的步骤条
---

````__react
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
  <WingBlank mode={20} className="stepsExample">
    <WhiteSpace mode={20} />
    <Steps current={1} direction="horizontal" size="small">{steps}</Steps>
    <Steps current={1} direction="horizontal">{steps}</Steps>
    <WhiteSpace mode={20} />
    <Steps direction="horizontal">
      <Step title="步骤1" icon={<Icon type={require('./pay-circle.svg')} />} />
      <Step status="error" title="步骤2" icon={<Icon type={require('./pay-circle.svg')} />} />
      <Step title="步骤3" icon={<Icon type={require('./pay-circle.svg')} />} />
    </Steps>
    <WhiteSpace mode={20} />
    <Steps current={-1} direction="horizontal" size="small" className="timeline">
      <Step title="现在" description="立即买入" icon={<span className="fake-icon" />} />
      <Step title="11月3日" description="买入成功" icon={<span className="fake-icon" />} />
      <Step title="11月4日" description="收益到账" icon={<span className="fake-icon" />} />
    </Steps>
  </WingBlank>
, mountNode);
````
````css
.stepsExample .timeline.am-steps.am-steps-small
.am-steps-item.am-steps-custom
.am-steps-head-inner > .am-steps-icon {
  width: 0.16rem;
  height: 0.16rem;
  border-radius: 50%;
  background-color: #d9dff1;
}
.stepsExample .timeline.am-steps.am-steps-small .am-steps-tail {
  top: 0.06rem;
  padding: 0 0.16rem;
  background-color: transparent;
}
````
