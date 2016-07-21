---
order: 2
title: 竖直方向的步骤条
---

简单的竖直方向的步骤条。


````jsx
import { Steps, WingBlank, WhiteSpace } from 'antm';
const Step = Steps.Step;

const steps = [{
  title: '已完成',
  description: '这里是信息的描述'
}, {
  title: '进行中',
  description: '这里是信息的描述'
}, {
  title: '待运行',
  description: '这里是信息的描述'
}, {
  title: '又一个待运行',
  description: '这里是信息的描述'
}].map((s, i) => <Step key={i} title={s.title} description={s.description} />);

ReactDOM.render(
  <div className="stepsExample">
    <WhiteSpace size={20} />
    <WingBlank size={20}>
      <Steps direction="vertical" current={1}>{steps}</Steps>
    </WingBlank>
  </div>
, mountNode);
````
