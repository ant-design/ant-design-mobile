---
order: 0
title: 标签类型
---

标签分为选择型标签和只读型标签，只读型标签为小标签无交互过程，仅展示内容。

````__react
import { Tag } from 'antd-mobile';

function onChange(selected) {
  console.log(`tag selected: ${selected}`);
}

ReactDOM.render(
  <div className="tag-container">
    <Tag data-seed="logId">通用标签</Tag>
    <Tag selected>默认选中</Tag>
    <Tag disabled>失效标签</Tag>
    <Tag onChange={onChange}>事件回调</Tag>
    <Tag closable onClose={() => {
      console.log('onClose');
    }} afterClose={() => {
      console.log('afterClose');
    }}
    >
      可关闭标签
    </Tag>
    <Tag small>小号只读标签</Tag>
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
