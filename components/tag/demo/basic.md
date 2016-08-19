---
order: 0
title: 标签类型
---

标签类型分为选择型标签和只读型标签，只读型标签无交互过程，仅展示内容。

````jsx
import { Tag, WingBlank, WhiteSpace } from 'antd-mobile';

function onChange(selected) {
  console.log(`tag selected: ${selected}`);
}

ReactDOM.render(
  <div className="tag-container">
    <WhiteSpace />
    <WingBlank size={20}>
      <Tag>通用标签</Tag>
      <WhiteSpace />
      <Tag disabled>失效标签</Tag>
      <WhiteSpace />
      <Tag selected>默认选中</Tag>
      <WhiteSpace />
      <Tag onChange={onChange}>事件回调</Tag>
    </WingBlank>
    <WhiteSpace />
  </div>
, mountNode);
````
