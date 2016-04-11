---
order: 0
title: 基本
---

Button

---

````jsx
import { Button, WingBlank, WhiteSpace } from 'antm';
ReactDOM.render(
  <div className="button-container">
    <WhiteSpace/>
    <WingBlank>
      <Button type="primary">primary按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button type="primary" ghost>primary ghost 按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button>default 按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button ghost>default ghost 按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button type="warning">warning按钮</Button>
    </WingBlank>

    <WhiteSpace/>
    <WingBlank>
      <Button type="primary" disabled>primary 按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button type="primary" ghost disabled>primary ghost 按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button disabled>default disabled 按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button ghost disabled>default ghost disabled 按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button type="warning" disabled>warning disabled 按钮</Button>
    </WingBlank>
  </div>
, document.getElementById('components-button-demo-basic'));
````
