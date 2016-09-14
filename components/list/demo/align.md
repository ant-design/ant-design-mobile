---
order: 3
title: 对齐方式
---

双行列表

````jsx
import { List, Button } from 'antd-mobile';

const Brief = List.Item.Brief;

ReactDOM.render(
  <div>
    <List title="对齐">
      <List.Item
        extra={<div>内容内容<Brief>辅助文字内容</Brief><Brief>辅助文字内容</Brief></div>}
        arrow="horizontal"
        onClick={() => {}}
        multipleLine
      >垂直居中对齐</List.Item>
      <List.Item
        extra="内容内容"
        arrow="horizontal"
        onClick={() => {}}
        multipleLine
      ><div>垂直居中对齐<Brief>辅助文字内容</Brief><Brief>辅助文字内容</Brief></div></List.Item>
      <List.Item
        extra={<div>内容内容<Brief>辅助文字内容</Brief><Brief>辅助文字内容</Brief></div>}
        arrow="horizontal"
        align="top"
        onClick={() => {}}
        multipleLine
      >顶部对齐</List.Item>
      <List.Item
        extra="内容内容"
        arrow="horizontal"
        align="top"
        onClick={() => {}}
        multipleLine
      ><div>顶部对齐<Brief>辅助文字内容</Brief></div></List.Item>
      <List.Item
        extra={<div>内容内容<Brief>辅助文字内容</Brief></div>}
        arrow="horizontal"
        align="bottom"
        onClick={() => {}}
        multipleLine
      >底部对齐</List.Item>
      <List.Item
        extra="内容内容"
        arrow="horizontal"
        align="bottom"
        onClick={() => {}}
        multipleLine
      ><div>底部对齐<Brief>辅助文字内容</Brief></div></List.Item>
      <List.Item
        extra={<Button
          size="small"
          inline
          onClick={() => alert(111)}
        >按钮</Button>}
        multipleLine
      ><div><div>区域经理</div><Brief>可进行收款、退款、折扣管理、查看数据等操作</Brief></div></List.Item>
    </List>
  </div>
, mountNode);
````
