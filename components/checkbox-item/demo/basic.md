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
          label="使用优惠"
          name="yyy"
          defaultValue={false}
          onChange={function(e){console.log('onChange'); console.log(e);}}
          didMount={function(){}}
        />
      </ListBody>
    </ListWrap>
  </div>
, document.getElementById('components-checkbox-item-demo-basic'));
````
