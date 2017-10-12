---
order: 0
title:
  zh-CN: 步骤条
  en-US: Steps
---


````jsx
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';

const Step = Steps.Step;

const customIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="am-icon am-icon-md">
    <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
      <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
      <path fill="#FFF" d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z" />
    </g>
  </svg>
);

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
      <Step status="finish" title="Step 1" icon={customIcon()} />
      <Step status="process" title="Step 2" icon={customIcon()} />
      <Step status="error" title="Step 3" icon={customIcon()} />
    </Steps>

    <div className="sub-title">Customized icon </div>
    <WhiteSpace size="lg" />
    <Steps current={1}>
      <Step title="Step 1" icon={customIcon()} description="This is description" />
      <Step title="Step 2" icon={customIcon()} description="This is description" />
      <Step title="Step 3" icon={customIcon()} description="This is description" />
    </Steps>

    <div className="sub-title">Multiple steps </div>
    <WhiteSpace size="lg" />
    <Steps current={1}>
      <Step title="Step 1" icon={customIcon()} />
      <Step title="Step 2" icon={customIcon()} />
      <Step title="Step 3" status="error" icon={customIcon()} />
      <Step title="Step 4" icon={customIcon()} />
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
