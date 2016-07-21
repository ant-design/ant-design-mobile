---
order: 3
title: 带图标的步骤条
---

通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。


````jsx
import { Steps, WingBlank, WhiteSpace } from 'antm';
const Step = Steps.Step;

ReactDOM.render(
  <div className="stepsExample">
    <WhiteSpace size={20} />
    <WingBlank size={20}>
      <Steps>
        <Step status="finish" title="步骤1" icon="cloud" />
        <Step status="process" title="步骤2" icon="apple" />
        <Step status="wait" title="步骤3" icon="github" />
      </Steps>
    </WingBlank>
  </div>
, mountNode);
````
<style>
  .demo-preview-wrapper .demo-preview-scroller * {
    box-sizing: border-box;
  }
</style>
