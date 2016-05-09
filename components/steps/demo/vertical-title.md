---
order: 1
title: 垂直的标题
---

垂直的标题。

````jsx
import { Steps } from 'antm';
const Step = Steps.Step;

const steps = [{
  title: '已完成',
  description: '这里是信息的描述'
}, {
  title: '进行中',
  description: '这里是信息的描述'
}, {
  title: '又一个待运行',
  description: '这里是信息的描述'
}].map((s, i) => <Step key={i} title={s.title} description={s.description} />);

ReactDOM.render(<Steps current={1}>{steps}</Steps>, mountNode);
````
