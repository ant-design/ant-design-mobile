# 添加店长

- order: 2

列表主体内容的容器。

---

````jsx
import { ListWrap, ListBody, ListFooter, InputItem, ListItem, Button} from 'antm';

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
      <InputItem
        label="用户名"
        name="yyy"
        clear={true}
        placeholder="用作账户名的后缀名"
      />
    </ListBody>
    <ListFooter onClick={function(e){console.log(e);}}>
      账户名：<span style={{'color':'red'}}>zhifubao@alipay.com#用户名</span>
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
        <InputItem
          label="邮箱地址"
          name="yyy"
          clear={true}
          placeholder="选填"
        />
        <ListItem
          link="http://www.baidu.com"
          content="员工权限"
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
, document.getElementById('components-input-item-demo-addmember2'));
````
