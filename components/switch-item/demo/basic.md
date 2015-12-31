# 基本

- order: 0

列表主体内容的容器。

---

````jsx
import { List, SwitchItem} from 'antm';

ReactDOM.render(
  <List>
    <List.Body>
      <SwitchItem
        name="yyy"
        checked={true}
        onChange={function(e){console.log('onChange'); console.log(e);}}
      >默认开</SwitchItem>
      <SwitchItem
        name="yyy"
        checked={false}
        onChange={function(e){console.log('onChange'); console.log(e);}}
      >默认关</SwitchItem>
    </List.Body>
  </List>
, document.getElementById('components-switch-item-demo-basic'));
````
