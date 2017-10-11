---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

Tag 分为两种类型：`selectable` / `readonly`, 后者是无交互的，尺寸更小，通常用于内容展示。

## en-US

There are two kinds of Tag, selectable and readonly type, the latter is a smaller tag without interactive behavior, which is typically used for display content.

````jsx
import { Tag } from 'antd-mobile';

function onChange(selected) {
  console.log(`tag selected: ${selected}`);
}

ReactDOM.render(
  <div className="tag-container">
    <Tag data-seed="logId">Basic</Tag>
    <Tag selected>Selected</Tag>
    <Tag disabled>Disabled</Tag>
    <Tag onChange={onChange}>Callback</Tag>
    <Tag closable
      onClose={() => {
        console.log('onClose');
      }}
      afterClose={() => {
        console.log('afterClose');
      }}
    >
      Closable
    </Tag>
    <Tag small>Small and Readonly</Tag>
  </div>
  , mountNode);
````

````css
.tag-container{
  display: flex;
  padding-top: 9px;
  flex-direction: row;
  flex-wrap: wrap;
}
.tag-container > div {
  margin-left: 9px;
  margin-bottom: 9px;
}
````
