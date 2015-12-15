# 基本

- order: 0

列表主体内容的容器。

---

````jsx
import { ListWrap, ListBody, InputItem} from 'antm';

ReactDOM.render(
  <div>
  <ListWrap>
    <ListBody>
      <InputItem
        name="yyy"
        defaultValue="dada22"
        placeholder="dadads"
        clear={true}
        onChange={function(e){console.log('onChange'); console.log(e);}}
        onBlur={function(e){console.log('onBlur'); console.log(e);}}
        onFocus={function(e){console.log('onFocus'); console.log(e);}}
      >我是</InputItem>
      <InputItem
        name="yyy"
        defaultValue="dada22"
        placeholder="dadads"
        onChange={function(){}}
      />
      <InputItem
        name="yyy"
        defaultValue="dada22"
        placeholder="dadads"
        onChange={function(){}}
      >我是内内</InputItem>
      <InputItem
        name="yyy"
        defaultValue="dada22"
        placeholder="dadads"
        clear={true}
        onChange={function(){}}
      >所属门店</InputItem>
      <InputItem
        name="yyy"
        defaultValue="dada22"
        placeholder="dadads"
        onChange={function(){}}
      >我是内内内内</InputItem>
    </ListBody>
  </ListWrap>
  <ListWrap>
    <ListBody>
      <InputItem
        name="camera"
        defaultValue=""
        placeholder="camera"
        clear={true}
        icon="camera"
        onIconClick={function(e){console.log(e);}}
        onChange={function(){}}
      >我是相机</InputItem>
      <InputItem
        name="list"
        defaultValue=""
        placeholder="list"
        clear={true}
        icon="list"
        onChange={function(){}}
      >列表</InputItem>
      <InputItem
        name="contacts-mobile"
        defaultValue=""
        placeholder="contacts-mobile"
        clear={true}
        icon="contacts-mobile"
        onChange={function(){}}
      >通讯录</InputItem>
      <InputItem
        name="bill"
        defaultValue=""
        placeholder="bill"
        clear={true}
        icon="bill"
        onChange={function(){}}
      >bill</InputItem>
      <InputItem
        name="contacts-alipay"
        defaultValue=""
        placeholder="contacts-alipay"
        clear={true}
        icon="contacts-alipay"
        onChange={function(){}}
      >支付宝通讯录</InputItem>
      <InputItem
        name="cards"
        defaultValue=""
        placeholder="cards"
        clear={true}
        icon="cards"
        onChange={function(){}}
      >卡片</InputItem>
      <InputItem
        name="calculator"
        defaultValue=""
        placeholder="calculator"
        clear={true}
        icon="calculator"
        onChange={function(){}}
      >日历</InputItem>
      <InputItem
        name="scan"
        defaultValue=""
        placeholder="scan"
        clear={true}
        icon="scan"
        onChange={function(){}}
      >扫码</InputItem>
    </ListBody>
  </ListWrap>
  </div>
, document.getElementById('components-input-item-demo-basic'));
````
