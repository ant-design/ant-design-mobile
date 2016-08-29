---
order: 0
title: 标签类型
---

标签类型分为选择型标签和只读型标签，只读型标签无交互过程，仅展示内容。

````jsx
import { Tag } from 'antd-mobile';

function onChange(selected) {
  console.log(`tag selected: ${selected}`);
}

ReactDOM.render(
  <div className="tag-container" style={{ paddingTop: 18 }}>
    <Tag style={{ marginLeft: 18 }}>通用标签</Tag>
    <Tag style={{ marginLeft: 18, marginRight: 18 }} selected>默认选中</Tag>
    <Tag disabled>失效标签</Tag>
    <Tag style={{ marginLeft: 18 }} onChange={onChange}>事件回调</Tag>
  </div>
, mountNode);
````
