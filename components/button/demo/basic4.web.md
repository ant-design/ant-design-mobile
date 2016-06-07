---
order: 4
title: 应用场景示例
---

和 List / Flex 结合使用示例

---

````jsx
import { Button, Flex, List, WingBlank, WhiteSpace } from 'antm';
ReactDOM.render(
  <div className="button-container">
    <WhiteSpace />
    <WingBlank>
      <Flex>
        <Flex.Item>
          <Button type="primary" size="small">primary按钮</Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="primary" ghost size="small">primary ghost 按钮</Button>
        </Flex.Item>
      </Flex>
    </WingBlank>
    <WhiteSpace />
    <WingBlank>
      <Flex>
        <Flex.Item>
          <Button size="small" inline>small</Button>
        </Flex.Item>
      </Flex>
    </WingBlank>
    <WhiteSpace />
    <List >
      <List.Body>
        <List.Item line={2}
          extra={<Button type="primary" size="small" inline>small</Button>}
        >
          <div className="am-list-title">区域经理</div>
          <div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div>
        </List.Item>
        <List.Item line={2}
          extra={<Button size="small" inline>small</Button>}
        >
          <div className="am-list-title">区域经理</div>
          <div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div>
        </List.Item>
      </List.Body>
  </List>
  </div>
, mountNode);
````
