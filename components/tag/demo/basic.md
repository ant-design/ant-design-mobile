---
order: 0
title: 标签类型
---

标签类型分为选择型标签和只读型标签，只读型标签无交互过程，仅展示内容。

````jsx
import { Tag, WingBlank, WhiteSpace } from 'antm';

ReactDOM.render(
  <div className="tag-container">
    <WhiteSpace />
    <WingBlank mode={20}>
      <Tag type="action" size="large">大号标签</Tag>
      <WhiteSpace />
      <Tag type="action" size="small">小号标签</Tag>
      <WhiteSpace />
      <Tag type="read" size="large">只读标签大</Tag>
      <WhiteSpace />
      <Tag type="read" size="small">只读标签小</Tag>
      <WhiteSpace />
    </WingBlank>
    <WhiteSpace />
  </div>
, mountNode);
````
