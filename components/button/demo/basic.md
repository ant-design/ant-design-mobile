# 基本

- order: 0

Button

---

````jsx
import { Button} from 'antm';
ReactDOM.render(
    <div>
      <div className="am-whitespace am-whitespace-10"></div>
      <div className="am-wingblank am-wingblank-10">
        <Button
          mode="blue"
          type="link"
          onClick={function(e){console.log('onChange'); console.log(e);}}
          didMount={function(){}}
        >蓝色43px按钮</Button>
      </div>
      <div className="am-whitespace am-whitespace-10"></div>
      <div className="am-wingblank am-wingblank-10">
      <Button
        mode="white"
        type="submit"
        onClick={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
      >白色43px按钮</Button>
      </div>
      <div className="am-whitespace am-whitespace-10"></div>
      <div className="am-wingblank am-wingblank-10">
      <Button
        mode="red"
        type="link"
        onClick={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
      >红色43px按钮</Button>
      </div>
      <div className="am-whitespace am-whitespace-10"></div>
      <div className="am-wingblank am-wingblank-10">
      <Button
        mode="blue"
        defaultDisabled={true}
        type="submit"
        onClick={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
      >不可用点按钮</Button>
      </div>
      <div className="am-whitespace am-whitespace-10"></div>
      <Button
        mode="warn"
        type="submit"
        onClick={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
      >警示按钮</Button>
      <div className="am-whitespace am-whitespace-10"></div>
      <Button
        defaultDisabled={true}
        mode="warn"
        type="submit"
        onClick={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
      >警示按钮不可点</Button>
    </div>

, document.getElementById('components-button-demo-basic'));
````
