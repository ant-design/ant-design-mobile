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
        name="yyy"
        defaultChecked={true}
        onChange={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      >默认开</SwitchItem>
      <SwitchItem
        name="yyy"
        defaultChecked={false}
        onChange={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      >默认关</SwitchItem>
    </ListBody>
  </ListWrap>
, document.getElementById('components-switch-item-demo-basic'));
````
