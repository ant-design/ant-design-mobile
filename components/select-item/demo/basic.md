# 基本

- order: 0

列表主体内容的容器。

---

````jsx
import { List, SelectItem} from 'antm';

ReactDOM.render(
  <div>
  <List>
    <List.Body>
      <SelectItem
        label="我是"
        name="yyy"
        align="right"
        value="2"
        options={[{val:'1', txt:'文本内容1'}, {val:'2', txt:'文本内容2'}, {val:'3', txt:'文本内容3'}]}
        onChange={function(e){console.log('onChange'); console.log(e);}}
      />
      <SelectItem
        name="yyy22"
        value="3"
        options={[{val:'1', txt:'文本内容1'}, {val:'2', txt:'文本内容2'}, {val:'3', txt:'文本内容3'}]}
        onChange={function(e){console.log('onChange'); console.log(e);}}
      />
    </List.Body>
  </List>
  </div>
, document.getElementById('components-select-item-demo-basic'));
````
