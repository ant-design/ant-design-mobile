---
order: 2
title: 对齐
---

双行列表

````jsx
import { List, Button } from 'antm';

ReactDOM.render(
  <div>
    <List >
      <List.Header>对齐</List.Header>
      <List.Body>
        <List.Item
          extra={<div>内容内容<div className="am-list-brief">辅助文字内容</div><div className="am-list-brief">辅助文字内容</div></div>}
          arrow="horizontal"
        >垂直居中对齐</List.Item>
        <List.Item
          extra="内容内容"
          arrow="horizontal"
        ><div>垂直居中对齐<div className="am-list-brief">辅助文字内容</div><div className="am-list-brief">辅助文字内容</div></div></List.Item>
        <List.Item
          extra={<div>内容内容<div className="am-list-brief">辅助文字内容</div><div className="am-list-brief">辅助文字内容</div></div>}
          arrow="horizontal"
          align="top"
        >顶部对齐</List.Item>
        <List.Item
          extra="内容内容"
          arrow="horizontal"
          align="top"
        ><div>顶部对齐<div className="am-list-brief">辅助文字内容</div></div></List.Item>
        <List.Item
          extra={<div>内容内容<div className="am-list-brief">辅助文字内容</div></div>}
          arrow="horizontal"
          align="bottom"
        >底部对齐</List.Item>
        <List.Item
          extra="内容内容"
          arrow="horizontal"
          align="bottom"
        ><div>底部对齐<div className="am-list-brief">辅助文字内容</div></div></List.Item>
        <List.Item
          extra={<Button
            size="small"
            inline
            onClick={() => {alert(111);}}
            >按钮</Button>}
        ><div><div className="am-list-title">区域经理</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></div></List.Item>
      </List.Body>
    </List>
  </div>
, mountNode);
````
