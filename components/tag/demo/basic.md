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
  <div className="tag-container">
    <Tag>通用标签</Tag>
    <Tag selected>默认选中</Tag>
    <Tag disabled>失效标签</Tag>
    <Tag onChange={onChange}>事件回调</Tag>
  </div>
, mountNode);
````
````css
.tag-container{
  display: flex;
  padding-top: 0.18rem;
  flex-direction: row;
  flex-wrap: wrap;
}
.tag-container > div {
  margin-left: 0.18rem;
  margin-bottom: 0.18rem;
}
````
