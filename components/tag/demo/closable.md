---
order: 3
title: 可关闭标签
---

添加 closeable 属性可以让标签项消失，当手势点击到整个标签的热区时，该标签项就被删除。

````jsx
import { Tag, WingBlank, WhiteSpace } from 'antm';

function onClose() {
  console.log('tag closing');
}

function afterClose() {
  console.log('tag closed');
}

function onChange(selected) {
  console.log(`tag selected: ${selected}`);
}

ReactDOM.render(
  <div className="tag-container">
    <WhiteSpace />
    <WingBlank mode={20}>
      <Tag type="action" size="large" closable>可关闭标签</Tag>
      <WhiteSpace />
      <Tag
        type="action"
        size="large"
        closable
        onClose={onClose}
        onChange={onChange}
        afterClose={afterClose}>事件</Tag>
    </WingBlank>
    <WhiteSpace />
  </div>
, mountNode);
````
