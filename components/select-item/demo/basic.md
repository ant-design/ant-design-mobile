# 基本

- order: 0

列表主体内容的容器。

---

````jsx
import { ListWrap, ListBody, SelectItem} from 'antm';

ReactDOM.render(
  <div>
  <ListWrap >
    <ListBody>
      <SelectItem
        label="我是"
        name="yyy"
        align="right"
        defaultValue="2"
        options={[{val:'1', txt:'文本内容1'}, {val:'2', txt:'文本内容2'}, {val:'3', txt:'文本内容3'}]}
        onChange={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <SelectItem
        name="yyy22"
        defaultValue="3"
        options={[{val:'1', txt:'文本内容1'}, {val:'2', txt:'文本内容2'}, {val:'3', txt:'文本内容3'}]}
        onChange={function(e){console.log('onChange'); console.log(e);}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
    </ListBody>
  </ListWrap>
  </div>
, document.getElementById('components-select-item-demo-basic'));
````
