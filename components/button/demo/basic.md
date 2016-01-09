# 基本

- order: 0

Button

---

````jsx
import { Button} from 'antm';
ReactDOM.render(
  <div className="button-container">
    <div className="am-whitespace am-whitespace-10"></div>
    <div className="am-wingblank am-wingblank-10">
      <Button onClick={function(e){console.log('onChange'); console.log(e);}}>主按钮</Button>
    </div>
    <div className="am-whitespace am-whitespace-10"></div>
    <div className="am-wingblank am-wingblank-10">
      <Button
        disabled={true}
        onClick={function(e){console.log('onChange'); console.log(e);}}
      >不可点按钮</Button>
    </div>
    <div className="am-whitespace am-whitespace-20"></div>
    <div className="am-wingblank am-wingblank-10">
      <Button
        mode="white"
        onClick={function(e){console.log('onChange'); console.log(e);}}
      >次按钮</Button>
    </div>
    <div className="am-whitespace am-whitespace-20"></div>
    <div className="am-wingblank am-wingblank-10">
      <Button
        mode="red"
        onClick={function(e){console.log('onChange'); console.log(e);}}
      >红色按钮</Button>
    </div>
    <div className="am-whitespace am-whitespace-20"></div>
    <div className="am-wingblank am-wingblank-10">
      <Button
        mode="light"
        onClick={function(e){console.log('onChange'); console.log(e);}}
      >轻按钮</Button>
    </div>
    <div className="am-whitespace am-whitespace-20"></div>
    <div className="am-whitespace am-whitespace-10"></div>
      <Button
        mode="warn"
        onClick={function(e){console.log('onChange'); console.log(e);}}
      >警示按钮</Button>
    <div className="am-whitespace am-whitespace-10"></div>
      <Button
        disabled={true}
        mode="warn"
        onClick={function(e){console.log('onChange'); console.log(e);}}
      >警示按钮不可点</Button>
  </div>
, document.getElementById('components-button-demo-basic'));
````
