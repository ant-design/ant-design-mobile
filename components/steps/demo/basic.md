---
order: 0
title:
  zh-CN: 步骤条
  en-US: Steps
---


````jsx
/* eslint global-require: 0 */
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';

const Step = Steps.Step;

const customIcon = <img src="https://gw.alipayobjects.com/zos/rmsportal/hsDpIpVTdVdhfvcLseyy.svg" className="am-icon am-icon-md" alt="icon" />;

ReactDOM.render(
  <WingBlank size="lg">
    <div className="sub-title">Small size</div>
    <WhiteSpace />
    <Steps size="small" current={1}>
      <Step title="Finished" description="This is description" />
      <Step title="In Progress" description="This is description" />
      <Step title="Waiting" description="This is description" />
    </Steps>
    <div className="sub-title">Small size, single line text</div>
    <WhiteSpace />
    <Steps size="small" current={1}>
      <Step title="Finished" />
      <Step title="In Progress" />
      <Step title="Waiting" />
    </Steps>
    <div className="sub-title">Default size</div>
    <WhiteSpace size="lg" />
    <Steps>
      <Step status="process" title="Finished" description="This is description" />
      <Step status="error" title="Error" description="This is description" />
      <Step title="Waiting" description="This is description" />
    </Steps>

    <div className="sub-title">Customized status </div>
    <WhiteSpace size="lg" />
    <Steps>
      <Step status="finish" title="Step 1" icon={customIcon} />
      <Step status="process" title="Step 2" icon={customIcon} />
      <Step status="error" title="Step 3" icon={customIcon} />
    </Steps>

    <div className="sub-title">Customized icon </div>
    <WhiteSpace size="lg" />
    <Steps current={1}>
      <Step title="Step 1" icon={customIcon} description="This is description" />
      <Step title="Step 2" icon={customIcon} description="This is description" />
      <Step title="Step 3" icon={customIcon} description="This is description" />
    </Steps>

    <div className="sub-title">Multiple steps </div>
    <WhiteSpace size="lg" />
    <Steps current={1}>
      <Step title="Step 1" icon={customIcon} />
      <Step title="Step 2" icon={customIcon} />
      <Step title="Step 3" status="error" icon={customIcon} />
      <Step title="Step 4" icon={customIcon} />
    </Steps>
  </WingBlank>
  , mountNode);
````

````css
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
}
````
