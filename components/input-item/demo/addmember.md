# 添加收银员

- order: 1

列表主体内容的容器。

---

````jsx
import { ListWrap, ListBody, ListFooter, InputItem, ListItem, Button, SelectItem} from 'antm';

ReactDOM.render(
  <div>
  <ListWrap>
    <ListBody>
      <ListItem
        link="http://www.baidu.com"
        content="所属门店"
        extra="请选择"
        arrow="horizontal"
      />
      <InputItem
        label="员工姓名"
        name="yyy"
        clear={true}
        placeholder="真实姓名或昵称"
      />
    </ListBody>
    <ListFooter onClick={function(e){console.log(e);}}>
      账户名：<span style={{'color':'red'}}>zhifubao@alipay.com#001</span>
    </ListFooter>
  </ListWrap>
  <ListWrap>
      <ListBody>
        <InputItem
          label="员工手机"
          name="yyy"
          clear={true}
          placeholder="请填写该员工的手机号码"
        />
        <SelectItem
          label="退款权限"
          name="yyy"
          align="right"
          defaultValue="0"
          options={[{val:'0', txt:'请选择'}, {val:'1', txt:'不允许退款'}, {val:'2', txt:'可退门店所有交易'}, {val:'3', txt:'只可退自己收的'}]}
          onChange={function(e){console.log('onChange'); console.log(e);}}
        />
        <ListItem
          link="http://www.baidu.com"
          content="其他权限"
          arrow="horizontal"
        />
      </ListBody>
      <ListFooter onClick={function(e){console.log(e);}} style={{'textAlign':'center'}}>拥有退款权限的员工可在交易创建后3天内发起退款</ListFooter>
    </ListWrap>
    <div className="am-wingblank am-wingblank-10">
      <Button
        label="确认添加"
        mode="blue"
        type="link"
      />
    </div>
  </div>
, document.getElementById('components-input-item-demo-addmember'));
````
