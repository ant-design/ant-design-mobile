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
          label="蓝色43px按钮"
          mode="blue"
          type="link"
          onClick={function(e){console.log('onChange'); console.log(e);}}
          didMount={function(){}}
        />
      </div>
      <div className="am-whitespace am-whitespace-10"></div>
      <div className="am-wingblank am-wingblank-10">
      <Button
        label="白色43px按钮"
        mode="white"
        type="submit"
        onClick={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
      />
      </div>
      <div className="am-whitespace am-whitespace-10"></div>
      <div className="am-wingblank am-wingblank-10">
      <Button
        label="红色43px按钮"
        mode="red"
        type="link"
        onClick={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
      />
      </div>
      <div className="am-whitespace am-whitespace-10"></div>
      <div className="am-wingblank am-wingblank-10">
      <Button
        label="不可用点按钮"
        mode="blue"
        defaultDisabled={true}
        type="submit"
        onClick={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
      />
      </div>
      <div className="am-whitespace am-whitespace-10"></div>
      <Button
        label="警示按钮"
        mode="warn"
        type="submit"
        onClick={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
      />
      <div className="am-whitespace am-whitespace-10"></div>
      <Button
        label="警示按钮不可点"
        defaultDisabled={true}
        mode="warn"
        type="submit"
        onClick={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
      />
    </div>

, document.getElementById('components-button-demo-basic'));
````
