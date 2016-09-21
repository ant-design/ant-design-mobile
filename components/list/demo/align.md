---
order: 2
title: 对齐方式
---

双行列表

````jsx
import { List } from 'antd-mobile';

const Brief = List.Item.Brief;

ReactDOM.render(
  <div>
    <List
      renderHeader={() => '对齐'}
    >
      <List.Item
        extra={<div>内容内容<Brief>辅助文字内容</Brief></div>}
        arrow="horizontal"
        onClick={() => {}}
        multipleLine
      >垂直居中对齐</List.Item>
      <List.Item
        extra="内容内容"
        arrow="horizontal"
        onClick={() => {}}
        multipleLine
      >
        垂直居中对齐
        <Brief>辅助文字内容</Brief>
      </List.Item>
      <List.Item
        extra={<div>内容内容<Brief>辅助文字内容</Brief></div>}
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
    </List>
  </div>
, mountNode);
````
