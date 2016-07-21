---
order: 4
title: 点状的步骤条
---

点状的步骤条。


````jsx
import { Steps, WingBlank, WhiteSpace } from 'antm';
const Step = Steps.Step;

ReactDOM.render(
  <div className="stepsExample">
  <WhiteSpace size={20} />
  <WingBlank size={20}>
    <Steps size="pointer">
      <Step status="finish" title="步骤1" icon="pointer" />
      <Step status="process" title="步骤2" icon="pointer" />
      <Step status="wait" title="步骤3" icon="pointer" />
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
