---
order: 4
title: 应用场景示例
---

和 List / Flex 结合使用示例


````jsx
import { Button, Flex, List } from 'antd-mobile';
ReactDOM.render(
  <div className="button-container">
    <div style={{ margin: '32px 8px 8px' }}>
      <Flex>
        <Flex.Item>
          <Button type="primary" size="small">primary按钮</Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="primary" ghost size="small">primary ghost 按钮</Button>
        </Flex.Item>
      </Flex>

      <div style={{ height: 8 }} />

      <Flex>
        <Flex.Item>
          <Button size="small" inline>small</Button>
        </Flex.Item>
      </Flex>
    </div>

    <List >
      <List.Body>
        <List.Item
          extra={<Button type="primary" size="small" inline>small</Button>}
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
  </div>
, mountNode);
````
