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
        onChange={function(e){console.log('onChange'); console.log(e);}}
        onBlur={function(e){console.log('onBlur'); console.log(e);}}
        onFocus={function(e){console.log('onFocus'); console.log(e);}}
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
        clear={true}
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
        label="我是相机"
        name="camera"
        defaultValue=""
        placeholder="camera"
        clear={true}
        icon="camera"
        onIconClick={function(e){console.log(e);}}
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="列表"
        name="list"
        defaultValue=""
        placeholder="list"
        clear={true}
        icon="list"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="通讯录"
        name="contacts-mobile"
        defaultValue=""
        placeholder="contacts-mobile"
        clear={true}
        icon="contacts-mobile"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="bill"
        name="bill"
        defaultValue=""
        placeholder="bill"
        clear={true}
        icon="bill"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="支付宝通讯录"
        name="contacts-alipay"
        defaultValue=""
        placeholder="contacts-alipay"
        clear={true}
        icon="contacts-alipay"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="卡片"
        name="cards"
        defaultValue=""
        placeholder="cards"
        clear={true}
        icon="cards"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="日历"
        name="calculator"
        defaultValue=""
        placeholder="calculator"
        clear={true}
        icon="calculator"
        onChange={function(){}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <InputItem
        label="扫码"
        name="scan"
        defaultValue=""
        placeholder="scan"
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
