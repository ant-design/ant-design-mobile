---
order: 1
title: 标签失效状态
---

添加 disabled 属性即可让标签处于不可用状态，同时标签样式也会改变。

````jsx
import { Tag, WingBlank, WhiteSpace } from 'antd-mobile';

ReactDOM.render(
  <div className="tag-container">
    <WhiteSpace />
    <WingBlank size={20}>
      <Tag type="action" disabled>不可点大标签</Tag>
      <WhiteSpace />
      <Tag type="action" size="small" disabled>不可点小标签</Tag>
      <WhiteSpace />
    </WingBlank>
    <WhiteSpace />
  </div>
, mountNode);
````
