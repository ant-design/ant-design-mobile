# 员工详情

- order: 2

最简单的用法。

---

````jsx
import { ListWrap, ListBody, ListItem} from 'antm';

ReactDOM.render(
  <div>
  <ListWrap >
    <ListBody>
      <ListItem
        link="http://www.baidu.com"
        extra="鹿港小镇"
        arrow="horizontal"
      >所属门店</ListItem>
      <ListItem
        extra="张三"
      >员工姓名</ListItem>
      <ListItem
        extra="收银员"
      >员工角色</ListItem>
      <ListItem
        extra="13838383756"
      >员工手机</ListItem>
      <ListItem
        extra="只可退自己的"
      >退款权限</ListItem>
      <ListItem
        content="其他权限"
        arrow="horizontal"
      >文本信息</ListItem>
      <ListItem
        extra={<img src="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg" width="29" height="29"/>}
        arrow="horizontal"
      >员工二维码</ListItem>
      <ListItem
        extra={<div><div className="am-list-title">zhifubao@alipay.com#</div><div className="am-list-brief">001</div></div>}
        line={2}
        arrow="horizontal"
      >账户名</ListItem>
    </ListBody>
  </ListWrap>
  </div>
, document.getElementById('components-list-item-demo-memberdetail'));
````
