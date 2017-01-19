---
order: 4
title: 综合示例
---

结合列表的案例参考


````__react
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
      文本内容
    </List.Item>
    <List.Item className="special-badge" extra={<Badge text={'促'} />}>
      文本内容
    </List.Item>
    <List.Item extra="内容内容" arrow="horizontal">
      文本内容<Badge text={'new'} style={{ marginLeft: 12 }} />
    </List.Item>
    <List.Item>
      营销：
      <Badge text="减" hot style={{ marginLeft: 12 }} />
      <Badge text="惠" hot style={{ marginLeft: 12 }} />
      <Badge text="免" hot style={{ marginLeft: 12 }} />
      <Badge text="反" hot style={{ marginLeft: 12 }} />
      <Badge text="HOT" hot style={{ marginLeft: 12 }} />
    </List.Item>
    <List.Item>
      自定义：
      <Badge text={4} style={{ marginLeft: 12 }} />
      <Badge text="券" style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: '#f19736', borderRadius: 2 }} />
      <Badge text="NEW" style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: '#21b68a', borderRadius: 2 }} />
      <Badge text="自动缴费" style={{
        marginLeft: 12,
        padding: '0 0.06rem',
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
````css
.special-badge .am-list-line {
  padding-right: 0;
}
.special-badge .am-list-line .am-list-extra {
  padding: 0;
  height: 100%;
}
.special-badge .am-badge {
  transform: rotate(45deg);
  transform-origin: right bottom;
  right: 0;
  top: 0.26rem;
  width: 1rem;
}
.special-badge .am-badge-text {
  border-radius: 0.02rem;
}
````
