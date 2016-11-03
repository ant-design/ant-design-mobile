---
order: 4
title: 综合示例
---

结合列表的案例参考


````jsx
import { List, Badge } from 'antd-mobile';

ReactDOM.render(
  <List renderHeader={() => ''}>
    <List.Item extra="内容内容" arrow="horizontal">
      <Badge dot>
        <span style={{ width: '0.52rem', height: '0.52rem', background: '#ddd', display: 'inline-block' }} />
      </Badge>
      <span style={{ marginLeft: 12 }}>小圆点</span>
    </List.Item>
    <List.Item
      thumb="https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png"
      extra={<Badge text={77} />}
      arrow="horizontal"
    >
      右侧内容
    </List.Item>
    <List.Item extra="内容内容" arrow="horizontal">
      文本内容<Badge text={'new'} style={{ marginLeft: 12 }} />
    </List.Item>
    <List.Item>
      集合：
      <Badge text={4} style={{ marginLeft: 12 }} />
      <Badge text="券" style={{ marginLeft: 12, padding: '0 6px', backgroundColor: '#f19736', borderRadius: 2 }} />
      <Badge text="NEW" style={{ marginLeft: 12, padding: '0 6px', backgroundColor: '#21b68a', borderRadius: 2 }} />
      <Badge text="自动缴费" style={{
        marginLeft: 12,
        padding: '0 6px',
        backgroundColor: '#fff',
        borderRadius: 2,
        color: '#f19736',
        border: '1px solid #f19736',
      }}
      />
    </List.Item>
    <List.Item extra="内容内容" arrow="horizontal">
      超出99<Badge text={100} style={{ marginLeft: 12 }} />
    </List.Item>
  </List>
, mountNode);
````
