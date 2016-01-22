# 基本

- order: 0

Button

---

````jsx
import { Button, WingBlank, WhiteSpace } from 'antm';
ReactDOM.render(
  <div className="button-container">
    <WhiteSpace/>
    <WingBlank>
      <Button onClick={(e) => {console.log('onChange'); console.log(e);}}>主按钮</Button>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button
        disabled={true}
        onClick={(e) => {console.log('onChange'); console.log(e);}}
      >不可点按钮</Button>
    </WingBlank>
    <WhiteSpace mode="20"/>
    <WingBlank>
      <Button
        mode="white"
        onClick={(e) => {console.log('onChange'); console.log(e);}}
      >次按钮</Button>
    </WingBlank>
    <WhiteSpace mode="20"/>
    <WingBlank>
      <Button
        mode="red"
        onClick={(e) => {console.log('onChange'); console.log(e);}}
      >红色按钮</Button>
    </WingBlank>
    <WhiteSpace mode="20"/>
    <WingBlank>
      <Button
        mode="light"
        onClick={(e) => {console.log('onChange'); console.log(e);}}
      >轻按钮</Button>
    </WingBlank>
    <WhiteSpace mode={20}/>
    <Button
      mode="warn"
      onClick={(e) => {console.log('onChange'); console.log(e);}}
    >警示按钮</Button>
    <WhiteSpace/>
    <Button
      disabled={true}
      mode="warn"
      onClick={(e) => {console.log('onChange'); console.log(e);}}
    >警示按钮不可点</Button>
  </div>
, document.getElementById('components-button-demo-basic'));
````
