# 基本

- order: 0

列表主体内容的容器。

---

````jsx
import { ListWrap, ListBody, SwitchItem} from 'antm';

ReactDOM.render(
  <ListWrap>
    <ListBody>
      <SwitchItem
        label="默认开"
        name="yyy"
        defaultChecked={true}
        onChange={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <SwitchItem
        label="默认关"
        name="yyy"
        defaultChecked={false}
        onChange={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
    </ListBody>
  </ListWrap>
, document.getElementById('components-switch-item-demo-basic'));
````
