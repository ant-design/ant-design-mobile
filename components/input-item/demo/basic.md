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
        label="我是"
        name="yyy"
        defaultValue="dada22"
        placeholder="dadads"
        clear={true}
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="我是内"
        name="yyy"
        defaultValue="dada22"
        placeholder="dadads"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="我是内内"
        name="yyy"
        defaultValue="dada22"
        placeholder="dadads"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        name="yyy"
        defaultValue="dada22"
        placeholder="dadads"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="我是内内内内"
        name="yyy"
        defaultValue="dada22"
        placeholder="dadads"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
    </ListBody>
  </ListWrap>
  <ListWrap >
    <ListBody>
      <InputItem
        label="我"
        name="yyy"
        defaultValue=""
        placeholder="dadads"
        clear={true}
        icon="camera"
        onIconClick={function(e){alert(111);}}
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="我"
        name="yyy"
        defaultValue=""
        placeholder="dadads"
        clear={true}
        icon="list"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="我"
        name="yyy"
        defaultValue=""
        placeholder="dadads"
        clear={true}
        icon="contacts-mobile"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="我"
        name="yyy"
        defaultValue=""
        placeholder="dadads"
        clear={true}
        icon="bill"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="我"
        name="yyy"
        defaultValue=""
        placeholder="dadads"
        clear={true}
        icon="contacts-alipay"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="我"
        name="yyy"
        defaultValue=""
        placeholder="dadads"
        clear={true}
        icon="cards"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="我"
        name="yyy"
        defaultValue=""
        placeholder="dadads"
        clear={true}
        icon="calculator"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="我"
        name="yyy"
        defaultValue=""
        placeholder="dadads"
        clear={true}
        icon="scan"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
    </ListBody>
  </ListWrap>
  </div>
, document.getElementById('components-input-item-demo-basic'));
````
