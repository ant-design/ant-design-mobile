# 基本

- order: 0

列表主体内容的容器。

---

````jsx
import { ListWrap, ListBody, InputItem} from 'antm';

ReactDOM.render(
  <div>
  <ListWrap >
    <ListBody>
      <InputItem
        label="我"
        name="yyy"
        value=""
        placeholder="dadads"
        clear={true}
        icon="camera"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{"pic1":"22","pic2":"222"}}
      />
      <InputItem
        label="我是"
        name="yyy"
        value="dada22"
        placeholder="dadads"
        clear={true}
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{"pic1":"22","pic2":"222"}}
      />
      <InputItem
        label="我是内"
        name="yyy"
        value="dada22"
        placeholder="dadads"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{"pic1":"22","pic2":"222"}}
      />
      <InputItem
        label="我是内内"
        name="yyy"
        value="dada22"
        placeholder="dadads"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{"pic1":"22","pic2":"222"}}
      />
      <InputItem
        name="yyy"
        value="dada22"
        placeholder="dadads"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{"pic1":"22","pic2":"222"}}
      />
      <InputItem
        label="我是内内内内"
        name="yyy"
        value="dada22"
        placeholder="dadads"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{"pic1":"22","pic2":"222"}}
      />
    </ListBody>
  </ListWrap>
  </div>
, document.getElementById('components-inputitem-demo-basic'));
````
