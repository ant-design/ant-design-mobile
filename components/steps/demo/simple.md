---
order: 1
title: 基本用法
---

简单的步骤条。


````jsx
import { Steps, WingBlank, WhiteSpace } from 'antm';
const Step = Steps.Step;

const steps = [{
  title: '已完成'
}, {
  title: '进行中'
}, {
  title: '待运行'
}].map((s, i) => <Step key={i} title={s.title} description={s.description} />);

ReactDOM.render(
  <div className="stepsExample">
    <WhiteSpace mode={20} />
    <WingBlank mode={20}>
    <Steps current={1} size="point">{steps}</Steps>
    </WingBlank>
  </div>
, mountNode);
````

<style>
  .code-box-demo .stepsExample {
  }
</style>
