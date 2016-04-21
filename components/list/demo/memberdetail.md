---
order: 2
title: 员工详情
---

最简单的用法。

---

````jsx
import { List } from 'antm';

ReactDOM.render(
  <div>
  <List >
    <List.Body>
      <List.Item
        link="http://www.baidu.com"
        extra="鹿港小镇"
        arrow="horizontal"
      >所属门店</List.Item>
      <List.Item
        extra="张三"
      >员工姓名</List.Item>
      <List.Item
        extra="收银员"
      >员工角色</List.Item>
      <List.Item
        extra="13838383756"
      >员工手机</List.Item>
      <List.Item
        extra="只可退自己的"
      >退款权限</List.Item>
      <List.Item
        content="其他权限"
        arrow="horizontal"
      >文本信息</List.Item>
      <List.Item
        extra={<img src="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg" width="29" height="29"/>}
        arrow="horizontal"
      >员工二维码</List.Item>
      <List.Item
        extra={<div><div className="am-list-title">zhifubao@alipay.com#</div><div className="am-list-brief">001</div></div>}
        line={2}
        arrow="horizontal"
      >垂直居中对齐</List.Item>
      <List.Item
        extra={<div><div className="am-list-title">zhifubao@alipay.com#</div><div className="am-list-brief">001</div></div>}
        line={2}
        arrow="horizontal"
        align="top"
      >顶部对齐</List.Item>
      <List.Item
        extra={<div><div className="am-list-title">zhifubao@alipay.com#</div><div className="am-list-brief">001</div></div>}
        line={2}
        arrow="horizontal"
        align="bottom"
      >底部对齐</List.Item>
      <List.Item
        extra={<div><div className="am-list-title">zhifubao@alipay.com#</div><div className="am-list-brief">001</div></div>}
        line={2}
        arrow="horizontal"
        align="top"
      ><div className="am-list-title am-list-multiline">zhifubao@alipay.com#zh#</div></List.Item>
    </List.Body>
  </List>
  </div>
, mountNode);
````
