# 基本

- order: 0

Checkbox

---

````jsx
import { ListWrap, ListBody, CheckboxItem} from 'antm';
ReactDOM.render(
  <div>
    <ListWrap >
      <ListBody>
        <CheckboxItem
          name="yyy"
          checked={false}
          onChange={function(e){console.log('onChange'); console.log(e);}}
        >使用优惠</CheckboxItem>
        <CheckboxItem
          name="yyy"
          checked={true}
          onChange={function(e){console.log('onChange'); console.log(e);}}
        >默认选择</CheckboxItem>
        <CheckboxItem
          name="yyy"
          disabled={true}
          checked={true}
          onChange={function(e){console.log('onChange'); console.log(e);}}
        >disabled</CheckboxItem>
      </ListBody>
    </ListWrap>
  </div>
, document.getElementById('components-checkbox-item-demo-basic'));
````
