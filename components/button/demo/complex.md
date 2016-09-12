---
order: 1
title: 应用场景示例
---

和 List / Flex 结合使用示例


````jsx
import { Button, List } from 'antd-mobile';

ReactDOM.render(
  <List style={{ margin: '10px 0', backgroundColor: 'white' }}>
    <List.Body>
      <List.Item
        extra={<Button type="ghost" size="small" inline>small</Button>}
        multipleLine
      >
        区域经理
        <List.Item.Brief>可进行收款、退款、折扣管理、查看数据等操作</List.Item.Brief>
      </List.Item>
      <List.Item
        extra={<Button size="small" inline>small</Button>}
        multipleLine
      >
        区域经理
        <List.Item.Brief>可进行收款、退款、折扣管理、查看数据等操作</List.Item.Brief>
      </List.Item>
    </List.Body>
  </List>
, mountNode);
````
