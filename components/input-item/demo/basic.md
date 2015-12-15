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
        value="dada22"
        placeholder="dadads"
        clear={true}
        onChange={function(e){console.log('onChange'); console.log(e);}}
        onBlur={function(e){console.log('onBlur'); console.log(e);}}
        onFocus={function(e){console.log('onFocus'); console.log(e);}}
      >我是</InputItem>
      <InputItem
        name="yyy"
        value="dada22"
        placeholder="dadads"
        onChange={function(){}}
      />
      <InputItem
        name="yyy"
        value="dada22"
        placeholder="dadads"
        onChange={function(){}}
      >我是内内</InputItem>
      <InputItem
        name="yyy"
        value="dada22"
        placeholder="dadads"
        clear={true}
        onChange={function(){}}
      >所属门店</InputItem>
      <InputItem
        name="yyy"
        value="dada22"
        placeholder="dadads"
        onChange={function(){}}
      >我是内内内内</InputItem>
    </ListBody>
  </ListWrap>
  <ListWrap>
    <ListBody>
      <InputItem
        name="camera"
        placeholder="camera"
        clear={true}
        icon="camera"
        onIconClick={function(e){console.log(e);}}
        onChange={function(){}}
      >我是相机</InputItem>
      <InputItem
        name="list"
        placeholder="list"
        clear={true}
        icon="list"
        onChange={function(){}}
      >列表</InputItem>
      <InputItem
        name="contacts-mobile"
        placeholder="contacts-mobile"
        clear={true}
        icon="contacts-mobile"
        onChange={function(){}}
      >通讯录</InputItem>
      <InputItem
        name="bill"
        placeholder="bill"
        clear={true}
        icon="bill"
        onChange={function(){}}
      >bill</InputItem>
      <InputItem
        name="contacts-alipay"
        placeholder="contacts-alipay"
        clear={true}
        icon="contacts-alipay"
        onChange={function(){}}
      >支付宝通讯录</InputItem>
      <InputItem
        name="cards"
        placeholder="cards"
        clear={true}
        icon="cards"
        onChange={function(){}}
      >卡片</InputItem>
      <InputItem
        name="calculator"
        placeholder="calculator"
        clear={true}
        icon="calculator"
        onChange={function(){}}
      >日历</InputItem>
      <InputItem
        name="scan"
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
