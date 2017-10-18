---
order: 1
title: 应用场景示例
---

examples with List / Flex

````jsx
import { Button, List } from 'antd-mobile';

const ComplexButtonDemo = () => (
  <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
    <List.Item
      extra={<Button type="ghost" size="small" inline>small</Button>}
      multipleLine
    >
      Regional manager
      <List.Item.Brief>
        Can be collected, refund, discount management, view data and other operations
      </List.Item.Brief>
    </List.Item>
    <List.Item
      extra={<Button type="primary" size="small" inline>small</Button>}
      multipleLine
    >
      Regional manager
      <List.Item.Brief>
        Can be collected, refund, discount management, view data and other operations
      </List.Item.Brief>
    </List.Item>
  </List>
);

ReactDOM.render(<ComplexButtonDemo />, mountNode);
````
