---
order: 4
title: 业务示例
---

一个业务上使用的示例。

````jsx
import { List } from 'antd-mobile';

ReactDOM.render(
  <div>
    <List>
      <List.Body>
        <List.Item
          extra="鹿港小镇"
          arrow="horizontal"
          onClick={() => {}}
        >所属门店</List.Item>
        <List.Item
          extra="张三"
          arrow="empty"
          onClick={() => {}}
        >员工姓名</List.Item>
        <List.Item
          extra="收银员"
          arrow="empty"
          onClick={() => {}}
        >员工角色</List.Item>
        <List.Item
          extra="13838383756"
          arrow="empty"
          onClick={() => {}}
        >员工手机</List.Item>
        <List.Item
          extra="只可退自己的"
          arrow="empty"
          onClick={() => {}}
        >退款权限</List.Item>
        <List.Item
          extra="其他权限"
          arrow="horizontal"
          onClick={() => {}}
        >文本信息</List.Item>
        <List.Item
          extra={<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAm0lEQVR4Ae2Whw0DMQwD5Q24gfbfRTslaPlGCGb6vyAe2tdzty1uArAlyz2RMgJLoggsSTUBfUwCSkD49jKCFnhgYegCaZgSIAGlokCHBDk1BR6YspMteHIfRqWbhMc714Y/aMF/Bdgw5mJh5HgmU2u2qITatEAQCEvCe53cp+v3T9ct0E92HH01bcGlBIEVRfDWMGUBU0aQ04I7BEwkp1QhR1sAAAAASUVORK5CYII=" />}
          arrow="horizontal"
          onClick={() => {}}
        >员工二维码</List.Item>
        <List.Item
          extra={<div>zhifubao@alipay.com#<List.Item.Brief>001</List.Item.Brief></div>}
          arrow="horizontal"
          onClick={() => {}}
          multipleLine
        >垂直居中对齐</List.Item>
        <List.Item
          extra={<div>zhifubao@alipay.com#<List.Item.Brief>001</List.Item.Brief></div>}
          arrow="horizontal"
          align="top"
          onClick={() => {}}
          multipleLine
        >顶部对齐</List.Item>
        <List.Item
          extra={<div>zhifubao@alipay.com#<List.Item.Brief>001</List.Item.Brief></div>}
          arrow="horizontal"
          align="bottom"
          onClick={() => {}}
          multipleLine
        >底部对齐</List.Item>
        <List.Item
          extra={<div>zhifubao@alipay.com#<List.Item.Brief>001</List.Item.Brief></div>}
          arrow="horizontal"
          align="top"
          onClick={() => {}}
          multipleLine
        >zhifubao@alipay.com#zh</List.Item>
      </List.Body>
    </List>
  </div>
, mountNode);
````
