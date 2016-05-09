---
order: 0
title: 基本用法
---

简单的步骤条。

````jsx
import { Steps } from 'antm';
const Step = Steps.Step;

const steps = [{
  title: '已完成'
}, {
  title: '进行中'
}, {
  title: '又一个待运行'
}].map((s, i) => <Step key={i} title={s.title} description={s.description} />);

ReactDOM.render(<Steps current={1}>{steps}</Steps>, mountNode);
````
