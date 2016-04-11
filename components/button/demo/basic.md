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
      <Button onClick={(e) => {console.log('onChange'); console.log(e);}}>primary按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button
        type="secondary"
        onClick={(e) => {console.log('onChange'); console.log(e);}}
      >secondary按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button
        type="normal"
        onClick={(e) => {console.log('onChange'); console.log(e);}}
      >normal按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button
        type="warning"
        onClick={(e) => {console.log('onChange'); console.log(e);}}
      >warning按钮</Button>
    </WingBlank>

    <WhiteSpace/>
    <WingBlank>
      <Button
       disabled={true}
       onClick={(e) => {console.log('onChange'); console.log(e);}}
       >primary按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button
        type="secondary"
        disabled={true}
        onClick={(e) => {console.log('onChange'); console.log(e);}}
      >secondary按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button
        type="normal"
        disabled={true}
        onClick={(e) => {console.log('onChange'); console.log(e);}}
      >normal按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button
        type="warning"
        disabled={true}
        onClick={(e) => {console.log('onChange'); console.log(e);}}
      >warning按钮</Button>
    </WingBlank>
  </div>
, document.getElementById('components-button-demo-basic'));
````
